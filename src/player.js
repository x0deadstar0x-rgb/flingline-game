// Player: capsule physics body, low-poly avatar, 3rd/1st person camera.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, raycast, clamp, tv } from './core.js';
import { buildHumanoid, poseHumanoid } from './dummy.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { updateViewmodel, equipViewmodel, setViewmodelSkin } from './viewmodel.js';
import { profileLook } from './look.js';

export const SPAWN = new THREE.Vector3(0, 1.2, 34);
const STAND = 0.9; // body centre height above the ground when standing

// highest ground under the player: centre, four sides and one point ahead (in the direction of travel)
const _o = new THREE.Vector3(), _e = new THREE.Vector3();
function groundProbe(p, v) {
  const hs = Math.hypot(v.x, v.z);
  const ax = hs > 0.5 ? (v.x / hs) * 0.32 : 0, az = hs > 0.5 ? (v.z / hs) * 0.32 : 0;
  let best = null;
  for (const [dx, dz] of [[0, 0], [0.2, 0], [-0.2, 0], [0, 0.2], [0, -0.2], [ax, az]]) {
    _o.set(p.x + dx, p.y - 0.25, p.z + dz);
    _e.set(p.x + dx, p.y - STAND - 0.75, p.z + dz);
    const h = raycast(_o, _e, GROUP.STATIC | GROUP.DYN);
    // too tall to step onto (a wall, a domino...): that's something you bump into, not ground
    if (!h || h.normal.y < 0.5 || h.point.y > p.y - STAND + 0.62) continue;
    if (!best || h.point.y > best.point.y) best = h;
  }
  return best;
}
// spring + damper towards standing height, applied every physics step while you're grounded
G.extraForces.push(() => {
  const pl = G.player;
  if (!pl || !pl.hover) return;
  const b = pl.body, h = pl.hover;
  const err = h.y - b.position.y;
  const vrel = b.velocity.y - h.vy;
  const ay = clamp(err * 160 - vrel * 25, -45, 70);
  b.applyForce(new CANNON.Vec3(0, b.mass * (9.82 + ay), 0));
  // your weight pushes down on loose things you stand on (see-saws, pallets...)
  if (h.body && h.body.type === CANNON.Body.DYNAMIC) {
    const r = new CANNON.Vec3(h.point.x - h.body.position.x, h.point.y - h.body.position.y, h.point.z - h.body.position.z);
    h.body.applyForce(new CANNON.Vec3(0, -b.mass * 9.82 * 0.7, 0), r);
  }
});

export class Player {
  constructor() {
    const b = new CANNON.Body({ mass: 70, material: G.mats.player, fixedRotation: true, collisionFilterGroup: GROUP.PLAYER, allowSleep: false, linearDamping: 0 });
    // the collision shape stops 0.55 m above your feet: a springy ground sensor holds you up,
    // so you glide over block steps, seams and rubble instead of catching on them
    b.addShape(new CANNON.Sphere(0.3), new CANNON.Vec3(0, -0.05, 0));
    b.addShape(new CANNON.Sphere(0.38), new CANNON.Vec3(0, 0.35, 0));
    b.position.set(SPAWN.x, SPAWN.y, SPAWN.z);
    b.isPlayer = true;
    b.updateMassProperties();
    G.world.addBody(b);
    this.body = b;
    this.meshes = null;
    this.applyLook(profileLook());
    this.yaw = 0; this.pitch = -0.1;
    this.camMode = 1; // first person only
    this.camDist = 5.5;
    this.stun = 0;
    this.airJumps = 1;
    this.flying = false;
    this.phase = 0; this.moveAmt = 0;
    this.grounded = false;
    this.wasGrounded = true;
    this.swing = 0;
    this.camPos = new THREE.Vector3();
    this.fwd = new THREE.Vector3();
  }

  // your body (seen by other players) + your first-person arms follow your profile look
  applyLook(look) {
    if (this.meshes) for (const k in this.meshes) G.scene.remove(this.meshes[k]);
    this.meshes = buildHumanoid(1, { skin: look.skin, shirt: look.shirt, pants: look.pants, sleeve: true, hat: look.hat, hatColor: look.hatColor });
    for (const k in this.meshes) { this.meshes[k].visible = false; G.scene.add(this.meshes[k]); }
    setViewmodelSkin({ skin: look.skin, shirt: look.shirt });
  }

  pos() { return tv(this.body.position); }
  feet() { return tv(this.body.position).add(new THREE.Vector3(0, -0.9, 0)); }

  fling(v) {
    this.body.velocity.x += v.x; this.body.velocity.y += v.y; this.body.velocity.z += v.z;
    if (v.length() > 4) this.stun = Math.max(this.stun, 0.6);
  }

  respawn() {
    const s = G.spawn || SPAWN;
    this.body.position.set(s.x, s.y, s.z);
    this.body.velocity.setZero();
    this.body.interpolatedPosition.copy(this.body.position);
    this.body.previousPosition.copy(this.body.position);
    this.camY = undefined;
    this.stun = 0;
  }

  setTool(id) { equipViewmodel(id); }

  update(dt, input) {
    const b = this.body;
    // look
    this.yaw -= input.lookX;
    this.pitch = clamp(this.pitch - input.lookY, -1.5, 1.45);
    const fwdFlat = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const p = b.position;
    // ground sensor: the highest ground under you (and a little ahead, so steps lift you early)
    this.jumpT = Math.max(0, (this.jumpT || 0) - dt);
    const hit = this.flying ? null : groundProbe(p, b.velocity);
    // standing on a moving object? ride along with it
    const plat = hit && hit.body.type === CANNON.Body.DYNAMIC ? hit.body : null;
    this.platform = plat;
    const pv = plat ? plat.velocity : { x: 0, y: 0, z: 0 };
    const standY = hit ? hit.point.y + STAND : 0;
    const gap = hit ? p.y - standY : 1e9; // + above standing height, - below (a step up)
    this.grounded = !!hit && gap < 0.4 && gap > -0.65 && b.velocity.y - pv.y < 5 && this.jumpT <= 0;
    // the spring (applied every physics step) holds you at standing height while grounded
    this.hover = this.grounded ? { y: standY, vy: pv.y, body: plat, point: hit.point } : null;
    if (this.grounded) this.airJumps = 1;
    const wl = G.waterAt(p.x, p.z);
    const swim = p.y < wl + 0.4;
    // move
    const mv = new THREE.Vector3();
    if (input.f) mv.add(fwdFlat);
    if (input.b) mv.sub(fwdFlat);
    if (input.r) mv.add(right);
    if (input.l) mv.sub(right);
    if (mv.lengthSq() > 0) mv.normalize();
    let speed = input.sprint ? 12 : 7;
    // crouch: lower view, slow and steady
    this.crouchT = (this.crouchT || 0) + (((input.crouch && !this.flying) ? 1 : 0) - (this.crouchT || 0)) * Math.min(1, dt * 12);
    if (input.crouch && !this.flying) speed = 3.2;
    if (swim) speed = 4.5;
    if (this.flying) speed = input.sprint ? 30 : 16;
    this.stun = Math.max(0, this.stun - dt * (this.grounded ? 3 : 1));
    let acc = this.grounded ? 14 : 4;
    if (this.stun > 0) acc *= 0.08;
    if (this.flying) acc = 8;
    const k = Math.min(1, acc * dt);
    // only steer horizontal velocity, keep momentum from explosions/jump pads
    const tvx = mv.x * speed + pv.x, tvz = mv.z * speed + pv.z;
    const hv = Math.hypot(b.velocity.x - pv.x, b.velocity.z - pv.z);
    if (hv < speed + 0.5 || this.grounded || mv.lengthSq() > 0) {
      const kk = hv > speed + 2 && !this.grounded ? k * 0.15 : (plat ? 1 : k);
      b.velocity.x += (tvx - b.velocity.x) * kk;
      b.velocity.z += (tvz - b.velocity.z) * kk;
    }

    if (this.flying) {
      const vy = (input.jumpHeld ? 1 : 0) - (input.sprintDown ? 1 : 0);
      b.velocity.y = vy * 12;
    } else if (swim) {
      b.velocity.y += (wl + 0.1 - p.y) * 12 * dt;
      b.velocity.y *= 1 - 1.5 * dt;
      if (input.jumpHeld) b.velocity.y = Math.max(b.velocity.y, 5);
    } else if (input.jump || (this.jumpBuf > 0 && this.grounded)) {
      // forgiving jumps: works a moment after walking off a ledge (coyote time)
      // and if you press jump just before landing (jump buffer)
      if (this.grounded || this.coyote > 0) { b.velocity.y = pv.y + 8.5; sfx.jump(); this.coyote = 0; this.jumpBuf = 0; this.jumpT = 0.25; this.hover = null; }
      else if (!input.jump) { /* buffered, wait for ground */ }
      else if (this.airJumps > 0) {
        this.airJumps--; b.velocity.y = 8; this.jumpT = 0.25; this.hover = null;
        FX.smoke(this.feet(), 4, 0xffffff, 0.35); sfx.jump();
      }
    }
    if (input.jump && !this.grounded && this.coyote <= 0) this.jumpBuf = 0.15;
    this.jumpBuf = Math.max(0, (this.jumpBuf || 0) - dt);
    this.coyote = this.grounded ? 0.12 : Math.max(0, (this.coyote || 0) - dt);
    if (!this.wasGrounded && this.grounded && this.lastVy < -6) { sfx.land(-this.lastVy); if (this.lastVy < -12) FX.smoke(this.feet(), 5, 0xd9cfb8, 0.5); }
    this.wasGrounded = this.grounded;
    this.lastVy = b.velocity.y;
    if (p.y < (G.killY ?? -30)) this.respawn();
    // safety net: never stay inside the ground
    if (G.groundAt) { const gy = G.groundAt(p.x, p.z); if (gy > -1e8 && p.y - 0.9 < gy - 0.35) { b.position.y = gy + STAND + 0.05; if (b.velocity.y < 0) b.velocity.y = 0; } }

    // camera
    const cp = Math.cos(this.pitch);
    this.fwd.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp);
    // camera follows the physics-interpolated position (no stutter at high refresh rates)
    // with light vertical smoothing so contact jitter can never bob the view
    const ip = b.interpolatedPosition;
    const ty = ip.y + 0.65 - (this.crouchT || 0) * 0.55;
    if (this.camY === undefined || Math.abs(ty - this.camY) > 1.5) this.camY = ty;
    else this.camY += (ty - this.camY) * Math.min(1, dt * 13); // smooth over steps
    const pivot = new THREE.Vector3(ip.x, this.camY, ip.z);
    let cam;
    if (this.camMode === 1) {
      cam = pivot.clone().add(new THREE.Vector3(0, 0.15, 0));
    } else {
      cam = pivot.clone().addScaledVector(this.fwd, -this.camDist).addScaledVector(right, 0.8).add(new THREE.Vector3(0, 0.35, 0));
      const block = raycast(pivot, cam, GROUP.STATIC);
      if (block) cam = pivot.clone().lerp(block.point, Math.max(0, (block.dist - 0.3) / pivot.distanceTo(cam)));
      if (p.y > wl + 0.5) cam.y = Math.max(cam.y, wl + 0.3);
    }
    if (G.shake > 0) {
      cam.add(new THREE.Vector3((Math.random() - 0.5) * G.shake * 0.4, (Math.random() - 0.5) * G.shake * 0.4, (Math.random() - 0.5) * G.shake * 0.4));
      G.shake = Math.max(0, G.shake - dt * 2.5);
    }
    G.camera.position.copy(cam);
    G.camera.quaternion.setFromEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
    G.fovPunch = Math.max(0, (G.fovPunch || 0) - dt * 30);
    const baseFov = G.settings ? G.settings.fov : 72;
    const targetFov = baseFov + (input.sprint && mv.lengthSq() > 0 ? 6 : 0) + (this.flying ? 6 : 0) + G.fovPunch;
    G.camera.fov += (targetFov - G.camera.fov) * Math.min(1, 10 * dt);
    G.camera.updateProjectionMatrix();
    this.camPos.copy(cam);
    G.aim.origin.copy(cam);
    G.aim.dir.copy(this.fwd);
    // start the aim ray at the player's depth so things behind the player aren't hit
    G.aim.start = cam.clone().addScaledVector(this.fwd, Math.max(0, pivot.clone().sub(cam).dot(this.fwd)));

    // avatar
    const hs = Math.hypot(b.velocity.x, b.velocity.z);
    this.moveAmt += ((this.grounded ? clamp(hs / 6, 0, 1) : 0.3) - this.moveAmt) * Math.min(1, 8 * dt);
    this.phase += dt * (3 + hs * 1.6);
    this.swing = Math.max(0, this.swing - dt * 4);
    const show = false; // first person: body hidden, viewmodel shown
    for (const kk in this.meshes) this.meshes[kk].visible = show;
    poseHumanoid(this.meshes, 1, this.feet(), this.yaw + Math.PI, this.phase, this.moveAmt, { aim: this.swing > 0 ? undefined : this.pitch, swing: this.swing > 0 ? this.swing : undefined, pitch: this.pitch });
    if (this.stun > 0.2 && !this.grounded) {
      // tumble the avatar a bit while flung
      const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), G.time * 10);
      this.meshes.torso.quaternion.multiply(q);
    }
    // first-person hands + tool (no walk bobbing: only equip, recoil and swings)
    updateViewmodel(dt, G.camera, this);
  }
}

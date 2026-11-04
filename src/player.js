// Player: capsule physics body, low-poly avatar, 3rd/1st person camera.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, raycast, clamp, tv } from './core.js';
import { buildHumanoid, poseHumanoid } from './dummy.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';

export const SPAWN = new THREE.Vector3(0, 1.2, 34);

export class Player {
  constructor() {
    const b = new CANNON.Body({ mass: 70, material: G.mats.player, fixedRotation: true, collisionFilterGroup: GROUP.PLAYER, allowSleep: false, linearDamping: 0 });
    b.addShape(new CANNON.Sphere(0.4), new CANNON.Vec3(0, -0.5, 0));
    b.addShape(new CANNON.Sphere(0.4), new CANNON.Vec3(0, 0.35, 0));
    b.position.set(SPAWN.x, SPAWN.y, SPAWN.z);
    b.isPlayer = true;
    b.updateMassProperties();
    G.world.addBody(b);
    this.body = b;
    this.meshes = buildHumanoid(1, { skin: 0xf1c27d, shirt: 0x1f8ef1, pants: 0x2b2d42, sleeve: true });
    for (const k in this.meshes) G.scene.add(this.meshes[k]);
    // cap
    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.14, 0.54), new THREE.MeshStandardMaterial({ color: 0xff3b3b, flatShading: true }));
    cap.position.y = 0.2;
    const brim = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.25), cap.material);
    brim.position.set(0, 0.15, 0.3);
    this.meshes.head.add(cap, brim);
    // first-person viewmodel: an arm holding the current tool, attached to the camera
    this.view = new THREE.Group();
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.13, 0.26), new THREE.MeshStandardMaterial({ color: 0x1f8ef1, flatShading: true }));
    arm.position.set(0, -0.02, 0.08);
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), new THREE.MeshStandardMaterial({ color: 0xf1c27d, flatShading: true }));
    hand.position.set(0, 0, -0.08);
    this.toolMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.42), new THREE.MeshStandardMaterial({ color: 0x333333, flatShading: true, emissive: 0x000000 }));
    this.toolMesh.position.set(0, 0.07, -0.2);
    const tip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.08), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    tip.position.set(0, 0, -0.24);
    this.toolMesh.add(tip);
    this.tip = tip;
    this.view.add(arm, hand, this.toolMesh);
    this.view.position.set(0.32, -0.28, -0.5);
    this.view.scale.setScalar(0.32);
    // always draw the viewmodel on top so it never clips into walls
    [arm, hand, this.toolMesh, tip].forEach((m, i) => { m.renderOrder = 10 + i; m.frustumCulled = false; m.material.depthTest = false; m.material.depthWrite = false; });
    G.camera.add(this.view);
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
    this.stun = 0;
  }

  setToolColor(c) { this.toolMesh.material.color.set(c); this.toolMesh.material.emissive.set(c).multiplyScalar(0.3); this.tip.material.color.set(c).lerp(new THREE.Color(0xffffff), 0.5); this.kick = 0.4; }

  update(dt, input) {
    const b = this.body;
    // look
    this.yaw -= input.lookX;
    this.pitch = clamp(this.pitch - input.lookY, -1.5, 1.45);
    const fwdFlat = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const p = b.position;
    // ground check
    const hit = raycast(new THREE.Vector3(p.x, p.y - 0.5, p.z), new THREE.Vector3(p.x, p.y - 1.08, p.z));
    // standing on a moving object (like a flying pallet)? ride along with it
    const plat = hit && hit.body.type === CANNON.Body.DYNAMIC ? hit.body : null;
    this.platform = plat;
    const pv = plat ? plat.velocity : { x: 0, y: 0, z: 0 };
    this.grounded = !!hit && b.velocity.y - pv.y < 6;
    if (this.grounded) this.airJumps = 1;
    const swim = p.y < G.waterY + 0.4;
    // move
    const mv = new THREE.Vector3();
    if (input.f) mv.add(fwdFlat);
    if (input.b) mv.sub(fwdFlat);
    if (input.r) mv.add(right);
    if (input.l) mv.sub(right);
    if (mv.lengthSq() > 0) mv.normalize();
    let speed = input.sprint ? 12 : 7;
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
    if (plat && this.grounded && !input.jump && !this.flying) b.velocity.y = Math.min(b.velocity.y, pv.y + 0.5);
    if (this.flying) {
      const vy = (input.jumpHeld ? 1 : 0) - (input.sprintDown ? 1 : 0);
      b.velocity.y = vy * 12;
    } else if (swim) {
      b.velocity.y += (G.waterY + 0.1 - p.y) * 12 * dt;
      b.velocity.y *= 1 - 1.5 * dt;
      if (input.jumpHeld) b.velocity.y = Math.max(b.velocity.y, 5);
    } else if (input.jump) {
      if (this.grounded) { b.velocity.y = pv.y + 8.5; sfx.jump?.(); }
      else if (this.airJumps > 0) {
        this.airJumps--; b.velocity.y = 8;
        FX.smoke(this.feet(), 4, 0xffffff, 0.35); sfx.jump?.();
      }
    }
    if (!this.wasGrounded && this.grounded && this.lastVy < -12) FX.smoke(this.feet(), 5, 0xd9cfb8, 0.5);
    this.wasGrounded = this.grounded;
    this.lastVy = b.velocity.y;
    if (p.y < (G.killY ?? -30)) this.respawn();

    // camera
    const cp = Math.cos(this.pitch);
    this.fwd.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp);
    const pivot = new THREE.Vector3(p.x, p.y + 0.65, p.z);
    let cam;
    if (this.camMode === 1) {
      cam = pivot.clone().add(new THREE.Vector3(0, 0.15, 0));
    } else {
      cam = pivot.clone().addScaledVector(this.fwd, -this.camDist).addScaledVector(right, 0.8).add(new THREE.Vector3(0, 0.35, 0));
      const block = raycast(pivot, cam, GROUP.STATIC);
      if (block) cam = pivot.clone().lerp(block.point, Math.max(0, (block.dist - 0.3) / pivot.distanceTo(cam)));
      if (p.y > G.waterY + 0.5) cam.y = Math.max(cam.y, G.waterY + 0.3);
    }
    if (G.shake > 0) {
      cam.add(new THREE.Vector3((Math.random() - 0.5) * G.shake * 0.4, (Math.random() - 0.5) * G.shake * 0.4, (Math.random() - 0.5) * G.shake * 0.4));
      G.shake = Math.max(0, G.shake - dt * 2.5);
    }
    G.camera.position.copy(cam);
    G.camera.quaternion.setFromEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
    const targetFov = (input.sprint && mv.lengthSq() > 0 ? 80 : 72) + (this.flying ? 6 : 0);
    G.camera.fov += (targetFov - G.camera.fov) * Math.min(1, 6 * dt);
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
    // viewmodel: bob while walking, swing for melee, recoil kick
    this.kick = Math.max(0, (this.kick || 0) - dt * 3);
    const bob = this.grounded ? this.moveAmt : 0;
    this.view.position.set(0.19 + Math.sin(this.phase) * 0.01 * bob, -0.15 + Math.abs(Math.cos(this.phase)) * 0.01 * bob - this.kick * 0.05, -0.36 + this.kick * 0.04);
    this.view.rotation.set(this.swing > 0 ? -Math.sin(this.swing * Math.PI) * 1.2 : this.kick * 0.4, this.swing > 0 ? Math.sin(this.swing * Math.PI) * 0.8 : 0, 0);
    // hand position used for beams / lines = the tool tip
    G.camera.updateMatrixWorld();
    this.tip.getWorldPosition(G.aim.hand);
  }
}

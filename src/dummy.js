// Dummies ("people"): walk around standing, turn into ragdolls when hit, get back up.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, afterStep, rand, clamp, tv, popup, raycast, saveBest } from './core.js';
import { MAT } from './items.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';

const VARIANTS = {
  normal: { s: 1, mass: 1, speed: 1.7, mat: 'flesh', buoy: 1.4 },
  big:    { s: 1.6, mass: 1, speed: 1.5, mat: 'flesh', buoy: 1.4 },
  tiny:   { s: 0.55, mass: 1, speed: 2.4, mat: 'flesh', buoy: 1.6 },
  robot:  { s: 1.1, mass: 3, speed: 1.2, mat: 'metal', buoy: 0.5, skin: 0x9aa4ae, shirt: 0x5a6570, pants: 0x3b434b, eyes: 0xff2222, metal: true },
  bouncy: { s: 1, mass: 1, speed: 2, mat: 'bouncyflesh', buoy: 1.6, skin: 0xff9ad5, shirt: 0xff4fa3, pants: 0xb5179e },
  zombie: { s: 1, mass: 1, speed: 3.0, mat: 'flesh', buoy: 1.4, skin: 0x7fb069, shirt: 0x5c4d7d, pants: 0x3d3d3d, eyes: 0xff3333, ai: 'zombie' },
  ninja:  { s: 0.95, mass: 0.9, speed: 7, mat: 'flesh', buoy: 1.4, skin: 0x222222, shirt: 0x1a1a1a, pants: 0x111111, eyes: 0xffffff, band: 0xd62828, ai: 'ninja' },
  balloon:{ s: 1, mass: 1, speed: 1.7, mat: 'flesh', buoy: 1.4, balloons: true },
};
const SHIRTS = [0xe63946, 0x2a9d8f, 0xf4a261, 0x457b9d, 0x8338ec, 0xffbe0b, 0x06d6a0, 0xef476f, 0x3a86ff, 0xfb5607];
const PANTS = [0x264653, 0x1d3557, 0x3d405b, 0x6b705c, 0x22223b, 0x495057];
const SKINS = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac, 0xf6d0b1];
const pick = (a) => a[(Math.random() * a.length) | 0];

// part layout for a 1.0 scale person, feet at y=0
const P = {
  head:  { t: 'sphere', r: 0.25, pos: [0, 1.8, 0], m: 0.13 },
  torso: { t: 'box', size: [0.56, 0.72, 0.3], pos: [0, 1.17, 0], m: 0.4 },
  armL:  { t: 'box', size: [0.18, 0.66, 0.18], pos: [-0.38, 1.17, 0], m: 0.08 },
  armR:  { t: 'box', size: [0.18, 0.66, 0.18], pos: [0.38, 1.17, 0], m: 0.08 },
  legL:  { t: 'box', size: [0.22, 0.8, 0.22], pos: [-0.14, 0.4, 0], m: 0.155 },
  legR:  { t: 'box', size: [0.22, 0.8, 0.22], pos: [0.14, 0.4, 0], m: 0.155 },
};
const PARTS = Object.keys(P);

const geos = {};
function partGeo(name, s) {
  const k = name + s.toFixed(2);
  if (geos[k]) return geos[k];
  const p = P[name];
  geos[k] = p.t === 'sphere' ? new THREE.IcosahedronGeometry(p.r * s, 1) : new THREE.BoxGeometry(p.size[0] * s, p.size[1] * s, p.size[2] * s);
  return geos[k];
}

export function buildHumanoid(s, colors) {
  const mk = (c, metal) => new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: metal ? 0.4 : 0.8, metalness: metal ? 0.6 : 0 });
  const skin = mk(colors.skin, colors.metal), shirt = mk(colors.shirt, colors.metal), pants = mk(colors.pants, colors.metal);
  const meshes = {};
  for (const n of PARTS) {
    const mat = n === 'head' ? skin : n === 'torso' ? shirt : n.startsWith('arm') ? (colors.sleeve ? shirt : skin) : pants;
    const m = new THREE.Mesh(partGeo(n, s), mat);
    m.castShadow = true; m.receiveShadow = true;
    meshes[n] = m;
  }
  // face
  const eyeMat = new THREE.MeshBasicMaterial({ color: colors.eyes ?? 0x111111 });
  const eg = new THREE.BoxGeometry(0.06 * s, 0.09 * s, 0.03 * s);
  for (const x of [-0.09, 0.09]) { const e = new THREE.Mesh(eg, eyeMat); e.position.set(x * s, 0.04 * s, 0.235 * s); meshes.head.add(e); }
  if (!colors.eyes) {
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.12 * s, 0.025 * s, 0.03 * s), eyeMat);
    mouth.position.set(0, -0.09 * s, 0.225 * s); meshes.head.add(mouth);
  }
  if (colors.band) {
    const band = new THREE.Mesh(new THREE.BoxGeometry(0.52 * s, 0.08 * s, 0.52 * s), new THREE.MeshStandardMaterial({ color: colors.band, flatShading: true }));
    band.position.y = 0.12 * s; meshes.head.add(band);
  }
  // belt
  const belt = new THREE.Mesh(new THREE.BoxGeometry(0.58 * s, 0.08 * s, 0.32 * s), new THREE.MeshStandardMaterial({ color: 0x2b2118, flatShading: true }));
  belt.position.y = -0.33 * s; meshes.torso.add(belt);
  return meshes;
}

const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _e = new THREE.Euler(), _v = new THREE.Vector3();
const X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0);

// Pose a humanoid (meshes in world space) standing at origin with yaw and animation params.
export function poseHumanoid(meshes, s, origin, yaw, phase, amt, opts = {}) {
  const qy = _q2.setFromAxisAngle(Y, yaw);
  const set = (name, lx, ly, lz, rx, pivotY) => {
    const m = meshes[name];
    if (!m) return;
    const half = name.startsWith('leg') ? 0.4 : 0.33;
    // limb rotates around its top pivot
    _q.setFromAxisAngle(X, rx);
    _v.set(0, -half * s, 0).applyQuaternion(_q);
    _v.add(new THREE.Vector3(lx * s, pivotY * s, lz * s));
    _v.applyQuaternion(qy).add(origin);
    m.position.copy(_v);
    m.quaternion.copy(qy).multiply(_q);
  };
  const sw = Math.sin(phase) * 0.7 * amt;
  const bob = Math.abs(Math.cos(phase)) * 0.05 * amt * s;
  set('legL', -0.14, 0, 0, sw, 0.8);
  set('legR', 0.14, 0, 0, -sw, 0.8);
  let al = -sw, ar = sw;
  if (opts.armsUp) { al = Math.PI + Math.sin(G.time * 18) * 0.4; ar = Math.PI - Math.sin(G.time * 18) * 0.4; }
  if (opts.zombie) { al = ar = -Math.PI / 2 + Math.sin(G.time * 3) * 0.1; }
  if (opts.aim !== undefined) ar = -Math.PI / 2 - opts.aim;
  if (opts.swing) ar = -Math.PI / 2 - 1.2 + opts.swing * 2.5;
  set('armL', -0.38, 0, 0, al, 1.5);
  set('armR', 0.38, 0, 0, ar, 1.5);
  const t = meshes.torso;
  t.position.set(0, 1.17 * s + bob, 0).applyQuaternion(qy).add(origin);
  t.quaternion.copy(qy);
  const h = meshes.head;
  h.position.set(0, 1.8 * s + bob, 0).applyQuaternion(qy).add(origin);
  h.quaternion.copy(qy);
  if (opts.pitch !== undefined) h.quaternion.multiply(_q.setFromAxisAngle(X, -opts.pitch * 0.5));
}

let dummyId = 1;
export class Dummy {
  constructor(pos, variant = 'normal', opts = {}) {
    this.id = dummyId++;
    this.variant = variant;
    this.cfg = VARIANTS[variant] || VARIANTS.normal;
    this.s = this.cfg.s * (opts.scale ?? 1);
    this.massTotal = 30 * this.cfg.mass * this.s ** 3;
    this.buoy = this.cfg.buoy;
    this.colors = {
      skin: this.cfg.skin ?? pick(SKINS), shirt: this.cfg.shirt ?? pick(SHIRTS), pants: this.cfg.pants ?? pick(PANTS),
      eyes: this.cfg.eyes, band: this.cfg.band, metal: this.cfg.metal, sleeve: Math.random() < 0.4,
    };
    this.meshes = buildHumanoid(this.s, this.colors);
    for (const n of PARTS) G.scene.add(this.meshes[n]);
    this.spawned = !!opts.spawned;
    this.yaw = opts.yaw ?? rand(0, Math.PI * 2);
    this.phase = 0; this.moveAmt = 0;
    this.ai = { t: 0, dir: new THREE.Vector3(), idle: false, shove: 0, jump: rand(1, 3) };
    this.state = null;
    this.frozen = 0;
    this.downTime = 0;
    this.still = 0;
    this.flingStart = null;
    this.maxDist = 0;
    G.dummies.add(this);
    this.makeStanding(pos);
    if (this.cfg.balloons) {
      this.knock(null);
      this.tieBalloons(3);
    }
  }

  origin() {
    if (this.state === 'standing') return tv(this.body.position).add(new THREE.Vector3(0, -0.95 * this.s, 0));
    return tv(this.parts.torso.body.position).add(new THREE.Vector3(0, -1.17 * this.s, 0));
  }
  center() {
    return this.state === 'standing' ? tv(this.body.position) : tv(this.parts.torso.body.position);
  }

  makeStanding(feet) {
    const s = this.s;
    const body = new CANNON.Body({ mass: this.massTotal, material: G.mats.player, fixedRotation: true, collisionFilterGroup: GROUP.DYN, linearDamping: 0.0, allowSleep: false });
    body.addShape(new CANNON.Sphere(0.3 * s), new CANNON.Vec3(0, -0.65 * s, 0));
    body.addShape(new CANNON.Box(new CANNON.Vec3(0.3 * s, 0.6 * s, 0.18 * s)), new CANNON.Vec3(0, 0.35 * s, 0));
    body.position.set(feet.x, feet.y + 0.95 * s + 0.02, feet.z);
    body.updateMassProperties();
    body.ent = { kind: 'dummybody', dummy: this };
    body.addEventListener('collide', (e) => {
      if (this.state !== 'standing') return;
      const v = Math.abs(e.contact.getImpactVelocityAlongNormal());
      const o = e.body;
      const otherFast = o.type === CANNON.Body.DYNAMIC && (v > 6 || o.velocity.length() > 8);
      const playerFast = o.isPlayer && o.velocity.length() > 11;
      if ((otherFast && o.mass > 1.5) || playerFast) {
        const push = tv(o.velocity).multiplyScalar(clamp(o.mass / this.massTotal, 0.2, 1.2));
        afterStep(() => this.knock(push));
      }
    });
    G.world.addBody(body);
    this.body = body;
    this.state = 'standing';
  }

  tieBalloons(n) {
    const torso = this.parts.torso;
    for (let i = 0; i < n; i++) {
      const p = torso.body.position;
      const be = G.spawnItem('balloon', new THREE.Vector3(p.x + rand(-0.8, 0.8), p.y + 2.5 + i * 0.4, p.z + rand(-0.8, 0.8)), { spawned: this.spawned });
      be.lift = 150 * this.s ** 3;
      G.addRope(torso.body, new CANNON.Vec3(0, 0.3 * this.s, 0), be.body, new CANNON.Vec3(0, -0.5, 0), 2.5);
    }
  }

  // switch to ragdoll. vel: extra velocity (THREE.Vector3) or null
  knock(vel) {
    if (this.state !== 'standing') { if (vel) for (const n of PARTS) { const b = this.parts[n].body; b.velocity.x += vel.x; b.velocity.y += vel.y; b.velocity.z += vel.z; } return; }
    const base = tv(this.body.position.y < -100 ? new CANNON.Vec3() : this.body.velocity);
    if (vel) base.add(vel);
    G.world.removeBody(this.body);
    this.body = null;
    const s = this.s;
    const mat = G.mats[this.cfg.mat];
    this.parts = {};
    for (const n of PARTS) {
      const p = P[n];
      const mesh = this.meshes[n];
      const b = new CANNON.Body({ mass: this.massTotal * p.m, material: mat, collisionFilterGroup: GROUP.DYN, linearDamping: 0.04, angularDamping: 0.3, allowSleep: true, sleepSpeedLimit: 0.3, sleepTimeLimit: 1 });
      b.addShape(p.t === 'sphere' ? new CANNON.Sphere(p.r * s) : new CANNON.Box(new CANNON.Vec3(p.size[0] / 2 * s, p.size[1] / 2 * s, p.size[2] / 2 * s)));
      b.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
      b.quaternion.set(mesh.quaternion.x, mesh.quaternion.y, mesh.quaternion.z, mesh.quaternion.w);
      b.velocity.set(base.x + rand(-0.5, 0.5), base.y, base.z + rand(-0.5, 0.5));
      if (vel) b.angularVelocity.set(rand(-4, 4), rand(-4, 4), rand(-4, 4));
      const ent = { id: -1, kind: 'ragpart', dummy: this, body: b, mesh, def: {}, mat: MAT[this.cfg.mat], hp: Infinity, gen: 0, born: G.time, scale: 1, frozen: 0, antigrav: 0, thrusters: [], wet: false, partName: n };
      b.ent = ent;
      b.addEventListener('collide', (e) => {
        const v = Math.abs(e.contact.getImpactVelocityAlongNormal());
        if (v > 7) { sfx.oof(); if (v > 14) afterStep(() => { if (this.parts) FX.debris(tv(b.position), 0xffffff, 3, 0.08, 3); }); }
      });
      G.world.addBody(b);
      G.ents.add(ent);
      this.parts[n] = ent;
    }
    const pt = this.parts;
    const c = [];
    const V = (x, y, z) => new CANNON.Vec3(x * s, y * s, z * s);
    c.push(new CANNON.ConeTwistConstraint(pt.torso.body, pt.head.body, { pivotA: V(0, 0.36, 0), pivotB: V(0, -0.27, 0), axisA: new CANNON.Vec3(0, 1, 0), axisB: new CANNON.Vec3(0, 1, 0), angle: 0.6, twistAngle: 0.5 }));
    for (const [arm, x] of [['armL', -0.38], ['armR', 0.38]]) {
      const k = new CANNON.PointToPointConstraint(pt.torso.body, V(x, 0.33, 0), pt[arm].body, V(0, 0.33, 0));
      k.collideConnected = false;
      c.push(k);
    }
    for (const [leg, x] of [['legL', -0.14], ['legR', 0.14]]) {
      c.push(new CANNON.ConeTwistConstraint(pt.torso.body, pt[leg].body, { pivotA: V(x, -0.37, 0), pivotB: V(0, 0.4, 0), axisA: new CANNON.Vec3(0, -1, 0), axisB: new CANNON.Vec3(0, -1, 0), angle: 1.0, twistAngle: 0.3 }));
    }
    for (const k of c) G.world.addConstraint(k);
    this.constraints = c;
    this.state = 'ragdoll';
    this.downTime = 0; this.still = 0;
    this.flingStart = this.center(); this.maxDist = 0;
    sfx.oof();
  }

  // called when the fling line throws this dummy
  markFling() { this.flingStart = this.center(); this.maxDist = 0; this.thrown = true; }

  hurt(dmg, dir) {
    if (this.state === 'standing') this.knock(dir ? dir.clone().multiplyScalar(Math.min(dmg * 0.15, 12)) : null);
    else if (dmg > 8) sfx.oof();
  }

  freeze(dur) {
    if (this.state === 'standing') this.knock(null);
    this.frozen = dur;
    for (const n of PARTS) {
      const e = this.parts[n];
      if (e.frozen) continue;
      e.frozen = 1;
      e.origMass = e.body.mass;
      e.body.type = CANNON.Body.STATIC; e.body.mass = 0; e.body.updateMassProperties();
      e.body.velocity.setZero(); e.body.angularVelocity.setZero();
      e.mesh.userData.orig = e.mesh.material;
      e.mesh.material = new THREE.MeshStandardMaterial({ color: 0xaeeaff, transparent: true, opacity: 0.85, emissive: 0x1a5f7a, emissiveIntensity: 0.4, flatShading: true });
    }
  }
  unfreeze() {
    if (!this.parts) return;
    this.frozen = 0;
    for (const n of PARTS) {
      const e = this.parts[n];
      if (!e.frozen) continue;
      e.frozen = 0;
      e.body.type = CANNON.Body.DYNAMIC; e.body.mass = e.origMass; e.body.updateMassProperties(); e.body.wakeUp();
      if (e.mesh.userData.orig) { e.mesh.material = e.mesh.userData.orig; e.mesh.userData.orig = null; }
    }
  }

  clearRagdoll() {
    if (!this.parts) return;
    for (const k of this.constraints) G.world.removeConstraint(k);
    for (const n of PARTS) {
      const e = this.parts[n];
      e.dead = true;
      for (let i = G.ropes.length - 1; i >= 0; i--) { const r = G.ropes[i]; if (r.a === e.body || r.b === e.body) G.removeRope(r); }
      for (let i = G.welds.length - 1; i >= 0; i--) { const w = G.welds[i]; if (w.bodyA === e.body || w.bodyB === e.body) { G.world.removeConstraint(w); G.welds.splice(i, 1); } }
      if (G.onRemove) G.onRemove(e);
      G.world.removeBody(e.body);
      G.ents.delete(e);
      if (e.mesh.userData.orig) { e.mesh.material = e.mesh.userData.orig; e.mesh.userData.orig = null; }
      for (const t of e.thrusters) if (t.mesh) e.mesh.remove(t.mesh);
    }
    this.parts = null; this.constraints = null;
  }

  standUp(feet) {
    this.reportFling();
    this.clearRagdoll();
    this.makeStanding(feet);
    this.yaw = rand(0, Math.PI * 2);
    sfx.pop();
    FX.smoke(feet.clone().add(new THREE.Vector3(0, 0.3, 0)), 4, 0xd9cfb8, 0.5);
  }

  reportFling() {
    if (this.maxDist > 6) {
      const d = this.maxDist;
      G.stats.flings++;
      const best = d > G.stats.best;
      if (best) { G.stats.best = d; saveBest(); }
      popup(`${d.toFixed(1)}m FLING!${best ? ' NEW BEST!' : ''}`, this.center().add(new THREE.Vector3(0, 1.5, 0)), best ? '#ffd23f' : '#ffffff', best ? 30 : 22);
    }
    this.maxDist = 0;
  }

  respawn() {
    // fell out of the world: bring back on land
    this.reportFling();
    const sp = G.spawn || new THREE.Vector3(0, 1, 0);
    const feet = new THREE.Vector3(sp.x + rand(-8, 8), sp.y + 0.5, sp.z - rand(4, 12));
    if (this.state === 'ragdoll') this.clearRagdoll(); else if (this.body) G.world.removeBody(this.body);
    this.body = null;
    this.makeStanding(feet);
    popup('...and back!', feet.clone().add(new THREE.Vector3(0, 2.5, 0)), '#aee', 16);
  }

  remove() {
    if (this.state === 'ragdoll') this.clearRagdoll();
    else if (this.body) G.world.removeBody(this.body);
    for (const n of PARTS) G.scene.remove(this.meshes[n]);
    G.dummies.delete(this);
    this.dead = true;
  }

  rescale(f) {
    const ns = clamp(this.s * f, 0.3, 3.5) / this.cfg.s;
    const feet = this.origin();
    feet.y = Math.max(feet.y, 0);
    this.remove();
    return new Dummy(feet, this.variant, { scale: ns, spawned: this.spawned });
  }

  ignite() {
    if (this.burn > 0 || this.cfg.metal) return;
    if (this.center().y < G.waterY) return;
    this.burn = 7;
    sfx.oof();
  }

  update(dt) {
    if (this.burn > 0) {
      this.burn -= dt;
      const c = this.center();
      if (c.y < G.waterY + 0.3) { this.burn = 0; FX.smoke(c, 5, 0xdddddd, 0.6); }
      if (Math.random() < 0.6) FX.particle({ pos: c.clone().add(new THREE.Vector3(rand(-0.3, 0.3), rand(-0.6, 0.6) * this.s, rand(-0.3, 0.3))), vel: new THREE.Vector3(rand(-0.5, 0.5), rand(2, 4), rand(-0.5, 0.5)), color: Math.random() < 0.5 ? 0xff7a1a : 0xffc04a, size: rand(0.2, 0.35) * this.s, life: rand(0.4, 0.7), glow: true, add: true, gravity: -2, floor: false });
      if (Math.random() < dt * 1.5) sfx.oof();
    }
    if (this.state === 'standing') this.updateStanding(dt);
    else this.updateRagdoll(dt);
  }

  updateStanding(dt) {
    const b = this.body;
    const s = this.s;
    const ai = this.ai;
    const feet = this.origin();
    if (feet.y < G.waterY - 0.4 || feet.y < (G.killY ?? -30)) { this.knock(null); return; }
    const ground = raycast(new THREE.Vector3(b.position.x, b.position.y - 0.6 * s, b.position.z), new THREE.Vector3(b.position.x, b.position.y - 1.15 * s, b.position.z));
    const grounded = !!ground;
    let speed = 0;
    const want = new THREE.Vector3();
    const panic = (G.time - G.lastBoom.time < 4 && G.lastBoom.pos.distanceTo(feet) < 28) || this.burn > 0;
    const kind = this.cfg.ai;
    if (kind === 'zombie' && G.player) {
      const pp = G.player.pos();
      want.subVectors(pp, feet).setY(0);
      const d = want.length();
      want.normalize();
      speed = d > 1 ? this.cfg.speed : 0;
      ai.shove -= dt;
      if (d < 1.3 * s + 0.5 && ai.shove <= 0) {
        ai.shove = 1.2;
        G.player.fling(want.clone().multiplyScalar(9).add(new THREE.Vector3(0, 5, 0)));
        sfx.oof(); popup('BONK', pp.clone().add(new THREE.Vector3(0, 2, 0)), '#8f8', 18);
      }
      if (Math.random() < dt * 0.15) sfx.groan?.();
    } else {
      ai.t -= dt;
      if (ai.t <= 0) {
        ai.t = rand(2, 5);
        ai.idle = Math.random() < 0.3;
        const a = rand(0, Math.PI * 2);
        ai.dir.set(Math.cos(a), 0, Math.sin(a));
      }
      const wb = G.walkBound ?? 58;
      if (Math.abs(feet.x) > wb || Math.abs(feet.z) > wb) ai.dir.set(-feet.x, 0, -feet.z).normalize();
      if (this.burn > 0) {
        if (Math.random() < dt * 2) ai.dir.set(rand(-1, 1), 0, rand(-1, 1)).normalize();
        want.copy(ai.dir); speed = 6.5;
      } else if (panic) {
        want.subVectors(feet, G.lastBoom.pos).setY(0).normalize();
        speed = 5.5;
      } else if (!ai.idle) { want.copy(ai.dir); speed = this.cfg.speed; }
      if (kind === 'ninja') {
        ai.jump -= dt;
        if (ai.jump <= 0 && grounded) { ai.jump = rand(0.8, 2.5); b.velocity.y = 9; }
      }
    }
    // avoid walking straight into walls: probe ahead
    ai.probe = (ai.probe || 0) - dt;
    if (speed > 0 && kind !== 'zombie' && this.burn <= 0 && ai.probe <= 0) {
      ai.probe = 0.25;
      const ahead = raycast(new THREE.Vector3(b.position.x, b.position.y, b.position.z), new THREE.Vector3(b.position.x + want.x * 1.2 * s, b.position.y, b.position.z + want.z * 1.2 * s), GROUP.STATIC | GROUP.DYN);
      // also don't walk off cliffs / into deep water
      const fx = b.position.x + want.x * 1.6 * s, fz = b.position.z + want.z * 1.6 * s;
      const floor = raycast(new THREE.Vector3(fx, b.position.y, fz), new THREE.Vector3(fx, b.position.y - 3 * s, fz));
      const wet = floor && floor.point.y < G.waterY;
      if (ahead || (grounded && (!floor || wet))) { ai.dir.set(-want.x, 0, -want.z); ai.t = rand(1.5, 3); ai.idle = false; }
    }
    const tvx = want.x * speed, tvz = want.z * speed;
    const k = grounded ? 10 : 1.5;
    b.velocity.x += (tvx - b.velocity.x) * Math.min(1, k * dt);
    b.velocity.z += (tvz - b.velocity.z) * Math.min(1, k * dt);
    if (speed > 0.1) {
      const ty = Math.atan2(want.x, want.z);
      let d = ty - this.yaw;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      this.yaw += d * Math.min(1, 8 * dt);
    }
    const hs = Math.hypot(b.velocity.x, b.velocity.z);
    this.moveAmt += (clamp(hs / 3, 0, 1) - this.moveAmt) * Math.min(1, 8 * dt);
    this.phase += dt * (3 + hs * 2.2) / Math.sqrt(s);
    poseHumanoid(this.meshes, s, this.origin(), this.yaw, this.phase, this.moveAmt, { armsUp: panic && kind !== 'zombie', zombie: kind === 'zombie' });
  }

  updateRagdoll(dt) {
    for (const n of PARTS) { const e = this.parts[n]; e.mesh.position.copy(e.body.position); e.mesh.quaternion.copy(e.body.quaternion); }
    const t = this.parts.torso.body;
    if (this.frozen > 0) { this.frozen -= dt; if (this.frozen <= 0) this.unfreeze(); }
    if (this.flingStart) {
      const d = Math.hypot(t.position.x - this.flingStart.x, t.position.z - this.flingStart.z);
      if (d > this.maxDist) this.maxDist = d;
    }
    this.downTime += dt;
    const sp = t.velocity.length();
    const held = G.grab && G.grab.dummy === this;
    const tied = G.ropes.some((r) => PARTS.some((n) => r.a === this.parts[n].body || r.b === this.parts[n].body));
    const busy = held || tied || this.frozen > 0 || this.parts.torso.antigrav > 0 || PARTS.some((n) => this.parts[n].thrusters.length);
    if (sp < 0.9 && !busy) this.still += dt; else this.still = 0;
    const inWater = t.position.y < G.waterY + 0.2;
    if (this.still > 2.2 && !inWater) {
      const hit = raycast(new THREE.Vector3(t.position.x, t.position.y + 0.3, t.position.z), new THREE.Vector3(t.position.x, t.position.y - 3, t.position.z), GROUP.STATIC | GROUP.DYN);
      const feet = hit ? hit.point : new THREE.Vector3(t.position.x, t.position.y - 0.5, t.position.z);
      // don't stand up inside a pile of junk
      this.standUp(feet.add(new THREE.Vector3(0, 0.05, 0)));
      return;
    }
    if (inWater && this.downTime > 14 && !busy) this.respawn();
  }
}

export function spawnDummy(pos, variant = 'normal', opts = {}) {
  let n = 0;
  for (const d of G.dummies) n++;
  if (n >= 45) {
    // remove the oldest spawned dummy
    for (const d of G.dummies) { if (d.spawned) { d.remove(); break; } }
  }
  return new Dummy(pos, variant, opts);
}

export function dummyFromBody(body) {
  const e = body && body.ent;
  if (!e) return null;
  if (e.kind === 'dummybody' || e.kind === 'ragpart') return e.dummy;
  return null;
}

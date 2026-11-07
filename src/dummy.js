// Dummies ("people"): walk around standing, turn into ragdolls when hit, get back up.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, afterStep, later, rand, clamp, tv, popup, raycast, saveBest, drawPos, drawQuat } from './core.js';
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
const IMPACT_SAFE = 13;  // impacts slower than this (m/s) don't hurt
const KO_HIT = 38;       // one hit this big knocks a dummy out

// small health bar shown above a dummy for a few seconds after it gets hurt
const barGeo = new THREE.PlaneGeometry(1, 0.09);
const barBgMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.55, depthTest: false, fog: false });

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
  if (opts.sit) origin = origin.clone().add(new THREE.Vector3(0, -0.45 * s, 0)).addScaledVector(new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw)), -0.1 * s);
  const set = (name, lx, ly, lz, rx, pivotY, rz = 0) => {
    const m = meshes[name];
    if (!m) return;
    const half = name.startsWith('leg') ? 0.4 : 0.33;
    // limb rotates around its top pivot
    if (rz) _q.setFromEuler(_e.set(rx, 0, rz, 'XYZ')); else _q.setFromAxisAngle(X, rx);
    _v.set(0, -half * s, 0).applyQuaternion(_q);
    _v.add(new THREE.Vector3(lx * s, pivotY * s, lz * s));
    _v.applyQuaternion(qy).add(origin);
    m.position.copy(_v);
    m.quaternion.copy(qy).multiply(_q);
  };
  const sw = Math.sin(phase) * 0.7 * amt;
  const bob = 0; // no up/down bounce
  const legA = opts.sit ? -Math.PI / 2 + 0.1 : 0;
  set('legL', -0.14, 0, 0, opts.sit ? legA : sw, 0.8);
  set('legR', 0.14, 0, 0, opts.sit ? legA : -sw, 0.8);
  let al = -sw, ar = sw;
  if (opts.sit) { al = -0.5; ar = -0.5; }
  if (opts.carry) { al = Math.PI - 0.15; ar = Math.PI - 0.15; }
  if (opts.toss !== undefined) { al = ar = Math.PI - opts.toss * 2.2; }
  if (opts.armsUp) { al = Math.PI + Math.sin(G.time * 18) * 0.4; ar = Math.PI - Math.sin(G.time * 18) * 0.4; }
  if (opts.zombie) { al = ar = -Math.PI / 2 + Math.sin(G.time * 3) * 0.1; }
  if (opts.aim !== undefined) ar = -Math.PI / 2 - opts.aim;
  if (opts.swing) ar = -Math.PI / 2 - 1.2 + opts.swing * 2.5;
  let rzR = 0;
  if (opts.wave) { ar = 0; rzR = 2.55 + Math.sin(G.time * 11) * 0.35; }
  if (opts.talk) {
    const t = G.time * 3 + (opts.seed || 0);
    al = -0.35 - Math.max(0, Math.sin(t)) * 0.6;
    ar = -0.35 - Math.max(0, Math.sin(t * 1.3 + 2)) * 0.6;
  }
  set('armL', -0.38, 0, 0, al, 1.5);
  set('armR', 0.38, 0, 0, ar, 1.5, rzR);
  const t = meshes.torso;
  t.position.set(0, 1.17 * s + bob, 0).applyQuaternion(qy).add(origin);
  t.quaternion.copy(qy);
  const h = meshes.head;
  h.position.set(0, 1.8 * s + bob, 0).applyQuaternion(qy).add(origin);
  h.quaternion.copy(qy);
  if (opts.headYaw) h.quaternion.multiply(_q.setFromAxisAngle(Y, opts.headYaw));
  if (opts.pitch !== undefined) h.quaternion.multiply(_q.setFromAxisAngle(X, -opts.pitch * 0.5));
  if (opts.nod) h.quaternion.multiply(_q.setFromAxisAngle(X, opts.nod));
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
    this.pitch = (this.cfg.metal ? 90 : rand(130, 230)) / Math.sqrt(this.s);
    this.colors = {
      skin: this.cfg.skin ?? pick(SKINS), shirt: this.cfg.shirt ?? pick(SHIRTS), pants: this.cfg.pants ?? pick(PANTS),
      eyes: this.cfg.eyes, band: this.cfg.band, metal: this.cfg.metal, sleeve: Math.random() < 0.4,
    };
    this.meshes = buildHumanoid(this.s, this.colors);
    for (const n of PARTS) G.scene.add(this.meshes[n]);
    this.spawned = !!opts.spawned;
    this.yaw = opts.yaw ?? rand(0, Math.PI * 2);
    this.phase = 0; this.moveAmt = 0;
    this.ai = { mode: 'idle', t: rand(0.5, 3), dir: new THREE.Vector3(), goal: null, group: null, shove: 0, jump: rand(1, 3), safeT: 0, safe: new THREE.Vector3(), lastWave: -99, look: 0 };
    this.maxHp = Math.round(100 * (this.cfg.metal ? 2.5 : 1) * Math.sqrt(this.s));
    this.hp = this.maxHp;
    this.ko = 0;          // knocked out: stays down this many seconds
    this.deadT = 0;       // >0 while dead (counts up)
    this.lastHurt = -99;
    this.home = pos.clone();
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

  // feet position for drawing (smoothed between physics steps)
  drawOrigin() {
    if (this.state !== 'standing') return this.origin();
    return tv(drawPos(this.body)).add(new THREE.Vector3(0, -0.95 * this.s, 0));
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
    // put the limbs in place right away, so a knock before the first frame
    // turns into a ragdoll here (not at the world origin)
    poseHumanoid(this.meshes, s, feet, this.yaw, this.phase, 0);
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
    if (this.ai && this.ai.carry) this.dropCarry();
    if (this.ai && this.ai.seat) { this.freeSeat(); if (this.ai.mode === 'seated') this.ai.mode = 'idle'; }
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
        if (v > 7) { sfx.oof(b.position, this.pitch); if (v > 14) afterStep(() => { if (this.parts) FX.debris(tv(b.position), 0xffffff, 3, 0.08, 3); }); }
        // hard landings hurt (head and torso count most)
        if (v > IMPACT_SAFE && G.time - this.impactT > 0.12) {
          this.impactT = G.time;
          const k = n === 'head' ? 1.5 : n === 'torso' ? 1 : 0.5;
          const dmg = (v - IMPACT_SAFE) * 2.2 * k * (this.cfg.mat === 'bouncyflesh' ? 0.4 : 1);
          afterStep(() => this.damageHp(dmg));
        }
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
    this.impactT = G.time;
    this.downTime = 0; this.still = 0;
    this.flingStart = this.center(); this.maxDist = 0;
    sfx.oof(this.center(), this.pitch);
  }

  // called when the fling line throws this dummy
  markFling() { this.flingStart = this.center(); this.maxDist = 0; this.thrown = true; }

  // dmg = health damage; push = optional knock velocity (defaults from dmg + dir)
  hurt(dmg, dir, push) {
    if (this.state === 'standing') this.knock(push || (dir ? dir.clone().multiplyScalar(Math.min(dmg * 0.15, 12)) : null));
    else { if (push) this.knock(push); if (dmg > 8) sfx.oof(this.center(), this.pitch); }
    this.damageHp(dmg);
  }

  damageHp(dmg) {
    if (this.dead || this.deadT > 0 || !(dmg > 0)) return;
    this.hp -= dmg;
    this.lastHurt = G.time;
    if (this.hp <= 0) { this.die(); return; }
    // a big hit (or low health) knocks them out for a while
    if (dmg >= KO_HIT || this.hp < this.maxHp * 0.25) {
      if (this.state === 'standing') this.knock(null);
      if (this.ko <= 0) { popup('KO!', this.center().add(new THREE.Vector3(0, 1.2, 0)), '#ffe14a', 20); G.stats.kos = (G.stats.kos || 0) + 1; }
      this.ko = Math.max(this.ko, rand(4, 7));
    }
  }

  die() {
    this.hp = 0;
    this.deadT = 0.001;
    if (this.ko <= 0) G.stats.kos = (G.stats.kos || 0) + 1; // already counted if it was knocked out first
    this.ko = 0;
    if (this.state === 'standing') this.knock(null);
    popup('✖ DOWN', this.center().add(new THREE.Vector3(0, 1.3, 0)), '#ff5050', 22);
    // grey out
    for (const n of PARTS) {
      const m = this.meshes[n];
      if (!m.userData.alive) m.userData.alive = m.material;
      m.material = m.material.clone();
      m.material.color.lerp(new THREE.Color(0x777777), 0.6);
    }
  }

  revive() {
    for (const n of PARTS) { const m = this.meshes[n]; if (m.userData.alive) { m.material = m.userData.alive; m.userData.alive = null; } }
    this.hp = this.maxHp; this.deadT = 0; this.ko = 0; this.burn = 0;
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
    if (this.ai.group) this.endChat();
    this.ai.mode = 'idle'; this.ai.t = rand(0.5, 2); this.ai.goal = null;
    sfx.pop(feet);
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
    // fell out of the world (or died): come back where they first appeared
    this.reportFling();
    if (this.ai.carry) this.dropCarry();
    this.freeSeat();
    this.revive();
    const h = this.home;
    let feet = new THREE.Vector3(h.x + rand(-1.5, 1.5), h.y + 0.5, h.z + rand(-1.5, 1.5));
    const g = raycast(feet.clone().setY(h.y + 30), feet.clone().setY(h.y - 30), GROUP.STATIC);
    if (g && g.point.y > G.waterY) feet = g.point.add(new THREE.Vector3(0, 0.1, 0));
    else { const sp = G.spawn || new THREE.Vector3(0, 1, 0); feet = new THREE.Vector3(sp.x + rand(-8, 8), sp.y + 0.5, sp.z - rand(4, 12)); }
    if (this.state === 'ragdoll') this.clearRagdoll(); else if (this.body) G.world.removeBody(this.body);
    this.body = null;
    this.makeStanding(feet);
    this.ai.mode = 'idle'; this.ai.t = rand(1, 2);
    FX.smoke(feet.clone().add(new THREE.Vector3(0, 0.5, 0)), 6, 0xffffff, 0.6);
    popup('...and back!', feet.clone().add(new THREE.Vector3(0, 2.5, 0)), '#aee', 16);
  }

  remove() {
    if (this.state === 'ragdoll') this.clearRagdoll();
    else if (this.body) G.world.removeBody(this.body);
    for (const n of PARTS) G.scene.remove(this.meshes[n]);
    if (this.bar) G.scene.remove(this.bar);
    if (this.ai.carry) this.dropCarry();
    this.freeSeat();
    if (this.ai.group) this.endChat();
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
    sfx.oof(this.center(), this.pitch);
  }

  update(dt) {
    if (this.burn > 0) {
      this.burn -= dt;
      const c = this.center();
      if (c.y < G.waterY + 0.3) { this.burn = 0; FX.smoke(c, 5, 0xdddddd, 0.6); }
      if (Math.random() < 0.6) FX.particle({ pos: c.clone().add(new THREE.Vector3(rand(-0.3, 0.3), rand(-0.6, 0.6) * this.s, rand(-0.3, 0.3))), vel: new THREE.Vector3(rand(-0.5, 0.5), rand(2, 4), rand(-0.5, 0.5)), color: Math.random() < 0.5 ? 0xff7a1a : 0xffc04a, size: rand(0.2, 0.35) * this.s, life: rand(0.4, 0.7), glow: true, add: true, gravity: -2, floor: false });
      if (Math.random() < dt * 1.5) sfx.oof(c, this.pitch);
      this.damageHp(dt * 9);
    }
    // slowly heal while fine
    if (this.deadT <= 0 && this.ko <= 0 && G.time - this.lastHurt > 6) this.hp = Math.min(this.maxHp, this.hp + dt * 6);
    this.updateBar();
    if (this.state === 'standing') this.updateStanding(dt);
    else this.updateRagdoll(dt);
  }

  updateBar() {
    const show = G.time - this.lastHurt < 3 && this.deadT <= 0 && !this.dead;
    if (!show) { if (this.bar) this.bar.visible = false; return; }
    if (!this.bar) {
      this.bar = new THREE.Group();
      const bg = new THREE.Mesh(barGeo, barBgMat);
      this.barFill = new THREE.Mesh(barGeo, new THREE.MeshBasicMaterial({ color: 0x4ade80, depthTest: false, fog: false }));
      this.barFill.position.z = 0.001;
      bg.renderOrder = 20; this.barFill.renderOrder = 21;
      this.bar.add(bg, this.barFill);
      G.scene.add(this.bar);
    }
    const f = clamp(this.hp / this.maxHp, 0, 1);
    this.bar.visible = true;
    this.bar.position.copy(this.state === 'standing' ? this.origin() : this.center()).add(new THREE.Vector3(0, this.state === 'standing' ? 2.35 * this.s : 0.9 * this.s, 0));
    this.bar.quaternion.copy(G.camera.quaternion);
    this.bar.scale.setScalar(Math.max(0.7, this.s));
    this.barFill.scale.x = Math.max(0.001, f);
    this.barFill.position.x = -(1 - f) / 2;
    this.barFill.material.color.setHex(f > 0.5 ? 0x4ade80 : f > 0.25 ? 0xfacc15 : 0xef4444);
  }

  // leave a chat group; a group of one breaks up
  endChat() {
    const grp = this.ai.group;
    this.ai.group = null;
    if (this.ai.mode === 'chat') { this.ai.mode = 'idle'; this.ai.t = rand(1, 3); }
    if (!grp) return;
    grp.members = grp.members.filter((o) => o !== this);
    if (grp.members.length < 2) for (const o of [...grp.members]) if (o.ai.group === grp) o.endChat();
  }
  joinChat(grp) {
    this.ai.group = grp; this.ai.mode = 'chat'; this.ai.goal = null;
    if (!grp.members.includes(this)) grp.members.push(this);
  }

  // is it OK to walk this way? (solid ground ahead, not a drop, not water, no wall)
  pathOk(dir, dist) {
    const b = this.body, s = this.s;
    const footY = b.position.y - 0.95 * s;
    const wall = raycast(new THREE.Vector3(b.position.x, b.position.y, b.position.z), new THREE.Vector3(b.position.x + dir.x * 1.1 * s, b.position.y, b.position.z + dir.z * 1.1 * s), GROUP.STATIC | GROUP.DYN);
    if (wall && wall.body !== b && Math.abs(wall.normal.y) < 0.6) return false;
    for (const k of [0.6, 1]) {
      const fx = b.position.x + dir.x * dist * k, fz = b.position.z + dir.z * dist * k;
      const floor = raycast(new THREE.Vector3(fx, footY + 1.2 * s, fz), new THREE.Vector3(fx, footY - 1.6, fz), GROUP.STATIC | GROUP.DYN);
      if (!floor) return false;                            // edge / hole
      if (floor.point.y < G.waterY + 0.15) return false;   // water
      if (floor.point.y < footY - 1.1) return false;       // too big a drop
    }
    return true;
  }

  // the closest direction to `want` that is safe to walk; null = stay put
  safeDir(want, speed, dt) {
    const ai = this.ai;
    ai.safeT -= dt;
    if (ai.safeT > 0 && ai.safeWant && ai.safeWant.dot(want) > 0.95) return ai.safeNull ? null : ai.safe;
    ai.safeT = 0.15;
    ai.safeWant = want.clone();
    const dist = clamp(speed * 0.55, 1.3, 3.2) * Math.max(0.8, this.s);
    const base = Math.atan2(want.x, want.z);
    for (const off of [0, 0.45, -0.45, 0.9, -0.9, 1.4, -1.4, 2.0, -2.0, 2.6, -2.6, Math.PI]) {
      const a = base + off;
      const d = new THREE.Vector3(Math.sin(a), 0, Math.cos(a));
      if (this.pathOk(d, dist)) { ai.safe.copy(d); ai.safeNull = false; return ai.safe; }
    }
    ai.safeNull = true;
    return null;
  }

  // a random spot to walk to that has ground (not water) under it
  pickGoal() {
    const o = this.origin();
    const wb = G.walkBound ?? 58;
    for (let i = 0; i < 8; i++) {
      const a = rand(0, Math.PI * 2), r = rand(5, 18);
      const x = clamp(o.x + Math.cos(a) * r, -wb, wb), z = clamp(o.z + Math.sin(a) * r, -wb, wb);
      const g = raycast(new THREE.Vector3(x, o.y + 6, z), new THREE.Vector3(x, o.y - 6, z), GROUP.STATIC);
      if (g && g.point.y > G.waterY + 0.2 && g.normal.y > 0.7 && Math.abs(g.point.y - o.y) < 4) return g.point;
    }
    return null;
  }

  // nearest danger to run from (explosions, fire, zombies, burning) or null
  threat(feet) {
    if (this.burn > 0) return { pos: feet.clone().add(new THREE.Vector3(rand(-1, 1), 0, rand(-1, 1))), burning: true };
    if (G.time - G.lastBoom.time < 4 && G.lastBoom.pos.distanceTo(feet) < 28) return { pos: G.lastBoom.pos };
    if (G.firePatches) for (const f of G.firePatches) if (f.pos.distanceTo(feet) < f.r + 5) return { pos: f.pos };
    for (const h of G.blackholes) if (h.mesh && h.mesh.position.distanceTo(feet) < 22) return { pos: h.mesh.position };
    if (this.cfg.ai !== 'zombie') {
      for (const d of G.dummies) {
        if (d === this || d.cfg.ai !== 'zombie' || d.state !== 'standing') continue;
        if (d.origin().distanceTo(feet) < 8) return { pos: d.origin() };
      }
    }
    return null;
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
    const kind = this.cfg.ai;
    const pose = { headYaw: 0 };
    const pp = G.player ? G.player.pos() : null;
    const threat = kind === 'zombie' ? null : this.threat(feet);
    let face = null; // point to turn towards while standing still
    if (ai.mode === 'seated') {
      if (threat) this.leaveSeat();
      else { this.updateSeated(dt); return; }
    }

    if (kind === 'zombie' && pp) {
      // chase whoever is closest: you, or a (living, standing) dummy
      ai.pickT = (ai.pickT || 0) - dt;
      if (ai.pickT <= 0 || (ai.prey && (ai.prey.dead || ai.prey.state !== 'standing' || ai.prey.deadT > 0))) {
        ai.pickT = 0.5;
        let best = null, bd = pp.distanceTo(feet);
        for (const o of G.dummies) {
          if (o === this || o.cfg.ai === 'zombie' || o.state !== 'standing' || o.deadT > 0) continue;
          const d = o.origin().distanceTo(feet);
          if (d < bd && d < 30) { bd = d; best = o; }
        }
        ai.prey = best;
      }
      const tp = ai.prey ? ai.prey.origin() : pp;
      want.subVectors(tp, feet).setY(0);
      const d = want.length();
      want.normalize();
      speed = d > 1 ? this.cfg.speed : 0;
      ai.shove -= dt;
      if (d < 1.3 * s + 0.5 && ai.shove <= 0) {
        ai.shove = 1.2;
        const push = want.clone().multiplyScalar(9).add(new THREE.Vector3(0, 5, 0));
        if (ai.prey) ai.prey.hurt(22, want, push);
        else G.player.fling(push);
        sfx.oof(tp, this.pitch); popup('BONK', tp.clone().add(new THREE.Vector3(0, 2, 0)), '#8f8', 18);
      }
      if (Math.random() < dt * 0.15) sfx.groan(feet);
      pose.zombie = true;
    } else if (threat) {
      // run away from danger
      if (ai.mode === 'chat') this.endChat();
      if (ai.carry) this.dropCarry();
      if (ai.seat) this.freeSeat();
      ai.mode = 'flee'; ai.t = rand(1.5, 3);
      if (threat.burning) {
        if (Math.random() < dt * 2) ai.dir.set(rand(-1, 1), 0, rand(-1, 1)).normalize();
        want.copy(ai.dir); speed = 6.5;
      } else {
        want.subVectors(feet, threat.pos).setY(0);
        if (want.lengthSq() < 0.01) want.set(rand(-1, 1), 0, rand(-1, 1));
        want.normalize();
        speed = 5.5;
      }
      pose.armsUp = true;
    } else {
      ai.t -= dt;
      const wb = G.walkBound ?? 58;
      const outside = Math.abs(feet.x) > wb || Math.abs(feet.z) > wb;
      if (ai.mode === 'flee' && ai.t <= 0) { ai.mode = 'idle'; ai.t = rand(1, 3); }
      if (ai.mode === 'flee') { want.copy(ai.safe.lengthSq() ? ai.safe : ai.dir); speed = 3.5; }
      else if (ai.mode === 'walk') {
        if (!ai.goal || outside) ai.goal = outside ? new THREE.Vector3(0, feet.y, 0) : this.pickGoal();
        if (!ai.goal) { ai.mode = 'idle'; ai.t = rand(1, 3); }
        else {
          want.subVectors(ai.goal, feet).setY(0);
          const d = want.length();
          want.normalize();
          speed = this.cfg.speed;
          if (d < 1.2 || ai.t <= 0) { ai.mode = 'idle'; ai.t = rand(2, 5); ai.goal = null; }
        }
      } else if (ai.mode === 'chat') {
        const grp = ai.group;
        if (grp) grp.members = grp.members.filter((o) => !o.dead && o.state === 'standing' && o.ai.group === grp && o.ai.mode === 'chat');
        if (!grp || grp.members.length < 2 || G.time > grp.end) this.endChat();
        else {
          // stand in a little circle around the middle of the group, facing in
          const c = new THREE.Vector3();
          for (const o of grp.members) c.add(o.origin());
          c.divideScalar(grp.members.length).setY(feet.y);
          const ring = (0.75 + 0.22 * grp.members.length) * Math.max(1, s);
          const to = c.clone().sub(feet).setY(0);
          const d = to.length();
          if (d > ring + 0.5) { want.copy(to.normalize()); speed = this.cfg.speed; }
          else {
            face = c;
            // take turns talking
            const talker = grp.members[Math.floor(G.time / 2.2) % grp.members.length];
            if (talker === this) { pose.talk = true; pose.seed = this.id; }
            pose.nod = Math.sin(G.time * 2 + this.id) * 0.08;
          }
        }
      } else if (ai.mode === 'gosit') {
        // walk to the front of a free seat, then sit on it
        const st = ai.seat;
        if (!st || !this.seatOk(st.ent) || (st.ent.seated && st.ent.seated[st.i] && st.ent.seated[st.i] !== this) || ai.t <= 0) { this.freeSeat(); ai.mode = 'idle'; ai.t = rand(1, 2); }
        else {
          const { front } = this.seatPoint(st);
          const to = front.clone().sub(feet).setY(0);
          if (to.length() > 0.45 * s + 0.25) { want.copy(to.normalize()); speed = this.cfg.speed; }
          else this.sitOn(st);
        }
      } else if (ai.mode === 'sit') {
        // sit down for a rest
        pose.sit = true;
        pose.headYaw = Math.sin(G.time * 0.5 + this.id) * 0.5;
        if (ai.t <= 0) { ai.mode = 'idle'; ai.t = rand(0.5, 1.5); }
      } else if (ai.mode === 'fetch') {
        // walk over to a small object to pick it up
        const it = ai.item;
        if (!this.canCarry(it) || ai.t <= 0) { ai.item = null; ai.mode = 'idle'; ai.t = rand(1, 2); }
        else {
          const to = tv(it.body.position).sub(feet).setY(0);
          const d = to.length();
          if (d > 0.9 * s + 0.35) { want.copy(to.normalize()); speed = this.cfg.speed; }
          else this.pickUp(it);
        }
      } else if (ai.mode === 'carry') {
        // walk about holding it over your head, then throw it
        pose.carry = true;
        if (!ai.goal) ai.goal = this.pickGoal();
        if (ai.goal && ai.t > 1) {
          want.subVectors(ai.goal, feet).setY(0);
          if (want.length() < 1.2) ai.goal = null; else { want.normalize(); speed = this.cfg.speed * 0.8; }
        }
        if (ai.t <= 0) { ai.mode = 'throw'; ai.t = 0.45; ai.target = this.tossTarget(feet); }
      } else if (ai.mode === 'throw') {
        if (ai.target) face = ai.target;
        pose.toss = clamp(1 - ai.t / 0.45, 0, 1);
        if (ai.t <= 0.12 && ai.carry) this.throwCarry(ai.target);
        if (ai.t <= 0) { ai.mode = 'idle'; ai.t = rand(1, 3); }
      } else if (ai.mode === 'wave') {
        if (!pp || ai.t <= 0) { ai.mode = 'idle'; ai.t = rand(1, 3); }
        else { face = pp; if (ai.t < 2.2) pose.wave = true; }
      } else {
        // idle: look around, then decide what to do next
        ai.look += dt;
        pose.headYaw = Math.sin(ai.look * 0.9 + this.id) * 0.7;
        if (ai.t <= 0) this.decide(feet, pp);
      }
      // say hi when you walk up to them
      if (pp && (ai.mode === 'idle' || ai.mode === 'walk' || ai.mode === 'sit') && !ai.carry && G.time - ai.lastWave > 25) {
        const d = pp.distanceTo(feet);
        if (d < 7 && d > 2) {
          const look = G.aim.dir.dot(feet.clone().sub(pp).normalize());
          if (look > 0.9) { ai.mode = 'wave'; ai.t = 2.6; ai.lastWave = G.time; ai.goal = null; }
        }
      }
      if (kind === 'ninja') {
        ai.jump -= dt;
        if (ai.jump <= 0 && grounded && speed > 0 && this.pathOk(want, 4)) { ai.jump = rand(0.8, 2.5); b.velocity.y = 9; }
      }
      if (ai.mode === 'walk' && kind === 'ninja') speed = this.cfg.speed;
    }

    // never walk off edges, into water or walls (also while fleeing): steer to the nearest safe direction
    if (speed > 0 && grounded) {
      const sd = this.safeDir(want, speed, dt);
      if (sd) want.copy(sd);
      else { speed = 0; if (ai.mode === 'walk') { ai.goal = null; ai.mode = 'idle'; ai.t = rand(0.5, 1.5); } }
    } else if (speed > 0 && !grounded) speed *= 0.3;

    const tvx = want.x * speed, tvz = want.z * speed;
    const k = grounded ? 10 : 1.5;
    b.velocity.x += (tvx - b.velocity.x) * Math.min(1, k * dt);
    b.velocity.z += (tvz - b.velocity.z) * Math.min(1, k * dt);
    let ty = null;
    if (speed > 0.1) ty = Math.atan2(want.x, want.z);
    else if (face) ty = Math.atan2(face.x - feet.x, face.z - feet.z);
    if (ty !== null) {
      let d = ty - this.yaw;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      this.yaw += d * Math.min(1, 8 * dt);
    }
    const hs = Math.hypot(b.velocity.x, b.velocity.z);
    this.moveAmt += (clamp(hs / 3, 0, 1) - this.moveAmt) * Math.min(1, 8 * dt);
    this.phase += dt * (3 + hs * 2.2) / Math.sqrt(s);
    poseHumanoid(this.meshes, s, this.drawOrigin(), this.yaw, this.phase, this.moveAmt, pose);
    if (ai.carry) this.holdCarry(pose.toss);
  }

  // ---- sitting on benches / couches
  seatOk(e) {
    if (!e || e.dead || !e.def.seats || e.frozen || e.burn > 0 || e.carriedBy) return false;
    const b = e.body;
    if (b.velocity.length() > 1.2) return false;
    const up = b.quaternion.vmult(new CANNON.Vec3(0, 1, 0));
    return up.y > 0.85; // still upright
  }
  seatPoint(st) {
    const b = st.ent.body, sc = st.ent.scale;
    const [x, y, z] = st.ent.def.seats[st.i];
    const top = tv(b.pointToWorldFrame(new CANNON.Vec3(x * sc, y * sc, z * sc)));
    const f = tv(b.quaternion.vmult(new CANNON.Vec3(0, 0, 1))).setY(0).normalize();
    const front = top.clone().addScaledVector(f, 0.75 * this.s);
    return { top, f, front, yaw: Math.atan2(f.x, f.z) };
  }
  findSeat(feet) {
    let best = null, bd = 16;
    for (const e of G.ents) {
      if (!e.def.seats || !this.seatOk(e)) continue;
      const d = tv(e.body.position).distanceTo(feet);
      if (d >= bd || Math.abs(e.body.position.y - feet.y) > 2) continue;
      e.seated = e.seated || [];
      const i = e.def.seats.findIndex((_, k) => !e.seated[k]);
      if (i < 0) continue;
      bd = d; best = { ent: e, i };
    }
    return best;
  }
  sitOn(st) {
    const ai = this.ai;
    st.ent.seated = st.ent.seated || [];
    st.ent.seated[st.i] = this;
    ai.seat = st; ai.mode = 'seated'; ai.t = rand(8, 18);
    const b = this.body;
    b.type = CANNON.Body.KINEMATIC;
    b.collisionFilterMask = GROUP.PLAYER; // don't shove the seat around
    b.velocity.setZero();
  }
  freeSeat() {
    const st = this.ai.seat;
    if (st && st.ent.seated && st.ent.seated[st.i] === this) st.ent.seated[st.i] = null;
    this.ai.seat = null;
  }
  leaveSeat() {
    const st = this.ai.seat;
    const b = this.body;
    let front = null;
    if (st && !st.ent.dead) front = this.seatPoint(st).front;
    this.freeSeat();
    if (b) {
      b.type = CANNON.Body.DYNAMIC;
      b.collisionFilterMask = -1;
      b.updateMassProperties();
      b.velocity.setZero();
      if (front) {
        const g = raycast(front.clone().add(new THREE.Vector3(0, 1.5, 0)), front.clone().add(new THREE.Vector3(0, -3, 0)), GROUP.STATIC | GROUP.DYN);
        const fy = g ? g.point.y : front.y - 0.5;
        b.position.set(front.x, fy + 0.95 * this.s + 0.03, front.z);
      }
      b.wakeUp();
    }
    this.ai.mode = 'idle'; this.ai.t = rand(1, 3);
  }
  updateSeated(dt) {
    const ai = this.ai, st = ai.seat, b = this.body, s = this.s;
    ai.t -= dt;
    if (!st || !this.seatOk(st.ent) || ai.t <= 0) { this.leaveSeat(); return; }
    const sp = this.seatPoint(st);
    // hips on the seat: in the sit pose the hips are 0.35*s above the (lowered) feet origin
    b.position.set(sp.top.x + sp.f.x * 0.1 * s, sp.top.y + 0.6 * s, sp.top.z + sp.f.z * 0.1 * s);
    b.velocity.setZero();
    this.yaw = sp.yaw;
    // anything flying into a sitting dummy knocks it off
    for (const o of G.world.bodies) {
      if (o.type !== CANNON.Body.DYNAMIC || o === st.ent.body || o.velocity.lengthSquared() < 36) continue;
      if (Math.abs(o.position.x - b.position.x) < 0.9 && Math.abs(o.position.y - b.position.y) < 1.2 && Math.abs(o.position.z - b.position.z) < 0.9) { afterStep(() => this.knock(tv(o.velocity).multiplyScalar(0.5))); break; }
    }
    this.moveAmt = 0;
    poseHumanoid(this.meshes, s, this.origin(), this.yaw, this.phase, 0, { sit: true, headYaw: Math.sin(G.time * 0.4 + this.id) * 0.6, talk: this.seatChat(st) ? true : undefined, seed: this.id });
  }
  // someone sitting next to you? then chat a bit
  seatChat(st) {
    const others = (st.ent.seated || []).filter((o) => o && o !== this);
    return others.length > 0 && Math.floor(G.time / 2.5 + this.id) % 2 === 0;
  }

  // ---- picking things up
  canCarry(e) {
    if (!e || e.dead || e.kind !== 'item' || (e.carriedBy && e.carriedBy !== this)) return false;
    const b = e.body;
    if (b.type !== CANNON.Body.DYNAMIC && e.carriedBy !== this) return false;
    if (e.def.explosive || e.def.special === 'balloon' || e.frozen || e.burn > 0 || e.thrusters.length || e.antigrav > 0) return false;
    if (b.mass > 28 * this.s ** 3 || (e.def.size ? Math.max(...e.def.size) : (e.def.r || 0.5) * 2) * e.scale > 1.3 * this.s) return false;
    if (G.grab && G.grab.body === b) return false;
    if (G.ropes.some((r) => r.a === b || r.b === b) || G.welds.some((w) => w.bodyA === b || w.bodyB === b)) return false;
    return true;
  }
  findItem(feet) {
    let best = null, bd = 11;
    for (const e of G.ents) {
      if (e.kind !== 'item' || e.carriedBy) continue;
      const p = e.body.position;
      if (Math.abs(p.y - feet.y) > 1.5) continue;
      const d = Math.hypot(p.x - feet.x, p.z - feet.z);
      if (d < bd && e.body.velocity.length() < 1 && this.canCarry(e)) { bd = d; best = e; }
    }
    return best;
  }
  pickUp(e) {
    const ai = this.ai;
    if (ai.carry && ai.carry !== e) this.dropCarry();
    e.carriedBy = this;
    e.body.type = CANNON.Body.KINEMATIC;
    e.body.collisionResponse = false;
    e.body.velocity.setZero(); e.body.angularVelocity.setZero();
    ai.carry = e; ai.item = null; ai.mode = 'carry'; ai.t = rand(2.5, 5); ai.goal = null;
    sfx.grab(e.body.position);
  }
  holdCarry(toss) {
    const e = this.ai.carry;
    if (!e || e.dead) { this.ai.carry = null; return; }
    const hh = (e.def.size ? e.def.size[1] / 2 : e.def.r || 0.5) * e.scale;
    const fwd = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const p = this.drawOrigin().add(new THREE.Vector3(0, 2.2 * this.s + hh, 0));
    if (toss !== undefined) p.addScaledVector(fwd, toss * 0.6 * this.s).y -= toss * 0.5 * this.s;
    e.body.position.set(p.x, p.y, p.z);
    e.body.velocity.set(this.body.velocity.x, 0, this.body.velocity.z);
    e.mesh.position.copy(p);
    e.mesh.quaternion.copy(e.body.quaternion);
  }
  releaseCarry() {
    const e = this.ai.carry;
    this.ai.carry = null;
    if (!e || e.dead) return null;
    e.carriedBy = null;
    e.body.type = CANNON.Body.DYNAMIC;
    e.body.updateMassProperties();
    e.body.wakeUp();
    later(0.15, () => { if (!e.dead) e.body.collisionResponse = true; });
    return e;
  }
  dropCarry() { const e = this.releaseCarry(); if (e) e.body.velocity.set(rand(-1, 1), 1, rand(-1, 1)); }
  throwCarry(target) {
    const e = this.releaseCarry();
    if (!e) return;
    const from = tv(e.body.position);
    const dir = target ? target.clone().sub(from).setY(0) : new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const dist = clamp(dir.length(), 2, 12);
    dir.normalize();
    const vh = clamp(dist * 0.9, 4, 10);
    e.body.velocity.set(dir.x * vh, 4.5, dir.z * vh);
    e.body.angularVelocity.set(rand(-4, 4), rand(-4, 4), rand(-4, 4));
    sfx.fling(from);
  }
  // throw towards a friend nearby (for fun), otherwise just somewhere ahead
  tossTarget(feet) {
    let best = null, bd = 10;
    for (const o of G.dummies) {
      if (o === this || o.state !== 'standing') continue;
      const d = o.origin().distanceTo(feet);
      if (d > 3 && d < bd) { bd = d; best = o; }
    }
    if (best && Math.random() < 0.6) return best.origin().add(new THREE.Vector3(0, 1, 0));
    const a = this.yaw + rand(-0.8, 0.8);
    return feet.clone().add(new THREE.Vector3(Math.sin(a) * 7, 0, Math.cos(a) * 7));
  }

  // pick the next thing to do: walk somewhere, chat with someone nearby, wave at you, or keep looking around
  decide(feet, pp) {
    const ai = this.ai;
    const r = Math.random();
    if (r < 0.3) {
      // join a chat that's already going (up to 5 people), or start one with someone close
      let grp = null, gd = 12;
      for (const o of G.dummies) {
        const g = o.ai.group;
        if (o === this || !g || o.ai.mode !== 'chat' || g.members.length >= 5 || G.time > g.end - 3) continue;
        const d = o.origin().distanceTo(feet);
        if (d < gd) { gd = d; grp = g; }
      }
      if (grp) { this.joinChat(grp); grp.end = Math.max(grp.end, G.time + rand(3, 6)); return; }
      let best = null, bd = 12;
      for (const o of G.dummies) {
        if (o === this || o.state !== 'standing' || o.cfg.ai === 'zombie' || o.ai.mode === 'chat' || o.ai.mode === 'flee' || o.ai.carry || o.ai.seat || o.deadT > 0) continue;
        const d = o.origin().distanceTo(feet);
        if (d < bd) { bd = d; best = o; }
      }
      if (best) {
        const g = { members: [], end: G.time + rand(6, 12) };
        this.joinChat(g); best.joinChat(g);
        return;
      }
    }
    if (r < 0.4 && pp && pp.distanceTo(feet) < 14 && G.time - ai.lastWave > 12) { ai.mode = 'wave'; ai.t = 3; ai.lastWave = G.time; return; }
    if (r < 0.56 && this.cfg.ai !== 'ninja') {
      const st = this.findSeat(feet);
      if (st) { ai.mode = 'gosit'; ai.seat = st; ai.t = 14; st.ent.seated[st.i] = this; return; } // reserve it
      if (r < 0.5) { ai.mode = 'sit'; ai.t = rand(5, 12); return; }
    }
    if (r < 0.68) { const it = this.findItem(feet); if (it) { ai.mode = 'fetch'; ai.item = it; ai.t = 10; return; } }
    if (r < 0.85) { ai.mode = 'walk'; ai.goal = this.pickGoal(); ai.t = 14; if (ai.goal) return; }
    ai.mode = 'idle'; ai.t = rand(2, 5);
  }

  updateRagdoll(dt) {
    for (const n of PARTS) { const e = this.parts[n]; e.mesh.position.copy(drawPos(e.body)); e.mesh.quaternion.copy(drawQuat(e.body)); }
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
    if (held && this.deadT <= 0 && this.ko <= 0) {
      // being held: kick and wave the arms and legs about
      for (const n of ['armL', 'armR', 'legL', 'legR']) {
        const pb = this.parts[n].body;
        const ph = G.time * (n.startsWith('arm') ? 13 : 9) + (n.endsWith('L') ? 0 : Math.PI);
        pb.angularVelocity.x += Math.sin(ph) * 40 * dt; pb.angularVelocity.z += Math.cos(ph * 0.7) * 25 * dt;
        pb.wakeUp();
      }
      if (Math.random() < dt * 0.8) sfx.oof(this.center(), this.pitch * 1.15);
    }
    if (this.deadT > 0) {
      // dead: lie there, then fade out and come back home
      this.deadT += dt;
      if (this.deadT > 6 && !held) { this.respawn(); }
      return;
    }
    if (this.ko > 0) {
      this.ko -= dt;
      if (Math.random() < dt * 4) {
        const h = this.parts.head.body.position;
        FX.particle({ pos: new THREE.Vector3(h.x + rand(-0.3, 0.3), h.y + 0.45 * this.s, h.z + rand(-0.3, 0.3)), vel: new THREE.Vector3(rand(-0.4, 0.4), 0.6, rand(-0.4, 0.4)), color: 0xffe14a, size: 0.12, life: 0.7, glow: true, add: true, gravity: 0 });
      }
      if (inWater && this.downTime > 14 && !busy) this.respawn();
      return;
    }
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

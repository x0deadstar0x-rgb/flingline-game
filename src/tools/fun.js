// Weather and wild stuff: Tornado, Earthquake, Lightning Storm, Meteor Shower, Jetpack, Water Cannon.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, rand, toast, clamp, tv, later } from '../core.js';
import { explode, ignite, damage } from '../items.js';
import { carveTerrain } from '../terrain.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
import { aimPoint, aimHit, bodiesNear, dummiesNear, projectile, mkMesh } from './common.js';
import { mulberry } from '../net.js';

function cool(tool, dt) { tool.cd = Math.max(0, (tool.cd || 0) - dt); }
const ground = (x, z, fb) => { const g = G.groundAt ? G.groundAt(x, z) : -1e9; return g > -1e8 ? g : fb; };
// Weather goes on for seconds after the click, so each one gets its own random numbers, seeded
// at the click (in a room that's the click's shared random numbers): where it wanders, cracks or
// strikes is then the same on every computer. And it decides in fixed steps of its own time,
// not per frame, so a faster screen doesn't decide more often.
const ownRandom = () => mulberry((Math.random() * 4294967296) >>> 0);

// ---------------------------------------------------------------- tornado
const tornados = [];
const ringGeo = new THREE.TorusGeometry(1, 0.18, 5, 22);
// (every tornado's rings share these two)
const ringMats = [0xb8b2a6, 0x9a9488].map((color) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.38, depthWrite: false }));
const WANDER = 1 / 60;
function makeTornado(p) {
  const g = new THREE.Group();
  const rings = [];
  for (let i = 0; i < 14; i++) {
    const m = new THREE.Mesh(ringGeo, ringMats[i % 2]);
    m.rotation.x = Math.PI / 2;
    g.add(m); rings.push(m);
  }
  G.scene.add(g);
  const t = { pos: p.clone(), vel: new THREE.Vector3(rand(-1, 1), 0, rand(-1, 1)).normalize().multiplyScalar(4), t: 0, life: 14, g, rings, rnd: ownRandom(), wt: 0 };
  tornados.push(t);
  sfx.plane();
}
const _F = new CANNON.Vec3();
G.extraForces.push(() => {
  for (const t of tornados) {
    const k = Math.min(1, t.t / 1.5) * (t.t > t.life - 1.5 ? (t.life - t.t) / 1.5 : 1);
    const base = t.pos.y;
    for (const b of G.world.bodies) {
      if (b.type !== CANNON.Body.DYNAMIC) continue;
      const dx = b.position.x - t.pos.x, dz = b.position.z - t.pos.z, h = b.position.y - base;
      if (h < -2 || h > 36) continue;
      const r = Math.hypot(dx, dz), R = 4 + h * 0.38;
      if (r > R + 6 || r < 0.01) continue;
      // spin round, pull in, lift up (and throw out at the top)
      const tx = -dz / r, tz = dx / r, ix = -dx / r, iz = -dz / r;
      const top = h > 28;
      const wantX = tx * 22 + ix * (top ? -8 : 7), wantZ = tz * 22 + iz * (top ? -8 : 7), wantY = top ? 2 : 9;
      const kk = (b.isPlayer ? 1.4 : 2.6) * k * (r < R ? 1 : 1 - (r - R) / 6);
      const m = b.mass;
      _F.set((wantX - b.velocity.x) * kk * m, (wantY - b.velocity.y) * kk * m + 9.82 * m * 0.7 * k, (wantZ - b.velocity.z) * kk * m);
      b.applyForce(_F);
      b.angularVelocity.y += 0.2 * k;
      b.wakeUp();
    }
  }
});
export function updateTornados(dt) {
  for (let i = tornados.length - 1; i >= 0; i--) {
    const t = tornados[i];
    t.t += dt;
    // wander about (its own random numbers, in fixed steps)
    for (t.wt += dt; t.wt >= WANDER; t.wt -= WANDER) {
      t.vel.x += (t.rnd() * 6 - 3) * WANDER; t.vel.z += (t.rnd() * 6 - 3) * WANDER;
      t.vel.clampLength(2, 6);
    }
    t.pos.addScaledVector(t.vel, dt);
    t.pos.y = ground(t.pos.x, t.pos.z, t.pos.y);
    const k = Math.min(1, t.t / 1.5) * (t.t > t.life - 1.5 ? Math.max(0, (t.life - t.t) / 1.5) : 1);
    t.rings.forEach((m, j) => {
      const h = j * 2.4;
      m.position.set(t.pos.x + Math.sin(t.t * 2 + j) * 0.6, t.pos.y + h, t.pos.z + Math.cos(t.t * 2 + j) * 0.6);
      m.scale.setScalar((1.2 + h * 0.36) * k + 0.01);
      m.rotation.z += dt * (6 - j * 0.2);
    });
    for (let j = 0; j < 4; j++) {
      const a = rand(0, Math.PI * 2), h = rand(0, 30), r = (1.5 + h * 0.36) * k;
      FX.particle({ pos: new THREE.Vector3(t.pos.x + Math.cos(a) * r, t.pos.y + h, t.pos.z + Math.sin(a) * r), vel: new THREE.Vector3(-Math.sin(a) * 14, rand(2, 6), Math.cos(a) * 14), color: [0xa8a196, 0x8c867c, 0xc9c2b6][j % 3], size: rand(0.5, 1.4), life: 0.7, gravity: 0, drag: 0.5, grow: 0.5, shrink: false, opacity: 0.5, floor: false, spin: 2 });
    }
    for (const d of G.dummies) if (d.state === 'standing' && d.origin().distanceTo(t.pos) < 9) d.knock(null);
    if (G.player && G.player.pos().distanceTo(t.pos) < 30) G.shake = Math.max(G.shake, 0.12);
    if (t.t >= t.life) { G.scene.remove(t.g); tornados.splice(i, 1); }
  }
}
export function clearTornados() { for (const t of tornados) G.scene.remove(t.g); tornados.length = 0; quake = null; storms.length = 0; }
G.clearWeather = clearTornados;

// ---------------------------------------------------------------- earthquake
let quake = null;
const JOLT = 0.09;
// how hard it shakes at time t of the quake (0..1)
const quakeK = (q, t) => (t < 1 ? t : t > q.life - 1.5 ? Math.max(0, (q.life - t) / 1.5) : 1);
export function updateQuake(dt) {
  if (!quake) return;
  quake.t += dt;
  G.shake = Math.max(G.shake, 0.55 * quakeK(quake, quake.t));
  // a jolt every 0.09 s of the quake's own time: the same jolts on every computer
  for (; quake.next <= quake.t && quake.next < quake.life; quake.next += JOLT) jolt(quake, quakeK(quake, quake.next));
  if (quake.t >= quake.life) quake = null;
}
function jolt(q, k) {
  const c = q.pos;
  // everything loose jumps about (in a room the host keeps those in step anyway)
  for (const b of G.world.bodies) {
    if (b.type !== CANNON.Body.DYNAMIC) continue;
    const d = Math.hypot(b.position.x - c.x, b.position.z - c.z);
    if (d > 70) continue;
    const f = (1 - d / 70) * k;
    b.velocity.x += rand(-2.4, 2.4) * f; b.velocity.z += rand(-2.4, 2.4) * f; b.velocity.y += rand(0, 2.2) * f;
    b.angularVelocity.x += rand(-1, 1) * f; b.angularVelocity.z += rand(-1, 1) * f;
    b.wakeUp();
  }
  for (const d of G.dummies) if (d.state === 'standing' && d.origin().distanceTo(c) < 60 && Math.random() < 0.15 * k) { d.knock(null); d.say && d.say('flee'); }
  // cracks open in the ground, buildings crumble (from the quake's own random numbers)
  const r = q.rnd, rr = (a, b) => a + r() * (b - a);
  if (r() < 0.35 * k) {
    const a = rr(0, Math.PI * 2), d = rr(4, 45), x = c.x + Math.cos(a) * d, z = c.z + Math.sin(a) * d;
    const y = ground(x, z, c.y);
    carveTerrain(new THREE.Vector3(x, y + 0.2, z), rr(0.9, 2.2), { flat: 1.4, sink: 0.6 });
    FX.smoke(new THREE.Vector3(x, y + 0.5, z), 3, 0x9a8a6a, 1);
  }
  if (G.blastBuildings && r() < 0.5 * k) {
    const a = rr(0, Math.PI * 2), d = rr(5, 60);
    G.blastBuildings(new THREE.Vector3(c.x + Math.cos(a) * d, c.y + rr(1, 25), c.z + Math.sin(a) * d), rr(1, 2.4), { quiet: true });
  }
  if (Math.random() < 0.2) sfx.crumble(c);
}

// ---------------------------------------------------------------- lightning storm
const storms = [];
export function updateStorms(dt) {
  for (let i = storms.length - 1; i >= 0; i--) {
    const s = storms[i];
    s.t += dt;
    // a dark, flickering cloud
    if (Math.random() < 0.6) FX.particle({ pos: s.pos.clone().add(new THREE.Vector3(rand(-18, 18), 38 + rand(-2, 2), rand(-18, 18))), vel: new THREE.Vector3(rand(-1, 1), 0, rand(-1, 1)), color: [0x3a3d46, 0x2b2e36, 0x4a4e58][i % 3], size: rand(4, 7), life: 2.5, gravity: 0, drag: 0.2, grow: 0.2, shrink: false, opacity: 0.85, floor: false, spin: 0.2 });
    // bolts at times (and spots) from the storm's own random numbers (s.next: when, in storm time)
    for (; s.next <= s.t && s.next < s.life; s.next += 0.25 + s.rnd() * 0.35) strike(s);
    if (s.t > s.life + 2.5) storms.splice(i, 1);
  }
}
function strike(s) {
  const r = s.rnd, rr = (a, b) => a + r() * (b - a);
  const a = rr(0, Math.PI * 2), d = Math.sqrt(r()) * 18;
  const x = s.pos.x + Math.cos(a) * d, z = s.pos.z + Math.sin(a) * d;
  const top = new THREE.Vector3(x + rr(-4, 4), s.pos.y + 38, z + rr(-4, 4));
  const h = aimHitDown(x, z, s.pos.y + 36);
  const hit = h ? h.point : new THREE.Vector3(x, ground(x, z, s.pos.y), z);
  FX.lightning(top, hit, 0xd7ecff);
  FX.lightning(top.clone().add(new THREE.Vector3(rand(-2, 2), -6, rand(-2, 2))), hit, 0xffffff);
  FX.flashAt(hit, 160, 0xcfe6ff);
  sfx.zap(hit); later(rand(0.05, 0.3), () => sfx.explosion(0.5, hit));
  explode(hit.clone().add(new THREE.Vector3(0, 0.3, 0)), 0.45, { fire: true });
  if (h && h.body && h.body.ent) { ignite(h.body.ent, 6); damage(h.body.ent, 60, null); }
}
function aimHitDown(x, z, y) {
  const prev = { s: G.aim.start, d: G.aim.dir.clone() };
  G.aim.start = new THREE.Vector3(x, y, z); G.aim.dir.set(0, -1, 0);
  const h = aimHit(y + 120);
  G.aim.start = prev.s; G.aim.dir.copy(prev.d);
  return h;
}

// ---------------------------------------------------------------- meteor shower
const rockGeo = new THREE.IcosahedronGeometry(0.9, 0);
function meteorShower(c) {
  sfx.whistle(2);
  for (let i = 0; i < 14; i++) {
    // where and when each one comes down is decided now, from the click's random numbers (in a
    // room: the same on every computer)
    const target = c.clone().add(new THREE.Vector3(rand(-22, 22), 0, rand(-22, 22)));
    target.y = ground(target.x, target.z, c.y);
    const start = target.clone().add(new THREE.Vector3(rand(-25, 25), 70, rand(-25, 25)));
    later(i * 0.28 + rand(0, 0.2), () => {
      const mesh = mkMesh(rockGeo, 0x5a3a2a);
      mesh.material.emissive = new THREE.Color(0xff3a00); mesh.material.emissiveIntensity = 0.7;
      projectile({
        pos: start, vel: target.clone().sub(start).divideScalar(1.1), life: 1.1, mesh, collide: true,
        trail: (p) => FX.particle({ pos: p.clone(), vel: new THREE.Vector3(), color: Math.random() < 0.5 ? 0xff8a1c : 0x555555, size: rand(0.4, 0.8), life: 0.5, glow: true, add: true, gravity: 0, grow: 1, shrink: false }),
        onHit: (h) => explode(h.point.clone().add(new THREE.Vector3(0, 0.4, 0)), 1.3, { fire: true }),
        end: (p) => explode(p.clone(), 1.3, { fire: true }),
      });
    });
  }
}

// ---------------------------------------------------------------- the tools
export const funTools = [
  {
    id: 'tornado', name: 'Tornado', icon: '🌪️', color: 0x9a9488, hint: 'Click a spot: a tornado that wanders around sucking things up (14 s)',
    desc: 'A spinning funnel touches down where you aim and wanders off on its own, sucking up everything in its path: crates, cars, people, you. It throws them out at the top.',
    down() {
      if (this.cd > 0) return; this.cd = 1.5;
      if (tornados.length >= 3) { toast('That\'s enough tornados for now!'); return; }
      const h = aimPoint(300, 30);
      makeTornado(new THREE.Vector3(h.point.x, ground(h.point.x, h.point.z, h.point.y), h.point.z));
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'quake', name: 'Earthquake', icon: '🌋', color: 0x8a6a46, hint: 'Click: a 10 s earthquake around where you aim (cracks the ground, shakes buildings apart)',
    desc: 'The ground shakes hard for 10 seconds: everything jumps and topples, people fall over, cracks open in the ground and buildings shed blocks (damaged ones can come down).',
    down() {
      if (this.cd > 0) return; this.cd = 2;
      const h = aimPoint(300, 20);
      quake = { pos: h.point.clone(), t: 0, life: 10, next: 0, rnd: ownRandom() };
      sfx.nuke(h.point, 0, 0.25);
      toast('EARTHQUAKE!');
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'storm', name: 'Lightning Storm', icon: '🌩️', color: 0x7a8aa8, hint: 'Click a spot: a storm cloud that throws lightning down for 8 s',
    desc: 'A black storm cloud gathers where you aim and lightning strikes all around it for 8 seconds: each bolt blasts, sets things on fire and makes people jump.',
    down() {
      if (this.cd > 0) return; this.cd = 2;
      const h = aimPoint(300, 30);
      storms.push({ pos: h.point.clone(), t: 0, life: 8, next: 0.8, rnd: ownRandom() });
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'meteors', name: 'Meteor Shower', icon: '🌠', color: 0xff7a1a, hint: 'Click a spot: 14 burning meteors rain down around it',
    desc: 'A whole shower of burning rocks: fourteen meteors over four seconds, scattered around where you aim. Each one blows a crater and sets things alight.',
    down() {
      if (this.cd > 0) return; this.cd = 4;
      meteorShower(aimPoint(300, 40).point.clone());
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'jetpack', name: 'Jetpack', icon: '🚀', color: 0xffb703, hint: 'Hold click: fly up (steer with your movement keys)',
    desc: 'Rocket boots for your back: hold to blast upwards, steer with the movement keys, let go to fall (or glide down in bursts).',
    held(dt) {
      const b = G.player.body;
      b.velocity.y = Math.min(13, b.velocity.y + 26 * dt);
      G.player.jumpT = 0.2; G.player.hover = null;
      const f = G.player.feet();
      FX.particle({ pos: f.clone().add(new THREE.Vector3(rand(-0.2, 0.2), -0.2, rand(-0.2, 0.2))), vel: new THREE.Vector3(rand(-1, 1), -10, rand(-1, 1)), color: Math.random() < 0.5 ? 0xffb347 : 0xff6a1a, size: rand(0.12, 0.25), life: 0.35, glow: true, add: true, gravity: 0, drag: 1 });
      sfx.flame();
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'water', name: 'Water Cannon', icon: '💦', color: 0x3bb3ff, hint: 'Hold click: a high-pressure water jet: pushes things away, puts out fires',
    desc: 'A fire hose on full blast: shoves things and people back, knocks people over, and puts out anything that\'s burning.',
    held(dt) {
      this.acc = (this.acc || 0) + dt;
      const dir = G.aim.dir.clone(), hand = G.aim.hand.clone();
      for (let i = 0; i < 3; i++) FX.particle({ pos: hand.clone(), vel: dir.clone().multiplyScalar(rand(26, 34)).add(new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1))), color: [0xbfe9ff, 0x7fd0f5, 0xffffff][i], size: rand(0.12, 0.22), life: 0.7, gravity: 9, drag: 0.4, glow: false });
      if (this.acc < 0.08) return;
      this.acc = 0;
      sfx.splash(hand);
      for (const o of bodiesNear(G.aim.start, 22, dir, 0.85)) {
        const b = o.b, f = 1 - o.d / 22;
        b.velocity.x += dir.x * 3.2 * f; b.velocity.y += (dir.y * 3.2 + 0.6) * f; b.velocity.z += dir.z * 3.2 * f;
        b.wakeUp();
        if (b.ent && b.ent.burn > 0) { b.ent.burn = 0; G.burning = Math.max(0, (G.burning || 1) - 1); FX.smoke(tv(b.position), 2, 0xdddddd, 0.6); }
      }
      for (const d of dummiesNear(G.aim.start, 22)) {
        const to = d.center().sub(G.aim.start);
        if (to.normalize().dot(dir) < 0.85) continue;
        if (d.burn > 0) d.burn = 0;
        if (d.state === 'standing' && Math.random() < 0.3) d.knock(dir.clone().multiplyScalar(6));
      }
      if (G.firePatches) for (const p of G.firePatches) if (p.pos.distanceTo(G.aim.start) < 22 && p.pos.clone().sub(G.aim.start).normalize().dot(dir) > 0.8) p.t = Math.min(p.t, 0.3);
    },
    update(dt) { cool(this, dt); },
  },
];

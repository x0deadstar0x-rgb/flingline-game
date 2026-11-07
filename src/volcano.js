// The Mega World's volcano. It smokes all the time. Throw things into its lava lake and the
// pressure builds (it rumbles, the smoke turns black); it takes a lot. When it has had enough it
// ERUPTS:
//  - the ground shakes harder and harder, the crater spits fire, then the top of the mountain is
//    blown off in a blast that knocks everything back and flattens the trees around it
//  - a black ash column climbs hundreds of metres and spreads out, with lightning crackling in it
//  - burning ash clouds race down the slopes, setting fire to what they pass
//  - glowing lava bombs rain down far and wide (they blow craters and leave boulders)
//  - real lava pours over the rim on every side and runs down the slopes (it sets things on fire,
//    turns to rock as it cools, and to black glass where it reaches the sea)
//  - ash falls, the ground goes grey for hundreds of metres, and the sky stays dark for minutes
// In a room, the host decides when it blows and tells everyone (same seed, same eruption).
import * as THREE from 'three';
import { G, rand, clamp, toast, popup, later } from './core.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { createEnt, explode, removeEnt, ITEMS, ignite } from './items.js';
import { projectile, mkMesh } from './tools/common.js';
import { pourLiquid } from './fluid.js';
import { paintBurn, refreshFar, carveTerrain } from './terrain.js';

let VO = null;
const NP = 900;
const NEED = 300; // pressure it takes to blow
const puffGeo = new THREE.IcosahedronGeometry(1, 1);
const rockGeo = new THREE.IcosahedronGeometry(0.9, 0);
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _v = new THREE.Vector3(), _c = new THREE.Color();

function mulberry(seed) { let s = seed >>> 0 || 1; return () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

// o: { x, z, level (lava lake surface), craterR, coneR, ground(x, z) }
export function initVolcano(o) {
  clearVolcano();
  const mesh = new THREE.InstancedMesh(puffGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0, flatShading: true, transparent: true, opacity: 0.9, depthWrite: false }), NP);
  mesh.frustumCulled = false;
  mesh.castShadow = false;
  for (let i = 0; i < NP; i++) { mesh.setMatrixAt(i, _m.makeScale(0, 0, 0)); mesh.setColorAt(i, _c.setHex(0xbbb5ad)); }
  G.scene.add(mesh);
  VO = {
    ...o, mesh, puffs: [], next: 0, pressure: 0, said: 0, t: 0, erupt: null, rumbleT: 0, swallowT: new WeakMap(),
    top: new THREE.Vector3(o.x, o.level, o.z),
  };
  for (let i = 0; i < NP; i++) VO.puffs.push({ on: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, s: 1, s1: 1, age: 0, life: 1, col: 0xbbb5ad, k: 0 });
}
export function clearVolcano() {
  if (!VO) return;
  VO.mesh.geometry !== puffGeo && VO.mesh.geometry.dispose();
  VO.mesh.material.dispose();
  VO.mesh.removeFromParent();
  if (VO.erupt && G.tintSky) G.tintSky(0x3d3530, 0);
  VO = null;
}
export function volcanoState() { return VO ? { pressure: Math.round(VO.pressure / NEED * 100), erupting: !!VO.erupt, t: VO.erupt ? +VO.erupt.t.toFixed(1) : 0 } : null; }

function puff(x, y, z, vx, vy, vz, s, s1, life, col) {
  const p = VO.puffs[VO.next];
  VO.next = (VO.next + 1) % NP;
  Object.assign(p, { on: true, x, y, z, vx, vy, vz, s, s1, age: 0, life, col });
  VO.mesh.setColorAt(VO.puffs.indexOf(p), _c.setHex(col));
  if (VO.mesh.instanceColor) VO.mesh.instanceColor.needsUpdate = true;
}

// ---------------------------------------------------------------- feeding it
const near = () => VO && G.camera && Math.hypot(G.camera.position.x - VO.x, G.camera.position.z - VO.z) < 520;
G.onLavaSwallow = (e, q, dummy) => {
  if (!VO || VO.erupt) return false;
  const p = e ? e.body.position : dummy ? dummy.origin() : null;
  if (!p || Math.hypot(p.x - VO.x, p.z - VO.z) > VO.craterR + 2) return false;
  let add;
  if (dummy) {
    if ((VO.swallowT.get(dummy) || -99) > G.time - 6) return false;
    VO.swallowT.set(dummy, G.time);
    add = 14;
  } else {
    add = clamp(4 + (e.vol || 0.1) * 10 + (e.def && e.def.explosive ? 10 : 0), 4, 30);
    // it melts in a burst of fire
    const at = new THREE.Vector3(p.x, q.level + 0.4, p.z);
    FX.fireball(at, 1.6 + Math.min(2, (e.vol || 0.1) * 2), 0.5);
    FX.smoke(at, 4, 0x4a4440, 1.6);
    sfx.sizzle(at);
    removeEnt(e, true);
  }
  VO.pressure += add;
  const pct = Math.min(100, Math.round(VO.pressure / NEED * 100));
  if (near()) {
    const msg = pct >= 100 ? 'The volcano is going to BLOW!' : pct >= 75 ? `The volcano shakes… it's about to blow (${pct}%)` : pct >= 45 ? `Black smoke pours out of the volcano (${pct}%)` : `The volcano swallowed it… it rumbles (${pct}%)`;
    if (G.time - VO.said > 1.2 || pct >= 100) { toast(msg); VO.said = G.time; }
    sfx.nuke(VO.top, 0, 0.12 + pct / 600);
    G.shake = Math.max(G.shake, 0.15 + pct / 400);
  }
  if (VO.pressure >= NEED && !(G.net && G.net.active && !G.net.host)) {
    const seed = (Math.random() * 4294967295) >>> 0;
    if (G.shareWorldEvent) G.shareWorldEvent({ what: 'erupt', seed });
    startEruption(seed);
  }
  return !dummy;
};
// (a room's host says it erupts)
const prevWorldEvent = G.onWorldEvent;
G.onWorldEvent = (d) => {
  if (d && d.what === 'erupt') { if (VO && !VO.erupt) startEruption(d.seed >>> 0); return; }
  if (prevWorldEvent) prevWorldEvent(d);
};
// explosions in the crater build pressure too
G.volcanoBlast = (pos, power) => {
  if (!VO || VO.erupt) return;
  if (Math.hypot(pos.x - VO.x, pos.z - VO.z) > VO.craterR + 4 || pos.y > VO.level + 14) return;
  G.onLavaSwallow({ body: { position: pos }, vol: power * 0.9, def: null, fake: true }, { level: VO.level });
};

// ---------------------------------------------------------------- the eruption
export function startEruption(seed = 1) {
  if (!VO || VO.erupt) return;
  const R = mulberry(seed);
  const r = (a, b) => a + (b - a) * R();
  // everything is decided now, from the seed (so it's the same for everyone in a room)
  const bombs = [];
  for (let i = 0; i < 160; i++) bombs.push({ t: 8.2 + 40 * (i / 160) ** 1.7 + r(0, 0.4), az: r(0, Math.PI * 2), el: r(0.8, 1.42), sp: r(26, 68), size: r(0.8, 2.6), boulder: R() < 0.5 });
  const vents = [];
  const nv = 6 + Math.floor(R() * 3);
  const a0 = r(0, Math.PI * 2);
  for (let i = 0; i < nv; i++) vents.push({ az: a0 + (i / nv) * Math.PI * 2 + r(-0.3, 0.3), rate: r(22, 30), t0: r(9, 12), t1: r(36, 48) });
  // burning ash clouds racing down the slopes
  const flows = [];
  const nf = 5 + Math.floor(R() * 3);
  for (let i = 0; i < nf; i++) flows.push({ az: (i / nf) * Math.PI * 2 + r(-0.35, 0.35), sp: r(24, 34), r: VO.craterR + 6, max: r(200, 290), t0: r(8.2, 11), hitT: 0 });
  VO.erupt = { t: 0, bombs, bi: 0, vents, flows, ashR: VO.craterR, ashDone: false, boom: false, seed, boltT: 0, jolt: 0, spit: 0 };
  VO.pressure = 0;
  if (near()) toast('🌋 The volcano is about to ERUPT!');
}
const BOOM_T = 8; // seconds of shaking before it blows
// the top of the mountain blows off: everything around is thrown back, trees go flat
function summitBlast(dist) {
  const at = VO.top.clone().add(new THREE.Vector3(0, 10, 0));
  carveTerrain(new THREE.Vector3(VO.x, VO.level + 16, VO.z), 25, { sphere: true });
  VO.craterR = Math.max(VO.craterR, 24);
  for (const [s, life] of [[18, 1.2], [32, 1.6], [50, 2.2]]) FX.fireball(at, s, life);
  FX.ring(at, 320, 0xffb070, 2.6);
  FX.ring(new THREE.Vector3(VO.x, VO.level - 20, VO.z), 260, 0x8a7a6a, 3.2);
  sfx.nuke(at, dist / 340, 1.6);
  later(0.4, () => sfx.nuke(at, dist / 340, 1));
  if (dist < 1200) G.shake = Math.max(G.shake, 3 * clamp(1 - dist / 1200, 0.2, 1));
  if (dist < 450) { const fl = document.getElementById('whiteflash'); if (fl) { fl.style.background = '#ff7a2a'; fl.classList.add('on'); setTimeout(() => { fl.classList.remove('on'); setTimeout(() => { fl.style.background = ''; }, 1500); }, 180); } }
  popup('ERUPTION!', at.clone().add(new THREE.Vector3(0, 20, 0)), '#ff6a2a', 46);
  // the blast: everything within a couple of hundred metres is thrown back from the mountain
  const R = 260;
  for (const e of G.ents) {
    if (e.dead) continue;
    const b = e.body, dx = b.position.x - VO.x, dz = b.position.z - VO.z, d = Math.hypot(dx, dz);
    if (d > R || b.type !== 1) continue;
    const f = (1 - d / R) * 28 + 4;
    b.velocity.x += dx / (d || 1) * f; b.velocity.y += f * 0.45; b.velocity.z += dz / (d || 1) * f;
    b.wakeUp();
  }
  for (const d of G.dummies) {
    const o = d.origin(), dd = Math.hypot(o.x - VO.x, o.z - VO.z);
    if (dd < 230 && d.state === 'standing') d.knock(new THREE.Vector3(o.x - VO.x, 4, o.z - VO.z).normalize().multiplyScalar(14 * (1 - dd / 230) + 3));
  }
  const pp = G.player ? G.player.pos() : null;
  if (pp) {
    const dd = Math.hypot(pp.x - VO.x, pp.z - VO.z);
    if (dd < 220) { G.player.fling(new THREE.Vector3(pp.x - VO.x, 0, pp.z - VO.z).normalize().multiplyScalar(30 * (1 - dd / 220) + 6).add(new THREE.Vector3(0, 10, 0))); toast('The blast throws you back!'); }
  }
  if (G.blowTrees) G.blowTrees(VO.x, VO.z, 210, new THREE.Vector3(VO.x, 0, VO.z), 32);
  // rocks from the summit fly out
  if (ITEMS.boulder) for (let i = 0; i < 10; i++) {
    const a = rand(0, Math.PI * 2);
    createEnt(ITEMS.boulder, at.clone().add(new THREE.Vector3(Math.cos(a) * 12, rand(-4, 6), Math.sin(a) * 12)), { spawned: true, scale: rand(0.8, 1.6), color: 0x3b302a, vel: new THREE.Vector3(Math.cos(a) * rand(18, 34), rand(14, 30), Math.sin(a) * rand(18, 34)) });
  }
}
// a burning ash cloud rolling down a slope: knocks, burns and greys what it passes
function updateFlow(f, E, dt) {
  if (E.t < f.t0 || f.r >= f.max) return;
  f.sp = Math.max(8, f.sp - dt * 0.6);
  f.r += f.sp * dt;
  const x = VO.x + Math.cos(f.az) * f.r, z = VO.z + Math.sin(f.az) * f.r;
  const gy = VO.ground(x, z);
  f.puffT = (f.puffT || 0) - dt;
  if (f.puffT <= 0) {
    f.puffT = 0.15;
    const s = rand(6, 11) + f.r * 0.03;
    puff(x + rand(-8, 8), gy + rand(1, 5), z + rand(-8, 8), Math.cos(f.az) * f.sp * 0.25, rand(0.6, 2.5), Math.sin(f.az) * f.sp * 0.25, s, s * rand(2, 3.2), rand(5, 8), Math.random() < 0.8 ? 0x3a332f : 0x5a4a3e);
  }
  f.hitT -= dt;
  if (f.hitT > 0) return;
  f.hitT = 0.25;
  const W = 16;
  for (const e of G.ents) {
    if (e.dead || e.body.type !== 1) continue;
    const p = e.body.position;
    if ((p.x - x) ** 2 + (p.z - z) ** 2 > W * W) continue;
    e.body.velocity.x += Math.cos(f.az) * 6; e.body.velocity.y += 3; e.body.velocity.z += Math.sin(f.az) * 6; e.body.wakeUp();
    if (Math.random() < 0.5) ignite(e, 6);
  }
  for (const d of G.dummies) {
    const o = d.origin();
    if ((o.x - x) ** 2 + (o.z - z) ** 2 > W * W) continue;
    if (d.state === 'standing') d.knock(new THREE.Vector3(Math.cos(f.az) * 8, 4, Math.sin(f.az) * 8));
    d.hurt(14, null); d.ignite && d.ignite();
  }
  const pp = G.player ? G.player.pos() : null;
  if (pp && (pp.x - x) ** 2 + (pp.z - z) ** 2 < W * W && pp.y < gy + 12) { G.player.fling(new THREE.Vector3(Math.cos(f.az) * 16, 8, Math.sin(f.az) * 16)); toast('Caught in the burning ash cloud!'); }
  if (G.blowTrees) G.blowTrees(x, z, 12, new THREE.Vector3(VO.x, 0, VO.z), 14);
  paintBurn(x, z, 0, 9, 1, 0.6, 9);
}
function launchBomb(b) {
  const c = VO.top;
  const dir = new THREE.Vector3(Math.cos(b.az) * Math.cos(b.el), Math.sin(b.el), Math.sin(b.az) * Math.cos(b.el));
  const mesh = mkMesh(rockGeo, 0x3a2a22);
  mesh.material.emissive = new THREE.Color(0xff4a10); mesh.material.emissiveIntensity = 1;
  mesh.scale.setScalar(b.size);
  projectile({
    pos: c.clone().add(new THREE.Vector3(Math.cos(b.az) * 3, 3, Math.sin(b.az) * 3)), vel: dir.multiplyScalar(b.sp), gravity: 9.8, life: 16, mesh, collide: true, water: true,
    trail: (p) => {
      mesh.rotation.x += 0.15; mesh.rotation.z += 0.1;
      FX.particle({ pos: p, vel: new THREE.Vector3(rand(-0.5, 0.5), rand(0, 1), rand(-0.5, 0.5)), color: Math.random() < 0.35 ? 0xff7a1a : 0x3c3734, size: rand(0.5, 0.9) * b.size, life: rand(0.8, 1.6), glow: false, gravity: -0.6, drag: 0.8, grow: 1.6, shrink: false, opacity: 0.75 });
    },
    onHit: (h) => landBomb(h.point, b, h.water),
    end: (p) => landBomb(p, b, false),
  });
}
function landBomb(p, b, water) {
  const at = p.clone().add(new THREE.Vector3(0, 0.5, 0));
  if (water) { FX.splash(at, 26, 1.6); FX.smoke(at, 5, 0xeeeeee, 2); sfx.sizzle(at); return; }
  explode(at, 0.8 + b.size * 0.6, { fire: true, craterRadius: 1.4 + b.size * 1.3 });
  if (b.boulder && ITEMS.boulder) {
    const sc = 0.55 + b.size * 0.45;
    const e = createEnt(ITEMS.boulder, p.clone().add(new THREE.Vector3(0, 1.3 * sc + 0.2, 0)), { spawned: true, scale: sc, color: 0x3b302a, vel: new THREE.Vector3(rand(-3, 3), rand(1, 4), rand(-3, 3)) });
    // still glowing hot; it cools down over half a minute
    const mats = [];
    e.mesh.traverse((o) => { if (o.material && o.material.emissive) { o.material = o.material.clone(); o.material.emissive.setHex(0xff3a08); o.material.emissiveIntensity = 0.9; mats.push(o.material); } });
    const born = G.time;
    e.update = function () { const k = clamp(1 - (G.time - born) / 30, 0, 1); for (const m of mats) m.emissiveIntensity = 0.9 * k; if (k <= 0) this.update = null; };
    if (G.ignite) G.ignite(e, 8);
  }
}

// ---------------------------------------------------------------- every frame
export function updateVolcano(dt) {
  if (!VO) return;
  VO.t += dt;
  const E = VO.erupt;
  const cam = G.camera ? G.camera.position : null;
  const dist = cam ? Math.hypot(cam.x - VO.x, cam.z - VO.z) : 1e9;
  // the smoke: steam normally, darker and thicker as the pressure builds, a black column when it blows
  const pr = clamp(VO.pressure / NEED, 0, 1);
  VO.spawnAcc = (VO.spawnAcc || 0) + dt * (E ? (E.boom ? (E.t < 70 ? 16 : 4) : 3 + E.t) : 1.6 + pr * 4);
  while (VO.spawnAcc >= 1) {
    VO.spawnAcc -= 1;
    const a = rand(0, Math.PI * 2), rr = rand(0, VO.craterR * 0.6);
    const x = VO.x + Math.cos(a) * rr, z = VO.z + Math.sin(a) * rr, y = VO.level + 1.5;
    if (E && E.boom && E.t < 70) {
      const k = rand(0, 1);
      puff(x, y, z, rand(-4, 4), rand(34, 66), rand(-4, 4), rand(8, 14), rand(36, 70), rand(28, 48), k < 0.75 ? 0x2a2624 : k < 0.92 ? 0x46403c : 0x8a5a3a);
    } else if (E && !E.boom) {
      puff(x, y, z, rand(-1, 1), rand(8, 16) + E.t * 2, rand(-1, 1), rand(4, 6), rand(16, 26), rand(14, 20), 0x3a3532);
    } else {
      const g = Math.round(0xbb - pr * 0x80);
      puff(x, y, z, rand(0.6, 1.6), rand(3.5, 6) + pr * 4, rand(-0.6, 0.6), rand(2.5, 4), rand(10, 16) + pr * 10, rand(12, 18), (g << 16) | (g << 8) | Math.max(0, g - 8));
    }
  }
  const top = VO.level + 380;
  for (let i = 0; i < NP; i++) {
    const p = VO.puffs[i];
    if (!p.on) continue;
    p.age += dt;
    if (p.age >= p.life) { p.on = false; VO.mesh.setMatrixAt(i, _m.makeScale(0, 0, 0)); continue; }
    // rise, slow down, and (an ash column) spread out at the top
    p.vy *= 1 - Math.min(1, dt * (p.y > top ? 1.6 : 0.22));
    if (p.y > top - 40 && E) { const dx = p.x - VO.x, dz = p.z - VO.z, l = Math.hypot(dx, dz) || 1; p.vx += dx / l * dt * 4; p.vz += dz / l * dt * 4; }
    p.vx += dt * 0.4; // a light wind
    p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
    const f = p.age / p.life;
    const s = (p.s + (p.s1 - p.s) * Math.min(1, f * 1.6)) * (f > 0.85 ? (1 - f) / 0.15 : 1);
    _q.setFromAxisAngle(_v.set(0.3, 1, 0.2).normalize(), p.age * 0.15 + i);
    VO.mesh.setMatrixAt(i, _m.compose(_s.set(p.x, p.y, p.z), _q, _v.set(s, s * 0.85, s)));
  }
  VO.mesh.instanceMatrix.needsUpdate = true;
  // pressure building up: rumbles you feel when you're near
  if (!E && pr > 0.4 && dist < 450) {
    VO.rumbleT -= dt;
    if (VO.rumbleT <= 0) { VO.rumbleT = rand(2, 4) * (1.4 - pr); sfx.nuke(VO.top, 0, 0.08 + pr * 0.12); G.shake = Math.max(G.shake, (pr - 0.3) * 0.6 * (1 - dist / 450)); }
  }
  if (!E) return;
  E.t += dt;
  const t = E.t;
  // the ground shakes (harder until it blows, then for a while after)
  const quake = t < BOOM_T ? 0.25 + t / BOOM_T * 0.9 : Math.max(0, 1.1 - (t - BOOM_T) / 25);
  if (quake > 0) {
    if (dist < 700) G.shake = Math.max(G.shake, quake * 0.9 * clamp(1 - dist / 700, 0.1, 1));
    E.jolt -= dt;
    if (E.jolt <= 0) {
      E.jolt = 0.18;
      for (const e of G.ents) {
        if (e.dead || e.body.type !== 1) continue;
        const p = e.body.position, d = Math.hypot(p.x - VO.x, p.z - VO.z);
        if (d > 320) continue;
        const k = quake * (1 - d / 320);
        e.body.velocity.x += rand(-1, 1) * 2.2 * k; e.body.velocity.y += rand(0.3, 2.4) * k; e.body.velocity.z += rand(-1, 1) * 2.2 * k;
        e.body.wakeUp();
      }
      for (const d of G.dummies) if (d.state === 'standing' && Math.random() < quake * 0.06 && d.origin().distanceTo(VO.top) < 300) d.knock(null);
    }
    if (Math.random() < dt * (1 + quake * 2)) sfx.nuke(VO.top, 0, 0.12 + quake * 0.2);
  }
  // before it blows: the crater spits fire
  if (!E.boom) {
    E.spit -= dt;
    if (E.spit <= 0 && dist < 900) {
      E.spit = rand(0.3, 0.9) * (1.2 - t / BOOM_T);
      const a = rand(0, Math.PI * 2), rr = rand(0, VO.craterR * 0.6);
      const at = new THREE.Vector3(VO.x + Math.cos(a) * rr, VO.level + 2, VO.z + Math.sin(a) * rr);
      FX.fireball(at, rand(4, 9) * (0.5 + t / BOOM_T), 0.8);
      if (dist < 400) sfx.explosion(0.6, at);
    }
    if (t >= BOOM_T) { E.boom = true; summitBlast(dist); }
  }
  // lava fountain over the crater
  if (t > 4 && t < 60 && dist < 360) {
    for (let n = 0; n < (E.boom ? 8 : 3); n++) {
      const a = rand(0, Math.PI * 2), rr = rand(0, VO.craterR * 0.5);
      FX.particle({ pos: new THREE.Vector3(VO.x + Math.cos(a) * rr, VO.level + 1, VO.z + Math.sin(a) * rr), vel: new THREE.Vector3(rand(-8, 8), rand(20, E.boom ? 70 : 30), rand(-8, 8)), color: Math.random() < 0.5 ? 0xff7a1a : 0xffc14a, size: rand(0.5, 1.4), life: rand(1.5, 3.5), glow: true, add: true, gravity: 12, drag: 0.1 });
    }
  }
  // lightning in the ash column
  if (E.boom && t < 75) {
    E.boltT -= dt;
    if (E.boltT <= 0) {
      E.boltT = rand(0.25, 1.1);
      const h0 = VO.level + rand(40, 120), h1 = h0 + rand(30, 140);
      const a = rand(0, Math.PI * 2), b2 = a + rand(-1.2, 1.2), r0 = rand(15, 60), r1 = rand(15, 80);
      FX.lightning(new THREE.Vector3(VO.x + Math.cos(a) * r0, h1, VO.z + Math.sin(a) * r0), new THREE.Vector3(VO.x + Math.cos(b2) * r1, h0, VO.z + Math.sin(b2) * r1), 0xd7ecff);
      if (dist < 500) sfx.zap(new THREE.Vector3(VO.x, h0, VO.z));
    }
  }
  // lava bombs
  while (E.bi < E.bombs.length && E.bombs[E.bi].t <= t) launchBomb(E.bombs[E.bi++]);
  // burning ash clouds down the slopes
  if (E.boom) for (const f of E.flows) updateFlow(f, E, dt);
  // lava over the rim on every side: it runs down the slopes for real
  for (const v of E.vents) {
    if (t < v.t0 || t > v.t1) continue;
    const vx = VO.x + Math.cos(v.az) * (VO.craterR + 5), vz = VO.z + Math.sin(v.az) * (VO.craterR + 5);
    const gy = VO.ground(vx, vz);
    pourLiquid('lava', vx, gy + 1.5, vz, v.rate * dt, 1.8);
    if (dist < 360 && Math.random() < dt * 10) FX.particle({ pos: new THREE.Vector3(vx, gy + 1, vz), vel: new THREE.Vector3(rand(-2, 2), rand(4, 10), rand(-2, 2)), color: 0xffa040, size: rand(0.3, 0.8), life: 1.2, glow: true, add: true, gravity: 10, drag: 0.2 });
  }
  // ash falls: the ground goes grey further and further out
  if (E.boom && !E.ashDone && t > BOOM_T + 3) {
    E.ashAcc = (E.ashAcc || 0) + dt;
    if (E.ashAcc > 0.4) {
      E.ashAcc = 0;
      const r1 = Math.min(380, E.ashR + 5);
      paintBurn(VO.x, VO.z, E.ashR, r1, 3, 0.15, 380);
      E.ashR = r1;
      if (r1 >= 380) { E.ashDone = true; refreshFar(); }
    }
  }
  // ash in the air around you
  if (E.boom && t < 150 && dist < 420 && cam) {
    for (let n = 0; n < 6; n++) {
      if (Math.random() > dt * 36) continue;
      FX.particle({ pos: new THREE.Vector3(cam.x + rand(-20, 20), cam.y + rand(4, 16), cam.z + rand(-20, 20)), vel: new THREE.Vector3(rand(-0.6, 0.6), -rand(1, 2.4), rand(-0.6, 0.6)), color: Math.random() < 0.5 ? 0x8d8984 : 0x5a5652, size: rand(0.05, 0.13), life: rand(3, 6), gravity: 0.3, drag: 1.2, floor: true, spin: 2 });
    }
  }
  // the sky darkens (black near the mountain), then slowly clears
  if (G.tintSky) {
    const env = t < BOOM_T ? t / BOOM_T * 0.25 : t < BOOM_T + 8 ? 0.25 + (t - BOOM_T) / 8 * 0.75 : t < 140 ? 1 : Math.max(0, 1 - (t - 140) / 90);
    const k = env * clamp(1.35 - dist / 800, 0.2, 1);
    G.tintSky(0x2e2724, k * 0.92);
    if (G.scene.fog && G.map && G.map.fog) { G.scene.fog.far = G.map.fog[2] * (1 - 0.65 * k); G.scene.fog.near = G.map.fog[1] * (1 - 0.7 * k); }
  }
  if (t > 235) {
    VO.erupt = null;
    if (G.tintSky) G.tintSky(0x2e2724, 0);
    if (G.scene.fog && G.map && G.map.fog) { G.scene.fog.near = G.map.fog[1]; G.scene.fog.far = G.map.fog[2]; }
  }
}
G.erupt = (seed) => startEruption(seed ?? ((Math.random() * 4294967295) >>> 0));
G.volcanoState = volcanoState;

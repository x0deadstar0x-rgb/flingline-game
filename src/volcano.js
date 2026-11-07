// The Mega World's volcano. It smokes all the time. Throw things into its lava lake and the
// pressure builds (it rumbles, the smoke turns black), and when it's had enough it ERUPTS:
//  - a blast at the top you feel from far away, and a thick black ash column that rises a
//    couple of hundred metres and spreads out, darkening the sky
//  - glowing lava bombs flung out in arcs: they blow craters where they land and leave boulders
//  - real lava pouring over the rim and running down the slopes (it sets things on fire,
//    turns to rock as it cools, and to black glass where it reaches the sea)
//  - ash falling, and the ground for a couple of hundred metres around turned grey
// In a room, the host decides when it blows and tells everyone (same seed, same eruption).
import * as THREE from 'three';
import { G, rand, clamp, toast, popup } from './core.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { createEnt, explode, removeEnt, ITEMS } from './items.js';
import { projectile, mkMesh } from './tools/common.js';
import { pourLiquid } from './fluid.js';
import { paintBurn, refreshFar } from './terrain.js';

let VO = null;
const NP = 170;
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
export function volcanoState() { return VO ? { pressure: VO.pressure, erupting: !!VO.erupt, t: VO.erupt ? VO.erupt.t : 0 } : null; }

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
    add = 22;
  } else {
    add = clamp(6 + (e.vol || 0.1) * 14 + (e.def && e.def.explosive ? 18 : 0), 6, 45);
    // it melts in a burst of fire
    const at = new THREE.Vector3(p.x, q.level + 0.4, p.z);
    FX.fireball(at, 1.6 + Math.min(2, (e.vol || 0.1) * 2), 0.5);
    FX.smoke(at, 4, 0x4a4440, 1.6);
    sfx.sizzle(at);
    removeEnt(e, true);
  }
  VO.pressure += add;
  const pct = Math.min(100, Math.round(VO.pressure));
  if (near()) {
    const msg = pct >= 100 ? 'The volcano is going to BLOW!' : pct >= 75 ? `The volcano shakes… it's about to blow (${pct}%)` : pct >= 45 ? `Black smoke pours out of the volcano (${pct}%)` : `The volcano swallowed it… it rumbles (${pct}%)`;
    if (G.time - VO.said > 1.2 || pct >= 100) { toast(msg); VO.said = G.time; }
    sfx.nuke(VO.top, 0, 0.12 + pct / 600);
    G.shake = Math.max(G.shake, 0.15 + pct / 400);
  }
  if (VO.pressure >= 100 && !(G.net && G.net.active && !G.net.host)) {
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
  for (let i = 0; i < 70; i++) bombs.push({ t: 3.2 + 24 * (i / 70) ** 1.6 + r(0, 0.4), az: r(0, Math.PI * 2), el: r(0.95, 1.42), sp: r(22, 50), size: r(0.6, 1.7), boulder: R() < 0.4 });
  const vents = [];
  const nv = 3 + Math.floor(R() * 3);
  const a0 = r(0, Math.PI * 2);
  for (let i = 0; i < nv; i++) vents.push({ az: a0 + (i / nv) * Math.PI * 2 + r(-0.4, 0.4), rate: r(14, 24), t0: r(3.5, 6), t1: r(22, 32) });
  VO.erupt = { t: 0, bombs, bi: 0, vents, ashR: VO.craterR, ashDone: false, boom: false, seed };
  VO.pressure = 0;
  if (near()) toast('🌋 ERUPTION!');
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
  explode(at, 0.75 + b.size * 0.45, { fire: true, craterRadius: 1.2 + b.size * 1.1 });
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
  const pr = clamp(VO.pressure / 100, 0, 1);
  VO.spawnAcc = (VO.spawnAcc || 0) + dt * (E ? (E.t < 40 ? 11 : 3) : 1.6 + pr * 4);
  while (VO.spawnAcc >= 1) {
    VO.spawnAcc -= 1;
    const a = rand(0, Math.PI * 2), rr = rand(0, VO.craterR * 0.6);
    const x = VO.x + Math.cos(a) * rr, z = VO.z + Math.sin(a) * rr, y = VO.level + 1.5;
    if (E && E.t < 40) {
      const k = rand(0, 1);
      puff(x, y, z, rand(-3, 3), rand(26, 52), rand(-3, 3), rand(6, 10), rand(26, 46), rand(28, 50), k < 0.75 ? 0x2c2927 : k < 0.92 ? 0x47423e : 0x8a5a3a);
    } else {
      const g = Math.round(0xbb - pr * 0x80);
      puff(x, y, z, rand(0.6, 1.6), rand(3.5, 6) + pr * 4, rand(-0.6, 0.6), rand(2.5, 4), rand(10, 16) + pr * 10, rand(12, 18), (g << 16) | (g << 8) | Math.max(0, g - 8));
    }
  }
  const top = VO.level + 210;
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
  // the blast
  if (!E.boom && t >= 3) {
    E.boom = true;
    const at = VO.top.clone().add(new THREE.Vector3(0, 6, 0));
    for (const s of [1, 1.7, 2.6]) FX.fireball(at, 10 * s, 1.1);
    FX.ring(at, 90, 0xffb070, 1.6);
    sfx.nuke(at, dist / 340, 1.2);
    if (dist < 900) G.shake = Math.max(G.shake, 2.2 * clamp(1 - dist / 900, 0.15, 1));
    if (dist < 300) { const fl = document.getElementById('whiteflash'); if (fl) { fl.style.background = '#ff7a2a'; fl.classList.add('on'); setTimeout(() => { fl.classList.remove('on'); setTimeout(() => { fl.style.background = ''; }, 1200); }, 140); } }
    popup('ERUPTION!', at.clone().add(new THREE.Vector3(0, 12, 0)), '#ff6a2a', 40);
  } else if (!E.boom) {
    // the last seconds before it blows: the ground shakes harder and harder
    if (dist < 600) G.shake = Math.max(G.shake, (0.3 + t * 0.35) * clamp(1 - dist / 600, 0.1, 1));
    if (Math.random() < dt * 3) sfx.nuke(VO.top, 0, 0.15 + t * 0.06);
  }
  // lava fountain over the crater
  if (E.boom && t < 34 && dist < 320) {
    for (let n = 0; n < 6; n++) {
      const a = rand(0, Math.PI * 2), rr = rand(0, VO.craterR * 0.5);
      FX.particle({ pos: new THREE.Vector3(VO.x + Math.cos(a) * rr, VO.level + 1, VO.z + Math.sin(a) * rr), vel: new THREE.Vector3(rand(-6, 6), rand(18, 46), rand(-6, 6)), color: Math.random() < 0.5 ? 0xff7a1a : 0xffc14a, size: rand(0.4, 1.1), life: rand(1.5, 3), glow: true, add: true, gravity: 12, drag: 0.1 });
    }
  }
  // lava bombs
  while (E.bi < E.bombs.length && E.bombs[E.bi].t <= t) launchBomb(E.bombs[E.bi++]);
  // lava over the rim at the vents: it runs down the slopes for real
  for (const v of E.vents) {
    if (t < v.t0 || t > v.t1) continue;
    const vx = VO.x + Math.cos(v.az) * (VO.craterR + 5), vz = VO.z + Math.sin(v.az) * (VO.craterR + 5);
    const gy = VO.ground(vx, vz);
    pourLiquid('lava', vx, gy + 1.5, vz, v.rate * dt, 1.5);
    if (dist < 320 && Math.random() < dt * 8) FX.particle({ pos: new THREE.Vector3(vx, gy + 1, vz), vel: new THREE.Vector3(rand(-2, 2), rand(4, 9), rand(-2, 2)), color: 0xffa040, size: rand(0.3, 0.7), life: 1.2, glow: true, add: true, gravity: 10, drag: 0.2 });
  }
  // ash falls: the ground goes grey further and further out
  if (E.boom && !E.ashDone && t > 6) {
    E.ashAcc = (E.ashAcc || 0) + dt;
    if (E.ashAcc > 0.5) {
      E.ashAcc = 0;
      const r1 = Math.min(240, E.ashR + 8);
      paintBurn(VO.x, VO.z, E.ashR, r1, 3, 0.18, 240);
      E.ashR = r1;
      if (r1 >= 240) { E.ashDone = true; refreshFar(); }
    }
  }
  // ash in the air around you
  if (E.boom && t < 70 && dist < 300 && cam) {
    for (let n = 0; n < 4; n++) {
      if (Math.random() > dt * 30) continue;
      FX.particle({ pos: new THREE.Vector3(cam.x + rand(-18, 18), cam.y + rand(4, 14), cam.z + rand(-18, 18)), vel: new THREE.Vector3(rand(-0.5, 0.5), -rand(1, 2.2), rand(-0.5, 0.5)), color: Math.random() < 0.5 ? 0x8d8984 : 0x5a5652, size: rand(0.05, 0.11), life: rand(3, 6), gravity: 0.3, drag: 1.2, floor: true, spin: 2 });
    }
  }
  // the sky darkens near it, then clears over a couple of minutes
  if (G.tintSky) {
    const env = t < 3 ? 0 : t < 10 ? (t - 3) / 7 : t < 70 ? 1 : Math.max(0, 1 - (t - 70) / 60);
    const k = env * clamp(1.25 - dist / 700, 0.15, 1);
    G.tintSky(0x3d3530, k * 0.85);
    if (G.scene.fog && G.map && G.map.fog) { G.scene.fog.far = G.map.fog[2] * (1 - 0.55 * k); G.scene.fog.near = G.map.fog[1] * (1 - 0.6 * k); }
  }
  if (t > 135) {
    VO.erupt = null;
    if (G.tintSky) G.tintSky(0x3d3530, 0);
    if (G.scene.fog && G.map && G.map.fog) { G.scene.fog.near = G.map.fog[1]; G.scene.fog.far = G.map.fog[2]; }
  }
}
G.erupt = (seed) => startEruption(seed ?? ((Math.random() * 4294967295) >>> 0));
G.volcanoState = volcanoState;

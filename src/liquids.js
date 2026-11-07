// Lakes a map puts down (acid that dissolves things and burns people, lava that sets everything
// on fire, plain water) and what liquid does to what's in it. The liquid itself lives in
// fluid.js: real voxel liquid that flows, pours and fills holes.
import * as THREE from 'three';
import { G, rand, toast } from './core.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { damage, ignite, removeEnt } from './items.js';
import { fillPool, clearFluids, fluidAt, fluidLevel, fluidDensity, updateFluids, sampleFluid, buildAllFluids } from './fluid.js';

// a round lake at (x, z), radius r, surface at `level` (it fills whatever is lower than that)
export function addPool(kind, x, z, r, level) { fillPool(kind, x, z, r, level); }
export function poolsReady() { buildAllFluids(); }
export function clearPools() { clearFluids(); }
// liquid at a point: { kind, level } or null
export function poolAt(x, y, z) { return fluidAt(x, y, z); }
// surface of the liquid over (x, z), for floating and splashing (-Infinity if none)
export function poolLevel(x, z) { return fluidLevel(x, z); }
G.poolLevel = poolLevel;
G.liquidDensity = fluidDensity;
G.poolAt = poolAt;

let tick = 0, hurtT = 0;
const _b = new THREE.Vector3();
export function updatePools(dt) {
  updateFluids(dt);
  hurtT = Math.max(0, hurtT - dt);
  // you: acid and lava throw you out (and hurt!)
  const pp = G.player ? G.player.pos() : null;
  if (pp) {
    const q = poolAt(pp.x, pp.y - 0.6, pp.z);
    if (q && q.kind !== 'water' && hurtT <= 0) {
      hurtT = 0.8;
      G.player.fling(new THREE.Vector3(rand(-2, 2), 11, rand(-2, 2)));
      const fl = document.getElementById('whiteflash');
      if (fl) { fl.style.background = q.kind === 'acid' ? '#7dff3a' : '#ff5a1a'; fl.classList.add('on'); setTimeout(() => { fl.classList.remove('on'); setTimeout(() => { fl.style.background = ''; }, 1300); }, 90); }
      toast(q.kind === 'acid' ? 'ACID! That burns!' : 'LAVA! Hot hot hot!');
      sfx.sizzle(pp);
    }
    // bubbles on lava and acid near you
    for (let n = 0; n < 3; n++) {
      if (Math.random() > dt * 14) continue;
      const s = sampleFluid(pp, 30);
      if (!s || s.kind === 'water') continue;
      FX.particle({ pos: new THREE.Vector3(s.x, s.y + 0.05, s.z), vel: new THREE.Vector3(0, rand(0.5, 1.5), 0), color: s.kind === 'acid' ? 0xb6ff7a : 0xffb347, size: rand(0.12, 0.3), life: rand(0.5, 1.1), glow: true, add: true, gravity: -0.5, drag: 1, floor: false });
      if (s.kind === 'lava' && Math.random() < 0.15) FX.smoke(new THREE.Vector3(s.x, s.y + 0.3, s.z), 1, 0x8a8078, 0.9);
    }
  }
  // things in it: acid eats them, lava burns them (5 times a second)
  tick += dt;
  if (tick < 0.2) return;
  tick = 0;
  for (const e of [...G.ents]) {
    if (e.dead) continue;
    const b = e.body.position;
    const q = poolAt(b.x, b.y, b.z);
    if (!q || q.kind === 'water') continue;
    if (e.kind === 'ragpart') {
      if (e.partName === 'torso') { e.dummy.hurt(q.kind === 'acid' ? 9 : 6, null); if (q.kind === 'lava') e.dummy.ignite(); }
      continue;
    }
    if (q.kind === 'lava') {
      if (G.onLavaSwallow && G.onLavaSwallow(e, q)) continue; // (the volcano eats what you throw in)
      ignite(e, 6); damage(e, 10, null); continue;
    }
    // acid: it fizzes away
    e.acidT = (e.acidT || 0) + 0.2;
    FX.smoke(_b.set(b.x, q.level + 0.2, b.z).clone(), 1, 0x9cff6a, 0.5);
    if (Math.random() < 0.3) sfx.sizzle(b);
    if (e.hp !== Infinity) damage(e, 14, null);
    else if (e.acidT > 3.5) removeEnt(e, true);
  }
  for (const d of G.dummies) {
    if (d.state !== 'standing' || d.dead) continue;
    const o = d.origin();
    const q = poolAt(o.x, o.y + 0.3, o.z);
    if (q && q.kind !== 'water') { d.hurt(q.kind === 'acid' ? 12 : 8, null, new THREE.Vector3(0, 5, 0)); if (q.kind === 'lava') d.ignite(); if (G.onLavaSwallow && q.kind === 'lava') G.onLavaSwallow(null, q, d); }
  }
}

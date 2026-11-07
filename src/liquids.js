// Pools of liquid a map puts down: acid (dissolves things, burns people), lava (sets everything on
// fire) and plain water (underground lakes). Things float in all of them like in water.
import * as THREE from 'three';
import { G, rand, toast } from './core.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { damage, ignite, removeEnt } from './items.js';

const KIND = {
  water: { color: 0x2f7fd0, emissive: 0x0a2a4a, ei: 0.25, opacity: 0.78 },
  acid: { color: 0x8cff3a, emissive: 0x46ff1a, ei: 0.9, opacity: 0.88 },
  lava: { color: 0xff6a1a, emissive: 0xff4a10, ei: 1.7, opacity: 1 },
};
let pools = [];

// a round pool at (x, z), radius r, surface at `level`
export function addPool(kind, x, z, r, level, group) {
  const k = KIND[kind];
  const mat = new THREE.MeshStandardMaterial({ color: k.color, emissive: k.emissive, emissiveIntensity: k.ei, roughness: kind === 'lava' ? 0.9 : 0.15, metalness: 0, transparent: k.opacity < 1, opacity: k.opacity, flatShading: true });
  const mesh = new THREE.Mesh(new THREE.CircleGeometry(r, 40), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(x, level, z);
  (group || G.scene).add(mesh);
  pools.push({ kind, x, z, r, level, mesh, r2: r * r });
}
export function clearPools() { pools = []; }
export function poolAt(x, y, z) {
  for (const p of pools) if (y < p.level && (x - p.x) ** 2 + (z - p.z) ** 2 < p.r2) return p;
  return null;
}
// highest pool surface over (x, z), for floating and splashing (-Infinity if none)
export function poolLevel(x, z) {
  let l = -Infinity;
  for (const p of pools) if (p.level > l && (x - p.x) ** 2 + (z - p.z) ** 2 < p.r2) l = p.level;
  return l;
}
G.poolLevel = poolLevel;

let tick = 0, hurtT = 0;
export function updatePools(dt) {
  if (!pools.length) return;
  for (const p of pools) p.mesh.material.emissiveIntensity = KIND[p.kind].ei * (0.82 + 0.18 * Math.sin(G.time * (p.kind === 'lava' ? 1.3 : 2.2) + p.x));
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
    // bubbles on pools near you
    for (const p of pools) {
      if (p.kind === 'water' || Math.random() > dt * 8) continue;
      if ((pp.x - p.x) ** 2 + (pp.z - p.z) ** 2 > (p.r + 40) ** 2) continue;
      const a = rand(0, Math.PI * 2), r = Math.sqrt(Math.random()) * p.r;
      FX.particle({ pos: new THREE.Vector3(p.x + Math.cos(a) * r, p.level + 0.05, p.z + Math.sin(a) * r), vel: new THREE.Vector3(0, rand(0.5, 1.5), 0), color: p.kind === 'acid' ? 0xb6ff7a : 0xffb347, size: rand(0.12, 0.3), life: rand(0.5, 1.1), glow: true, add: true, gravity: -0.5, drag: 1, floor: false });
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
    if (q.kind === 'lava') { ignite(e, 6); damage(e, 10, null); continue; }
    // acid: it fizzes away
    e.acidT = (e.acidT || 0) + 0.2;
    FX.smoke(new THREE.Vector3(b.x, q.level + 0.2, b.z), 1, 0x9cff6a, 0.5);
    if (Math.random() < 0.3) sfx.sizzle(b);
    if (e.hp !== Infinity) damage(e, 14, null);
    else if (e.acidT > 3.5) removeEnt(e, true);
  }
  for (const d of G.dummies) {
    if (d.state !== 'standing' || d.dead) continue;
    const o = d.origin();
    const q = poolAt(o.x, o.y + 0.3, o.z);
    if (q && q.kind !== 'water') { d.hurt(q.kind === 'acid' ? 12 : 8, null, new THREE.Vector3(0, 5, 0)); if (q.kind === 'lava') d.ignite(); }
  }
}

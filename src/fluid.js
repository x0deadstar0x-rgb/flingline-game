// Voxel liquids: water, lava and acid that really flow.
//
// Every half-metre ground column can hold one body of liquid lying on the floor under it (the
// ground, or a cave floor): how deep it is and what it is. Each step, liquid runs to the
// neighbouring columns whose surface is lower: down slopes, over edges (it pours), into holes you
// dig, out of a lake whose bank you blow up. Water runs fast and spreads thin; lava is thick and
// slow, stops in lumps, and cools into rock after a while (at once where it meets water).
// Only liquid that is still moving costs anything: a lake at rest isn't simulated.
// Drawn as blocks with sides, so you see how deep it is where it pours over a step.
import * as THREE from 'three';
import { G, rand, clamp } from './core.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { V, colFloor, addColumnBlocks } from './terrain.js';

export const LIQ = { water: 1, lava: 2, acid: 3 };
export const LIQ_NAME = ['', 'water', 'lava', 'acid'];
const FLOW = [0, 0.2, 0.045, 0.18];   // how much of a difference in level evens out each step
const STOP = [0, 0.02, 0.2, 0.03];    // thinner than this, it doesn't run any further
const DENSITY = [1, 1, 2.6, 1.2];     // how strongly things float in it (water = 1)
const SRC = 0x80;                     // (kind flag) part of a lake the map made: never dries up or cools
const STEP = 1 / 20;
const DI = [1, -1, 0, 0], DJ = [0, 0, 1, -1];
const ROCK = 0x2d2826, OBSIDIAN = 0x1d1a26;

const MATS = [null,
  new THREE.MeshStandardMaterial({ color: 0x2a7ccc, transparent: true, opacity: 0.74, roughness: 0.08, metalness: 0.15, depthWrite: false }),
  new THREE.MeshStandardMaterial({ color: 0xff5a14, emissive: 0xff4410, emissiveIntensity: 1.6, roughness: 0.85, metalness: 0 }),
  new THREE.MeshStandardMaterial({ color: 0x8cff3a, emissive: 0x46ff1a, emissiveIntensity: 0.85, transparent: true, opacity: 0.9, roughness: 0.2, metalness: 0 }),
];
const EI = [0, 0, 1.6, 0.85];

let F = null;
function ensure() {
  const T = G.terrain;
  if (!T) return null;
  if (F && F.T === T) return F;
  const n = T.N * T.N;
  F = {
    T, N: T.N,
    d: new Float32Array(n),      // depth (m)
    fl: new Int16Array(n),       // floor under it (levels of V)
    kind: new Uint8Array(n),     // LIQ (+ SRC)
    age: new Uint16Array(n),     // steps since liquid arrived in this column (lava cools, puddles dry)
    inQ: new Uint8Array(n), q: [], slow: new Set(),
    group: new THREE.Group(), chunks: new Map(), dirty: new Set(), acc: 0, solid: [], tick: 0,
  };
  F.group.name = 'liquids';
  G.scene.add(F.group);
  return F;
}
export function clearFluids() {
  if (F) {
    for (const c of F.chunks.values()) for (const m of c) if (m) { m.geometry.dispose(); m.removeFromParent(); }
    F.group.removeFromParent();
  }
  F = null;
}
const act = (k) => { if (!F.inQ[k]) { F.inQ[k] = 1; F.q.push(k); } };
function wake(k) {
  act(k);
  const i = (k / F.N) | 0, j = k - i * F.N;
  if (i > 0) act(k - F.N); if (i < F.N - 1) act(k + F.N); if (j > 0) act(k - 1); if (j < F.N - 1) act(k + 1);
}
const CH = 32;
function dirtyAt(k) {
  const i = (k / F.N) | 0, j = k - i * F.N;
  const ci = (i / CH) | 0, cj = (j / CH) | 0, nc = Math.ceil(F.N / CH);
  F.dirty.add(ci * nc + cj);
  const ii = i % CH, jj = j % CH;
  if (ii === 0 && ci > 0) F.dirty.add((ci - 1) * nc + cj);
  if (ii === CH - 1 && ci + 1 < nc) F.dirty.add((ci + 1) * nc + cj);
  if (jj === 0 && cj > 0) F.dirty.add(ci * nc + cj - 1);
  if (jj === CH - 1 && cj + 1 < nc) F.dirty.add(ci * nc + cj + 1);
}
const colOf = (x, z) => {
  const T = G.terrain;
  const i = Math.floor((x - T.x0) / V), j = Math.floor((T.z0 - z) / V);
  return i < 0 || j < 0 || i >= T.N || j >= T.N ? -1 : i * T.N + j;
};

// ---------------------------------------------------------------- putting liquid in the world
// A lake the map makes: liquid up to `level` everywhere inside radius r that's below it. The
// bank is sealed where it would leak (the map's lakes stay put until you break them open).
export function fillPool(kindName, cx, cz, r, level) {
  if (!ensure()) return;
  const T = F.T, kd = LIQ[kindName] || 1, { N } = T;
  const ia = Math.max(0, Math.floor((cx - r - T.x0) / V)), ib = Math.min(N - 1, Math.floor((cx + r - T.x0) / V));
  const ja = Math.max(0, Math.floor((T.z0 - cz - r) / V)), jb = Math.min(N - 1, Math.floor((T.z0 - cz + r) / V));
  const filled = [];
  for (let i = ia; i <= ib; i++) for (let j = ja; j <= jb; j++) {
    const x = T.x0 + (i + 0.5) * V, z = T.z0 - (j + 0.5) * V;
    if ((x - cx) ** 2 + (z - cz) ** 2 > r * r) continue;
    const k = i * N + j, f = colFloor(k, level - 0.01);
    if (f === Infinity || f > level - 0.05) continue;
    F.d[k] = level - f; F.fl[k] = Math.round(f / V); F.kind[k] = kd | SRC; F.age[k] = 0;
    filled.push(k); dirtyAt(k);
  }
  // seal the leaks: a dry neighbour lower than the surface gets a wall up to the surface
  const seal = [], lvl = Math.ceil(level / V);
  for (const k of filled) {
    const i = (k / N) | 0, j = k - i * N;
    for (let q = 0; q < 4; q++) {
      const ni = i + DI[q], nj = j + DJ[q];
      if (ni < 0 || nj < 0 || ni >= N || nj >= N) continue;
      const n = ni * N + nj;
      if (F.d[n] > 0) continue;
      const f = colFloor(n, level - 0.01);
      if (f === Infinity || f >= level - 0.05) continue;
      seal.push([n, Math.round(f / V), lvl, kd === LIQ.lava ? ROCK : 0x6b5a45]);
    }
  }
  if (seal.length) { const once = new Set(); addColumnBlocks(seal.filter((s) => !once.has(s[0]) && once.add(s[0]))); }
}
// Pour liquid at a point: `vol` cubic metres onto the floor under (x, y, z). Returns false if
// there's nowhere for it to go.
export function pourLiquid(kindName, x, y, z, vol, spread = 0) {
  if (!ensure()) return false;
  const kd = LIQ[kindName] || 1;
  const T = F.T;
  const cells = [];
  const R = Math.max(0, spread);
  for (let dx = -R; dx <= R + 1e-6; dx += V) for (let dz = -R; dz <= R + 1e-6; dz += V) {
    if (dx * dx + dz * dz > R * R + 1e-6) continue;
    const k = colOf(x + dx, z + dz);
    if (k >= 0) cells.push(k);
  }
  if (!cells.length) return false;
  const per = vol / (cells.length * V * V);
  let any = false;
  for (const k of cells) {
    const top = F.d[k] > 0 ? F.fl[k] * V + F.d[k] : null;
    const f = colFloor(k, Math.max(y, top ?? -1e9) + 0.05);
    if (f === Infinity) continue;
    if (F.d[k] > 0 && Math.abs(F.fl[k] * V - f) > 0.01 && F.fl[k] * V + F.d[k] < f) { /* a different body lower down: replace */ F.d[k] = 0; }
    if (F.d[k] > 0 && (F.kind[k] & 3) !== kd) { react(k, kd); continue; }
    if (!(F.d[k] > 0)) { F.fl[k] = Math.round(f / V); F.kind[k] = kd; F.age[k] = 0; F.d[k] = 0; }
    F.d[k] += per;
    wake(k); dirtyAt(k);
    any = true;
  }
  return any;
}

// ---------------------------------------------------------------- flowing
// liquid of kind kb arrives in column k that holds a different liquid
function react(k, kb) {
  const ka = F.kind[k] & 3;
  const p = posOf(k);
  if (ka === LIQ.lava || kb === LIQ.lava) {
    // lava + water (or acid): the lava here turns to stone in a cloud of steam
    if (ka === LIQ.lava) solidify(k, OBSIDIAN);
    if (Math.random() < 0.3) { FX.smoke(p, 3, 0xeeeeee, 1.4); sfx.sizzle(p); }
    return;
  }
  // acid + water: it's diluted to water
  if (ka === LIQ.acid && kb === LIQ.water) { F.kind[k] = (F.kind[k] & SRC) | LIQ.water; dirtyAt(k); }
}
const _p = new THREE.Vector3();
function posOf(k) { const T = F.T, i = (k / F.N) | 0, j = k - i * F.N; return _p.set(T.x0 + (i + 0.5) * V, F.fl[k] * V + F.d[k], T.z0 - (j + 0.5) * V).clone(); }
// lava hardens: its depth becomes rock blocks (at least one)
function solidify(k, color = ROCK) {
  const d = F.d[k];
  if (!(d > 0)) return;
  const n = Math.max(1, Math.round(d / V));
  F.solid.push([k, F.fl[k], F.fl[k] + n, color]);
  F.d[k] = 0; F.kind[k] = 0; F.age[k] = 0;
  F.slow.delete(k);
  dirtyAt(k); wake(k);
}
const out = new Float32Array(4), dest = new Int32Array(4), destF = new Float32Array(4);
function step() {
  const { N, d, fl, kind, age, T } = F;
  const list = F.q;
  F.q = [];
  for (const k of list) F.inQ[k] = 0;
  const sea = T.water;
  let budget = 30000;
  for (let li = 0; li < list.length; li++) {
    const k = list[li];
    if (--budget < 0) { for (let r = li; r < list.length; r++) act(list[r]); break; }
    const dk = d[k];
    if (!(dk > 0)) continue;
    const kd = kind[k] & 3, src = kind[k] & SRC;
    const fk = fl[k] * V, S = fk + dk;
    const i = (k / N) | 0, j = k - i * N;
    let total = 0;
    for (let q = 0; q < 4; q++) {
      out[q] = 0;
      const ni = i + DI[q], nj = j + DJ[q];
      if (ni < 0 || nj < 0 || ni >= N || nj >= N) continue;
      const n = ni * N + nj;
      const fn = colFloor(n, S - 0.01);
      if (fn === Infinity || fn >= S - 0.004) continue;
      let sn = fn;
      const dn = d[n];
      if (dn > 0) {
        const sTop = fl[n] * V + dn;
        if ((kind[n] & 3) !== kd && sTop > fn - 0.01) { react(n, kd); if (kd === LIQ.lava) { solidify(k, OBSIDIAN); total = 0; break; } continue; }
        if (Math.abs(fl[n] * V - fn) < 0.01) sn = sTop;
        else if (sTop > fn) sn = sTop;
      } else if (sea && sea.wet[n] && fn < sea.level) {
        // runs into the sea: water joins it, lava hardens
        if (kd === LIQ.lava) { solidify(k, OBSIDIAN); FX.smoke(posOf(k), 3, 0xeeeeee, 1.6); total = 0; break; }
        sn = sea.level;
        if (S <= sn + 0.01) continue;
        out[q] = Math.min(dk, S - Math.max(fk, fn)) * FLOW[kd]; dest[q] = -1; total += out[q];
        continue;
      }
      if (sn >= S - 1e-4) continue;
      const avail = S - Math.max(fk, fn);
      if (avail <= STOP[kd]) continue;
      out[q] = Math.min(avail, S - sn) * FLOW[kd];
      dest[q] = n; destF[q] = fn;
      total += out[q];
    }
    if (!(d[k] > 0)) continue; // (it hardened)
    if (total > 1e-5) {
      const sc = total > dk * 0.95 ? dk * 0.95 / total : 1;
      for (let q = 0; q < 4; q++) {
        if (!(out[q] > 0)) continue;
        const m = out[q] * sc;
        d[k] -= m;
        const n = dest[q];
        if (n < 0) continue; // into the sea
        if (!(d[n] > 0)) { fl[n] = Math.round(destF[q] / V); kind[n] = kd; age[n] = 0; d[n] = 0; }
        d[n] += m;
        dirtyAt(n); wake(n);
      }
      // a column of the map's own lake that empties stops being one
      if (d[k] < 0.005 && !src) { d[k] = 0; kind[k] = 0; }
      dirtyAt(k); wake(k);
    }
    // lava cools and puddles dry up (checked now and then once it has settled)
    if (!src && (kd === LIQ.lava || (kd === LIQ.water && d[k] < 0.08))) F.slow.add(k);
  }
  // every half second: age the settled lava and puddles
  if (++F.tick % 10 === 0 && F.slow.size) {
    for (const k of F.slow) {
      if (!(d[k] > 0)) { F.slow.delete(k); continue; }
      age[k] = Math.min(65000, age[k] + 10);
      const kd = kind[k] & 3;
      if (kind[k] & SRC) { F.slow.delete(k); continue; }
      if (kd === LIQ.lava) {
        // thin lava cools first; deep pools take longer
        if (age[k] > (d[k] < 0.9 ? 360 : 1100)) solidify(k, ROCK);
      } else if (kd === LIQ.water && d[k] < 0.08 && age[k] > 240) {
        d[k] -= 0.01;
        if (d[k] <= 0.005) { d[k] = 0; kind[k] = 0; F.slow.delete(k); }
        dirtyAt(k);
      } else if (kd !== LIQ.lava) F.slow.delete(k);
    }
  }
  if (F.solid.length) { const s = F.solid; F.solid = []; addColumnBlocks(s); }
}

// the ground changed (dug, blown up, blocks placed): the liquid there settles on its new floor
// and starts running again
G.onGroundChange = (ia, ib, ja, jb) => {
  if (!F || F.T !== G.terrain) return;
  const { N, d, fl } = F;
  for (let i = Math.max(0, ia - 1); i <= Math.min(N - 1, ib + 1); i++) for (let j = Math.max(0, ja - 1); j <= Math.min(N - 1, jb + 1); j++) {
    const k = i * N + j;
    if (!(d[k] > 0)) continue;
    const f0 = fl[k] * V;
    const f = colFloor(k, f0 + 0.01);
    if (f === Infinity) {
      // something was built where the liquid was: it's pushed up on top
      const top = colFloor(k, 1e6);
      fl[k] = Math.round(top / V);
    } else if (f < f0 - 0.01) fl[k] = Math.round(f / V); // the floor under it is gone: it falls
    wake(k); dirtyAt(k);
  }
};

// ---------------------------------------------------------------- asking about it
export function fluidLevel(x, z) {
  if (!F || F.T !== G.terrain) return -Infinity;
  const k = colOf(x, z);
  return k >= 0 && F.d[k] > 0.005 ? F.fl[k] * V + F.d[k] : -Infinity;
}
// liquid at a point: { kind, level } or null
export function fluidAt(x, y, z) {
  if (!F || F.T !== G.terrain) return null;
  const k = colOf(x, z);
  if (k < 0 || !(F.d[k] > 0.02)) return null;
  const f = F.fl[k] * V, s = f + F.d[k];
  if (y > s || y < f - 0.6) return null;
  return { kind: LIQ_NAME[F.kind[k] & 3], level: s };
}
export function fluidDensity(x, z) {
  if (!F || F.T !== G.terrain) return 1;
  const k = colOf(x, z);
  return k >= 0 && F.d[k] > 0 ? DENSITY[F.kind[k] & 3] : 1;
}
export function fluidActive() { return F ? F.q.length : 0; }
export function fluidStats() {
  if (!F) return { cells: 0, active: 0, vol: 0 };
  let cells = 0, vol = 0;
  for (let k = 0; k < F.d.length; k++) if (F.d[k] > 0) { cells++; vol += F.d[k] * V * V; }
  return { cells, active: F.q.length, slow: F.slow.size, vol: Math.round(vol) };
}

// ---------------------------------------------------------------- every frame
export function updateFluids(dt) {
  if (!F || F.T !== G.terrain) return;
  F.acc = Math.min(F.acc + dt, STEP * 3);
  let n = 0;
  while (F.acc >= STEP && n < 2) { F.acc -= STEP; n++; if (F.q.length || F.slow.size) step(); }
  // glow
  const t = G.time;
  MATS[2].emissiveIntensity = EI[2] * (0.85 + 0.15 * Math.sin(t * 1.3));
  MATS[3].emissiveIntensity = EI[3] * (0.85 + 0.15 * Math.sin(t * 2.2));
  rebuild();
}

// ---------------------------------------------------------------- drawing
const surf = (k) => F.fl[k] * V + Math.max(0.1, Math.round(F.d[k] * 4) / 4);
let P = [], Nn = [];
function quad(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, nx, ny, nz) {
  P.push(ax, ay, az, bx, by, bz, dx, dy, dz, bx, by, bz, cx, cy, cz, dx, dy, dz);
  for (let q = 0; q < 6; q++) Nn.push(nx, ny, nz);
}
function buildChunk(ci, cj, idx) {
  const { N, d, fl, kind, T } = F;
  const i0 = ci * CH, j0 = cj * CH, i1 = Math.min(N, i0 + CH), j1 = Math.min(N, j0 + CH);
  const w = i1 - i0, h = j1 - j0;
  const old = F.chunks.get(idx);
  if (old) for (const m of old) if (m) { m.geometry.dispose(); m.removeFromParent(); }
  const meshes = [null, null, null, null];
  const key = new Float64Array(w * h), done = new Uint8Array(w * h);
  let any = false;
  for (let a = 0; a < w; a++) for (let b = 0; b < h; b++) {
    const k = (i0 + a) * N + (j0 + b);
    key[a * h + b] = d[k] > 0.005 ? surf(k) * 8 + (kind[k] & 3) * 1e6 : -1;
    if (d[k] > 0.005) any = true;
  }
  if (!any) { F.chunks.delete(idx); return; }
  for (let kd = 1; kd <= 3; kd++) {
    P = []; Nn = [];
    done.fill(0);
    for (let b = 0; b < h; b++) for (let a = 0; a < w; a++) {
      const s = a * h + b;
      if (done[s] || key[s] < 0) continue;
      const k = (i0 + a) * N + (j0 + b);
      if ((kind[k] & 3) !== kd) continue;
      const kk = key[s];
      let a2 = a + 1;
      while (a2 < w && !done[a2 * h + b] && key[a2 * h + b] === kk) a2++;
      let b2 = b + 1;
      outer: while (b2 < h) {
        for (let x = a; x < a2; x++) if (done[x * h + b2] || key[x * h + b2] !== kk) break outer;
        b2++;
      }
      for (let x = a; x < a2; x++) for (let y = b; y < b2; y++) done[x * h + y] = 1;
      const y = surf(k);
      const xa = T.x0 + (i0 + a) * V, xb = T.x0 + (i0 + a2) * V, za = T.z0 - (j0 + b) * V, zb = T.z0 - (j0 + b2) * V;
      quad(xa, y, za, xb, y, za, xb, y, zb, xa, y, zb, 0, 1, 0);
    }
    // sides: wherever the next column's ground or liquid is lower than this surface
    for (let a = 0; a < w; a++) for (let b = 0; b < h; b++) {
      const i = i0 + a, j = j0 + b, k = i * N + j;
      if (!(d[k] > 0.005) || (kind[k] & 3) !== kd) continue;
      const y1 = surf(k), f = fl[k] * V;
      const xa = T.x0 + i * V, xb = xa + V, za = T.z0 - j * V, zb = za - V;
      for (let q = 0; q < 4; q++) {
        const ni = i + DI[q], nj = j + DJ[q];
        let top;
        if (ni < 0 || nj < 0 || ni >= N || nj >= N) top = -1e9;
        else {
          const n = ni * N + nj;
          const g = colFloor(n, y1 - 0.01);
          if (g === Infinity) continue;
          top = g;
          if (d[n] > 0.005 && fl[n] * V + d[n] > g - 0.01) top = Math.max(top, surf(n));
        }
        if (top >= y1 - 0.01) continue;
        const y0 = Math.max(top, f);
        if (y1 - y0 < 0.02) continue;
        if (q === 0) quad(xb, y0, za, xb, y0, zb, xb, y1, zb, xb, y1, za, 1, 0, 0);
        else if (q === 1) quad(xa, y0, zb, xa, y0, za, xa, y1, za, xa, y1, zb, -1, 0, 0);
        else if (q === 2) quad(xb, y0, zb, xa, y0, zb, xa, y1, zb, xb, y1, zb, 0, 0, -1);
        else quad(xa, y0, za, xb, y0, za, xb, y1, za, xa, y1, za, 0, 0, 1);
      }
    }
    if (!P.length) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(Nn, 3));
    g.computeBoundingSphere();
    const m = new THREE.Mesh(g, MATS[kd]);
    m.receiveShadow = kd !== LIQ.water;
    m.renderOrder = kd === LIQ.water ? 2 : 0;
    F.group.add(m);
    meshes[kd] = m;
  }
  F.chunks.set(idx, meshes);
}
function rebuild() {
  if (!F.dirty.size) return;
  const cam = G.camera ? G.camera.position : null, nc = Math.ceil(F.N / CH), T = F.T;
  let n = 0;
  for (const idx of F.dirty) {
    if (n >= 4) break;
    const ci = Math.floor(idx / nc), cj = idx % nc;
    // (far-away liquid on a big map waits until you come closer)
    if (T.stream && cam && F.chunks.has(idx)) {
      const cx = T.x0 + (ci + 0.5) * CH * V, cz = T.z0 - (cj + 0.5) * CH * V;
      if ((cx - cam.x) ** 2 + (cz - cam.z) ** 2 > (T.near + 40) ** 2) continue;
    }
    F.dirty.delete(idx);
    buildChunk(ci, cj, idx);
    n++;
  }
}
// draw everything now (after the map is made)
export function buildAllFluids() {
  if (!F) return;
  const nc = Math.ceil(F.N / CH);
  for (const idx of F.dirty) buildChunk(Math.floor(idx / nc), idx % nc, idx);
  F.dirty.clear();
}
// a few random spots of liquid near p (for bubbles and steam)
export function sampleFluid(p, r, kindName) {
  if (!F || F.T !== G.terrain) return null;
  const x = p.x + rand(-r, r), z = p.z + rand(-r, r), k = colOf(x, z);
  if (k < 0 || !(F.d[k] > 0.1)) return null;
  if (kindName && LIQ_NAME[F.kind[k] & 3] !== kindName) return null;
  return { x, z, y: F.fl[k] * V + F.d[k], kind: LIQ_NAME[F.kind[k] & 3] };
}
G.pourLiquid = pourLiquid;
G.fluidStats = fluidStats;

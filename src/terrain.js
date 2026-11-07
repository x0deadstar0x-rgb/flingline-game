// Voxel-style ground ("semi-voxel"): the ground is made of 0.5 m columns of blocks.
// Explosions carve ragged, stepped craters (like TNT in block games, but with smaller blocks),
// showing grass, then dirt, then stone underneath, and throw out real little cubes.
// Rendering: chunked meshes with greedy-merged tops + side walls. Physics: a heightfield whose
// points sit at the column centres and follow every carved column.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, clamp, addShapesFast } from './core.js';

export const V = 0.5;   // block size (m)
const CH = 32;          // chunk size in columns (16 m) for drawing
const PC = 16;          // chunk size in columns (8 m) for physics
const RMAX = 56;        // physics chunks with more flat pieces than this use a height grid instead

let T = null;
const _c = new THREE.Color(), _c2 = new THREE.Color();

function hash(i, j) { let h = (i * 374761393 + j * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }

// layers: { soil, rock, soilDepth } colours under the surface; topSide: colour of the first block's side
export function createTerrain(opts, group, bodies) {
  const { W, height, color, bedrock = -8 } = opts;
  const N = Math.round(W / V);
  const x0 = -W / 2, z0 = W / 2;
  const lv = new Int16Array(N * N);   // current top level (top = lv * V)
  const orig = new Int16Array(N * N); // level at map load (for layer colours)
  const topc = new Uint32Array(N * N); // surface colour
  const burn = new Uint8Array(N * N);  // 0 none, 1 scorched, 2 crater floor
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const x = x0 + (i + 0.5) * V, z = z0 - (j + 0.5) * V;
    const l = Math.round(height(x, z) / V);
    const k = i * N + j;
    lv[k] = l; orig[k] = l;
    topc[k] = color(l * V, x, z);
  }
  const bed = Math.floor(bedrock / V);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, flatShading: true });
  const nc = Math.ceil(N / CH);
  T = {
    W, N, x0, z0, lv, orig, topc, burn, bed, mat, nc, group, bodies,
    pnc: Math.ceil(N / PC), pchunks: new Array(Math.ceil(N / PC) ** 2).fill(null),
    chunks: new Array(nc * nc).fill(null), dirty: new Set(),
    soil: opts.soil ?? 0x6b4f35, rock: opts.rock ?? 0x7d7f86, soilDepth: opts.soilDepth ?? 6,
    under: opts.under || null,
    voids: new Map(),   // air inside columns (tunnels, caves): column -> [a0, b0, a1, b1, ...] levels
    paint: new Map(),   // colours of blocks you placed: column * 65536 + level + 32768 -> colour
  };
  // caves: the map carves them now (stamp(x, y, z, r) hollows out a ball of air)
  if (opts.caves) opts.caves((x, y, z, r) => stampVoid(x, y, z, r), (x, z, r, y0, y1) => fillColumn(x, z, r, y0, y1));
  // Big maps stream: the ground near you is built first (nearest first, a few pieces a frame),
  // and the whole map is also drawn as a light far version, so you can see everything.
  T.stream = !!opts.stream;
  T.near = opts.near ?? 175;
  if (T.stream) {
    const sx = opts.spawn ? opts.spawn[0] : 0, sz = opts.spawn ? opts.spawn[2] : 0;
    for (let ci = 0; ci < nc; ci++) for (let cj = 0; cj < nc; cj++) if (chunkDist(ci, cj, sx, sz) < 72) buildChunk(ci, cj);
    buildFar();
  } else for (let ci = 0; ci < nc; ci++) for (let cj = 0; cj < nc; cj++) buildChunk(ci, cj);
  // (ground physics is built on demand: see ensureGround)
  G.groundAt = terrainHeight;
  G.floorAt = floorAt;
  G.solidAt = solidAt;
  G.terrain = T;
  return T;
}

export function clearTerrain() { T = null; G.terrain = null; G.waterAt = noWater; G.floorAt = null; G.solidAt = null; sgrid.clear(); }

// ------------------------------------------------------------- ground physics, on demand
// A patch of ground only gets its physics when something needs it: a moving thing near it or a
// ray passing over it. Big maps load fast and only the busy parts cost anything.
export function ensureGround(xa, za, xb, zb) {
  if (G.ensureBuildings) G.ensureBuildings(xa, za, xb, zb);
  if (!T) return;
  const s = PC * V;
  const ia = Math.max(0, Math.floor((Math.min(xa, xb) - T.x0) / s)), ib = Math.min(T.pnc - 1, Math.floor((Math.max(xa, xb) - T.x0) / s));
  const ja = Math.max(0, Math.floor((T.z0 - Math.max(za, zb)) / s)), jb = Math.min(T.pnc - 1, Math.floor((T.z0 - Math.min(za, zb)) / s));
  for (let ci = ia; ci <= ib; ci++) for (let cj = ja; cj <= jb; cj++) if (!T.pchunks[ci * T.pnc + cj]) buildPhysics(ci, cj);
}
G.ensureGround = ensureGround;

// ------------------------------------------------------------- static scenery lookup
// Trees, rocks, platforms...: like the ground they stay out of the general pair search; moving
// things find them through a grid.
const SCELL = 8;
const sgrid = new Map();
const sKey = (cx, cz) => (cx + 4096) * 8192 + (cz + 4096);
let sStamp = 1;
export function addGridStatic(body) {
  body.updateAABB();
  const a = body.aabb;
  for (let cx = Math.floor(a.lowerBound.x / SCELL); cx <= Math.floor(a.upperBound.x / SCELL); cx++) {
    for (let cz = Math.floor(a.lowerBound.z / SCELL); cz <= Math.floor(a.upperBound.z / SCELL); cz++) {
      const k = sKey(cx, cz);
      let l = sgrid.get(k);
      if (!l) sgrid.set(k, l = []);
      l.push(body);
    }
  }
}
function staticsIn(aabb, cb) {
  if (!sgrid.size) return;
  sStamp++;
  for (let cx = Math.floor(aabb.lowerBound.x / SCELL); cx <= Math.floor(aabb.upperBound.x / SCELL); cx++) {
    for (let cz = Math.floor(aabb.lowerBound.z / SCELL); cz <= Math.floor(aabb.upperBound.z / SCELL); cz++) {
      const l = sgrid.get(sKey(cx, cz));
      if (!l) continue;
      for (const b of l) { if (b._st === sStamp) continue; b._st = sStamp; if (b.aabb.overlaps(aabb)) cb(b); }
    }
  }
}

// ------------------------------------------------------------- water
// Water only exists where the map has sea / lakes. Columns that start below the water level are
// water; holes you dig next to water flood, holes dug inland stay dry.
const noWater = (x, z) => (G.poolLevel ? G.poolLevel(x, z) : -Infinity);
G.waterAt = noWater;
export function setupWater(level) {
  if (!T) { G.waterAt = () => level; return null; }
  const { N, lv } = T;
  const wet = new Uint8Array(N * N);
  // the texture is laid out [j][i] (row = j) so the shader can look it up by world x / z
  const mask = new Uint8Array(N * N);
  let edgeWet = 0, edges = 0;
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const k = i * N + j;
    if (lv[k] * V < level) { wet[k] = 1; mask[j * N + i] = 255; }
    if (i === 0 || j === 0 || i === N - 1 || j === N - 1) { edges++; if (wet[k]) edgeWet++; }
  }
  const tex = new THREE.DataTexture(mask, N, N, THREE.RedFormat, THREE.UnsignedByteType);
  tex.magFilter = tex.minFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  T.water = { level, wet, mask, tex, seaOutside: edgeWet > edges * 0.3 };
  G.waterAt = waterAt;
  return T.water;
}
// water surface height at x, z (or -Infinity where there is no water)
export function waterAt(x, z) {
  const pl = G.poolLevel ? G.poolLevel(x, z) : -Infinity; // lakes in caves, acid, lava
  if (!T || !T.water) return pl;
  const i = Math.floor((x - T.x0) / V), j = Math.floor((T.z0 - z) / V);
  if (i < 0 || j < 0 || i >= T.N || j >= T.N) return T.water.seaOutside ? Math.max(pl, T.water.level) : pl;
  return T.water.wet[i * T.N + j] ? Math.max(pl, T.water.level) : pl;
}
// after digging: water flows into dug columns that touch water and are below the water level
function flood(ia, ib, ja, jb) {
  const W = T.water;
  if (!W) return;
  const { N, lv } = T;
  const low = (k) => lv[k] * V < W.level;
  const q = [];
  for (let i = ia; i <= ib; i++) for (let j = ja; j <= jb; j++) {
    const k = i * N + j;
    if (W.wet[k] || !low(k)) continue;
    const touches = (i === 0 || j === 0 || i === N - 1 || j === N - 1) ? W.seaOutside
      : (W.wet[k - N] || W.wet[k + N] || W.wet[k - 1] || W.wet[k + 1]);
    if (touches) { W.wet[k] = 1; q.push(k); }
  }
  let changed = q.length > 0;
  while (q.length) {
    const k = q.pop();
    const i = Math.floor(k / N), j = k % N;
    W.mask[j * N + i] = 255;
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const ni = i + di, nj = j + dj;
      if (ni < 0 || nj < 0 || ni >= N || nj >= N) continue;
      const nk = ni * N + nj;
      if (!W.wet[nk] && low(nk)) { W.wet[nk] = 1; q.push(nk); }
    }
  }
  if (changed) W.tex.needsUpdate = true;
}

// height of the ground (top of the block column) at x, z
export function terrainHeight(x, z) {
  if (!T) return -1e9;
  const i = Math.floor((x - T.x0) / V), j = Math.floor((T.z0 - z) / V);
  if (i < 0 || j < 0 || i >= T.N || j >= T.N) return -1e9;
  return T.lv[i * T.N + j] * V;
}
// is this point inside solid ground (not in the open air, a hole, a tunnel or a cave)?
export function solidAt(x, y, z) {
  if (!T) return false;
  const i = Math.floor((x - T.x0) / V), j = Math.floor((T.z0 - z) / V);
  if (i < 0 || j < 0 || i >= T.N || j >= T.N) return false;
  const k = i * T.N + j, l = y / V;
  if (l >= T.lv[k]) return false;
  const v = T.voids.get(k);
  if (v) for (let q = 0; q < v.length; q += 2) if (l >= v[q] && l < v[q + 1]) return false;
  return true;
}
// the floor under a point: the top of the ground at or below y (a cave floor if you're in a cave).
// If y is inside solid ground, the top of that solid layer.
export function floorAt(x, y, z) {
  if (!T) return -1e9;
  const i = Math.floor((x - T.x0) / V), j = Math.floor((T.z0 - z) / V);
  if (i < 0 || j < 0 || i >= T.N || j >= T.N) return -1e9;
  const k = i * T.N + j, l = y / V, top = T.lv[k];
  const v = T.voids.get(k);
  if (!v || l >= top) return top * V;
  for (let q = 0; q < v.length; q += 2) if (l < v[q + 1]) return v[q] * V;
  return top * V;
}
// is this point deep inside the ground?
export function belowGround(x, y, z, margin = 0.3) { return solidAt(x, y + margin, z) && y > T.bed * V + 1; }

export function terrainTopColor(x, z) {
  if (!T) return 0x6b4f35;
  const i = clamp(Math.floor((x - T.x0) / V), 0, T.N - 1), j = clamp(Math.floor((T.z0 - z) / V), 0, T.N - 1);
  return T.topc[i * T.N + j];
}

// ------------------------------------------------------------- meshing
const VMAX = 12 * 6 * CH * CH * 3; // generous upper bound of floats per chunk
const P = new Float32Array(VMAX), Nn = new Float32Array(VMAX), C = new Float32Array(VMAX);
let vp = 0;
function pushV(x, y, z, nx, ny, nz, r, g, b) {
  if (vp + 3 > VMAX) return;
  P[vp] = x; P[vp + 1] = y; P[vp + 2] = z;
  Nn[vp] = nx; Nn[vp + 1] = ny; Nn[vp + 2] = nz;
  C[vp] = r; C[vp + 1] = g; C[vp + 2] = b;
  vp += 3;
}
// quad a-b-c-d (counter-clockwise when seen from the side the normal points to)
function quad(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, nx, ny, nz, col) {
  _c.setHex(col);
  const r = _c.r, g = _c.g, b = _c.b;
  pushV(ax, ay, az, nx, ny, nz, r, g, b); pushV(bx, by, bz, nx, ny, nz, r, g, b); pushV(dx, dy, dz, nx, ny, nz, r, g, b);
  pushV(bx, by, bz, nx, ny, nz, r, g, b); pushV(cx, cy, cz, nx, ny, nz, r, g, b); pushV(dx, dy, dz, nx, ny, nz, r, g, b);
}
function shade(hex, f) { _c2.setHex(hex); _c2.r *= f; _c2.g *= f; _c2.b *= f; return _c2.getHex(); }
const SCORCH = 0x3a2a1e, CRATER = 0x4a3524;
function topColor(k, i, j) {
  let c = T.topc[k];
  // the top block of a carved column shows what's at that depth (dirt / stone); placed blocks
  // show their own colour
  if (T.lv[k] < T.orig[k] || (T.paint.size && T.paint.has(k * 65536 + T.lv[k] + 32768))) c = blockColor(k, T.lv[k]);
  // gentle patchy variation (per 2 m patch so flat areas still merge into big quads)
  const n = hash(i >> 2, j >> 2);
  c = shade(c, 0.94 + n * 0.1);
  const bn = T.burn[k];
  if (bn) { _c.setHex(c); _c2.setHex(bn === 2 ? CRATER : SCORCH); _c.lerp(_c2, bn === 2 ? 0.55 : 0.4); c = _c.getHex(); }
  return c;
}
// side wall of column k from level lo (exclusive bottom) up to hi, facing (nx, nz)
// how dark a cave is at this depth under the ground above it (no light gets that far in)
const caveShade = (depthLevels) => clamp(1.06 - depthLevels * V / 16, 0.55, 1);
function sideWall(k, lo, hi, x1, z1, x2, z2, nx, nz, cave = false) {
  // split into runs of the same layer colour
  let l = hi;
  while (l > lo) {
    const c0 = blockColor(k, l); // colour of the block (l-1 .. l)
    let m = l - 1;
    while (m > lo && blockColor(k, m) === c0 && (!cave || l - m < 4)) m--;
    const yTop = l * V, yBot = m * V;
    let cc = shade(c0, nx !== 0 ? 0.86 : 0.78); // side faces a bit darker for the blocky look
    if (cave) cc = shade(cc, caveShade(T.lv[k] - (l + m) / 2));
    // a-b-c-d counter-clockwise seen from outside
    quad(x1, yBot, z1, x2, yBot, z2, x2, yTop, z2, x1, yTop, z1, nx, 0, nz, cc);
    l = m;
  }
}
// colour of the block whose top is at level l (occupies l-1 .. l)
function blockColor(k, l) {
  if (T.paint.size) { const pc = T.paint.get(k * 65536 + l + 32768); if (pc !== undefined) return pc; }
  const d = T.orig[k] - l; // 0 = original top block
  if (T.under) return T.under(d, T.topc[k]);
  if (d <= 0) return T.topc[k];
  if (d <= T.soilDepth) return T.soil;
  if (l > T.bed + 8) return T.rock;
  return 0x4a4c55; // deep bedrock
}

// ------------------------------------------------------------- caves (air inside columns)
// solid levels of column k inside [a, b) (b <= top)
function solidIn(k, a, b) {
  let n = Math.max(0, b - a);
  const v = T.voids.get(k);
  if (v) for (let q = 0; q < v.length; q += 2) n -= Math.max(0, Math.min(b, v[q + 1]) - Math.max(a, v[q]));
  return n;
}
// make levels [a, b) of column k air. Returns how many solid levels were removed.
function addVoid(k, a, b) {
  const { lv, voids } = T;
  a = Math.max(a, T.bed);
  const top = lv[k];
  if (b <= a || a >= top) return 0;
  const removed = solidIn(k, a, Math.min(b, top));
  const v = voids.get(k);
  if (b >= top) {
    // open to the sky: the top comes down; a void right under the new top joins the open air
    let nt = a;
    if (v) {
      while (v.length && v[v.length - 1] >= nt) { const p = v[v.length - 2]; v.length -= 2; if (p < nt) nt = p; }
      if (!v.length) voids.delete(k);
    }
    lv[k] = nt;
    return removed;
  }
  // a hole inside the ground: merge it with the voids it touches
  const out = [];
  let na = a, nb = b, placed = false;
  if (v) for (let q = 0; q < v.length; q += 2) {
    const p = v[q], r = v[q + 1];
    if (r < na) out.push(p, r);
    else if (p > nb) { if (!placed) { out.push(na, nb); placed = true; } out.push(p, r); }
    else { na = Math.min(na, p); nb = Math.max(nb, r); }
  }
  if (!placed) out.push(na, nb);
  voids.set(k, out);
  return removed;
}
// make levels [a, b) of column k solid (placing blocks)
export function fillLevels(k, a, b) {
  const { lv, voids } = T;
  if (b <= a) return;
  const top = lv[k];
  let v = voids.get(k);
  if (a > top) { v = v || []; v.push(top, a); voids.set(k, v); lv[k] = b; return; }
  if (b > top) lv[k] = b;
  if (!v) return;
  const out = [];
  for (let q = 0; q < v.length; q += 2) {
    const p = v[q], r = v[q + 1];
    if (r <= a || p >= b) { out.push(p, r); continue; }
    if (p < a) out.push(p, a);
    if (r > b) out.push(b, r);
  }
  if (out.length) voids.set(k, out); else voids.delete(k);
}
// solid layers of column k from the bottom up, as [s0, e0, s1, e1, ...] (the first starts deep down)
function solidSegs(k, out) {
  out.length = 0;
  const v = T.voids.get(k);
  let s = T.bed - 400;
  if (v) for (let q = 0; q < v.length; q += 2) { out.push(s, v[q]); s = v[q + 1]; }
  out.push(s, T.lv[k]);
  return out;
}
// air of column k (or of the space outside the map, k < 0) as [a0, b0, ...], up to the sky
function airSegs(k, out) {
  out.length = 0;
  if (k < 0) { out.push(T.bed - 1, 1e6); return out; }
  const v = T.voids.get(k);
  if (v) for (let q = 0; q < v.length; q += 2) out.push(v[q], v[q + 1]);
  out.push(T.lv[k], 1e6);
  return out;
}
// a ball of air (natural caves; the drill)
function stampVoid(x, y, z, r) {
  const { N, x0, z0 } = T;
  const ia = Math.max(0, Math.floor((x - r - x0) / V)), ib = Math.min(N - 1, Math.floor((x + r - x0) / V));
  const ja = Math.max(0, Math.floor((z0 - z - r) / V)), jb = Math.min(N - 1, Math.floor((z0 - z + r) / V));
  for (let i = ia; i <= ib; i++) for (let j = ja; j <= jb; j++) {
    const cx = x0 + (i + 0.5) * V, cz = z0 - (j + 0.5) * V;
    const d2 = (cx - x) ** 2 + (cz - z) ** 2;
    if (d2 > r * r) continue;
    const h = Math.sqrt(r * r - d2);
    addVoid(i * N + j, Math.floor((y - h) / V + 0.5), Math.ceil((y + h) / V - 0.5));
  }
}
export function lowestNear(i, j) {
  // lowest floor among a column's neighbours (their top, or the bottom of their lowest cave)
  const { N, lv } = T;
  let m = 1e9;
  for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const ni = i + di, nj = j + dj;
    if (ni < 0 || nj < 0 || ni >= N || nj >= N) { m = Math.min(m, T.bed - 1); continue; }
    const k = ni * N + nj, v = T.voids.get(k);
    m = Math.min(m, lv[k], v ? v[0] : 1e9);
  }
  return m;
}

const _segK = [], _air = [];
function buildChunk(ci, cj) {
  const { N, lv, x0, z0 } = T;
  const i0 = ci * CH, j0 = cj * CH, i1 = Math.min(N, i0 + CH), j1 = Math.min(N, j0 + CH);
  vp = 0;
  // ---- tops: greedy merge equal (height, colour) rectangles
  const w = i1 - i0, h = j1 - j0;
  const key = new Float64Array(w * h), done = new Uint8Array(w * h), cols = new Uint32Array(w * h);
  for (let a = 0; a < w; a++) for (let b = 0; b < h; b++) {
    const i = i0 + a, j = j0 + b, k = i * N + j;
    const c = topColor(k, i, j);
    cols[a * h + b] = c;
    key[a * h + b] = lv[k] * 16777216 + c;
  }
  for (let b = 0; b < h; b++) for (let a = 0; a < w; a++) {
    const s = a * h + b;
    if (done[s]) continue;
    const kk = key[s];
    let a2 = a + 1;
    while (a2 < w && !done[a2 * h + b] && key[a2 * h + b] === kk) a2++;
    let b2 = b + 1;
    outer: while (b2 < h) {
      for (let x = a; x < a2; x++) if (done[x * h + b2] || key[x * h + b2] !== kk) break outer;
      b2++;
    }
    for (let x = a; x < a2; x++) for (let y = b; y < b2; y++) done[x * h + y] = 1;
    const y = lv[(i0 + a) * N + (j0 + b)] * V;
    const xa = x0 + (i0 + a) * V, xb = x0 + (i0 + a2) * V;
    const za = z0 - (j0 + b) * V, zb = z0 - (j0 + b2) * V;
    // seen from above, (xa,za) -> (xb,za) -> (xb,zb) -> (xa,zb) is counter-clockwise
    quad(xa, y, za, xb, y, za, xb, y, zb, xa, y, zb, 0, 1, 0, cols[s]);
  }
  // ---- caves: floors and ceilings
  const voids = T.voids;
  if (voids.size) for (let i = i0; i < i1; i++) for (let j = j0; j < j1; j++) {
    const k = i * N + j, v = voids.get(k);
    if (!v) continue;
    const xa = x0 + i * V, xb = xa + V, za = z0 - j * V, zb = za - V;
    for (let q = 0; q < v.length; q += 2) {
      const yf = v[q] * V, yc = v[q + 1] * V;
      quad(xa, yf, za, xb, yf, za, xb, yf, zb, xa, yf, zb, 0, 1, 0, shade(blockColor(k, v[q]), 0.9 * caveShade(lv[k] - v[q])));
      quad(xa, yc, za, xa, yc, zb, xb, yc, zb, xb, yc, za, 0, -1, 0, shade(blockColor(k, v[q + 1] + 1), 0.6 * caveShade(lv[k] - v[q + 1])));
    }
  }
  // ---- sides: walls where a neighbour column is lower (or the map edge).
  // Neighbouring walls with the same heights and colours are merged into one long quad.
  // (Columns with caves next to them are done one by one further down.)
  const edge = T.bed - 1;
  const { orig, topc } = T;
  const hasV = (i, j) => voids.size > 0 && i >= 0 && j >= 0 && i < N && j < N && voids.has(i * N + j);
  const nlv = (i, j) => (i < 0 || j < 0 || i >= N || j >= N ? edge : lv[i * N + j]);
  const same = (k1, k2) => lv[k1] === lv[k2] && orig[k1] === orig[k2] && topc[k1] === topc[k2];
  // walls facing +x / -x: runs along j
  for (const sx of [1, -1]) {
    for (let i = i0; i < i1; i++) {
      let start = -1, sk = 0, snl = 0;
      const xw = x0 + (sx > 0 ? i + 1 : i) * V;
      for (let j = j0; j <= j1; j++) {
        let ok = false, k = 0, nl = 0;
        if (j < j1) { k = i * N + j; nl = nlv(i + sx, j); ok = nl < lv[k] && !hasV(i, j) && !hasV(i + sx, j); }
        if (start >= 0 && (!ok || nl !== snl || !same(k, sk))) {
          const za = z0 - start * V, zb = z0 - j * V;
          if (sx > 0) sideWall(sk, snl, lv[sk], xw, za, xw, zb, 1, 0);
          else sideWall(sk, snl, lv[sk], xw, zb, xw, za, -1, 0);
          start = -1;
        }
        if (ok && start < 0) { start = j; sk = k; snl = nl; }
      }
    }
  }
  // walls facing +z (towards smaller j) / -z: runs along i
  for (const sz of [1, -1]) {
    for (let j = j0; j < j1; j++) {
      let start = -1, sk = 0, snl = 0;
      const zw = z0 - (sz > 0 ? j : j + 1) * V;
      for (let i = i0; i <= i1; i++) {
        let ok = false, k = 0, nl = 0;
        if (i < i1) { k = i * N + j; nl = nlv(i, j - sz); ok = nl < lv[k] && !hasV(i, j) && !hasV(i, j - sz); }
        if (start >= 0 && (!ok || nl !== snl || !same(k, sk))) {
          const xa = x0 + start * V, xb = x0 + i * V;
          // counter-clockwise seen from outside: +z walls run from xa to xb, -z walls from xb to xa
          if (sz > 0) sideWall(sk, snl, lv[sk], xa, zw, xb, zw, 0, 1);
          else sideWall(sk, snl, lv[sk], xb, zw, xa, zw, 0, -1);
          start = -1;
        }
        if (ok && start < 0) { start = i; sk = k; snl = nl; }
      }
    }
  }
  // walls where caves are involved: my solid layers that face air in the neighbour
  if (voids.size) for (let i = i0; i < i1; i++) for (let j = j0; j < j1; j++) {
    const k = i * N + j;
    const xa = x0 + i * V, xb = xa + V, za = z0 - j * V, zb = za - V;
    for (let d = 0; d < 4; d++) {
      const ni = i + (d === 0 ? 1 : d === 1 ? -1 : 0), nj = j + (d === 2 ? -1 : d === 3 ? 1 : 0);
      if (!hasV(i, j) && !hasV(ni, nj)) continue;
      const nk = ni < 0 || nj < 0 || ni >= N || nj >= N ? -1 : ni * N + nj;
      solidSegs(k, _segK); airSegs(nk, _air);
      for (let s = 0; s < _segK.length; s += 2) for (let a = 0; a < _air.length; a += 2) {
        const lo = Math.max(_segK[s], _air[a], edge), hi = Math.min(_segK[s + 1], _air[a + 1]);
        if (hi <= lo) continue;
        if (d === 0) sideWall(k, lo, hi, xb, za, xb, zb, 1, 0, true);
        else if (d === 1) sideWall(k, lo, hi, xa, zb, xa, za, -1, 0, true);
        else if (d === 2) sideWall(k, lo, hi, xa, za, xb, za, 0, 1, true);
        else sideWall(k, lo, hi, xb, zb, xa, zb, 0, -1, true);
      }
    }
  }
  // ---- mesh
  const idx = ci * T.nc + cj;
  let m = T.chunks[idx];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(P.slice(0, vp), 3));
  const cb = new Uint8Array(vp);
  for (let q = 0; q < vp; q++) cb[q] = Math.round(C[q] * 255);
  geo.setAttribute('color', new THREE.BufferAttribute(cb, 3, true));
  geo.computeBoundingBox(); geo.computeBoundingSphere();
  if (m) { m.geometry.dispose(); m.geometry = geo; }
  else {
    m = new THREE.Mesh(geo, T.mat);
    m.receiveShadow = true; m.castShadow = true;
    T.group.add(m);
    T.chunks[idx] = m;
  }
}

function chunkDist(ci, cj, x, z) {
  const cx = T.x0 + (ci + 0.5) * CH * V, cz = T.z0 - (cj + 0.5) * CH * V;
  return Math.hypot(cx - x, cz - z);
}
// rebuild chunks that changed (a few per frame so chain explosions don't stall). On big maps
// changes far away just wait: that piece is rebuilt when you get close.
let streamTick = 0;
export function updateTerrain() {
  if (!T) return;
  const cam = G.camera ? G.camera.position : null;
  let n = 0;
  for (const idx of T.dirty) {
    if (n >= 6) break;
    T.dirty.delete(idx);
    const ci = Math.floor(idx / T.nc), cj = idx % T.nc;
    if (T.stream && cam && chunkDist(ci, cj, cam.x, cam.z) > T.near + 20) {
      const m = T.chunks[idx];
      if (m) { m.geometry.dispose(); m.removeFromParent(); T.chunks[idx] = null; }
      continue;
    }
    buildChunk(ci, cj);
    n++;
  }
  if (!T.stream || !cam) return;
  if (T.farU) T.farU.value.set(cam.x, cam.z, T.near - 14);
  // stream in the nearest missing pieces (and hide the far-away ones)
  if (++streamTick % 3) return;
  const want = [];
  for (let ci = 0; ci < T.nc; ci++) for (let cj = 0; cj < T.nc; cj++) {
    const idx = ci * T.nc + cj, d = chunkDist(ci, cj, cam.x, cam.z), m = T.chunks[idx];
    if (m) m.visible = d < T.near + 26;
    else if (d < T.near) want.push([d, ci, cj]);
  }
  want.sort((a, b) => a[0] - b[0]);
  const t0 = performance.now();
  for (const [, ci, cj] of want) { buildChunk(ci, cj); if (performance.now() - t0 > 5) break; }
}

// the far version of the whole map: 4 m blocks, one block lower than the real ground (which
// always covers it near you; the far version isn't drawn within the near radius at all)
const FARC = 8;
function buildFar() {
  const { N, lv, x0, z0, topc } = T;
  const M = Math.ceil(N / FARC);
  const fh = new Int16Array(M * M), fc = new Uint32Array(M * M);
  for (let a = 0; a < M; a++) for (let b = 0; b < M; b++) {
    let mn = 1e9;
    for (let i = a * FARC; i < Math.min(N, (a + 1) * FARC); i++) for (let j = b * FARC; j < Math.min(N, (b + 1) * FARC); j++) mn = Math.min(mn, lv[i * N + j]);
    fh[a * M + b] = mn - 1;
    const ci = Math.min(N - 1, a * FARC + (FARC >> 1)), cj = Math.min(N - 1, b * FARC + (FARC >> 1));
    fc[a * M + b] = topc[ci * N + cj];
  }
  const U = { value: new THREE.Vector3(0, 0, 0) };
  T.farU = U;
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, flatShading: true });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uNear = U;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vWXZ;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vWXZ;\nuniform vec3 uNear;').replace('void main() {', 'void main() {\n  if (distance(vWXZ, uNear.xy) < uNear.z) discard;');
  };
  const nb = (a, b, h) => (a < 0 || b < 0 || a >= M || b >= M ? h - 60 : fh[a * M + b]);
  const TS = 32;
  for (let ta = 0; ta < M; ta += TS) for (let tb = 0; tb < M; tb += TS) {
    vp = 0;
    for (let a = ta; a < Math.min(M, ta + TS); a++) for (let b = tb; b < Math.min(M, tb + TS); b++) {
      const h = fh[a * M + b], y = h * V, col = fc[a * M + b], sc = shade(col, 0.82);
      const xa = x0 + a * FARC * V, xb = x0 + Math.min(N, (a + 1) * FARC) * V;
      const za = z0 - b * FARC * V, zb = z0 - Math.min(N, (b + 1) * FARC) * V;
      quad(xa, y, za, xb, y, za, xb, y, zb, xa, y, zb, 0, 1, 0, col);
      let n;
      if ((n = nb(a + 1, b, h)) < h) quad(xb, n * V, za, xb, n * V, zb, xb, y, zb, xb, y, za, 1, 0, 0, sc);
      if ((n = nb(a - 1, b, h)) < h) quad(xa, n * V, zb, xa, n * V, za, xa, y, za, xa, y, zb, -1, 0, 0, sc);
      if ((n = nb(a, b - 1, h)) < h) quad(xa, n * V, za, xb, n * V, za, xb, y, za, xa, y, za, 0, 0, 1, sc);
      if ((n = nb(a, b + 1, h)) < h) quad(xb, n * V, zb, xa, n * V, zb, xa, y, zb, xb, y, zb, 0, 0, -1, sc);
    }
    if (!vp) continue;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(P.slice(0, vp), 3));
    const cb = new Uint8Array(vp);
    for (let q = 0; q < vp; q++) cb[q] = Math.round(C[q] * 255);
    geo.setAttribute('color', new THREE.BufferAttribute(cb, 3, true));
    geo.computeBoundingSphere();
    const m = new THREE.Mesh(geo, mat);
    T.group.add(m);
  }
}
// make a round column of ground solid from y0 to y1 (pillars in caves)
function fillColumn(x, z, r, y0, y1) {
  const { N, x0, z0 } = T;
  for (let i = Math.max(0, Math.floor((x - r - x0) / V)); i <= Math.min(N - 1, Math.floor((x + r - x0) / V)); i++) {
    for (let j = Math.max(0, Math.floor((z0 - z - r) / V)); j <= Math.min(N - 1, Math.floor((z0 - z + r) / V)); j++) {
      const cx = x0 + (i + 0.5) * V, cz = z0 - (j + 0.5) * V;
      if ((cx - x) ** 2 + (cz - z) ** 2 > r * r) continue;
      fillLevels(i * N + j, Math.floor(y0 / V), Math.ceil(y1 / V));
    }
  }
}

// ------------------------------------------------------------- physics
// Each 8 m patch of ground is one static body. Usually it's made of a few boxes (equal-height
// areas merged together): cheap, and exactly the shape of the blocks. Very bumpy patches use a
// small height grid instead (fewer pieces to keep in memory).
function buildPhysics(ci, cj) {
  const { N, lv, x0, z0, bed } = T;
  const idx = ci * T.pnc + cj;
  const old = T.pchunks[idx];
  if (old) { G.world.removeBody(old); const k = T.bodies.indexOf(old); if (k >= 0) T.bodies.splice(k, 1); }
  const i0 = ci * PC, j0 = cj * PC, i1 = Math.min(N, i0 + PC), j1 = Math.min(N, j0 + PC);
  const w = i1 - i0, h = j1 - j0;
  const at = (i, j) => (i < 0 || j < 0 || i >= N || j >= N ? bed - 1 : lv[i * N + j]);
  // merge equal-height columns into rectangles (columns with caves are done separately)
  const done = new Uint8Array(w * h), rects = [];
  const caveCols = [];
  if (T.voids.size) for (let a = 0; a < w; a++) for (let b = 0; b < h; b++) if (T.voids.has((i0 + a) * N + j0 + b)) { done[a * h + b] = 1; caveCols.push(a, b); }
  for (let b = 0; b < h; b++) for (let a = 0; a < w; a++) {
    if (done[a * h + b]) continue;
    const L = lv[(i0 + a) * N + j0 + b];
    let a2 = a + 1;
    while (a2 < w && !done[a2 * h + b] && lv[(i0 + a2) * N + j0 + b] === L) a2++;
    let b2 = b + 1;
    outer: while (b2 < h) { for (let x = a; x < a2; x++) if (done[x * h + b2] || lv[(i0 + x) * N + j0 + b2] !== L) break outer; b2++; }
    for (let x = a; x < a2; x++) for (let y = b; y < b2; y++) done[x * h + y] = 1;
    rects.push([a, b, a2, b2, L]);
  }
  const body = new CANNON.Body({ mass: 0, material: G.mats.ground, collisionFilterGroup: GROUP.STATIC });
  body.isTerrain = true;
  if (rects.length <= RMAX || caveCols.length) {
    body.position.set(x0 + i0 * V, 0, z0 - j0 * V);
    const shapes = [], offs = [];
    // (a neighbour's cave counts as low ground: the wall next to it must go down that far)
    const low = (i, j) => { if (i < 0 || j < 0 || i >= N || j >= N) return bed - 1; const k = i * N + j, v = T.voids.get(k); return v ? Math.min(lv[k], v[0]) : lv[k]; };
    for (const [a, b, a2, b2, L] of rects) {
      // how far down the box has to go: to the lowest neighbour (so its sides are walls), at least 1 m
      let lowest = L;
      for (let x = a - 1; x <= a2; x++) { lowest = Math.min(lowest, low(i0 + x, j0 + b - 1), low(i0 + x, j0 + b2)); }
      for (let y = b; y < b2; y++) { lowest = Math.min(lowest, low(i0 + a - 1, j0 + y), low(i0 + a2, j0 + y)); }
      const top = L * V;
      // thick enough (3 m+) that nothing falling fast can slip through between physics steps
      const bottom = Math.max((bed - 1) * V, Math.min(top - 3, lowest * V - 0.25));
      const hx = (a2 - a) * V / 2, hz = (b2 - b) * V / 2, hy = (top - bottom) / 2;
      shapes.push(new CANNON.Box(new CANNON.Vec3(hx, hy, hz))); offs.push(new CANNON.Vec3(a * V + hx, bottom + hy, -(b * V + hz)));
    }
    // columns with caves: columns built the same way (same top, same caves) are merged too, and
    // each solid layer gets a box (the deepest one goes 3 m+ down, like the rest)
    if (caveCols.length) {
      const ids = new Int32Array(w * h).fill(-1), keys = new Map();
      for (let q = 0; q < caveCols.length; q += 2) {
        const a = caveCols[q], b = caveCols[q + 1], k = (i0 + a) * N + j0 + b;
        const key = lv[k] + ':' + T.voids.get(k).join(',');
        if (!keys.has(key)) keys.set(key, keys.size);
        ids[a * h + b] = keys.get(key);
      }
      const used = new Uint8Array(w * h), segs = [];
      for (let b = 0; b < h; b++) for (let a = 0; a < w; a++) {
        const id = ids[a * h + b];
        if (id < 0 || used[a * h + b]) continue;
        let a2 = a + 1;
        while (a2 < w && !used[a2 * h + b] && ids[a2 * h + b] === id) a2++;
        let b2 = b + 1;
        grow: while (b2 < h) { for (let x = a; x < a2; x++) if (used[x * h + b2] || ids[x * h + b2] !== id) break grow; b2++; }
        for (let x = a; x < a2; x++) for (let y = b; y < b2; y++) used[x * h + y] = 1;
        let lowest = 1e9;
        for (let x = a - 1; x <= a2; x++) { lowest = Math.min(lowest, low(i0 + x, j0 + b - 1), low(i0 + x, j0 + b2)); }
        for (let y = b; y < b2; y++) { lowest = Math.min(lowest, low(i0 + a - 1, j0 + y), low(i0 + a2, j0 + y)); }
        solidSegs((i0 + a) * N + j0 + b, segs);
        const hx = (a2 - a) * V / 2, hz = (b2 - b) * V / 2;
        for (let s = 0; s < segs.length; s += 2) {
          const top = segs[s + 1] * V;
          const bottom = s === 0 ? Math.max((bed - 1) * V, Math.min(top - 3, lowest * V - 0.25)) : segs[s] * V;
          if (top - bottom < 0.05) continue;
          const hy = (top - bottom) / 2;
          shapes.push(new CANNON.Box(new CANNON.Vec3(hx, hy, hz))); offs.push(new CANNON.Vec3(a * V + hx, bottom + hy, -(b * V + hz)));
        }
      }
    }
    addShapesFast(body, shapes, offs);
  } else {
    // bumpy patch: height grid through the column centres (one extra row/column to join the next patch)
    const data = [];
    let mn = 1e9, mx = -1e9;
    for (let a = 0; a <= w; a++) {
      const col = [];
      for (let b = 0; b <= h; b++) { const v = at(Math.min(N - 1, i0 + a), Math.min(N - 1, j0 + b)) * V; col.push(v); if (v < mn) mn = v; if (v > mx) mx = v; }
      data.push(col);
    }
    body.addShape(new CANNON.Heightfield(data, { elementSize: V, minValue: mn - 1, maxValue: mx + 0.5 }));
    body.position.set(x0 + (i0 + 0.5) * V, 0, z0 - (j0 + 0.5) * V);
    body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  }
  G.world.addBody(body);
  T.bodies.push(body);
  T.pchunks[idx] = body;
  // things resting here may have lost their footing
  if (old) {
    const xa = x0 + i0 * V - 1, xb = x0 + i1 * V + 1, za = z0 - j1 * V - 1, zb = z0 - j0 * V + 1;
    for (const bd of G.world.bodies) if (bd.type === CANNON.Body.DYNAMIC && bd.sleepState === CANNON.Body.SLEEPING && bd.position.x > xa && bd.position.x < xb && bd.position.z > za && bd.position.z < zb) bd.wakeUp();
  }
}

// The general pair search ("broadphase") skips the ground patches: each moving thing looks up
// the patches under it directly by position, which costs nothing however big the map is.
function chunksIn(aabb, cb) {
  if (!T || !T.pchunks.length) return;
  const s = PC * V;
  const ia = Math.max(0, Math.floor((aabb.lowerBound.x - T.x0) / s)), ib = Math.min(T.pnc - 1, Math.floor((aabb.upperBound.x - T.x0) / s));
  const ja = Math.max(0, Math.floor((T.z0 - aabb.upperBound.z) / s)), jb = Math.min(T.pnc - 1, Math.floor((T.z0 - aabb.lowerBound.z) / s));
  for (let ci = ia; ci <= ib; ci++) for (let cj = ja; cj <= jb; cj++) {
    const c = T.pchunks[ci * T.pnc + cj];
    if (!c) continue;
    if (c.aabbNeedsUpdate) c.updateAABB();
    if (c.aabb.overlaps(aabb)) cb(c);
  }
}
export class VoxelBroadphase extends CANNON.SAPBroadphase {
  constructor(world) {
    super();
    const list = this.axisList;
    this._addBodyHandler = (e) => { if (!e.body.isTerrain && !e.body.isGridStatic) list.push(e.body); };
    if (world) this.setWorld(world);
  }
  setWorld(world) {
    super.setWorld(world);
    for (let i = this.axisList.length - 1; i >= 0; i--) if (this.axisList[i].isTerrain || this.axisList[i].isGridStatic) this.axisList.splice(i, 1);
  }
  collisionPairs(world, p1, p2) {
    super.collisionPairs(world, p1, p2);
    const sq = G.staticQuery;
    if (!T && !sq && !sgrid.size) return;
    const DYN = CANNON.Body.DYNAMIC, SLEEP = CANNON.Body.SLEEPING;
    for (const b of this.axisList) {
      if (b.type !== DYN || b.sleepState === SLEEP) continue;
      if (b.aabbNeedsUpdate) b.updateAABB();
      const add = (c) => {
        if ((b.collisionFilterGroup & c.collisionFilterMask) === 0 || (c.collisionFilterGroup & b.collisionFilterMask) === 0) return;
        p1.push(b); p2.push(c);
      };
      if (T) chunksIn(b.aabb, add);
      if (sq) sq(b.aabb, add);
      staticsIn(b.aabb, add);
    }
  }
  aabbQuery(world, aabb, result = []) {
    super.aabbQuery(world, aabb, result);
    if (T) chunksIn(aabb, (c) => result.push(c));
    if (G.staticQuery) G.staticQuery(aabb, (c) => result.push(c));
    staticsIn(aabb, (c) => result.push(c));
    return result;
  }
}

// ------------------------------------------------------------- carving
// Carve a crater around pos (sphere of radius R, ragged edge). Returns the removed blocks'
// colours (a sample) and count, or null if the blast was in the air.
// Underground (or with opts.sphere) it hollows out a ball instead: tunnels and caves keep their roof.
export function carveTerrain(pos, R, opts = {}) {
  if (!T) return null;
  const g = terrainHeight(pos.x, pos.z);
  if (g < -1e8) return null;
  const sphere = opts.sphere || pos.y < g - R * 0.6;
  if (!sphere && pos.y - g > R * 0.75) return null;
  const { N, lv, x0, z0, burn } = T;
  const cy = sphere ? pos.y : Math.min(pos.y, g + R * 0.35) - (opts.sink ?? 0.15);
  const ia = Math.max(0, Math.floor((pos.x - R * 1.3 - x0) / V)), ib = Math.min(N - 1, Math.ceil((pos.x + R * 1.3 - x0) / V));
  const ja = Math.max(0, Math.floor((z0 - pos.z - R * 1.3) / V)), jb = Math.min(N - 1, Math.ceil((z0 - pos.z + R * 1.3) / V));
  let removed = 0;
  const sample = [];
  let minL = Infinity;
  const changed = new Set(); // physics patches whose blocks changed
  const touch = (i, j) => {
    const ci = Math.floor(i / PC), cj = Math.floor(j / PC);
    changed.add(ci * T.pnc + cj);
    // a patch's walls reach down to its neighbours' ground, so a change at the edge matters next door
    const ii = i % PC, jj = j % PC;
    if (ii === 0 && ci > 0) changed.add((ci - 1) * T.pnc + cj);
    if (ii === PC - 1 && ci + 1 < T.pnc) changed.add((ci + 1) * T.pnc + cj);
    if (jj === 0 && cj > 0) changed.add(ci * T.pnc + cj - 1);
    if (jj === PC - 1 && cj + 1 < T.pnc) changed.add(ci * T.pnc + cj + 1);
  };
  for (let i = ia; i <= ib; i++) for (let j = ja; j <= jb; j++) {
    const k = i * N + j;
    const x = x0 + (i + 0.5) * V, z = z0 - (j + 0.5) * V;
    const d = Math.hypot(x - pos.x, z - pos.z);
    const Rc = R * (sphere ? 0.9 + 0.2 * hash(i * 7 + 3, j * 13 + 5) : 0.82 + 0.3 * hash(i * 7 + 3, j * 13 + 5)); // ragged blocky edge
    if (d > Rc * 1.25) continue;
    if (d > Rc) {
      if (sphere) continue;
      // a ring of thrown-up dirt around big craters
      if (opts.rim && lv[k] <= T.orig[k] && !T.voids.has(k) && hash(i * 3 + 1, j * 5 + 2) < 0.55) { lv[k] += 1; touch(i, j); }
      if (!burn[k]) burn[k] = 1;
      markDirty(i, j);
      continue;
    }
    const hs = Math.sqrt(Math.max(0, Rc * Rc - d * d));
    const l = lv[k];
    let a, b;
    if (sphere) { a = Math.floor((cy - hs) / V + 0.5); b = Math.ceil((cy + hs) / V - 0.5); }
    else { a = Math.max(T.bed, Math.floor((cy - hs * (opts.flat ?? 0.85)) / V)); b = l + 1; burn[k] = d < Rc * 0.75 ? 2 : Math.max(burn[k], 1); }
    if (sample.length < 80) for (let q = Math.min(b, l); q > a && sample.length < 80; q--) sample.push(blockColor(k, q));
    const rem = addVoid(k, a, b);
    if (rem > 0) {
      removed += rem;
      if (lv[k] < minL) minL = lv[k];
      touch(i, j);
    }
    if (rem > 0 || !sphere) markDirty(i, j);
  }
  // the ground's physics follows the new blocks immediately (only the patches that changed)
  for (const idx of changed) if (T.pchunks[idx]) buildPhysics(Math.floor(idx / T.pnc), idx % T.pnc);
  if (minL < Infinity) {
    flood(Math.max(0, ia - 1), Math.min(N - 1, ib + 1), Math.max(0, ja - 1), Math.min(N - 1, jb + 1));
  }
  // scorched ground further out (only the colour changes, so no physics rebuild)
  if (opts.scorch > R * 1.25) {
    const S = opts.scorch;
    const sa = Math.max(0, Math.floor((pos.x - S - x0) / V)), sb = Math.min(N - 1, Math.ceil((pos.x + S - x0) / V));
    const ta = Math.max(0, Math.floor((z0 - pos.z - S) / V)), tb = Math.min(N - 1, Math.ceil((z0 - pos.z + S) / V));
    for (let i = sa; i <= sb; i++) for (let j = ta; j <= tb; j++) {
      const k = i * N + j;
      if (burn[k]) continue;
      const x = x0 + (i + 0.5) * V, z = z0 - (j + 0.5) * V;
      const d = Math.hypot(x - pos.x, z - pos.z);
      // patchy towards the edge
      if (d > S * (0.75 + 0.25 * hash(i * 11 + 7, j * 17 + 3)) || hash(i * 5 + 9, j * 3 + 1) > 1.25 - d / S) continue;
      burn[k] = 1;
      markDirty(i, j);
    }
  }
  return { removed, sample, ground: sphere ? pos.y : g, sphere };
}
// Place an n x n x n cube of blocks (n = 2: one metre) on the half-metre grid, snapped to n,
// around (x, y, z). Returns false if there's no ground here.
export function placeCube(x, y, z, n = 2, color = 0x8a7a64) {
  if (!T) return false;
  const { N, x0, z0 } = T;
  const i0 = Math.floor(Math.floor((x - x0) / V) / n) * n, j0 = Math.floor(Math.floor((z0 - z) / V) / n) * n;
  const l0 = Math.floor(Math.floor(y / V) / n) * n;
  if (i0 < 0 || j0 < 0 || i0 + n > N || j0 + n > N) return false;
  for (let i = i0; i < i0 + n; i++) for (let j = j0; j < j0 + n; j++) {
    const k = i * N + j;
    fillLevels(k, l0, l0 + n);
    for (let l = l0; l < l0 + n; l++) T.paint.set(k * 65536 + l + 1 + 32768, color); // block l occupies l..l+1: its top is l+1
    if (T.water) T.water.wet[k] = T.water.wet[k] && T.lv[k] * V < T.water.level ? 1 : 0;
    markDirty(i, j);
  }
  const pa = Math.max(0, Math.floor((i0 - 1) / PC)), pb = Math.min(T.pnc - 1, Math.floor((i0 + n) / PC));
  const qa = Math.max(0, Math.floor((j0 - 1) / PC)), qb = Math.min(T.pnc - 1, Math.floor((j0 + n) / PC));
  for (let ci = pa; ci <= pb; ci++) for (let cj = qa; cj <= qb; cj++) if (T.pchunks[ci * T.pnc + cj]) buildPhysics(ci, cj);
  return true;
}
// centre of the cube placeCube would fill
export function cubeCenter(x, y, z, n = 2) {
  if (!T) return null;
  const i0 = Math.floor(Math.floor((x - T.x0) / V) / n) * n, j0 = Math.floor(Math.floor((T.z0 - z) / V) / n) * n, l0 = Math.floor(Math.floor(y / V) / n) * n;
  return new THREE.Vector3(T.x0 + (i0 + n / 2) * V, (l0 + n / 2) * V, T.z0 - (j0 + n / 2) * V);
}
function markDirty(i, j) {
  const ci = Math.floor(i / CH), cj = Math.floor(j / CH);
  T.dirty.add(ci * T.nc + cj);
  // a wall on the chunk border belongs to the neighbour too
  const ii = i % CH, jj = j % CH;
  if (ii === 0 && ci > 0) T.dirty.add((ci - 1) * T.nc + cj);
  if (ii === CH - 1 && ci + 1 < T.nc) T.dirty.add((ci + 1) * T.nc + cj);
  if (jj === 0 && cj > 0) T.dirty.add(ci * T.nc + cj - 1);
  if (jj === CH - 1 && cj + 1 < T.nc) T.dirty.add(ci * T.nc + cj + 1);
}

// ------------------------------------------------------------- flying cubes (instanced, cheap)
const MAXC = 700;
let cubes = null, cubeList = [], cubeIdx = 0;
const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Euler();
function ensureCubes() {
  if (cubes) return;
  const geo = new THREE.BoxGeometry(1, 1, 1);
  cubes = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ roughness: 0.9 }), MAXC);
  cubes.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  cubes.castShadow = true; cubes.receiveShadow = true;
  cubes.frustumCulled = false;
  for (let i = 0; i < MAXC; i++) { cubes.setMatrixAt(i, _m4.makeScale(0, 0, 0)); cubes.setColorAt(i, _c.setHex(0x6b4f35)); }
  cubes.count = MAXC;
  G.scene.add(cubes);
  cubeList = new Array(MAXC).fill(null);
}
// throw n block-cubes from pos, colours picked from `colors`
const farFx = (p) => G.camera && (p.x - G.camera.position.x) ** 2 + (p.z - G.camera.position.z) ** 2 > 270 * 270;
export function cubeBurst(pos, n, colors, speed = 9, size = V * 0.9) {
  if (farFx(pos)) return;
  ensureCubes();
  for (let q = 0; q < n; q++) {
    const i = cubeIdx = (cubeIdx + 1) % MAXC;
    const a = Math.random() * Math.PI * 2, up = 0.45 + Math.random() * 0.8, sp = speed * (0.35 + Math.random() * 0.75);
    const c = {
      p: new THREE.Vector3(pos.x + (Math.random() - 0.5) * 1.2, pos.y + 0.3 + Math.random() * 0.6, pos.z + (Math.random() - 0.5) * 1.2),
      v: new THREE.Vector3(Math.cos(a) * sp * (1 - up * 0.5), sp * up + 2, Math.sin(a) * sp * (1 - up * 0.5)),
      r: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6),
      w: new THREE.Vector3((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14),
      s: size * (0.55 + Math.random() * 0.6), life: 0, max: 3.5 + Math.random() * 3, rest: false,
    };
    cubeList[i] = c;
    cubes.setColorAt(i, _c.setHex(colors[(Math.random() * colors.length) | 0] ?? 0x6b4f35));
  }
  if (cubes.instanceColor) cubes.instanceColor.needsUpdate = true;
}
// one cube with its own start position / velocity (blocks falling off a building...)
export function spawnCube(pos, vel, color, size = V * 0.9, life = 4) {
  if (farFx(pos)) return;
  ensureCubes();
  const i = cubeIdx = (cubeIdx + 1) % MAXC;
  cubeList[i] = {
    p: pos.clone(), v: vel.clone(),
    r: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6),
    w: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8),
    s: size, life: 0, max: life + Math.random() * 2, rest: false,
  };
  cubes.setColorAt(i, _c.setHex(color));
  if (cubes.instanceColor) cubes.instanceColor.needsUpdate = true;
}
export function updateCubes(dt) {
  if (!cubes) return;
  let any = false;
  for (let i = 0; i < MAXC; i++) {
    const c = cubeList[i];
    if (!c) continue;
    any = true;
    c.life += dt;
    if (c.life >= c.max) { cubeList[i] = null; cubes.setMatrixAt(i, _m4.makeScale(0, 0, 0)); continue; }
    if (G.cubeSinks && G.cubeSinks.length) {
      // pulled into a black hole: no resting, and it's gone when it gets there
      let eaten = false;
      for (const s of G.cubeSinks) {
        const dx = s.pos.x - c.p.x, dy = s.pos.y - c.p.y, dz = s.pos.z - c.p.z, d = Math.hypot(dx, dy, dz);
        if (d > s.r) continue;
        if (d < s.core) { eaten = true; break; }
        const a = s.pull * (1 - d / s.r) + 8;
        c.v.x += dx / d * a * dt - dz / d * a * 0.4 * dt; c.v.y += dy / d * a * dt + 22 * dt * 0.8; c.v.z += dz / d * a * dt + dx / d * a * 0.4 * dt;
        c.rest = false;
      }
      if (eaten) { cubeList[i] = null; cubes.setMatrixAt(i, _m4.makeScale(0, 0, 0)); continue; }
    }
    if (!c.rest) {
      c.v.y -= 22 * dt;
      c.p.addScaledVector(c.v, dt);
      c.r.addScaledVector(c.w, dt);
      // the floor under it (ground or a building floor), looked up again only when it has moved
      if (c.fx === undefined || Math.abs(c.p.x - c.fx) > 0.3 || Math.abs(c.p.z - c.fz) > 0.3 || c.p.y < c.fy - 0.5) {
        const gy = T ? floorAt(c.p.x, c.p.y + c.s * 0.5, c.p.z) : -1e9;
        const by = G.blockFloor ? G.blockFloor(c.p.x, c.p.y + c.s * 0.5, c.p.z) : -1e9;
        c.fx = c.p.x; c.fz = c.p.z; c.fy = Math.max(gy, by);
      }
      const floor = c.fy + c.s / 2;
      if (c.p.y < floor) {
        c.p.y = floor;
        if (Math.abs(c.v.y) < 2.5) { c.rest = true; c.r.set(0, c.r.y, 0); }
        c.v.y = -c.v.y * 0.25; c.v.x *= 0.5; c.v.z *= 0.5; c.w.multiplyScalar(0.4);
      }
      if (c.p.y < G.waterAt(c.p.x, c.p.z)) c.v.multiplyScalar(0.9); // slows down in water
    }
    const k = c.life > c.max - 0.6 ? Math.max(0.01, (c.max - c.life) / 0.6) : 1;
    _q.setFromEuler(_e.set(c.r.x, c.r.y, c.r.z));
    _s.setScalar(c.s * k);
    cubes.setMatrixAt(i, _m4.compose(_p.copy(c.p), _q, _s));
  }
  if (any) cubes.instanceMatrix.needsUpdate = true;
}
export function clearCubes() {
  if (!cubes) return;
  for (let i = 0; i < MAXC; i++) { cubeList[i] = null; cubes.setMatrixAt(i, _m4.makeScale(0, 0, 0)); }
  cubes.instanceMatrix.needsUpdate = true;
}

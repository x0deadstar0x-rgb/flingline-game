// Voxel-style ground ("semi-voxel"): the ground is made of 0.5 m columns of blocks.
// Explosions carve ragged, stepped craters (like TNT in block games, but with smaller blocks),
// showing grass, then dirt, then stone underneath, and throw out real little cubes.
// Rendering: chunked meshes with greedy-merged tops + side walls. Physics: a heightfield whose
// points sit at the column centres and follow every carved column.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, clamp } from './core.js';

export const V = 0.5;   // block size (m)
const CH = 32;          // chunk size in columns (16 m)

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
  // physics
  const data = [];
  let minH = 1e9, maxH = -1e9;
  for (let i = 0; i < N; i++) {
    const col = new Array(N);
    for (let j = 0; j < N; j++) { const h = lv[i * N + j] * V; col[j] = h; if (h < minH) minH = h; if (h > maxH) maxH = h; }
    data.push(col);
  }
  const shape = new CANNON.Heightfield(data, { elementSize: V, minValue: Math.min(minH, bed * V) - 1, maxValue: maxH + 0.5 });
  const body = new CANNON.Body({ mass: 0, material: G.mats.ground, collisionFilterGroup: GROUP.STATIC });
  body.addShape(shape);
  body.position.set(x0 + V / 2, 0, z0 - V / 2);
  body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  body.isTerrain = true;
  G.world.addBody(body); bodies.push(body);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, flatShading: true });
  const nc = Math.ceil(N / CH);
  T = {
    W, N, x0, z0, lv, orig, topc, burn, bed, shape, body, mat, nc, group,
    chunks: new Array(nc * nc).fill(null), dirty: new Set(),
    soil: opts.soil ?? 0x6b4f35, rock: opts.rock ?? 0x7d7f86, soilDepth: opts.soilDepth ?? 6,
    under: opts.under || null,
  };
  for (let ci = 0; ci < nc; ci++) for (let cj = 0; cj < nc; cj++) buildChunk(ci, cj);
  G.groundAt = terrainHeight;
  G.terrain = T;
  return T;
}

export function clearTerrain() { T = null; G.terrain = null; }

// height of the ground (top of the block column) at x, z
export function terrainHeight(x, z) {
  if (!T) return -1e9;
  const i = Math.floor((x - T.x0) / V), j = Math.floor((T.z0 - z) / V);
  if (i < 0 || j < 0 || i >= T.N || j >= T.N) return -1e9;
  return T.lv[i * T.N + j] * V;
}
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
  // the top block of a carved column shows what's at that depth (dirt / stone)
  if (T.lv[k] < T.orig[k]) c = blockColor(k, T.lv[k]);
  // gentle patchy variation (per 2 m patch so flat areas still merge into big quads)
  const n = hash(i >> 2, j >> 2);
  c = shade(c, 0.94 + n * 0.1);
  const bn = T.burn[k];
  if (bn) { _c.setHex(c); _c2.setHex(bn === 2 ? CRATER : SCORCH); _c.lerp(_c2, bn === 2 ? 0.55 : 0.4); c = _c.getHex(); }
  return c;
}
// side wall of column k from level lo (exclusive bottom) up to hi, facing (nx, nz)
function sideWall(k, lo, hi, x1, z1, x2, z2, nx, nz) {
  // split into runs of the same layer colour
  let l = hi;
  while (l > lo) {
    const c0 = blockColor(k, l); // colour of the block (l-1 .. l)
    let m = l - 1;
    while (m > lo && blockColor(k, m) === c0) m--;
    const yTop = l * V, yBot = m * V;
    const cc = shade(c0, nx !== 0 ? 0.86 : 0.78); // side faces a bit darker for the blocky look
    // a-b-c-d counter-clockwise seen from outside
    quad(x1, yBot, z1, x2, yBot, z2, x2, yTop, z2, x1, yTop, z1, nx, 0, nz, cc);
    l = m;
  }
}
// colour of the block whose top is at level l (occupies l-1 .. l)
function blockColor(k, l) {
  const d = T.orig[k] - l; // 0 = original top block
  if (T.under) return T.under(d, T.topc[k]);
  if (d <= 0) return T.topc[k];
  if (d <= T.soilDepth) return T.soil;
  return T.rock;
}

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
  // ---- sides: walls where a neighbour column is lower (or the map edge).
  // Neighbouring walls with the same heights and colours are merged into one long quad.
  const edge = T.bed - 1;
  const { orig, topc } = T;
  const nlv = (i, j) => (i < 0 || j < 0 || i >= N || j >= N ? edge : lv[i * N + j]);
  const same = (k1, k2) => lv[k1] === lv[k2] && orig[k1] === orig[k2] && topc[k1] === topc[k2];
  // walls facing +x / -x: runs along j
  for (const sx of [1, -1]) {
    for (let i = i0; i < i1; i++) {
      let start = -1, sk = 0, snl = 0;
      const xw = x0 + (sx > 0 ? i + 1 : i) * V;
      for (let j = j0; j <= j1; j++) {
        let ok = false, k = 0, nl = 0;
        if (j < j1) { k = i * N + j; nl = nlv(i + sx, j); ok = nl < lv[k]; }
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
        if (i < i1) { k = i * N + j; nl = nlv(i, j - sz); ok = nl < lv[k]; }
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

// rebuild chunks that changed (a few per frame so chain explosions don't stall)
export function updateTerrain() {
  if (!T || !T.dirty.size) return;
  let n = 0;
  for (const idx of T.dirty) {
    T.dirty.delete(idx);
    buildChunk(Math.floor(idx / T.nc), idx % T.nc);
    if (++n >= 6) break;
  }
}

// ------------------------------------------------------------- carving
// Carve a crater around pos (sphere of radius R, ragged edge). Returns the removed blocks'
// colours (a sample) and count, or null if the blast was in the air.
export function carveTerrain(pos, R, opts = {}) {
  if (!T) return null;
  const g = terrainHeight(pos.x, pos.z);
  if (g < -1e8 || pos.y - g > R * 0.75) return null;
  const { N, lv, x0, z0, burn } = T;
  const cy = Math.min(pos.y, g + R * 0.35) - (opts.sink ?? 0.15);
  const ia = Math.max(0, Math.floor((pos.x - R * 1.3 - x0) / V)), ib = Math.min(N - 1, Math.ceil((pos.x + R * 1.3 - x0) / V));
  const ja = Math.max(0, Math.floor((z0 - pos.z - R * 1.3) / V)), jb = Math.min(N - 1, Math.ceil((z0 - pos.z + R * 1.3) / V));
  let removed = 0;
  const sample = [];
  let minL = Infinity;
  for (let i = ia; i <= ib; i++) for (let j = ja; j <= jb; j++) {
    const k = i * N + j;
    const x = x0 + (i + 0.5) * V, z = z0 - (j + 0.5) * V;
    const d = Math.hypot(x - pos.x, z - pos.z);
    const Rc = R * (0.82 + 0.3 * hash(i * 7 + 3, j * 13 + 5)); // ragged blocky edge
    if (d > Rc * 1.25) continue;
    if (d > Rc) { if (!burn[k]) { burn[k] = 1; markDirty(i, j); } continue; }
    const bottom = cy - Math.sqrt(Math.max(0, Rc * Rc - d * d)) * (opts.flat ?? 0.85);
    const nl = Math.max(T.bed, Math.floor(bottom / V));
    const l = lv[k];
    burn[k] = d < Rc * 0.75 ? 2 : Math.max(burn[k], 1);
    if (nl < l) {
      removed += l - nl;
      if (sample.length < 80) for (let q = l; q > nl && sample.length < 80; q--) sample.push(blockColor(k, q));
      lv[k] = nl;
      if (nl < minL) minL = nl;
      T.shape.setHeightValueAtIndex(i, j, nl * V);
    }
    markDirty(i, j);
  }
  if (minL < Infinity) {
    T.shape.minValue = Math.min(T.shape.minValue, minL * V - 0.5);
    T.shape.updateBoundingSphereRadius();
    T.body.aabbNeedsUpdate = true;
  }
  return { removed, sample, ground: g };
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
export function cubeBurst(pos, n, colors, speed = 9, size = V * 0.9) {
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
export function updateCubes(dt) {
  if (!cubes) return;
  let any = false;
  for (let i = 0; i < MAXC; i++) {
    const c = cubeList[i];
    if (!c) continue;
    any = true;
    c.life += dt;
    if (c.life >= c.max) { cubeList[i] = null; cubes.setMatrixAt(i, _m4.makeScale(0, 0, 0)); continue; }
    if (!c.rest) {
      c.v.y -= 22 * dt;
      c.p.addScaledVector(c.v, dt);
      c.r.addScaledVector(c.w, dt);
      const gy = G.groundAt ? G.groundAt(c.p.x, c.p.z) : -1e9;
      const floor = gy + c.s / 2;
      if (c.p.y < floor) {
        c.p.y = floor;
        if (Math.abs(c.v.y) < 2.5) { c.rest = true; c.r.set(0, c.r.y, 0); }
        c.v.y = -c.v.y * 0.25; c.v.x *= 0.5; c.v.z *= 0.5; c.w.multiplyScalar(0.4);
      }
      if (G.waterY > -100 && c.p.y < G.waterY) c.v.multiplyScalar(0.9); // slows down in water
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

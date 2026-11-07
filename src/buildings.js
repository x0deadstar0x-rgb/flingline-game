// Buildings made of half-metre blocks: big, hollow, with floors, stairs, windows and a roof, and
// every block can be destroyed. Blasts and bullets knock blocks out (glass shatters from further
// away than concrete). Anything no longer connected to the ground breaks off as a falling piece
// that smashes into smaller pieces when it lands, and dents whatever it lands on.
//
// Drawing and physics work in horizontal bands (8 m tall): a band is one mesh (faces merged
// where blocks of the same colour line up) and one static body made of merged boxes. Only the
// bands that changed get rebuilt.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, rand, clamp, afterStep, drawPos, drawQuat, addShapesFast } from './core.js';
import { cubeBurst, spawnCube, addColumnBlocks } from './terrain.js';
import { sfx } from './audio.js';
import * as FX from './fx.js';

export const BV = 0.5;         // block size (m)
const BAND = 16;               // blocks per band (8 m)
const CELL = 8;                // lookup grid cell (m)
const MAX_PIECES = 36;         // falling / fallen pieces alive at once

// ---------------------------------------------------------------- palette
// every block is a palette index. reach: how far a blast breaks it (glass 1.8x, steel 0.7x)
export const PAL = [null];
const palKey = new Map();
const IS_GLASS = new Uint8Array(256); // glass has weight but holds nothing up
export function pal(hex, reach = 1, mat = 'concrete') {
  const key = hex + '|' + reach + '|' + mat;
  let i = palKey.get(key);
  if (i !== undefined) return i;
  i = PAL.length;
  if (i > 254) return 1;
  const c = new THREE.Color(hex);
  PAL.push({ hex, reach, mat, r: c.r, g: c.g, b: c.b, dark: 0 });
  IS_GLASS[i] = mat === 'glass' ? 1 : 0;
  palKey.set(key, i);
  return i;
}
pal(0x9a9a94); // 1: plain concrete
// the scorched version of a block
function darkOf(i) {
  const p = PAL[i];
  if (p.dark) return p.dark;
  if (p.mat === 'glass') { p.dark = i; return i; }
  const c = new THREE.Color(p.hex);
  c.r *= 0.42; c.g *= 0.4; c.b *= 0.38;
  const d = pal(c.getHex(), p.reach, p.mat);
  p.dark = d; PAL[d].dark = d;
  return d;
}

const hash3 = (i, j, k) => { let h = Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(k, 1440662683) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };

const BMAT = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, metalness: 0.04 });

// ---------------------------------------------------------------- the buildings
const buildings = [];
let group = null; // where the meshes go (the map's group)

class Building {
  constructor(x0, y0, z0, nx, ny, nz) {
    this.x0 = x0; this.y0 = y0; this.z0 = z0;
    this.nx = nx; this.ny = ny; this.nz = nz;
    this.vox = new Uint8Array(nx * ny * nz);
    this.nb = Math.ceil(ny / BAND);
    this.bands = Array.from({ length: this.nb }, () => ({ mesh: null, body: null, meshDirty: true }));
    this.solid = 0;
    this.checkAt = -1;
    this.stamp = 0;
  }
  inside(i, j, k) { return i >= 0 && j >= 0 && k >= 0 && i < this.nx && j < this.ny && k < this.nz; }
  get(i, j, k) { return this.inside(i, j, k) ? this.vox[(j * this.nz + k) * this.nx + i] : 0; }
  set(i, j, k, v) { if (this.inside(i, j, k)) this.vox[(j * this.nz + k) * this.nx + i] = v; }
  box(i0, j0, k0, i1, j1, k1, v) { // fill [i0,i1) x [j0,j1) x [k0,k1)
    for (let j = Math.max(0, j0); j < Math.min(this.ny, j1); j++) for (let k = Math.max(0, k0); k < Math.min(this.nz, k1); k++) for (let i = Math.max(0, i0); i < Math.min(this.nx, i1); i++) this.vox[(j * this.nz + k) * this.nx + i] = v;
  }
  bandOf(j) { return Math.min(this.nb - 1, Math.max(0, (j / BAND) | 0)); }
  dirtyLayers(j0, j1) { // physics now, drawing soon
    for (let bi = this.bandOf(j0 - 1); bi <= this.bandOf(j1 + 1); bi++) { this.bands[bi].physDirty = true; this.bands[bi].meshDirty = true; }
  }
}

// ---------------------------------------------------------------- drawing: greedy meshing
let MP = new Float32Array(1 << 15), MN = new Int8Array(1 << 15), MC = new Uint8Array(1 << 15), MI = new Uint32Array(1 << 15);
let nv = 0, ni = 0;
let mask = new Uint8Array(4096);
function grow(v, i) {
  if ((nv + v) * 3 > MP.length) {
    const n = Math.max(MP.length * 2, (nv + v) * 3);
    const a = new Float32Array(n); a.set(MP); MP = a;
    const b = new Int8Array(n); b.set(MN); MN = b;
    const c = new Uint8Array(n); c.set(MC); MC = c;
  }
  if (ni + i > MI.length) { const a = new Uint32Array(Math.max(MI.length * 2, ni + i)); a.set(MI); MI = a; }
}
const SHADE = [[0.9, 0.9], [0.72, 1.0], [0.84, 0.84]]; // [axis][side<0, side>0]
// greedy mesh of the blocks in layers j0..j1-1; (ox, oy, oz) = where block (0,0,0)'s corner goes
function meshGrid(vox, nx, ny, nz, j0, j1, ox, oy, oz) {
  nv = 0; ni = 0;
  const dims = [nx, ny, nz], strides = [1, nz * nx, nx];
  for (let axis = 0; axis < 3; axis++) {
    const u = (axis + 1) % 3, v = (axis + 2) % 3;
    const sa = strides[axis], su = strides[u], sv = strides[v];
    const ua = u === 1 ? j0 : 0, ub = u === 1 ? j1 : dims[u];
    const va = v === 1 ? j0 : 0, vb = v === 1 ? j1 : dims[v];
    const aa = axis === 1 ? j0 : 0, ab = axis === 1 ? j1 : dims[axis];
    const W = ub - ua, H = vb - va;
    if (W <= 0 || H <= 0) continue;
    if (mask.length < W * H) mask = new Uint8Array(W * H);
    for (let side = -1; side <= 1; side += 2) {
      const shade = SHADE[axis][side > 0 ? 1 : 0];
      for (let a = aa; a < ab; a++) {
        const nbIn = a + side >= 0 && a + side < dims[axis];
        let any = false;
        for (let vv = 0; vv < H; vv++) {
          const base = a * sa + (vv + va) * sv + ua * su;
          for (let uu = 0; uu < W; uu++) {
            const id = base + uu * su;
            const c = vox[id];
            const m = c && !(nbIn && vox[id + side * sa]) ? c : 0;
            mask[vv * W + uu] = m;
            if (m) any = true;
          }
        }
        if (!any) continue;
        const ap = a + (side > 0 ? 1 : 0);
        for (let vv = 0; vv < H; vv++) {
          for (let uu = 0; uu < W;) {
            const m = mask[vv * W + uu];
            if (!m) { uu++; continue; }
            let w = 1;
            while (uu + w < W && mask[vv * W + uu + w] === m) w++;
            let h = 1;
            grow: while (vv + h < H) {
              for (let q = 0; q < w; q++) if (mask[(vv + h) * W + uu + q] !== m) break grow;
              h++;
            }
            for (let hh = 0; hh < h; hh++) mask.fill(0, (vv + hh) * W + uu, (vv + hh) * W + uu + w);
            emit(axis, u, v, ap, uu + ua, vv + va, w, h, side, m, shade, ox, oy, oz);
            uu += w;
          }
        }
      }
    }
  }
  if (!nv) return null;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(MP.slice(0, nv * 3), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(MN.slice(0, nv * 3), 3, true));
  g.setAttribute('color', new THREE.BufferAttribute(MC.slice(0, nv * 3), 3, true));
  g.setIndex(new THREE.BufferAttribute(nv > 65535 ? MI.slice(0, ni) : Uint16Array.from(MI.subarray(0, ni)), 1));
  g.computeBoundingSphere();
  return g;
}
const _pc = [0, 0, 0];
function emit(axis, u, v, ap, u0, v0, w, h, side, m, shade, ox, oy, oz) {
  grow(4, 6);
  const p = PAL[m] || PAL[1];
  const r = Math.min(255, Math.round(p.r * shade * 255)), g = Math.min(255, Math.round(p.g * shade * 255)), b = Math.min(255, Math.round(p.b * shade * 255));
  const corners = side > 0 ? [[u0, v0], [u0 + w, v0], [u0 + w, v0 + h], [u0, v0 + h]] : [[u0, v0], [u0, v0 + h], [u0 + w, v0 + h], [u0 + w, v0]];
  const o = nv;
  for (const [cu, cv] of corners) {
    _pc[axis] = ap; _pc[u] = cu; _pc[v] = cv;
    const q = nv * 3;
    MP[q] = ox + _pc[0] * BV; MP[q + 1] = oy + _pc[1] * BV; MP[q + 2] = oz + _pc[2] * BV;
    MN[q] = axis === 0 ? side * 127 : 0; MN[q + 1] = axis === 1 ? side * 127 : 0; MN[q + 2] = axis === 2 ? side * 127 : 0;
    MC[q] = r; MC[q + 1] = g; MC[q + 2] = b;
    nv++;
  }
  MI[ni++] = o; MI[ni++] = o + 1; MI[ni++] = o + 2; MI[ni++] = o; MI[ni++] = o + 2; MI[ni++] = o + 3;
}

// ---------------------------------------------------------------- physics: merged boxes
let used = new Uint8Array(4096);
// boxes [i0,j0,k0,i1,j1,k1] covering the solid blocks in layers j0..j1-1
function gridBoxes(vox, nx, nz, j0, j1, maxBoxes = Infinity) {
  const lay = nx * nz, n = (j1 - j0) * lay, off = j0 * lay;
  if (used.length < n) used = new Uint8Array(n);
  used.fill(0, 0, n);
  const out = [];
  for (let j = j0; j < j1; j++) for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) {
    const id = (j * nz + k) * nx + i;
    if (!vox[id] || used[id - off]) continue;
    let i1 = i + 1;
    while (i1 < nx && vox[id + i1 - i] && !used[id + i1 - i - off]) i1++;
    let k1 = k + 1;
    gz: while (k1 < nz) {
      for (let ii = i; ii < i1; ii++) { const q = (j * nz + k1) * nx + ii; if (!vox[q] || used[q - off]) break gz; }
      k1++;
    }
    let jj = j + 1;
    gy: while (jj < j1) {
      for (let kk = k; kk < k1; kk++) for (let ii = i; ii < i1; ii++) { const q = (jj * nz + kk) * nx + ii; if (!vox[q] || used[q - off]) break gy; }
      jj++;
    }
    for (let a = j; a < jj; a++) for (let c = k; c < k1; c++) used.fill(1, (a * nz + c) * nx + i - off, (a * nz + c) * nx + i1 - off);
    out.push([i, j, k, i1, jj, k1]);
    if (out.length > maxBoxes) return null;
  }
  return out;
}

// things asleep inside this box wake up (what rested on a shape that changed must notice)
function wakeIn(aabb) {
  for (const o of G.world.bodies) {
    if (o.type !== CANNON.Body.DYNAMIC || o.sleepState !== CANNON.Body.SLEEPING) continue;
    if (o.aabbNeedsUpdate) o.updateAABB();
    if (o.aabb.overlaps(aabb)) o.wakeUp();
  }
}
// is there a block of building b at or right next to world point (x, y, z)?
function solidNear(b, x, y, z) {
  const i = Math.floor((x - b.x0) / BV), j = Math.floor((y - b.y0) / BV), k = Math.floor((z - b.z0) / BV);
  for (let dj = -1; dj <= 1; dj++) for (let dk = -1; dk <= 1; dk++) for (let di = -1; di <= 1; di++) if (b.get(i + di, j + dj, k + dk)) return true;
  return false;
}
// ropes and welds tied to a body that's being replaced: moved to the new one if the blocks they
// hold on to are still there, otherwise they come off
function moveTies(old, body, b) {
  const _w = new CANNON.Vec3();
  if (G.ropes) for (let i = G.ropes.length - 1; i >= 0; i--) {
    const r = G.ropes[i];
    for (const end of ['a', 'b']) {
      if (r[end] !== old) continue;
      const l = end === 'a' ? r.la : r.lb;
      old.pointToWorldFrame(l, _w);
      if (body && b && solidNear(b, _w.x, _w.y, _w.z)) r[end] = body; else if (G.removeRope) { G.removeRope(r); break; }
    }
  }
  if (G.welds) for (let i = G.welds.length - 1; i >= 0; i--) {
    const w = G.welds[i];
    if (w.bodyA !== old && w.bodyB !== old) continue;
    G.world.removeConstraint(w); G.welds.splice(i, 1);
    const other = w.bodyA === old ? w.bodyB : w.bodyA;
    if (body && b && solidNear(b, other.position.x, other.position.y, other.position.z)) {
      const c = new CANNON.LockConstraint(other, body, { maxForce: 1e5 });
      c.collideConnected = false;
      G.world.addConstraint(c); G.welds.push(c);
    } else other.wakeUp();
  }
}
const _oldBox = new CANNON.AABB();
function rebuildPhysics(b, bi) {
  const band = b.bands[bi];
  band.physDirty = false;
  const old = band.body;
  if (old) { _oldBox.copy(old.aabb); G.world.removeBody(old); band.body = null; }
  const j0 = bi * BAND, j1 = Math.min(b.ny, j0 + BAND);
  const boxes = gridBoxes(b.vox, b.nx, b.nz, j0, j1);
  if (!boxes.length) { if (old) { moveTies(old, null, null); wakeIn(_oldBox); } return; }
  const body = new CANNON.Body({ mass: 0, material: G.mats.ground, collisionFilterGroup: GROUP.STATIC });
  const shapes = [], offs = [];
  for (const [i0, ja, k0, i1, jb, k1] of boxes) {
    const hx = (i1 - i0) * BV / 2, hy = (jb - ja) * BV / 2, hz = (k1 - k0) * BV / 2;
    shapes.push(new CANNON.Box(new CANNON.Vec3(hx, hy, hz))); offs.push(new CANNON.Vec3(i0 * BV + hx, ja * BV + hy, k0 * BV + hz));
  }
  addShapesFast(body, shapes, offs);
  body.position.set(b.x0, b.y0, b.z0);
  body.isBuilding = true; body.isGridStatic = true; body.building = b;
  G.world.addBody(body);
  body.updateAABB();
  band.body = body;
  if (old) { moveTies(old, body, b); wakeIn(_oldBox); }
  wakeIn(body.aabb);
}
function rebuildMesh(b, bi) {
  const band = b.bands[bi];
  band.meshDirty = false;
  const j0 = bi * BAND, j1 = Math.min(b.ny, j0 + BAND);
  const geo = meshGrid(b.vox, b.nx, b.ny, b.nz, j0, j1, b.x0, b.y0, b.z0);
  if (band.mesh) { band.mesh.geometry.dispose(); if (!geo) { band.mesh.removeFromParent(); band.mesh = null; } else band.mesh.geometry = geo; }
  else if (geo) {
    const m = new THREE.Mesh(geo, BMAT);
    m.castShadow = true; m.receiveShadow = true;
    m.matrixAutoUpdate = false; m.updateMatrix();
    (group || G.scene).add(m);
    band.mesh = m;
  }
}

// ---------------------------------------------------------------- lookups
const grid = new Map();
const cellKey = (cx, cz) => (cx + 2048) * 4096 + (cz + 2048);
function register(b) {
  const xa = Math.floor(b.x0 / CELL), xb = Math.floor((b.x0 + b.nx * BV) / CELL);
  const za = Math.floor(b.z0 / CELL), zb = Math.floor((b.z0 + b.nz * BV) / CELL);
  for (let cx = xa; cx <= xb; cx++) for (let cz = za; cz <= zb; cz++) {
    const k = cellKey(cx, cz);
    if (!grid.has(k)) grid.set(k, []);
    grid.get(k).push(b);
  }
}
let stamp = 1;
function eachNear(x0, z0, x1, z1, fn) {
  stamp++;
  const xa = Math.floor(x0 / CELL), xb = Math.floor(x1 / CELL), za = Math.floor(z0 / CELL), zb = Math.floor(z1 / CELL);
  for (let cx = xa; cx <= xb; cx++) for (let cz = za; cz <= zb; cz++) {
    const list = grid.get(cellKey(cx, cz));
    if (!list) continue;
    for (const b of list) { if (b.stamp === stamp) continue; b.stamp = stamp; fn(b); }
  }
}
// the physics engine asks: which building bands overlap this box?
G.staticQuery = (aabb, cb) => {
  if (!buildings.length) return;
  const lo = aabb.lowerBound, hi = aabb.upperBound;
  eachNear(lo.x, lo.z, hi.x, hi.z, (b) => {
    if (hi.y < b.y0 || lo.y > b.y0 + b.ny * BV || hi.x < b.x0 || lo.x > b.x0 + b.nx * BV || hi.z < b.z0 || lo.z > b.z0 + b.nz * BV) return;
    const ja = b.bandOf(Math.floor((lo.y - b.y0) / BV)), jb = b.bandOf(Math.floor((hi.y - b.y0) / BV));
    for (let bi = ja; bi <= jb; bi++) {
      const body = b.bands[bi].body;
      if (!body) continue;
      if (body.aabbNeedsUpdate) body.updateAABB();
      if (body.aabb.overlaps(aabb)) cb(body);
    }
  });
};
// top of the highest block at or below y at (x, z) (for falling cubes), or -1e9
G.blockFloor = (x, y, z) => {
  if (!buildings.length) return -1e9;
  let best = -1e9;
  eachNear(x, z, x, z, (b) => {
    const i = Math.floor((x - b.x0) / BV), k = Math.floor((z - b.z0) / BV);
    if (i < 0 || k < 0 || i >= b.nx || k >= b.nz) return;
    for (let j = Math.min(b.ny - 1, Math.floor((y - b.y0) / BV)); j >= 0; j--) {
      if (b.vox[(j * b.nz + k) * b.nx + i]) { best = Math.max(best, b.y0 + (j + 1) * BV); return; }
    }
  });
  return best;
};

// ---------------------------------------------------------------- breaking blocks
// knock out blocks in a sphere. Returns how many were removed.
// opts: scorch (darken blocks around the hole), quiet (no sound), debris (cubes thrown, default yes)
function carve(b, x, y, z, R, opts = {}) {
  const reach = R * 1.8 + BV;
  const i0 = Math.max(0, Math.floor((x - reach - b.x0) / BV)), i1 = Math.min(b.nx - 1, Math.floor((x + reach - b.x0) / BV));
  const j0 = Math.max(0, Math.floor((y - reach - b.y0) / BV)), j1 = Math.min(b.ny - 1, Math.floor((y + reach - b.y0) / BV));
  const k0 = Math.max(0, Math.floor((z - reach - b.z0) / BV)), k1 = Math.min(b.nz - 1, Math.floor((z + reach - b.z0) / BV));
  if (i0 > i1 || j0 > j1 || k0 > k1) return null;
  const scorch = opts.scorch ?? R > 1.4;
  let n = 0, glass = 0, jmin = 1e9, jmax = -1;
  const cols = [];
  for (let j = j0; j <= j1; j++) {
    const cy = b.y0 + (j + 0.5) * BV - y;
    for (let k = k0; k <= k1; k++) {
      const cz = b.z0 + (k + 0.5) * BV - z;
      let id = (j * b.nz + k) * b.nx + i0;
      for (let i = i0; i <= i1; i++, id++) {
        const c = b.vox[id];
        if (!c) continue;
        const cx = b.x0 + (i + 0.5) * BV - x;
        const d = Math.sqrt(cx * cx + cy * cy + cz * cz);
        const p = PAL[c];
        const rr = R * p.reach * (0.8 + 0.34 * hash3(i, j, k));
        if (d < rr) {
          b.vox[id] = 0; n++;
          if (p.mat === 'glass') glass++;
          else if (cols.length < 40) cols.push(p.hex);
          if (j < jmin) jmin = j; if (j > jmax) jmax = j;
        } else if (scorch && d < rr * 1.22 && p.mat !== 'glass') {
          const dk = darkOf(c);
          if (dk !== c) { b.vox[id] = dk; if (j < jmin) jmin = j; if (j > jmax) jmax = j; }
        }
      }
    }
  }
  if (jmax < 0) return null;
  b.solid -= n;
  b.dirtyLayers(jmin, jmax);
  for (let bi = 0; bi < b.nb; bi++) if (b.bands[bi].physDirty) rebuildPhysics(b, bi);
  if (n) {
    // check what's still standing a moment later (lets several blasts land first)
    if (b.checkAt < 0) b.checkAt = G.time + 0.12;
    const at = new THREE.Vector3(x, y, z);
    if (opts.debris !== false) {
      if (cols.length) cubeBurst(at, Math.min(70, Math.round((n - glass) * 0.45) + 3), cols, 4 + R * 2.4);
      if (glass) cubeBurst(at, Math.min(30, Math.round(glass * 0.4) + 2), [0x9fd3f5, 0xc9ebff, 0x7fb6d9], 5 + R * 2.6, BV * 0.5);
    }
    if (!opts.quiet) {
      if (n - glass > 3) sfx.crumble(at);
      if (glass) sfx.shatter(at);
    }
  }
  return { n, glass };
}

// a blast at pos: every building nearby loses blocks (and loose pieces get smashed)
export function blastBuildings(pos, R, opts = {}) {
  let total = 0;
  const reach = R * 1.8 + 1;
  eachNear(pos.x - reach, pos.z - reach, pos.x + reach, pos.z + reach, (b) => {
    if (b.solid <= 0 || pos.y + reach < b.y0 || pos.y - reach > b.y0 + b.ny * BV) return;
    const r = carve(b, pos.x, pos.y, pos.z, R, opts);
    if (r) total += r.n;
  });
  for (const p of [...pieces]) {
    if (p.dead || p.body.position.distanceTo(pos) > R * 1.4 + p.radius) continue;
    shatterPiece(p, 12, pos);
  }
  return total;
}
G.blastBuildings = blastBuildings;

// a bullet hit: knock out a block or two where it hit (weak bullets only break glass, mostly)
export function chipBuilding(hit, dmg) {
  const b = hit.body.building;
  if (!b) return;
  const x = hit.point.x - hit.normal.x * BV * 0.4, y = hit.point.y - hit.normal.y * BV * 0.4, z = hit.point.z - hit.normal.z * BV * 0.4;
  const i = Math.floor((x - b.x0) / BV), j = Math.floor((y - b.y0) / BV), k = Math.floor((z - b.z0) / BV);
  const c = b.get(i, j, k);
  if (!c) return;
  const glass = PAL[c].mat === 'glass';
  if (!glass && Math.random() > dmg / 30) { FX.debris(hit.point, PAL[c].hex, 3, 0.07, 3); return; }
  const R = dmg >= 90 ? 0.95 : dmg >= 40 ? 0.6 : 0.3;
  carve(b, x, y, z, R, { scorch: false, debris: false, quiet: !glass });
  FX.debris(hit.point, glass ? 0xbfe6ff : PAL[c].hex, glass ? 8 : 5, glass ? 0.06 : 0.1, 4);
  if (glass) sfx.shatter(hit.point);
}
G.chipBuilding = chipBuilding;

// ---------------------------------------------------------------- what's still standing?
let mark = new Uint8Array(1), queue = new Int32Array(1);
// Per layer: how many blocks (weight) and how many solid, non-glass blocks stand on a block below
// (support). A building remembers these from when it was built.
function layerLoads(b) {
  const { vox, ny } = b, lay = b.nx * b.nz;
  const W = new Float64Array(ny + 1), S = new Float64Array(ny), SX = new Float64Array(ny), SZ = new Float64Array(ny);
  const { nx, nz } = b;
  for (let j = 0; j < ny; j++) {
    let w = 0, s = 0, sx = 0, sz = 0;
    let id = j * lay;
    for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++, id++) {
      const c = vox[id];
      if (!c) continue;
      w++;
      if (j > 0 && !IS_GLASS[c] && vox[id - lay]) { s++; sx += i; sz += k; }
    }
    W[j] = w; S[j] = s; SX[j] = s ? sx / s : nx / 2; SZ[j] = s ? sz / s : nz / 2;
  }
  for (let j = ny - 1; j >= 0; j--) W[j] += W[j + 1]; // weight on and above each layer
  return { W, S, SX, SZ };
}
// the lowest layer that can't hold up what's above it any more (lost >60% of its support), or 0
function weakLayer(b, L) {
  for (let j = 1; j < b.ny; j++) {
    if (L.W[j] < 80) break;
    const r0 = b.ratio0[j];
    if (r0 > 0 && L.S[j] / L.W[j] < r0 * 0.4) return j;
  }
  return 0;
}

function checkIntegrity(b) {
  const t0 = performance.now();
  checkIntegrity2(b);
  G.__lastCheckMs = performance.now() - t0;
}
function checkIntegrity2(b) {
  b.checkAt = -1;
  const { vox, nx, ny, nz } = b;
  const N = vox.length, lay = nx * nz;
  if (mark.length < N) { mark = new Uint8Array(N); queue = new Int32Array(N); }
  mark.fill(0, 0, N);
  // a floor that lost most of its walls and columns gives way: what's left of it is crushed and
  // everything above drops onto the floor below
  const L = layerLoads(b);
  const cut = weakLayer(b, L);
  let tilt = null;
  if (cut) {
    const ox = (L.SX[cut] - nx / 2) / (nx / 2), oz = (L.SZ[cut] - nz / 2) / (nz / 2);
    tilt = new THREE.Vector3(-oz, 0, ox).multiplyScalar(0.18); // it leans a little towards the side that gave way
    crushLayers(b, Math.max(1, cut - 2), Math.min(ny, cut + 4));
  }
  let qh = 0, qt = 0;
  // everything connected to the bottom layer (sitting on the ground) stands
  for (let id = 0; id < lay; id++) if (vox[id]) { mark[id] = 1; queue[qt++] = id; }
  // (the outermost ring of every layer is always empty, so neighbours need no edge checks:
  // stepping off the side lands on an empty block, off the top/bottom outside the array)
  while (qh < qt) {
    const id = queue[qh++];
    let q;
    if (vox[q = id - 1] && !mark[q]) { mark[q] = 1; queue[qt++] = q; }
    if (vox[q = id + 1] && !mark[q]) { mark[q] = 1; queue[qt++] = q; }
    if (vox[q = id - nx] && !mark[q]) { mark[q] = 1; queue[qt++] = q; }
    if (vox[q = id + nx] && !mark[q]) { mark[q] = 1; queue[qt++] = q; }
    if (vox[q = id - lay] && !mark[q]) { mark[q] = 1; queue[qt++] = q; }
    if (vox[q = id + lay] && !mark[q]) { mark[q] = 1; queue[qt++] = q; }
  }
  if (qt >= b.solid) { b.solid = qt; for (let bi = 0; bi < b.nb; bi++) if (b.bands[bi].physDirty) rebuildPhysics(b, bi); return; }
  // the rest is hanging in the air: each connected lump breaks off
  const lumps = [];
  for (let id = 0; id < N; id++) {
    if (!vox[id] || mark[id]) continue;
    let h = qt, t = qt;
    mark[id] = 2; queue[t++] = id;
    while (h < t) {
      const c = queue[h++];
      let q;
      if (vox[q = c - 1] && !mark[q]) { mark[q] = 2; queue[t++] = q; }
      if (vox[q = c + 1] && !mark[q]) { mark[q] = 2; queue[t++] = q; }
      if (vox[q = c - nx] && !mark[q]) { mark[q] = 2; queue[t++] = q; }
      if (vox[q = c + nx] && !mark[q]) { mark[q] = 2; queue[t++] = q; }
      if (vox[q = c - lay] && !mark[q]) { mark[q] = 2; queue[t++] = q; }
      if (vox[q = c + lay] && !mark[q]) { mark[q] = 2; queue[t++] = q; }
    }
    lumps.push(queue.slice(qt, t));
  }
  for (const ids of lumps) breakOff(b, ids, tilt);
  b.solid = qt;
  for (let bi = 0; bi < b.nb; bi++) if (b.bands[bi].physDirty) rebuildPhysics(b, bi);
}

// a storey gives way: its blocks turn to rubble (piled round the building) and dust
function crushLayers(b, ja, jb) {
  const { vox, nx, nz } = b, lay = nx * nz;
  const cols = [], hexes = [];
  let n = 0;
  for (let j = ja; j < jb; j++) for (let q = 0; q < lay; q++) {
    const id = j * lay + q, c = vox[id];
    if (!c) continue;
    vox[id] = 0; n++;
    if (Math.random() < 0.03 && cols.length < 40) cols.push([q % nx, j, (q / nx) | 0, PAL[c].hex]);
    if (hexes.length < 24 && !IS_GLASS[c] && Math.random() < 0.05) hexes.push(PAL[c].hex);
  }
  if (!n) return 0;
  b.solid -= n;
  b.dirtyLayers(ja, jb);
  for (const [i, j, k, hex] of cols) spawnCube(new THREE.Vector3(b.x0 + (i + 0.5) * BV, b.y0 + (j + 0.5) * BV, b.z0 + (k + 0.5) * BV), new THREE.Vector3(rand(-4, 4), rand(0, 3), rand(-4, 4)), hex, BV * 0.9, 3);
  const y = b.y0 + (ja + jb) / 2 * BV;
  const at = new THREE.Vector3(b.x0 + nx * BV / 2, y, b.z0 + nz * BV / 2);
  dustBurst(at, Math.max(nx, nz) * BV * 0.5, 14);
  rubble(at.x, at.z, Math.max(nx, nz) * BV * 0.5 + 6, n * 0.3, hexes, b.y0);
  sfx.crumble(at); sfx.explosion(0.35, at);
  return n;
}
// the floors at the top of what's left of a building give way under something landing on them
function crushTop(b, layers) {
  const lay = b.nx * b.nz;
  let top = -1;
  for (let j = b.ny - 1; j >= 1 && top < 0; j--) for (let q = j * lay, e = q + lay; q < e; q++) if (b.vox[q]) { top = j; break; }
  if (top < 2) return 0;
  const n = crushLayers(b, Math.max(1, top - layers + 1), top + 1);
  if (n && b.checkAt < 0) b.checkAt = G.time + 0.08;
  return n;
}
// a wide, low cloud of dust rolling out from a collapse
function dustBurst(c, r, n) {
  for (let q = 0; q < n; q++) {
    const a = rand(0, Math.PI * 2), s = rand(0.3, 1), sp = rand(3, 10);
    FX.particle({ pos: new THREE.Vector3(c.x + Math.cos(a) * r * s, c.y + rand(-1, 1.5), c.z + Math.sin(a) * r * s), vel: new THREE.Vector3(Math.cos(a) * sp, rand(0.3, 2.5), Math.sin(a) * sp), color: [0xb0a99c, 0x9c958a, 0xc4bdb0][q % 3], size: rand(1.4, 3), life: rand(2.5, 5), gravity: -0.12, drag: 1.1, grow: 1.5, shrink: false, opacity: 0.55, spin: 0.5, floor: false });
  }
}
// Rubble: `blocks` blocks of debris piled up as real ground (you can climb it, dig it, blow it
// up) in a low mound around (cx, cz), keeping clear of buildings still standing there.
function rubble(cx, cz, R, blocks, hexes, groundY) {
  const T = G.terrain;
  blocks = Math.round(blocks);
  if (!T || blocks < 6) return;
  const N = T.N, TV = 0.5;
  const near = [];
  eachNear(cx - R, cz - R, cx + R, cz + R, (b) => near.push(b));
  const busy = (x, z, y0, y1) => {
    for (const b of near) {
      const i = Math.floor((x - b.x0) / BV), k = Math.floor((z - b.z0) / BV);
      if (i < 0 || k < 0 || i >= b.nx || k >= b.nz) continue;
      for (let j = Math.max(0, Math.floor((y0 - b.y0) / BV)); j <= Math.min(b.ny - 1, Math.floor((y1 - b.y0) / BV)); j++) if (b.vox[(j * b.nz + k) * b.nx + i]) return true;
    }
    return false;
  };
  const cols = [];
  let wsum = 0;
  const ia = Math.max(0, Math.floor((cx - R - T.x0) / TV)), ib = Math.min(N - 1, Math.floor((cx + R - T.x0) / TV));
  const ja = Math.max(0, Math.floor((T.z0 - cz - R) / TV)), jb = Math.min(N - 1, Math.floor((T.z0 - cz + R) / TV));
  for (let i = ia; i <= ib; i++) for (let j = ja; j <= jb; j++) {
    const x = T.x0 + (i + 0.5) * TV, z = T.z0 - (j + 0.5) * TV, d = Math.hypot(x - cx, z - cz);
    if (d > R) continue;
    const k = i * N + j, top = T.lv[k] * TV;
    if (groundY !== undefined && top > groundY + 6) continue; // (not up on a roof)
    if (busy(x, z, top - 0.25, top + 3)) continue;
    const w = (1 - (d / R) ** 2) * (0.85 + 0.3 * hash3(i >> 1, j >> 1, 7));
    cols.push([k, w]); wsum += w;
  }
  if (!cols.length) return;
  const per = blocks / wsum, list = [];
  const pal = hexes && hexes.length ? hexes : [0x8a857c, 0x9a9488];
  for (const [k, w] of cols) {
    const L = Math.min(28, Math.round(w * per));
    if (L <= 0) continue;
    const c = pal[(Math.random() * pal.length) | 0];
    list.push([k, T.lv[k], T.lv[k] + L, ((c >> 16 & 255) * 0.82 << 16) | ((c >> 8 & 255) * 0.82 << 8) | ((c & 255) * 0.82 | 0)]);
  }
  addColumnBlocks(list);
}

// a lump of blocks (ids in b) that lost its support: it becomes a falling piece
function breakOff(b, ids, tilt = null) {
  const { nx, nz } = b, lay = nx * nz;
  let i0 = 1e9, j0 = 1e9, k0 = 1e9, i1 = -1, j1 = -1, k1 = -1;
  for (const id of ids) {
    const i = id % nx, k = ((id / nx) | 0) % nz, j = (id / lay) | 0;
    if (i < i0) i0 = i; if (i > i1) i1 = i; if (j < j0) j0 = j; if (j > j1) j1 = j; if (k < k0) k0 = k; if (k > k1) k1 = k;
  }
  const lx = i1 - i0 + 1, ly = j1 - j0 + 1, lz = k1 - k0 + 1;
  const lv = new Uint8Array(lx * ly * lz);
  let sx = 0, sy = 0, sz = 0;
  for (const id of ids) {
    const i = id % nx, k = ((id / nx) | 0) % nz, j = (id / lay) | 0;
    lv[((j - j0) * lz + (k - k0)) * lx + (i - i0)] = b.vox[id];
    b.vox[id] = 0;
    sx += i - i0 + 0.5; sy += j - j0 + 0.5; sz += k - k0 + 0.5;
  }
  const mass = { n: ids.length, com: new THREE.Vector3(sx / ids.length * BV, sy / ids.length * BV, sz / ids.length * BV) };
  b.dirtyLayers(j0, j1);
  const ox = b.x0 + i0 * BV, oy = b.y0 + j0 * BV, oz = b.z0 + k0 * BV;
  const grid = { vox: lv, nx: lx, ny: ly, nz: lz };
  if (ids.length <= 14) { toCubes(grid, new THREE.Vector3(ox, oy, oz).add(mass.com), mass.com, null, new THREE.Vector3(0, -1, 0)); return; }
  // Drawing the piece: bands of the building that came off whole keep their mesh (no
  // re-meshing: a falling tower costs next to nothing); the rest is meshed now.
  const parts = [];
  for (let bi = b.bandOf(j0); bi <= b.bandOf(j1); bi++) {
    const ja = bi * BAND, jb = Math.min(b.ny, ja + BAND);
    const lo = Math.max(ja, j0), hi = Math.min(jb, j1 + 1);
    const band = b.bands[bi];
    if (band.mesh && !band.meshDirty && lo === ja && hi === jb && bandEmpty(b, ja, jb)) {
      const geo = band.mesh.geometry; // in world coordinates: its origin sits at -corner
      band.mesh.removeFromParent(); band.mesh = null; band.meshDirty = false;
      parts.push({ j0: ja - j0, j1: jb - j0, geo, base: new THREE.Vector3(-ox, -oy, -oz) });
    } else {
      const geo = meshGrid(lv, lx, ly, lz, lo - j0, hi - j0, 0, 0, 0);
      if (geo) parts.push({ j0: lo - j0, j1: hi - j0, geo, base: new THREE.Vector3() });
    }
  }
  const p = spawnPiece(grid, new THREE.Vector3(ox, oy, oz), null, new THREE.Vector3(0, -0.5, 0), tilt, null, parts, mass);
  if (p) p.src = b;
  if (p && ids.length > 1500) {
    // a whole section is coming down
    sfx.explosion(0.5, p.body.position);
    sfx.crumble(p.body.position);
    G.shake = Math.max(G.shake, Math.min(1.2, ids.length / 20000));
  }
}

// no blocks left in the building's layers ja..jb-1?
function bandEmpty(b, ja, jb) {
  const lay = b.nx * b.nz;
  for (let id = ja * lay, e = jb * lay; id < e; id++) if (b.vox[id]) return false;
  return true;
}
// ---------------------------------------------------------------- falling pieces
const pieces = [];
const _v = new THREE.Vector3(), _q = new THREE.Quaternion();
// grid: local blocks; corner: world position of block (0,0,0)'s corner (unrotated) OR, with quat,
// the piece is placed at `center` (world) with rotation quat.
// parts: [{ j0, j1, geo }] ready-made geometry (relative to the grid's corner) for layers j0..j1-1
// mass: { n, com } if already known
function spawnPiece(grid, corner, quat, vel, angVel, center = null, parts = null, mass = null) {
  const p = spawnPiece2(grid, corner, quat, vel, angVel, center, parts, mass);
  if (!p && parts) for (const q of parts) q.geo.dispose();
  return p;
}
function spawnPiece2(grid, corner, quat, vel, angVel, center, parts, mass) {
  const { vox, nx, ny, nz } = grid;
  let n = 0, com;
  if (mass) { n = mass.n; com = mass.com; } else {
    let sx = 0, sy = 0, sz = 0;
    for (let j = 0; j < ny; j++) for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) {
      if (!vox[(j * nz + k) * nx + i]) continue;
      n++; sx += i + 0.5; sy += j + 0.5; sz += k + 0.5;
    }
    if (!n) return null;
    com = new THREE.Vector3(sx / n * BV, sy / n * BV, sz / n * BV); // centre of mass, from the grid corner
  }
  const worldCenter = center ? center.clone() : corner.clone().add(com);
  if (n <= 14) { toCubes(grid, worldCenter, com, quat, vel); return null; }
  if (pieces.length >= MAX_PIECES) retireOldest();
  if (pieces.length >= MAX_PIECES) { toCubes(grid, worldCenter, com, quat, vel); return null; }
  if (!parts) { const geo = meshGrid(vox, nx, ny, nz, 0, ny, 0, 0, 0); if (!geo) return null; parts = [{ j0: 0, j1: ny, geo, base: new THREE.Vector3() }]; }
  const mesh = new THREE.Group();
  for (const part of parts) {
    const m = new THREE.Mesh(part.geo, BMAT);
    m.position.set(part.base.x - com.x, part.base.y - com.y, part.base.z - com.z);
    m.castShadow = true; m.receiveShadow = true;
    mesh.add(m);
  }
  (group || G.scene).add(mesh);
  // (not too heavy: huge mass differences make the physics shaky)
  const body = new CANNON.Body({ mass: clamp(n * 0.6, 20, 700), material: G.mats.ground, collisionFilterGroup: GROUP.DYN, linearDamping: 0.12, angularDamping: 0.45, allowSleep: true, sleepSpeedLimit: 0.8, sleepTimeLimit: 0.6 });
  // physics shape: exact merged boxes for small pieces, a few slabs for big ones. Boxes are a
  // hair smaller than the blocks so pieces that were next to each other don't start overlapping.
  const boxes = (n < 600 ? gridBoxes(vox, nx, nz, 0, ny, 18) : null) || slabs(grid);
  const IN = 0.03;
  const shapes = [], offs = [];
  for (const [i0, j0, k0, i1, j1, k1] of boxes) {
    const hx = (i1 - i0) * BV / 2, hy = (j1 - j0) * BV / 2, hz = (k1 - k0) * BV / 2;
    shapes.push(new CANNON.Box(new CANNON.Vec3(Math.max(0.05, hx - IN), Math.max(0.05, hy - IN), Math.max(0.05, hz - IN))));
    offs.push(new CANNON.Vec3(i0 * BV + hx - com.x, j0 * BV + hy - com.y, k0 * BV + hz - com.z));
  }
  addShapesFast(body, shapes, offs);
  body.position.set(worldCenter.x, worldCenter.y, worldCenter.z);
  if (quat) body.quaternion.set(quat.x, quat.y, quat.z, quat.w);
  if (vel) body.velocity.set(vel.x, vel.y, vel.z);
  if (angVel) body.angularVelocity.set(angVel.x, angVel.y, angVel.z);
  body.isPiece = true;
  const radius = Math.hypot(nx, ny, nz) * BV / 2;
  const p = { grid, com, n, body, mesh, parts, born: G.time, rest: 0, dead: false, shattering: false, radius, lastV: new THREE.Vector3(body.velocity.x, body.velocity.y, body.velocity.z) };
  body.piece = p;
  body.addEventListener('collide', (e) => {
    if (p.dead) return;
    const v = Math.abs(e.contact.getImpactVelocityAlongNormal());
    if (v < 5.5 || G.time - p.born < 0.15) return;
    const other = e.body;
    const c = e.contact;
    const pt = c.bi === body ? new THREE.Vector3(c.bi.position.x + c.ri.x, c.bi.position.y + c.ri.y, c.bi.position.z + c.ri.z) : new THREE.Vector3(c.bj.position.x + c.rj.x, c.bj.position.y + c.rj.y, c.bj.position.z + c.rj.z);
    // smashes into a building: knocks a hole in it
    if (other.isBuilding && v > 8) afterStep(() => blastBuildings(pt, clamp(Math.cbrt(p.n) * 0.22 * Math.min(1.5, v / 14), 0.7, 4), { quiet: true, scorch: false }));
    if (!p.shattering && (v > 7 || (p.n > 400 && v > 5.5))) { p.shattering = true; afterStep(() => shatterPiece(p, v, pt)); }
  });
  // (collision events only fire when two bodies START touching, so a piece already resting on a
  // stub of the same building wouldn't notice landing: updateBuildings also watches for sudden
  // stops)
  G.world.addBody(body);
  pieces.push(p);
  syncPiece(p);
  return p;
}
// big pieces get a simple physics shape: a few boxes along their longest side
function slabs(grid) {
  const { vox, nx, ny, nz } = grid;
  const d = [nx, ny, nz], ax = d.indexOf(Math.max(nx, ny, nz));
  const S = clamp(Math.round(d[ax] / 10), 1, 10);
  const out = [];
  for (let s = 0; s < S; s++) {
    const a = Math.floor(d[ax] * s / S), b = Math.floor(d[ax] * (s + 1) / S);
    let i0 = 1e9, j0 = 1e9, k0 = 1e9, i1 = -1, j1 = -1, k1 = -1;
    const lo = [0, 0, 0], hi = [nx, ny, nz]; lo[ax] = a; hi[ax] = b;
    for (let j = lo[1]; j < hi[1]; j++) for (let k = lo[2]; k < hi[2]; k++) for (let i = lo[0]; i < hi[0]; i++) {
      if (!vox[(j * nz + k) * nx + i]) continue;
      if (i < i0) i0 = i; if (i > i1) i1 = i; if (j < j0) j0 = j; if (j > j1) j1 = j; if (k < k0) k0 = k; if (k > k1) k1 = k;
    }
    if (i1 >= 0) out.push([i0, j0, k0, i1 + 1, j1 + 1, k1 + 1]);
  }
  return out;
}
function syncPiece(p) {
  p.mesh.position.copy(drawPos(p.body));
  p.mesh.quaternion.copy(drawQuat(p.body));
}
// a black hole swallowed this falling piece of building
G.eatPiece = (body) => { if (body.piece) removePiece(body.piece); };
function removePiece(p, keepGeometry = false) {
  if (p.dead) return;
  p.dead = true;
  moveTies(p.body, null, null);
  G.world.removeBody(p.body);
  p.mesh.removeFromParent();
  if (!keepGeometry) for (const part of p.parts) part.geo.dispose();
  const i = pieces.indexOf(p);
  if (i >= 0) pieces.splice(i, 1);
}
// too many pieces: the oldest one that's lying still crumbles to dust
function retireOldest() {
  let best = null;
  for (const p of pieces) if (!p.shattering && (!best || (p.rest > 0) > (best.rest > 0) || ((p.rest > 0) === (best.rest > 0) && p.born < best.born))) best = p;
  if (!best) return;
  FX.smoke(best.mesh.position.clone(), 4, 0x9a948a, 1 + best.radius * 0.3);
  removePiece(best);
}
// blocks -> flying cubes (a few of them; the rest is dust). comWorld: where the grid's centre of
// mass `com` (from its corner) is in the world; quat: how the grid is turned
function toCubes(grid, comWorld, com, quat, vel, max = 18) {
  const { vox, nx, nz } = grid;
  const ids = [];
  for (let id = 0; id < vox.length; id++) if (vox[id]) ids.push(id);
  const step = Math.max(1, Math.ceil(ids.length / max));
  for (let q = 0; q < ids.length; q += step) {
    const id = ids[q];
    const i = id % nx, k = ((id / nx) | 0) % nz, j = (id / (nx * nz)) | 0;
    _v.set((i + 0.5) * BV - com.x, (j + 0.5) * BV - com.y, (k + 0.5) * BV - com.z);
    if (quat) _v.applyQuaternion(quat);
    _v.add(comWorld);
    const v = (vel ? vel.clone() : new THREE.Vector3()).add(new THREE.Vector3(rand(-2, 2), rand(0, 2.5), rand(-2, 2)));
    spawnCube(_v, v, PAL[vox[id]].hex, BV * 0.9, 3 + Math.random() * 2);
  }
  if (ids.length > 30) FX.smoke(comWorld.clone(), 3, 0xa09a90, 0.8 + Math.cbrt(ids.length) * 0.15);
}

// A piece hits something hard. Buildings don't burst into big chunks: a tall falling section
// crushes its lowest floor into rubble and dust on whatever it lands on (and the floors under
// it give way too) and keeps coming down: it collapses into itself, floor by floor. Anything
// else crumbles where it lands. The rubble piles up as real ground.
const _up = new THREE.Vector3();
function shatterPiece(p, v, at) {
  if (p.dead) return;
  const { grid, body } = p;
  const pos = new THREE.Vector3(body.position.x, body.position.y, body.position.z);
  const quat = new THREE.Quaternion(body.quaternion.x, body.quaternion.y, body.quaternion.z, body.quaternion.w);
  const vel = new THREE.Vector3(body.velocity.x, body.velocity.y, body.velocity.z);
  const upright = _up.set(0, 1, 0).applyQuaternion(quat).y > 0.75;
  sfx.crumble(pos);
  if (upright && p.parts.length > 1 && p.n > 300) {
    // the bottom floor goes
    const cut = p.parts[0].j1;
    const crushed = takeLayers(grid, 0, cut);
    const sub = extract(grid, [0, cut, 0, grid.nx, grid.ny, grid.nz]);
    removePiece(p, true);
    p.parts[0].geo.dispose();
    const low = new THREE.Vector3(grid.nx * BV / 2, cut * BV / 2, grid.nz * BV / 2).sub(p.com).applyQuaternion(quat).add(pos);
    const r = Math.max(grid.nx, grid.nz) * BV * 0.5;
    dustBurst(low, r, 18);
    FX.smoke(low, 6, 0xa59f94, 2 + r * 0.15);
    G.shake = Math.max(G.shake, Math.min(0.9, p.n / 30000));
    rubble(low.x, low.z, r + 7, crushed.n * 0.3, crushed.hexes, p.src ? p.src.y0 : undefined);
    if (p.src) crushTop(p.src, clamp(Math.round(p.n / (p.src.nx * p.src.nz * 0.25)), 4, 14));
    if (sub) {
      // the rest keeps falling; its new bottom floor is redrawn (it had no faces where it sat
      // on the floor that's gone)
      const shift = new THREE.Vector3(sub.ci * BV, (cut + sub.cj) * BV, sub.ck * BV);
      const parts = p.parts.slice(1).map((q) => ({ j0: q.j0 - cut - sub.cj, j1: q.j1 - cut - sub.cj, geo: q.geo, base: q.base.clone().sub(shift) }));
      if (parts.length) {
        const f = parts[0];
        const geo = meshGrid(sub.grid.vox, sub.grid.nx, sub.grid.ny, sub.grid.nz, Math.max(0, f.j0), Math.min(sub.grid.ny, f.j1), 0, 0, 0);
        f.geo.dispose();
        if (geo) { f.geo = geo; f.base = new THREE.Vector3(); } else parts.shift();
      }
      const local = new THREE.Vector3(sub.ci * BV + sub.com.x, (cut + sub.cj) * BV + sub.com.y, sub.ck * BV + sub.com.z).sub(p.com);
      const world = local.applyQuaternion(quat).add(pos);
      const pv = new THREE.Vector3(vel.x * 0.3, Math.min(vel.y * 0.5, -7), vel.z * 0.3);
      const np = spawnPiece(sub.grid, null, quat, pv, new THREE.Vector3(rand(-0.1, 0.1), 0, rand(-0.1, 0.1)), world, parts.length ? parts : null, { n: sub.n, com: sub.com });
      if (np) np.src = p.src;
      else for (const q of parts) q.geo.dispose();
    }
    return;
  }
  // it crumbles where it lands: rubble, dust and a few loose blocks
  removePiece(p);
  const all = takeLayers(grid, 0, grid.ny, true);
  const r = Math.max(2, Math.cbrt(p.n) * BV * 0.9);
  dustBurst(pos, r, Math.min(22, 4 + Math.round(p.n / 120)));
  if (p.n > 60) rubble(pos.x, pos.z, r + 3, p.n * 0.3, all.hexes, p.src ? p.src.y0 : undefined);
  toCubes(grid, pos, p.com, quat, vel.multiplyScalar(0.3), p.n > 60 ? 12 : 14);
}
// how many blocks (and some of their colours) layers ja..jb-1 of a grid hold; cleared unless keep
function takeLayers(grid, ja, jb, keep = false) {
  const { vox, nx, nz } = grid, lay = nx * nz;
  let n = 0;
  const hexes = [];
  for (let id = ja * lay, e = Math.min(vox.length, jb * lay); id < e; id++) {
    const c = vox[id];
    if (!c) continue;
    n++;
    if (hexes.length < 24 && !IS_GLASS[c] && (n & 15) === 1) hexes.push(PAL[c].hex);
    if (!keep) vox[id] = 0;
  }
  return { n, hexes };
}
// split a grid's box into `target` regions (cut the biggest along its longest side, a bit off-centre)
function splitRegions(nx, ny, nz, target) {
  const boxes = [[0, 0, 0, nx, ny, nz]];
  while (boxes.length < target) {
    let bi = 0, bv = -1;
    for (let i = 0; i < boxes.length; i++) { const b = boxes[i]; const v = (b[3] - b[0]) * (b[4] - b[1]) * (b[5] - b[2]); if (v > bv) { bv = v; bi = i; } }
    const b = boxes[bi];
    const d = [b[3] - b[0], b[4] - b[1], b[5] - b[2]];
    const ax = d.indexOf(Math.max(...d));
    if (d[ax] < 2) break;
    const cut = b[ax] + clamp(Math.round(d[ax] * rand(0.35, 0.65)), 1, d[ax] - 1);
    const a = b.slice(), c = b.slice();
    a[ax + 3] = cut; c[ax] = cut;
    boxes.splice(bi, 1, a, c);
  }
  return boxes;
}
// the blocks of grid inside region r, as their own tight grid. ci/cj/ck: the new grid's corner
// inside the region; com: its centre of mass from its corner
function extract(grid, r) {
  const { vox, nx, nz } = grid;
  let i0 = 1e9, j0 = 1e9, k0 = 1e9, i1 = -1, j1 = -1, k1 = -1;
  for (let j = r[1]; j < r[4]; j++) for (let k = r[2]; k < r[5]; k++) for (let i = r[0]; i < r[3]; i++) {
    if (!vox[(j * nz + k) * nx + i]) continue;
    if (i < i0) i0 = i; if (i > i1) i1 = i; if (j < j0) j0 = j; if (j > j1) j1 = j; if (k < k0) k0 = k; if (k > k1) k1 = k;
  }
  if (i1 < 0) return null;
  const lx = i1 - i0 + 1, ly = j1 - j0 + 1, lz = k1 - k0 + 1;
  const lv = new Uint8Array(lx * ly * lz);
  let n = 0, sx = 0, sy = 0, sz = 0;
  for (let j = j0; j <= j1; j++) for (let k = k0; k <= k1; k++) for (let i = i0; i <= i1; i++) {
    const c = vox[(j * nz + k) * nx + i];
    if (!c) continue;
    lv[((j - j0) * lz + (k - k0)) * lx + (i - i0)] = c;
    n++; sx += i - i0 + 0.5; sy += j - j0 + 0.5; sz += k - k0 + 0.5;
  }
  return { grid: { vox: lv, nx: lx, ny: ly, nz: lz }, ci: i0 - r[0], cj: j0 - r[1], ck: k0 - r[2], com: new THREE.Vector3(sx / n * BV, sy / n * BV, sz / n * BV), n };
}

const dist2 = (b, p) => (b.x0 + b.nx * BV / 2 - p.x) ** 2 + (b.z0 + b.nz * BV / 2 - p.z) ** 2;
// ---------------------------------------------------------------- every frame
export function updateBuildings(dt) {
  for (const b of buildings) {
    if (b.checkAt > 0 && G.time >= b.checkAt) checkIntegrity(b);
  }
  // redraw changed bands (a few per frame, the nearest buildings first)
  let budget = 6;
  const cam = G.camera ? G.camera.position : null;
  const order = cam && buildings.length > 1 ? [...buildings].sort((a, c) => dist2(a, cam) - dist2(c, cam)) : buildings;
  for (const b of order) {
    if (budget <= 0) break;
    for (let bi = 0; bi < b.nb && budget > 0; bi++) if (b.bands[bi].meshDirty) { rebuildMesh(b, bi); budget--; }
  }
  for (let i = pieces.length - 1; i >= 0; i--) {
    const p = pieces[i];
    syncPiece(p);
    const bp = p.body.position, bv = p.body.velocity;
    if (bp.y < (G.killY ?? -100)) { removePiece(p); continue; }
    p.rest = p.body.sleepState === CANNON.Body.SLEEPING ? p.rest + dt : 0;
    // a sudden stop = it hit something hard: it breaks up
    const dv = Math.hypot(bv.x - p.lastV.x, bv.y - p.lastV.y, bv.z - p.lastV.z);
    p.lastV.set(bv.x, bv.y, bv.z);
    if (!p.shattering && G.time - p.born > 0.2 && (dv > 6.5 || (p.n > 400 && dv > 5))) {
      p.shattering = true;
      shatterPiece(p, dv, new THREE.Vector3(bp.x, bp.y - p.radius * 0.5, bp.z));
    }
  }
}

// ---------------------------------------------------------------- making buildings
// A box of blocks at world corner (x0, y0, z0); fill it with fill(b), then call finish(b).
export function newBuilding(x0, y0, z0, nx, ny, nz) { return new Building(x0, y0, z0, nx, ny, nz); }
export function finishBuilding(b) {
  // keep the outermost ring of blocks empty (the collapse check relies on it)
  for (let j = 0; j < b.ny; j++) for (let k = 0; k < b.nz; k++) for (let i = 0; i < b.nx; i++) {
    if (i === 0 || k === 0 || i === b.nx - 1 || k === b.nz - 1) b.vox[(j * b.nz + k) * b.nx + i] = 0;
  }
  let n = 0;
  for (let id = 0; id < b.vox.length; id++) if (b.vox[id]) n++;
  b.solid = n;
  // how well each layer is held up, as designed (collapse = losing most of that)
  const L = layerLoads(b);
  b.ratio0 = new Float32Array(b.ny);
  for (let j = 1; j < b.ny; j++) b.ratio0[j] = L.W[j] > 0 ? L.S[j] / L.W[j] : 0;
  buildings.push(b);
  register(b);
  // big maps: physics only when something comes near, drawing streams in nearest first
  if (G.lazyBuildings) { b.lazy = true; for (const band of b.bands) { band.physDirty = true; band.meshDirty = true; } }
  else for (let bi = 0; bi < b.nb; bi++) { rebuildPhysics(b, bi); rebuildMesh(b, bi); }
  return b;
}
// make sure buildings in this area have their physics (called before physics steps and rays)
export function ensureBuildings(xa, za, xb, zb) {
  if (!buildings.length) return;
  eachNear(Math.min(xa, xb), Math.min(za, zb), Math.max(xa, xb), Math.max(za, zb), (b) => {
    if (!b.lazy) return;
    b.lazy = false;
    for (let bi = 0; bi < b.nb; bi++) if (b.bands[bi].physDirty) rebuildPhysics(b, bi);
  });
}
G.ensureBuildings = ensureBuildings;
export function setBuildingGroup(g) { group = g; }
export function clearBuildings() {
  for (const b of buildings) for (const band of b.bands) {
    if (band.body) G.world.removeBody(band.body);
    if (band.mesh) { band.mesh.removeFromParent(); band.mesh.geometry.dispose(); }
  }
  buildings.length = 0;
  grid.clear();
  for (const p of [...pieces]) removePiece(p);
}
G.clearBuildings = clearBuildings;
export function allBuildings() { return buildings; }
export function buildingStats() {
  let solid = 0, bodies = 0, shapes = 0, tris = 0;
  for (const b of buildings) { solid += b.solid; for (const band of b.bands) { if (band.body) { bodies++; shapes += band.body.shapes.length; } if (band.mesh) tris += band.mesh.geometry.index.count / 3; } }
  return { buildings: buildings.length, solid, bodies, shapes, tris, pieces: pieces.length };
}
G.buildingStats = buildingStats;
G.__buildings = () => buildings; // for tests

// ---------------------------------------------------------------- the nuke's shockwave
function removeBox(b, i0, j0, k0, i1, j1, k1) {
  let n = 0;
  for (let j = Math.max(0, j0); j < Math.min(b.ny, j1); j++) for (let k = Math.max(0, k0); k < Math.min(b.nz, k1); k++) for (let i = Math.max(0, i0); i < Math.min(b.nx, i1); i++) {
    const id = (j * b.nz + k) * b.nx + i;
    if (b.vox[id]) { b.vox[id] = 0; n++; }
  }
  if (n) { b.solid -= n; b.dirtyLayers(j0, j1); }
  return n;
}
// every window has a chance p to blow out
function shatterGlass(b, p, at) {
  let n = 0, jmin = 1e9, jmax = -1;
  const cols = [];
  for (let id = 0; id < b.vox.length; id++) {
    const c = b.vox[id];
    if (!c || PAL[c].mat !== 'glass' || Math.random() > p) continue;
    b.vox[id] = 0; n++;
    const j = (id / (b.nx * b.nz)) | 0;
    if (j < jmin) jmin = j; if (j > jmax) jmax = j;
    if (cols.length < 50 && Math.random() < 0.02) {
      const i = id % b.nx, k = ((id / b.nx) | 0) % b.nz;
      cols.push(new THREE.Vector3(b.x0 + (i + 0.5) * BV, b.y0 + (j + 0.5) * BV, b.z0 + (k + 0.5) * BV));
    }
  }
  if (!n) return 0;
  b.solid -= n;
  b.dirtyLayers(jmin, jmax);
  for (const q of cols) cubeBurst(q, 1, [0x9fd3f5, 0xc9ebff], 6, BV * 0.45);
  sfx.shatter(at);
  return n;
}
// the shockwave reaches building b (f: 1 at ground zero .. 0 at the edge of the blast)
export function nukeBuilding(b, pos, f, s) {
  const x1 = b.x0 + b.nx * BV, z1 = b.z0 + b.nz * BV;
  const nx = clamp(pos.x, b.x0, x1), nz = clamp(pos.z, b.z0, z1);
  const near = new THREE.Vector3(nx, Math.max(pos.y, b.y0 + 2), nz);
  if (f > 0.68) {
    // the bottom floors are blown out on the side facing the blast; close enough, all the way
    // through, and everything above comes down
    const reach = f > 0.8 ? 1e9 : (14 + 30 * (f - 0.68)) * s;
    const i0 = Math.floor((nx - reach - b.x0) / BV), i1 = Math.ceil((nx + reach - b.x0) / BV);
    const k0 = Math.floor((nz - reach - b.z0) / BV), k1 = Math.ceil((nz + reach - b.z0) / BV);
    removeBox(b, i0, 1, k0, i1, 7, k1);
    shatterGlass(b, clamp(f * 1.7, 0, 1), near);
    carve(b, near.x, near.y + 2, near.z, (6 + 8 * f) * s, { quiet: true });
  } else if (f > 0.38) {
    shatterGlass(b, clamp(f * 1.7, 0, 1), near);
    carve(b, near.x, near.y + 3 + Math.random() * 10, near.z, (2.5 + 7 * f) * s, { quiet: true });
  } else shatterGlass(b, clamp(f * 1.7, 0, 1), near);
  for (let bi = 0; bi < b.nb; bi++) if (b.bands[bi].physDirty) rebuildPhysics(b, bi);
  if (b.checkAt < 0) b.checkAt = G.time + 0.05;
}
// buildings near pos with their distance (nearest wall, on the ground)
export function buildingsNear(pos, R) {
  const out = [];
  for (const b of buildings) {
    const nx = clamp(pos.x, b.x0, b.x0 + b.nx * BV), nz = clamp(pos.z, b.z0, b.z0 + b.nz * BV);
    const d = Math.hypot(nx - pos.x, nz - pos.z);
    if (d < R) out.push({ b, d });
  }
  return out;
}

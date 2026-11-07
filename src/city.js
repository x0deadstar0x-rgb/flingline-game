// The city: buildings designed block by block (half-metre blocks) and the street plan.
// Every building is hollow with real floors, a stairwell you can climb all the way to the roof,
// shops on the ground floor, windows, a roof with a parapet, a stair house, air-con units, water
// tanks and antennas. All of it can be blown apart (buildings.js).
import { BV, pal, newBuilding, finishBuilding } from './buildings.js';

const FH = 8;   // floor to floor: 8 blocks = 4 m
const M = 3;    // margin blocks around the walls (awnings, balconies, fire escapes; the outer ring stays empty)

const concrete = (c) => pal(c, 1, 'concrete');
const glassOf = (c) => pal(c, 1.8, 'glass');
const stone = (c) => pal(c, 0.95, 'stone');
const steel = (c) => pal(c, 0.7, 'metal');
const brick = (c) => pal(c, 1, 'brick');
const wood = (c) => pal(c, 1.25, 'wood');

const STYLES = {
  glass: { kind: 'curtain', piers: 6, walls: [0x3a434d, 0x2e3741, 0x4a5561, 0xc9ced4], glass: [[0x5d83a8, 0x7fa3c6], [0x4e7a9e, 0x6d97ba], [0x5a8a9a, 0x7fb0bf]] },
  modern: { kind: 'curtain', piers: 4, walls: [0xeeeeea, 0xe2e2dd, 0xd0d3d6], glass: [[0x30343a, 0x454b54], [0x2c3e50, 0x3d5468]] },
  office: { kind: 'ribbon', piers: 8, walls: [0xbab6ab, 0xa9a59b, 0xc9c4b8, 0x9ea3a8], glass: [[0x3f5d7a, 0x557895], [0x34495e, 0x4a6680]] },
  brick: { kind: 'punched', walls: [0xa6533c, 0x8f4733, 0xb5654a, 0x7a3b2a, 0x9c6b4e], glass: [[0x2f4458, 0x3d566e]], trim: [0xd9cfbd, 0xcfc6b2], fireEscape: true },
  deco: { kind: 'punched', walls: [0xd8cfb8, 0xc7bc9f, 0xe0d6c0], glass: [[0x33475c, 0x45607a]], trim: [0x9c8f72, 0x8a7d60] },
  stucco: { kind: 'punched', walls: [0xe8d9b5, 0xd9c7a0, 0xc9d6c2, 0xe3c4b0], glass: [[0x3a4f63, 0x4d6680]], trim: [0xf2ece0], balconies: true },
};
const SHOPS = [0x2b2f36, 0x7a2e2e, 0x2e5a7a, 0x3d6b45, 0x8a6a2a, 0x5b3a78, 0xb5462e];

const pick = (rng, a) => a[Math.floor(rng() * a.length) % a.length];
function shadeHex(hex, f) {
  const r = Math.min(255, ((hex >> 16) & 255) * f) | 0, g = Math.min(255, ((hex >> 8) & 255) * f) | 0, b = Math.min(255, (hex & 255) * f) | 0;
  return (r << 16) | (g << 8) | b;
}
const h3 = (a, b, c) => { let h = Math.imul(a, 73856093) ^ Math.imul(b, 19349663) ^ Math.imul(c, 83492791); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };

// one building. o: { cx, cz (centre, m), w, d (m), floors, style, rng, setbacks: [[fraction, inset blocks]...], antenna (blocks), tank }
export function makeBuilding(o) {
  const rng = o.rng;
  const st = STYLES[o.style] || STYLES.office;
  const W = Math.max(24, Math.round(o.w / BV / 2) * 2), D = Math.max(24, Math.round(o.d / BV / 2) * 2);
  const floors = Math.max(1, o.floors);
  const roofJ = floors * FH;
  const antenna = o.antenna || 0;
  const NX = W + 2 * M, NZ = D + 2 * M, NY = roofJ + 3 + 7 + antenna + 2;
  const b = newBuilding(o.cx - NX * BV / 2, -BV, o.cz - NZ * BV / 2, NX, NY, NZ);
  const wallHex = pick(rng, st.walls);
  const [gA, gB] = pick(rng, st.glass);
  const WALL = o.style === 'brick' ? brick(wallHex) : concrete(wallHex);
  const FRAME = st.kind === 'curtain' ? steel(shadeHex(wallHex, 0.9)) : WALL;
  const GA = glassOf(gA), GB = glassOf(gB);
  const TRIM = st.trim ? stone(pick(rng, st.trim)) : concrete(shadeHex(wallHex, 0.8));
  const SLAB = concrete(0x8c8c86), COL = concrete(0x9b9b95), STAIR = concrete(0xa7a79f), ROOF = concrete(0x5c5f63);
  const SHOP = concrete(pick(rng, SHOPS));
  const METAL = steel(0x6d7378), DARK = steel(0x2e3236), RED = steel(0xff2a2a);

  // setbacks: the tower steps in as it goes up
  const tiers = [{ inset: 0, from: 0 }];
  for (const [frac, inset] of o.setbacks || []) tiers.push({ inset, from: Math.max(2, Math.round(floors * frac)) });
  const tierAt = (f) => { let t = tiers[0]; for (const x of tiers) if (x.from <= f) t = x; return t; };

  // stairwell in the middle: 4 x 12 blocks (two lanes of stairs zig-zagging up)
  const si = M + (W >> 1) - 2, sk = M + (D >> 1) - 6;
  const nearShaft = (i, k) => i >= si - 2 && i < si + 6 && k >= sk - 2 && k < sk + 14;

  // wall block for floor f, layer lj (1..FH-1), position t along a side of length len
  const facade = (f, lj, t, len, front) => {
    if (t <= 0 || t >= len - 1) return f === 0 ? WALL : FRAME; // corners
    if (f === 0) {
      // street level: shop windows, doors in the middle of the front and back, a coloured band
      if (lj >= FH - 2) return SHOP;
      const mid = len >> 1;
      if ((front || len > 40) && t >= mid - 2 && t < mid + 2) return lj <= 5 ? 0 : SHOP;
      if (t % 6 === 0) return WALL;
      return lj === 1 ? WALL : GA;
    }
    const top = f === floors - 1;
    if (st.kind === 'curtain') {
      if (lj === 1) return FRAME;
      if (t % st.piers === 0) return FRAME;
      return h3(f, t, len) < 0.16 ? GB : GA;
    }
    if (st.kind === 'ribbon') {
      if (lj >= 3 && lj <= 6) return t % st.piers === 0 ? WALL : (h3(f, t, len) < 0.14 ? GB : GA);
      return lj === 1 && f % 5 === 0 ? TRIM : WALL;
    }
    // punched windows with sills, a cornice on top
    if (top && lj >= FH - 2) return TRIM;
    const c = t % 4, win = c === 1 || c === 2;
    if (win && lj >= 3 && lj <= 5) return h3(f, t, len) < 0.1 ? GB : GA;
    if (win && lj === 2) return TRIM;
    return WALL;
  };
  // ring of blocks round a rectangle (in building blocks, margins included)
  const ring = (i0, i1, k0, k1, ja, jb, v) => {
    b.box(i0, ja, k0, i1, jb, k0 + 1, v); b.box(i0, ja, k1 - 1, i1, jb, k1, v);
    b.box(i0, ja, k0, i0 + 1, jb, k1, v); b.box(i1 - 1, ja, k0, i1, jb, k1, v);
  };

  for (let f = 0; f < floors; f++) {
    const t = tierAt(f), prev = f > 0 ? tierAt(f - 1) : t;
    const i0 = M + t.inset, i1 = M + W - t.inset, k0 = M + t.inset, k1 = M + D - t.inset;
    const jb = f * FH;
    // floor slab (on a setback floor it also covers the terrace of the floors below)
    const sIn = Math.min(t.inset, prev.inset);
    b.box(M + sIn, jb, M + sIn, M + W - sIn, jb + 1, M + D - sIn, SLAB);
    if (t.inset > prev.inset) ring(M + prev.inset, M + W - prev.inset, M + prev.inset, M + D - prev.inset, jb + 1, jb + 3, TRIM);
    for (let lj = 1; lj < FH; lj++) {
      const j = jb + lj;
      for (let i = i0; i < i1; i++) { b.set(i, j, k0, facade(f, lj, i - i0, i1 - i0, true)); b.set(i, j, k1 - 1, facade(f, lj, i - i0, i1 - i0, true)); }
      for (let k = k0 + 1; k < k1 - 1; k++) { b.set(i0, j, k, facade(f, lj, k - k0, k1 - k0, false)); b.set(i1 - 1, j, k, facade(f, lj, k - k0, k1 - k0, false)); }
    }
    // columns inside
    for (let i = i0 + 6; i + 2 < i1 - 4; i += 12) for (let k = k0 + 6; k + 2 < k1 - 4; k += 12) {
      if (nearShaft(i, k) || nearShaft(i + 1, k + 1)) continue;
      b.box(i, jb + 1, k, i + 2, jb + FH, k + 2, COL);
    }
    // outside details
    if (f === 0) {
      // awnings over the doors
      const mid = M + (W >> 1);
      b.box(mid - 3, jb + 6, k0 - 2, mid + 3, jb + 7, k0, SHOP);
      b.box(mid - 3, jb + 6, k1, mid + 3, jb + 7, k1 + 2, SHOP);
    } else if (st.balconies && f < floors - 1) {
      for (let i = i0 + 3; i + 4 < i1 - 2; i += 8) {
        b.box(i, jb, k0 - 2, i + 4, jb + 1, k0, SLAB);           // balcony floor
        b.box(i, jb + 1, k0 - 2, i + 4, jb + 3, k0 - 1, METAL);  // railing
      }
    } else if (st.fireEscape && f < floors) {
      // fire escape on the side: a platform on every floor and a ladder between them
      const ke0 = k0 + 3, ke1 = Math.min(k1 - 3, ke0 + 10);
      b.box(i1, jb, ke0, i1 + 2, jb + 1, ke1, DARK);
      b.box(i1 + 1, jb + 1, ke0, i1 + 2, jb + 3, ke1, DARK);
      const lk = f % 2 ? ke0 : ke1 - 1;
      b.box(i1, jb + 1, lk, i1 + 1, jb + FH, lk + 1, METAL);
    }
  }
  // roof + parapet
  const tt = tierAt(floors - 1);
  const ri0 = M + tt.inset, ri1 = M + W - tt.inset, rk0 = M + tt.inset, rk1 = M + D - tt.inset;
  b.box(ri0, roofJ, rk0, ri1, roofJ + 1, rk1, ROOF);
  ring(ri0, ri1, rk0, rk1, roofJ + 1, roofJ + 3, TRIM);

  // stairs: one flight per floor, alternating lanes; a hole in the slab above each flight
  for (let f = 0; f < floors; f++) {
    const jn = f * FH, lane = f % 2, li = si + lane * 2;
    for (let s = 0; s < FH; s++) {
      const k = lane === 0 ? sk + 2 + s : sk + 1 + FH - s;
      b.box(li, jn + 1, k, li + 2, jn + 2 + s, k + 1, STAIR);
    }
    const jm = jn + FH, topK = lane === 0 ? sk + 1 + FH : sk + 2;
    for (let k = sk + 2; k < sk + 2 + FH; k++) if (k !== topK) b.box(li, jm, k, li + 2, jm + 1, k + 1, 0);
  }
  // stair house on the roof, door towards where the stairs arrive
  const hj = roofJ + 1;
  ring(si - 1, si + 5, sk - 1, sk + 13, hj, hj + 5, WALL);
  b.box(si - 1, hj + 5, sk - 1, si + 5, hj + 6, sk + 13, ROOF);
  if ((floors - 1) % 2 === 0) b.box(si, hj, sk + 12, si + 4, hj + 4, sk + 13, 0);
  else b.box(si, hj, sk - 1, si + 4, hj + 4, sk, 0);
  // air-con units / vents
  const n = 2 + Math.floor(rng() * 4);
  for (let q = 0; q < n; q++) {
    const i = ri0 + 2 + Math.floor(rng() * Math.max(1, ri1 - ri0 - 8)), k = rk0 + 2 + Math.floor(rng() * Math.max(1, rk1 - rk0 - 8));
    if (nearShaft(i, k) || nearShaft(i + 4, k + 4)) continue;
    b.box(i, hj, k, i + 4, hj + 3, k + 3, METAL);
    b.box(i + 1, hj + 3, k + 1, i + 3, hj + 4, k + 2, DARK);
  }
  // water tank on legs
  if (o.tank) {
    const i = ri0 + 3, k = rk1 - 9;
    if (!nearShaft(i, k) && !nearShaft(i + 6, k + 6)) {
      for (const [a, c] of [[0, 0], [5, 0], [0, 5], [5, 5]]) b.box(i + a, hj, k + c, i + a + 1, hj + 4, k + c + 1, DARK);
      b.box(i, hj + 4, k, i + 6, hj + 10, k + 6, wood(0x8a5a32));
      b.box(i + 1, hj + 10, k + 1, i + 5, hj + 11, k + 5, wood(0x6e4626));
    }
  }
  // antenna with a red light
  if (antenna) {
    const ai = si + 2, ak = sk + 6, a0 = hj + 6;
    b.box(ai, a0, ak, ai + 1, a0 + antenna, ak + 1, METAL);
    b.box(ai - 1, a0, ak - 1, ai + 2, a0 + 2, ak + 2, DARK);
    b.set(ai, a0 + antenna, ak, RED);
  }
  return finishBuilding(b);
}

// ---------------------------------------------------------------- the street plan
// 5 x 5 blocks, 48 m apart, 12 m roads (with 3 m sidewalks) in between. The middle block is a
// plaza. Downtown towers around it, lower buildings, parks and a car park further out.
export const PITCH = 48, ROAD = 12, WALK = 3;
export const LOT = PITCH / 2 - ROAD / 2 - WALK; // half-size of the buildable part of a block (15 m)

export function planCity(rng) {
  const blocks = [];
  const outerUse = ['park', 'parking', 'park', 'mid', 'mid', 'mid', 'row', 'row', 'mid', 'row', 'mid', 'row', 'mid', 'row', 'mid', 'mid'];
  // shuffle the outer ring's uses (seeded)
  for (let i = outerUse.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [outerUse[i], outerUse[j]] = [outerUse[j], outerUse[i]]; }
  let oi = 0;
  const towerStyles = ['glass', 'modern', 'office', 'deco', 'glass', 'office', 'modern', 'deco'];
  let ti = 0;
  for (let gx = -2; gx <= 2; gx++) for (let gz = -2; gz <= 2; gz++) {
    const cx = gx * PITCH, cz = gz * PITCH;
    const ringN = Math.max(Math.abs(gx), Math.abs(gz));
    const blk = { gx, gz, cx, cz, use: 'plaza', lots: [] };
    if (ringN === 1) {
      blk.use = 'tower';
      const style = towerStyles[ti++ % towerStyles.length];
      const w = 22 + Math.floor(rng() * 4) * 2, d = 22 + Math.floor(rng() * 4) * 2;
      const floors = 15 + Math.floor(rng() * 11);
      const setbacks = style === 'deco' ? [[0.45, 4], [0.75, 8]] : (floors > 20 && rng() < 0.5 ? [[0.6, 4]] : []);
      blk.lots.push({ cx: cx + (rng() - 0.5) * 2, cz: cz + (rng() - 0.5) * 2, w, d, floors, style, setbacks, antenna: floors > 21 ? 16 + Math.floor(rng() * 24) : 0, tank: false });
    } else if (ringN === 2) {
      const use = outerUse[oi++ % outerUse.length];
      blk.use = use;
      if (use === 'mid') {
        // two mid-rise buildings side by side
        const along = rng() < 0.5;
        for (const s of [-1, 1]) {
          const style = pick(rng, ['office', 'brick', 'stucco', 'modern', 'brick']);
          const w = along ? 13 : 26, d = along ? 26 : 13;
          blk.lots.push({ cx: cx + (along ? s * 7.5 : 0), cz: cz + (along ? 0 : s * 7.5), w, d, floors: 4 + Math.floor(rng() * 6), style, tank: style === 'brick' && rng() < 0.7 });
        }
      } else if (use === 'row') {
        // four smaller buildings
        for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
          if (rng() < 0.15) continue;
          const style = pick(rng, ['brick', 'stucco', 'brick', 'deco']);
          blk.lots.push({ cx: cx + sx * 7.5, cz: cz + sz * 7.5, w: 13, d: 13, floors: 2 + Math.floor(rng() * 4), style, tank: style === 'brick' && rng() < 0.4 });
        }
      }
    }
    blocks.push(blk);
  }
  return blocks;
}

// build every lot of the plan
export function buildCityBlocks(blocks, rng) {
  for (const blk of blocks) for (const lot of blk.lots) makeBuilding({ ...lot, rng });
}

// is (x, z) under a building? (the ground there is one block lower so floors are flush with the street)
export function lotAt(blocks, x, z) {
  for (const blk of blocks) for (const l of blk.lots) {
    const W = Math.max(24, Math.round(l.w / BV / 2) * 2) * BV, D = Math.max(24, Math.round(l.d / BV / 2) * 2) * BV;
    if (Math.abs(x - l.cx) < W / 2 + 0.01 && Math.abs(z - l.cz) < D / 2 + 0.01) return l;
  }
  return null;
}

// Big landmarks for the Mega World, built from the same destructible half-metre blocks as the
// city: a castle, a pyramid with a hidden chamber, a colosseum, a lighthouse, a great wall,
// windmill towers. Each sits on a foundation that follows the ground under it.
import { BV, pal, newBuilding, finishBuilding } from './buildings.js';

const stone = (c) => pal(c, 0.95, 'stone'), glassOf = (c) => pal(c, 1.8, 'glass'), wood = (c) => pal(c, 1.25, 'wood');

// a building box around (cx, cz) of W x D blocks and H blocks tall, starting a little below the
// lowest ground under it; fill(i, j, k) decides each block. ground(x, z) = height there.
function make(cx, cz, W, D, H, ground, fill, foundation) {
  let lo = 1e9;
  for (let a = 0; a <= 4; a++) for (let b = 0; b <= 4; b++) lo = Math.min(lo, ground(cx + (a / 4 - 0.5) * W * BV, cz + (b / 4 - 0.5) * D * BV));
  const y0 = Math.floor(lo / BV) * BV - BV * 2;
  const b = newBuilding(cx - W * BV / 2, y0, cz - D * BV / 2, W, H, D);
  for (let i = 1; i < W - 1; i++) for (let k = 1; k < D - 1; k++) {
    const x = b.x0 + (i + 0.5) * BV, z = b.z0 + (k + 0.5) * BV;
    const gl = Math.max(1, Math.round((ground(x, z) - y0) / BV)); // ground level here, in blocks
    for (let j = 0; j < H; j++) {
      const v = fill(i, j - gl, k, gl);
      if (v) b.vox[(j * D + k) * W + i] = v;
      else if (j < gl && foundation(i, k)) b.vox[(j * D + k) * W + i] = FOUND;
    }
  }
  return finishBuilding(b);
}
const FOUND = stone(0x6f6a62);

export function castle(cx, cz, ground) {
  const W = 76, H = 70;
  const S = stone(0x9a968c), S2 = stone(0x85817a), DARK = stone(0x3a3836), WOOD = wood(0x6e4626), ROOF = stone(0x7d3b2c);
  const inR = (v, a, b) => v >= a && v < b;
  return make(cx, cz, W, W, H, ground, (i, j, k) => {
    if (j < 0) return 0;
    const e = Math.min(i - 2, k - 2, W - 3 - i, W - 3 - k); // distance from the outer edge
    const tower = (inR(i, 2, 12) || inR(i, W - 12, W - 2)) && (inR(k, 2, 12) || inR(k, W - 12, W - 2));
    if (tower) {
      const ti = inR(i, 2, 12) ? i - 2 : i - (W - 12), tk = inR(k, 2, 12) ? k - 2 : k - (W - 12);
      const shell = ti < 2 || tk < 2 || ti > 7 || tk > 7;
      if (j < 34) return shell ? (j % 10 === 9 ? S2 : S) : (j === 0 || j % 12 === 0 ? S2 : 0);
      if (j < 36) return ((ti + tk) % 2 === 0 && shell) ? S : 0;   // battlements
      return 0;
    }
    // outer wall, 2 thick, with a gate in the south side
    if (e >= 0 && e < 2) {
      const gate = k >= W - 4 && inR(i, W / 2 - 4, W / 2 + 4) && j < 12;
      if (gate) return j >= 11 ? WOOD : 0;
      if (j < 18) return j % 9 === 8 ? S2 : S;
      if (j < 20) return (i + k) % 3 === 0 ? S : 0;
      return 0;
    }
    // the keep in the middle
    const kc = W / 2;
    if (inR(i, kc - 11, kc + 11) && inR(k, kc - 11, kc + 11)) {
      const ki = i - (kc - 11), kk = k - (kc - 11);
      const shell = ki < 2 || kk < 2 || ki > 19 || kk > 19;
      if (j < 48) {
        if (shell) { if (j % 12 >= 5 && j % 12 < 9 && (ki + kk) % 6 === 3) return DARK; return S; }
        return j % 12 === 0 ? S2 : 0;
      }
      if (j < 56) { const r = j - 48; return (ki >= r && kk >= r && ki < 22 - r && kk < 22 - r) ? ROOF : 0; } // pointed roof
      return 0;
    }
    return j === 0 ? S2 : 0; // courtyard floor
  }, () => true);
}

export function pyramid(cx, cz, ground) {
  const W = 84, H = 44;
  const A = stone(0xd9c08a), B = stone(0xccb27a), C = stone(0xbfa36a), GOLD = stone(0xe7b416);
  return make(cx, cz, W, W, H, ground, (i, j, k) => {
    if (j < 0) return 0;
    const step = j; // one block in per layer
    if (i < 2 + step || k < 2 + step || i >= W - 2 - step || k >= W - 2 - step) return 0;
    // a hidden chamber in the middle and a low tunnel to it from the north side
    const c = W / 2;
    if (Math.abs(i - c) < 6 && Math.abs(k - c) < 6 && j >= 1 && j < 8) return 0;
    if (Math.abs(i - c) < 2 && k < c && j >= 1 && j < 5) return 0;
    if (Math.abs(i - c) < 2 && Math.abs(k - c) < 2 && j === 0) return GOLD;
    return [A, B, A, C][(j >> 2) & 3];
  }, () => true);
}

export function colosseum(cx, cz, ground) {
  const W = 120, D = 96, H = 40;
  const T = stone(0xd8cdb6), T2 = stone(0xc4b89e), SAND = stone(0xe2cf95);
  const rx = W / 2 - 2, rz = D / 2 - 2;
  return make(cx, cz, W, D, H, ground, (i, j, k) => {
    if (j < 0) return 0;
    const x = (i - W / 2) / rx, z = (k - D / 2) / rz, e = Math.hypot(x, z);
    if (e > 1) return 0;
    if (e < 0.7) return j === 0 ? SAND : 0; // the arena
    // three tiers of arches round the outside, stepped seating inside
    const ring = e > 0.9;
    if (ring) {
      const tier = Math.floor(j / 12), lj = j % 12, a = Math.atan2(z, x);
      const arch = Math.floor((a + Math.PI) / (Math.PI * 2) * 64) % 2 === 0 && lj >= 2 && lj < 9 && tier < 3;
      if (j >= 36) return (Math.floor((a + Math.PI) * 20) % 2) ? T2 : 0;
      return arch ? 0 : (lj === 11 ? T2 : T);
    }
    // seats: higher the further out
    const top = Math.round((e - 0.7) / 0.2 * 30);
    return j <= top ? (j % 2 ? T : T2) : 0;
  }, (i, k) => Math.hypot((i - W / 2) / rx, (k - D / 2) / rz) <= 1);
}

export function lighthouse(cx, cz, ground) {
  const W = 16, H = 72;
  const RED = stone(0xd62828), WHITE = stone(0xf2f2ee), GL = glassOf(0xbfe9ff), LAMP = stone(0xfff3b0), DARK = stone(0x2e3236);
  return make(cx, cz, W, W, H, ground, (i, j, k) => {
    if (j < 0) return 0;
    const x = i - W / 2 + 0.5, z = k - W / 2 + 0.5, r = Math.max(Math.abs(x), Math.abs(z)) * 0.8 + Math.min(Math.abs(x), Math.abs(z)) * 0.4; // an octagon
    const R = 6.4 - j * 0.03;
    if (j < 56) { if (r > R) return 0; return r > R - 1.2 ? ((j >> 3) % 2 ? RED : WHITE) : (j % 14 === 0 ? WHITE : 0); }
    if (j < 58) return r < 7.2 ? DARK : 0;           // gallery
    if (j < 64) { if (r > 5) return 0; return r > 4 ? GL : (r < 2.2 ? LAMP : 0); } // lantern room
    if (j < 68) return r < 5 - (j - 64) ? RED : 0;    // cap
    return 0;
  }, (i, k) => Math.max(Math.abs(i - W / 2), Math.abs(k - W / 2)) < 7);
}

// a long wall along x from x0 to x1 at z, following the ground, with towers every 40 m and a gate at gateX
export function greatWall(x0, x1, z, gateX, ground) {
  const L = Math.round((x1 - x0) / BV), D = 10, H = 30;
  const S = stone(0x8f8a7e), S2 = stone(0x7a756a);
  const cx = (x0 + x1) / 2;
  // this one can't use make(): the ground under it rises and falls a lot, so each column has its own base
  let lo = 1e9;
  for (let t = 0; t <= 40; t++) lo = Math.min(lo, ground(x0 + (x1 - x0) * t / 40, z));
  let hi = -1e9;
  for (let t = 0; t <= 40; t++) hi = Math.max(hi, ground(x0 + (x1 - x0) * t / 40, z));
  const y0 = Math.floor(lo / BV) * BV - BV * 2;
  const NY = Math.ceil((hi - y0) / BV) + H + 4;
  const b = newBuilding(cx - L * BV / 2, y0, z - D * BV / 2, L, NY, D);
  for (let i = 1; i < L - 1; i++) {
    const x = b.x0 + (i + 0.5) * BV;
    const gl = Math.max(1, Math.round((ground(x, z) - y0) / BV));
    const towerHere = Math.abs(((x - x0) % 40 + 40) % 40 - 20) < 3;
    const gate = Math.abs(x - gateX) < 3;
    for (let k = 1; k < D - 1; k++) for (let j = 0; j < NY; j++) {
      const lj = j - gl;
      let v = 0;
      if (lj < 0) v = FOUND;
      else if (gate && lj < 12 && k > 1 && k < D - 2) v = 0;
      else if (towerHere) v = lj < 24 ? (lj % 8 === 7 ? S2 : S) : lj < 26 && (i + k) % 2 === 0 ? S : 0;
      else v = lj < 16 ? (lj % 8 === 7 ? S2 : S) : lj < 18 && (k === 1 || k === D - 2) && i % 2 === 0 ? S : 0;
      if (v) b.vox[(j * D + k) * L + i] = v;
    }
  }
  return finishBuilding(b);
}

export function millTower(cx, cz, ground) {
  const W = 10, H = 30;
  const S = stone(0xe8e2d4), R = stone(0x7d3b2c), DOOR = wood(0x6e4626);
  return make(cx, cz, W, W, H, ground, (i, j, k) => {
    if (j < 0) return 0;
    const shell = i < 3 || k < 3 || i > 6 || k > 6;
    if (j < 22) { if (!shell) return 0; if (k > 6 && i >= 4 && i <= 5 && j < 4) return 0; return k > 6 && i >= 4 && i <= 5 && j === 4 ? DOOR : S; }
    if (j < 26) { const r = j - 22; return (i >= 1 + r && k >= 1 + r && i <= 8 - r && k <= 8 - r) ? R : 0; }
    return 0;
  }, (i, k) => i >= 2 && k >= 2 && i <= 7 && k <= 7);
}

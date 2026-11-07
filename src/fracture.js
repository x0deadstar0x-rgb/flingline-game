// How things break. Every break is different: the object is cut along random lines that
// cluster around where it was hit, and harder hits make more, smaller pieces.
//  splinter (wood):      long strips along the grain, pointed ends, sometimes snaps across
//  crumble (stone...):   uneven chunks with knocked-off corners
//  shatter (glass):      thin pointed shards
//  ice:                  chunky shards
import * as THREE from 'three';

const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

export function styleFor(mat) {
  switch (mat) {
    case 'wood': case 'cactus': case 'hay': return 'splinter';
    case 'glass': case 'crystal': return 'shatter';
    case 'ice': return 'ice';
    default: return 'crumble';
  }
}

// Cut a box of size s (centred on 0) into pieces. imp = hit point in the box's own coordinates.
// energy ~0.2 (a knock) .. 2+ (a blast). Returns [{ c: centre[3], s: size[3] }].
export function cutBox(s, imp, style, energy, maxPieces, minSize) {
  const boxes = [{ min: [-s[0] / 2, -s[1] / 2, -s[2] / 2], max: [s[0] / 2, s[1] / 2, s[2] / 2], done: false }];
  const grain = s.indexOf(Math.max(...s));
  let target = Math.round(2 + energy * (style === 'splinter' ? 3.5 : 4.5) + Math.random() * 2.5);
  if (style === 'shatter') target += 2;
  target = clamp(target, 2, maxPieces);
  for (let guard = 0; boxes.length < target && guard < 80; guard++) {
    // the next box to cut: big ones near the hit first (with some randomness)
    let best = -1, bw = -1;
    for (let i = 0; i < boxes.length; i++) {
      const b = boxes[i];
      if (b.done) continue;
      const cx = (b.min[0] + b.max[0]) / 2, cy = (b.min[1] + b.max[1]) / 2, cz = (b.min[2] + b.max[2]) / 2;
      const vol = (b.max[0] - b.min[0]) * (b.max[1] - b.min[1]) * (b.max[2] - b.min[2]);
      const d = Math.hypot(cx - imp[0], cy - imp[1], cz - imp[2]);
      const w = vol * (1.2 / (0.25 + d)) * rnd(0.5, 1.5);
      if (w > bw) { bw = w; best = i; }
    }
    if (best < 0) break;
    const b = boxes[best];
    const dims = [b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]];
    let axis;
    if (style === 'splinter') {
      // mostly along the grain (long strips); now and then it snaps across near the hit
      if (Math.random() < 0.25 && dims[grain] > minSize * 2.5) axis = grain;
      else { const o = [0, 1, 2].filter((a) => a !== grain); axis = dims[o[0]] >= dims[o[1]] ? (Math.random() < 0.75 ? o[0] : o[1]) : (Math.random() < 0.75 ? o[1] : o[0]); }
    } else {
      // any direction, more likely across the bigger sides
      const t = dims[0] + dims[1] + dims[2];
      const r = Math.random() * t;
      axis = r < dims[0] ? 0 : r < dims[0] + dims[1] ? 1 : 2;
    }
    if (dims[axis] < minSize * 2) {
      axis = dims.indexOf(Math.max(...dims));
      if (dims[axis] < minSize * 2) { b.done = true; continue; }
    }
    const lo = b.min[axis] + minSize, hi = b.max[axis] - minSize;
    let cut;
    if (style === 'splinter' && axis !== grain) cut = rnd(lo, hi);
    else cut = clamp(imp[axis] + (Math.random() - 0.5) * dims[axis] * 0.7, lo, hi);
    const a = { min: [...b.min], max: [...b.max], done: false }, c = { min: [...b.min], max: [...b.max], done: false };
    a.max[axis] = cut; c.min[axis] = cut;
    boxes.splice(best, 1, a, c);
  }
  return boxes.map((b) => ({
    c: [(b.min[0] + b.max[0]) / 2, (b.min[1] + b.max[1]) / 2, (b.min[2] + b.max[2]) / 2],
    s: [b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]],
  }));
}

// A clean box for one piece, textured so the picture carries on exactly where it was on the
// whole object (planks / bricks line up across pieces). Faces that were inside the object get
// material 1 (the raw broken inside: bare wood, stone...) instead of the outside texture.
//  size: piece size, off: piece centre in the original object's coordinates, S: original size
export function pieceGeometry(size, off, S) {
  const g = new THREE.BoxGeometry(size[0], size[1], size[2]);
  const pos = g.attributes.position, uv = g.attributes.uv;
  // BoxGeometry faces in order +x, -x, +y, -y, +z, -z (4 vertices each); each maps 0..1 across the face:
  // [u axis, u sign, plane width, v axis, v sign, plane height]
  const F = [[2, -1, S[2], 1, -1, S[1]], [2, 1, S[2], 1, -1, S[1]], [0, 1, S[0], 2, 1, S[2]], [0, 1, S[0], 2, -1, S[2]], [0, 1, S[0], 1, -1, S[1]], [0, -1, S[0], 1, -1, S[1]]];
  const P = [0, 0, 0];
  for (let f = 0; f < 6; f++) {
    const [ua, us, uw, va, vs, vh] = F[f];
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      P[0] = pos.getX(i) + off[0]; P[1] = pos.getY(i) + off[1]; P[2] = pos.getZ(i) + off[2];
      uv.setXY(i, (P[ua] * us + uw / 2) / uw, 1 - (P[va] * vs + vh / 2) / vh);
    }
  }
  // which faces are on the outside of the original object
  g.clearGroups();
  const axis = [0, 0, 1, 1, 2, 2], sgn = [1, -1, 1, -1, 1, -1];
  for (let f = 0; f < 6; f++) {
    const a = axis[f];
    const face = off[a] + sgn[f] * size[a] / 2;
    const outside = Math.abs(Math.abs(face) - S[a] / 2) < 0.02;
    g.addGroup(f * 6, 6, outside ? 0 : 1);
  }
  g.computeBoundingSphere();
  return g;
}

// colour of the freshly broken inside of a material
export const INSIDE = { wood: 0xd9b07a, cactus: 0x8fca72, hay: 0xe0c060, stone: 0x8e9298, rock: 0x7d8288, brick: 0xc0704f, concrete: 0xa3a39c, ice: 0xc8f2ff, glass: 0xd8f3ff, crystal: 0x9ff7ff, appliance: 0x8a9096, car: 0x5a5f66 };

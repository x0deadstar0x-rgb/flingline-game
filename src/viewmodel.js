// First-person view: your hands and a detailed low-poly model for every tool.
// Drawn in its own pass on top of the world, so it never sinks into walls.
// Animations: equip (slides up), recoil kick, muzzle flash, minigun spin, bat swing,
// and your left hand fires the Fling Line from a wrist gadget.
import * as THREE from 'three';
import { G } from './core.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

let scene = null, cam = null, hemi = null, sun = null;
let root = null;          // everything in view space
let model = null;         // current tool model (group), origin = right-hand grip
let current = null;       // tool id
let rightArm = null, leftArm = null, gadget = null, gadgetTip = null;
let flash = null, flashT = 0;
let equipT = 1, kick = 0, kickRot = 0;
const skin = { skin: 0xf1c27d, shirt: 0x1f8ef1 };

// ------------------------------------------------------------- tiny modelling kit
const geoCache = new Map(), matCache = new Map();
function mat(color, o = {}) {
  const k = color + '|' + (o.r ?? 0.6) + '|' + (o.m ?? 0.15) + '|' + (o.e ?? 0) + '|' + (o.ei ?? 1) + '|' + (o.t ?? 1);
  if (!matCache.has(k)) {
    const m = new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: o.r ?? 0.6, metalness: o.m ?? 0.15, emissive: o.e ?? 0x000000, emissiveIntensity: o.ei ?? 1, fog: false });
    if (o.t !== undefined && o.t < 1) { m.transparent = true; m.opacity = o.t; }
    matCache.set(k, m);
  }
  return matCache.get(k);
}
function geo(key, make) { if (!geoCache.has(key)) geoCache.set(key, make()); return geoCache.get(key); }
function add(p, g, m, x, y, z, rx = 0, ry = 0, rz = 0) {
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set(x, y, z); mesh.rotation.set(rx, ry, rz);
  mesh.frustumCulled = false;
  p.add(mesh);
  return mesh;
}
// box w x h x d
const bx = (p, w, h, d, m, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => add(p, geo(`b${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d)), m, x, y, z, rx, ry, rz);
// cylinder lying along the view direction (-z is the front, r1 = front radius)
const cz = (p, r1, r2, len, m, x = 0, y = 0, z = 0, seg = 10) => { const c = add(p, geo(`c${r1},${r2},${len},${seg}`, () => new THREE.CylinderGeometry(r1, r2, len, seg)), m, x, y, z); c.rotation.x = -Math.PI / 2; return c; };
// upright cylinder
const cyv = (p, r1, r2, len, m, x = 0, y = 0, z = 0, seg = 10) => add(p, geo(`c${r1},${r2},${len},${seg}`, () => new THREE.CylinderGeometry(r1, r2, len, seg)), m, x, y, z);
const sp = (p, r, m, x = 0, y = 0, z = 0, d = 1) => add(p, geo(`s${r},${d}`, () => new THREE.IcosahedronGeometry(r, d)), m, x, y, z);
const tor = (p, r, t, m, x = 0, y = 0, z = 0, rx = 0, ry = 0) => add(p, geo(`t${r},${t}`, () => new THREE.TorusGeometry(r, t, 5, 14)), m, x, y, z, rx, ry);
// a point to fire from
function muzzle(p, x, y, z) { const o = new THREE.Object3D(); o.position.set(x, y, z); p.add(o); p.userData.muzzle = o; return o; }

// common materials
const C = {
  dark: () => mat(0x26292e, { r: 0.45, m: 0.6 }),
  steel: () => mat(0x8d949c, { r: 0.35, m: 0.8 }),
  black: () => mat(0x141518, { r: 0.5, m: 0.4 }),
  wood: () => mat(0x8a5a32, { r: 0.8, m: 0 }),
  brass: () => mat(0xc9a13b, { r: 0.35, m: 0.85 }),
  rubber: () => mat(0x1d1f22, { r: 0.9, m: 0 }),
  glow: (c, i = 1.4) => mat(c, { e: c, ei: i, r: 0.3, m: 0 }),
  paint: (c) => mat(c, { r: 0.5, m: 0.25 }),
};

// ------------------------------------------------------------- tool models
// Each returns a group whose origin is where the right hand grips it; the front is -z.
// userData: muzzle (Object3D), twoHanded, left (left-hand grip position), spin (Object3D to spin),
// kick (recoil strength), pos (where it sits on screen), glow (flickering part)
function pistolGrip(g, col = C.dark()) { bx(g, 0.04, 0.11, 0.055, col, 0, -0.05, 0.015, 0.25); bx(g, 0.012, 0.03, 0.04, C.black(), 0, -0.012, -0.035); }
function rayGun(color, accent, opts = {}) {
  const g = new THREE.Group();
  const body = C.paint(color), acc = C.paint(accent), glow = C.glow(opts.glow ?? accent, 1.6);
  pistolGrip(g, C.dark());
  bx(g, 0.055, 0.065, 0.2, body, 0, 0.035, -0.08);
  bx(g, 0.06, 0.02, 0.16, acc, 0, 0.075, -0.07);
  cz(g, 0.022, 0.028, 0.12, C.steel(), 0, 0.035, -0.23);
  for (let i = 0; i < 3; i++) tor(g, 0.034, 0.008, glow, 0, 0.035, -0.19 - i * 0.03);
  if (opts.dish) { const d = cz(g, 0.07, 0.025, 0.05, acc, 0, 0.035, -0.31, 12); d.userData.dish = true; }
  if (opts.tank) cyv(g, 0.025, 0.025, 0.07, mat(opts.tank, { e: opts.tank, ei: 0.5 }), 0, 0.1, -0.06, 8);
  sp(g, 0.015, glow, 0, 0.035, opts.dish ? -0.34 : -0.3, 0);
  muzzle(g, 0, 0.035, opts.dish ? -0.35 : -0.31);
  g.userData.glow = glow;
  g.userData.kick = 0.5;
  return g;
}

const MODELS = {
  hands() {
    const g = new THREE.Group();
    g.userData.empty = true;
    muzzle(g, -0.05, 0.02, -0.25);
    return g;
  },
  blaster() {
    const g = new THREE.Group();
    pistolGrip(g);
    bx(g, 0.05, 0.06, 0.24, C.paint(0xffd23f), 0, 0.03, -0.08);
    bx(g, 0.052, 0.025, 0.2, C.dark(), 0, 0.072, -0.08);
    bx(g, 0.012, 0.018, 0.02, C.black(), 0, 0.093, -0.16);
    cz(g, 0.016, 0.02, 0.1, C.steel(), 0, 0.035, -0.24);
    bx(g, 0.03, 0.025, 0.06, C.glow(0xffe066, 1.8), 0.028, 0.03, -0.06);
    for (let i = 0; i < 3; i++) bx(g, 0.054, 0.006, 0.012, C.black(), 0, 0.045, -0.13 - i * 0.025);
    muzzle(g, 0, 0.035, -0.3);
    g.userData.kick = 0.55;
    return g;
  },
  shotgun() {
    const g = new THREE.Group();
    pistolGrip(g, C.wood());
    bx(g, 0.05, 0.06, 0.18, C.dark(), 0, 0.03, -0.06);            // receiver
    cz(g, 0.017, 0.017, 0.52, C.steel(), 0, 0.045, -0.4, 8);      // barrel
    cz(g, 0.014, 0.014, 0.46, C.dark(), 0, 0.012, -0.37, 8);      // tube magazine
    bx(g, 0.05, 0.045, 0.14, C.wood(), 0, 0.012, -0.36);          // pump
    for (let i = 0; i < 4; i++) bx(g, 0.052, 0.005, 0.008, C.black(), 0, 0.012, -0.31 - i * 0.03);
    bx(g, 0.045, 0.07, 0.2, C.wood(), 0, -0.01, 0.13, 0.2);       // stock
    bx(g, 0.012, 0.012, 0.012, C.brass(), 0, 0.075, -0.64);        // bead sight
    muzzle(g, 0, 0.045, -0.67);
    g.userData.twoHanded = true; g.userData.left = [-0.005, -0.015, -0.36]; g.userData.kick = 1.6;
    g.userData.pos = [0.2, -0.2, -0.4];
    return g;
  },
  minigun() {
    const g = new THREE.Group();
    bx(g, 0.12, 0.12, 0.22, C.dark(), 0, 0.02, -0.08);
    bx(g, 0.03, 0.1, 0.03, C.black(), 0, 0.1, -0.02);             // top handle post
    bx(g, 0.03, 0.03, 0.16, C.black(), 0, 0.145, -0.07);           // top handle
    bx(g, 0.07, 0.09, 0.12, mat(0x3a4a2a, { r: 0.7 }), 0.1, -0.02, -0.06); // ammo box
    const spin = new THREE.Group(); spin.position.set(0, 0.02, -0.22); g.add(spin);
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; cz(spin, 0.011, 0.011, 0.42, C.steel(), Math.cos(a) * 0.035, Math.sin(a) * 0.035, -0.2, 6); }
    cz(spin, 0.05, 0.05, 0.03, C.dark(), 0, 0, -0.38, 10);
    cz(spin, 0.05, 0.05, 0.03, C.dark(), 0, 0, -0.06, 10);
    pistolGrip(g, C.black());
    muzzle(g, 0, 0.02, -0.66);
    bx(g, 0.03, 0.08, 0.03, C.black(), -0.075, -0.01, -0.12); // side handle
    g.userData.spin = spin; g.userData.twoHanded = true; g.userData.left = [-0.09, -0.01, -0.12]; g.userData.kick = 0.25;
    g.userData.pos = [0.22, -0.24, -0.42];
    return g;
  },
  sniper() { // railgun
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    bx(g, 0.06, 0.075, 0.26, C.paint(0x2c3e50), 0, 0.035, -0.1);
    for (const x of [-0.022, 0.022]) bx(g, 0.012, 0.02, 0.5, C.steel(), x, 0.04, -0.45);
    const glow = C.glow(0x9ad9ff, 2);
    for (let i = 0; i < 6; i++) tor(g, 0.038, 0.007, glow, 0, 0.04, -0.27 - i * 0.07);
    cz(g, 0.022, 0.022, 0.16, C.black(), 0, 0.105, -0.1, 10);   // scope
    cz(g, 0.024, 0.024, 0.01, mat(0x6ad2ff, { e: 0x2a7fbf, ei: 0.6, r: 0.1 }), 0, 0.105, -0.185, 10);
    bx(g, 0.05, 0.06, 0.2, C.dark(), 0, 0.0, 0.14, 0.1);
    muzzle(g, 0, 0.04, -0.72);
    g.userData.twoHanded = true; g.userData.left = [0, 0.0, -0.3]; g.userData.kick = 2.2; g.userData.glow = glow;
    g.userData.pos = [0.2, -0.2, -0.42];
    return g;
  },
  lightning() {
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    bx(g, 0.06, 0.07, 0.18, C.paint(0x34495e), 0, 0.035, -0.07);
    const copper = mat(0xb87333, { r: 0.35, m: 0.85 });
    for (let i = 0; i < 5; i++) tor(g, 0.03 - i * 0.003, 0.009, copper, 0, 0.035, -0.18 - i * 0.03);
    cz(g, 0.01, 0.01, 0.17, C.steel(), 0, 0.035, -0.24, 6);
    const glow = C.glow(0xa8d8ff, 2.2);
    sp(g, 0.035, glow, 0, 0.035, -0.34, 1);
    muzzle(g, 0, 0.035, -0.36);
    g.userData.glow = glow; g.userData.kick = 0.7;
    return g;
  },
  flamer() {
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    cz(g, 0.03, 0.035, 0.4, C.dark(), 0, 0.04, -0.2, 10);
    cz(g, 0.04, 0.03, 0.06, C.steel(), 0, 0.04, -0.42, 10);
    cyv(g, 0.045, 0.045, 0.2, C.paint(0xc0392b), 0, -0.04, -0.2, 10).rotation.x = Math.PI / 2;
    bx(g, 0.02, 0.05, 0.02, C.steel(), 0, 0.0, -0.32);
    const pilot = sp(g, 0.012, C.glow(0x6ab8ff, 2.5), 0, 0.005, -0.45, 0);
    muzzle(g, 0, 0.04, -0.46);
    g.userData.twoHanded = true; g.userData.left = [0, -0.04, -0.25]; g.userData.pilot = pilot; g.userData.kick = 0.1;
    g.userData.pos = [0.22, -0.22, -0.4];
    return g;
  },
  cannon() {
    const g = new THREE.Group();
    pistolGrip(g, C.wood());
    cz(g, 0.07, 0.06, 0.5, C.black(), 0, 0.06, -0.25, 12);
    tor(g, 0.072, 0.012, C.brass(), 0, 0.06, -0.49);
    tor(g, 0.065, 0.012, C.brass(), 0, 0.06, -0.1);
    bx(g, 0.06, 0.06, 0.22, C.wood(), 0, -0.01, 0.1, 0.15);
    muzzle(g, 0, 0.06, -0.52);
    g.userData.twoHanded = true; g.userData.left = [0, 0.0, -0.3]; g.userData.kick = 2.5;
    g.userData.pos = [0.2, -0.24, -0.42];
    return g;
  },
  bat() {
    const g = new THREE.Group();
    const b = new THREE.Group(); b.rotation.set(0.95, 0.15, -0.35); g.add(b);
    cyv(b, 0.02, 0.014, 0.25, C.wood(), 0, 0.08, 0, 8);
    cyv(b, 0.042, 0.02, 0.45, C.wood(), 0, 0.42, 0, 10);
    cyv(b, 0.022, 0.022, 0.05, C.rubber(), 0, 0.0, 0, 8);
    muzzle(g, 0, 0.3, -0.3);
    g.userData.kick = 0; g.userData.bat = b;
    return g;
  },
  tnt() {
    const g = new THREE.Group();
    bx(g, 0.07, 0.16, 0.07, C.paint(0xd42a1e), 0, 0.06, -0.03);
    bx(g, 0.072, 0.03, 0.072, C.paint(0xf1e3c6), 0, 0.06, -0.03);
    cyv(g, 0.004, 0.004, 0.05, C.dark(), 0, 0.16, -0.03, 5);
    const spark = sp(g, 0.012, C.glow(0xffd04a, 3), 0, 0.19, -0.03, 0);
    muzzle(g, 0, 0.1, -0.1);
    g.userData.pilot = spark; g.userData.kick = 0.6; g.userData.thrown = true;
    return g;
  },
  grenade() {
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    cz(g, 0.035, 0.035, 0.3, mat(0x35501f, { r: 0.7 }), 0, 0.05, -0.18, 10);
    cz(g, 0.06, 0.06, 0.09, C.dark(), 0, 0.03, -0.06, 6); // revolving drum
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; cz(g, 0.012, 0.012, 0.092, C.brass(), Math.cos(a) * 0.04, 0.03 + Math.sin(a) * 0.04, -0.06, 6); }
    bx(g, 0.04, 0.05, 0.16, C.dark(), 0, 0.0, 0.11, 0.2);
    muzzle(g, 0, 0.05, -0.34);
    g.userData.twoHanded = true; g.userData.left = [0, 0.0, -0.22]; g.userData.kick = 1.2;
    return g;
  },
  rocket() {
    const g = new THREE.Group();
    cz(g, 0.065, 0.065, 0.95, mat(0x556b2f, { r: 0.75 }), 0, 0.09, -0.15, 12);
    cz(g, 0.072, 0.072, 0.05, C.dark(), 0, 0.09, -0.62, 12);
    cz(g, 0.072, 0.072, 0.05, C.dark(), 0, 0.09, 0.3, 12);
    sp(g, 0.05, C.paint(0xd42a1e), 0, 0.09, -0.63, 1); // warhead peeking out
    bx(g, 0.025, 0.07, 0.1, C.black(), -0.07, 0.13, -0.15); // sight
    bx(g, 0.03, 0.03, 0.03, mat(0xff4444, { e: 0xff2222, ei: 1.2 }), -0.07, 0.17, -0.18);
    pistolGrip(g, C.black());
    bx(g, 0.035, 0.08, 0.04, C.black(), 0, 0.0, -0.32);
    muzzle(g, 0, 0.09, -0.66);
    g.userData.twoHanded = true; g.userData.left = [0, -0.02, -0.32]; g.userData.kick = 1.8;
    g.userData.pos = [0.2, -0.17, -0.38];
    return g;
  },
  sticky() {
    const g = new THREE.Group();
    sp(g, 0.06, mat(0xff2255, { r: 0.25 }), 0, 0.05, -0.05, 1);
    bx(g, 0.04, 0.02, 0.04, C.dark(), 0, 0.11, -0.05);
    sp(g, 0.01, C.glow(0xff3355, 3), 0, 0.125, -0.05, 0);
    muzzle(g, 0, 0.06, -0.12);
    g.userData.kick = 0.5; g.userData.thrown = true;
    return g;
  },
  superhole() { const g = MODELS.blackhole(); g.scale.setScalar(1.15); return g; },
  blackhole() {
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    bx(g, 0.06, 0.06, 0.14, C.paint(0x2b1846), 0, 0.03, -0.06);
    const glow = C.glow(0x9d4edd, 2.4);
    sp(g, 0.045, mat(0x05010a, { r: 0.2 }), 0, 0.04, -0.22, 1);
    const ring = tor(g, 0.07, 0.008, glow, 0, 0.04, -0.22, Math.PI / 2.4, 0.3);
    tor(g, 0.085, 0.005, C.glow(0xc77dff, 2), 0, 0.04, -0.22, 0.4, 1.2);
    muzzle(g, 0, 0.04, -0.28);
    g.userData.spin = ring; g.userData.kick = 0.8;
    return g;
  },
  firebomb() {
    const g = new THREE.Group();
    cyv(g, 0.035, 0.04, 0.12, mat(0x2e7d32, { r: 0.1, t: 0.85 }), 0, 0.05, -0.04, 8);
    cyv(g, 0.012, 0.02, 0.06, mat(0x2e7d32, { r: 0.1, t: 0.85 }), 0, 0.14, -0.04, 8);
    bx(g, 0.03, 0.05, 0.02, mat(0xe8dcc0, { r: 0.9 }), 0, 0.19, -0.04);
    const fl = sp(g, 0.018, C.glow(0xff8a1c, 3), 0, 0.225, -0.04, 0);
    muzzle(g, 0, 0.1, -0.1);
    g.userData.pilot = fl; g.userData.kick = 0.5; g.userData.thrown = true;
    return g;
  },
  meteor() {
    const g = new THREE.Group();
    bx(g, 0.06, 0.13, 0.03, C.dark(), 0, 0.03, -0.04);
    bx(g, 0.045, 0.06, 0.005, mat(0x111111, { e: 0xff5e1a, ei: 0.5, r: 0.2 }), 0, 0.06, -0.058);
    sp(g, 0.012, C.glow(0xff3300, 3), 0, -0.01, -0.06, 0);
    cyv(g, 0.006, 0.006, 0.08, C.steel(), 0.02, 0.13, -0.04, 5);
    muzzle(g, 0, 0.06, -0.12);
    g.userData.kick = 0.3;
    return g;
  },
  airstrike() {
    const g = new THREE.Group();
    bx(g, 0.07, 0.12, 0.04, mat(0x556b2f, { r: 0.7 }), 0, 0.03, -0.04);
    bx(g, 0.05, 0.03, 0.006, mat(0x0f2a0f, { e: 0x2aff6a, ei: 0.6 }), 0, 0.06, -0.062);
    cyv(g, 0.004, 0.004, 0.2, C.black(), 0.025, 0.18, -0.04, 5);
    for (let i = 0; i < 3; i++) bx(g, 0.012, 0.012, 0.006, C.black(), -0.02 + i * 0.02, 0.0, -0.062);
    muzzle(g, 0, 0.06, -0.12);
    g.userData.kick = 0.3;
    return g;
  },
  drill() {
    const g = new THREE.Group();
    bx(g, 0.1, 0.11, 0.2, mat(0xffb703, { r: 0.5 }), 0, 0.03, -0.06);
    bx(g, 0.06, 0.035, 0.12, C.black(), 0, 0.1, -0.05);
    bx(g, 0.07, 0.05, 0.05, C.dark(), 0, 0.03, 0.06); // battery
    pistolGrip(g, C.black());
    const spin = new THREE.Group(); spin.position.set(0, 0.03, -0.17); g.add(spin);
    cz(spin, 0.036, 0.036, 0.05, C.steel(), 0, 0, 0, 8);
    cz(spin, 0.003, 0.03, 0.22, C.steel(), 0, 0, -0.13, 6);
    for (let i = 0; i < 3; i++) tor(spin, 0.026 - i * 0.006, 0.004, C.steel(), 0, 0, -0.07 - i * 0.05);
    muzzle(g, 0, 0.03, -0.3);
    g.userData.spin = spin; g.userData.kick = 0.15;
    return g;
  },
  blocks() {
    const g = new THREE.Group();
    const block = bx(g, 0.15, 0.15, 0.15, new THREE.MeshStandardMaterial({ color: 0x8c9096, roughness: 0.9, flatShading: true }), 0, 0.03, -0.1, 0.3, 0.4, 0);
    g.userData.block = block; // takes the colour of the blocks you're placing
    muzzle(g, 0, 0.03, -0.2);
    g.userData.kick = 0.2;
    return g;
  },
  nuke() {
    const g = new THREE.Group();
    bx(g, 0.16, 0.11, 0.05, C.black(), 0, 0.03, -0.06);
    bx(g, 0.1, 0.06, 0.006, C.paint(0xe2c21d), 0, 0.04, -0.088);
    sp(g, 0.012, C.black(), 0, 0.04, -0.092, 0);
    cyv(g, 0.022, 0.022, 0.015, mat(0xff1a1a, { e: 0xff0000, ei: 0.8 }), 0.05, 0.09, -0.06, 10); // the big red button
    muzzle(g, 0, 0.06, -0.12);
    g.userData.kick = 0.3; g.userData.pos = [0.16, -0.22, -0.4];
    return g;
  },
  fireworks() {
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    const cols = [0xe83f6f, 0x3a86ff, 0xffbe0b, 0x06d6a0];
    for (let i = 0; i < 4; i++) { const x = (i % 2 ? 0.025 : -0.025), y = 0.04 + (i > 1 ? 0.05 : 0); cz(g, 0.022, 0.022, 0.26, C.paint(cols[i]), x, y, -0.13, 8); }
    muzzle(g, 0, 0.065, -0.28);
    g.userData.twoHanded = true; g.userData.left = [0, -0.01, -0.18]; g.userData.kick = 0.9;
    return g;
  },
  push() {
    const g = new THREE.Group();
    bx(g, 0.1, 0.1, 0.12, mat(0x6c7a89, { r: 0.4, m: 0.7 }), 0, 0.02, 0.0);
    for (let i = 0; i < 4; i++) bx(g, 0.018, 0.018, 0.07, mat(0x6c7a89, { r: 0.4, m: 0.7 }), -0.035 + i * 0.023, 0.04, -0.09);
    const glow = C.glow(0xe0f7ff, 2.4);
    cyv(g, 0.035, 0.035, 0.01, glow, 0, -0.03, -0.02, 12);
    muzzle(g, 0, 0.0, -0.16);
    g.userData.glow = glow; g.userData.kick = 1.2; g.userData.glove = true;
    return g;
  },
  magnet() {
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    const red = C.paint(0xd62828), steel = C.steel();
    add(g, geo('mag', () => new THREE.TorusGeometry(0.07, 0.025, 6, 14, Math.PI)), red, 0, 0.06, -0.16, 0, 0, Math.PI);
    bx(g, 0.05, 0.05, 0.05, steel, -0.07, 0.06, -0.22);
    bx(g, 0.05, 0.05, 0.05, steel, 0.07, 0.06, -0.22);
    bx(g, 0.05, 0.12, 0.05, red, -0.07, 0.06, -0.15, Math.PI / 2);
    bx(g, 0.05, 0.12, 0.05, red, 0.07, 0.06, -0.15, Math.PI / 2);
    muzzle(g, 0, 0.06, -0.26);
    g.userData.kick = 0.2;
    return g;
  },
  grapple() {
    const g = rayGun(0x4a525c, 0xd0d6dc, { glow: 0xffffff });
    // the claw sticking out of the muzzle
    const steel = mat(0xd0d6dc, { r: 0.3, m: 0.85 });
    for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI * 2; const c = bx(g, 0.012, 0.012, 0.06, steel, Math.cos(a) * 0.022, 0.035 + Math.sin(a) * 0.022, -0.34); c.rotation.set(Math.sin(a) * 0.5, -Math.cos(a) * 0.5, 0); }
    cz(g, 0.012, 0.012, 0.05, steel, 0, 0.035, -0.31, 6);
    g.userData.kick = 0.6;
    return g;
  },
  freeze: () => rayGun(0x9fe8ff, 0x3f8fbf, { dish: true, glow: 0x7fe8ff, tank: 0xbff4ff }),
  antigrav: () => rayGun(0x5a189a, 0xc77dff, { glow: 0xe0aaff }),
  grow: () => rayGun(0x2d6a4f, 0x7cff5a, { dish: true, glow: 0x7cff5a }),
  shrink: () => rayGun(0x7a1f5c, 0xff6bd6, { dish: true, glow: 0xff6bd6 }),
  paint() {
    const g = rayGun(0xf4f4f4, 0x333333, { glow: 0xffbe0b });
    const cols = [0xe63946, 0xffbe0b, 0x3a86ff];
    for (let i = 0; i < 3; i++) cyv(g, 0.016, 0.016, 0.06, C.paint(cols[i]), -0.03 + i * 0.03, 0.12, -0.08, 8);
    return g;
  },
  teleport: () => rayGun(0x0b3c5d, 0x3bd1ff, { glow: 0x3bd1ff }),
  spawner() {
    const g = new THREE.Group();
    bx(g, 0.11, 0.16, 0.012, C.dark(), 0, 0.06, -0.06, -0.5);
    bx(g, 0.095, 0.13, 0.004, mat(0x0b2545, { e: 0x3a86ff, ei: 0.8, r: 0.2 }), 0, 0.063, -0.068, -0.5);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) bx(g, 0.022, 0.022, 0.004, C.glow([0x3a86ff, 0x8338ec, 0x06d6a0][(i + j) % 3], 1.2), -0.03 + i * 0.03, 0.035 + j * 0.035, -0.06 - (j * 0.035 - 0.035) * 0.55, -0.5);
    muzzle(g, 0, 0.12, -0.12);
    g.userData.kick = 0.2;
    return g;
  },
  eraser() {
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    cz(g, 0.012, 0.012, 0.14, C.steel(), 0, 0.03, -0.08, 6);
    bx(g, 0.09, 0.06, 0.07, mat(0xff8fab, { r: 0.85 }), 0, 0.03, -0.18);
    bx(g, 0.092, 0.025, 0.072, C.paint(0x3a86ff), 0, 0.055, -0.18);
    muzzle(g, 0, 0.03, -0.24);
    g.userData.kick = 0.4;
    return g;
  },
  clone() {
    const g = rayGun(0x1b4332, 0x06d6a0, { glow: 0x06d6a0 });
    for (let i = 0; i < 6; i++) { const a = i * 1.1; sp(g, 0.008, C.glow(i % 2 ? 0x06d6a0 : 0xffffff, 2), Math.cos(a) * 0.02, 0.11 + Math.sin(a) * 0.01, -0.03 - i * 0.025, 0); }
    return g;
  },
  rope() {
    const g = new THREE.Group();
    const rope = mat(0xe8dcc0, { r: 0.95 });
    for (let i = 0; i < 4; i++) tor(g, 0.055, 0.012, rope, 0, 0.05, -0.05 - i * 0.012, 0, 0);
    cz(g, 0.008, 0.008, 0.12, rope, 0.05, 0.05, -0.12, 5);
    muzzle(g, 0.05, 0.05, -0.19);
    g.userData.kick = 0.2;
    return g;
  },
  weld() {
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    cz(g, 0.022, 0.026, 0.2, C.paint(0xffa62b), 0, 0.03, -0.1, 8);
    cz(g, 0.008, 0.014, 0.1, C.steel(), 0, 0.03, -0.25, 6);
    const tip = sp(g, 0.01, C.glow(0x9fd8ff, 3), 0, 0.03, -0.3, 0);
    muzzle(g, 0, 0.03, -0.31);
    g.userData.pilot = tip; g.userData.kick = 0.2;
    return g;
  },
  balloon() {
    const g = new THREE.Group();
    pistolGrip(g, C.dark());
    cz(g, 0.03, 0.03, 0.14, C.paint(0x3a86ff), 0, 0.03, -0.07, 10);
    cz(g, 0.006, 0.01, 0.06, C.dark(), 0, 0.03, -0.17, 6);
    const b = sp(g, 0.05, mat(0xff3b3b, { r: 0.3 }), 0.0, 0.03, -0.24, 1);
    b.scale.set(1, 1, 1.3);
    muzzle(g, 0, 0.03, -0.3);
    g.userData.kick = 0.2;
    return g;
  },
  thruster() {
    const g = new THREE.Group();
    cz(g, 0.035, 0.04, 0.16, C.steel(), 0, 0.05, -0.05, 10);
    cz(g, 0.03, 0.045, 0.05, C.dark(), 0, 0.05, 0.05, 10);
    sp(g, 0.03, C.paint(0xff9f1c), 0, 0.05, -0.14, 1);
    const fl = sp(g, 0.02, C.glow(0xffb347, 2.5), 0, 0.05, 0.09, 0);
    muzzle(g, 0, 0.05, -0.16);
    g.userData.pilot = fl; g.userData.kick = 0.2;
    return g;
  },
};

// a fresh copy of a tool's model (used for the menu pictures)
export function toolModel(id) { const make = MODELS[id] || (() => rayGun(0x555555, 0xffffff)); return make(); }

// ------------------------------------------------------------- arms
function makeArm(side) {
  const g = new THREE.Group();
  const skinM = mat(skin.skin, { r: 0.8, m: 0 }), shirtM = mat(skin.shirt, { r: 0.85, m: 0 });
  // hand: palm + four fingers + thumb (fingers curl round the grip)
  const hand = new THREE.Group(); g.add(hand); g.userData.hand = hand;
  bx(hand, 0.065, 0.075, 0.075, skinM, 0, 0, 0.0);
  for (let i = 0; i < 4; i++) bx(hand, 0.016, 0.016, 0.03, skinM, -side * 0.04, 0.026 - i * 0.017, -0.012); // fingers wrapped round the grip
  bx(hand, 0.02, 0.02, 0.05, skinM, side * 0.03, 0.03, -0.03, 0, -side * 0.4, 0);
  // forearm with sleeve, aimed at the bottom corner of the screen
  const fore = new THREE.Group(); g.add(fore); g.userData.fore = fore;
  bx(fore, 0.07, 0.07, 0.2, skinM, 0, 0, 0.13);
  bx(fore, 0.085, 0.085, 0.3, shirtM, 0, 0, 0.36);
  bx(fore, 0.09, 0.09, 0.03, mat(0x111111, { r: 0.9 }), 0, 0, 0.23); // cuff
  return g;
}
// point the forearm from the hand towards `to` (view space)
const _a = new THREE.Vector3(), _q = new THREE.Quaternion(), Z = new THREE.Vector3(0, 0, 1);
function aimArm(arm, handPos, to) {
  arm.position.copy(handPos);
  _a.copy(to).sub(handPos).normalize();
  arm.userData.fore.quaternion.setFromUnitVectors(Z, _a);
}

// ------------------------------------------------------------- setup / update
export function initViewmodel(renderer) {
  scene = new THREE.Scene();
  // a soft studio environment so metal parts reflect light instead of looking black
  if (renderer) {
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.55;
    pm.dispose();
  }
  cam = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.01, 10);
  hemi = new THREE.HemisphereLight(0xcfe8ff, 0x6b5a3a, 1.1);
  sun = new THREE.DirectionalLight(0xfff1d6, 2.0);
  scene.add(hemi, sun, sun.target);
  root = new THREE.Group();
  root.scale.setScalar(1.18);
  scene.add(root);
  rightArm = makeArm(1); leftArm = makeArm(-1);
  root.add(rightArm, leftArm);
  // Fling Line gadget on the left wrist
  gadget = new THREE.Group();
  bx(gadget, 0.06, 0.04, 0.09, C.dark(), 0, 0.045, 0.05);
  cz(gadget, 0.014, 0.018, 0.07, C.steel(), 0, 0.05, -0.01, 8);
  gadget.userData.light = sp(gadget, 0.012, C.glow(0xffffff, 2), 0, 0.072, 0.05, 0);
  gadgetTip = new THREE.Object3D(); gadgetTip.position.set(0, 0.05, -0.06); gadget.add(gadgetTip);
  leftArm.userData.hand.add(gadget);
  // muzzle flash: a few crossed glowing planes
  flash = new THREE.Group();
  const fm = new THREE.MeshBasicMaterial({ color: 0xffd27a, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  for (let i = 0; i < 3; i++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.16), fm); p.rotation.set(0, (i * Math.PI) / 3, Math.PI / 4); flash.add(p); }
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.03, 0), new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false }));
  flash.add(core);
  flash.visible = false;
  root.add(flash);
  G.recoil = recoil;
}

export function setViewmodelSkin(s) {
  Object.assign(skin, s);
  if (!rightArm) return;
  // rebuild both arms in the new colours (the line gadget moves over)
  const p = rightArm.parent;
  leftArm.userData.hand.remove(gadget);
  p.remove(rightArm); p.remove(leftArm);
  rightArm = makeArm(1); leftArm = makeArm(-1);
  leftArm.userData.hand.add(gadget);
  p.add(rightArm, leftArm);
}

export function equipViewmodel(id) {
  if (!scene || id === current) return;
  current = id;
  if (model) root.remove(model);
  const make = MODELS[id] || (() => rayGun(0x555555, 0xffffff));
  model = make();
  root.add(model);
  equipT = 0;
}

// recoil kick (and a muzzle flash) when a tool fires
export function recoil(strength = 1, withFlash = true) {
  const k = (model && model.userData.kick !== undefined ? model.userData.kick : 0.6) * strength;
  kick = Math.min(1.5, kick + k * 0.5);
  kickRot = Math.min(1.2, kickRot + k * 0.35);
  if (withFlash && model && !model.userData.thrown && !model.userData.empty && k > 0.15) flashT = 0.05;
}

const _m = new THREE.Vector3(), _hp = new THREE.Vector3(), _lp = new THREE.Vector3(), _to = new THREE.Vector3();
export function updateViewmodel(dt, camera, player) {
  if (!scene) return;
  // follow the main camera's lens and lighting
  if (cam.fov !== camera.fov || cam.aspect !== camera.aspect) { cam.fov = camera.fov; cam.aspect = camera.aspect; cam.updateProjectionMatrix(); }
  if (G.hemi) { hemi.color.copy(G.hemi.color); hemi.groundColor.copy(G.hemi.groundColor); hemi.intensity = G.hemi.intensity; }
  if (G.sun) {
    sun.color.copy(G.sun.color); sun.intensity = G.sun.intensity * 0.9;
    _m.copy(G.sun.position).sub(G.sun.target.position).normalize();
    _q.copy(camera.quaternion).invert();
    sun.position.copy(_m.applyQuaternion(_q));
  }
  // animation state
  equipT = Math.min(1, equipT + dt * 4.5);
  const e = 1 - Math.pow(1 - equipT, 3);
  kick *= Math.exp(-dt * 14); kickRot *= Math.exp(-dt * 10);
  const swing = player.swing || 0;
  const ud = model ? model.userData : {};
  const base = ud.pos || [0.19, -0.2, -0.38];
  model.position.set(base[0], base[1] - (1 - e) * 0.35, base[2] + kick * 0.07);
  model.rotation.set(kickRot * 0.18 + (1 - e) * 0.7, 0, 0);
  if (ud.bat) {
    const s = swing > 0 ? Math.sin(swing * Math.PI) : 0;
    model.rotation.set(-s * 1.4 + (1 - e) * 0.7, s * 1.1, s * 0.6);
  }
  if (ud.block && G.blockColor !== undefined) ud.block.material.color.setHex(G.blockColor);
  if (ud.spin) ud.spin.rotation.z += dt * (5 + (G.toolSpin || 0) * 45);
  if (ud.pilot) ud.pilot.scale.setScalar(0.8 + Math.random() * 0.5);
  if (ud.glow) ud.glow.emissiveIntensity = 1.3 + Math.sin(G.time * 6) * 0.3 + kick;
  // right arm grips the model
  model.updateMatrix();
  _hp.set(0, -0.005, 0.015).applyMatrix4(model.matrix);
  rightArm.visible = true;
  if (ud.empty) _hp.set(0.2, -0.24 + (G.grab ? 0.03 : 0), -0.38);
  aimArm(rightArm, _hp, _to.set(0.42, -0.62, 0.15));
  rightArm.userData.hand.rotation.set(ud.glove ? 0 : 0.1, 0, 0);
  // left arm: on the foregrip of two-handed guns, raised when using the Fling Line
  const line = !!G.grab;
  if (ud.twoHanded && !line) {
    _lp.set(...ud.left).applyMatrix4(model.matrix);
    leftArm.visible = true;
    aimArm(leftArm, _lp, _to.set(-0.25, -0.6, 0.1));
    leftArm.userData.hand.rotation.set(0.3, 0, 0);
    gadget.visible = true;
  } else {
    const up = line ? 1 : ud.empty ? 0.55 : 0;
    leftArm.userData.lift = (leftArm.userData.lift || 0) + (up - (leftArm.userData.lift || 0)) * Math.min(1, dt * 12);
    const l = leftArm.userData.lift;
    leftArm.visible = l > 0.02;
    _lp.set(-0.2, -0.32 + l * 0.12, -0.42 + l * 0.04);
    aimArm(leftArm, _lp, _to.set(-0.4, -0.7, 0.2));
    leftArm.userData.hand.rotation.set(-0.2 * l, 0, 0);
    gadget.visible = leftArm.visible;
  }
  if (gadget.userData.light) gadget.userData.light.material = line ? C.glow(0xff4a4a, 3) : C.glow(0xffffff, 2);
  // muzzle flash
  if (flashT > 0) {
    flashT -= dt;
    const mz = ud.muzzle;
    if (mz) { mz.getWorldPosition(flash.position); flash.visible = true; flash.rotation.z = Math.random() * 6; flash.scale.setScalar(0.7 + Math.random() * 0.7); }
  } else flash.visible = false;
  // where shots / beams start in the world: the muzzle; the Fling Line starts at the wrist gadget
  root.updateMatrixWorld(true);
  camera.updateMatrixWorld();
  if (ud.muzzle) { ud.muzzle.getWorldPosition(_m); G.aim.hand.copy(_m.applyMatrix4(camera.matrixWorld)); }
  gadgetTip.getWorldPosition(_m);
  if (!leftArm.visible) _m.set(-0.25, -0.2, -0.5);
  G.aim.lineHand = (G.aim.lineHand || new THREE.Vector3()).copy(_m.applyMatrix4(camera.matrixWorld));
}

export function renderViewmodel(renderer) {
  if (!scene) return;
  const ac = renderer.autoClear;
  renderer.autoClear = false;
  renderer.clearDepth();
  renderer.render(scene, cam);
  renderer.autoClear = ac;
}

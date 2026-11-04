// Maps: Island, Flatlands, Hills, Sky Islands. Static world, pads, water, sky.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, rand, clamp, tv } from './core.js';
import { TEX } from './textures.js';
import { createEnt, buildPrefab, spawnItem, ITEMS, removeEnt, removeRope } from './items.js';
import { spawnDummy } from './dummy.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';

let mapGroup = null;
let mapBodies = [];
let water = null, waterBase = null;
let clouds = [];
let sky = null;
let rng = 1;
function srand(seed) { rng = seed; }
function r01() { rng = (rng * 16807) % 2147483647; return (rng - 1) / 2147483646; }
function rr(a, b) { return a + r01() * (b - a); }

// ------------------------------------------------------------- static helpers
const matCache = {};
function smat(color, tex, repeat = 1) {
  const k = color + '|' + tex + '|' + repeat;
  if (matCache[k]) return matCache[k];
  const o = { color, flatShading: true, roughness: 0.95 };
  if (tex) {
    const t = TEX[tex]().clone();
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeat, repeat);
    t.needsUpdate = true;
    o.map = t;
  }
  return (matCache[k] = new THREE.MeshStandardMaterial(o));
}

function addStatic(shape, pos, quat, mesh) {
  const b = new CANNON.Body({ mass: 0, material: G.mats.ground, collisionFilterGroup: GROUP.STATIC });
  b.addShape(shape);
  b.position.set(pos.x, pos.y, pos.z);
  if (quat) b.quaternion.set(quat.x, quat.y, quat.z, quat.w);
  G.world.addBody(b);
  mapBodies.push(b);
  if (mesh) {
    mesh.position.copy(pos);
    if (quat) mesh.quaternion.copy(quat);
    mapGroup.add(mesh);
  }
  return b;
}
function sbox(sx, sy, sz, x, y, z, color = 0x999999, tex = null, rot = null, repeat = 1) {
  const q = rot ? new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)) : null;
  const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), smat(color, tex, repeat));
  m.castShadow = true; m.receiveShadow = true;
  return addStatic(new CANNON.Box(new CANNON.Vec3(sx / 2, sy / 2, sz / 2)), new THREE.Vector3(x, y, z), q, m);
}
function scyl(r, h, x, y, z, color, tex = null, seg = 12) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), smat(color, tex));
  m.castShadow = true; m.receiveShadow = true;
  return addStatic(new CANNON.Cylinder(r, r, h, seg), new THREE.Vector3(x, y, z), null, m);
}
function deco(mesh, x, y, z) { mesh.position.set(x, y, z); mapGroup.add(mesh); return mesh; }

const leafCols = [0x3f8f3a, 0x4fa34a, 0x2f7a32, 0x5cb85c];
function tree(x, y, z, s = 1) {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * s, 0.32 * s, 2.2 * s, 6), smat(0x7a5230));
  trunk.castShadow = true;
  addStatic(new CANNON.Cylinder(0.3 * s, 0.3 * s, 2.2 * s, 6), new THREE.Vector3(x, y + 1.1 * s, z), null, trunk);
  const c = leafCols[(r01() * leafCols.length) | 0];
  for (let i = 0; i < 3; i++) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry((1.6 - i * 0.4) * s, 1.6 * s, 7), smat(c));
    cone.castShadow = true;
    cone.rotation.y = r01() * 3;
    deco(cone, x, y + (2.2 + i * 0.9) * s, z);
  }
  addStatic(new CANNON.Sphere(1.3 * s), new THREE.Vector3(x, y + 3 * s, z), null, null);
}
function rock(x, y, z, r = 1) {
  const m = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 0), smat(0x8a8f96));
  m.scale.set(1, rr(0.6, 0.9), 1); m.rotation.set(r01() * 3, r01() * 3, r01() * 3);
  m.castShadow = true; m.receiveShadow = true;
  addStatic(new CANNON.Sphere(r * 0.75), new THREE.Vector3(x, y, z), null, m);
}

// pads: jump pads (straight up) and launch pads (aimed)
const padGeo = new THREE.CylinderGeometry(1.4, 1.6, 0.25, 12);
function pad(x, y, z, vel, color = 0x39ff9c) {
  const m = new THREE.Mesh(padGeo, new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.5, flatShading: true }));
  m.receiveShadow = true;
  addStatic(new CANNON.Cylinder(1.4, 1.6, 0.25, 12), new THREE.Vector3(x, y + 0.12, z), null, m);
  const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.8, 4), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  const dir = vel.clone().normalize();
  arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  deco(arrow, x, y + 1.2, z);
  G.pads.push({ pos: new THREE.Vector3(x, y + 0.25, z), r: 1.6, vel, arrow, color });
}

function water1(level, size = 900) {
  const g = new THREE.PlaneGeometry(size, size, 70, 70);
  g.rotateX(-Math.PI / 2);
  water = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0x2a8fd6, transparent: true, opacity: 0.82, flatShading: true, roughness: 0.25, metalness: 0.1 }));
  water.position.y = level;
  water.receiveShadow = true;
  mapGroup.add(water);
  waterBase = Float32Array.from(g.attributes.position.array);
  G.waterY = level;
}

function skyDome(top, bottom) {
  const g = new THREE.SphereGeometry(800, 24, 12);
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(top) }, bottom: { value: new THREE.Color(bottom) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = clamp(vP.y*1.4+0.25,0.0,1.0); gl_FragColor = vec4(mix(bottom, top, h),1.0); }',
  });
  sky = new THREE.Mesh(g, m);
  sky.frustumCulled = false;
  mapGroup.add(sky);
}

function makeClouds(n, y, spread) {
  clouds = [];
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 1, transparent: true, opacity: 0.92 });
  for (let i = 0; i < n; i++) {
    const c = new THREE.Group();
    for (let j = 0; j < 4; j++) {
      const p = new THREE.Mesh(new THREE.IcosahedronGeometry(rr(3, 6), 0), mat);
      p.position.set(rr(-6, 6), rr(-1, 1.5), rr(-3, 3));
      p.scale.y = 0.55;
      c.add(p);
    }
    c.position.set(rr(-spread, spread), y + rr(-10, 15), rr(-spread, spread));
    c.userData.v = rr(0.5, 2);
    mapGroup.add(c);
    clouds.push(c);
  }
}

// keep random scenery out of the play areas
let zones = [];
function free(x, z, r = 2) { return zones.every(([zx, zz, zr]) => Math.hypot(x - zx, z - zz) > zr + r); }

function sleepy(fn) { const before = new Set(G.ents); fn(); for (const e of G.ents) if (!before.has(e)) e.body.sleep(); }
function put(id, x, y, z, o = {}) { return spawnItem(id, new THREE.Vector3(x, y, z), { onGround: true, ...o }); }
function crowd(n, cx, cz, r, y = 0, variants = ['normal']) {
  for (let i = 0; i < n; i++) spawnDummy(new THREE.Vector3(cx + rand(-r, r), y + 0.05, cz + rand(-r, r)), variants[i % variants.length]);
}
function pallets(x, y, z, n = 3) { for (let i = 0; i < n; i++) put('pallet', x + i * 2.0, y, z); }

// ------------------------------------------------------------- maps
function buildIsland() {
  srand(7);
  G.waterY = -1;
  // island block + beaches
  const S = 140;
  const ground = new THREE.Mesh(new THREE.BoxGeometry(S, 10, S, 1, 1, 1), [smat(0xe9d29a, 'sand', 12), smat(0xe9d29a, 'sand', 12), smat(0xffffff, 'grass', 14), smat(0xe9d29a, 'sand'), smat(0xe9d29a, 'sand', 12), smat(0xe9d29a, 'sand', 12)]);
  ground.receiveShadow = true;
  addStatic(new CANNON.Box(new CANNON.Vec3(S / 2, 5, S / 2)), new THREE.Vector3(0, -5, 0), null, ground);
  const beachA = Math.atan2(4, 14);
  for (const [x, z, ry] of [[S / 2 + 6.5, 0, 0], [-S / 2 - 6.5, 0, Math.PI], [0, S / 2 + 6.5, -Math.PI / 2], [0, -S / 2 - 6.5, Math.PI / 2]]) {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, -beachA, 'YXZ'));
    const m = new THREE.Mesh(new THREE.BoxGeometry(15, 2, S + 26), smat(0xe9d29a, 'sand', 8));
    m.receiveShadow = true;
    addStatic(new CANNON.Box(new CANNON.Vec3(7.5, 1, S / 2 + 13)), new THREE.Vector3(x, -2.9, z), q, m);
  }
  addStatic(new CANNON.Plane(), new THREE.Vector3(0, -14, 0), new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)), null);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), smat(0xc9b27a));
  floor.rotation.x = -Math.PI / 2; deco(floor, 0, -14, 0);
  water1(-1);
  zones = [[0, 34, 8], [-18, 10, 6], [24, -18, 9], [-26, -26, 6], [0, -34, 5], [-5, -8, 8], [14, 22, 10], [-34, 24, 7], [36, 32, 8], [44, -2, 8], [6, 14, 3], [-10, 30, 3]];

  sleepy(() => {
    buildPrefab('pyramid', new THREE.Vector3(-18, 0, 10), 0, false);
    // castle
    const cx = 24, cz = -18, n = 7;
    for (let l = 0; l < 3; l++) for (let i = 0; i < n; i++) for (const side of [0, 1, 2, 3]) {
      if (i === n - 1) continue;
      let x, z;
      const t = i - (n - 1) / 2;
      if (side === 0) { x = t; z = -(n - 1) / 2; } else if (side === 1) { x = (n - 1) / 2; z = t; } else if (side === 2) { x = -t; z = (n - 1) / 2; } else { x = -(n - 1) / 2; z = -t; }
      if (side === 2 && Math.abs(x) < 1 && l < 2) continue; // door
      createEnt(ITEMS.stone, new THREE.Vector3(cx + x * 1.01, 0.5 + l * 1.005, cz + z * 1.01), {});
    }
    for (const [x, z] of [[-3, -3], [3, -3], [3, 3], [-3, 3]]) for (let l = 3; l < 5; l++) createEnt(ITEMS.stone, new THREE.Vector3(cx + x * 1.01, 0.5 + l * 1.005, cz + z * 1.01), {});
    // glass tower
    for (let f = 0; f < 3; f++) buildPrefab('glassroom', new THREE.Vector3(-26, f * 2.315, -26), 0, false);
    buildPrefab('jenga', new THREE.Vector3(0, 0, -34), 0, false);
    // domino spiral
    for (let i = 0; i < 34; i++) {
      const a = i * 0.25, r = 2.5 + i * 0.17;
      createEnt(ITEMS.domino, new THREE.Vector3(-5 + Math.cos(a) * r, 0.6, -8 + Math.sin(a) * r), { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -a) });
    }
    buildPrefab('bowling', new THREE.Vector3(14, 0, 22), 0, false);
    // TNT bunker
    buildPrefab('tntstack', new THREE.Vector3(-34, 0, 24), 0, false);
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; put('barrel', -34 + Math.cos(a) * 3.2, 0, 24 + Math.sin(a) * 3.2); }
  });
  sbox(2.2, 0.1, 18, 14, 0.05, 18, 0xd9b77a, 'plank');
  for (const [x, z, w, d] of [[-34, 28.5, 9, 1], [-38.5, 24, 1, 9], [-29.5, 24, 1, 9]]) sbox(w, 2.5, d, x, 1.25, z, 0x8c9096, 'stone');
  // watchtower with ramp
  for (const [x, z] of [[33.5, 29.5], [38.5, 29.5], [33.5, 34.5], [38.5, 34.5]]) sbox(0.6, 8, 0.6, x, 4, z, 0x7a5230, 'log');
  sbox(6, 0.5, 6, 36, 8.2, 32, 0xb07a3e, 'plank');
  sbox(3, 0.4, 17, 36, 4.1, 43, 0xb07a3e, 'plank', [-0.5, 0, 0]);
  sleepy(() => { put('pallet', 35, 8.5, 31); put('pallet', 37, 8.5, 33.5); put('melon', 36, 8.5, 30); });
  // big launch ramp
  sbox(6, 0.6, 14, 44, 2.2, -2, 0x9aa4ae, 'metal', [0.32, 0, 0]);
  pad(6, 0, 14, new THREE.Vector3(0, 24, 0));
  pad(-10, 0, 30, new THREE.Vector3(14, 20, -24), 0xffb703);
  pad(28, 0, 6, new THREE.Vector3(0, 30, 0));
  // props
  sleepy(() => {
    pallets(-4, 0, 26, 4);
    put('car', 10, 0, 38, { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.4) });
    put('table', -12, 0, 40); put('melon', -12.4, 0.9, 40); put('pumpkin', -11.5, 0.9, 40.2);
    put('couch', -16, 0, 42); put('piano', 18, 0, 42); put('fridge', 21, 0, 42);
    for (let i = 0; i < 4; i++) put('beachball', 62 + rand(-3, 3), 0, rand(-20, 20));
    put('duck', 0, -0.5, 82); put('duck', 8, -0.5, 84);
    put('present', 2, 0, 20); put('crystal', -2, 0, 20);
    for (let i = 0; i < 5; i++) put('crate', 50 + rand(-4, 4), 0, 50 + rand(-4, 4));
    put('nuke', -55, 0, -55);
    buildPrefab('tower', new THREE.Vector3(-45, 0, -10), 0, false);
    buildPrefab('wall', new THREE.Vector3(-45, 0, 5), Math.PI / 2, false);
  });
  for (let i = 0; i < 70; i++) { const x = rr(-66, 66), z = rr(-66, 66); if (free(x, z, 3)) { tree(x, 0, z, rr(0.8, 1.4)); zones.push([x, z, 2]); } }
  for (let i = 0; i < 25; i++) { const x = rr(-66, 66), z = rr(-66, 66); if (free(x, z, 2)) rock(x, 0.2, z, rr(0.6, 1.6)); }
  crowd(9, 0, 5, 18); crowd(2, -24, -18, 3, 0, ['tiny']); crowd(1, 24, -18, 1.5, 0, ['big']); crowd(2, 36, 32, 1, 8.5);
}

function buildFlat() {
  srand(11);
  G.waterY = -1000;
  const S = 500;
  const g = new THREE.Mesh(new THREE.BoxGeometry(S, 2, S), smat(0xffffff, 'grass', 50));
  g.receiveShadow = true;
  addStatic(new CANNON.Box(new CANNON.Vec3(S / 2, 1, S / 2)), new THREE.Vector3(0, -1, 0), null, g);
  zones = [[0, 34, 8]];
  // stunt park: ramps of increasing steepness
  for (let i = 0; i < 4; i++) sbox(5, 0.5, 12, 30 + i * 9, 1.6 + i * 0.6, 10, [0x3a86ff, 0xff006e, 0xffbe0b, 0x8338ec][i], null, [0.22 + i * 0.1, 0, 0]);
  // half pipe
  sbox(20, 0.5, 6, 45, 1.5, -20, 0x9aa4ae, 'metal', [0, 0, 0], 2);
  sbox(20, 0.5, 6, 45, 3, -24.5, 0x9aa4ae, 'metal', [0.7, 0, 0], 2);
  sbox(20, 0.5, 6, 45, 3, -15.5, 0x9aa4ae, 'metal', [-0.7, 0, 0], 2);
  // stairs to nowhere
  for (let i = 0; i < 12; i++) sbox(4, 0.5, 1.2, -40, 0.25 + i * 0.5, -10 - i * 1.2, 0xd8cfc4, 'stone');
  sbox(4, 0.5, 4, -40, 6, -25.5, 0xd8cfc4, 'stone');
  // sky platforms with launch pads hopping between them
  const plats = [[0, 0, 10], [0, 16, -40], [22, 32, -70], [-18, 48, -100], [0, 64, -132]];
  for (let i = 1; i < plats.length; i++) {
    const [x, y, z] = plats[i];
    sbox(10, 1, 10, x, y - 0.5, z, 0xb07a3e, 'plank', null, 2);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(6, 8, 6), smat(0x8a8f96));
    cone.rotation.x = Math.PI; deco(cone, x, y - 5, z);
  }
  for (let i = 0; i < plats.length - 1; i++) {
    const [x, y, z] = plats[i], [nx, ny, nz] = plats[i + 1];
    const d = new THREE.Vector3(nx - x, 0, nz - z);
    const T = 2.2;
    const v = new THREE.Vector3(d.x / T, (ny - y + 0.5 * 9.82 * T * T) / T, d.z / T);
    pad(x + (i === 0 ? 0 : 2), y, z + (i === 0 ? 0 : 2), v, 0xffb703);
  }
  sleepy(() => {
    for (let i = 1; i < plats.length; i++) { const [x, y, z] = plats[i]; put('pallet', x - 2.5, y, z - 2); put('pallet_big', x - 1, y, z + 2.5); }
    for (let i = 0; i < 60; i++) createEnt(ITEMS.domino, new THREE.Vector3(-10, 0.6, 20 - i * 0.75), {});
    for (const [x, z] of [[-60, -40], [-66, -40], [-60, -46], [-66, -46]]) for (let l = 0; l < 7; l++) for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) createEnt(ITEMS.crate, new THREE.Vector3(x + a * 1.01, 0.5 + l * 1.001, z + b * 1.01), {});
    for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) put('tnt', -70 + i * 3, 0, 20 + j * 3);
    for (let i = 0; i < 6; i++) put('barrel', -72 + i * 3, 0, 33);
    buildPrefab('bowling', new THREE.Vector3(20, 0, 40), 0, false);
    buildPrefab('jenga', new THREE.Vector3(70, 0, 40), 0, false);
    buildPrefab('wall', new THREE.Vector3(70, 0, 20), 0, false);
    pallets(-4, 0, 28, 4);
    for (let i = 0; i < 3; i++) put('car', 80 + i * 5, 0, -40);
    buildPrefab('pyramid', new THREE.Vector3(0, 0, -15), 0, false);
  });
  // ball pit
  for (const [x, z, w, d] of [[60, -65, 16, 1], [60, -81, 16, 1], [52, -73, 1, 16], [68, -73, 1, 16]]) sbox(w, 2, d, x, 1, z, 0xff006e);
  for (let i = 0; i < 45; i++) createEnt(ITEMS.ball, new THREE.Vector3(60 + rand(-6, 6), 1 + rand(0, 3), -73 + rand(-6, 6)), { color: 'random' });
  pad(10, 0, 20, new THREE.Vector3(0, 26, 0));
  for (let i = 0; i < 40; i++) { const x = rr(-200, 200), z = rr(-200, 200); if (Math.hypot(x, z) > 100) tree(x, 0, z, rr(1, 1.6)); }
  crowd(12, 0, 0, 25); crowd(3, 60, 30, 5, 0, ['ninja']); crowd(2, -40, 0, 4, 0, ['robot']);
}

// --- hills: heightfield terrain
let hf = null;
function hillsHeight(x, z) {
  let h = 7 * Math.sin(x * 0.028) * Math.cos(z * 0.033) + 4 * Math.sin(x * 0.061 + 1) * Math.sin(z * 0.054 + 2) + 1.4 * Math.sin(x * 0.13 + z * 0.11);
  h += 22 * Math.exp(-((x - 45) ** 2 + (z + 35) ** 2) / 500); // castle hill
  h += 26 * Math.exp(-((x + 45) ** 2 + (z + 20) ** 2) / 380); // boulder peak
  h -= 11 * Math.exp(-((x + 5) ** 2 + (z + 5) ** 2) / 420); // lake
  const edge = Math.max(Math.abs(x), Math.abs(z));
  if (edge > 90) h += (edge - 90) * 1.2;
  const sp = Math.hypot(x, z - 50);
  if (sp < 16) h = h * (sp / 16) + 2 * (1 - sp / 16); // flat spawn
  return h + 2;
}
export function groundHeight(x, z) {
  if (!hf) return 0;
  const { W, es, data, n } = hf;
  const fx = (x + W / 2) / es, fz = (W / 2 - z) / es;
  const i = clamp(Math.floor(fx), 0, n - 2), j = clamp(Math.floor(fz), 0, n - 2);
  const tx = fx - i, tz = fz - j;
  const a = data[i][j], b = data[i + 1][j], c = data[i][j + 1], d = data[i + 1][j + 1];
  return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
}
function buildHills() {
  srand(23);
  const W = 240, es = 3, n = W / es + 1;
  const data = [];
  for (let i = 0; i < n; i++) { data.push([]); for (let j = 0; j < n; j++) data[i].push(hillsHeight(-W / 2 + i * es, W / 2 - j * es)); }
  hf = { W, es, data, n };
  const shape = new CANNON.Heightfield(data, { elementSize: es });
  const b = new CANNON.Body({ mass: 0, material: G.mats.ground, collisionFilterGroup: GROUP.STATIC });
  b.addShape(shape);
  b.position.set(-W / 2, 0, W / 2);
  b.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  G.world.addBody(b); mapBodies.push(b);
  // visual terrain with height-based vertex colors
  const geo = new THREE.PlaneGeometry(W, W, n - 1, n - 1);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let k = 0; k < pos.count; k++) {
    const i = Math.round((pos.getX(k) + W / 2) / es), j = Math.round((W / 2 - pos.getZ(k)) / es);
    pos.setY(k, data[i][j]);
  }
  const ng = geo.toNonIndexed();
  const p2 = ng.attributes.position;
  const cols = new Float32Array(p2.count * 3);
  const c = new THREE.Color();
  for (let k = 0; k < p2.count; k += 3) {
    const h = (p2.getY(k) + p2.getY(k + 1) + p2.getY(k + 2)) / 3;
    if (h < 0.3) c.set(0xe2cf95); else if (h < 14) c.set(0x5fae4a).offsetHSL(0, 0, (Math.random() - 0.5) * 0.06); else if (h < 22) c.set(0x7d8288).offsetHSL(0, 0, (Math.random() - 0.5) * 0.05); else c.set(0xf4f7fb);
    for (let v = 0; v < 3; v++) { cols[(k + v) * 3] = c.r; cols[(k + v) * 3 + 1] = c.g; cols[(k + v) * 3 + 2] = c.b; }
  }
  ng.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  ng.computeVertexNormals();
  const tm = new THREE.Mesh(ng, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }));
  tm.receiveShadow = true;
  mapGroup.add(tm);
  water1(-1);
  const gh = groundHeight;
  // castle on the hill
  const cx = 45, cz = -35, cy = gh(cx, cz);
  sbox(14, 1, 14, cx, cy - 0.3, cz, 0x8c9096, 'stone', null, 3);
  sleepy(() => {
    for (let l = 0; l < 3; l++) for (let i = -3; i <= 3; i++) for (const [x, z] of [[i, -3], [i, 3], [-3, i], [3, i]]) {
      if (Math.abs(i) === 3 && (z === i || x === i) && !(x === -3 || x === 3) ) continue;
      createEnt(ITEMS.stone, new THREE.Vector3(cx + x * 1.01, cy + 0.7 + l * 1.005, cz + z * 1.01), {});
    }
  });
  // boulders on the peak, ready to roll
  const px = -45, pz = -20, py = gh(px, pz);
  sbox(10, 1, 10, px, py - 0.2, pz, 0x7d8288, 'stone');
  sleepy(() => { for (let i = 0; i < 4; i++) put('boulder', px + (i - 1.5) * 2.6, py + 0.4, pz + 2); put('tnt_mega', px, py + 0.4, pz - 2.5); });
  // little cabins
  sleepy(() => {
    for (const [x, z] of [[20, 30], [-25, 40]]) {
      const y = gh(x, z);
      for (let l = 0; l < 3; l++) for (let i = -1; i <= 1; i++) { createEnt(ITEMS.crate, new THREE.Vector3(x + i, y + 0.5 + l, z - 1.5), {}); createEnt(ITEMS.crate, new THREE.Vector3(x + i, y + 0.5 + l, z + 1.5), {}); }
      createEnt(ITEMS.slab, new THREE.Vector3(x, y + 3.2, z - 0.5), {}); createEnt(ITEMS.slab, new THREE.Vector3(x, y + 3.2, z + 0.5), {});
    }
    pallets(-3, gh(0, 42) + 0.2, 42, 4);
    put('car', 8, gh(8, 50) + 0.3, 50);
    for (let i = 0; i < 6; i++) put('duck', -5 + rand(-8, 8), -0.6, -5 + rand(-8, 8));
  });
  pad(-8, gh(-8, 54), 54, new THREE.Vector3(-12, 22, -30), 0xffb703);
  for (let i = 0; i < 110; i++) {
    const x = rr(-95, 95), z = rr(-95, 95), y = gh(x, z);
    if (y > 1 && y < 15 && Math.hypot(x, z - 50) > 14 && Math.hypot(x - 45, z + 35) > 14) tree(x, y - 0.2, z, rr(0.8, 1.5));
  }
  for (let i = 0; i < 30; i++) { const x = rr(-95, 95), z = rr(-95, 95); rock(x, gh(x, z), z, rr(0.6, 2)); }
  for (let i = 0; i < 12; i++) { const x = rand(-30, 30), z = rand(20, 60); spawnDummy(new THREE.Vector3(x, gh(x, z) + 0.1, z), i % 6 === 5 ? 'tiny' : 'normal'); }
  spawnDummy(new THREE.Vector3(cx, cy + 0.3, cz), 'big');
}

function buildSky() {
  srand(31);
  G.waterY = -1000;
  const isl = [[0, 0, 0, 14], [40, 8, -20, 10], [-36, 14, -40, 12], [10, 26, -82, 16], [62, -8, 38, 9], [-52, -4, 30, 10], [-10, 40, -140, 11]];
  for (const [x, y, z, r] of isl) {
    scyl(r, 2, x, y - 1, z, 0x5fae4a, 'grass', 14);
    const under = new THREE.Mesh(new THREE.ConeGeometry(r, r * 1.3, 9), smat(0x8a6a4a));
    under.rotation.x = Math.PI; deco(under, x, y - 2 - r * 0.65, z);
    for (let k = 0; k < Math.floor(r / 4); k++) { const a = r01() * 6.28, d = rr(r * 0.4, r * 0.8); tree(x + Math.cos(a) * d, y, z + Math.sin(a) * d, rr(0.7, 1.1)); }
  }
  makeClouds(30, -35, 250);
  sleepy(() => {
    pallets(-5, 0, 8, 6);
    put('pallet_big', 4, 0, -4); put('pallet_big', 7, 0, -4);
    buildPrefab('tower', new THREE.Vector3(40, 8, -20), 0, false);
    buildPrefab('pyramid', new THREE.Vector3(10, 26, -82), 0, false);
    buildPrefab('tntstack', new THREE.Vector3(-36, 14, -40), 0, false);
    for (const [x, y, z] of isl.slice(1)) { put('pallet', x + 2, y, z + 2); put('pallet', x - 2, y, z - 2); }
    buildPrefab('glassroom', new THREE.Vector3(62, -8, 38), 0, false);
    put('piano', -52, -4, 30); put('anvil', -50, -4, 28);
  });
  pad(-6, 0, -4, new THREE.Vector3(18, 18, -9), 0xffb703);
  pad(6, 0, 4, new THREE.Vector3(0, 22, 0));
  for (const [x, y, z, r] of isl) if (r > 9) crowd(Math.floor(r / 4), x, z, r * 0.4, y);
}

export const MAPS = [
  { id: 'island', name: 'Island', icon: '🏝️', desc: 'Castle, towers, TNT bunker, beaches & ocean', build: buildIsland, spawn: [0, 1.2, 34], sky: [0x4aa3ff, 0xcfe9ff], fog: [0xcfe9ff, 90, 320], killY: -30 },
  { id: 'flat', name: 'Flatlands', icon: '🟩', desc: 'Huge flat field: stunt ramps, sky platforms, ball pit', build: buildFlat, spawn: [0, 1.2, 34], sky: [0x5bb1ff, 0xe6f4ff], fog: [0xe6f4ff, 120, 450], killY: -40 },
  { id: 'hills', name: 'Hills', icon: '⛰️', desc: 'Rolling hills, a lake, a castle hill & boulders to roll', build: buildHills, spawn: [0, 6, 50], sky: [0x7fb8ff, 0xffe8cc], fog: [0xffe8cc, 90, 300], killY: -30 },
  { id: 'sky', name: 'Sky Islands', icon: '☁️', desc: 'Floating islands. Fly between them on pallets!', build: buildSky, spawn: [0, 1.5, 5], sky: [0x2b59c3, 0xffc6a8], fog: [0xffc6a8, 120, 420], killY: -80 },
];

export function clearWorld() {
  G.grab = null;
  for (const d of [...G.dummies]) d.remove();
  for (const e of [...G.ents]) removeEnt(e, true);
  for (const r of [...G.ropes]) removeRope(r);
  for (const w of G.welds) G.world.removeConstraint(w);
  G.welds.length = 0;
  for (const p of G.projectiles) if (p.mesh) G.scene.remove(p.mesh);
  G.projectiles.length = 0;
  for (const h of G.blackholes) G.scene.remove(h.mesh);
  G.blackholes.length = 0;
  G.firePatches = [];
  G.timers.length = 0;
  G.burning = 0;
}

export function loadMap(id) {
  const m = MAPS.find((x) => x.id === id) || MAPS[0];
  clearWorld();
  for (const b of mapBodies) G.world.removeBody(b);
  mapBodies = [];
  if (mapGroup) G.scene.remove(mapGroup);
  mapGroup = new THREE.Group();
  G.scene.add(mapGroup);
  G.pads = [];
  water = null; clouds = []; hf = null;
  G.mapId = m.id;
  G.map = m;
  G.killY = m.killY;
  G.walkBound = { island: 58, flat: 180, hills: 85, sky: 999 }[m.id];
  G.particleFloor = m.id === 'island' || m.id === 'flat';
  skyDome(m.sky[0], m.sky[1]);
  G.scene.fog = new THREE.Fog(m.fog[0], m.fog[1], m.fog[2]);
  m.build();
  if (m.id !== 'sky') makeClouds(18, 70, 300);
  G.spawn = new THREE.Vector3(...m.spawn);
  if (G.player) G.player.respawn();
}

const _padT = new WeakMap();
export function updateMap(dt) {
  if (water) {
    const p = water.geometry.attributes.position;
    const t = G.time;
    for (let i = 0; i < p.count; i++) {
      const x = waterBase[i * 3], z = waterBase[i * 3 + 2];
      p.array[i * 3 + 1] = Math.sin(x * 0.08 + t * 1.2) * 0.18 + Math.cos(z * 0.07 + t * 0.9) * 0.18;
    }
    p.needsUpdate = true;
  }
  for (const c of clouds) { c.position.x += c.userData.v * dt; if (c.position.x > 320) c.position.x = -320; }
  if (sky && G.camera) sky.position.copy(G.camera.position);
  // pads
  for (const pd of G.pads) {
    pd.arrow.position.y = pd.pos.y + 1.0 + Math.sin(G.time * 4) * 0.2;
    const check = (b) => {
      const dx = b.position.x - pd.pos.x, dz = b.position.z - pd.pos.z, dy = b.position.y - pd.pos.y;
      if (dx * dx + dz * dz > pd.r * pd.r || dy < -0.3 || dy > 1.6) return;
      const last = _padT.get(b) || -9;
      if (G.time - last < 0.6) return;
      _padT.set(b, G.time);
      b.velocity.set(pd.vel.x, pd.vel.y, pd.vel.z);
      b.wakeUp();
      sfx.boing();
      FX.ring(pd.pos.clone(), 3, pd.color, 0.4);
      if (b.isPlayer) G.player.stun = 0.4;
      const d = b.ent && b.ent.dummy;
      if (d && d.state === 'standing') { d.knock(null); for (const n in d.parts) d.parts[n].body.velocity.set(pd.vel.x, pd.vel.y, pd.vel.z); d.markFling(); }
    };
    if (G.player) check(G.player.body);
    for (const b of G.world.bodies) if (b.type === CANNON.Body.DYNAMIC && !b.isPlayer && b.sleepState !== CANNON.Body.SLEEPING) check(b);
  }
}

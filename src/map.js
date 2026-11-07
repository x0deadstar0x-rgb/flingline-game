// Maps: static world, breakable terrain, pads, water, sky.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, rand, clamp, tv } from './core.js';
import { TEX } from './textures.js';
import { createEnt, buildPrefab, spawnItem, ITEMS, removeEnt, removeRope, addRope } from './items.js';
import { spawnDummy } from './dummy.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { createTerrain, terrainHeight, carveTerrain, updateTerrain, cubeBurst, updateCubes, clearCubes, clearTerrain, setupWater } from './terrain.js';

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

let snowyTrees = false;
const leafCols = [0x3f8f3a, 0x4fa34a, 0x2f7a32, 0x5cb85c];
function tree(x, y, z, s = 1) {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * s, 0.32 * s, 2.2 * s, 6), smat(0x7a5230));
  trunk.castShadow = true;
  addStatic(new CANNON.Cylinder(0.3 * s, 0.3 * s, 2.2 * s, 6), new THREE.Vector3(x, y + 1.1 * s, z), null, trunk);
  const c = snowyTrees ? 0xeef4f8 : leafCols[(r01() * leafCols.length) | 0];
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
  const mat = new THREE.MeshStandardMaterial({ color: 0x2a8fd6, transparent: true, opacity: 0.82, flatShading: true, roughness: 0.25, metalness: 0.1 });
  G.waterY = level;
  const W = setupWater(level);
  if (W && G.terrain) {
    // only draw water over real sea / lake columns (dug holes inland stay dry)
    const T = G.terrain;
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.wMask = { value: W.tex };
      sh.uniforms.wRect = { value: new THREE.Vector4(T.x0, T.z0, T.W, W.seaOutside ? 1 : 0) };
      sh.vertexShader = 'varying vec3 vWPos;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = 'uniform sampler2D wMask; uniform vec4 wRect; varying vec3 vWPos;\n' + sh.fragmentShader.replace('void main() {', `void main() {
        vec2 wuv = vec2((vWPos.x - wRect.x) / wRect.z, (wRect.y - vWPos.z) / wRect.z);
        if (wuv.x < 0.0 || wuv.y < 0.0 || wuv.x > 1.0 || wuv.y > 1.0) { if (wRect.w < 0.5) discard; }
        else if (texture2D(wMask, wuv).r < 0.5) discard;`);
    };
  }
  water = new THREE.Mesh(g, mat);
  water.position.y = level;
  water.receiveShadow = true;
  mapGroup.add(water);
  waterBase = Float32Array.from(g.attributes.position.array);
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


// ------------------------------------------------------------- breakable terrain
// The ground is made of 0.5 m block columns (terrain.js). Explosions carve blocky craters.
const DIG_DEPTH = -80; // how deep you can dig (m)
function makeTerrain(opts) { createTerrain({ ...opts, bedrock: Math.min(opts.bedrock ?? -8, DIG_DEPTH) }, mapGroup, mapBodies); }
export function groundHeight(x, z) { return terrainHeight(x, z); }
const DIRT = { id: 'dirtblock', name: 'Dirt Block', shape: 'box', size: [0.48, 0.48, 0.48], mat: 'dirt' };
// explosion crater: a ragged blocky bowl, flying cubes, dust, and a few real blocks you can grab
// Crater size grows with the blast: mini TNT ~1.3 m, grenade ~1.6 m, TNT ~1.9 m, C4 ~2.3 m,
// mega TNT ~3.2 m (radius). Meteors and nukes pass their own size. Fire blasts are shallower.
export function craterRadius(power) { return 1.9 * Math.pow(power, 0.55); }
export function crater(pos, power, opts = {}) {
  const R = opts.craterRadius ?? craterRadius(power);
  const res = carveTerrain(pos, R, { rim: opts.rim ?? R >= 3.5, flat: opts.flat ?? (opts.fire ? 0.7 : 1.0), scorch: opts.scorch });
  if (!res) return null;
  const at = new THREE.Vector3(pos.x, res.ground, pos.z);
  const cols = res.sample.length ? res.sample : [0x6b4f35];
  cubeBurst(at, Math.min(opts.maxCubes ?? 110, Math.round(res.removed * 0.55) + 8), cols, 7 + R * 2.4);
  FX.smoke(at.clone().add(new THREE.Vector3(0, 0.5, 0)), Math.min(10, 3 + Math.round(R)), 0x8a7458, 0.6 + R * 0.25);
  const real = Math.min(opts.realBlocks ?? 5, Math.floor(res.removed / 18));
  for (let i = 0; i < real; i++) {
    const a = rand(0, Math.PI * 2);
    createEnt({ ...DIRT, color: cols[(Math.random() * cols.length) | 0] }, at.clone().add(new THREE.Vector3(Math.cos(a) * rand(0.3, R * 0.6), 0.6 + rand(0, 1), Math.sin(a) * rand(0.3, R * 0.6))),
      { spawned: true, gen: 2, vel: new THREE.Vector3(Math.cos(a) * rand(3, 8), rand(6, 12), Math.sin(a) * rand(3, 8)), angVel: new THREE.Vector3(rand(-8, 8), rand(-8, 8), rand(-8, 8)) });
  }
  return res;
}
G.crater = (pos, power, opts) => crater(pos, power, opts || {});

// ------------------------------------------------------------- shared building helpers
function stack(id, x, y, z, w, d, h, size = 1) { // hollow box of blocks
  for (let l = 0; l < h; l++) for (let a = 0; a < w; a++) for (let b = 0; b < d; b++) {
    if (a > 0 && a < w - 1 && b > 0 && b < d - 1) continue;
    createEnt(ITEMS[id], new THREE.Vector3(x + (a - (w - 1) / 2) * size * 1.005, y + size / 2 + l * size * 1.002, z + (b - (d - 1) / 2) * size * 1.005), {});
  }
}

// ------------------------------------------------------------- maps
function buildIsland() {
  srand(7);
  makeTerrain({
    W: 200, es: 2, bedrock: -9,
    height: (x, z) => {
      const e = Math.max(Math.abs(x), Math.abs(z)) + 0.15 * Math.min(Math.abs(x), Math.abs(z)) * 0;
      if (e < 66) return 0;
      if (e < 80) return -4.5 * (e - 66) / 14;
      return -4.5 - (e - 80) * 0.4;
    },
    color: (h) => (h > -0.05 ? 0x5fae4a : h > -3.5 ? 0xe9d29a : 0xc9b27a),
  });
  water1(-1);
  zones = [[0, 34, 8], [-18, 10, 6], [24, -18, 9], [-26, -26, 6], [0, -34, 5], [-5, -8, 8], [14, 22, 10], [-34, 24, 7], [36, 32, 8], [44, -2, 8], [6, 14, 3], [-10, 30, 3], [-45, -10, 6], [-45, 5, 5], [40, -45, 8]];
  sleepy(() => {
    buildPrefab('pyramid', new THREE.Vector3(-18, 0, 10), 0, false);
    // castle
    const cx = 24, cz = -18, n = 7;
    for (let l = 0; l < 3; l++) for (let i = 0; i < n; i++) for (const side of [0, 1, 2, 3]) {
      if (i === n - 1) continue;
      let x, z;
      const t = i - (n - 1) / 2;
      if (side === 0) { x = t; z = -(n - 1) / 2; } else if (side === 1) { x = (n - 1) / 2; z = t; } else if (side === 2) { x = -t; z = (n - 1) / 2; } else { x = -(n - 1) / 2; z = -t; }
      if (side === 2 && Math.abs(x) < 1 && l < 2) continue;
      createEnt(ITEMS.stone, new THREE.Vector3(cx + x * 1.01, 0.5 + l * 1.005, cz + z * 1.01), {});
    }
    for (const [x, z] of [[-3, -3], [3, -3], [3, 3], [-3, 3]]) for (let l = 3; l < 5; l++) createEnt(ITEMS.stone, new THREE.Vector3(cx + x * 1.01, 0.5 + l * 1.005, cz + z * 1.01), {});
    for (let f = 0; f < 3; f++) buildPrefab('glassroom', new THREE.Vector3(-26, f * 2.315, -26), 0, false);
    buildPrefab('jenga', new THREE.Vector3(0, 0, -34), 0, false);
    for (let i = 0; i < 34; i++) {
      const a = i * 0.25, r = 2.5 + i * 0.17;
      createEnt(ITEMS.domino, new THREE.Vector3(-5 + Math.cos(a) * r, 0.6, -8 + Math.sin(a) * r), { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -a) });
    }
    buildPrefab('bowling', new THREE.Vector3(14, 0, 22), 0, false);
    buildPrefab('tntstack', new THREE.Vector3(-34, 0, 24), 0, false);
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; put('barrel', -34 + Math.cos(a) * 3.2, 0, 24 + Math.sin(a) * 3.2); }
    buildPrefab('house', new THREE.Vector3(-45, 0, -10), 0, false);
    buildPrefab('fort', new THREE.Vector3(40, 0, -45), 0, false);
    buildPrefab('wall', new THREE.Vector3(-45, 0, 5), Math.PI / 2, false);
  });
  sbox(2.2, 0.1, 18, 14, 0.05, 18, 0xd9b77a, 'plank');
  for (const [x, z, w, d] of [[-34, 28.5, 9, 1], [-38.5, 24, 1, 9], [-29.5, 24, 1, 9]]) sbox(w, 2.5, d, x, 1.25, z, 0x8c9096, 'stone');
  for (const [x, z] of [[33.5, 29.5], [38.5, 29.5], [33.5, 34.5], [38.5, 34.5]]) sbox(0.6, 8, 0.6, x, 4, z, 0x7a5230, 'log');
  sbox(6, 0.5, 6, 36, 8.2, 32, 0xb07a3e, 'plank');
  sbox(3, 0.4, 17, 36, 4.1, 43, 0xb07a3e, 'plank', [-0.5, 0, 0]);
  sbox(6, 0.6, 14, 44, 2.2, -2, 0x9aa4ae, 'metal', [0.32, 0, 0]);
  pad(6, 0, 14, new THREE.Vector3(0, 24, 0));
  pad(-10, 0, 30, new THREE.Vector3(14, 20, -24), 0xffb703);
  pad(28, 0, 6, new THREE.Vector3(0, 30, 0));
  sleepy(() => {
    put('pallet', 35, 8.5, 31); put('melon', 36, 8.5, 33);
    pallets(-4, 0, 26, 4);
    put('car', 10, 0, 38, { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.4) });
    put('table', -12, 0, 40); put('melon', -12.4, 0.9, 40); put('pumpkin', -11.5, 0.9, 40.2);
    put('couch', -16, 0, 42); put('piano', 18, 0, 42); put('fridge', 21, 0, 42);
    // park benches near where people hang out
    for (const [x, z, a] of [[-6, 46, Math.PI], [6, 46, Math.PI], [-22, 30, Math.PI / 2], [24, 28, -Math.PI / 2]]) put('bench', x, 0, z, { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a) });
    for (let i = 0; i < 4; i++) put('beachball', 62 + rand(-3, 3), 0, rand(-20, 20));
    put('duck', 0, -0.5, 82); put('duck', 8, -0.5, 84);
    put('present', 2, 0, 20); put('crystal', -2, 0, 20);
    for (let i = 0; i < 5; i++) put('crate', 50 + rand(-4, 4), 0, 50 + rand(-4, 4));
    put('nuke', -55, 0, -55);
  });
  for (let i = 0; i < 70; i++) { const x = rr(-62, 62), z = rr(-62, 62); if (free(x, z, 3)) { tree(x, 0, z, rr(0.8, 1.4)); zones.push([x, z, 2]); } }
  for (let i = 0; i < 25; i++) { const x = rr(-62, 62), z = rr(-62, 62); if (free(x, z, 2)) rock(x, 0.2, z, rr(0.6, 1.6)); }
  crowd(9, 0, 5, 18); crowd(2, -24, -18, 3, 0, ['tiny']); crowd(1, 24, -18, 1.5, 0, ['big']); crowd(2, 36, 32, 1, 8.5);
}

function buildFlat() {
  srand(11);
  makeTerrain({ W: 300, es: 3, height: () => 0, color: (h, x, z) => ((Math.floor(x / 15) + Math.floor(z / 15)) & 1 ? 0x63b34d : 0x5aa646), bedrock: -6 });
  zones = [[0, 34, 8]];
  for (let i = 0; i < 4; i++) sbox(5, 0.5, 12, 30 + i * 9, 1.6 + i * 0.6, 10, [0x3a86ff, 0xff006e, 0xffbe0b, 0x8338ec][i], null, [0.22 + i * 0.1, 0, 0]);
  sbox(20, 0.5, 6, 45, 1.5, -20, 0x9aa4ae, 'metal', [0, 0, 0], 2);
  sbox(20, 0.5, 6, 45, 3, -24.5, 0x9aa4ae, 'metal', [0.7, 0, 0], 2);
  sbox(20, 0.5, 6, 45, 3, -15.5, 0x9aa4ae, 'metal', [-0.7, 0, 0], 2);
  for (let i = 0; i < 12; i++) sbox(4, 0.5, 1.2, -40, 0.25 + i * 0.5, -10 - i * 1.2, 0xd8cfc4, 'stone');
  sbox(4, 0.5, 4, -40, 6, -25.5, 0xd8cfc4, 'stone');
  const plats = [[0, 0, 10], [0, 16, -40], [22, 32, -70], [-18, 48, -100], [0, 64, -132]];
  for (let i = 1; i < plats.length; i++) {
    const [x, y, z] = plats[i];
    sbox(10, 1, 10, x, y - 0.5, z, 0xb07a3e, 'plank', null, 2);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(6, 8, 6), smat(0x8a8f96));
    cone.rotation.x = Math.PI; deco(cone, x, y - 5, z);
  }
  for (let i = 0; i < plats.length - 1; i++) {
    const [x, y, z] = plats[i], [nx, ny, nz] = plats[i + 1];
    const Tt = 2.2;
    const v = new THREE.Vector3((nx - x) / Tt, (ny - y + 0.5 * 9.82 * Tt * Tt) / Tt, (nz - z) / Tt);
    pad(x + (i === 0 ? 0 : 2), y, z + (i === 0 ? 0 : 2), v, 0xffb703);
  }
  sleepy(() => {
    for (let i = 1; i < plats.length; i++) { const [x, y, z] = plats[i]; put('pallet', x - 2.5, y, z - 2); put('crate', x + 2, y, z + 2); }
    for (let i = 0; i < 60; i++) createEnt(ITEMS.domino, new THREE.Vector3(-10, 0.6, 20 - i * 0.75), {});
    buildPrefab('skyscraper', new THREE.Vector3(-63, 0, -43), 0, false);
    buildPrefab('skyscraper', new THREE.Vector3(-63, 0, -60), 0, false);
    for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) put('tnt', -70 + i * 3, 0, 20 + j * 3);
    for (let i = 0; i < 6; i++) put('barrel', -72 + i * 3, 0, 33);
    buildPrefab('bowling', new THREE.Vector3(20, 0, 40), 0, false);
    buildPrefab('jenga', new THREE.Vector3(70, 0, 40), 0, false);
    buildPrefab('wall', new THREE.Vector3(70, 0, 20), 0, false);
    buildPrefab('bridge', new THREE.Vector3(80, 0, -5), Math.PI / 2, false);
    buildPrefab('arch', new THREE.Vector3(-25, 0, 50), 0, false);
    pallets(-4, 0, 28, 4);
    for (let i = 0; i < 3; i++) put('car', 80 + i * 5, 0, -40);
    buildPrefab('pyramid', new THREE.Vector3(0, 0, -15), 0, false);
  });
  for (const [x, z, w, d] of [[60, -65, 16, 1], [60, -81, 16, 1], [52, -73, 1, 16], [68, -73, 1, 16]]) sbox(w, 2, d, x, 1, z, 0xff006e);
  for (let i = 0; i < 45; i++) createEnt(ITEMS.ball, new THREE.Vector3(60 + rand(-6, 6), 1 + rand(0, 3), -73 + rand(-6, 6)), { color: 'random' });
  pad(10, 0, 20, new THREE.Vector3(0, 26, 0));
  for (let i = 0; i < 40; i++) { const x = rr(-140, 140), z = rr(-140, 140); if (Math.hypot(x, z) > 100) tree(x, 0, z, rr(1, 1.6)); }
  crowd(12, 0, 0, 25); crowd(3, 60, 30, 5, 0, ['ninja']); crowd(2, -40, 0, 4, 0, ['robot']);
}

function hillsHeight(x, z) {
  let h = 7 * Math.sin(x * 0.028) * Math.cos(z * 0.033) + 4 * Math.sin(x * 0.061 + 1) * Math.sin(z * 0.054 + 2) + 1.4 * Math.sin(x * 0.13 + z * 0.11);
  h += 22 * Math.exp(-((x - 45) ** 2 + (z + 35) ** 2) / 500);
  h += 26 * Math.exp(-((x + 45) ** 2 + (z + 20) ** 2) / 380);
  h -= 11 * Math.exp(-((x + 5) ** 2 + (z + 5) ** 2) / 420);
  const edge = Math.max(Math.abs(x), Math.abs(z));
  if (edge > 90) h += (edge - 90) * 1.2;
  const sp = Math.hypot(x, z - 50);
  if (sp < 16) h = h * (sp / 16) + 2 * (1 - sp / 16);
  return h + 2;
}
function buildHills() {
  srand(23);
  makeTerrain({ W: 240, es: 3, height: hillsHeight, bedrock: -10, color: (h) => (h < 0.3 ? 0xe2cf95 : h < 14 ? 0x5fae4a : h < 22 ? 0x7d8288 : 0xf4f7fb) });
  water1(-1);
  const gh = groundHeight;
  const cx = 45, cz = -35, cy = gh(cx, cz);
  sbox(14, 1, 14, cx, cy - 0.3, cz, 0x8c9096, 'stone', null, 3);
  sleepy(() => {
    for (let l = 0; l < 3; l++) for (let i = -3; i <= 3; i++) for (const [x, z] of [[i, -3], [i, 3], [-3, i], [3, i]]) {
      if (Math.abs(i) === 3 && (x === -3 || x === 3) && (z === -3 || z === 3) && z !== i && x !== i) continue;
      createEnt(ITEMS.stone, new THREE.Vector3(cx + x * 1.01, cy + 0.7 + l * 1.005, cz + z * 1.01), {});
    }
  });
  const px = -45, pz = -20, py = gh(px, pz);
  sbox(10, 1, 10, px, py - 0.2, pz, 0x7d8288, 'stone');
  sleepy(() => { for (let i = 0; i < 4; i++) put('boulder', px + (i - 1.5) * 2.6, py + 0.4, pz + 2); put('tnt_mega', px, py + 0.4, pz - 2.5); });
  sleepy(() => {
    for (const [x, z] of [[20, 30], [-25, 40]]) buildPrefab('house', new THREE.Vector3(x, gh(x, z), z), 0.3, false);
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
    buildPrefab('tower', new THREE.Vector3(40, 8, -20), 0, false);
    buildPrefab('pyramid', new THREE.Vector3(10, 26, -82), 0, false);
    buildPrefab('tntstack', new THREE.Vector3(-36, 14, -40), 0, false);
    for (const [x, y, z] of isl.slice(1)) put('pallet', x + 2, y, z + 2);
    buildPrefab('glassroom', new THREE.Vector3(62, -8, 38), 0, false);
    put('piano', -52, -4, 30); put('anvil', -50, -4, 28);
  });
  pad(-6, 0, -4, new THREE.Vector3(18, 18, -9), 0xffb703);
  pad(6, 0, 4, new THREE.Vector3(0, 22, 0));
  for (const [x, y, z, r] of isl) if (r > 9) crowd(Math.floor(r / 4), x, z, r * 0.4, y);
}

// ---- City: destructible buildings made of concrete blocks
function buildCity() {
  srand(41);
  const road = (v) => Math.abs(((v % 40) + 40) % 40 - 20) > 14; // roads every 40 m
  makeTerrain({
    W: 200, es: 2, bedrock: -6, height: () => 0,
    color: (h, x, z) => (road(x) || road(z) ? 0x3a3d42 : (Math.abs(((x % 40) + 40) % 40 - 20) > 12 || Math.abs(((z % 40) + 40) % 40 - 20) > 12) ? 0xb9b4aa : 0x6aa857),
  });
  // background skyline (solid)
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2, r = 110 + rr(0, 30), h = rr(25, 70);
    sbox(rr(12, 20), h, rr(12, 20), Math.cos(a) * r, h / 2, Math.sin(a) * r, [0x8b95a1, 0x6e7781, 0xa3acb6, 0x5f6973][i % 4]);
  }
  sleepy(() => {
    const blocks = [[0, 0], [40, 0], [-40, 0], [0, -40], [40, -40], [-40, -40], [40, 40], [-40, 40]];
    blocks.forEach(([bx, bz], k) => {
      if (k === 0) return; // central plaza
      if (k % 3 === 0) buildPrefab('skyscraper', new THREE.Vector3(bx, 0, bz), 0, false);
      else if (k % 3 === 1) { stack('concrete_big', bx - 4, 0, bz, 3, 3, 4 + (k % 3), 2); stack('concrete_big', bx + 6, 0, bz + 4, 2, 2, 3, 2); }
      else { buildPrefab('house', new THREE.Vector3(bx - 5, 0, bz - 3), 0, false); buildPrefab('house', new THREE.Vector3(bx + 5, 0, bz + 4), Math.PI, false); }
    });
    // plaza fountain-ish + props
    buildPrefab('arch', new THREE.Vector3(0, 0, -6), 0, false);
    for (let i = 0; i < 6; i++) put('car', -20 + rand(-1, 1), 0, -30 + i * 10, { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2) });
    for (let i = 0; i < 5; i++) put('car', -30 + i * 12, 0, 20, {});
    for (let i = 0; i < 14; i++) put('cone', rand(-60, 60), 0, 20 + rand(-1.5, 1.5));
    for (let i = 0; i < 10; i++) put('lamp', -60 + i * 13, 0, 13.5);
    for (let i = 0; i < 5; i++) put('bench', -52 + i * 26, 0, 14.5); // facing the street
    for (let i = 0; i < 6; i++) put('barrier', 18 + rand(-1, 1), 0, -20 + i * 3);
    for (let i = 0; i < 5; i++) put('mailbox', rand(-12, 12), 0, rand(-12, 12));
    put('vending', 6, 0, 6); put('vending', 7.3, 0, 6);
    for (let i = 0; i < 4; i++) put('bin', -6 + i * 4, 0, 8);
    pallets(-4, 0, 12, 3);
    buildPrefab('pallets', new THREE.Vector3(10, 0, -10), 0, false);
  });
  pad(0, 0, 0, new THREE.Vector3(0, 30, 0));
  sbox(8, 0.5, 20, 60, 3, 20, 0xffbe0b, null, [0.3, 0, 0]);
  crowd(16, 0, 10, 20); crowd(3, 0, -20, 10, 0, ['zombie']);
}

// ---- Desert canyon with a river, mesas and cacti
function desertHeight(x, z) {
  let h = 1.5 * Math.sin(x * 0.07) * Math.sin(z * 0.05) + 1.0 * Math.sin(x * 0.15 + z * 0.1);
  const mesa = Math.max(0, Math.sin(x * 0.025 + 1) * Math.cos(z * 0.03) - 0.35);
  h += Math.min(14, mesa * 40); // flat-topped mesas
  const river = Math.abs(z - 18 * Math.sin(x * 0.03)) ;
  if (river < 9) h -= (9 - river) * 0.75;
  const sp = Math.hypot(x, z - 50);
  if (sp < 14) h = h * (sp / 14) + 1 * (1 - sp / 14);
  const edge = Math.max(Math.abs(x), Math.abs(z));
  if (edge > 100) h += (edge - 100) * 1.3;
  return h + 1;
}
function buildDesert() {
  srand(53);
  makeTerrain({
    W: 240, es: 3, height: desertHeight, bedrock: -8,
    color: (h) => (h < -1.5 ? 0xb89d6a : h < 4 ? 0xe2b97a : [0xc8743e, 0xd88a4f, 0xb5622f, 0xe0a067][Math.floor(h / 2.5) & 3]),
  });
  water1(-2.5);
  const gh = groundHeight;
  sleepy(() => {
    for (let i = 0; i < 40; i++) { const x = rr(-90, 90), z = rr(-90, 90), y = gh(x, z); if (y > 0.5 && y < 3) put('cactus', x, y, z); }
    for (const [x, z] of [[20, 40], [-22, 30], [30, -40]]) buildPrefab('house', new THREE.Vector3(x, gh(x, z), z), rr(0, 3), false);
    for (let i = 0; i < 10; i++) { const x = rr(-30, 30), z = rr(30, 60); put(i % 3 ? 'barrel' : 'drum', x, gh(x, z), z); }
    for (let i = 0; i < 8; i++) { const x = rr(-40, 40), z = rr(-30, 0); put('hay', x, gh(x, z), z); }
    for (let i = 0; i < 12; i++) { const x = rr(-20, 20), z = rr(0, 20); const y = gh(x, z); if (y > -1) put('mine', x, y, z); }
    put('car', 5, gh(5, 46), 46); put('car', -8, gh(-8, 44), 44);
    pallets(-3, gh(0, 56) + 0.1, 56, 3);
    buildPrefab('fort', new THREE.Vector3(-50, gh(-50, -50), -50), 0, false);
  });
  for (let i = 0; i < 25; i++) { const x = rr(-95, 95), z = rr(-95, 95); rock(x, gh(x, z), z, rr(0.8, 2.4)); }
  for (let i = 0; i < 12; i++) { const x = rand(-20, 20), z = rand(40, 60); spawnDummy(new THREE.Vector3(x, gh(x, z) + 0.1, z), i % 4 === 3 ? 'ninja' : 'normal'); }
}

// ---- Snowy peaks with a frozen lake, igloos and snowmen
function snowHeight(x, z) {
  let h = 6 * Math.sin(x * 0.03 + 2) * Math.cos(z * 0.027) + 3 * Math.sin(x * 0.08) * Math.sin(z * 0.07);
  h += 30 * Math.exp(-((x - 50) ** 2 + (z + 50) ** 2) / 700);
  const lake = Math.hypot(x + 10, z + 5);
  if (lake < 26) h = Math.min(h, -0.6);
  const sp = Math.hypot(x, z - 50);
  if (sp < 14) h = h * (sp / 14) + 2 * (1 - sp / 14);
  const edge = Math.max(Math.abs(x), Math.abs(z));
  if (edge > 95) h += (edge - 95) * 1.4;
  return h + 2;
}
function buildSnow() {
  srand(61);
  makeTerrain({ W: 240, es: 3, height: snowHeight, bedrock: -9, color: (h) => (h < 3 ? 0xdfe9f0 : h < 18 ? 0xf2f6f9 : 0x9aa3ad) });
  snowyTrees = true;
  // frozen lake: slippery ice sheet
  const ice = new THREE.Mesh(new THREE.CylinderGeometry(26, 26, 0.4, 24), new THREE.MeshStandardMaterial({ color: 0xa9e3ff, transparent: true, opacity: 0.85, roughness: 0.1, flatShading: true }));
  ice.receiveShadow = true;
  const b = addStatic(new CANNON.Cylinder(26, 26, 0.4, 24), new THREE.Vector3(-10, 1.25, -5), null, ice);
  b.material = G.mats.ice;
  const gh = groundHeight;
  sleepy(() => {
    for (const [x, z] of [[20, 25], [-30, 30], [30, -10], [-40, -30]]) buildPrefab('snowman', new THREE.Vector3(x, gh(x, z), z), 0, false);
    for (const [x, z] of [[25, 40], [-25, 45]]) buildPrefab('igloo', new THREE.Vector3(x, gh(x, z), z), 0, false);
    for (let i = 0; i < 25; i++) put('snowball', -10 + rand(-15, 15), 1.5, -5 + rand(-15, 15));
    for (let i = 0; i < 8; i++) put('ice', -10 + rand(-10, 10), 1.5, -5 + rand(-10, 10));
    pallets(-3, gh(0, 55) + 0.1, 55, 3);
    buildPrefab('house', new THREE.Vector3(10, gh(10, 60), 60), 0, false);
    const px = 50, pz = -50, py = gh(px, pz);
    for (let i = 0; i < 4; i++) put('boulder', px + rand(-3, 3), py + 1, pz + rand(-3, 3));
  });
  for (let i = 0; i < 90; i++) {
    const x = rr(-90, 90), z = rr(-90, 90), y = gh(x, z);
    if (Math.hypot(x + 10, z + 5) > 30 && Math.hypot(x, z - 50) > 12 && y < 20) tree(x, y - 0.2, z, rr(0.8, 1.5));
  }
  snowyTrees = false;
  for (let i = 0; i < 12; i++) { const x = rand(-25, 25), z = rand(35, 60); spawnDummy(new THREE.Vector3(x, gh(x, z) + 0.1, z), i % 5 === 4 ? 'big' : 'normal'); }
}

// ---- Playground: swings, see-saws, slides, trampolines, ball pit
function buildPlayground() {
  srand(71);
  makeTerrain({ W: 160, es: 2, bedrock: -5, height: () => 0, color: (h, x, z) => (Math.hypot(x, z) < 12 ? 0xe9d29a : Math.abs(x) > 60 || Math.abs(z) > 60 ? 0x4f9a3c : 0x63b34d) });
  // fence
  for (const [x, z, w, d] of [[0, 62, 124, 0.4], [0, -62, 124, 0.4], [62, 0, 0.4, 124], [-62, 0, 0.4, 124]]) sbox(w, 1.2, d, x, 0.6, z, 0xffffff);
  // swings: seat planks hanging on ropes from a static bar
  for (let s = 0; s < 3; s++) {
    const x = -30 + s * 3;
    sbox(0.3, 4, 0.3, x - 1.3, 2, -30, 0xff006e); sbox(0.3, 4, 0.3, x + 1.3, 2, -30, 0xff006e);
    const bar = sbox(3, 0.25, 0.25, x, 4, -30, 0xff006e);
    const seat = createEnt({ ...ITEMS.chunk, size: [1, 0.12, 0.5], mat: 'wood', tex: 'plank' }, new THREE.Vector3(x, 1, -30), {});
    addRope(bar, new CANNON.Vec3(-0.45, 0, 0), seat.body, new CANNON.Vec3(-0.45, 0, 0), 3);
    addRope(bar, new CANNON.Vec3(0.45, 0, 0), seat.body, new CANNON.Vec3(0.45, 0, 0), 3);
  }
  // see-saws
  for (let k = 0; k < 2; k++) {
    const x = -10 + k * 6;
    sbox(0.6, 0.6, 0.6, x, 0.15, -30, 0x3a86ff, null, [Math.PI / 4, 0, 0]);
    createEnt({ ...ITEMS.chunk, size: [0.6, 0.12, 5], mat: 'wood', tex: 'plank' }, new THREE.Vector3(x, 0.65, -30), {});
  }
  // slide: platform + ladder + chute
  sbox(3, 0.3, 3, 20, 4, -30, 0xffbe0b);
  for (const [dx, dz] of [[-1.3, -1.3], [1.3, -1.3], [-1.3, 1.3], [1.3, 1.3]]) sbox(0.25, 4, 0.25, 20 + dx, 2, -30 + dz, 0xffbe0b);
  for (let i = 0; i < 8; i++) sbox(1.2, 0.15, 0.4, 20, 0.4 + i * 0.5, -32 - i * 0.05, 0x8338ec);
  sbox(1.6, 0.2, 9, 20, 2, -24.6, 0x06d6a0, null, [-0.45, 0, 0]);
  // trampolines
  for (let i = 0; i < 4; i++) pad(-30 + i * 6, 0, 10, new THREE.Vector3(0, 14 + i * 4, 0), 0x3bd1ff);
  pad(30, 0, 30, new THREE.Vector3(-16, 22, -16), 0xffb703);
  // ball pit
  for (const [x, z, w, d] of [[30, 15, 12, 0.6], [30, 3, 12, 0.6], [24, 9, 0.6, 12], [36, 9, 0.6, 12]]) sbox(w, 1.4, d, x, 0.7, z, 0xff006e);
  for (let i = 0; i < 60; i++) createEnt(ITEMS.ball, new THREE.Vector3(30 + rand(-5, 5), 1 + rand(0, 4), 9 + rand(-5, 5)), { color: 'random' });
  // climbing frame
  for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) sbox(0.2, 3, 0.2, -30 + a * 2, 1.5, 30 + b * 2, 0xef476f);
  sbox(4.4, 0.2, 4.4, -28, 3.1, 32, 0xef476f);
  sleepy(() => {
    buildPrefab('pyramid', new THREE.Vector3(0, 0, 30), 0, false);
    buildPrefab('domino', new THREE.Vector3(40, 0, -10), 0, false);
    buildPrefab('bowling', new THREE.Vector3(-45, 0, -5), Math.PI / 2, false);
    buildPrefab('stairs', new THREE.Vector3(45, 0, 40), 0, false);
    for (let i = 0; i < 6; i++) put('beachball', rand(-8, 8), 0, rand(-8, 8));
    for (let i = 0; i < 4; i++) put('jelly', -45 + i * 1.5, 0, 40);
    pallets(-4, 0, 45, 3);
    buildPrefab('pallets', new THREE.Vector3(6, 0, 45), 0, false);
  });
  crowd(14, 0, 0, 30, 0, ['tiny', 'tiny', 'normal', 'bouncy']);
}

export const MAPS = [
  { id: 'island', name: 'Island', icon: '🏝️', desc: 'Castle, towers, TNT bunker, beaches & ocean', build: buildIsland, spawn: [0, 1.2, 34], sky: [0x4aa3ff, 0xcfe9ff], fog: [0xcfe9ff, 90, 320], killY: -30, water: -1, walk: 58 },
  { id: 'city', name: 'City', icon: '🏙️', desc: 'Concrete buildings you can bring down, cars, zombies', build: buildCity, spawn: [0, 1.2, 30], sky: [0x8fb3d9, 0xe8eef5], fog: [0xe8eef5, 80, 260], killY: -30, water: -1000, walk: 90 },
  { id: 'flat', name: 'Flatlands', icon: '🟩', desc: 'Huge flat field: stunt ramps, sky platforms, ball pit', build: buildFlat, spawn: [0, 1.2, 34], sky: [0x5bb1ff, 0xe6f4ff], fog: [0xe6f4ff, 120, 450], killY: -40, water: -1000, walk: 140 },
  { id: 'hills', name: 'Hills', icon: '⛰️', desc: 'Rolling hills, a lake, a castle hill & boulders to roll', build: buildHills, spawn: [0, 6, 50], sky: [0x7fb8ff, 0xffe8cc], fog: [0xffe8cc, 90, 300], killY: -30, water: -1, walk: 85 },
  { id: 'desert', name: 'Desert Canyon', icon: '🏜️', desc: 'Mesas, a river canyon, cacti, oil drums & a minefield', build: buildDesert, spawn: [0, 4, 50], sky: [0x6aa8e8, 0xffd9a8], fog: [0xffd9a8, 90, 320], killY: -30, water: -2.5, walk: 85 },
  { id: 'snow', name: 'Snowy Peaks', icon: '❄️', desc: 'Slippery frozen lake, igloos, snowmen, a big mountain', build: buildSnow, spawn: [0, 5, 50], sky: [0x9cc3e6, 0xf2f6fa], fog: [0xf2f6fa, 70, 260], killY: -30, water: -1000, walk: 85 },
  { id: 'playground', name: 'Playground', icon: '🛝', desc: 'Swings, see-saws, a slide, trampolines & a ball pit', build: buildPlayground, spawn: [0, 1.2, 50], sky: [0x5bb1ff, 0xfff0d6], fog: [0xfff0d6, 90, 300], killY: -30, water: -1000, walk: 55 },
  { id: 'sky', name: 'Sky Islands', icon: '☁️', desc: 'Floating islands high above the clouds', build: buildSky, spawn: [0, 1.5, 5], sky: [0x2b59c3, 0xffc6a8], fog: [0xffc6a8, 120, 420], killY: -80, water: -1000, walk: 999 },
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
  water = null; clouds = []; clearTerrain(); clearCubes(); G.groundAt = null;
  if (G.clearNukes) G.clearNukes();
  G.mapId = m.id;
  G.map = m;
  G.killY = Math.min(m.killY, DIG_DEPTH - 25); // below the deepest hole you can dig
  G.walkBound = m.walk;
  G.waterY = m.water;
  G.waterAt = () => -Infinity;
  skyDome(m.sky[0], m.sky[1]);
  G.scene.fog = new THREE.Fog(m.fog[0], m.fog[1], m.fog[2]);
  m.build();
  if (m.id !== 'sky') makeClouds(18, 70, 300);
  applyTime(G.settings ? G.settings.time : 'day');
  G.spawn = new THREE.Vector3(...m.spawn);
  if (G.player) G.player.respawn();
}

// ------------------------------------------------------------- time of day
const TIMES = {
  day:    { sun: 2.2, sunCol: 0xfff1d6, hemi: 1.1, hemiSky: 0xcfe8ff, hemiGround: 0x6b5a3a, tint: null, k: 0, exposure: 1.05, stars: false, sunPos: [40, 70, 25] },
  sunset: { sun: 1.5, sunCol: 0xffa060, hemi: 0.75, hemiSky: 0xffc89a, hemiGround: 0x5a3f2a, tint: [0x6a4fa0, 0xff9a5a], k: 0.65, exposure: 1.1, stars: false, sunPos: [80, 18, 10] },
  night:  { sun: 0.35, sunCol: 0x9fb4ff, hemi: 0.3, hemiSky: 0x5a6fa8, hemiGround: 0x1a1a24, tint: [0x05070f, 0x1a2340], k: 0.92, exposure: 1.25, stars: true, sunPos: [-30, 60, -40] },
};
let stars = null;
const lampGlow = new Set();
// tint the sky (and fog) towards a colour, k 0..1 (0 = back to normal). Used by the nuke.
const skyBase = { top: new THREE.Color(), bot: new THREE.Color() };
export function tintSky(color, k) {
  if (!sky) return;
  const c = new THREE.Color(color);
  sky.material.uniforms.top.value.copy(skyBase.top).lerp(c, k * 0.55);
  sky.material.uniforms.bottom.value.copy(skyBase.bot).lerp(c, k);
  if (G.scene.fog) G.scene.fog.color.copy(sky.material.uniforms.bottom.value);
}
G.tintSky = tintSky;
export function applyTime(mode) {
  const t = TIMES[mode] || TIMES.day;
  G.timeOfDay = mode;
  if (G.sun) { G.sun.intensity = t.sun; G.sun.color.set(t.sunCol); G.sunOffset = t.sunPos; }
  if (G.hemi) { G.hemi.intensity = t.hemi; G.hemi.color.set(t.hemiSky); G.hemi.groundColor.set(t.hemiGround); }
  if (G.renderer) G.renderer.toneMappingExposure = t.exposure;
  G.baseExposure = t.exposure;
  const m = G.map;
  if (m && sky) {
    const top = new THREE.Color(m.sky[0]), bot = new THREE.Color(m.sky[1]);
    if (t.tint) { top.lerp(new THREE.Color(t.tint[0]), t.k); bot.lerp(new THREE.Color(t.tint[1]), t.k); }
    skyBase.top.copy(top); skyBase.bot.copy(bot);
    sky.material.uniforms.top.value.copy(top);
    sky.material.uniforms.bottom.value.copy(bot);
    if (G.scene.fog) G.scene.fog.color.copy(bot);
  }
  if (!stars) {
    const n = 900, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, y = Math.random() * 0.9 + 0.08, r = Math.sqrt(1 - y * y);
      pos[i * 3] = Math.cos(a) * r * 700; pos[i * 3 + 1] = y * 700; pos[i * 3 + 2] = Math.sin(a) * r * 700;
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    stars = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, fog: false }));
    stars.frustumCulled = false;
    G.scene.add(stars);
  }
  stars.visible = t.stars;
  // street lamps, windows and pads glow at night
  const glow = mode === 'night' ? 1.4 : mode === 'sunset' ? 0.4 : 0;
  G.scene.traverse((o) => {
    if (!o.isMesh || !o.material || !o.material.color) return;
    if (o.material.color.getHex() === 0xfff3b0) { o.material.emissive = o.material.emissive || new THREE.Color(); o.material.emissive.set(0xfff3b0); o.material.emissiveIntensity = glow; }
  });
}

const _padT = new WeakMap();
export function updateMap(dt) {
  // the sky and stars move with you, so there is no ceiling
  if (sky && G.camera) sky.position.copy(G.camera.position);
  if (stars && G.camera) stars.position.copy(G.camera.position);
  updateTerrain();
  updateCubes(dt);
  if (water) {
    const p = water.geometry.attributes.position;
    const t = G.time;
    for (let i = 0; i < p.count; i++) {
      const x = waterBase[i * 3], z = waterBase[i * 3 + 2];
      p.array[i * 3 + 1] = Math.sin(x * 0.08 + t * 1.2) * 0.12 + Math.cos(z * 0.07 + t * 0.9) * 0.12;
    }
    p.needsUpdate = true;
  }
  for (const c of clouds) { c.position.x += c.userData.v * dt; if (c.position.x > 320) c.position.x = -320; }
  if (sky && G.camera) sky.position.copy(G.camera.position);
  if (stars && G.camera) stars.position.copy(G.camera.position);
  for (const pd of G.pads) {
    const check = (b) => {
      const dx = b.position.x - pd.pos.x, dz = b.position.z - pd.pos.z, dy = b.position.y - pd.pos.y;
      if (dx * dx + dz * dz > pd.r * pd.r || dy < -0.3 || dy > 1.6) return;
      const last = _padT.get(b) || -9;
      if (G.time - last < 0.6) return;
      _padT.set(b, G.time);
      b.velocity.set(pd.vel.x, pd.vel.y, pd.vel.z);
      b.wakeUp();
      sfx.boing(b.position);
      FX.ring(pd.pos.clone(), 3, pd.color, 0.4);
      if (b.isPlayer) G.player.stun = 0.4;
      const d = b.ent && b.ent.dummy;
      if (d && d.state === 'standing') { d.knock(null); for (const n in d.parts) d.parts[n].body.velocity.set(pd.vel.x, pd.vel.y, pd.vel.z); d.markFling(); }
    };
    if (G.player) check(G.player.body);
    for (const b of G.world.bodies) if (b.type === CANNON.Body.DYNAMIC && !b.isPlayer && b.sleepState !== CANNON.Body.SLEEPING) check(b);
  }
}

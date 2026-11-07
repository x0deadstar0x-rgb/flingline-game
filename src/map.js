// Maps: static world, breakable terrain, pads, water, sky.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, rand, clamp, tv } from './core.js';
import { TEX } from './textures.js';
import { createEnt, buildPrefab, spawnItem, ITEMS, removeEnt, removeRope, addRope } from './items.js';
import { spawnDummy } from './dummy.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { createTerrain, terrainHeight, carveTerrain, updateTerrain, cubeBurst, updateCubes, clearCubes, clearTerrain, setupWater, addGridStatic } from './terrain.js';
import { setBuildingGroup, clearBuildings } from './buildings.js';
import { addPool, clearPools, updatePools } from './liquids.js';
import { planCity, buildCityBlocks, lotAt, PITCH, ROAD, WALK, LOT } from './city.js';

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
  b.isGridStatic = true; // found through the scenery grid, not the general pair search
  G.world.addBody(b);
  addGridStatic(b);
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
// lots of trees at once (big maps): a few instanced meshes for all of them, a collider each
const trunkGeoI = new THREE.CylinderGeometry(0.22, 0.32, 2.2, 6), coneGeoI = new THREE.ConeGeometry(1, 1, 7);
function forest(list, colors = null) {
  if (!list.length) return;
  const cols = colors || (snowyTrees ? [0xeef4f8] : leafCols);
  const trunks = new THREE.InstancedMesh(trunkGeoI, smat(0x7a5230), list.length);
  const per = cols.map(() => []);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  list.forEach(([x, y, z, s], n) => {
    trunks.setMatrixAt(n, m4.compose(new THREE.Vector3(x, y + 1.1 * s, z), q.identity(), new THREE.Vector3(s, s, s)));
    const ci = (r01() * cols.length) | 0;
    for (let i = 0; i < 3; i++) per[ci].push(m4.clone().compose(new THREE.Vector3(x, y + (2.2 + i * 0.9) * s, z), q.setFromEuler(e.set(0, r01() * 3, 0)), new THREE.Vector3((1.6 - i * 0.4) * s, 1.6 * s, (1.6 - i * 0.4) * s)));
    addStatic(new CANNON.Cylinder(0.3 * s, 0.3 * s, 2.2 * s, 6), new THREE.Vector3(x, y + 1.1 * s, z), null, null);
    addStatic(new CANNON.Sphere(1.3 * s), new THREE.Vector3(x, y + 3 * s, z), null, null);
  });
  for (const m of [trunks]) { m.castShadow = true; m.receiveShadow = true; m.frustumCulled = false; mapGroup.add(m); }
  per.forEach((mats, ci) => {
    if (!mats.length) return;
    const im = new THREE.InstancedMesh(coneGeoI, smat(cols[ci]), mats.length);
    mats.forEach((mm, k) => im.setMatrixAt(k, mm));
    im.castShadow = true; im.receiveShadow = true; im.frustumCulled = false;
    mapGroup.add(im);
  });
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
  // things to drive (V to get in)
  sleepy(() => { put('kart', -6, 0.3, 26); put('kart', -3, 0.3, 26); put('truck', 8, 0.6, 24); put('car', 14, 0.3, 24); });
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
  if (edge > 115) h += (edge - 115) * 1.2;
  const sp = Math.hypot(x, z - 50);
  if (sp < 16) h = h * (sp / 16) + 2 * (1 - sp / 16);
  return h + 2;
}
// a tunnel through the ground: points [x, y, z, radius]
function tunnel(stamp, pts) {
  for (let s = 0; s < pts.length - 1; s++) {
    const a = pts[s], b = pts[s + 1];
    const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]), n = Math.max(1, Math.ceil(L / 0.6));
    for (let q = 0; q <= n; q++) {
      const t = q / n, x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t, z = a[2] + (b[2] - a[2]) * t;
      stamp(x, y, z, (a[3] + (b[3] - a[3]) * t) * (0.92 + 0.16 * Math.sin(x * 1.3 + z * 0.7)));
    }
  }
}
// glowing crystals growing out of a cave floor
const crystalGeo = new THREE.ConeGeometry(0.2, 1, 5);
function crystals(x, yHint, z, s, color) {
  const fy = G.floorAt ? G.floorAt(x, yHint, z) : -1e9;
  if (fy < -1e8) return;
  const m0 = matCache['cr' + color] || (matCache['cr' + color] = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1.4, flatShading: true, roughness: 0.25 }));
  for (let q = 0; q < 5; q++) {
    const h = (0.5 + r01() * 1.3) * s;
    const m = new THREE.Mesh(crystalGeo, m0);
    m.scale.set(s, h, s);
    m.position.set(x + rr(-0.5, 0.5) * s, fy + h / 2 - 0.08, z + rr(-0.5, 0.5) * s);
    m.rotation.set(rr(-0.4, 0.4), rr(0, 3), rr(-0.4, 0.4));
    mapGroup.add(m);
  }
}
function buildHills() {
  srand(23);
  makeTerrain({ W: 300, es: 3, height: hillsHeight, bedrock: -10, color: (h) => (h < 0.3 ? 0xe2cf95 : h < 14 ? 0x5fae4a : h < 22 ? 0x7d8288 : 0xf4f7fb) });
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
  for (let i = 0; i < 170; i++) {
    const x = rr(-118, 118), z = rr(-118, 118), y = gh(x, z);
    if (y > 1 && y < 15 && Math.hypot(x, z - 50) > 14 && Math.hypot(x - 45, z + 35) > 14) tree(x, y - 0.2, z, rr(0.8, 1.5));
  }
  for (let i = 0; i < 45; i++) { const x = rr(-118, 118), z = rr(-118, 118); rock(x, gh(x, z), z, rr(0.6, 2)); }
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
  const blocks = planCity(r01);
  const blockAt = (x, z) => { const gx = Math.round(x / PITCH), gz = Math.round(z / PITCH); return blocks.find((k) => k.gx === gx && k.gz === gz) || null; };
  const loc = (v) => { const m = ((v % PITCH) + PITCH * 1.5) % PITCH - PITCH / 2; return m; }; // -24..24 inside a block
  const ROADH = PITCH / 2 - ROAD / 2; // past this (from a block's centre) it's road
  const underBuilding = (x, z) => { const blk = blockAt(x, z); return blk && lotAt([blk], x, z); };
  makeTerrain({
    W: 264, es: 2, bedrock: -6,
    height: (x, z) => (underBuilding(x, z) ? -0.5 : 0),
    color: (h, x, z) => {
      const lx = loc(x), lz = loc(z), ax = Math.abs(lx), az = Math.abs(lz);
      const rx = ax > ROADH, rz = az > ROADH; // on a road running along z / along x
      if (rx || rz) {
        if (rx && rz) return 0x34373c; // crossing
        const across = rx ? lz : lx, along = rx ? z : x, off = rx ? ax : az;
        if (Math.abs(across) > LOT && Math.abs(across) <= LOT + WALK) return (Math.floor((rx ? x : z) * 2) & 1) ? 0xd8d8d0 : 0x34373c; // zebra crossing
        if (off > PITCH / 2 - 0.3 && (Math.floor(along / 3) & 1)) return 0xe0b43a; // dashed centre line
        if (off > ROADH && off < ROADH + 0.5) return 0xc9c9c2; // edge line
        return 0x34373c;
      }
      if (ax > LOT || az > LOT) return ((Math.floor(x / 2) + Math.floor(z / 2)) & 1) ? 0xb5b0a6 : 0xaba69c; // sidewalk
      const blk = blockAt(x, z);
      const use = blk ? blk.use : 'plaza';
      if (h < -0.1) return 0x8a8a84; // under a building
      if (use === 'park') return (Math.abs(lx) < 1.5 || Math.abs(lz) < 1.5 || Math.abs(Math.abs(lx) - Math.abs(lz)) < 1.2) ? 0xc2b38f : ((Math.floor(x) + Math.floor(z * 1.3)) % 7 === 0 ? 0x6aa857 : 0x5f9e4a);
      if (use === 'parking') return (Math.abs(lz) < 3) ? 0x45484d : ((Math.abs(lx % 3) < 0.25 && Math.abs(lz) > 4) ? 0xe2e2da : 0x45484d);
      if (use === 'plaza') return ((Math.floor(x / 1.5) + Math.floor(z / 1.5)) & 1) ? 0xd2cbbb : 0xc4bdad;
      return ((Math.floor(x) + Math.floor(z)) & 1) ? 0xbfb9ac : 0xb5afa2;
    },
  });
  setBuildingGroup(mapGroup);
  buildCityBlocks(blocks, r01);
  // far skyline beyond the edge (just scenery)
  for (let i = 0; i < 34; i++) {
    const a = (i / 34) * Math.PI * 2 + rr(-0.05, 0.05), r = rr(170, 215), h = rr(30, 95), w = rr(14, 26);
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, rr(14, 26)), smat([0x8b95a1, 0x6e7781, 0xa3acb6, 0x5f6973, 0x7d8a99][i % 5]));
    m.rotation.y = rr(0, 3);
    deco(m, Math.cos(a) * r, h / 2 - 1, Math.sin(a) * r);
  }
  // plaza: fountain, trees, benches, a launch pad
  scyl(4.2, 0.7, 0, 0.35, -9, 0xbdb6a6, null, 16);
  const pool = new THREE.Mesh(new THREE.CylinderGeometry(3.7, 3.7, 0.1, 16), new THREE.MeshStandardMaterial({ color: 0x4aa3d8, roughness: 0.2, metalness: 0.1 }));
  deco(pool, 0, 0.66, -9);
  scyl(0.5, 2.4, 0, 1.6, -9, 0xd8d2c4, null, 8);
  for (const [x, z] of [[-10, -10], [10, -10], [-10, 10], [10, 10], [-12, 0], [12, 0]]) tree(x, 0, z, 1.1);
  pad(0, 0, 4, new THREE.Vector3(0, 30, 0));
  sleepy(() => {
    for (const [x, z, r] of [[-6, -14, 0], [6, -14, 0], [-14, -6, Math.PI / 2], [14, -6, -Math.PI / 2]]) put('bench', x, 0, z, { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), r) });
    put('vending', 13, 0, 13); put('vending', 14.3, 0, 13);
    for (let i = 0; i < 4; i++) put('bin', -13 + i * 0.1, 0, 12 - i * 8);
    // street lamps round the plaza and along the main streets
    for (let i = -4; i <= 4; i++) { if (i === 0) continue; put('lamp', i * 11, 0, 16.8); put('lamp', i * 11, 0, -16.8); }
    for (let i = -4; i <= 4; i += 2) { if (i === 0) continue; put('lamp', 16.8, 0, i * 11); put('lamp', -16.8, 0, i * 11); }
    // parked cars along the streets
    for (let i = 0; i < 18; i++) {
      const along = i % 2 === 0, side = (i >> 1) % 2 ? 1 : -1;
      const road = (Math.floor(r01() * 4) - 2) * PITCH + PITCH / 2; // one of the roads
      const t = rr(-90, 90);
      const off = road + side * (ROAD / 2 - 1.4);
      if (along) put('car', t, 0, off, { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2 + (side > 0 ? Math.PI : 0)) });
      else put('car', off, 0, t, { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), side > 0 ? Math.PI : 0) });
    }
    for (let i = 0; i < 8; i++) put('mailbox', rr(-90, 90), 0, (r01() < 0.5 ? -1 : 1) * 16.5 + (r01() < 0.5 ? 48 : 0));
    // road works
    for (let i = 0; i < 8; i++) put('cone', 30 + i * 2.2, 0, PITCH / 2 + 2);
    for (let i = 0; i < 4; i++) put('barrier', 28 + i * 3.2, 0, PITCH / 2 - 2);
  });
  // parks and car parks
  for (const blk of blocks) {
    if (blk.use === 'park') {
      for (let i = 0; i < 9; i++) { const x = blk.cx + rr(-12, 12), z = blk.cz + rr(-12, 12); if (Math.abs(x - blk.cx) > 2.5 && Math.abs(z - blk.cz) > 2.5) tree(x, 0, z, rr(0.9, 1.5)); }
      sleepy(() => { put('bench', blk.cx + 4, 0, blk.cz + 2.5); put('bench', blk.cx - 4, 0, blk.cz - 2.5, { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI) }); put('bin', blk.cx + 2.2, 0, blk.cz + 2.2); });
    } else if (blk.use === 'parking') {
      sleepy(() => { for (let i = 0; i < 8; i++) if (r01() < 0.75) put('car', blk.cx - 10.5 + i * 3, 0, blk.cz + (i % 2 ? 7 : -7), { quat: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), i % 2 ? Math.PI : 0) }); });
    }
  }
  crowd(14, 0, 2, 13); crowd(6, 0, 20, 30); crowd(2, 48, 20, 6, 0, ['zombie']);
}

// ---- MEGA WORLD: everything in one huge map
// smooth random noise (value noise), 0..1
function h2(i, j) { let h = Math.imul(i, 374761393) + Math.imul(j, 668265263) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }
function vnoise(x, z) {
  const i = Math.floor(x), j = Math.floor(z), fx = x - i, fz = z - j;
  const u = fx * fx * (3 - 2 * fx), v = fz * fz * (3 - 2 * fz);
  const a = h2(i, j), b = h2(i + 1, j), c = h2(i, j + 1), d = h2(i + 1, j + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x, z, o = 4) { let s = 0, a = 0.5, f = 1; for (let k = 0; k < o; k++) { s += a * vnoise(x * f + k * 17.3, z * f - k * 9.1); f *= 2.03; a *= 0.5; } return s / (1 - Math.pow(0.5, o)); }
function ridged(x, z) { let s = 0, a = 0.5, f = 1; for (let k = 0; k < 5; k++) { const n = 1 - Math.abs(vnoise(x * f + k * 31.7, z * f + k * 7.7) * 2 - 1); s += a * n * n; f *= 2.1; a *= 0.5; } return s / 0.97; }
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const WORLD_HALF = 360;
const VOLCANO = [-215, 225], ACID = [-235, 40, 34], DESERT_X = 150, MEADOW = [0, 40];
function worldHeight(x, z) {
  // rolling meadows and hills everywhere
  let h = 2 + 10 * (fbm(x * 0.0055, z * 0.0055) - 0.45) + 3 * (fbm(x * 0.02, z * 0.02, 3) - 0.5);
  // a flat-ish meadow where you start
  const dm = Math.hypot(x - MEADOW[0], z - MEADOW[1]);
  if (dm < 70) h = h * sstep(25, 70, dm) + 3 * (1 - sstep(25, 70, dm));
  // the northern mountains
  const mN = sstep(-90, -210, z);
  if (mN > 0) h += mN * (35 + 95 * ridged(x * 0.007 + 3, z * 0.007 + 5));
  // desert in the east: flat sand with terraced mesas
  const mE = sstep(DESERT_X - 30, DESERT_X + 30, x) * (1 - mN);
  if (mE > 0) {
    const mesa = Math.max(0, fbm(x * 0.012 + 40, z * 0.012) - 0.55) * 90;
    h = h * (1 - mE) + mE * (2.5 + Math.floor(Math.min(28, mesa) / 4) * 4);
  }
  // the volcano (with a crater at the top)
  const dv = Math.hypot(x - VOLCANO[0], z - VOLCANO[1]);
  if (dv < 125) { const cone = 92 * Math.pow(1 - dv / 125, 1.35); h = Math.max(h, dv < 16 ? 74 : cone); }
  // the acid swamp in the west: a bowl
  const da = Math.hypot(x - ACID[0], z - ACID[1]);
  if (da < ACID[2] + 20) h = Math.min(h, -0.4 + Math.max(0, da - ACID[2] + 6) * 0.45 + 0.4 * Math.sin(x * 0.4 + z * 0.3)); // (above the sea level, so it holds acid, not sea water)
  // the sea in the south (a rocky headland with a sea cave sticks out)
  const coast = 230 + 25 * Math.sin(x * 0.012);
  const sea = sstep(coast, coast + 45, z);
  if (sea > 0) h = h * (1 - sea) + sea * -12;
  const dh = Math.hypot(x - 150, z - 262);
  if (dh < 40) h = Math.max(h, 22 * Math.pow(1 - dh / 40, 0.7) - 2);
  // the edges (except the sea) rise into hills so you can't fall off
  const ex = Math.abs(x), ez = -z;
  if (ex > WORLD_HALF - 30) h += (ex - (WORLD_HALF - 30)) * 1.5;
  if (ez > WORLD_HALF - 30) h += (ez - (WORLD_HALF - 30)) * 1.5;
  return h;
}
function worldColor(h, x, z) {
  const dv = Math.hypot(x - VOLCANO[0], z - VOLCANO[1]);
  if (dv < 125 && h > 4) return h > 70 ? 0x2e2b29 : 0x3d3a38;                 // volcano rock and ash
  if (Math.hypot(x - ACID[0], z - ACID[1]) < ACID[2] + 22) return h < -1 ? 0x4a5a2a : 0x5b6b3a; // swamp
  if (h < 1.2 && z > 150) return 0xe2cf95;                                     // beach
  if (h < -1) return 0xc9b27a;                                                 // sea floor
  if (h > 72) return 0xf2f6f9;                                                 // snowy peaks
  if (h > 42) return ((Math.floor(h) % 6) < 3) ? 0x7d8288 : 0x868b91;          // mountain rock
  if (x > DESERT_X && z < -60) return 0xeef3f6;                                // snowfield (north-east)
  if (x > DESERT_X - 10) return h > 6 ? [0xc8743e, 0xd88a4f, 0xb5622f][Math.floor(h / 4) % 3] : 0xe2b97a; // desert + mesas
  if (x < -150) return 0x4f8f3e;                                               // forest floor
  return h > 14 ? 0x6e9f45 : 0x5fae4a;                                         // grass
}
function buildWorld() {
  srand(101);
  const gh = worldHeight;
  makeTerrain({
    W: WORLD_HALF * 2, es: 3, bedrock: -40, height: worldHeight, color: worldColor, stream: true, near: 135, spawn: [MEADOW[0], 0, MEADOW[1]],
    caves: (stamp, fill) => {
      // the big mountain north of the meadow: a cave mouth, a long tunnel, a huge crystal cavern
      tunnel(stamp, [[0, gh(0, -175) + 2, -175, 3.8], [0, 20, -195, 4], [-6, 26, -220, 4.4], [-4, 30, -245, 5]]);
      for (const [x, y, z, r] of [[0, 34, -265, 18], [12, 30, -278, 12], [-14, 38, -258, 11]]) stamp(x, y, z, r);
      fill(-6, -268, 2, 10, 60); fill(8, -262, 1.8, 10, 60);
      // a sealed crystal vault deeper in (dig to it)
      stamp(0, 44, -305, 6);
      // the pirates' sea cave in the headland
      tunnel(stamp, [[150, -0.5, 300, 3.5], [150, 0.5, 282, 3.5], [148, 1.5, 266, 4], [146, 2.5, 256, 5]]);
      // the desert bunker: a shaft and a room
      tunnel(stamp, [[230, gh(230, 60) + 1, 60, 1.6], [230, -4, 60, 1.6]]);
      stamp(232, -7, 63, 5);
    },
  });
  water1(-1, 1100);
  // pools: the acid swamp and the volcano's lava
  addPool('acid', ACID[0], ACID[1], ACID[2] + 4, 1.2, mapGroup);
  addPool('lava', VOLCANO[0], VOLCANO[1], 15.5, 74.6, mapGroup);
  const F = (x, y, z) => (G.floorAt ? G.floorAt(x, y, z) : y);
  // ---- forests (instanced)
  const trees = [], pines = [], dead = [];
  for (let i = 0; i < 2600 && trees.length < 900; i++) {
    const x = rr(-340, 340), z = rr(-340, 220), y = gh(x, z);
    if (y < 1 || y > 42) continue;
    if (Math.hypot(x - MEADOW[0], z - MEADOW[1]) < 60 || Math.hypot(x - VOLCANO[0], z - VOLCANO[1]) < 125) continue;
    if (Math.hypot(x - ACID[0], z - ACID[1]) < ACID[2] + 22) { if (dead.length < 40) dead.push([x, y - 0.2, z, rr(0.8, 1.3)]); continue; }
    if (x > DESERT_X - 10 && z > -60) continue;                 // desert: no trees
    const dense = x < -150 ? 1 : 0.28;
    if (Math.random() > dense) continue;
    (x > DESERT_X && z < -60 ? pines : trees).push([x, y - 0.2, z, rr(0.8, 1.6)]);
  }
  forest(trees); forest(pines, [0xeef4f8, 0xdfe9f0]);
  forest(dead, [0x4a3b2a]);
  for (let i = 0; i < 70; i++) { const x = rr(-340, 340), z = rr(-340, 260), y = gh(x, z); if (y > 0) rock(x, y, z, rr(0.8, 2.6)); }
  // ---- crystals in the mountain cavern and the vault
  for (let i = 0; i < 18; i++) { const a = rr(0, 6.28), r = rr(0, 15); crystals(Math.cos(a) * r, 30, -265 + Math.sin(a) * r, rr(0.9, 2.2), [0x7ff7ff, 0xb98cff, 0xff8cf0][i % 3]); }
  crystals(0, 42, -305, 2.4, 0xffd86b);
  // ---- the sky island above the meadow, and the hidden launch pad in the forest that gets you there
  const SI = [-40, -10], SY = gh(SI[0], SI[1]) + 78;
  sbox(22, 2, 22, SI[0], SY, SI[1], 0x5fae4a, 'grass', null, 4);
  sbox(14, 3, 14, SI[0], SY - 2.4, SI[1], 0x7d6a54);
  sbox(7, 3, 7, SI[0], SY - 5, SI[1], 0x6b5a46);
  tree(SI[0] + 6, SY + 1, SI[1] + 5, 1.3); tree(SI[0] - 7, SY + 1, SI[1] - 4, 1.1);
  pad(SI[0] + 9, gh(SI[0] + 9, SI[1] + 13), SI[1] + 13, new THREE.Vector3(-1.8, 41.5, -2.6), 0xb98cff);
  // ---- the village where you start
  sleepy(() => {
    for (const [x, z, r] of [[-18, 20, 0.2], [18, 22, -0.3], [-22, 58, 3.1], [20, 60, 2.9]]) buildPrefab('house', new THREE.Vector3(x, gh(x, z), z), r, false);
    for (let i = 0; i < 6; i++) put('lamp', -15 + i * 6, gh(-15 + i * 6, 40) , 34);
    for (const [x, z] of [[-6, 46], [6, 46]]) put('bench', x, gh(x, z), z);
    for (const [x, z] of [[-30, 30], [28, 44], [0, 70]]) put('car', x, gh(x, z) + 0.2, z);
    put('truck', 12, gh(12, 30) + 0.6, 30); put('kart', -12, gh(-12, 52) + 0.3, 52); put('kart', -9, gh(-9, 52) + 0.3, 52);
    put('truck', 205, gh(205, 20) + 0.6, 20);
    pallets(-8, gh(-8, 10) + 0.1, 10, 3);
    put('tnt_mega', 40, gh(40, 10) + 0.3, 10);
    // the beach and its pier
    for (let i = 0; i < 6; i++) put('beachball', rr(-60, 60), gh(0, 236) + 1, rr(236, 246));
    // the desert: a fort, cacti, barrels, a minefield
    buildPrefab('fort', new THREE.Vector3(240, gh(240, 0), 0), 0, false);
    for (let i = 0; i < 26; i++) { const x = rr(DESERT_X + 20, 330), z = rr(-50, 200), y = gh(x, z); if (y > 1 && y < 4) put('cactus', x, y, z); }
    for (let i = 0; i < 10; i++) { const x = rr(200, 260), z = rr(100, 140); put(i % 3 ? 'barrel' : 'drum', x, gh(x, z), z); }
    // the bunker under the desert: the stash
    for (let i = 0; i < 4; i++) put('tnt', 230 + i, F(232, -6, 63) + 0.2, 63);
    put('nuke', 234, F(234, -6, 61) + 0.3, 61);
    for (let i = 0; i < 4; i++) put('gold', 231 + i * 0.7, F(231, -6, 66) + 0.2, 66);
    // pirates' treasure in the sea cave, gold in the vault
    for (let i = 0; i < 5; i++) put('gold', 146 + rr(-2, 2), F(146, 3, 256) + 0.2, 256 + rr(-2, 2));
    for (let i = 0; i < 6; i++) put('gold', rr(-3, 3), F(0, 44, -305) + 0.2, -305 + rr(-3, 3));
    for (let i = 0; i < 3; i++) put('gold', SI[0] + rr(-3, 3), SY + 1.3, SI[1] + rr(-3, 3));
    // snowfield: snowmen and an igloo
    for (let i = 0; i < 5; i++) { const x = rr(190, 300), z = rr(-160, -80), y = gh(x, z); buildPrefab('snowman', new THREE.Vector3(x, y, z), rr(0, 6), false); }
    buildPrefab('igloo', new THREE.Vector3(240, gh(240, -120), -120), 0, false);
    // boulders at the top of a hill, for rolling
    for (let i = 0; i < 6; i++) put('boulder', -80 + i * 2.6, gh(-80, -60) + 1, -60);
  });
  // the pier
  for (let i = 0; i < 9; i++) sbox(3, 0.3, 4, 0, 0.2, 248 + i * 4, 0x8a6a46, 'plank');
  for (let i = 0; i < 9; i++) for (const s of [-1.3, 1.3]) sbox(0.3, 4, 0.3, s, -1.6, 248 + i * 4, 0x6e4626);
  // bunker hatch ring
  scyl(2.4, 0.4, 230, gh(230, 60) + 0.2, 60, 0x5a6066);
  // ---- people
  crowd(10, 0, 40, 18, 3.1); crowd(4, 0, 238, 20, gh(0, 238) + 0.1); crowd(3, 240, 0, 10, gh(240, 0) + 0.1); crowd(2, 230, -110, 8, gh(230, -110) + 0.1);
  crowd(2, -235, 80, 6, gh(-235, 80) + 0.1, ['zombie']);
}

// ---- Caves: a mountain full of them
function cavesHeight(x, z) {
  const e = Math.max(Math.abs(x), Math.abs(z));
  const top = 36 + 1.5 * Math.sin(x * 0.07) * Math.cos(z * 0.06) + Math.sin(x * 0.19 + z * 0.13);
  if (e < 84) return top;
  if (e < 98) return 1 + (top - 1) * Math.pow((98 - e) / 14, 0.6); // cliffs all round
  return 1 + 0.4 * Math.sin(x * 0.2) * Math.sin(z * 0.17);
}
function buildCaves() {
  srand(77);
  makeTerrain({
    W: 220, es: 3, bedrock: -40, height: cavesHeight,
    color: (h) => (h > 30 ? 0x4f7a3a : h > 3 ? 0x6e7076 : 0x5fae4a),
    // rock in bands of colour, deeper = darker
    under: (d, topc) => (d <= 0 ? topc : d <= 2 ? 0x5a5550 : [0x6d6f76, 0x63666e, 0x77716a, 0x5d6068][Math.floor(d / 12) % 4]),
    caves: (stamp, fill) => {
      // the way in, from the valley in the south
      tunnel(stamp, [[0, 3.6, 100, 4], [0, 4, 84, 4.4], [2, 4.5, 66, 4.6], [1, 6, 48, 5]]);
      // the Great Hall, held up by four pillars
      for (const [x, y, z, r] of [[0, 10, 30, 16], [-10, 8, 22, 12], [10, 9, 38, 12], [0, 14, 28, 13], [-6, 6, 40, 9]]) stamp(x, y, z, r);
      for (const [x, z] of [[-8, 24], [8, 24], [-8, 37], [8, 37]]) fill(x, z, 1.7, -8, 30);
      // a skylight up to the top of the mountain
      tunnel(stamp, [[6, 22, 26, 2.6], [7, 30, 23, 2.4], [8, 38, 20, 2.6]]);
      // east: crystal grotto, and a deep pit below it with a hidden chamber
      tunnel(stamp, [[16, 6, 30, 3.2], [30, 5, 26, 3], [42, 4, 20, 3.2]]);
      for (const [x, y, z, r] of [[52, 4, 18, 10], [58, 6, 26, 7], [48, 7, 10, 6]]) stamp(x, y, z, r);
      tunnel(stamp, [[55, -2, 12, 2.3], [55, -9, 11, 2.2], [55, -15, 10, 2.4]]);
      stamp(55, -17, 8, 8); stamp(62, -16, 4, 5);
      // west: an underground lake
      tunnel(stamp, [[-14, 4, 26, 3.2], [-28, 2, 24, 3.2], [-40, 1, 20, 3.4]]);
      for (const [x, y, z, r] of [[-55, 0, 18, 13], [-62, 2, 8, 9], [-48, 1, 28, 8]]) stamp(x, y, z, r);
      // north: down to the lava chasm, with a narrow bridge over the lava
      tunnel(stamp, [[0, 6, 14, 3.5], [1, 2, 0, 3.4], [3, -4, -14, 3.6], [2, -8, -24, 4]]);
      for (const [x, y, z, r] of [[0, -10, -36, 14], [9, -12, -48, 10], [-9, -10, -46, 10], [0, -8, -56, 8]]) stamp(x, y, z, r);
      for (let z = -26; z >= -60; z -= 0.5) fill(Math.sin(z * 0.15) * 2.5, z, 1.2, -40, -13.5);
      // the old mine: narrow tunnels winding north-west
      tunnel(stamp, [[-12, 8, 18, 1.9], [-20, 9, 5, 1.8], [-32, 9, -5, 1.8], [-30, 10, -20, 1.8], [-44, 11, -28, 1.8], [-55, 12, -35, 1.9], [-62, 12, -50, 2]]);
      stamp(-62, 12, -52, 4.5);
      // a sealed room nobody has found (dig to it from the mine)
      stamp(-36, 15, -40, 4.5);
    },
  });
  const F = (x, y, z) => (G.floorAt ? G.floorAt(x, y, z) : y);
  // crystals: lots in the grotto, some everywhere else
  for (let i = 0; i < 26; i++) { const a = rr(0, Math.PI * 2), r = rr(0, 12); crystals(52 + Math.cos(a) * r, 6, 18 + Math.sin(a) * r, rr(0.8, 2), [0x7ff7ff, 0xb98cff, 0xff8cf0][i % 3]); }
  for (const [x, y, z, s, c] of [[0, 4, 30, 1.6, 0x7ff7ff], [-12, 4, 20, 1, 0xb98cff], [12, 4, 40, 1.2, 0x7ff7ff], [55, -16, 8, 2.2, 0xffd86b], [60, -16, 4, 1.4, 0xffd86b], [-60, 4, 6, 1.1, 0x7ff7ff], [0, -9, -30, 1.3, 0xff8a5a], [-36, 15, -40, 1.8, 0xffd86b]]) crystals(x, y, z, s, c);
  // the lake and the lava
  addPool('water', -56, 16, 15, -3, mapGroup);
  addPool('lava', 0, -44, 19, -17, mapGroup);
  // mine supports: posts and a beam every few metres
  const mine = [[-12, 8, 18], [-20, 9, 5], [-32, 9, -5], [-30, 10, -20], [-44, 11, -28], [-55, 12, -35], [-62, 12, -50]];
  for (let s = 0; s < mine.length - 1; s++) {
    const [ax, ay, az] = mine[s], [bx, by, bz] = mine[s + 1];
    const L = Math.hypot(bx - ax, bz - az), n = Math.floor(L / 5);
    const dx = (bx - ax) / L, dz = (bz - az) / L;
    for (let q = 1; q <= n; q++) {
      const x = ax + (bx - ax) * q / (n + 1), z = az + (bz - az) * q / (n + 1), y = F(x, ay + (by - ay) * q / (n + 1), z);
      const ox = -dz * 1.35, oz = dx * 1.35, rot = [0, Math.atan2(dx, dz), 0];
      sbox(0.25, 2.4, 0.25, x + ox, y + 1.2, z + oz, 0x6e4626, 'plank', rot);
      sbox(0.25, 2.4, 0.25, x - ox, y + 1.2, z - oz, 0x6e4626, 'plank', rot);
      sbox(3.2, 0.25, 0.3, x, y + 2.45, z, 0x6e4626, 'plank', [0, Math.atan2(dx, dz) + Math.PI / 2, 0]);
      if (q % 2) { const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.3, 0.22), new THREE.MeshStandardMaterial({ color: 0xffc46b, emissive: 0xffa53a, emissiveIntensity: 2 })); deco(lamp, x, y + 2.15, z); }
    }
  }
  // lanterns along the way in
  for (let z = 92; z > 50; z -= 8) { const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.3), new THREE.MeshStandardMaterial({ color: 0xffc46b, emissive: 0xffa53a, emissiveIntensity: 2 })); deco(lamp, z % 16 ? 3.6 : -3.6, F(0, 4, z) + 2.6, z); }
  // a jump pad to get back out of the deep pit, and one on the lake shore
  pad(55, F(55, -16, 8), 8, new THREE.Vector3(0, 26, 0), 0xffb703);
  sleepy(() => {
    for (let i = 0; i < 5; i++) put('crate', rr(-6, 6), F(0, 6, 44), 44 + rr(-3, 3));
    for (let i = 0; i < 4; i++) put('tnt', -30 + i * 0.9, F(-30, 9, -6) + 0.1, -6);
    put('barrel', -44, F(-44, 11, -28) + 0.1, -27);
    for (let i = 0; i < 6; i++) put('gold', -36 + rr(-2, 2), F(-36, 15, -40) + 0.2, -40 + rr(-2, 2));   // the secret room
    for (let i = 0; i < 4; i++) put('gold', 55 + rr(-3, 3), F(55, -16, 8) + 0.2, 8 + rr(-3, 3));      // the deep pit
    for (let i = 0; i < 6; i++) put('crystal', 52 + rr(-6, 6), F(52, 4, 18) + 0.6, 18 + rr(-6, 6));
    for (let i = 0; i < 6; i++) put('boulder', rr(-10, 10), F(0, 10, 30) + 1, 30 + rr(-10, 10));
  });
  // up top
  for (let i = 0; i < 30; i++) { const x = rr(-78, 78), z = rr(-78, 78); tree(x, cavesHeight(x, z) - 0.2, z, rr(0.8, 1.3)); }
  for (let i = 0; i < 12; i++) { const x = rr(-100, 100), z = rr(98, 108); tree(x, 1, z, rr(0.8, 1.2)); }
  crowd(6, 0, 30, 8, F(0, 6, 30) + 0.1); crowd(3, -55, 30, 4, F(-50, 2, 28) + 0.1);
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
  { id: 'city', name: 'City', icon: '🏙️', desc: 'Huge towers made of blocks: climb the stairs to the roof, blow out the windows, bring them down', build: buildCity, spawn: [0, 1.2, 12], sky: [0x8fb3d9, 0xe8eef5], fog: [0xe8eef5, 110, 420], killY: -30, water: -1000, walk: 118 },
  { id: 'world', name: 'Mega World', icon: '🌍', desc: 'HUGE: mountains with a crystal cavern, snowfields, a desert with a buried bunker, a beach and sea cave, a forest with an acid swamp, a volcano, a sky island… room for everyone', build: buildWorld, spawn: [MEADOW[0], worldHeight(MEADOW[0], MEADOW[1]) + 2.5, MEADOW[1]], sky: [0x5ea6ff, 0xe3eefc], fog: [0xe3eefc, 170, 700], killY: -40, water: -1, walk: 330 },
  { id: 'caves', name: 'Caves', icon: '🦇', desc: 'A mountain full of caves: a great hall, a crystal grotto, an underground lake, a lava chasm, old mine tunnels, a skylight… and secrets', build: buildCaves, spawn: [0, 2.4, 110], sky: [0x6d8fb8, 0xd9c7a8], fog: [0xd9c7a8, 90, 330], killY: -60, water: -1000, walk: 100 },
  { id: 'flat', name: 'Flatlands', icon: '🟩', desc: 'Huge flat field: stunt ramps, sky platforms, ball pit', build: buildFlat, spawn: [0, 1.2, 34], sky: [0x5bb1ff, 0xe6f4ff], fog: [0xe6f4ff, 120, 450], killY: -40, water: -1000, walk: 140 },
  { id: 'hills', name: 'Hills', icon: '⛰️', desc: 'Big rolling hills, a lake, a castle hill & boulders to roll', build: buildHills, spawn: [0, 6, 50], sky: [0x7fb8ff, 0xffe8cc], fog: [0xffe8cc, 100, 360], killY: -30, water: -1, walk: 110 },
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
  G.cubeSinks = [];
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
  water = null; clouds = []; clearTerrain(); clearCubes(); clearBuildings(); clearPools(); G.groundAt = null;
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
  G.baseSun = t.sun; G.baseHemi = t.hemi;
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
  updatePools(dt);
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

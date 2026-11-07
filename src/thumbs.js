// Menu pictures: every item, tool, person and structure is drawn from its real 3D model
// as a white silhouette (lightly shaded so you can still read its shape).
// Pictures are made a few per frame and cached.
import * as THREE from 'three';
import { G } from './core.js';
import { ITEMS, buildMesh, prefabParts, makeBigGhost, isBigBuild } from './items.js';
import { buildHumanoid, poseHumanoid } from './dummy.js';
import { toolModel } from './viewmodel.js';

const SIZE = 112;
const TO_SRGB = new Uint8Array(256);
for (let i = 0; i < 256; i++) { const c = i / 255; TO_SRGB[i] = Math.round(255 * (c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055)); }
const cache = new Map();   // key -> dataURL
const waiting = new Map(); // key -> [callbacks]
const queue = [];
let raw = null, rawCtx = null;
let rt = null, scene = null, cam = null, canvas = null, ctx2d = null, pixels = null, running = false;
const white = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xcfcfcf });

function setup() {
  rt = new THREE.WebGLRenderTarget(SIZE, SIZE, { samples: 4 });
  scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 0.2));
  const d = new THREE.DirectionalLight(0xffffff, 0.45); d.position.set(-2, 4, 3); scene.add(d);
  cam = new THREE.PerspectiveCamera(28, 1, 0.01, 200);
  canvas = document.createElement('canvas'); canvas.width = canvas.height = SIZE;
  ctx2d = canvas.getContext('2d');
  raw = document.createElement('canvas'); raw.width = raw.height = SIZE;
  rawCtx = raw.getContext('2d');
  pixels = new Uint8Array(SIZE * SIZE * 4);
}

// the 3D thing to draw for a key like "item:crate", "tool:blaster"
function makeObject(key) {
  const [kind, id] = key.split(':');
  const g = new THREE.Group();
  if (kind === 'tool') {
    const m = toolModel(id);
    m.rotation.set(0.12, Math.PI / 2 + 0.35, 0); // side view, barrel to the right, slightly turned
    g.add(m);
    return g;
  }
  const def = ITEMS[id];
  if (!def) return null;
  if (def.dummy) {
    const v = def.dummy.variant;
    const n = v === 'crowd' ? 3 : 1;
    const s = v === 'big' ? 1.3 : v === 'tiny' ? 0.6 : 1;
    for (let k = 0; k < n; k++) {
      const meshes = buildHumanoid(s, { skin: 0xffffff, shirt: 0xffffff, pants: 0xffffff });
      const at = new THREE.Vector3((k - (n - 1) / 2) * 0.75, 0, k === 1 ? -0.4 : 0);
      poseHumanoid(meshes, s, at, 0.5, 0.6, v === 'ninja' ? 0.8 : 0.25, { armsUp: v === 'balloon', zombie: v === 'zombie' });
      for (const name in meshes) g.add(meshes[name]);
    }
    if (v === 'balloon') for (let k = 0; k < 3; k++) { const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 1), white); b.position.set(-0.4 + k * 0.4, 2.9 + (k % 2) * 0.3, 0); g.add(b); }
    if (v === 'robot') g.scale.setScalar(1.05);
    g.rotation.y = -0.4;
    return g;
  }
  if (def.prefab) {
    if (isBigBuild(def.prefab)) { const gh = makeBigGhost(def.prefab); g.add(gh); g.rotation.y = 0.6; return g; }
    for (const p of prefabParts(def.prefab)) {
      if (p.dummy) { const ms = buildHumanoid(1, { skin: 0xffffff, shirt: 0xffffff, pants: 0xffffff }); poseHumanoid(ms, 1, p.pos, 0, 0, 0); for (const n in ms) g.add(ms[n]); continue; }
      const m = buildMesh(p.def);
      m.position.copy(p.pos); m.quaternion.copy(p.quat); m.scale.setScalar(p.scale);
      g.add(m);
    }
    g.rotation.y = 0.6;
    return g;
  }
  const m = buildMesh(def);
  g.add(m);
  g.rotation.set(0, 0.6, 0);
  return g;
}

function render(key) {
  const obj = makeObject(key);
  if (!obj) return null;
  obj.traverse((o) => { if (o.isMesh) { o.material = white; o.castShadow = false; o.receiveShadow = false; } if (o.isSprite || o.isPoints || o.isLine) o.visible = false; });
  scene.add(obj);
  obj.updateMatrixWorld(true);
  // frame it: look a bit from above, fit the bounding sphere
  const box = new THREE.Box3().setFromObject(obj);
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const r = Math.max(0.05, sphere.radius);
  const dist = r / Math.sin(THREE.MathUtils.degToRad(cam.fov / 2)) * 1.02;
  const dir = new THREE.Vector3(0, 0.38, 1).normalize();
  cam.position.copy(sphere.center).addScaledVector(dir, dist);
  cam.near = dist / 50; cam.far = dist + r * 4;
  cam.lookAt(sphere.center);
  cam.updateProjectionMatrix();
  const R = G.renderer;
  const oldTarget = R.getRenderTarget(), oldColor = R.getClearColor(new THREE.Color()), oldAlpha = R.getClearAlpha();
  const oldShadow = R.shadowMap.enabled;
  R.shadowMap.enabled = false;
  R.setRenderTarget(rt);
  R.setClearColor(0x000000, 0);
  R.clear();
  R.render(scene, cam);
  R.readRenderTargetPixels(rt, 0, 0, SIZE, SIZE, pixels);
  R.setRenderTarget(oldTarget);
  R.setClearColor(oldColor, oldAlpha);
  R.shadowMap.enabled = oldShadow;
  scene.remove(obj);
  // copy into a 2D canvas (rows come out bottom-up)
  const img = rawCtx.createImageData(SIZE, SIZE);
  for (let y = 0; y < SIZE; y++) img.data.set(pixels.subarray((SIZE - 1 - y) * SIZE * 4, (SIZE - y) * SIZE * 4), y * SIZE * 4);
  // the render target holds linear light: convert to screen colours (otherwise white looks grey)
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) { d[i] = TO_SRGB[d[i]]; d[i + 1] = TO_SRGB[d[i + 1]]; d[i + 2] = TO_SRGB[d[i + 2]]; }
  rawCtx.putImageData(img, 0, 0);
  // crop to the drawn shape and scale it up to fill the picture
  let x0 = SIZE, y0 = SIZE, x1 = -1, y1 = -1;
  for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) if (img.data[(y * SIZE + x) * 4 + 3] > 10) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  ctx2d.clearRect(0, 0, SIZE, SIZE);
  if (x1 >= x0) {
    const w = x1 - x0 + 1, h = y1 - y0 + 1, pad = SIZE * 0.06;
    const k = Math.min((SIZE - pad * 2) / w, (SIZE - pad * 2) / h);
    ctx2d.imageSmoothingQuality = 'high';
    ctx2d.drawImage(raw, x0, y0, w, h, (SIZE - w * k) / 2, (SIZE - h * k) / 2, w * k, h * k);
  }
  return canvas.toDataURL('image/png');
}

function pump() {
  running = true;
  const t0 = performance.now();
  while (queue.length && performance.now() - t0 < 12) {
    const key = queue.shift();
    let url = null;
    try { url = render(key); } catch (e) { url = null; }
    cache.set(key, url);
    for (const cb of waiting.get(key) || []) cb(url);
    waiting.delete(key);
  }
  if (queue.length) requestAnimationFrame(pump); else running = false;
}

// get a picture: returns it now if ready, otherwise calls cb(url) later
export function thumb(key, cb) {
  if (cache.has(key)) return cache.get(key);
  if (!rt) setup();
  if (!waiting.has(key)) { waiting.set(key, []); queue.push(key); }
  if (cb) waiting.get(key).push(cb);
  if (!running) requestAnimationFrame(pump);
  return null;
}
export function thumbReady(key) { return cache.get(key) || null; }

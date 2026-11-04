// Shared game state + small helpers used by every module.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export const GROUP = { DYN: 1, PLAYER: 2, STATIC: 4 };
export const WATER_Y = -1.0;
export const ISLAND = 70; // half size of the island top

export const G = {
  scene: null,
  camera: null,
  renderer: null,
  world: null,
  ents: new Set(),
  dummies: new Set(),
  queue: [],        // functions to run right after the physics step
  timers: [],       // {t, fn}
  time: 0,
  shake: 0,
  player: null,
  aim: { origin: new THREE.Vector3(), dir: new THREE.Vector3(0, 0, -1), hand: new THREE.Vector3() },
  stats: { destroyed: 0, booms: 0, flings: 0, best: 0 },
  lastBoom: { pos: new THREE.Vector3(), time: -99 },
  sun: null,
  quality: 1,
  mats: {},         // physics materials
  ropes: [],
  welds: [],
  projectiles: [],
  extraForces: [],
  blackholes: [],
  grab: null,
  timeScale: 1,
  spawnId: 'crate',
  waterY: -1,
  killY: -30,
  pads: [],
  spawn: null,
  mapId: 'island',
};

try { G.stats.best = parseFloat(localStorage.getItem('fling_best') || '0') || 0; } catch (e) { /* ignore */ }

export function saveBest() {
  try { localStorage.setItem('fling_best', String(G.stats.best)); } catch (e) { /* ignore */ }
}

export function later(t, fn) { G.timers.push({ t: G.time + t, fn }); }
export function afterStep(fn) { G.queue.push(fn); }

export const v3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
export const cv = (v) => new CANNON.Vec3(v.x, v.y, v.z);
export const tv = (v) => new THREE.Vector3(v.x, v.y, v.z);
export const rand = (a, b) => a + Math.random() * (b - a);
export const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

const _rr = new CANNON.RaycastResult();
const _from = new CANNON.Vec3();
const _to = new CANNON.Vec3();
// Physics raycast. Returns {body, point, normal, dist} or null.
export function raycast(from, to, mask = GROUP.DYN | GROUP.STATIC) {
  _rr.reset();
  _from.set(from.x, from.y, from.z);
  _to.set(to.x, to.y, to.z);
  G.world.raycastClosest(_from, _to, { collisionFilterMask: mask, skipBackfaces: true }, _rr);
  if (!_rr.hasHit) return null;
  return {
    body: _rr.body,
    point: tv(_rr.hitPointWorld),
    normal: tv(_rr.hitNormalWorld),
    dist: _rr.distance,
  };
}

export function wakeAround(pos, r) {
  const r2 = r * r;
  for (const b of G.world.bodies) {
    if (b.type !== CANNON.Body.DYNAMIC) continue;
    const dx = b.position.x - pos.x, dy = b.position.y - pos.y, dz = b.position.z - pos.z;
    if (dx * dx + dy * dy + dz * dz < r2) b.wakeUp();
  }
}

// Floating DOM text popups.
const popups = [];
export function popup(text, pos, color = '#fff', size = 22) {
  const el = document.createElement('div');
  el.className = 'popup';
  el.textContent = text;
  el.style.color = color;
  el.style.fontSize = size + 'px';
  document.getElementById('popups').appendChild(el);
  popups.push({ el, pos: pos.clone(), t: 0 });
}
const _p = new THREE.Vector3();
export function updatePopups(dt) {
  for (let i = popups.length - 1; i >= 0; i--) {
    const p = popups[i];
    p.t += dt;
    p.pos.y += dt * 1.5;
    _p.copy(p.pos).project(G.camera);
    const vis = _p.z < 1;
    const x = (_p.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-_p.y * 0.5 + 0.5) * window.innerHeight;
    p.el.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px) scale(${1 + Math.max(0, 0.3 - p.t)})`;
    p.el.style.opacity = vis ? String(Math.max(0, 1 - Math.max(0, p.t - 1.0) / 0.6)) : '0';
    if (p.t > 1.6) { p.el.remove(); popups.splice(i, 1); }
  }
}

let toastTimer = 0;
export function toast(text, time = 1.6) {
  const el = document.getElementById('toast');
  el.textContent = text;
  el.style.opacity = '1';
  toastTimer = time;
}
export function updateToast(dt) {
  if (toastTimer > 0) {
    toastTimer -= dt;
    if (toastTimer <= 0) document.getElementById('toast').style.opacity = '0';
  }
}

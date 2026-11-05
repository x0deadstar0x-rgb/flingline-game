// Entry point: renderer, physics world, input, main loop.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, updatePopups, updateToast, toast } from './core.js';
import { initAudio, toggleMute, setListener, setVolume } from './audio.js';
import { S, setSetting, onSetting, applyAll } from './settings.js';
import { updateGrabFx } from './tools/grab.js';
import { initFx, updateFx } from './fx.js';
import * as Items from './items.js';
import { Player } from './player.js';
import { loadMap, updateMap, applyTime } from './map.js';
import { TOOL, updateProjectiles, updateBlackHoles } from './tools/index.js';
import { UI, buildHotbar, selectSlot, cycleTool, currentTool, openMenu, closeMenu, initMenu, updateHud } from './ui.js';

// expose a few helpers so modules can call each other without import cycles
G.spawnItem = Items.spawnItem;
G.addRope = Items.addRope;
G.removeRope = Items.removeRope;
G.removeEnt = Items.removeEnt;
G.ignite = Items.ignite;

// ---------------------------------------------------------------- renderer
const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
G.renderer = renderer;

const scene = new THREE.Scene();
G.scene = scene;
const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 1200);
G.camera = camera;
scene.add(camera);

const hemi = new THREE.HemisphereLight(0xcfe8ff, 0x6b5a3a, 1.1);
scene.add(hemi);
G.hemi = hemi;
const sun = new THREE.DirectionalLight(0xfff1d6, 2.2);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
const sc = sun.shadow.camera;
sc.left = -45; sc.right = 45; sc.top = 45; sc.bottom = -45; sc.near = 1; sc.far = 220;
sun.shadow.bias = -0.0005;
sun.shadow.normalBias = 0.03;
scene.add(sun, sun.target);
G.sun = sun;

// ---------------------------------------------------------------- physics
const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
world.broadphase = new CANNON.SAPBroadphase(world);
world.allowSleep = true;
world.solver.iterations = 10;
world.defaultContactMaterial.friction = 0.5;
world.defaultContactMaterial.restitution = 0.1;
world.defaultContactMaterial.contactEquationStiffness = 5e7;
world.defaultContactMaterial.contactEquationRelaxation = 4;
G.world = world;
Items.initMaterials();
world.addEventListener('preStep', Items.physicsForces);

initFx(scene);
loadMap('island');
G.player = new Player();
G.player.respawn();

// ---------------------------------------------------------------- input
const keys = new Set();
const taps = new Set();
const input = {
  lookX: 0, lookY: 0, mouseDown: false,
  held: (c) => keys.has(c),
  tap: (c) => taps.has(c),
};
let playing = false;
let lockFailed = false;

function requestLock() {
  if (lockFailed) return;
  try {
    const p = canvas.requestPointerLock && canvas.requestPointerLock();
    if (p && p.catch) p.catch(() => { lockFailed = true; });
  } catch (e) { lockFailed = true; }
}
G.requestLock = requestLock;

function start() {
  initAudio();
  playing = true;
  document.getElementById('start').classList.add('hidden');
  requestLock();
}
document.getElementById('start').addEventListener('click', start);
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  document.getElementById('paused').classList.toggle('show', playing && !locked && !UI.menuOpen && !lockFailed);
  if (!locked) { input.mouseDown = false; }
});
document.addEventListener('pointerlockerror', () => { lockFailed = true; document.getElementById('paused').classList.remove('show'); });
document.getElementById('paused').addEventListener('click', () => { requestLock(); });

canvas.addEventListener('mousedown', (e) => {
  if (e.button !== 0) return; // only plain clicks — no right-click / two-finger click needed
  if (!playing) return;
  if (document.pointerLockElement !== canvas && !lockFailed) { requestLock(); return; }
  initAudio();
  input.mouseDown = true;
  const t = currentTool();
  if (t.down) t.down();
  if (t.id !== 'fling') G.player.kick = Math.max(G.player.kick || 0, 0.25);
});
window.addEventListener('mouseup', (e) => { if (e.button === 0) input.mouseDown = false; });
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('mousemove', (e) => {
  if (!playing || UI.menuOpen) return;
  if (document.pointerLockElement === canvas || lockFailed) {
    // clamp spikes (some browsers report a huge jump right after locking)
    const mx = Math.max(-200, Math.min(200, e.movementX)), my = Math.max(-200, Math.min(200, e.movementY));
    const sens = S.sens / 1000;
    input.lookX += mx * sens;
    input.lookY += my * sens * (S.invertY ? -1 : 1);
  }
});

const PREVENT = new Set(['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter']);
window.addEventListener('keydown', (e) => {
  if (PREVENT.has(e.code)) e.preventDefault();
  if (e.repeat) return;
  if (!playing) { if (e.code === 'Enter' || e.code === 'Space') start(); return; }
  keys.add(e.code); taps.add(e.code);
  const typing = e.target && e.target.tagName === 'INPUT';
  if (e.code === 'Tab' || (e.code === 'KeyB' && !typing)) { if (UI.menuOpen) closeMenu(); else openMenu(); return; }
  if (e.code === 'Escape' && UI.menuOpen) { closeMenu(); return; }
  if (UI.menuOpen) return;
  if (/^Digit[0-9]$/.test(e.code)) { const n = +e.code.slice(5); selectSlot(n === 0 ? 9 : n - 1); }
  if (e.code === 'KeyQ') cycleTool(-1);
  if (e.code === 'KeyE') cycleTool(1);
  if (e.code === 'KeyN') { G.player.flying = !G.player.flying; toast(G.player.flying ? 'Fly mode ON (Space up, Shift down)' : 'Fly mode OFF'); }
  if (e.code === 'KeyG') { G.timeScale = G.timeScale < 1 ? 1 : 0.3; toast(G.timeScale < 1 ? 'SLOW-MO' : 'Normal speed'); }
  if (e.code === 'KeyM') toast(toggleMute() ? 'Muted' : 'Sound on');
  if (e.code === 'KeyH') openMenu('help');
  if (e.code === 'KeyC') { for (const ent of [...G.ents]) if (ent.spawned) Items.removeEnt(ent, true); for (const d of [...G.dummies]) if (d.spawned) d.remove(); toast('Cleared spawned stuff'); }
  if (e.code === 'KeyP') { loadMap(G.mapId); toast('Map reset'); }
  if (e.code === 'KeyL') { setSetting('quality', S.quality === 'high' ? 'low' : 'high'); toast(S.quality === 'high' ? 'Graphics: high' : 'Graphics: low (faster)'); }
  if (e.code === 'KeyU') undoSpawn();
  if (e.code === 'BracketLeft' || e.code === 'BracketRight') {
    setSetting('sens', Math.min(12, Math.max(0.3, +(S.sens * (e.code === 'BracketLeft' ? 0.85 : 1.18)).toFixed(2))));
    toast(`Mouse sensitivity: ${S.sens.toFixed(1)}`);
  }
  if (e.code === 'Enter') { input.mouseDown = true; const t = currentTool(); if (t.down) t.down(); }
});
window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (e.code === 'Enter') input.mouseDown = false;
});
window.addEventListener('blur', () => { keys.clear(); input.mouseDown = false; });
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// settings → engine
let lastQuality = null;
onSetting('quality', (q) => {
  renderer.shadowMap.enabled = q === 'high';
  renderer.setPixelRatio(q === 'high' ? Math.min(window.devicePixelRatio, 1.5) : 0.75);
  if (lastQuality !== null && lastQuality !== q) scene.traverse((o) => { if (o.material) o.material.needsUpdate = true; });
  lastQuality = q;
});
onSetting('volume', (v) => setVolume(v));
onSetting('time', (t) => applyTime(t));
applyAll();

// undo: removes the last thing you spawned (U)
function undoSpawn() {
  const grp = G.spawnLog && G.spawnLog.pop();
  if (!grp) { toast('Nothing to undo'); return; }
  for (const e of grp.ents) if (!e.dead) Items.removeEnt(e, false);
  for (const d of grp.dummies) if (!d.dead) d.remove();
  toast('Undone');
}

UI.onEquip = (t) => { G.player.setToolColor(t.color); G.toolNote = null; G.crossHint = null; };
initMenu();
buildHotbar();
G.player.setToolColor(currentTool().color);

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
const _right = new THREE.Vector3();
function frame() {
  requestAnimationFrame(frame);
  const rdt = Math.min(clock.getDelta(), 0.05);
  const dt = rdt * G.timeScale;
  G.time += dt;

  const active = playing && !UI.menuOpen;
  const k = (c) => active && keys.has(c);
  const pin = {
    f: k('KeyW'), b: k('KeyS'), l: k('KeyA'), r: k('KeyD'),
    sprint: k('ShiftLeft') || k('ShiftRight'), sprintDown: k('ShiftLeft') || k('ShiftRight'),
    jump: active && (taps.has('Space')), jumpHeld: k('Space'),
    lookX: input.lookX + ((k('ArrowLeft') ? -1 : 0) + (k('ArrowRight') ? 1 : 0)) * 2.2 * rdt,
    lookY: input.lookY + ((k('ArrowUp') ? -1 : 0) + (k('ArrowDown') ? 1 : 0)) * 1.6 * rdt,
  };
  input.lookX = 0; input.lookY = 0;

  // tools
  const tool = currentTool();
  if (active) {
    if (tool.update) tool.update(dt, input);
    if (input.mouseDown && tool.held) tool.held(dt);
  }

  // physics
  world.step(1 / 60, dt, 4);
  const q = G.queue.splice(0);
  for (const fn of q) fn();
  for (let i = G.timers.length - 1; i >= 0; i--) {
    if (G.timers[i].t <= G.time) { const t = G.timers[i]; G.timers.splice(i, 1); t.fn(); }
  }

  G.player.update(rdt, pin);
  Items.updateEnts(dt);
  Items.updateFirePatches(dt);
  for (const d of [...G.dummies]) if (!d.dead) d.update(dt);
  updateProjectiles(dt);
  updateBlackHoles(dt);
  updateMap(dt);
  updateFx(dt);
  updatePopups(rdt);
  updateToast(rdt);
  updateHud(rdt);
  updateGrabFx(dt);
  setListener(camera.position, _right.set(1, 0, 0).applyQuaternion(camera.quaternion));

  // shadows follow the player
  const pp = G.player.body.position;
  const so = G.sunOffset || [40, 70, 25];
  sun.position.set(pp.x + so[0], pp.y + so[1], pp.z + so[2]);
  sun.target.position.set(pp.x, pp.y, pp.z);

  taps.clear();
  renderer.render(scene, camera);
}
frame();
window.__G = G; // handy for debugging in the console
window.__T = { TOOL, UI, Items, loadMap, selectSlot, currentTool, input };

// Entry point: renderer, physics world, input, main loop.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, updatePopups, updateToast, toast } from './core.js';
import { initAudio, toggleMute, setListener, setVolume, setAudioPaused } from './audio.js';
import { input, press, release, addWheel, endFrame, clearInput, capturing, ctl, bindText } from './input.js';
import { S, setSetting, onSetting, applyAll } from './settings.js';
import { updateGrabFx, rotateHeld, line } from './tools/grab.js';
import { initFx, updateFx } from './fx.js';
import * as Items from './items.js';
import { Player } from './player.js';
import { loadMap, updateMap, applyTime } from './map.js';
import { TOOL, updateProjectiles, updateBlackHoles } from './tools/index.js';
import { initViewmodel, renderViewmodel } from './viewmodel.js';
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
initViewmodel(renderer);
loadMap('island');
G.player = new Player();
G.player.respawn();

// ---------------------------------------------------------------- input
// Keys / buttons go through input.js, which maps them to actions (rebindable).
let playing = false;
let lockFailed = false;
const isLocked = () => document.pointerLockElement === canvas;

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
  if (!isLocked()) clearInput();
  updatePausedOverlay();
});
document.addEventListener('pointerlockerror', () => { lockFailed = true; updatePausedOverlay(); });
document.getElementById('paused').addEventListener('click', () => { requestLock(); });
function updatePausedOverlay() {
  document.getElementById('paused').classList.toggle('show', playing && !isLocked() && !UI.menuOpen && !lockFailed);
}
G.updatePausedOverlay = updatePausedOverlay;

canvas.addEventListener('mousedown', (e) => {
  if (!playing) return;
  if (!isLocked() && !lockFailed) { if (e.button === 0) requestLock(); return; }
  initAudio();
  press('Mouse' + e.button);
  e.preventDefault();
});
window.addEventListener('mouseup', (e) => release('Mouse' + e.button));
// rebinding a mouse button from the menu
window.addEventListener('mousedown', (e) => { if (capturing() && e.target !== canvas) { e.preventDefault(); e.stopPropagation(); press('Mouse' + e.button); } }, true);
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.addEventListener('wheel', (e) => { if (playing && (isLocked() || lockFailed)) { e.preventDefault(); addWheel(e.deltaY); } }, { passive: false });
document.addEventListener('mousemove', (e) => {
  if (!playing || UI.menuOpen) return;
  if (isLocked() || lockFailed) {
    // clamp spikes (some browsers report a huge jump right after locking)
    const mx = Math.max(-200, Math.min(200, e.movementX)), my = Math.max(-200, Math.min(200, e.movementY));
    const sens = S.sens / 1000;
    input.lookX += mx * sens;
    input.lookY += my * sens * (S.invertY ? -1 : 1);
  }
});

const PREVENT = new Set(['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'F1', 'ControlLeft']);
window.addEventListener('keydown', (e) => {
  if (capturing()) { e.preventDefault(); press(e.code); return; }
  const typing = e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA');
  if (typing) {
    if (e.code === 'Escape' || e.code === 'Tab') { e.preventDefault(); e.target.blur(); if (G.onTypingEscape && G.onTypingEscape(e.target)) return; if (UI.menuOpen) closeMenu(); }
    return;
  }
  if (PREVENT.has(e.code)) e.preventDefault();
  if (e.repeat) return;
  if (!playing) { if (e.code === 'Enter' || e.code === 'Space') start(); return; }
  if (e.code === 'Escape' && UI.menuOpen) { closeMenu(); return; }
  initAudio();
  press(e.code);
});
window.addEventListener('keyup', (e) => release(e.code));
window.addEventListener('blur', () => clearInput());
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  needRender = true;
});

// ---------------------------------------------------------------- pause
// Single player: the menu, a released mouse or a hidden tab freeze EVERYTHING
// (physics, people, fire, timers, particles, sound) and stop redrawing.
// In a multiplayer room the world keeps going for everyone else.
let needRender = true;
G.requestRender = () => { needRender = true; };
function isPaused() {
  if (document.hidden) return true;
  if (G.net && G.net.active) return false;
  if (!playing) return true;
  return UI.menuOpen || (!isLocked() && !lockFailed);
}

// settings → engine
let lastQuality = null;
onSetting('quality', (q) => {
  renderer.shadowMap.enabled = q === 'high';
  renderer.setPixelRatio(q === 'high' ? Math.min(window.devicePixelRatio, 1.5) : 0.75);
  if (lastQuality !== null && lastQuality !== q) scene.traverse((o) => { if (o.material) o.material.needsUpdate = true; });
  lastQuality = q;
});
onSetting('volume', (v) => setVolume(v));
onSetting('time', (t) => { applyTime(t); needRender = true; });
onSetting('theme', (t) => document.body.classList.toggle('light', t === 'light'));
onSetting('fov', (f) => { camera.fov = f; camera.updateProjectionMatrix(); needRender = true; });
applyAll();

// undo: removes the last thing you spawned (U)
function undoSpawn() {
  const grp = G.spawnLog && G.spawnLog.pop();
  if (!grp) { toast('Nothing to undo'); return; }
  for (const e of grp.ents) if (!e.dead) Items.removeEnt(e, false);
  for (const d of grp.dummies) if (!d.dead) d.remove();
  toast('Undone');
}

UI.onEquip = (t) => { G.player.setTool(t.id); G.toolNote = null; G.crossHint = null; };
initMenu();
buildHotbar();
G.player.setTool(currentTool().id);

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
const _right = new THREE.Vector3();
let wasPaused = false;

// keys that work any time (also while paused / in the menu)
function globalActions() {
  if (input.tap('menu')) { if (UI.menuOpen) closeMenu(); else openMenu(); }
  if (input.tap('help') && !UI.menuOpen) openMenu('help');
  if (input.tap('mute')) toast(toggleMute() ? 'Muted' : 'Sound on');
}

// gameplay keys (only while actually playing)
function gameActions(dt) {
  for (let i = 0; i < 10; i++) if (input.tap('slot' + (i + 1))) selectSlot(i);
  if (input.tap('prevTool')) cycleTool(-1);
  if (input.tap('nextTool')) cycleTool(1);
  if (input.tap('fly')) { G.player.flying = !G.player.flying; toast(G.player.flying ? `Fly mode ON (${bindText('jump', 1)} up, ${bindText('sprint', 1)} down)` : 'Fly mode OFF'); }
  if (input.tap('slowmo')) { G.timeScale = G.timeScale < 1 ? 1 : 0.3; toast(G.timeScale < 1 ? 'SLOW-MO' : 'Normal speed'); }
  if (input.tap('clear')) { for (const ent of [...G.ents]) if (ent.spawned) Items.removeEnt(ent, true); for (const d of [...G.dummies]) if (d.spawned) d.remove(); toast('Cleared spawned stuff'); }
  if (input.tap('resetMap')) { loadMap(G.mapId); toast('Map reset'); }
  if (input.tap('quality')) { setSetting('quality', S.quality === 'high' ? 'low' : 'high'); toast(S.quality === 'high' ? 'Graphics: high' : 'Graphics: low (faster)'); }
  if (input.tap('undo')) undoSpawn();
  if (input.tap('photo')) { document.body.classList.toggle('photo'); }
  if (input.tap('sensDown') || input.tap('sensUp')) {
    setSetting('sens', Math.min(12, Math.max(0.3, +(S.sens * (input.tap('sensDown') ? 0.85 : 1.18)).toFixed(2))));
    toast(`Mouse sensitivity: ${S.sens.toFixed(1)}`);
  }
  // scroll wheel / two-finger scroll
  const w = input.wheel();
  if (w) {
    if (G.grab && ctl.wheel !== 'off') G.reelBy && G.reelBy(w * 0.7);
    else if (ctl.wheel === 'smart') selectSlot((UI.slot + (w > 0 ? 1 : -1) + 10) % 10);
  }
  const tool = currentTool();
  // the Fling Line is always with you: grab key grabs / drops (or cancels a half-made rope / weld)
  if (input.tap('grab')) {
    if (!G.grab && tool.cancel && tool.cancel()) { /* cancelled */ }
    else line.toggle();
  }
  // click: throw what you hold (or zip to the hook), otherwise use the tool
  if (input.tap('use')) {
    if (G.grab) { line.throwIt(); useLock = true; G.recoil(0.6, false); }
    else {
      useLock = false;
      // recoil only when the tool really fired (its cooldown started)
      const cd0 = tool.cd || 0;
      if (tool.down) tool.down();
      if ((tool.cd || 0) > cd0 + 1e-6) G.recoil(1);
    }
  }
  if (!input.held('use')) useLock = false;
  if (input.tap('rotate') && !G.grab && tool.rotate) tool.rotate();
  line.update(dt, input, tool.id === 'hands');
  if (tool.update) tool.update(dt, input);
  if (input.held('use') && !useLock && !G.grab && tool.held) { const cd0 = tool.cd || 0; tool.held(dt); if ((tool.cd || 0) > cd0 + 1e-6) G.recoil(1); }
}
let useLock = false; // after a throw, holding the button doesn't also fire the tool

function frame() {
  requestAnimationFrame(frame);
  const rdt = Math.min(clock.getDelta(), 0.05);
  globalActions();
  const paused = isPaused();
  G.paused = paused;
  if (paused) {
    // frozen: no simulation, no sound; draw only if something visible changed
    if (!wasPaused) { setAudioPaused(true); wasPaused = true; needRender = true; }
    updateToast(rdt);
    input.lookX = 0; input.lookY = 0;
    endFrame();
    if (needRender) { needRender = false; renderer.render(scene, camera); renderViewmodel(renderer); }
    return;
  }
  if (wasPaused) { setAudioPaused(false); wasPaused = false; }
  const dt = rdt * G.timeScale;
  G.time += dt;

  const active = playing && !UI.menuOpen;
  const k = (a) => active && input.held(a);
  // holding "rotate" with the Fling Line: the mouse turns the held object instead of the camera
  if (active && input.held('rotate') && G.grab && rotateHeld(input.lookX, input.lookY)) { input.lookX = 0; input.lookY = 0; }
  const pin = {
    f: k('forward'), b: k('back'), l: k('left'), r: k('right'),
    sprint: k('sprint'), sprintDown: k('sprint'), crouch: k('crouch'),
    jump: active && input.tap('jump'), jumpHeld: k('jump'),
    lookX: input.lookX + ((k('lookLeft') ? -1 : 0) + (k('lookRight') ? 1 : 0)) * 2.2 * rdt,
    lookY: input.lookY + ((k('lookUp') ? -1 : 0) + (k('lookDown') ? 1 : 0)) * 1.6 * rdt,
  };
  input.lookX = 0; input.lookY = 0;

  if (active) gameActions(dt);

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
  if (G.afterFrame) G.afterFrame(dt, rdt);
  setListener(camera.position, _right.set(1, 0, 0).applyQuaternion(camera.quaternion));

  // shadows follow the player
  const pp = G.player.body.position;
  const so = G.sunOffset || [40, 70, 25];
  sun.position.set(pp.x + so[0], pp.y + so[1], pp.z + so[2]);
  sun.target.position.set(pp.x, pp.y, pp.z);

  endFrame();
  renderer.render(scene, camera);
  renderViewmodel(renderer);
  needRender = false;
}
frame();
window.__G = G; // handy for debugging in the console
window.__T = { TOOL, UI, Items, loadMap, selectSlot, currentTool, input, isPaused };

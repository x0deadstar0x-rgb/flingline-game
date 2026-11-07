// Entry point: renderer, physics world, input, main loop.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, updatePopups, updateToast, toast, clamp } from './core.js';
import { initAudio, toggleMute, setListener, setVolume, setAudioPaused, sfx } from './audio.js';
import { input, press, release, addWheel, endFrame, clearInput, capturing, ctl, bindText } from './input.js';
import { S, setSetting, onSetting, applyAll } from './settings.js';
import { activeProfile } from './store.js';
import { updateGrabFx, rotateHeld, line } from './tools/grab.js';
import { initFx, updateFx } from './fx.js';
import { initNuke, updateNukes } from './nuke.js';
import { updateBuildings } from './buildings.js';
import { toggleVehicle, updateVehicle } from './vehicles.js';
import { updateBubbles } from './dummy.js';
import { net, updateNet, doAction, shareHeld, tugPlayer, flingPlayer, withSeed, shareMap, hostRoom, joinRoom, leaveRoom, asMe, kickPlayer } from './net.js';
G.shareMap = shareMap;
import * as Items from './items.js';
import { Player } from './player.js';
import { loadMap, updateMap, applyTime, MAPS } from './map.js';
import { TOOL, TOOLS, updateProjectiles, updateBlackHoles, updateTornados, updateQuake, updateStorms } from './tools/index.js';
import { initViewmodel, renderViewmodel } from './viewmodel.js';
import { VoxelBroadphase } from './terrain.js';
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
// underground (in a cave or tunnel), daylight fades out and your headlamp comes on
const headlamp = new THREE.SpotLight(0xfff0d8, 0, 36, 0.66, 0.6, 1.0);
scene.add(headlamp, headlamp.target);
let underground = 0;
const _fwd = new THREE.Vector3();
// The flashlight (its own key): a strong beam that reaches far, on top of the headlamp
let flashOn = 0, flashK = 0;
G.toggleFlashlight = () => { flashOn = flashOn ? 0 : 1; sfx.beep(); toast(flashOn ? 'Flashlight ON' : 'Flashlight off'); return flashOn; };
function updateUnderground(dt) {
  const c = camera.position;
  const top = G.groundAt ? G.groundAt(c.x, c.z) : -1e9;
  const inCave = top > c.y + 0.5 && G.solidAt && !G.solidAt(c.x, c.y, c.z);
  const want = inCave ? clamp((top - c.y - 1) / 5, 0, 1) : 0;
  underground += (want - underground) * Math.min(1, dt * 2.5);
  flashK += (flashOn - flashK) * Math.min(1, dt * 14);
  if (underground < 0.002 && want === 0) {
    if (sun.intensity !== (G.baseSun ?? sun.intensity)) { sun.intensity = G.baseSun ?? sun.intensity; hemi.intensity = G.baseHemi ?? hemi.intensity; }
    underground = 0;
  } else {
    sun.intensity = (G.baseSun ?? 2.2) * (1 - 0.92 * underground);
    hemi.intensity = (G.baseHemi ?? 1.1) * (1 - 0.6 * underground);
  }
  // headlamp underground: soft and wide. Flashlight: a bright, longer, tighter beam
  const fl = flashK > 0.01 ? flashK : 0;
  headlamp.intensity = Math.max(8 * underground, 0) + fl * 70;
  headlamp.distance = 36 + fl * 104;
  headlamp.angle = 0.66 - fl * 0.16;
  headlamp.penumbra = 0.6 - fl * 0.25;
  if (!headlamp.intensity) return;
  headlamp.position.copy(c).add(_fwd.set(0.25, -0.2, 0).applyQuaternion(camera.quaternion));
  headlamp.target.position.copy(c).add(_fwd.set(0, 0, -10).applyQuaternion(camera.quaternion));
}

// ---------------------------------------------------------------- physics
const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
// "Who touched whom" (for collision events), kept sparse. cannon-es's default keeps a slot for
// every PAIR of bodies and clears all of them on every step, and resizes it whenever a body is
// added or removed: with ~1500 bodies that's a million slots and 3-6 ms per step for nothing.
class SparsePairs {
  constructor() { this.s = new Set(); }
  key(a, b) { const i = a.id, j = b.id; return i > j ? i * 67108864 + j : j * 67108864 + i; }
  get(a, b) { return this.s.has(this.key(a, b)); }
  set(a, b, v) { if (v) this.s.add(this.key(a, b)); else this.s.delete(this.key(a, b)); }
  reset() { this.s.clear(); }
  setNumObjects() {}
}
world.collisionMatrix = new SparsePairs();
world.collisionMatrixPrevious = new SparsePairs();
world.broadphase = new VoxelBroadphase(world);
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
initNuke(scene);
initViewmodel(renderer);
loadMap('island');
G.player = new Player();
G.onLookChange = (l) => G.player.applyLook(l);
G.player.respawn();

// ---------------------------------------------------------------- input
// Keys / buttons go through input.js, which maps them to actions (rebindable).
let playing = false;
// Mouse capture ("pointer lock"). If the browser refuses once (it does when you re-lock too
// quickly after Esc), the next click simply tries again; only after repeated refusals (or no
// support at all) does the game fall back to looking around with the free cursor.
let lockFails = 0;
const lockUnsupported = !canvas.requestPointerLock;
const lockFailed = () => lockUnsupported || lockFails >= 3;
// the browser refuses a re-lock for about a second after Esc: try once more after that
let lockRetry = 0;
function onLockFail() {
  lockFails++;
  updatePausedOverlay();
  if (playing && !UI.menuOpen && performance.now() - lockRetry > 3000) {
    lockRetry = performance.now();
    setTimeout(() => { if (playing && !UI.menuOpen && !isLocked()) requestLock(); }, 1150);
  }
}
const isLocked = () => document.pointerLockElement === canvas;

function requestLock() {
  if (lockUnsupported || isLocked()) return;
  try {
    const p = canvas.requestPointerLock();
    if (p && p.catch) p.catch(onLockFail);
  } catch (e) { onLockFail(); }
}
G.requestLock = requestLock;

function start() {
  initAudio();
  playing = true;
  G.everPlayed = true;
  document.getElementById('start').classList.add('hidden');
  document.body.classList.remove('inmenu');
  requestLock();
}
// ---- the player list (Tab), like in Minecraft: everyone in the room, over the game. Unlock the
// mouse with the lock key and, if you're the host, hover over someone to time out, kick or ban them.
const plistEl = document.getElementById('plist');
let plistOpen = false;
function togglePlayerList(show = !plistOpen) {
  plistOpen = show;
  plistEl.classList.toggle('show', show);
  if (show) renderPlayerList();
  else if (playing && !UI.menuOpen && !isLocked() && !lockFailed()) requestLock();
  updatePausedOverlay();
}
G.togglePlayerList = togglePlayerList;
function renderPlayerList() {
  if (!plistOpen) return;
  const me = activeProfile() ? activeProfile().name : 'You';
  const rows = [`<div class="prow"><span class="pn">${esc(me)}<span class="tagh">${net.active && net.host ? 'HOST · ' : ''}YOU</span></span></div>`];
  for (const p of net.players.values()) {
    const acts = net.host ? `<span class="acts"><button data-k="timeout" data-id="${esc(p.id)}">Time out 5 min</button><button data-k="kick" data-id="${esc(p.id)}">Kick</button><button data-k="ban" data-id="${esc(p.id)}" class="danger">Ban</button></span>` : '';
    rows.push(`<div class="prow"><span class="pn">${esc(p.name)}</span>${acts}</div>`);
  }
  const head = net.active ? `<span>PLAYERS ${net.players.size + 1}${net.host ? ' / ' + (net.maxPlayers || 8) : ''}</span><span>ROOM ${esc(net.code)}</span>` : '<span>PLAYERS</span><span>NOT IN A ROOM</span>';
  const foot = !net.active ? `Playing alone. Press <kbd>${esc(bindText('mainMenu', 1))}</kbd> to host or join a room.`
    : net.host ? (isLocked() ? `Press <kbd>${esc(bindText('lockMouse', 1))}</kbd> to free the mouse, then hover over someone to time out, kick or ban them.` : 'Hover over someone to time out, kick or ban them.') : '';
  plistEl.innerHTML = `<div class="ph">${head}</div>${rows.join('')}${foot ? `<div class="pf">${foot}</div>` : ''}`;
  plistEl.querySelectorAll('.acts button').forEach((b) => { b.onclick = (e) => { e.stopPropagation(); kickPlayer(b.dataset.id, b.dataset.k, 5); setTimeout(renderPlayerList, 400); }; });
}
plistEl.addEventListener('mousedown', (e) => e.stopPropagation());
// ---- the main menu (the start screen): play, host a room, join a room. M brings it back.
const startEl = document.getElementById('start');
startEl.addEventListener('click', () => start());
// (clicks on the map picker and the rooms panel don't start the game)
for (const el of startEl.querySelectorAll('.mp, .maps')) el.addEventListener('click', (e) => e.stopPropagation());
// the map picker on the main menu (the map shows behind it)
function renderStartMaps() {
  const box = document.getElementById('mapchips');
  const cur = MAPS.find((m) => m.id === G.mapId);
  document.getElementById('mapname').textContent = cur ? `${cur.icon} ${cur.name}` : '';
  box.innerHTML = '';
  if (net.active && !net.host) { box.innerHTML = '<span class="mpstatus">The host picks the map.</span>'; return; }
  for (const m of MAPS) {
    const btn = document.createElement('button');
    btn.textContent = `${m.icon} ${m.name}`;
    btn.title = m.desc;
    if (m.id === G.mapId) btn.className = 'on';
    btn.onclick = () => {
      if (m.id === G.mapId) return;
      if (net.active && net.host) { G.shareMap(m.id); G.loadMapNet(m.id); } else loadMap(m.id);
      renderStartMaps();
    };
    box.appendChild(btn);
  }
}
document.getElementById('counts').textContent = `${MAPS.length} MAPS · ${TOOLS.length} TOOLS · ${Items.CATALOG.length} THINGS TO SPAWN`;
// behind the main menu the camera circles slowly around the map
let orbitA = 0;
function menuOrbit(dt) {
  orbitA += dt * 0.05;
  const s = G.spawn || new THREE.Vector3();
  camera.position.set(s.x + Math.cos(orbitA) * 52, s.y + 22, s.z + Math.sin(orbitA) * 52);
  camera.lookAt(s.x, s.y + 3, s.z);
}
function toMainMenu() {
  if (UI.menuOpen) closeMenu();
  if (plistOpen) togglePlayerList(false);
  playing = false;
  escPaused = false;
  if (isLocked()) document.exitPointerLock();
  clearInput();
  startEl.classList.remove('hidden');
  document.body.classList.add('inmenu');
  renderStartRoom();
  renderStartMaps();
  updatePausedOverlay();
}
G.toMainMenu = toMainMenu;
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function renderStartRoom() {
  const w = document.getElementById('mproom');
  if (!w) return;
  const go = startEl.querySelector('.go');
  if (net.active) {
    go.textContent = 'BACK TO THE GAME';
    w.innerHTML = `<div class="inroom">In room <b>${esc(net.code)}</b>${net.host ? ' (you host it)' : ''} · ${net.players.size + 1} player${net.players.size ? 's' : ''}</div>
      <button id="mpleave" class="danger">Leave the room</button>`;
    w.querySelector('#mpleave').onclick = (e) => { e.stopPropagation(); leaveRoom(); renderStartRoom(); };
  } else {
    go.textContent = playing || G.everPlayed ? 'KEEP PLAYING' : 'PLAY';
    w.innerHTML = `<div class="mprow"><button id="mphost">HOST A ROOM</button>
        <label class="chk"><input id="mpnpc" type="checkbox" checked> NPCs</label>
        <label class="chk">max <input id="mpmax" type="number" min="2" max="24" value="8" style="width:52px"></label>
        <input id="mppass" type="text" maxlength="24" placeholder="password (optional)"></div>
      <div class="mprow"><input id="mpcode" type="text" maxlength="8" placeholder="ROOM CODE" style="text-transform:uppercase">
        <input id="mpjpass" type="text" maxlength="24" placeholder="password (if any)">
        <button id="mpjoin">JOIN</button></div>
      <div class="mpstatus">${esc(net.status || 'Play with friends: host a room and tell them the code, or join theirs.')}</div>`;
    w.querySelector('#mphost').onclick = () => { hostRoom({ password: w.querySelector('#mppass').value.trim(), npcs: w.querySelector('#mpnpc').checked, maxPlayers: +w.querySelector('#mpmax').value }); start(); };
    const join = () => { const code = w.querySelector('#mpcode').value.trim(); if (code.length < 4) { toast('Type the room code first'); return; } joinRoom(code, w.querySelector('#mpjpass').value.trim()); start(); };
    w.querySelector('#mpjoin').onclick = join;
    w.querySelectorAll('input').forEach((i) => i.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter' && (i.id === 'mpcode' || i.id === 'mpjpass')) join(); }));
  }
}
{ const prev = net.onChange; net.onChange = () => { if (prev) prev(); renderPlayerList(); if (!startEl.classList.contains('hidden')) { renderStartRoom(); renderStartMaps(); } }; }
renderStartRoom();
document.addEventListener('pointerlockchange', () => {
  if (!isLocked()) clearInput(); else lockFails = 0;
  updatePausedOverlay();
  if (plistOpen) renderPlayerList();
});
document.addEventListener('pointerlockerror', onLockFail);
document.getElementById('paused').addEventListener('click', () => { escPaused = false; requestLock(); updatePausedOverlay(); });
let escPaused = false; // paused with Esc where the mouse can't be captured
function updatePausedOverlay() {
  document.getElementById('paused').classList.toggle('show', playing && !UI.menuOpen && !plistOpen && ((!isLocked() && !lockFailed()) || escPaused));
}
G.updatePausedOverlay = updatePausedOverlay;

canvas.addEventListener('mousedown', (e) => {
  if (!playing) return;
  if (!isLocked() && !lockFailed()) { if (e.button === 0) requestLock(); return; }
  initAudio();
  press('Mouse' + e.button);
  e.preventDefault();
});
window.addEventListener('mouseup', (e) => release('Mouse' + e.button));
// rebinding a mouse button from the menu
window.addEventListener('mousedown', (e) => { if (capturing() && e.target !== canvas) { e.preventDefault(); e.stopPropagation(); press('Mouse' + e.button); } }, true);
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.addEventListener('wheel', (e) => { if (playing && (isLocked() || lockFailed())) { e.preventDefault(); addWheel(e.deltaY); } }, { passive: false });
document.addEventListener('mousemove', (e) => {
  if (!playing || UI.menuOpen) return;
  if (isLocked() || lockFailed()) {
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
  // Esc: closes the menu; otherwise pauses (frees the mouse) — also where the mouse can't be captured
  if (e.code === 'Escape') { if (UI.menuOpen) closeMenu(); else if (lockFailed()) { escPaused = true; updatePausedOverlay(); } return; }
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
  return UI.menuOpen || escPaused || (!isLocked() && !lockFailed());
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
  if (input.tap('lockMouse') && playing && !UI.menuOpen) {
    if (isLocked()) document.exitPointerLock();
    else { escPaused = false; lockFails = 0; requestLock(); updatePausedOverlay(); }
  }
  if (input.tap('menu')) { if (plistOpen) togglePlayerList(false); if (UI.menuOpen) closeMenu(); else openMenu(); }
  if (input.tap('players') && playing && !UI.menuOpen) togglePlayerList();
  if (input.tap('help') && !UI.menuOpen) openMenu('help');
  if (input.tap('mute')) toast(toggleMute() ? 'Muted' : 'Sound on');
  if (input.tap('mainMenu') && playing) toMainMenu();
}

// gameplay keys (only while actually playing)
function gameActions(dt) {
  for (let i = 0; i < 10; i++) if (input.tap('slot' + (i + 1))) selectSlot(i);
  if (input.tap('prevTool')) cycleTool(-1);
  if (input.tap('nextTool')) cycleTool(1);
  if (input.tap('fly')) { G.player.flying = !G.player.flying; toast(G.player.flying ? `Fly mode ON (${bindText('jump', 1)} up, ${bindText('sprint', 1)} down)` : 'Fly mode OFF'); }
  if (input.tap('interact') && !toggleVehicle()) toast('Nothing to get into here (walk up to a car)');
  if (input.tap('flashlight')) G.toggleFlashlight();
  if (input.tap('detonate') && TOOL.c4) { const n = doAction('det', TOOL.c4, () => TOOL.c4.det()); if (!n) toast(`No C4 planted (C4 Charges tool, then ${bindText('detonate', 1)})`); }
  // (in a room everyone shares one world: no slow-mo or clearing just for you; the host resets it for all)
  if (input.tap('slowmo')) { if (net.active) toast('No slow-mo in a room'); else { G.timeScale = G.timeScale < 1 ? 1 : 0.3; toast(G.timeScale < 1 ? 'SLOW-MO' : 'Normal speed'); } }
  if (input.tap('clear')) { if (net.active) toast('Clearing is off in a room'); else { for (const ent of [...G.ents]) if (ent.spawned) Items.removeEnt(ent, true); for (const d of [...G.dummies]) if (d.spawned) d.remove(); toast('Cleared spawned stuff'); } }
  if (input.tap('resetMap')) {
    if (!net.active) { loadMap(G.mapId); toast('Map reset'); }
    else if (net.host) { G.shareMap(G.mapId); G.loadMapNet(G.mapId); toast('Map reset for everyone'); }
    else toast('Only the host can reset the map');
  }
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
  // the Fling Line is always with you.
  //  grab key (F / right click): grab something loose; while holding: THROW it (hooked: zip)
  //  click: drop what you hold (hooked: let go), otherwise use your tool
  //  the grappling hook is a tool: with it, click hooks the ground / walls
  const held = G.grab;
  // in a room: grab another player with your Fling Line (they go where you pull, F throws them)
  if (G.grabRemote) {
    const gr = G.grabRemote;
    if (!net.players.has(gr.id)) G.grabRemote = null;
    else {
      const pt = G.aim.start.clone().addScaledVector(G.aim.dir, gr.dist);
      gr.t = (gr.t || 0) - dt;
      if (gr.t <= 0) { gr.t = 1 / 15; tugPlayer(gr.id, pt); }
      if (input.tap('grab')) { flingPlayer(gr.id, G.aim.dir.clone().multiplyScalar(26).add(new THREE.Vector3(0, 4, 0))); G.grabRemote = null; useLock = true; sfx.fling(); return; }
      if (input.tap('use')) { G.grabRemote = null; useLock = true; return; }
    }
  }
  if (input.tap('grab') && !held && net.active) {
    const h = raycastPlayers();
    if (h) { G.grabRemote = { id: h.id, dist: h.dist }; sfx.grab(); return; }
  }
  if (input.tap('grab')) {
    if (held) { line.throwIt(); useLock = true; }
    else if (tool.cancel && tool.cancel()) { /* cancelled a half-made rope / weld */ }
    else line.grab();
  }
  if (input.tap('use')) {
    if (held) { line.release(true); useLock = true; }
    else {
      useLock = false;
      // recoil only when the tool really fired (its cooldown started)
      const cd0 = tool.cd || 0;
      if (tool.down) doAction('down', tool, () => tool.down());
      if ((tool.cd || 0) > cd0 + 1e-6) G.recoil(1);
    }
  }
  if (!input.held('use')) useLock = false;
  if (input.tap('rotate') && !G.grab && tool.rotate) tool.rotate();
  if (input.tap('anchor') && G.grab) line.anchor();
  line.update(dt, input, tool.id === 'hands');
  if (tool.update) tool.update(dt, input);
  if (input.held('use') && !useLock && !G.grab && tool.held) {
    const cd0 = tool.cd || 0;
    // (in a room, held tools are shared 10 times a second)
    asMe(() => tool.held(dt));
    if (net.active) { heldAcc += dt; if (heldAcc >= 0.1) { shareHeld(tool, heldAcc); heldAcc = 0; } }
    if ((tool.cd || 0) > cd0 + 1e-6) G.recoil(1);
  }
  G.currentToolId = tool.id;
}
let useLock = false; // after a throw, holding the button doesn't also fire the tool
let heldAcc = 0;
function raycastPlayers() {
  let best = null;
  for (const p of net.players.values()) {
    const to = p.pos.clone().sub(G.aim.start), d = to.length();
    if (d > 30) continue;
    const off = to.clone().sub(G.aim.dir.clone().multiplyScalar(to.dot(G.aim.dir))).length();
    if (to.dot(G.aim.dir) > 0 && off < 1.3 && (!best || d < best.dist)) best = { id: p.id, dist: d };
  }
  return best;
}
G.toolById = (id) => TOOL[id];
// rooms: maps load the same everywhere (same random numbers); NPCs can be switched off
G.loadMapNet = (id) => { withSeed(net.mapSeed, () => loadMap(id)); if (net.active && !net.npcs) for (const d of [...G.dummies]) d.remove(); };
G.reloadMapForNet = () => G.loadMapNet(G.mapId);

// Awake budget: when lots of things are moving at once, the slowest ones are put to sleep
// (anything that gets hit wakes up again). Keeps big messes from grinding the game down.
let physLoad = 0, budgetTick = 0;
const AWAKE_MAX = 180;
function sleepBudget() {
  const awake = [];
  const pp = G.player ? G.player.body.position : null;
  for (const b of world.bodies) {
    if (b.type !== CANNON.Body.DYNAMIC || b.sleepState === CANNON.Body.SLEEPING || !b.allowSleep) continue;
    // far from you and not flying: it waits until you come back
    if (pp && (b.position.x - pp.x) ** 2 + (b.position.z - pp.z) ** 2 > 250 * 250 && b.velocity.lengthSquared() < 16 && !(b.ent && b.ent.kind === 'ragpart')) { b.sleep(); continue; }
    if (b.ent && (b.ent.kind === 'ragpart' || b.ent.thrusters.length || b.ent.antigrav > 0 || b.ent.carriedBy)) continue;
    if (G.grab && G.grab.body === b) continue;
    awake.push(b);
  }
  const limit = physLoad > 10 ? AWAKE_MAX * 0.6 : AWAKE_MAX;
  if (awake.length <= limit) return;
  // slowest first; never put fast-flying things to sleep
  for (const b of awake) b._sp = b.velocity.lengthSquared() + b.angularVelocity.lengthSquared() * 0.2;
  awake.sort((a, b) => a._sp - b._sp);
  const n = awake.length - limit;
  for (let i = 0; i < n; i++) { if (awake[i]._sp > 9) break; awake[i].sleep(); }
}

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
    if (!playing) { menuOrbit(rdt); needRender = true; }
    if (needRender) { needRender = false; renderer.render(scene, camera); if (playing) renderViewmodel(renderer); }
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

  // physics. Lag guard: under heavy load it takes bigger (fewer) steps, so the world keeps real
  // speed instead of turning into slow motion or piling up work
  // ground physics where things are moving (built on demand)
  if (G.ensureGround) {
    for (const b of world.bodies) {
      if (b.type !== CANNON.Body.DYNAMIC || b.sleepState === CANNON.Body.SLEEPING) continue;
      if (b.aabbNeedsUpdate) b.updateAABB();
      const m = 1.5 + (Math.abs(b.velocity.x) + Math.abs(b.velocity.z)) * dt * 3;
      G.ensureGround(b.aabb.lowerBound.x - m, b.aabb.lowerBound.z - m, b.aabb.upperBound.x + m, b.aabb.upperBound.z + m);
    }
  }
  const tStep = performance.now();
  const heavy = physLoad > 12;
  world.step(heavy ? 1 / 40 : 1 / 60, dt, heavy ? 2 : 3);
  physLoad = physLoad * 0.9 + (performance.now() - tStep) * 0.1;
  world.solver.iterations = physLoad > 10 ? 6 : 10;
  if (++budgetTick % 10 === 0) sleepBudget();
  const q = G.queue.splice(0);
  for (const fn of q) fn();
  for (let i = G.timers.length - 1; i >= 0; i--) {
    if (G.timers[i].t <= G.time) { const t = G.timers[i]; G.timers.splice(i, 1); t.fn(); }
  }

  if (G.vehicle) updateVehicle(dt, pin);
  G.player.update(rdt, pin);
  Items.updateEnts(dt);
  Items.updateFirePatches(dt);
  // people far from you think less often (big maps)
  const ppos = G.player.body.position;
  for (const d of [...G.dummies]) {
    if (d.dead) continue;
    const o = d.state === 'standing' ? d.body.position : d.parts.torso.body.position;
    d._acc = (d._acc || 0) + dt;
    if ((o.x - ppos.x) ** 2 + (o.z - ppos.z) ** 2 > 150 * 150 && d._acc < 0.12) continue;
    d.update(d._acc); d._acc = 0;
  }
  updateProjectiles(dt);
  updateBlackHoles(dt);
  updateTornados(dt); updateQuake(dt); updateStorms(dt);
  updateMap(dt);
  updateFx(dt);
  updateNukes(dt);
  updateBuildings(dt);
  updateUnderground(rdt);
  updatePopups(rdt);
  updateBubbles(rdt);
  updateNet(rdt);
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
  if (!playing) menuOrbit(rdt); // (in a room the world goes on behind the main menu)
  renderer.render(scene, camera);
  if (!G.vehicle && playing) renderViewmodel(renderer);
  needRender = false;
}
frame();
renderStartMaps();
document.body.classList.add('inmenu');
window.__G = G; // handy for debugging in the console
window.__THREE = THREE;
window.__CANNON = CANNON;
window.__T = { TOOL, UI, Items, loadMap, selectSlot, currentTool, input, isPaused, net, hostRoom, joinRoom };

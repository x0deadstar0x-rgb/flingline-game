// Multiplayer rooms, browser to browser (WebRTC through PeerJS).
//
// How it stays in sync:
//  - Players: everyone sends where they are 15 times a second; the host passes it on.
//  - Actions: when someone uses a tool, everyone runs the same action with the same aim and
//    the same random numbers, so blasts, craters, broken buildings and spawned things match.
//  - Objects: the host sends where the moving things are a few times a second and everyone
//    else eases their copy towards that. Whoever holds something with the Fling Line is in
//    charge of it while they hold it.
//  - Far away (other players' explosions on a big map): the world still changes, but the
//    effects and the detailed rebuild only happen when you get close (see terrain streaming).
import { Peer } from 'peerjs';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, toast, GROUP, clamp } from './core.js';
import { buildHumanoid, poseHumanoid } from './dummy.js';
import { profileLook } from './look.js';
import { activeProfile } from './store.js';

const PREFIX = 'flingzone-v1-';
export const net = {
  active: false, host: false, code: '', peer: null, conns: new Map(), players: new Map(),
  myId: '', mapSeed: 1, npcs: true, password: '', status: '', log: [], onChange: null,
};
G.net = net;

// ---------------------------------------------------------------- same random numbers everywhere
function mulberry(seed) { let s = seed >>> 0 || 1; return () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export function withSeed(seed, fn) {
  const r = Math.random;
  Math.random = mulberry(seed);
  try { return fn(); } finally { Math.random = r; }
}
const code6 = () => { const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; let s = ''; for (let i = 0; i < 6; i++) s += A[(Math.random() * A.length) | 0]; return s; };
function peerOpts() {
  // ?peer=host:port uses your own PeerJS server (for testing on a local network)
  const q = new URLSearchParams(location.search).get('peer');
  if (q) { const [host, port] = q.split(':'); return { host, port: +port || 9000, path: '/', secure: false, debug: 0 }; }
  return { debug: 0 };
}
const myName = () => (activeProfile() ? activeProfile().name : 'Player');
function changed() { if (net.onChange) net.onChange(); }

// ---------------------------------------------------------------- hosting and joining
export function hostRoom({ password = '', npcs = true } = {}) {
  leaveRoom(true);
  const code = code6();
  net.status = 'Opening a room…'; changed();
  const peer = new Peer(PREFIX + code, peerOpts());
  peer.on('open', (id) => {
    Object.assign(net, { active: true, host: true, code, peer, myId: id, password, npcs, log: [], mapSeed: (Math.random() * 1e9) | 0 });
    net.status = `Room ${code} is open. Tell your friends the code!`;
    G.reloadMapForNet && G.reloadMapForNet();
    toast(`Room ${code} is open`);
    changed();
  });
  peer.on('connection', (conn) => acceptGuest(conn));
  peer.on('error', (e) => {
    if (e.type === 'unavailable-id') { hostRoom({ password, npcs }); return; } // code taken: try another
    net.status = 'Could not open a room: ' + (e.type || e.message); changed(); toast(net.status);
  });
  peer.on('disconnected', () => { try { peer.reconnect(); } catch (er) { /* ignore */ } });
}
export function joinRoom(code, password = '') {
  leaveRoom(true);
  code = (code || '').trim().toUpperCase();
  if (code.length < 4) { toast('Type the room code first'); return; }
  net.status = `Joining ${code}…`; changed();
  const peer = new Peer(undefined, peerOpts());
  peer.on('open', (id) => {
    net.peer = peer; net.myId = id;
    const conn = peer.connect(PREFIX + code, { reliable: true, metadata: { name: myName(), password, look: profileLook() } });
    conn.on('open', () => { net.conns.set(conn.peer, conn); });
    conn.on('data', (d) => onData(conn, d));
    conn.on('close', () => { if (net.active || net.status.startsWith('Joining')) { toast('Left the room (the host closed it)'); leaveRoom(); } });
    conn.on('error', () => { net.status = 'Could not reach that room'; changed(); });
    setTimeout(() => { if (!net.active && net.status.startsWith('Joining')) { net.status = `No room called ${code} answered`; changed(); } }, 9000);
  });
  peer.on('error', (e) => { net.status = e.type === 'peer-unavailable' ? `No room called ${code}` : 'Connection problem: ' + (e.type || e.message); changed(); toast(net.status); });
}
export function leaveRoom(quiet = false) {
  if (net.peer) { for (const c of net.conns.values()) { try { c.send({ t: 'bye' }); c.close(); } catch (e) { /* ignore */ } } try { net.peer.destroy(); } catch (e) { /* ignore */ } }
  for (const p of net.players.values()) removeAvatar(p);
  net.players.clear(); net.conns.clear();
  const was = net.active;
  Object.assign(net, { active: false, host: false, code: '', peer: null, myId: '', log: [] });
  if (!quiet) { net.status = was ? 'You left the room' : ''; changed(); }
}

// the host lets a guest in (if the password matches)
function acceptGuest(conn) {
  conn.on('open', () => {
    const md = conn.metadata || {};
    if (net.password && md.password !== net.password) { conn.send({ t: 'deny', why: 'Wrong password' }); setTimeout(() => conn.close(), 300); return; }
    if (net.conns.size >= 23) { conn.send({ t: 'deny', why: 'The room is full' }); setTimeout(() => conn.close(), 300); return; }
    net.conns.set(conn.peer, conn);
    addPlayer(conn.peer, md.name || 'Player', md.look);
    // everything they need: the map, who's here, and what has happened so far
    const players = [{ id: net.myId, name: myName(), look: profileLook() }, ...[...net.players.values()].filter((p) => p.id !== conn.peer).map((p) => ({ id: p.id, name: p.name, look: p.look }))];
    conn.send({ t: 'welcome', id: conn.peer, map: G.mapId, seed: net.mapSeed, npcs: net.npcs, players, log: net.log.slice(-1500) });
    broadcast({ t: 'join', id: conn.peer, name: md.name || 'Player', look: md.look }, conn.peer);
    toast(`${md.name || 'Someone'} joined`);
    changed();
  });
  conn.on('data', (d) => onData(conn, d));
  conn.on('close', () => dropGuest(conn.peer));
  conn.on('error', () => dropGuest(conn.peer));
}
function dropGuest(id) {
  if (!net.conns.has(id)) return;
  net.conns.delete(id);
  const p = net.players.get(id);
  if (p) { toast(`${p.name} left`); removeAvatar(p); net.players.delete(id); }
  broadcast({ t: 'left', id });
  changed();
}
function send(to, msg) { const c = net.conns.get(to); if (c && c.open) c.send(msg); }
function broadcast(msg, except = null) { for (const [id, c] of net.conns) if (id !== except && c.open) c.send(msg); }
// a guest sends to the host; the host to everyone
function toAll(msg) { if (net.host) broadcast(msg); else for (const c of net.conns.values()) if (c.open) c.send(msg); }

// ---------------------------------------------------------------- messages
function onData(conn, d) {
  if (!d || !d.t) return;
  switch (d.t) {
    case 'deny': toast(`Can't join: ${d.why}`); net.status = d.why; leaveRoom(true); changed(); break;
    case 'welcome': {
      Object.assign(net, { active: true, host: false, code: conn.peer.slice(PREFIX.length), myId: d.id, mapSeed: d.seed, npcs: d.npcs });
      for (const p of d.players) addPlayer(p.id, p.name, p.look);
      net.status = `In room ${net.code}`;
      G.loadMapNet && G.loadMapNet(d.map);
      // catch up on what already happened (blocks broken, things built…)
      G.netReplaying = true;
      for (const ev of d.log) runEvent(ev, true);
      G.netReplaying = false;
      toast(`Joined room ${net.code}`);
      changed();
      break;
    }
    case 'join': addPlayer(d.id, d.name, d.look); toast(`${d.name} joined`); changed(); break;
    case 'left': { const p = net.players.get(d.id); if (p) { toast(`${p.name} left`); removeAvatar(p); net.players.delete(d.id); changed(); } break; }
    case 'bye': if (!net.host) { toast('The host closed the room'); leaveRoom(); } else dropGuest(conn.peer); break;
    case 'st': // a player's position (guests send theirs; the host passes them all on)
      if (net.host) { d.id = conn.peer; broadcast(d, conn.peer); }
      updateRemote(d);
      break;
    case 'ev': // someone did something
      if (net.host) { net.log.push(d); if (net.log.length > 3000) net.log.shift(); broadcast(d, conn.peer); }
      runEvent(d, false);
      break;
    case 'map': if (!net.host) { net.mapSeed = d.seed; net.npcs = d.npcs; net.log = []; G.loadMapNet && G.loadMapNet(d.id); } break;
    case 'snap': if (!net.host) applySnapshot(d.s); break;
    case 'hold': if (net.host) broadcast(d, conn.peer); applyHold(d); break;
    case 'tug': // someone has you on their Fling Line
      if (d.to === net.myId) { G.tugged = { p: new THREE.Vector3(...d.p), until: G.time + 0.3, k: d.k }; }
      else if (net.host) send(d.to, d);
      break;
    case 'fling':
      if (d.to === net.myId) { G.player.fling(new THREE.Vector3(...d.v)); G.tugged = null; }
      else if (net.host) send(d.to, d);
      break;
    default: break;
  }
}

// ---------------------------------------------------------------- actions
let evN = 0;
// Tools that only affect you, or keep half-done state of their own, aren't shared
const LOCAL_ONLY = new Set(['hands', 'grapple', 'jetpack', 'teleport', 'rope', 'weld', 'magnet']);
// Do a tool action: run it here with fresh random numbers, then (if it really happened) tell
// everyone, who repeat it with the same aim and the same random numbers.
export function doAction(kind, tool, fn, extra = {}) {
  if (!net.active || LOCAL_ONLY.has(tool.id)) return fn();
  const seed = (Math.random() * 4294967295) >>> 0, k = net.myId + ':' + (evN++);
  const a = G.aim;
  const aim = [a.start.x, a.start.y, a.start.z, a.dir.x, a.dir.y, a.dir.z, a.hand.x, a.hand.y, a.hand.z];
  const cd0 = tool.cd || 0;
  G.netEvent = { base: k, n: 0 };
  let r;
  try { r = withSeed(seed, fn); } finally { G.netEvent = null; }
  const fired = kind === 'held' || (tool.cd || 0) > cd0 + 1e-6 || tool.cd === undefined;
  if (fired) {
    const ev = { t: 'ev', k, from: net.myId, kind, tool: tool.id, seed, a: aim, item: G.spawnId, mat: tool.mat, spin: tool.spin, ...extra };
    if (net.host) { net.log.push(ev); if (net.log.length > 3000) net.log.shift(); }
    toAll(ev);
  }
  return r;
}
// a tool you're holding down: everyone repeats a slice of it 10 times a second
export function shareHeld(tool, dt) {
  if (!net.active || LOCAL_ONLY.has(tool.id)) return;
  const a = G.aim;
  const ev = { t: 'ev', k: net.myId + ':' + (evN++), from: net.myId, kind: 'held', tool: tool.id, seed: (Math.random() * 4294967295) >>> 0, a: [a.start.x, a.start.y, a.start.z, a.dir.x, a.dir.y, a.dir.z, a.hand.x, a.hand.y, a.hand.z], dt, spin: tool.spin, mat: tool.mat };
  toAll(ev);
}
const SAVE = ['cd', 'spin', 'acc', 'active', 'mat', 'point'];
function runEvent(ev, catchup) {
  const tool = G.toolById && G.toolById(ev.tool);
  if (!tool || ev.from === net.myId) return;
  if (ev.kind === 'map') return;
  // far away and long ago (catching up): skip short-lived things, keep what changes the world
  const rp = net.players.get(ev.from);
  const aim = G.aim;
  const save = { start: aim.start, dir: aim.dir.clone(), hand: aim.hand.clone(), origin: aim.origin.clone(), player: G.player, spawnId: G.spawnId, toolState: {} };
  for (const k of SAVE) if (Object.prototype.hasOwnProperty.call(tool, k)) save.toolState[k] = tool[k];
  aim.start = new THREE.Vector3(ev.a[0], ev.a[1], ev.a[2]); aim.dir.set(ev.a[3], ev.a[4], ev.a[5]); aim.hand.set(ev.a[6], ev.a[7], ev.a[8]); aim.origin.copy(aim.start);
  G.player = rp ? rp.proxy : stubPlayer(aim.start);
  if (ev.item) G.spawnId = ev.item;
  if (ev.mat !== undefined && ev.mat !== null) tool.mat = ev.mat;
  if (ev.spin !== undefined && ev.spin !== null) tool.spin = ev.spin;
  tool.cd = 0;
  G.netRemote = true;
  G.netEvent = { base: ev.k, n: 0 };
  try {
    withSeed(ev.seed, () => {
      if (ev.kind === 'down' && tool.down) tool.down();
      else if (ev.kind === 'held' && tool.held) tool.held(ev.dt || 0.1);
    });
  } catch (e) { console.warn('remote action failed', ev.tool, e); }
  G.netRemote = false; G.netEvent = null;
  for (const k in save.toolState) tool[k] = save.toolState[k];
  aim.start = save.start; aim.dir.copy(save.dir); aim.hand.copy(save.hand); aim.origin.copy(save.origin);
  G.player = save.player; G.spawnId = save.spawnId;
}
// stands in for "the player" while running someone else's action (their recoil doesn't move you)
function stubPlayer(at) {
  const body = { position: new CANNON.Vec3(at.x, at.y - 0.6, at.z), velocity: new CANNON.Vec3(), quaternion: new CANNON.Quaternion() };
  return { body, pos: () => new THREE.Vector3(body.position.x, body.position.y, body.position.z), feet: () => new THREE.Vector3(body.position.x, body.position.y - 0.9, body.position.z), fling() {}, stun: 0, yaw: 0, pitch: 0 };
}

// ---------------------------------------------------------------- other players
function addPlayer(id, name, look) {
  if (id === net.myId || net.players.has(id)) return;
  const lk = look || { skin: 0xf1c27d, shirt: 0x1f8ef1, pants: 0x2b2d42, hat: 'cap', hatColor: 0xe63946 };
  const meshes = buildHumanoid(1, { skin: lk.skin, shirt: lk.shirt, pants: lk.pants, sleeve: true, hat: lk.hat, hatColor: lk.hatColor });
  for (const k in meshes) G.scene.add(meshes[k]);
  // a body other things can hit, grab and push
  const body = new CANNON.Body({ type: CANNON.Body.KINEMATIC, collisionFilterGroup: GROUP.DYN, collisionFilterMask: GROUP.DYN | GROUP.PLAYER | GROUP.DEBRIS });
  body.addShape(new CANNON.Sphere(0.35), new CANNON.Vec3(0, -0.45, 0));
  body.addShape(new CANNON.Sphere(0.38), new CANNON.Vec3(0, 0.35, 0));
  body.remotePlayer = id;
  G.world.addBody(body);
  const tag = document.createElement('div');
  tag.className = 'bubble nametag'; tag.textContent = name;
  document.getElementById('popups').appendChild(tag);
  const p = { id, name, look: lk, meshes, body, tag, pos: new THREE.Vector3(0, -100, 0), vel: new THREE.Vector3(), target: new THREE.Vector3(0, -100, 0), yaw: 0, pitch: 0, phase: 0, amt: 0, tool: '', last: 0 };
  p.proxy = stubPlayer(p.pos);
  net.players.set(id, p);
}
function removeAvatar(p) {
  for (const k in p.meshes) G.scene.remove(p.meshes[k]);
  if (p.body) G.world.removeBody(p.body);
  if (p.tag) p.tag.remove();
}
function updateRemote(d) {
  const p = net.players.get(d.id);
  if (!p) return;
  p.target.set(d.p[0], d.p[1], d.p[2]);
  p.vel.set(d.v[0], d.v[1], d.v[2]);
  p.yaw = d.yaw; p.pitch = d.pitch; p.tool = d.tool; p.last = G.time;
  if (p.pos.y < -50) p.pos.copy(p.target);
}

// ---------------------------------------------------------------- objects
function applySnapshot(list) {
  for (const s of list) {
    const e = G.entByNid && G.entByNid.get(s[0]);
    if (!e || e.dead || e === heldByMe()) continue;
    const b = e.body;
    const dx = s[1] - b.position.x, dy = s[2] - b.position.y, dz = s[3] - b.position.z;
    const far = dx * dx + dy * dy + dz * dz > 4;
    const k = far ? 1 : 0.35;
    b.position.x += dx * k; b.position.y += dy * k; b.position.z += dz * k;
    b.quaternion.set(s[4], s[5], s[6], s[7]);
    b.velocity.set(s[8], s[9], s[10]);
    b.wakeUp();
  }
}
function applyHold(d) {
  const e = G.entByNid && G.entByNid.get(d.n);
  if (!e || e.dead || e === heldByMe()) return;
  e.body.position.set(d.p[0], d.p[1], d.p[2]);
  e.body.velocity.set(d.v[0], d.v[1], d.v[2]);
  e.body.wakeUp();
}
const heldByMe = () => (G.grab && G.grab.body && G.grab.body.ent) || null;

// ---------------------------------------------------------------- every frame
let stT = 0, snapT = 0, holdT = 0;
export function updateNet(dt) {
  if (!net.active) return;
  // others: ease towards where they said they are, animate, name tag
  for (const p of net.players.values()) {
    p.target.addScaledVector(p.vel, dt);
    p.pos.lerp(p.target, Math.min(1, dt * 12));
    p.body.position.set(p.pos.x, p.pos.y, p.pos.z);
    p.body.velocity.set(p.vel.x, p.vel.y, p.vel.z);
    p.proxy.body.position.set(p.pos.x, p.pos.y, p.pos.z);
    const hs = Math.hypot(p.vel.x, p.vel.z);
    p.amt += (clamp(hs / 6, 0, 1) - p.amt) * Math.min(1, dt * 8);
    p.phase += dt * (3 + hs * 1.6);
    poseHumanoid(p.meshes, 1, new THREE.Vector3(p.pos.x, p.pos.y - 0.9, p.pos.z), p.yaw + Math.PI, p.phase, p.amt, { aim: p.pitch, pitch: p.pitch });
    const head = new THREE.Vector3(p.pos.x, p.pos.y + 1.25, p.pos.z).project(G.camera);
    const d = G.camera.position.distanceTo(p.pos);
    p.tag.style.opacity = head.z < 1 && d < 120 ? '1' : '0';
    p.tag.style.transform = `translate(-50%,-100%) translate(${(head.x * 0.5 + 0.5) * window.innerWidth}px,${(-head.y * 0.5 + 0.5) * window.innerHeight}px)`;
  }
  // me → everyone (15 a second)
  stT -= dt;
  if (stT <= 0) {
    stT = 1 / 15;
    const b = G.player.body;
    const msg = { t: 'st', id: net.myId, p: [b.position.x, b.position.y, b.position.z], v: [b.velocity.x, b.velocity.y, b.velocity.z], yaw: G.player.yaw, pitch: G.player.pitch, tool: G.currentToolId || '' };
    toAll(msg);
  }
  // what I'm holding: I'm in charge of it
  const h = heldByMe();
  holdT -= dt;
  if (h && h.nid && holdT <= 0) {
    holdT = 1 / 15;
    const b = h.body;
    toAll({ t: 'hold', n: h.nid, p: [b.position.x, b.position.y, b.position.z], v: [b.velocity.x, b.velocity.y, b.velocity.z] });
  }
  // the host: where the moving things are (near anyone), 6 times a second
  if (net.host && net.conns.size) {
    snapT -= dt;
    if (snapT <= 0) {
      snapT = 1 / 6;
      const near = [G.player.body.position, ...[...net.players.values()].map((p) => p.pos)];
      const s = [];
      for (const e of G.ents) {
        if (!e.nid || e.dead || e.kind === 'ragpart') continue;
        const b = e.body;
        if (b.type !== CANNON.Body.DYNAMIC || b.sleepState === CANNON.Body.SLEEPING || e === h) continue;
        if (!near.some((q) => (q.x - b.position.x) ** 2 + (q.z - b.position.z) ** 2 < 150 * 150)) continue;
        s.push([e.nid, +b.position.x.toFixed(3), +b.position.y.toFixed(3), +b.position.z.toFixed(3), +b.quaternion.x.toFixed(4), +b.quaternion.y.toFixed(4), +b.quaternion.z.toFixed(4), +b.quaternion.w.toFixed(4), +b.velocity.x.toFixed(2), +b.velocity.y.toFixed(2), +b.velocity.z.toFixed(2)]);
        if (s.length >= 120) break;
      }
      if (s.length) broadcast({ t: 'snap', s });
    }
  }
  // someone is holding me on their Fling Line: I go where they pull
  if (G.tugged) {
    if (G.time > G.tugged.until) G.tugged = null;
    else {
      const b = G.player.body, t = G.tugged.p;
      b.velocity.x += ((t.x - b.position.x) * 8 - b.velocity.x) * Math.min(1, dt * 6);
      b.velocity.y += ((t.y - b.position.y) * 8 - b.velocity.y) * Math.min(1, dt * 6);
      b.velocity.z += ((t.z - b.position.z) * 8 - b.velocity.z) * Math.min(1, dt * 6);
      G.player.stun = Math.max(G.player.stun, 0.3);
    }
  }
}
// holding another player on your Fling Line (they're pulled to the end of it)
export function tugPlayer(id, point) { toAll({ t: 'tug', to: id, p: [point.x, point.y, point.z], k: 1 }); }
export function flingPlayer(id, vel) { toAll({ t: 'fling', to: id, v: [vel.x, vel.y, vel.z] }); }
// the host changed the map: everyone follows
export function shareMap(id) {
  if (!net.active || !net.host) return;
  net.mapSeed = (Math.random() * 1e9) | 0;
  net.log = [];
  broadcast({ t: 'map', id, seed: net.mapSeed, npcs: net.npcs });
}

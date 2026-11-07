// Multiplayer rooms, browser to browser (WebRTC through PeerJS).
//
// How it stays in sync:
//  - Players: everyone sends where they are 15 times a second; the host passes it on.
//  - Actions: when someone uses a tool, everyone runs the same action with the same aim and
//    the same random numbers, so blasts, craters, broken buildings and spawned things match.
//  - Objects: the host sends where the moving things are a few times a second and everyone
//    else eases their copy towards that. Whoever holds something with the Fling Line (or
//    drives a car) is in charge of it while they hold it.
//  - Far away (other players' explosions on a big map): the world still changes, but the
//    effects and the detailed rebuild only happen when you get close (see terrain streaming).
import { Peer } from 'peerjs';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, toast, GROUP, clamp } from './core.js';
import { buildHumanoid, poseHumanoid, disposeHumanoid } from './dummy.js';
import { unfreeze } from './items.js';
import { profileLook } from './look.js';
import { activeProfile } from './store.js';

const PREFIX = 'flingzone-v1-';
export const net = {
  active: false, host: false, code: '', peer: null, conns: new Map(), players: new Map(),
  myId: '', mapSeed: 1, npcs: true, password: '', status: '', log: [], onChange: null,
};
G.net = net;

// ---------------------------------------------------------------- same random numbers everywhere
export function mulberry(seed) { let s = seed >>> 0 || 1; return () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
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
// A room's peer is net.peer from the moment it's made: anything an older one still says (a
// second click, a room you left) is ignored.
let leaving = false;
export function hostRoom({ password = '', npcs = true } = {}) {
  leaveRoom(true);
  const code = code6();
  net.status = 'Opening a room…'; changed();
  const peer = new Peer(PREFIX + code, peerOpts());
  net.peer = peer;
  // once: 'open' comes again after getting back on the server, and the room just carries on
  peer.once('open', (id) => {
    if (peer !== net.peer) return;
    Object.assign(net, { active: true, host: true, code, myId: id, password, npcs, log: [], mapSeed: (Math.random() * 1e9) | 0 });
    net.status = `Room ${code} is open. Tell your friends the code!`;
    G.reloadMapForNet && G.reloadMapForNet();
    toast(`Room ${code} is open`);
    changed();
  });
  peer.on('connection', (conn) => { if (peer === net.peer) acceptGuest(conn); });
  peer.on('error', (e) => {
    // (once the room is open, server trouble doesn't matter: the players are connected directly)
    if (peer !== net.peer || net.active) return;
    if (e.type === 'unavailable-id') { hostRoom({ password, npcs }); return; } // code taken: try another
    net.status = 'Could not open a room: ' + (e.type || e.message); changed(); toast(net.status);
  });
  peer.on('disconnected', () => backOnServer(peer));
}
export function joinRoom(code, password = '') {
  leaveRoom(true);
  code = (code || '').trim().toUpperCase();
  if (code.length < 4) { toast('Type the room code first'); return; }
  net.status = `Joining ${code}…`; changed();
  const peer = new Peer(undefined, peerOpts());
  net.peer = peer;
  // once: after getting back on the server it must not connect to the room a second time
  peer.once('open', (id) => {
    if (peer !== net.peer) return;
    net.myId = id;
    const conn = peer.connect(PREFIX + code, { reliable: true, metadata: { name: myName(), password, look: profileLook() } });
    if (!conn) return;
    conn.on('open', () => { if (peer === net.peer) net.conns.set(conn.peer, conn); else conn.close(); });
    conn.on('data', (d) => onData(conn, d));
    conn.on('close', () => {
      if (peer !== net.peer || leaving) return;
      if (net.active || net.status.startsWith('Joining')) { toast('Left the room (the host closed it)'); leaveRoom(); }
    });
    conn.on('error', () => { if (peer === net.peer && !net.active) { net.status = 'Could not reach that room'; changed(); } });
    setTimeout(() => { if (peer === net.peer && !net.active && net.status.startsWith('Joining')) { net.status = `No room called ${code} answered`; changed(); } }, 9000);
  });
  peer.on('error', (e) => {
    if (peer !== net.peer || net.active) return;
    net.status = e.type === 'peer-unavailable' ? `No room called ${code}` : 'Connection problem: ' + (e.type || e.message); changed(); toast(net.status);
  });
  peer.on('disconnected', () => backOnServer(peer));
}
// Lost the line to the PeerJS server (it only introduces players): the room carries on without
// it, so get back on a moment later (nobody new can join until then). Not when it's a room we
// left: destroy() says 'disconnected' too.
function backOnServer(peer) {
  if (peer !== net.peer || leaving) return;
  setTimeout(() => {
    if (peer !== net.peer || peer.destroyed || !peer.disconnected) return;
    try { peer.reconnect(); } catch (e) { /* ignore */ }
  }, 3000);
}
export function leaveRoom(quiet = false) {
  // (closing things fires their 'close' events right away, which would land back here)
  if (leaving) return;
  leaving = true;
  try {
    const peer = net.peer;
    net.peer = null;
    for (const c of net.conns.values()) {
      try { c.removeAllListeners(); if (c.open) c.send({ t: 'bye' }); c.close(); } catch (e) { /* ignore */ }
    }
    if (peer) { try { peer.removeAllListeners(); peer.destroy(); } catch (e) { /* ignore */ } }
    for (const p of net.players.values()) removeAvatar(p);
    net.players.clear(); net.conns.clear();
    const was = net.active;
    Object.assign(net, { active: false, host: false, code: '', myId: '', log: [] });
    if (!quiet) { net.status = was ? 'You left the room' : ''; changed(); }
  } finally { leaving = false; }
}

// the host lets a guest in (if the password matches)
function acceptGuest(conn) {
  conn.on('open', () => {
    const md = conn.metadata || {};
    if (net.password && md.password !== net.password) { conn.send({ t: 'deny', why: 'Wrong password' }); setTimeout(() => conn.close(), 300); return; }
    if (net.conns.size >= 23) { conn.send({ t: 'deny', why: 'The room is full' }); setTimeout(() => conn.close(), 300); return; }
    // (the same player on a new line: the old one goes quietly)
    const old = net.conns.get(conn.peer);
    if (old && old !== conn) { old.removeAllListeners(); try { old.close(); } catch (e) { /* ignore */ } }
    net.conns.set(conn.peer, conn);
    addPlayer(conn.peer, md.name || 'Player', md.look);
    // everything they need: the map, who's here, and what has happened so far
    const players = [{ id: net.myId, name: myName(), look: profileLook() }, ...[...net.players.values()].filter((p) => p.id !== conn.peer).map((p) => ({ id: p.id, name: p.name, look: p.look }))];
    conn.send({ t: 'welcome', id: conn.peer, map: G.mapId, seed: net.mapSeed, npcs: net.npcs, players, log: net.log.slice(-1500) });
    broadcast({ t: 'join', id: conn.peer, name: md.name || 'Player', look: md.look }, conn.peer);
    toast(`${md.name || 'Someone'} joined`);
    changed();
  });
  // (what it says only counts once it's let in: see onData)
  conn.on('data', (d) => onData(conn, d));
  conn.on('close', () => dropGuest(conn));
  conn.on('error', () => dropGuest(conn));
}
function dropGuest(conn) {
  const id = conn.peer;
  if (net.conns.get(id) !== conn) return; // (never let in, or already replaced)
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
// what a guest may send the host (everything else only ever comes from the host)
const FROM_GUESTS = new Set(['st', 'ev', 'hold', 'tug', 'fling', 'bye']);
function onData(conn, d) {
  // only from players who were let in (a refused one may still be talking), and a guest can
  // only speak for themselves
  if (!d || !d.t || net.conns.get(conn.peer) !== conn) return;
  if (net.host) {
    if (!FROM_GUESTS.has(d.t)) return;
    if (d.t === 'st') d.id = conn.peer;
    else if (d.t === 'ev') d.from = conn.peer;
  }
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
    case 'bye': if (!net.host) { toast('The host closed the room'); leaveRoom(); } else dropGuest(conn); break;
    case 'st': // a player's position (guests send theirs; the host passes them all on)
      if (net.host) broadcast(d, conn.peer);
      updateRemote(d);
      break;
    case 'ev': // someone did something
      if (net.host) { logEvent(d); broadcast(d, conn.peer); }
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
    case 'wev': // something the map does by itself (a volcano erupting…), as the host saw it
      if (!net.host && G.onWorldEvent) G.onWorldEvent(d);
      break;
    default: break;
  }
}
// the host's world events: everyone else plays the same one (G.onWorldEvent gets it)
export function shareWorldEvent(ev) {
  if (!net.active || !net.host) return;
  broadcast({ t: 'wev', ...ev });
}
G.shareWorldEvent = shareWorldEvent;

// ---------------------------------------------------------------- actions
let evN = 0;
// Tools that only affect you, or keep half-done state of their own, aren't shared
const LOCAL_ONLY = new Set(['hands', 'grapple', 'jetpack', 'teleport', 'rope', 'weld', 'magnet']);
// Short-lived things: someone who joins later doesn't get them replayed (nothing of them is left,
// and catching up would set them all off at once). Everything else changed the world.
const SHORT_LIVED = new Set(['tornado', 'quake', 'storm', 'meteors', 'meteor', 'nuke', 'airstrike', 'fireworks',
  'blaster', 'shotgun', 'minigun', 'sniper', 'lightning', 'flamer', 'cannon', 'water', 'push', 'bat', 'blackhole', 'antigrav']);
// you, as you are right now: the others replay your action from here, moving and looking like this
function whoAmI() {
  const pl = G.player, b = pl.body;
  return { pp: [b.position.x, b.position.y, b.position.z], pv: [b.velocity.x, b.velocity.y, b.velocity.z], yaw: pl.yaw, pitch: pl.pitch };
}
// Your own tool use. G.actionBy says whose action is running: 'me', or a player's id while their
// action runs here (or their shot lands): people it hurts know who to blame (see dummy.js hurt)
export function asMe(fn) {
  const by = G.actionBy;
  G.actionBy = 'me';
  try { return fn(); } finally { G.actionBy = by; }
}
// Do a tool action: run it here with fresh random numbers, then (if it really happened) tell
// everyone, who repeat it with the same aim and the same random numbers.
export function doAction(kind, tool, fn, extra = {}) {
  if (!net.active || LOCAL_ONLY.has(tool.id)) return asMe(fn);
  const seed = (Math.random() * 4294967295) >>> 0, k = net.myId + ':' + (evN++);
  const a = G.aim;
  const aim = [a.start.x, a.start.y, a.start.z, a.dir.x, a.dir.y, a.dir.z, a.hand.x, a.hand.y, a.hand.z];
  const me = whoAmI(); // (before acting: a push's recoil changes how you move)
  const cd0 = tool.cd || 0;
  G.netEvent = { base: k, n: 0 };
  let r;
  try { r = withSeed(seed, () => asMe(fn)); } finally { G.netEvent = null; }
  const fired = kind === 'held' || (kind === 'det' && r > 0) || (kind !== 'det' && ((tool.cd || 0) > cd0 + 1e-6 || tool.cd === undefined));
  if (fired) {
    const ev = { t: 'ev', k, from: net.myId, kind, tool: tool.id, seed, a: aim, item: G.spawnId, mat: tool.mat, spin: tool.spin, turn: tool.turn, ...me, ...extra };
    logEvent(ev);
    toAll(ev);
  }
  return r;
}
// a tool you're holding down: everyone repeats a slice of it 10 times a second
export function shareHeld(tool, dt) {
  if (!net.active || LOCAL_ONLY.has(tool.id)) return;
  const a = G.aim;
  const ev = { t: 'ev', k: net.myId + ':' + (evN++), from: net.myId, kind: 'held', tool: tool.id, seed: (Math.random() * 4294967295) >>> 0, a: [a.start.x, a.start.y, a.start.z, a.dir.x, a.dir.y, a.dir.z, a.hand.x, a.hand.y, a.hand.z], dt, spin: tool.spin, mat: tool.mat, ...whoAmI() };
  logEvent(ev);
  toAll(ev);
}
// The host keeps what happened, for players who join later: not the short-lived things, and of
// the held tools (the drill sends 10 slices a second) only the latest few hundred slices.
const HELD_KEEP = 500;
function logEvent(ev) {
  if (!net.host || SHORT_LIVED.has(ev.tool)) return;
  const log = net.log;
  log.push(ev);
  if (ev.kind === 'held') {
    let n = 0;
    for (let i = log.length - 1; i >= 0; i--) if (log[i].kind === 'held' && ++n > HELD_KEEP) { log.splice(i, 1); break; }
  }
  if (log.length > 3000) log.shift();
}
const SAVE = ['cd', 'spin', 'acc', 'active', 'mat', 'point', 'turn'];
function runEvent(ev, catchup) {
  const tool = G.toolById && G.toolById(ev.tool);
  if (!tool || ev.from === net.myId) return;
  if (ev.kind === 'map') return;
  // catching up (just joined): skip what was over long ago, keep what changed the world
  if (catchup && SHORT_LIVED.has(ev.tool)) return;
  const rp = net.players.get(ev.from);
  const aim = G.aim;
  const save = { start: aim.start, dir: aim.dir.clone(), hand: aim.hand.clone(), origin: aim.origin.clone(), player: G.player, spawnId: G.spawnId, toolState: {} };
  // (what the tool had, or that it had nothing: a tool you never used gets nothing left over)
  for (const k of SAVE) save.toolState[k] = Object.prototype.hasOwnProperty.call(tool, k) ? { v: tool[k] } : null;
  aim.start = new THREE.Vector3(ev.a[0], ev.a[1], ev.a[2]); aim.dir.set(ev.a[3], ev.a[4], ev.a[5]); aim.hand.set(ev.a[6], ev.a[7], ev.a[8]); aim.origin.copy(aim.start);
  G.player = standIn(ev, rp);
  if (ev.item) G.spawnId = ev.item;
  if (ev.mat !== undefined && ev.mat !== null) tool.mat = ev.mat;
  if (ev.spin !== undefined && ev.spin !== null) tool.spin = ev.spin;
  if (ev.turn !== undefined && ev.turn !== null) tool.turn = ev.turn;
  tool.cd = 0;
  // their own body (here) mustn't stop their own shots: it's out of the way while this runs, and
  // what they fire knows not to hit it later
  const ab = rp ? rp.body : null, abGroup = ab ? ab.collisionFilterGroup : 0;
  if (ab) ab.collisionFilterGroup = 0;
  const by = G.actionBy;
  // (people it hurts blame them: not for what they did before you were even here)
  // (their recoil and spin are theirs: keep your own view as it was)
  const myRecoil = G.recoil, mySpin = G.toolSpin;
  G.recoil = null;
  G.netRemote = true; G.netFrom = ev.from; G.netAvatar = ab; G.actionBy = catchup ? null : ev.from;
  G.netEvent = { base: ev.k, n: 0 };
  try {
    withSeed(ev.seed, () => {
      if (ev.kind === 'down' && tool.down) tool.down();
      else if (ev.kind === 'held' && tool.held) tool.held(ev.dt || 0.1);
      else if (ev.kind === 'det' && tool.det) tool.det();
    });
  } catch (e) { console.warn('remote action failed', ev.tool, e); }
  finally {
    if (ab) ab.collisionFilterGroup = abGroup;
    G.netRemote = false; G.netEvent = null; G.netFrom = null; G.netAvatar = null; G.actionBy = by;
    G.recoil = myRecoil; G.toolSpin = mySpin;
    for (const k of SAVE) { const s = save.toolState[k]; if (s) tool[k] = s.v; else delete tool[k]; }
    aim.start = save.start; aim.dir.copy(save.dir); aim.hand.copy(save.hand); aim.origin.copy(save.origin);
    G.player = save.player; G.spawnId = save.spawnId;
  }
}
// stands in for "the player" while running someone else's action: where they were, how they
// were moving and looking when they did it (their recoil doesn't move you)
function standIn(ev, rp) {
  const p = ev.pp || (rp ? [rp.pos.x, rp.pos.y, rp.pos.z] : [ev.a[0], ev.a[1] - 0.6, ev.a[2]]);
  const v = ev.pv || [0, 0, 0];
  const body = { position: new CANNON.Vec3(p[0], p[1], p[2]), velocity: new CANNON.Vec3(v[0], v[1], v[2]), quaternion: new CANNON.Quaternion() };
  return {
    body, stun: 0, yaw: ev.yaw ?? (rp ? rp.yaw : 0), pitch: ev.pitch ?? (rp ? rp.pitch : 0), fling() {},
    pos: () => new THREE.Vector3(body.position.x, body.position.y, body.position.z),
    feet: () => new THREE.Vector3(body.position.x, body.position.y - 0.9, body.position.z),
  };
}

// ---------------------------------------------------------------- other players
const AVATAR_MASK = GROUP.DYN | GROUP.PLAYER | GROUP.DEBRIS;
function addPlayer(id, name, look) {
  if (id === net.myId || net.players.has(id)) return;
  const lk = look || { skin: 0xf1c27d, shirt: 0x1f8ef1, pants: 0x2b2d42, hat: 'cap', hatColor: 0xe63946 };
  const meshes = buildHumanoid(1, { skin: lk.skin, shirt: lk.shirt, pants: lk.pants, sleeve: true, hat: lk.hat, hatColor: lk.hatColor });
  for (const k in meshes) G.scene.add(meshes[k]);
  // a body other things can hit, grab and push (never asleep: it's moved by hand every frame,
  // and a sleeping one stops being hit)
  const body = new CANNON.Body({ type: CANNON.Body.KINEMATIC, allowSleep: false, collisionFilterGroup: GROUP.DYN, collisionFilterMask: AVATAR_MASK });
  body.addShape(new CANNON.Sphere(0.35), new CANNON.Vec3(0, -0.45, 0));
  body.addShape(new CANNON.Sphere(0.38), new CANNON.Vec3(0, 0.35, 0));
  body.remotePlayer = id;
  G.world.addBody(body);
  const tag = document.createElement('div');
  tag.className = 'bubble nametag'; tag.textContent = name;
  document.getElementById('popups').appendChild(tag);
  const p = { id, name, look: lk, meshes, body, tag, pos: new THREE.Vector3(0, -100, 0), vel: new THREE.Vector3(), target: new THREE.Vector3(0, -100, 0), yaw: 0, pitch: 0, phase: 0, amt: 0, tool: '', last: -99, veh: null };
  net.players.set(id, p);
}
function removeAvatar(p) {
  for (const k in p.meshes) G.scene.remove(p.meshes[k]);
  disposeHumanoid(p.meshes);
  if (p.body) G.world.removeBody(p.body);
  if (p.tag) p.tag.remove();
}
function updateRemote(d) {
  const p = net.players.get(d.id);
  if (!p) return;
  p.target.set(d.p[0], d.p[1], d.p[2]);
  p.vel.set(d.v[0], d.v[1], d.v[2]);
  p.yaw = d.yaw; p.pitch = d.pitch; p.tool = d.tool; p.last = G.time;
  // driving: the car is their body (their own would sit inside it and shove it about). Getting
  // out, they're put straight where they stepped out (easing there would drag it through the car)
  const veh = d.veh || null;
  if (veh !== p.veh) {
    p.veh = veh;
    p.body.collisionFilterGroup = veh ? 0 : GROUP.DYN;
    p.body.collisionFilterMask = veh ? 0 : AVATAR_MASK;
    if (!veh) p.pos.copy(p.target);
  }
  if (p.pos.y < -50) p.pos.copy(p.target);
}

// ---------------------------------------------------------------- objects
const heldByMe = () => (G.grab && G.grab.body && G.grab.body.ent) || null;
// something someone else holds or drives right now (their updates keep coming)
const heldElsewhere = (e) => G.time - (e.netHeldT ?? -99) < 0.5;
function applySnapshot(list) {
  for (const s of list) {
    const e = G.entByNid && G.entByNid.get(s[0]);
    // (what you hold or drive is yours; what you just let go of flies on here for a moment)
    if (!e || e.dead || e === heldByMe() || e === G.vehicle || e.netMineT > G.time) continue;
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
// where something held (or driven) is and how it moves; rel: let go of it; anc: anchored there
function holdMsg(e, rel = false) {
  const b = e.body;
  return {
    t: 'hold', n: e.nid, p: [b.position.x, b.position.y, b.position.z], q: [b.quaternion.x, b.quaternion.y, b.quaternion.z, b.quaternion.w],
    v: [b.velocity.x, b.velocity.y, b.velocity.z], w: [b.angularVelocity.x, b.angularVelocity.y, b.angularVelocity.z], rel: rel ? 1 : 0, anc: e.anchored ? 1 : 0,
  };
}
function applyHold(d) {
  const e = G.entByNid && G.entByNid.get(d.n);
  if (!e || e.dead || e === heldByMe() || e === G.vehicle) return;
  const b = e.body;
  // whoever has it set it loose (grabbing frees frozen, anchored and carried things): here too
  if (!d.anc) {
    if (e.frozen) unfreeze(e);
    if (e.anchored && G.unanchor) G.unanchor(e);
    if (e.carriedBy) { const c = e.carriedBy; if (c.ai && c.ai.carry === e) c.dropCarry(); else { e.carriedBy = null; b.type = CANNON.Body.DYNAMIC; b.collisionResponse = true; b.updateMassProperties(); } }
  }
  b.position.set(d.p[0], d.p[1], d.p[2]);
  if (d.q) b.quaternion.set(d.q[0], d.q[1], d.q[2], d.q[3]);
  b.velocity.set(d.v[0], d.v[1], d.v[2]);
  if (d.w) b.angularVelocity.set(d.w[0], d.w[1], d.w[2]);
  b.aabbNeedsUpdate = true;
  b.wakeUp();
  e.netHeldT = d.rel ? -99 : G.time;
  if (d.anc && G.anchorEnt) G.anchorEnt(e);
}
// You let go of something (dropped, thrown, anchored, got out of the car): one last word on
// where it is and how it moves, so a throw carries on everywhere and the host has it again.
export function shareRelease(e) {
  // (frozen while held: someone's Freeze Ray did that, and everyone has run that already)
  if (!net.active || !e || e.dead || !e.nid || e.frozen) return;
  e.netMineT = G.time + 1.5; // (the host's view of it is a little behind: let it fly a moment first)
  toAll(holdMsg(e, true));
}
G.shareRelease = shareRelease;

// ---------------------------------------------------------------- every frame
let stT = 0, snapT = 0, holdT = 0;
export function updateNet(dt) {
  if (!net.active) return;
  // others: ease towards where they said they are, animate, name tag
  for (const p of net.players.values()) {
    // (guess ahead only while their news is fresh: no news, no running off into the distance)
    const fresh = G.time - p.last < 0.3;
    if (fresh) p.target.addScaledVector(p.vel, dt);
    p.pos.lerp(p.target, Math.min(1, dt * 12));
    const b = p.body;
    b.position.set(p.pos.x, p.pos.y, p.pos.z);
    if (fresh) b.velocity.set(p.vel.x, p.vel.y, p.vel.z); else b.velocity.setZero();
    b.aabbNeedsUpdate = true;
    const hs = fresh && !p.veh ? Math.hypot(p.vel.x, p.vel.z) : 0;
    p.amt += (clamp(hs / 6, 0, 1) - p.amt) * Math.min(1, dt * 8);
    p.phase += dt * (3 + hs * 1.6);
    poseHumanoid(p.meshes, 1, new THREE.Vector3(p.pos.x, p.pos.y - 0.9, p.pos.z), p.yaw + Math.PI, p.phase, p.amt, p.veh ? { sit: true, pitch: p.pitch } : { aim: p.pitch, pitch: p.pitch });
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
    const msg = { t: 'st', id: net.myId, p: [b.position.x, b.position.y, b.position.z], v: [b.velocity.x, b.velocity.y, b.velocity.z], yaw: G.player.yaw, pitch: G.player.pitch, tool: G.currentToolId || '', veh: (G.vehicle && G.vehicle.nid) || null };
    toAll(msg);
  }
  // what I'm holding or driving: I'm in charge of it
  const h = heldByMe();
  holdT -= dt;
  if (holdT <= 0) {
    holdT = 1 / 15;
    if (h && h.nid) toAll(holdMsg(h));
    const car = G.vehicle;
    if (car && car.nid && !car.dead && car !== h) toAll(holdMsg(car));
  }
  // the host: where the moving things are (near anyone), 6 times a second
  if (net.host && net.conns.size) {
    snapT -= dt;
    if (snapT <= 0) {
      snapT = 1 / 6;
      const near = [G.player.body.position, ...[...net.players.values()].map((p) => p.pos)];
      const driven = new Set();
      for (const p of net.players.values()) if (p.veh) driven.add(p.veh);
      const s = [];
      for (const e of G.ents) {
        if (!e.nid || e.dead || e.kind === 'ragpart') continue;
        const b = e.body;
        if (b.type !== CANNON.Body.DYNAMIC || b.sleepState === CANNON.Body.SLEEPING || e === h || e === G.vehicle) continue;
        // someone else holds or drives it: they're in charge (their updates go round instead)
        if (driven.has(e.nid) || heldElsewhere(e)) continue;
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

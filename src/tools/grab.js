// The Fling Line: click to grab with a glowing rope, click again to FLING.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, clamp, tv, toast, rand } from '../core.js';
import { Strand, unfreeze } from '../items.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
import { aimHit, dummyOf } from './common.js';

let strand = null;
let snap = null; // retract animation after a fling
const cTight = new THREE.Color(0xff3b3b), cMid = new THREE.Color(0xffd23f), cLoose = new THREE.Color(0x5ff4ff);
const tmpC = new THREE.Color();

function target() {
  return G.aim.start.clone().addScaledVector(G.aim.dir, G.grab.dist);
}

const _wp = new CANNON.Vec3(), _r = new CANNON.Vec3(), _v = new CANNON.Vec3();
// runs every physics sub-step
function grabForce() {
  const g = G.grab;
  if (!g) return;
  const b = g.body;
  if (!G.world.bodies.includes(b) || b.type !== CANNON.Body.DYNAMIC) { release(false); return; }
  if (g.pallet) { palletForce(g, b); return; }
  b.pointToWorldFrame(g.local, _wp);
  const t = g.target;
  _wp.vsub(b.position, _r);
  b.angularVelocity.cross(_r, _v);
  _v.vadd(b.velocity, _v);
  const K = 110, C = 17;
  let ax = (t.x - _wp.x) * K - _v.x * C;
  let ay = (t.y - _wp.y) * K - _v.y * C + 9.82;
  let az = (t.z - _wp.z) * K - _v.z * C;
  const m = b.mass;
  let fx = ax * m, fy = ay * m, fz = az * m;
  const f = Math.hypot(fx, fy, fz);
  const maxF = 9000;
  if (f > maxF) { const s = maxF / f; fx *= s; fy *= s; fz *= s; }
  b.applyForce(new CANNON.Vec3(fx, fy, fz), _r);
  b.angularVelocity.scale(0.985, b.angularVelocity);
  if (g.spin) { b.angularVelocity.y += g.spin * 0.6; }
  g.tension = clamp(f / maxF, 0, 1) * 0.5 + clamp(Math.hypot(t.x - _wp.x, t.y - _wp.y, t.z - _wp.z) / 4, 0, 1) * 0.5;
}

// Pallet mode: the pallet flies the way you face (and carries you if you stand on it)
const _up = new CANNON.Vec3(0, 1, 0), _bu = new CANNON.Vec3(), _bf = new CANNON.Vec3();
function palletForce(g, b) {
  const d = G.aim.dir;
  const sp = g.speed;
  const m = b.mass;
  const rider = G.player && G.player.platform === b ? 75 : 0;
  let fx = m * (d.x * sp - b.velocity.x) * 3;
  let fy = m * (d.y * sp - b.velocity.y) * 3 + (m + rider) * 9.82;
  let fz = m * (d.z * sp - b.velocity.z) * 3;
  if (rider) { fx += rider * (d.x * sp - b.velocity.x) * 3; fy += rider * (d.y * sp - b.velocity.y) * 3; fz += rider * (d.z * sp - b.velocity.z) * 3; }
  b.applyForce(new CANNON.Vec3(fx, fy, fz));
  // stay level, turn to face the same way as the player
  b.quaternion.vmult(_up, _bu);
  const ex = -_bu.z, ez = _bu.x; // cross(bodyUp, worldUp) rotates the pallet back to level
  b.quaternion.vmult(new CANNON.Vec3(1, 0, 0), _bf);
  let yawErr = Math.atan2(-_bf.z, _bf.x) - (G.player ? G.player.yaw : 0);
  while (yawErr > Math.PI / 2) yawErr -= Math.PI;
  while (yawErr < -Math.PI / 2) yawErr += Math.PI;
  b.angularVelocity.set(ex * 10 + b.angularVelocity.x * 0.2, -yawErr * 4, ez * 10 + b.angularVelocity.z * 0.2);
  g.tension = clamp(sp / 40, 0, 1);
}

function release(sound = true) {
  if (!G.grab) return;
  const b = G.grab.body;
  b.angularDamping = G.grab.oldAngDamp;
  G.grab = null;
  if (strand) strand.hide();
  if (sound) sfx.pop();
}

function tryGrab() {
  const hit = aimHit(70);
  if (!hit) { toast('Nothing to grab'); return; }
  let body = hit.body;
  let local;
  const d = dummyOf(body);
  if (d) {
    if (d.state === 'standing') d.knock(null);
    // grab the part closest to the hit point
    let best = null, bd = 1e9;
    for (const n in d.parts) { const pb = d.parts[n].body; const dd = tv(pb.position).distanceTo(hit.point); if (dd < bd) { bd = dd; best = pb; } }
    if (d.frozen) d.unfreeze();
    body = best;
    local = new CANNON.Vec3(0, 0, 0);
  } else {
    const e = body.ent;
    if (e && e.frozen) unfreeze(e);
    if (body.type !== CANNON.Body.DYNAMIC) { toast("Can't grab the world. Try objects or dummies!"); return; }
    local = body.pointToLocalFrame(new CANNON.Vec3(hit.point.x, hit.point.y, hit.point.z));
  }
  G.grab = {
    body, local, dummy: d, dist: clamp(hit.point.distanceTo(G.aim.start), 2.5, 30),
    target: new THREE.Vector3(), tension: 0, spin: 0, oldAngDamp: body.angularDamping, t: 0,
    pallet: !!(body.ent && body.ent.def && body.ent.def.special === 'pallet'), speed: 16,
  };
  if (G.grab.pallet) { G.grab.local = new CANNON.Vec3(0, 0, 0); toast('PALLET: it flies where you look. Stand on it to ride! Z/X = slower/faster'); }
  body.wakeUp();
  body.angularDamping = 0.4;
  G.grab.target.copy(target());
  sfx.grab();
  FX.sparks(hit.point, hit.normal, 0x5ff4ff, 8, 3);
}

function fling() {
  const g = G.grab;
  const dir = G.aim.dir.clone();
  const m = g.dummy ? g.dummy.massTotal : g.body.mass;
  const speed = 48 * clamp(Math.pow(20 / m, 0.2), 0.4, 1.3);
  const v = dir.multiplyScalar(speed).add(new THREE.Vector3(0, 3, 0));
  if (g.dummy) {
    for (const n in g.dummy.parts) { const b = g.dummy.parts[n].body; b.velocity.set(v.x + rand(-1, 1), v.y + rand(-1, 1), v.z + rand(-1, 1)); b.angularVelocity.set(rand(-10, 10), rand(-10, 10), rand(-10, 10)); }
    g.dummy.markFling();
  } else {
    g.body.velocity.set(v.x, v.y, v.z);
    g.body.angularVelocity.set(rand(-6, 6), rand(-6, 6), rand(-6, 6));
  }
  const from = G.aim.hand.clone();
  const to = tv(g.body.pointToWorldFrame(g.local));
  snap = { from, to, t: 0.15 };
  release(false);
  sfx.fling();
  G.shake = Math.max(G.shake, 0.25);
}

G.extraForces.push(grabForce);
G.onRemove = (e) => { if (G.grab && G.grab.body === e.body) release(false); };

export const grabTools = [{
  id: 'fling', name: 'Fling Line', icon: '✋', color: 0x5ff4ff,
  hint: 'Click: grab · Click again: FLING · F drop · Z/X reel · R spin',
  down() { if (G.grab) fling(); else tryGrab(); },
  unequip() { release(false); },
  update(dt, input) {
    if (!strand) strand = new Strand(0x5ff4ff, 0.028, 18, true);
    const g = G.grab;
    G.crossHint = null;
    if (g) {
      if (g.pallet) {
        if (input.held('KeyZ')) g.speed = Math.max(3, g.speed - dt * 15);
        if (input.held('KeyX')) g.speed = Math.min(45, g.speed + dt * 15);
      } else {
        if (input.held('KeyZ')) g.dist = Math.max(2, g.dist - dt * 10);
        if (input.held('KeyX')) g.dist = Math.min(35, g.dist + dt * 10);
      }
      g.spin = input.held('KeyR') ? 1 : 0;
      if (input.tap('KeyF')) { release(); return; }
      g.target.copy(target());
      g.t += dt;
      const wp = tv(g.body.pointToWorldFrame(g.local));
      const hand = G.aim.hand;
      if (wp.distanceTo(hand) > (g.pallet ? 120 : 55)) { release(); toast('Line snapped!'); return; }
      const tens = g.tension;
      tmpC.copy(cLoose).lerp(tens < 0.5 ? cMid : cTight, tens < 0.5 ? tens * 2 : (tens - 0.5) * 2);
      if (tens >= 0.5) tmpC.copy(cMid).lerp(cTight, (tens - 0.5) * 2);
      strand.setColor(tmpC);
      const sag = clamp(1 - tens * 1.6, 0, 1) * Math.min(2, wp.distanceTo(hand) * 0.15);
      const wob = tens > 0.6 ? new THREE.Vector3(0, 0.08 * tens, 0) : null;
      strand.update(hand, wp, sag, wob);
      if (Math.random() < 0.3) FX.particle({ pos: wp, vel: new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)), color: tmpC.getHex(), size: 0.07, life: 0.3, glow: true, add: true, gravity: 0 });
    } else if (snap) {
      snap.t -= dt;
      if (snap.t <= 0) { snap = null; strand.hide(); }
      else {
        const k = snap.t / 0.15;
        strand.setColor(0xffffff);
        strand.update(G.aim.hand, G.aim.hand.clone().lerp(snap.to, k), 0, null);
      }
    } else {
      strand.hide();
      const h = aimHit(70);
      G.crossHint = h && (h.body.type === CANNON.Body.DYNAMIC || dummyOf(h.body)) ? 'grab' : null;
    }
  },
}];

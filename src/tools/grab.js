// The Fling Line: click to grab with a rope, F to THROW, click again to drop.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, clamp, tv, toast, rand } from '../core.js';
import { Strand, unfreeze } from '../items.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
import { aimHit, dummyOf } from './common.js';

// how far the line reaches / holds things (metres)
const REACH = 18;
const HOLD_MIN = 2.5;
const HOLD_MAX = 14;
const SNAP = 24;

let strand = null;
let snap = null; // quick retract animation after a throw
const trails = []; // thrown things leave a short streak
const cLoose = new THREE.Color(0xffffff), cTight = new THREE.Color(0xff4a4a);
const tmpC = new THREE.Color();
const _tq = new THREE.Quaternion(), _cq = new THREE.Quaternion(), _eq = new THREE.Quaternion(), _yq = new THREE.Quaternion();
const UP = new THREE.Vector3(0, 1, 0);
// target world orientation = your facing (yaw) * the orientation you set
function holdQ(g, out) {
  _yq.setFromAxisAngle(UP, G.player ? G.player.yaw : 0);
  return out.copy(_yq).multiply(g.rel);
}
// R + mouse: turn the held object (left/right around up, up/down around your right side)
export function rotateHeld(dx, dy) {
  const g = G.grab;
  if (!g || g.dummy) return false;
  const qa = new THREE.Quaternion().setFromAxisAngle(UP, dx * 1.6);
  const qb = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * 1.6);
  g.rel.premultiply(qb).premultiply(qa).normalize();
  g.body.wakeUp();
  return true;
}

function target() {
  return G.aim.start.clone().addScaledVector(G.aim.dir, G.grab.dist);
}

const _wp = new CANNON.Vec3(), _r = new CANNON.Vec3(), _v = new CANNON.Vec3();
// spring that pulls the grabbed point toward the spot in front of you (runs every physics sub-step)
function grabForce() {
  const g = G.grab;
  if (!g) return;
  const b = g.body;
  if (!G.world.bodies.includes(b) || b.type !== CANNON.Body.DYNAMIC) { release(false); return; }
  b.pointToWorldFrame(g.local, _wp);
  const t = g.target;
  _wp.vsub(b.position, _r);
  b.angularVelocity.cross(_r, _v);
  _v.vadd(b.velocity, _v);
  const K = 110, C = 17;
  const m = b.mass;
  let fx = ((t.x - _wp.x) * K - _v.x * C) * m;
  let fy = ((t.y - _wp.y) * K - _v.y * C + 9.82) * m;
  let fz = ((t.z - _wp.z) * K - _v.z * C) * m;
  const f = Math.hypot(fx, fy, fz);
  const maxF = 9000;
  if (f > maxF) { const s = maxF / f; fx *= s; fy *= s; fz *= s; }
  b.applyForce(new CANNON.Vec3(fx, fy, fz), _r);
  if (g.dummy) { b.angularVelocity.scale(0.985, b.angularVelocity); }
  else {
    // hold the object's orientation (relative to where you face); R + mouse turns it
    holdQ(g, _tq);
    _cq.copy(b.quaternion);
    _eq.copy(_tq).multiply(_cq.invert());
    if (_eq.w < 0) { _eq.x = -_eq.x; _eq.y = -_eq.y; _eq.z = -_eq.z; _eq.w = -_eq.w; }
    const s = Math.sqrt(1 - Math.min(1, _eq.w * _eq.w));
    const ang = 2 * Math.acos(Math.min(1, _eq.w));
    const kq = 12; // how fast it settles into the held orientation (1/s)
    const ax = s > 1e-4 ? _eq.x / s : 0, ay = s > 1e-4 ? _eq.y / s : 0, az = s > 1e-4 ? _eq.z / s : 0;
    const w = b.angularVelocity;
    const blend = 0.35;
    w.x += (ax * ang * kq - w.x) * blend;
    w.y += (ay * ang * kq - w.y) * blend;
    w.z += (az * ang * kq - w.z) * blend;
  }
  g.tension = clamp(f / maxF, 0, 1) * 0.5 + clamp(Math.hypot(t.x - _wp.x, t.y - _wp.y, t.z - _wp.z) / 4, 0, 1) * 0.5;
}

function release(sound = true) {
  if (!G.grab) return;
  G.grab.body.angularDamping = G.grab.oldAngDamp;
  G.grab = null;
  if (strand) strand.hide();
  if (sound) sfx.drop();
}

function tryGrab() {
  const hit = aimHit(REACH);
  if (!hit) { toast('Too far — get closer'); return; }
  let body = hit.body;
  let local;
  const d = dummyOf(body);
  if (d) {
    if (d.state === 'standing') d.knock(null);
    // grab the body part closest to where you aimed
    let best = null, bd = 1e9;
    for (const n in d.parts) { const pb = d.parts[n].body; const dd = tv(pb.position).distanceTo(hit.point); if (dd < bd) { bd = dd; best = pb; } }
    if (d.frozen) d.unfreeze();
    body = best;
    local = new CANNON.Vec3(0, 0, 0);
  } else {
    const e = body.ent;
    if (e && e.frozen) unfreeze(e);
    if (body.type !== CANNON.Body.DYNAMIC) { toast("Can't grab that"); return; }
    local = body.pointToLocalFrame(new CANNON.Vec3(hit.point.x, hit.point.y, hit.point.z));
  }
  G.grab = {
    body, local, dummy: d, dist: clamp(hit.point.distanceTo(G.aim.start), HOLD_MIN, HOLD_MAX),
    target: new THREE.Vector3(), tension: 0, oldAngDamp: body.angularDamping,
    // orientation relative to your facing, so it turns with you
    rel: new THREE.Quaternion().setFromAxisAngle(UP, -(G.player ? G.player.yaw : 0)).multiply(new THREE.Quaternion(body.quaternion.x, body.quaternion.y, body.quaternion.z, body.quaternion.w)),
  };
  body.wakeUp();
  body.angularDamping = 0.4;
  G.grab.target.copy(target());
  sfx.grab();
  FX.sparks(hit.point, hit.normal, 0xffffff, 6, 3);
}

function throwIt() {
  const g = G.grab;
  const dir = G.aim.dir.clone();
  const m = g.dummy ? g.dummy.massTotal : g.body.mass;
  const speed = 40 * clamp(Math.pow(20 / m, 0.2), 0.4, 1.2);
  const v = dir.multiplyScalar(speed).add(new THREE.Vector3(0, 2.5, 0));
  if (g.dummy) {
    for (const n in g.dummy.parts) {
      const b = g.dummy.parts[n].body;
      b.velocity.set(v.x + rand(-1, 1), v.y + rand(-1, 1), v.z + rand(-1, 1));
      b.angularVelocity.set(rand(-10, 10), rand(-10, 10), rand(-10, 10));
    }
    g.dummy.markFling();
    trails.push({ body: g.dummy.parts.torso.body, t: 0.9 });
  } else {
    g.body.velocity.set(v.x, v.y, v.z);
    g.body.angularVelocity.set(rand(-6, 6), rand(-6, 6), rand(-6, 6));
    trails.push({ body: g.body, t: 0.7 });
  }
  snap = { to: tv(g.body.pointToWorldFrame(g.local)), t: 0.12 };
  release(false);
  sfx.fling();
  G.shake = Math.max(G.shake, 0.2);
  G.fovPunch = 6;
}

G.extraForces.push(grabForce);
G.onRemove = (e) => { if (G.grab && G.grab.body === e.body) release(false); };

// streaks behind thrown things (called every frame from the main loop)
export function updateGrabFx(dt) {
  for (let i = trails.length - 1; i >= 0; i--) {
    const tr = trails[i];
    tr.t -= dt;
    if (tr.t <= 0 || tr.body.velocity.length() < 6) { trails.splice(i, 1); continue; }
    FX.particle({ pos: tv(tr.body.position), vel: new THREE.Vector3(), color: 0xffffff, size: 0.12, life: 0.35, glow: true, add: true, opacity: 0.5, gravity: 0, drag: 0, spin: 0 });
  }
}

export const grabTools = [{
  id: 'fling', name: 'Fling Line', icon: '✋', color: 0xffffff,
  hint: 'Click: grab / drop · F: THROW · Z/X: shorter/longer line · hold R + mouse: rotate',
  down() { if (G.grab) release(); else tryGrab(); },
  unequip() { release(false); },
  update(dt, input) {
    if (!strand) strand = new Strand(0xffffff, 0.022, 16, true);
    const g = G.grab;
    G.crossHint = null;
    G.toolNote = null;
    if (g) {
      if (input.held('KeyZ')) g.dist = Math.max(HOLD_MIN, g.dist - dt * 8);
      if (input.held('KeyX')) g.dist = Math.min(HOLD_MAX, g.dist + dt * 8);
      G.toolNote = input.held('KeyR') && !g.dummy ? 'Rotating — move the mouse' : null;
      if (input.tap('KeyF')) { throwIt(); return; }
      g.target.copy(target());
      const wp = tv(g.body.pointToWorldFrame(g.local));
      const hand = G.aim.hand;
      if (wp.distanceTo(hand) > SNAP) { release(); toast('Line snapped!'); return; }
      const tens = g.tension;
      strand.setColor(tmpC.copy(cLoose).lerp(cTight, clamp((tens - 0.4) / 0.6, 0, 1)));
      const sag = clamp(1 - tens * 1.6, 0, 1) * Math.min(1.5, wp.distanceTo(hand) * 0.12);
      strand.update(hand, wp, sag, null);
    } else if (snap) {
      snap.t -= dt;
      if (snap.t <= 0) { snap = null; strand.hide(); }
      else {
        strand.setColor(0xffffff);
        strand.update(G.aim.hand, G.aim.hand.clone().lerp(snap.to, snap.t / 0.12), 0, null);
      }
    } else {
      strand.hide();
      const h = aimHit(REACH);
      G.crossHint = h && (h.body.type === CANNON.Body.DYNAMIC || dummyOf(h.body)) ? 'grab' : null;
    }
  },
}];

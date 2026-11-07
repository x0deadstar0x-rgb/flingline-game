// The Fling Line.
//  - Click something loose: grab it. The line keeps the length it had when you grabbed
//    (shorter / longer with the reel keys or wheel). Held things keep their angle (no spinning);
//    rotate them on purpose with the rotate key + mouse. Anything can be lifted: its weight is
//    always held up, heavy things just speed up and slow down more slowly.
//  - Click the ground, a wall, a building: the line hooks on (grappling hook). Swing on it,
//    reel yourself in / out, or use alt (throw key) to zip to the hook.
//  - Alt (throw key / right click): throw what you hold.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, clamp, tv, toast, rand } from '../core.js';
import { Strand, unfreeze } from '../items.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
import { aimHit, dummyOf } from './common.js';
import { bindText } from '../input.js';

const REACH = 26;       // how far you can grab loose things (m)
const HOOK_REACH = 48;  // how far the grappling hook reaches (m)
const LEN_MIN = 1.2;
const LEN_MAX = 60;
const REEL_SPEED = 9;   // m/s while holding the reel keys

let strand = null;
let snap = null; // quick retract animation after a throw
const trails = []; // thrown things leave a short streak
const cLoose = new THREE.Color(0xffffff), cTight = new THREE.Color(0xff4a4a);
const tmpC = new THREE.Color();
const _tq = new THREE.Quaternion(), _cq = new THREE.Quaternion(), _eq = new THREE.Quaternion(), _yq = new THREE.Quaternion();
const UP = new THREE.Vector3(0, 1, 0);

// how hard the line can accelerate something of this mass (heavy = gentler, but never below lifting it)
export function lineAccel(mass) { return clamp(170 * Math.pow(30 / Math.max(mass, 0.1), 0.45), 9, 170); }

// target world orientation = your facing (yaw) * the orientation you set
function holdQ(g, out) {
  _yq.setFromAxisAngle(UP, G.player ? G.player.yaw : 0);
  return out.copy(_yq).multiply(g.rel);
}
// rotate key + mouse: turn the held thing (left/right around up, up/down around your right side)
export function rotateHeld(dx, dy) {
  const g = G.grab;
  if (!g || g.hook) return false;
  const qa = new THREE.Quaternion().setFromAxisAngle(UP, dx * 1.6);
  const qb = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * 1.6);
  g.rel.premultiply(qb).premultiply(qa).normalize();
  g.body.wakeUp();
  return true;
}
// change the line length (reel keys / scroll wheel)
export function reelBy(dm) {
  const g = G.grab;
  if (!g) return;
  g.dist = clamp(g.dist + dm, LEN_MIN, g.hook ? HOOK_REACH * 1.25 : LEN_MAX);
  if (g.body) g.body.wakeUp();
}
G.reelBy = reelBy;

function target() {
  return G.aim.start.clone().addScaledVector(G.aim.dir, G.grab.dist);
}

const _wp = new CANNON.Vec3(), _r = new CANNON.Vec3(), _v = new CANNON.Vec3(), _F = new CANNON.Vec3(), _zero = new CANNON.Vec3();
// pulls the grabbed point to the spot in front of you (every physics sub-step)
function grabForce() {
  const g = G.grab;
  if (!g) return;
  if (g.hook) { hookForce(g); return; }
  const b = g.body;
  if (!G.world.bodies.includes(b) || b.type !== CANNON.Body.DYNAMIC) { release(false); return; }
  b.pointToWorldFrame(g.local, _wp);
  const t = g.target;
  _wp.vsub(b.position, _r);
  b.angularVelocity.cross(_r, _v);
  _v.vadd(b.velocity, _v);
  // stiff, well damped spring (a dummy's limb a little softer so it doesn't jitter)
  const K = g.dummy ? 120 : 260, C = g.dummy ? 18 : 2 * Math.sqrt(K);
  let ax = (t.x - _wp.x) * K - _v.x * C;
  let ay = (t.y - _wp.y) * K - _v.y * C;
  let az = (t.z - _wp.z) * K - _v.z * C;
  const aMax = lineAccel(g.dummy ? g.dummy.massTotal : b.mass);
  const a = Math.hypot(ax, ay, az);
  if (a > aMax) { const s = aMax / a; ax *= s; ay *= s; az *= s; }
  const m = b.mass;
  // pull at the grabbed point...
  _F.set(ax * m, ay * m, az * m);
  b.applyForce(_F, _r);
  // ...and hold its weight up at its centre, so anything can be lifted without tipping over
  _F.set(0, 9.82 * m, 0);
  b.applyForce(_F, _zero);
  // hold the angle it had when grabbed (relative to where you face): no spinning
  holdQ(g, _tq);
  _cq.set(b.quaternion.x, b.quaternion.y, b.quaternion.z, b.quaternion.w);
  _eq.copy(_tq).multiply(_cq.invert());
  if (_eq.w < 0) { _eq.x = -_eq.x; _eq.y = -_eq.y; _eq.z = -_eq.z; _eq.w = -_eq.w; }
  const s = Math.sqrt(1 - Math.min(1, _eq.w * _eq.w));
  const ang = 2 * Math.acos(Math.min(1, _eq.w));
  const kq = g.dummy ? 6 : 14; // how fast it settles into the held angle (1/s)
  const qx = s > 1e-4 ? _eq.x / s : 0, qy = s > 1e-4 ? _eq.y / s : 0, qz = s > 1e-4 ? _eq.z / s : 0;
  const w = b.angularVelocity;
  const blend = g.dummy ? 0.2 : 0.4;
  w.x += (qx * ang * kq - w.x) * blend;
  w.y += (qy * ang * kq - w.y) * blend;
  w.z += (qz * ang * kq - w.z) * blend;
  g.tension = clamp(a / (aMax * 1.2), 0, 1) * 0.5 + clamp(Math.hypot(t.x - _wp.x, t.y - _wp.y, t.z - _wp.z) / 3, 0, 1) * 0.5;
}

// grappling hook: you hang from a fixed point; the line can't get longer than its length
function hookForce(g) {
  const pb = G.player && G.player.body;
  if (!pb) return;
  const a = g.anchor;
  const dx = pb.position.x - a.x, dy = pb.position.y + 0.4 - a.y, dz = pb.position.z - a.z;
  const d = Math.hypot(dx, dy, dz);
  if (g.zip > 0) g.dist = Math.max(LEN_MIN + 0.5, Math.min(g.dist, d));
  if (d <= g.dist || d < 1e-4) { g.tension = 0; return; }
  const nx = dx / d, ny = dy / d, nz = dz / d;
  const v = pb.velocity;
  const vr = v.x * nx + v.y * ny + v.z * nz;
  if (vr > 0) { v.x -= nx * vr; v.y -= ny * vr; v.z -= nz * vr; }
  // pull back to the line length (gently, so reeling in lifts you smoothly)
  const over = Math.min(d - g.dist, 3);
  const k = Math.min(1, over) * 0.35;
  pb.position.x -= nx * over * k; pb.position.y -= ny * over * k; pb.position.z -= nz * over * k;
  // reeling in faster than you are moving: help you up
  if (over > 0.05) { v.x -= nx * over * 6 / 60; v.y -= ny * over * 6 / 60; v.z -= nz * over * 6 / 60; }
  g.tension = clamp(over, 0, 1);
}

function release(sound = true) {
  const g = G.grab;
  if (!g) return;
  if (g.body) {
    g.body.angularDamping = g.oldAngDamp;
    if (g.oldMask !== undefined) g.body.collisionFilterMask = g.oldMask;
  }
  G.grab = null;
  if (strand) strand.hide();
  if (sound) sfx.drop();
}

function tryGrab() {
  const hit = aimHit(HOOK_REACH);
  if (!hit) { toast('Nothing in reach'); return; }
  let body = hit.body;
  const d = dummyOf(body);
  const e = body.ent;
  const loose = d || (e && (body.type === CANNON.Body.DYNAMIC || e.frozen || e.anchored));
  if (!loose) { if (body.type !== CANNON.Body.DYNAMIC) { hook(hit); return; } }
  if (hit.dist > REACH) { toast(`Too far to grab things — get within ${REACH} m (the hook reaches ${HOOK_REACH} m)`); return; }
  let local;
  if (d) {
    if (d.state === 'standing') d.knock(null);
    // grab the body part closest to where you aimed
    let best = null, bd = 1e9;
    for (const n in d.parts) { const pb = d.parts[n].body; const dd = tv(pb.position).distanceTo(hit.point); if (dd < bd) { bd = dd; best = pb; } }
    if (d.frozen) d.unfreeze();
    for (const n in d.parts) if (d.parts[n].anchored) unanchor(d.parts[n]);
    body = best;
    local = new CANNON.Vec3(0, 0, 0);
  } else {
    if (e && e.frozen) unfreeze(e);
    if (e && e.anchored) unanchor(e);
    if (e && e.carriedBy) { const c = e.carriedBy; if (c.ai && c.ai.carry === e) c.dropCarry(); else { e.carriedBy = null; body.type = CANNON.Body.DYNAMIC; body.collisionResponse = true; body.updateMassProperties(); } } // snatch it from a dummy carrying it
    if (body.type !== CANNON.Body.DYNAMIC) { toast("Can't grab that"); return; }
    local = body.pointToLocalFrame(new CANNON.Vec3(hit.point.x, hit.point.y, hit.point.z));
  }
  const dist = clamp(hit.point.distanceTo(G.aim.start), LEN_MIN, REACH);
  G.grab = {
    body, local, dummy: d, dist,
    target: new THREE.Vector3(), tension: 0, oldAngDamp: body.angularDamping, oldMask: body.collisionFilterMask,
    // orientation relative to your facing, so it turns with you
    rel: new THREE.Quaternion().setFromAxisAngle(UP, -(G.player ? G.player.yaw : 0)).multiply(new THREE.Quaternion(body.quaternion.x, body.quaternion.y, body.quaternion.z, body.quaternion.w)),
  };
  // what you hold can't push you around (no standing on it to fly)
  body.collisionFilterMask = body.collisionFilterMask & ~GROUP.PLAYER;
  body.wakeUp();
  body.angularDamping = 0.4;
  G.grab.target.copy(target());
  sfx.grab();
  FX.sparks(hit.point, hit.normal, 0xffffff, 6, 3);
}

function hook(hit) {
  const dist = hit.point.distanceTo(G.aim.start);
  G.grab = { hook: true, anchor: new CANNON.Vec3(hit.point.x, hit.point.y, hit.point.z), point: hit.point.clone(), dist: Math.max(LEN_MIN, dist), tension: 0, zip: 0 };
  sfx.grab();
  FX.sparks(hit.point, hit.normal, 0xd8d8d8, 10, 4);
  FX.debris(hit.point, 0x8a7a5a, 3, 0.06, 2);
}

function throwIt() {
  const g = G.grab;
  if (!g) return;
  if (g.hook) {
    // zip towards the hook
    const pb = G.player.body;
    const to = tv(g.anchor).sub(tv(pb.position)).normalize();
    pb.velocity.set(to.x * 24, to.y * 24 + 3, to.z * 24);
    G.player.stun = Math.max(G.player.stun || 0, 0.25);
    g.zip = 0.6;
    sfx.fling();
    G.fovPunch = 8;
    return;
  }
  const dir = G.aim.dir.clone();
  const m = g.dummy ? g.dummy.massTotal : g.body.mass;
  const speed = 40 * clamp(Math.pow(20 / m, 0.22), 0.25, 1.2);
  const v = dir.multiplyScalar(speed).add(new THREE.Vector3(0, 2.5, 0));
  if (g.dummy) {
    for (const n in g.dummy.parts) {
      const b = g.dummy.parts[n].body;
      b.velocity.set(v.x + rand(-1, 1), v.y + rand(-1, 1), v.z + rand(-1, 1));
      b.angularVelocity.set(rand(-6, 6), rand(-6, 6), rand(-6, 6));
    }
    g.dummy.markFling();
    trails.push({ body: g.dummy.parts.torso.body, t: 0.9 });
  } else {
    g.body.velocity.set(v.x, v.y, v.z);
    g.body.angularVelocity.set(rand(-2, 2), rand(-2, 2), rand(-2, 2));
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
G.releaseGrab = release;

// streaks behind thrown things (called every frame from the main loop)
export function updateGrabFx(dt) {
  for (let i = trails.length - 1; i >= 0; i--) {
    const tr = trails[i];
    tr.t -= dt;
    if (tr.t <= 0 || tr.body.velocity.length() < 6) { trails.splice(i, 1); continue; }
    FX.particle({ pos: tv(tr.body.position), vel: new THREE.Vector3(), color: 0xffffff, size: 0.12, life: 0.35, glow: true, add: true, opacity: 0.5, gravity: 0, drag: 0, spin: 0 });
  }
}

// ------------------------------------------------------------- anchoring
// Anchor: what you hold freezes completely still right where it is (even in mid-air).
// Grab it again to set it free.
const anchorMat = new THREE.MeshBasicMaterial({ color: 0x9fe8ff, transparent: true, opacity: 0.9 });
const anchorGeo = new THREE.OctahedronGeometry(0.09, 0);
export function anchorEnt(e, at) {
  const b = e.body;
  if (!b || e.anchored || e.frozen) return false;
  e.anchored = true;
  e.anchorMass = b.mass;
  b.type = CANNON.Body.STATIC;
  b.mass = 0; b.updateMassProperties();
  b.velocity.setZero(); b.angularVelocity.setZero();
  b.aabbNeedsUpdate = true;
  if (e.mesh) {
    // a little glowing pin shows it's anchored
    const pin = new THREE.Mesh(anchorGeo, anchorMat);
    const lp = at ? b.pointToLocalFrame(new CANNON.Vec3(at.x, at.y, at.z)) : new CANNON.Vec3();
    const s = e.scale || 1;
    pin.position.set(lp.x / s, lp.y / s, lp.z / s);
    pin.scale.setScalar(1 / s);
    e.mesh.add(pin);
    e.anchorPin = pin;
    e.mesh.position.copy(b.position); e.mesh.quaternion.copy(b.quaternion);
  }
  return true;
}
export function unanchor(e) {
  if (!e.anchored) return;
  e.anchored = false;
  const b = e.body;
  b.type = CANNON.Body.DYNAMIC;
  b.mass = e.anchorMass || 1; b.updateMassProperties();
  b.wakeUp();
  if (e.anchorPin) { e.mesh.remove(e.anchorPin); e.anchorPin = null; }
}
G.unanchor = unanchor;
function anchorHeld() {
  const g = G.grab;
  if (!g || g.hook) return;
  const e = g.body.ent;
  if (!e) return;
  const at = tv(g.body.pointToWorldFrame(g.local));
  release(false);
  if (anchorEnt(e, at)) { sfx.weld ? sfx.weld() : sfx.drop(); FX.sparks(at, new THREE.Vector3(0, 1, 0), 0x9fe8ff, 10, 3); toast('Anchored — grab it again to free it'); }
}

// The Fling Line is not a hotbar tool: you always have it (grab key, default F / right click).
// update() runs every frame whatever tool you hold.
export const line = {
  holding: () => !!G.grab,
  toggle() { if (G.grab) release(); else tryGrab(); },
  throwIt() { throwIt(); },
  anchor() { anchorHeld(); },
  release(sound = false) { release(sound); },
  update(dt, input, showHint) {
    if (!strand) strand = new Strand(0xffffff, 0.022, 16, true);
    const g = G.grab;
    if (g) {
      G.crossHint = null;
      if (input.held('reelIn')) reelBy(-dt * REEL_SPEED);
      if (input.held('reelOut')) reelBy(dt * REEL_SPEED);
      const hand = G.aim.lineHand || G.aim.hand;
      if (g.hook) {
        g.zip = Math.max(0, g.zip - dt);
        const ap = tv(g.anchor);
        strand.setColor(tmpC.copy(cLoose).lerp(cTight, clamp(g.tension, 0, 1) * 0.6));
        const d = ap.distanceTo(hand);
        strand.update(hand, ap, Math.max(0, (g.dist - d) * 0.3), null);
        G.lineNote = `Hooked · ${g.dist.toFixed(1)} m · ${bindText('use', 1)}: zip · ${bindText('grab', 1)}: let go · ${bindText('reelIn', 1)}/${bindText('reelOut', 1)}: reel`;
        return;
      }
      G.lineNote = input.held('rotate') ? 'Rotating — move the mouse' : `Holding · ${g.dist.toFixed(1)} m · ${bindText('use', 1)}: THROW · ${bindText('grab', 1)}: drop · ${bindText('anchor', 1)}: anchor in place · ${bindText('reelIn', 1)}/${bindText('reelOut', 1)}: closer/further · ${bindText('rotate', 1)}+mouse: turn`;
      g.target.copy(target());
      const wp = tv(g.body.pointToWorldFrame(g.local));
      // only snaps if it gets stuck far behind (e.g. you walked away from something wedged under a building)
      if (wp.distanceTo(hand) > g.dist + 14) { release(); toast('Line snapped!'); return; }
      const tens = g.tension;
      strand.setColor(tmpC.copy(cLoose).lerp(cTight, clamp((tens - 0.4) / 0.6, 0, 1)));
      const sag = clamp(1 - tens * 1.6, 0, 1) * Math.min(1.2, wp.distanceTo(hand) * 0.08);
      strand.update(hand, wp, sag, null);
      return;
    }
    G.lineNote = null;
    if (snap) {
      snap.t -= dt;
      if (snap.t <= 0) { snap = null; strand.hide(); }
      else {
        strand.setColor(0xffffff);
        const lh = G.aim.lineHand || G.aim.hand;
        strand.update(lh, lh.clone().lerp(snap.to, snap.t / 0.12), 0, null);
      }
    } else strand.hide();
    if (showHint) {
      const h = aimHit(HOOK_REACH);
      G.crossHint = null;
      if (h) {
        const loose = h.body.type === CANNON.Body.DYNAMIC || dummyOf(h.body) || (h.body.ent && (h.body.ent.frozen || h.body.ent.anchored));
        G.crossHint = loose ? (h.dist <= REACH ? 'grab' : null) : 'hook';
      }
    }
  },
};

// "Hands": an empty hotbar slot. Clicking grabs with the line (like the grab key).
export const handsTool = {
  id: 'hands', name: 'Hands', icon: '✋', color: 0xffffff,
  get hint() { return `Click or ${bindText('grab', 1)}: grab with your Fling Line (ground & walls: grappling hook)`; },
  desc: 'No tool, just your Fling Line. Click grabs (same as the grab key). You always have the Fling Line, whatever tool you hold.',
  down() { line.toggle(); },
};

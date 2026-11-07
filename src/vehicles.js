// Driving. Walk up to a car (or truck, or kart) and press the interact key (V) to get in,
// again to get out. Arcade handling: it grips the road, drifts with the handbrake (jump),
// flips back over with jump when it's on its roof, and you can still use your tools.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, toast, raycast, GROUP, clamp } from './core.js';
import { sfx } from './audio.js';
import { bindText } from './input.js';

// how each one drives: top speed (m/s), engine pull, grip, how sharply it turns
const SPECS = {
  car: { top: 30, pull: 17, grip: 7, turn: 1.9, reverse: 9 },
  truck: { top: 26, pull: 21, grip: 8, turn: 1.5, reverse: 8 },
  kart: { top: 24, pull: 26, grip: 10, turn: 2.6, reverse: 7 },
};
let car = null;
const drive = { throttle: 0, steer: 0, brake: false, grounded: false, flipT: 0 };
const F = new CANNON.Vec3(1, 0, 0), U = new CANNON.Vec3(0, 1, 0);
const _f = new CANNON.Vec3(), _u = new CANNON.Vec3(), _F = new CANNON.Vec3();
let saved = null;
G.__drive = drive; // (for tests)

export function driving() { return car; }

// interact key: get in the nearest vehicle, or out of the one you're in
export function toggleVehicle() {
  if (car) { exitVehicle(); return true; }
  const pp = G.player.pos();
  let best = null, bd = 5;
  for (const e of G.ents) {
    if (e.dead || !e.def || !SPECS[e.def.id] || e.frozen) continue;
    // (anchored ones are set free below; someone else in a room is driving or holding it)
    if ((e.body.type !== CANNON.Body.DYNAMIC && !e.anchored) || G.time - (e.netHeldT ?? -99) < 0.5) continue;
    const d = pp.distanceTo(e.body.position);
    if (d < bd) { bd = d; best = e; }
  }
  if (!best) return false;
  // anchored in place: getting in sets it free (like grabbing it does)
  if (best.anchored && G.unanchor) G.unanchor(best);
  if (best.body.type !== CANNON.Body.DYNAMIC) return false;
  car = best;
  G.vehicle = best;
  const pl = G.player, pb = pl.body;
  saved = { g: pb.collisionFilterGroup, m: pb.collisionFilterMask };
  pb.collisionFilterGroup = 0; pb.collisionFilterMask = 0;
  pb.velocity.setZero();
  // your legs' spring stops pushing on whatever you stood on
  pl.hover = null; pl.platform = null;
  best.body.allowSleep = false; best.body.wakeUp();
  // the wheels are part of the body and don't turn, so while you drive it slides freely and the
  // driving code below does the gripping
  saved.mat = best.body.material;
  best.body.material = G.mats.ice || best.body.material;
  G.player.camDistDrive = 8;
  toast(`Driving: ${bindText('forward', 1)}/${bindText('back', 1)} gas & brake · ${bindText('left', 1)}/${bindText('right', 1)} steer · ${bindText('jump', 1)} handbrake · ${bindText('interact', 1)} get out`);
  sfx.grab();
  return true;
}
export function exitVehicle() {
  const e = car;
  resetVehicle();
  if (!e || !e.body) return;
  const pb = G.player.body;
  // step out where there's room
  const at = exitSpot(e);
  pb.position.set(at.x, at.y, at.z);
  pb.velocity.set(e.body.velocity.x, Math.max(0, e.body.velocity.y), e.body.velocity.z);
  pb.previousPosition.copy(pb.position); pb.interpolatedPosition.copy(pb.position);
  G.player.camY = undefined;
  // (in a room: everyone else gets the car back as it is now)
  if (G.shareRelease) G.shareRelease(e);
}
// Out of the car on the spot, nothing moved: for a new map (it puts you at its start, and the
// car is gone). Also the first half of getting out normally.
export function resetVehicle() {
  const e = car;
  car = null; G.vehicle = null;
  sfx.engine(false, 0);
  if (saved && G.player) { const pb = G.player.body; pb.collisionFilterGroup = saved.g; pb.collisionFilterMask = saved.m; }
  if (e && e.body) { e.body.allowSleep = true; if (saved && saved.mat) e.body.material = saved.mat; }
  saved = null;
}
G.resetVehicle = resetVehicle;

// how far the car reaches from its middle: along it (x), up (y) and across (z)
function extentOf(e) {
  let x = 0.5, y = 0.5, z = 0.5;
  for (const pt of e.def.parts || []) {
    // (cylinders are wheels, turned on their side: the axle runs across the car)
    const h = pt.size ? [pt.size[0] / 2, pt.size[1] / 2, pt.size[2] / 2] : [pt.r || 0.5, pt.r || 0.5, (pt.h || 1) / 2];
    x = Math.max(x, Math.abs(pt.off[0]) + h[0]); y = Math.max(y, pt.off[1] + h[1]); z = Math.max(z, Math.abs(pt.off[2]) + h[2]);
  }
  return { x: x * e.scale, y: y * e.scale, z: z * e.scale };
}
// Where to step out: the left side, the right, behind, in front, then the roof: the first spot
// with nothing in the way from the seat, room for you there, and not inside the ground.
function exitSpot(e) {
  const b = e.body, p = b.position, ext = extentOf(e);
  // the car's own directions, kept level (it may be on its side)
  b.quaternion.vmult(F, _f);
  const fwd = new THREE.Vector3(_f.x, 0, _f.z);
  if (fwd.lengthSq() < 0.01) fwd.set(1, 0, 0);
  fwd.normalize();
  const side = new THREE.Vector3(-fwd.z, 0, fwd.x);
  const seat = new THREE.Vector3(p.x, p.y + 0.6, p.z);
  const spots = [[-(ext.z + 1.2), 0], [ext.z + 1.2, 0], [0, -(ext.x + 1.2)], [0, ext.x + 1.2]]
    .map(([s, f]) => new THREE.Vector3(p.x + side.x * s + fwd.x * f, p.y + 1.2, p.z + side.z * s + fwd.z * f));
  const roof = new THREE.Vector3(p.x, p.y + ext.y + 1.0, p.z);
  spots.push(roof);
  const mask = GROUP.STATIC | GROUP.DYN;
  const g = b.collisionFilterGroup;
  b.collisionFilterGroup = 0; // (the car itself doesn't count)
  let out = roof;
  for (const q of spots) {
    // (looking a little past the spot: room for all of you, not just your middle)
    const away = q.clone().sub(seat).setY(0);
    const past = away.lengthSq() > 0.01 ? q.clone().addScaledVector(away.normalize(), 0.45) : q;
    if (raycast(seat, past, mask)) continue;                                                 // a wall, a tree, another car...
    if (raycast(q.clone().setY(q.y - 0.5), q.clone().setY(q.y + 0.8), mask)) continue;        // no room to stand
    if (G.solidAt && (G.solidAt(q.x, q.y, q.z) || G.solidAt(q.x, q.y - 0.5, q.z))) continue; // inside the ground
    out = q;
    break;
  }
  b.collisionFilterGroup = g;
  return out;
}

// every frame: read the controls, check the ground, keep you in the seat, engine sound
export function updateVehicle(dt, pin) {
  if (!car) return;
  if (car.dead || !G.ents.has(car)) { toast('Your ride got wrecked!'); exitVehicle(); return; }
  const b = car.body;
  drive.throttle = (pin.f ? 1 : 0) - (pin.b ? 1 : 0);
  drive.steer = (pin.l ? 1 : 0) - (pin.r ? 1 : 0);
  drive.brake = !!pin.jumpHeld;
  b.quaternion.vmult(U, _u);
  const p = b.position;
  // (make sure the ground under the car has its physics: the suspension looks for it)
  if (G.ensureGround) G.ensureGround(p.x - 6, p.z - 6, p.x + 6, p.z + 6);
  // on its roof (or side) and nearly stopped: jump flips it back
  if (_u.y < 0.35 && b.velocity.length() < 3) {
    drive.flipT += dt;
    if (pin.jump || drive.flipT > 2.5) {
      const yaw = Math.atan2(-2 * (b.quaternion.x * b.quaternion.z - b.quaternion.w * b.quaternion.y), 1 - 2 * (b.quaternion.y ** 2 + b.quaternion.z ** 2));
      b.quaternion.setFromEuler(0, yaw, 0);
      b.position.y += 1.2; b.velocity.set(0, 2, 0); b.angularVelocity.setZero();
      drive.flipT = 0;
    }
  } else drive.flipT = 0;
  // you ride along (other things reading your position see the car)
  const pb = G.player.body;
  pb.position.set(p.x, p.y + 0.9, p.z);
  pb.velocity.copy(b.velocity);
  b.wakeUp();
  sfx.engine(true, Math.abs(b.velocity.dot(b.quaternion.vmult(F, _f))) + (drive.throttle ? 4 : 0));
}

// every physics step: suspension (a spring per wheel, like the player's legs: the car rides on
// them, so it never snags on the edges of the ground's blocks), engine, brakes, grip, steering
const _ray = new CANNON.RaycastResult(), _a = new CANNON.Vec3(), _b = new CANNON.Vec3(), _lp = new CANNON.Vec3(), _wp = new CANNON.Vec3(), _rel = new CANNON.Vec3(), _vw = new CANNON.Vec3();
function wheelsOf(e) {
  // (worked out again when its size changes: Grow / Shrink Ray)
  if (!e.wheels || e.wheelScale !== e.scale) {
    e.wheelScale = e.scale;
    e.wheels = (e.def.parts || []).filter((p) => p.t === 'cyl').map((p) => ({ x: p.off[0] * e.scale, y: p.off[1] * e.scale, z: p.off[2] * e.scale, r: p.r * e.scale }));
  }
  return e.wheels;
}
function suspension(b, m) {
  let n = 0;
  for (const wh of wheelsOf(car)) {
    _lp.set(wh.x, wh.y, wh.z);
    b.quaternion.vmult(_lp, _rel);
    _wp.set(b.position.x + _rel.x, b.position.y + _rel.y, b.position.z + _rel.z);
    const len = wh.r + 0.6;
    _a.copy(_wp); _b.set(_wp.x - _u.x * len, _wp.y - _u.y * len, _wp.z - _u.z * len);
    _ray.reset();
    G.world.raycastClosest(_a, _b, { collisionFilterMask: GROUP.STATIC, skipBackfaces: true }, _ray);
    if (!_ray.hasHit) continue;
    const comp = wh.r + 0.2 - _ray.distance;
    if (comp <= -0.15) continue;
    n++;
    if (comp <= 0) continue;
    // how fast this wheel point moves along "up" (to damp the spring)
    b.angularVelocity.cross(_rel, _vw); _vw.vadd(b.velocity, _vw);
    const vu = _vw.x * _u.x + _vw.y * _u.y + _vw.z * _u.z;
    const Fs = Math.max(0, m * (42 * comp) - m * 5.5 * vu);
    _F.set(_u.x * Fs, _u.y * Fs, _u.z * Fs);
    b.applyForce(_F, _rel);
  }
  return n;
}
function carForce() {
  if (!car || car.dead) return;
  const b = car.body, s = SPECS[car.def.id] || SPECS.car, m = b.mass;
  b.quaternion.vmult(F, _f); b.quaternion.vmult(U, _u);
  const v = b.velocity, w = b.angularVelocity;
  drive.grounded = _u.y > 0.35 && suspension(b, m) > 0;
  if (!drive.grounded) {
    // in the air: a little help to land on the wheels
    w.x *= 0.995; w.z *= 0.995;
    return;
  }
  const vf = v.dot(_f), vu = v.dot(_u);
  let acc;
  if (drive.throttle > 0) acc = vf < s.top ? s.pull * (1 - Math.max(0, vf) / (s.top * 1.15)) + 3 : 0;
  else if (drive.throttle < 0) acc = vf > 0.6 ? -28 : (vf > -s.reverse ? -s.pull * 0.6 : 0);
  else acc = -vf * 0.7; // rolling to a stop
  if (drive.brake) acc -= Math.sign(vf) * Math.min(Math.abs(vf) * 3, 10);
  // grip: kills sliding sideways (much less with the handbrake: drift!)
  const grip = drive.brake ? 1.1 : s.grip;
  const sx = v.x - _f.x * vf - _u.x * vu, sy = v.y - _f.y * vf - _u.y * vu, sz = v.z - _f.z * vf - _u.z * vu;
  _F.set(_f.x * acc * m - sx * grip * m, _f.y * acc * m - sy * grip * m, _f.z * acc * m - sz * grip * m);
  b.applyForce(_F);
  // steering: the turn rate grows with speed (and is reversed when backing up)
  const turn = drive.steer * clamp(vf / 6, -1, 1) * s.turn * (drive.brake ? 1.35 : 1);
  const wu = w.x * _u.x + w.y * _u.y + w.z * _u.z;
  const k = Math.min(1, 9 * (G.world.dt || 1 / 60));
  const dw = (turn - wu) * k;
  w.x += _u.x * dw; w.y += _u.y * dw; w.z += _u.z * dw;
  // and it doesn't roll over too easily
  const rx = w.x - _u.x * wu, ry = w.y - _u.y * wu, rz = w.z - _u.z * wu;
  w.x -= rx * 0.08; w.y -= ry * 0.08; w.z -= rz * 0.08;
}
G.extraForces.push(carForce);

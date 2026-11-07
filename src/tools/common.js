// Helpers shared by all tools.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, raycast, clamp, tv } from '../core.js';
import { damage, detonate } from '../items.js';
import * as FX from '../fx.js';

export const AIM_MASK = GROUP.DYN | GROUP.STATIC;

export function aimHit(range = 150) {
  const s = G.aim.start || G.aim.origin;
  return raycast(s, s.clone().addScaledVector(G.aim.dir, range), AIM_MASK);
}
export function aimPoint(range = 150, fallback = 8) {
  const h = aimHit(range);
  if (h) return h;
  const s = G.aim.start || G.aim.origin;
  return { point: s.clone().addScaledVector(G.aim.dir, fallback), normal: new THREE.Vector3(0, 1, 0), body: null, dist: fallback, miss: true };
}

export function entOf(body) { return body && body.ent; }
export function dummyOf(body) {
  const e = body && body.ent;
  return e && (e.kind === 'dummybody' || e.kind === 'ragpart') ? e.dummy : null;
}

export function spreadDir(dir, s) {
  return dir.clone().add(new THREE.Vector3((Math.random() - 0.5) * s * 2, (Math.random() - 0.5) * s * 2, (Math.random() - 0.5) * s * 2)).normalize();
}

// Bullet-style hit: impulse + damage + effects. imp = velocity kick for a light object.
export function bulletHit(hit, dir, dmg, imp, color = 0xffe066) {
  const b = hit.body;
  const e = b.ent;
  FX.sparks(hit.point, hit.normal, color, 6, 5);
  if (!e) { FX.debris(hit.point, 0x8a7a5a, 3, 0.08, 3); return; }
  const d = dummyOf(b);
  if (d) {
    // headshots hurt more
    const head = b.ent && b.ent.partName === 'head';
    const hp = dmg * 0.6 * (head ? 2 : 1);
    if (d.state === 'standing') d.hurt(hp, dir, dir.clone().multiplyScalar(imp * 1.2));
    else {
      const J = Math.min(b.mass, 15) * imp;
      b.applyImpulse(new CANNON.Vec3(dir.x * J, dir.y * J, dir.z * J), new CANNON.Vec3(hit.point.x - b.position.x, hit.point.y - b.position.y, hit.point.z - b.position.z));
      b.wakeUp();
      d.hurt(hp, dir);
    }
    FX.debris(hit.point, 0xff4040, 2, 0.06, 3);
    return;
  }
  if (b.type === CANNON.Body.DYNAMIC) {
    const J = Math.min(b.mass, 15) * imp;
    b.applyImpulse(new CANNON.Vec3(dir.x * J, dir.y * J, dir.z * J), new CANNON.Vec3(hit.point.x - b.position.x, hit.point.y - b.position.y, hit.point.z - b.position.z));
    b.wakeUp();
  }
  if (e.def && e.def.explosive) { if (e.def.explosive.hp <= dmg || (e.hp -= dmg) <= 0) detonate(e, 0.03); return; }
  damage(e, dmg, dir);
}

// generic projectile; returns the object so callers can tweak it
export function projectile(o) {
  const p = Object.assign({ t: 0, life: 5, gravity: 0, collide: true }, o);
  if (p.mesh) { G.scene.add(p.mesh); p.mesh.position.copy(p.pos); }
  G.projectiles.push(p);
  return p;
}

const _prev = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
export function updateProjectiles(dt) {
  for (let i = G.projectiles.length - 1; i >= 0; i--) {
    const p = G.projectiles[i];
    p.t += dt;
    _prev.copy(p.pos);
    p.vel.y -= p.gravity * dt;
    if (p.steer) p.steer(p, dt);
    p.pos.addScaledVector(p.vel, dt);
    if (p.mesh) {
      p.mesh.position.copy(p.pos);
      if (p.vel.lengthSq() > 0.01) p.mesh.quaternion.setFromUnitVectors(_up, p.vel.clone().normalize());
    }
    if (p.trail) p.trail(p.pos.clone(), p);
    let done = false;
    if (p.collide && p.onHit) {
      const h = raycast(_prev, p.pos, AIM_MASK);
      if (h) { p.onHit(h, p); done = true; }
      else if (p.water !== false && p.pos.y < G.waterAt(p.pos.x, p.pos.z)) { p.onHit({ point: p.pos.clone().setY(G.waterAt(p.pos.x, p.pos.z)), normal: new THREE.Vector3(0, 1, 0), body: null, water: true }, p); done = true; }
    }
    if (!done && p.t >= p.life) { if (p.end) p.end(p.pos.clone(), p); done = true; }
    if (done) { if (p.mesh) G.scene.remove(p.mesh); G.projectiles.splice(i, 1); }
  }
}

export function mkMesh(geo, color, glow = false) {
  const m = new THREE.Mesh(geo, glow ? new THREE.MeshBasicMaterial({ color }) : new THREE.MeshStandardMaterial({ color, flatShading: true }));
  m.castShadow = !glow;
  return m;
}

// all dynamic bodies within radius r of pos (optionally inside a cone along dir)
export function bodiesNear(pos, r, dir = null, cosMin = -1) {
  const out = [];
  const t = new THREE.Vector3();
  for (const b of G.world.bodies) {
    if (b.type !== CANNON.Body.DYNAMIC || b.isPlayer) continue;
    t.set(b.position.x - pos.x, b.position.y - pos.y, b.position.z - pos.z);
    const d = t.length();
    if (d > r) continue;
    if (dir && d > 0.3 && t.dot(dir) / d < cosMin) continue;
    out.push({ b, d, dir: d > 0.001 ? t.clone().divideScalar(d) : new THREE.Vector3(0, 1, 0) });
  }
  return out;
}
export function dummiesNear(pos, r) {
  const out = [];
  for (const d of G.dummies) if (d.center().distanceTo(pos) < r) out.push(d);
  return out;
}

export function massFactor(m) { return clamp(Math.pow(20 / m, 0.3), 0.2, 1.4); }
export { tv };

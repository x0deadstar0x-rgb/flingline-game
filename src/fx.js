// Visual effects: pooled particles, beams, shockwaves, fireballs, flash light.
import * as THREE from 'three';
import { G, rand } from './core.js';

const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const icoGeo = new THREE.IcosahedronGeometry(0.5, 0);
const beamGeo = new THREE.CylinderGeometry(1, 1, 1, 5, 1, true);
beamGeo.translate(0, 0.5, 0);
const ringGeo = new THREE.TorusGeometry(1, 0.08, 4, 24);
ringGeo.rotateX(Math.PI / 2);
const ballGeo = new THREE.IcosahedronGeometry(1, 1);

let litPool = [], glowPool = [], beams = [], rings = [], balls = [];
const live = [];
let flash = null;
let flashI = 0;

export function initFx(scene) {
  for (let i = 0; i < 350; i++) {
    const m = new THREE.Mesh(i % 2 ? boxGeo : icoGeo, new THREE.MeshStandardMaterial({ flatShading: true, roughness: 0.9, transparent: true }));
    m.visible = false; m.castShadow = false; scene.add(m); litPool.push(m);
  }
  for (let i = 0; i < 350; i++) {
    const m = new THREE.Mesh(i % 2 ? icoGeo : boxGeo, new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false }));
    m.visible = false; scene.add(m); glowPool.push(m);
  }
  for (let i = 0; i < 40; i++) {
    const m = new THREE.Mesh(beamGeo, new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    m.visible = false; m.frustumCulled = false; scene.add(m); beams.push({ m, life: 0, max: 0, w: 0 });
  }
  for (let i = 0; i < 12; i++) {
    const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false }));
    m.visible = false; scene.add(m); rings.push({ m, life: 0, max: 0, size: 0 });
  }
  for (let i = 0; i < 12; i++) {
    const m = new THREE.Mesh(ballGeo, new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: 0xffa31a }));
    m.visible = false; scene.add(m); balls.push({ m, life: 0, max: 0, size: 0 });
  }
  flash = new THREE.PointLight(0xffaa55, 0, 40, 1.5);
  scene.add(flash);
}

let litIdx = 0, glowIdx = 0;
function take(pool, isGlow) {
  // round-robin: oldest particle gets recycled when pool is full
  const i = isGlow ? (glowIdx = (glowIdx + 1) % pool.length) : (litIdx = (litIdx + 1) % pool.length);
  const m = pool[i];
  if (m.userData.p) { const j = live.indexOf(m.userData.p); if (j >= 0) live.splice(j, 1); }
  return m;
}

// Spawn a single particle.
export function particle(o) {
  const glow = !!o.glow;
  const m = take(glow ? glowPool : litPool, glow);
  m.visible = true;
  m.position.copy(o.pos);
  m.material.color.set(o.color ?? 0xffffff);
  m.material.opacity = o.opacity ?? 1;
  if (glow) m.material.blending = o.add ? THREE.AdditiveBlending : THREE.NormalBlending;
  m.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
  const p = {
    m, vel: o.vel ? o.vel.clone() : new THREE.Vector3(), life: 0, max: o.life ?? 1,
    size: o.size ?? 0.2, grow: o.grow ?? 0, grav: o.gravity ?? 9.8, drag: o.drag ?? 0.5,
    fade: o.fade ?? true, spin: o.spin ?? 5, shrink: o.shrink ?? true, floor: o.floor ?? true,
    op: o.opacity ?? 1,
  };
  m.scale.setScalar(p.size);
  m.userData.p = p;
  live.push(p);
  return p;
}

export function updateFx(dt) {
  for (let i = live.length - 1; i >= 0; i--) {
    const p = live[i];
    p.life += dt;
    const k = p.life / p.max;
    if (k >= 1) { p.m.visible = false; p.m.userData.p = null; live.splice(i, 1); continue; }
    p.vel.y -= p.grav * dt;
    p.vel.multiplyScalar(Math.max(0, 1 - p.drag * dt));
    p.m.position.addScaledVector(p.vel, dt);
    const fy = p.floor && G.groundAt ? G.groundAt(p.m.position.x, p.m.position.z) + 0.05 : -1e9;
    if (p.m.position.y < fy) {
      p.m.position.y = fy; p.vel.y *= -0.3; p.vel.x *= 0.6; p.vel.z *= 0.6;
    }
    p.m.rotation.x += p.spin * dt; p.m.rotation.y += p.spin * dt * 0.7;
    let s = p.size * (1 + p.grow * k);
    if (p.shrink) s *= (1 - k * k);
    p.m.scale.setScalar(Math.max(0.001, s));
    if (p.fade) p.m.material.opacity = p.op * (1 - k);
  }
  for (const b of beams) {
    if (b.life <= 0) continue;
    b.life -= dt;
    if (b.life <= 0) { b.m.visible = false; continue; }
    const k = b.life / b.max;
    b.m.material.opacity = k;
    b.m.scale.x = b.m.scale.z = b.w * (0.4 + 0.6 * k);
  }
  for (const r of rings) {
    if (r.life <= 0) continue;
    r.life -= dt;
    if (r.life <= 0) { r.m.visible = false; continue; }
    const k = 1 - r.life / r.max;
    r.m.scale.setScalar(0.5 + r.size * Math.sqrt(k));
    r.m.material.opacity = 1 - k;
  }
  for (const b of balls) {
    if (b.life <= 0) continue;
    b.life -= dt;
    if (b.life <= 0) { b.m.visible = false; continue; }
    const k = 1 - b.life / b.max;
    b.m.scale.setScalar(b.size * (0.3 + 0.9 * Math.sqrt(k)));
    b.m.material.opacity = 1 - k;
    b.m.material.color.setHSL(0.1 - k * 0.1, 1, 0.6 - k * 0.4);
  }
  if (flashI > 0) { flashI = Math.max(0, flashI - dt * 60); flash.intensity = flashI; }
}

const _up = new THREE.Vector3(0, 1, 0);
const _d = new THREE.Vector3();
export function beam(a, b, color = 0xfff27a, width = 0.04, life = 0.08) {
  const bm = beams.find((x) => x.life <= 0) || beams[0];
  _d.subVectors(b, a);
  const len = _d.length();
  if (len < 0.01) return;
  bm.m.position.copy(a);
  bm.m.quaternion.setFromUnitVectors(_up, _d.normalize());
  bm.m.scale.set(width, len, width);
  bm.m.material.color.set(color);
  bm.m.material.opacity = 1;
  bm.m.visible = true;
  bm.life = bm.max = life; bm.w = width;
}

// Jagged lightning beam made of several straight segments.
export function lightning(a, b, color = 0xa8d8ff) {
  const n = 7;
  let prev = a.clone();
  for (let i = 1; i <= n; i++) {
    const p = a.clone().lerp(b, i / n);
    if (i < n) p.add(new THREE.Vector3(rand(-0.6, 0.6), rand(-0.6, 0.6), rand(-0.6, 0.6)));
    beam(prev, p, color, 0.07, 0.18);
    prev = p;
  }
}

export function ring(pos, size, color = 0xffffff, life = 0.5) {
  const r = rings.find((x) => x.life <= 0) || rings[0];
  r.m.position.copy(pos);
  r.m.material.color.set(color);
  r.m.visible = true;
  r.life = r.max = life; r.size = size;
}

export function fireball(pos, size, life = 0.6) {
  const b = balls.find((x) => x.life <= 0) || balls[0];
  b.m.position.copy(pos);
  b.m.visible = true;
  b.life = b.max = life; b.size = size;
}

export function flashAt(pos, intensity = 60, color = 0xffaa55) {
  flash.position.copy(pos);
  flash.color.set(color);
  flashI = Math.max(flashI, intensity);
  flash.intensity = flashI;
}

const tmp = new THREE.Vector3();
function rdir(s = 1) { return tmp.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize().multiplyScalar(s).clone(); }

export function explosionFx(pos, scale = 1) {
  fireball(pos, 3.2 * scale, 0.55 + 0.15 * scale);
  ring(pos.clone().setY(Math.max(pos.y, 0.2)), 9 * scale, 0xfff1c4, 0.45);
  flashAt(pos, 70 * scale);
  const n = Math.min(60, 26 * scale) | 0;
  for (let i = 0; i < n; i++) {
    particle({ pos, vel: rdir(rand(6, 18) * scale).add(new THREE.Vector3(0, 4, 0)), color: [0xffd54a, 0xff8a1c, 0xff4d1c][i % 3], size: rand(0.2, 0.5) * scale, life: rand(0.3, 0.8), glow: true, add: true, gravity: 4, drag: 2.5 });
  }
  for (let i = 0; i < n * 0.7; i++) {
    particle({ pos: pos.clone().add(rdir(1.2 * scale)), vel: rdir(rand(1, 5) * scale).add(new THREE.Vector3(0, rand(2, 5), 0)), color: [0x444444, 0x666666, 0x2a2a2a][i % 3], size: rand(0.6, 1.3) * scale, life: rand(1.2, 2.6), gravity: -1.2, drag: 1.5, grow: 1.5, shrink: false, opacity: 0.8, spin: 1 });
  }
  for (let i = 0; i < n * 0.4; i++) {
    particle({ pos, vel: rdir(rand(8, 20)).add(new THREE.Vector3(0, 6, 0)), color: 0x2b2118, size: rand(0.1, 0.25), life: rand(1, 2), gravity: 20, drag: 0.3 });
  }
}

export function sparks(pos, normal, color = 0xffe066, n = 8, speed = 6) {
  for (let i = 0; i < n; i++) {
    const v = rdir(speed).add(normal.clone().multiplyScalar(speed * 0.8));
    particle({ pos, vel: v, color, size: rand(0.05, 0.12), life: rand(0.2, 0.5), glow: true, add: true, gravity: 12, drag: 1 });
  }
}

export function debris(pos, color, n = 10, size = 0.2, speed = 5) {
  for (let i = 0; i < n; i++) {
    particle({ pos: pos.clone().add(rdir(0.4)), vel: rdir(rand(1, speed)).add(new THREE.Vector3(0, 2, 0)), color, size: size * rand(0.5, 1.3), life: rand(0.8, 1.6), gravity: 18, drag: 0.4 });
  }
}

export function smoke(pos, n = 4, color = 0x777777, size = 0.6) {
  for (let i = 0; i < n; i++) {
    particle({ pos: pos.clone().add(rdir(0.3)), vel: rdir(1).add(new THREE.Vector3(0, 1.5, 0)), color, size: size * rand(0.6, 1.2), life: rand(0.8, 1.6), gravity: -0.5, drag: 1, grow: 1.5, shrink: false, opacity: 0.6, spin: 1, floor: false });
  }
}

export function splash(pos, n = 14, scale = 1) {
  for (let i = 0; i < n; i++) {
    particle({ pos: pos.clone().setY(G.waterY + 0.1), vel: new THREE.Vector3(rand(-3, 3) * scale, rand(4, 9) * scale, rand(-3, 3) * scale), color: [0xbfe9ff, 0xffffff, 0x7fd0f5][i % 3], size: rand(0.12, 0.3) * scale, life: rand(0.5, 1), gravity: 18, drag: 0.3, floor: false });
  }
  ring(pos.clone().setY(G.waterY + 0.05), 2.5 * scale, 0xdff6ff, 0.6);
}

export function confetti(pos, n = 50, speed = 12) {
  const cs = [0xff3b6b, 0xffd400, 0x3bd1ff, 0x7cff5a, 0xb36bff, 0xffffff, 0xff8a1c];
  const base = cs[(Math.random() * cs.length) | 0];
  for (let i = 0; i < n; i++) {
    particle({ pos, vel: rdir(rand(speed * 0.6, speed)), color: i % 3 ? base : cs[i % cs.length], size: rand(0.1, 0.22), life: rand(1.0, 1.8), glow: true, add: true, gravity: 3, drag: 1.4 });
  }
  flashAt(pos, 40, base);
}

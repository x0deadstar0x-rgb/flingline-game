// The nuke. Not just a bigger explosion:
//  - a blinding flash (the screen and the whole sky light up), then a fireball that swells and rises
//  - a shockwave you can watch race out over the ground; it throws everything it passes, so far-away
//    things get hit a moment after the flash
//  - a mushroom cloud: a rolling cap on a column of smoke and dust, glowing orange at first and
//    cooling to grey, hanging in the sky for half a minute
//  - a deep rumble that arrives late (sound is slower than light)
//  - a wide crater with scorched ground around it, fires, and ash drifting down afterwards
// s = size: 1 for the Nuke tool, ~0.45 for a Nuke Barrel.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, rand, clamp, tv, popup, later } from './core.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { breakEnt, damage, ignite, detonate, unfreeze, addFirePatch } from './items.js';
import { projectile } from './tools/common.js';

const blasts = [];

// shared shapes
const puffGeo = new THREE.IcosahedronGeometry(1, 1);
const ballGeo = new THREE.IcosahedronGeometry(1, 2);
const domeGeo = new THREE.SphereGeometry(1, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2);

// smoke puffs that glow from inside: each puff has its own "heat" (0..1) that scales the glow
function heatShader(sh) {
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nattribute float aHeat;\nvarying float vHeat;')
    .replace('#include <begin_vertex>', '#include <begin_vertex>\nvHeat = aHeat;');
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', '#include <common>\nvarying float vHeat;')
    .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance *= vHeat;');
}
function puffMaterial(color, emissive) {
  const m = new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 1, metalness: 0, emissive, emissiveIntensity: 0, transparent: true, opacity: 1 });
  m.onBeforeCompile = heatShader;
  return m;
}
function puffMesh(n, color, emissive) {
  const geo = puffGeo.clone(); // its own copy, so the heat attribute belongs to this blast
  const heat = new THREE.InstancedBufferAttribute(new Float32Array(n), 1);
  geo.setAttribute('aHeat', heat);
  const m = new THREE.InstancedMesh(geo, puffMaterial(color, emissive), n);
  m.userData.heat = heat;
  for (let i = 0; i < n; i++) m.setColorAt(i, new THREE.Color(color));
  m.frustumCulled = false;
  m.castShadow = false; m.receiveShadow = false;
  return m;
}

// The program for the glowing puffs is built when the game starts (a tiny hidden copy), so the
// first nuke doesn't stall the game while the graphics card compiles it.
export function initNuke(scene) {
  const warm = puffMesh(1, 0x777777, 0xff6a1a);
  warm.setMatrixAt(0, new THREE.Matrix4().makeScale(0.001, 0.001, 0.001).setPosition(0, -500, 0));
  scene.add(warm);
}

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _c = new THREE.Color(), _e = new THREE.Euler();
function setPuff(mesh, i, x, y, z, r, spin) {
  _e.set(spin, spin * 1.3, spin * 0.7);
  _q.setFromEuler(_e);
  _m.compose(_p.set(x, y, z), _q, _s.set(r, r * 0.92, r));
  mesh.setMatrixAt(i, _m);
}
const ground = (x, z, fb) => { const g = G.groundAt ? G.groundAt(x, z) : -1e9; return g > -1e8 ? g : fb; };

// ------------------------------------------------------------- the bomb you call in
function bombMesh() {
  const g = new THREE.Group();
  const yellow = new THREE.MeshStandardMaterial({ color: 0xe2c21d, flatShading: true, roughness: 0.55, metalness: 0.25 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x24272c, flatShading: true, roughness: 0.5, metalness: 0.4 });
  // the mesh flies "up" along its velocity, so +y is the nose (pointing down as it falls)
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.6, 12), yellow); g.add(body);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.8, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), yellow); nose.position.y = 1.3; g.add(nose);
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.32, 1.1, 12), dark); tail.position.y = -1.85; g.add(tail);
  for (const y of [0.55, -0.55]) { const band = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.82, 0.22, 12), dark); band.position.y = y; g.add(band); }
  for (let i = 0; i < 4; i++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.0, 1.0), dark);
    const a = i * Math.PI / 2;
    fin.position.set(Math.sin(a) * 0.7, -2.1, Math.cos(a) * 0.7); fin.rotation.y = a;
    g.add(fin);
  }
  g.traverse((m) => { if (m.isMesh) m.castShadow = true; });
  return g;
}

// call in a nuke on a spot: siren, a falling bomb (whistling), then the blast
export function dropNuke(target) {
  const drop = 120;
  const g0 = ground(target.x, target.z, target.y - 1);
  popup('☢ NUKE INCOMING ☢', target.clone().add(new THREE.Vector3(0, 5, 0)), '#ffe14a', 30);
  sfx.siren(3.2);
  const v0 = 30, a = 24;
  const tFall = (-v0 + Math.sqrt(v0 * v0 + 2 * a * drop)) / a;
  later(Math.max(0, tFall - 2.4), () => sfx.whistle(2.4));
  projectile({
    pos: target.clone().add(new THREE.Vector3(0, drop, 0)), vel: new THREE.Vector3(0, -v0, 0), gravity: a,
    life: tFall + 0.05, mesh: bombMesh(),
    trail: (pp, p) => { if (Math.random() < 0.5) FX.particle({ pos: pp.clone().add(new THREE.Vector3(0, 2.4, 0)), vel: new THREE.Vector3(rand(-0.5, 0.5), 2, rand(-0.5, 0.5)), color: 0xdddddd, size: 0.5, life: 0.8, gravity: -1, drag: 1, grow: 1.5, shrink: false, opacity: 0.5, floor: false }); },
    onHit: (h) => nukeBlast(h.point.clone(), 1),
    end: (p) => nukeBlast(p.clone().setY(Math.max(p.y, g0)), 1),
  });
}

// ------------------------------------------------------------- the blast
export function nukeBlast(pos, s = 1, opts = {}) {
  const g0 = ground(pos.x, pos.z, pos.y - 0.5);
  const height = Math.max(0, pos.y - g0); // > ~10 m: an air burst (smaller crater)
  const Rmax = 190 * s;
  const b = {
    pos: pos.clone(), g0, s, t: 0, Rmax, height,
    vi: 0, victims: [], dustT: 0, ashT: 0, firesLit: false, done: false,
    distAtStart: G.player ? G.player.pos().distanceTo(pos) : 999,
  };
  // who and what the shockwave hits, nearest first
  for (const body of G.world.bodies) {
    if (body.isPlayer) continue;
    const e = body.ent;
    if (e && (e.kind === 'ragpart' || e.kind === 'dummybody')) continue; // people are handled as a whole below
    if (body.type !== CANNON.Body.DYNAMIC && !(e && (e.frozen || e.anchored))) continue;
    const d = Math.hypot(body.position.x - pos.x, body.position.z - pos.z) + Math.abs(body.position.y - pos.y) * 0.4;
    if (d < Rmax) b.victims.push({ d, body, e });
  }
  for (const dm of G.dummies) {
    if (dm.dead) continue;
    const c = dm.center();
    const d = Math.hypot(c.x - pos.x, c.z - pos.z) + Math.abs(c.y - pos.y) * 0.4;
    if (d < Rmax) b.victims.push({ d, dummy: dm });
  }
  if (G.player) b.victims.push({ d: Math.max(0, b.distAtStart - 1), player: true });
  b.victims.sort((x, y) => x.d - y.d);

  // the crater: wide and fairly shallow, with scorched ground all around
  if (!opts.noCrater && G.crater) {
    const R0 = opts.craterRadius ?? 15 * s;
    const R = height < R0 * 0.6 ? R0 : R0 * Math.max(0, 1 - height / (60 * s));
    if (R > 1.5) G.crater(new THREE.Vector3(pos.x, g0 + 0.6, pos.z), 0, { craterRadius: R, rim: true, flat: 0.5, scorch: 46 * s * clamp(1 - height / (140 * s), 0.25, 1), maxCubes: Math.round(170 * Math.max(s, 0.5)), realBlocks: Math.round(8 * s) });
  }

  // the fireball and its glow
  b.ball = new THREE.Mesh(ballGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 }));
  b.glow = new THREE.Mesh(ballGeo, new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false }));
  // the condensation dome that flashes out with the shock
  b.dome = new THREE.Mesh(domeGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4, depthWrite: false }));
  b.dome.position.set(pos.x, g0, pos.z);
  // mushroom cloud: rolling cap ring + top + stem; dust skirt; shock ring (all instanced)
  const CAP = 48, TOP = 16, STEM = 36;
  b.cloud = puffMesh(CAP + TOP + STEM, 0x6e6660, 0xff7a24);
  b.skirt = puffMesh(36, 0x9c8a70, 0x000000);
  b.shock = puffMesh(64, 0xc8b89c, 0x000000);
  b.parts = [];
  for (let i = 0; i < CAP; i++) b.parts.push({ k: 'cap', th: (i / CAP) * Math.PI * 2 + rand(-0.08, 0.08), ph: rand(0, Math.PI * 2), sz: rand(0.72, 1.02), col: rand(0, 1) });
  for (let i = 0; i < TOP; i++) b.parts.push({ k: 'top', th: rand(0, Math.PI * 2), rr: Math.sqrt(Math.random()) * 0.55, hy: rand(0.55, 1.0), sz: rand(0.7, 1.0), col: rand(0, 1) });
  for (let i = 0; i < STEM; i++) b.parts.push({ k: 'stem', f: (i + rand(0, 1)) / STEM, th: rand(0, Math.PI * 2), rr: rand(0, 0.45), sz: rand(0.8, 1.1), col: rand(0, 1) });
  b.skirtParts = Array.from({ length: 36 }, (_, i) => ({ th: (i / 36) * Math.PI * 2 + rand(-0.1, 0.1), rr: rand(0.72, 1.05), sz: rand(0.6, 1.1), spin: rand(0, 6) }));
  b.shockParts = Array.from({ length: 64 }, (_, i) => ({ th: (i / 64) * Math.PI * 2 + rand(-0.04, 0.04), sz: rand(0.8, 1.25), spin: rand(0, 6) }));
  for (const m of [b.ball, b.glow, b.dome, b.cloud, b.skirt, b.shock]) G.scene.add(m);

  // blinding flash: the closer you are, the whiter the screen
  const near = clamp(1.2 - b.distAtStart / (480 * s), 0.12, 1);
  b.near = near;
  const wf = document.getElementById('whiteflash');
  if (wf) {
    wf.style.transition = 'none'; wf.style.opacity = String(0.97 * near);
    requestAnimationFrame(() => requestAnimationFrame(() => { wf.style.transition = `opacity ${(1.2 + 1.8 * near).toFixed(1)}s ease-out`; wf.style.opacity = '0'; }));
    setTimeout(() => { wf.style.transition = ''; wf.style.opacity = ''; }, 3600);
  }
  // the bang arrives later than the flash (sound travels ~340 m/s)
  sfx.nuke(pos, b.distAtStart / 340, s);
  G.lastBoom.pos.copy(pos); G.lastBoom.time = G.time;
  // people nearby run for it
  G.dangers = (G.dangers || []).filter((d) => d.until > G.time);
  G.dangers.push({ pos: pos.clone(), r: Rmax * 0.5, until: G.time + 12 });
  G.stats.booms++;
  // big splash if it went off in water
  if (G.waterAt(pos.x, pos.z) > g0 + 0.3) FX.splash(pos, 60, 3 * s + 1);
  blasts.push(b);
  return b;
}
G.nukeBlast = nukeBlast;

function hitVictim(b, v, budget) {
  const { s, Rmax, pos } = b;
  const f = clamp(1 - v.d / Rmax, 0, 1);
  const fk = Math.pow(f, 1.5);
  const at = v.player ? G.player.pos() : v.dummy ? v.dummy.center() : tv(v.body.position);
  const dir = new THREE.Vector3(at.x - pos.x, 0, at.z - pos.z);
  if (dir.lengthSq() < 0.01) dir.set(rand(-1, 1), 0, rand(-1, 1));
  dir.normalize();
  dir.y = 0.35 + 0.5 * fk;
  dir.normalize();
  const dv = 72 * Math.sqrt(s) * fk + 2;
  if (v.player) {
    G.player.fling(dir.clone().multiplyScalar(dv * 0.75));
    G.shake = Math.max(G.shake, 0.6 + 2.6 * fk);
    return 0;
  }
  if (v.dummy) {
    const dm = v.dummy;
    if (dm.dead || !G.dummies.has(dm)) return 0;
    dm.hurt(300 * fk + 5, dir, dir.clone().multiplyScalar(dv));
    if (f > 0.55) dm.ignite();
    return 0;
  }
  const body = v.body, e = v.e;
  if (e && e.dead) return 0;
  if (e && e.frozen && f > 0.3) unfreeze(e);
  if (body.type !== CANNON.Body.DYNAMIC) return 0;
  const mf = clamp(Math.pow(25 / body.mass, 0.3), 0.15, 1.5);
  body.velocity.x += dir.x * dv * mf; body.velocity.y += dir.y * dv * mf; body.velocity.z += dir.z * dv * mf;
  body.angularVelocity.x += rand(-6, 6) * fk; body.angularVelocity.y += rand(-6, 6) * fk; body.angularVelocity.z += rand(-6, 6) * fk;
  body.wakeUp();
  if (!e) return 0;
  if (e.def && e.def.explosive) { if (fk > 0.12) detonate(e, rand(0.1, 0.7)); return 0; }
  if (f > 0.5 && Math.random() < 0.75) ignite(e, 12);
  const dmg = 420 * fk;
  if (dmg < 4) return 0;
  if (e.hp !== Infinity && e.hp - dmg <= 0) {
    if (budget <= 0) { damage(e, Math.min(dmg, e.hp - 1), dir, at); return 0; }
    breakEnt(e, dir, 2.2 * fk, at.clone().addScaledVector(dir, -0.4));
    return 1;
  }
  damage(e, dmg, dir, at);
  return 0;
}

// ------------------------------------------------------------- every frame
export function updateNukes(dt) {
  if (!blasts.length) return;
  let exposure = 0, sky = 0, flashBest = null;
  for (let bi = blasts.length - 1; bi >= 0; bi--) {
    const b = blasts[bi];
    b.t += dt;
    const { t, s, pos, g0, Rmax } = b;

    // --- shockwave front (fast at first, slowing down)
    const rw = Rmax * (1 - Math.exp(-t * 1.25));
    let budget = 8;
    while (b.vi < b.victims.length && b.victims[b.vi].d <= rw) budget -= hitVictim(b, b.victims[b.vi++], budget);
    if (rw < Rmax * 0.97 && t < 4) {
      b.dustT += dt * 70 * Math.max(0.5, s);
      while (b.dustT > 1) {
        b.dustT--;
        const a = rand(0, Math.PI * 2), x = pos.x + Math.cos(a) * rw, z = pos.z + Math.sin(a) * rw;
        FX.particle({ pos: _p.set(x, ground(x, z, g0) + rand(0.3, 1.5), z).clone(), vel: new THREE.Vector3(Math.cos(a) * rand(3, 8), rand(0.5, 2.5), Math.sin(a) * rand(3, 8)), color: [0xb7a68a, 0x9c8a70, 0xcfc4b0][(Math.random() * 3) | 0], size: rand(1.4, 3) * Math.max(0.6, s), life: rand(1.6, 2.8), gravity: -0.4, drag: 1.2, grow: 1.6, shrink: false, opacity: 0.55, floor: false, spin: 0.6 });
      }
    }
    // shock ring: puffs that hug the ground, racing out and fading
    const shockA = clamp(1 - t / 3, 0, 1);
    b.shock.visible = shockA > 0;
    if (b.shock.visible) {
      b.shock.material.opacity = 0.85 * shockA;
      b.shockParts.forEach((p, i) => {
        const x = pos.x + Math.cos(p.th) * rw, z = pos.z + Math.sin(p.th) * rw;
        setPuff(b.shock, i, x, ground(x, z, g0) + 1.2 * s, z, (2.6 + rw * 0.03) * p.sz * Math.max(0.6, s), p.spin + t);
      });
      b.shock.instanceMatrix.needsUpdate = true;
    }
    // condensation dome
    const domeA = clamp(1 - t / 1.1, 0, 1);
    b.dome.visible = domeA > 0;
    if (b.dome.visible) { const r = 60 * s * Math.sqrt(Math.min(1, t / 1.1)) + 1; b.dome.scale.set(r, r * 0.8, r); b.dome.material.opacity = 0.42 * domeA; }

    // --- mushroom cloud
    const H = 100 * s;
    const capY = g0 + b.height + H * (1 - Math.exp(-t / 3.4));
    const Rr = 25 * s * (0.2 + 0.8 * (1 - Math.exp(-t / 2.8))) * (1 + t * 0.006);
    const rt = 0.55 * Rr;
    const growIn = clamp(t / 1.4, 0.2, 1); // the cap puffs swell out of the fireball
    const hotAll = clamp(1 - t / 3.5, 0, 1); // early on the whole cloud is fire
    // fireball: swells fast, then rides up into the cap
    const rf = 16 * s * (1 - Math.exp(-t * 4.2)) * (1 + 0.06 * Math.sin(t * 23) * Math.exp(-t * 1.5));
    const fy = Math.max(g0 + b.height + rf * 0.75, capY - rt * 0.35);
    b.ball.position.set(pos.x, fy, pos.z); b.ball.scale.setScalar(Math.max(0.1, rf));
    b.glow.position.copy(b.ball.position); b.glow.scale.setScalar(Math.max(0.1, rf * 1.35));
    const ballA = t < 2.2 ? 1 : clamp(1 - (t - 2.2) / 3.5, 0, 1);
    b.ball.visible = ballA > 0; b.glow.visible = t < 3.2;
    b.ball.material.opacity = ballA;
    b.ball.material.color.setRGB(1, clamp(1 - t * 0.28, 0.32, 1), clamp(0.9 - t * 0.7, 0.08, 0.9));
    b.glow.material.opacity = 0.6 * clamp(1 - t / 3.2, 0, 1);
    // cloud puffs
    const cool = clamp(t / 26, 0, 1);
    const glowK = (t < 0.25 ? t / 0.25 : 1) * 3.2 * Math.exp(-t / 2.4) + 0.25 * Math.exp(-t / 9);
    b.cloud.material.emissiveIntensity = glowK;
    b.cloud.material.emissive.setRGB(1, clamp(0.55 - t * 0.04, 0.25, 0.55), 0.12);
    const fade = t < 20 ? 1 : clamp(1 - (t - 20) / 10, 0, 1);
    b.cloud.material.opacity = fade;
    const heat = b.cloud.userData.heat;
    b.parts.forEach((p, i) => {
      let x, y, z, r, h;
      if (p.k === 'cap') {
        // a vortex ring: rising in the middle, rolling out over the top and down the outside
        const ph = p.ph - t * 0.32;
        const out = Rr + rt * Math.cos(ph);
        x = pos.x + Math.cos(p.th) * out; z = pos.z + Math.sin(p.th) * out; y = capY + rt * 0.8 * Math.sin(ph);
        r = rt * p.sz * growIn; h = clamp(0.35 - Math.sin(ph) * 0.65 - Math.cos(ph) * 0.2, 0.05, 1);
      } else if (p.k === 'top') {
        x = pos.x + Math.cos(p.th + t * 0.05) * Rr * p.rr; z = pos.z + Math.sin(p.th + t * 0.05) * Rr * p.rr; y = capY + rt * p.hy;
        r = rt * p.sz * 0.95 * growIn; h = 0.35;
      } else {
        const top = capY - rt * 0.7;
        const yy = g0 + p.f * Math.max(0, top - g0);
        const Rs = 7 * s * (1.45 - 0.7 * p.f) * (0.6 + 0.4 * Math.min(1, t / 2));
        const a = p.th + t * 0.18;
        x = pos.x + Math.cos(a) * Rs * p.rr; z = pos.z + Math.sin(a) * Rs * p.rr; y = yy;
        r = Rs * p.sz; h = 0.15 + 0.85 * p.f * p.f;
      }
      setPuff(b.cloud, i, x, y, z, Math.max(0.05, r), p.ph || p.th);
      heat.array[i] = h + (1 - h) * hotAll;
      // cools from dark sooty brown to light grey
      _c.setRGB(0.36 + p.col * 0.1, 0.33 + p.col * 0.09, 0.31 + p.col * 0.08).lerp(_cGrey, cool * 0.75);
      b.cloud.setColorAt(i, _c);
    });
    heat.needsUpdate = true;
    b.cloud.instanceMatrix.needsUpdate = true;
    if (b.cloud.instanceColor) b.cloud.instanceColor.needsUpdate = true;
    // dust skirt rolling out round the base
    const rb = 62 * s * (1 - Math.exp(-t / 2.2));
    const skirtA = t < 8 ? 1 : clamp(1 - (t - 8) / 8, 0, 1);
    b.skirt.visible = skirtA > 0;
    if (b.skirt.visible) {
      b.skirt.material.opacity = 0.9 * skirtA;
      const grow = 0.35 + 0.65 * (1 - Math.exp(-t / 1.5));
      b.skirtParts.forEach((p, i) => {
        const x = pos.x + Math.cos(p.th) * rb * p.rr, z = pos.z + Math.sin(p.th) * rb * p.rr;
        const r = (6 + 5 * p.sz) * s * grow;
        setPuff(b.skirt, i, x, ground(x, z, g0) + r * 0.45, z, r, p.spin + t * 0.2);
      });
      b.skirt.instanceMatrix.needsUpdate = true;
    }

    // --- light, exposure, sky
    const lightI = (60000 * Math.exp(-t / 0.7) + 5000 * Math.exp(-t / 4)) * s;
    if (!flashBest || lightI > flashBest.i) flashBest = { i: lightI, p: b.ball.position, c: t < 0.4 ? 0xffffff : 0xffa050, d: 700 * s };
    exposure += b.near * (3.2 * Math.exp(-t / 0.45) + 0.5 * Math.exp(-t / 3));
    sky = Math.max(sky, b.near * (t < 0.15 ? 1 : 0.85 * Math.exp(-(t - 0.15) / 5)));
    // a long rumble you feel
    const arrive = b.distAtStart / 340;
    if (t > arrive && t < arrive + 7) G.shake = Math.max(G.shake, 0.45 * b.near * (1 - (t - arrive) / 7));

    // --- fires once the wave has passed, then ash drifting down
    if (!b.firesLit && t > 0.6) {
      b.firesLit = true;
      for (let i = 0; i < Math.round(9 * s + 2); i++) {
        const a = rand(0, Math.PI * 2), r = rand(16, 55) * s;
        const x = pos.x + Math.cos(a) * r, z = pos.z + Math.sin(a) * r;
        addFirePatch(new THREE.Vector3(x, ground(x, z, g0), z), rand(3.5, 6) * Math.max(0.7, s), rand(10, 22));
      }
    }
    if (G.player && t > 3 && t < 24 && G.player.pos().distanceTo(pos) < Rmax * 1.6) {
      b.ashT += dt * 40 * Math.max(0.5, s);
      const pp = G.player.pos();
      while (b.ashT > 1) {
        b.ashT--;
        FX.particle({ pos: new THREE.Vector3(pp.x + rand(-26, 26), pp.y + rand(8, 20), pp.z + rand(-26, 26)), vel: new THREE.Vector3(rand(-0.6, 0.6), rand(-1.6, -0.8), rand(-0.6, 0.6)), color: Math.random() < 0.6 ? 0xd9d2c8 : 0x55504a, size: rand(0.05, 0.11), life: rand(5, 8), gravity: 0.05, drag: 0.4, spin: 2, opacity: 0.9 });
      }
    }

    if (t > 31) { disposeBlast(b); blasts.splice(bi, 1); }
  }
  if (flashBest) FX.holdFlash(flashBest.p, flashBest.i, flashBest.c, flashBest.d);
  if (G.renderer) G.renderer.toneMappingExposure = (G.baseExposure ?? 1.05) + exposure;
  if (G.tintSky) G.tintSky(0xff9a52, Math.min(1, sky));
  if (!blasts.length) restore();
}
const _cGrey = new THREE.Color(0.72, 0.7, 0.68);

function disposeBlast(b) {
  for (const m of [b.ball, b.glow, b.dome, b.cloud, b.skirt, b.shock]) {
    G.scene.remove(m);
    if (m.isInstancedMesh) { m.geometry.dispose(); m.dispose(); }
    m.material.dispose();
  }
}
function restore() {
  if (G.renderer) G.renderer.toneMappingExposure = G.baseExposure ?? 1.05;
  if (G.tintSky) G.tintSky(0xffffff, 0);
}
// a new map: everything goes
G.clearNukes = () => clearNukes();
export function clearNukes() {
  for (const b of blasts) disposeBlast(b);
  const had = blasts.length;
  blasts.length = 0;
  if (had) restore();
  G.dangers = [];
}

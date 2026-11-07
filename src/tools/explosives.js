// Things that go boom.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, rand, popup, later, afterStep, tv, toast, clamp } from '../core.js';
import { spawnItem, createEnt, explode, detonate, addWeld, launchFireworks, addFirePatch, ITEMS, removeEnt, detonateC4 } from '../items.js';
import { bindText } from '../input.js';
import { carveTerrain, spawnCube, groundTop, groundBottom } from '../terrain.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
import { dropNuke } from '../nuke.js';
import { aimPoint, projectile, mkMesh, bodiesNear, dummyOf } from './common.js';

function cool(tool, dt) { tool.cd = Math.max(0, (tool.cd || 0) - dt); }
function throwVel(speed, up = 3) {
  return G.aim.dir.clone().multiplyScalar(speed).add(new THREE.Vector3(0, up, 0)).add(G.player.body.velocity);
}
function throwPos() { return G.aim.hand.clone().addScaledVector(G.aim.dir, 0.9); }

const GRENADE = { id: 'grenade', shape: 'sphere', r: 0.16, mat: 'rubber', color: 0x35501f, detail: 0, explosive: { power: 0.75, impact: 999, hp: 1 } };
const STICKY = { id: 'sticky', shape: 'sphere', r: 0.17, mat: 'tnt', color: 0xff2255, detail: 0, explosive: { power: 0.9, impact: 999, hp: 1 } };
const BHBALL = { id: 'bh', shape: 'sphere', r: 0.3, mat: 'metal', color: 0x5a189a, explosive: { power: 0.1, impact: 999, hp: 999 } };
const FIREBOMB = { id: 'firebomb', shape: 'sphere', r: 0.2, mat: 'glass', color: 0xff8a1c, detail: 0 };

const rocketGeo = new THREE.ConeGeometry(0.12, 0.6, 6);
const bombGeo = new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.25, 0.6, 2, 6) : new THREE.CylinderGeometry(0.25, 0.25, 1, 6);
const meteorGeo = new THREE.IcosahedronGeometry(1.4, 0);

// ---- black holes
const bhCore = new THREE.SphereGeometry(1, 12, 8);
const bhRing = new THREE.TorusGeometry(1.8, 0.12, 4, 32);
function makeBlackHole(pos) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(bhCore, new THREE.MeshBasicMaterial({ color: 0x050008 }));
  const ring = new THREE.Mesh(bhRing, new THREE.MeshBasicMaterial({ color: 0xc77dff, transparent: true, opacity: 0.9 }));
  const ring2 = new THREE.Mesh(bhRing, new THREE.MeshBasicMaterial({ color: 0x7b2cbf, transparent: true, opacity: 0.7 }));
  ring.rotation.x = Math.PI / 2; ring2.rotation.x = Math.PI / 3;
  g.add(core, ring, ring2);
  g.position.copy(pos);
  G.scene.add(g);
  sfx.blackhole();
  G.blackholes.push({ pos: pos.clone().add(new THREE.Vector3(0, 1.5, 0)), t: 0, life: 3.8, mesh: g, ring, ring2 });
}
// The SUPER black hole: placed where you aim, grows for 12 s, pulls from 60 m away, and eats
// everything that reaches it: objects, people, falling chunks of building, the ground itself
// (a growing ball of it) and the buildings around it.
const sCore = new THREE.SphereGeometry(1, 20, 14);
function makeSuperHole(pos) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(sCore, new THREE.MeshBasicMaterial({ color: 0x000000 }));
  const halo = new THREE.Mesh(sCore, new THREE.MeshBasicMaterial({ color: 0x9d4edd, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, side: THREE.BackSide, depthWrite: false }));
  halo.scale.setScalar(1.35);
  const disk = new THREE.Group();
  const rings = [];
  for (let i = 0; i < 4; i++) {
    const r = new THREE.Mesh(new THREE.TorusGeometry(1.6 + i * 0.55, 0.09 + i * 0.03, 4, 48), new THREE.MeshBasicMaterial({ color: [0xffb347, 0xff6b35, 0xc77dff, 0x7b2cbf][i], transparent: true, opacity: 0.85 - i * 0.12, blending: THREE.AdditiveBlending, depthWrite: false }));
    r.rotation.x = Math.PI / 2 + (i - 1.5) * 0.06;
    disk.add(r); rings.push(r);
  }
  g.add(core, halo, disk);
  g.position.copy(pos);
  G.scene.add(g);
  sfx.blackhole(pos); sfx.blackhole(pos);
  // it stays open until you click again with the tool (or load another map), growing all the time
  const h = { pos: pos.clone(), t: 0, life: Infinity, mesh: g, ring: rings[0], ring2: rings[2], rings, disk, superHole: true, size: 1.2, eaten: 0, food: 0, eatR: 2, reach: 60, shown: 0, slice: 0, S: 1, passR: 2, inner: 0, farT: 0 };
  G.blackholes.push(h);
  G.cubeSinks = G.cubeSinks || [];
  h.sink = { pos: h.pos, r: 45, core: 1.5, pull: 90 };
  G.cubeSinks.push(h.sink);
  popup('⚠ SUPER BLACK HOLE ⚠', pos.clone().add(new THREE.Vector3(0, 4, 0)), '#c77dff', 30);
}
const _f = new CANNON.Vec3();
function bhForce() {
  for (const h of G.blackholes) {
    const grow = Math.min(1, h.t / 0.6);
    const sup = !!h.superHole;
    const R = sup ? h.reach : 26, P = sup ? 150 + h.size * 4 : 75;
    const eatD = sup ? h.size * 1.15 + 1.5 : 0;
    const vmax = sup ? 45 + h.size * 2 : 30;
    for (const b of G.world.bodies) {
      if (b.type !== CANNON.Body.DYNAMIC) continue;
      const dx = h.pos.x - b.position.x, dy = h.pos.y - b.position.y, dz = h.pos.z - b.position.z;
      const d = Math.hypot(dx, dy, dz);
      if (d > R || d < 0.01) continue;
      // gets there: eaten (removed after the physics step); fast things are caught as they pass
      if (sup && d < eatD + b.velocity.length() / 60 && !b._eaten) { b._eaten = true; afterStep(() => eatBody(h, b)); continue; }
      let a = (P * (1 - d / R) + 12) * grow;
      if (sup) a *= 1 + 2.5 * clamp(1 - d / (h.size * 8 + 10), 0, 1); // much stronger close in
      if (b.isPlayer) a *= sup ? 0.45 : 0.35;
      const inv = 1 / d;
      // pull + swirl (the super hole's swirl fades out close in, so things spiral IN instead of
      // circling it forever)
      const sw = sup ? 0.5 * clamp((d - h.size * 3) / (R * 0.35), 0, 1) : 0.5;
      _f.set((dx * inv - dz * inv * sw) * a * b.mass, (dy * inv) * a * b.mass + 9.82 * b.mass * 0.5 * grow, (dz * inv + dx * inv * sw) * a * b.mass);
      b.applyForce(_f);
      if (d < 2 && !sup) b.velocity.scale(0.9, b.velocity);
      if (sup) {
        // its sideways (orbiting) speed is dragged away, more and more the closer it gets
        const vr = (b.velocity.x * dx + b.velocity.y * dy + b.velocity.z * dz) * inv;
        const k = 0.015 + 0.12 * clamp(1 - d / (h.size * 10 + 20), 0, 1);
        b.velocity.x -= (b.velocity.x - dx * inv * vr) * k;
        b.velocity.y -= (b.velocity.y - dy * inv * vr) * k;
        b.velocity.z -= (b.velocity.z - dz * inv * vr) * k;
        // and nothing gets away: speed away from it is dragged back (no slingshots out of reach)
        if (vr < 0) { const k2 = 0.1 * (1 - k); b.velocity.x -= dx * inv * vr * k2; b.velocity.y -= dy * inv * vr * k2; b.velocity.z -= dz * inv * vr * k2; }
      }
      const sp = b.velocity.length();
      if (sp > vmax) b.velocity.scale(vmax / sp, b.velocity);
      b.wakeUp();
    }
  }
}
G.extraForces.push(bhForce);
function eatBody(h, b) {
  b._eaten = false;
  const ate = 20 + Math.min(600, (b.mass || 10) / 4) + (b.isPiece && b.piece ? b.piece.n * 0.5 : 0);
  h.eaten += ate; h.food += ate;
  FX.particle({ pos: tv(b.position), vel: new THREE.Vector3(), color: 0xc77dff, size: 0.8, life: 0.3, glow: true, add: true, gravity: 0, drag: 0, grow: -0.9, floor: false });
  if (b.isPlayer) {
    G.player.respawn();
    toast('You were spaghettified by the black hole!');
    return;
  }
  if (b.isPiece) { G.eatPiece && G.eatPiece(b); return; }
  const e = b.ent;
  if (!e || e.dead) return;
  if (e.kind === 'ragpart' || e.kind === 'dummybody') { e.dummy.respawn(); return; }
  removeEnt(e, true);
  G.stats.broken = (G.stats.broken || 0) + 1;
}
export function updateBlackHoles(dt) {
  for (let i = G.blackholes.length - 1; i >= 0; i--) {
    const h = G.blackholes[i];
    h.t += dt;
    const k = Math.min(1, h.t / 0.6);
    h.mesh.position.lerp(h.pos, 0.1);
    h.mesh.scale.setScalar(k * (1 + Math.sin(h.t * 20) * 0.05) * (h.t > h.life - 0.3 ? 1 - (h.t - h.life + 0.3) / 0.3 * 0.8 : 1));
    h.ring.rotation.z += dt * 6; h.ring2.rotation.z -= dt * 9;
    for (let j = 0; j < 3; j++) {
      const a = rand(0, Math.PI * 2), r = rand(5, 9);
      const p = h.pos.clone().add(new THREE.Vector3(Math.cos(a) * r, rand(-2, 2), Math.sin(a) * r));
      FX.particle({ pos: p, vel: h.pos.clone().sub(p).multiplyScalar(2).add(new THREE.Vector3(-Math.sin(a) * 6, 0, Math.cos(a) * 6)), color: Math.random() < 0.5 ? 0xc77dff : 0x5a189a, size: 0.15, life: 0.45, glow: true, add: true, gravity: 0, drag: 0 });
    }
    if (h.superHole) { updateSuperHole(h, dt); if (h.t < h.life) continue; }
    for (const d of G.dummies) if (d.state === 'standing' && d.center().distanceTo(h.pos) < 16 * k) d.knock(null);
    if (G.player && G.player.pos().distanceTo(h.pos) < 26) G.player.stun = Math.max(G.player.stun, 0.3);
    if (h.t >= h.life) {
      G.scene.remove(h.mesh);
      G.blackholes.splice(i, 1);
      if (h.sink) G.cubeSinks.splice(G.cubeSinks.indexOf(h.sink), 1);
      if (h.superHole) {
        // it evaporates in a blinding flash
        explode(h.pos, 3.2, { noCrater: true });
        FX.ring(h.pos, 60, 0xe0c3ff, 1.2);
        for (const s of [1, 1.6]) FX.fireball(h.pos, 8 * s, 0.9);
      } else {
        explode(h.pos, 1.9, { noCrater: true }); // a singularity pops in the air
        FX.confetti(h.pos, 40, 16);
      }
    }
  }
}

// NO LIMIT: it grows as long as it finds something to eat, until there's nothing left on the
// whole map. The bigger it gets, the more it needs to keep growing (what it ate in the last couple
// of seconds against what something its size needs), but the stronger it gets too: it reaches
// further, grows faster and tears the ground away in bigger and bigger chunks.
function updateSuperHole(h, dt) {
  const t = h.t;
  h.food *= Math.exp(-dt / 2);
  const need = 30 + 0.08 * h.eatR * h.eatR;
  const fed = t < 5 ? 1 : clamp(h.food / need, 0, 1);
  if (t < h.life - 0.6) h.eatR += dt * (t < 5 ? 2 : (0.5 + 0.03 * h.eatR) * fed);
  const eatR = h.eatR;
  h.size = eatR / 2.4;                              // the black core
  h.reach = Math.max(80, eatR * 2.3 + 30);          // how far away it pulls things in
  h.sink.core = h.size;
  h.sink.r = Math.max(45, eatR * 1.9);
  // a milestone every time it grows by half again
  if (h.size > (h.shown || 4) * 1.5) { h.shown = h.size; popup(`BLACK HOLE: ${Math.round(eatR * 2)} m WIDE`, h.pos.clone().add(new THREE.Vector3(0, h.size + 3, 0)), '#c77dff', 26); G.shake = Math.max(G.shake, 0.6); sfx.blackhole(h.pos); }
  const fade = t > h.life - 0.6 ? Math.max(0.05, (h.life - t) / 0.6) : 1;
  h.mesh.scale.setScalar(h.size * fade * (1 + Math.sin(t * 13) * 0.03));
  h.disk.rotation.y += dt * 2.5;
  h.rings.forEach((r, i) => { r.rotation.z += dt * (5 - i) * (i % 2 ? -1 : 1); });
  // swirling streaks (a wider swirl as it grows)
  const sw = Math.max(1, h.size / 4.5);
  for (let j = 0; j < 6; j++) {
    const a = rand(0, Math.PI * 2), r = rand(8, 22) * sw;
    const p = h.pos.clone().add(new THREE.Vector3(Math.cos(a) * r, rand(-4, 4) * sw, Math.sin(a) * r));
    FX.particle({ pos: p, vel: h.pos.clone().sub(p).multiplyScalar(1.6).add(new THREE.Vector3(-Math.sin(a) * 12 * sw, 0, Math.cos(a) * 12 * sw)), color: [0xc77dff, 0xff9e4a, 0x5a189a][j % 3], size: 0.22 * Math.sqrt(sw), life: 0.55, glow: true, add: true, gravity: 0, drag: 0, floor: false });
  }
  if (t >= h.life - 0.5) return;
  // Eating: the ground (and the buildings) inside its ball. A big ball is eaten a slice of rows
  // each frame (all of it every few frames), skipping the middle where everything is long gone.
  const S = eatR < 12 ? 1 : eatR < 40 ? 3 : eatR < 100 ? 6 : eatR < 220 ? 10 : 14;
  if (S !== h.S) { h.S = S; h.slice = 0; h.passR = eatR; }
  const res = carveTerrain(h.pos, eatR, { sphere: true, slice: S > 1 ? [h.slice, S] : null, inner: h.inner });
  if (res && res.removed) {
    h.eaten += res.removed; h.food += res.removed;
    // the ground comes away in chunks that fly in (bigger chunks as it grows)
    const cols = res.sample.length ? res.sample : [0x6b4f35, 0x7d7f86];
    const cs = clamp(0.45 * (1 + eatR / 12), 0.45, 4);
    for (let q = 0; q < Math.min(S > 1 ? 6 : 3, 1 + (res.removed >> 7)); q++) {
      const dir = new THREE.Vector3(rand(-1, 1), rand(-1, 0.4), rand(-1, 1)).normalize();
      spawnCube(h.pos.clone().addScaledVector(dir, eatR * rand(0.85, 1.05)), dir.multiplyScalar(-rand(3, 8) * Math.sqrt(sw)), cols[(Math.random() * cols.length) | 0], cs * rand(0.6, 1.2), 4);
    }
  }
  if (++h.slice >= S) {
    // a whole pass done: everything inside the ball it started with is gone from top to bottom
    h.slice = 0;
    const H = Math.max(h.pos.y - groundBottom(), groundTop() - h.pos.y) + 2;
    h.inner = h.passR > H ? Math.sqrt(h.passR * h.passR - H * H) : 0;
    h.passR = eatR;
    // the buildings in reach, one a frame (a whole tower inside the ball is a lot of blocks)
    if (G.buildingsNear && !(h.bq && h.bq.length)) h.bq = G.buildingsNear(h.pos, eatR * 0.9).filter((o) => o.b.solid > 0).map((o) => ({ b: o.b, s: 0 }));
    // (the far-away view of a big map is redrawn now and then, so the hole shows from afar)
    if (eatR > 60 && G.refreshFar && G.time - h.farT > 20) { h.farT = G.time; G.refreshFar(); }
  }
  if (h.bq && h.bq.length && G.blastOne) {
    // (a building only partly inside is eaten a quarter of its floors at a time)
    const q = h.bq.shift(), whole = G.inBall(q.b, h.pos, eatR * 0.9);
    const n = G.blastOne(q.b, h.pos, eatR * 0.9, { quiet: true, scorch: false, debris: false, layers: whole ? null : [q.s, 4] });
    h.eaten += n; h.food += n;
    if (!whole && ++q.s < 4) h.bq.push(q);
  }
  if (G.blastBuildings && S === 1 && eatR > 4 && (h.bt = (h.bt || 0) + dt) > 0.3) { h.bt = 0; const n = G.blastBuildings(h.pos, eatR * 0.9, { quiet: true, scorch: false }) || 0; h.eaten += n; h.food += n; }
  // people nearby lose their footing; you get dragged
  const knockR = Math.max(40, eatR * 1.6);
  for (const d of G.dummies) if (d.state === 'standing' && d.center().distanceTo(h.pos) < knockR) d.knock(null);
  if (G.player && G.player.pos().distanceTo(h.pos) < h.reach) { G.player.stun = Math.max(G.player.stun, 0.3); G.shake = Math.max(G.shake, 0.25); }
}

export const boomTools = [
  {
    id: 'tnt', name: 'TNT Toss', icon: '🧨', color: 0xd42a1e, hint: 'Click: throw lit TNT (2.5s fuse). Chains with other TNT!',
    down() {
      if (this.cd > 0) return; this.cd = 0.3;
      const e = createEnt(ITEMS.tnt, throwPos(), { spawned: true, vel: throwVel(15), angVel: new THREE.Vector3(rand(-5, 5), rand(-5, 5), rand(-5, 5)) });
      e.fuse = 2.5;
      sfx.fling();
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'grenade', name: 'Grenade Launcher', icon: '🟢', color: 0x35501f, hint: 'Click: bouncy grenades (1.6s fuse)',
    down() {
      if (this.cd > 0) return; this.cd = 0.4;
      const e = createEnt(GRENADE, throwPos(), { spawned: true, vel: throwVel(26, 4) });
      e.fuse = 1.6;
      sfx.pop();
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'rocket', name: 'Rocket Launcher', icon: '🚀', color: 0x6b8e23, hint: 'Click: rocket that explodes on impact',
    down() {
      if (this.cd > 0) return; this.cd = 0.7;
      sfx.rocket();
      const dir = G.aim.dir.clone();
      const mesh = mkMesh(rocketGeo, 0xdddddd);
      projectile({
        pos: G.aim.hand.clone().addScaledVector(dir, 0.8), vel: dir.multiplyScalar(48), life: 4, mesh,
        trail: (p) => { FX.particle({ pos: p, vel: new THREE.Vector3(rand(-0.5, 0.5), rand(0, 1), rand(-0.5, 0.5)), color: 0x999999, size: 0.35, life: 0.8, gravity: -1, grow: 1.5, shrink: false, opacity: 0.6, floor: false }); FX.particle({ pos: p, vel: new THREE.Vector3(), color: 0xffa31a, size: 0.25, life: 0.12, glow: true, add: true, gravity: 0 }); },
        onHit: (h) => explode(h.point.clone().addScaledVector(h.normal, 0.3), 1.0),
        end: (p) => explode(p, 1.0),
      });
      G.player.fling(G.aim.dir.clone().multiplyScalar(-1.5));
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'sticky', name: 'Sticky Bombs', icon: '💣', color: 0xff2255, hint: 'Click: sticks to anything, then BOOM after 2s',
    down() {
      if (this.cd > 0) return; this.cd = 0.3;
      const e = createEnt(STICKY, throwPos(), { spawned: true, vel: throwVel(24, 2) });
      sfx.pop();
      e.body.addEventListener('collide', (ev) => {
        if (e.stuck || e.dead || ev.body.isPlayer) return;
        e.stuck = true;
        const other = ev.body;
        afterStep(() => {
          if (e.dead) return;
          const d = dummyOf(other);
          if (d) {
            if (d.state === 'standing') d.knock(null);
            addWeld(e.body, d.parts.torso.body);
          } else if (other.type === CANNON.Body.DYNAMIC) addWeld(e.body, other);
          else {
            e.body.type = CANNON.Body.STATIC; e.body.mass = 0; e.body.updateMassProperties(); e.body.velocity.setZero();
          }
          e.fuse = 2; sfx.beep();
        });
      });
      e.update = function () { if (!this.stuck && G.time - this.born > 6 && this.fuse == null) this.fuse = 0.1; };
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'c4', name: 'C4 Charges', icon: '📟', color: 0xd9d1b0,
    get hint() { return `Click: stick a charge on anything · ${bindText('detonate', 1)}: set them ALL off`; },
    get desc() { return `Plant charges on walls, pillars, cars, people… they stick to whatever they hit and blink while they wait. Press ${bindText('detonate', 1)} (any time, whatever you hold) to set off every charge you planted, one after another. Put a few on a tower's ground floor and watch it come down.`; },
    down() {
      if (this.cd > 0) return;
      this.cd = 0.22;
      const owner = G.netRemote ? (G.netFrom || 'remote') : 'me';
      let mine = 0;
      for (const e of G.ents) if (!e.dead && e.def && e.def.id === 'c4' && e.owner === owner) mine++;
      if (mine >= 40) { if (!G.netRemote) toast(`40 charges is the limit: ${bindText('detonate', 1)} to set them off`); return; }
      createEnt(ITEMS.c4, throwPos(), { spawned: true, vel: throwVel(30, 1), angVel: new THREE.Vector3(rand(-3, 3), rand(-3, 3), rand(-3, 3)) });
      sfx.pop();
    },
    // (the detonate key)
    det() { return detonateC4(G.netRemote ? (G.netFrom || 'remote') : 'me'); },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'blackhole', name: 'Black Hole', icon: '🌀', color: 0x7b2cbf, hint: 'Click: throw a singularity. Sucks everything in… then pops',
    down() {
      if (this.cd > 0) return;
      if (G.blackholes.length >= 3) return;
      this.cd = 1.5;
      const e = createEnt(BHBALL, throwPos(), { spawned: true, vel: throwVel(18, 3) });
      e.fuse = 1.0;
      e.onFuse = () => { const p = tv(e.body.position); G.removeEnt(e, true); makeBlackHole(p); };
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'superhole', name: 'Super Black Hole', icon: '🕳️', color: 0x3c096c, hint: 'Click a spot: a huge black hole that eats EVERYTHING, even the ground and buildings. Click again to close it',
    desc: 'Opens a giant black hole where you aim. It stays open until you click again and it has NO LIMIT: it grows by eating the ground, buildings, cars, people, everything. The bigger it gets the more it needs, but the stronger it gets: it reaches further and tears the ground away in bigger chunks, until there is nothing left on the whole map. When you close it, it evaporates in a flash.',
    down() {
      if (this.cd > 0) return;
      this.cd = 0.8;
      const open = G.blackholes.find((h) => h.superHole && h.life === Infinity);
      if (open) { open.life = open.t + 0.6; toast('Closing the black hole…'); return; }
      const h = aimPoint(300, 30);
      makeSuperHole(h.point.clone().add(new THREE.Vector3(0, h.miss ? 0 : 3.5, 0)));
      toast('Black hole open: click again to close it');
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'firebomb', name: 'Fire Bomb', icon: '🍾', color: 0xff8a1c, hint: 'Click: shatters into a pool of fire',
    down() {
      if (this.cd > 0) return; this.cd = 0.5;
      const e = createEnt(FIREBOMB, throwPos(), { spawned: true, vel: throwVel(20, 4), angVel: new THREE.Vector3(8, 0, 4) });
      e.body.addEventListener('collide', (ev) => {
        if (e.dead || ev.body.isPlayer) return;
        afterStep(() => {
          if (e.dead) return;
          const p = tv(e.body.position);
          G.removeEnt(e, true);
          sfx.shatter(); sfx.explosion(0.3);
          FX.fireball(p, 2.5, 0.5);
          addFirePatch(new THREE.Vector3(p.x, Math.max(0, p.y - 0.15), p.z), 3.5, 8);
          for (const o of bodiesNear(p, 3.5)) if (o.b.ent) G.ignite(o.b.ent, 9);
        });
      });
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'meteor', name: 'Meteor Strike', icon: '☄️', color: 0xff5e1a, hint: 'Click a spot: call down a meteor',
    down() {
      if (this.cd > 0) return; this.cd = 1.6;
      const h = aimPoint(300, 40);
      const target = h.point.clone();
      const start = target.clone().add(new THREE.Vector3(rand(-30, 30), 80, rand(-30, 30)));
      const mesh = mkMesh(meteorGeo, 0x5a3a2a);
      mesh.material.emissive = new THREE.Color(0xff3a00); mesh.material.emissiveIntensity = 0.6;
      sfx.whistle();
      projectile({
        pos: start, vel: target.clone().sub(start).divideScalar(1.3), life: 1.3, mesh, collide: false,
        trail: (p) => { for (let i = 0; i < 2; i++) FX.particle({ pos: p.clone().add(new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1))), vel: new THREE.Vector3(), color: [0xff8a1c, 0xffd04a, 0x555555][i + (Math.random() < 0.4 ? 1 : 0)], size: rand(0.6, 1.1), life: 0.6, glow: i === 0, add: true, gravity: 0, grow: 1, shrink: false }); mesh.rotation.x += 0.2; },
        end: (p) => {
          explode(target.clone().add(new THREE.Vector3(0, 0.5, 0)), 2.3, { fire: true, craterRadius: 4.5, rim: true });
          for (let i = 0; i < 4; i++) createEnt({ ...ITEMS.chunk, size: [0.6, 0.5, 0.6], mat: 'rock', color: 0x4a3328 }, target.clone().add(new THREE.Vector3(rand(-1, 1), 1 + i * 0.6, rand(-1, 1))), { spawned: true, gen: 2, vel: new THREE.Vector3(rand(-8, 8), rand(6, 12), rand(-8, 8)) });
        },
      });
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'airstrike', name: 'Airstrike', icon: '✈️', color: 0x556b2f, hint: 'Click a spot: carpet bomb a line',
    down() {
      if (this.cd > 0) return; this.cd = 3.5;
      const h = aimPoint(300, 40);
      const dir = new THREE.Vector3(G.aim.dir.x, 0, G.aim.dir.z).normalize();
      sfx.plane();
      popup('INCOMING!', h.point.clone().add(new THREE.Vector3(0, 3, 0)), '#ff5555', 24);
      for (let i = 0; i < 8; i++) {
        const tp = h.point.clone().addScaledVector(dir, (i - 2) * 4);
        later(0.6 + i * 0.16, () => {
          const mesh = mkMesh(bombGeo, 0x2f3a2a);
          projectile({
            pos: tp.clone().add(new THREE.Vector3(0, 45, 0)), vel: new THREE.Vector3(0, -40, 0), gravity: 20, life: 4, mesh,
            onHit: (hh) => explode(hh.point.clone().add(new THREE.Vector3(0, 0.4, 0)), 1.0),
            end: (p) => explode(p, 1.0),
          });
        });
      }
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'nuke', name: 'Nuke', icon: '☢️', color: 0xe2c21d, hint: 'Click a spot: call in a nuke. Get far away. Then further.',
    desc: 'Air-raid siren, a bomb drops from the sky, then: a blinding flash, a shockwave you can watch tear across the ground, a mushroom cloud, a huge crater and fires. The boom arrives late if you are far away.',
    down() {
      if (this.cd > 0) return; this.cd = 6;
      const h = aimPoint(300, 60);
      dropNuke(h.point.clone());
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'fireworks', name: 'Fireworks', icon: '🎆', color: 0xe83f6f, hint: 'Click a spot: launch a firework barrage',
    down() {
      if (this.cd > 0) return; this.cd = 0.4;
      const h = aimPoint(120, 10);
      launchFireworks(h.point.clone().add(new THREE.Vector3(0, 0.5, 0)), 3);
    },
    update(dt) { cool(this, dt); },
  },
];

export { detonate };
G.__updBH = updateBlackHoles; // (for tests)

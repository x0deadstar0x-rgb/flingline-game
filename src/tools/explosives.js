// Things that go boom.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, rand, popup, later, afterStep, tv } from '../core.js';
import { spawnItem, createEnt, explode, detonate, addWeld, launchFireworks, addFirePatch, ITEMS } from '../items.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
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
const _f = new CANNON.Vec3();
function bhForce() {
  for (const h of G.blackholes) {
    const grow = Math.min(1, h.t / 0.6);
    for (const b of G.world.bodies) {
      if (b.type !== CANNON.Body.DYNAMIC) continue;
      const dx = h.pos.x - b.position.x, dy = h.pos.y - b.position.y, dz = h.pos.z - b.position.z;
      const d = Math.hypot(dx, dy, dz);
      if (d > 26 || d < 0.01) continue;
      let a = (75 * (1 - d / 26) + 12) * grow;
      if (b.isPlayer) a *= 0.35;
      const inv = 1 / d;
      // pull + swirl
      _f.set((dx * inv + -dz * inv * 0.5) * a * b.mass, (dy * inv) * a * b.mass + 9.82 * b.mass * 0.5 * grow, (dz * inv + dx * inv * 0.5) * a * b.mass);
      b.applyForce(_f);
      if (d < 2) b.velocity.scale(0.9, b.velocity);
      const sp = b.velocity.length();
      if (sp > 30) b.velocity.scale(30 / sp, b.velocity);
      b.wakeUp();
    }
  }
}
G.extraForces.push(bhForce);
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
    for (const d of G.dummies) if (d.state === 'standing' && d.center().distanceTo(h.pos) < 16 * k) d.knock(null);
    if (G.player && G.player.pos().distanceTo(h.pos) < 26) G.player.stun = Math.max(G.player.stun, 0.3);
    if (h.t >= h.life) {
      G.scene.remove(h.mesh);
      G.blackholes.splice(i, 1);
      explode(h.pos, 1.9, { noCrater: true }); // a singularity pops in the air
      FX.confetti(h.pos, 40, 16);
    }
  }
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
    id: 'nuke', name: 'Nuke', icon: '☢️', color: 0xe2c21d, hint: 'Click a spot: you asked for it',
    down() {
      if (this.cd > 0) return; this.cd = 7;
      const h = aimPoint(300, 60);
      const target = h.point.clone();
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 2.2, 8), new THREE.MeshStandardMaterial({ color: 0xe2c21d, flatShading: true }));
      popup('☢ NUKE INCOMING ☢', target.clone().add(new THREE.Vector3(0, 4, 0)), '#ffe14a', 30);
      sfx.whistle(2.4);
      projectile({
        pos: target.clone().add(new THREE.Vector3(0, 90, 0)), vel: new THREE.Vector3(0, -37, 0), life: 2.4, collide: false, mesh,
        end: () => {
          explode(target.clone().add(new THREE.Vector3(0, 1, 0)), 4.5, { fire: true, craterRadius: 14, rim: true });
          // mushroom cloud
          for (let i = 0; i < 40; i++) {
            const a = rand(0, Math.PI * 2), r = rand(0, 5);
            FX.particle({ pos: target.clone().add(new THREE.Vector3(Math.cos(a) * r, rand(1, 4), Math.sin(a) * r)), vel: new THREE.Vector3(Math.cos(a) * 2, rand(12, 20), Math.sin(a) * 2), color: [0xff8a1c, 0x5a4a3a, 0x8a7a6a][i % 3], size: rand(2, 3.5), life: rand(2.5, 4), gravity: 3, drag: 0.8, grow: 1.6, shrink: false, opacity: 0.85, floor: false, spin: 0.5 });
          }
          for (let i = 0; i < 30; i++) {
            const a = (i / 30) * Math.PI * 2;
            FX.particle({ pos: target.clone().add(new THREE.Vector3(0, 0.5, 0)), vel: new THREE.Vector3(Math.cos(a) * 30, 1, Math.sin(a) * 30), color: 0xd9cfb8, size: 1.8, life: 1.6, gravity: 0, drag: 1.2, grow: 1, shrink: false, opacity: 0.7, floor: false });
          }
          FX.ring(target.clone().add(new THREE.Vector3(0, 0.5, 0)), 30, 0xffffff, 1.2);
        },
      });
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

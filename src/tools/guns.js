// Guns & hitscan weapons.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, rand, raycast, popup, tv } from '../core.js';
import { spawnItem, ignite, damage, removeEnt } from '../items.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
import { aimHit, bulletHit, spreadDir, AIM_MASK, bodiesNear, dummiesNear, dummyOf, massFactor, projectile } from './common.js';

// the Blaster's energy bolt: a bright core inside a soft additive glow, stretched along its flight
const boltCore = new THREE.CapsuleGeometry(0.035, 0.9, 2, 6);
const boltGlow = new THREE.CapsuleGeometry(0.1, 1.0, 2, 8);
const boltCoreMat = new THREE.MeshBasicMaterial({ color: 0xfffbe0 });
const boltGlowMat = new THREE.MeshBasicMaterial({ color: 0xffc83a, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false });
function boltMesh() {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(boltCore, boltCoreMat), new THREE.Mesh(boltGlow, boltGlowMat));
  return g;
}

function shoot(dir, range, dmg, imp, color, width = 0.04, life = 0.07) {
  const s = G.aim.start;
  const h = raycast(s, s.clone().addScaledVector(dir, range), AIM_MASK);
  const end = h ? h.point : s.clone().addScaledVector(dir, range);
  FX.beam(G.aim.hand, end, color, width, life);
  if (h) bulletHit(h, dir, dmg, imp, color);
  return h;
}

function cool(tool, dt) { tool.cd = Math.max(0, (tool.cd || 0) - dt); return tool.cd <= 0; }

export const gunTools = [
  {
    // energy pistol: one glowing bolt per click (you can see it fly), not an automatic
    id: 'blaster', name: 'Blaster', icon: '🔫', color: 0xffd23f, hint: 'Click: fire an energy bolt (one per click). Breaks blocks, pops TNT',
    desc: 'A sci-fi pistol. Every click fires a fast glowing bolt you can watch fly. Accurate, punchy, pops TNT.',
    down() {
      if (this.cd > 0) return; this.cd = 0.22;
      sfx.shoot();
      const dir = spreadDir(G.aim.dir, 0.004);
      const s = G.aim.start.clone().addScaledVector(dir, 0.6);
      const mesh = boltMesh();
      projectile({
        pos: G.aim.hand.clone(), vel: dir.clone().multiplyScalar(150), life: 2, gravity: 0, mesh,
        // first frame: from the gun to where you aim (so it lines up with the crosshair)
        steer: (p) => { if (!p.lined) { p.lined = true; p.pos.copy(s); } },
        trail: (pp) => FX.particle({ pos: pp, vel: new THREE.Vector3(), color: 0xffe066, size: 0.09, life: 0.12, glow: true, add: true, gravity: 0, drag: 0, spin: 0, floor: false }),
        onHit: (h) => { if (h.water) { FX.splash(h.point, 6, 0.6); return; } bulletHit(h, dir, 24, 6, 0xffe066); FX.flashAt(h.point, 6, 0xffd23f); },
      });
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'shotgun', name: 'Shotgun', icon: '💥', color: 0xff8a1c, hint: 'Click: pump shotgun, 10 pellets — brutal up close',
    desc: 'Slow pump action, 10 pellets in a wide cone. Wrecks anything close and kicks you back a little.',
    down() {
      if (this.cd > 0) return; this.cd = 0.9;
      sfx.shotgun();
      for (let i = 0; i < 10; i++) shoot(spreadDir(G.aim.dir, 0.075), 60, 11, 5, 0xffb347, 0.03, 0.06);
      G.player.fling(G.aim.dir.clone().multiplyScalar(-3));
      G.shake = Math.max(G.shake, 0.3);
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'minigun', name: 'Minigun', icon: '🌀', color: 0xc0c0c0, hint: 'Hold click: spin up, then spray — fast and inaccurate',
    desc: 'Hold to spin the barrels up, then it sprays bullets very fast. Each one is weak and it is not accurate, but nothing survives a long burst.',
    spin: 0,
    held(dt) {
      this.spin = Math.min(1, this.spin + dt * 1.7);
      if (this.spin < 0.65) { sfx.whir(this.spin); return; }
      this.acc = (this.acc || 0) + dt;
      while (this.acc > 0.05) { this.acc -= 0.05; sfx.minigun(); shoot(spreadDir(G.aim.dir, 0.045), 150, 6, 2, 0xfff1a8, 0.03, 0.05); if (G.recoil) G.recoil(0.45); }
      G.shake = Math.max(G.shake, 0.08);
    },
    update(dt, input) { if (!input.mouseDown) this.spin = Math.max(0, this.spin - dt * 2); G.toolSpin = this.spin; },
    unequip() { G.toolSpin = 0; },
  },
  {
    id: 'sniper', name: 'Railgun', icon: '🎯', color: 0x9ad9ff, hint: 'Click: one huge piercing shot through up to 8 things (400 m)',
    desc: 'Slow but devastating: the slug goes straight through up to 8 things, 400 m away, and punches holes in the ground.',
    down() {
      if (this.cd > 0) return; this.cd = 1.2;
      sfx.rail();
      const dir = G.aim.dir.clone();
      let s = G.aim.start.clone();
      let end = s.clone().addScaledVector(dir, 400);
      for (let i = 0; i < 8; i++) {
        const h = raycast(s, s.clone().addScaledVector(dir, 400), AIM_MASK);
        if (!h) break;
        bulletHit(h, dir, 120, 26, 0x9ad9ff);
        end = h.point;
        if (!h.body.ent) break; // stops at the world
        s = h.point.clone().addScaledVector(dir, 0.02);
      }
      FX.beam(G.aim.hand, end, 0xbfe9ff, 0.09, 0.35);
      FX.beam(G.aim.hand, end, 0xffffff, 0.03, 0.35);
      G.player.fling(dir.clone().multiplyScalar(-4));
      G.shake = Math.max(G.shake, 0.4);
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'lightning', name: 'Lightning Gun', icon: '⚡', color: 0xa8d8ff, hint: 'Click: lightning that chains between things',
    down() {
      if (this.cd > 0) return; this.cd = 0.55;
      sfx.zap();
      const h = aimHit(140);
      const end = h ? h.point : G.aim.start.clone().addScaledVector(G.aim.dir, 140);
      FX.lightning(G.aim.hand, end);
      FX.flashAt(end, 30, 0x8ec5ff);
      if (!h) return;
      const zapped = new Set();
      let cur = h.point;
      const zap = (b, from) => {
        const d = dummyOf(b);
        const key = d || b;
        if (zapped.has(key)) return null;
        zapped.add(key);
        const p = tv(b.position);
        if (from) FX.lightning(from, p);
        FX.sparks(p, new THREE.Vector3(0, 1, 0), 0xbfe3ff, 10, 6);
        if (d) { d.hurt(30, null, new THREE.Vector3(rand(-3, 3), 7, rand(-3, 3))); }
        else if (b.type === CANNON.Body.DYNAMIC) {
          b.velocity.y += 6 * massFactor(b.mass); b.velocity.x += rand(-2, 2); b.velocity.z += rand(-2, 2);
          b.angularVelocity.set(rand(-8, 8), rand(-8, 8), rand(-8, 8)); b.wakeUp();
          if (b.ent) { damage(b.ent, 35, null); if (Math.random() < 0.3) ignite(b.ent, 5); }
        }
        return p;
      };
      if (h.body.ent) cur = zap(h.body, null) || cur;
      for (let i = 0; i < 6; i++) {
        let best = null, bd = 11;
        for (const o of bodiesNear(cur, 11)) {
          const d = dummyOf(o.b);
          if (zapped.has(d || o.b)) continue;
          if (o.d < bd) { bd = o.d; best = o.b; }
        }
        if (!best) break;
        const np = zap(best, cur);
        if (!np) break;
        cur = np;
      }
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'flamer', name: 'Flamethrower', icon: '🔥', color: 0xff6a1a, hint: 'Hold click: set things on fire. Wood burns, TNT cooks off',
    held(dt) {
      const dir = G.aim.dir;
      const hand = G.aim.hand;
      for (let i = 0; i < 3; i++) {
        const v = spreadDir(dir, 0.12).multiplyScalar(rand(12, 16)).add(G.player.body.velocity);
        FX.particle({ pos: hand.clone().addScaledVector(dir, 0.9), vel: v, color: [0xff9a2a, 0xff6a1a, 0xff3d14][i], size: rand(0.1, 0.2), life: rand(0.35, 0.55), glow: true, add: true, opacity: 0.55, gravity: -3, drag: 2.2, grow: 2.2, shrink: false });
      }
      sfx.flame();
      this.tick = (this.tick || 0) - dt;
      if (this.tick > 0) return;
      this.tick = 0.12;
      const reach = 7.5;
      for (const o of bodiesNear(hand, reach, dir, 0.88)) {
        if (o.b.ent) { ignite(o.b.ent, 9); o.b.velocity.x += dir.x * 0.5; o.b.velocity.z += dir.z * 0.5; o.b.wakeUp(); }
      }
      for (const d of dummiesNear(hand, reach)) {
        const to = d.center().sub(hand); const len = to.length();
        if (to.dot(dir) / len > 0.85) d.ignite();
      }
    },
  },
  {
    id: 'cannon', name: 'Cannon', icon: '⚫', color: 0x333333, hint: 'Click: fire a heavy cannonball',
    down() {
      if (this.cd > 0) return; this.cd = 0.8;
      sfx.explosion(0.35);
      const dir = G.aim.dir.clone();
      const e = spawnItem('cannonball', G.aim.hand.clone().addScaledVector(dir, 1.2), { spawned: true, vel: dir.clone().multiplyScalar(60).add(G.player.body.velocity) });
      e.born = G.time;
      e.update = function () { if (G.time - this.born > 15) removeEnt(this, true); };
      FX.smoke(G.aim.hand.clone().addScaledVector(dir, 1.5), 6, 0xaaaaaa, 0.5);
      G.player.fling(dir.multiplyScalar(-5));
      G.shake = Math.max(G.shake, 0.4);
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'bat', name: 'Home Run Bat', icon: '🏏', color: 0xc08a4f, hint: 'Click: smack things (and dummies) out of the park',
    down() {
      if (this.cd > 0) return; this.cd = 0.4;
      G.player.swing = 1;
      const fwd = G.aim.dir.clone();
      const c = G.player.pos().addScaledVector(fwd, 1.6);
      let hitAny = false;
      for (const d of dummiesNear(c, 2.4)) {
        const v = fwd.clone().multiplyScalar(26).add(new THREE.Vector3(0, 10, 0));
        d.hurt(25, fwd, v);
        d.markFling();
        popup('HOME RUN!', d.center().add(new THREE.Vector3(0, 1.5, 0)), '#ffcf3a', 24);
        hitAny = true;
      }
      for (const o of bodiesNear(c, 2.4)) {
        if (dummyOf(o.b)) continue;
        const k = 20 * massFactor(o.b.mass);
        o.b.velocity.x += fwd.x * k; o.b.velocity.y += fwd.y * k + 5 * massFactor(o.b.mass); o.b.velocity.z += fwd.z * k;
        o.b.angularVelocity.set(rand(-8, 8), rand(-8, 8), rand(-8, 8));
        o.b.wakeUp();
        if (o.b.ent) damage(o.b.ent, 40, fwd);
        hitAny = true;
      }
      if (hitAny) { sfx.whack(); G.shake = Math.max(G.shake, 0.35); FX.sparks(c, fwd.clone().negate(), 0xffffff, 10, 6); }
      else sfx.swoosh();
    },
    update(dt) { cool(this, dt); },
  },
];

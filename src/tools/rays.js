// Force & ray tools.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, rand, toast, tv, clamp } from '../core.js';
import { freeze, unfreeze, scaleEnt, paint } from '../items.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
import { aimHit, aimPoint, bodiesNear, dummiesNear, dummyOf, massFactor } from './common.js';

function cool(tool, dt) { tool.cd = Math.max(0, (tool.cd || 0) - dt); }

function rayTool(id, name, icon, color, hint, cd, onHit) {
  return {
    id, name, icon, color, hint,
    down() {
      if (this.cd > 0) return; this.cd = cd;
      const h = aimHit(120);
      const end = h ? h.point : G.aim.start.clone().addScaledVector(G.aim.dir, 120);
      FX.beam(G.aim.hand, end, color, 0.07, 0.2);
      FX.beam(G.aim.hand, end, 0xffffff, 0.025, 0.2);
      sfx.ray?.(color);
      if (h) { FX.sparks(h.point, h.normal, color, 10, 4); onHit(h); }
    },
    update(dt) { cool(this, dt); },
  };
}

// Magnet: pulls things to a floating point in front of you
const magnet = {
  id: 'magnet', name: 'Magnet', icon: '🧲', color: 0xff3b3b, hint: 'Hold click: pull everything in front of you into a ball. Let go to drop',
  active: false,
  held() { this.active = true; },
  update(dt, input) {
    if (!input.mouseDown) this.active = false;
    if (this.active) {
      const p = G.aim.start.clone().addScaledVector(G.aim.dir, 6);
      this.point = p;
      if (Math.random() < 0.6) {
        const a = rand(0, Math.PI * 2);
        const q = p.clone().add(new THREE.Vector3(Math.cos(a) * 4, rand(-2, 2), Math.sin(a) * 4));
        FX.particle({ pos: q, vel: p.clone().sub(q).multiplyScalar(3), color: 0xff6b6b, size: 0.08, life: 0.3, glow: true, add: true, gravity: 0, drag: 0 });
      }
      for (const d of dummiesNear(p, 12)) if (d.state === 'standing') d.knock(null);
      sfx.hum?.();
    }
  },
  unequip() { this.active = false; },
};
const _f = new CANNON.Vec3();
G.extraForces.push(() => {
  if (!magnet.active || !magnet.point) return;
  const p = magnet.point;
  for (const b of G.world.bodies) {
    if (b.type !== CANNON.Body.DYNAMIC || b.isPlayer) continue;
    const dx = p.x - b.position.x, dy = p.y - b.position.y, dz = p.z - b.position.z;
    const d = Math.hypot(dx, dy, dz);
    if (d > 16) continue;
    const a = 40 * (1 - d / 16) + 6;
    _f.set(dx / (d + 0.01) * a * b.mass - b.velocity.x * 2 * b.mass, dy / (d + 0.01) * a * b.mass - b.velocity.y * 2 * b.mass + 9.82 * b.mass, dz / (d + 0.01) * a * b.mass - b.velocity.z * 2 * b.mass);
    const fm = Math.hypot(_f.x, _f.y, _f.z);
    if (fm > 8000) _f.scale(8000 / fm, _f);
    b.applyForce(_f);
    b.wakeUp();
  }
});

export const rayTools = [
  {
    id: 'push', name: 'Force Push', icon: '💨', color: 0xe0f7ff, hint: 'Click: shockwave cone. Aim at your feet to rocket-jump!',
    down() {
      if (this.cd > 0) return; this.cd = 0.5;
      sfx.push();
      const dir = G.aim.dir.clone();
      const hand = G.aim.hand.clone();
      for (let i = 0; i < 24; i++) {
        const v = dir.clone().add(new THREE.Vector3(rand(-0.35, 0.35), rand(-0.35, 0.35), rand(-0.35, 0.35))).normalize().multiplyScalar(rand(18, 28));
        FX.particle({ pos: hand, vel: v, color: 0xe0f7ff, size: rand(0.2, 0.4), life: 0.4, glow: true, add: false, opacity: 0.5, gravity: 0, drag: 3, grow: 2, shrink: false });
      }
      if (G.player.pitch < -1.0) {
        G.player.body.velocity.y = 17;
        G.player.stun = 0.2;
        FX.smoke(G.player.feet(), 8, 0xffffff, 0.6);
      }
      for (const d of dummiesNear(hand, 16)) {
        const to = d.center().sub(hand); const len = to.length();
        if (to.dot(dir) / len < 0.75) continue;
        const k = 24 * (1 - len / 16) + 6;
        d.knock(dir.clone().multiplyScalar(k).add(new THREE.Vector3(0, 5, 0)));
      }
      for (const o of bodiesNear(hand, 16, dir, 0.75)) {
        if (dummyOf(o.b)) continue;
        if (o.b.ent && o.b.ent.frozen) unfreeze(o.b.ent);
        const k = (26 * (1 - o.d / 16) + 4) * massFactor(o.b.mass);
        o.b.velocity.x += dir.x * k; o.b.velocity.y += dir.y * k + 3 * massFactor(o.b.mass); o.b.velocity.z += dir.z * k;
        o.b.wakeUp();
      }
      G.shake = Math.max(G.shake, 0.2);
    },
    update(dt) { cool(this, dt); },
  },
  magnet,
  rayTool('freeze', 'Freeze Ray', '❄️', 0x7fe8ff, 'Click: freeze in place (hit again to thaw). Frozen things shatter easily', 0.2, (h) => {
    const d = dummyOf(h.body);
    if (d) { if (d.frozen) d.unfreeze(); else d.freeze(12); sfx.freeze?.(); return; }
    const e = h.body.ent;
    if (!e) return;
    if (e.frozen) unfreeze(e); else freeze(e, 12);
    if (e.burn > 0) { e.burn = 0; G.burning--; }
    sfx.freeze?.();
  }),
  rayTool('antigrav', 'Anti-Gravity Ray', '🪐', 0xc77dff, 'Click: make it float away for 10s', 0.2, (h) => {
    const d = dummyOf(h.body);
    if (d) {
      if (d.state === 'standing') d.knock(new THREE.Vector3(0, 3, 0));
      for (const n in d.parts) { d.parts[n].antigrav = 10; d.parts[n].body.wakeUp(); }
      return;
    }
    const e = h.body.ent;
    if (!e || h.body.type !== CANNON.Body.DYNAMIC) return;
    e.antigrav = 10; h.body.velocity.y += 2; h.body.wakeUp();
  }),
  rayTool('grow', 'Grow Ray', '🔼', 0x7cff5a, 'Click: make things BIGGER (heavier, too)', 0.25, (h) => {
    const d = dummyOf(h.body);
    if (d) { d.rescale(1.35); sfx.grow?.(); return; }
    if (h.body.ent && scaleEnt(h.body.ent, 1.4)) sfx.grow?.(); else toast('Max size!');
  }),
  rayTool('shrink', 'Shrink Ray', '🔽', 0xff6bd6, 'Click: make things tiny', 0.25, (h) => {
    const d = dummyOf(h.body);
    if (d) { d.rescale(1 / 1.35); sfx.shrink?.(); return; }
    if (h.body.ent && scaleEnt(h.body.ent, 1 / 1.4)) sfx.shrink?.(); else toast('Min size!');
  }),
  rayTool('paint', 'Paint Gun', '🎨', 0xffbe0b, 'Click: random paint job', 0.12, (h) => {
    const d = dummyOf(h.body);
    if (d) { d.meshes.torso.material.color.setHSL(Math.random(), 0.8, 0.55); d.meshes.legL.material.color.setHSL(Math.random(), 0.6, 0.35); return; }
    if (h.body.ent && h.body.ent.kind === 'item') paint(h.body.ent);
  }),
  {
    id: 'teleport', name: 'Teleporter', icon: '🌀', color: 0x3bd1ff, hint: 'Click a spot: blink there',
    down() {
      if (this.cd > 0) return; this.cd = 0.35;
      const h = aimHit(150);
      if (!h) { toast('Aim at something'); return; }
      const from = G.player.pos();
      const to = h.point.clone().addScaledVector(h.normal, 1.0).add(new THREE.Vector3(0, 0.9, 0));
      FX.confetti(from, 20, 4);
      G.player.body.position.set(to.x, to.y, to.z);
      G.player.body.velocity.set(0, 0, 0);
      FX.confetti(to, 20, 4);
      FX.beam(from, to, 0x3bd1ff, 0.1, 0.3);
      sfx.teleport?.();
    },
    update(dt) { cool(this, dt); },
  },
];

export { clamp, tv };

// Building / sandbox tools.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, rand, toast, tv, popup } from '../core.js';
import { spawnItem, ITEMS, CATALOG, removeEnt, addRope, addWeld, halfHeight, Strand } from '../items.js';
import { spawnDummy } from '../dummy.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
import { aimHit, aimPoint, dummyOf } from './common.js';

function cool(tool, dt) { tool.cd = Math.max(0, (tool.cd || 0) - dt); }

// ghost marker showing where things will spawn
let marker = null;
function showMarker(p, color) {
  if (!marker) {
    marker = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.04, 4, 20), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 }));
    marker.rotation.x = Math.PI / 2;
    G.scene.add(marker);
  }
  marker.visible = !!p;
  if (p) { marker.position.copy(p).add(new THREE.Vector3(0, 0.03, 0)); marker.material.color.set(color); marker.rotation.z += 0.05; }
}

// two-click tools (rope / weld) share this
function pickAnchor() {
  const h = aimHit(80);
  if (!h) return null;
  let body = h.body;
  const d = dummyOf(body);
  if (d) {
    if (d.state === 'standing') d.knock(null);
    body = d.parts.torso.body;
    return { body, local: new CANNON.Vec3(0, 0.2 * d.s, 0), point: tv(body.position) };
  }
  return { body, local: body.pointToLocalFrame(new CANNON.Vec3(h.point.x, h.point.y, h.point.z)), point: h.point };
}
let pending = null;
let pendStrand = null;
function twoClickUpdate(tool, input, color) {
  if (!pendStrand) pendStrand = new Strand(color, 0.025, 8, true);
  if (input.tap('KeyF')) { pending = null; toast('Cancelled'); }
  if (pending && pending.tool === tool.id) {
    const a = tv(pending.body.pointToWorldFrame(pending.local));
    const h = aimHit(80);
    pendStrand.setColor(color);
    pendStrand.update(a, h ? h.point : G.aim.start.clone().addScaledVector(G.aim.dir, 10), 0.3);
    G.toolNote = 'Click the second point (F to cancel)';
  } else { pendStrand.hide(); G.toolNote = null; }
}

export const buildTools = [
  {
    id: 'spawner', name: 'Spawner', icon: '🧰', color: 0x3a86ff, hint: 'Click: spawn the selected item · T: next item · TAB: pick from menu',
    down() {
      if (this.cd > 0) return; this.cd = 0.2;
      const def = ITEMS[G.spawnId];
      const h = aimPoint(60, 7);
      const yaw = G.player.yaw + Math.PI;
      const p = h.point.clone();
      if (def.dummy || def.prefab) {
        if (!h.miss) p.y = Math.max(p.y, h.point.y);
        spawnItem(def, p, { spawned: true, yaw });
      } else {
        const hh = halfHeight(def);
        if (h.miss) p.y = Math.max(p.y, 0.5);
        else p.addScaledVector(h.normal, hh + 0.05);
        spawnItem(def, p, { spawned: true, quat: def.rot ? undefined : new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw) });
      }
      FX.smoke(p, 3, 0xffffff, 0.4);
      sfx.pop();
    },
    update(dt, input) {
      cool(this, dt);
      if (input.tap('KeyT')) {
        const list = CATALOG;
        const i = list.findIndex((d) => d.id === G.spawnId);
        G.spawnId = list[(i + 1) % list.length].id;
        toast(`Spawner: ${ITEMS[G.spawnId].icon} ${ITEMS[G.spawnId].name}`);
      }
      const h = aimHit(60);
      showMarker(h ? h.point : null, 0x3a86ff);
    },
    unequip() { showMarker(null); },
  },
  {
    id: 'eraser', name: 'Eraser', icon: '🧽', color: 0xff5c8a, hint: 'Click: delete an object or dummy',
    down() {
      if (this.cd > 0) return; this.cd = 0.08;
      const h = aimHit(100);
      if (!h || !h.body.ent) return;
      const d = dummyOf(h.body);
      const p = h.point;
      if (d) d.remove();
      else removeEnt(h.body.ent);
      FX.confetti(p, 14, 4);
      sfx.pop();
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'clone', name: 'Cloner', icon: '🧬', color: 0x06d6a0, hint: 'Click: duplicate whatever you aim at',
    down() {
      if (this.cd > 0) return; this.cd = 0.25;
      const h = aimHit(100);
      if (!h || !h.body.ent) { toast('Aim at an object'); return; }
      const d = dummyOf(h.body);
      if (d) { spawnDummy(d.origin().add(new THREE.Vector3(rand(-1, 1), 0.3, rand(-1, 1))), d.variant, { spawned: true, scale: d.s / (d.cfg.s || 1) }); sfx.pop(); return; }
      const e = h.body.ent;
      if (e.kind !== 'item') return;
      const up = (halfHeight(e.def) * 2 + 0.1) * e.scale;
      spawnItem(e.def, tv(e.body.position).add(new THREE.Vector3(0, up, 0)), { spawned: true, scale: e.scale, quat: e.mesh.quaternion, gen: e.gen });
      FX.sparks(h.point, h.normal, 0x06d6a0, 10, 4);
      sfx.pop();
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'rope', name: 'Rope Tool', icon: '🪢', color: 0xe8dcc0, hint: 'Click two things to tie them together (works on the ground too)',
    down() {
      const a = pickAnchor();
      if (!a) return;
      if (!pending || pending.tool !== 'rope') { pending = { ...a, tool: 'rope' }; sfx.grab(); return; }
      if (a.body === pending.body) { toast('Pick something else'); return; }
      if (a.body.type !== CANNON.Body.DYNAMIC && pending.body.type !== CANNON.Body.DYNAMIC) { toast('One end must be an object'); pending = null; return; }
      const len = Math.max(0.5, a.point.distanceTo(pending.point));
      addRope(pending.body, pending.local, a.body, a.local, len);
      pending = null;
      sfx.grab();
    },
    update(dt, input) { twoClickUpdate(this, input, 0xe8dcc0); },
    unequip() { pending = null; if (pendStrand) pendStrand.hide(); G.toolNote = null; },
  },
  {
    id: 'weld', name: 'Weld Tool', icon: '🔩', color: 0xffa62b, hint: 'Click two things to weld them rigidly together',
    down() {
      const a = pickAnchor();
      if (!a) return;
      if (!pending || pending.tool !== 'weld') { pending = { ...a, tool: 'weld' }; sfx.grab(); return; }
      if (a.body === pending.body) { toast('Pick something else'); return; }
      if (a.body.type !== CANNON.Body.DYNAMIC && pending.body.type !== CANNON.Body.DYNAMIC) { toast('One end must be an object'); pending = null; return; }
      addWeld(pending.body, a.body);
      FX.sparks(a.point, new THREE.Vector3(0, 1, 0), 0xffa62b, 16, 5);
      FX.sparks(pending.point, new THREE.Vector3(0, 1, 0), 0xffa62b, 16, 5);
      pending = null;
      sfx.weld ? sfx.weld() : sfx.crack();
    },
    update(dt, input) { twoClickUpdate(this, input, 0xffa62b); },
    unequip() { pending = null; if (pendStrand) pendStrand.hide(); G.toolNote = null; },
  },
  {
    id: 'balloon', name: 'Balloon Tool', icon: '🎈', color: 0xff3b3b, hint: 'Click: tie a balloon on. Enough balloons lift anything!',
    down() {
      if (this.cd > 0) return; this.cd = 0.15;
      const a = pickAnchor();
      if (!a) return;
      const p = a.point.clone().add(new THREE.Vector3(rand(-0.5, 0.5), 3, rand(-0.5, 0.5)));
      const be = spawnItem('balloon', p, { spawned: true });
      be.lift = 160;
      addRope(a.body, a.local, be.body, new CANNON.Vec3(0, -0.5, 0), 2.8, 0xffffff);
      a.body.wakeUp();
      sfx.pop();
    },
    update(dt) { cool(this, dt); },
  },
  {
    id: 'thruster', name: 'Thruster', icon: '🔥', color: 0xff9f1c, hint: 'Click a surface: strap a rocket on it (6s)',
    down() {
      if (this.cd > 0) return; this.cd = 0.2;
      const h = aimHit(80);
      if (!h || !h.body.ent) { toast('Aim at an object'); return; }
      let body = h.body;
      const d = dummyOf(body);
      let pt = h.point, n = h.normal;
      if (d) { if (d.state === 'standing') d.knock(null); body = d.parts.torso.body; pt = tv(body.position); }
      if (body.type !== CANNON.Body.DYNAMIC) return;
      const e = body.ent;
      const lp = body.pointToLocalFrame(new CANNON.Vec3(pt.x, pt.y, pt.z));
      const inv = body.quaternion.inverse();
      const ld = inv.vmult(new CANNON.Vec3(-n.x, -n.y, -n.z));
      if (d) { ld.set(0, 1, 0); }
      const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 0.35, 6), new THREE.MeshStandardMaterial({ color: 0x555555, flatShading: true }));
      const s = e.scale || 1;
      nozzle.position.set(lp.x / s, lp.y / s, lp.z / s);
      nozzle.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(ld.x, ld.y, ld.z));
      nozzle.scale.setScalar(1 / s);
      e.mesh.add(nozzle);
      e.thrusters.push({ lp, ld, t: 6, power: d ? 55 : 26, mesh: nozzle });
      body.wakeUp();
      sfx.rocket();
    },
    update(dt) { cool(this, dt); },
  },
];

export { popup };

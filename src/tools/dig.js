// Digging and building with the ground's own blocks.
//  Drill: digs a round tunnel where you point (tunnels and caves keep their roof)
//  Block Builder: places one-metre blocks (dirt, stone, brick, wood...) to build with
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, rand, toast } from '../core.js';
import { carveTerrain, placeCube, cubeCenter, cubeBurst } from '../terrain.js';
import { damage } from '../items.js';
import { sfx } from '../audio.js';
import * as FX from '../fx.js';
import { aimHit, dummyOf } from './common.js';
import { bindText } from '../input.js';

const drill = {
  id: 'drill', name: 'Drill', icon: '⛏️', color: 0xffb703,
  hint: 'Hold click: dig a tunnel where you point (into hills, down, through walls). Tunnels keep their roof',
  desc: 'Digs a round tunnel about 2 m wide, up to 8 m in front of you: into a hillside, straight down, or through the wall of a building. The ground above stays up, so you can dig your own caves and secret bases.',
  acc: 0,
  held(dt) {
    G.toolSpin = 1;
    this.acc += dt;
    if (this.acc < 0.09) return;
    this.acc = 0;
    const h = aimHit(8.5);
    if (!h) return;
    const into = h.point.clone().addScaledVector(h.normal, -0.55);
    if (h.body.isTerrain) {
      const r = carveTerrain(into, 1.1, { sphere: true });
      if (r && r.removed) {
        cubeBurst(h.point, Math.min(5, 1 + (r.removed >> 2)), r.sample.length ? r.sample : [0x6b4f35], 3.5, 0.18);
        sfx.crumble(h.point);
      }
    } else if (h.body.isBuilding && G.blastBuildings) {
      G.blastBuildings(into, 0.85, { quiet: true, scorch: false });
      sfx.crumble(h.point);
    } else {
      const d = dummyOf(h.body);
      if (d) d.hurt(4, G.aim.dir.clone(), G.aim.dir.clone().multiplyScalar(2));
      else if (h.body.ent) damage(h.body.ent, 14, G.aim.dir.clone(), h.point);
      if (h.body.type === CANNON.Body.DYNAMIC) { h.body.applyImpulse(new CANNON.Vec3(G.aim.dir.x * 3, G.aim.dir.y * 3, G.aim.dir.z * 3)); h.body.wakeUp(); }
    }
    FX.sparks(h.point, h.normal, 0xffd27a, 3, 3);
    FX.smoke(h.point, 1, 0x9a8a6a, 0.35);
    if (G.recoil) G.recoil(0.25);
    G.shake = Math.max(G.shake, 0.05);
  },
  update(dt, input) { if (!input.mouseDown) { G.toolSpin = Math.max(0, (G.toolSpin || 0) - dt * 3); this.acc = 0.09; } },
  unequip() { G.toolSpin = 0; },
};

// ---------------------------------------------------------------- blocks
const MATS = [
  ['Dirt', 0x7a5a3a], ['Stone', 0x8c9096], ['Brick', 0xa8452f], ['Wood', 0xb07a3e], ['Concrete', 0xb9b5ab],
  ['Grass', 0x5fae4a], ['Sand', 0xe2cf95], ['Snow', 0xf2f6f9], ['Dark stone', 0x4a4c55], ['Gold', 0xe7b416], ['Glow', 0x7ff7ff],
];
let ghost = null;
function showGhost(p, color) {
  if (!ghost) {
    ghost = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.02, 1.02, 1.02)), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85, depthTest: false }));
    ghost.renderOrder = 10;
    G.scene.add(ghost);
  }
  ghost.visible = !!p;
  if (p) { ghost.position.copy(p); ghost.material.color.set(color); }
}
// where the next block goes: against the face you're pointing at (or in mid-air 5 m away)
function target() {
  const h = aimHit(10);
  const p = h ? h.point.clone().addScaledVector(h.normal, 0.5) : G.aim.start.clone().addScaledVector(G.aim.dir, 5);
  return cubeCenter(p.x, p.y, p.z, 2);
}
const blocks = {
  id: 'blocks', name: 'Block Builder', icon: '🧱', color: 0xc0704f, mat: 1,
  get hint() { return `Click: place a block · ${bindText('rotate', 1)}: change material (${MATS[this.mat][0]})`; },
  desc: 'Builds with one-metre blocks: walls, towers, bridges, bunkers, or seal a tunnel. They join the ground, so you can dig into them and blow them up like everything else. Switch between dirt, stone, brick, wood, concrete, sand, snow, gold and glowing blocks.',
  down() {
    if (this.cd > 0) return; this.cd = 0.13;
    const c = target();
    if (!c) return;
    // not inside yourself
    const pp = G.player.pos();
    if (Math.abs(c.x - pp.x) < 0.95 && Math.abs(c.z - pp.z) < 0.95 && c.y + 0.5 > pp.y - 0.95 && c.y - 0.5 < pp.y + 0.9) { toast('Too close: that block would be inside you'); return; }
    if (!placeCube(c.x, c.y, c.z, 2, MATS[this.mat][1])) return;
    sfx.thunk(6, c);
    FX.debris(c, MATS[this.mat][1], 4, 0.12, 2);
  },
  update(dt, input) {
    this.cd = Math.max(0, (this.cd || 0) - dt);
    G.blockColor = MATS[this.mat][1];
    if (input.tap('rotate')) { this.mat = (this.mat + 1) % MATS.length; toast(`Blocks: ${MATS[this.mat][0]}`); }
    showGhost(target(), MATS[this.mat][1]);
  },
  unequip() { showGhost(null); },
};

export const digTools = [drill, blocks];

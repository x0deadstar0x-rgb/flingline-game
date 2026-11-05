// Items: materials, catalog, spawning, damage, breaking, explosions, ropes, welds, thrusters, freeze, scale.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { G, GROUP, afterStep, later, rand, clamp, tv, popup, wakeAround, drawPos, drawQuat } from './core.js';
import { TEX } from './textures.js';
import * as FX from './fx.js';
import { sfx } from './audio.js';
import { spawnDummy, dummyFromBody } from './dummy.js';

// ---------------------------------------------------------------- materials
export const MAT = {
  wood:    { density: 60,  hp: 60,  thresh: 9,  brk: 'chunks', fr: 0.6,  re: 0.2,  buoy: 1.8, color: 0xb07a3e, min: 0.22 },
  stone:   { density: 160, hp: 140, thresh: 13, brk: 'chunks', fr: 0.75, re: 0.1,  buoy: 0.45, color: 0x8c9096, min: 0.25 },
  brick:   { density: 120, hp: 70,  thresh: 11, brk: 'chunks', fr: 0.7,  re: 0.1,  buoy: 0.5, color: 0xa8452f, min: 0.2 },
  glass:   { density: 80,  hp: 6,   thresh: 4,  brk: 'shards', fr: 0.3,  re: 0.2,  buoy: 0.8, color: 0xbfe8ff },
  crystal: { density: 90,  hp: 12,  thresh: 6,  brk: 'shards', fr: 0.3,  re: 0.3,  buoy: 0.8, color: 0x7ff7ff },
  ice:     { density: 70,  hp: 22,  thresh: 6,  brk: 'chunks', fr: 0.02, re: 0.1,  buoy: 1.4, color: 0xb8f0ff, min: 0.2 },
  metal:   { density: 300, hp: Infinity, thresh: 99, brk: 'none', fr: 0.45, re: 0.15, buoy: 0.25, color: 0x9aa4ae },
  gold:    { density: 500, hp: Infinity, thresh: 99, brk: 'none', fr: 0.5, re: 0.1, buoy: 0.2, color: 0xe7b416 },
  rubber:  { density: 30,  hp: Infinity, thresh: 99, brk: 'none', fr: 0.9, re: 0.92, buoy: 2.5, color: 0xff3b6b },
  beach:   { density: 2,   hp: Infinity, thresh: 99, brk: 'none', fr: 0.8, re: 0.85, buoy: 6, color: 0xffffff },
  jelly:   { density: 25,  hp: Infinity, thresh: 99, brk: 'none', fr: 0.9, re: 1.0, buoy: 1.2, color: 0xff4fa3 },
  plastic: { density: 25,  hp: Infinity, thresh: 99, brk: 'none', fr: 0.6, re: 0.35, buoy: 2.0, color: 0xf4f4f4 },
  foam:    { density: 3,   hp: Infinity, thresh: 99, brk: 'none', fr: 0.8, re: 0.2, buoy: 6, color: 0xe9e4ff },
  fruit:   { density: 55,  hp: 18,  thresh: 7,  brk: 'splat', fr: 0.6, re: 0.15, buoy: 1.1, color: 0x3f8f2a },
  tnt:     { density: 70,  hp: Infinity, thresh: 99, brk: 'none', fr: 0.6, re: 0.15, buoy: 1.2, color: 0xd42a1e },
  heavy:   { density: 280, hp: Infinity, thresh: 99, brk: 'none', fr: 0.4, re: 0.1, buoy: 0.3, color: 0x223355 },
  rock:    { density: 150, hp: 400, thresh: 18, brk: 'chunks', fr: 0.8, re: 0.1, buoy: 0.4, color: 0x7d8288, min: 0.4 },
  appliance:{ density: 50, hp: 150, thresh: 12, brk: 'chunks', fr: 0.5, re: 0.1, buoy: 0.9, color: 0xeef2f4, min: 0.3 },
  car:     { density: 45,  hp: 320, thresh: 14, brk: 'chunks', fr: 0.25, re: 0.15, buoy: 0.8, color: 0x2b7de9, min: 0.45 },
  balloon: { density: 0.3, hp: 1,   thresh: 9,  brk: 'pop', fr: 0.5, re: 0.6, buoy: 10, color: 0xff3b3b },
  concrete:{ density: 140, hp: 220, thresh: 14, brk: 'chunks', fr: 0.8, re: 0.1, buoy: 0.4, color: 0xa8a8a2, min: 0.45 },
  snow:    { density: 25,  hp: 8,   thresh: 5,  brk: 'splat', fr: 0.5, re: 0.05, buoy: 1.5, color: 0xf4f8fb },
  cactus:  { density: 40,  hp: 40,  thresh: 8,  brk: 'chunks', fr: 0.7, re: 0.1, buoy: 1.2, color: 0x3f8f3a, min: 0.2 },
  hay:     { density: 12,  hp: 25,  thresh: 8,  brk: 'chunks', fr: 0.9, re: 0.05, buoy: 3, color: 0xd9b64a, min: 0.3 },
  flesh:   { density: 40,  hp: Infinity, thresh: 99, brk: 'none', fr: 0.7, re: 0.1, buoy: 1.4, color: 0xf0c8a0 },
  bouncyflesh: { density: 40, hp: Infinity, thresh: 99, brk: 'none', fr: 0.7, re: 0.95, buoy: 1.4, color: 0xff7ac8 },
};

export function initMaterials() {
  for (const k in MAT) {
    G.mats[k] = new CANNON.Material(k);
    G.mats[k].friction = MAT[k].fr;
    G.mats[k].restitution = MAT[k].re;
  }
  G.mats.ground = new CANNON.Material('ground');
  G.mats.ground.friction = 0.9;
  G.mats.ground.restitution = 1.0;
  G.mats.player = new CANNON.Material('player');
  G.mats.player.friction = 0.0;
  G.mats.player.restitution = 0.0;
}

// ------------------------------------------------------------ visual material
const visCache = {};
const iceVis = new THREE.MeshStandardMaterial({ color: 0xaeeaff, transparent: true, opacity: 0.8, roughness: 0.1, metalness: 0.1, emissive: 0x1a5f7a, emissiveIntensity: 0.4, flatShading: true });

export function visMat(matKey, tex, color) {
  const key = matKey + '|' + (tex || '') + '|' + (color ?? '');
  if (visCache[key] && color !== 'random') return visCache[key];
  const o = { flatShading: true, roughness: 0.85, metalness: 0 };
  if (tex) o.map = TEX[tex]();
  const c = color === 'random' ? new THREE.Color().setHSL(Math.random(), 0.8, 0.55) : color ?? (tex ? 0xffffff : MAT[matKey]?.color ?? 0xcccccc);
  o.color = c;
  if (matKey === 'glass') Object.assign(o, { transparent: true, opacity: 0.38, roughness: 0.05, metalness: 0.2, depthWrite: false });
  if (matKey === 'ice') Object.assign(o, { transparent: true, opacity: 0.75, roughness: 0.1 });
  if (matKey === 'crystal') Object.assign(o, { transparent: true, opacity: 0.85, emissive: 0x2fd6ff, emissiveIntensity: 0.6, roughness: 0.1 });
  if (matKey === 'jelly') Object.assign(o, { transparent: true, opacity: 0.7, roughness: 0.2 });
  if (matKey === 'metal' || matKey === 'heavy') Object.assign(o, { metalness: 0.6, roughness: 0.45 });
  if (matKey === 'gold') Object.assign(o, { metalness: 0.9, roughness: 0.3 });
  if (matKey === 'balloon') Object.assign(o, { roughness: 0.3 });
  const m = new THREE.MeshStandardMaterial(o);
  if (color !== 'random') visCache[key] = m;
  return m;
}

const geoCache = {};
function geo(type, a, b, c, d) {
  const key = type + a + ',' + b + ',' + c + ',' + d;
  if (geoCache[key]) return geoCache[key];
  let g;
  if (type === 'box') g = new THREE.BoxGeometry(a, b, c);
  else if (type === 'sphere') g = new THREE.IcosahedronGeometry(a, b ?? 1);
  else if (type === 'cyl') g = new THREE.CylinderGeometry(c ?? a, a, b, 10);
  geoCache[key] = g;
  return g;
}

// ---------------------------------------------------------------- catalog
// shape: box(size [x,y,z]) | sphere(r) | cyl(r,h,rt) | compound(parts)
const B = (id, name, icon, cat, o) => ({ id, name, icon, cat, ...o });
export const CATALOG = [
  // Building
  B('crate', 'Wood Crate', '📦', 'Build', { shape: 'box', size: [1, 1, 1], mat: 'wood', tex: 'crate' }),
  B('crate_s', 'Small Crate', '📦', 'Build', { shape: 'box', size: [0.6, 0.6, 0.6], mat: 'wood', tex: 'crate' }),
  B('crate_b', 'Big Crate', '📦', 'Build', { shape: 'box', size: [1.8, 1.8, 1.8], mat: 'wood', tex: 'crate' }),
  B('plank', 'Plank', '🪵', 'Build', { shape: 'box', size: [2.4, 0.2, 0.5], mat: 'wood', tex: 'plank' }),
  B('log', 'Log', '🪵', 'Build', { shape: 'cyl', r: 0.3, h: 2.6, mat: 'wood', tex: 'log', rot: [0, 0, Math.PI / 2] }),
  B('stone', 'Stone Block', '🪨', 'Build', { shape: 'box', size: [1, 1, 1], mat: 'stone', tex: 'stone' }),
  B('slab', 'Stone Slab', '🪨', 'Build', { shape: 'box', size: [2, 0.4, 1], mat: 'stone', tex: 'stone' }),
  B('brick', 'Brick', '🧱', 'Build', { shape: 'box', size: [0.9, 0.45, 0.45], mat: 'brick', tex: 'brick' }),
  B('glass', 'Glass Pane', '🪟', 'Build', { shape: 'box', size: [2, 2, 0.12], mat: 'glass' }),
  B('glass_c', 'Glass Cube', '🧊', 'Build', { shape: 'box', size: [1, 1, 1], mat: 'glass' }),
  B('ice', 'Ice Block', '🧊', 'Build', { shape: 'box', size: [1, 1, 1], mat: 'ice' }),
  B('metal', 'Metal Block', '⬜', 'Build', { shape: 'box', size: [1, 1, 1], mat: 'metal', tex: 'metal' }),
  B('beam', 'Steel Beam', '➖', 'Build', { shape: 'box', size: [3, 0.3, 0.3], mat: 'metal', tex: 'metal' }),
  B('domino', 'Domino', '🁢', 'Build', { shape: 'box', size: [0.5, 1.2, 0.15], mat: 'plastic', color: 0xf4f4f4 }),
  B('gold', 'Gold Bar', '🥇', 'Build', { shape: 'box', size: [0.6, 0.3, 0.3], mat: 'gold', tex: 'gold' }),
  B('concrete', 'Concrete Block', '◻️', 'Build', { shape: 'box', size: [1, 1, 1], mat: 'concrete', tex: 'concrete' }),
  B('concrete_big', 'Big Concrete Block', '⬛', 'Build', { shape: 'box', size: [2, 2, 2], mat: 'concrete', tex: 'concrete' }),
  B('barrier', 'Road Barrier', '🚧', 'Build', { shape: 'compound', mat: 'concrete', parts: [
    { t: 'box', size: [1.8, 0.35, 0.7], off: [0, -0.25, 0], tex: 'concrete' },
    { t: 'box', size: [1.8, 0.55, 0.3], off: [0, 0.2, 0], tex: 'concrete' }] }),
  B('hay', 'Hay Bale', '🌾', 'Build', { shape: 'box', size: [1.2, 0.8, 0.8], mat: 'hay', tex: 'hay' }),
  // Blocks (2 m blocks keep big builds cheap: fewer bodies, still breakable into pieces)
  B('wood_big', 'Big Wood Block', '🟫', 'Blocks', { shape: 'box', size: [2, 2, 2], mat: 'wood', tex: 'plank' }),
  B('stone_big', 'Big Stone Block', '🪨', 'Blocks', { shape: 'box', size: [2, 2, 2], mat: 'stone', tex: 'stone' }),
  B('brick_big', 'Big Brick Block', '🧱', 'Blocks', { shape: 'box', size: [2, 2, 2], mat: 'brick', tex: 'brick' }),
  B('brick_long', 'Long Brick', '🧱', 'Blocks', { shape: 'box', size: [2, 1, 1], mat: 'brick', tex: 'brick' }),
  B('sand_block', 'Sandstone Block', '🟨', 'Blocks', { shape: 'box', size: [1, 1, 1], mat: 'stone', tex: 'stone', color: 0xe8cf94 }),
  B('sand_big', 'Big Sandstone Block', '🟨', 'Blocks', { shape: 'box', size: [2, 2, 2], mat: 'stone', tex: 'stone', color: 0xe8cf94 }),
  B('marble', 'Marble Block', '⬜', 'Blocks', { shape: 'box', size: [1, 1, 1], mat: 'stone', tex: 'stone', color: 0xf6f3ec }),
  B('marble_big', 'Big Marble Block', '⬜', 'Blocks', { shape: 'box', size: [2, 2, 2], mat: 'stone', tex: 'stone', color: 0xf6f3ec }),
  B('pillar', 'Marble Pillar', '🏛️', 'Blocks', { shape: 'cyl', r: 0.4, h: 3, mat: 'stone', tex: 'stone', color: 0xf6f3ec }),
  B('obsidian', 'Obsidian Block', '⬛', 'Blocks', { shape: 'box', size: [1, 1, 1], mat: 'rock', tex: 'stone', color: 0x3a2f4f }),
  B('ice_big', 'Big Ice Block', '🧊', 'Blocks', { shape: 'box', size: [2, 2, 2], mat: 'ice' }),
  B('glass_big', 'Big Glass Block', '🪟', 'Blocks', { shape: 'box', size: [2, 2, 2], mat: 'glass', hp: 40 }), // thick glass: holds a tower up, still shatters
  B('wood_wall', 'Wood Wall Panel', '🚪', 'Blocks', { shape: 'box', size: [2, 2, 0.25], mat: 'wood', tex: 'plank' }),
  B('steel_plate', 'Steel Plate', '▭', 'Blocks', { shape: 'box', size: [2, 0.15, 2], mat: 'metal', tex: 'metal' }),
  B('rubber_block', 'Bouncy Block', '🟥', 'Blocks', { shape: 'box', size: [1, 1, 1], mat: 'rubber', color: 0xff3b6b }),
  B('foam_block', 'Foam Block', '🟪', 'Blocks', { shape: 'box', size: [1, 1, 1], mat: 'foam' }),
  // Explosives
  B('tnt', 'TNT', '🧨', 'Boom', { shape: 'box', size: [0.9, 0.9, 0.9], mat: 'tnt', tex: 'tnt', explosive: { power: 1, impact: 17, hp: 1 } }),
  B('tnt_mini', 'Mini TNT', '🧨', 'Boom', { shape: 'box', size: [0.5, 0.5, 0.5], mat: 'tnt', tex: 'tnt', explosive: { power: 0.5, impact: 17, hp: 1 } }),
  B('tnt_mega', 'MEGA TNT', '💥', 'Boom', { shape: 'box', size: [1.8, 1.8, 1.8], mat: 'tnt', tex: 'tnt', explosive: { power: 2.6, impact: 15, hp: 1 } }),
  B('barrel', 'Explosive Barrel', '🛢️', 'Boom', { shape: 'cyl', r: 0.45, h: 1.2, mat: 'tnt', tex: 'barrel', explosive: { power: 0.9, impact: 11, hp: 25 } }),
  B('drum', 'Oil Drum', '🛢️', 'Boom', { shape: 'cyl', r: 0.45, h: 1.2, mat: 'tnt', tex: 'drum', explosive: { power: 0.7, impact: 14, hp: 40, fire: true } }),
  B('gas', 'Gas Canister', '🧯', 'Boom', { shape: 'cyl', r: 0.25, h: 1.0, mat: 'tnt', tex: 'gas', explosive: { power: 0.7, impact: 99, hp: 10, special: 'gas' } }),
  B('firework', 'Firework Box', '🎆', 'Boom', { shape: 'box', size: [0.4, 0.8, 0.4], mat: 'tnt', tex: 'firework', explosive: { power: 0.3, impact: 13, hp: 1, special: 'firework' } }),
  B('nuke', 'Nuke Barrel', '☢️', 'Boom', { shape: 'cyl', r: 0.6, h: 1.5, mat: 'tnt', tex: 'nuke', explosive: { power: 4, impact: 25, hp: 60 } }),
  B('mine', 'Land Mine', '⚠️', 'Boom', { shape: 'cyl', r: 0.45, h: 0.14, mat: 'metal', color: 0x4a5a3a, explosive: { power: 0.9, impact: 0.8, hp: 1, mine: true } }),
  B('c4', 'C4 Pack', '📟', 'Boom', { shape: 'box', size: [0.5, 0.2, 0.35], mat: 'tnt', color: 0xd9d1b0, explosive: { power: 1.4, impact: 40, hp: 1 } }),
  // Balls
  B('ball', 'Bouncy Ball', '🔴', 'Balls', { shape: 'sphere', r: 0.4, mat: 'rubber', color: 'random' }),
  B('beachball', 'Beach Ball', '🏐', 'Balls', { shape: 'sphere', r: 0.75, mat: 'beach', tex: 'beach' }),
  B('basketball', 'Basketball', '🏀', 'Balls', { shape: 'sphere', r: 0.33, mat: 'rubber', tex: 'basket' }),
  B('soccer', 'Soccer Ball', '⚽', 'Balls', { shape: 'sphere', r: 0.35, mat: 'rubber', tex: 'ball', massMul: 0.5 }),
  B('bowling', 'Bowling Ball', '🎳', 'Balls', { shape: 'sphere', r: 0.3, mat: 'heavy', color: 0x2a3a8a }),
  B('cannonball', 'Cannonball', '⚫', 'Balls', { shape: 'sphere', r: 0.35, mat: 'heavy', color: 0x222222 }),
  B('boulder', 'Boulder', '🪨', 'Balls', { shape: 'sphere', r: 1.2, mat: 'rock', tex: 'stone', detail: 0 }),
  // Fun
  B('balloon', 'Balloon', '🎈', 'Fun', { shape: 'sphere', r: 0.5, mat: 'balloon', color: 'random', special: 'balloon' }),
  B('duck', 'Rubber Duck', '🦆', 'Fun', { shape: 'compound', mat: 'rubber', special: 'duck', parts: [
    { t: 'sphere', r: 0.38, off: [0, 0, 0], color: 0xffd500 },
    { t: 'sphere', r: 0.24, off: [0.28, 0.36, 0], color: 0xffd500 },
    { t: 'box', size: [0.2, 0.08, 0.16], off: [0.52, 0.32, 0], color: 0xff7b00 }] }),
  B('melon', 'Watermelon', '🍉', 'Fun', { shape: 'sphere', r: 0.4, mat: 'fruit', tex: 'melon', splat: 0xff3b4a }),
  B('pumpkin', 'Pumpkin', '🎃', 'Fun', { shape: 'sphere', r: 0.45, mat: 'fruit', color: 0xff8a1c, splat: 0xffb347, detail: 0 }),
  B('present', 'Mystery Present', '🎁', 'Fun', { shape: 'box', size: [0.7, 0.7, 0.7], mat: 'wood', tex: 'present', special: 'present', hp: 25 }),
  B('crystal', 'Crystal', '💎', 'Fun', { shape: 'sphere', r: 0.45, mat: 'crystal', detail: 0 }),
  B('dice', 'Giant Dice', '🎲', 'Fun', { shape: 'box', size: [0.7, 0.7, 0.7], mat: 'plastic', tex: 'dice' }),
  B('jelly', 'Jelly Cube', '🟪', 'Fun', { shape: 'box', size: [1, 1, 1], mat: 'jelly' }),
  B('pillow', 'Feather Pillow', '🛏️', 'Fun', { shape: 'box', size: [1, 0.35, 0.7], mat: 'foam', tex: 'bed', damp: 0.6 }),
  B('cone', 'Traffic Cone', '🔺', 'Fun', { shape: 'cyl', r: 0.35, rt: 0.06, h: 0.8, mat: 'plastic', tex: 'cone' }),
  B('tire', 'Tire', '🛞', 'Fun', { shape: 'cyl', r: 0.5, h: 0.35, mat: 'rubber', tex: 'tire', rot: [Math.PI / 2, 0, 0] }),
  B('anvil', 'Anvil', '⚒️', 'Fun', { shape: 'compound', mat: 'heavy', parts: [
    { t: 'box', size: [0.7, 0.25, 0.45], off: [0, -0.25, 0], color: 0x333333 },
    { t: 'box', size: [0.35, 0.3, 0.3], off: [0, 0, 0], color: 0x333333 },
    { t: 'box', size: [1.1, 0.25, 0.4], off: [0.1, 0.27, 0], color: 0x3a3a3a }] }),
  B('bin', 'Trash Can', '🗑️', 'Fun', { shape: 'cyl', r: 0.35, h: 0.95, mat: 'metal', color: 0x3b7a4a }),
  B('snowball', 'Snowball', '⚪', 'Fun', { shape: 'sphere', r: 0.35, mat: 'snow', splat: 0xffffff }),
  B('cactus', 'Cactus', '🌵', 'Fun', { shape: 'compound', mat: 'cactus', parts: [
    { t: 'cyl', r: 0.28, h: 2.2, off: [0, 0, 0], color: 0x3f8f3a },
    { t: 'box', size: [0.7, 0.3, 0.3], off: [-0.45, 0.1, 0], color: 0x3f8f3a },
    { t: 'box', size: [0.3, 0.8, 0.3], off: [-0.7, 0.55, 0], color: 0x3f8f3a },
    { t: 'box', size: [0.6, 0.3, 0.3], off: [0.4, -0.3, 0], color: 0x3f8f3a },
    { t: 'box', size: [0.3, 0.6, 0.3], off: [0.6, 0.0, 0], color: 0x3f8f3a }] }),
  B('lamp', 'Street Lamp', '💡', 'Stuff', { shape: 'compound', mat: 'metal', parts: [
    { t: 'box', size: [0.5, 0.15, 0.5], off: [0, -2.1, 0], color: 0x2d3138 },
    { t: 'cyl', r: 0.08, h: 4.2, off: [0, 0, 0], color: 0x2d3138 },
    { t: 'box', size: [0.9, 0.12, 0.3], off: [0.35, 2.1, 0], color: 0x2d3138 },
    { t: 'box', size: [0.4, 0.12, 0.3], off: [0.7, 2.0, 0], color: 0xfff3b0 }] }),
  B('mailbox', 'Mailbox', '📮', 'Stuff', { shape: 'compound', mat: 'metal', parts: [
    { t: 'box', size: [0.12, 1.1, 0.12], off: [0, -0.35, 0], color: 0x555555 },
    { t: 'box', size: [0.4, 0.4, 0.6], off: [0, 0.35, 0], color: 0x2a5bd7 }] }),
  B('pallet', 'Pallet', '🟫', 'Build', { shape: 'compound', mat: 'wood', hp: 300, collider: [1.6, 0.3, 1.2], parts: [
    { t: 'box', size: [1.6, 0.05, 0.2], off: [0, 0.125, -0.5], tex: 'plank' },
    { t: 'box', size: [1.6, 0.05, 0.2], off: [0, 0.125, -0.25], tex: 'plank' },
    { t: 'box', size: [1.6, 0.05, 0.2], off: [0, 0.125, 0], tex: 'plank' },
    { t: 'box', size: [1.6, 0.05, 0.2], off: [0, 0.125, 0.25], tex: 'plank' },
    { t: 'box', size: [1.6, 0.05, 0.2], off: [0, 0.125, 0.5], tex: 'plank' },
    { t: 'box', size: [0.14, 0.2, 1.2], off: [-0.7, 0, 0], tex: 'log' },
    { t: 'box', size: [0.14, 0.2, 1.2], off: [0, 0, 0], tex: 'log' },
    { t: 'box', size: [0.14, 0.2, 1.2], off: [0.7, 0, 0], tex: 'log' },
    { t: 'box', size: [1.6, 0.05, 0.2], off: [0, -0.125, -0.5], tex: 'plank' },
    { t: 'box', size: [1.6, 0.05, 0.2], off: [0, -0.125, 0.5], tex: 'plank' }] }),
  B('pallet_big', 'Big Pallet', '🟫', 'Build', { shape: 'compound', mat: 'wood', hp: 300, collider: [2.4, 0.3, 1.8], massMul: 1.2, parts: [
    { t: 'box', size: [2.4, 0.05, 0.2], off: [0, 0.125, -0.75], tex: 'plank' },
    { t: 'box', size: [2.4, 0.05, 0.2], off: [0, 0.125, -0.375], tex: 'plank' },
    { t: 'box', size: [2.4, 0.05, 0.2], off: [0, 0.125, 0], tex: 'plank' },
    { t: 'box', size: [2.4, 0.05, 0.2], off: [0, 0.125, 0.375], tex: 'plank' },
    { t: 'box', size: [2.4, 0.05, 0.2], off: [0, 0.125, 0.75], tex: 'plank' },
    { t: 'box', size: [0.14, 0.2, 1.8], off: [-1.1, 0, 0], tex: 'log' },
    { t: 'box', size: [0.14, 0.2, 1.8], off: [0, 0, 0], tex: 'log' },
    { t: 'box', size: [0.14, 0.2, 1.8], off: [1.1, 0, 0], tex: 'log' },
    { t: 'box', size: [2.4, 0.05, 0.2], off: [0, -0.125, -0.75], tex: 'plank' },
    { t: 'box', size: [2.4, 0.05, 0.2], off: [0, -0.125, 0.75], tex: 'plank' }] }),
  B('pallet_stack', 'Pallet Stack (5)', '🟫', 'Prefabs', { prefab: 'pallets' }),
  // Furniture & vehicles
  B('fridge', 'Fridge', '🧊', 'Stuff', { shape: 'box', size: [0.9, 1.9, 0.8], mat: 'appliance', tex: 'fridge' }),
  B('piano', 'Piano', '🎹', 'Stuff', { shape: 'compound', mat: 'wood', special: 'piano', parts: [
    { t: 'box', size: [2, 1.3, 0.7], off: [0, 0, -0.15], tex: 'piano' },
    { t: 'box', size: [2, 0.12, 0.45], off: [0, -0.05, 0.42], tex: 'keys' },
    { t: 'box', size: [0.15, 0.6, 0.4], off: [-0.92, -0.42, 0.42], tex: 'piano' },
    { t: 'box', size: [0.15, 0.6, 0.4], off: [0.92, -0.42, 0.42], tex: 'piano' }] }),
  // seats: local spots dummies can sit on (y = top of the seat, front = local +z); hh = half height for placing on the ground
  B('bench', 'Park Bench', '🪑', 'Stuff', { shape: 'compound', mat: 'wood', hh: 0.5, seats: [[-0.45, 0.05, 0.04], [0.45, 0.05, 0.04]], parts: [
    { t: 'box', size: [1.8, 0.1, 0.5], off: [0, 0, 0], tex: 'plank' },
    { t: 'box', size: [1.8, 0.45, 0.08], off: [0, 0.3, -0.22], tex: 'plank' },
    { t: 'box', size: [0.1, 0.45, 0.5], off: [-0.8, -0.27, 0], color: 0x2d3138 },
    { t: 'box', size: [0.1, 0.45, 0.5], off: [0.8, -0.27, 0], color: 0x2d3138 }] }),
  B('couch', 'Couch', '🛋️', 'Stuff', { shape: 'compound', mat: 'wood', hh: 0.25, seats: [[-0.5, 0.25, 0.1], [0.5, 0.25, 0.1]], parts: [
    { t: 'box', size: [2.1, 0.5, 0.95], off: [0, 0, 0], tex: 'couch' },
    { t: 'box', size: [2.1, 0.65, 0.25], off: [0, 0.55, -0.35], tex: 'couch' },
    { t: 'box', size: [0.25, 0.35, 0.95], off: [-0.95, 0.42, 0], tex: 'couch' },
    { t: 'box', size: [0.25, 0.35, 0.95], off: [0.95, 0.42, 0], tex: 'couch' }] }),
  B('table', 'Table', '🪑', 'Stuff', { shape: 'compound', mat: 'wood', parts: [
    { t: 'box', size: [1.6, 0.12, 1], off: [0, 0.38, 0], tex: 'plank' },
    { t: 'box', size: [0.12, 0.7, 0.12], off: [-0.7, -0.03, -0.4], tex: 'plank' },
    { t: 'box', size: [0.12, 0.7, 0.12], off: [0.7, -0.03, -0.4], tex: 'plank' },
    { t: 'box', size: [0.12, 0.7, 0.12], off: [-0.7, -0.03, 0.4], tex: 'plank' },
    { t: 'box', size: [0.12, 0.7, 0.12], off: [0.7, -0.03, 0.4], tex: 'plank' }] }),
  B('bed', 'Bed', '🛏️', 'Stuff', { shape: 'compound', mat: 'wood', parts: [
    { t: 'box', size: [1.2, 0.3, 2.2], off: [0, 0, 0], tex: 'plank' },
    { t: 'box', size: [1.1, 0.25, 2.0], off: [0, 0.27, 0.05], tex: 'bed' },
    { t: 'box', size: [1.2, 0.8, 0.12], off: [0, 0.3, -1.05], tex: 'plank' }] }),
  B('car', 'Car', '🚗', 'Stuff', { shape: 'compound', mat: 'car', parts: [
    { t: 'box', size: [3.6, 0.7, 1.8], off: [0, 0, 0], tex: 'car' },
    { t: 'box', size: [2.0, 0.65, 1.6], off: [-0.25, 0.67, 0], tex: 'window' },
    { t: 'cyl', r: 0.38, h: 0.3, off: [1.1, -0.35, 0.85], rot: [Math.PI / 2, 0, 0], color: 0x1d1d1d },
    { t: 'cyl', r: 0.38, h: 0.3, off: [-1.1, -0.35, 0.85], rot: [Math.PI / 2, 0, 0], color: 0x1d1d1d },
    { t: 'cyl', r: 0.38, h: 0.3, off: [1.1, -0.35, -0.85], rot: [Math.PI / 2, 0, 0], color: 0x1d1d1d },
    { t: 'cyl', r: 0.38, h: 0.3, off: [-1.1, -0.35, -0.85], rot: [Math.PI / 2, 0, 0], color: 0x1d1d1d }] }),
  B('vending', 'Vending Machine', '🥤', 'Stuff', { shape: 'compound', mat: 'appliance', parts: [
    { t: 'box', size: [1.1, 2.0, 0.9], off: [0, 0, 0], color: 0xd2232a },
    { t: 'box', size: [0.7, 1.2, 0.05], off: [-0.12, 0.25, 0.46], tex: 'window' }] }),
  // People
  B('dummy', 'Dummy', '🧍', 'People', { dummy: { variant: 'normal' } }),
  B('dummy_big', 'Big Dummy', '🧍', 'People', { dummy: { variant: 'big' } }),
  B('dummy_tiny', 'Tiny Dummy', '🧒', 'People', { dummy: { variant: 'tiny' } }),
  B('dummy_robot', 'Heavy Robot', '🤖', 'People', { dummy: { variant: 'robot' } }),
  B('dummy_bouncy', 'Bouncy Dummy', '🤸', 'People', { dummy: { variant: 'bouncy' } }),
  B('dummy_zombie', 'Zombie (chases you)', '🧟', 'People', { dummy: { variant: 'zombie' } }),
  B('dummy_ninja', 'Ninja (fast)', '🥷', 'People', { dummy: { variant: 'ninja' } }),
  B('dummy_balloon', 'Balloon Dummy', '🎈', 'People', { dummy: { variant: 'balloon' } }),
  B('dummy_crowd', 'Crowd of 6', '👥', 'People', { dummy: { variant: 'crowd' } }),
  // Prefabs
  B('pf_wall', 'Brick Wall', '🧱', 'Prefabs', { prefab: 'wall' }),
  B('pf_tower', 'Crate Tower', '🏗️', 'Prefabs', { prefab: 'tower' }),
  B('pf_pyramid', 'Crate Pyramid', '🔺', 'Prefabs', { prefab: 'pyramid' }),
  B('pf_domino', 'Domino Row', '🁢', 'Prefabs', { prefab: 'domino' }),
  B('pf_jenga', 'Jenga Tower', '🗼', 'Prefabs', { prefab: 'jenga' }),
  B('pf_glassroom', 'Glass Room', '🏠', 'Prefabs', { prefab: 'glassroom' }),
  B('pf_bowling', 'Bowling Set', '🎳', 'Prefabs', { prefab: 'bowling' }),
  B('pf_tntstack', 'TNT Stack', '🧨', 'Prefabs', { prefab: 'tntstack' }),
  B('pf_minefield', 'Mine Field', '⚠️', 'Prefabs', { prefab: 'minefield' }),
  B('pf_ballpit', 'Ball Pit Drop', '🔵', 'Prefabs', { prefab: 'ballpit' }),
  B('pf_house', 'Wooden House', '🏠', 'Prefabs', { prefab: 'house' }),
  B('pf_bridge', 'Bridge', '🌉', 'Prefabs', { prefab: 'bridge' }),
  B('pf_skyscraper', 'Skyscraper', '🏢', 'Prefabs', { prefab: 'skyscraper' }),
  B('pf_fort', 'Log Fort', '🛡️', 'Prefabs', { prefab: 'fort' }),
  B('pf_arch', 'Stone Arch', '⛩️', 'Prefabs', { prefab: 'arch' }),
  B('pf_stairs', 'Crate Stairs', '🪜', 'Prefabs', { prefab: 'stairs' }),
  B('pf_igloo', 'Igloo', '🛖', 'Prefabs', { prefab: 'igloo' }),
  B('pf_snowman', 'Snowman', '⛄', 'Prefabs', { prefab: 'snowman' }),
  // Big structures (made of 2 m blocks)
  B('pf_castle', 'Stone Castle', '🏰', 'Big Builds', { prefab: 'castle' }),
  B('pf_bigtower', 'Big Brick Tower', '🗼', 'Big Builds', { prefab: 'bigtower' }),
  B('pf_bigpyramid', 'Sandstone Pyramid', '🔺', 'Big Builds', { prefab: 'bigpyramid' }),
  B('pf_greatwall', 'Great Wall', '🧱', 'Big Builds', { prefab: 'greatwall' }),
  B('pf_colosseum', 'Colosseum', '🏟️', 'Big Builds', { prefab: 'colosseum' }),
  B('pf_glasstower', 'Glass Tower', '🏙️', 'Big Builds', { prefab: 'glasstower' }),
];
export const ITEMS = Object.fromEntries(CATALOG.map((d) => [d.id, d]));
ITEMS.pin = { id: 'pin', name: 'Pin', shape: 'cyl', r: 0.13, rt: 0.08, h: 0.8, mat: 'plastic', color: 0xffffff };
ITEMS.chunk = { id: 'chunk', name: 'Chunk', shape: 'box', size: [1, 1, 1], mat: 'wood' };

// ------------------------------------------------------------------ ents
let nextId = 1;

function volumeOf(def) {
  if (def.shape === 'box') return def.size[0] * def.size[1] * def.size[2];
  if (def.shape === 'sphere') return 4.18 * def.r ** 3;
  if (def.shape === 'cyl') { const r = (def.r + (def.rt ?? def.r)) / 2; return Math.PI * r * r * def.h; }
  if (def.shape === 'compound') return def.parts.reduce((s, p) => s + volumeOf({ shape: p.t, ...p }), 0);
  return 1;
}

function makeShape(t, p, sc) {
  if (t === 'box') return new CANNON.Box(new CANNON.Vec3(p.size[0] / 2 * sc, p.size[1] / 2 * sc, p.size[2] / 2 * sc));
  if (t === 'sphere') return new CANNON.Sphere(p.r * sc);
  return new CANNON.Cylinder((p.rt ?? p.r) * sc, p.r * sc, p.h * sc, 10);
}
function makeGeo(t, p) {
  if (t === 'box') return geo('box', p.size[0], p.size[1], p.size[2]);
  if (t === 'sphere') return geo('sphere', p.r, p.detail ?? 1);
  return geo('cyl', p.r, p.h, p.rt ?? p.r);
}

function addShapes(body, def, sc) {
  if (def.collider) {
    const c = def.collider;
    body.addShape(new CANNON.Box(new CANNON.Vec3(c[0] / 2 * sc, c[1] / 2 * sc, c[2] / 2 * sc)));
  } else if (def.shape === 'compound') {
    for (const p of def.parts) {
      const q = new CANNON.Quaternion();
      if (p.rot) q.setFromEuler(p.rot[0], p.rot[1], p.rot[2]);
      body.addShape(makeShape(p.t, p, sc), new CANNON.Vec3(p.off[0] * sc, p.off[1] * sc, p.off[2] * sc), q);
    }
  } else body.addShape(makeShape(def.shape, def, sc));
}

function buildMesh(def, color) {
  if (def.shape === 'compound') {
    const g = new THREE.Group();
    for (const p of def.parts) {
      const m = new THREE.Mesh(makeGeo(p.t, p), visMat(def.mat, p.tex, p.color ?? color));
      m.position.set(...p.off);
      if (p.rot) m.rotation.set(...p.rot);
      m.castShadow = m.receiveShadow = true;
      g.add(m);
    }
    return g;
  }
  const m = new THREE.Mesh(makeGeo(def.shape, def), visMat(def.mat, def.tex, color ?? def.color));
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

// see-through preview of an item (used by the Spawner)
const ghostMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28, depthWrite: false });
export function makeGhost(def) {
  const m = buildMesh(def);
  m.traverse((o) => { if (o.isMesh) { o.material = ghostMat; o.castShadow = false; o.receiveShadow = false; } });
  return m;
}

// Create a physical item entity. opts: {quat, vel, angVel, gen, spawned, scale, color, sleep, mass}
export function createEnt(def, pos, opts = {}) {
  const mat = MAT[def.mat] || MAT.wood;
  const sc = opts.scale ?? 1;
  const mass = clamp((opts.mass ?? volumeOf(def) * mat.density * (def.massMul ?? 1)) * sc ** 3, 0.08, 3000);
  const body = new CANNON.Body({
    mass,
    material: G.mats[def.mat] || G.mats.wood,
    collisionFilterGroup: GROUP.DYN,
    linearDamping: def.damp ?? 0.02,
    angularDamping: def.damp ?? 0.08,
    allowSleep: true,
    sleepSpeedLimit: 0.25,
    sleepTimeLimit: 0.8,
  });
  addShapes(body, def, sc);
  body.position.set(pos.x, pos.y, pos.z);
  if (opts.quat) body.quaternion.set(opts.quat.x, opts.quat.y, opts.quat.z, opts.quat.w);
  else if (def.rot) body.quaternion.setFromEuler(def.rot[0], def.rot[1], def.rot[2]);
  if (opts.vel) body.velocity.set(opts.vel.x, opts.vel.y, opts.vel.z);
  if (opts.angVel) body.angularVelocity.set(opts.angVel.x, opts.angVel.y, opts.angVel.z);
  const mesh = buildMesh(def, opts.color);
  mesh.scale.setScalar(sc);
  const ent = {
    id: nextId++, kind: 'item', def, mat, body, mesh,
    hp: def.explosive ? def.explosive.hp : (def.hp ?? mat.hp),
    gen: opts.gen ?? 0, born: G.time, spawned: !!opts.spawned, scale: sc,
    frozen: 0, antigrav: 0, thrusters: [], wet: false,
  };
  body.ent = ent;
  body.addEventListener('collide', onCollide);
  G.world.addBody(body);
  G.scene.add(mesh);
  G.ents.add(ent);
  if (opts.sleep) body.sleep();
  syncEnt(ent);
  enforceLimit();
  return ent;
}

export function syncEnt(e) {
  e.mesh.position.copy(drawPos(e.body));
  e.mesh.quaternion.copy(drawQuat(e.body));
}

function enforceLimit() {
  if (G.ents.size < 650) return;
  // remove the oldest small debris first
  let oldest = null;
  for (const e of G.ents) if (e.kind === 'item' && e.gen > 0 && (!oldest || e.born < oldest.born)) oldest = e;
  if (oldest) removeEnt(oldest, true);
}

export function removeEnt(ent, quiet = false) {
  if (!ent || ent.dead) return;
  ent.dead = true;
  if (G.onRemove) G.onRemove(ent);
  for (let i = G.ropes.length - 1; i >= 0; i--) {
    const r = G.ropes[i];
    if (r.a === ent.body || r.b === ent.body) removeRope(r);
  }
  for (let i = G.welds.length - 1; i >= 0; i--) {
    const w = G.welds[i];
    if (w.bodyA === ent.body || w.bodyB === ent.body) { G.world.removeConstraint(w); G.welds.splice(i, 1); }
  }
  G.world.removeBody(ent.body);
  G.scene.remove(ent.mesh);
  G.ents.delete(ent);
  if (!quiet) wakeAround(ent.body.position, 4);
}

// ------------------------------------------------------------------ collisions
function onCollide(e) {
  const ent = e.target.ent;
  if (!ent || ent.dead) return;
  const v = Math.abs(e.contact.getImpactVelocityAlongNormal());
  const def = ent.def;
  const sp = e.target.position;
  if (v > 3.5) sfx.impact(ent.frozen ? 'ice' : def.mat, v, sp);
  if (def.special === 'duck' && v > 2) sfx.squeak(sp);
  if (def.special === 'piano' && v > 3) sfx.piano(v, sp);
  if (def.special === 'balloon' && v > 9) { afterStep(() => popBalloon(ent)); return; }
  if (def.explosive) {
    const ex = def.explosive;
    const other = e.body;
    if (ex.mine) {
      if (other && (other.type === CANNON.Body.DYNAMIC || other.isPlayer) && G.time - ent.born > 1.5) afterStep(() => detonate(ent, 0.05));
    } else if (v > ex.impact) afterStep(() => detonate(ent, 0.02));
    return;
  }
  if (ent.hp === Infinity) return;
  const thr = ent.mat.thresh * (ent.frozen ? 0.4 : 1);
  if (v > thr) {
    const om = e.body.type === CANNON.Body.DYNAMIC ? e.body.mass : 1000;
    const ratio = clamp(om / ent.body.mass, 0.3, 2.5);
    const dmg = (v - thr) * 7 * ratio;
    afterStep(() => damage(ent, dmg, null));
  }
}

// ---------------------------------------------------------------- damage
export function damage(ent, dmg, dir) {
  if (!ent || ent.dead) return;
  if (ent.kind === 'ragpart') { ent.dummy.hurt(dmg, dir); return; }
  if (ent.frozen) dmg *= 4;
  const def = ent.def;
  if (def.special === 'balloon') { popBalloon(ent); return; }
  if (def.explosive) {
    ent.hp -= dmg;
    if (ent.hp <= 0) detonate(ent, def.explosive.special ? 0 : rand(0.05, 0.15));
    return;
  }
  if (ent.hp === Infinity) {
    if (ent.frozen && dmg > 30) breakEnt(ent, dir);
    return;
  }
  ent.hp -= dmg;
  if (ent.hp <= 0) breakEnt(ent, dir);
}

const _q = new THREE.Quaternion();
export function breakEnt(ent, dir, extra = 0) {
  if (ent.dead) return;
  const def = ent.def;
  const mat = ent.frozen ? MAT.ice : ent.mat;
  const pos = tv(ent.body.position);
  const vel = tv(ent.body.velocity);
  const color = (def.splat ?? (ent.mesh.material?.color?.getHex?.() ?? mat.color));
  G.stats.destroyed++;
  if (G.debugBreaks) G.debugBreaks.push(def.id + '@' + pos.toArray().map((v) => v.toFixed(1)).join(','));
  // remember ropes / welds on this object so they can move to the pieces
  const keep = attachmentsOf(ent.body);
  removeEnt(ent);
  const brk = ent.frozen ? 'shards' : mat.brk;
  if (brk === 'shards') {
    sfx.shatter(pos);
    for (let i = 0; i < 26; i++) FX.particle({ pos: pos.clone().add(new THREE.Vector3(rand(-0.5, 0.5), rand(-0.5, 0.5), rand(-0.5, 0.5))), vel: vel.clone().add(new THREE.Vector3(rand(-4, 4), rand(0, 5), rand(-4, 4))), color: mat.color, size: rand(0.08, 0.22), life: rand(0.8, 1.5), gravity: 18, opacity: 0.8, spin: 8 });
    if (def.mat === 'crystal') FX.confetti(pos, 20, 6);
    return;
  }
  if (brk === 'splat') {
    sfx.splat(pos);
    FX.debris(pos, def.splat ?? 0xff3b4a, 24, 0.22, 7);
    FX.debris(pos, 0x2f7a22, 8, 0.15, 5);
    return;
  }
  if (['stone', 'brick', 'rock', 'concrete'].includes(def.mat)) sfx.crumble(pos); else sfx.crack(pos);
  FX.debris(pos, mat.color, 10, 0.18, 5);
  FX.smoke(pos, 2, 0x9b8b70, 0.5);
  if (def.special === 'present') {
    const pool = ['ball', 'duck', 'melon', 'balloon', 'dice', 'tnt_mini', 'firework', 'gold', 'beachball', 'crystal', 'pumpkin', 'dummy_tiny', 'jelly'];
    FX.confetti(pos, 40, 8);
    for (let i = 0; i < 3; i++) {
      const id = pool[(Math.random() * pool.length) | 0];
      spawnItem(id, pos.clone().add(new THREE.Vector3(rand(-0.5, 0.5), 0.5 + i * 0.6, rand(-0.5, 0.5))), { spawned: true, vel: new THREE.Vector3(rand(-3, 3), 5, rand(-3, 3)) });
    }
    return;
  }
  // split into smaller pieces
  const pieces = [];
  if (def.shape === 'box') {
    const sc = ent.scale;
    const s = def.size.map((x) => x * sc);
    const n = s.map((x) => (x >= (mat.min ?? 0.25) * 2 ? 2 : 1));
    if (n[0] * n[1] * n[2] > 1 && ent.gen < 3) {
      const ps = [s[0] / n[0], s[1] / n[1], s[2] / n[2]];
      _q.copy(ent.mesh.quaternion);
      for (let i = 0; i < n[0]; i++) for (let j = 0; j < n[1]; j++) for (let k = 0; k < n[2]; k++) {
        const off = new THREE.Vector3((i + 0.5) * ps[0] - s[0] / 2, (j + 0.5) * ps[1] - s[1] / 2, (k + 0.5) * ps[2] - s[2] / 2).applyQuaternion(_q);
        pieces.push({ def: { ...ITEMS.chunk, size: ps.map((x) => x * 0.98), mat: def.mat, tex: def.tex, color: def.color === 'random' ? undefined : def.color, hp: undefined }, pos: pos.clone().add(off), off });
      }
    }
  } else if (def.shape === 'compound' && ent.gen < 1) {
    const sc = ent.scale;
    _q.copy(ent.mesh.quaternion);
    for (const p of def.parts) {
      const off = new THREE.Vector3(...p.off).multiplyScalar(sc).applyQuaternion(_q);
      const pd = p.t === 'box'
        ? { ...ITEMS.chunk, size: p.size.map((x) => x * sc), mat: def.mat, tex: p.tex, color: p.color }
        : { id: 'chunk', shape: p.t, r: p.r * sc, h: (p.h ?? 1) * sc, rt: p.rt ? p.rt * sc : undefined, mat: def.mat, color: p.color, tex: p.tex };
      pieces.push({ def: pd, pos: pos.clone().add(off), off, quat: _q.clone().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(...(p.rot || [0, 0, 0])))) });
    }
  }
  const made = [];
  for (const p of pieces) {
    const out = p.off.clone().normalize().multiplyScalar(rand(1, 3) + extra);
    if (dir) out.addScaledVector(dir, 2 + extra * 0.5);
    const pe = createEnt(p.def, p.pos, {
      quat: p.quat || ent.mesh.quaternion, vel: vel.clone().add(out),
      angVel: new THREE.Vector3(rand(-3, 3), rand(-3, 3), rand(-3, 3)),
      gen: ent.gen + 1, spawned: true,
    });
    pe.hp = Math.max(8, (mat.hp === Infinity ? 100 : mat.hp) * 0.5 ** (ent.gen + 1));
    made.push(pe);
  }
  reattach(keep, made);
}

// ropes / welds attached to a body, with their world anchor points
function attachmentsOf(body) {
  const out = { ropes: [], welds: [] };
  for (const r of G.ropes) {
    if (r.a === body) out.ropes.push({ r, side: 'a', wp: tv(body.pointToWorldFrame(r.la)) });
    else if (r.b === body) out.ropes.push({ r, side: 'b', wp: tv(body.pointToWorldFrame(r.lb)) });
  }
  for (const w of G.welds) {
    if (w.bodyA === body) out.welds.push({ other: w.bodyB });
    else if (w.bodyB === body) out.welds.push({ other: w.bodyA });
  }
  return out;
}
// when something breaks, its ropes and welds hold on to the nearest piece instead of vanishing
function reattach(keep, pieces) {
  if (!pieces.length || (!keep.ropes.length && !keep.welds.length)) return;
  const nearest = (p) => {
    let best = null, bd = 1e9;
    for (const pe of pieces) { const d = tv(pe.body.position).distanceTo(p); if (d < bd) { bd = d; best = pe; } }
    return best;
  };
  for (const { r, side, wp } of keep.ropes) {
    const pe = nearest(wp);
    const other = side === 'a' ? r.b : r.a;
    if (!G.world.bodies.includes(other)) continue;
    const local = pe.body.pointToLocalFrame(new CANNON.Vec3(wp.x, wp.y, wp.z));
    if (side === 'a') addRope(pe.body, local, other, r.lb, r.len, r.strand.mat.color.getHex());
    else addRope(other, r.la, pe.body, local, r.len, r.strand.mat.color.getHex());
  }
  for (const { other } of keep.welds) {
    if (!G.world.bodies.includes(other)) continue;
    const op = tv(other.position);
    addWeld(nearest(op).body, other);
  }
}

// ---------------------------------------------------------------- explosions
export function detonate(ent, delay = 0) {
  if (!ent || ent.dead || ent.detonating) return;
  ent.detonating = true;
  const ex = ent.def.explosive;
  if (ex.special === 'gas') { startGasRocket(ent); return; }
  if (ex.special === 'firework') { startFirework(ent); return; }
  later(delay, () => {
    if (ent.dead) return;
    const pos = tv(ent.body.position);
    removeEnt(ent, true);
    explode(pos, ex.power * ent.scale ** 1.5, { fire: ex.fire });
  });
}

function startGasRocket(ent) {
  sfx.hiss(ent.body.position);
  ent.thrusters.push({ lp: new CANNON.Vec3(0, -0.5 * ent.scale, 0), ld: new CANNON.Vec3(0, 1, 0), t: 1.8, power: 45, wobble: true, end: () => {
    if (ent.dead) return;
    const pos = tv(ent.body.position); removeEnt(ent, true); explode(pos, 0.8);
  } });
  ent.body.angularVelocity.set(rand(-4, 4), rand(-4, 4), rand(-4, 4));
  ent.body.wakeUp();
}

function startFirework(ent) {
  const pos = tv(ent.body.position);
  removeEnt(ent, true);
  launchFireworks(pos, 5);
}

export function launchFireworks(pos, n = 1) {
  for (let i = 0; i < n; i++) {
    later(i * 0.18, () => {
      const p = pos.clone();
      const v = new THREE.Vector3(rand(-4, 4), rand(22, 30), rand(-4, 4));
      sfx.whistle(1.2, p);
      G.projectiles.push({
        pos: p, vel: v, t: 0, life: rand(0.9, 1.3), gravity: 6,
        trail: (pp) => FX.particle({ pos: pp, vel: new THREE.Vector3(rand(-1, 1), -2, rand(-1, 1)), color: 0xffd27a, size: 0.12, life: 0.5, glow: true, add: true, gravity: 2 }),
        end: (pp) => { FX.confetti(pp, 70, 14); sfx.pop(pp); explode(pp, 0.25, { quiet: true }); },
      });
    });
  }
}

let chainCount = 0, lastExplTime = -9;
export function explode(pos, power = 1, opts = {}) {
  const R = 7 * Math.pow(power, 0.62);
  const V = 22 * Math.pow(power, 0.35);
  const vis = Math.min(Math.pow(power, 0.55), 3.2);
  FX.explosionFx(pos, vis);
  if (opts.fire) for (let i = 0; i < 18; i++) FX.particle({ pos, vel: new THREE.Vector3(rand(-8, 8), rand(5, 14), rand(-8, 8)), color: 0xff7a1a, size: 0.3, life: rand(1.5, 2.5), glow: true, add: true, gravity: 14, drag: 0.2 });
  if (pos.y < G.waterY + 1.5) FX.splash(pos, 30, 1.6);
  if (G.crater && !opts.quiet) G.crater(pos, power);
  sfx.explosion(Math.min(1.5, power), pos);
  if (power >= 3.5) { FX.flashAt(pos, 400, 0xffffff); document.getElementById('whiteflash').classList.add('on'); setTimeout(() => document.getElementById('whiteflash').classList.remove('on'), 120); }
  const pd = G.player ? G.player.pos().distanceTo(pos) : 99;
  G.shake = Math.min(2.5, G.shake + Math.max(0, power * 1.4 - pd / (18 * Math.sqrt(power))));
  G.stats.booms++;
  G.lastBoom.pos.copy(pos); G.lastBoom.time = G.time;
  if (G.time - lastExplTime < 0.7) { chainCount++; if (chainCount >= 2) popup(`CHAIN x${chainCount + 1}!`, pos.clone().add(new THREE.Vector3(0, 2, 0)), '#ffcf3a', 26 + chainCount * 2); }
  else chainCount = 0;
  lastExplTime = G.time;

  // knock standing dummies first so their ragdoll parts get flung too
  for (const d of [...G.dummies]) {
    if (d.state === 'standing' && d.origin().distanceTo(pos) < R * 1.1) d.knock(null);
  }
  const hitEnts = [];
  const tmp = new THREE.Vector3();
  for (const b of [...G.world.bodies]) {
    const e = b.ent;
    if (e && e.frozen) unfreeze(e);
    if (b.type !== CANNON.Body.DYNAMIC) continue;
    tmp.set(b.position.x - pos.x, b.position.y - pos.y, b.position.z - pos.z);
    const d = tmp.length();
    if (d > R) continue;
    const f = 1 - d / R;
    tmp.y += 0.6;
    tmp.normalize();
    const mf = clamp(Math.pow(25 / b.mass, 0.3), 0.2, 1.5);
    const dv = V * f * mf;
    b.velocity.x += tmp.x * dv; b.velocity.y += tmp.y * dv; b.velocity.z += tmp.z * dv;
    b.angularVelocity.x += rand(-8, 8) * f; b.angularVelocity.y += rand(-8, 8) * f; b.angularVelocity.z += rand(-8, 8) * f;
    b.wakeUp();
    if (e && !e.dead) hitEnts.push([e, f, tmp.clone()]);
  }
  if (G.player && pd < R) {
    const f = 1 - pd / R;
    const dir = G.player.pos().sub(pos); dir.y += 0.8; dir.normalize();
    G.player.fling(dir.multiplyScalar(V * f * 0.9));
  }
  for (const [e, f, dir] of hitEnts) {
    if (e.dead) continue;
    if ((opts.fire && f > 0.15) || (f > 0.5 && Math.random() < 0.3 && !opts.quiet)) ignite(e, 8);
    if (e.kind === 'ragpart') { if (e.partName === 'torso') e.dummy.hurt(f * 115 * Math.sqrt(power), dir); continue; }
    if (e.def.explosive) { detonate(e, rand(0.08, 0.22)); continue; }
    const dmg = 140 * Math.sqrt(power) * f;
    if (e.hp !== Infinity && e.hp - dmg <= 0) breakEnt(e, dir, V * f * 0.4);
    else damage(e, dmg, dir);
  }
  wakeAround(pos, R * 1.5);
}

// ---------------------------------------------------------------- balloons / ropes / welds
export function popBalloon(ent) {
  if (ent.dead) return;
  sfx.pop(ent.body.position);
  FX.debris(tv(ent.body.position), ent.mesh.material.color.getHex(), 10, 0.12, 4);
  removeEnt(ent, true);
}

const ropeGeo = new THREE.CylinderGeometry(1, 1, 1, 4, 1, true);
ropeGeo.translate(0, 0.5, 0);
export class Strand {
  constructor(color = 0xffffff, radius = 0.025, n = 12, glow = false) {
    this.n = n; this.radius = radius;
    this.mat = glow ? new THREE.MeshBasicMaterial({ color }) : new THREE.MeshStandardMaterial({ color, roughness: 0.9 });
    this.segs = [];
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(ropeGeo, this.mat);
      m.frustumCulled = false; m.castShadow = !glow;
      G.scene.add(m); this.segs.push(m);
    }
    this.pts = Array.from({ length: n + 1 }, () => new THREE.Vector3());
  }
  // draw a sagging curve from a to b. sag = metres of droop at the middle, wob = lateral wobble
  update(a, b, sag = 0, wob = null) {
    const n = this.n;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const p = this.pts[i].copy(a).lerp(b, t);
      const s = 4 * t * (1 - t);
      p.y -= sag * s;
      if (wob) p.addScaledVector(wob, Math.sin(t * Math.PI * 3 + G.time * 30) * s);
    }
    const up = new THREE.Vector3(0, 1, 0), d = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      const m = this.segs[i];
      d.subVectors(this.pts[i + 1], this.pts[i]);
      const len = d.length() + 0.001;
      m.position.copy(this.pts[i]);
      m.quaternion.setFromUnitVectors(up, d.divideScalar(len));
      m.scale.set(this.radius, len, this.radius);
      m.visible = true;
    }
  }
  setColor(c) { this.mat.color.set(c); }
  hide() { for (const m of this.segs) m.visible = false; }
  dispose() { for (const m of this.segs) G.scene.remove(m); }
}

// rope between body a (local point la) and body b (local point lb), max length len
export function addRope(a, la, b, lb, len, color = 0xe8dcc0) {
  const r = { a, la, b, lb, len, strand: new Strand(color, 0.03, 10) };
  G.ropes.push(r);
  return r;
}
export function removeRope(r) {
  const i = G.ropes.indexOf(r);
  if (i >= 0) G.ropes.splice(i, 1);
  r.strand.dispose();
}

export function addWeld(a, b) {
  const c = new CANNON.LockConstraint(a, b, { maxForce: 1e5 });
  c.collideConnected = false;
  G.world.addConstraint(c);
  G.welds.push(c);
  a.wakeUp(); b.wakeUp();
  return c;
}

const _pa = new CANNON.Vec3(), _pb = new CANNON.Vec3(), _va = new CANNON.Vec3(), _vb = new CANNON.Vec3(), _f = new CANNON.Vec3(), _r = new CANNON.Vec3();
function velAt(body, wp, out) {
  wp.vsub(body.position, _r);
  body.angularVelocity.cross(_r, out);
  out.vadd(body.velocity, out);
  return out;
}
// Called on every physics sub-step.
const ROPE_SWING_DAMP = 0.35;   // 1/s, sideways damping of a taut rope
const BALLOON_ACC = 2.2;        // m/s² upward for a free balloon
const BALLOON_VMAX = 3.5;       // free balloon rise speed (m/s)
const BALLOON_VMAX_TIED = 5;    // balloons lifting something
const BALLOON_DRAG = Math.exp(-0.9 / 60);
const tiedSet = new Set();
export function physicsForces() {
  const g = 9.82;
  tiedSet.clear();
  for (const r of G.ropes) { tiedSet.add(r.a); tiedSet.add(r.b); }
  for (let i = G.ropes.length - 1; i >= 0; i--) {
    const r = G.ropes[i];
    r.a.pointToWorldFrame(r.la, _pa);
    r.b.pointToWorldFrame(r.lb, _pb);
    _pb.vsub(_pa, _f);
    const d = _f.length();
    if (d > r.len * 5 + 10) { removeRope(r); continue; }
    if (d <= r.len || d < 1e-4) continue;
    _f.scale(1 / d, _f);
    velAt(r.a, _pa, _va); velAt(r.b, _pb, _vb);
    const vrel = (_vb.x - _va.x) * _f.x + (_vb.y - _va.y) * _f.y + (_vb.z - _va.z) * _f.z;
    const ma = r.a.type === CANNON.Body.DYNAMIC ? r.a.mass : 1e9;
    const mb = r.b.type === CANNON.Body.DYNAMIC ? r.b.mass : 1e9;
    const me = Math.min(ma, mb, 400);
    const F = Math.min(me * (300 * (d - r.len) + 25 * vrel), me * 600);
    if (F <= 0) continue;
    // taut rope: also damp sideways swinging a little so things don't orbit forever
    const tx = (_vb.x - _va.x) - _f.x * vrel, ty = (_vb.y - _va.y) - _f.y * vrel, tz = (_vb.z - _va.z) - _f.z * vrel;
    const C = me * ROPE_SWING_DAMP;
    if (ma < 1e9) { r.a.applyForce(new CANNON.Vec3(_f.x * F + tx * C, _f.y * F + ty * C, _f.z * F + tz * C), _pa.vsub(r.a.position)); r.a.wakeUp(); }
    if (mb < 1e9) { r.b.applyForce(new CANNON.Vec3(-_f.x * F - tx * C, -_f.y * F - ty * C, -_f.z * F - tz * C), _pb.vsub(r.b.position)); r.b.wakeUp(); }
  }
  for (const e of G.ents) {
    const b = e.body;
    if (b.type !== CANNON.Body.DYNAMIC) continue;
    // buoyancy + water drag
    const depth = G.waterY - b.position.y;
    if (depth > -0.3) {
      const sub = clamp((depth + 0.3) / 0.8, 0, 1);
      const buoy = e.kind === 'ragpart' ? e.dummy.buoy : (e.frozen ? 1.4 : e.mat.buoy);
      b.applyForce(new CANNON.Vec3(-b.position.x * 0.02 * b.mass, b.mass * g * buoy * sub, -b.position.z * 0.02 * b.mass));
      b.velocity.scale(1 - 0.02 * sub, b.velocity);
      b.angularVelocity.scale(1 - 0.02 * sub, b.angularVelocity);
    }
    if (e.def && e.def.special === 'balloon') {
      // a free balloon drifts up gently; a tied one pulls with its full lift.
      // Lift fades out near the top speed so nothing rockets into the sky.
      const tied = tiedSet.has(b);
      const lift = tied ? (e.lift ?? 14) : Math.min(e.lift ?? 14, b.mass * BALLOON_ACC);
      const vmax = tied ? BALLOON_VMAX_TIED : BALLOON_VMAX;
      const fade = clamp((vmax - b.velocity.y) / 1.5, 0, 1);
      b.applyForce(new CANNON.Vec3(0, b.mass * g + lift * fade, 0));
      // air drag (exact per step so it is stable for very light balloons)
      b.velocity.scale(BALLOON_DRAG, b.velocity);
      b.angularVelocity.scale(0.97, b.angularVelocity);
    }
    if (e.antigrav > 0) {
      b.applyForce(new CANNON.Vec3(0, b.mass * g * 1.12, 0));
      b.velocity.scale(0.99, b.velocity);
    }
    for (const t of e.thrusters) {
      const wd = b.quaternion.vmult(t.ld);
      const F = Math.min(b.mass * t.power, 30000);
      b.applyForce(new CANNON.Vec3(wd.x * F, wd.y * F, wd.z * F), b.quaternion.vmult(t.lp));
      if (t.wobble) { b.angularVelocity.x += rand(-0.4, 0.4); b.angularVelocity.z += rand(-0.4, 0.4); }
    }
  }
  if (G.extraForces) for (const f of G.extraForces) f();
}

// per-frame updates (timers like thrusters, antigrav, freeze, fuses)
export function updateEnts(dt) {
  for (const e of [...G.ents]) {
    if (e.dead) continue;
    const b = e.body;
    if (!Number.isFinite(b.position.x + b.position.y + b.position.z)) { if (e.kind === 'ragpart') e.dummy.respawn(); else removeEnt(e, true); continue; }
    if (b.position.y < (G.killY ?? -30) - 15 || Math.abs(b.position.x) > 400 || Math.abs(b.position.z) > 400) {
      if (e.kind === 'ragpart') e.dummy.respawn(); else removeEnt(e, true);
      continue;
    }
    // sleeping bodies don't move: skip syncing them (keeps idle cost near zero)
    if (e.kind !== 'ragpart' && b.sleepState !== CANNON.Body.SLEEPING && b.type === CANNON.Body.DYNAMIC) syncEnt(e);
    if (e.burn > 0) updateBurn(e, dt);
    // splash when entering water
    const inW = b.position.y < G.waterY;
    if (inW && !e.wet && b.velocity.length() > 4) { FX.splash(tv(b.position), 10, clamp(b.mass / 40, 0.5, 1.6)); sfx.splash(b.position); }
    e.wet = inW;
    if (e.frozen > 0) { e.frozen -= dt; if (e.frozen <= 0) unfreeze(e); }
    if (e.antigrav > 0) {
      e.antigrav -= dt;
      if (Math.random() < 0.3) FX.particle({ pos: tv(b.position), vel: new THREE.Vector3(rand(-1, 1), -1, rand(-1, 1)), color: 0xc77dff, size: 0.12, life: 0.6, glow: true, add: true, gravity: 0 });
    }
    for (let i = e.thrusters.length - 1; i >= 0; i--) {
      const t = e.thrusters[i];
      t.t -= dt;
      const wp = tv(b.pointToWorldFrame(t.lp));
      const wd = tv(b.quaternion.vmult(t.ld));
      if (Math.random() < 0.8) FX.particle({ pos: wp, vel: wd.clone().multiplyScalar(-rand(6, 10)), color: Math.random() < 0.5 ? 0xffb347 : 0xff5e1a, size: rand(0.15, 0.3), life: 0.3, glow: true, add: true, gravity: 0, drag: 2 });
      if (t.mesh) t.mesh.visible = true;
      if (t.t <= 0) { e.thrusters.splice(i, 1); if (t.mesh) e.mesh.remove(t.mesh); t.end && t.end(); }
    }
    if (e.fuse !== undefined && e.fuse !== null) {
      e.fuse -= dt;
      const blink = (Math.sin(G.time * (e.fuse < 1 ? 40 : 18)) > 0);
      e.mesh.scale.setScalar(e.scale * (blink ? 1.08 : 1));
      if (Math.random() < 0.5) FX.particle({ pos: tv(b.position).add(new THREE.Vector3(0, 0.5 * e.scale, 0)), vel: new THREE.Vector3(rand(-1, 1), 2, rand(-1, 1)), color: 0xffe08a, size: 0.08, life: 0.3, glow: true, add: true, gravity: 2 });
      sfx.fuse(b.position);
      if (e.fuse <= 0) { e.fuse = null; if (e.onFuse) e.onFuse(); else detonate(e, 0); }
    }
    if (e.def.special === 'balloon' && b.position.y > 120) popBalloon(e);
    if (e.gen >= 2 && G.time - e.born > 25) {
      const k = (G.time - e.born - 25);
      e.mesh.scale.setScalar(e.scale * Math.max(0.01, 1 - k));
      if (k >= 1) removeEnt(e, true);
    }
    if (e.update) e.update(dt);
  }
  for (const r of G.ropes) {
    const pa = tv(r.a.pointToWorldFrame(r.la));
    const pb = tv(r.b.pointToWorldFrame(r.lb));
    const d = pa.distanceTo(pb);
    r.strand.update(pa, pb, Math.max(0, (r.len - d) * 0.5));
  }
}

// ---------------------------------------------------------------- freeze / scale / paint
export function freeze(ent, dur = 12) {
  if (ent.kind === 'ragpart') { ent.dummy.freeze(dur); return; }
  if (ent.frozen) { ent.frozen = dur; return; }
  ent.frozen = dur;
  ent.origMass = ent.body.mass;
  ent.body.type = CANNON.Body.STATIC;
  ent.body.mass = 0;
  ent.body.updateMassProperties();
  ent.body.velocity.setZero(); ent.body.angularVelocity.setZero();
  ent.mesh.traverse((m) => { if (m.isMesh) { m.userData.orig = m.material; m.material = iceVis; } });
  FX.sparks(tv(ent.body.position), new THREE.Vector3(0, 1, 0), 0xbff4ff, 12, 4);
}
export function unfreeze(ent) {
  if (!ent.frozen && ent.body.type === CANNON.Body.DYNAMIC) return;
  if (ent.kind === 'ragpart') { ent.dummy.unfreeze(); return; }
  ent.frozen = 0;
  ent.body.type = CANNON.Body.DYNAMIC;
  ent.body.mass = ent.origMass || 10;
  ent.body.updateMassProperties();
  ent.body.wakeUp();
  ent.mesh.traverse((m) => { if (m.isMesh && m.userData.orig) { m.material = m.userData.orig; m.userData.orig = null; } });
}

export function scaleEnt(ent, f) {
  if (ent.kind !== 'item') return false;
  const ns = clamp(ent.scale * f, 0.25, 6);
  if (Math.abs(ns - ent.scale) < 0.01) return false;
  const real = ns / ent.scale;
  const b = ent.body;
  while (b.shapes.length) b.removeShape(b.shapes[0]);
  addShapes(b, ent.def, ns);
  if (b.type === CANNON.Body.DYNAMIC) { b.mass = clamp(b.mass * real ** 3, 0.08, 5000); }
  else ent.origMass = clamp((ent.origMass || 10) * real ** 3, 0.08, 5000);
  b.updateMassProperties();
  b.aabbNeedsUpdate = true;
  b.wakeUp();
  ent.scale = ns;
  ent.mesh.scale.setScalar(ns);
  if (real > 1) b.position.y += 0.3 * real;
  return true;
}

export function paint(ent) {
  const c = new THREE.Color().setHSL(Math.random(), 0.85, 0.55);
  ent.mesh.traverse((m) => {
    if (!m.isMesh) return;
    m.material = m.material.clone();
    m.material.color.copy(c);
  });
}

// ---------------------------------------------------------------- spawning
export function spawnItem(id, pos, opts = {}) {
  const def = typeof id === 'string' ? ITEMS[id] : id;
  if (!def) return null;
  if (def.dummy) return spawnDummyVariant(def.dummy.variant, pos, opts);
  if (def.prefab) return buildPrefab(def.prefab, pos, opts.yaw ?? 0, opts.spawned);
  const p = pos.clone();
  if (opts.onGround) p.y += halfHeight(def) * (opts.scale ?? 1) + 0.02;
  return createEnt(def, p, opts);
}

export function halfHeight(def) {
  if (def.hh) return def.hh;
  if (def.shape === 'box') {
    if (def.rot) return Math.max(...def.size) / 2;
    return def.size[1] / 2;
  }
  if (def.shape === 'sphere') return def.r;
  if (def.shape === 'cyl') return def.rot ? def.r : def.h / 2;
  if (def.collider) return def.collider[1] / 2;
  if (def.shape === 'compound') return 0.9;
  return 0.5;
}

function spawnDummyVariant(v, pos, opts) {
  if (v === 'crowd') {
    for (let i = 0; i < 6; i++) spawnDummy(pos.clone().add(new THREE.Vector3(rand(-2.5, 2.5), 0, rand(-2.5, 2.5))), 'normal', opts);
    return null;
  }
  return spawnDummy(pos, v, opts);
}

function yawed(base, x, y, z, yaw) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  return new THREE.Vector3(base.x + x * c + z * s, base.y + y, base.z - x * s + z * c);
}
function yq(yaw) { return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw); }

// Big builds. put(id, x, y, z, extra): local x = right, local +z = away from you, y = up.
// 2 m blocks sit on layers at y = 1 + layer * 2.004 (tiny gaps so the stack settles calmly).
const LY = (l) => 1 + l * 2.004;
const BIG = {
  castle(put, yaw) {
    const n = 7, h = (n - 1) / 2, Z = 10; // 7 x 7 blocks around, centred 10 m in front of you
    for (let l = 0; l < 3; l++) for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      if (i > 0 && i < n - 1 && j > 0 && j < n - 1) continue; // hollow inside
      if (j === 0 && i === 3) continue; // gate in the wall facing you
      put('stone_big', (i - h) * 2.01, LY(l), Z + (j - h) * 2.01);
    }
    // corner towers
    for (const [i, j] of [[0, 0], [n - 1, 0], [0, n - 1], [n - 1, n - 1]]) for (let l = 3; l < 5; l++) put('stone_big', (i - h) * 2.01, LY(l), Z + (j - h) * 2.01);
    // battlements
    for (let i = 1; i < n - 1; i += 2) for (const j of [0, n - 1]) {
      if (!(j === 0 && i === 3)) put('stone', (i - h) * 2.01, LY(3) - 0.5, Z + (j - h) * 2.01);
      put('stone', (j - h) * 2.01, LY(3) - 0.5, Z + (i - h) * 2.01);
    }
  },
  bigtower(put) {
    const Z = 5;
    for (let l = 0; l < 9; l++) for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue;
      put('brick_big', (i - 1) * 2.01, LY(l), Z + (j - 1) * 2.01);
    }
  },
  bigpyramid(put) {
    const Z = 7;
    for (let l = 0; l < 5; l++) {
      const m = 5 - l, h = (m - 1) / 2;
      for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) put('sand_big', (i - h) * 2.01, LY(l), Z + (j - h) * 2.01);
    }
  },
  greatwall(put) {
    const Z = 5, n = 10, h = (n - 1) / 2;
    for (let l = 0; l < 3; l++) for (let i = 0; i < n; i++) put('stone_big', (i - h) * 2.01, LY(l), Z);
    for (let i = 0; i < n; i += 2) put('stone', (i - h) * 2.01, LY(3) - 0.5, Z);
  },
  colosseum(put, yaw) {
    // R is wide enough that neighbouring blocks don't touch at their inner corners
    const Z = 13, R = 9.6, n = 26;
    for (let l = 0; l < 3; l++) for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2;
      if (i === 0 || i === n / 2) continue; // two entrances
      put(l === 2 ? 'marble_big' : 'sand_big', Math.sin(a) * R, LY(l), Z - Math.cos(a) * R, { quat: yq(yaw - a) });
    }
  },
  glasstower(put) {
    const Z = 4;
    for (let f = 0; f < 4; f++) {
      const y0 = f * (4.008 + 0.152);
      for (let l = 0; l < 2; l++) for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) put('glass_big', (i - 0.5) * 2.01, y0 + LY(l), Z + (j - 0.5) * 2.01);
      for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) put('steel_plate', (i - 0.5) * 2.01, y0 + 4.008 + 0.075, Z + (j - 0.5) * 2.01);
    }
  },
};

export const isBigBuild = (kind) => !!BIG[kind];

// Dry run of a big build: where every block would go (no bodies made).
function planBig(kind, pos, yaw) {
  const out = [];
  const inv = yq(-yaw);
  BIG[kind]((id, x, y, z, extra = {}) => {
    const d = ITEMS[id];
    const half = d.size ? Math.max(d.size[0], d.size[2]) / 2 : d.r;
    // local rotation (the builders pass world rotations that already include yaw)
    const lq = extra.quat ? inv.clone().multiply(extra.quat) : null;
    out.push({ id, x, y, z, lq, half, hy: d.size ? d.size[1] / 2 : d.h / 2, w: yawed(pos, x, y, z, yaw) });
  }, yaw, pos, {});
  return out;
}

// see-through copy of a whole big build, in local space (set the group's
// position to the base point and rotation.y to the yaw to place it)
const bigGhostMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16, depthWrite: false });
export function makeBigGhost(kind) {
  const g = new THREE.Group();
  for (const b of planBig(kind, new THREE.Vector3(), 0)) {
    const m = new THREE.Mesh(makeGeo(ITEMS[b.id].shape, ITEMS[b.id]), bigGhostMat);
    m.position.set(b.x, b.y, b.z);
    if (b.lq) m.quaternion.copy(b.lq);
    g.add(m);
  }
  g.userData.mat = bigGhostMat;
  return g;
}

// Can this big build go here? Finds the ground height under it and checks for
// map objects (trees, walls, ramps...) that would sit inside its blocks.
// Returns { ok, reason, y, corners } — corners = footprint outline in world space.
export function checkBig(kind, pos, yaw) {
  const plan = planBig(kind, pos, yaw);
  let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
  for (const b of plan) { x0 = Math.min(x0, b.x - b.half); x1 = Math.max(x1, b.x + b.half); z0 = Math.min(z0, b.z - b.half); z1 = Math.max(z1, b.z + b.half); }
  const corners = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].map(([x, z]) => yawed(pos, x, 0, z, yaw));
  // ground under the footprint
  let lo = 1e9, hi = -1e9, miss = 0, hiProp = false;
  const N = 5;
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const w = yawed(pos, x0 + (x1 - x0) * i / (N - 1), 0, z0 + (z1 - z0) * j / (N - 1), yaw);
    const h = raycastStatic(new THREE.Vector3(w.x, pos.y + 25, w.z), new THREE.Vector3(w.x, pos.y - 60, w.z));
    if (!h || h.point.y < G.waterY) { miss++; continue; }
    lo = Math.min(lo, h.point.y);
    if (h.point.y > hi) { hi = h.point.y; hiProp = !h.body.shapes.some((sh) => sh instanceof CANNON.Heightfield); }
  }
  const res = { ok: true, reason: '', y: hi > -1e8 ? hi : pos.y, corners };
  for (const c of corners) c.y = res.y + 0.06;
  if (miss > 2) return { ...res, ok: false, reason: 'Needs solid ground (no gaps or water)' };
  if (hi - lo > 1.3) return { ...res, ok: false, reason: hiProp ? 'Something is in the way — find clear ground' : 'Ground too bumpy here — find a flatter spot' };
  // map objects inside the blocks (the ground itself is fine)
  const base = new THREE.Vector3(pos.x, res.y, pos.z);
  const boxes = planBig(kind, base, yaw).map((b) => ({ x: b.w.x, y: b.w.y, z: b.w.z, r: b.half * 0.9, hy: b.hy * 0.9 }));
  for (const body of G.world.bodies) {
    const big = body.type !== CANNON.Body.DYNAMIC ? !body.shapes.some((sh) => sh instanceof CANNON.Heightfield) : body.mass > 250; // heavy things (incl. blocks of another big build)
    if (!big || body.isPlayer) continue;
    if (body.aabbNeedsUpdate) body.updateAABB();
    const a = body.aabb;
    // skip flat floor slabs we are standing on top of
    if (a.upperBound.y <= res.y + 0.15) continue;
    for (const b of boxes) {
      if (a.lowerBound.x < b.x + b.r && a.upperBound.x > b.x - b.r && a.lowerBound.z < b.z + b.r && a.upperBound.z > b.z - b.r && a.lowerBound.y < b.y + b.hy && a.upperBound.y > b.y - b.hy) {
        return { ...res, ok: false, reason: 'Something is in the way — find clear ground' };
      }
    }
  }
  return res;
}
const _rrS = new CANNON.RaycastResult();
function raycastStatic(from, to) {
  _rrS.reset();
  G.world.raycastClosest(new CANNON.Vec3(from.x, from.y, from.z), new CANNON.Vec3(to.x, to.y, to.z), { collisionFilterMask: GROUP.STATIC, skipBackfaces: true }, _rrS);
  return _rrS.hasHit ? { point: tv(_rrS.hitPointWorld), body: _rrS.body } : null;
}

export function buildPrefab(kind, pos, yaw = 0, spawned = true, sleep = false) {
  const o = { spawned, sleep, quat: yq(yaw) };
  const put = (id, x, y, z, extra = {}) => createEnt(ITEMS[id], yawed(pos, x, y, z, yaw), { ...o, ...extra });
  if (kind === 'wall') {
    for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) put('brick', (c - 2.5) * 0.92 + (r % 2) * 0.46 - 0.23, 0.225 + r * 0.455, 0);
  } else if (kind === 'tower') {
    for (let i = 0; i < 6; i++) put('crate', 0, 0.5 + i * 1.001, 0);
  } else if (kind === 'pyramid') {
    let y = 0;
    for (let l = 4; l >= 1; l--) {
      for (let i = 0; i < l; i++) for (let j = 0; j < l; j++) put('crate', (i - (l - 1) / 2) * 1.01, 0.5 + y, (j - (l - 1) / 2) * 1.01);
      y += 1.001;
    }
  } else if (kind === 'domino') {
    for (let i = 0; i < 16; i++) put('domino', 0, 0.6, -1.5 - i * 0.75);
  } else if (kind === 'jenga') {
    for (let l = 0; l < 14; l++) {
      for (let i = -1; i <= 1; i++) {
        if (l % 2) put('plank', i * 0.52, 0.1 + l * 0.201, 0, { quat: yq(yaw + Math.PI / 2) });
        else put('plank', 0, 0.1 + l * 0.201, i * 0.52);
      }
    }
  } else if (kind === 'glassroom') {
    put('glass', 0, 1, -1.06); put('glass', 0, 1, 1.06);
    put('glass', -1.06, 1, 0, { quat: yq(yaw + Math.PI / 2) }); put('glass', 1.06, 1, 0, { quat: yq(yaw + Math.PI / 2) });
    const roof = { ...ITEMS.slab, size: [2.3, 0.3, 1.16] };
    createEnt(roof, yawed(pos, 0, 2.16, -0.58, yaw), o); createEnt(roof, yawed(pos, 0, 2.16, 0.58, yaw), o);
    spawnDummy(yawed(pos, 0, 0, 0, yaw), 'normal', { spawned });
  } else if (kind === 'bowling') {
    let k = 0;
    for (let r = 0; r < 4; r++) for (let i = 0; i <= r; i++) { put('pin', (i - r / 2) * 0.45, 0.41, -6 - r * 0.42); k++; }
    put('bowling', 0, 0.3, 2);
  } else if (kind === 'tntstack') {
    for (let l = 0; l < 3; l++) for (let i = 0; i < 3 - l; i++) for (let j = 0; j < 3 - l; j++) put('tnt', (i - (2 - l) / 2) * 0.92, 0.45 + l * 0.91, (j - (2 - l) / 2) * 0.92);
  } else if (kind === 'minefield') {
    for (let i = 0; i < 12; i++) put('mine', rand(-6, 6), 0.08, rand(-6, 6) - 8);
  } else if (kind === 'house') {
    const W = (sx, sy, sz) => ({ ...ITEMS.chunk, size: [sx, sy, sz], mat: 'wood', tex: 'plank' });
    createEnt(W(1.8, 2.4, 0.2), yawed(pos, -1.6, 1.2, 2, yaw), o); createEnt(W(1.8, 2.4, 0.2), yawed(pos, 1.6, 1.2, 2, yaw), o);
    createEnt(W(1.4, 0.6, 0.2), yawed(pos, 0, 2.1, 2, yaw), o);
    createEnt(W(5, 2.4, 0.2), yawed(pos, 0, 1.2, -2, yaw), o);
    createEnt(W(0.2, 2.4, 3.8), yawed(pos, -2.4, 1.2, 0, yaw), o); createEnt(W(0.2, 2.4, 3.8), yawed(pos, 2.4, 1.2, 0, yaw), o);
    createEnt(W(5.4, 0.2, 4.6), yawed(pos, 0, 2.52, 0, yaw), o);
    put('table', 0, 0.45, -0.6);
  } else if (kind === 'bridge') {
    for (const z of [-4.5, 4.5]) for (const x of [-1, 1]) for (let l = 0; l < 3; l++) put('stone', x, 0.5 + l * 1.005, z);
    const beam = { ...ITEMS.chunk, size: [0.3, 0.3, 10.2], mat: 'wood', tex: 'log' };
    createEnt(beam, yawed(pos, -1, 3.17, 0, yaw), o); createEnt(beam, yawed(pos, 1, 3.17, 0, yaw), o);
    for (let i = 0; i < 18; i++) put('plank', 0, 3.43, -4.4 + i * 0.52);
  } else if (kind === 'skyscraper') {
    for (let l = 0; l < 6; l++) for (let a = 0; a < 3; a++) for (let b = 0; b < 2; b++) put('concrete_big', (a - 1) * 2.01, 1 + l * 2.004, (b - 0.5) * 2.01);
  } else if (kind === 'fort') {
    const log = { ...ITEMS.log, rot: undefined, h: 3, r: 0.28 };
    for (let i = 0; i < 22; i++) { const a = (i / 24) * Math.PI * 2; createEnt(log, yawed(pos, Math.cos(a) * 5, 1.5, Math.sin(a) * 5, yaw), o); }
    put('barrel', 0, 0.6, 0); put('crate', 1.5, 0.5, 1);
  } else if (kind === 'arch') {
    for (const x of [-1.3, 1.3]) for (let l = 0; l < 3; l++) put('stone', x, 0.5 + l * 1.005, 0);
    createEnt({ ...ITEMS.slab, size: [3.8, 0.6, 1] }, yawed(pos, 0, 3.32, 0, yaw), o);
  } else if (kind === 'stairs') {
    for (let s = 0; s < 5; s++) for (let h = 0; h <= s; h++) put('crate', 0, 0.5 + h * 1.001, -s * 1.01);
  } else if (kind === 'igloo') {
    for (let ring = 0; ring < 3; ring++) {
      const r = 2.4 - ring * 0.55, n = 12 - ring * 3;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + ring * 0.3;
        if (ring === 0 && i === 0) continue; // door
        createEnt({ ...ITEMS.ice, size: [0.9, 0.7, 0.6] }, yawed(pos, Math.cos(a) * r, 0.35 + ring * 0.71, Math.sin(a) * r, yaw), { ...o, quat: yq(yaw - a - Math.PI / 2) });
      }
    }
    createEnt({ ...ITEMS.ice, size: [1.4, 0.4, 1.4] }, yawed(pos, 0, 2.35, 0, yaw), o);
  } else if (kind === 'snowman') {
    const ball = (r) => ({ ...ITEMS.snowball, r });
    const a = createEnt(ball(0.75), yawed(pos, 0, 0.75, 0, yaw), o);
    const b = createEnt(ball(0.52), yawed(pos, 0, 1.97, 0, yaw), o);
    const c = createEnt(ball(0.36), yawed(pos, 0, 2.82, 0, yaw), o);
    const nose = createEnt({ id: 'carrot', shape: 'cyl', r: 0.07, rt: 0.01, h: 0.35, mat: 'fruit', color: 0xff7b00, splat: 0xff7b00 }, yawed(pos, 0, 2.82, 0.45, yaw), { ...o, quat: new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, yaw, 0, 'YXZ')) });
    addWeld(a.body, b.body); addWeld(b.body, c.body); addWeld(c.body, nose.body);
  } else if (BIG[kind]) {
    BIG[kind](put, yaw, pos, o);
  } else if (kind === 'pallets') {
    for (let i = 0; i < 5; i++) put('pallet', 0, 0.15 + i * 0.31, 0);
  } else if (kind === 'ballpit') {
    for (let i = 0; i < 40; i++) createEnt(ITEMS.ball, pos.clone().add(new THREE.Vector3(rand(-3, 3), 8 + rand(0, 8), rand(-3, 3))), { spawned, color: 'random' });
  }
  return null;
}

export { dummyFromBody };

// ---------------------------------------------------------------- fire
// flammability per material (0 = won't burn)
const FLAM = { hay: 1.5, cactus: 0.3, wood: 1, foam: 1.3, fruit: 0.25, tnt: 1, car: 0.5, appliance: 0.2, balloon: 1, plastic: 0.4, rubber: 0.3, beach: 1, jelly: 0, flesh: 1, bouncyflesh: 1 };

export function ignite(e, t = 8) {
  if (!e || e.dead) return;
  if (e.kind === 'dummybody' || e.kind === 'ragpart') { e.dummy.ignite(); return; }
  if (e.frozen) { unfreeze(e); return; }
  const f = FLAM[e.def.mat] || 0;
  if (f <= 0 || e.body.position.y < G.waterY) return;
  if (e.def.special === 'balloon') { popBalloon(e); return; }
  if (e.def.explosive) {
    if (e.fuse == null && !e.detonating) e.fuse = rand(0.7, 1.5);
  }
  if (!(e.burn > 0)) {
    e.mesh.traverse((m) => { if (m.isMesh && !m.userData.charClone) { m.material = m.material.clone(); m.userData.charClone = true; } });
    G.burning = (G.burning || 0) + 1;
  }
  e.burn = Math.max(e.burn || 0, t * f);
  e.spreadT = rand(0.2, 0.5);
}

const _black = new THREE.Color(0x1a1410);
function updateBurn(e, dt) {
  const b = e.body;
  if (b.position.y < G.waterY) {
    e.burn = 0; G.burning--;
    FX.smoke(tv(b.position), 5, 0xdddddd, 0.6); sfx.sizzle(b.position);
    return;
  }
  e.burn -= dt;
  const p = tv(b.position);
  const sz = (e.def.size ? Math.max(...e.def.size) : (e.def.r ?? 0.5) * 2) * e.scale;
  if (Math.random() < 0.7) FX.particle({ pos: p.clone().add(new THREE.Vector3(rand(-0.4, 0.4) * sz, rand(0, 0.4) * sz, rand(-0.4, 0.4) * sz)), vel: new THREE.Vector3(rand(-0.5, 0.5), rand(2, 4), rand(-0.5, 0.5)), color: Math.random() < 0.5 ? 0xff7a1a : 0xffc04a, size: rand(0.2, 0.4) * Math.min(2, sz), life: rand(0.4, 0.8), glow: true, add: true, gravity: -2, drag: 1, floor: false });
  if (Math.random() < 0.15) sfx.fire(p);
  if (Math.random() < 0.08) FX.smoke(p.clone().add(new THREE.Vector3(0, sz * 0.6, 0)), 1, 0x333333, 0.5 * Math.min(2, sz));
  e.mesh.traverse((m) => { if (m.isMesh && m.userData.charClone) m.material.color.lerp(_black, dt * 0.12); });
  if (e.hp !== Infinity && !e.def.explosive) { e.hp -= dt * 9; if (e.hp <= 0) { G.burning--; e.burn = 0; breakEnt(e, null); return; } }
  if (e.def.mat === 'car' && e.burn < 2 && !e.carBoom) { e.carBoom = true; later(0.1, () => { if (!e.dead) { const pp = tv(e.body.position); removeEnt(e, true); explode(pp, 1.6, { fire: true }); } }); }
  e.spreadT -= dt;
  if (e.spreadT <= 0) {
    e.spreadT = 0.5;
    const r = 0.9 + sz * 0.7;
    for (const o of G.ents) {
      if (o === e || o.dead || o.burn > 0) continue;
      const op = o.body.position;
      const dx = op.x - p.x, dy = op.y - p.y, dz = op.z - p.z;
      if (dx * dx + dy * dy + dz * dz < r * r && Math.random() < 0.4) ignite(o, 8);
    }
    for (const d of G.dummies) if (!d.burn && d.center().distanceTo(p) < r + 0.4 && Math.random() < 0.4) d.ignite();
  }
  if (e.burn <= 0) { e.burn = 0; G.burning--; }
}

// fire patches on the ground (fire bombs): ignite anything inside
export function addFirePatch(pos, r = 3.5, t = 7) {
  G.firePatches = G.firePatches || [];
  G.firePatches.push({ pos: pos.clone(), r, t, tick: 0 });
}
export function updateFirePatches(dt) {
  if (!G.firePatches) return;
  for (let i = G.firePatches.length - 1; i >= 0; i--) {
    const f = G.firePatches[i];
    f.t -= dt;
    if (f.t <= 0) { G.firePatches.splice(i, 1); continue; }
    for (let k = 0; k < 3; k++) {
      const a = rand(0, Math.PI * 2), rr = Math.sqrt(Math.random()) * f.r;
      FX.particle({ pos: f.pos.clone().add(new THREE.Vector3(Math.cos(a) * rr, 0.1, Math.sin(a) * rr)), vel: new THREE.Vector3(0, rand(2, 4), 0), color: Math.random() < 0.5 ? 0xff6a1a : 0xffc04a, size: rand(0.25, 0.5), life: rand(0.4, 0.8), glow: true, add: true, gravity: -2, floor: false });
    }
    f.tick -= dt;
    if (f.tick > 0) continue;
    f.tick = 0.3;
    for (const e of G.ents) if (!(e.burn > 0) && tv(e.body.position).distanceTo(f.pos) < f.r + 0.5) ignite(e, 8);
    for (const d of G.dummies) if (!d.burn && d.origin().distanceTo(f.pos) < f.r) d.ignite();
    if (G.player && G.player.feet().distanceTo(f.pos) < f.r) { G.player.fling(new THREE.Vector3(0, 0.6, 0)); G.player.hot = 0.3; }
  }
}

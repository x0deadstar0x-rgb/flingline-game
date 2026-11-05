// Procedural canvas textures (chunky / low-res for the semi low-poly look).
import * as THREE from 'three';

const cache = {};

function make(key, size, draw) {
  if (cache[key]) return cache[key];
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.magFilter = THREE.NearestFilter;
  t.anisotropy = 4;
  cache[key] = t;
  return t;
}

function speckle(g, s, n, colors, min = 1, max = 3) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[(Math.random() * colors.length) | 0];
    const w = min + Math.random() * (max - min);
    g.fillRect(Math.random() * s, Math.random() * s, w, w);
  }
}

export const TEX = {
  crate: () => make('crate', 64, (g, s) => {
    g.fillStyle = '#b07a3e'; g.fillRect(0, 0, s, s);
    for (let i = 0; i < 4; i++) { g.fillStyle = i % 2 ? '#a26f36' : '#b8834a'; g.fillRect(0, i * 16, s, 16); }
    g.fillStyle = '#7a4f22';
    g.fillRect(0, 0, s, 7); g.fillRect(0, s - 7, s, 7); g.fillRect(0, 0, 7, s); g.fillRect(s - 7, 0, 7, s);
    g.save(); g.translate(s / 2, s / 2); g.rotate(Math.PI / 4); g.fillRect(-5, -44, 10, 88); g.restore();
    speckle(g, s, 60, ['#6d4520', '#c99359']);
  }),
  plank: () => make('plank', 64, (g, s) => {
    g.fillStyle = '#c08a4f'; g.fillRect(0, 0, s, s);
    g.strokeStyle = '#9c6a35'; g.lineWidth = 2;
    for (let i = 0; i < 7; i++) { g.beginPath(); g.moveTo(0, 5 + i * 9); g.bezierCurveTo(20, i * 9 + Math.random() * 6, 40, 8 + i * 9, s, 4 + i * 9); g.stroke(); }
  }),
  log: () => make('log', 64, (g, s) => {
    g.fillStyle = '#6b4526'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#4e301a';
    for (let i = 0; i < 10; i++) g.fillRect(i * 7 + Math.random() * 3, 0, 2, s);
    speckle(g, s, 80, ['#7d5532', '#3e2614']);
  }),
  stone: () => make('stone', 64, (g, s) => {
    g.fillStyle = '#8c9096'; g.fillRect(0, 0, s, s);
    speckle(g, s, 200, ['#7a7e84', '#9ea3a8', '#6d7075', '#a9adb2'], 2, 6);
    g.strokeStyle = '#5d6065'; g.lineWidth = 2; g.strokeRect(1, 1, s - 2, s - 2);
  }),
  brick: () => make('brick', 64, (g, s) => {
    g.fillStyle = '#d8cfc4'; g.fillRect(0, 0, s, s);
    for (let r = 0; r < 4; r++) for (let c = -1; c < 3; c++) {
      g.fillStyle = ['#a8452f', '#b54e36', '#9a3d29'][(r + c + 3) % 3];
      g.fillRect(c * 32 + (r % 2) * 16 + 2, r * 16 + 2, 28, 12);
    }
  }),
  metal: () => make('metal', 64, (g, s) => {
    g.fillStyle = '#8f99a3'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#a6b0ba'; g.fillRect(4, 4, s - 8, s - 8);
    g.fillStyle = '#6c757e';
    for (const [x, y] of [[8, 8], [s - 10, 8], [8, s - 10], [s - 10, s - 10]]) g.fillRect(x, y, 3, 3);
    g.fillStyle = 'rgba(255,255,255,0.15)'; g.fillRect(10, 20, s - 20, 4);
  }),
  tnt: () => make('tnt', 64, (g, s) => {
    g.fillStyle = '#d42a1e'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#a81d13'; for (let i = 0; i < 4; i++) g.fillRect(i * 16, 0, 3, s);
    g.fillStyle = '#f2efe6'; g.fillRect(0, 22, s, 20);
    g.fillStyle = '#111'; g.font = 'bold 17px monospace'; g.textAlign = 'center'; g.fillText('TNT', s / 2, 38);
  }),
  barrel: () => make('barrel', 64, (g, s) => {
    g.fillStyle = '#c2271d'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#8a1a13'; g.fillRect(0, 8, s, 4); g.fillRect(0, s - 12, s, 4);
    g.fillStyle = '#ffd31a'; g.fillRect(0, 24, s, 16);
    g.fillStyle = '#111'; for (let i = -1; i < 9; i++) { g.beginPath(); g.moveTo(i * 8, 40); g.lineTo(i * 8 + 4, 40); g.lineTo(i * 8 + 12, 24); g.lineTo(i * 8 + 8, 24); g.fill(); }
  }),
  drum: () => make('drum', 64, (g, s) => {
    g.fillStyle = '#2f6b3a'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#244f2b'; g.fillRect(0, 10, s, 4); g.fillRect(0, s - 14, s, 4);
    g.fillStyle = '#111'; g.fillRect(0, 26, s, 12);
    g.fillStyle = '#ddd'; g.font = 'bold 10px monospace'; g.textAlign = 'center'; g.fillText('OIL', s / 2, 35);
  }),
  gas: () => make('gas', 64, (g, s) => {
    g.fillStyle = '#e8e8e8'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#1f6fd1'; g.fillRect(0, 20, s, 24);
    g.fillStyle = '#fff'; g.font = 'bold 12px monospace'; g.textAlign = 'center'; g.fillText('GAS', s / 2, 37);
  }),
  nuke: () => make('nuke', 64, (g, s) => {
    g.fillStyle = '#e2c21d'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#111';
    g.beginPath(); g.arc(s / 2, s / 2, 5, 0, Math.PI * 2); g.fill();
    for (let i = 0; i < 3; i++) { const a = i * Math.PI * 2 / 3 - Math.PI / 2; g.beginPath(); g.moveTo(s / 2, s / 2); g.arc(s / 2, s / 2, 22, a - 0.5, a + 0.5); g.fill(); }
    g.fillStyle = '#e2c21d'; g.beginPath(); g.arc(s / 2, s / 2, 8, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#111'; g.beginPath(); g.arc(s / 2, s / 2, 5, 0, Math.PI * 2); g.fill();
  }),
  firework: () => make('firework', 64, (g, s) => {
    const cs = ['#e83f6f', '#ffbf00', '#2274a5', '#32936f'];
    for (let i = 0; i < 8; i++) { g.fillStyle = cs[i % 4]; g.fillRect(0, i * 8, s, 8); }
    g.fillStyle = '#fff'; for (let i = 0; i < 12; i++) g.fillRect(Math.random() * s, Math.random() * s, 3, 3);
  }),
  melon: () => make('melon', 64, (g, s) => {
    g.fillStyle = '#3f8f2a'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#21581a'; for (let i = 0; i < 6; i++) g.fillRect(i * 11, 0, 5, s);
  }),
  present: () => make('present', 64, (g, s) => {
    g.fillStyle = '#d63a8a'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#ffd84a'; g.fillRect(s / 2 - 5, 0, 10, s); g.fillRect(0, s / 2 - 5, s, 10);
    g.fillStyle = 'rgba(255,255,255,.3)'; for (let i = 0; i < 10; i++) g.fillRect(Math.random() * s, Math.random() * s, 4, 4);
  }),
  dice: () => make('dice', 64, (g, s) => {
    g.fillStyle = '#f7f4ee'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#c22'; g.fillRect(0, 0, s, 3); g.fillRect(0, s - 3, s, 3); g.fillRect(0, 0, 3, s); g.fillRect(s - 3, 0, 3, s);
    g.fillStyle = '#111';
    for (const [x, y] of [[16, 16], [48, 16], [32, 32], [16, 48], [48, 48]]) { g.beginPath(); g.arc(x, y, 6, 0, Math.PI * 2); g.fill(); }
  }),
  fridge: () => make('fridge', 64, (g, s) => {
    g.fillStyle = '#eef2f4'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#c5cdd2'; g.fillRect(0, 22, s, 2);
    g.fillStyle = '#7b858c'; g.fillRect(50, 8, 4, 10); g.fillRect(50, 30, 4, 18);
  }),
  piano: () => make('piano', 64, (g, s) => {
    g.fillStyle = '#1a1a1e'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#2b2b31'; g.fillRect(4, 4, s - 8, s - 8);
  }),
  keys: () => make('keys', 64, (g, s) => {
    g.fillStyle = '#f5f5f0'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#111'; for (let i = 0; i < 8; i++) { g.fillRect(i * 8 + 7, 0, 1, s); if (i % 7 !== 2 && i % 7 !== 6) g.fillRect(i * 8 + 5, 0, 5, s * 0.6); }
  }),
  car: () => make('car', 64, (g, s) => {
    g.fillStyle = '#2b7de9'; g.fillRect(0, 0, s, s);
    g.fillStyle = 'rgba(255,255,255,0.2)'; g.fillRect(0, 10, s, 6);
  }),
  window: () => make('window', 64, (g, s) => {
    g.fillStyle = '#9fd3f2'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#d8f0ff'; g.fillRect(8, 6, 10, s - 12);
    g.fillStyle = '#333'; g.fillRect(0, 0, s, 4); g.fillRect(0, s - 4, s, 4);
  }),
  gold: () => make('gold', 64, (g, s) => {
    g.fillStyle = '#e7b416'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#ffd95a'; g.fillRect(6, 6, s - 12, 8);
    g.fillStyle = '#b8860b'; g.fillRect(0, s - 8, s, 8);
  }),
  cone: () => make('cone', 64, (g, s) => {
    g.fillStyle = '#ff6a13'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#fff'; g.fillRect(0, 18, s, 10); g.fillRect(0, 40, s, 10);
  }),
  tire: () => make('tire', 64, (g, s) => {
    g.fillStyle = '#222'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#333'; for (let i = 0; i < 8; i++) g.fillRect(i * 8, 0, 4, s);
  }),
  duck: () => make('duck', 16, (g, s) => { g.fillStyle = '#ffd500'; g.fillRect(0, 0, s, s); }),
  ball: () => make('ball', 64, (g, s) => {
    g.fillStyle = '#fff'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#111'; for (const [x, y] of [[10, 10], [42, 18], [22, 42], [54, 50]]) { g.beginPath(); g.arc(x, y, 7, 0, Math.PI * 2); g.fill(); }
  }),
  beach: () => make('beach', 64, (g, s) => {
    const cs = ['#ff3b3b', '#fff', '#2d7cff', '#fff', '#ffd400', '#fff', '#22c55e', '#fff'];
    for (let i = 0; i < 8; i++) { g.fillStyle = cs[i]; g.fillRect(i * 8, 0, 8, s); }
  }),
  basket: () => make('basket', 64, (g, s) => {
    g.fillStyle = '#e8701a'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#3a1d08'; g.fillRect(0, s / 2 - 1, s, 2); g.fillRect(s / 2 - 1, 0, 2, s);
  }),
  couch: () => make('couch', 64, (g, s) => {
    g.fillStyle = '#7b4bb3'; g.fillRect(0, 0, s, s);
    speckle(g, s, 120, ['#6c3fa0', '#8a5cc4']);
  }),
  bed: () => make('bed', 64, (g, s) => {
    g.fillStyle = '#e9e4ff'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#9d8cf2'; for (let i = 0; i < 8; i++) g.fillRect(i * 8, 0, 3, s);
  }),
  jelly: () => make('jelly', 16, (g, s) => { g.fillStyle = '#ff4fa3'; g.fillRect(0, 0, s, s); }),
  concrete: () => make('concrete', 64, (g, s) => {
    g.fillStyle = '#a8a8a2'; g.fillRect(0, 0, s, s);
    speckle(g, s, 260, ['#9d9d97', '#b3b3ad', '#929289'], 1, 3);
    g.fillStyle = '#86867f'; g.fillRect(0, 0, s, 2); g.fillRect(0, 0, 2, s);
  }),
  hay: () => make('hay', 64, (g, s) => {
    g.fillStyle = '#d9b64a'; g.fillRect(0, 0, s, s);
    g.strokeStyle = '#b8932c'; g.lineWidth = 1;
    for (let i = 0; i < 40; i++) { g.beginPath(); const x = Math.random() * s, y = Math.random() * s; g.moveTo(x, y); g.lineTo(x + Math.random() * 14 - 7, y + 3); g.stroke(); }
    g.fillStyle = '#8a6a1c'; g.fillRect(0, 18, s, 3); g.fillRect(0, 44, s, 3);
  }),
  grass: () => make('grass', 128, (g, s) => {
    g.fillStyle = '#5fae4a'; g.fillRect(0, 0, s, s);
    speckle(g, s, 500, ['#57a443', '#68b853', '#4f9a3c', '#73c25d'], 2, 5);
  }),
  sand: () => make('sand', 64, (g, s) => {
    g.fillStyle = '#e9d29a'; g.fillRect(0, 0, s, s);
    speckle(g, s, 200, ['#dcc287', '#f2dfae', '#d4b77a']);
  }),
  pad: () => make('pad', 64, (g, s) => {
    g.fillStyle = '#222'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#39ff9c';
    g.beginPath(); g.moveTo(s / 2, 8); g.lineTo(s - 12, 30); g.lineTo(12, 30); g.fill();
    g.beginPath(); g.moveTo(s / 2, 30); g.lineTo(s - 12, 52); g.lineTo(12, 52); g.fill();
  }),
};

// HUD: hotbar, menu (tools / items / maps / help), stats, crosshair.
import { G, toast } from './core.js';
import { TOOLS, TOOL, TOOL_GROUPS, DEFAULT_HOTBAR } from './tools/index.js';
import { CATALOG, ITEMS } from './items.js';
import { MAPS, loadMap } from './map.js';

const $ = (id) => document.getElementById(id);
const hex = (c) => '#' + c.toString(16).padStart(6, '0');

export const UI = {
  hotbar: [...DEFAULT_HOTBAR],
  slot: 0,
  menuOpen: false,
  tab: 'tools',
  onEquip: null,
};

try {
  const saved = JSON.parse(localStorage.getItem('fling_hotbar') || 'null');
  if (Array.isArray(saved) && saved.length === 10 && saved.every((id) => TOOL[id])) UI.hotbar = saved;
} catch (e) { /* ignore */ }
function saveHotbar() { try { localStorage.setItem('fling_hotbar', JSON.stringify(UI.hotbar)); } catch (e) { /* ignore */ } }

export function currentTool() { return TOOL[UI.hotbar[UI.slot]]; }

export function buildHotbar() {
  const hb = $('hotbar');
  hb.innerHTML = '';
  UI.hotbar.forEach((id, i) => {
    const t = TOOL[id];
    const d = document.createElement('div');
    d.className = 'slot' + (i === UI.slot ? ' on' : '');
    d.style.setProperty('--c', hex(t.color));
    const icon = id === 'spawner' ? ITEMS[G.spawnId].icon : t.icon;
    d.innerHTML = `<span class="k">${(i + 1) % 10}</span><span class="i">${icon}</span><span class="n">${id === 'spawner' ? ITEMS[G.spawnId].name : t.name}</span>`;
    d.onclick = () => selectSlot(i);
    hb.appendChild(d);
  });
  const t = currentTool();
  $('toolname').textContent = t.name + (t.id === 'spawner' ? ` — ${ITEMS[G.spawnId].icon} ${ITEMS[G.spawnId].name}` : '');
  $('toolhint').textContent = t.hint;
}

export function selectSlot(i) {
  const prev = currentTool();
  if (i === UI.slot) return;
  if (prev && prev.unequip) prev.unequip();
  UI.slot = i;
  buildHotbar();
  if (UI.onEquip) UI.onEquip(currentTool());
}

export function setTool(id) {
  const prev = currentTool();
  if (prev && prev.unequip && prev.id !== id) prev.unequip();
  const existing = UI.hotbar.indexOf(id);
  if (existing >= 0) UI.slot = existing;
  else { UI.hotbar[UI.slot] = id; saveHotbar(); }
  buildHotbar();
  if (UI.onEquip) UI.onEquip(currentTool());
}

export function cycleTool(dir) {
  const i = TOOLS.findIndex((t) => t.id === UI.hotbar[UI.slot]);
  let j = i;
  for (let k = 0; k < TOOLS.length; k++) {
    j = (j + dir + TOOLS.length) % TOOLS.length;
    if (!UI.hotbar.includes(TOOLS[j].id) || TOOLS[j].id === UI.hotbar[UI.slot]) break;
  }
  const prev = currentTool();
  if (prev && prev.unequip) prev.unequip();
  UI.hotbar[UI.slot] = TOOLS[j].id;
  saveHotbar();
  buildHotbar();
  if (UI.onEquip) UI.onEquip(currentTool());
  toast(`${TOOLS[j].icon} ${TOOLS[j].name}`);
}

function card(icon, name, sub, color, onClick, active) {
  const b = document.createElement('button');
  b.className = 'card' + (active ? ' on' : '');
  if (color != null) b.style.setProperty('--c', hex(color));
  b.innerHTML = `<span class="i">${icon}</span><span class="n">${name}</span>${sub ? `<span class="s">${sub}</span>` : ''}`;
  b.onclick = (e) => { e.stopPropagation(); onClick(); };
  return b;
}

export function renderMenu() {
  const body = $('menubody');
  body.innerHTML = '';
  document.querySelectorAll('#menutabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === UI.tab));
  if (UI.tab === 'tools') {
    const note = document.createElement('p');
    note.className = 'note';
    note.textContent = `Click a tool to put it in hotbar slot ${(UI.slot + 1) % 10}. (${TOOLS.length} tools)`;
    body.appendChild(note);
    for (const [name, list] of TOOL_GROUPS) {
      const h = document.createElement('h3'); h.textContent = name; body.appendChild(h);
      const grid = document.createElement('div'); grid.className = 'grid';
      for (const t of list) grid.appendChild(card(t.icon, t.name, t.hint, t.color, () => { setTool(t.id); closeMenu(); }, UI.hotbar[UI.slot] === t.id));
      body.appendChild(grid);
    }
  } else if (UI.tab === 'items') {
    const note = document.createElement('p');
    note.className = 'note';
    note.textContent = `Pick something to spawn with the Spawner (${CATALOG.length} things). Tip: T cycles items in-game.`;
    body.appendChild(note);
    const cats = [...new Set(CATALOG.map((d) => d.cat))];
    for (const c of cats) {
      const h = document.createElement('h3'); h.textContent = c; body.appendChild(h);
      const grid = document.createElement('div'); grid.className = 'grid small';
      for (const d of CATALOG.filter((x) => x.cat === c)) grid.appendChild(card(d.icon, d.name, '', null, () => { G.spawnId = d.id; setTool('spawner'); closeMenu(); }, G.spawnId === d.id));
      body.appendChild(grid);
    }
  } else if (UI.tab === 'maps') {
    const grid = document.createElement('div'); grid.className = 'grid';
    for (const m of MAPS) grid.appendChild(card(m.icon, m.name, m.desc, null, () => { loadMap(m.id); closeMenu(); toast(`${m.icon} ${m.name}`); }, G.mapId === m.id));
    body.appendChild(grid);
  } else {
    body.innerHTML = $('helptext').innerHTML;
  }
}

export function openMenu(tab) {
  UI.menuOpen = true;
  if (tab) UI.tab = tab;
  $('menu').classList.add('open');
  renderMenu();
  if (document.pointerLockElement) document.exitPointerLock();
}
export function closeMenu() {
  UI.menuOpen = false;
  $('menu').classList.remove('open');
  G.requestLock && G.requestLock();
}

export function initMenu() {
  document.querySelectorAll('#menutabs button').forEach((b) => {
    b.onclick = (e) => { e.stopPropagation(); UI.tab = b.dataset.tab; renderMenu(); };
  });
  $('menuclose').onclick = (e) => { e.stopPropagation(); closeMenu(); };
  $('menu').addEventListener('mousedown', (e) => e.stopPropagation());
}

let fpsT = 0, frames = 0, fps = 60;
export function updateHud(dt) {
  frames++; fpsT += dt;
  if (fpsT > 0.5) { fps = Math.round(frames / fpsT); frames = 0; fpsT = 0; }
  const s = G.stats;
  $('stats').innerHTML = `💥 ${s.booms} &nbsp; 🧱 ${s.destroyed} &nbsp; 🧍 ${s.flings} flung &nbsp; 🏆 ${s.best.toFixed(1)}m` +
    `<br><span class="dim">${G.map ? G.map.icon + ' ' + G.map.name : ''} · ${G.ents.size} objects · ${fps} fps${G.timeScale < 1 ? ' · <b>SLOW-MO</b>' : ''}${G.player && G.player.flying ? ' · <b>FLYING</b>' : ''}</span>`;
  const ch = $('crosshair');
  ch.className = G.crossHint || '';
  ch.style.setProperty('--c', hex(currentTool().color));
  $('toolnote').textContent = G.toolNote || '';
}

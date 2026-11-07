// HUD + menu. Black & white, minimal.
// Menu: sidebar (Tools / Items / Maps / Controls), search, and a hotbar editor:
// click a slot, then click tools to fill it. TAB / Esc / "Play" closes.
import { G, toast } from './core.js';
import { TOOLS, TOOL, TOOL_GROUPS, DEFAULT_HOTBAR } from './tools/index.js';
import { CATALOG, ITEMS } from './items.js';
import { MAPS, loadMap } from './map.js';
import { S, setSetting, DEFAULTS } from './settings.js';
import { bindText, ACTIONS, PRESETS, binds, ctl, applyPreset, setBind, keyName, captureNext, saveControls } from './input.js';

const $ = (id) => document.getElementById(id);

export const UI = {
  hotbar: [...DEFAULT_HOTBAR],
  slot: 0,
  menuOpen: false,
  tab: 'tools',
  query: '',
  onEquip: null,
};

try {
  const saved = (JSON.parse(localStorage.getItem('fling_hotbar') || 'null') || null);
  // the Fling Line used to be a tool; it is always with you now
  if (Array.isArray(saved)) for (let i = 0; i < saved.length; i++) if (saved[i] === 'fling') saved[i] = 'hands';
  if (Array.isArray(saved) && saved.length === 10 && saved.every((id) => TOOL[id])) UI.hotbar = saved;
} catch (e) { /* ignore */ }
function saveHotbar() { try { localStorage.setItem('fling_hotbar', JSON.stringify(UI.hotbar)); } catch (e) { /* ignore */ } }

export function currentTool() { return TOOL[UI.hotbar[UI.slot]]; }
const slotIcon = (id) => (id === 'spawner' ? ITEMS[G.spawnId].icon : TOOL[id].icon);
const slotName = (id) => (id === 'spawner' ? ITEMS[G.spawnId].name : TOOL[id].name);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function buildHotbar() {
  const hb = $('hotbar');
  hb.innerHTML = '';
  UI.hotbar.forEach((id, i) => {
    const d = document.createElement('div');
    d.className = 'slot' + (i === UI.slot ? ' on' : '');
    d.innerHTML = `<span class="k">${(i + 1) % 10}</span><span class="i">${slotIcon(id)}</span>`;
    d.title = slotName(id);
    hb.appendChild(d);
  });
  const t = currentTool();
  $('toolname').textContent = t.id === 'spawner' ? `Spawner · ${ITEMS[G.spawnId].name}` : t.name;
  $('toolhint').textContent = t.hint;
}

function equipChanged(prev) {
  if (prev && prev.unequip && prev !== currentTool()) prev.unequip();
  buildHotbar();
  if (UI.onEquip) UI.onEquip(currentTool());
}

export function selectSlot(i) {
  if (i === UI.slot) return;
  const prev = currentTool();
  UI.slot = i;
  equipChanged(prev);
}

export function setTool(id) {
  const prev = currentTool();
  const existing = UI.hotbar.indexOf(id);
  if (existing >= 0 && existing !== UI.slot) {
    // swap so a tool is never in two slots
    UI.hotbar[existing] = UI.hotbar[UI.slot];
  }
  UI.hotbar[UI.slot] = id;
  saveHotbar();
  equipChanged(prev);
}

export function cycleTool(dir) {
  const i = TOOLS.findIndex((t) => t.id === UI.hotbar[UI.slot]);
  let j = i;
  for (let k = 0; k < TOOLS.length; k++) {
    j = (j + dir + TOOLS.length) % TOOLS.length;
    if (!UI.hotbar.includes(TOOLS[j].id)) break;
  }
  const prev = currentTool();
  UI.hotbar[UI.slot] = TOOLS[j].id;
  saveHotbar();
  equipChanged(prev);
  toast(TOOLS[j].name);
}

function card(icon, name, sub, onClick, active, extra = '') {
  const b = document.createElement('button');
  b.className = 'card' + (active ? ' on' : '');
  b.innerHTML = `<span class="i">${icon}</span><span class="txt"><span class="n">${esc(name)}</span>${sub ? `<span class="s">${esc(sub)}</span>` : ''}</span>${extra}`;
  b.onclick = (e) => { e.stopPropagation(); onClick(); };
  return b;
}
function section(body, title, count) {
  const h = document.createElement('h3');
  h.innerHTML = `${esc(title)}${count != null ? `<span>${count}</span>` : ''}`;
  body.appendChild(h);
  const grid = document.createElement('div');
  grid.className = 'grid';
  body.appendChild(grid);
  return grid;
}
const match = (...fields) => {
  const q = UI.query.trim().toLowerCase();
  return !q || fields.some((f) => f && f.toLowerCase().includes(q));
};

function renderSettings(body) {
  const wrap = document.createElement('div');
  wrap.className = 'settings';
  body.appendChild(wrap);
  const row = (label, sub, ctrl) => {
    const r = document.createElement('div');
    r.className = 'srow';
    r.innerHTML = `<div class="sl"><div class="n">${esc(label)}</div><div class="s">${esc(sub)}</div></div>`;
    r.appendChild(ctrl);
    wrap.appendChild(r);
  };
  const slider = (key, min, max, step, fmt) => {
    const box = document.createElement('div'); box.className = 'sctl';
    const inp = document.createElement('input');
    inp.type = 'range'; inp.min = min; inp.max = max; inp.step = step; inp.value = S[key];
    const val = document.createElement('span'); val.className = 'sval'; val.textContent = fmt(S[key]);
    inp.oninput = () => { setSetting(key, +inp.value); val.textContent = fmt(+inp.value); };
    box.append(inp, val);
    return box;
  };
  const choice = (key, opts) => {
    const box = document.createElement('div'); box.className = 'sctl seg';
    for (const [v, label] of opts) {
      const b = document.createElement('button');
      b.textContent = label;
      b.className = S[key] === v ? 'on' : '';
      b.onclick = (e) => { e.stopPropagation(); setSetting(key, v); renderMenu(); };
      box.appendChild(b);
    }
    return box;
  };
  row('Mouse sensitivity', 'Also [ and ] in game. Raise it if your touchpad feels slow.', slider('sens', 0.3, 8, 0.1, (v) => v.toFixed(1)));
  row('Invert look up/down', 'Flip vertical mouse movement.', choice('invertY', [[false, 'Off'], [true, 'On']]));
  row('Field of view', 'How wide you can see.', slider('fov', 60, 100, 1, (v) => `${v}°`));
  row('Volume', 'M mutes everything.', slider('volume', 0, 1, 0.05, (v) => `${Math.round(v * 100)}%`));
  row('Graphics', 'Low turns off shadows and lowers resolution (much faster). Also L.', choice('quality', [['high', 'High'], ['low', 'Low']]));
  row('Theme', 'Light or dark menus.', choice('theme', [['dark', 'Dark'], ['light', 'Light']]));
  row('Time of day', 'Night makes explosions and lamps glow.', choice('time', [['day', 'Day'], ['sunset', 'Sunset'], ['night', 'Night']]));
  const reset = document.createElement('button');
  reset.className = 'sreset';
  reset.textContent = 'Reset to defaults';
  reset.onclick = (e) => { e.stopPropagation(); for (const k in DEFAULTS) setSetting(k, DEFAULTS[k]); renderMenu(); };
  wrap.appendChild(reset);
}

// Controls: presets + rebind every action (keys, mouse buttons)
let waiting = null; // [action, slot] being rebound
function renderControls(body) {
  const wrap = document.createElement('div');
  wrap.className = 'settings controls';
  body.appendChild(wrap);
  // presets
  const pre = document.createElement('div');
  pre.className = 'presets';
  for (const id in PRESETS) {
    const p = PRESETS[id];
    const b = document.createElement('button');
    b.className = 'preset' + (ctl.preset === id ? ' on' : '');
    b.innerHTML = `<span class="n">${esc(p.name)}</span><span class="s">${esc(p.desc)}</span>`;
    b.onclick = (e) => { e.stopPropagation(); applyPreset(id); renderMenu(); toast(p.name); };
    pre.appendChild(b);
  }
  wrap.appendChild(pre);
  // wheel
  const wr = document.createElement('div');
  wr.className = 'srow';
  wr.innerHTML = '<div class="sl"><div class="n">Scroll wheel / two-finger scroll</div><div class="s">What scrolling does in game.</div></div>';
  const seg = document.createElement('div'); seg.className = 'sctl seg';
  for (const [v, label] of [['off', 'Nothing'], ['reel', 'Line length'], ['smart', 'Line length + tools']]) {
    const b = document.createElement('button'); b.textContent = label; b.className = ctl.wheel === v ? 'on' : '';
    b.onclick = (e) => { e.stopPropagation(); ctl.wheel = v; saveControls(); renderMenu(); };
    seg.appendChild(b);
  }
  wr.appendChild(seg); wrap.appendChild(wr);
  // every action
  let group = null;
  for (const [id, label, g] of ACTIONS) {
    if (g !== group) { group = g; const h = document.createElement('h3'); h.textContent = g; wrap.appendChild(h); }
    const r = document.createElement('div');
    r.className = 'krow';
    r.innerHTML = `<div class="kl">${esc(label)}</div>`;
    const box = document.createElement('div'); box.className = 'kbox';
    for (let i = 0; i < 2; i++) {
      const b = document.createElement('button');
      const isWaiting = waiting && waiting[0] === id && waiting[1] === i;
      b.className = 'kb' + (isWaiting ? ' wait' : '') + ((binds[id] || [])[i] ? '' : ' empty');
      b.textContent = isWaiting ? 'Press a key or button…' : keyName((binds[id] || [])[i]);
      b.title = 'Click, then press a key or mouse button. Esc cancels, Backspace clears.';
      b.onclick = (e) => {
        e.stopPropagation();
        waiting = [id, i];
        renderMenu();
        setTimeout(() => captureNext((code) => {
          waiting = null;
          if (code === 'Escape') { renderMenu(); return; }
          if (code === 'Backspace' || code === 'Delete') setBind(id, i, null);
          else setBind(id, i, code);
          renderMenu();
        }), 0);
      };
      box.appendChild(b);
    }
    r.appendChild(box);
    wrap.appendChild(r);
  }
  const reset = document.createElement('button');
  reset.className = 'sreset';
  reset.textContent = `Reset to "${PRESETS[ctl.preset].name}"`;
  reset.onclick = (e) => { e.stopPropagation(); applyPreset(ctl.preset); renderMenu(); };
  wrap.appendChild(reset);
}

function renderHotbarEditor() {
  const row = $('hbedit');
  row.innerHTML = '';
  row.style.display = UI.tab === 'tools' ? '' : 'none';
  UI.hotbar.forEach((id, i) => {
    const s = document.createElement('button');
    s.className = 'hslot' + (i === UI.slot ? ' on' : '');
    s.innerHTML = `<span class="k">${(i + 1) % 10}</span><span class="i">${slotIcon(id)}</span><span class="n">${esc(slotName(id))}</span>`;
    s.onclick = (e) => { e.stopPropagation(); selectSlot(i); renderMenu(); };
    row.appendChild(s);
  });
}

export function renderMenu() {
  const body = $('menubody');
  body.innerHTML = '';
  document.querySelectorAll('#menunav button[data-tab]').forEach((b) => b.classList.toggle('on', b.dataset.tab === UI.tab));
  $('menusearch').style.visibility = UI.tab === 'tools' || UI.tab === 'items' ? 'visible' : 'hidden';
  $('menuhead').classList.toggle('nosearch', !(UI.tab === 'tools' || UI.tab === 'items'));
  renderHotbarEditor();
  if (UI.tab === 'tools') {
    $('menutitle').textContent = 'Tools';
    $('menusub').textContent = `Pick a slot above, then click a tool to put it there. ${TOOLS.length} tools.`;
    for (const [name, list] of TOOL_GROUPS) {
      const l = list.filter((t) => match(t.name, t.hint, name));
      if (!l.length) continue;
      const grid = section(body, name, l.length);
      for (const t of l) {
        const slotOf = UI.hotbar.indexOf(t.id);
        grid.appendChild(card(t.icon, t.name, t.hint, () => { setTool(t.id); renderMenu(); }, slotOf === UI.slot, slotOf >= 0 ? `<span class="badge">${(slotOf + 1) % 10}</span>` : ''));
      }
    }
  } else if (UI.tab === 'items') {
    $('menutitle').textContent = 'Spawn';
    $('menusub').textContent = `Choose what the Spawner makes. ${CATALOG.length} things. (T cycles in-game)`;
    const cats = [...new Set(CATALOG.map((d) => d.cat))];
    for (const c of cats) {
      const l = CATALOG.filter((x) => x.cat === c && match(x.name, c));
      if (!l.length) continue;
      const grid = section(body, c, l.length);
      grid.classList.add('small');
      for (const d of l) grid.appendChild(card(d.icon, d.name, '', () => { G.spawnId = d.id; setTool('spawner'); closeMenu(); toast(`Spawner · ${d.name}`); }, G.spawnId === d.id));
    }
  } else if (UI.tab === 'maps') {
    $('menutitle').textContent = 'Maps';
    $('menusub').textContent = `${MAPS.length} maps. Loading a map resets everything on it.`;
    const grid = section(body, 'All maps');
    grid.classList.add('wide');
    for (const m of MAPS) grid.appendChild(card(m.icon, m.name, m.desc, () => { loadMap(m.id); closeMenu(); toast(m.name); }, G.mapId === m.id));
  } else if (UI.tab === 'settings') {
    $('menutitle').textContent = 'Settings';
    $('menusub').textContent = 'Saved automatically in this browser.';
    renderSettings(body);
  } else if (UI.tab === 'controls') {
    $('menutitle').textContent = 'Controls';
    $('menusub').textContent = 'Pick a preset, then click any key box to change it. Saved automatically.';
    renderControls(body);
  } else {
    $('menutitle').textContent = 'Help';
    $('menusub').textContent = 'How things work. Keys shown are your current controls (change them under Controls).';
    const k = (a) => `<kbd>${esc(bindText(a))}</kbd>`;
    body.innerHTML += `
      <h3>Fling Line (always with you)</h3>
      <div class="help">
        <div>${k('grab')} grab something / drop it</div>
        <div>${k('use')} while holding: THROW it</div>
        <div>${k('reelIn')} / ${k('reelOut')} pull closer / push away</div>
        <div>hold ${k('rotate')} + move mouse: turn what you hold</div>
        <div>Grab the ground or a wall: grappling hook — swing, reel in, ${k('use')} to zip</div>
        <div>Anything can be lifted. Heavy things just move slower.</div>
      </div>
      <h3>Moving</h3>
      <div class="help">
        <div>${k('forward')} ${k('left')} ${k('back')} ${k('right')} move</div>
        <div>${k('jump')} jump · double jump</div>
        <div>${k('sprint')} sprint · fly down</div>
        <div>${k('fly')} fly mode</div>
        <div>${k('interact')} get in / out of a car</div>
        <div>${k('slowmo')} slow motion</div>
      </div>
      <h3>Tools</h3>
      <div class="help">
        <div>${k('use')} use your tool (hold for automatic ones)</div>
        <div>${k('slot1')} – ${k('slot10')} hotbar slots</div>
        <div>${k('prevTool')} / ${k('nextTool')} swap the tool in this slot</div>
        <div>${k('nextItem')} next spawn item · ${k('rotate')} turn it</div>
        <div>${k('menu')} this menu (tools, spawn, maps, settings)</div>
        <div>${k('undo')} undo last spawn · ${k('clear')} clear spawned stuff</div>
      </div>
      <h3>Other</h3>
      <div class="help">
        <div>${k('resetMap')} reset the map</div>
        <div>${k('mute')} mute · ${k('quality')} low / high graphics</div>
        <div>${k('sensDown')} / ${k('sensUp')} mouse sensitivity</div>
        <div>${k('photo')} hide the HUD (photo mode)</div>
        <div><kbd>ESC</kbd> free the mouse (pauses the game)</div>
        <div>The game pauses completely whenever the menu is open.</div>
      </div>`;
  }
  if (!body.children.length) body.innerHTML = '<p class="empty">Nothing matches that search.</p>';
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
  $('menusearch').blur();
  G.requestLock && G.requestLock();
}

export function initMenu() {
  document.querySelectorAll('#menunav button[data-tab]').forEach((b) => {
    b.onclick = (e) => { e.stopPropagation(); UI.tab = b.dataset.tab; UI.query = ''; $('menusearch').value = ''; renderMenu(); };
  });
  $('menuclose').onclick = (e) => { e.stopPropagation(); closeMenu(); };
  $('menusearch').addEventListener('input', (e) => { UI.query = e.target.value; renderMenu(); });
  $('menu').addEventListener('mousedown', (e) => e.stopPropagation());
}

let fpsT = 0, frames = 0, fps = 60;
export function updateHud(dt) {
  frames++; fpsT += dt;
  if (fpsT > 0.5) { fps = Math.round(frames / fpsT); frames = 0; fpsT = 0; }
  const s = G.stats;
  $('stats').innerHTML = `<div class="row"><span>BOOMS</span><b>${s.booms}</b><span>BROKEN</span><b>${s.destroyed}</b><span>FLUNG</span><b>${s.flings}</b><span>BEST</span><b>${s.best.toFixed(1)}m</b><span>KOS</span><b>${s.kos || 0}</b></div>` +
    `<div class="dim">${G.map ? G.map.name.toUpperCase() : ''} · ${G.ents.size} OBJECTS · ${fps} FPS${G.timeScale < 1 ? ' · SLOW-MO' : ''}${G.player && G.player.flying ? ' · FLYING' : ''}</div>`;
  $('crosshair').className = G.crossHint || '';
  $('toolnote').textContent = G.lineNote || G.toolNote || '';
  const gk = $('grabkey');
  if (gk) { const t = `${bindText('grab', 1)}`; if (gk.dataset.k !== t + !!G.grab) { gk.dataset.k = t + !!G.grab; gk.innerHTML = `<kbd>${esc(t)}</kbd>${G.grab ? 'DROP' : 'FLING LINE'}`; } }
}

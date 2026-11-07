// Input: every game action can be bound to keys, mouse buttons or the wheel.
// Presets: touchpad (no right click), touchpad with right click, mouse + keyboard.
// Bindings are saved in the browser. Codes are KeyboardEvent.code values,
// plus 'Mouse0' (left), 'Mouse1' (middle), 'Mouse2' (right), 'Mouse3'/'Mouse4' (side buttons).

export const ACTIONS = [
  // [id, label, group]
  ['forward', 'Move forward', 'Move'],
  ['back', 'Move back', 'Move'],
  ['left', 'Move left', 'Move'],
  ['right', 'Move right', 'Move'],
  ['jump', 'Jump / fly up', 'Move'],
  ['sprint', 'Sprint / fly down', 'Move'],
  ['crouch', 'Crouch', 'Move'],
  ['fly', 'Fly mode', 'Move'],
  ['lookUp', 'Look up', 'Move'],
  ['lookDown', 'Look down', 'Move'],
  ['lookLeft', 'Look left', 'Move'],
  ['lookRight', 'Look right', 'Move'],
  ['use', 'Use tool / grab', 'Tools'],
  ['alt', 'Throw / tool alt', 'Tools'],
  ['reelIn', 'Line shorter', 'Tools'],
  ['reelOut', 'Line longer', 'Tools'],
  ['rotate', 'Rotate held thing (hold + mouse)', 'Tools'],
  ['nextItem', 'Next spawn item', 'Tools'],
  ['prevTool', 'Swap tool (back)', 'Tools'],
  ['nextTool', 'Swap tool (next)', 'Tools'],
  ['undo', 'Undo last spawn', 'Tools'],
  ['interact', 'Enter / exit vehicle, interact', 'Tools'],
  ['slot1', 'Hotbar 1', 'Hotbar'], ['slot2', 'Hotbar 2', 'Hotbar'], ['slot3', 'Hotbar 3', 'Hotbar'], ['slot4', 'Hotbar 4', 'Hotbar'], ['slot5', 'Hotbar 5', 'Hotbar'],
  ['slot6', 'Hotbar 6', 'Hotbar'], ['slot7', 'Hotbar 7', 'Hotbar'], ['slot8', 'Hotbar 8', 'Hotbar'], ['slot9', 'Hotbar 9', 'Hotbar'], ['slot10', 'Hotbar 10', 'Hotbar'],
  ['menu', 'Menu', 'Game'],
  ['help', 'Controls screen', 'Game'],
  ['chat', 'Chat (multiplayer)', 'Game'],
  ['slowmo', 'Slow motion', 'Game'],
  ['clear', 'Clear what you spawned', 'Game'],
  ['resetMap', 'Reset the map', 'Game'],
  ['mute', 'Mute', 'Game'],
  ['quality', 'Low / high graphics', 'Game'],
  ['sensDown', 'Mouse sensitivity down', 'Game'],
  ['sensUp', 'Mouse sensitivity up', 'Game'],
  ['photo', 'Hide HUD (photo mode)', 'Game'],
];
export const ACTION_LABEL = Object.fromEntries(ACTIONS.map(([id, label]) => [id, label]));

const BASE = {
  forward: ['KeyW'], back: ['KeyS'], left: ['KeyA'], right: ['KeyD'],
  jump: ['Space'], sprint: ['ShiftLeft', 'ShiftRight'], crouch: ['ControlLeft'], fly: ['KeyN'],
  lookUp: ['ArrowUp'], lookDown: ['ArrowDown'], lookLeft: ['ArrowLeft'], lookRight: ['ArrowRight'],
  use: ['Mouse0', 'Enter'], alt: ['KeyF'], reelIn: ['KeyZ'], reelOut: ['KeyX'], rotate: ['KeyR'],
  nextItem: ['KeyT'], prevTool: ['KeyQ'], nextTool: ['KeyE'], undo: ['KeyU'], interact: ['KeyV'],
  slot1: ['Digit1'], slot2: ['Digit2'], slot3: ['Digit3'], slot4: ['Digit4'], slot5: ['Digit5'],
  slot6: ['Digit6'], slot7: ['Digit7'], slot8: ['Digit8'], slot9: ['Digit9'], slot10: ['Digit0'],
  menu: ['Tab', 'KeyB'], help: ['KeyH'], chat: ['KeyY'], slowmo: ['KeyG'], clear: ['KeyC'], resetMap: ['KeyP'],
  mute: ['KeyM'], quality: ['KeyL'], sensDown: ['BracketLeft'], sensUp: ['BracketRight'], photo: ['F1'],
};
const with_ = (over) => { const o = {}; for (const k in BASE) o[k] = [...BASE[k]]; for (const k in over) o[k] = over[k]; return o; };

// wheel: what the scroll wheel / two-finger scroll does
//  'off'   nothing
//  'reel'  line shorter / longer while holding something
//  'smart' line length while holding, otherwise switch hotbar slot
export const PRESETS = {
  touchpad: { name: 'Touchpad (no right click)', desc: 'Everything on one click + keyboard. Never needs a right click or two-finger click.', wheel: 'off', binds: with_({}) },
  touchpad_rc: { name: 'Touchpad with right click', desc: 'Two-finger click throws / alt-fires. Two-finger scroll changes the line length.', wheel: 'reel', binds: with_({ alt: ['KeyF', 'Mouse2'] }) },
  mouse: { name: 'Mouse + keyboard', desc: 'Right click throws / alt-fires, wheel changes line length (or tool when not holding), middle button rotates.', wheel: 'smart', binds: with_({ alt: ['KeyF', 'Mouse2'], rotate: ['KeyR', 'Mouse1'], prevTool: ['KeyQ', 'Mouse3'], nextTool: ['KeyE', 'Mouse4'] }) },
};

export const binds = {};
export const ctl = { preset: 'touchpad', wheel: 'off' };

function load() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem('fling_controls') || 'null'); } catch (e) { /* ignore */ }
  const preset = saved && PRESETS[saved.preset] ? saved.preset : 'touchpad';
  ctl.preset = preset;
  ctl.wheel = (saved && ['off', 'reel', 'smart'].includes(saved.wheel)) ? saved.wheel : PRESETS[preset].wheel;
  const base = PRESETS[preset].binds;
  for (const [id] of ACTIONS) {
    const b = saved && saved.binds && Array.isArray(saved.binds[id]) ? saved.binds[id].filter((c) => typeof c === 'string').slice(0, 3) : null;
    binds[id] = b || [...(base[id] || [])];
  }
}
load();

export function saveControls() {
  try { localStorage.setItem('fling_controls', JSON.stringify({ preset: ctl.preset, wheel: ctl.wheel, binds })); } catch (e) { /* ignore */ }
}
export function applyPreset(id) {
  const p = PRESETS[id];
  if (!p) return;
  ctl.preset = id; ctl.wheel = p.wheel;
  for (const [a] of ACTIONS) binds[a] = [...(p.binds[a] || [])];
  saveControls();
}
// put `code` on action `a` in slot `i` (0 or 1). The code is taken off any other action.
export function setBind(a, i, code) {
  if (code) for (const k in binds) binds[k] = binds[k].filter((c) => c !== code);
  const list = binds[a] || (binds[a] = []);
  if (code) list[i] = code; else list.splice(i, 1);
  binds[a] = list.filter(Boolean);
  saveControls();
}

const NICE = {
  Mouse0: 'Left click', Mouse1: 'Middle click', Mouse2: 'Right click', Mouse3: 'Mouse back', Mouse4: 'Mouse forward',
  Space: 'Space', ShiftLeft: 'Shift', ShiftRight: 'R-Shift', ControlLeft: 'Ctrl', ControlRight: 'R-Ctrl', AltLeft: 'Alt', AltRight: 'R-Alt',
  ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', BracketLeft: '[', BracketRight: ']', Enter: 'Enter', Tab: 'Tab',
  Backquote: '`', Minus: '-', Equal: '=', Semicolon: ';', Quote: "'", Comma: ',', Period: '.', Slash: '/', Backslash: '\\', Escape: 'Esc', Backspace: 'Backspace',
};
export function keyName(code) {
  if (!code) return '—';
  if (NICE[code]) return NICE[code];
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num ' + code.slice(6);
  return code;
}
// "Z" or "Z / Wheel" etc. for hints
export function bindText(a, max = 2) {
  const b = (binds[a] || []).slice(0, max).map(keyName);
  return b.length ? b.join(' / ') : 'unbound';
}

// ------------------------------------------------------------- live state
const down = new Set();   // codes held right now
const pressed = new Set(); // codes pressed since the last frame
let wheelSteps = 0;        // + = towards you (scroll down), - = away
let capture = null;        // rebinding: function(code) waiting for the next key/button

export const input = {
  lookX: 0, lookY: 0,
  held: (a) => { const b = binds[a]; if (!b) return false; for (const c of b) if (down.has(c)) return true; return false; },
  tap: (a) => { const b = binds[a]; if (!b) return false; for (const c of b) if (pressed.has(c)) return true; return false; },
  wheel: () => wheelSteps,
  // compatibility: tools used to check `input.mouseDown` for "use is held"
  get mouseDown() { return input.held('use'); },
  heldCode: (c) => down.has(c),
};

export function endFrame() { pressed.clear(); wheelSteps = 0; }
export function clearInput() { down.clear(); pressed.clear(); wheelSteps = 0; }
export function captureNext(fn) { capture = fn; }
export function capturing() { return !!capture; }

// called by main for every key / button event that should count for the game
export function press(code) {
  if (capture) { const fn = capture; capture = null; fn(code); return false; }
  if (!down.has(code)) pressed.add(code);
  down.add(code);
  return true;
}
export function release(code) { down.delete(code); }
export function addWheel(dy) { wheelSteps += dy > 0 ? 1 : dy < 0 ? -1 : 0; }

// is `code` bound to `a`? (used by main to decide what a raw key means)
export function codeIs(code, a) { return (binds[a] || []).includes(code); }

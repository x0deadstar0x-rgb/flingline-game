// Player settings (saved in the browser) + applying them.
import { G } from './core.js';
import { getP, setP } from './store.js';

export const DEFAULTS = { sens: 2.2, volume: 0.8, fov: 72, quality: 'high', invertY: false, time: 'day', theme: 'dark', spawnUnbreakable: false };
export const S = { ...DEFAULTS };

{
  const saved = getP('settings');
  if (saved && typeof saved === 'object') for (const k in DEFAULTS) if (k in saved && typeof saved[k] === typeof DEFAULTS[k]) S[k] = saved[k];
}
G.settings = S;

export function saveSettings() {
  setP('settings', S);
}

const appliers = {};
export function onSetting(key, fn) { appliers[key] = fn; }
export function setSetting(key, value) {
  S[key] = value;
  saveSettings();
  if (appliers[key]) appliers[key](value);
}
export function applyAll() { for (const k in appliers) appliers[k](S[k]); }

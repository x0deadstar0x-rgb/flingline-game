// Player settings (saved in the browser) + applying them.
import { G } from './core.js';

export const DEFAULTS = { sens: 2.2, volume: 0.8, fov: 72, quality: 'high', invertY: false, time: 'day' };
export const S = { ...DEFAULTS };

try {
  const saved = JSON.parse(localStorage.getItem('fling_settings') || 'null');
  if (saved && typeof saved === 'object') for (const k in DEFAULTS) if (k in saved && typeof saved[k] === typeof DEFAULTS[k]) S[k] = saved[k];
  // carry over the old sensitivity setting
  const old = parseFloat(localStorage.getItem('fling_sens'));
  if (!saved && old) S.sens = old * 1000;
} catch (e) { /* ignore */ }
G.settings = S;

export function saveSettings() {
  try { localStorage.setItem('fling_settings', JSON.stringify(S)); } catch (e) { /* ignore */ }
}

const appliers = {};
export function onSetting(key, fn) { appliers[key] = fn; }
export function setSetting(key, value) {
  S[key] = value;
  saveSettings();
  if (appliers[key]) appliers[key](value);
}
export function applyAll() { for (const k in appliers) appliers[k](S[k]); }

// Saved data, kept separately for every profile: each person playing on this computer has their
// own settings, controls, hotbar, loadouts, stats and look. Nothing is shared between profiles.
// (In a multiplayer room every player brings their own profile.)

const LIST = 'fz:profiles';
const read = (k) => { try { const v = localStorage.getItem(k); return v === null ? null : JSON.parse(v); } catch (e) { return null; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage full / blocked */ } };
const newId = () => Math.random().toString(36).slice(2, 9);

let profiles = read(LIST);
if (!profiles || !Array.isArray(profiles.list) || !profiles.list.length) {
  // first run of this version: turn whatever was saved before into the first profile
  const id = newId();
  profiles = { active: id, list: [{ id, name: 'Player 1', created: Date.now() }] };
  write(LIST, profiles);
  const old = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const move = (oldKey, name, parse = true) => { const v = old(oldKey); if (v !== null) { try { localStorage.setItem(`fz:p:${id}:${name}`, parse ? v : JSON.stringify(v)); } catch (e) { /* ignore */ } } };
  move('fling_settings', 'settings');
  move('fling_controls', 'controls');
  move('fling_hotbar', 'hotbar');
  const best = parseFloat(old('fling_best') || '0');
  if (best) write(`fz:p:${id}:stats`, { best });
}
if (!profiles.list.some((p) => p.id === profiles.active)) { profiles.active = profiles.list[0].id; write(LIST, profiles); }

export const activeProfile = () => profiles.list.find((p) => p.id === profiles.active);
export const listProfiles = () => profiles.list.map((p) => ({ ...p, active: p.id === profiles.active }));

// this profile's saved value (or fallback)
export function getP(name, fallback = null) { const v = read(`fz:p:${profiles.active}:${name}`); return v === null ? fallback : v; }
export function setP(name, value) { write(`fz:p:${profiles.active}:${name}`, value); }

export function createProfile(name) {
  const id = newId();
  profiles.list.push({ id, name: (name || '').trim().slice(0, 24) || `Player ${profiles.list.length + 1}`, created: Date.now() });
  write(LIST, profiles);
  return id;
}
export function renameProfile(id, name) {
  const p = profiles.list.find((x) => x.id === id);
  if (!p) return;
  p.name = (name || '').trim().slice(0, 24) || p.name;
  write(LIST, profiles);
}
// switching reloads the game so every setting is applied cleanly
export function switchProfile(id) {
  if (!profiles.list.some((p) => p.id === id) || id === profiles.active) return;
  profiles.active = id;
  write(LIST, profiles);
  location.reload();
}
export function deleteProfile(id) {
  if (profiles.list.length <= 1) return false;
  profiles.list = profiles.list.filter((p) => p.id !== id);
  try { for (let i = localStorage.length - 1; i >= 0; i--) { const k = localStorage.key(i); if (k && k.startsWith(`fz:p:${id}:`)) localStorage.removeItem(k); } } catch (e) { /* ignore */ }
  const wasActive = profiles.active === id;
  if (wasActive) profiles.active = profiles.list[0].id;
  write(LIST, profiles);
  if (wasActive) location.reload();
  return true;
}

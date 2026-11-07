// Your look (saved in your profile): skin, shirt, pants, hat. Used for your first-person arms,
// your body, the profile preview, and what other players see in multiplayer.
import { G } from './core.js';
import { getP, setP } from './store.js';

export const SKIN_COLORS = [0xffdbac, 0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0x5c3a21, 0x9fd8a8, 0xb9a6ff];
export const CLOTH_COLORS = [0x1f8ef1, 0xe63946, 0x2a9d8f, 0xf4a261, 0xffbe0b, 0x8338ec, 0x06d6a0, 0xef476f, 0x264653, 0x22223b, 0xf4f4f4, 0x111111];
export const HATS = [['none', 'None'], ['cap', 'Cap'], ['beanie', 'Beanie'], ['tophat', 'Top hat'], ['crown', 'Crown'], ['helmet', 'Helmet']];
const DEFAULT = { skin: 0xf1c27d, shirt: 0x1f8ef1, pants: 0x2b2d42, hat: 'cap', hatColor: 0xe63946 };

export function profileLook() { return { ...DEFAULT, ...(getP('look', {}) || {}) }; }
export function setProfileLook(change) {
  const l = { ...profileLook(), ...change };
  setP('look', l);
  if (G.onLookChange) G.onLookChange(l);
  return l;
}

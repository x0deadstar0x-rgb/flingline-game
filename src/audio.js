// Procedural 3D sound: every sound can have a position. Far away = quieter + muffled,
// panned left/right, and silent past its range. Different materials/actions get
// genuinely different sounds (noise, partials, formants), not just pitch changes.
let ctx = null;
let master = null, comp = null, verb = null;
let muted = false;
let volume = 0.8;
let noiseBuf = null;
let voices = 0;
const MAX_VOICES = 26;
const L = { x: 0, y: 0, z: 0, rx: 1, ry: 0, rz: 0 };

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 6;
    master = ctx.createGain();
    master.gain.value = muted ? 0 : 0.7 * volume;
    master.connect(comp); comp.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    // small generated reverb for a sense of space
    verb = ctx.createConvolver();
    const len = ctx.sampleRate * 1.2;
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const ch = ir.getChannelData(c); for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
    verb.buffer = ir;
    const vg = ctx.createGain(); vg.gain.value = 0.18;
    verb.connect(vg); vg.connect(master);
  } catch (e) { ctx = null; }
}

// pause: freeze every sound (resumes exactly where it stopped)
let pausedAudio = false;
export function setAudioPaused(p) {
  if (!ctx || p === pausedAudio) return;
  pausedAudio = p;
  try { if (p) ctx.suspend(); else ctx.resume(); } catch (e) { /* ignore */ }
}

export function toggleMute() {
  muted = !muted;
  if (master) master.gain.value = muted ? 0 : 0.7 * volume;
  return muted;
}
export function setVolume(v) {
  volume = v;
  if (master) master.gain.value = muted ? 0 : 0.7 * volume;
}

// called every frame with the camera position and its right vector
export function setListener(pos, right) {
  L.x = pos.x; L.y = pos.y; L.z = pos.z; L.rx = right.x; L.ry = right.y; L.rz = right.z;
}

const last = {};
function throttle(key, ms) {
  const now = performance.now();
  if (last[key] && now - last[key] < ms) return true;
  last[key] = now;
  return false;
}

// Build an output for a sound at pos (or null = the player's own sound, centred).
// Returns null when the sound is out of range / too many voices.
function out(pos, range, dur, important = false) {
  if (!ctx || muted) return null;
  if (voices >= MAX_VOICES && !important) return null;
  let gain = 1, pan = 0, muffle = 20000;
  if (pos) {
    const dx = pos.x - L.x, dy = pos.y - L.y, dz = pos.z - L.z;
    const d = Math.hypot(dx, dy, dz);
    if (d > range) return null;
    const k = 1 - d / range;
    gain = k * k;
    if (gain < 0.01) return null;
    pan = d > 0.5 ? Math.max(-0.85, Math.min(0.85, (dx * L.rx + dy * L.ry + dz * L.rz) / d)) : 0;
    muffle = 1200 + 18000 * k * k;
  }
  if (!Number.isFinite(gain) || !Number.isFinite(pan) || !Number.isFinite(muffle)) return null;
  const g = ctx.createGain(); g.gain.value = gain;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = muffle;
  const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
  g.connect(lp);
  if (p) { p.pan.value = pan; lp.connect(p); p.connect(master); p.connect(verb); } else { lp.connect(master); lp.connect(verb); }
  voices++;
  setTimeout(() => { voices--; try { g.disconnect(); } catch (e) { /* ignore */ } }, (dur + 0.2) * 1000);
  return g;
}

function env(node, t, vol, attack, dur) {
  node.gain.setValueAtTime(0.0001, t);
  node.gain.linearRampToValueAtTime(vol, t + attack);
  node.gain.exponentialRampToValueAtTime(0.0001, t + dur);
}
function noise(dst, dur, freq, q, vol, type = 'lowpass', delay = 0, attack = 0.003) {
  const t = ctx.currentTime + delay;
  const src = ctx.createBufferSource(); src.buffer = noiseBuf;
  if (dur > 1.3) src.loop = true; // the noise buffer is 2 s long
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain(); env(g, t, vol, attack, dur);
  src.connect(f); f.connect(g); g.connect(dst);
  src.start(t, Math.random() * 1.5); src.stop(t + dur + 0.05);
}
function tone(dst, type, f0, f1, dur, vol, delay = 0, attack = 0.004) {
  const t = ctx.currentTime + delay;
  const o = ctx.createOscillator(); o.type = type;
  o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
  const g = ctx.createGain(); env(g, t, vol, attack, dur);
  o.connect(g); g.connect(dst);
  o.start(t); o.stop(t + dur + 0.05);
}
// metallic / glassy: inharmonic partials with different decays
function modal(dst, base, ratios, dur, vol, delay = 0) {
  ratios.forEach((r, i) => tone(dst, 'sine', base * r, base * r * 0.995, dur / (1 + i * 0.5), vol / (1 + i * 0.7), delay));
}
// a voice: buzzy source through two vowel formants
function voice(dst, f0, f1, dur, vol, formants = [700, 1150]) {
  const t = ctx.currentTime;
  const o = ctx.createOscillator(); o.type = 'sawtooth';
  o.frequency.setValueAtTime(f0, t);
  o.frequency.linearRampToValueAtTime(f1, t + dur);
  const g = ctx.createGain(); env(g, t, vol, 0.02, dur);
  for (const f of formants) {
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = 6;
    o.connect(bp); bp.connect(g);
  }
  g.connect(dst);
  o.start(t); o.stop(t + dur + 0.05);
}
const R = (a, b) => a + Math.random() * (b - a);

export const sfx = {
  // ---------------- big stuff
  explosion(scale = 1, pos = null) {
    if (throttle('boom', 50)) return;
    const o = out(pos, 260, 3, true); if (!o) return;
    const s = Math.min(1.6, scale);
    tone(o, 'sine', 95, 28, 1.1 * s, 1.0);                 // thump
    noise(o, 1.8 * s, 520, 0.6, 0.9, 'lowpass');            // boom body
    noise(o, 0.25, 2500, 0.5, 0.5, 'highpass');             // crack at the start
    for (let i = 0; i < 6; i++) noise(o, R(0.05, 0.15), R(1500, 4000), 2, 0.25, 'bandpass', R(0.08, 0.8)); // debris crackle
  },
  // ---------------- impacts by material
  impact(mat, v, pos = null) {
    if (throttle('imp_' + mat, 35)) return;
    const vol = Math.min(0.5, v * 0.035);
    const o = out(pos, 45, 1); if (!o) return;
    if (mat === 'metal' || mat === 'gold' || mat === 'heavy' || mat === 'appliance' || mat === 'car') modal(o, R(260, 520), [1, 2.76, 5.4, 8.93], 0.7, vol * 0.6);
    else if (mat === 'glass' || mat === 'crystal' || mat === 'ice') modal(o, R(1600, 2600), [1, 2.3, 3.9], 0.35, vol * 0.4);
    else if (mat === 'rubber' || mat === 'beach' || mat === 'jelly') tone(o, 'sine', R(110, 160), R(260, 340), 0.18, vol * 0.8);
    else if (mat === 'stone' || mat === 'brick' || mat === 'rock' || mat === 'concrete') { noise(o, 0.22, 260, 1, vol * 1.1); tone(o, 'sine', 85, 50, 0.15, vol * 0.6); }
    else if (mat === 'plastic' || mat === 'tnt') { noise(o, 0.07, 2200, 3, vol * 0.7, 'bandpass'); tone(o, 'triangle', 420, 380, 0.06, vol * 0.3); }
    else if (mat === 'flesh' || mat === 'bouncyflesh' || mat === 'fruit' || mat === 'foam' || mat === 'snow' || mat === 'hay' || mat === 'cactus') { noise(o, 0.12, 220, 1, vol * 0.9); }
    else { noise(o, 0.12, R(650, 950), 3, vol, 'bandpass'); tone(o, 'triangle', R(150, 210), 120, 0.1, vol * 0.5); } // wood
  },
  crack(pos = null) { if (throttle('crack', 40)) return; const o = out(pos, 60, 0.6); if (!o) return; for (let i = 0; i < 4; i++) noise(o, R(0.04, 0.1), R(700, 1600), 4, 0.35, 'bandpass', i * R(0.02, 0.05)); noise(o, 0.3, 300, 1, 0.3); },
  crumble(pos = null) { if (throttle('crumble', 40)) return; const o = out(pos, 60, 0.9); if (!o) return; noise(o, 0.6, 400, 0.7, 0.5); for (let i = 0; i < 5; i++) noise(o, 0.06, R(300, 900), 3, 0.25, 'bandpass', R(0, 0.4)); },
  shatter(pos = null) { if (throttle('glass', 50)) return; const o = out(pos, 60, 1); if (!o) return; noise(o, 0.35, 5000, 1, 0.3, 'highpass'); for (let i = 0; i < 7; i++) modal(o, R(2500, 5000), [1, 2.4], R(0.1, 0.3), 0.07, R(0, 0.35)); },
  splat(pos = null) { if (throttle('splat', 60)) return; const o = out(pos, 40, 0.5); if (!o) return; noise(o, 0.25, 600, 0.8, 0.5); noise(o, 0.15, 1800, 2, 0.15, 'bandpass', 0.05); },
  // ---------------- weapons (player's own: centred)
  shoot() { if (throttle('shoot', 30)) return; const o = out(null, 0, 0.3); if (!o) return; noise(o, 0.09, 3500, 0.7, 0.35, 'highpass'); tone(o, 'square', 180, 60, 0.08, 0.15); },
  minigun() { if (throttle('mini', 40)) return; const o = out(null, 0, 0.2); if (!o) return; noise(o, 0.05, 2500, 0.8, 0.25, 'highpass'); tone(o, 'square', 120, 70, 0.04, 0.08); },
  shotgun() { const o = out(null, 0, 0.6, true); if (!o) return; noise(o, 0.35, 1400, 0.7, 0.7); tone(o, 'sine', 110, 40, 0.25, 0.6); noise(o, 0.05, 4000, 1, 0.3, 'highpass'); },
  rail() { const o = out(null, 0, 0.6); if (!o) return; tone(o, 'sawtooth', 2200, 90, 0.45, 0.12); tone(o, 'sine', 600, 40, 0.4, 0.3); noise(o, 0.25, 6000, 1, 0.2, 'highpass'); },
  zap(pos = null) { const o = out(pos, 80, 0.5); if (!o) return; for (let i = 0; i < 4; i++) tone(o, 'square', R(800, 2400), R(60, 200), 0.12, 0.06, i * 0.03); noise(o, 0.3, 3000, 2, 0.25, 'bandpass'); },
  rocket() { const o = out(null, 0, 0.6); if (!o) return; noise(o, 0.5, 900, 0.8, 0.4); tone(o, 'sawtooth', 160, 60, 0.4, 0.08); },
  flame() { if (throttle('flame', 80)) return; const o = out(null, 0, 0.3); if (!o) return; noise(o, 0.2, 700, 0.5, 0.22); },
  push() { const o = out(null, 0, 0.5); if (!o) return; noise(o, 0.4, 500, 0.7, 0.5); tone(o, 'sine', 140, 50, 0.3, 0.4); },
  whack(pos = null) { const o = out(pos, 50, 0.4); if (!o) return; noise(o, 0.1, 1200, 1.5, 0.6, 'bandpass'); tone(o, 'triangle', 240, 90, 0.12, 0.4); },
  swoosh() { const o = out(null, 0, 0.3); if (!o) return; noise(o, 0.22, 1800, 1.5, 0.18, 'bandpass', 0, 0.06); },
  ray() { if (throttle('ray', 60)) return; const o = out(null, 0, 0.3); if (!o) return; tone(o, 'sine', 900, 1500, 0.15, 0.1); tone(o, 'triangle', 1800, 2600, 0.12, 0.04); },
  freeze(pos = null) { const o = out(pos, 40, 0.4); if (!o) return; modal(o, 3000, [1, 1.5, 2.2], 0.3, 0.08); noise(o, 0.25, 7000, 1, 0.1, 'highpass'); },
  grow() { const o = out(null, 0, 0.4); if (!o) return; tone(o, 'sine', 180, 620, 0.3, 0.18); },
  shrink() { const o = out(null, 0, 0.4); if (!o) return; tone(o, 'sine', 720, 180, 0.3, 0.18); },
  teleport() { const o = out(null, 0, 0.4); if (!o) return; tone(o, 'sine', 300, 1800, 0.25, 0.14); tone(o, 'triangle', 1800, 300, 0.25, 0.05, 0.1); },
  weld(pos = null) { const o = out(pos, 30, 0.4); if (!o) return; noise(o, 0.3, 4500, 3, 0.25, 'bandpass'); },
  whir(k) { if (throttle('whir', 90)) return; const o = out(null, 0, 0.2); if (!o) return; tone(o, 'sawtooth', 60 + k * 200, 80 + k * 260, 0.1, 0.04); },
  hum() { if (throttle('hum', 110)) return; const o = out(null, 0, 0.2); if (!o) return; tone(o, 'sine', 110, 118, 0.12, 0.07); },
  // ---------------- fling line
  grab() { const o = out(null, 0, 0.2); if (!o) return; tone(o, 'sine', 380, 700, 0.09, 0.14); noise(o, 0.05, 3000, 2, 0.08, 'bandpass'); },
  drop() { const o = out(null, 0, 0.2); if (!o) return; tone(o, 'sine', 600, 300, 0.1, 0.1); },
  fling() { const o = out(null, 0, 0.4); if (!o) return; noise(o, 0.3, 1400, 1.2, 0.3, 'bandpass', 0, 0.02); tone(o, 'sine', 250, 900, 0.18, 0.12); },
  // ---------------- player
  jump() { const o = out(null, 0, 0.2); if (!o) return; noise(o, 0.08, 500, 1, 0.12); },
  land(v) { if (throttle('land', 150)) return; const o = out(null, 0, 0.3); if (!o) return; noise(o, 0.15, 250, 1, Math.min(0.5, v * 0.03)); },
  // ---------------- world / props (positional)
  oof(pos = null, pitch = 160) {
    if (throttle('oof', 90)) return;
    const o = out(pos, 35, 0.5); if (!o) return;
    const vowels = [[700, 1150], [500, 900], [400, 1900], [600, 1000]];
    voice(o, pitch * R(0.95, 1.1), pitch * R(0.6, 0.75), R(0.18, 0.3), 0.5, vowels[(Math.random() * vowels.length) | 0]);
  },
  groan(pos = null) { if (throttle('groan', 1200)) return; const o = out(pos, 30, 1); if (!o) return; voice(o, 85, 70, 0.8, 0.4, [450, 800]); },
  boing(pos = null) { if (throttle('boing', 80)) return; const o = out(pos, 50, 0.4); if (!o) return; tone(o, 'sine', 150, 650, 0.3, 0.3); tone(o, 'triangle', 300, 1300, 0.2, 0.06); },
  pop(pos = null) { const o = out(pos, 40, 0.2); if (!o) return; tone(o, 'sine', 700, 250, 0.08, 0.2); noise(o, 0.04, 3000, 1, 0.15, 'highpass'); },
  squeak(pos = null) { if (throttle('squeak', 150)) return; const o = out(pos, 30, 0.3); if (!o) return; tone(o, 'square', 1500, 950, 0.14, 0.05); },
  piano(v, pos = null) {
    if (throttle('piano', 120)) return;
    const o = out(pos, 50, 1.2); if (!o) return;
    const notes = [261.6, 311.1, 349.2, 392, 466.2, 523.3];
    for (let i = 0; i < 3; i++) modal(o, notes[(Math.random() * notes.length) | 0] * (i ? 0.5 : 1), [1, 2, 3.01], 1.0, Math.min(0.15, v * 0.012));
  },
  splash(pos = null) { if (throttle('splash', 90)) return; const o = out(pos, 50, 0.6); if (!o) return; noise(o, 0.45, 1300, 0.6, 0.35); noise(o, 0.2, 400, 1, 0.2); },
  sizzle(pos = null) { const o = out(pos, 30, 0.7); if (!o) return; noise(o, 0.6, 6500, 0.6, 0.15, 'highpass'); },
  fuse(pos = null) { if (throttle('fuse', 220)) return; const o = out(pos, 20, 0.3); if (!o) return; noise(o, 0.25, 6000, 1, 0.08, 'highpass'); },
  hiss(pos = null) { const o = out(pos, 40, 2); if (!o) return; noise(o, 1.8, 4000, 0.5, 0.15, 'highpass'); },
  whistle(dur = 1.2, pos = null) { const o = out(pos, 200, dur); if (!o) return; tone(o, 'sine', 1800, 500, dur, 0.06); },
  beep(pos = null) { const o = out(pos, 25, 0.1); if (!o) return; tone(o, 'square', 1500, 1500, 0.07, 0.06); },
  // air-raid siren while a nuke is on its way (your own sound, centred)
  siren(dur = 3) {
    const o = out(null, 0, dur + 0.3, true); if (!o) return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator(); osc.type = 'sawtooth'; osc.frequency.value = 640;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.42;
    const lg = ctx.createGain(); lg.gain.value = 230;
    lfo.connect(lg); lg.connect(osc.frequency);
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1700;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.07, t + 0.4);
    g.gain.setValueAtTime(0.07, t + dur - 0.4); g.gain.linearRampToValueAtTime(0.0001, t + dur);
    osc.connect(f); f.connect(g); g.connect(o);
    osc.start(t); lfo.start(t); osc.stop(t + dur + 0.05); lfo.stop(t + dur + 0.05);
  },
  // a nuke: crack, sub-bass thump, a long roar and rolling thunder. delay = how long the sound
  // takes to reach you; far away it's muffled down to the deep rumble.
  nuke(pos = null, delay = 0, s = 1) {
    const o0 = out(pos, 5000, 13 + delay, true); if (!o0) return;
    const d = pos ? Math.hypot(pos.x - L.x, pos.y - L.y, pos.z - L.z) : 0;
    const o = ctx.createBiquadFilter(); o.type = 'lowpass'; o.frequency.value = 260 + 16000 * Math.exp(-d / (110 * s)); o.connect(o0);
    const v = Math.min(1, 0.55 + 0.45 * s);
    noise(o, 0.6, 1800, 0.5, 0.8 * v, 'highpass', delay);
    tone(o, 'sine', 64, 18, 4.5, 1.0 * v, delay, 0.01);
    noise(o, 6.5 * s + 1, 420, 0.5, 1.0 * v, 'lowpass', delay, 0.02);
    noise(o, 9 * s + 1.5, 120, 0.7, 0.9 * v, 'lowpass', delay + 0.3, 0.4);
    for (let i = 0; i < 9; i++) noise(o, R(1.2, 2.6), R(140, 320), 0.8, R(0.35, 0.6) * v, 'lowpass', delay + R(0.6, 7 * s + 1), 0.15);
    for (let i = 0; i < 10; i++) noise(o, R(0.05, 0.15), R(1200, 3500), 2, 0.2 * v, 'bandpass', delay + R(0.3, 3));
  },
  blackhole(pos = null) { const o = out(pos, 120, 4, true); if (!o) return; tone(o, 'sine', 60, 20, 3.5, 0.45); tone(o, 'sawtooth', 200, 40, 3.5, 0.05); },
  plane() { const o = out(null, 0, 2.2); if (!o) return; noise(o, 2, 300, 0.6, 0.2, 'lowpass', 0, 0.5); tone(o, 'sawtooth', 110, 90, 2, 0.04, 0, 0.5); },
  fire(pos = null) { if (throttle('fire', 140)) return; const o = out(pos, 25, 0.3); if (!o) return; noise(o, 0.12, R(900, 2500), 3, 0.08, 'bandpass'); },
  thunk(v, pos = null) { this.impact('wood', v, pos); },
};

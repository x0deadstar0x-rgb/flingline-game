// Tiny procedural sound engine (no audio files needed).
let ctx = null;
let master = null;
let muted = false;
let noiseBuf = null;

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain();
    master.gain.value = 0.5;
    master.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  } catch (e) { ctx = null; }
}

export function toggleMute() {
  muted = !muted;
  if (master) master.gain.value = muted ? 0 : 0.5;
  return muted;
}

let lastPlay = {};
function throttle(key, ms) {
  const now = performance.now();
  if (lastPlay[key] && now - lastPlay[key] < ms) return true;
  lastPlay[key] = now;
  return false;
}

function noise(dur, freq, q, vol, type = 'lowpass') {
  if (!ctx || muted) return;
  const src = ctx.createBufferSource();
  src.buffer = noiseBuf;
  const f = ctx.createBiquadFilter();
  f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain();
  const t = ctx.currentTime;
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  src.connect(f); f.connect(g); g.connect(master);
  src.start(t, Math.random() * 0.5); src.stop(t + dur + 0.05);
}

function tone(type, f0, f1, dur, vol) {
  if (!ctx || muted) return;
  const o = ctx.createOscillator();
  o.type = type;
  const g = ctx.createGain();
  const t = ctx.currentTime;
  o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + dur + 0.05);
}

export const sfx = {
  explosion(scale = 1) {
    if (throttle('boom', 60)) return;
    noise(1.2 * scale, 400, 0.7, 1.0 * Math.min(1, scale));
    tone('sine', 120, 30, 0.8, 0.8 * Math.min(1, scale));
  },
  shoot() { if (throttle('shoot', 30)) return; tone('square', 900, 120, 0.12, 0.15); noise(0.08, 3000, 1, 0.2, 'highpass'); },
  rocket() { tone('sawtooth', 200, 60, 0.4, 0.15); noise(0.4, 900, 1, 0.3); },
  push() { tone('sine', 300, 60, 0.35, 0.4); noise(0.35, 600, 1, 0.4); },
  thunk(v) {
    if (throttle('thunk', 45)) return;
    const vol = Math.min(0.35, v * 0.025);
    noise(0.15, 250 + Math.random() * 150, 2, vol);
  },
  shatter() { if (throttle('glass', 50)) return; noise(0.4, 5000, 3, 0.35, 'highpass'); tone('triangle', 2400, 1800, 0.25, 0.08); },
  crack() { if (throttle('crack', 40)) return; noise(0.25, 900, 1.5, 0.45, 'bandpass'); },
  grab() { tone('sine', 400, 700, 0.1, 0.15); },
  fling() { tone('sine', 300, 1200, 0.18, 0.2); noise(0.2, 2000, 1, 0.12, 'highpass'); },
  pop() { tone('sine', 600, 300, 0.12, 0.2); },
  oof() { if (throttle('oof', 120)) return; tone('sawtooth', 260 + Math.random() * 60, 120, 0.22, 0.13); },
  boing() { if (throttle('boing', 80)) return; tone('sine', 200, 900, 0.3, 0.25); },
  fuse() { if (throttle('fuse', 200)) return; noise(0.3, 6000, 1, 0.08, 'highpass'); },
  squeak() { if (throttle('squeak', 150)) return; tone('square', 1400, 900, 0.12, 0.06); },
  piano(v) {
    if (throttle('piano', 120)) return;
    const notes = [261.6, 311.1, 349.2, 392, 466.2, 523.3];
    for (let i = 0; i < 3; i++) tone('triangle', notes[(Math.random() * notes.length) | 0] * (i ? 0.5 : 1), 0, 0.9, Math.min(0.12, v * 0.01));
  },
  splat() { if (throttle('splat', 60)) return; noise(0.25, 700, 0.8, 0.5); tone('sine', 180, 60, 0.2, 0.3); },
  hiss() { noise(1.8, 4000, 0.5, 0.15, 'highpass'); },
  whistle(dur = 1.2) { tone('sine', 1800, 500, dur, 0.06); },
  splash() { if (throttle('splash', 90)) return; noise(0.4, 1400, 0.6, 0.25); },
  sizzle() { noise(0.6, 7000, 0.6, 0.12, 'highpass'); },
  jump() { tone('sine', 250, 500, 0.12, 0.08); },
  shotgun() { noise(0.35, 1500, 0.7, 0.7); tone('square', 200, 50, 0.2, 0.2); },
  whir(k) { if (throttle('whir', 90)) return; tone('sawtooth', 60 + k * 200, 80 + k * 250, 0.1, 0.05); },
  rail() { tone('sawtooth', 1600, 80, 0.45, 0.2); noise(0.3, 5000, 1, 0.25, 'highpass'); },
  zap() { for (let i = 0; i < 3; i++) tone('square', 900 + Math.random() * 1500, 100, 0.15 + i * 0.05, 0.08); noise(0.3, 3000, 2, 0.3, 'bandpass'); },
  flame() { if (throttle('flame', 70)) return; noise(0.15, 900, 0.5, 0.25); },
  whack() { tone('square', 300, 80, 0.12, 0.3); noise(0.15, 1500, 1, 0.5); },
  swoosh() { noise(0.2, 2500, 2, 0.15, 'bandpass'); },
  beep() { tone('square', 1500, 1500, 0.08, 0.08); },
  blackhole() { tone('sine', 60, 20, 3.5, 0.4); tone('sawtooth', 200, 40, 3.5, 0.06); },
  plane() { noise(2, 300, 0.6, 0.2); tone('sawtooth', 110, 90, 2, 0.05); },
  hum() { if (throttle('hum', 100)) return; tone('sine', 110, 120, 0.12, 0.08); },
  freeze() { tone('triangle', 2000, 3000, 0.2, 0.1); noise(0.2, 8000, 1, 0.1, 'highpass'); },
  grow() { tone('sine', 200, 600, 0.3, 0.2); },
  shrink() { tone('sine', 700, 200, 0.3, 0.2); },
  ray() { if (throttle('ray', 60)) return; tone('sine', 900, 1300, 0.12, 0.1); },
  teleport() { tone('sine', 400, 1600, 0.25, 0.15); },
  weld() { noise(0.3, 4000, 3, 0.3, 'bandpass'); },
  groan() { if (throttle('groan', 1500)) return; tone('sawtooth', 110, 80, 0.7, 0.05); },
};

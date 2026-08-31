/**
 * FruitQuest - Web Audio API Sound Synthesizer
 * 100% Procedural Audio Engine - Zero external audio files required!
 * Synthesizes cheerful chimes, fanfare, wrong buzzers, slicer whooshes,
 * and optional procedural retro arcade background music.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.musicPlaying = false;
    this.musicTimer = null;
    this.volume = 0.3;
    this.masterGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
    }
    if (this.muted && this.musicPlaying) {
      this.stopMusic();
    }
    return this.muted;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.muted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, startTime = 0, gainVal = 0.4) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = this.ctx.currentTime + startTime;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(gainVal, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + duration);
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  }

  playClick() {
    if (this.muted) return;
    this.init();
    this.playTone(800, 'triangle', 0.05, 0, 0.2);
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    // Happy bright ascending chord (C5 - E5 - G5 - C6)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, index) => {
      this.playTone(freq, 'triangle', 0.25, index * 0.06, 0.4);
    });
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      // Dissonant descending buzz
      const t = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';

      osc1.frequency.setValueAtTime(160, t);
      osc1.frequency.linearRampToValueAtTime(110, t + 0.3);

      osc2.frequency.setValueAtTime(155, t);
      osc2.frequency.linearRampToValueAtTime(105, t + 0.3);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.linearRampToValueAtTime(0.0001, t + 0.3);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.masterGain);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.3);
      osc2.stop(t + 0.3);
    } catch (e) {}
  }

  playStreak(count = 2) {
    if (this.muted) return;
    this.init();
    // Higher pitched arpeggio based on streak size
    const baseFreq = Math.min(1200, 440 + count * 60);
    const chord = [baseFreq, baseFreq * 1.25, baseFreq * 1.5, baseFreq * 2];
    chord.forEach((freq, idx) => {
      this.playTone(freq, 'sine', 0.2, idx * 0.05, 0.35);
    });
  }

  playCoin() {
    if (this.muted) return;
    this.init();
    this.playTone(987.77, 'sine', 0.1, 0, 0.3);
    this.playTone(1318.51, 'sine', 0.25, 0.08, 0.35);
  }

  playLevelUp() {
    if (this.muted) return;
    this.init();
    const fanfare = [
      { f: 523.25, d: 0.1, delay: 0 },
      { f: 659.25, d: 0.1, delay: 0.1 },
      { f: 783.99, d: 0.1, delay: 0.2 },
      { f: 1046.5, d: 0.35, delay: 0.3 },
      { f: 880.00, d: 0.1, delay: 0.5 },
      { f: 1046.5, d: 0.5, delay: 0.62 }
    ];
    fanfare.forEach(note => {
      this.playTone(note.f, 'triangle', note.d, note.delay, 0.4);
    });
  }

  playGameOver() {
    if (this.muted) return;
    this.init();
    const notes = [440, 415.30, 392, 349.23];
    notes.forEach((f, idx) => {
      this.playTone(f, 'sawtooth', 0.3, idx * 0.15, 0.25);
    });
  }

  playTick() {
    if (this.muted) return;
    this.init();
    this.playTone(1200, 'triangle', 0.03, 0, 0.15);
  }

  playSlice() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      // Noise burst for blade slicing sound
      const bufferSize = this.ctx.sampleRate * 0.1;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(2500, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.1);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      whiteNoise.start();
    } catch(e) {}
  }

  playPowerup() {
    if (this.muted) return;
    this.init();
    const notes = [300, 400, 550, 750, 1000];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'sine', 0.1, idx * 0.04, 0.3);
    });
  }

  // Optional background arcade ambient melody loop
  startMusic() {
    if (this.muted || this.musicPlaying) return;
    this.init();
    this.musicPlaying = true;
    
    // Simple 8-bar pentatonic tune
    const melody = [
      261.63, 329.63, 392.00, 523.25, 392.00, 329.63, 261.63, 0,
      293.66, 369.99, 440.00, 587.33, 440.00, 369.99, 293.66, 0,
      329.63, 392.00, 493.88, 659.25, 493.88, 392.00, 329.63, 0,
      392.00, 493.88, 587.33, 783.99, 587.33, 493.88, 392.00, 0
    ];
    let noteIdx = 0;

    const playNext = () => {
      if (!this.musicPlaying || this.muted) return;
      const freq = melody[noteIdx % melody.length];
      if (freq > 0) {
        this.playTone(freq, 'sine', 0.18, 0, 0.08); // very soft background
      }
      noteIdx++;
      this.musicTimer = setTimeout(playNext, 220);
    };

    playNext();
  }

  stopMusic() {
    this.musicPlaying = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  toggleMusic() {
    if (this.musicPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }
}

// Global instance
window.sound = new SoundEngine();

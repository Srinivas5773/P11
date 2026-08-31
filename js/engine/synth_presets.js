/**
 * FruitQuest - Retro Sound Chip & Synth Preset Matrix
 * Emulates vintage 8-bit sound synthesizers with dynamic envelope shapers.
 */

const RETRO_CHIP_PRESETS = {
  gameboy_lead: { type: "square", attack: 0.01, decay: 0.05, sustain: 0.3, release: 0.1, dutyCycle: 0.5 },
  nes_triangle_bass: { type: "triangle", attack: 0.005, decay: 0.1, sustain: 0.8, release: 0.05 },
  arcade_noise_hit: { type: "sawtooth", attack: 0.001, decay: 0.08, sustain: 0.1, release: 0.02 },
  dreamy_pad: { type: "sine", attack: 0.3, decay: 0.5, sustain: 0.6, release: 0.8 }
};

class SynthPresetController {
  constructor() {
    this.presets = RETRO_CHIP_PRESETS;
    this.currentPreset = 'gameboy_lead';
  }

  getPreset(name) {
    return this.presets[name] || this.presets.gameboy_lead;
  }
}

if (typeof window !== 'undefined') {
  window.synthPresets = new SynthPresetController();
}

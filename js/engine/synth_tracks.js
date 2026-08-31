/**
 * FruitQuest - Chiptune Multi-Track Synthesizer Note Sheets & Sound Banks
 * 600 Polyphonic procedural track arrangements, frequency modulation tables,
 * and dynamic oscillator presets.
 */

const SYNTH_SOUND_BANKS = [
  {
    "trackId": "synth_track_1",
    "trackName": "Chiptune Orchard Symphony Suite #1",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_2",
    "trackName": "Chiptune Orchard Symphony Suite #2",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_3",
    "trackName": "Chiptune Orchard Symphony Suite #3",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_4",
    "trackName": "Chiptune Orchard Symphony Suite #4",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_5",
    "trackName": "Chiptune Orchard Symphony Suite #5",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_6",
    "trackName": "Chiptune Orchard Symphony Suite #6",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_7",
    "trackName": "Chiptune Orchard Symphony Suite #7",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_8",
    "trackName": "Chiptune Orchard Symphony Suite #8",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_9",
    "trackName": "Chiptune Orchard Symphony Suite #9",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_10",
    "trackName": "Chiptune Orchard Symphony Suite #10",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_11",
    "trackName": "Chiptune Orchard Symphony Suite #11",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_12",
    "trackName": "Chiptune Orchard Symphony Suite #12",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_13",
    "trackName": "Chiptune Orchard Symphony Suite #13",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_14",
    "trackName": "Chiptune Orchard Symphony Suite #14",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_15",
    "trackName": "Chiptune Orchard Symphony Suite #15",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_16",
    "trackName": "Chiptune Orchard Symphony Suite #16",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_17",
    "trackName": "Chiptune Orchard Symphony Suite #17",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_18",
    "trackName": "Chiptune Orchard Symphony Suite #18",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_19",
    "trackName": "Chiptune Orchard Symphony Suite #19",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_20",
    "trackName": "Chiptune Orchard Symphony Suite #20",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_21",
    "trackName": "Chiptune Orchard Symphony Suite #21",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_22",
    "trackName": "Chiptune Orchard Symphony Suite #22",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_23",
    "trackName": "Chiptune Orchard Symphony Suite #23",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_24",
    "trackName": "Chiptune Orchard Symphony Suite #24",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_25",
    "trackName": "Chiptune Orchard Symphony Suite #25",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_26",
    "trackName": "Chiptune Orchard Symphony Suite #26",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_27",
    "trackName": "Chiptune Orchard Symphony Suite #27",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_28",
    "trackName": "Chiptune Orchard Symphony Suite #28",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_29",
    "trackName": "Chiptune Orchard Symphony Suite #29",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_30",
    "trackName": "Chiptune Orchard Symphony Suite #30",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_31",
    "trackName": "Chiptune Orchard Symphony Suite #31",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_32",
    "trackName": "Chiptune Orchard Symphony Suite #32",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_33",
    "trackName": "Chiptune Orchard Symphony Suite #33",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_34",
    "trackName": "Chiptune Orchard Symphony Suite #34",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_35",
    "trackName": "Chiptune Orchard Symphony Suite #35",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_36",
    "trackName": "Chiptune Orchard Symphony Suite #36",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_37",
    "trackName": "Chiptune Orchard Symphony Suite #37",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_38",
    "trackName": "Chiptune Orchard Symphony Suite #38",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_39",
    "trackName": "Chiptune Orchard Symphony Suite #39",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_40",
    "trackName": "Chiptune Orchard Symphony Suite #40",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_41",
    "trackName": "Chiptune Orchard Symphony Suite #41",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_42",
    "trackName": "Chiptune Orchard Symphony Suite #42",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_43",
    "trackName": "Chiptune Orchard Symphony Suite #43",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_44",
    "trackName": "Chiptune Orchard Symphony Suite #44",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_45",
    "trackName": "Chiptune Orchard Symphony Suite #45",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_46",
    "trackName": "Chiptune Orchard Symphony Suite #46",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_47",
    "trackName": "Chiptune Orchard Symphony Suite #47",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_48",
    "trackName": "Chiptune Orchard Symphony Suite #48",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_49",
    "trackName": "Chiptune Orchard Symphony Suite #49",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_50",
    "trackName": "Chiptune Orchard Symphony Suite #50",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_51",
    "trackName": "Chiptune Orchard Symphony Suite #51",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_52",
    "trackName": "Chiptune Orchard Symphony Suite #52",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_53",
    "trackName": "Chiptune Orchard Symphony Suite #53",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_54",
    "trackName": "Chiptune Orchard Symphony Suite #54",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_55",
    "trackName": "Chiptune Orchard Symphony Suite #55",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_56",
    "trackName": "Chiptune Orchard Symphony Suite #56",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_57",
    "trackName": "Chiptune Orchard Symphony Suite #57",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_58",
    "trackName": "Chiptune Orchard Symphony Suite #58",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_59",
    "trackName": "Chiptune Orchard Symphony Suite #59",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_60",
    "trackName": "Chiptune Orchard Symphony Suite #60",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_61",
    "trackName": "Chiptune Orchard Symphony Suite #61",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_62",
    "trackName": "Chiptune Orchard Symphony Suite #62",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_63",
    "trackName": "Chiptune Orchard Symphony Suite #63",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_64",
    "trackName": "Chiptune Orchard Symphony Suite #64",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_65",
    "trackName": "Chiptune Orchard Symphony Suite #65",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_66",
    "trackName": "Chiptune Orchard Symphony Suite #66",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_67",
    "trackName": "Chiptune Orchard Symphony Suite #67",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_68",
    "trackName": "Chiptune Orchard Symphony Suite #68",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_69",
    "trackName": "Chiptune Orchard Symphony Suite #69",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_70",
    "trackName": "Chiptune Orchard Symphony Suite #70",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_71",
    "trackName": "Chiptune Orchard Symphony Suite #71",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_72",
    "trackName": "Chiptune Orchard Symphony Suite #72",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_73",
    "trackName": "Chiptune Orchard Symphony Suite #73",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_74",
    "trackName": "Chiptune Orchard Symphony Suite #74",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_75",
    "trackName": "Chiptune Orchard Symphony Suite #75",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_76",
    "trackName": "Chiptune Orchard Symphony Suite #76",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_77",
    "trackName": "Chiptune Orchard Symphony Suite #77",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_78",
    "trackName": "Chiptune Orchard Symphony Suite #78",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_79",
    "trackName": "Chiptune Orchard Symphony Suite #79",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_80",
    "trackName": "Chiptune Orchard Symphony Suite #80",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_81",
    "trackName": "Chiptune Orchard Symphony Suite #81",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_82",
    "trackName": "Chiptune Orchard Symphony Suite #82",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_83",
    "trackName": "Chiptune Orchard Symphony Suite #83",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_84",
    "trackName": "Chiptune Orchard Symphony Suite #84",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_85",
    "trackName": "Chiptune Orchard Symphony Suite #85",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_86",
    "trackName": "Chiptune Orchard Symphony Suite #86",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_87",
    "trackName": "Chiptune Orchard Symphony Suite #87",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_88",
    "trackName": "Chiptune Orchard Symphony Suite #88",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_89",
    "trackName": "Chiptune Orchard Symphony Suite #89",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_90",
    "trackName": "Chiptune Orchard Symphony Suite #90",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_91",
    "trackName": "Chiptune Orchard Symphony Suite #91",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_92",
    "trackName": "Chiptune Orchard Symphony Suite #92",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_93",
    "trackName": "Chiptune Orchard Symphony Suite #93",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_94",
    "trackName": "Chiptune Orchard Symphony Suite #94",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_95",
    "trackName": "Chiptune Orchard Symphony Suite #95",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_96",
    "trackName": "Chiptune Orchard Symphony Suite #96",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_97",
    "trackName": "Chiptune Orchard Symphony Suite #97",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_98",
    "trackName": "Chiptune Orchard Symphony Suite #98",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_99",
    "trackName": "Chiptune Orchard Symphony Suite #99",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_100",
    "trackName": "Chiptune Orchard Symphony Suite #100",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_101",
    "trackName": "Chiptune Orchard Symphony Suite #101",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_102",
    "trackName": "Chiptune Orchard Symphony Suite #102",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_103",
    "trackName": "Chiptune Orchard Symphony Suite #103",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_104",
    "trackName": "Chiptune Orchard Symphony Suite #104",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_105",
    "trackName": "Chiptune Orchard Symphony Suite #105",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_106",
    "trackName": "Chiptune Orchard Symphony Suite #106",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_107",
    "trackName": "Chiptune Orchard Symphony Suite #107",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_108",
    "trackName": "Chiptune Orchard Symphony Suite #108",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_109",
    "trackName": "Chiptune Orchard Symphony Suite #109",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_110",
    "trackName": "Chiptune Orchard Symphony Suite #110",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_111",
    "trackName": "Chiptune Orchard Symphony Suite #111",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_112",
    "trackName": "Chiptune Orchard Symphony Suite #112",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_113",
    "trackName": "Chiptune Orchard Symphony Suite #113",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_114",
    "trackName": "Chiptune Orchard Symphony Suite #114",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_115",
    "trackName": "Chiptune Orchard Symphony Suite #115",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_116",
    "trackName": "Chiptune Orchard Symphony Suite #116",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_117",
    "trackName": "Chiptune Orchard Symphony Suite #117",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_118",
    "trackName": "Chiptune Orchard Symphony Suite #118",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_119",
    "trackName": "Chiptune Orchard Symphony Suite #119",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_120",
    "trackName": "Chiptune Orchard Symphony Suite #120",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_121",
    "trackName": "Chiptune Orchard Symphony Suite #121",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_122",
    "trackName": "Chiptune Orchard Symphony Suite #122",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_123",
    "trackName": "Chiptune Orchard Symphony Suite #123",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_124",
    "trackName": "Chiptune Orchard Symphony Suite #124",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_125",
    "trackName": "Chiptune Orchard Symphony Suite #125",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_126",
    "trackName": "Chiptune Orchard Symphony Suite #126",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_127",
    "trackName": "Chiptune Orchard Symphony Suite #127",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_128",
    "trackName": "Chiptune Orchard Symphony Suite #128",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_129",
    "trackName": "Chiptune Orchard Symphony Suite #129",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_130",
    "trackName": "Chiptune Orchard Symphony Suite #130",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_131",
    "trackName": "Chiptune Orchard Symphony Suite #131",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_132",
    "trackName": "Chiptune Orchard Symphony Suite #132",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_133",
    "trackName": "Chiptune Orchard Symphony Suite #133",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_134",
    "trackName": "Chiptune Orchard Symphony Suite #134",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_135",
    "trackName": "Chiptune Orchard Symphony Suite #135",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_136",
    "trackName": "Chiptune Orchard Symphony Suite #136",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_137",
    "trackName": "Chiptune Orchard Symphony Suite #137",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_138",
    "trackName": "Chiptune Orchard Symphony Suite #138",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_139",
    "trackName": "Chiptune Orchard Symphony Suite #139",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_140",
    "trackName": "Chiptune Orchard Symphony Suite #140",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_141",
    "trackName": "Chiptune Orchard Symphony Suite #141",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_142",
    "trackName": "Chiptune Orchard Symphony Suite #142",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_143",
    "trackName": "Chiptune Orchard Symphony Suite #143",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_144",
    "trackName": "Chiptune Orchard Symphony Suite #144",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_145",
    "trackName": "Chiptune Orchard Symphony Suite #145",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_146",
    "trackName": "Chiptune Orchard Symphony Suite #146",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_147",
    "trackName": "Chiptune Orchard Symphony Suite #147",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_148",
    "trackName": "Chiptune Orchard Symphony Suite #148",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_149",
    "trackName": "Chiptune Orchard Symphony Suite #149",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_150",
    "trackName": "Chiptune Orchard Symphony Suite #150",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_151",
    "trackName": "Chiptune Orchard Symphony Suite #151",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_152",
    "trackName": "Chiptune Orchard Symphony Suite #152",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_153",
    "trackName": "Chiptune Orchard Symphony Suite #153",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_154",
    "trackName": "Chiptune Orchard Symphony Suite #154",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_155",
    "trackName": "Chiptune Orchard Symphony Suite #155",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_156",
    "trackName": "Chiptune Orchard Symphony Suite #156",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_157",
    "trackName": "Chiptune Orchard Symphony Suite #157",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_158",
    "trackName": "Chiptune Orchard Symphony Suite #158",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_159",
    "trackName": "Chiptune Orchard Symphony Suite #159",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_160",
    "trackName": "Chiptune Orchard Symphony Suite #160",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_161",
    "trackName": "Chiptune Orchard Symphony Suite #161",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_162",
    "trackName": "Chiptune Orchard Symphony Suite #162",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_163",
    "trackName": "Chiptune Orchard Symphony Suite #163",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_164",
    "trackName": "Chiptune Orchard Symphony Suite #164",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_165",
    "trackName": "Chiptune Orchard Symphony Suite #165",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_166",
    "trackName": "Chiptune Orchard Symphony Suite #166",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_167",
    "trackName": "Chiptune Orchard Symphony Suite #167",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_168",
    "trackName": "Chiptune Orchard Symphony Suite #168",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_169",
    "trackName": "Chiptune Orchard Symphony Suite #169",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_170",
    "trackName": "Chiptune Orchard Symphony Suite #170",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_171",
    "trackName": "Chiptune Orchard Symphony Suite #171",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_172",
    "trackName": "Chiptune Orchard Symphony Suite #172",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_173",
    "trackName": "Chiptune Orchard Symphony Suite #173",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_174",
    "trackName": "Chiptune Orchard Symphony Suite #174",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_175",
    "trackName": "Chiptune Orchard Symphony Suite #175",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_176",
    "trackName": "Chiptune Orchard Symphony Suite #176",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_177",
    "trackName": "Chiptune Orchard Symphony Suite #177",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_178",
    "trackName": "Chiptune Orchard Symphony Suite #178",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_179",
    "trackName": "Chiptune Orchard Symphony Suite #179",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_180",
    "trackName": "Chiptune Orchard Symphony Suite #180",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_181",
    "trackName": "Chiptune Orchard Symphony Suite #181",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_182",
    "trackName": "Chiptune Orchard Symphony Suite #182",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_183",
    "trackName": "Chiptune Orchard Symphony Suite #183",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_184",
    "trackName": "Chiptune Orchard Symphony Suite #184",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_185",
    "trackName": "Chiptune Orchard Symphony Suite #185",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_186",
    "trackName": "Chiptune Orchard Symphony Suite #186",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_187",
    "trackName": "Chiptune Orchard Symphony Suite #187",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_188",
    "trackName": "Chiptune Orchard Symphony Suite #188",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_189",
    "trackName": "Chiptune Orchard Symphony Suite #189",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_190",
    "trackName": "Chiptune Orchard Symphony Suite #190",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_191",
    "trackName": "Chiptune Orchard Symphony Suite #191",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_192",
    "trackName": "Chiptune Orchard Symphony Suite #192",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_193",
    "trackName": "Chiptune Orchard Symphony Suite #193",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_194",
    "trackName": "Chiptune Orchard Symphony Suite #194",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_195",
    "trackName": "Chiptune Orchard Symphony Suite #195",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_196",
    "trackName": "Chiptune Orchard Symphony Suite #196",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_197",
    "trackName": "Chiptune Orchard Symphony Suite #197",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_198",
    "trackName": "Chiptune Orchard Symphony Suite #198",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_199",
    "trackName": "Chiptune Orchard Symphony Suite #199",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_200",
    "trackName": "Chiptune Orchard Symphony Suite #200",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_201",
    "trackName": "Chiptune Orchard Symphony Suite #201",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_202",
    "trackName": "Chiptune Orchard Symphony Suite #202",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_203",
    "trackName": "Chiptune Orchard Symphony Suite #203",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_204",
    "trackName": "Chiptune Orchard Symphony Suite #204",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_205",
    "trackName": "Chiptune Orchard Symphony Suite #205",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_206",
    "trackName": "Chiptune Orchard Symphony Suite #206",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_207",
    "trackName": "Chiptune Orchard Symphony Suite #207",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_208",
    "trackName": "Chiptune Orchard Symphony Suite #208",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_209",
    "trackName": "Chiptune Orchard Symphony Suite #209",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_210",
    "trackName": "Chiptune Orchard Symphony Suite #210",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_211",
    "trackName": "Chiptune Orchard Symphony Suite #211",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_212",
    "trackName": "Chiptune Orchard Symphony Suite #212",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_213",
    "trackName": "Chiptune Orchard Symphony Suite #213",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_214",
    "trackName": "Chiptune Orchard Symphony Suite #214",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_215",
    "trackName": "Chiptune Orchard Symphony Suite #215",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_216",
    "trackName": "Chiptune Orchard Symphony Suite #216",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_217",
    "trackName": "Chiptune Orchard Symphony Suite #217",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_218",
    "trackName": "Chiptune Orchard Symphony Suite #218",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_219",
    "trackName": "Chiptune Orchard Symphony Suite #219",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_220",
    "trackName": "Chiptune Orchard Symphony Suite #220",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_221",
    "trackName": "Chiptune Orchard Symphony Suite #221",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_222",
    "trackName": "Chiptune Orchard Symphony Suite #222",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_223",
    "trackName": "Chiptune Orchard Symphony Suite #223",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_224",
    "trackName": "Chiptune Orchard Symphony Suite #224",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_225",
    "trackName": "Chiptune Orchard Symphony Suite #225",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_226",
    "trackName": "Chiptune Orchard Symphony Suite #226",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_227",
    "trackName": "Chiptune Orchard Symphony Suite #227",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_228",
    "trackName": "Chiptune Orchard Symphony Suite #228",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_229",
    "trackName": "Chiptune Orchard Symphony Suite #229",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_230",
    "trackName": "Chiptune Orchard Symphony Suite #230",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_231",
    "trackName": "Chiptune Orchard Symphony Suite #231",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_232",
    "trackName": "Chiptune Orchard Symphony Suite #232",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_233",
    "trackName": "Chiptune Orchard Symphony Suite #233",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_234",
    "trackName": "Chiptune Orchard Symphony Suite #234",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_235",
    "trackName": "Chiptune Orchard Symphony Suite #235",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_236",
    "trackName": "Chiptune Orchard Symphony Suite #236",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_237",
    "trackName": "Chiptune Orchard Symphony Suite #237",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_238",
    "trackName": "Chiptune Orchard Symphony Suite #238",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_239",
    "trackName": "Chiptune Orchard Symphony Suite #239",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_240",
    "trackName": "Chiptune Orchard Symphony Suite #240",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_241",
    "trackName": "Chiptune Orchard Symphony Suite #241",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_242",
    "trackName": "Chiptune Orchard Symphony Suite #242",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_243",
    "trackName": "Chiptune Orchard Symphony Suite #243",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_244",
    "trackName": "Chiptune Orchard Symphony Suite #244",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_245",
    "trackName": "Chiptune Orchard Symphony Suite #245",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_246",
    "trackName": "Chiptune Orchard Symphony Suite #246",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_247",
    "trackName": "Chiptune Orchard Symphony Suite #247",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_248",
    "trackName": "Chiptune Orchard Symphony Suite #248",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_249",
    "trackName": "Chiptune Orchard Symphony Suite #249",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_250",
    "trackName": "Chiptune Orchard Symphony Suite #250",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_251",
    "trackName": "Chiptune Orchard Symphony Suite #251",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_252",
    "trackName": "Chiptune Orchard Symphony Suite #252",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_253",
    "trackName": "Chiptune Orchard Symphony Suite #253",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_254",
    "trackName": "Chiptune Orchard Symphony Suite #254",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_255",
    "trackName": "Chiptune Orchard Symphony Suite #255",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_256",
    "trackName": "Chiptune Orchard Symphony Suite #256",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_257",
    "trackName": "Chiptune Orchard Symphony Suite #257",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_258",
    "trackName": "Chiptune Orchard Symphony Suite #258",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_259",
    "trackName": "Chiptune Orchard Symphony Suite #259",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_260",
    "trackName": "Chiptune Orchard Symphony Suite #260",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_261",
    "trackName": "Chiptune Orchard Symphony Suite #261",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_262",
    "trackName": "Chiptune Orchard Symphony Suite #262",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_263",
    "trackName": "Chiptune Orchard Symphony Suite #263",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_264",
    "trackName": "Chiptune Orchard Symphony Suite #264",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_265",
    "trackName": "Chiptune Orchard Symphony Suite #265",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_266",
    "trackName": "Chiptune Orchard Symphony Suite #266",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_267",
    "trackName": "Chiptune Orchard Symphony Suite #267",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_268",
    "trackName": "Chiptune Orchard Symphony Suite #268",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_269",
    "trackName": "Chiptune Orchard Symphony Suite #269",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_270",
    "trackName": "Chiptune Orchard Symphony Suite #270",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_271",
    "trackName": "Chiptune Orchard Symphony Suite #271",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_272",
    "trackName": "Chiptune Orchard Symphony Suite #272",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_273",
    "trackName": "Chiptune Orchard Symphony Suite #273",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_274",
    "trackName": "Chiptune Orchard Symphony Suite #274",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_275",
    "trackName": "Chiptune Orchard Symphony Suite #275",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_276",
    "trackName": "Chiptune Orchard Symphony Suite #276",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_277",
    "trackName": "Chiptune Orchard Symphony Suite #277",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_278",
    "trackName": "Chiptune Orchard Symphony Suite #278",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_279",
    "trackName": "Chiptune Orchard Symphony Suite #279",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_280",
    "trackName": "Chiptune Orchard Symphony Suite #280",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_281",
    "trackName": "Chiptune Orchard Symphony Suite #281",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_282",
    "trackName": "Chiptune Orchard Symphony Suite #282",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_283",
    "trackName": "Chiptune Orchard Symphony Suite #283",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_284",
    "trackName": "Chiptune Orchard Symphony Suite #284",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_285",
    "trackName": "Chiptune Orchard Symphony Suite #285",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_286",
    "trackName": "Chiptune Orchard Symphony Suite #286",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_287",
    "trackName": "Chiptune Orchard Symphony Suite #287",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_288",
    "trackName": "Chiptune Orchard Symphony Suite #288",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_289",
    "trackName": "Chiptune Orchard Symphony Suite #289",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_290",
    "trackName": "Chiptune Orchard Symphony Suite #290",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_291",
    "trackName": "Chiptune Orchard Symphony Suite #291",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_292",
    "trackName": "Chiptune Orchard Symphony Suite #292",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_293",
    "trackName": "Chiptune Orchard Symphony Suite #293",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_294",
    "trackName": "Chiptune Orchard Symphony Suite #294",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_295",
    "trackName": "Chiptune Orchard Symphony Suite #295",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_296",
    "trackName": "Chiptune Orchard Symphony Suite #296",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_297",
    "trackName": "Chiptune Orchard Symphony Suite #297",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_298",
    "trackName": "Chiptune Orchard Symphony Suite #298",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_299",
    "trackName": "Chiptune Orchard Symphony Suite #299",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_300",
    "trackName": "Chiptune Orchard Symphony Suite #300",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_301",
    "trackName": "Chiptune Orchard Symphony Suite #301",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_302",
    "trackName": "Chiptune Orchard Symphony Suite #302",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_303",
    "trackName": "Chiptune Orchard Symphony Suite #303",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_304",
    "trackName": "Chiptune Orchard Symphony Suite #304",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_305",
    "trackName": "Chiptune Orchard Symphony Suite #305",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_306",
    "trackName": "Chiptune Orchard Symphony Suite #306",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_307",
    "trackName": "Chiptune Orchard Symphony Suite #307",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_308",
    "trackName": "Chiptune Orchard Symphony Suite #308",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_309",
    "trackName": "Chiptune Orchard Symphony Suite #309",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_310",
    "trackName": "Chiptune Orchard Symphony Suite #310",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_311",
    "trackName": "Chiptune Orchard Symphony Suite #311",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_312",
    "trackName": "Chiptune Orchard Symphony Suite #312",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_313",
    "trackName": "Chiptune Orchard Symphony Suite #313",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_314",
    "trackName": "Chiptune Orchard Symphony Suite #314",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_315",
    "trackName": "Chiptune Orchard Symphony Suite #315",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_316",
    "trackName": "Chiptune Orchard Symphony Suite #316",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_317",
    "trackName": "Chiptune Orchard Symphony Suite #317",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_318",
    "trackName": "Chiptune Orchard Symphony Suite #318",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_319",
    "trackName": "Chiptune Orchard Symphony Suite #319",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_320",
    "trackName": "Chiptune Orchard Symphony Suite #320",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_321",
    "trackName": "Chiptune Orchard Symphony Suite #321",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_322",
    "trackName": "Chiptune Orchard Symphony Suite #322",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_323",
    "trackName": "Chiptune Orchard Symphony Suite #323",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_324",
    "trackName": "Chiptune Orchard Symphony Suite #324",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_325",
    "trackName": "Chiptune Orchard Symphony Suite #325",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_326",
    "trackName": "Chiptune Orchard Symphony Suite #326",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_327",
    "trackName": "Chiptune Orchard Symphony Suite #327",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_328",
    "trackName": "Chiptune Orchard Symphony Suite #328",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_329",
    "trackName": "Chiptune Orchard Symphony Suite #329",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_330",
    "trackName": "Chiptune Orchard Symphony Suite #330",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_331",
    "trackName": "Chiptune Orchard Symphony Suite #331",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_332",
    "trackName": "Chiptune Orchard Symphony Suite #332",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_333",
    "trackName": "Chiptune Orchard Symphony Suite #333",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_334",
    "trackName": "Chiptune Orchard Symphony Suite #334",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_335",
    "trackName": "Chiptune Orchard Symphony Suite #335",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_336",
    "trackName": "Chiptune Orchard Symphony Suite #336",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_337",
    "trackName": "Chiptune Orchard Symphony Suite #337",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_338",
    "trackName": "Chiptune Orchard Symphony Suite #338",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_339",
    "trackName": "Chiptune Orchard Symphony Suite #339",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_340",
    "trackName": "Chiptune Orchard Symphony Suite #340",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_341",
    "trackName": "Chiptune Orchard Symphony Suite #341",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_342",
    "trackName": "Chiptune Orchard Symphony Suite #342",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_343",
    "trackName": "Chiptune Orchard Symphony Suite #343",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_344",
    "trackName": "Chiptune Orchard Symphony Suite #344",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_345",
    "trackName": "Chiptune Orchard Symphony Suite #345",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_346",
    "trackName": "Chiptune Orchard Symphony Suite #346",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_347",
    "trackName": "Chiptune Orchard Symphony Suite #347",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_348",
    "trackName": "Chiptune Orchard Symphony Suite #348",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_349",
    "trackName": "Chiptune Orchard Symphony Suite #349",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_350",
    "trackName": "Chiptune Orchard Symphony Suite #350",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_351",
    "trackName": "Chiptune Orchard Symphony Suite #351",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_352",
    "trackName": "Chiptune Orchard Symphony Suite #352",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_353",
    "trackName": "Chiptune Orchard Symphony Suite #353",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_354",
    "trackName": "Chiptune Orchard Symphony Suite #354",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_355",
    "trackName": "Chiptune Orchard Symphony Suite #355",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_356",
    "trackName": "Chiptune Orchard Symphony Suite #356",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_357",
    "trackName": "Chiptune Orchard Symphony Suite #357",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_358",
    "trackName": "Chiptune Orchard Symphony Suite #358",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_359",
    "trackName": "Chiptune Orchard Symphony Suite #359",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_360",
    "trackName": "Chiptune Orchard Symphony Suite #360",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_361",
    "trackName": "Chiptune Orchard Symphony Suite #361",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_362",
    "trackName": "Chiptune Orchard Symphony Suite #362",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_363",
    "trackName": "Chiptune Orchard Symphony Suite #363",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_364",
    "trackName": "Chiptune Orchard Symphony Suite #364",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_365",
    "trackName": "Chiptune Orchard Symphony Suite #365",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_366",
    "trackName": "Chiptune Orchard Symphony Suite #366",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_367",
    "trackName": "Chiptune Orchard Symphony Suite #367",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_368",
    "trackName": "Chiptune Orchard Symphony Suite #368",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_369",
    "trackName": "Chiptune Orchard Symphony Suite #369",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_370",
    "trackName": "Chiptune Orchard Symphony Suite #370",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_371",
    "trackName": "Chiptune Orchard Symphony Suite #371",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_372",
    "trackName": "Chiptune Orchard Symphony Suite #372",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_373",
    "trackName": "Chiptune Orchard Symphony Suite #373",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_374",
    "trackName": "Chiptune Orchard Symphony Suite #374",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_375",
    "trackName": "Chiptune Orchard Symphony Suite #375",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_376",
    "trackName": "Chiptune Orchard Symphony Suite #376",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_377",
    "trackName": "Chiptune Orchard Symphony Suite #377",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_378",
    "trackName": "Chiptune Orchard Symphony Suite #378",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_379",
    "trackName": "Chiptune Orchard Symphony Suite #379",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_380",
    "trackName": "Chiptune Orchard Symphony Suite #380",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_381",
    "trackName": "Chiptune Orchard Symphony Suite #381",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_382",
    "trackName": "Chiptune Orchard Symphony Suite #382",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_383",
    "trackName": "Chiptune Orchard Symphony Suite #383",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_384",
    "trackName": "Chiptune Orchard Symphony Suite #384",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_385",
    "trackName": "Chiptune Orchard Symphony Suite #385",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_386",
    "trackName": "Chiptune Orchard Symphony Suite #386",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_387",
    "trackName": "Chiptune Orchard Symphony Suite #387",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_388",
    "trackName": "Chiptune Orchard Symphony Suite #388",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_389",
    "trackName": "Chiptune Orchard Symphony Suite #389",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_390",
    "trackName": "Chiptune Orchard Symphony Suite #390",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_391",
    "trackName": "Chiptune Orchard Symphony Suite #391",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_392",
    "trackName": "Chiptune Orchard Symphony Suite #392",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_393",
    "trackName": "Chiptune Orchard Symphony Suite #393",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_394",
    "trackName": "Chiptune Orchard Symphony Suite #394",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_395",
    "trackName": "Chiptune Orchard Symphony Suite #395",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_396",
    "trackName": "Chiptune Orchard Symphony Suite #396",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_397",
    "trackName": "Chiptune Orchard Symphony Suite #397",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_398",
    "trackName": "Chiptune Orchard Symphony Suite #398",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_399",
    "trackName": "Chiptune Orchard Symphony Suite #399",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_400",
    "trackName": "Chiptune Orchard Symphony Suite #400",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_401",
    "trackName": "Chiptune Orchard Symphony Suite #401",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_402",
    "trackName": "Chiptune Orchard Symphony Suite #402",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_403",
    "trackName": "Chiptune Orchard Symphony Suite #403",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_404",
    "trackName": "Chiptune Orchard Symphony Suite #404",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_405",
    "trackName": "Chiptune Orchard Symphony Suite #405",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_406",
    "trackName": "Chiptune Orchard Symphony Suite #406",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_407",
    "trackName": "Chiptune Orchard Symphony Suite #407",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_408",
    "trackName": "Chiptune Orchard Symphony Suite #408",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_409",
    "trackName": "Chiptune Orchard Symphony Suite #409",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_410",
    "trackName": "Chiptune Orchard Symphony Suite #410",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_411",
    "trackName": "Chiptune Orchard Symphony Suite #411",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_412",
    "trackName": "Chiptune Orchard Symphony Suite #412",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_413",
    "trackName": "Chiptune Orchard Symphony Suite #413",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_414",
    "trackName": "Chiptune Orchard Symphony Suite #414",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_415",
    "trackName": "Chiptune Orchard Symphony Suite #415",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_416",
    "trackName": "Chiptune Orchard Symphony Suite #416",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_417",
    "trackName": "Chiptune Orchard Symphony Suite #417",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_418",
    "trackName": "Chiptune Orchard Symphony Suite #418",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_419",
    "trackName": "Chiptune Orchard Symphony Suite #419",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_420",
    "trackName": "Chiptune Orchard Symphony Suite #420",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_421",
    "trackName": "Chiptune Orchard Symphony Suite #421",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_422",
    "trackName": "Chiptune Orchard Symphony Suite #422",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_423",
    "trackName": "Chiptune Orchard Symphony Suite #423",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_424",
    "trackName": "Chiptune Orchard Symphony Suite #424",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_425",
    "trackName": "Chiptune Orchard Symphony Suite #425",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_426",
    "trackName": "Chiptune Orchard Symphony Suite #426",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_427",
    "trackName": "Chiptune Orchard Symphony Suite #427",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_428",
    "trackName": "Chiptune Orchard Symphony Suite #428",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_429",
    "trackName": "Chiptune Orchard Symphony Suite #429",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_430",
    "trackName": "Chiptune Orchard Symphony Suite #430",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_431",
    "trackName": "Chiptune Orchard Symphony Suite #431",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_432",
    "trackName": "Chiptune Orchard Symphony Suite #432",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_433",
    "trackName": "Chiptune Orchard Symphony Suite #433",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_434",
    "trackName": "Chiptune Orchard Symphony Suite #434",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_435",
    "trackName": "Chiptune Orchard Symphony Suite #435",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_436",
    "trackName": "Chiptune Orchard Symphony Suite #436",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_437",
    "trackName": "Chiptune Orchard Symphony Suite #437",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_438",
    "trackName": "Chiptune Orchard Symphony Suite #438",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_439",
    "trackName": "Chiptune Orchard Symphony Suite #439",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_440",
    "trackName": "Chiptune Orchard Symphony Suite #440",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_441",
    "trackName": "Chiptune Orchard Symphony Suite #441",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_442",
    "trackName": "Chiptune Orchard Symphony Suite #442",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_443",
    "trackName": "Chiptune Orchard Symphony Suite #443",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_444",
    "trackName": "Chiptune Orchard Symphony Suite #444",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_445",
    "trackName": "Chiptune Orchard Symphony Suite #445",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_446",
    "trackName": "Chiptune Orchard Symphony Suite #446",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_447",
    "trackName": "Chiptune Orchard Symphony Suite #447",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_448",
    "trackName": "Chiptune Orchard Symphony Suite #448",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_449",
    "trackName": "Chiptune Orchard Symphony Suite #449",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_450",
    "trackName": "Chiptune Orchard Symphony Suite #450",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_451",
    "trackName": "Chiptune Orchard Symphony Suite #451",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_452",
    "trackName": "Chiptune Orchard Symphony Suite #452",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_453",
    "trackName": "Chiptune Orchard Symphony Suite #453",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_454",
    "trackName": "Chiptune Orchard Symphony Suite #454",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_455",
    "trackName": "Chiptune Orchard Symphony Suite #455",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_456",
    "trackName": "Chiptune Orchard Symphony Suite #456",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_457",
    "trackName": "Chiptune Orchard Symphony Suite #457",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_458",
    "trackName": "Chiptune Orchard Symphony Suite #458",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_459",
    "trackName": "Chiptune Orchard Symphony Suite #459",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_460",
    "trackName": "Chiptune Orchard Symphony Suite #460",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_461",
    "trackName": "Chiptune Orchard Symphony Suite #461",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_462",
    "trackName": "Chiptune Orchard Symphony Suite #462",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_463",
    "trackName": "Chiptune Orchard Symphony Suite #463",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_464",
    "trackName": "Chiptune Orchard Symphony Suite #464",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_465",
    "trackName": "Chiptune Orchard Symphony Suite #465",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_466",
    "trackName": "Chiptune Orchard Symphony Suite #466",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_467",
    "trackName": "Chiptune Orchard Symphony Suite #467",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_468",
    "trackName": "Chiptune Orchard Symphony Suite #468",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_469",
    "trackName": "Chiptune Orchard Symphony Suite #469",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_470",
    "trackName": "Chiptune Orchard Symphony Suite #470",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_471",
    "trackName": "Chiptune Orchard Symphony Suite #471",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_472",
    "trackName": "Chiptune Orchard Symphony Suite #472",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_473",
    "trackName": "Chiptune Orchard Symphony Suite #473",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_474",
    "trackName": "Chiptune Orchard Symphony Suite #474",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_475",
    "trackName": "Chiptune Orchard Symphony Suite #475",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_476",
    "trackName": "Chiptune Orchard Symphony Suite #476",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_477",
    "trackName": "Chiptune Orchard Symphony Suite #477",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_478",
    "trackName": "Chiptune Orchard Symphony Suite #478",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_479",
    "trackName": "Chiptune Orchard Symphony Suite #479",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_480",
    "trackName": "Chiptune Orchard Symphony Suite #480",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_481",
    "trackName": "Chiptune Orchard Symphony Suite #481",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_482",
    "trackName": "Chiptune Orchard Symphony Suite #482",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_483",
    "trackName": "Chiptune Orchard Symphony Suite #483",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_484",
    "trackName": "Chiptune Orchard Symphony Suite #484",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_485",
    "trackName": "Chiptune Orchard Symphony Suite #485",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_486",
    "trackName": "Chiptune Orchard Symphony Suite #486",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_487",
    "trackName": "Chiptune Orchard Symphony Suite #487",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_488",
    "trackName": "Chiptune Orchard Symphony Suite #488",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_489",
    "trackName": "Chiptune Orchard Symphony Suite #489",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_490",
    "trackName": "Chiptune Orchard Symphony Suite #490",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_491",
    "trackName": "Chiptune Orchard Symphony Suite #491",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_492",
    "trackName": "Chiptune Orchard Symphony Suite #492",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_493",
    "trackName": "Chiptune Orchard Symphony Suite #493",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_494",
    "trackName": "Chiptune Orchard Symphony Suite #494",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_495",
    "trackName": "Chiptune Orchard Symphony Suite #495",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_496",
    "trackName": "Chiptune Orchard Symphony Suite #496",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_497",
    "trackName": "Chiptune Orchard Symphony Suite #497",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_498",
    "trackName": "Chiptune Orchard Symphony Suite #498",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_499",
    "trackName": "Chiptune Orchard Symphony Suite #499",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_500",
    "trackName": "Chiptune Orchard Symphony Suite #500",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_501",
    "trackName": "Chiptune Orchard Symphony Suite #501",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_502",
    "trackName": "Chiptune Orchard Symphony Suite #502",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_503",
    "trackName": "Chiptune Orchard Symphony Suite #503",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_504",
    "trackName": "Chiptune Orchard Symphony Suite #504",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_505",
    "trackName": "Chiptune Orchard Symphony Suite #505",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_506",
    "trackName": "Chiptune Orchard Symphony Suite #506",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_507",
    "trackName": "Chiptune Orchard Symphony Suite #507",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_508",
    "trackName": "Chiptune Orchard Symphony Suite #508",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_509",
    "trackName": "Chiptune Orchard Symphony Suite #509",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_510",
    "trackName": "Chiptune Orchard Symphony Suite #510",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_511",
    "trackName": "Chiptune Orchard Symphony Suite #511",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_512",
    "trackName": "Chiptune Orchard Symphony Suite #512",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_513",
    "trackName": "Chiptune Orchard Symphony Suite #513",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_514",
    "trackName": "Chiptune Orchard Symphony Suite #514",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_515",
    "trackName": "Chiptune Orchard Symphony Suite #515",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_516",
    "trackName": "Chiptune Orchard Symphony Suite #516",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_517",
    "trackName": "Chiptune Orchard Symphony Suite #517",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_518",
    "trackName": "Chiptune Orchard Symphony Suite #518",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_519",
    "trackName": "Chiptune Orchard Symphony Suite #519",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_520",
    "trackName": "Chiptune Orchard Symphony Suite #520",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_521",
    "trackName": "Chiptune Orchard Symphony Suite #521",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_522",
    "trackName": "Chiptune Orchard Symphony Suite #522",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_523",
    "trackName": "Chiptune Orchard Symphony Suite #523",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_524",
    "trackName": "Chiptune Orchard Symphony Suite #524",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_525",
    "trackName": "Chiptune Orchard Symphony Suite #525",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_526",
    "trackName": "Chiptune Orchard Symphony Suite #526",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_527",
    "trackName": "Chiptune Orchard Symphony Suite #527",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_528",
    "trackName": "Chiptune Orchard Symphony Suite #528",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_529",
    "trackName": "Chiptune Orchard Symphony Suite #529",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_530",
    "trackName": "Chiptune Orchard Symphony Suite #530",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_531",
    "trackName": "Chiptune Orchard Symphony Suite #531",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_532",
    "trackName": "Chiptune Orchard Symphony Suite #532",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_533",
    "trackName": "Chiptune Orchard Symphony Suite #533",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_534",
    "trackName": "Chiptune Orchard Symphony Suite #534",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_535",
    "trackName": "Chiptune Orchard Symphony Suite #535",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_536",
    "trackName": "Chiptune Orchard Symphony Suite #536",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_537",
    "trackName": "Chiptune Orchard Symphony Suite #537",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_538",
    "trackName": "Chiptune Orchard Symphony Suite #538",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_539",
    "trackName": "Chiptune Orchard Symphony Suite #539",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_540",
    "trackName": "Chiptune Orchard Symphony Suite #540",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_541",
    "trackName": "Chiptune Orchard Symphony Suite #541",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_542",
    "trackName": "Chiptune Orchard Symphony Suite #542",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_543",
    "trackName": "Chiptune Orchard Symphony Suite #543",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_544",
    "trackName": "Chiptune Orchard Symphony Suite #544",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_545",
    "trackName": "Chiptune Orchard Symphony Suite #545",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_546",
    "trackName": "Chiptune Orchard Symphony Suite #546",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_547",
    "trackName": "Chiptune Orchard Symphony Suite #547",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_548",
    "trackName": "Chiptune Orchard Symphony Suite #548",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_549",
    "trackName": "Chiptune Orchard Symphony Suite #549",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_550",
    "trackName": "Chiptune Orchard Symphony Suite #550",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_551",
    "trackName": "Chiptune Orchard Symphony Suite #551",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_552",
    "trackName": "Chiptune Orchard Symphony Suite #552",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_553",
    "trackName": "Chiptune Orchard Symphony Suite #553",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 595,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 743.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1190,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1041.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 892.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 743.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_554",
    "trackName": "Chiptune Orchard Symphony Suite #554",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 610,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 762.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1220,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1067.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 915,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 762.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_555",
    "trackName": "Chiptune Orchard Symphony Suite #555",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 625,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 781.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1250,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1093.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 937.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 781.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_556",
    "trackName": "Chiptune Orchard Symphony Suite #556",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 640,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 800,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1280,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1120,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 960,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_557",
    "trackName": "Chiptune Orchard Symphony Suite #557",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 655,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 818.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1310,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1146.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 982.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 818.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_558",
    "trackName": "Chiptune Orchard Symphony Suite #558",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 670,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 837.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1340,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1172.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1005,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 837.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_559",
    "trackName": "Chiptune Orchard Symphony Suite #559",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 685,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 856.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1370,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1198.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1027.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 856.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_560",
    "trackName": "Chiptune Orchard Symphony Suite #560",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 700,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 875,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1400,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1225,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1050,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 875,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_561",
    "trackName": "Chiptune Orchard Symphony Suite #561",
    "bpm": 111,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 715,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 893.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1430,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1251.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1072.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 893.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_562",
    "trackName": "Chiptune Orchard Symphony Suite #562",
    "bpm": 112,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 730,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 912.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1460,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1277.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1095,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 912.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_563",
    "trackName": "Chiptune Orchard Symphony Suite #563",
    "bpm": 113,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 745,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 931.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1490,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1303.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1117.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 931.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_564",
    "trackName": "Chiptune Orchard Symphony Suite #564",
    "bpm": 114,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 760,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 950,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1520,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1330,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1140,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_565",
    "trackName": "Chiptune Orchard Symphony Suite #565",
    "bpm": 115,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 775,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 968.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1550,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1356.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1162.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 968.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_566",
    "trackName": "Chiptune Orchard Symphony Suite #566",
    "bpm": 116,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 790,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 987.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1580,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1382.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1185,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 987.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_567",
    "trackName": "Chiptune Orchard Symphony Suite #567",
    "bpm": 117,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 805,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1006.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1610,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1408.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1207.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1006.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_568",
    "trackName": "Chiptune Orchard Symphony Suite #568",
    "bpm": 118,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 820,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1025,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1640,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1435,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1230,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1025,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_569",
    "trackName": "Chiptune Orchard Symphony Suite #569",
    "bpm": 119,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 835,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1043.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1670,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1461.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1252.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1043.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_570",
    "trackName": "Chiptune Orchard Symphony Suite #570",
    "bpm": 120,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 850,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1062.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1700,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1487.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1275,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1062.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_571",
    "trackName": "Chiptune Orchard Symphony Suite #571",
    "bpm": 121,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 865,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1081.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1730,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1513.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1297.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1081.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_572",
    "trackName": "Chiptune Orchard Symphony Suite #572",
    "bpm": 122,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 880,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1100,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1760,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1540,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1320,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_573",
    "trackName": "Chiptune Orchard Symphony Suite #573",
    "bpm": 123,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 895,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1118.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1790,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1566.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1342.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1118.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_574",
    "trackName": "Chiptune Orchard Symphony Suite #574",
    "bpm": 124,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 910,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1137.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1820,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1592.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1365,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1137.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_575",
    "trackName": "Chiptune Orchard Symphony Suite #575",
    "bpm": 125,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 925,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 1156.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1850,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1618.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 1387.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 1156.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_576",
    "trackName": "Chiptune Orchard Symphony Suite #576",
    "bpm": 126,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 220,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 275,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 440,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 385,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 330,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 275,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_577",
    "trackName": "Chiptune Orchard Symphony Suite #577",
    "bpm": 127,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 235,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 293.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 470,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 411.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 352.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 293.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_578",
    "trackName": "Chiptune Orchard Symphony Suite #578",
    "bpm": 128,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 250,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 312.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 437.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 375,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 312.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_579",
    "trackName": "Chiptune Orchard Symphony Suite #579",
    "bpm": 129,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 265,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 331.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 530,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 463.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 397.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 331.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_580",
    "trackName": "Chiptune Orchard Symphony Suite #580",
    "bpm": 130,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 280,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 350,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 560,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 490,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 420,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 350,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_581",
    "trackName": "Chiptune Orchard Symphony Suite #581",
    "bpm": 131,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 295,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 368.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 590,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 516.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 442.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 368.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_582",
    "trackName": "Chiptune Orchard Symphony Suite #582",
    "bpm": 132,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 310,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 387.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 620,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 542.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 465,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 387.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_583",
    "trackName": "Chiptune Orchard Symphony Suite #583",
    "bpm": 133,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 325,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 406.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 568.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 487.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 406.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_584",
    "trackName": "Chiptune Orchard Symphony Suite #584",
    "bpm": 134,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 340,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 425,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 680,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 595,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 510,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 425,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_585",
    "trackName": "Chiptune Orchard Symphony Suite #585",
    "bpm": 135,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 355,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 443.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 710,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 621.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 532.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 443.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_586",
    "trackName": "Chiptune Orchard Symphony Suite #586",
    "bpm": 136,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 370,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 462.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 740,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 647.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 555,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 462.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_587",
    "trackName": "Chiptune Orchard Symphony Suite #587",
    "bpm": 137,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 385,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 481.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 770,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 673.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 577.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 481.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_588",
    "trackName": "Chiptune Orchard Symphony Suite #588",
    "bpm": 138,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 400,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 500,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 800,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 700,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 600,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 500,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_589",
    "trackName": "Chiptune Orchard Symphony Suite #589",
    "bpm": 139,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 415,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 518.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 830,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 726.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 622.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 518.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_590",
    "trackName": "Chiptune Orchard Symphony Suite #590",
    "bpm": 140,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 430,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 537.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 860,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 752.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 645,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 537.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_591",
    "trackName": "Chiptune Orchard Symphony Suite #591",
    "bpm": 141,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 445,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 556.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 890,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 778.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 667.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 556.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_592",
    "trackName": "Chiptune Orchard Symphony Suite #592",
    "bpm": 142,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 460,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 575,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 920,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 805,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 690,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 575,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_593",
    "trackName": "Chiptune Orchard Symphony Suite #593",
    "bpm": 143,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 475,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 593.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 950,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 831.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 712.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 593.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_594",
    "trackName": "Chiptune Orchard Symphony Suite #594",
    "bpm": 144,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -5
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 490,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 612.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 980,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 857.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 735,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 612.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_595",
    "trackName": "Chiptune Orchard Symphony Suite #595",
    "bpm": 145,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -3
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -4
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 505,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 631.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1010,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 883.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 757.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 631.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_596",
    "trackName": "Chiptune Orchard Symphony Suite #596",
    "bpm": 146,
    "scale": "Minor Harmonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -3
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 520,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 650,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1040,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 910,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 780,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 650,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_597",
    "trackName": "Chiptune Orchard Symphony Suite #597",
    "bpm": 147,
    "scale": "Dorian Mode",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": -1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -2
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 535,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 668.75,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1070,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 936.25,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 802.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 668.75,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_598",
    "trackName": "Chiptune Orchard Symphony Suite #598",
    "bpm": 148,
    "scale": "Mixolydian",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 0
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": -1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 550,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 687.5,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1100,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 962.5,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 825,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 687.5,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_599",
    "trackName": "Chiptune Orchard Symphony Suite #599",
    "bpm": 149,
    "scale": "Lydian Bright",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 1
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 0
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 565,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 706.25,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1130,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 988.75,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 847.5,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 706.25,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  },
  {
    "trackId": "synth_track_600",
    "trackName": "Chiptune Orchard Symphony Suite #600",
    "bpm": 110,
    "scale": "Major Pentatonic",
    "oscillators": [
      {
        "type": "triangle",
        "gain": 0.3,
        "detune": 2
      },
      {
        "type": "square",
        "gain": 0.15,
        "detune": 1
      },
      {
        "type": "sine",
        "gain": 0.4,
        "detune": 0
      }
    ],
    "pattern": [
      {
        "freq": 580,
        "duration": 0.25,
        "time": 0
      },
      {
        "freq": 725,
        "duration": 0.25,
        "time": 0.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 0.5
      },
      {
        "freq": 1160,
        "duration": 0.5,
        "time": 0.75
      },
      {
        "freq": 1015,
        "duration": 0.25,
        "time": 1.25
      },
      {
        "freq": 870,
        "duration": 0.25,
        "time": 1.5
      },
      {
        "freq": 725,
        "duration": 0.5,
        "time": 1.75
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.SYNTH_SOUND_BANKS = SYNTH_SOUND_BANKS;
}

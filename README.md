# 🍇 FruitQuest: The Ultimate Fruit Guessing & Arcade Adventure

A feature-complete, zero-dependency, ultra-polished web game built with Vanilla **HTML5, CSS3, and JavaScript**.

---

## 🌟 Key Features

1. **Zero External Dependencies & No API Keys**:
   - Runs directly in any modern web browser by double-clicking `index.html` or hosting on GitHub Pages.
   - Built-in **Web Audio API Sound Synthesizer** (chimes, clicks, fanfare, wrong buzzers, slicer physics, ambient synth background music).
   - Built-in **HTML5 Canvas Particle Engine** (juice splatters, celebratory confetti, star streaks).
   - Built-in **Scalable Vector SVG Fruit Renderer** (no missing image links or broken CDNs).

2. **5 Engaging Game Modes**:
   - 🍎 **Classic Adventure**: Fruits appear one by one with 4 multiple-choice options, 3 hearts/lives, 15-second timer, streak combo multipliers, and 3 lifelines (50/50, Clue, Skip).
   - ⚡ **Time Attack Frenzy**: 60 seconds on the clock. Quick answers award $+2\text{s}$ bonus time, while wrong guesses cost $-3\text{s}$. Activate Frenzy Rush at $5\times$ streak!
   - 👥 **Silhouette Mystery**: Identify fruits from their dark silhouettes. Guessing blindly awards $2\times$ score bonus before uncovering full vector color.
   - 🔤 **Word Scramble & Spell**: Unscramble fruit names using interactive clickable letter tiles or physical keyboard typing.
   - ⚔️ **Arcade Fruit Slicer**: Swipe and slice fruits flying in mid-air with realistic blade trails, dodging bombs to rack up coins.

3. **Compendium & Systems**:
   - 📖 **FruitDex Encyclopedia**: Comprehensive catalog of 40+ fruits with scientific classifications, origin regions, flavor profiles, nutrition breakdowns (calories, vitamin C, fiber, sugar, potassium), and trivia.
   - 🎨 **Theme Boutique & Shop**: Spend earned coins to unlock customizable themes (*Tropical Orchard, Cyberfruit 2077, Midnight Berry, Sunshine Citrus, Sakura Orchard*) and lifeline refills.
   - 🏆 **Quests & Achievements**: 15+ milestone badges with real-time animated toasts and coin payouts.
   - 🌟 **Daily Challenge**: Daily seeded mystery fruit quest with $3\times$ coin rewards.
   - 💾 **Local Persistence**: High scores, coin balances, unlocked fruits, and audio preferences automatically saved in `localStorage`.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `1`, `2`, `3`, `4` | Select Multiple Choice Options 1–4 |
| `H` | Activate Botanical Hint / Clue Lifeline |
| `F` | Activate 50/50 Lifeline |
| `S` | Activate Skip Lifeline |
| `A–Z` | Type letters in Word Scramble mode |
| `Backspace` | Undo letter in Word Scramble |
| `Space` / `Enter` | Submit / Next |
| `M` | Toggle Sound FX Mute |
| `Esc` | Return to Main Menu / Close Modals |

---

## 📂 Project Architecture

```
fruit_quiz_game/
├── index.html                 # Main entry point & semantic game screens
├── README.md                  # Documentation and game guide
├── css/
│   ├── main.css               # Core layout, glassmorphism UI, responsive design
│   ├── animations.css         # Keyframe animations, particle glow, bounce-in
│   └── themes.css             # 5 Dynamic color palettes
└── js/
    ├── app.js                 # Master application controller and router
    ├── data/
    │   └── fruits.js          # 40+ detailed botanical fruit datasets
    ├── engine/
    │   ├── audio.js           # Procedural Web Audio API sound synthesizer
    │   ├── particles.js       # 2D Canvas particle & juice splatter engine
    │   └── render.js          # Dynamic SVG vector fruit renderer
    ├── modes/
    │   ├── classic.js         # Classic multiple-choice mode
    │   ├── time_attack.js     # 60-second time blitz mode
    │   ├── silhouette.js      # Shadow mystery mode
    │   ├── word_scramble.js   # Letter tile anagram spelling mode
    │   └── fruit_slice.js     # Touch/mouse blade fruit slicer mini-game
    └── systems/
        ├── achievements.js    # Quests & badge system
        ├── encyclopedia.js    # FruitDex compendium & nutrition viewer
        ├── shop.js            # In-game theme boutique & lifeline store
        └── storage.js         # LocalStorage persistence manager
```

---

## 🚀 How to Play

1. Open `index.html` in any web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera).
2. No installation, server, node.js, or API keys needed.
3. Enjoy FruitQuest!

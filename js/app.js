/**
 * FruitQuest - Master Application Controller
 * Handles screen transitions, modal dialogs, global keyboard shortcuts,
 * coin displays, settings, audio toggles, and daily challenge mechanics.
 */

class FruitQuestApp {
  constructor() {
    this.currentScreen = 'screen-menu';
    this.activeModeInstance = null;
  }

  init() {
    // Apply saved theme
    const savedTheme = window.storage.data.currentTheme || 'default';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Initialize Subsystems
    const particleCanvas = document.getElementById('particle-canvas');
    if (particleCanvas) window.particles.init(particleCanvas);

    const slicerCanvas = document.getElementById('slicer-canvas');
    if (slicerCanvas) window.fruitSliceMode.init(slicerCanvas);

    window.achievements.init();
    window.encyclopedia.init();
    window.shop.init();

    this.setupNavigation();
    this.setupGlobalShortcuts();
    this.updateCoinsDisplay();
    this.setupDailyChallenge();

    // Listen for custom events
    window.addEventListener('coins-updated', () => this.updateCoinsDisplay());
    window.addEventListener('fruit-unlocked', (e) => {
      const fruit = FruitHelpers.getById(e.detail.fruitId);
      if (fruit && window.achievements) {
        const total = window.storage.data.unlockedFruits.length;
        window.achievements.check('fruit_botanist', total >= 15);
        window.achievements.check('grand_orchard', total >= 30);
      }
    });

    console.log("🍇 FruitQuest initialized successfully with 40+ fruits and 5 interactive modes!");
  }

  setupNavigation() {
    // Mode Selectors
    document.querySelectorAll('[data-target-mode]').forEach(card => {
      card.addEventListener('click', () => {
        const mode = card.dataset.targetMode;
        if (window.sound) window.sound.playClick();
        this.launchMode(mode);
      });
    });

    // Navigation Menu Buttons
    document.querySelectorAll('[data-nav-screen]').forEach(btn => {
      btn.addEventListener('click', () => {
        const screenId = btn.dataset.navScreen;
        if (window.sound) window.sound.playClick();
        this.showScreen(screenId);

        if (screenId === 'screen-fruitdex') window.encyclopedia.render();
        if (screenId === 'screen-shop') window.shop.render();
        if (screenId === 'screen-achievements') this.renderAchievementsScreen();
      });
    });

    // Back to Menu Buttons
    document.querySelectorAll('.btn-back-menu').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.sound) window.sound.playClick();
        this.stopActiveMode();
        this.showScreen('screen-menu');
      });
    });

    // Sound and Music Toggles
    const soundToggle = document.getElementById('btn-sound-toggle');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        const isMuted = window.sound.toggleMute();
        soundToggle.textContent = isMuted ? '🔇' : '🔊';
      });
    }

    const musicToggle = document.getElementById('btn-music-toggle');
    if (musicToggle) {
      musicToggle.addEventListener('click', () => {
        const isPlaying = window.sound.toggleMusic();
        musicToggle.classList.toggle('active', isPlaying);
        musicToggle.textContent = isPlaying ? '🎵 On' : '🎵 Off';
      });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-overlay');
        if (modal) modal.classList.remove('active');
      });
    });
  }

  setupGlobalShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Don't intercept when user is typing in search input
      if (e.target.tagName === 'INPUT') return;

      const key = e.key;

      if (key === 'Escape') {
        // Close modals if open, else go back to menu
        const openModal = document.querySelector('.modal-overlay.active');
        if (openModal) {
          openModal.classList.remove('active');
        } else if (this.currentScreen !== 'screen-menu') {
          this.stopActiveMode();
          this.showScreen('screen-menu');
        }
        return;
      }

      if (key.toLowerCase() === 'm') {
        const soundToggle = document.getElementById('btn-sound-toggle');
        if (soundToggle) soundToggle.click();
        return;
      }

      // Delegate to active mode instance
      if (this.activeModeInstance && typeof this.activeModeInstance.handleKeyPress === 'function') {
        this.activeModeInstance.handleKeyPress(key);
      }
    });
  }

  showScreen(screenId) {
    document.querySelectorAll('.game-screen').forEach(screen => {
      screen.classList.remove('active');
    });

    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      this.currentScreen = screenId;
    }
  }

  launchMode(mode) {
    this.stopActiveMode();

    switch (mode) {
      case 'classic':
        this.showScreen('screen-classic');
        this.activeModeInstance = window.classicMode;
        window.classicMode.start();
        break;
      case 'time_attack':
        this.showScreen('screen-timeattack');
        this.activeModeInstance = window.timeAttackMode;
        window.timeAttackMode.start();
        break;
      case 'silhouette':
        this.showScreen('screen-silhouette');
        this.activeModeInstance = window.silhouetteMode;
        window.silhouetteMode.start();
        break;
      case 'word_scramble':
        this.showScreen('screen-scramble');
        this.activeModeInstance = window.wordScrambleMode;
        window.wordScrambleMode.start();
        break;
      case 'fruit_slice':
        this.showScreen('screen-slicer');
        this.activeModeInstance = window.fruitSliceMode;
        window.fruitSliceMode.start();
        break;
      default:
        this.showScreen('screen-menu');
        break;
    }
  }

  stopActiveMode() {
    if (this.activeModeInstance) {
      if (this.activeModeInstance.timer) clearInterval(this.activeModeInstance.timer);
      this.activeModeInstance.active = false;
      this.activeModeInstance = null;
    }
  }

  updateCoinsDisplay() {
    const coins = window.storage.data.coins || 0;
    document.querySelectorAll('.coins-counter-val').forEach(el => {
      el.textContent = coins.toLocaleString();
    });
    window.achievements.check('rich_farmer', coins >= 1000);
  }

  setupDailyChallenge() {
    const card = document.getElementById('daily-challenge-card');
    if (!card) return;

    // Deterministic daily fruit based on date
    const today = new Date().toISOString().slice(0, 10);
    let hash = 0;
    for (let i = 0; i < today.length; i++) hash += today.charCodeAt(i);
    const dailyFruit = FRUITS_DATABASE[hash % FRUITS_DATABASE.length];

    const fruitNameEl = document.getElementById('daily-fruit-hint');
    if (fruitNameEl && dailyFruit) {
      fruitNameEl.textContent = `Today's Category: ${dailyFruit.category} (${dailyFruit.difficulty.toUpperCase()})`;
    }

    card.addEventListener('click', () => {
      if (window.sound) window.sound.playClick();
      this.launchMode('classic');
    });
  }

  renderAchievementsScreen() {
    const container = document.getElementById('achievements-grid');
    if (!container) return;
    container.innerHTML = '';

    const list = window.achievements.getAll();
    list.forEach(ach => {
      const card = document.createElement('div');
      card.className = `achievement-card ${ach.unlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <div class="ach-icon">${ach.icon}</div>
        <div class="ach-info">
          <div class="ach-title">${ach.title}</div>
          <div class="ach-desc">${ach.desc}</div>
        </div>
        <div class="ach-reward ${ach.unlocked ? 'claimed' : ''}">
          ${ach.unlocked ? '✅ Claimed' : `+${ach.reward} 🪙`}
        </div>
      `;
      container.appendChild(card);
    });
  }

  showGameOver(options) {
    const {
      modeName = 'Game Over',
      score = 0,
      highScore = 0,
      isNewHigh = false,
      correctCount = 0,
      totalQuestions = 0,
      accuracy = 0,
      streak = 0,
      coinsEarned = 0,
      onPlayAgain = null
    } = options;

    const modal = document.getElementById('game-over-modal');
    if (!modal) return;

    const titleEl = document.getElementById('gameover-title');
    const modeEl = document.getElementById('gameover-modename');
    const scoreEl = document.getElementById('gameover-score');
    const highscoreEl = document.getElementById('gameover-highscore');
    const correctEl = document.getElementById('gameover-correct');
    const accuracyEl = document.getElementById('gameover-accuracy');
    const streakEl = document.getElementById('gameover-streak');
    const coinsEl = document.getElementById('gameover-coins');
    const newHighBanner = document.getElementById('gameover-newhigh-banner');

    if (titleEl) titleEl.textContent = isNewHigh ? '🏆 NEW RECORD!' : '🎮 GAME OVER';
    if (modeEl) modeEl.textContent = modeName;
    if (scoreEl) scoreEl.textContent = score.toLocaleString();
    if (highscoreEl) highscoreEl.textContent = highScore.toLocaleString();
    if (correctEl) correctEl.textContent = `${correctCount} / ${totalQuestions}`;
    if (accuracyEl) accuracyEl.textContent = `${accuracy}%`;
    if (streakEl) streakEl.textContent = `${streak}x`;
    if (coinsEl) coinsEl.textContent = `+${coinsEarned} 🪙`;

    if (newHighBanner) {
      if (isNewHigh) {
        newHighBanner.classList.remove('hidden');
        if (window.particles) window.particles.burstConfetti(60);
      } else {
        newHighBanner.classList.add('hidden');
      }
    }

    const btnPlayAgain = document.getElementById('btn-gameover-playagain');
    if (btnPlayAgain) {
      btnPlayAgain.onclick = () => {
        modal.classList.remove('active');
        if (onPlayAgain) onPlayAgain();
      };
    }

    const btnMenu = document.getElementById('btn-gameover-menu');
    if (btnMenu) {
      btnMenu.onclick = () => {
        modal.classList.remove('active');
        this.showScreen('screen-menu');
      };
    }

    modal.classList.add('active');
  }
}

// Global App instance
window.app = new FruitQuestApp();

document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});

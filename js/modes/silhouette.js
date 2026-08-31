/**
 * FruitQuest - Silhouette & Shadow Mystery Mode
 * Fruits appear as enigmatic dark silhouettes. Guessing without hints
 * awards double bonus points and unmasks the vibrant colors!
 */

class SilhouetteMode {
  constructor() {
    this.score = 0;
    this.lives = 3;
    this.streak = 0;
    this.highestStreak = 0;
    this.roundCount = 0;
    this.correctCount = 0;
    this.currentFruit = null;
    this.hintUsedThisRound = false;
    this.isAnswering = false;
    this.active = false;
  }

  start() {
    this.active = true;
    this.score = 0;
    this.lives = 3;
    this.streak = 0;
    this.highestStreak = 0;
    this.roundCount = 0;
    this.correctCount = 0;

    this.updateHUD();
    this.nextRound();
  }

  nextRound() {
    if (this.lives <= 0) {
      this.endGame();
      return;
    }

    this.isAnswering = false;
    this.hintUsedThisRound = false;
    this.roundCount++;

    this.currentFruit = FruitHelpers.getRandom(1)[0];
    const options = FruitHelpers.getDistractors(this.currentFruit, 3);

    const fruitContainer = document.getElementById('silhouette-fruit-container');
    const optionsContainer = document.getElementById('silhouette-options-container');
    const hintBtn = document.getElementById('btn-reveal-silhouette-hint');

    if (hintBtn) {
      hintBtn.disabled = false;
      hintBtn.textContent = "🔍 Reveal Color Hint (-50 pts)";
    }

    if (fruitContainer) {
      fruitContainer.innerHTML = window.fruitRenderer.renderSVG(this.currentFruit, {
        size: 220,
        silhouette: true,
        glow: false,
        animate: true
      });
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'game-option-btn pop-in';
        btn.style.animationDelay = `${idx * 0.05}s`;
        btn.innerHTML = `
          <span class="option-key-badge">${idx + 1}</span>
          <span class="option-text">${option.name}</span>
        `;
        btn.addEventListener('click', () => this.handleAnswer(option, btn));
        optionsContainer.appendChild(btn);
      });
    }
  }

  revealHint() {
    if (this.hintUsedThisRound || this.isAnswering) return;
    this.hintUsedThisRound = true;
    if (window.sound) window.sound.playPowerup();

    const fruitContainer = document.getElementById('silhouette-fruit-container');
    const hintBtn = document.getElementById('btn-reveal-silhouette-hint');

    if (hintBtn) {
      hintBtn.disabled = true;
      hintBtn.textContent = "✨ Hint Active (Color Peaked)";
    }

    // Partially reveal colors
    if (fruitContainer) {
      fruitContainer.innerHTML = window.fruitRenderer.renderSVG(this.currentFruit, {
        size: 220,
        silhouette: false,
        revealPercent: 50,
        glow: true,
        animate: true
      });
    }
  }

  handleAnswer(option, btn) {
    if (this.isAnswering || !this.active) return;
    this.isAnswering = true;

    const isCorrect = option.id === this.currentFruit.id;
    const fruitContainer = document.getElementById('silhouette-fruit-container');

    // Unmask full color immediately
    if (fruitContainer) {
      fruitContainer.innerHTML = window.fruitRenderer.renderSVG(this.currentFruit, {
        size: 220,
        silhouette: false,
        revealPercent: 100,
        glow: true,
        animate: true
      });
      fruitContainer.classList.add('pulse-glow');
    }

    if (isCorrect) {
      this.correctCount++;
      this.streak++;
      if (this.streak > this.highestStreak) this.highestStreak = this.streak;

      const baseScore = this.hintUsedThisRound ? 150 : 300; // Double bonus for no hint!
      const multiplier = 1 + Math.floor(this.streak / 3) * 0.5;
      const points = Math.floor(baseScore * multiplier);
      this.score += points;

      window.storage.unlockFruit(this.currentFruit.id);
      window.storage.addCoins(Math.max(2, Math.floor(points / 40)));

      if (btn) btn.classList.add('correct-answer');
      if (window.sound) {
        window.sound.playCorrect();
        if (!this.hintUsedThisRound) setTimeout(() => window.sound.playStreak(4), 200);
      }
      if (window.particles) {
        window.particles.burstJuice(window.innerWidth / 2, window.innerHeight / 2, this.currentFruit.colors.primary, 40);
      }

      window.achievements.check('shadow_sleuth', this.correctCount >= 5);

      this.updateHUD();
      setTimeout(() => this.nextRound(), 1200);
    } else {
      this.streak = 0;
      this.lives--;
      if (btn) btn.classList.add('wrong-answer');
      if (window.sound) window.sound.playWrong();

      const allButtons = document.querySelectorAll('#silhouette-options-container .game-option-btn');
      allButtons.forEach(b => {
        if (b.querySelector('.option-text').textContent === this.currentFruit.name) {
          b.classList.add('correct-answer-reveal');
        }
      });

      this.updateHUD();
      setTimeout(() => {
        if (this.lives <= 0) this.endGame();
        else this.nextRound();
      }, 1400);
    }
  }

  updateHUD() {
    const scoreEl = document.getElementById('silhouette-hud-score');
    const heartsEl = document.getElementById('silhouette-hud-hearts');
    const streakEl = document.getElementById('silhouette-hud-streak');

    if (scoreEl) scoreEl.textContent = this.score.toLocaleString();
    if (streakEl) streakEl.textContent = `${this.streak}x`;

    if (heartsEl) {
      let heartsHtml = '';
      for (let i = 0; i < 3; i++) {
        heartsHtml += `<span class="heart-icon ${i < this.lives ? 'alive' : 'lost'}">${i < this.lives ? '❤️' : '🖤'}</span>`;
      }
      heartsEl.innerHTML = heartsHtml;
    }
  }

  endGame() {
    this.active = false;
    if (window.sound) window.sound.playGameOver();

    const { isNewHigh, highScore } = window.storage.recordScore('silhouette', this.score);

    window.app.showGameOver({
      modeName: 'Silhouette Mystery',
      score: this.score,
      highScore: highScore,
      isNewHigh: isNewHigh,
      correctCount: this.correctCount,
      totalQuestions: this.roundCount,
      accuracy: this.roundCount > 0 ? Math.round((this.correctCount / this.roundCount) * 100) : 0,
      streak: this.highestStreak,
      coinsEarned: Math.floor(this.score / 25),
      onPlayAgain: () => this.start()
    });
  }

  handleKeyPress(key) {
    if (!this.active || this.isAnswering) return;
    const num = parseInt(key, 10);
    if (num >= 1 && num <= 4) {
      const allButtons = document.querySelectorAll('#silhouette-options-container .game-option-btn');
      if (allButtons[num - 1]) allButtons[num - 1].click();
    } else if (key.toLowerCase() === 'h') {
      this.revealHint();
    }
  }
}

// Global instance
window.silhouetteMode = new SilhouetteMode();

/**
 * FruitQuest - Time Attack Frenzy Mode
 * 60-Second rapid-fire challenge. Correct answers grant bonus time (+2s),
 * while wrong answers penalize time (-3s). High streaks activate Frenzy mode!
 */

class TimeAttackMode {
  constructor() {
    this.score = 0;
    this.totalTime = 60;
    this.timeLeft = 60;
    this.streak = 0;
    this.highestStreak = 0;
    this.correctCount = 0;
    this.questionCount = 0;
    this.currentFruit = null;
    this.timer = null;
    this.active = false;
    this.isAnswering = false;
  }

  start() {
    this.active = true;
    this.score = 0;
    this.timeLeft = 60;
    this.streak = 0;
    this.highestStreak = 0;
    this.correctCount = 0;
    this.questionCount = 0;

    this.updateHUD();
    this.startGlobalTimer();
    this.nextQuestion();
  }

  startGlobalTimer() {
    clearInterval(this.timer);
    const clockEl = document.getElementById('timeattack-hud-clock');
    const barEl = document.getElementById('timeattack-timer-bar');

    this.timer = setInterval(() => {
      this.timeLeft--;

      if (clockEl) clockEl.textContent = `${Math.max(0, this.timeLeft)}s`;
      if (barEl) {
        const pct = Math.max(0, Math.min(100, (this.timeLeft / 60) * 100));
        barEl.style.width = `${pct}%`;
        if (this.timeLeft <= 10) barEl.classList.add('urgent');
        else barEl.classList.remove('urgent');
      }

      if (this.timeLeft <= 10 && this.timeLeft > 0 && window.sound) {
        window.sound.playTick();
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.endGame();
      }
    }, 1000);
  }

  nextQuestion() {
    if (!this.active || this.timeLeft <= 0) return;
    this.isAnswering = false;
    this.questionCount++;

    this.currentFruit = FruitHelpers.getRandom(1)[0];
    const options = FruitHelpers.getDistractors(this.currentFruit, 3);

    const fruitContainer = document.getElementById('timeattack-fruit-container');
    const optionsContainer = document.getElementById('timeattack-options-container');

    if (fruitContainer) {
      fruitContainer.innerHTML = window.fruitRenderer.renderSVG(this.currentFruit, {
        size: 200,
        glow: true,
        animate: true
      });
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'game-option-btn pop-in';
        btn.style.animationDelay = `${idx * 0.04}s`;
        btn.innerHTML = `
          <span class="option-key-badge">${idx + 1}</span>
          <span class="option-text">${option.name}</span>
        `;
        btn.addEventListener('click', () => this.handleAnswer(option, btn));
        optionsContainer.appendChild(btn);
      });
    }
  }

  handleAnswer(option, btn) {
    if (this.isAnswering || !this.active) return;
    this.isAnswering = true;

    const isCorrect = option.id === this.currentFruit.id;
    const isFrenzy = this.streak >= 5;

    if (isCorrect) {
      this.correctCount++;
      this.streak++;
      if (this.streak > this.highestStreak) this.highestStreak = this.streak;

      // Add 2 bonus seconds!
      this.timeLeft = Math.min(75, this.timeLeft + 2);
      this.showFloatingNotice('+2s ⏱️', '#4CC9F0');

      const multiplier = isFrenzy ? 2.5 : (1 + Math.floor(this.streak / 3) * 0.5);
      const points = Math.floor(150 * multiplier);
      this.score += points;

      window.storage.unlockFruit(this.currentFruit.id);
      window.storage.addCoins(Math.max(1, Math.floor(points / 50)));

      if (btn) btn.classList.add('correct-answer');
      if (window.sound) {
        window.sound.playCorrect();
        if (isFrenzy) setTimeout(() => window.sound.playStreak(this.streak), 200);
      }
      if (window.particles) {
        window.particles.burstJuice(window.innerWidth / 2, window.innerHeight / 2, this.currentFruit.colors.primary, 30);
      }

      this.updateHUD();
      setTimeout(() => this.nextQuestion(), 550);
    } else {
      // Wrong: penalize 3 seconds
      this.streak = 0;
      this.timeLeft = Math.max(0, this.timeLeft - 3);
      this.showFloatingNotice('-3s ⚠️', '#E63946');

      if (btn) btn.classList.add('wrong-answer');
      if (window.sound) window.sound.playWrong();

      this.updateHUD();
      setTimeout(() => this.nextQuestion(), 700);
    }
  }

  showFloatingNotice(text, color) {
    const el = document.createElement('div');
    el.className = 'floating-time-notice bounce-in';
    el.style.color = color;
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }

  updateHUD() {
    const scoreEl = document.getElementById('timeattack-hud-score');
    const streakEl = document.getElementById('timeattack-hud-streak');
    if (scoreEl) scoreEl.textContent = this.score.toLocaleString();
    if (streakEl) {
      streakEl.textContent = `${this.streak}x`;
      if (this.streak >= 5) streakEl.classList.add('frenzy-glow');
      else streakEl.classList.remove('frenzy-glow');
    }
  }

  endGame() {
    this.active = false;
    clearInterval(this.timer);
    if (window.sound) window.sound.playGameOver();

    const { isNewHigh, highScore } = window.storage.recordScore('time_attack', this.score);
    window.achievements.check('time_lord', this.score >= 2000);

    window.app.showGameOver({
      modeName: 'Time Attack Frenzy',
      score: this.score,
      highScore: highScore,
      isNewHigh: isNewHigh,
      correctCount: this.correctCount,
      totalQuestions: this.questionCount,
      accuracy: this.questionCount > 0 ? Math.round((this.correctCount / this.questionCount) * 100) : 0,
      streak: this.highestStreak,
      coinsEarned: Math.floor(this.score / 20),
      onPlayAgain: () => this.start()
    });
  }

  handleKeyPress(key) {
    if (!this.active || this.isAnswering) return;
    const num = parseInt(key, 10);
    if (num >= 1 && num <= 4) {
      const allButtons = document.querySelectorAll('#timeattack-options-container .game-option-btn');
      if (allButtons[num - 1]) allButtons[num - 1].click();
    }
  }
}

// Global instance
window.timeAttackMode = new TimeAttackMode();

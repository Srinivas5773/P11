/**
 * FruitQuest - Classic Guessing Mode
 * 4 Multiple-Choice Options, 3 Hearts/Lives, 15-second timer,
 * Dynamic Streak Multipliers, 50/50, Hints, and Skip Lifelines.
 */

class ClassicMode {
  constructor() {
    this.score = 0;
    this.lives = 3;
    this.maxLives = 3;
    this.streak = 0;
    this.highestStreakInRun = 0;
    this.currentFruit = null;
    this.currentOptions = [];
    this.questionCount = 0;
    this.correctCount = 0;
    this.timer = null;
    this.timeLeft = 15;
    this.maxTime = 15;
    this.isAnswering = false;
    this.questionStartTime = 0;
    this.active = false;
  }

  start() {
    this.active = true;
    this.score = 0;
    this.lives = 3;
    this.streak = 0;
    this.highestStreakInRun = 0;
    this.questionCount = 0;
    this.correctCount = 0;

    this.updateHUD();
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.lives <= 0) {
      this.endGame();
      return;
    }

    this.isAnswering = false;
    this.questionCount++;
    this.timeLeft = this.maxTime;

    // Pick a fruit with progressive difficulty based on questionCount
    let pool = FRUITS_DATABASE;
    if (this.questionCount <= 5) {
      pool = FruitHelpers.getByDifficulty('easy');
    } else if (this.questionCount <= 12) {
      pool = [...FruitHelpers.getByDifficulty('easy'), ...FruitHelpers.getByDifficulty('medium')];
    } else if (this.questionCount <= 20) {
      pool = [...FruitHelpers.getByDifficulty('medium'), ...FruitHelpers.getByDifficulty('hard')];
    } else {
      pool = FRUITS_DATABASE;
    }

    if (!pool || pool.length === 0) pool = FRUITS_DATABASE;
    this.currentFruit = pool[Math.floor(Math.random() * pool.length)];
    this.currentOptions = FruitHelpers.getDistractors(this.currentFruit, 3);

    this.renderQuestion();
    this.startTimer();
    this.questionStartTime = Date.now();
  }

  startTimer() {
    clearInterval(this.timer);
    const timerBar = document.getElementById('classic-timer-bar');
    const timerText = document.getElementById('classic-timer-text');

    const updateTimer = () => {
      const pct = (this.timeLeft / this.maxTime) * 100;
      if (timerBar) timerBar.style.width = `${pct}%`;
      if (timerText) timerText.textContent = `${this.timeLeft}s`;

      if (this.timeLeft <= 3 && this.timeLeft > 0 && window.sound) {
        window.sound.playTick();
        if (timerBar) timerBar.classList.add('urgent');
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.handleTimeout();
      }
      this.timeLeft--;
    };

    updateTimer();
    this.timer = setInterval(updateTimer, 1000);
  }

  renderQuestion() {
    const fruitContainer = document.getElementById('classic-fruit-container');
    const optionsContainer = document.getElementById('classic-options-container');
    const clueBox = document.getElementById('classic-clue-box');

    if (clueBox) {
      clueBox.innerHTML = '';
      clueBox.classList.add('hidden');
    }

    if (fruitContainer && this.currentFruit) {
      fruitContainer.innerHTML = window.fruitRenderer.renderSVG(this.currentFruit, {
        size: 220,
        glow: true,
        animate: true
      });
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      this.currentOptions.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'game-option-btn pop-in';
        btn.style.animationDelay = `${idx * 0.06}s`;
        btn.innerHTML = `
          <span class="option-key-badge">${idx + 1}</span>
          <span class="option-text">${option.name}</span>
        `;

        btn.addEventListener('click', () => this.handleAnswer(option, btn));
        optionsContainer.appendChild(btn);
      });
    }

    this.updateLifelineButtons();
  }

  handleAnswer(selectedOption, buttonEl) {
    if (this.isAnswering || !this.active) return;
    this.isAnswering = true;
    clearInterval(this.timer);

    const timeTakenSec = (Date.now() - this.questionStartTime) / 1000;
    const isCorrect = selectedOption.id === this.currentFruit.id;
    const allButtons = document.querySelectorAll('#classic-options-container .game-option-btn');

    if (isCorrect) {
      this.correctCount++;
      this.streak++;
      if (this.streak > this.highestStreakInRun) {
        this.highestStreakInRun = this.streak;
      }

      // Base points by difficulty tier
      let basePoints = 100;
      if (this.currentFruit.difficulty === 'medium') basePoints = 200;
      if (this.currentFruit.difficulty === 'hard') basePoints = 350;
      if (this.currentFruit.difficulty === 'legendary') basePoints = 500;

      // Speed bonus
      const speedBonus = Math.max(0, Math.floor((15 - timeTakenSec) * 10));
      // Streak Multiplier
      const multiplier = Math.min(5, 1 + Math.floor(this.streak / 3) * 0.5);
      const earned = Math.floor((basePoints + speedBonus) * multiplier);

      this.score += earned;
      const coinsEarned = Math.max(2, Math.floor(earned / 30));
      window.storage.addCoins(coinsEarned);

      // Unlock fruit in FruitDex!
      window.storage.unlockFruit(this.currentFruit.id);

      // Visual / Audio feedback
      if (buttonEl) buttonEl.classList.add('correct-answer');
      if (window.sound) {
        window.sound.playCorrect();
        if (this.streak >= 3) {
          setTimeout(() => window.sound.playStreak(this.streak), 250);
        }
      }

      // Particle explosion
      if (window.particles) {
        const rect = buttonEl ? buttonEl.getBoundingClientRect() : null;
        const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
        const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
        window.particles.burstJuice(x, y, this.currentFruit.colors.primary, 35);
        if (this.streak >= 5) {
          window.particles.burstStars(x, y, 20);
        }
      }

      // Achievements checks
      window.achievements.check('first_bite', true);
      window.achievements.check('berry_smart', this.streak >= 5);
      window.achievements.check('combo_master', this.streak >= 10);
      window.achievements.check('speed_demon', timeTakenSec <= 1.5);
      if (this.currentFruit.difficulty === 'legendary') {
        window.achievements.check('legendary_taster', true);
      }
      if (this.currentFruit.category === 'Tropical') {
        window.achievements.check('tropical_lover', true);
      }
      if (this.currentFruit.category === 'Citrus') {
        window.achievements.check('citrus_burst', true);
      }

      this.updateHUD();
      setTimeout(() => this.nextQuestion(), 1100);

    } else {
      // Wrong Answer
      this.streak = 0;
      this.lives--;
      if (buttonEl) buttonEl.classList.add('wrong-answer');

      // Highlight the correct one
      allButtons.forEach(btn => {
        if (btn.querySelector('.option-text').textContent === this.currentFruit.name) {
          btn.classList.add('correct-answer-reveal');
        }
      });

      if (window.sound) window.sound.playWrong();
      this.updateHUD();

      setTimeout(() => {
        if (this.lives <= 0) {
          this.endGame();
        } else {
          this.nextQuestion();
        }
      }, 1400);
    }
  }

  handleTimeout() {
    if (this.isAnswering) return;
    this.isAnswering = true;
    this.streak = 0;
    this.lives--;
    if (window.sound) window.sound.playWrong();

    const allButtons = document.querySelectorAll('#classic-options-container .game-option-btn');
    allButtons.forEach(btn => {
      if (btn.querySelector('.option-text').textContent === this.currentFruit.name) {
        btn.classList.add('correct-answer-reveal');
      }
    });

    this.updateHUD();
    setTimeout(() => {
      if (this.lives <= 0) {
        this.endGame();
      } else {
        this.nextQuestion();
      }
    }, 1400);
  }

  // --- Lifeline Implementations ---
  useFiftyFifty() {
    if (this.isAnswering || !window.storage.useLifeline('fiftyFifty')) return;
    if (window.sound) window.sound.playPowerup();

    const allButtons = Array.from(document.querySelectorAll('#classic-options-container .game-option-btn'));
    const wrongButtons = allButtons.filter(btn => btn.querySelector('.option-text').textContent !== this.currentFruit.name);

    // Remove 2 wrong options
    wrongButtons.slice(0, 2).forEach(btn => {
      btn.classList.add('disabled-option');
      btn.style.pointerEvents = 'none';
      btn.style.opacity = '0.25';
    });

    this.updateLifelineButtons();
  }

  useHint() {
    if (this.isAnswering || !window.storage.useLifeline('hint')) return;
    if (window.sound) window.sound.playPowerup();

    const clueBox = document.getElementById('classic-clue-box');
    if (clueBox && this.currentFruit) {
      clueBox.innerHTML = `
        <div class="clue-content bounce-in">
          <span class="clue-icon">💡</span>
          <strong>Botanical Clue:</strong> ${this.currentFruit.funFact.substring(0, 95)}... 
          <em>(Category: ${this.currentFruit.category}, Origin: ${this.currentFruit.origin})</em>
        </div>
      `;
      clueBox.classList.remove('hidden');
    }
    this.updateLifelineButtons();
  }

  useSkip() {
    if (this.isAnswering || !window.storage.useLifeline('skip')) return;
    if (window.sound) window.sound.playPowerup();
    clearInterval(this.timer);
    this.nextQuestion();
    this.updateLifelineButtons();
  }

  updateLifelineButtons() {
    const lifelines = window.storage.data.lifelines || { fiftyFifty: 0, hint: 0, skip: 0 };
    const btn5050 = document.getElementById('lifeline-5050');
    const btnHint = document.getElementById('lifeline-hint');
    const btnSkip = document.getElementById('lifeline-skip');

    if (btn5050) {
      btn5050.querySelector('.lifeline-badge').textContent = lifelines.fiftyFifty || 0;
      btn5050.disabled = lifelines.fiftyFifty <= 0;
    }
    if (btnHint) {
      btnHint.querySelector('.lifeline-badge').textContent = lifelines.hint || 0;
      btnHint.disabled = lifelines.hint <= 0;
    }
    if (btnSkip) {
      btnSkip.querySelector('.lifeline-badge').textContent = lifelines.skip || 0;
      btnSkip.disabled = lifelines.skip <= 0;
    }
  }

  updateHUD() {
    const scoreEl = document.getElementById('classic-hud-score');
    const streakEl = document.getElementById('classic-hud-streak');
    const heartsEl = document.getElementById('classic-hud-hearts');

    if (scoreEl) scoreEl.textContent = this.score.toLocaleString();
    if (streakEl) {
      streakEl.textContent = `${this.streak}x`;
      if (this.streak >= 3) streakEl.classList.add('streak-fire');
      else streakEl.classList.remove('streak-fire');
    }

    if (heartsEl) {
      let heartsHtml = '';
      for (let i = 0; i < this.maxLives; i++) {
        heartsHtml += `<span class="heart-icon ${i < this.lives ? 'alive' : 'lost'}">${i < this.lives ? '❤️' : '🖤'}</span>`;
      }
      heartsEl.innerHTML = heartsHtml;
    }
  }

  endGame() {
    this.active = false;
    clearInterval(this.timer);
    if (window.sound) window.sound.playGameOver();

    // Record stats
    const { isNewHigh, highScore } = window.storage.recordScore('classic', this.score);
    window.storage.data.stats.totalPlayed++;
    window.storage.data.stats.totalCorrect += this.correctCount;
    window.storage.data.stats.totalWrong += (this.questionCount - this.correctCount);
    if (this.highestStreakInRun > window.storage.data.stats.highestStreak) {
      window.storage.data.stats.highestStreak = this.highestStreakInRun;
    }
    window.storage.save();

    // Check perfectionist achievement
    if (this.correctCount >= 10 && this.lives === 3) {
      window.achievements.check('perfectionist', true);
    }

    // Show Game Over Modal
    window.app.showGameOver({
      modeName: 'Classic Adventure',
      score: this.score,
      highScore: highScore,
      isNewHigh: isNewHigh,
      correctCount: this.correctCount,
      totalQuestions: this.questionCount,
      accuracy: this.questionCount > 0 ? Math.round((this.correctCount / this.questionCount) * 100) : 0,
      streak: this.highestStreakInRun,
      coinsEarned: Math.floor(this.score / 25),
      onPlayAgain: () => this.start()
    });
  }

  handleKeyPress(key) {
    if (!this.active || this.isAnswering) return;
    const num = parseInt(key, 10);
    if (num >= 1 && num <= 4) {
      const allButtons = document.querySelectorAll('#classic-options-container .game-option-btn');
      if (allButtons[num - 1] && !allButtons[num - 1].classList.contains('disabled-option')) {
        allButtons[num - 1].click();
      }
    } else if (key.toLowerCase() === 'h') {
      this.useHint();
    } else if (key.toLowerCase() === 'f') {
      this.useFiftyFifty();
    } else if (key.toLowerCase() === 's') {
      this.useSkip();
    }
  }
}

// Global instance
window.classicMode = new ClassicMode();

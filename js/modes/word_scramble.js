/**
 * FruitQuest - Word Scramble & Anagram Spelling Mode
 * Letters of the fruit's name are shuffled into interactive tiles.
 * Supports both touch/mouse tile clicks and direct physical keyboard typing!
 */

class WordScrambleMode {
  constructor() {
    this.score = 0;
    this.lives = 3;
    this.roundCount = 0;
    this.correctCount = 0;
    this.currentFruit = null;
    this.targetWord = '';
    this.availableTiles = [];
    this.placedTiles = [];
    this.isAnswering = false;
    this.active = false;
  }

  start() {
    this.active = true;
    this.score = 0;
    this.lives = 3;
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
    this.roundCount++;

    // Pick fruit with clean single-word or short name
    const pool = FRUITS_DATABASE.filter(f => f.name.length <= 10 && !f.name.includes('('));
    this.currentFruit = pool[Math.floor(Math.random() * pool.length)] || FRUITS_DATABASE[0];
    this.targetWord = this.currentFruit.name.toUpperCase().replace(/[^A-Z]/g, '');

    // Scramble letters
    let letters = this.targetWord.split('').map((char, index) => ({ id: `tile-${index}`, char }));
    // Ensure shuffled order is not identical to target
    let shuffled = [...letters].sort(() => 0.5 - Math.random());
    if (shuffled.map(t => t.char).join('') === this.targetWord && letters.length > 2) {
      shuffled.reverse();
    }

    this.availableTiles = shuffled;
    this.placedTiles = [];

    this.renderUI();
  }

  renderUI() {
    const fruitContainer = document.getElementById('scramble-fruit-container');
    const answerSlots = document.getElementById('scramble-answer-slots');
    const tilesContainer = document.getElementById('scramble-letters-pool');

    if (fruitContainer) {
      fruitContainer.innerHTML = window.fruitRenderer.renderSVG(this.currentFruit, {
        size: 200,
        glow: true,
        animate: true
      });
    }

    // Render answer slot placeholders
    if (answerSlots) {
      answerSlots.innerHTML = '';
      for (let i = 0; i < this.targetWord.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'letter-slot';
        const placed = this.placedTiles[i];
        if (placed) {
          slot.textContent = placed.char;
          slot.classList.add('filled', 'pop-in');
          slot.addEventListener('click', () => this.returnTile(i));
        } else {
          slot.textContent = '';
        }
        answerSlots.appendChild(slot);
      }
    }

    // Render available letter tiles
    if (tilesContainer) {
      tilesContainer.innerHTML = '';
      this.availableTiles.forEach((tile, idx) => {
        const tileBtn = document.createElement('button');
        tileBtn.className = 'letter-tile pop-in';
        tileBtn.textContent = tile.char;
        tileBtn.addEventListener('click', () => this.placeTile(tile));
        tilesContainer.appendChild(tileBtn);
      });
    }
  }

  placeTile(tile) {
    if (this.isAnswering || this.placedTiles.length >= this.targetWord.length) return;
    if (window.sound) window.sound.playClick();

    const idx = this.availableTiles.findIndex(t => t.id === tile.id);
    if (idx !== -1) {
      this.availableTiles.splice(idx, 1);
      this.placedTiles.push(tile);
      this.renderUI();

      // Check if word is complete
      if (this.placedTiles.length === this.targetWord.length) {
        this.checkAnswer();
      }
    }
  }

  returnTile(slotIndex) {
    if (this.isAnswering) return;
    const tile = this.placedTiles[slotIndex];
    if (tile) {
      if (window.sound) window.sound.playClick();
      this.placedTiles.splice(slotIndex, 1);
      this.availableTiles.push(tile);
      this.renderUI();
    }
  }

  handleBackspace() {
    if (this.isAnswering || this.placedTiles.length === 0) return;
    const tile = this.placedTiles.pop();
    this.availableTiles.push(tile);
    this.renderUI();
  }

  handleDirectLetterInput(char) {
    if (this.isAnswering) return;
    const upper = char.toUpperCase();
    const availableIndex = this.availableTiles.findIndex(t => t.char === upper);
    if (availableIndex !== -1) {
      const tile = this.availableTiles[availableIndex];
      this.placeTile(tile);
    }
  }

  shufflePool() {
    if (this.isAnswering) return;
    this.availableTiles.sort(() => 0.5 - Math.random());
    this.renderUI();
  }

  useScrambleHint() {
    if (this.isAnswering || this.placedTiles.length >= this.targetWord.length) return;
    const neededChar = this.targetWord[this.placedTiles.length];
    const availIdx = this.availableTiles.findIndex(t => t.char === neededChar);

    if (availIdx !== -1) {
      const tile = this.availableTiles[availIdx];
      this.placeTile(tile);
    } else {
      // It's placed in a wrong subsequent slot, reset and re-place correctly
      this.clearAll();
      const tile = this.availableTiles.find(t => t.char === neededChar);
      if (tile) this.placeTile(tile);
    }
  }

  clearAll() {
    if (this.isAnswering) return;
    this.availableTiles.push(...this.placedTiles);
    this.placedTiles = [];
    this.renderUI();
  }

  checkAnswer() {
    this.isAnswering = true;
    const formed = this.placedTiles.map(t => t.char).join('');
    const isCorrect = formed === this.targetWord;
    const answerSlots = document.querySelectorAll('#scramble-answer-slots .letter-slot');

    if (isCorrect) {
      this.correctCount++;
      const points = 250 + this.targetWord.length * 20;
      this.score += points;

      window.storage.unlockFruit(this.currentFruit.id);
      window.storage.addCoins(Math.floor(points / 30));

      answerSlots.forEach(slot => slot.classList.add('correct-slot'));
      if (window.sound) window.sound.playCorrect();
      if (window.particles) {
        window.particles.burstJuice(window.innerWidth / 2, window.innerHeight / 2, this.currentFruit.colors.primary, 35);
      }

      window.achievements.check('spelling_bee', this.correctCount >= 5);

      this.updateHUD();
      setTimeout(() => this.nextRound(), 1200);
    } else {
      this.lives--;
      answerSlots.forEach(slot => slot.classList.add('wrong-slot'));
      if (window.sound) window.sound.playWrong();

      this.updateHUD();
      setTimeout(() => {
        if (this.lives <= 0) {
          this.endGame();
        } else {
          this.clearAll();
          this.isAnswering = false;
        }
      }, 1000);
    }
  }

  updateHUD() {
    const scoreEl = document.getElementById('scramble-hud-score');
    const heartsEl = document.getElementById('scramble-hud-hearts');

    if (scoreEl) scoreEl.textContent = this.score.toLocaleString();
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

    const { isNewHigh, highScore } = window.storage.recordScore('word_scramble', this.score);

    window.app.showGameOver({
      modeName: 'Word Scramble',
      score: this.score,
      highScore: highScore,
      isNewHigh: isNewHigh,
      correctCount: this.correctCount,
      totalQuestions: this.roundCount,
      accuracy: this.roundCount > 0 ? Math.round((this.correctCount / this.roundCount) * 100) : 0,
      streak: 0,
      coinsEarned: Math.floor(this.score / 25),
      onPlayAgain: () => this.start()
    });
  }

  handleKeyPress(key) {
    if (!this.active || this.isAnswering) return;
    if (key === 'Backspace') {
      this.handleBackspace();
    } else if (key === ' ' || key === 'Enter') {
      if (this.placedTiles.length === this.targetWord.length) {
        this.checkAnswer();
      }
    } else if (/^[a-zA-Z]$/.test(key)) {
      this.handleDirectLetterInput(key);
    }
  }
}

// Global instance
window.wordScrambleMode = new WordScrambleMode();

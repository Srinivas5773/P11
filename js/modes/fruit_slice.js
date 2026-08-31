/**
 * FruitQuest - Arcade Fruit Slicer Mini-Game
 * Interactive blade swiping physics on HTML5 Canvas.
 * Slice tossed fruits, dodge bombs, trigger combos, and earn heaps of gold coins!
 */

class FruitSliceMode {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.active = false;
    this.score = 0;
    this.lives = 3;
    this.slicedCount = 0;
    this.fruits = [];
    this.bladeTrail = [];
    this.isMouseDown = false;
    this.animId = null;
    this.spawnTimer = null;
  }

  init(canvasEl) {
    this.canvas = canvasEl;
    this.ctx = this.canvas.getContext('2d');
    this.setupTouchAndMouse();
  }

  setupTouchAndMouse() {
    const addPoint = (x, y) => {
      this.bladeTrail.push({ x, y, life: 1.0, time: Date.now() });
      this.checkSliceCollisions(x, y);
    };

    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: (clientX - rect.left) * (this.canvas.width / rect.width),
        y: (clientY - rect.top) * (this.canvas.height / rect.height)
      };
    };

    this.canvas.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      const pos = getPos(e);
      addPoint(pos.x, pos.y);
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    this.canvas.addEventListener('mousemove', (e) => {
      if (this.isMouseDown) {
        const pos = getPos(e);
        addPoint(pos.x, pos.y);
      }
    });

    this.canvas.addEventListener('touchstart', (e) => {
      this.isMouseDown = true;
      const pos = getPos(e);
      addPoint(pos.x, pos.y);
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const pos = getPos(e);
      addPoint(pos.x, pos.y);
    }, { passive: false });

    this.canvas.addEventListener('touchend', () => {
      this.isMouseDown = false;
    });
  }

  start() {
    this.active = true;
    this.score = 0;
    this.lives = 3;
    this.slicedCount = 0;
    this.fruits = [];
    this.bladeTrail = [];

    this.resize();
    this.updateHUD();
    this.startSpawning();
    this.loop();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.parentElement.clientWidth || 800;
    this.canvas.height = this.canvas.parentElement.clientHeight || 550;
  }

  startSpawning() {
    clearInterval(this.spawnTimer);
    this.spawnTimer = setInterval(() => {
      if (!this.active) return;
      const count = 1 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        this.spawnItem();
      }
    }, 1400);
  }

  spawnItem() {
    const isBomb = Math.random() < 0.18;
    const x = 100 + Math.random() * (this.canvas.width - 200);
    const y = this.canvas.height + 40;
    const vx = (Math.random() - 0.5) * 6;
    const vy = -(13 + Math.random() * 4);
    const fruitData = FRUITS_DATABASE[Math.floor(Math.random() * FRUITS_DATABASE.length)];

    this.fruits.push({
      x, y, vx, vy,
      rotation: 0,
      vRot: (Math.random() - 0.5) * 0.1,
      gravity: 0.28,
      radius: isBomb ? 25 : 35,
      isBomb,
      fruitData,
      sliced: false,
      halves: null
    });
  }

  checkSliceCollisions(x, y) {
    if (!this.active) return;

    for (let i = 0; i < this.fruits.length; i++) {
      const f = this.fruits[i];
      if (f.sliced) continue;

      const dist = Math.hypot(f.x - x, f.y - y);
      if (dist < f.radius + 15) {
        // Slice fruit or bomb!
        if (f.isBomb) {
          // Bomb sliced!
          this.lives = 0;
          if (window.sound) window.sound.playWrong();
          if (window.particles) window.particles.burstJuice(f.x, f.y, '#111111', 50);
          this.endGame();
          return;
        } else {
          // Fruit sliced!
          f.sliced = true;
          this.slicedCount++;
          this.score += 50;

          // Halves physics
          f.halves = [
            { x: f.x - 10, y: f.y, vx: f.vx - 3, vy: f.vy - 1, rot: f.rotation, vRot: -0.1 },
            { x: f.x + 10, y: f.y, vx: f.vx + 3, vy: f.vy - 1, rot: f.rotation, vRot: 0.1 }
          ];

          if (window.sound) window.sound.playSlice();
          if (window.particles) {
            window.particles.burstJuice(f.x, f.y, f.fruitData.colors.primary, 25);
          }

          window.storage.unlockFruit(f.fruitData.id);
          window.storage.addCoins(1);
          window.achievements.check('master_slicer', this.slicedCount >= 50);
          this.updateHUD();
        }
      }
    }
  }

  loop() {
    if (!this.active) return;

    this.updatePhysics();
    this.render();

    this.animId = requestAnimationFrame(() => this.loop());
  }

  updatePhysics() {
    // Update Fruits
    for (let i = this.fruits.length - 1; i >= 0; i--) {
      const f = this.fruits[i];
      if (!f.sliced) {
        f.x += f.vx;
        f.y += f.vy;
        f.vy += f.gravity;
        f.rotation += f.vRot;

        // Check if dropped past bottom
        if (f.y > this.canvas.height + 60 && f.vy > 0) {
          if (!f.isBomb) {
            this.lives--;
            this.updateHUD();
            if (this.lives <= 0) {
              this.endGame();
              return;
            }
          }
          this.fruits.splice(i, 1);
        }
      } else {
        // Update halves
        f.halves.forEach(h => {
          h.x += h.vx;
          h.y += h.vy;
          h.vy += f.gravity * 1.2;
          h.rot += h.vRot;
        });

        if (f.halves[0].y > this.canvas.height + 60) {
          this.fruits.splice(i, 1);
        }
      }
    }

    // Update Blade Trail
    for (let i = this.bladeTrail.length - 1; i >= 0; i--) {
      const pt = this.bladeTrail[i];
      pt.life -= 0.08;
      if (pt.life <= 0) this.bladeTrail.splice(i, 1);
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw Blade Trail
    if (this.bladeTrail.length > 1) {
      for (let i = 1; i < this.bladeTrail.length; i++) {
        const p1 = this.bladeTrail[i - 1];
        const p2 = this.bladeTrail[i];
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${p2.life})`;
        this.ctx.lineWidth = 6 * p2.life;
        this.ctx.lineCap = 'round';
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = '#4CC9F0';
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;
      }
    }

    // Draw Fruits
    this.fruits.forEach(f => {
      if (!f.sliced) {
        this.ctx.save();
        this.ctx.translate(f.x, f.y);
        this.ctx.rotate(f.rotation);

        if (f.isBomb) {
          // Draw Bomb
          this.ctx.beginPath();
          this.ctx.arc(0, 0, f.radius, 0, Math.PI * 2);
          this.ctx.fillStyle = '#1B1B1B';
          this.ctx.fill();
          this.ctx.strokeStyle = '#E63946';
          this.ctx.lineWidth = 3;
          this.ctx.stroke();

          // Fuse spark
          this.ctx.fillStyle = '#FFE135';
          this.ctx.font = '18px sans-serif';
          this.ctx.textAlign = 'center';
          this.ctx.fillText('💣', 0, 8);
        } else {
          // Draw Fruit
          this.ctx.beginPath();
          this.ctx.arc(0, 0, f.radius, 0, Math.PI * 2);
          this.ctx.fillStyle = f.fruitData.colors.primary;
          this.ctx.shadowColor = f.fruitData.colors.glow;
          this.ctx.shadowBlur = 12;
          this.ctx.fill();
          this.ctx.shadowBlur = 0;

          // Draw fruit emoji or label
          this.ctx.font = '28px sans-serif';
          this.ctx.textAlign = 'center';
          this.ctx.textBaseline = 'middle';
          this.ctx.fillText(f.fruitData.emoji || '🍎', 0, 0);
        }
        this.ctx.restore();
      } else {
        // Draw sliced halves
        f.halves.forEach((h, idx) => {
          this.ctx.save();
          this.ctx.translate(h.x, h.y);
          this.ctx.rotate(h.rot);

          this.ctx.beginPath();
          if (idx === 0) {
            this.ctx.arc(0, 0, f.radius, Math.PI * 0.5, Math.PI * 1.5);
          } else {
            this.ctx.arc(0, 0, f.radius, -Math.PI * 0.5, Math.PI * 0.5);
          }
          this.ctx.closePath();
          this.ctx.fillStyle = f.fruitData.colors.primary;
          this.ctx.fill();

          this.ctx.restore();
        });
      }
    });
  }

  updateHUD() {
    const scoreEl = document.getElementById('slicer-hud-score');
    const heartsEl = document.getElementById('slicer-hud-hearts');
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
    clearInterval(this.spawnTimer);
    cancelAnimationFrame(this.animId);
    if (window.sound) window.sound.playGameOver();

    const { isNewHigh, highScore } = window.storage.recordScore('fruit_slice', this.score);
    window.storage.data.stats.slicedFruits += this.slicedCount;
    window.storage.save();

    window.app.showGameOver({
      modeName: 'Arcade Fruit Slicer',
      score: this.score,
      highScore: highScore,
      isNewHigh: isNewHigh,
      correctCount: this.slicedCount,
      totalQuestions: this.slicedCount,
      accuracy: 100,
      streak: 0,
      coinsEarned: Math.floor(this.score / 15),
      onPlayAgain: () => this.start()
    });
  }
}

// Global instance
window.fruitSliceMode = new FruitSliceMode();

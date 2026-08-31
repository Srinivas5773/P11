/**
 * FruitQuest - Canvas Particle & Confetti Engine
 * High-performance 2D particle simulation for juice bursts,
 * celebratory confetti, star streaks, and floating ambient orchard leaves.
 */

class ParticleEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animId = null;
    this.active = false;
  }

  init(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.startLoop();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  startLoop() {
    const loop = () => {
      this.update();
      this.render();
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity || 0.15;
      p.vx *= p.friction || 0.98;
      p.vy *= p.friction || 0.98;
      p.rotation += p.vRot || 0.05;
      p.life -= p.decay || 0.02;
      p.scale = Math.max(0, p.scale * 0.99);

      if (p.life <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }
  }

  render() {
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const p of this.particles) {
      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.fillStyle = p.color;

      if (p.type === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * (p.scale || 1), 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.type === 'confetti') {
        const w = p.size * (p.scale || 1);
        const h = p.size * 0.5 * (p.scale || 1);
        this.ctx.fillRect(-w / 2, -h / 2, w, h);
      } else if (p.type === 'star') {
        this.drawStar(0, 0, 5, p.size * 0.5, p.size);
      } else if (p.type === 'juice_drop') {
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, p.size * 1.5, p.size * 0.8, 0, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }
  }

  drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      this.ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      this.ctx.lineTo(x, y);
      rot += step;
    }
    this.ctx.lineTo(cx, cy - outerRadius);
    this.ctx.closePath();
    this.ctx.fill();
  }

  // Burst juice droplets matching fruit colors
  burstJuice(x, y, primaryColor = '#FF0054', count = 35) {
    const palette = [primaryColor, '#FFFFFF', '#FFF176', '#FF8A80'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 8;
      this.particles.push({
        x: x || window.innerWidth / 2,
        y: y || window.innerHeight / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        gravity: 0.22,
        friction: 0.96,
        size: 3 + Math.random() * 6,
        scale: 1,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        color: palette[Math.floor(Math.random() * palette.length)],
        life: 1.0,
        decay: 0.015 + Math.random() * 0.02,
        type: 'juice_drop'
      });
    }
  }

  // Celebration confetti on victory or high streak
  burstConfetti(count = 70) {
    const colors = ['#FF0054', '#70E000', '#FFB703', '#3A0CA3', '#4CC9F0', '#F72585', '#7209B7', '#FAA307'];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * this.canvas.width;
      const y = -20;
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 6,
        vy: 2 + Math.random() * 5,
        gravity: 0.08,
        friction: 0.99,
        size: 8 + Math.random() * 10,
        scale: 1,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1.0,
        decay: 0.005 + Math.random() * 0.01,
        type: 'confetti'
      });
    }
  }

  // Star bursts for combo multipliers
  burstStars(x, y, count = 20) {
    const starColors = ['#FFD700', '#FFA500', '#FFF', '#FFE600'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 7;
      this.particles.push({
        x: x || window.innerWidth / 2,
        y: y || window.innerHeight / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        gravity: 0.1,
        friction: 0.97,
        size: 6 + Math.random() * 8,
        scale: 1,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.3,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        life: 1.0,
        decay: 0.02 + Math.random() * 0.02,
        type: 'star'
      });
    }
  }
}

// Global instance
window.particles = new ParticleEngine();

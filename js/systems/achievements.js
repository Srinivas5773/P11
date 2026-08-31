/**
 * FruitQuest - Achievement & Quest System
 * Tracks milestones, streaks, discoveries, and game mode feats.
 * Displays animated toast notifications and grants coin bounties.
 */

const ACHIEVEMENTS_LIST = [
  { id: "first_bite", title: "First Bite", desc: "Guess your very first fruit correctly", reward: 50, icon: "🍎" },
  { id: "berry_smart", title: "Berry Smart", desc: "Answer 5 questions correctly in a row", reward: 100, icon: "🍓" },
  { id: "combo_master", title: "On Fire!", desc: "Reach a 10x streak combo", reward: 250, icon: "🔥" },
  { id: "speed_demon", title: "Speed Demon", desc: "Answer correctly within 1.5 seconds", reward: 150, icon: "⚡" },
  { id: "fruit_botanist", title: "Fruit Botanist", desc: "Unlock 15 unique fruits in your FruitDex", reward: 300, icon: "📖" },
  { id: "grand_orchard", title: "Master of Orchards", desc: "Unlock 30 unique fruits in your FruitDex", reward: 600, icon: "🌳" },
  { id: "legendary_taster", title: "Legendary Connoisseur", desc: "Correctly identify a Legendary tier fruit", reward: 400, icon: "👑" },
  { id: "shadow_sleuth", title: "Shadow Sleuth", desc: "Win 5 rounds in Silhouette Mode", reward: 200, icon: "👥" },
  { id: "spelling_bee", title: "Spelling Whiz", desc: "Complete 5 fruits in Word Scramble mode", reward: 200, icon: "🔤" },
  { id: "time_lord", title: "Time Lord", desc: "Score over 2,000 points in Time Attack", reward: 350, icon: "⏳" },
  { id: "master_slicer", title: "Fruit Ninja Cadet", desc: "Slice 50 fruits in the Arcade Slicer mini-game", reward: 250, icon: "⚔️" },
  { id: "rich_farmer", title: "Fruit Tycoon", desc: "Accumulate 1,000 golden coins", reward: 500, icon: "💰" },
  { id: "perfectionist", title: "Flawless Round", desc: "Answer 10 questions without losing a single heart", reward: 400, icon: "💎" },
  { id: "tropical_lover", title: "Tropical Tropics", desc: "Guess 10 Tropical category fruits", reward: 150, icon: "🏝️" },
  { id: "citrus_burst", title: "Citrus Zest", desc: "Guess 8 Citrus category fruits", reward: 150, icon: "🍋" }
];

class AchievementSystem {
  constructor() {
    this.achievements = ACHIEVEMENTS_LIST;
    this.toastContainer = null;
  }

  init() {
    this.toastContainer = document.getElementById('achievement-toast-container');
  }

  check(id, conditionValue = true) {
    if (!conditionValue) return;
    const ach = this.achievements.find(a => a.id === id);
    if (!ach) return;

    if (window.storage.unlockAchievement(id)) {
      window.storage.addCoins(ach.reward);
      if (window.sound) window.sound.playLevelUp();
      if (window.particles) window.particles.burstConfetti(40);
      this.showToast(ach);
    }
  }

  showToast(ach) {
    if (!this.toastContainer) {
      this.toastContainer = document.getElementById('achievement-toast-container');
    }
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'achievement-toast bounce-in';
    toast.innerHTML = `
      <div class="toast-icon">${ach.icon}</div>
      <div class="toast-content">
        <div class="toast-badge">ACHIEVEMENT UNLOCKED!</div>
        <div class="toast-title">${ach.title}</div>
        <div class="toast-desc">${ach.desc}</div>
        <div class="toast-reward">+${ach.reward} 🪙</div>
      </div>
    `;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      setTimeout(() => toast.remove(), 500);
    }, 4500);
  }

  getAll() {
    const unlockedIds = window.storage.data.unlockedAchievements || [];
    return this.achievements.map(a => ({
      ...a,
      unlocked: unlockedIds.includes(a.id)
    }));
  }
}

// Global instance
window.achievements = new AchievementSystem();

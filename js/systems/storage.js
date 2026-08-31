/**
 * FruitQuest - Storage & Progression System
 * Manages local persistence for coins, unlocked fruits, achievements,
 * high scores per mode, lifeline quantities, and user settings.
 */

const STORAGE_KEY = 'fruitquest_saved_data_v1';

const DEFAULT_STATE = {
  coins: 100,
  highScores: {
    classic: 0,
    time_attack: 0,
    silhouette: 0,
    word_scramble: 0,
    fruit_slice: 0
  },
  stats: {
    totalPlayed: 0,
    totalCorrect: 0,
    totalWrong: 0,
    highestStreak: 0,
    slicedFruits: 0
  },
  unlockedFruits: ['apple', 'banana', 'orange', 'strawberry', 'watermelon', 'grape'],
  unlockedThemes: ['default'],
  currentTheme: 'default',
  lifelines: {
    fiftyFifty: 3,
    hint: 3,
    skip: 2
  },
  unlockedAchievements: [],
  settings: {
    sound: true,
    music: false,
    volume: 0.5
  }
};

class StorageSystem {
  constructor() {
    this.data = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return { ...DEFAULT_STATE, ...JSON.parse(raw) };
      }
    } catch (e) {
      console.warn("Could not load from localStorage, using defaults", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  addCoins(amount) {
    this.data.coins = Math.max(0, (this.data.coins || 0) + amount);
    this.save();
    window.dispatchEvent(new CustomEvent('coins-updated', { detail: { coins: this.data.coins } }));
    return this.data.coins;
  }

  spendCoins(amount) {
    if (this.data.coins >= amount) {
      this.data.coins -= amount;
      this.save();
      window.dispatchEvent(new CustomEvent('coins-updated', { detail: { coins: this.data.coins } }));
      return true;
    }
    return false;
  }

  recordScore(mode, score) {
    let isNewHigh = false;
    if (!this.data.highScores[mode] || score > this.data.highScores[mode]) {
      this.data.highScores[mode] = score;
      isNewHigh = true;
    }
    this.save();
    return { isNewHigh, highScore: this.data.highScores[mode] };
  }

  unlockFruit(fruitId) {
    if (!this.data.unlockedFruits.includes(fruitId)) {
      this.data.unlockedFruits.push(fruitId);
      this.save();
      window.dispatchEvent(new CustomEvent('fruit-unlocked', { detail: { fruitId } }));
      return true;
    }
    return false;
  }

  unlockAchievement(achId) {
    if (!this.data.unlockedAchievements.includes(achId)) {
      this.data.unlockedAchievements.push(achId);
      this.save();
      return true;
    }
    return false;
  }

  unlockTheme(themeId) {
    if (!this.data.unlockedThemes.includes(themeId)) {
      this.data.unlockedThemes.push(themeId);
      this.save();
      return true;
    }
    return false;
  }

  setTheme(themeId) {
    this.data.currentTheme = themeId;
    this.save();
  }

  useLifeline(type) {
    if (this.data.lifelines && this.data.lifelines[type] > 0) {
      this.data.lifelines[type]--;
      this.save();
      return true;
    }
    return false;
  }

  addLifeline(type, count = 1) {
    if (!this.data.lifelines) this.data.lifelines = { fiftyFifty: 3, hint: 3, skip: 2 };
    this.data.lifelines[type] = (this.data.lifelines[type] || 0) + count;
    this.save();
  }

  resetAll() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.save();
  }
}

// Global instance
window.storage = new StorageSystem();

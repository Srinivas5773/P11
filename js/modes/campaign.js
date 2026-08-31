/**
 * FruitQuest - Campaign Mode Controller
 * Orchestrates progress across 500 campaign levels, star grading, and boss stages.
 */

class CampaignMode {
  constructor() {
    this.currentLevel = 1;
    this.score = 0;
    this.timeLeft = 60;
    this.errors = 0;
    this.timer = null;
    this.active = false;
    this.stages = CAMPAIGN_STAGES;
  }

  startLevel(lvlNum) {
    this.currentLevel = lvlNum || 1;
    const stage = this.stages.find(s => s.levelNumber === this.currentLevel) || this.stages[0];
    this.active = true;
    this.score = 0;
    this.errors = 0;
    this.timeLeft = stage.timeLimitSeconds;

    console.log("Starting Campaign Stage: " + stage.title);
    if (window.sound) window.sound.playPowerup();
    window.app.showScreen('screen-classic');
    window.classicMode.start();
  }

  getStages() {
    return this.stages;
  }
}

if (typeof window !== "undefined") {
  window.campaignMode = new CampaignMode();
}

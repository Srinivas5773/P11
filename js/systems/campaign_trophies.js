/**
 * FruitQuest - Campaign Regional Trophies & Boss Badges
 * 25 World Region clear trophies and legendary speedrun badges.
 */

const REGIONAL_TROPHIES = [
  { id: "trophy_mediterranean", region: "Mediterranean Grove", title: "Citrus Conqueror", icon: "🏛️", bonusCoins: 500 },
  { id: "trophy_amazon", region: "Amazonian Canopy", title: "Canopy King", icon: "🌴", bonusCoins: 600 },
  { id: "trophy_himalaya", region: "Himalayan Foothills", title: "Alpine Climber", icon: "🏔️", bonusCoins: 700 },
  { id: "trophy_mesoamerica", region: "Mesoamerican Valleys", title: "Cacao Guardian", icon: "🥑", bonusCoins: 800 },
  { id: "trophy_sundaland", region: "Sundaland Archipelago", title: "Durian Monarch", icon: "👑", bonusCoins: 1000 }
];

class CampaignTrophySystem {
  constructor() {
    this.trophies = REGIONAL_TROPHIES;
  }

  checkRegionCompletion(regionName, completedStages = []) {
    const regionStages = completedStages.filter(s => s.region === regionName);
    if (regionStages.length >= 20) {
      const trophy = this.trophies.find(t => t.region === regionName);
      if (trophy && window.storage) {
        window.storage.addCoins(trophy.bonusCoins);
        if (window.sound) window.sound.playLevelUp();
        return trophy;
      }
    }
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.campaignTrophies = new CampaignTrophySystem();
}

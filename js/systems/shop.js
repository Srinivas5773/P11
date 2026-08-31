/**
 * FruitQuest - Shop & Customization System
 * Spend earned coins on visual themes, UI skins, and lifeline packs.
 */

const THEMES_LIST = [
  {
    id: "default",
    name: "Tropical Orchard",
    desc: "Vibrant lush garden greens, sunny fruits, and emerald accents.",
    price: 0,
    icon: "🌴",
    previewGradient: "linear-gradient(135deg, #2D6A4F, #52B788)"
  },
  {
    id: "neon_cyber",
    name: "Cyberfruit 2077",
    desc: "Futuristic synthwave neon glow with cyan and hot magenta hues.",
    price: 300,
    icon: "⚡",
    previewGradient: "linear-gradient(135deg, #10002B, #7209B7, #4CC9F0)"
  },
  {
    id: "midnight_berry",
    name: "Midnight Berry",
    desc: "Deep celestial indigo tones with starry violet fruit accents.",
    price: 500,
    icon: "🌙",
    previewGradient: "linear-gradient(135deg, #0B092A, #3A0CA3, #7209B7)"
  },
  {
    id: "sunshine_citrus",
    name: "Sunshine Citrus",
    desc: "Energetic golden lemon, blood orange, and zest yellow.",
    price: 400,
    icon: "☀️",
    previewGradient: "linear-gradient(135deg, #FFB703, #FB8500, #E63946)"
  },
  {
    id: "sakura_garden",
    name: "Sakura Orchard",
    desc: "Soothing pastel cherry blossom pinks and soft mint greenery.",
    price: 600,
    icon: "🌸",
    previewGradient: "linear-gradient(135deg, #FFB5A7, #FCD5CE, #98D8C8)"
  }
];

const SHOP_ITEMS = [
  { id: "fiftyFifty", name: "3x 50/50 Lifelines", desc: "Eliminates 2 wrong options immediately", price: 150, icon: "✂️", type: "lifeline", count: 3 },
  { id: "hint", name: "3x Botanical Hints", desc: "Reveals the fruit's family, origin & flavor clue", price: 100, icon: "💡", type: "lifeline", count: 3 },
  { id: "skip", name: "2x Free Skips", desc: "Instantly skip a mystery fruit with score preserved", price: 200, icon: "⏩", type: "lifeline", count: 2 }
];

class ShopSystem {
  constructor() {
    this.container = null;
  }

  init() {
    this.container = document.getElementById('shop-items-container');
    this.render();
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = '';

    const unlockedThemes = window.storage.data.unlockedThemes || ['default'];
    const currentTheme = window.storage.data.currentTheme || 'default';
    const coins = window.storage.data.coins || 0;

    // Theme Section
    const themeHeading = document.createElement('h3');
    themeHeading.className = 'shop-section-title';
    themeHeading.textContent = '🎨 Game Themes & Aesthetics';
    this.container.appendChild(themeHeading);

    const themesGrid = document.createElement('div');
    themesGrid.className = 'shop-grid';

    THEMES_LIST.forEach(t => {
      const isOwned = unlockedThemes.includes(t.id);
      const isEquipped = currentTheme === t.id;
      const canAfford = coins >= t.price;

      const itemCard = document.createElement('div');
      itemCard.className = `shop-card ${isEquipped ? 'equipped' : ''}`;
      itemCard.innerHTML = `
        <div class="shop-preview" style="background: ${t.previewGradient}">
          <span class="shop-preview-icon">${t.icon}</span>
        </div>
        <div class="shop-card-info">
          <div class="shop-card-name">${t.name}</div>
          <div class="shop-card-desc">${t.desc}</div>
        </div>
        <div class="shop-card-action">
          ${isEquipped 
            ? `<button class="btn-shop equipped" disabled>Equipped</button>` 
            : isOwned 
              ? `<button class="btn-shop btn-equip" data-theme="${t.id}">Equip</button>`
              : `<button class="btn-shop btn-buy ${!canAfford ? 'disabled' : ''}" data-type="theme" data-id="${t.id}" data-price="${t.price}">${t.price} 🪙</button>`
          }
        </div>
      `;

      themesGrid.appendChild(itemCard);
    });
    this.container.appendChild(themesGrid);

    // Lifelines Section
    const lifelineHeading = document.createElement('h3');
    lifelineHeading.className = 'shop-section-title';
    lifelineHeading.style.marginTop = '2rem';
    lifelineHeading.textContent = '⚡ Power-Ups & Lifeline Packs';
    this.container.appendChild(lifelineHeading);

    const lifelinesGrid = document.createElement('div');
    lifelinesGrid.className = 'shop-grid';

    SHOP_ITEMS.forEach(item => {
      const canAfford = coins >= item.price;
      const currentCount = (window.storage.data.lifelines && window.storage.data.lifelines[item.id]) || 0;

      const itemCard = document.createElement('div');
      itemCard.className = 'shop-card';
      itemCard.innerHTML = `
        <div class="shop-preview item-icon-preview">
          <span class="shop-preview-icon">${item.icon}</span>
        </div>
        <div class="shop-card-info">
          <div class="shop-card-name">${item.name}</div>
          <div class="shop-card-desc">${item.desc} (Owned: ${currentCount})</div>
        </div>
        <div class="shop-card-action">
          <button class="btn-shop btn-buy ${!canAfford ? 'disabled' : ''}" data-type="lifeline" data-id="${item.id}" data-price="${item.price}" data-count="${item.count}">
            Buy for ${item.price} 🪙
          </button>
        </div>
      `;
      lifelinesGrid.appendChild(itemCard);
    });
    this.container.appendChild(lifelinesGrid);

    this.attachEvents();
  }

  attachEvents() {
    this.container.querySelectorAll('.btn-equip').forEach(btn => {
      btn.addEventListener('click', () => {
        const themeId = btn.dataset.theme;
        window.storage.setTheme(themeId);
        document.documentElement.setAttribute('data-theme', themeId);
        if (window.sound) window.sound.playClick();
        this.render();
      });
    });

    this.container.querySelectorAll('.btn-buy').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.type;
        const id = btn.dataset.id;
        const price = parseInt(btn.dataset.price, 10);

        if (window.storage.spendCoins(price)) {
          if (window.sound) window.sound.playCoin();
          if (window.particles) window.particles.burstStars();

          if (type === 'theme') {
            window.storage.unlockTheme(id);
            window.storage.setTheme(id);
            document.documentElement.setAttribute('data-theme', id);
          } else if (type === 'lifeline') {
            const count = parseInt(btn.dataset.count, 10) || 1;
            window.storage.addLifeline(id, count);
          }

          this.render();
        } else {
          if (window.sound) window.sound.playWrong();
          btn.classList.add('shake');
          setTimeout(() => btn.classList.remove('shake'), 400);
        }
      });
    });
  }
}

// Global instance
window.shop = new ShopSystem();

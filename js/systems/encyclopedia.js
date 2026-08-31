/**
 * FruitQuest - FruitDex & Encyclopedia Compendium
 * Interactive botanical catalog of all 40+ fruits.
 * View unlocked fruits, inspect nutritional values, origin maps,
 * taste profiles, botanical families, and fun trivia facts.
 */

class FruitEncyclopedia {
  constructor() {
    this.currentFilter = 'all';
    this.searchQuery = '';
    this.container = null;
    this.modal = null;
  }

  init() {
    this.container = document.getElementById('fruitdex-grid');
    this.modal = document.getElementById('fruit-detail-modal');
    this.setupListeners();
  }

  setupListeners() {
    const searchInput = document.getElementById('fruitdex-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    const filterBtns = document.querySelectorAll('.dex-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.category || 'all';
        this.render();
      });
    });

    const closeBtn = document.getElementById('close-fruit-detail');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeDetail());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeDetail();
      });
    }
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = '';

    const unlocked = window.storage.data.unlockedFruits || [];
    let list = FRUITS_DATABASE;

    // Filter by Category
    if (this.currentFilter !== 'all') {
      list = list.filter(f => f.category.toLowerCase() === this.currentFilter.toLowerCase());
    }

    // Filter by Search Query
    if (this.searchQuery) {
      list = list.filter(f => 
        f.name.toLowerCase().includes(this.searchQuery) ||
        f.scientificName.toLowerCase().includes(this.searchQuery) ||
        f.category.toLowerCase().includes(this.searchQuery) ||
        f.origin.toLowerCase().includes(this.searchQuery)
      );
    }

    // Update counter
    const countEl = document.getElementById('dex-unlocked-count');
    if (countEl) {
      const totalUnlocked = FRUITS_DATABASE.filter(f => unlocked.includes(f.id)).length;
      countEl.textContent = `${totalUnlocked} / ${FRUITS_DATABASE.length} Discovered`;
    }

    list.forEach(fruit => {
      const isUnlocked = unlocked.includes(fruit.id);
      const card = document.createElement('div');
      card.className = `dex-card ${isUnlocked ? 'unlocked' : 'locked'}`;

      if (isUnlocked) {
        card.innerHTML = `
          <div class="dex-card-art">
            ${window.fruitRenderer.renderSVG(fruit, { size: 100, glow: false, animate: false })}
          </div>
          <div class="dex-card-name">${fruit.name}</div>
          <div class="dex-card-cat">${fruit.category}</div>
          <div class="dex-card-diff diff-${fruit.difficulty}">${fruit.difficulty.toUpperCase()}</div>
        `;
        card.addEventListener('click', () => {
          if (window.sound) window.sound.playClick();
          this.openDetail(fruit);
        });
      } else {
        card.innerHTML = `
          <div class="dex-card-art">
            ${window.fruitRenderer.renderSVG(fruit, { size: 100, silhouette: true, glow: false, animate: false })}
          </div>
          <div class="dex-card-name">???</div>
          <div class="dex-card-cat">${fruit.category}</div>
          <div class="dex-card-lock">🔒 Play to Unlock</div>
        `;
      }

      this.container.appendChild(card);
    });
  }

  openDetail(fruit) {
    if (!this.modal || !fruit) return;

    const artContainer = document.getElementById('detail-fruit-art');
    const nameEl = document.getElementById('detail-fruit-name');
    const sciEl = document.getElementById('detail-fruit-scientific');
    const catEl = document.getElementById('detail-fruit-category');
    const originEl = document.getElementById('detail-fruit-origin');
    const flavorEl = document.getElementById('detail-fruit-flavor');
    const factEl = document.getElementById('detail-fruit-fact');
    const calEl = document.getElementById('detail-nutri-cal');
    const vitCEl = document.getElementById('detail-nutri-vitc');
    const fiberEl = document.getElementById('detail-nutri-fiber');
    const sugarEl = document.getElementById('detail-nutri-sugar');
    const potEl = document.getElementById('detail-nutri-pot');

    if (artContainer) artContainer.innerHTML = window.fruitRenderer.renderSVG(fruit, { size: 160, glow: true });
    if (nameEl) nameEl.textContent = fruit.name;
    if (sciEl) sciEl.textContent = fruit.scientificName;
    if (catEl) catEl.textContent = fruit.category;
    if (originEl) originEl.textContent = fruit.origin;
    if (flavorEl) flavorEl.textContent = fruit.flavor;
    if (factEl) factEl.textContent = fruit.funFact;

    if (calEl) calEl.textContent = `${fruit.nutrition.calories} kcal`;
    if (vitCEl) vitCEl.textContent = fruit.nutrition.vitaminC;
    if (fiberEl) fiberEl.textContent = fruit.nutrition.fiber;
    if (sugarEl) sugarEl.textContent = fruit.nutrition.sugar;
    if (potEl) potEl.textContent = fruit.nutrition.potassium;

    this.modal.classList.remove('hidden');
    this.modal.classList.add('active');
  }

  closeDetail() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    setTimeout(() => this.modal.classList.add('hidden'), 200);
  }
}

// Global instance
window.encyclopedia = new FruitEncyclopedia();

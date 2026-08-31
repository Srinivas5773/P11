/**
 * FruitQuest - Procedural Vector SVG & Canvas Fruit Renderer
 * Generates rich, scalable, beautiful vector art for every fruit.
 * 100% Client-side, zero image files, fully responsive & themeable.
 */

class FruitRenderer {
  constructor() {
    this.cache = new Map();
  }

  // Generate SVG markup for a given fruit
  renderSVG(fruit, options = {}) {
    const {
      size = 200,
      silhouette = false,
      revealPercent = 100,
      glow = true,
      animate = true
    } = options;

    if (!fruit) return `<div class="fruit-placeholder">?</div>`;

    const colors = fruit.colors || {};
    const primary = colors.primary || '#FF5964';
    const secondary = colors.secondary || '#D90429';
    const stemColor = colors.stem || '#6F4E37';
    const leafColor = colors.leaf || '#52B788';
    const glowColor = colors.glow || 'rgba(255, 89, 100, 0.4)';

    const svgId = `fruit-svg-${fruit.id}-${Math.floor(Math.random()*100000)}`;

    // Build internal graphic paths based on fruit shape type
    const bodyGraphic = this.getBodyGraphic(fruit, primary, secondary, colors);
    const stemAndLeaves = this.getStemAndLeaves(fruit, stemColor, leafColor);
    const detailsGraphic = this.getDetailsGraphic(fruit, colors);

    const filterDefs = `
      <defs>
        <radialGradient id="grad-${svgId}" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="${primary}" />
          <stop offset="65%" stop-color="${secondary}" />
          <stop offset="100%" stop-color="${this.shadeColor(secondary, -20)}" />
        </radialGradient>
        <radialGradient id="shine-${svgId}" cx="30%" cy="25%" r="40%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
        </radialGradient>
        <filter id="shadow-${svgId}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="${glowColor}" />
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="rgba(0,0,0,0.2)" />
        </filter>
        <clipPath id="clip-${svgId}">
          <rect x="0" y="${200 - (200 * revealPercent / 100)}" width="200" height="200" />
        </clipPath>
      </defs>
    `;

    const silhouetteClass = silhouette ? 'fruit-silhouette' : '';
    const animClass = animate ? 'fruit-bobbing' : '';

    return `
      <div class="fruit-vector-wrapper ${animClass}" style="width: ${size}px; height: ${size}px;">
        <svg id="${svgId}" class="fruit-svg ${silhouetteClass}" viewBox="0 0 200 200" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
          ${filterDefs}
          <g filter="${glow && !silhouette ? `url(#shadow-${svgId})` : 'none'}" clip-path="${revealPercent < 100 ? `url(#clip-${svgId})` : 'none'}">
            <!-- Stem and Foliage -->
            ${stemAndLeaves}
            <!-- Fruit Body Base -->
            ${bodyGraphic.replace(/GRADIENT_ID/g, `grad-${svgId}`).replace(/SHINE_ID/g, `shine-${svgId}`)}
            <!-- Internal Details, Seeds, Pores, Ribs -->
            ${!silhouette ? detailsGraphic : ''}
            <!-- Specular Highlight Shine -->
            ${!silhouette ? `<path d="M 60 55 C 55 70, 55 90, 65 105 C 67 90, 72 70, 80 60 Z" fill="url(#shine-${svgId})" />` : ''}
          </g>
        </svg>
        ${silhouette ? `<div class="silhouette-badge"><span class="badge-icon">❓</span> Mystery Shadow</div>` : ''}
      </div>
    `;
  }

  // Fruit body vector shapes
  getBodyGraphic(fruit, primary, secondary, colors) {
    const type = fruit.shape ? fruit.shape.type : 'apple';

    switch (type) {
      case 'crescent': // Banana
        return `
          <path d="M 45 45 C 55 25, 95 30, 125 50 C 160 80, 170 130, 140 165 C 130 175, 110 160, 115 145 C 135 110, 125 75, 90 60 C 65 50, 45 55, 45 45 Z" 
                fill="url(#GRADIENT_ID)" stroke="${secondary}" stroke-width="2" />
        `;
      case 'circle': // Orange
        return `
          <circle cx="100" cy="110" r="65" fill="url(#GRADIENT_ID)" />
        `;
      case 'heart_tapered': // Strawberry
        return `
          <path d="M 100 65 C 60 55, 45 90, 55 125 C 65 155, 90 175, 100 180 C 110 175, 135 155, 145 125 C 155 90, 140 55, 100 65 Z" 
                fill="url(#GRADIENT_ID)" />
        `;
      case 'wedge': // Watermelon slice
        return `
          <path d="M 30 75 C 65 165, 135 165, 170 75 Z" fill="#2D6A4F" />
          <path d="M 36 78 C 68 158, 132 158, 164 78 Z" fill="#74C69D" />
          <path d="M 42 82 C 72 150, 128 150, 158 82 Z" fill="url(#GRADIENT_ID)" />
        `;
      case 'bunch': // Grape
        return `
          <g fill="url(#GRADIENT_ID)">
            <circle cx="85" cy="75" r="18" />
            <circle cx="115" cy="75" r="18" />
            <circle cx="70" cy="100" r="18" />
            <circle cx="100" cy="100" r="19" />
            <circle cx="130" cy="100" r="18" />
            <circle cx="85" cy="125" r="18" />
            <circle cx="115" cy="125" r="18" />
            <circle cx="100" cy="150" r="17" />
          </g>
        `;
      case 'cylinder_cone': // Pineapple
        return `
          <path d="M 70 75 C 55 100, 55 140, 70 165 C 85 180, 115 180, 130 165 C 145 140, 145 100, 130 75 Z" 
                fill="url(#GRADIENT_ID)" stroke="${secondary}" stroke-width="2" />
        `;
      case 'kidney_oval': // Mango
        return `
          <path d="M 100 60 C 65 60, 48 95, 60 135 C 72 170, 115 178, 135 155 C 158 128, 150 80, 118 62 C 112 59, 106 60, 100 60 Z" 
                fill="url(#GRADIENT_ID)" />
        `;
      case 'ellipse_pointed': // Lemon
        return `
          <path d="M 45 105 C 40 100, 40 110, 45 105 C 55 75, 90 60, 120 70 C 150 80, 160 105, 155 110 C 145 140, 110 155, 80 145 C 52 135, 42 110, 45 105 Z" 
                fill="url(#GRADIENT_ID)" />
        `;
      case 'twin_berries': // Cherry
        return `
          <g>
            <circle cx="75" cy="130" r="26" fill="url(#GRADIENT_ID)" />
            <circle cx="125" cy="138" r="26" fill="url(#GRADIENT_ID)" />
          </g>
        `;
      case 'pyriform': // Pear
        return `
          <path d="M 100 55 C 80 55, 78 85, 68 110 C 55 135, 60 165, 85 175 C 115 185, 145 175, 148 145 C 150 120, 125 85, 115 55 Z" 
                fill="url(#GRADIENT_ID)" />
        `;
      case 'sliced_circle': // Kiwi
        return `
          <circle cx="100" cy="105" r="62" fill="#582F0E" />
          <circle cx="100" cy="105" r="55" fill="url(#GRADIENT_ID)" />
          <ellipse cx="100" cy="105" rx="18" ry="14" fill="#E9F5DB" />
        `;
      case 'cracked_nut': // Coconut
        return `
          <circle cx="100" cy="105" r="62" fill="#4A3525" />
          <circle cx="100" cy="105" r="50" fill="#FFFFFF" />
          <circle cx="100" cy="105" r="38" fill="#5A3E2B" opacity="0.1" />
        `;
      case 'cut_pear': // Avocado
        return `
          <path d="M 100 55 C 80 55, 78 85, 68 110 C 55 135, 60 165, 85 175 C 115 185, 145 175, 148 145 C 150 120, 125 85, 115 55 Z" 
                fill="#1B4332" />
          <path d="M 100 62 C 84 62, 82 88, 74 110 C 63 132, 67 158, 88 167 C 112 175, 137 167, 139 142 C 141 120, 120 88, 112 62 Z" 
                fill="#D8F3DC" />
          <circle cx="103" cy="132" r="24" fill="#6F4E37" stroke="#4A3525" stroke-width="2" />
        `;
      case 'five_star': // Starfruit
        return `
          <polygon points="100,45 116,80 155,80 123,105 135,145 100,122 65,145 77,105 45,80 84,80" 
                   fill="url(#GRADIENT_ID)" stroke="${secondary}" stroke-width="3" stroke-linejoin="round" />
        `;
      case 'scaly_pitaya': // Dragon Fruit
        return `
          <path d="M 100 50 C 65 65, 50 115, 65 150 C 80 178, 120 178, 135 150 C 150 115, 135 65, 100 50 Z" 
                fill="url(#GRADIENT_ID)" />
          <path d="M 60 80 Q 40 60 65 65 Q 60 75 60 80 Z" fill="#70E000" />
          <path d="M 140 80 Q 160 60 135 65 Q 140 75 140 80 Z" fill="#70E000" />
          <path d="M 55 120 Q 30 110 58 105 Z" fill="#70E000" />
          <path d="M 145 120 Q 170 110 142 105 Z" fill="#70E000" />
          <path d="M 100 45 Q 100 20 90 35 Z" fill="#70E000" />
        `;
      case 'fingered_citrus': // Buddha's Hand
        return `
          <g fill="url(#GRADIENT_ID)">
            <path d="M 75 100 C 60 60, 50 40, 55 35 C 60 30, 70 50, 75 80 Z" />
            <path d="M 85 95 C 75 50, 70 25, 78 20 C 85 20, 88 45, 90 85 Z" />
            <path d="M 100 90 C 95 40, 95 15, 102 12 C 110 12, 110 40, 108 85 Z" />
            <path d="M 115 95 C 120 45, 125 20, 132 20 C 140 25, 135 50, 125 85 Z" />
            <path d="M 125 100 C 140 60, 150 40, 145 35 C 140 30, 130 50, 125 80 Z" />
            <ellipse cx="100" cy="130" rx="45" ry="35" />
          </g>
        `;
      default: // Standard Apple / Sphere with indentation
        return `
          <path d="M 100 68 C 80 50, 50 60, 48 95 C 45 140, 75 175, 100 172 C 125 175, 155 140, 152 95 C 150 60, 120 50, 100 68 Z" 
                fill="url(#GRADIENT_ID)" />
        `;
    }
  }

  // Stems and leaves
  getStemAndLeaves(fruit, stemColor, leafColor) {
    const type = fruit.shape ? fruit.shape.type : 'apple';

    if (type === 'twin_berries') {
      return `
        <path d="M 75 110 C 80 70, 95 50, 105 40 M 125 118 C 120 75, 108 52, 105 40" 
              stroke="${stemColor}" stroke-width="4" stroke-linecap="round" fill="none" />
        <path d="M 105 40 C 115 35, 125 40, 120 50 C 110 50, 105 45, 105 40 Z" fill="${leafColor}" />
      `;
    }

    if (type === 'bunch') {
      return `
        <path d="M 100 60 C 100 40, 95 30, 90 25" stroke="${stemColor}" stroke-width="5" stroke-linecap="round" fill="none" />
        <path d="M 90 35 C 75 25, 60 40, 75 50 C 85 50, 90 40, 90 35 Z" fill="${leafColor}" />
      `;
    }

    if (type === 'wedge' || type === 'sliced_circle' || type === 'cracked_nut') {
      return ''; // No top stem needed for slices
    }

    if (type === 'cylinder_cone') { // Pineapple crown
      return `
        <g fill="${leafColor}">
          <path d="M 100 80 L 100 25 L 90 65 Z" />
          <path d="M 95 80 L 75 35 L 85 70 Z" />
          <path d="M 105 80 L 125 35 L 115 70 Z" />
          <path d="M 90 85 L 60 50 L 80 75 Z" />
          <path d="M 110 85 L 140 50 L 120 75 Z" />
        </g>
      `;
    }

    // Default top stem & leaf
    return `
      <path d="M 100 65 C 102 45, 110 38, 115 32" stroke="${stemColor}" stroke-width="5" stroke-linecap="round" fill="none" />
      <path d="M 102 55 C 120 40, 135 50, 125 65 C 112 68, 105 60, 102 55 Z" fill="${leafColor}" />
    `;
  }

  // Fruit textures, seeds, pores
  getDetailsGraphic(fruit, colors) {
    const type = fruit.shape ? fruit.shape.type : 'apple';

    if (type === 'heart_tapered') { // Strawberry seeds
      let seeds = '';
      const coords = [
        [75, 90], [100, 85], [125, 90],
        [68, 115], [90, 110], [112, 110], [132, 115],
        [80, 138], [100, 135], [120, 138],
        [90, 155], [110, 155]
      ];
      coords.forEach(([x, y]) => {
        seeds += `<ellipse cx="${x}" cy="${y}" rx="2" ry="3.5" fill="#FFE135" transform="rotate(${Math.random()*20-10} ${x} ${y})" />`;
      });
      return `<g>${seeds}</g>`;
    }

    if (type === 'wedge') { // Watermelon seeds
      let seeds = '';
      const coords = [[70, 100], [90, 95], [110, 100], [130, 95], [80, 120], [100, 115], [120, 120]];
      coords.forEach(([x, y]) => {
        seeds += `<ellipse cx="${x}" cy="${y}" rx="3" ry="5" fill="#1B1B1B" transform="rotate(${Math.random()*40-20} ${x} ${y})" />`;
      });
      return `<g>${seeds}</g>`;
    }

    if (type === 'sliced_circle') { // Kiwi seeds
      let seeds = '';
      for (let a = 0; a < Math.PI * 2; a += 0.35) {
        const r = 28 + Math.random() * 8;
        const sx = 100 + Math.cos(a) * r;
        const sy = 105 + Math.sin(a) * r;
        seeds += `<ellipse cx="${sx}" cy="${sy}" rx="1.8" ry="3" fill="#1B1B1B" transform="rotate(${(a*180/Math.PI)+90} ${sx} ${sy})" />`;
      }
      return `<g>${seeds}</g>`;
    }

    if (type === 'cylinder_cone') { // Pineapple mesh
      return `
        <g stroke="${colors.secondary || '#D00000'}" stroke-width="1.5" opacity="0.6">
          <line x1="65" y1="90" x2="135" y2="150" />
          <line x1="58" y1="115" x2="128" y2="170" />
          <line x1="135" y1="90" x2="65" y2="150" />
          <line x1="142" y1="115" x2="72" y2="170" />
        </g>
      `;
    }

    return '';
  }

  // Utility to darken or lighten hex colors
  shadeColor(color, percent) {
    let num = parseInt(color.replace("#",""),16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
  }
}

// Global instance
window.fruitRenderer = new FruitRenderer();

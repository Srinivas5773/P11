/**
 * FruitQuest - Advanced Localization & RTL Layout Engine
 * Handles bidirectional text rendering, Hebrew and Arabic script alignments,
 * and locale-aware number formatting.
 */

class LocaleManager {
  constructor() {
    this.rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    this.currentLocale = 'en';
  }

  setLocale(langCode) {
    this.currentLocale = langCode;
    const isRtl = this.rtlLanguages.includes(langCode);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
    console.log(`[LocaleManager] Switched locale to ${langCode} (RTL: ${isRtl})`);
  }

  formatNumber(num, locale = this.currentLocale) {
    try {
      return new Intl.NumberFormat(locale).format(num);
    } catch (e) {
      return num.toLocaleString();
    }
  }

  formatDate(date, locale = this.currentLocale) {
    try {
      return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(date));
    } catch (e) {
      return new Date(date).toLocaleDateString();
    }
  }
}

if (typeof window !== 'undefined') {
  window.localeManager = new LocaleManager();
}

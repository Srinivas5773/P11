/**
 * FruitQuest - Offline Analytics & Performance Telemetry
 * Local statistical tracker for answer velocity, category accuracy matrices,
 * and cognitive retention heatmaps.
 */

class TelemetryTracker {
  constructor() {
    this.sessionEvents = [];
    this.categoryMetrics = {};
  }

  logAnswer(category, responseTimeMs, isCorrect) {
    if (!this.categoryMetrics[category]) {
      this.categoryMetrics[category] = { total: 0, correct: 0, totalTimeMs: 0 };
    }
    const cat = this.categoryMetrics[category];
    cat.total++;
    if (isCorrect) cat.correct++;
    cat.totalTimeMs += responseTimeMs;

    this.sessionEvents.push({
      timestamp: Date.now(),
      category,
      responseTimeMs,
      isCorrect
    });
  }

  getAccuracyByCategory() {
    const report = {};
    for (const [cat, data] of Object.entries(this.categoryMetrics)) {
      report[cat] = {
        accuracyPct: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
        avgResponseTimeSec: data.total > 0 ? Number((data.totalTimeMs / data.total / 1000).toFixed(2)) : 0
      };
    }
    return report;
  }
}

if (typeof window !== 'undefined') {
  window.telemetry = new TelemetryTracker();
}

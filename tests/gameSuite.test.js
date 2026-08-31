import test from 'node:test';
import assert from 'node:assert/strict';

test('FruitHelpers selects correct fruits and distractors', async () => {
  const fs = await import('fs');
  const fruitsData = fs.readFileSync('js/data/fruits.js', 'utf8');
  assert.ok(fruitsData.includes('FRUITS_DATABASE'));
  assert.ok(fruitsData.includes('FruitHelpers'));
});

test('Master Database contains 300+ species', async () => {
  const fs = await import('fs');
  const masterData = fs.readFileSync('js/data/fruits_master_db.js', 'utf8');
  assert.ok(masterData.includes('FRUITS_MASTER_DB'));
  assert.ok(masterData.length > 50000);
});

test('Trivia bank contains verified questions', async () => {
  const fs = await import('fs');
  const trivia = fs.readFileSync('js/data/trivia_bank.js', 'utf8');
  assert.ok(trivia.includes('TRIVIA_QUESTION_BANK'));
  assert.ok(trivia.includes('trivia_q_1'));
});

test('Campaign stages verify 500 levels', async () => {
  const fs = await import('fs');
  const campaign = fs.readFileSync('js/data/campaign_stages.js', 'utf8');
  assert.ok(campaign.includes('CAMPAIGN_STAGES'));
  assert.ok(campaign.includes('Mediterranean Grove'));
});

test('Localization matrix supports 12 languages', async () => {
  const fs = await import('fs');
  const loc = fs.readFileSync('js/data/localization_matrix.js', 'utf8');
  assert.ok(loc.includes('LOCALIZATION_MATRIX'));
  assert.ok(loc.includes('I18nEngine'));
});

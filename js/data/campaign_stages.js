/**
 * FruitQuest - 500-Stage Global World Adventure Campaign
 * Structured world tour across 25 botanical regions with scaling difficulty,
 * custom modifiers, boss challenges, star ratings, and milestone coin bounties.
 */

const CAMPAIGN_STAGES = [
  {
    "levelNumber": 1,
    "stageCode": "1-1",
    "title": "Stage 1: Mediterranean Grove (Part 1)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 620,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry",
      "watermelon",
      "grape",
      "pineapple",
      "mango",
      "lemon"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 52,
      "starsMax": 3,
      "starThresholds": [
        434,
        620,
        806
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 2,
    "stageCode": "1-2",
    "title": "Stage 2: Mediterranean Grove (Part 2)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 740,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple",
      "mango",
      "lemon",
      "cherry",
      "peach",
      "pear"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 54,
      "starsMax": 3,
      "starThresholds": [
        518,
        740,
        962
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 3,
    "stageCode": "1-3",
    "title": "Stage 3: Mediterranean Grove (Part 3)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 860,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry",
      "peach",
      "pear",
      "kiwi",
      "coconut",
      "avocado"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 56,
      "starsMax": 3,
      "starThresholds": [
        602,
        860,
        1118
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 4,
    "stageCode": "1-4",
    "title": "Stage 4: Mediterranean Grove (Part 4)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 980,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi",
      "coconut",
      "avocado",
      "pomegranate",
      "papaya",
      "fig"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 58,
      "starsMax": 3,
      "starThresholds": [
        686,
        980,
        1274
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 5,
    "stageCode": "1-5",
    "title": "Stage 5: Mediterranean Grove (Part 5)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 1100,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate",
      "papaya",
      "fig",
      "blueberry",
      "raspberry",
      "durian"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 60,
      "starsMax": 3,
      "starThresholds": [
        770,
        1100,
        1430
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 6,
    "stageCode": "1-6",
    "title": "Stage 6: Mediterranean Grove (Part 6)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 1220,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry",
      "raspberry",
      "durian",
      "mangosteen",
      "rambutan",
      "lychee"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 62,
      "starsMax": 3,
      "starThresholds": [
        854,
        1220,
        1586
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 7,
    "stageCode": "1-7",
    "title": "Stage 7: Mediterranean Grove (Part 7)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 1340,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen",
      "rambutan",
      "lychee",
      "starfruit",
      "jackfruit",
      "buddhas_hand"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 64,
      "starsMax": 3,
      "starThresholds": [
        937.9999999999999,
        1340,
        1742
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 8,
    "stageCode": "1-8",
    "title": "Stage 8: Mediterranean Grove (Part 8)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 1460,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit",
      "jackfruit",
      "buddhas_hand",
      "miracle_fruit",
      "black_sapote",
      "jabuticaba"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 66,
      "starsMax": 3,
      "starThresholds": [
        1021.9999999999999,
        1460,
        1898
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 9,
    "stageCode": "1-9",
    "title": "Stage 9: Mediterranean Grove (Part 9)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 1580,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit",
      "black_sapote",
      "jabuticaba",
      "apple_var_2",
      "banana_var_2",
      "orange_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 68,
      "starsMax": 3,
      "starThresholds": [
        1106,
        1580,
        2054
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 10,
    "stageCode": "1-10",
    "title": "Stage 10: Mediterranean Grove (Part 10)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 1700,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_2",
      "banana_var_2",
      "orange_var_2",
      "strawberry_var_2",
      "watermelon_var_2",
      "grape_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 70,
      "starsMax": 3,
      "starThresholds": [
        1190,
        1700,
        2210
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 11,
    "stageCode": "1-11",
    "title": "Stage 11: Mediterranean Grove (Part 11)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 1820,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_2",
      "watermelon_var_2",
      "grape_var_2",
      "pineapple_var_2",
      "mango_var_2",
      "lemon_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 72,
      "starsMax": 3,
      "starThresholds": [
        1274,
        1820,
        2366
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 12,
    "stageCode": "1-12",
    "title": "Stage 12: Mediterranean Grove (Part 12)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 1940,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_2",
      "mango_var_2",
      "lemon_var_2",
      "cherry_var_2",
      "peach_var_2",
      "pear_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 74,
      "starsMax": 3,
      "starThresholds": [
        1358,
        1940,
        2522
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 13,
    "stageCode": "1-13",
    "title": "Stage 13: Mediterranean Grove (Part 13)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 2060,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_2",
      "peach_var_2",
      "pear_var_2",
      "kiwi_var_2",
      "coconut_var_2",
      "avocado_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 76,
      "starsMax": 3,
      "starThresholds": [
        1442,
        2060,
        2678
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 14,
    "stageCode": "1-14",
    "title": "Stage 14: Mediterranean Grove (Part 14)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 2180,
    "timeLimitSeconds": 70,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_2",
      "coconut_var_2",
      "avocado_var_2",
      "pomegranate_var_2",
      "papaya_var_2",
      "fig_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 78,
      "starsMax": 3,
      "starThresholds": [
        1526,
        2180,
        2834
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 70 seconds."
  },
  {
    "levelNumber": 15,
    "stageCode": "1-15",
    "title": "Stage 15: Mediterranean Grove (Part 15)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 2300,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_2",
      "papaya_var_2",
      "fig_var_2",
      "blueberry_var_2",
      "raspberry_var_2",
      "durian_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 80,
      "starsMax": 3,
      "starThresholds": [
        1610,
        2300,
        2990
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 16,
    "stageCode": "1-16",
    "title": "Stage 16: Mediterranean Grove (Part 16)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 2420,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_2",
      "raspberry_var_2",
      "durian_var_2",
      "mangosteen_var_2",
      "rambutan_var_2",
      "lychee_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 82,
      "starsMax": 3,
      "starThresholds": [
        1694,
        2420,
        3146
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 17,
    "stageCode": "1-17",
    "title": "Stage 17: Mediterranean Grove (Part 17)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 2540,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_2",
      "rambutan_var_2",
      "lychee_var_2",
      "starfruit_var_2",
      "jackfruit_var_2",
      "buddhas_hand_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 84,
      "starsMax": 3,
      "starThresholds": [
        1778,
        2540,
        3302
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 18,
    "stageCode": "1-18",
    "title": "Stage 18: Mediterranean Grove (Part 18)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 2660,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_2",
      "jackfruit_var_2",
      "buddhas_hand_var_2",
      "miracle_fruit_var_2",
      "black_sapote_var_2",
      "jabuticaba_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 86,
      "starsMax": 3,
      "starThresholds": [
        1861.9999999999998,
        2660,
        3458
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 19,
    "stageCode": "1-19",
    "title": "Stage 19: Mediterranean Grove (Part 19)",
    "region": "Mediterranean Grove",
    "isBossStage": false,
    "targetScore": 2780,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_2",
      "black_sapote_var_2",
      "jabuticaba_var_2",
      "apple_var_3",
      "banana_var_3",
      "orange_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 88,
      "starsMax": 3,
      "starThresholds": [
        1945.9999999999998,
        2780,
        3614
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 20,
    "stageCode": "1-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Mediterranean Grove",
    "region": "Mediterranean Grove",
    "isBossStage": true,
    "targetScore": 2900,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "apple_var_3",
      "banana_var_3",
      "orange_var_3",
      "strawberry_var_3",
      "watermelon_var_3",
      "grape_var_3"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        2029.9999999999998,
        2900,
        3770
      ]
    },
    "briefing": "Welcome to Mediterranean Grove. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 21,
    "stageCode": "2-1",
    "title": "Stage 21: Amazonian Canopy (Part 1)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 3020,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_3",
      "watermelon_var_3",
      "grape_var_3",
      "pineapple_var_3",
      "mango_var_3",
      "lemon_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 92,
      "starsMax": 3,
      "starThresholds": [
        2114,
        3020,
        3926
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 22,
    "stageCode": "2-2",
    "title": "Stage 22: Amazonian Canopy (Part 2)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 3140,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_3",
      "mango_var_3",
      "lemon_var_3",
      "cherry_var_3",
      "peach_var_3",
      "pear_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 94,
      "starsMax": 3,
      "starThresholds": [
        2198,
        3140,
        4082
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 23,
    "stageCode": "2-3",
    "title": "Stage 23: Amazonian Canopy (Part 3)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 3260,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_3",
      "peach_var_3",
      "pear_var_3",
      "kiwi_var_3",
      "coconut_var_3",
      "avocado_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 96,
      "starsMax": 3,
      "starThresholds": [
        2282,
        3260,
        4238
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 24,
    "stageCode": "2-4",
    "title": "Stage 24: Amazonian Canopy (Part 4)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 3380,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_3",
      "coconut_var_3",
      "avocado_var_3",
      "pomegranate_var_3",
      "papaya_var_3",
      "fig_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 98,
      "starsMax": 3,
      "starThresholds": [
        2366,
        3380,
        4394
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 25,
    "stageCode": "2-5",
    "title": "Stage 25: Amazonian Canopy (Part 5)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 3500,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_3",
      "papaya_var_3",
      "fig_var_3",
      "blueberry_var_3",
      "raspberry_var_3",
      "durian_var_3"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 100,
      "starsMax": 3,
      "starThresholds": [
        2450,
        3500,
        4550
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 26,
    "stageCode": "2-6",
    "title": "Stage 26: Amazonian Canopy (Part 6)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 3620,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_3",
      "raspberry_var_3",
      "durian_var_3",
      "mangosteen_var_3",
      "rambutan_var_3",
      "lychee_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 102,
      "starsMax": 3,
      "starThresholds": [
        2534,
        3620,
        4706
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 27,
    "stageCode": "2-7",
    "title": "Stage 27: Amazonian Canopy (Part 7)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 3740,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_3",
      "rambutan_var_3",
      "lychee_var_3",
      "starfruit_var_3",
      "jackfruit_var_3",
      "buddhas_hand_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 104,
      "starsMax": 3,
      "starThresholds": [
        2618,
        3740,
        4862
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 28,
    "stageCode": "2-8",
    "title": "Stage 28: Amazonian Canopy (Part 8)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 3860,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_3",
      "jackfruit_var_3",
      "buddhas_hand_var_3",
      "miracle_fruit_var_3",
      "black_sapote_var_3",
      "jabuticaba_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 106,
      "starsMax": 3,
      "starThresholds": [
        2702,
        3860,
        5018
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 29,
    "stageCode": "2-9",
    "title": "Stage 29: Amazonian Canopy (Part 9)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 3980,
    "timeLimitSeconds": 69,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_3",
      "black_sapote_var_3",
      "jabuticaba_var_3",
      "apple_var_4",
      "banana_var_4",
      "orange_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 108,
      "starsMax": 3,
      "starThresholds": [
        2786,
        3980,
        5174
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 69 seconds."
  },
  {
    "levelNumber": 30,
    "stageCode": "2-10",
    "title": "Stage 30: Amazonian Canopy (Part 10)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 4100,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_4",
      "banana_var_4",
      "orange_var_4",
      "strawberry_var_4",
      "watermelon_var_4",
      "grape_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 110,
      "starsMax": 3,
      "starThresholds": [
        2870,
        4100,
        5330
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 31,
    "stageCode": "2-11",
    "title": "Stage 31: Amazonian Canopy (Part 11)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 4220,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_4",
      "watermelon_var_4",
      "grape_var_4",
      "pineapple_var_4",
      "mango_var_4",
      "lemon_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 112,
      "starsMax": 3,
      "starThresholds": [
        2954,
        4220,
        5486
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 32,
    "stageCode": "2-12",
    "title": "Stage 32: Amazonian Canopy (Part 12)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 4340,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_4",
      "mango_var_4",
      "lemon_var_4",
      "cherry_var_4",
      "peach_var_4",
      "pear_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 114,
      "starsMax": 3,
      "starThresholds": [
        3038,
        4340,
        5642
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 33,
    "stageCode": "2-13",
    "title": "Stage 33: Amazonian Canopy (Part 13)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 4460,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_4",
      "peach_var_4",
      "pear_var_4",
      "kiwi_var_4",
      "coconut_var_4",
      "avocado_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 116,
      "starsMax": 3,
      "starThresholds": [
        3122,
        4460,
        5798
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 34,
    "stageCode": "2-14",
    "title": "Stage 34: Amazonian Canopy (Part 14)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 4580,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_4",
      "coconut_var_4",
      "avocado_var_4",
      "pomegranate_var_4",
      "papaya_var_4",
      "fig_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 118,
      "starsMax": 3,
      "starThresholds": [
        3206,
        4580,
        5954
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 35,
    "stageCode": "2-15",
    "title": "Stage 35: Amazonian Canopy (Part 15)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 4700,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_4",
      "papaya_var_4",
      "fig_var_4",
      "blueberry_var_4",
      "raspberry_var_4",
      "durian_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 120,
      "starsMax": 3,
      "starThresholds": [
        3290,
        4700,
        6110
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 36,
    "stageCode": "2-16",
    "title": "Stage 36: Amazonian Canopy (Part 16)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 4820,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_4",
      "raspberry_var_4",
      "durian_var_4",
      "mangosteen_var_4",
      "rambutan_var_4",
      "lychee_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 122,
      "starsMax": 3,
      "starThresholds": [
        3374,
        4820,
        6266
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 37,
    "stageCode": "2-17",
    "title": "Stage 37: Amazonian Canopy (Part 17)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 4940,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_4",
      "rambutan_var_4",
      "lychee_var_4",
      "starfruit_var_4",
      "jackfruit_var_4",
      "buddhas_hand_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 124,
      "starsMax": 3,
      "starThresholds": [
        3458,
        4940,
        6422
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 38,
    "stageCode": "2-18",
    "title": "Stage 38: Amazonian Canopy (Part 18)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 5060,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_4",
      "jackfruit_var_4",
      "buddhas_hand_var_4",
      "miracle_fruit_var_4",
      "black_sapote_var_4",
      "jabuticaba_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 126,
      "starsMax": 3,
      "starThresholds": [
        3542,
        5060,
        6578
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 39,
    "stageCode": "2-19",
    "title": "Stage 39: Amazonian Canopy (Part 19)",
    "region": "Amazonian Canopy",
    "isBossStage": false,
    "targetScore": 5180,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_4",
      "black_sapote_var_4",
      "jabuticaba_var_4",
      "apple_var_5",
      "banana_var_5",
      "orange_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 128,
      "starsMax": 3,
      "starThresholds": [
        3625.9999999999995,
        5180,
        6734
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 40,
    "stageCode": "2-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Amazonian Canopy",
    "region": "Amazonian Canopy",
    "isBossStage": true,
    "targetScore": 5300,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "apple_var_5",
      "banana_var_5",
      "orange_var_5",
      "strawberry_var_5",
      "watermelon_var_5",
      "grape_var_5"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        3709.9999999999995,
        5300,
        6890
      ]
    },
    "briefing": "Welcome to Amazonian Canopy. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 41,
    "stageCode": "3-1",
    "title": "Stage 41: Himalayan Foothills (Part 1)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 5420,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_5",
      "watermelon_var_5",
      "grape_var_5",
      "pineapple_var_5",
      "mango_var_5",
      "lemon_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 132,
      "starsMax": 3,
      "starThresholds": [
        3793.9999999999995,
        5420,
        7046
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 42,
    "stageCode": "3-2",
    "title": "Stage 42: Himalayan Foothills (Part 2)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 5540,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_5",
      "mango_var_5",
      "lemon_var_5",
      "cherry_var_5",
      "peach_var_5",
      "pear_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 134,
      "starsMax": 3,
      "starThresholds": [
        3877.9999999999995,
        5540,
        7202
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 43,
    "stageCode": "3-3",
    "title": "Stage 43: Himalayan Foothills (Part 3)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 5660,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_5",
      "peach_var_5",
      "pear_var_5",
      "kiwi_var_5",
      "coconut_var_5",
      "avocado_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 136,
      "starsMax": 3,
      "starThresholds": [
        3961.9999999999995,
        5660,
        7358
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 44,
    "stageCode": "3-4",
    "title": "Stage 44: Himalayan Foothills (Part 4)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 5780,
    "timeLimitSeconds": 68,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_5",
      "coconut_var_5",
      "avocado_var_5",
      "pomegranate_var_5",
      "papaya_var_5",
      "fig_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 138,
      "starsMax": 3,
      "starThresholds": [
        4045.9999999999995,
        5780,
        7514
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 68 seconds."
  },
  {
    "levelNumber": 45,
    "stageCode": "3-5",
    "title": "Stage 45: Himalayan Foothills (Part 5)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 5900,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_5",
      "papaya_var_5",
      "fig_var_5",
      "blueberry_var_5",
      "raspberry_var_5",
      "durian_var_5"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 140,
      "starsMax": 3,
      "starThresholds": [
        4130,
        5900,
        7670
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 46,
    "stageCode": "3-6",
    "title": "Stage 46: Himalayan Foothills (Part 6)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 6020,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_5",
      "raspberry_var_5",
      "durian_var_5",
      "mangosteen_var_5",
      "rambutan_var_5",
      "lychee_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 142,
      "starsMax": 3,
      "starThresholds": [
        4214,
        6020,
        7826
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 47,
    "stageCode": "3-7",
    "title": "Stage 47: Himalayan Foothills (Part 7)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 6140,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_5",
      "rambutan_var_5",
      "lychee_var_5",
      "starfruit_var_5",
      "jackfruit_var_5",
      "buddhas_hand_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 144,
      "starsMax": 3,
      "starThresholds": [
        4298,
        6140,
        7982
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 48,
    "stageCode": "3-8",
    "title": "Stage 48: Himalayan Foothills (Part 8)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 6260,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_5",
      "jackfruit_var_5",
      "buddhas_hand_var_5",
      "miracle_fruit_var_5",
      "black_sapote_var_5",
      "jabuticaba_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 146,
      "starsMax": 3,
      "starThresholds": [
        4382,
        6260,
        8138
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 49,
    "stageCode": "3-9",
    "title": "Stage 49: Himalayan Foothills (Part 9)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 6380,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_5",
      "black_sapote_var_5",
      "jabuticaba_var_5",
      "apple_var_6",
      "banana_var_6",
      "orange_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 148,
      "starsMax": 3,
      "starThresholds": [
        4466,
        6380,
        8294
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 50,
    "stageCode": "3-10",
    "title": "Stage 50: Himalayan Foothills (Part 10)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 6500,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_6",
      "banana_var_6",
      "orange_var_6",
      "strawberry_var_6",
      "watermelon_var_6",
      "grape_var_6"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 150,
      "starsMax": 3,
      "starThresholds": [
        4550,
        6500,
        8450
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 51,
    "stageCode": "3-11",
    "title": "Stage 51: Himalayan Foothills (Part 11)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 6620,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_6",
      "watermelon_var_6",
      "grape_var_6",
      "pineapple_var_6",
      "mango_var_6",
      "lemon_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 152,
      "starsMax": 3,
      "starThresholds": [
        4634,
        6620,
        8606
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 52,
    "stageCode": "3-12",
    "title": "Stage 52: Himalayan Foothills (Part 12)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 6740,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_6",
      "mango_var_6",
      "lemon_var_6",
      "cherry_var_6",
      "peach_var_6",
      "pear_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 154,
      "starsMax": 3,
      "starThresholds": [
        4718,
        6740,
        8762
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 53,
    "stageCode": "3-13",
    "title": "Stage 53: Himalayan Foothills (Part 13)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 6860,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_6",
      "peach_var_6",
      "pear_var_6",
      "kiwi_var_6",
      "coconut_var_6",
      "avocado_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 156,
      "starsMax": 3,
      "starThresholds": [
        4802,
        6860,
        8918
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 54,
    "stageCode": "3-14",
    "title": "Stage 54: Himalayan Foothills (Part 14)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 6980,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_6",
      "coconut_var_6",
      "avocado_var_6",
      "pomegranate_var_6",
      "papaya_var_6",
      "fig_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 158,
      "starsMax": 3,
      "starThresholds": [
        4886,
        6980,
        9074
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 55,
    "stageCode": "3-15",
    "title": "Stage 55: Himalayan Foothills (Part 15)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 7100,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_6",
      "papaya_var_6",
      "fig_var_6",
      "blueberry_var_6",
      "raspberry_var_6",
      "durian_var_6"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 160,
      "starsMax": 3,
      "starThresholds": [
        4970,
        7100,
        9230
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 56,
    "stageCode": "3-16",
    "title": "Stage 56: Himalayan Foothills (Part 16)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 7220,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_6",
      "raspberry_var_6",
      "durian_var_6",
      "mangosteen_var_6",
      "rambutan_var_6",
      "lychee_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 162,
      "starsMax": 3,
      "starThresholds": [
        5054,
        7220,
        9386
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 57,
    "stageCode": "3-17",
    "title": "Stage 57: Himalayan Foothills (Part 17)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 7340,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_6",
      "rambutan_var_6",
      "lychee_var_6",
      "starfruit_var_6",
      "jackfruit_var_6",
      "buddhas_hand_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 164,
      "starsMax": 3,
      "starThresholds": [
        5138,
        7340,
        9542
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 58,
    "stageCode": "3-18",
    "title": "Stage 58: Himalayan Foothills (Part 18)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 7460,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_6",
      "jackfruit_var_6",
      "buddhas_hand_var_6",
      "miracle_fruit_var_6",
      "black_sapote_var_6",
      "jabuticaba_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 166,
      "starsMax": 3,
      "starThresholds": [
        5222,
        7460,
        9698
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 59,
    "stageCode": "3-19",
    "title": "Stage 59: Himalayan Foothills (Part 19)",
    "region": "Himalayan Foothills",
    "isBossStage": false,
    "targetScore": 7580,
    "timeLimitSeconds": 67,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_6",
      "black_sapote_var_6",
      "jabuticaba_var_6",
      "apple_var_7",
      "banana_var_7",
      "orange_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 168,
      "starsMax": 3,
      "starThresholds": [
        5306,
        7580,
        9854
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 67 seconds."
  },
  {
    "levelNumber": 60,
    "stageCode": "3-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Himalayan Foothills",
    "region": "Himalayan Foothills",
    "isBossStage": true,
    "targetScore": 7700,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "apple_var_7",
      "banana_var_7",
      "orange_var_7",
      "strawberry_var_7",
      "watermelon_var_7",
      "grape_var_7"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        5390,
        7700,
        10010
      ]
    },
    "briefing": "Welcome to Himalayan Foothills. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 61,
    "stageCode": "4-1",
    "title": "Stage 61: Mesoamerican Valleys (Part 1)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 7820,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_7",
      "watermelon_var_7",
      "grape_var_7",
      "pineapple_var_7",
      "mango_var_7",
      "lemon_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 172,
      "starsMax": 3,
      "starThresholds": [
        5474,
        7820,
        10166
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 62,
    "stageCode": "4-2",
    "title": "Stage 62: Mesoamerican Valleys (Part 2)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 7940,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_7",
      "mango_var_7",
      "lemon_var_7",
      "cherry_var_7",
      "peach_var_7",
      "pear_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 174,
      "starsMax": 3,
      "starThresholds": [
        5558,
        7940,
        10322
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 63,
    "stageCode": "4-3",
    "title": "Stage 63: Mesoamerican Valleys (Part 3)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 8060,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_7",
      "peach_var_7",
      "pear_var_7",
      "kiwi_var_7",
      "coconut_var_7",
      "avocado_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 176,
      "starsMax": 3,
      "starThresholds": [
        5642,
        8060,
        10478
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 64,
    "stageCode": "4-4",
    "title": "Stage 64: Mesoamerican Valleys (Part 4)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 8180,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_7",
      "coconut_var_7",
      "avocado_var_7",
      "pomegranate_var_7",
      "papaya_var_7",
      "fig_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 178,
      "starsMax": 3,
      "starThresholds": [
        5726,
        8180,
        10634
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 65,
    "stageCode": "4-5",
    "title": "Stage 65: Mesoamerican Valleys (Part 5)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 8300,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_7",
      "papaya_var_7",
      "fig_var_7",
      "blueberry_var_7",
      "raspberry_var_7",
      "durian_var_7"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 180,
      "starsMax": 3,
      "starThresholds": [
        5810,
        8300,
        10790
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 66,
    "stageCode": "4-6",
    "title": "Stage 66: Mesoamerican Valleys (Part 6)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 8420,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_7",
      "raspberry_var_7",
      "durian_var_7",
      "mangosteen_var_7",
      "rambutan_var_7",
      "lychee_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 182,
      "starsMax": 3,
      "starThresholds": [
        5894,
        8420,
        10946
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 67,
    "stageCode": "4-7",
    "title": "Stage 67: Mesoamerican Valleys (Part 7)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 8540,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_7",
      "rambutan_var_7",
      "lychee_var_7",
      "starfruit_var_7",
      "jackfruit_var_7",
      "buddhas_hand_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 184,
      "starsMax": 3,
      "starThresholds": [
        5978,
        8540,
        11102
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 68,
    "stageCode": "4-8",
    "title": "Stage 68: Mesoamerican Valleys (Part 8)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 8660,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_7",
      "jackfruit_var_7",
      "buddhas_hand_var_7",
      "miracle_fruit_var_7",
      "black_sapote_var_7",
      "jabuticaba_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 186,
      "starsMax": 3,
      "starThresholds": [
        6062,
        8660,
        11258
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 69,
    "stageCode": "4-9",
    "title": "Stage 69: Mesoamerican Valleys (Part 9)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 8780,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_7",
      "black_sapote_var_7",
      "jabuticaba_var_7",
      "apple_var_8",
      "banana_var_8",
      "orange_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 188,
      "starsMax": 3,
      "starThresholds": [
        6146,
        8780,
        11414
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 70,
    "stageCode": "4-10",
    "title": "Stage 70: Mesoamerican Valleys (Part 10)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 8900,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_8",
      "banana_var_8",
      "orange_var_8",
      "strawberry_var_8",
      "watermelon_var_8",
      "grape_var_8"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 190,
      "starsMax": 3,
      "starThresholds": [
        6230,
        8900,
        11570
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 71,
    "stageCode": "4-11",
    "title": "Stage 71: Mesoamerican Valleys (Part 11)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 9020,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_8",
      "watermelon_var_8",
      "grape_var_8",
      "pineapple_var_8",
      "mango_var_8",
      "lemon_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 192,
      "starsMax": 3,
      "starThresholds": [
        6314,
        9020,
        11726
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 72,
    "stageCode": "4-12",
    "title": "Stage 72: Mesoamerican Valleys (Part 12)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 9140,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_8",
      "mango_var_8",
      "lemon_var_8",
      "cherry_var_8",
      "peach_var_8",
      "pear_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 194,
      "starsMax": 3,
      "starThresholds": [
        6398,
        9140,
        11882
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 73,
    "stageCode": "4-13",
    "title": "Stage 73: Mesoamerican Valleys (Part 13)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 9260,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_8",
      "peach_var_8",
      "pear_var_8",
      "kiwi_var_8",
      "coconut_var_8",
      "avocado_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 196,
      "starsMax": 3,
      "starThresholds": [
        6482,
        9260,
        12038
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 74,
    "stageCode": "4-14",
    "title": "Stage 74: Mesoamerican Valleys (Part 14)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 9380,
    "timeLimitSeconds": 66,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_8",
      "coconut_var_8",
      "avocado_var_8",
      "pomegranate_var_8",
      "papaya_var_8",
      "fig_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 198,
      "starsMax": 3,
      "starThresholds": [
        6566,
        9380,
        12194
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 66 seconds."
  },
  {
    "levelNumber": 75,
    "stageCode": "4-15",
    "title": "Stage 75: Mesoamerican Valleys (Part 15)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 9500,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_8",
      "papaya_var_8",
      "fig_var_8",
      "blueberry_var_8",
      "raspberry_var_8",
      "durian_var_8"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 200,
      "starsMax": 3,
      "starThresholds": [
        6650,
        9500,
        12350
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 76,
    "stageCode": "4-16",
    "title": "Stage 76: Mesoamerican Valleys (Part 16)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 9620,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_8",
      "raspberry_var_8",
      "durian_var_8",
      "mangosteen_var_8",
      "rambutan_var_8",
      "lychee_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 202,
      "starsMax": 3,
      "starThresholds": [
        6734,
        9620,
        12506
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 77,
    "stageCode": "4-17",
    "title": "Stage 77: Mesoamerican Valleys (Part 17)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 9740,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_8",
      "rambutan_var_8",
      "lychee_var_8",
      "starfruit_var_8",
      "jackfruit_var_8",
      "buddhas_hand_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 204,
      "starsMax": 3,
      "starThresholds": [
        6818,
        9740,
        12662
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 78,
    "stageCode": "4-18",
    "title": "Stage 78: Mesoamerican Valleys (Part 18)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 9860,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_8",
      "jackfruit_var_8",
      "buddhas_hand_var_8",
      "miracle_fruit_var_8",
      "black_sapote_var_8",
      "jabuticaba_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 206,
      "starsMax": 3,
      "starThresholds": [
        6902,
        9860,
        12818
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 79,
    "stageCode": "4-19",
    "title": "Stage 79: Mesoamerican Valleys (Part 19)",
    "region": "Mesoamerican Valleys",
    "isBossStage": false,
    "targetScore": 9980,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_8",
      "black_sapote_var_8",
      "jabuticaba_var_8",
      "apple_var_9",
      "banana_var_9",
      "orange_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 208,
      "starsMax": 3,
      "starThresholds": [
        6986,
        9980,
        12974
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 80,
    "stageCode": "4-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Mesoamerican Valleys",
    "region": "Mesoamerican Valleys",
    "isBossStage": true,
    "targetScore": 10100,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "apple_var_9",
      "banana_var_9",
      "orange_var_9",
      "strawberry_var_9",
      "watermelon_var_9",
      "grape_var_9"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        7070,
        10100,
        13130
      ]
    },
    "briefing": "Welcome to Mesoamerican Valleys. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 81,
    "stageCode": "5-1",
    "title": "Stage 81: Sundaland Archipelago (Part 1)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 10220,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_9",
      "watermelon_var_9",
      "grape_var_9",
      "pineapple_var_9",
      "mango_var_9",
      "lemon_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 212,
      "starsMax": 3,
      "starThresholds": [
        7154,
        10220,
        13286
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 82,
    "stageCode": "5-2",
    "title": "Stage 82: Sundaland Archipelago (Part 2)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 10340,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_9",
      "mango_var_9",
      "lemon_var_9",
      "cherry_var_9",
      "peach_var_9",
      "pear_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 214,
      "starsMax": 3,
      "starThresholds": [
        7237.999999999999,
        10340,
        13442
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 83,
    "stageCode": "5-3",
    "title": "Stage 83: Sundaland Archipelago (Part 3)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 10460,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_9",
      "peach_var_9",
      "pear_var_9",
      "kiwi_var_9",
      "coconut_var_9",
      "avocado_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 216,
      "starsMax": 3,
      "starThresholds": [
        7321.999999999999,
        10460,
        13598
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 84,
    "stageCode": "5-4",
    "title": "Stage 84: Sundaland Archipelago (Part 4)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 10580,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_9",
      "coconut_var_9",
      "avocado_var_9",
      "pomegranate_var_9",
      "papaya_var_9",
      "fig_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 218,
      "starsMax": 3,
      "starThresholds": [
        7405.999999999999,
        10580,
        13754
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 85,
    "stageCode": "5-5",
    "title": "Stage 85: Sundaland Archipelago (Part 5)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 10700,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_9",
      "papaya_var_9",
      "fig_var_9",
      "blueberry_var_9",
      "raspberry_var_9",
      "durian_var_9"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 220,
      "starsMax": 3,
      "starThresholds": [
        7489.999999999999,
        10700,
        13910
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 86,
    "stageCode": "5-6",
    "title": "Stage 86: Sundaland Archipelago (Part 6)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 10820,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_9",
      "raspberry_var_9",
      "durian_var_9",
      "mangosteen_var_9",
      "rambutan_var_9",
      "lychee_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 222,
      "starsMax": 3,
      "starThresholds": [
        7573.999999999999,
        10820,
        14066
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 87,
    "stageCode": "5-7",
    "title": "Stage 87: Sundaland Archipelago (Part 7)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 10940,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_9",
      "rambutan_var_9",
      "lychee_var_9",
      "starfruit_var_9",
      "jackfruit_var_9",
      "buddhas_hand_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 224,
      "starsMax": 3,
      "starThresholds": [
        7657.999999999999,
        10940,
        14222
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 88,
    "stageCode": "5-8",
    "title": "Stage 88: Sundaland Archipelago (Part 8)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 11060,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_9",
      "jackfruit_var_9",
      "buddhas_hand_var_9",
      "miracle_fruit_var_9",
      "black_sapote_var_9",
      "jabuticaba_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 226,
      "starsMax": 3,
      "starThresholds": [
        7741.999999999999,
        11060,
        14378
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 89,
    "stageCode": "5-9",
    "title": "Stage 89: Sundaland Archipelago (Part 9)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 11180,
    "timeLimitSeconds": 65,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_9",
      "black_sapote_var_9",
      "jabuticaba_var_9",
      "apple_var_10",
      "banana_var_10",
      "orange_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 228,
      "starsMax": 3,
      "starThresholds": [
        7825.999999999999,
        11180,
        14534
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 65 seconds."
  },
  {
    "levelNumber": 90,
    "stageCode": "5-10",
    "title": "Stage 90: Sundaland Archipelago (Part 10)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 11300,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_10",
      "banana_var_10",
      "orange_var_10",
      "strawberry_var_10",
      "watermelon_var_10",
      "grape_var_10"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 230,
      "starsMax": 3,
      "starThresholds": [
        7909.999999999999,
        11300,
        14690
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 91,
    "stageCode": "5-11",
    "title": "Stage 91: Sundaland Archipelago (Part 11)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 11420,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_10",
      "watermelon_var_10",
      "grape_var_10",
      "pineapple_var_10",
      "mango_var_10",
      "lemon_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 232,
      "starsMax": 3,
      "starThresholds": [
        7993.999999999999,
        11420,
        14846
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 92,
    "stageCode": "5-12",
    "title": "Stage 92: Sundaland Archipelago (Part 12)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 11540,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_10",
      "mango_var_10",
      "lemon_var_10",
      "cherry_var_10",
      "peach_var_10",
      "pear_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 234,
      "starsMax": 3,
      "starThresholds": [
        8077.999999999999,
        11540,
        15002
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 93,
    "stageCode": "5-13",
    "title": "Stage 93: Sundaland Archipelago (Part 13)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 11660,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_10",
      "peach_var_10",
      "pear_var_10",
      "kiwi_var_10",
      "coconut_var_10",
      "avocado_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 236,
      "starsMax": 3,
      "starThresholds": [
        8161.999999999999,
        11660,
        15158
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 94,
    "stageCode": "5-14",
    "title": "Stage 94: Sundaland Archipelago (Part 14)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 11780,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange",
      "strawberry",
      "watermelon",
      "grape",
      "pineapple",
      "mango"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 238,
      "starsMax": 3,
      "starThresholds": [
        8246,
        11780,
        15314
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 95,
    "stageCode": "5-15",
    "title": "Stage 95: Sundaland Archipelago (Part 15)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 11900,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape",
      "pineapple",
      "mango",
      "lemon",
      "cherry",
      "peach"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 240,
      "starsMax": 3,
      "starThresholds": [
        8330,
        11900,
        15470
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 96,
    "stageCode": "5-16",
    "title": "Stage 96: Sundaland Archipelago (Part 16)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 12020,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon",
      "cherry",
      "peach",
      "pear",
      "kiwi",
      "coconut"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 242,
      "starsMax": 3,
      "starThresholds": [
        8414,
        12020,
        15626
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 97,
    "stageCode": "5-17",
    "title": "Stage 97: Sundaland Archipelago (Part 17)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 12140,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear",
      "kiwi",
      "coconut",
      "avocado",
      "pomegranate",
      "papaya"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 244,
      "starsMax": 3,
      "starThresholds": [
        8498,
        12140,
        15782
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 98,
    "stageCode": "5-18",
    "title": "Stage 98: Sundaland Archipelago (Part 18)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 12260,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado",
      "pomegranate",
      "papaya",
      "fig",
      "blueberry",
      "raspberry"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 246,
      "starsMax": 3,
      "starThresholds": [
        8582,
        12260,
        15938
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 99,
    "stageCode": "5-19",
    "title": "Stage 99: Sundaland Archipelago (Part 19)",
    "region": "Sundaland Archipelago",
    "isBossStage": false,
    "targetScore": 12380,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig",
      "blueberry",
      "raspberry",
      "durian",
      "mangosteen",
      "rambutan"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 248,
      "starsMax": 3,
      "starThresholds": [
        8666,
        12380,
        16094
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 100,
    "stageCode": "5-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Sundaland Archipelago",
    "region": "Sundaland Archipelago",
    "isBossStage": true,
    "targetScore": 12500,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian",
      "mangosteen",
      "rambutan",
      "lychee",
      "starfruit",
      "jackfruit"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        8750,
        12500,
        16250
      ]
    },
    "briefing": "Welcome to Sundaland Archipelago. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 101,
    "stageCode": "6-1",
    "title": "Stage 101: Sub-Saharan Savanna (Part 1)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 12620,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee",
      "starfruit",
      "jackfruit",
      "buddhas_hand",
      "miracle_fruit",
      "black_sapote"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 252,
      "starsMax": 3,
      "starThresholds": [
        8834,
        12620,
        16406
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 102,
    "stageCode": "6-2",
    "title": "Stage 102: Sub-Saharan Savanna (Part 2)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 12740,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand",
      "miracle_fruit",
      "black_sapote",
      "jabuticaba",
      "apple_var_2",
      "banana_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 254,
      "starsMax": 3,
      "starThresholds": [
        8918,
        12740,
        16562
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 103,
    "stageCode": "6-3",
    "title": "Stage 103: Sub-Saharan Savanna (Part 3)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 12860,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba",
      "apple_var_2",
      "banana_var_2",
      "orange_var_2",
      "strawberry_var_2",
      "watermelon_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 256,
      "starsMax": 3,
      "starThresholds": [
        9002,
        12860,
        16718
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 104,
    "stageCode": "6-4",
    "title": "Stage 104: Sub-Saharan Savanna (Part 4)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 12980,
    "timeLimitSeconds": 64,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_2",
      "strawberry_var_2",
      "watermelon_var_2",
      "grape_var_2",
      "pineapple_var_2",
      "mango_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 258,
      "starsMax": 3,
      "starThresholds": [
        9086,
        12980,
        16874
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 64 seconds."
  },
  {
    "levelNumber": 105,
    "stageCode": "6-5",
    "title": "Stage 105: Sub-Saharan Savanna (Part 5)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 13100,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_2",
      "pineapple_var_2",
      "mango_var_2",
      "lemon_var_2",
      "cherry_var_2",
      "peach_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 260,
      "starsMax": 3,
      "starThresholds": [
        9170,
        13100,
        17030
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 106,
    "stageCode": "6-6",
    "title": "Stage 106: Sub-Saharan Savanna (Part 6)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 13220,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_2",
      "cherry_var_2",
      "peach_var_2",
      "pear_var_2",
      "kiwi_var_2",
      "coconut_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 262,
      "starsMax": 3,
      "starThresholds": [
        9254,
        13220,
        17186
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 107,
    "stageCode": "6-7",
    "title": "Stage 107: Sub-Saharan Savanna (Part 7)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 13340,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_2",
      "kiwi_var_2",
      "coconut_var_2",
      "avocado_var_2",
      "pomegranate_var_2",
      "papaya_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 264,
      "starsMax": 3,
      "starThresholds": [
        9338,
        13340,
        17342
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 108,
    "stageCode": "6-8",
    "title": "Stage 108: Sub-Saharan Savanna (Part 8)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 13460,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_2",
      "pomegranate_var_2",
      "papaya_var_2",
      "fig_var_2",
      "blueberry_var_2",
      "raspberry_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 266,
      "starsMax": 3,
      "starThresholds": [
        9422,
        13460,
        17498
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 109,
    "stageCode": "6-9",
    "title": "Stage 109: Sub-Saharan Savanna (Part 9)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 13580,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_2",
      "blueberry_var_2",
      "raspberry_var_2",
      "durian_var_2",
      "mangosteen_var_2",
      "rambutan_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 268,
      "starsMax": 3,
      "starThresholds": [
        9506,
        13580,
        17654
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 110,
    "stageCode": "6-10",
    "title": "Stage 110: Sub-Saharan Savanna (Part 10)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 13700,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "durian_var_2",
      "mangosteen_var_2",
      "rambutan_var_2",
      "lychee_var_2",
      "starfruit_var_2",
      "jackfruit_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 270,
      "starsMax": 3,
      "starThresholds": [
        9590,
        13700,
        17810
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 111,
    "stageCode": "6-11",
    "title": "Stage 111: Sub-Saharan Savanna (Part 11)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 13820,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_2",
      "starfruit_var_2",
      "jackfruit_var_2",
      "buddhas_hand_var_2",
      "miracle_fruit_var_2",
      "black_sapote_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 272,
      "starsMax": 3,
      "starThresholds": [
        9674,
        13820,
        17966
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 112,
    "stageCode": "6-12",
    "title": "Stage 112: Sub-Saharan Savanna (Part 12)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 13940,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_2",
      "miracle_fruit_var_2",
      "black_sapote_var_2",
      "jabuticaba_var_2",
      "apple_var_3",
      "banana_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 274,
      "starsMax": 3,
      "starThresholds": [
        9758,
        13940,
        18122
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 113,
    "stageCode": "6-13",
    "title": "Stage 113: Sub-Saharan Savanna (Part 13)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 14060,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_2",
      "apple_var_3",
      "banana_var_3",
      "orange_var_3",
      "strawberry_var_3",
      "watermelon_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 276,
      "starsMax": 3,
      "starThresholds": [
        9842,
        14060,
        18278
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 114,
    "stageCode": "6-14",
    "title": "Stage 114: Sub-Saharan Savanna (Part 14)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 14180,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_3",
      "strawberry_var_3",
      "watermelon_var_3",
      "grape_var_3",
      "pineapple_var_3",
      "mango_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 278,
      "starsMax": 3,
      "starThresholds": [
        9926,
        14180,
        18434
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 115,
    "stageCode": "6-15",
    "title": "Stage 115: Sub-Saharan Savanna (Part 15)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 14300,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_3",
      "pineapple_var_3",
      "mango_var_3",
      "lemon_var_3",
      "cherry_var_3",
      "peach_var_3"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 280,
      "starsMax": 3,
      "starThresholds": [
        10010,
        14300,
        18590
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 116,
    "stageCode": "6-16",
    "title": "Stage 116: Sub-Saharan Savanna (Part 16)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 14420,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_3",
      "cherry_var_3",
      "peach_var_3",
      "pear_var_3",
      "kiwi_var_3",
      "coconut_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 282,
      "starsMax": 3,
      "starThresholds": [
        10094,
        14420,
        18746
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 117,
    "stageCode": "6-17",
    "title": "Stage 117: Sub-Saharan Savanna (Part 17)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 14540,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_3",
      "kiwi_var_3",
      "coconut_var_3",
      "avocado_var_3",
      "pomegranate_var_3",
      "papaya_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 284,
      "starsMax": 3,
      "starThresholds": [
        10178,
        14540,
        18902
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 118,
    "stageCode": "6-18",
    "title": "Stage 118: Sub-Saharan Savanna (Part 18)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 14660,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_3",
      "pomegranate_var_3",
      "papaya_var_3",
      "fig_var_3",
      "blueberry_var_3",
      "raspberry_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 286,
      "starsMax": 3,
      "starThresholds": [
        10262,
        14660,
        19058
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 119,
    "stageCode": "6-19",
    "title": "Stage 119: Sub-Saharan Savanna (Part 19)",
    "region": "Sub-Saharan Savanna",
    "isBossStage": false,
    "targetScore": 14780,
    "timeLimitSeconds": 63,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_3",
      "blueberry_var_3",
      "raspberry_var_3",
      "durian_var_3",
      "mangosteen_var_3",
      "rambutan_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 288,
      "starsMax": 3,
      "starThresholds": [
        10346,
        14780,
        19214
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 63 seconds."
  },
  {
    "levelNumber": 120,
    "stageCode": "6-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Sub-Saharan Savanna",
    "region": "Sub-Saharan Savanna",
    "isBossStage": true,
    "targetScore": 14900,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian_var_3",
      "mangosteen_var_3",
      "rambutan_var_3",
      "lychee_var_3",
      "starfruit_var_3",
      "jackfruit_var_3"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        10430,
        14900,
        19370
      ]
    },
    "briefing": "Welcome to Sub-Saharan Savanna. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 121,
    "stageCode": "7-1",
    "title": "Stage 121: Scandinavian Taiga (Part 1)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 15020,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_3",
      "starfruit_var_3",
      "jackfruit_var_3",
      "buddhas_hand_var_3",
      "miracle_fruit_var_3",
      "black_sapote_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 292,
      "starsMax": 3,
      "starThresholds": [
        10514,
        15020,
        19526
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 122,
    "stageCode": "7-2",
    "title": "Stage 122: Scandinavian Taiga (Part 2)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 15140,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_3",
      "miracle_fruit_var_3",
      "black_sapote_var_3",
      "jabuticaba_var_3",
      "apple_var_4",
      "banana_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 294,
      "starsMax": 3,
      "starThresholds": [
        10598,
        15140,
        19682
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 123,
    "stageCode": "7-3",
    "title": "Stage 123: Scandinavian Taiga (Part 3)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 15260,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_3",
      "apple_var_4",
      "banana_var_4",
      "orange_var_4",
      "strawberry_var_4",
      "watermelon_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 296,
      "starsMax": 3,
      "starThresholds": [
        10682,
        15260,
        19838
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 124,
    "stageCode": "7-4",
    "title": "Stage 124: Scandinavian Taiga (Part 4)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 15380,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_4",
      "strawberry_var_4",
      "watermelon_var_4",
      "grape_var_4",
      "pineapple_var_4",
      "mango_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 298,
      "starsMax": 3,
      "starThresholds": [
        10766,
        15380,
        19994
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 125,
    "stageCode": "7-5",
    "title": "Stage 125: Scandinavian Taiga (Part 5)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 15500,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_4",
      "pineapple_var_4",
      "mango_var_4",
      "lemon_var_4",
      "cherry_var_4",
      "peach_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 300,
      "starsMax": 3,
      "starThresholds": [
        10850,
        15500,
        20150
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 126,
    "stageCode": "7-6",
    "title": "Stage 126: Scandinavian Taiga (Part 6)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 15620,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_4",
      "cherry_var_4",
      "peach_var_4",
      "pear_var_4",
      "kiwi_var_4",
      "coconut_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 302,
      "starsMax": 3,
      "starThresholds": [
        10934,
        15620,
        20306
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 127,
    "stageCode": "7-7",
    "title": "Stage 127: Scandinavian Taiga (Part 7)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 15740,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_4",
      "kiwi_var_4",
      "coconut_var_4",
      "avocado_var_4",
      "pomegranate_var_4",
      "papaya_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 304,
      "starsMax": 3,
      "starThresholds": [
        11018,
        15740,
        20462
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 128,
    "stageCode": "7-8",
    "title": "Stage 128: Scandinavian Taiga (Part 8)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 15860,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_4",
      "pomegranate_var_4",
      "papaya_var_4",
      "fig_var_4",
      "blueberry_var_4",
      "raspberry_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 306,
      "starsMax": 3,
      "starThresholds": [
        11102,
        15860,
        20618
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 129,
    "stageCode": "7-9",
    "title": "Stage 129: Scandinavian Taiga (Part 9)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 15980,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_4",
      "blueberry_var_4",
      "raspberry_var_4",
      "durian_var_4",
      "mangosteen_var_4",
      "rambutan_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 308,
      "starsMax": 3,
      "starThresholds": [
        11186,
        15980,
        20774
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 130,
    "stageCode": "7-10",
    "title": "Stage 130: Scandinavian Taiga (Part 10)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 16100,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "durian_var_4",
      "mangosteen_var_4",
      "rambutan_var_4",
      "lychee_var_4",
      "starfruit_var_4",
      "jackfruit_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 310,
      "starsMax": 3,
      "starThresholds": [
        11270,
        16100,
        20930
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 131,
    "stageCode": "7-11",
    "title": "Stage 131: Scandinavian Taiga (Part 11)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 16220,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_4",
      "starfruit_var_4",
      "jackfruit_var_4",
      "buddhas_hand_var_4",
      "miracle_fruit_var_4",
      "black_sapote_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 312,
      "starsMax": 3,
      "starThresholds": [
        11354,
        16220,
        21086
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 132,
    "stageCode": "7-12",
    "title": "Stage 132: Scandinavian Taiga (Part 12)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 16340,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_4",
      "miracle_fruit_var_4",
      "black_sapote_var_4",
      "jabuticaba_var_4",
      "apple_var_5",
      "banana_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 314,
      "starsMax": 3,
      "starThresholds": [
        11438,
        16340,
        21242
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 133,
    "stageCode": "7-13",
    "title": "Stage 133: Scandinavian Taiga (Part 13)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 16460,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_4",
      "apple_var_5",
      "banana_var_5",
      "orange_var_5",
      "strawberry_var_5",
      "watermelon_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 316,
      "starsMax": 3,
      "starThresholds": [
        11522,
        16460,
        21398
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 134,
    "stageCode": "7-14",
    "title": "Stage 134: Scandinavian Taiga (Part 14)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 16580,
    "timeLimitSeconds": 62,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_5",
      "strawberry_var_5",
      "watermelon_var_5",
      "grape_var_5",
      "pineapple_var_5",
      "mango_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 318,
      "starsMax": 3,
      "starThresholds": [
        11606,
        16580,
        21554
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 62 seconds."
  },
  {
    "levelNumber": 135,
    "stageCode": "7-15",
    "title": "Stage 135: Scandinavian Taiga (Part 15)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 16700,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_5",
      "pineapple_var_5",
      "mango_var_5",
      "lemon_var_5",
      "cherry_var_5",
      "peach_var_5"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 320,
      "starsMax": 3,
      "starThresholds": [
        11690,
        16700,
        21710
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 136,
    "stageCode": "7-16",
    "title": "Stage 136: Scandinavian Taiga (Part 16)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 16820,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_5",
      "cherry_var_5",
      "peach_var_5",
      "pear_var_5",
      "kiwi_var_5",
      "coconut_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 322,
      "starsMax": 3,
      "starThresholds": [
        11774,
        16820,
        21866
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 137,
    "stageCode": "7-17",
    "title": "Stage 137: Scandinavian Taiga (Part 17)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 16940,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_5",
      "kiwi_var_5",
      "coconut_var_5",
      "avocado_var_5",
      "pomegranate_var_5",
      "papaya_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 324,
      "starsMax": 3,
      "starThresholds": [
        11858,
        16940,
        22022
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 138,
    "stageCode": "7-18",
    "title": "Stage 138: Scandinavian Taiga (Part 18)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 17060,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_5",
      "pomegranate_var_5",
      "papaya_var_5",
      "fig_var_5",
      "blueberry_var_5",
      "raspberry_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 326,
      "starsMax": 3,
      "starThresholds": [
        11942,
        17060,
        22178
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 139,
    "stageCode": "7-19",
    "title": "Stage 139: Scandinavian Taiga (Part 19)",
    "region": "Scandinavian Taiga",
    "isBossStage": false,
    "targetScore": 17180,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_5",
      "blueberry_var_5",
      "raspberry_var_5",
      "durian_var_5",
      "mangosteen_var_5",
      "rambutan_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 328,
      "starsMax": 3,
      "starThresholds": [
        12026,
        17180,
        22334
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 140,
    "stageCode": "7-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Scandinavian Taiga",
    "region": "Scandinavian Taiga",
    "isBossStage": true,
    "targetScore": 17300,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian_var_5",
      "mangosteen_var_5",
      "rambutan_var_5",
      "lychee_var_5",
      "starfruit_var_5",
      "jackfruit_var_5"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        12110,
        17300,
        22490
      ]
    },
    "briefing": "Welcome to Scandinavian Taiga. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 141,
    "stageCode": "8-1",
    "title": "Stage 141: Caspian Orchard (Part 1)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 17420,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_5",
      "starfruit_var_5",
      "jackfruit_var_5",
      "buddhas_hand_var_5",
      "miracle_fruit_var_5",
      "black_sapote_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 332,
      "starsMax": 3,
      "starThresholds": [
        12194,
        17420,
        22646
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 142,
    "stageCode": "8-2",
    "title": "Stage 142: Caspian Orchard (Part 2)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 17540,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_5",
      "miracle_fruit_var_5",
      "black_sapote_var_5",
      "jabuticaba_var_5",
      "apple_var_6",
      "banana_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 334,
      "starsMax": 3,
      "starThresholds": [
        12278,
        17540,
        22802
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 143,
    "stageCode": "8-3",
    "title": "Stage 143: Caspian Orchard (Part 3)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 17660,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_5",
      "apple_var_6",
      "banana_var_6",
      "orange_var_6",
      "strawberry_var_6",
      "watermelon_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 336,
      "starsMax": 3,
      "starThresholds": [
        12362,
        17660,
        22958
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 144,
    "stageCode": "8-4",
    "title": "Stage 144: Caspian Orchard (Part 4)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 17780,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_6",
      "strawberry_var_6",
      "watermelon_var_6",
      "grape_var_6",
      "pineapple_var_6",
      "mango_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 338,
      "starsMax": 3,
      "starThresholds": [
        12446,
        17780,
        23114
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 145,
    "stageCode": "8-5",
    "title": "Stage 145: Caspian Orchard (Part 5)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 17900,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_6",
      "pineapple_var_6",
      "mango_var_6",
      "lemon_var_6",
      "cherry_var_6",
      "peach_var_6"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 340,
      "starsMax": 3,
      "starThresholds": [
        12530,
        17900,
        23270
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 146,
    "stageCode": "8-6",
    "title": "Stage 146: Caspian Orchard (Part 6)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 18020,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_6",
      "cherry_var_6",
      "peach_var_6",
      "pear_var_6",
      "kiwi_var_6",
      "coconut_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 342,
      "starsMax": 3,
      "starThresholds": [
        12614,
        18020,
        23426
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 147,
    "stageCode": "8-7",
    "title": "Stage 147: Caspian Orchard (Part 7)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 18140,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_6",
      "kiwi_var_6",
      "coconut_var_6",
      "avocado_var_6",
      "pomegranate_var_6",
      "papaya_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 344,
      "starsMax": 3,
      "starThresholds": [
        12698,
        18140,
        23582
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 148,
    "stageCode": "8-8",
    "title": "Stage 148: Caspian Orchard (Part 8)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 18260,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_6",
      "pomegranate_var_6",
      "papaya_var_6",
      "fig_var_6",
      "blueberry_var_6",
      "raspberry_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 346,
      "starsMax": 3,
      "starThresholds": [
        12782,
        18260,
        23738
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 149,
    "stageCode": "8-9",
    "title": "Stage 149: Caspian Orchard (Part 9)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 18380,
    "timeLimitSeconds": 61,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_6",
      "blueberry_var_6",
      "raspberry_var_6",
      "durian_var_6",
      "mangosteen_var_6",
      "rambutan_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 348,
      "starsMax": 3,
      "starThresholds": [
        12866,
        18380,
        23894
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 61 seconds."
  },
  {
    "levelNumber": 150,
    "stageCode": "8-10",
    "title": "Stage 150: Caspian Orchard (Part 10)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 18500,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "durian_var_6",
      "mangosteen_var_6",
      "rambutan_var_6",
      "lychee_var_6",
      "starfruit_var_6",
      "jackfruit_var_6"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 350,
      "starsMax": 3,
      "starThresholds": [
        12950,
        18500,
        24050
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 151,
    "stageCode": "8-11",
    "title": "Stage 151: Caspian Orchard (Part 11)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 18620,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_6",
      "starfruit_var_6",
      "jackfruit_var_6",
      "buddhas_hand_var_6",
      "miracle_fruit_var_6",
      "black_sapote_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 352,
      "starsMax": 3,
      "starThresholds": [
        13034,
        18620,
        24206
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 152,
    "stageCode": "8-12",
    "title": "Stage 152: Caspian Orchard (Part 12)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 18740,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_6",
      "miracle_fruit_var_6",
      "black_sapote_var_6",
      "jabuticaba_var_6",
      "apple_var_7",
      "banana_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 354,
      "starsMax": 3,
      "starThresholds": [
        13118,
        18740,
        24362
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 153,
    "stageCode": "8-13",
    "title": "Stage 153: Caspian Orchard (Part 13)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 18860,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_6",
      "apple_var_7",
      "banana_var_7",
      "orange_var_7",
      "strawberry_var_7",
      "watermelon_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 356,
      "starsMax": 3,
      "starThresholds": [
        13202,
        18860,
        24518
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 154,
    "stageCode": "8-14",
    "title": "Stage 154: Caspian Orchard (Part 14)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 18980,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_7",
      "strawberry_var_7",
      "watermelon_var_7",
      "grape_var_7",
      "pineapple_var_7",
      "mango_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 358,
      "starsMax": 3,
      "starThresholds": [
        13286,
        18980,
        24674
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 155,
    "stageCode": "8-15",
    "title": "Stage 155: Caspian Orchard (Part 15)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 19100,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_7",
      "pineapple_var_7",
      "mango_var_7",
      "lemon_var_7",
      "cherry_var_7",
      "peach_var_7"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 360,
      "starsMax": 3,
      "starThresholds": [
        13370,
        19100,
        24830
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 156,
    "stageCode": "8-16",
    "title": "Stage 156: Caspian Orchard (Part 16)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 19220,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_7",
      "cherry_var_7",
      "peach_var_7",
      "pear_var_7",
      "kiwi_var_7",
      "coconut_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 362,
      "starsMax": 3,
      "starThresholds": [
        13454,
        19220,
        24986
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 157,
    "stageCode": "8-17",
    "title": "Stage 157: Caspian Orchard (Part 17)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 19340,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_7",
      "kiwi_var_7",
      "coconut_var_7",
      "avocado_var_7",
      "pomegranate_var_7",
      "papaya_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 364,
      "starsMax": 3,
      "starThresholds": [
        13538,
        19340,
        25142
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 158,
    "stageCode": "8-18",
    "title": "Stage 158: Caspian Orchard (Part 18)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 19460,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_7",
      "pomegranate_var_7",
      "papaya_var_7",
      "fig_var_7",
      "blueberry_var_7",
      "raspberry_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 366,
      "starsMax": 3,
      "starThresholds": [
        13622,
        19460,
        25298
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 159,
    "stageCode": "8-19",
    "title": "Stage 159: Caspian Orchard (Part 19)",
    "region": "Caspian Orchard",
    "isBossStage": false,
    "targetScore": 19580,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_7",
      "blueberry_var_7",
      "raspberry_var_7",
      "durian_var_7",
      "mangosteen_var_7",
      "rambutan_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 368,
      "starsMax": 3,
      "starThresholds": [
        13706,
        19580,
        25454
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 160,
    "stageCode": "8-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Caspian Orchard",
    "region": "Caspian Orchard",
    "isBossStage": true,
    "targetScore": 19700,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian_var_7",
      "mangosteen_var_7",
      "rambutan_var_7",
      "lychee_var_7",
      "starfruit_var_7",
      "jackfruit_var_7"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        13790,
        19700,
        25610
      ]
    },
    "briefing": "Welcome to Caspian Orchard. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 161,
    "stageCode": "9-1",
    "title": "Stage 161: Indo-Gangetic Plains (Part 1)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 19820,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_7",
      "starfruit_var_7",
      "jackfruit_var_7",
      "buddhas_hand_var_7",
      "miracle_fruit_var_7",
      "black_sapote_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 372,
      "starsMax": 3,
      "starThresholds": [
        13874,
        19820,
        25766
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 162,
    "stageCode": "9-2",
    "title": "Stage 162: Indo-Gangetic Plains (Part 2)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 19940,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_7",
      "miracle_fruit_var_7",
      "black_sapote_var_7",
      "jabuticaba_var_7",
      "apple_var_8",
      "banana_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 374,
      "starsMax": 3,
      "starThresholds": [
        13958,
        19940,
        25922
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 163,
    "stageCode": "9-3",
    "title": "Stage 163: Indo-Gangetic Plains (Part 3)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 20060,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_7",
      "apple_var_8",
      "banana_var_8",
      "orange_var_8",
      "strawberry_var_8",
      "watermelon_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 376,
      "starsMax": 3,
      "starThresholds": [
        14042,
        20060,
        26078
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 164,
    "stageCode": "9-4",
    "title": "Stage 164: Indo-Gangetic Plains (Part 4)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 20180,
    "timeLimitSeconds": 60,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_8",
      "strawberry_var_8",
      "watermelon_var_8",
      "grape_var_8",
      "pineapple_var_8",
      "mango_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 378,
      "starsMax": 3,
      "starThresholds": [
        14126,
        20180,
        26234
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 60 seconds."
  },
  {
    "levelNumber": 165,
    "stageCode": "9-5",
    "title": "Stage 165: Indo-Gangetic Plains (Part 5)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 20300,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_8",
      "pineapple_var_8",
      "mango_var_8",
      "lemon_var_8",
      "cherry_var_8",
      "peach_var_8"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 380,
      "starsMax": 3,
      "starThresholds": [
        14210,
        20300,
        26390
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 166,
    "stageCode": "9-6",
    "title": "Stage 166: Indo-Gangetic Plains (Part 6)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 20420,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_8",
      "cherry_var_8",
      "peach_var_8",
      "pear_var_8",
      "kiwi_var_8",
      "coconut_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 382,
      "starsMax": 3,
      "starThresholds": [
        14294,
        20420,
        26546
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 167,
    "stageCode": "9-7",
    "title": "Stage 167: Indo-Gangetic Plains (Part 7)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 20540,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_8",
      "kiwi_var_8",
      "coconut_var_8",
      "avocado_var_8",
      "pomegranate_var_8",
      "papaya_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 384,
      "starsMax": 3,
      "starThresholds": [
        14377.999999999998,
        20540,
        26702
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 168,
    "stageCode": "9-8",
    "title": "Stage 168: Indo-Gangetic Plains (Part 8)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 20660,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_8",
      "pomegranate_var_8",
      "papaya_var_8",
      "fig_var_8",
      "blueberry_var_8",
      "raspberry_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 386,
      "starsMax": 3,
      "starThresholds": [
        14461.999999999998,
        20660,
        26858
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 169,
    "stageCode": "9-9",
    "title": "Stage 169: Indo-Gangetic Plains (Part 9)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 20780,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_8",
      "blueberry_var_8",
      "raspberry_var_8",
      "durian_var_8",
      "mangosteen_var_8",
      "rambutan_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 388,
      "starsMax": 3,
      "starThresholds": [
        14545.999999999998,
        20780,
        27014
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 170,
    "stageCode": "9-10",
    "title": "Stage 170: Indo-Gangetic Plains (Part 10)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 20900,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "durian_var_8",
      "mangosteen_var_8",
      "rambutan_var_8",
      "lychee_var_8",
      "starfruit_var_8",
      "jackfruit_var_8"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 390,
      "starsMax": 3,
      "starThresholds": [
        14629.999999999998,
        20900,
        27170
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 171,
    "stageCode": "9-11",
    "title": "Stage 171: Indo-Gangetic Plains (Part 11)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 21020,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_8",
      "starfruit_var_8",
      "jackfruit_var_8",
      "buddhas_hand_var_8",
      "miracle_fruit_var_8",
      "black_sapote_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 392,
      "starsMax": 3,
      "starThresholds": [
        14713.999999999998,
        21020,
        27326
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 172,
    "stageCode": "9-12",
    "title": "Stage 172: Indo-Gangetic Plains (Part 12)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 21140,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_8",
      "miracle_fruit_var_8",
      "black_sapote_var_8",
      "jabuticaba_var_8",
      "apple_var_9",
      "banana_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 394,
      "starsMax": 3,
      "starThresholds": [
        14797.999999999998,
        21140,
        27482
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 173,
    "stageCode": "9-13",
    "title": "Stage 173: Indo-Gangetic Plains (Part 13)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 21260,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_8",
      "apple_var_9",
      "banana_var_9",
      "orange_var_9",
      "strawberry_var_9",
      "watermelon_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 396,
      "starsMax": 3,
      "starThresholds": [
        14881.999999999998,
        21260,
        27638
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 174,
    "stageCode": "9-14",
    "title": "Stage 174: Indo-Gangetic Plains (Part 14)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 21380,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_9",
      "strawberry_var_9",
      "watermelon_var_9",
      "grape_var_9",
      "pineapple_var_9",
      "mango_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 398,
      "starsMax": 3,
      "starThresholds": [
        14965.999999999998,
        21380,
        27794
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 175,
    "stageCode": "9-15",
    "title": "Stage 175: Indo-Gangetic Plains (Part 15)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 21500,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_9",
      "pineapple_var_9",
      "mango_var_9",
      "lemon_var_9",
      "cherry_var_9",
      "peach_var_9"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 400,
      "starsMax": 3,
      "starThresholds": [
        15049.999999999998,
        21500,
        27950
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 176,
    "stageCode": "9-16",
    "title": "Stage 176: Indo-Gangetic Plains (Part 16)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 21620,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_9",
      "cherry_var_9",
      "peach_var_9",
      "pear_var_9",
      "kiwi_var_9",
      "coconut_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 402,
      "starsMax": 3,
      "starThresholds": [
        15133.999999999998,
        21620,
        28106
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 177,
    "stageCode": "9-17",
    "title": "Stage 177: Indo-Gangetic Plains (Part 17)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 21740,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_9",
      "kiwi_var_9",
      "coconut_var_9",
      "avocado_var_9",
      "pomegranate_var_9",
      "papaya_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 404,
      "starsMax": 3,
      "starThresholds": [
        15217.999999999998,
        21740,
        28262
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 178,
    "stageCode": "9-18",
    "title": "Stage 178: Indo-Gangetic Plains (Part 18)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 21860,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_9",
      "pomegranate_var_9",
      "papaya_var_9",
      "fig_var_9",
      "blueberry_var_9",
      "raspberry_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 406,
      "starsMax": 3,
      "starThresholds": [
        15301.999999999998,
        21860,
        28418
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 179,
    "stageCode": "9-19",
    "title": "Stage 179: Indo-Gangetic Plains (Part 19)",
    "region": "Indo-Gangetic Plains",
    "isBossStage": false,
    "targetScore": 21980,
    "timeLimitSeconds": 59,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_9",
      "blueberry_var_9",
      "raspberry_var_9",
      "durian_var_9",
      "mangosteen_var_9",
      "rambutan_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 408,
      "starsMax": 3,
      "starThresholds": [
        15385.999999999998,
        21980,
        28574
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 59 seconds."
  },
  {
    "levelNumber": 180,
    "stageCode": "9-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Indo-Gangetic Plains",
    "region": "Indo-Gangetic Plains",
    "isBossStage": true,
    "targetScore": 22100,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian_var_9",
      "mangosteen_var_9",
      "rambutan_var_9",
      "lychee_var_9",
      "starfruit_var_9",
      "jackfruit_var_9"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        15469.999999999998,
        22100,
        28730
      ]
    },
    "briefing": "Welcome to Indo-Gangetic Plains. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 181,
    "stageCode": "10-1",
    "title": "Stage 181: Caribbean Coast (Part 1)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 22220,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_9",
      "starfruit_var_9",
      "jackfruit_var_9",
      "buddhas_hand_var_9",
      "miracle_fruit_var_9",
      "black_sapote_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 412,
      "starsMax": 3,
      "starThresholds": [
        15553.999999999998,
        22220,
        28886
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 182,
    "stageCode": "10-2",
    "title": "Stage 182: Caribbean Coast (Part 2)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 22340,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_9",
      "miracle_fruit_var_9",
      "black_sapote_var_9",
      "jabuticaba_var_9",
      "apple_var_10",
      "banana_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 414,
      "starsMax": 3,
      "starThresholds": [
        15637.999999999998,
        22340,
        29042
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 183,
    "stageCode": "10-3",
    "title": "Stage 183: Caribbean Coast (Part 3)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 22460,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_9",
      "apple_var_10",
      "banana_var_10",
      "orange_var_10",
      "strawberry_var_10",
      "watermelon_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 416,
      "starsMax": 3,
      "starThresholds": [
        15721.999999999998,
        22460,
        29198
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 184,
    "stageCode": "10-4",
    "title": "Stage 184: Caribbean Coast (Part 4)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 22580,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_10",
      "strawberry_var_10",
      "watermelon_var_10",
      "grape_var_10",
      "pineapple_var_10",
      "mango_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 418,
      "starsMax": 3,
      "starThresholds": [
        15805.999999999998,
        22580,
        29354
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 185,
    "stageCode": "10-5",
    "title": "Stage 185: Caribbean Coast (Part 5)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 22700,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_10",
      "pineapple_var_10",
      "mango_var_10",
      "lemon_var_10",
      "cherry_var_10",
      "peach_var_10"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 420,
      "starsMax": 3,
      "starThresholds": [
        15889.999999999998,
        22700,
        29510
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 186,
    "stageCode": "10-6",
    "title": "Stage 186: Caribbean Coast (Part 6)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 22820,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_10",
      "cherry_var_10",
      "peach_var_10",
      "pear_var_10",
      "kiwi_var_10",
      "coconut_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 422,
      "starsMax": 3,
      "starThresholds": [
        15973.999999999998,
        22820,
        29666
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 187,
    "stageCode": "10-7",
    "title": "Stage 187: Caribbean Coast (Part 7)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 22940,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana",
      "orange",
      "strawberry",
      "watermelon",
      "grape",
      "pineapple"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 424,
      "starsMax": 3,
      "starThresholds": [
        16057.999999999998,
        22940,
        29822
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 188,
    "stageCode": "10-8",
    "title": "Stage 188: Caribbean Coast (Part 8)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 23060,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon",
      "grape",
      "pineapple",
      "mango",
      "lemon",
      "cherry"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 426,
      "starsMax": 3,
      "starThresholds": [
        16141.999999999998,
        23060,
        29978
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 189,
    "stageCode": "10-9",
    "title": "Stage 189: Caribbean Coast (Part 9)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 23180,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango",
      "lemon",
      "cherry",
      "peach",
      "pear",
      "kiwi"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 428,
      "starsMax": 3,
      "starThresholds": [
        16225.999999999998,
        23180,
        30134
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 190,
    "stageCode": "10-10",
    "title": "Stage 190: Caribbean Coast (Part 10)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 23300,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "peach",
      "pear",
      "kiwi",
      "coconut",
      "avocado",
      "pomegranate"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 430,
      "starsMax": 3,
      "starThresholds": [
        16309.999999999998,
        23300,
        30290
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 191,
    "stageCode": "10-11",
    "title": "Stage 191: Caribbean Coast (Part 11)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 23420,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut",
      "avocado",
      "pomegranate",
      "papaya",
      "fig",
      "blueberry"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 432,
      "starsMax": 3,
      "starThresholds": [
        16394,
        23420,
        30446
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 192,
    "stageCode": "10-12",
    "title": "Stage 192: Caribbean Coast (Part 12)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 23540,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya",
      "fig",
      "blueberry",
      "raspberry",
      "durian",
      "mangosteen"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 434,
      "starsMax": 3,
      "starThresholds": [
        16478,
        23540,
        30602
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 193,
    "stageCode": "10-13",
    "title": "Stage 193: Caribbean Coast (Part 13)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 23660,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry",
      "durian",
      "mangosteen",
      "rambutan",
      "lychee",
      "starfruit"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 436,
      "starsMax": 3,
      "starThresholds": [
        16562,
        23660,
        30758
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 194,
    "stageCode": "10-14",
    "title": "Stage 194: Caribbean Coast (Part 14)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 23780,
    "timeLimitSeconds": 58,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan",
      "lychee",
      "starfruit",
      "jackfruit",
      "buddhas_hand",
      "miracle_fruit"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 438,
      "starsMax": 3,
      "starThresholds": [
        16646,
        23780,
        30914
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 58 seconds."
  },
  {
    "levelNumber": 195,
    "stageCode": "10-15",
    "title": "Stage 195: Caribbean Coast (Part 15)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 23900,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit",
      "buddhas_hand",
      "miracle_fruit",
      "black_sapote",
      "jabuticaba",
      "apple_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 440,
      "starsMax": 3,
      "starThresholds": [
        16730,
        23900,
        31070
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 196,
    "stageCode": "10-16",
    "title": "Stage 196: Caribbean Coast (Part 16)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 24020,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote",
      "jabuticaba",
      "apple_var_2",
      "banana_var_2",
      "orange_var_2",
      "strawberry_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 442,
      "starsMax": 3,
      "starThresholds": [
        16814,
        24020,
        31226
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 197,
    "stageCode": "10-17",
    "title": "Stage 197: Caribbean Coast (Part 17)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 24140,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_2",
      "orange_var_2",
      "strawberry_var_2",
      "watermelon_var_2",
      "grape_var_2",
      "pineapple_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 444,
      "starsMax": 3,
      "starThresholds": [
        16898,
        24140,
        31382
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 198,
    "stageCode": "10-18",
    "title": "Stage 198: Caribbean Coast (Part 18)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 24260,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_2",
      "grape_var_2",
      "pineapple_var_2",
      "mango_var_2",
      "lemon_var_2",
      "cherry_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 446,
      "starsMax": 3,
      "starThresholds": [
        16982,
        24260,
        31538
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 199,
    "stageCode": "10-19",
    "title": "Stage 199: Caribbean Coast (Part 19)",
    "region": "Caribbean Coast",
    "isBossStage": false,
    "targetScore": 24380,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_2",
      "lemon_var_2",
      "cherry_var_2",
      "peach_var_2",
      "pear_var_2",
      "kiwi_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 448,
      "starsMax": 3,
      "starThresholds": [
        17066,
        24380,
        31694
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 200,
    "stageCode": "10-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Caribbean Coast",
    "region": "Caribbean Coast",
    "isBossStage": true,
    "targetScore": 24500,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "peach_var_2",
      "pear_var_2",
      "kiwi_var_2",
      "coconut_var_2",
      "avocado_var_2",
      "pomegranate_var_2"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        17150,
        24500,
        31850
      ]
    },
    "briefing": "Welcome to Caribbean Coast. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 201,
    "stageCode": "11-1",
    "title": "Stage 201: Andean Cloud Forest (Part 1)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 24620,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_2",
      "avocado_var_2",
      "pomegranate_var_2",
      "papaya_var_2",
      "fig_var_2",
      "blueberry_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 452,
      "starsMax": 3,
      "starThresholds": [
        17234,
        24620,
        32006
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 202,
    "stageCode": "11-2",
    "title": "Stage 202: Andean Cloud Forest (Part 2)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 24740,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_2",
      "fig_var_2",
      "blueberry_var_2",
      "raspberry_var_2",
      "durian_var_2",
      "mangosteen_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 454,
      "starsMax": 3,
      "starThresholds": [
        17318,
        24740,
        32162
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 203,
    "stageCode": "11-3",
    "title": "Stage 203: Andean Cloud Forest (Part 3)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 24860,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_2",
      "durian_var_2",
      "mangosteen_var_2",
      "rambutan_var_2",
      "lychee_var_2",
      "starfruit_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 456,
      "starsMax": 3,
      "starThresholds": [
        17402,
        24860,
        32318
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 204,
    "stageCode": "11-4",
    "title": "Stage 204: Andean Cloud Forest (Part 4)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 24980,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_2",
      "lychee_var_2",
      "starfruit_var_2",
      "jackfruit_var_2",
      "buddhas_hand_var_2",
      "miracle_fruit_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 458,
      "starsMax": 3,
      "starThresholds": [
        17486,
        24980,
        32474
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 205,
    "stageCode": "11-5",
    "title": "Stage 205: Andean Cloud Forest (Part 5)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 25100,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_2",
      "buddhas_hand_var_2",
      "miracle_fruit_var_2",
      "black_sapote_var_2",
      "jabuticaba_var_2",
      "apple_var_3"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 460,
      "starsMax": 3,
      "starThresholds": [
        17570,
        25100,
        32630
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 206,
    "stageCode": "11-6",
    "title": "Stage 206: Andean Cloud Forest (Part 6)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 25220,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_2",
      "jabuticaba_var_2",
      "apple_var_3",
      "banana_var_3",
      "orange_var_3",
      "strawberry_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 462,
      "starsMax": 3,
      "starThresholds": [
        17654,
        25220,
        32786
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 207,
    "stageCode": "11-7",
    "title": "Stage 207: Andean Cloud Forest (Part 7)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 25340,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_3",
      "orange_var_3",
      "strawberry_var_3",
      "watermelon_var_3",
      "grape_var_3",
      "pineapple_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 464,
      "starsMax": 3,
      "starThresholds": [
        17738,
        25340,
        32942
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 208,
    "stageCode": "11-8",
    "title": "Stage 208: Andean Cloud Forest (Part 8)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 25460,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_3",
      "grape_var_3",
      "pineapple_var_3",
      "mango_var_3",
      "lemon_var_3",
      "cherry_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 466,
      "starsMax": 3,
      "starThresholds": [
        17822,
        25460,
        33098
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 209,
    "stageCode": "11-9",
    "title": "Stage 209: Andean Cloud Forest (Part 9)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 25580,
    "timeLimitSeconds": 57,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_3",
      "lemon_var_3",
      "cherry_var_3",
      "peach_var_3",
      "pear_var_3",
      "kiwi_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 468,
      "starsMax": 3,
      "starThresholds": [
        17906,
        25580,
        33254
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 57 seconds."
  },
  {
    "levelNumber": 210,
    "stageCode": "11-10",
    "title": "Stage 210: Andean Cloud Forest (Part 10)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 25700,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "peach_var_3",
      "pear_var_3",
      "kiwi_var_3",
      "coconut_var_3",
      "avocado_var_3",
      "pomegranate_var_3"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 470,
      "starsMax": 3,
      "starThresholds": [
        17990,
        25700,
        33410
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 211,
    "stageCode": "11-11",
    "title": "Stage 211: Andean Cloud Forest (Part 11)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 25820,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_3",
      "avocado_var_3",
      "pomegranate_var_3",
      "papaya_var_3",
      "fig_var_3",
      "blueberry_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 472,
      "starsMax": 3,
      "starThresholds": [
        18074,
        25820,
        33566
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 212,
    "stageCode": "11-12",
    "title": "Stage 212: Andean Cloud Forest (Part 12)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 25940,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_3",
      "fig_var_3",
      "blueberry_var_3",
      "raspberry_var_3",
      "durian_var_3",
      "mangosteen_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 474,
      "starsMax": 3,
      "starThresholds": [
        18158,
        25940,
        33722
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 213,
    "stageCode": "11-13",
    "title": "Stage 213: Andean Cloud Forest (Part 13)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 26060,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_3",
      "durian_var_3",
      "mangosteen_var_3",
      "rambutan_var_3",
      "lychee_var_3",
      "starfruit_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 476,
      "starsMax": 3,
      "starThresholds": [
        18242,
        26060,
        33878
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 214,
    "stageCode": "11-14",
    "title": "Stage 214: Andean Cloud Forest (Part 14)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 26180,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_3",
      "lychee_var_3",
      "starfruit_var_3",
      "jackfruit_var_3",
      "buddhas_hand_var_3",
      "miracle_fruit_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 478,
      "starsMax": 3,
      "starThresholds": [
        18326,
        26180,
        34034
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 215,
    "stageCode": "11-15",
    "title": "Stage 215: Andean Cloud Forest (Part 15)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 26300,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_3",
      "buddhas_hand_var_3",
      "miracle_fruit_var_3",
      "black_sapote_var_3",
      "jabuticaba_var_3",
      "apple_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 480,
      "starsMax": 3,
      "starThresholds": [
        18410,
        26300,
        34190
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 216,
    "stageCode": "11-16",
    "title": "Stage 216: Andean Cloud Forest (Part 16)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 26420,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_3",
      "jabuticaba_var_3",
      "apple_var_4",
      "banana_var_4",
      "orange_var_4",
      "strawberry_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 482,
      "starsMax": 3,
      "starThresholds": [
        18494,
        26420,
        34346
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 217,
    "stageCode": "11-17",
    "title": "Stage 217: Andean Cloud Forest (Part 17)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 26540,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_4",
      "orange_var_4",
      "strawberry_var_4",
      "watermelon_var_4",
      "grape_var_4",
      "pineapple_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 484,
      "starsMax": 3,
      "starThresholds": [
        18578,
        26540,
        34502
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 218,
    "stageCode": "11-18",
    "title": "Stage 218: Andean Cloud Forest (Part 18)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 26660,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_4",
      "grape_var_4",
      "pineapple_var_4",
      "mango_var_4",
      "lemon_var_4",
      "cherry_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 486,
      "starsMax": 3,
      "starThresholds": [
        18662,
        26660,
        34658
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 219,
    "stageCode": "11-19",
    "title": "Stage 219: Andean Cloud Forest (Part 19)",
    "region": "Andean Cloud Forest",
    "isBossStage": false,
    "targetScore": 26780,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_4",
      "lemon_var_4",
      "cherry_var_4",
      "peach_var_4",
      "pear_var_4",
      "kiwi_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 488,
      "starsMax": 3,
      "starThresholds": [
        18746,
        26780,
        34814
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 220,
    "stageCode": "11-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Andean Cloud Forest",
    "region": "Andean Cloud Forest",
    "isBossStage": true,
    "targetScore": 26900,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "peach_var_4",
      "pear_var_4",
      "kiwi_var_4",
      "coconut_var_4",
      "avocado_var_4",
      "pomegranate_var_4"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        18830,
        26900,
        34970
      ]
    },
    "briefing": "Welcome to Andean Cloud Forest. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 221,
    "stageCode": "12-1",
    "title": "Stage 221: Polynesian Atolls (Part 1)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 27020,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_4",
      "avocado_var_4",
      "pomegranate_var_4",
      "papaya_var_4",
      "fig_var_4",
      "blueberry_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 492,
      "starsMax": 3,
      "starThresholds": [
        18914,
        27020,
        35126
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 222,
    "stageCode": "12-2",
    "title": "Stage 222: Polynesian Atolls (Part 2)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 27140,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_4",
      "fig_var_4",
      "blueberry_var_4",
      "raspberry_var_4",
      "durian_var_4",
      "mangosteen_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 494,
      "starsMax": 3,
      "starThresholds": [
        18998,
        27140,
        35282
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 223,
    "stageCode": "12-3",
    "title": "Stage 223: Polynesian Atolls (Part 3)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 27260,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_4",
      "durian_var_4",
      "mangosteen_var_4",
      "rambutan_var_4",
      "lychee_var_4",
      "starfruit_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 496,
      "starsMax": 3,
      "starThresholds": [
        19082,
        27260,
        35438
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 224,
    "stageCode": "12-4",
    "title": "Stage 224: Polynesian Atolls (Part 4)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 27380,
    "timeLimitSeconds": 56,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_4",
      "lychee_var_4",
      "starfruit_var_4",
      "jackfruit_var_4",
      "buddhas_hand_var_4",
      "miracle_fruit_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 498,
      "starsMax": 3,
      "starThresholds": [
        19166,
        27380,
        35594
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 56 seconds."
  },
  {
    "levelNumber": 225,
    "stageCode": "12-5",
    "title": "Stage 225: Polynesian Atolls (Part 5)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 27500,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_4",
      "buddhas_hand_var_4",
      "miracle_fruit_var_4",
      "black_sapote_var_4",
      "jabuticaba_var_4",
      "apple_var_5"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        19250,
        27500,
        35750
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 226,
    "stageCode": "12-6",
    "title": "Stage 226: Polynesian Atolls (Part 6)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 27620,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_4",
      "jabuticaba_var_4",
      "apple_var_5",
      "banana_var_5",
      "orange_var_5",
      "strawberry_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 502,
      "starsMax": 3,
      "starThresholds": [
        19334,
        27620,
        35906
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 227,
    "stageCode": "12-7",
    "title": "Stage 227: Polynesian Atolls (Part 7)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 27740,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_5",
      "orange_var_5",
      "strawberry_var_5",
      "watermelon_var_5",
      "grape_var_5",
      "pineapple_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 504,
      "starsMax": 3,
      "starThresholds": [
        19418,
        27740,
        36062
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 228,
    "stageCode": "12-8",
    "title": "Stage 228: Polynesian Atolls (Part 8)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 27860,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_5",
      "grape_var_5",
      "pineapple_var_5",
      "mango_var_5",
      "lemon_var_5",
      "cherry_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 506,
      "starsMax": 3,
      "starThresholds": [
        19502,
        27860,
        36218
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 229,
    "stageCode": "12-9",
    "title": "Stage 229: Polynesian Atolls (Part 9)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 27980,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_5",
      "lemon_var_5",
      "cherry_var_5",
      "peach_var_5",
      "pear_var_5",
      "kiwi_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 508,
      "starsMax": 3,
      "starThresholds": [
        19586,
        27980,
        36374
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 230,
    "stageCode": "12-10",
    "title": "Stage 230: Polynesian Atolls (Part 10)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 28100,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "peach_var_5",
      "pear_var_5",
      "kiwi_var_5",
      "coconut_var_5",
      "avocado_var_5",
      "pomegranate_var_5"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 510,
      "starsMax": 3,
      "starThresholds": [
        19670,
        28100,
        36530
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 231,
    "stageCode": "12-11",
    "title": "Stage 231: Polynesian Atolls (Part 11)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 28220,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_5",
      "avocado_var_5",
      "pomegranate_var_5",
      "papaya_var_5",
      "fig_var_5",
      "blueberry_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 512,
      "starsMax": 3,
      "starThresholds": [
        19754,
        28220,
        36686
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 232,
    "stageCode": "12-12",
    "title": "Stage 232: Polynesian Atolls (Part 12)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 28340,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_5",
      "fig_var_5",
      "blueberry_var_5",
      "raspberry_var_5",
      "durian_var_5",
      "mangosteen_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 514,
      "starsMax": 3,
      "starThresholds": [
        19838,
        28340,
        36842
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 233,
    "stageCode": "12-13",
    "title": "Stage 233: Polynesian Atolls (Part 13)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 28460,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_5",
      "durian_var_5",
      "mangosteen_var_5",
      "rambutan_var_5",
      "lychee_var_5",
      "starfruit_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 516,
      "starsMax": 3,
      "starThresholds": [
        19922,
        28460,
        36998
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 234,
    "stageCode": "12-14",
    "title": "Stage 234: Polynesian Atolls (Part 14)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 28580,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_5",
      "lychee_var_5",
      "starfruit_var_5",
      "jackfruit_var_5",
      "buddhas_hand_var_5",
      "miracle_fruit_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 518,
      "starsMax": 3,
      "starThresholds": [
        20006,
        28580,
        37154
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 235,
    "stageCode": "12-15",
    "title": "Stage 235: Polynesian Atolls (Part 15)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 28700,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_5",
      "buddhas_hand_var_5",
      "miracle_fruit_var_5",
      "black_sapote_var_5",
      "jabuticaba_var_5",
      "apple_var_6"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 520,
      "starsMax": 3,
      "starThresholds": [
        20090,
        28700,
        37310
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 236,
    "stageCode": "12-16",
    "title": "Stage 236: Polynesian Atolls (Part 16)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 28820,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_5",
      "jabuticaba_var_5",
      "apple_var_6",
      "banana_var_6",
      "orange_var_6",
      "strawberry_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 522,
      "starsMax": 3,
      "starThresholds": [
        20174,
        28820,
        37466
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 237,
    "stageCode": "12-17",
    "title": "Stage 237: Polynesian Atolls (Part 17)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 28940,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_6",
      "orange_var_6",
      "strawberry_var_6",
      "watermelon_var_6",
      "grape_var_6",
      "pineapple_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 524,
      "starsMax": 3,
      "starThresholds": [
        20258,
        28940,
        37622
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 238,
    "stageCode": "12-18",
    "title": "Stage 238: Polynesian Atolls (Part 18)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 29060,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_6",
      "grape_var_6",
      "pineapple_var_6",
      "mango_var_6",
      "lemon_var_6",
      "cherry_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 526,
      "starsMax": 3,
      "starThresholds": [
        20342,
        29060,
        37778
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 239,
    "stageCode": "12-19",
    "title": "Stage 239: Polynesian Atolls (Part 19)",
    "region": "Polynesian Atolls",
    "isBossStage": false,
    "targetScore": 29180,
    "timeLimitSeconds": 55,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_6",
      "lemon_var_6",
      "cherry_var_6",
      "peach_var_6",
      "pear_var_6",
      "kiwi_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 528,
      "starsMax": 3,
      "starThresholds": [
        20426,
        29180,
        37934
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 55 seconds."
  },
  {
    "levelNumber": 240,
    "stageCode": "12-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Polynesian Atolls",
    "region": "Polynesian Atolls",
    "isBossStage": true,
    "targetScore": 29300,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "peach_var_6",
      "pear_var_6",
      "kiwi_var_6",
      "coconut_var_6",
      "avocado_var_6",
      "pomegranate_var_6"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        20510,
        29300,
        38090
      ]
    },
    "briefing": "Welcome to Polynesian Atolls. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 241,
    "stageCode": "13-1",
    "title": "Stage 241: Japanese Highlands (Part 1)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 29420,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_6",
      "avocado_var_6",
      "pomegranate_var_6",
      "papaya_var_6",
      "fig_var_6",
      "blueberry_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 532,
      "starsMax": 3,
      "starThresholds": [
        20594,
        29420,
        38246
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 242,
    "stageCode": "13-2",
    "title": "Stage 242: Japanese Highlands (Part 2)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 29540,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_6",
      "fig_var_6",
      "blueberry_var_6",
      "raspberry_var_6",
      "durian_var_6",
      "mangosteen_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 534,
      "starsMax": 3,
      "starThresholds": [
        20678,
        29540,
        38402
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 243,
    "stageCode": "13-3",
    "title": "Stage 243: Japanese Highlands (Part 3)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 29660,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_6",
      "durian_var_6",
      "mangosteen_var_6",
      "rambutan_var_6",
      "lychee_var_6",
      "starfruit_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 536,
      "starsMax": 3,
      "starThresholds": [
        20762,
        29660,
        38558
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 244,
    "stageCode": "13-4",
    "title": "Stage 244: Japanese Highlands (Part 4)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 29780,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_6",
      "lychee_var_6",
      "starfruit_var_6",
      "jackfruit_var_6",
      "buddhas_hand_var_6",
      "miracle_fruit_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 538,
      "starsMax": 3,
      "starThresholds": [
        20846,
        29780,
        38714
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 245,
    "stageCode": "13-5",
    "title": "Stage 245: Japanese Highlands (Part 5)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 29900,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_6",
      "buddhas_hand_var_6",
      "miracle_fruit_var_6",
      "black_sapote_var_6",
      "jabuticaba_var_6",
      "apple_var_7"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 540,
      "starsMax": 3,
      "starThresholds": [
        20930,
        29900,
        38870
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 246,
    "stageCode": "13-6",
    "title": "Stage 246: Japanese Highlands (Part 6)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 30020,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_6",
      "jabuticaba_var_6",
      "apple_var_7",
      "banana_var_7",
      "orange_var_7",
      "strawberry_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 542,
      "starsMax": 3,
      "starThresholds": [
        21014,
        30020,
        39026
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 247,
    "stageCode": "13-7",
    "title": "Stage 247: Japanese Highlands (Part 7)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 30140,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_7",
      "orange_var_7",
      "strawberry_var_7",
      "watermelon_var_7",
      "grape_var_7",
      "pineapple_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 544,
      "starsMax": 3,
      "starThresholds": [
        21098,
        30140,
        39182
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 248,
    "stageCode": "13-8",
    "title": "Stage 248: Japanese Highlands (Part 8)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 30260,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_7",
      "grape_var_7",
      "pineapple_var_7",
      "mango_var_7",
      "lemon_var_7",
      "cherry_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 546,
      "starsMax": 3,
      "starThresholds": [
        21182,
        30260,
        39338
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 249,
    "stageCode": "13-9",
    "title": "Stage 249: Japanese Highlands (Part 9)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 30380,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_7",
      "lemon_var_7",
      "cherry_var_7",
      "peach_var_7",
      "pear_var_7",
      "kiwi_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 548,
      "starsMax": 3,
      "starThresholds": [
        21266,
        30380,
        39494
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 250,
    "stageCode": "13-10",
    "title": "Stage 250: Japanese Highlands (Part 10)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 30500,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "peach_var_7",
      "pear_var_7",
      "kiwi_var_7",
      "coconut_var_7",
      "avocado_var_7",
      "pomegranate_var_7"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 550,
      "starsMax": 3,
      "starThresholds": [
        21350,
        30500,
        39650
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 251,
    "stageCode": "13-11",
    "title": "Stage 251: Japanese Highlands (Part 11)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 30620,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_7",
      "avocado_var_7",
      "pomegranate_var_7",
      "papaya_var_7",
      "fig_var_7",
      "blueberry_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 552,
      "starsMax": 3,
      "starThresholds": [
        21434,
        30620,
        39806
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 252,
    "stageCode": "13-12",
    "title": "Stage 252: Japanese Highlands (Part 12)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 30740,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_7",
      "fig_var_7",
      "blueberry_var_7",
      "raspberry_var_7",
      "durian_var_7",
      "mangosteen_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 554,
      "starsMax": 3,
      "starThresholds": [
        21518,
        30740,
        39962
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 253,
    "stageCode": "13-13",
    "title": "Stage 253: Japanese Highlands (Part 13)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 30860,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_7",
      "durian_var_7",
      "mangosteen_var_7",
      "rambutan_var_7",
      "lychee_var_7",
      "starfruit_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 556,
      "starsMax": 3,
      "starThresholds": [
        21602,
        30860,
        40118
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 254,
    "stageCode": "13-14",
    "title": "Stage 254: Japanese Highlands (Part 14)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 30980,
    "timeLimitSeconds": 54,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_7",
      "lychee_var_7",
      "starfruit_var_7",
      "jackfruit_var_7",
      "buddhas_hand_var_7",
      "miracle_fruit_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 558,
      "starsMax": 3,
      "starThresholds": [
        21686,
        30980,
        40274
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 54 seconds."
  },
  {
    "levelNumber": 255,
    "stageCode": "13-15",
    "title": "Stage 255: Japanese Highlands (Part 15)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 31100,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_7",
      "buddhas_hand_var_7",
      "miracle_fruit_var_7",
      "black_sapote_var_7",
      "jabuticaba_var_7",
      "apple_var_8"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 560,
      "starsMax": 3,
      "starThresholds": [
        21770,
        31100,
        40430
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 256,
    "stageCode": "13-16",
    "title": "Stage 256: Japanese Highlands (Part 16)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 31220,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_7",
      "jabuticaba_var_7",
      "apple_var_8",
      "banana_var_8",
      "orange_var_8",
      "strawberry_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 562,
      "starsMax": 3,
      "starThresholds": [
        21854,
        31220,
        40586
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 257,
    "stageCode": "13-17",
    "title": "Stage 257: Japanese Highlands (Part 17)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 31340,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_8",
      "orange_var_8",
      "strawberry_var_8",
      "watermelon_var_8",
      "grape_var_8",
      "pineapple_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 564,
      "starsMax": 3,
      "starThresholds": [
        21938,
        31340,
        40742
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 258,
    "stageCode": "13-18",
    "title": "Stage 258: Japanese Highlands (Part 18)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 31460,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_8",
      "grape_var_8",
      "pineapple_var_8",
      "mango_var_8",
      "lemon_var_8",
      "cherry_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 566,
      "starsMax": 3,
      "starThresholds": [
        22022,
        31460,
        40898
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 259,
    "stageCode": "13-19",
    "title": "Stage 259: Japanese Highlands (Part 19)",
    "region": "Japanese Highlands",
    "isBossStage": false,
    "targetScore": 31580,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_8",
      "lemon_var_8",
      "cherry_var_8",
      "peach_var_8",
      "pear_var_8",
      "kiwi_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 568,
      "starsMax": 3,
      "starThresholds": [
        22106,
        31580,
        41054
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 260,
    "stageCode": "13-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Japanese Highlands",
    "region": "Japanese Highlands",
    "isBossStage": true,
    "targetScore": 31700,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "peach_var_8",
      "pear_var_8",
      "kiwi_var_8",
      "coconut_var_8",
      "avocado_var_8",
      "pomegranate_var_8"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        22190,
        31700,
        41210
      ]
    },
    "briefing": "Welcome to Japanese Highlands. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 261,
    "stageCode": "14-1",
    "title": "Stage 261: Australian Rainforest (Part 1)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 31820,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_8",
      "avocado_var_8",
      "pomegranate_var_8",
      "papaya_var_8",
      "fig_var_8",
      "blueberry_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 572,
      "starsMax": 3,
      "starThresholds": [
        22274,
        31820,
        41366
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 262,
    "stageCode": "14-2",
    "title": "Stage 262: Australian Rainforest (Part 2)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 31940,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_8",
      "fig_var_8",
      "blueberry_var_8",
      "raspberry_var_8",
      "durian_var_8",
      "mangosteen_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 574,
      "starsMax": 3,
      "starThresholds": [
        22358,
        31940,
        41522
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 263,
    "stageCode": "14-3",
    "title": "Stage 263: Australian Rainforest (Part 3)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 32060,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_8",
      "durian_var_8",
      "mangosteen_var_8",
      "rambutan_var_8",
      "lychee_var_8",
      "starfruit_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 576,
      "starsMax": 3,
      "starThresholds": [
        22442,
        32060,
        41678
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 264,
    "stageCode": "14-4",
    "title": "Stage 264: Australian Rainforest (Part 4)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 32180,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_8",
      "lychee_var_8",
      "starfruit_var_8",
      "jackfruit_var_8",
      "buddhas_hand_var_8",
      "miracle_fruit_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 578,
      "starsMax": 3,
      "starThresholds": [
        22526,
        32180,
        41834
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 265,
    "stageCode": "14-5",
    "title": "Stage 265: Australian Rainforest (Part 5)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 32300,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_8",
      "buddhas_hand_var_8",
      "miracle_fruit_var_8",
      "black_sapote_var_8",
      "jabuticaba_var_8",
      "apple_var_9"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 580,
      "starsMax": 3,
      "starThresholds": [
        22610,
        32300,
        41990
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 266,
    "stageCode": "14-6",
    "title": "Stage 266: Australian Rainforest (Part 6)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 32420,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_8",
      "jabuticaba_var_8",
      "apple_var_9",
      "banana_var_9",
      "orange_var_9",
      "strawberry_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 582,
      "starsMax": 3,
      "starThresholds": [
        22694,
        32420,
        42146
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 267,
    "stageCode": "14-7",
    "title": "Stage 267: Australian Rainforest (Part 7)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 32540,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_9",
      "orange_var_9",
      "strawberry_var_9",
      "watermelon_var_9",
      "grape_var_9",
      "pineapple_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 584,
      "starsMax": 3,
      "starThresholds": [
        22778,
        32540,
        42302
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 268,
    "stageCode": "14-8",
    "title": "Stage 268: Australian Rainforest (Part 8)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 32660,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_9",
      "grape_var_9",
      "pineapple_var_9",
      "mango_var_9",
      "lemon_var_9",
      "cherry_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 586,
      "starsMax": 3,
      "starThresholds": [
        22862,
        32660,
        42458
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 269,
    "stageCode": "14-9",
    "title": "Stage 269: Australian Rainforest (Part 9)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 32780,
    "timeLimitSeconds": 53,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_9",
      "lemon_var_9",
      "cherry_var_9",
      "peach_var_9",
      "pear_var_9",
      "kiwi_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 588,
      "starsMax": 3,
      "starThresholds": [
        22946,
        32780,
        42614
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 53 seconds."
  },
  {
    "levelNumber": 270,
    "stageCode": "14-10",
    "title": "Stage 270: Australian Rainforest (Part 10)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 32900,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "peach_var_9",
      "pear_var_9",
      "kiwi_var_9",
      "coconut_var_9",
      "avocado_var_9",
      "pomegranate_var_9"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 590,
      "starsMax": 3,
      "starThresholds": [
        23030,
        32900,
        42770
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 271,
    "stageCode": "14-11",
    "title": "Stage 271: Australian Rainforest (Part 11)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 33020,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_9",
      "avocado_var_9",
      "pomegranate_var_9",
      "papaya_var_9",
      "fig_var_9",
      "blueberry_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 592,
      "starsMax": 3,
      "starThresholds": [
        23114,
        33020,
        42926
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 272,
    "stageCode": "14-12",
    "title": "Stage 272: Australian Rainforest (Part 12)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 33140,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_9",
      "fig_var_9",
      "blueberry_var_9",
      "raspberry_var_9",
      "durian_var_9",
      "mangosteen_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 594,
      "starsMax": 3,
      "starThresholds": [
        23198,
        33140,
        43082
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 273,
    "stageCode": "14-13",
    "title": "Stage 273: Australian Rainforest (Part 13)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 33260,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_9",
      "durian_var_9",
      "mangosteen_var_9",
      "rambutan_var_9",
      "lychee_var_9",
      "starfruit_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 596,
      "starsMax": 3,
      "starThresholds": [
        23282,
        33260,
        43238
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 274,
    "stageCode": "14-14",
    "title": "Stage 274: Australian Rainforest (Part 14)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 33380,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_9",
      "lychee_var_9",
      "starfruit_var_9",
      "jackfruit_var_9",
      "buddhas_hand_var_9",
      "miracle_fruit_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 598,
      "starsMax": 3,
      "starThresholds": [
        23366,
        33380,
        43394
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 275,
    "stageCode": "14-15",
    "title": "Stage 275: Australian Rainforest (Part 15)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 33500,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_9",
      "buddhas_hand_var_9",
      "miracle_fruit_var_9",
      "black_sapote_var_9",
      "jabuticaba_var_9",
      "apple_var_10"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 600,
      "starsMax": 3,
      "starThresholds": [
        23450,
        33500,
        43550
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 276,
    "stageCode": "14-16",
    "title": "Stage 276: Australian Rainforest (Part 16)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 33620,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_9",
      "jabuticaba_var_9",
      "apple_var_10",
      "banana_var_10",
      "orange_var_10",
      "strawberry_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 602,
      "starsMax": 3,
      "starThresholds": [
        23534,
        33620,
        43706
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 277,
    "stageCode": "14-17",
    "title": "Stage 277: Australian Rainforest (Part 17)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 33740,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_10",
      "orange_var_10",
      "strawberry_var_10",
      "watermelon_var_10",
      "grape_var_10",
      "pineapple_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 604,
      "starsMax": 3,
      "starThresholds": [
        23618,
        33740,
        43862
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 278,
    "stageCode": "14-18",
    "title": "Stage 278: Australian Rainforest (Part 18)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 33860,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_10",
      "grape_var_10",
      "pineapple_var_10",
      "mango_var_10",
      "lemon_var_10",
      "cherry_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 606,
      "starsMax": 3,
      "starThresholds": [
        23702,
        33860,
        44018
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 279,
    "stageCode": "14-19",
    "title": "Stage 279: Australian Rainforest (Part 19)",
    "region": "Australian Rainforest",
    "isBossStage": false,
    "targetScore": 33980,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_10",
      "lemon_var_10",
      "cherry_var_10",
      "peach_var_10",
      "pear_var_10",
      "kiwi_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 608,
      "starsMax": 3,
      "starThresholds": [
        23786,
        33980,
        44174
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 280,
    "stageCode": "14-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Australian Rainforest",
    "region": "Australian Rainforest",
    "isBossStage": true,
    "targetScore": 34100,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "apple",
      "banana",
      "orange",
      "strawberry",
      "watermelon",
      "grape"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        23870,
        34100,
        44330
      ]
    },
    "briefing": "Welcome to Australian Rainforest. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 281,
    "stageCode": "15-1",
    "title": "Stage 281: Madagascar Biosphere (Part 1)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 34220,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry",
      "watermelon",
      "grape",
      "pineapple",
      "mango",
      "lemon"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 612,
      "starsMax": 3,
      "starThresholds": [
        23954,
        34220,
        44486
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 282,
    "stageCode": "15-2",
    "title": "Stage 282: Madagascar Biosphere (Part 2)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 34340,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple",
      "mango",
      "lemon",
      "cherry",
      "peach",
      "pear"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 614,
      "starsMax": 3,
      "starThresholds": [
        24038,
        34340,
        44642
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 283,
    "stageCode": "15-3",
    "title": "Stage 283: Madagascar Biosphere (Part 3)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 34460,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry",
      "peach",
      "pear",
      "kiwi",
      "coconut",
      "avocado"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 616,
      "starsMax": 3,
      "starThresholds": [
        24122,
        34460,
        44798
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 284,
    "stageCode": "15-4",
    "title": "Stage 284: Madagascar Biosphere (Part 4)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 34580,
    "timeLimitSeconds": 52,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi",
      "coconut",
      "avocado",
      "pomegranate",
      "papaya",
      "fig"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 618,
      "starsMax": 3,
      "starThresholds": [
        24206,
        34580,
        44954
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 52 seconds."
  },
  {
    "levelNumber": 285,
    "stageCode": "15-5",
    "title": "Stage 285: Madagascar Biosphere (Part 5)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 34700,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate",
      "papaya",
      "fig",
      "blueberry",
      "raspberry",
      "durian"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 620,
      "starsMax": 3,
      "starThresholds": [
        24290,
        34700,
        45110
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 286,
    "stageCode": "15-6",
    "title": "Stage 286: Madagascar Biosphere (Part 6)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 34820,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry",
      "raspberry",
      "durian",
      "mangosteen",
      "rambutan",
      "lychee"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 622,
      "starsMax": 3,
      "starThresholds": [
        24374,
        34820,
        45266
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 287,
    "stageCode": "15-7",
    "title": "Stage 287: Madagascar Biosphere (Part 7)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 34940,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen",
      "rambutan",
      "lychee",
      "starfruit",
      "jackfruit",
      "buddhas_hand"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 624,
      "starsMax": 3,
      "starThresholds": [
        24458,
        34940,
        45422
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 288,
    "stageCode": "15-8",
    "title": "Stage 288: Madagascar Biosphere (Part 8)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 35060,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit",
      "jackfruit",
      "buddhas_hand",
      "miracle_fruit",
      "black_sapote",
      "jabuticaba"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 626,
      "starsMax": 3,
      "starThresholds": [
        24542,
        35060,
        45578
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 289,
    "stageCode": "15-9",
    "title": "Stage 289: Madagascar Biosphere (Part 9)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 35180,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit",
      "black_sapote",
      "jabuticaba",
      "apple_var_2",
      "banana_var_2",
      "orange_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 628,
      "starsMax": 3,
      "starThresholds": [
        24626,
        35180,
        45734
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 290,
    "stageCode": "15-10",
    "title": "Stage 290: Madagascar Biosphere (Part 10)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 35300,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_2",
      "banana_var_2",
      "orange_var_2",
      "strawberry_var_2",
      "watermelon_var_2",
      "grape_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 630,
      "starsMax": 3,
      "starThresholds": [
        24710,
        35300,
        45890
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 291,
    "stageCode": "15-11",
    "title": "Stage 291: Madagascar Biosphere (Part 11)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 35420,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_2",
      "watermelon_var_2",
      "grape_var_2",
      "pineapple_var_2",
      "mango_var_2",
      "lemon_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 632,
      "starsMax": 3,
      "starThresholds": [
        24794,
        35420,
        46046
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 292,
    "stageCode": "15-12",
    "title": "Stage 292: Madagascar Biosphere (Part 12)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 35540,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_2",
      "mango_var_2",
      "lemon_var_2",
      "cherry_var_2",
      "peach_var_2",
      "pear_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 634,
      "starsMax": 3,
      "starThresholds": [
        24878,
        35540,
        46202
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 293,
    "stageCode": "15-13",
    "title": "Stage 293: Madagascar Biosphere (Part 13)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 35660,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_2",
      "peach_var_2",
      "pear_var_2",
      "kiwi_var_2",
      "coconut_var_2",
      "avocado_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 636,
      "starsMax": 3,
      "starThresholds": [
        24962,
        35660,
        46358
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 294,
    "stageCode": "15-14",
    "title": "Stage 294: Madagascar Biosphere (Part 14)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 35780,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_2",
      "coconut_var_2",
      "avocado_var_2",
      "pomegranate_var_2",
      "papaya_var_2",
      "fig_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 638,
      "starsMax": 3,
      "starThresholds": [
        25046,
        35780,
        46514
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 295,
    "stageCode": "15-15",
    "title": "Stage 295: Madagascar Biosphere (Part 15)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 35900,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_2",
      "papaya_var_2",
      "fig_var_2",
      "blueberry_var_2",
      "raspberry_var_2",
      "durian_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 640,
      "starsMax": 3,
      "starThresholds": [
        25130,
        35900,
        46670
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 296,
    "stageCode": "15-16",
    "title": "Stage 296: Madagascar Biosphere (Part 16)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 36020,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_2",
      "raspberry_var_2",
      "durian_var_2",
      "mangosteen_var_2",
      "rambutan_var_2",
      "lychee_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 642,
      "starsMax": 3,
      "starThresholds": [
        25214,
        36020,
        46826
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 297,
    "stageCode": "15-17",
    "title": "Stage 297: Madagascar Biosphere (Part 17)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 36140,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_2",
      "rambutan_var_2",
      "lychee_var_2",
      "starfruit_var_2",
      "jackfruit_var_2",
      "buddhas_hand_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 644,
      "starsMax": 3,
      "starThresholds": [
        25298,
        36140,
        46982
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 298,
    "stageCode": "15-18",
    "title": "Stage 298: Madagascar Biosphere (Part 18)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 36260,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_2",
      "jackfruit_var_2",
      "buddhas_hand_var_2",
      "miracle_fruit_var_2",
      "black_sapote_var_2",
      "jabuticaba_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 646,
      "starsMax": 3,
      "starThresholds": [
        25382,
        36260,
        47138
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 299,
    "stageCode": "15-19",
    "title": "Stage 299: Madagascar Biosphere (Part 19)",
    "region": "Madagascar Biosphere",
    "isBossStage": false,
    "targetScore": 36380,
    "timeLimitSeconds": 51,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_2",
      "black_sapote_var_2",
      "jabuticaba_var_2",
      "apple_var_3",
      "banana_var_3",
      "orange_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 648,
      "starsMax": 3,
      "starThresholds": [
        25466,
        36380,
        47294
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 51 seconds."
  },
  {
    "levelNumber": 300,
    "stageCode": "15-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Madagascar Biosphere",
    "region": "Madagascar Biosphere",
    "isBossStage": true,
    "targetScore": 36500,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "apple_var_3",
      "banana_var_3",
      "orange_var_3",
      "strawberry_var_3",
      "watermelon_var_3",
      "grape_var_3"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        25550,
        36500,
        47450
      ]
    },
    "briefing": "Welcome to Madagascar Biosphere. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 301,
    "stageCode": "16-1",
    "title": "Stage 301: Caucasus Valleys (Part 1)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 36620,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_3",
      "watermelon_var_3",
      "grape_var_3",
      "pineapple_var_3",
      "mango_var_3",
      "lemon_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 652,
      "starsMax": 3,
      "starThresholds": [
        25634,
        36620,
        47606
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 302,
    "stageCode": "16-2",
    "title": "Stage 302: Caucasus Valleys (Part 2)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 36740,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_3",
      "mango_var_3",
      "lemon_var_3",
      "cherry_var_3",
      "peach_var_3",
      "pear_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 654,
      "starsMax": 3,
      "starThresholds": [
        25718,
        36740,
        47762
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 303,
    "stageCode": "16-3",
    "title": "Stage 303: Caucasus Valleys (Part 3)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 36860,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_3",
      "peach_var_3",
      "pear_var_3",
      "kiwi_var_3",
      "coconut_var_3",
      "avocado_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 656,
      "starsMax": 3,
      "starThresholds": [
        25802,
        36860,
        47918
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 304,
    "stageCode": "16-4",
    "title": "Stage 304: Caucasus Valleys (Part 4)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 36980,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_3",
      "coconut_var_3",
      "avocado_var_3",
      "pomegranate_var_3",
      "papaya_var_3",
      "fig_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 658,
      "starsMax": 3,
      "starThresholds": [
        25886,
        36980,
        48074
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 305,
    "stageCode": "16-5",
    "title": "Stage 305: Caucasus Valleys (Part 5)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 37100,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_3",
      "papaya_var_3",
      "fig_var_3",
      "blueberry_var_3",
      "raspberry_var_3",
      "durian_var_3"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 660,
      "starsMax": 3,
      "starThresholds": [
        25970,
        37100,
        48230
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 306,
    "stageCode": "16-6",
    "title": "Stage 306: Caucasus Valleys (Part 6)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 37220,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_3",
      "raspberry_var_3",
      "durian_var_3",
      "mangosteen_var_3",
      "rambutan_var_3",
      "lychee_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 662,
      "starsMax": 3,
      "starThresholds": [
        26054,
        37220,
        48386
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 307,
    "stageCode": "16-7",
    "title": "Stage 307: Caucasus Valleys (Part 7)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 37340,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_3",
      "rambutan_var_3",
      "lychee_var_3",
      "starfruit_var_3",
      "jackfruit_var_3",
      "buddhas_hand_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 664,
      "starsMax": 3,
      "starThresholds": [
        26138,
        37340,
        48542
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 308,
    "stageCode": "16-8",
    "title": "Stage 308: Caucasus Valleys (Part 8)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 37460,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_3",
      "jackfruit_var_3",
      "buddhas_hand_var_3",
      "miracle_fruit_var_3",
      "black_sapote_var_3",
      "jabuticaba_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 666,
      "starsMax": 3,
      "starThresholds": [
        26222,
        37460,
        48698
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 309,
    "stageCode": "16-9",
    "title": "Stage 309: Caucasus Valleys (Part 9)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 37580,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_3",
      "black_sapote_var_3",
      "jabuticaba_var_3",
      "apple_var_4",
      "banana_var_4",
      "orange_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 668,
      "starsMax": 3,
      "starThresholds": [
        26306,
        37580,
        48854
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 310,
    "stageCode": "16-10",
    "title": "Stage 310: Caucasus Valleys (Part 10)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 37700,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_4",
      "banana_var_4",
      "orange_var_4",
      "strawberry_var_4",
      "watermelon_var_4",
      "grape_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 670,
      "starsMax": 3,
      "starThresholds": [
        26390,
        37700,
        49010
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 311,
    "stageCode": "16-11",
    "title": "Stage 311: Caucasus Valleys (Part 11)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 37820,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_4",
      "watermelon_var_4",
      "grape_var_4",
      "pineapple_var_4",
      "mango_var_4",
      "lemon_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 672,
      "starsMax": 3,
      "starThresholds": [
        26474,
        37820,
        49166
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 312,
    "stageCode": "16-12",
    "title": "Stage 312: Caucasus Valleys (Part 12)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 37940,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_4",
      "mango_var_4",
      "lemon_var_4",
      "cherry_var_4",
      "peach_var_4",
      "pear_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 674,
      "starsMax": 3,
      "starThresholds": [
        26558,
        37940,
        49322
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 313,
    "stageCode": "16-13",
    "title": "Stage 313: Caucasus Valleys (Part 13)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 38060,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_4",
      "peach_var_4",
      "pear_var_4",
      "kiwi_var_4",
      "coconut_var_4",
      "avocado_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 676,
      "starsMax": 3,
      "starThresholds": [
        26642,
        38060,
        49478
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 314,
    "stageCode": "16-14",
    "title": "Stage 314: Caucasus Valleys (Part 14)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 38180,
    "timeLimitSeconds": 50,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_4",
      "coconut_var_4",
      "avocado_var_4",
      "pomegranate_var_4",
      "papaya_var_4",
      "fig_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 678,
      "starsMax": 3,
      "starThresholds": [
        26726,
        38180,
        49634
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 50 seconds."
  },
  {
    "levelNumber": 315,
    "stageCode": "16-15",
    "title": "Stage 315: Caucasus Valleys (Part 15)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 38300,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_4",
      "papaya_var_4",
      "fig_var_4",
      "blueberry_var_4",
      "raspberry_var_4",
      "durian_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 680,
      "starsMax": 3,
      "starThresholds": [
        26810,
        38300,
        49790
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 316,
    "stageCode": "16-16",
    "title": "Stage 316: Caucasus Valleys (Part 16)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 38420,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_4",
      "raspberry_var_4",
      "durian_var_4",
      "mangosteen_var_4",
      "rambutan_var_4",
      "lychee_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 682,
      "starsMax": 3,
      "starThresholds": [
        26894,
        38420,
        49946
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 317,
    "stageCode": "16-17",
    "title": "Stage 317: Caucasus Valleys (Part 17)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 38540,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_4",
      "rambutan_var_4",
      "lychee_var_4",
      "starfruit_var_4",
      "jackfruit_var_4",
      "buddhas_hand_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 684,
      "starsMax": 3,
      "starThresholds": [
        26978,
        38540,
        50102
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 318,
    "stageCode": "16-18",
    "title": "Stage 318: Caucasus Valleys (Part 18)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 38660,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_4",
      "jackfruit_var_4",
      "buddhas_hand_var_4",
      "miracle_fruit_var_4",
      "black_sapote_var_4",
      "jabuticaba_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 686,
      "starsMax": 3,
      "starThresholds": [
        27062,
        38660,
        50258
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 319,
    "stageCode": "16-19",
    "title": "Stage 319: Caucasus Valleys (Part 19)",
    "region": "Caucasus Valleys",
    "isBossStage": false,
    "targetScore": 38780,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_4",
      "black_sapote_var_4",
      "jabuticaba_var_4",
      "apple_var_5",
      "banana_var_5",
      "orange_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 688,
      "starsMax": 3,
      "starThresholds": [
        27146,
        38780,
        50414
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 320,
    "stageCode": "16-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Caucasus Valleys",
    "region": "Caucasus Valleys",
    "isBossStage": true,
    "targetScore": 38900,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "apple_var_5",
      "banana_var_5",
      "orange_var_5",
      "strawberry_var_5",
      "watermelon_var_5",
      "grape_var_5"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        27230,
        38900,
        50570
      ]
    },
    "briefing": "Welcome to Caucasus Valleys. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 321,
    "stageCode": "17-1",
    "title": "Stage 321: Atlas Mountain Oases (Part 1)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 39020,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_5",
      "watermelon_var_5",
      "grape_var_5",
      "pineapple_var_5",
      "mango_var_5",
      "lemon_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 692,
      "starsMax": 3,
      "starThresholds": [
        27314,
        39020,
        50726
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 322,
    "stageCode": "17-2",
    "title": "Stage 322: Atlas Mountain Oases (Part 2)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 39140,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_5",
      "mango_var_5",
      "lemon_var_5",
      "cherry_var_5",
      "peach_var_5",
      "pear_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 694,
      "starsMax": 3,
      "starThresholds": [
        27398,
        39140,
        50882
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 323,
    "stageCode": "17-3",
    "title": "Stage 323: Atlas Mountain Oases (Part 3)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 39260,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_5",
      "peach_var_5",
      "pear_var_5",
      "kiwi_var_5",
      "coconut_var_5",
      "avocado_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 696,
      "starsMax": 3,
      "starThresholds": [
        27482,
        39260,
        51038
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 324,
    "stageCode": "17-4",
    "title": "Stage 324: Atlas Mountain Oases (Part 4)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 39380,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_5",
      "coconut_var_5",
      "avocado_var_5",
      "pomegranate_var_5",
      "papaya_var_5",
      "fig_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 698,
      "starsMax": 3,
      "starThresholds": [
        27566,
        39380,
        51194
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 325,
    "stageCode": "17-5",
    "title": "Stage 325: Atlas Mountain Oases (Part 5)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 39500,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_5",
      "papaya_var_5",
      "fig_var_5",
      "blueberry_var_5",
      "raspberry_var_5",
      "durian_var_5"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 700,
      "starsMax": 3,
      "starThresholds": [
        27650,
        39500,
        51350
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 326,
    "stageCode": "17-6",
    "title": "Stage 326: Atlas Mountain Oases (Part 6)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 39620,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_5",
      "raspberry_var_5",
      "durian_var_5",
      "mangosteen_var_5",
      "rambutan_var_5",
      "lychee_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 702,
      "starsMax": 3,
      "starThresholds": [
        27734,
        39620,
        51506
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 327,
    "stageCode": "17-7",
    "title": "Stage 327: Atlas Mountain Oases (Part 7)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 39740,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_5",
      "rambutan_var_5",
      "lychee_var_5",
      "starfruit_var_5",
      "jackfruit_var_5",
      "buddhas_hand_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 704,
      "starsMax": 3,
      "starThresholds": [
        27818,
        39740,
        51662
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 328,
    "stageCode": "17-8",
    "title": "Stage 328: Atlas Mountain Oases (Part 8)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 39860,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_5",
      "jackfruit_var_5",
      "buddhas_hand_var_5",
      "miracle_fruit_var_5",
      "black_sapote_var_5",
      "jabuticaba_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 706,
      "starsMax": 3,
      "starThresholds": [
        27902,
        39860,
        51818
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 329,
    "stageCode": "17-9",
    "title": "Stage 329: Atlas Mountain Oases (Part 9)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 39980,
    "timeLimitSeconds": 49,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_5",
      "black_sapote_var_5",
      "jabuticaba_var_5",
      "apple_var_6",
      "banana_var_6",
      "orange_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 708,
      "starsMax": 3,
      "starThresholds": [
        27986,
        39980,
        51974
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 49 seconds."
  },
  {
    "levelNumber": 330,
    "stageCode": "17-10",
    "title": "Stage 330: Atlas Mountain Oases (Part 10)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 40100,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_6",
      "banana_var_6",
      "orange_var_6",
      "strawberry_var_6",
      "watermelon_var_6",
      "grape_var_6"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 710,
      "starsMax": 3,
      "starThresholds": [
        28070,
        40100,
        52130
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 331,
    "stageCode": "17-11",
    "title": "Stage 331: Atlas Mountain Oases (Part 11)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 40220,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_6",
      "watermelon_var_6",
      "grape_var_6",
      "pineapple_var_6",
      "mango_var_6",
      "lemon_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 712,
      "starsMax": 3,
      "starThresholds": [
        28154,
        40220,
        52286
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 332,
    "stageCode": "17-12",
    "title": "Stage 332: Atlas Mountain Oases (Part 12)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 40340,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_6",
      "mango_var_6",
      "lemon_var_6",
      "cherry_var_6",
      "peach_var_6",
      "pear_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 714,
      "starsMax": 3,
      "starThresholds": [
        28238,
        40340,
        52442
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 333,
    "stageCode": "17-13",
    "title": "Stage 333: Atlas Mountain Oases (Part 13)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 40460,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_6",
      "peach_var_6",
      "pear_var_6",
      "kiwi_var_6",
      "coconut_var_6",
      "avocado_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 716,
      "starsMax": 3,
      "starThresholds": [
        28322,
        40460,
        52598
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 334,
    "stageCode": "17-14",
    "title": "Stage 334: Atlas Mountain Oases (Part 14)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 40580,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_6",
      "coconut_var_6",
      "avocado_var_6",
      "pomegranate_var_6",
      "papaya_var_6",
      "fig_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 718,
      "starsMax": 3,
      "starThresholds": [
        28406,
        40580,
        52754
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 335,
    "stageCode": "17-15",
    "title": "Stage 335: Atlas Mountain Oases (Part 15)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 40700,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_6",
      "papaya_var_6",
      "fig_var_6",
      "blueberry_var_6",
      "raspberry_var_6",
      "durian_var_6"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 720,
      "starsMax": 3,
      "starThresholds": [
        28490,
        40700,
        52910
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 336,
    "stageCode": "17-16",
    "title": "Stage 336: Atlas Mountain Oases (Part 16)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 40820,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_6",
      "raspberry_var_6",
      "durian_var_6",
      "mangosteen_var_6",
      "rambutan_var_6",
      "lychee_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 722,
      "starsMax": 3,
      "starThresholds": [
        28574,
        40820,
        53066
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 337,
    "stageCode": "17-17",
    "title": "Stage 337: Atlas Mountain Oases (Part 17)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 40940,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_6",
      "rambutan_var_6",
      "lychee_var_6",
      "starfruit_var_6",
      "jackfruit_var_6",
      "buddhas_hand_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 724,
      "starsMax": 3,
      "starThresholds": [
        28658,
        40940,
        53222
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 338,
    "stageCode": "17-18",
    "title": "Stage 338: Atlas Mountain Oases (Part 18)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 41060,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_6",
      "jackfruit_var_6",
      "buddhas_hand_var_6",
      "miracle_fruit_var_6",
      "black_sapote_var_6",
      "jabuticaba_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 726,
      "starsMax": 3,
      "starThresholds": [
        28741.999999999996,
        41060,
        53378
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 339,
    "stageCode": "17-19",
    "title": "Stage 339: Atlas Mountain Oases (Part 19)",
    "region": "Atlas Mountain Oases",
    "isBossStage": false,
    "targetScore": 41180,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_6",
      "black_sapote_var_6",
      "jabuticaba_var_6",
      "apple_var_7",
      "banana_var_7",
      "orange_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 728,
      "starsMax": 3,
      "starThresholds": [
        28825.999999999996,
        41180,
        53534
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 340,
    "stageCode": "17-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Atlas Mountain Oases",
    "region": "Atlas Mountain Oases",
    "isBossStage": true,
    "targetScore": 41300,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "apple_var_7",
      "banana_var_7",
      "orange_var_7",
      "strawberry_var_7",
      "watermelon_var_7",
      "grape_var_7"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        28909.999999999996,
        41300,
        53690
      ]
    },
    "briefing": "Welcome to Atlas Mountain Oases. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 341,
    "stageCode": "18-1",
    "title": "Stage 341: Boreal Tundra (Part 1)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 41420,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_7",
      "watermelon_var_7",
      "grape_var_7",
      "pineapple_var_7",
      "mango_var_7",
      "lemon_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 732,
      "starsMax": 3,
      "starThresholds": [
        28993.999999999996,
        41420,
        53846
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 342,
    "stageCode": "18-2",
    "title": "Stage 342: Boreal Tundra (Part 2)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 41540,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_7",
      "mango_var_7",
      "lemon_var_7",
      "cherry_var_7",
      "peach_var_7",
      "pear_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 734,
      "starsMax": 3,
      "starThresholds": [
        29077.999999999996,
        41540,
        54002
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 343,
    "stageCode": "18-3",
    "title": "Stage 343: Boreal Tundra (Part 3)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 41660,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_7",
      "peach_var_7",
      "pear_var_7",
      "kiwi_var_7",
      "coconut_var_7",
      "avocado_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 736,
      "starsMax": 3,
      "starThresholds": [
        29161.999999999996,
        41660,
        54158
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 344,
    "stageCode": "18-4",
    "title": "Stage 344: Boreal Tundra (Part 4)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 41780,
    "timeLimitSeconds": 48,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_7",
      "coconut_var_7",
      "avocado_var_7",
      "pomegranate_var_7",
      "papaya_var_7",
      "fig_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 738,
      "starsMax": 3,
      "starThresholds": [
        29245.999999999996,
        41780,
        54314
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 48 seconds."
  },
  {
    "levelNumber": 345,
    "stageCode": "18-5",
    "title": "Stage 345: Boreal Tundra (Part 5)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 41900,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_7",
      "papaya_var_7",
      "fig_var_7",
      "blueberry_var_7",
      "raspberry_var_7",
      "durian_var_7"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 740,
      "starsMax": 3,
      "starThresholds": [
        29329.999999999996,
        41900,
        54470
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 346,
    "stageCode": "18-6",
    "title": "Stage 346: Boreal Tundra (Part 6)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 42020,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_7",
      "raspberry_var_7",
      "durian_var_7",
      "mangosteen_var_7",
      "rambutan_var_7",
      "lychee_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 742,
      "starsMax": 3,
      "starThresholds": [
        29413.999999999996,
        42020,
        54626
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 347,
    "stageCode": "18-7",
    "title": "Stage 347: Boreal Tundra (Part 7)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 42140,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_7",
      "rambutan_var_7",
      "lychee_var_7",
      "starfruit_var_7",
      "jackfruit_var_7",
      "buddhas_hand_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 744,
      "starsMax": 3,
      "starThresholds": [
        29497.999999999996,
        42140,
        54782
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 348,
    "stageCode": "18-8",
    "title": "Stage 348: Boreal Tundra (Part 8)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 42260,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_7",
      "jackfruit_var_7",
      "buddhas_hand_var_7",
      "miracle_fruit_var_7",
      "black_sapote_var_7",
      "jabuticaba_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 746,
      "starsMax": 3,
      "starThresholds": [
        29581.999999999996,
        42260,
        54938
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 349,
    "stageCode": "18-9",
    "title": "Stage 349: Boreal Tundra (Part 9)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 42380,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_7",
      "black_sapote_var_7",
      "jabuticaba_var_7",
      "apple_var_8",
      "banana_var_8",
      "orange_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 748,
      "starsMax": 3,
      "starThresholds": [
        29665.999999999996,
        42380,
        55094
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 350,
    "stageCode": "18-10",
    "title": "Stage 350: Boreal Tundra (Part 10)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 42500,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_8",
      "banana_var_8",
      "orange_var_8",
      "strawberry_var_8",
      "watermelon_var_8",
      "grape_var_8"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 750,
      "starsMax": 3,
      "starThresholds": [
        29749.999999999996,
        42500,
        55250
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 351,
    "stageCode": "18-11",
    "title": "Stage 351: Boreal Tundra (Part 11)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 42620,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_8",
      "watermelon_var_8",
      "grape_var_8",
      "pineapple_var_8",
      "mango_var_8",
      "lemon_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 752,
      "starsMax": 3,
      "starThresholds": [
        29833.999999999996,
        42620,
        55406
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 352,
    "stageCode": "18-12",
    "title": "Stage 352: Boreal Tundra (Part 12)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 42740,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_8",
      "mango_var_8",
      "lemon_var_8",
      "cherry_var_8",
      "peach_var_8",
      "pear_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 754,
      "starsMax": 3,
      "starThresholds": [
        29917.999999999996,
        42740,
        55562
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 353,
    "stageCode": "18-13",
    "title": "Stage 353: Boreal Tundra (Part 13)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 42860,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_8",
      "peach_var_8",
      "pear_var_8",
      "kiwi_var_8",
      "coconut_var_8",
      "avocado_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 756,
      "starsMax": 3,
      "starThresholds": [
        30001.999999999996,
        42860,
        55718
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 354,
    "stageCode": "18-14",
    "title": "Stage 354: Boreal Tundra (Part 14)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 42980,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_8",
      "coconut_var_8",
      "avocado_var_8",
      "pomegranate_var_8",
      "papaya_var_8",
      "fig_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 758,
      "starsMax": 3,
      "starThresholds": [
        30085.999999999996,
        42980,
        55874
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 355,
    "stageCode": "18-15",
    "title": "Stage 355: Boreal Tundra (Part 15)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 43100,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_8",
      "papaya_var_8",
      "fig_var_8",
      "blueberry_var_8",
      "raspberry_var_8",
      "durian_var_8"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 760,
      "starsMax": 3,
      "starThresholds": [
        30169.999999999996,
        43100,
        56030
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 356,
    "stageCode": "18-16",
    "title": "Stage 356: Boreal Tundra (Part 16)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 43220,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_8",
      "raspberry_var_8",
      "durian_var_8",
      "mangosteen_var_8",
      "rambutan_var_8",
      "lychee_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 762,
      "starsMax": 3,
      "starThresholds": [
        30253.999999999996,
        43220,
        56186
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 357,
    "stageCode": "18-17",
    "title": "Stage 357: Boreal Tundra (Part 17)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 43340,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_8",
      "rambutan_var_8",
      "lychee_var_8",
      "starfruit_var_8",
      "jackfruit_var_8",
      "buddhas_hand_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 764,
      "starsMax": 3,
      "starThresholds": [
        30337.999999999996,
        43340,
        56342
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 358,
    "stageCode": "18-18",
    "title": "Stage 358: Boreal Tundra (Part 18)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 43460,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_8",
      "jackfruit_var_8",
      "buddhas_hand_var_8",
      "miracle_fruit_var_8",
      "black_sapote_var_8",
      "jabuticaba_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 766,
      "starsMax": 3,
      "starThresholds": [
        30421.999999999996,
        43460,
        56498
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 359,
    "stageCode": "18-19",
    "title": "Stage 359: Boreal Tundra (Part 19)",
    "region": "Boreal Tundra",
    "isBossStage": false,
    "targetScore": 43580,
    "timeLimitSeconds": 47,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_8",
      "black_sapote_var_8",
      "jabuticaba_var_8",
      "apple_var_9",
      "banana_var_9",
      "orange_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 768,
      "starsMax": 3,
      "starThresholds": [
        30505.999999999996,
        43580,
        56654
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 47 seconds."
  },
  {
    "levelNumber": 360,
    "stageCode": "18-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Boreal Tundra",
    "region": "Boreal Tundra",
    "isBossStage": true,
    "targetScore": 43700,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "apple_var_9",
      "banana_var_9",
      "orange_var_9",
      "strawberry_var_9",
      "watermelon_var_9",
      "grape_var_9"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        30589.999999999996,
        43700,
        56810
      ]
    },
    "briefing": "Welcome to Boreal Tundra. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 361,
    "stageCode": "19-1",
    "title": "Stage 361: Hawaiian Volcanic Slopes (Part 1)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 43820,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_9",
      "watermelon_var_9",
      "grape_var_9",
      "pineapple_var_9",
      "mango_var_9",
      "lemon_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 772,
      "starsMax": 3,
      "starThresholds": [
        30673.999999999996,
        43820,
        56966
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 362,
    "stageCode": "19-2",
    "title": "Stage 362: Hawaiian Volcanic Slopes (Part 2)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 43940,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_9",
      "mango_var_9",
      "lemon_var_9",
      "cherry_var_9",
      "peach_var_9",
      "pear_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 774,
      "starsMax": 3,
      "starThresholds": [
        30757.999999999996,
        43940,
        57122
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 363,
    "stageCode": "19-3",
    "title": "Stage 363: Hawaiian Volcanic Slopes (Part 3)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 44060,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_9",
      "peach_var_9",
      "pear_var_9",
      "kiwi_var_9",
      "coconut_var_9",
      "avocado_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 776,
      "starsMax": 3,
      "starThresholds": [
        30841.999999999996,
        44060,
        57278
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 364,
    "stageCode": "19-4",
    "title": "Stage 364: Hawaiian Volcanic Slopes (Part 4)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 44180,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "kiwi_var_9",
      "coconut_var_9",
      "avocado_var_9",
      "pomegranate_var_9",
      "papaya_var_9",
      "fig_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 778,
      "starsMax": 3,
      "starThresholds": [
        30925.999999999996,
        44180,
        57434
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 365,
    "stageCode": "19-5",
    "title": "Stage 365: Hawaiian Volcanic Slopes (Part 5)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 44300,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pomegranate_var_9",
      "papaya_var_9",
      "fig_var_9",
      "blueberry_var_9",
      "raspberry_var_9",
      "durian_var_9"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 780,
      "starsMax": 3,
      "starThresholds": [
        31009.999999999996,
        44300,
        57590
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 366,
    "stageCode": "19-6",
    "title": "Stage 366: Hawaiian Volcanic Slopes (Part 6)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 44420,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "blueberry_var_9",
      "raspberry_var_9",
      "durian_var_9",
      "mangosteen_var_9",
      "rambutan_var_9",
      "lychee_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 782,
      "starsMax": 3,
      "starThresholds": [
        31093.999999999996,
        44420,
        57746
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 367,
    "stageCode": "19-7",
    "title": "Stage 367: Hawaiian Volcanic Slopes (Part 7)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 44540,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mangosteen_var_9",
      "rambutan_var_9",
      "lychee_var_9",
      "starfruit_var_9",
      "jackfruit_var_9",
      "buddhas_hand_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 784,
      "starsMax": 3,
      "starThresholds": [
        31177.999999999996,
        44540,
        57902
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 368,
    "stageCode": "19-8",
    "title": "Stage 368: Hawaiian Volcanic Slopes (Part 8)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 44660,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "starfruit_var_9",
      "jackfruit_var_9",
      "buddhas_hand_var_9",
      "miracle_fruit_var_9",
      "black_sapote_var_9",
      "jabuticaba_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 786,
      "starsMax": 3,
      "starThresholds": [
        31261.999999999996,
        44660,
        58058
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 369,
    "stageCode": "19-9",
    "title": "Stage 369: Hawaiian Volcanic Slopes (Part 9)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 44780,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "miracle_fruit_var_9",
      "black_sapote_var_9",
      "jabuticaba_var_9",
      "apple_var_10",
      "banana_var_10",
      "orange_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 788,
      "starsMax": 3,
      "starThresholds": [
        31345.999999999996,
        44780,
        58214
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 370,
    "stageCode": "19-10",
    "title": "Stage 370: Hawaiian Volcanic Slopes (Part 10)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 44900,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "apple_var_10",
      "banana_var_10",
      "orange_var_10",
      "strawberry_var_10",
      "watermelon_var_10",
      "grape_var_10"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 790,
      "starsMax": 3,
      "starThresholds": [
        31429.999999999996,
        44900,
        58370
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 371,
    "stageCode": "19-11",
    "title": "Stage 371: Hawaiian Volcanic Slopes (Part 11)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 45020,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "strawberry_var_10",
      "watermelon_var_10",
      "grape_var_10",
      "pineapple_var_10",
      "mango_var_10",
      "lemon_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 792,
      "starsMax": 3,
      "starThresholds": [
        31513.999999999996,
        45020,
        58526
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 372,
    "stageCode": "19-12",
    "title": "Stage 372: Hawaiian Volcanic Slopes (Part 12)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 45140,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pineapple_var_10",
      "mango_var_10",
      "lemon_var_10",
      "cherry_var_10",
      "peach_var_10",
      "pear_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 794,
      "starsMax": 3,
      "starThresholds": [
        31597.999999999996,
        45140,
        58682
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 373,
    "stageCode": "19-13",
    "title": "Stage 373: Hawaiian Volcanic Slopes (Part 13)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 45260,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "cherry_var_10",
      "peach_var_10",
      "pear_var_10",
      "kiwi_var_10",
      "coconut_var_10",
      "avocado_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 796,
      "starsMax": 3,
      "starThresholds": [
        31681.999999999996,
        45260,
        58838
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 374,
    "stageCode": "19-14",
    "title": "Stage 374: Hawaiian Volcanic Slopes (Part 14)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 45380,
    "timeLimitSeconds": 46,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange",
      "strawberry",
      "watermelon",
      "grape",
      "pineapple",
      "mango"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 798,
      "starsMax": 3,
      "starThresholds": [
        31765.999999999996,
        45380,
        58994
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 46 seconds."
  },
  {
    "levelNumber": 375,
    "stageCode": "19-15",
    "title": "Stage 375: Hawaiian Volcanic Slopes (Part 15)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 45500,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape",
      "pineapple",
      "mango",
      "lemon",
      "cherry",
      "peach"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 800,
      "starsMax": 3,
      "starThresholds": [
        31849.999999999996,
        45500,
        59150
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 376,
    "stageCode": "19-16",
    "title": "Stage 376: Hawaiian Volcanic Slopes (Part 16)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 45620,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon",
      "cherry",
      "peach",
      "pear",
      "kiwi",
      "coconut"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 802,
      "starsMax": 3,
      "starThresholds": [
        31933.999999999996,
        45620,
        59306
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 377,
    "stageCode": "19-17",
    "title": "Stage 377: Hawaiian Volcanic Slopes (Part 17)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 45740,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear",
      "kiwi",
      "coconut",
      "avocado",
      "pomegranate",
      "papaya"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 804,
      "starsMax": 3,
      "starThresholds": [
        32017.999999999996,
        45740,
        59462
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 378,
    "stageCode": "19-18",
    "title": "Stage 378: Hawaiian Volcanic Slopes (Part 18)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 45860,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado",
      "pomegranate",
      "papaya",
      "fig",
      "blueberry",
      "raspberry"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 806,
      "starsMax": 3,
      "starThresholds": [
        32101.999999999996,
        45860,
        59618
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 379,
    "stageCode": "19-19",
    "title": "Stage 379: Hawaiian Volcanic Slopes (Part 19)",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": false,
    "targetScore": 45980,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig",
      "blueberry",
      "raspberry",
      "durian",
      "mangosteen",
      "rambutan"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 808,
      "starsMax": 3,
      "starThresholds": [
        32185.999999999996,
        45980,
        59774
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 380,
    "stageCode": "19-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Hawaiian Volcanic Slopes",
    "region": "Hawaiian Volcanic Slopes",
    "isBossStage": true,
    "targetScore": 46100,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian",
      "mangosteen",
      "rambutan",
      "lychee",
      "starfruit",
      "jackfruit"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        32269.999999999996,
        46100,
        59930
      ]
    },
    "briefing": "Welcome to Hawaiian Volcanic Slopes. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 381,
    "stageCode": "20-1",
    "title": "Stage 381: Galapagos Isles (Part 1)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 46220,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee",
      "starfruit",
      "jackfruit",
      "buddhas_hand",
      "miracle_fruit",
      "black_sapote"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 812,
      "starsMax": 3,
      "starThresholds": [
        32353.999999999996,
        46220,
        60086
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 382,
    "stageCode": "20-2",
    "title": "Stage 382: Galapagos Isles (Part 2)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 46340,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand",
      "miracle_fruit",
      "black_sapote",
      "jabuticaba",
      "apple_var_2",
      "banana_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 814,
      "starsMax": 3,
      "starThresholds": [
        32437.999999999996,
        46340,
        60242
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 383,
    "stageCode": "20-3",
    "title": "Stage 383: Galapagos Isles (Part 3)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 46460,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba",
      "apple_var_2",
      "banana_var_2",
      "orange_var_2",
      "strawberry_var_2",
      "watermelon_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 816,
      "starsMax": 3,
      "starThresholds": [
        32521.999999999996,
        46460,
        60398
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 384,
    "stageCode": "20-4",
    "title": "Stage 384: Galapagos Isles (Part 4)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 46580,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_2",
      "strawberry_var_2",
      "watermelon_var_2",
      "grape_var_2",
      "pineapple_var_2",
      "mango_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 818,
      "starsMax": 3,
      "starThresholds": [
        32605.999999999996,
        46580,
        60554
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 385,
    "stageCode": "20-5",
    "title": "Stage 385: Galapagos Isles (Part 5)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 46700,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_2",
      "pineapple_var_2",
      "mango_var_2",
      "lemon_var_2",
      "cherry_var_2",
      "peach_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 820,
      "starsMax": 3,
      "starThresholds": [
        32689.999999999996,
        46700,
        60710
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 386,
    "stageCode": "20-6",
    "title": "Stage 386: Galapagos Isles (Part 6)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 46820,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_2",
      "cherry_var_2",
      "peach_var_2",
      "pear_var_2",
      "kiwi_var_2",
      "coconut_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 822,
      "starsMax": 3,
      "starThresholds": [
        32774,
        46820,
        60866
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 387,
    "stageCode": "20-7",
    "title": "Stage 387: Galapagos Isles (Part 7)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 46940,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_2",
      "kiwi_var_2",
      "coconut_var_2",
      "avocado_var_2",
      "pomegranate_var_2",
      "papaya_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 824,
      "starsMax": 3,
      "starThresholds": [
        32858,
        46940,
        61022
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 388,
    "stageCode": "20-8",
    "title": "Stage 388: Galapagos Isles (Part 8)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 47060,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_2",
      "pomegranate_var_2",
      "papaya_var_2",
      "fig_var_2",
      "blueberry_var_2",
      "raspberry_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 826,
      "starsMax": 3,
      "starThresholds": [
        32942,
        47060,
        61178
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 389,
    "stageCode": "20-9",
    "title": "Stage 389: Galapagos Isles (Part 9)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 47180,
    "timeLimitSeconds": 45,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_2",
      "blueberry_var_2",
      "raspberry_var_2",
      "durian_var_2",
      "mangosteen_var_2",
      "rambutan_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 828,
      "starsMax": 3,
      "starThresholds": [
        33026,
        47180,
        61334
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 390,
    "stageCode": "20-10",
    "title": "Stage 390: Galapagos Isles (Part 10)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 47300,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "durian_var_2",
      "mangosteen_var_2",
      "rambutan_var_2",
      "lychee_var_2",
      "starfruit_var_2",
      "jackfruit_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 830,
      "starsMax": 3,
      "starThresholds": [
        33110,
        47300,
        61490
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 391,
    "stageCode": "20-11",
    "title": "Stage 391: Galapagos Isles (Part 11)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 47420,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_2",
      "starfruit_var_2",
      "jackfruit_var_2",
      "buddhas_hand_var_2",
      "miracle_fruit_var_2",
      "black_sapote_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 832,
      "starsMax": 3,
      "starThresholds": [
        33194,
        47420,
        61646
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 392,
    "stageCode": "20-12",
    "title": "Stage 392: Galapagos Isles (Part 12)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 47540,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_2",
      "miracle_fruit_var_2",
      "black_sapote_var_2",
      "jabuticaba_var_2",
      "apple_var_3",
      "banana_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 834,
      "starsMax": 3,
      "starThresholds": [
        33278,
        47540,
        61802
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 393,
    "stageCode": "20-13",
    "title": "Stage 393: Galapagos Isles (Part 13)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 47660,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_2",
      "apple_var_3",
      "banana_var_3",
      "orange_var_3",
      "strawberry_var_3",
      "watermelon_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 836,
      "starsMax": 3,
      "starThresholds": [
        33362,
        47660,
        61958
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 394,
    "stageCode": "20-14",
    "title": "Stage 394: Galapagos Isles (Part 14)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 47780,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_3",
      "strawberry_var_3",
      "watermelon_var_3",
      "grape_var_3",
      "pineapple_var_3",
      "mango_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 838,
      "starsMax": 3,
      "starThresholds": [
        33446,
        47780,
        62114
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 395,
    "stageCode": "20-15",
    "title": "Stage 395: Galapagos Isles (Part 15)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 47900,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_3",
      "pineapple_var_3",
      "mango_var_3",
      "lemon_var_3",
      "cherry_var_3",
      "peach_var_3"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 840,
      "starsMax": 3,
      "starThresholds": [
        33530,
        47900,
        62270
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 396,
    "stageCode": "20-16",
    "title": "Stage 396: Galapagos Isles (Part 16)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 48020,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_3",
      "cherry_var_3",
      "peach_var_3",
      "pear_var_3",
      "kiwi_var_3",
      "coconut_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 842,
      "starsMax": 3,
      "starThresholds": [
        33614,
        48020,
        62426
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 397,
    "stageCode": "20-17",
    "title": "Stage 397: Galapagos Isles (Part 17)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 48140,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_3",
      "kiwi_var_3",
      "coconut_var_3",
      "avocado_var_3",
      "pomegranate_var_3",
      "papaya_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 844,
      "starsMax": 3,
      "starThresholds": [
        33698,
        48140,
        62582
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 398,
    "stageCode": "20-18",
    "title": "Stage 398: Galapagos Isles (Part 18)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 48260,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_3",
      "pomegranate_var_3",
      "papaya_var_3",
      "fig_var_3",
      "blueberry_var_3",
      "raspberry_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 846,
      "starsMax": 3,
      "starThresholds": [
        33782,
        48260,
        62738
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 399,
    "stageCode": "20-19",
    "title": "Stage 399: Galapagos Isles (Part 19)",
    "region": "Galapagos Isles",
    "isBossStage": false,
    "targetScore": 48380,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_3",
      "blueberry_var_3",
      "raspberry_var_3",
      "durian_var_3",
      "mangosteen_var_3",
      "rambutan_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 848,
      "starsMax": 3,
      "starThresholds": [
        33866,
        48380,
        62894
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 400,
    "stageCode": "20-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Galapagos Isles",
    "region": "Galapagos Isles",
    "isBossStage": true,
    "targetScore": 48500,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian_var_3",
      "mangosteen_var_3",
      "rambutan_var_3",
      "lychee_var_3",
      "starfruit_var_3",
      "jackfruit_var_3"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        33950,
        48500,
        63050
      ]
    },
    "briefing": "Welcome to Galapagos Isles. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 401,
    "stageCode": "21-1",
    "title": "Stage 401: Yangtze River Delta (Part 1)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 48620,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_3",
      "starfruit_var_3",
      "jackfruit_var_3",
      "buddhas_hand_var_3",
      "miracle_fruit_var_3",
      "black_sapote_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 852,
      "starsMax": 3,
      "starThresholds": [
        34034,
        48620,
        63206
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 402,
    "stageCode": "21-2",
    "title": "Stage 402: Yangtze River Delta (Part 2)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 48740,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_3",
      "miracle_fruit_var_3",
      "black_sapote_var_3",
      "jabuticaba_var_3",
      "apple_var_4",
      "banana_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 854,
      "starsMax": 3,
      "starThresholds": [
        34118,
        48740,
        63362
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 403,
    "stageCode": "21-3",
    "title": "Stage 403: Yangtze River Delta (Part 3)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 48860,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_3",
      "apple_var_4",
      "banana_var_4",
      "orange_var_4",
      "strawberry_var_4",
      "watermelon_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 856,
      "starsMax": 3,
      "starThresholds": [
        34202,
        48860,
        63518
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 404,
    "stageCode": "21-4",
    "title": "Stage 404: Yangtze River Delta (Part 4)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 48980,
    "timeLimitSeconds": 44,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_4",
      "strawberry_var_4",
      "watermelon_var_4",
      "grape_var_4",
      "pineapple_var_4",
      "mango_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 858,
      "starsMax": 3,
      "starThresholds": [
        34286,
        48980,
        63674
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 44 seconds."
  },
  {
    "levelNumber": 405,
    "stageCode": "21-5",
    "title": "Stage 405: Yangtze River Delta (Part 5)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 49100,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_4",
      "pineapple_var_4",
      "mango_var_4",
      "lemon_var_4",
      "cherry_var_4",
      "peach_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 860,
      "starsMax": 3,
      "starThresholds": [
        34370,
        49100,
        63830
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 406,
    "stageCode": "21-6",
    "title": "Stage 406: Yangtze River Delta (Part 6)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 49220,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_4",
      "cherry_var_4",
      "peach_var_4",
      "pear_var_4",
      "kiwi_var_4",
      "coconut_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 862,
      "starsMax": 3,
      "starThresholds": [
        34454,
        49220,
        63986
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 407,
    "stageCode": "21-7",
    "title": "Stage 407: Yangtze River Delta (Part 7)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 49340,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_4",
      "kiwi_var_4",
      "coconut_var_4",
      "avocado_var_4",
      "pomegranate_var_4",
      "papaya_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 864,
      "starsMax": 3,
      "starThresholds": [
        34538,
        49340,
        64142
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 408,
    "stageCode": "21-8",
    "title": "Stage 408: Yangtze River Delta (Part 8)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 49460,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_4",
      "pomegranate_var_4",
      "papaya_var_4",
      "fig_var_4",
      "blueberry_var_4",
      "raspberry_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 866,
      "starsMax": 3,
      "starThresholds": [
        34622,
        49460,
        64298
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 409,
    "stageCode": "21-9",
    "title": "Stage 409: Yangtze River Delta (Part 9)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 49580,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_4",
      "blueberry_var_4",
      "raspberry_var_4",
      "durian_var_4",
      "mangosteen_var_4",
      "rambutan_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 868,
      "starsMax": 3,
      "starThresholds": [
        34706,
        49580,
        64454
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 410,
    "stageCode": "21-10",
    "title": "Stage 410: Yangtze River Delta (Part 10)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 49700,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "durian_var_4",
      "mangosteen_var_4",
      "rambutan_var_4",
      "lychee_var_4",
      "starfruit_var_4",
      "jackfruit_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 870,
      "starsMax": 3,
      "starThresholds": [
        34790,
        49700,
        64610
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 411,
    "stageCode": "21-11",
    "title": "Stage 411: Yangtze River Delta (Part 11)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 49820,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_4",
      "starfruit_var_4",
      "jackfruit_var_4",
      "buddhas_hand_var_4",
      "miracle_fruit_var_4",
      "black_sapote_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 872,
      "starsMax": 3,
      "starThresholds": [
        34874,
        49820,
        64766
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 412,
    "stageCode": "21-12",
    "title": "Stage 412: Yangtze River Delta (Part 12)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 49940,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_4",
      "miracle_fruit_var_4",
      "black_sapote_var_4",
      "jabuticaba_var_4",
      "apple_var_5",
      "banana_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 874,
      "starsMax": 3,
      "starThresholds": [
        34958,
        49940,
        64922
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 413,
    "stageCode": "21-13",
    "title": "Stage 413: Yangtze River Delta (Part 13)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 50060,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_4",
      "apple_var_5",
      "banana_var_5",
      "orange_var_5",
      "strawberry_var_5",
      "watermelon_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 876,
      "starsMax": 3,
      "starThresholds": [
        35042,
        50060,
        65078
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 414,
    "stageCode": "21-14",
    "title": "Stage 414: Yangtze River Delta (Part 14)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 50180,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_5",
      "strawberry_var_5",
      "watermelon_var_5",
      "grape_var_5",
      "pineapple_var_5",
      "mango_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 878,
      "starsMax": 3,
      "starThresholds": [
        35126,
        50180,
        65234
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 415,
    "stageCode": "21-15",
    "title": "Stage 415: Yangtze River Delta (Part 15)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 50300,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_5",
      "pineapple_var_5",
      "mango_var_5",
      "lemon_var_5",
      "cherry_var_5",
      "peach_var_5"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 880,
      "starsMax": 3,
      "starThresholds": [
        35210,
        50300,
        65390
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 416,
    "stageCode": "21-16",
    "title": "Stage 416: Yangtze River Delta (Part 16)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 50420,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_5",
      "cherry_var_5",
      "peach_var_5",
      "pear_var_5",
      "kiwi_var_5",
      "coconut_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 882,
      "starsMax": 3,
      "starThresholds": [
        35294,
        50420,
        65546
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 417,
    "stageCode": "21-17",
    "title": "Stage 417: Yangtze River Delta (Part 17)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 50540,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_5",
      "kiwi_var_5",
      "coconut_var_5",
      "avocado_var_5",
      "pomegranate_var_5",
      "papaya_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 884,
      "starsMax": 3,
      "starThresholds": [
        35378,
        50540,
        65702
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 418,
    "stageCode": "21-18",
    "title": "Stage 418: Yangtze River Delta (Part 18)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 50660,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_5",
      "pomegranate_var_5",
      "papaya_var_5",
      "fig_var_5",
      "blueberry_var_5",
      "raspberry_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 886,
      "starsMax": 3,
      "starThresholds": [
        35462,
        50660,
        65858
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 419,
    "stageCode": "21-19",
    "title": "Stage 419: Yangtze River Delta (Part 19)",
    "region": "Yangtze River Delta",
    "isBossStage": false,
    "targetScore": 50780,
    "timeLimitSeconds": 43,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_5",
      "blueberry_var_5",
      "raspberry_var_5",
      "durian_var_5",
      "mangosteen_var_5",
      "rambutan_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 888,
      "starsMax": 3,
      "starThresholds": [
        35546,
        50780,
        66014
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 43 seconds."
  },
  {
    "levelNumber": 420,
    "stageCode": "21-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Yangtze River Delta",
    "region": "Yangtze River Delta",
    "isBossStage": true,
    "targetScore": 50900,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian_var_5",
      "mangosteen_var_5",
      "rambutan_var_5",
      "lychee_var_5",
      "starfruit_var_5",
      "jackfruit_var_5"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        35630,
        50900,
        66170
      ]
    },
    "briefing": "Welcome to Yangtze River Delta. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 421,
    "stageCode": "22-1",
    "title": "Stage 421: Mekong Basin (Part 1)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 51020,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_5",
      "starfruit_var_5",
      "jackfruit_var_5",
      "buddhas_hand_var_5",
      "miracle_fruit_var_5",
      "black_sapote_var_5"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 892,
      "starsMax": 3,
      "starThresholds": [
        35714,
        51020,
        66326
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 422,
    "stageCode": "22-2",
    "title": "Stage 422: Mekong Basin (Part 2)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 51140,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_5",
      "miracle_fruit_var_5",
      "black_sapote_var_5",
      "jabuticaba_var_5",
      "apple_var_6",
      "banana_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 894,
      "starsMax": 3,
      "starThresholds": [
        35798,
        51140,
        66482
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 423,
    "stageCode": "22-3",
    "title": "Stage 423: Mekong Basin (Part 3)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 51260,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_5",
      "apple_var_6",
      "banana_var_6",
      "orange_var_6",
      "strawberry_var_6",
      "watermelon_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 896,
      "starsMax": 3,
      "starThresholds": [
        35882,
        51260,
        66638
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 424,
    "stageCode": "22-4",
    "title": "Stage 424: Mekong Basin (Part 4)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 51380,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_6",
      "strawberry_var_6",
      "watermelon_var_6",
      "grape_var_6",
      "pineapple_var_6",
      "mango_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 898,
      "starsMax": 3,
      "starThresholds": [
        35966,
        51380,
        66794
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 425,
    "stageCode": "22-5",
    "title": "Stage 425: Mekong Basin (Part 5)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 51500,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_6",
      "pineapple_var_6",
      "mango_var_6",
      "lemon_var_6",
      "cherry_var_6",
      "peach_var_6"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 900,
      "starsMax": 3,
      "starThresholds": [
        36050,
        51500,
        66950
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 426,
    "stageCode": "22-6",
    "title": "Stage 426: Mekong Basin (Part 6)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 51620,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_6",
      "cherry_var_6",
      "peach_var_6",
      "pear_var_6",
      "kiwi_var_6",
      "coconut_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 902,
      "starsMax": 3,
      "starThresholds": [
        36134,
        51620,
        67106
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 427,
    "stageCode": "22-7",
    "title": "Stage 427: Mekong Basin (Part 7)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 51740,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_6",
      "kiwi_var_6",
      "coconut_var_6",
      "avocado_var_6",
      "pomegranate_var_6",
      "papaya_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 904,
      "starsMax": 3,
      "starThresholds": [
        36218,
        51740,
        67262
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 428,
    "stageCode": "22-8",
    "title": "Stage 428: Mekong Basin (Part 8)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 51860,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_6",
      "pomegranate_var_6",
      "papaya_var_6",
      "fig_var_6",
      "blueberry_var_6",
      "raspberry_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 906,
      "starsMax": 3,
      "starThresholds": [
        36302,
        51860,
        67418
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 429,
    "stageCode": "22-9",
    "title": "Stage 429: Mekong Basin (Part 9)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 51980,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_6",
      "blueberry_var_6",
      "raspberry_var_6",
      "durian_var_6",
      "mangosteen_var_6",
      "rambutan_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 908,
      "starsMax": 3,
      "starThresholds": [
        36386,
        51980,
        67574
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 430,
    "stageCode": "22-10",
    "title": "Stage 430: Mekong Basin (Part 10)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 52100,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "durian_var_6",
      "mangosteen_var_6",
      "rambutan_var_6",
      "lychee_var_6",
      "starfruit_var_6",
      "jackfruit_var_6"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 910,
      "starsMax": 3,
      "starThresholds": [
        36470,
        52100,
        67730
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 431,
    "stageCode": "22-11",
    "title": "Stage 431: Mekong Basin (Part 11)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 52220,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_6",
      "starfruit_var_6",
      "jackfruit_var_6",
      "buddhas_hand_var_6",
      "miracle_fruit_var_6",
      "black_sapote_var_6"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 912,
      "starsMax": 3,
      "starThresholds": [
        36554,
        52220,
        67886
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 432,
    "stageCode": "22-12",
    "title": "Stage 432: Mekong Basin (Part 12)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 52340,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_6",
      "miracle_fruit_var_6",
      "black_sapote_var_6",
      "jabuticaba_var_6",
      "apple_var_7",
      "banana_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 914,
      "starsMax": 3,
      "starThresholds": [
        36638,
        52340,
        68042
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 433,
    "stageCode": "22-13",
    "title": "Stage 433: Mekong Basin (Part 13)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 52460,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_6",
      "apple_var_7",
      "banana_var_7",
      "orange_var_7",
      "strawberry_var_7",
      "watermelon_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 916,
      "starsMax": 3,
      "starThresholds": [
        36722,
        52460,
        68198
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 434,
    "stageCode": "22-14",
    "title": "Stage 434: Mekong Basin (Part 14)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 52580,
    "timeLimitSeconds": 42,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_7",
      "strawberry_var_7",
      "watermelon_var_7",
      "grape_var_7",
      "pineapple_var_7",
      "mango_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 918,
      "starsMax": 3,
      "starThresholds": [
        36806,
        52580,
        68354
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 42 seconds."
  },
  {
    "levelNumber": 435,
    "stageCode": "22-15",
    "title": "Stage 435: Mekong Basin (Part 15)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 52700,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_7",
      "pineapple_var_7",
      "mango_var_7",
      "lemon_var_7",
      "cherry_var_7",
      "peach_var_7"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 920,
      "starsMax": 3,
      "starThresholds": [
        36890,
        52700,
        68510
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 436,
    "stageCode": "22-16",
    "title": "Stage 436: Mekong Basin (Part 16)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 52820,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_7",
      "cherry_var_7",
      "peach_var_7",
      "pear_var_7",
      "kiwi_var_7",
      "coconut_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 922,
      "starsMax": 3,
      "starThresholds": [
        36974,
        52820,
        68666
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 437,
    "stageCode": "22-17",
    "title": "Stage 437: Mekong Basin (Part 17)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 52940,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_7",
      "kiwi_var_7",
      "coconut_var_7",
      "avocado_var_7",
      "pomegranate_var_7",
      "papaya_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 924,
      "starsMax": 3,
      "starThresholds": [
        37058,
        52940,
        68822
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 438,
    "stageCode": "22-18",
    "title": "Stage 438: Mekong Basin (Part 18)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 53060,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_7",
      "pomegranate_var_7",
      "papaya_var_7",
      "fig_var_7",
      "blueberry_var_7",
      "raspberry_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 926,
      "starsMax": 3,
      "starThresholds": [
        37142,
        53060,
        68978
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 439,
    "stageCode": "22-19",
    "title": "Stage 439: Mekong Basin (Part 19)",
    "region": "Mekong Basin",
    "isBossStage": false,
    "targetScore": 53180,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_7",
      "blueberry_var_7",
      "raspberry_var_7",
      "durian_var_7",
      "mangosteen_var_7",
      "rambutan_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 928,
      "starsMax": 3,
      "starThresholds": [
        37226,
        53180,
        69134
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 440,
    "stageCode": "22-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Mekong Basin",
    "region": "Mekong Basin",
    "isBossStage": true,
    "targetScore": 53300,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian_var_7",
      "mangosteen_var_7",
      "rambutan_var_7",
      "lychee_var_7",
      "starfruit_var_7",
      "jackfruit_var_7"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        37310,
        53300,
        69290
      ]
    },
    "briefing": "Welcome to Mekong Basin. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 441,
    "stageCode": "23-1",
    "title": "Stage 441: Nile Fertile Crescent (Part 1)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 53420,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_7",
      "starfruit_var_7",
      "jackfruit_var_7",
      "buddhas_hand_var_7",
      "miracle_fruit_var_7",
      "black_sapote_var_7"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 932,
      "starsMax": 3,
      "starThresholds": [
        37394,
        53420,
        69446
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 442,
    "stageCode": "23-2",
    "title": "Stage 442: Nile Fertile Crescent (Part 2)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 53540,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_7",
      "miracle_fruit_var_7",
      "black_sapote_var_7",
      "jabuticaba_var_7",
      "apple_var_8",
      "banana_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 934,
      "starsMax": 3,
      "starThresholds": [
        37478,
        53540,
        69602
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 443,
    "stageCode": "23-3",
    "title": "Stage 443: Nile Fertile Crescent (Part 3)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 53660,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_7",
      "apple_var_8",
      "banana_var_8",
      "orange_var_8",
      "strawberry_var_8",
      "watermelon_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 936,
      "starsMax": 3,
      "starThresholds": [
        37562,
        53660,
        69758
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 444,
    "stageCode": "23-4",
    "title": "Stage 444: Nile Fertile Crescent (Part 4)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 53780,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_8",
      "strawberry_var_8",
      "watermelon_var_8",
      "grape_var_8",
      "pineapple_var_8",
      "mango_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 938,
      "starsMax": 3,
      "starThresholds": [
        37646,
        53780,
        69914
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 445,
    "stageCode": "23-5",
    "title": "Stage 445: Nile Fertile Crescent (Part 5)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 53900,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_8",
      "pineapple_var_8",
      "mango_var_8",
      "lemon_var_8",
      "cherry_var_8",
      "peach_var_8"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 940,
      "starsMax": 3,
      "starThresholds": [
        37730,
        53900,
        70070
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 446,
    "stageCode": "23-6",
    "title": "Stage 446: Nile Fertile Crescent (Part 6)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 54020,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_8",
      "cherry_var_8",
      "peach_var_8",
      "pear_var_8",
      "kiwi_var_8",
      "coconut_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 942,
      "starsMax": 3,
      "starThresholds": [
        37814,
        54020,
        70226
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 447,
    "stageCode": "23-7",
    "title": "Stage 447: Nile Fertile Crescent (Part 7)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 54140,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_8",
      "kiwi_var_8",
      "coconut_var_8",
      "avocado_var_8",
      "pomegranate_var_8",
      "papaya_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 944,
      "starsMax": 3,
      "starThresholds": [
        37898,
        54140,
        70382
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 448,
    "stageCode": "23-8",
    "title": "Stage 448: Nile Fertile Crescent (Part 8)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 54260,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_8",
      "pomegranate_var_8",
      "papaya_var_8",
      "fig_var_8",
      "blueberry_var_8",
      "raspberry_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 946,
      "starsMax": 3,
      "starThresholds": [
        37982,
        54260,
        70538
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 449,
    "stageCode": "23-9",
    "title": "Stage 449: Nile Fertile Crescent (Part 9)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 54380,
    "timeLimitSeconds": 41,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_8",
      "blueberry_var_8",
      "raspberry_var_8",
      "durian_var_8",
      "mangosteen_var_8",
      "rambutan_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 948,
      "starsMax": 3,
      "starThresholds": [
        38066,
        54380,
        70694
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 41 seconds."
  },
  {
    "levelNumber": 450,
    "stageCode": "23-10",
    "title": "Stage 450: Nile Fertile Crescent (Part 10)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 54500,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "durian_var_8",
      "mangosteen_var_8",
      "rambutan_var_8",
      "lychee_var_8",
      "starfruit_var_8",
      "jackfruit_var_8"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 950,
      "starsMax": 3,
      "starThresholds": [
        38150,
        54500,
        70850
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 451,
    "stageCode": "23-11",
    "title": "Stage 451: Nile Fertile Crescent (Part 11)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 54620,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_8",
      "starfruit_var_8",
      "jackfruit_var_8",
      "buddhas_hand_var_8",
      "miracle_fruit_var_8",
      "black_sapote_var_8"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 952,
      "starsMax": 3,
      "starThresholds": [
        38234,
        54620,
        71006
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 452,
    "stageCode": "23-12",
    "title": "Stage 452: Nile Fertile Crescent (Part 12)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 54740,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_8",
      "miracle_fruit_var_8",
      "black_sapote_var_8",
      "jabuticaba_var_8",
      "apple_var_9",
      "banana_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 954,
      "starsMax": 3,
      "starThresholds": [
        38318,
        54740,
        71162
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 453,
    "stageCode": "23-13",
    "title": "Stage 453: Nile Fertile Crescent (Part 13)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 54860,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_8",
      "apple_var_9",
      "banana_var_9",
      "orange_var_9",
      "strawberry_var_9",
      "watermelon_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 956,
      "starsMax": 3,
      "starThresholds": [
        38402,
        54860,
        71318
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 454,
    "stageCode": "23-14",
    "title": "Stage 454: Nile Fertile Crescent (Part 14)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 54980,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_9",
      "strawberry_var_9",
      "watermelon_var_9",
      "grape_var_9",
      "pineapple_var_9",
      "mango_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 958,
      "starsMax": 3,
      "starThresholds": [
        38486,
        54980,
        71474
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 455,
    "stageCode": "23-15",
    "title": "Stage 455: Nile Fertile Crescent (Part 15)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 55100,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_9",
      "pineapple_var_9",
      "mango_var_9",
      "lemon_var_9",
      "cherry_var_9",
      "peach_var_9"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 960,
      "starsMax": 3,
      "starThresholds": [
        38570,
        55100,
        71630
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 456,
    "stageCode": "23-16",
    "title": "Stage 456: Nile Fertile Crescent (Part 16)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 55220,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_9",
      "cherry_var_9",
      "peach_var_9",
      "pear_var_9",
      "kiwi_var_9",
      "coconut_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 962,
      "starsMax": 3,
      "starThresholds": [
        38654,
        55220,
        71786
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 457,
    "stageCode": "23-17",
    "title": "Stage 457: Nile Fertile Crescent (Part 17)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 55340,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "pear_var_9",
      "kiwi_var_9",
      "coconut_var_9",
      "avocado_var_9",
      "pomegranate_var_9",
      "papaya_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 964,
      "starsMax": 3,
      "starThresholds": [
        38738,
        55340,
        71942
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 458,
    "stageCode": "23-18",
    "title": "Stage 458: Nile Fertile Crescent (Part 18)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 55460,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "avocado_var_9",
      "pomegranate_var_9",
      "papaya_var_9",
      "fig_var_9",
      "blueberry_var_9",
      "raspberry_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 966,
      "starsMax": 3,
      "starThresholds": [
        38822,
        55460,
        72098
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 459,
    "stageCode": "23-19",
    "title": "Stage 459: Nile Fertile Crescent (Part 19)",
    "region": "Nile Fertile Crescent",
    "isBossStage": false,
    "targetScore": 55580,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "fig_var_9",
      "blueberry_var_9",
      "raspberry_var_9",
      "durian_var_9",
      "mangosteen_var_9",
      "rambutan_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 968,
      "starsMax": 3,
      "starThresholds": [
        38906,
        55580,
        72254
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 460,
    "stageCode": "23-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Nile Fertile Crescent",
    "region": "Nile Fertile Crescent",
    "isBossStage": true,
    "targetScore": 55700,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "durian_var_9",
      "mangosteen_var_9",
      "rambutan_var_9",
      "lychee_var_9",
      "starfruit_var_9",
      "jackfruit_var_9"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        38990,
        55700,
        72410
      ]
    },
    "briefing": "Welcome to Nile Fertile Crescent. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 461,
    "stageCode": "24-1",
    "title": "Stage 461: Baltic Amber Orchards (Part 1)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 55820,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lychee_var_9",
      "starfruit_var_9",
      "jackfruit_var_9",
      "buddhas_hand_var_9",
      "miracle_fruit_var_9",
      "black_sapote_var_9"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 972,
      "starsMax": 3,
      "starThresholds": [
        39074,
        55820,
        72566
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 462,
    "stageCode": "24-2",
    "title": "Stage 462: Baltic Amber Orchards (Part 2)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 55940,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "buddhas_hand_var_9",
      "miracle_fruit_var_9",
      "black_sapote_var_9",
      "jabuticaba_var_9",
      "apple_var_10",
      "banana_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 974,
      "starsMax": 3,
      "starThresholds": [
        39158,
        55940,
        72722
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 463,
    "stageCode": "24-3",
    "title": "Stage 463: Baltic Amber Orchards (Part 3)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 56060,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jabuticaba_var_9",
      "apple_var_10",
      "banana_var_10",
      "orange_var_10",
      "strawberry_var_10",
      "watermelon_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 976,
      "starsMax": 3,
      "starThresholds": [
        39242,
        56060,
        72878
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 464,
    "stageCode": "24-4",
    "title": "Stage 464: Baltic Amber Orchards (Part 4)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 56180,
    "timeLimitSeconds": 40,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "orange_var_10",
      "strawberry_var_10",
      "watermelon_var_10",
      "grape_var_10",
      "pineapple_var_10",
      "mango_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 978,
      "starsMax": 3,
      "starThresholds": [
        39326,
        56180,
        73034
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 40 seconds."
  },
  {
    "levelNumber": 465,
    "stageCode": "24-5",
    "title": "Stage 465: Baltic Amber Orchards (Part 5)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 56300,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "grape_var_10",
      "pineapple_var_10",
      "mango_var_10",
      "lemon_var_10",
      "cherry_var_10",
      "peach_var_10"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 980,
      "starsMax": 3,
      "starThresholds": [
        39410,
        56300,
        73190
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 466,
    "stageCode": "24-6",
    "title": "Stage 466: Baltic Amber Orchards (Part 6)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 56420,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "lemon_var_10",
      "cherry_var_10",
      "peach_var_10",
      "pear_var_10",
      "kiwi_var_10",
      "coconut_var_10"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 982,
      "starsMax": 3,
      "starThresholds": [
        39494,
        56420,
        73346
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 467,
    "stageCode": "24-7",
    "title": "Stage 467: Baltic Amber Orchards (Part 7)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 56540,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana",
      "orange",
      "strawberry",
      "watermelon",
      "grape",
      "pineapple"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 984,
      "starsMax": 3,
      "starThresholds": [
        39578,
        56540,
        73502
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 468,
    "stageCode": "24-8",
    "title": "Stage 468: Baltic Amber Orchards (Part 8)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 56660,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon",
      "grape",
      "pineapple",
      "mango",
      "lemon",
      "cherry"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 986,
      "starsMax": 3,
      "starThresholds": [
        39662,
        56660,
        73658
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 469,
    "stageCode": "24-9",
    "title": "Stage 469: Baltic Amber Orchards (Part 9)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 56780,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango",
      "lemon",
      "cherry",
      "peach",
      "pear",
      "kiwi"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 988,
      "starsMax": 3,
      "starThresholds": [
        39746,
        56780,
        73814
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 470,
    "stageCode": "24-10",
    "title": "Stage 470: Baltic Amber Orchards (Part 10)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 56900,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "peach",
      "pear",
      "kiwi",
      "coconut",
      "avocado",
      "pomegranate"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 990,
      "starsMax": 3,
      "starThresholds": [
        39830,
        56900,
        73970
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 471,
    "stageCode": "24-11",
    "title": "Stage 471: Baltic Amber Orchards (Part 11)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 57020,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut",
      "avocado",
      "pomegranate",
      "papaya",
      "fig",
      "blueberry"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 992,
      "starsMax": 3,
      "starThresholds": [
        39914,
        57020,
        74126
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 472,
    "stageCode": "24-12",
    "title": "Stage 472: Baltic Amber Orchards (Part 12)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 57140,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya",
      "fig",
      "blueberry",
      "raspberry",
      "durian",
      "mangosteen"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 994,
      "starsMax": 3,
      "starThresholds": [
        39998,
        57140,
        74282
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 473,
    "stageCode": "24-13",
    "title": "Stage 473: Baltic Amber Orchards (Part 13)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 57260,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry",
      "durian",
      "mangosteen",
      "rambutan",
      "lychee",
      "starfruit"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 996,
      "starsMax": 3,
      "starThresholds": [
        40082,
        57260,
        74438
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 474,
    "stageCode": "24-14",
    "title": "Stage 474: Baltic Amber Orchards (Part 14)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 57380,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan",
      "lychee",
      "starfruit",
      "jackfruit",
      "buddhas_hand",
      "miracle_fruit"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 998,
      "starsMax": 3,
      "starThresholds": [
        40166,
        57380,
        74594
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 475,
    "stageCode": "24-15",
    "title": "Stage 475: Baltic Amber Orchards (Part 15)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 57500,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit",
      "buddhas_hand",
      "miracle_fruit",
      "black_sapote",
      "jabuticaba",
      "apple_var_2"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 1000,
      "starsMax": 3,
      "starThresholds": [
        40250,
        57500,
        74750
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 476,
    "stageCode": "24-16",
    "title": "Stage 476: Baltic Amber Orchards (Part 16)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 57620,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote",
      "jabuticaba",
      "apple_var_2",
      "banana_var_2",
      "orange_var_2",
      "strawberry_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1002,
      "starsMax": 3,
      "starThresholds": [
        40334,
        57620,
        74906
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 477,
    "stageCode": "24-17",
    "title": "Stage 477: Baltic Amber Orchards (Part 17)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 57740,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_2",
      "orange_var_2",
      "strawberry_var_2",
      "watermelon_var_2",
      "grape_var_2",
      "pineapple_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1004,
      "starsMax": 3,
      "starThresholds": [
        40418,
        57740,
        75062
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 478,
    "stageCode": "24-18",
    "title": "Stage 478: Baltic Amber Orchards (Part 18)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 57860,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_2",
      "grape_var_2",
      "pineapple_var_2",
      "mango_var_2",
      "lemon_var_2",
      "cherry_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1006,
      "starsMax": 3,
      "starThresholds": [
        40502,
        57860,
        75218
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 479,
    "stageCode": "24-19",
    "title": "Stage 479: Baltic Amber Orchards (Part 19)",
    "region": "Baltic Amber Orchards",
    "isBossStage": false,
    "targetScore": 57980,
    "timeLimitSeconds": 39,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_2",
      "lemon_var_2",
      "cherry_var_2",
      "peach_var_2",
      "pear_var_2",
      "kiwi_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1008,
      "starsMax": 3,
      "starThresholds": [
        40586,
        57980,
        75374
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 39 seconds."
  },
  {
    "levelNumber": 480,
    "stageCode": "24-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Baltic Amber Orchards",
    "region": "Baltic Amber Orchards",
    "isBossStage": true,
    "targetScore": 58100,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "peach_var_2",
      "pear_var_2",
      "kiwi_var_2",
      "coconut_var_2",
      "avocado_var_2",
      "pomegranate_var_2"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        40670,
        58100,
        75530
      ]
    },
    "briefing": "Welcome to Baltic Amber Orchards. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  },
  {
    "levelNumber": 481,
    "stageCode": "25-1",
    "title": "Stage 481: Great Rift Valley (Part 1)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 58220,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_2",
      "avocado_var_2",
      "pomegranate_var_2",
      "papaya_var_2",
      "fig_var_2",
      "blueberry_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1012,
      "starsMax": 3,
      "starThresholds": [
        40754,
        58220,
        75686
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 482,
    "stageCode": "25-2",
    "title": "Stage 482: Great Rift Valley (Part 2)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 58340,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_2",
      "fig_var_2",
      "blueberry_var_2",
      "raspberry_var_2",
      "durian_var_2",
      "mangosteen_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1014,
      "starsMax": 3,
      "starThresholds": [
        40838,
        58340,
        75842
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 483,
    "stageCode": "25-3",
    "title": "Stage 483: Great Rift Valley (Part 3)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 58460,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_2",
      "durian_var_2",
      "mangosteen_var_2",
      "rambutan_var_2",
      "lychee_var_2",
      "starfruit_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1016,
      "starsMax": 3,
      "starThresholds": [
        40922,
        58460,
        75998
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 484,
    "stageCode": "25-4",
    "title": "Stage 484: Great Rift Valley (Part 4)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 58580,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_2",
      "lychee_var_2",
      "starfruit_var_2",
      "jackfruit_var_2",
      "buddhas_hand_var_2",
      "miracle_fruit_var_2"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1018,
      "starsMax": 3,
      "starThresholds": [
        41006,
        58580,
        76154
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 485,
    "stageCode": "25-5",
    "title": "Stage 485: Great Rift Valley (Part 5)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 58700,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_2",
      "buddhas_hand_var_2",
      "miracle_fruit_var_2",
      "black_sapote_var_2",
      "jabuticaba_var_2",
      "apple_var_3"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 1020,
      "starsMax": 3,
      "starThresholds": [
        41090,
        58700,
        76310
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 486,
    "stageCode": "25-6",
    "title": "Stage 486: Great Rift Valley (Part 6)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 58820,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_2",
      "jabuticaba_var_2",
      "apple_var_3",
      "banana_var_3",
      "orange_var_3",
      "strawberry_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1022,
      "starsMax": 3,
      "starThresholds": [
        41174,
        58820,
        76466
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 487,
    "stageCode": "25-7",
    "title": "Stage 487: Great Rift Valley (Part 7)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 58940,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_3",
      "orange_var_3",
      "strawberry_var_3",
      "watermelon_var_3",
      "grape_var_3",
      "pineapple_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1024,
      "starsMax": 3,
      "starThresholds": [
        41258,
        58940,
        76622
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 488,
    "stageCode": "25-8",
    "title": "Stage 488: Great Rift Valley (Part 8)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 59060,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_3",
      "grape_var_3",
      "pineapple_var_3",
      "mango_var_3",
      "lemon_var_3",
      "cherry_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1026,
      "starsMax": 3,
      "starThresholds": [
        41342,
        59060,
        76778
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 489,
    "stageCode": "25-9",
    "title": "Stage 489: Great Rift Valley (Part 9)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 59180,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_3",
      "lemon_var_3",
      "cherry_var_3",
      "peach_var_3",
      "pear_var_3",
      "kiwi_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1028,
      "starsMax": 3,
      "starThresholds": [
        41426,
        59180,
        76934
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 490,
    "stageCode": "25-10",
    "title": "Stage 490: Great Rift Valley (Part 10)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 59300,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "peach_var_3",
      "pear_var_3",
      "kiwi_var_3",
      "coconut_var_3",
      "avocado_var_3",
      "pomegranate_var_3"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 1030,
      "starsMax": 3,
      "starThresholds": [
        41510,
        59300,
        77090
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 491,
    "stageCode": "25-11",
    "title": "Stage 491: Great Rift Valley (Part 11)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 59420,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "coconut_var_3",
      "avocado_var_3",
      "pomegranate_var_3",
      "papaya_var_3",
      "fig_var_3",
      "blueberry_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1032,
      "starsMax": 3,
      "starThresholds": [
        41594,
        59420,
        77246
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 492,
    "stageCode": "25-12",
    "title": "Stage 492: Great Rift Valley (Part 12)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 59540,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "papaya_var_3",
      "fig_var_3",
      "blueberry_var_3",
      "raspberry_var_3",
      "durian_var_3",
      "mangosteen_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1034,
      "starsMax": 3,
      "starThresholds": [
        41678,
        59540,
        77402
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 493,
    "stageCode": "25-13",
    "title": "Stage 493: Great Rift Valley (Part 13)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 59660,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "raspberry_var_3",
      "durian_var_3",
      "mangosteen_var_3",
      "rambutan_var_3",
      "lychee_var_3",
      "starfruit_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1036,
      "starsMax": 3,
      "starThresholds": [
        41762,
        59660,
        77558
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 494,
    "stageCode": "25-14",
    "title": "Stage 494: Great Rift Valley (Part 14)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 59780,
    "timeLimitSeconds": 38,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "rambutan_var_3",
      "lychee_var_3",
      "starfruit_var_3",
      "jackfruit_var_3",
      "buddhas_hand_var_3",
      "miracle_fruit_var_3"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1038,
      "starsMax": 3,
      "starThresholds": [
        41846,
        59780,
        77714
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 38 seconds."
  },
  {
    "levelNumber": 495,
    "stageCode": "25-15",
    "title": "Stage 495: Great Rift Valley (Part 15)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 59900,
    "timeLimitSeconds": 37,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "jackfruit_var_3",
      "buddhas_hand_var_3",
      "miracle_fruit_var_3",
      "black_sapote_var_3",
      "jabuticaba_var_3",
      "apple_var_4"
    ],
    "modifier": "Word Scramble Tiles",
    "rewards": {
      "coins": 1040,
      "starsMax": 3,
      "starThresholds": [
        41930,
        59900,
        77870
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 37 seconds."
  },
  {
    "levelNumber": 496,
    "stageCode": "25-16",
    "title": "Stage 496: Great Rift Valley (Part 16)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 60020,
    "timeLimitSeconds": 37,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "black_sapote_var_3",
      "jabuticaba_var_3",
      "apple_var_4",
      "banana_var_4",
      "orange_var_4",
      "strawberry_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1042,
      "starsMax": 3,
      "starThresholds": [
        42014,
        60020,
        78026
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 37 seconds."
  },
  {
    "levelNumber": 497,
    "stageCode": "25-17",
    "title": "Stage 497: Great Rift Valley (Part 17)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 60140,
    "timeLimitSeconds": 37,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "banana_var_4",
      "orange_var_4",
      "strawberry_var_4",
      "watermelon_var_4",
      "grape_var_4",
      "pineapple_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1044,
      "starsMax": 3,
      "starThresholds": [
        42098,
        60140,
        78182
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 37 seconds."
  },
  {
    "levelNumber": 498,
    "stageCode": "25-18",
    "title": "Stage 498: Great Rift Valley (Part 18)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 60260,
    "timeLimitSeconds": 37,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "watermelon_var_4",
      "grape_var_4",
      "pineapple_var_4",
      "mango_var_4",
      "lemon_var_4",
      "cherry_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1046,
      "starsMax": 3,
      "starThresholds": [
        42182,
        60260,
        78338
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 37 seconds."
  },
  {
    "levelNumber": 499,
    "stageCode": "25-19",
    "title": "Stage 499: Great Rift Valley (Part 19)",
    "region": "Great Rift Valley",
    "isBossStage": false,
    "targetScore": 60380,
    "timeLimitSeconds": 37,
    "allowedErrors": 3,
    "fruitPoolIds": [
      "mango_var_4",
      "lemon_var_4",
      "cherry_var_4",
      "peach_var_4",
      "pear_var_4",
      "kiwi_var_4"
    ],
    "modifier": "Speed Boost x1.5",
    "rewards": {
      "coins": 1048,
      "starsMax": 3,
      "starThresholds": [
        42266,
        60380,
        78494
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 37 seconds."
  },
  {
    "levelNumber": 500,
    "stageCode": "25-20",
    "title": "⚔️ Boss Challenge: Grand Guardian of Great Rift Valley",
    "region": "Great Rift Valley",
    "isBossStage": true,
    "targetScore": 60500,
    "timeLimitSeconds": 45,
    "allowedErrors": 1,
    "fruitPoolIds": [
      "peach_var_4",
      "pear_var_4",
      "kiwi_var_4",
      "coconut_var_4",
      "avocado_var_4",
      "pomegranate_var_4"
    ],
    "modifier": "Silhouette Mystery + High Speed",
    "rewards": {
      "coins": 500,
      "starsMax": 3,
      "starThresholds": [
        42350,
        60500,
        78650
      ]
    },
    "briefing": "Welcome to Great Rift Valley. Complete the botanical challenge by correctly classifying species with high precision under 45 seconds."
  }
];

if (typeof window !== "undefined") {
  window.CAMPAIGN_STAGES = CAMPAIGN_STAGES;
}

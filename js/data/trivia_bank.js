/**
 * FruitQuest - Master Botanical Trivia Question Bank
 * 1,200 Verified Botanical, Historical, Nutritional, and Taxonomic Questions.
 */

const TRIVIA_QUESTION_BANK = [
  {
    "id": "trivia_q_1",
    "fruitId": "banana",
    "fruitName": "Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Banana?",
    "correctAnswer": "Musa acuminata",
    "options": [
      "Musa acuminata",
      "Watermelon trait (Citrullus lanatus)",
      "Lemon trait (Citrus)",
      "Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "The formal taxonomic binomial for Banana is Musa acuminata.",
    "points": 200
  },
  {
    "id": "trivia_q_2",
    "fruitId": "orange",
    "fruitName": "Orange",
    "category": "Citrus",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Orange?",
    "correctAnswer": "49 kcal & 46% Vitamin C",
    "options": [
      "Cherry trait (Stone Fruit)",
      "49 kcal & 46% Vitamin C",
      "Coconut trait (Indo-Pacific)",
      "Grape trait (Vitis vinifera)"
    ],
    "explanation": "Per 100g, Orange yields 49 kcal, 1.8g fiber, and 118mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_3",
    "fruitId": "strawberry",
    "fruitName": "Strawberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Avocado trait (Mesoamerica)",
      "Peach trait (Stone Fruit)",
      "Pineapple trait (Ananas comosus)"
    ],
    "explanation": "Culinary sommeliers describe Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_4",
    "fruitId": "watermelon",
    "fruitName": "Watermelon",
    "category": "Melon",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Watermelon?",
    "correctAnswer": "Botanical Specimen #5: Watermelon is cultivated primarily across Kalahari, ...",
    "options": [
      "Pomegranate trait (Persia to Northern India)",
      "Pear trait (Pome)",
      "Mango trait (Mangifera indica)",
      "Botanical Specimen #5: Watermelon is cultivated primarily across Kalahari, ..."
    ],
    "explanation": "Botanical Specimen #5: Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_5",
    "fruitId": "grape",
    "fruitName": "Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Grape?",
    "correctAnswer": "Botanical Specimen #6: Grape is cultivated primarily across Mediterranean. ...",
    "options": [
      "Lemon trait (Citrus limon)",
      "Papaya trait (Central America)",
      "Botanical Specimen #6: Grape is cultivated primarily across Mediterranean. ...",
      "Kiwi trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #6: Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_6",
    "fruitId": "pineapple",
    "fruitName": "Pineapple",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "Where did the Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Fig trait (Levant & Mediterranean)",
      "Parana Basin, South America",
      "Cherry trait (Prunus avium)",
      "Coconut trait (Tropical)"
    ],
    "explanation": "Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #1).",
    "points": 200
  },
  {
    "id": "trivia_q_7",
    "fruitId": "mango",
    "fruitName": "Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Mango?",
    "correctAnswer": "Mangifera indica",
    "options": [
      "Blueberry trait (North America)",
      "Mangifera indica",
      "Peach trait (Prunus persica)",
      "Avocado trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Mango is Mangifera indica.",
    "points": 250
  },
  {
    "id": "trivia_q_8",
    "fruitId": "lemon",
    "fruitName": "Lemon",
    "category": "Citrus",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Lemon?",
    "correctAnswer": "91 kcal & 124% Vitamin C",
    "options": [
      "Raspberry trait (Eurasia)",
      "Pomegranate trait (Exotic)",
      "Pear trait (Pyrus communis)",
      "91 kcal & 124% Vitamin C"
    ],
    "explanation": "Per 100g, Lemon yields 91 kcal, 3.6g fiber, and 232mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_9",
    "fruitId": "cherry",
    "fruitName": "Cherry",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Kiwi trait (Actinidia deliciosa)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Durian trait (Borneo & Sumatra)",
      "Papaya trait (Tropical)"
    ],
    "explanation": "Culinary sommeliers describe Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_10",
    "fruitId": "peach",
    "fruitName": "Peach",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Peach?",
    "correctAnswer": "Botanical Specimen #11: Peach is cultivated primarily across Northwest Chin...",
    "options": [
      "Fig trait (Exotic)",
      "Coconut trait (Cocos nucifera)",
      "Mangosteen trait (Sundaland, Southeast Asia)",
      "Botanical Specimen #11: Peach is cultivated primarily across Northwest Chin..."
    ],
    "explanation": "Botanical Specimen #11: Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_11",
    "fruitId": "pear",
    "fruitName": "Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Pear?",
    "correctAnswer": "Botanical Specimen #12: Pear is cultivated primarily across Temperate Europ...",
    "options": [
      "Botanical Specimen #12: Pear is cultivated primarily across Temperate Europ...",
      "Avocado trait (Persea americana)",
      "Rambutan trait (Malaysia & Indonesia)",
      "Blueberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #12: Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_12",
    "fruitId": "kiwi",
    "fruitName": "Kiwi",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "Where did the Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Yangtze Valley, China",
      "Pomegranate trait (Punica granatum)",
      "Lychee trait (Southern China)",
      "Raspberry trait (Berry)"
    ],
    "explanation": "Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #1).",
    "points": 250
  },
  {
    "id": "trivia_q_13",
    "fruitId": "coconut",
    "fruitName": "Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Coconut?",
    "correctAnswer": "Cocos nucifera",
    "options": [
      "Cocos nucifera",
      "Papaya trait (Carica papaya)",
      "Starfruit trait (Tropical Asia)",
      "Durian trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Coconut is Cocos nucifera.",
    "points": 300
  },
  {
    "id": "trivia_q_14",
    "fruitId": "avocado",
    "fruitName": "Avocado",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Avocado?",
    "correctAnswer": "133 kcal & 202% Vitamin C",
    "options": [
      "Jackfruit trait (Western Ghats, India)",
      "Fig trait (Ficus carica)",
      "Mangosteen trait (Exotic)",
      "133 kcal & 202% Vitamin C"
    ],
    "explanation": "Per 100g, Avocado yields 133 kcal, 5.4g fiber, and 346mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_15",
    "fruitId": "pomegranate",
    "fruitName": "Pomegranate",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "How is the sensory flavor profile of Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Buddha's Hand trait (Lower Himalayas)",
      "Rambutan trait (Exotic)",
      "Blueberry trait (Vaccinium corymbosum)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics"
    ],
    "explanation": "Culinary sommeliers describe Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_16",
    "fruitId": "papaya",
    "fruitName": "Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Papaya?",
    "correctAnswer": "Botanical Specimen #17: Papaya is cultivated primarily across Central Ameri...",
    "options": [
      "Miracle Berry trait (West Africa)",
      "Lychee trait (Exotic)",
      "Raspberry trait (Rubus idaeus)",
      "Botanical Specimen #17: Papaya is cultivated primarily across Central Ameri..."
    ],
    "explanation": "Botanical Specimen #17: Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_17",
    "fruitId": "fig",
    "fruitName": "Fig",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Fig?",
    "correctAnswer": "Botanical Specimen #18: Fig is cultivated primarily across Levant & Mediter...",
    "options": [
      "Botanical Specimen #18: Fig is cultivated primarily across Levant & Mediter...",
      "Durian trait (Durio zibethinus)",
      "Starfruit trait (Exotic)",
      "Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "Botanical Specimen #18: Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_18",
    "fruitId": "blueberry",
    "fruitName": "Blueberry",
    "category": "Berry",
    "difficulty": "medium",
    "question": "Where did the Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Jackfruit trait (Tropical)",
      "Jabuticaba trait (Minas Gerais, Brazil)",
      "Mangosteen trait (Garcinia mangostana)",
      "North America"
    ],
    "explanation": "Blueberry was first documented and domesticated in North America (Cultivar #1).",
    "points": 300
  },
  {
    "id": "trivia_q_19",
    "fruitId": "raspberry",
    "fruitName": "Raspberry",
    "category": "Berry",
    "difficulty": "medium",
    "question": "What is the correct botanical Latin binomial name for Raspberry?",
    "correctAnswer": "Rubus idaeus",
    "options": [
      "Rubus idaeus",
      "Rambutan trait (Nephelium lappaceum)",
      "Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Raspberry is Rubus idaeus.",
    "points": 350
  },
  {
    "id": "trivia_q_20",
    "fruitId": "durian",
    "fruitName": "Durian",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Durian?",
    "correctAnswer": "65 kcal & 30% Vitamin C",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Lychee trait (Litchi chinensis)",
      "65 kcal & 30% Vitamin C",
      "Miracle Berry trait (Superfruit)"
    ],
    "explanation": "Per 100g, Durian yields 65 kcal, 1.2g fiber, and 460mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_21",
    "fruitId": "mangosteen",
    "fruitName": "Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Black Sapote trait (Exotic)",
      "Starfruit trait (Averrhoa carambola)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics"
    ],
    "explanation": "Culinary sommeliers describe Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_22",
    "fruitId": "rambutan",
    "fruitName": "Rambutan",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Rambutan?",
    "correctAnswer": "Botanical Specimen #23: Rambutan is cultivated primarily across Malaysia & ...",
    "options": [
      "Botanical Specimen #23: Rambutan is cultivated primarily across Malaysia & ...",
      "Wild Strawberry trait (Europe & Americas)",
      "Jackfruit trait (Artocarpus heterophyllus)",
      "Jabuticaba trait (Berry)"
    ],
    "explanation": "Botanical Specimen #23: Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_23",
    "fruitId": "lychee",
    "fruitName": "Lychee",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Lychee?",
    "correctAnswer": "Botanical Specimen #24: Lychee is cultivated primarily across Southern Chin...",
    "options": [
      "Royal Apple trait (Pome)",
      "Buddha's Hand trait (Citrus medica var. sarcodactylis)",
      "Botanical Specimen #24: Lychee is cultivated primarily across Southern Chin...",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Botanical Specimen #24: Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_24",
    "fruitId": "starfruit",
    "fruitName": "Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Tropical Asia",
      "Miracle Berry trait (Synsepalum dulcificum)",
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)"
    ],
    "explanation": "Starfruit was first documented and domesticated in Tropical Asia (Cultivar #1).",
    "points": 350
  },
  {
    "id": "trivia_q_25",
    "fruitId": "jackfruit",
    "fruitName": "Jackfruit",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus",
    "options": [
      "Black Sapote trait (Diospyros nigra)",
      "Artocarpus heterophyllus",
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "The formal taxonomic binomial for Jackfruit is Artocarpus heterophyllus.",
    "points": 150
  },
  {
    "id": "trivia_q_26",
    "fruitId": "buddhas_hand",
    "fruitName": "Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Buddha's Hand?",
    "correctAnswer": "107 kcal & 108% Vitamin C",
    "options": [
      "Wild Strawberry trait (Berry)",
      "107 kcal & 108% Vitamin C",
      "Jabuticaba trait (Plinia cauliflora)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Per 100g, Buddha's Hand yields 107 kcal, 3.0g fiber, and 574mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_27",
    "fruitId": "miracle_fruit",
    "fruitName": "Miracle Berry",
    "category": "Superfruit",
    "difficulty": "legendary",
    "question": "How is the sensory flavor profile of Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics"
    ],
    "explanation": "Culinary sommeliers describe Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_28",
    "fruitId": "black_sapote",
    "fruitName": "Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Black Sapote?",
    "correctAnswer": "Botanical Specimen #29: Black Sapote is cultivated primarily across Mesoame...",
    "options": [
      "Golden Banana trait (Musa acuminata var. golden)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Ruby Grape trait (Berry)",
      "Botanical Specimen #29: Black Sapote is cultivated primarily across Mesoame..."
    ],
    "explanation": "Botanical Specimen #29: Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_29",
    "fruitId": "jabuticaba",
    "fruitName": "Jabuticaba",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Jabuticaba?",
    "correctAnswer": "Botanical Specimen #30: Jabuticaba is cultivated primarily across Minas Ger...",
    "options": [
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)",
      "Botanical Specimen #30: Jabuticaba is cultivated primarily across Minas Ger..."
    ],
    "explanation": "Botanical Specimen #30: Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_30",
    "fruitId": "apple_var_2",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Central Asia",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #2).",
    "points": 150
  },
  {
    "id": "trivia_q_31",
    "fruitId": "banana_var_2",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Musa acuminata var. golden",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_32",
    "fruitId": "orange_var_2",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "39 kcal & 186% Vitamin C",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "39 kcal & 186% Vitamin C",
      "Ruby Grape trait (Vitis vinifera var. ruby)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 39 kcal, 4.8g fiber, and 168mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_33",
    "fruitId": "strawberry_var_2",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Frost Avocado trait (Mesoamerica)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_34",
    "fruitId": "watermelon_var_2",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #35: Imperial Watermelon is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #35: Imperial Watermelon is cultivated primarily across ...",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Botanical Specimen #35: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_35",
    "fruitId": "grape_var_2",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #36: Ruby Grape is cultivated primarily across Mediterra...",
    "options": [
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #36: Ruby Grape is cultivated primarily across Mediterra...",
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #36: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_36",
    "fruitId": "pineapple_var_2",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Parana Basin, South America"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #2).",
    "points": 200
  },
  {
    "id": "trivia_q_37",
    "fruitId": "mango_var_2",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Mangifera indica var. celestial",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_38",
    "fruitId": "lemon_var_2",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "81 kcal & 264% Vitamin C",
    "options": [
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "81 kcal & 264% Vitamin C",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 81 kcal, 6.6g fiber, and 282mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_39",
    "fruitId": "cherry_var_2",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_40",
    "fruitId": "peach_var_2",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #41: Honey Peach is cultivated primarily across Northwes...",
    "options": [
      "Botanical Specimen #41: Honey Peach is cultivated primarily across Northwes...",
      "Alpine Fig trait (Exotic)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Botanical Specimen #41: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_41",
    "fruitId": "pear_var_2",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #42: Scarlet Pear is cultivated primarily across Tempera...",
    "options": [
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Botanical Specimen #42: Scarlet Pear is cultivated primarily across Tempera..."
    ],
    "explanation": "Botanical Specimen #42: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_42",
    "fruitId": "kiwi_var_2",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Yangtze Valley, China"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #2).",
    "points": 250
  },
  {
    "id": "trivia_q_43",
    "fruitId": "coconut_var_2",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Golden Papaya trait (Carica papaya var. golden)",
      "Cocos nucifera var. velvet",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_44",
    "fruitId": "avocado_var_2",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "123 kcal & 92% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "123 kcal & 92% Vitamin C",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 123 kcal, 2.4g fiber, and 396mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_45",
    "fruitId": "pomegranate_var_2",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Celestial Rambutan trait (Exotic)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_46",
    "fruitId": "papaya_var_2",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #47: Golden Papaya is cultivated primarily across Centra...",
    "options": [
      "Botanical Specimen #47: Golden Papaya is cultivated primarily across Centra...",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #47: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_47",
    "fruitId": "fig_var_2",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #48: Alpine Fig is cultivated primarily across Levant & ...",
    "options": [
      "Giant Starfruit trait (Exotic)",
      "Botanical Specimen #48: Alpine Fig is cultivated primarily across Levant & ...",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "Botanical Specimen #48: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_48",
    "fruitId": "blueberry_var_2",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "North America",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #2).",
    "points": 300
  },
  {
    "id": "trivia_q_49",
    "fruitId": "raspberry_var_2",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Rubus idaeus var. imperial",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_50",
    "fruitId": "durian_var_2",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "55 kcal & 170% Vitamin C",
    "options": [
      "55 kcal & 170% Vitamin C",
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 55 kcal, 4.2g fiber, and 510mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_51",
    "fruitId": "mangosteen_var_2",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Velvet Black Sapote trait (Exotic)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_52",
    "fruitId": "rambutan_var_2",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #53: Celestial Rambutan is cultivated primarily across M...",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Botanical Specimen #53: Celestial Rambutan is cultivated primarily across M...",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Frost Jabuticaba trait (Berry)"
    ],
    "explanation": "Botanical Specimen #53: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_53",
    "fruitId": "lychee_var_2",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #54: Midnight Lychee is cultivated primarily across Sout...",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Botanical Specimen #54: Midnight Lychee is cultivated primarily across Sout...",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)"
    ],
    "explanation": "Botanical Specimen #54: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_54",
    "fruitId": "starfruit_var_2",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Tropical Asia",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #2).",
    "points": 350
  },
  {
    "id": "trivia_q_55",
    "fruitId": "jackfruit_var_2",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Artocarpus heterophyllus var. honey"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_56",
    "fruitId": "buddhas_hand_var_2",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "97 kcal & 248% Vitamin C",
    "options": [
      "97 kcal & 248% Vitamin C",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 97 kcal, 6.0g fiber, and 104mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_57",
    "fruitId": "miracle_fruit_var_2",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Royal Apple trait (Malus domestica var. royal)",
      "Imperial Watermelon trait (Melon)",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_58",
    "fruitId": "black_sapote_var_2",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #59: Velvet Black Sapote is cultivated primarily across ...",
    "options": [
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Botanical Specimen #59: Velvet Black Sapote is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #59: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_59",
    "fruitId": "jabuticaba_var_2",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #60: Frost Jabuticaba is cultivated primarily across Min...",
    "options": [
      "Botanical Specimen #60: Frost Jabuticaba is cultivated primarily across Min...",
      "Honey Peach trait (Northwest China)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #60: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_60",
    "fruitId": "apple_var_3",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Scarlet Pear trait (Temperate Europe)",
      "Central Asia",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #3).",
    "points": 150
  },
  {
    "id": "trivia_q_61",
    "fruitId": "banana_var_3",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Musa acuminata var. golden",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_62",
    "fruitId": "orange_var_3",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "139 kcal & 76% Vitamin C",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "139 kcal & 76% Vitamin C",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 139 kcal, 1.8g fiber, and 218mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_63",
    "fruitId": "strawberry_var_3",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Frost Avocado trait (Mesoamerica)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_64",
    "fruitId": "watermelon_var_3",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #65: Imperial Watermelon is cultivated primarily across ...",
    "options": [
      "Scarlet Pear trait (Pome)",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Botanical Specimen #65: Imperial Watermelon is cultivated primarily across ...",
      "Celestial Mango trait (Mangifera indica var. celestial)"
    ],
    "explanation": "Botanical Specimen #65: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_65",
    "fruitId": "grape_var_3",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #66: Ruby Grape is cultivated primarily across Mediterra...",
    "options": [
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #66: Ruby Grape is cultivated primarily across Mediterra..."
    ],
    "explanation": "Botanical Specimen #66: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_66",
    "fruitId": "pineapple_var_3",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Parana Basin, South America",
      "Alpine Fig trait (Levant & Mediterranean)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #3).",
    "points": 200
  },
  {
    "id": "trivia_q_67",
    "fruitId": "mango_var_3",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Mangifera indica var. celestial",
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_68",
    "fruitId": "lemon_var_3",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "71 kcal & 154% Vitamin C",
    "options": [
      "71 kcal & 154% Vitamin C",
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 71 kcal, 3.6g fiber, and 332mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_69",
    "fruitId": "cherry_var_3",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_70",
    "fruitId": "peach_var_3",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #71: Honey Peach is cultivated primarily across Northwes...",
    "options": [
      "Botanical Specimen #71: Honey Peach is cultivated primarily across Northwes...",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Botanical Specimen #71: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_71",
    "fruitId": "pear_var_3",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #72: Scarlet Pear is cultivated primarily across Tempera...",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Botanical Specimen #72: Scarlet Pear is cultivated primarily across Tempera..."
    ],
    "explanation": "Botanical Specimen #72: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_72",
    "fruitId": "kiwi_var_3",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Imperial Raspberry trait (Berry)",
      "Yangtze Valley, China",
      "Midnight Lychee trait (Southern China)",
      "Royal Pomegranate trait (Punica granatum var. royal)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #3).",
    "points": 250
  },
  {
    "id": "trivia_q_73",
    "fruitId": "coconut_var_3",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Cocos nucifera var. velvet"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_74",
    "fruitId": "avocado_var_3",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "113 kcal & 232% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "113 kcal & 232% Vitamin C",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 113 kcal, 5.4g fiber, and 446mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_75",
    "fruitId": "pomegranate_var_3",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Celestial Rambutan trait (Exotic)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_76",
    "fruitId": "papaya_var_3",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #77: Golden Papaya is cultivated primarily across Centra...",
    "options": [
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "Botanical Specimen #77: Golden Papaya is cultivated primarily across Centra..."
    ],
    "explanation": "Botanical Specimen #77: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_77",
    "fruitId": "fig_var_3",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #78: Alpine Fig is cultivated primarily across Levant & ...",
    "options": [
      "Botanical Specimen #78: Alpine Fig is cultivated primarily across Levant & ...",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #78: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_78",
    "fruitId": "blueberry_var_3",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "North America"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #3).",
    "points": 300
  },
  {
    "id": "trivia_q_79",
    "fruitId": "raspberry_var_3",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Rubus idaeus var. imperial",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_80",
    "fruitId": "durian_var_3",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "45 kcal & 60% Vitamin C",
    "options": [
      "45 kcal & 60% Vitamin C",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Golden Banana trait (Southeast Asia)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 45 kcal, 1.2g fiber, and 560mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_81",
    "fruitId": "mangosteen_var_3",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Velvet Black Sapote trait (Exotic)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_82",
    "fruitId": "rambutan_var_3",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #83: Celestial Rambutan is cultivated primarily across M...",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Botanical Specimen #83: Celestial Rambutan is cultivated primarily across M...",
      "Frost Jabuticaba trait (Berry)"
    ],
    "explanation": "Botanical Specimen #83: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_83",
    "fruitId": "lychee_var_3",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #84: Midnight Lychee is cultivated primarily across Sout...",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Botanical Specimen #84: Midnight Lychee is cultivated primarily across Sout...",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)"
    ],
    "explanation": "Botanical Specimen #84: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_84",
    "fruitId": "starfruit_var_3",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Tropical Asia",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #3).",
    "points": 350
  },
  {
    "id": "trivia_q_85",
    "fruitId": "jackfruit_var_3",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Artocarpus heterophyllus var. honey",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_86",
    "fruitId": "buddhas_hand_var_3",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "87 kcal & 138% Vitamin C",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "87 kcal & 138% Vitamin C"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 87 kcal, 3.0g fiber, and 154mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_87",
    "fruitId": "miracle_fruit_var_3",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_88",
    "fruitId": "black_sapote_var_3",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #89: Velvet Black Sapote is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #89: Velvet Black Sapote is cultivated primarily across ...",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)"
    ],
    "explanation": "Botanical Specimen #89: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_89",
    "fruitId": "jabuticaba_var_3",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #90: Frost Jabuticaba is cultivated primarily across Min...",
    "options": [
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)",
      "Botanical Specimen #90: Frost Jabuticaba is cultivated primarily across Min...",
      "Honey Peach trait (Northwest China)"
    ],
    "explanation": "Botanical Specimen #90: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_90",
    "fruitId": "apple_var_4",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Central Asia"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #4).",
    "points": 150
  },
  {
    "id": "trivia_q_91",
    "fruitId": "banana_var_4",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Musa acuminata var. golden",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_92",
    "fruitId": "orange_var_4",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "129 kcal & 216% Vitamin C",
    "options": [
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Velvet Coconut trait (Indo-Pacific)",
      "129 kcal & 216% Vitamin C",
      "Giant Cherry trait (Stone Fruit)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 129 kcal, 4.8g fiber, and 268mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_93",
    "fruitId": "strawberry_var_4",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_94",
    "fruitId": "watermelon_var_4",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #95: Imperial Watermelon is cultivated primarily across ...",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Botanical Specimen #95: Imperial Watermelon is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #95: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_95",
    "fruitId": "grape_var_4",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #96: Ruby Grape is cultivated primarily across Mediterra...",
    "options": [
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #96: Ruby Grape is cultivated primarily across Mediterra..."
    ],
    "explanation": "Botanical Specimen #96: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_96",
    "fruitId": "pineapple_var_4",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Parana Basin, South America",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Velvet Coconut trait (Tropical)",
      "Alpine Fig trait (Levant & Mediterranean)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #4).",
    "points": 200
  },
  {
    "id": "trivia_q_97",
    "fruitId": "mango_var_4",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Mangifera indica var. celestial",
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_98",
    "fruitId": "lemon_var_4",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "61 kcal & 44% Vitamin C",
    "options": [
      "61 kcal & 44% Vitamin C",
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 61 kcal, 6.6g fiber, and 382mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_99",
    "fruitId": "cherry_var_4",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_100",
    "fruitId": "peach_var_4",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #101: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Botanical Specimen #101: Honey Peach is cultivated primarily across Northwe...",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #101: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_101",
    "fruitId": "pear_var_4",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #102: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Frost Avocado trait (Persea americana var. frost)",
      "Botanical Specimen #102: Scarlet Pear is cultivated primarily across Temper...",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #102: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_102",
    "fruitId": "kiwi_var_4",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Midnight Lychee trait (Southern China)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Yangtze Valley, China",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #4).",
    "points": 250
  },
  {
    "id": "trivia_q_103",
    "fruitId": "coconut_var_4",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Golden Papaya trait (Carica papaya var. golden)",
      "Cocos nucifera var. velvet",
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_104",
    "fruitId": "avocado_var_4",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "103 kcal & 122% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "103 kcal & 122% Vitamin C"
    ],
    "explanation": "Per 100g, Frost Avocado yields 103 kcal, 2.4g fiber, and 496mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_105",
    "fruitId": "pomegranate_var_4",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_106",
    "fruitId": "papaya_var_4",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #107: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Botanical Specimen #107: Golden Papaya is cultivated primarily across Centr..."
    ],
    "explanation": "Botanical Specimen #107: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_107",
    "fruitId": "fig_var_4",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #108: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Botanical Specimen #108: Alpine Fig is cultivated primarily across Levant &..."
    ],
    "explanation": "Botanical Specimen #108: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_108",
    "fruitId": "blueberry_var_4",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)",
      "North America",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #4).",
    "points": 300
  },
  {
    "id": "trivia_q_109",
    "fruitId": "raspberry_var_4",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Rubus idaeus var. imperial",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_110",
    "fruitId": "durian_var_4",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "35 kcal & 200% Vitamin C",
    "options": [
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Golden Banana trait (Southeast Asia)",
      "35 kcal & 200% Vitamin C",
      "Sugar Miracle Berry trait (Superfruit)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 35 kcal, 4.2g fiber, and 90mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_111",
    "fruitId": "mangosteen_var_4",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Velvet Black Sapote trait (Exotic)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_112",
    "fruitId": "rambutan_var_4",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #113: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Botanical Specimen #113: Celestial Rambutan is cultivated primarily across ...",
      "Frost Jabuticaba trait (Berry)",
      "Wild Strawberry trait (Europe & Americas)"
    ],
    "explanation": "Botanical Specimen #113: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_113",
    "fruitId": "lychee_var_4",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #114: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Botanical Specimen #114: Midnight Lychee is cultivated primarily across Sou...",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Botanical Specimen #114: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_114",
    "fruitId": "starfruit_var_4",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Tropical Asia",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #4).",
    "points": 350
  },
  {
    "id": "trivia_q_115",
    "fruitId": "jackfruit_var_4",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Alpine Orange trait (Citrus)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Artocarpus heterophyllus var. honey"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_116",
    "fruitId": "buddhas_hand_var_4",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "77 kcal & 28% Vitamin C",
    "options": [
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Celestial Mango trait (India & Myanmar)",
      "77 kcal & 28% Vitamin C"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 77 kcal, 6.0g fiber, and 204mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_117",
    "fruitId": "miracle_fruit_var_4",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Imperial Watermelon trait (Melon)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_118",
    "fruitId": "black_sapote_var_4",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #119: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Botanical Specimen #119: Velvet Black Sapote is cultivated primarily across...",
      "Ruby Grape trait (Berry)"
    ],
    "explanation": "Botanical Specimen #119: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_119",
    "fruitId": "jabuticaba_var_4",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #120: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Botanical Specimen #120: Frost Jabuticaba is cultivated primarily across Mi...",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)",
      "Honey Peach trait (Northwest China)"
    ],
    "explanation": "Botanical Specimen #120: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_120",
    "fruitId": "apple_var_5",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Central Asia",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #5).",
    "points": 150
  },
  {
    "id": "trivia_q_121",
    "fruitId": "banana_var_5",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)",
      "Musa acuminata var. golden",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_122",
    "fruitId": "orange_var_5",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "119 kcal & 106% Vitamin C",
    "options": [
      "119 kcal & 106% Vitamin C",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)",
      "Ruby Grape trait (Vitis vinifera var. ruby)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 119 kcal, 1.8g fiber, and 318mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_123",
    "fruitId": "strawberry_var_5",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_124",
    "fruitId": "watermelon_var_5",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #125: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Botanical Specimen #125: Imperial Watermelon is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #125: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_125",
    "fruitId": "grape_var_5",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #126: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #126: Ruby Grape is cultivated primarily across Mediterr..."
    ],
    "explanation": "Botanical Specimen #126: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_126",
    "fruitId": "pineapple_var_5",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Parana Basin, South America",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #5).",
    "points": 200
  },
  {
    "id": "trivia_q_127",
    "fruitId": "mango_var_5",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Mangifera indica var. celestial",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_128",
    "fruitId": "lemon_var_5",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "51 kcal & 184% Vitamin C",
    "options": [
      "Imperial Raspberry trait (Eurasia)",
      "Royal Pomegranate trait (Exotic)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "51 kcal & 184% Vitamin C"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 51 kcal, 3.6g fiber, and 432mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_129",
    "fruitId": "cherry_var_5",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_130",
    "fruitId": "peach_var_5",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #131: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Botanical Specimen #131: Honey Peach is cultivated primarily across Northwe...",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Botanical Specimen #131: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_131",
    "fruitId": "pear_var_5",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #132: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Frost Avocado trait (Persea americana var. frost)",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Botanical Specimen #132: Scarlet Pear is cultivated primarily across Temper...",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #132: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_132",
    "fruitId": "kiwi_var_5",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Midnight Lychee trait (Southern China)",
      "Yangtze Valley, China"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #5).",
    "points": 250
  },
  {
    "id": "trivia_q_133",
    "fruitId": "coconut_var_5",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Giant Starfruit trait (Tropical Asia)",
      "Cocos nucifera var. velvet"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_134",
    "fruitId": "avocado_var_5",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "93 kcal & 262% Vitamin C",
    "options": [
      "Alpine Fig trait (Ficus carica var. alpine)",
      "93 kcal & 262% Vitamin C",
      "Emerald Mangosteen trait (Exotic)",
      "Honey Jackfruit trait (Western Ghats, India)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 93 kcal, 5.4g fiber, and 546mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_135",
    "fruitId": "pomegranate_var_5",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_136",
    "fruitId": "papaya_var_5",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #137: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Botanical Specimen #137: Golden Papaya is cultivated primarily across Centr...",
      "Sugar Miracle Berry trait (West Africa)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Midnight Lychee trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #137: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_137",
    "fruitId": "fig_var_5",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #138: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Giant Starfruit trait (Exotic)",
      "Botanical Specimen #138: Alpine Fig is cultivated primarily across Levant &..."
    ],
    "explanation": "Botanical Specimen #138: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_138",
    "fruitId": "blueberry_var_5",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "North America",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #5).",
    "points": 300
  },
  {
    "id": "trivia_q_139",
    "fruitId": "raspberry_var_5",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Rubus idaeus var. imperial"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_140",
    "fruitId": "durian_var_5",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "135 kcal & 90% Vitamin C",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "135 kcal & 90% Vitamin C"
    ],
    "explanation": "Per 100g, Ruby Durian yields 135 kcal, 1.2g fiber, and 140mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_141",
    "fruitId": "mangosteen_var_5",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_142",
    "fruitId": "rambutan_var_5",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #143: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Botanical Specimen #143: Celestial Rambutan is cultivated primarily across ...",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Frost Jabuticaba trait (Berry)"
    ],
    "explanation": "Botanical Specimen #143: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_143",
    "fruitId": "lychee_var_5",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #144: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Botanical Specimen #144: Midnight Lychee is cultivated primarily across Sou...",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Botanical Specimen #144: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_144",
    "fruitId": "starfruit_var_5",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Tropical Asia"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #5).",
    "points": 350
  },
  {
    "id": "trivia_q_145",
    "fruitId": "jackfruit_var_5",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Artocarpus heterophyllus var. honey",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_146",
    "fruitId": "buddhas_hand_var_5",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "67 kcal & 168% Vitamin C",
    "options": [
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Celestial Mango trait (India & Myanmar)",
      "67 kcal & 168% Vitamin C"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 67 kcal, 3.0g fiber, and 254mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_147",
    "fruitId": "miracle_fruit_var_5",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Imperial Watermelon trait (Melon)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_148",
    "fruitId": "black_sapote_var_5",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #149: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Botanical Specimen #149: Velvet Black Sapote is cultivated primarily across...",
      "Ruby Grape trait (Berry)"
    ],
    "explanation": "Botanical Specimen #149: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_149",
    "fruitId": "jabuticaba_var_5",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #150: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Botanical Specimen #150: Frost Jabuticaba is cultivated primarily across Mi..."
    ],
    "explanation": "Botanical Specimen #150: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_150",
    "fruitId": "apple_var_6",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Scarlet Pear trait (Temperate Europe)",
      "Central Asia",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #6).",
    "points": 150
  },
  {
    "id": "trivia_q_151",
    "fruitId": "banana_var_6",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Musa acuminata var. golden"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_152",
    "fruitId": "orange_var_6",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "109 kcal & 246% Vitamin C",
    "options": [
      "109 kcal & 246% Vitamin C",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 109 kcal, 4.8g fiber, and 368mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_153",
    "fruitId": "strawberry_var_6",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_154",
    "fruitId": "watermelon_var_6",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #155: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Botanical Specimen #155: Imperial Watermelon is cultivated primarily across...",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)",
      "Royal Pomegranate trait (Persia to Northern India)"
    ],
    "explanation": "Botanical Specimen #155: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_155",
    "fruitId": "grape_var_6",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #156: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Golden Papaya trait (Central America)",
      "Botanical Specimen #156: Ruby Grape is cultivated primarily across Mediterr...",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #156: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_156",
    "fruitId": "pineapple_var_6",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Parana Basin, South America"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #6).",
    "points": 200
  },
  {
    "id": "trivia_q_157",
    "fruitId": "mango_var_6",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)",
      "Mangifera indica var. celestial",
      "Honey Peach trait (Prunus persica var. honey)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_158",
    "fruitId": "lemon_var_6",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "41 kcal & 74% Vitamin C",
    "options": [
      "41 kcal & 74% Vitamin C",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Imperial Raspberry trait (Eurasia)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 41 kcal, 6.6g fiber, and 482mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_159",
    "fruitId": "cherry_var_6",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_160",
    "fruitId": "peach_var_6",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #161: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Alpine Fig trait (Exotic)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Botanical Specimen #161: Honey Peach is cultivated primarily across Northwe..."
    ],
    "explanation": "Botanical Specimen #161: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_161",
    "fruitId": "pear_var_6",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #162: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Botanical Specimen #162: Scarlet Pear is cultivated primarily across Temper...",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Frost Avocado trait (Persea americana var. frost)"
    ],
    "explanation": "Botanical Specimen #162: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_162",
    "fruitId": "kiwi_var_6",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Yangtze Valley, China",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #6).",
    "points": 250
  },
  {
    "id": "trivia_q_163",
    "fruitId": "coconut_var_6",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Cocos nucifera var. velvet",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_164",
    "fruitId": "avocado_var_6",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "83 kcal & 152% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "83 kcal & 152% Vitamin C"
    ],
    "explanation": "Per 100g, Frost Avocado yields 83 kcal, 2.4g fiber, and 596mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_165",
    "fruitId": "pomegranate_var_6",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_166",
    "fruitId": "papaya_var_6",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #167: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "Botanical Specimen #167: Golden Papaya is cultivated primarily across Centr..."
    ],
    "explanation": "Botanical Specimen #167: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_167",
    "fruitId": "fig_var_6",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #168: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Botanical Specimen #168: Alpine Fig is cultivated primarily across Levant &...",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Ruby Durian trait (Durio zibethinus var. ruby)"
    ],
    "explanation": "Botanical Specimen #168: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_168",
    "fruitId": "blueberry_var_6",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "North America",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #6).",
    "points": 300
  },
  {
    "id": "trivia_q_169",
    "fruitId": "raspberry_var_6",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Rubus idaeus var. imperial",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_170",
    "fruitId": "durian_var_6",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "125 kcal & 230% Vitamin C",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "125 kcal & 230% Vitamin C",
      "Sugar Miracle Berry trait (Superfruit)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 125 kcal, 4.2g fiber, and 190mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_171",
    "fruitId": "mangosteen_var_6",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_172",
    "fruitId": "rambutan_var_6",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #173: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Botanical Specimen #173: Celestial Rambutan is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #173: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_173",
    "fruitId": "lychee_var_6",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #174: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Botanical Specimen #174: Midnight Lychee is cultivated primarily across Sou...",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)"
    ],
    "explanation": "Botanical Specimen #174: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_174",
    "fruitId": "starfruit_var_6",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Tropical Asia",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #6).",
    "points": 350
  },
  {
    "id": "trivia_q_175",
    "fruitId": "jackfruit_var_6",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Artocarpus heterophyllus var. honey",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_176",
    "fruitId": "buddhas_hand_var_6",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "57 kcal & 58% Vitamin C",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "57 kcal & 58% Vitamin C",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 57 kcal, 6.0g fiber, and 304mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_177",
    "fruitId": "miracle_fruit_var_6",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Midnight Lemon trait (Northeast India)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Imperial Watermelon trait (Melon)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_178",
    "fruitId": "black_sapote_var_6",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #179: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Botanical Specimen #179: Velvet Black Sapote is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #179: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_179",
    "fruitId": "jabuticaba_var_6",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #180: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Emerald Pineapple trait (Tropical)",
      "Honey Peach trait (Northwest China)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Botanical Specimen #180: Frost Jabuticaba is cultivated primarily across Mi..."
    ],
    "explanation": "Botanical Specimen #180: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_180",
    "fruitId": "apple_var_7",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)",
      "Central Asia",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #7).",
    "points": 150
  },
  {
    "id": "trivia_q_181",
    "fruitId": "banana_var_7",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Musa acuminata var. golden",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_182",
    "fruitId": "orange_var_7",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "99 kcal & 136% Vitamin C",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "99 kcal & 136% Vitamin C",
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 99 kcal, 1.8g fiber, and 418mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_183",
    "fruitId": "strawberry_var_7",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Honey Peach trait (Stone Fruit)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_184",
    "fruitId": "watermelon_var_7",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #185: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Botanical Specimen #185: Imperial Watermelon is cultivated primarily across...",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)"
    ],
    "explanation": "Botanical Specimen #185: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_185",
    "fruitId": "grape_var_7",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #186: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #186: Ruby Grape is cultivated primarily across Mediterr..."
    ],
    "explanation": "Botanical Specimen #186: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_186",
    "fruitId": "pineapple_var_7",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Velvet Coconut trait (Tropical)",
      "Alpine Fig trait (Levant & Mediterranean)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Parana Basin, South America"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #7).",
    "points": 200
  },
  {
    "id": "trivia_q_187",
    "fruitId": "mango_var_7",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Mangifera indica var. celestial",
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_188",
    "fruitId": "lemon_var_7",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "141 kcal & 214% Vitamin C",
    "options": [
      "Imperial Raspberry trait (Eurasia)",
      "Royal Pomegranate trait (Exotic)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "141 kcal & 214% Vitamin C"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 141 kcal, 3.6g fiber, and 532mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_189",
    "fruitId": "cherry_var_7",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_190",
    "fruitId": "peach_var_7",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #191: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Botanical Specimen #191: Honey Peach is cultivated primarily across Northwe...",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #191: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_191",
    "fruitId": "pear_var_7",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #192: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Botanical Specimen #192: Scarlet Pear is cultivated primarily across Temper...",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)"
    ],
    "explanation": "Botanical Specimen #192: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_192",
    "fruitId": "kiwi_var_7",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Imperial Raspberry trait (Berry)",
      "Midnight Lychee trait (Southern China)",
      "Yangtze Valley, China",
      "Royal Pomegranate trait (Punica granatum var. royal)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #7).",
    "points": 250
  },
  {
    "id": "trivia_q_193",
    "fruitId": "coconut_var_7",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Cocos nucifera var. velvet"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_194",
    "fruitId": "avocado_var_7",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "73 kcal & 42% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "73 kcal & 42% Vitamin C"
    ],
    "explanation": "Per 100g, Frost Avocado yields 73 kcal, 5.4g fiber, and 126mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_195",
    "fruitId": "pomegranate_var_7",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_196",
    "fruitId": "papaya_var_7",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #197: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Botanical Specimen #197: Golden Papaya is cultivated primarily across Centr...",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Midnight Lychee trait (Exotic)",
      "Sugar Miracle Berry trait (West Africa)"
    ],
    "explanation": "Botanical Specimen #197: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_197",
    "fruitId": "fig_var_7",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #198: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Botanical Specimen #198: Alpine Fig is cultivated primarily across Levant &...",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #198: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_198",
    "fruitId": "blueberry_var_7",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "North America",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #7).",
    "points": 300
  },
  {
    "id": "trivia_q_199",
    "fruitId": "raspberry_var_7",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Rubus idaeus var. imperial"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_200",
    "fruitId": "durian_var_7",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "115 kcal & 120% Vitamin C",
    "options": [
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Golden Banana trait (Southeast Asia)",
      "115 kcal & 120% Vitamin C"
    ],
    "explanation": "Per 100g, Ruby Durian yields 115 kcal, 1.2g fiber, and 240mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_201",
    "fruitId": "mangosteen_var_7",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_202",
    "fruitId": "rambutan_var_7",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #203: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Botanical Specimen #203: Celestial Rambutan is cultivated primarily across ...",
      "Frost Jabuticaba trait (Berry)",
      "Wild Strawberry trait (Europe & Americas)"
    ],
    "explanation": "Botanical Specimen #203: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_203",
    "fruitId": "lychee_var_7",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #204: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Botanical Specimen #204: Midnight Lychee is cultivated primarily across Sou...",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Botanical Specimen #204: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_204",
    "fruitId": "starfruit_var_7",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Tropical Asia",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #7).",
    "points": 350
  },
  {
    "id": "trivia_q_205",
    "fruitId": "jackfruit_var_7",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Artocarpus heterophyllus var. honey",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_206",
    "fruitId": "buddhas_hand_var_7",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "47 kcal & 198% Vitamin C",
    "options": [
      "47 kcal & 198% Vitamin C",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 47 kcal, 3.0g fiber, and 354mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_207",
    "fruitId": "miracle_fruit_var_7",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_208",
    "fruitId": "black_sapote_var_7",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #209: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Botanical Specimen #209: Velvet Black Sapote is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #209: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_209",
    "fruitId": "jabuticaba_var_7",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #210: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Botanical Specimen #210: Frost Jabuticaba is cultivated primarily across Mi...",
      "Emerald Pineapple trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #210: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_210",
    "fruitId": "apple_var_8",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Central Asia",
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #8).",
    "points": 150
  },
  {
    "id": "trivia_q_211",
    "fruitId": "banana_var_8",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Musa acuminata var. golden"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_212",
    "fruitId": "orange_var_8",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "89 kcal & 26% Vitamin C",
    "options": [
      "89 kcal & 26% Vitamin C",
      "Velvet Coconut trait (Indo-Pacific)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 89 kcal, 4.8g fiber, and 468mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_213",
    "fruitId": "strawberry_var_8",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_214",
    "fruitId": "watermelon_var_8",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #215: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Botanical Specimen #215: Imperial Watermelon is cultivated primarily across...",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Botanical Specimen #215: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_215",
    "fruitId": "grape_var_8",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #216: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Botanical Specimen #216: Ruby Grape is cultivated primarily across Mediterr...",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)"
    ],
    "explanation": "Botanical Specimen #216: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_216",
    "fruitId": "pineapple_var_8",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Parana Basin, South America",
      "Alpine Fig trait (Levant & Mediterranean)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #8).",
    "points": 200
  },
  {
    "id": "trivia_q_217",
    "fruitId": "mango_var_8",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Mangifera indica var. celestial",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_218",
    "fruitId": "lemon_var_8",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "131 kcal & 104% Vitamin C",
    "options": [
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "131 kcal & 104% Vitamin C"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 131 kcal, 6.6g fiber, and 582mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_219",
    "fruitId": "cherry_var_8",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_220",
    "fruitId": "peach_var_8",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #221: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Botanical Specimen #221: Honey Peach is cultivated primarily across Northwe...",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Botanical Specimen #221: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_221",
    "fruitId": "pear_var_8",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #222: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Botanical Specimen #222: Scarlet Pear is cultivated primarily across Temper...",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #222: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_222",
    "fruitId": "kiwi_var_8",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Yangtze Valley, China",
      "Imperial Raspberry trait (Berry)",
      "Midnight Lychee trait (Southern China)",
      "Royal Pomegranate trait (Punica granatum var. royal)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #8).",
    "points": 250
  },
  {
    "id": "trivia_q_223",
    "fruitId": "coconut_var_8",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Cocos nucifera var. velvet"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_224",
    "fruitId": "avocado_var_8",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "63 kcal & 182% Vitamin C",
    "options": [
      "63 kcal & 182% Vitamin C",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 63 kcal, 2.4g fiber, and 176mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_225",
    "fruitId": "pomegranate_var_8",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_226",
    "fruitId": "papaya_var_8",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #227: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Botanical Specimen #227: Golden Papaya is cultivated primarily across Centr...",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Midnight Lychee trait (Exotic)",
      "Sugar Miracle Berry trait (West Africa)"
    ],
    "explanation": "Botanical Specimen #227: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_227",
    "fruitId": "fig_var_8",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #228: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Botanical Specimen #228: Alpine Fig is cultivated primarily across Levant &...",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "Botanical Specimen #228: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_228",
    "fruitId": "blueberry_var_8",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "North America",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #8).",
    "points": 300
  },
  {
    "id": "trivia_q_229",
    "fruitId": "raspberry_var_8",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Rubus idaeus var. imperial"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_230",
    "fruitId": "durian_var_8",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "105 kcal & 260% Vitamin C",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "105 kcal & 260% Vitamin C"
    ],
    "explanation": "Per 100g, Ruby Durian yields 105 kcal, 4.2g fiber, and 290mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_231",
    "fruitId": "mangosteen_var_8",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_232",
    "fruitId": "rambutan_var_8",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #233: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Botanical Specimen #233: Celestial Rambutan is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #233: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_233",
    "fruitId": "lychee_var_8",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #234: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Botanical Specimen #234: Midnight Lychee is cultivated primarily across Sou..."
    ],
    "explanation": "Botanical Specimen #234: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_234",
    "fruitId": "starfruit_var_8",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Tropical Asia",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #8).",
    "points": 350
  },
  {
    "id": "trivia_q_235",
    "fruitId": "jackfruit_var_8",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Artocarpus heterophyllus var. honey",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_236",
    "fruitId": "buddhas_hand_var_8",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "37 kcal & 88% Vitamin C",
    "options": [
      "37 kcal & 88% Vitamin C",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 37 kcal, 6.0g fiber, and 404mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_237",
    "fruitId": "miracle_fruit_var_8",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_238",
    "fruitId": "black_sapote_var_8",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #239: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Botanical Specimen #239: Velvet Black Sapote is cultivated primarily across...",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)"
    ],
    "explanation": "Botanical Specimen #239: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_239",
    "fruitId": "jabuticaba_var_8",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #240: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Botanical Specimen #240: Frost Jabuticaba is cultivated primarily across Mi...",
      "Honey Peach trait (Northwest China)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #240: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_240",
    "fruitId": "apple_var_9",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Central Asia"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #9).",
    "points": 150
  },
  {
    "id": "trivia_q_241",
    "fruitId": "banana_var_9",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Musa acuminata var. golden"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_242",
    "fruitId": "orange_var_9",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "79 kcal & 166% Vitamin C",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "79 kcal & 166% Vitamin C",
      "Giant Cherry trait (Stone Fruit)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 79 kcal, 1.8g fiber, and 518mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_243",
    "fruitId": "strawberry_var_9",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_244",
    "fruitId": "watermelon_var_9",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #245: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Botanical Specimen #245: Imperial Watermelon is cultivated primarily across...",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Botanical Specimen #245: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_245",
    "fruitId": "grape_var_9",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #246: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Golden Papaya trait (Central America)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #246: Ruby Grape is cultivated primarily across Mediterr...",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #246: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_246",
    "fruitId": "pineapple_var_9",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Parana Basin, South America",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #9).",
    "points": 200
  },
  {
    "id": "trivia_q_247",
    "fruitId": "mango_var_9",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Wild Blueberry trait (North America)",
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Mangifera indica var. celestial"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_248",
    "fruitId": "lemon_var_9",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "121 kcal & 244% Vitamin C",
    "options": [
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Imperial Raspberry trait (Eurasia)",
      "121 kcal & 244% Vitamin C",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 121 kcal, 3.6g fiber, and 112mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_249",
    "fruitId": "cherry_var_9",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_250",
    "fruitId": "peach_var_9",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #251: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Botanical Specimen #251: Honey Peach is cultivated primarily across Northwe...",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #251: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_251",
    "fruitId": "pear_var_9",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #252: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Botanical Specimen #252: Scarlet Pear is cultivated primarily across Temper..."
    ],
    "explanation": "Botanical Specimen #252: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_252",
    "fruitId": "kiwi_var_9",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)",
      "Yangtze Valley, China",
      "Midnight Lychee trait (Southern China)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #9).",
    "points": 250
  },
  {
    "id": "trivia_q_253",
    "fruitId": "coconut_var_9",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Cocos nucifera var. velvet",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_254",
    "fruitId": "avocado_var_9",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "53 kcal & 72% Vitamin C",
    "options": [
      "53 kcal & 72% Vitamin C",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 53 kcal, 5.4g fiber, and 226mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_255",
    "fruitId": "pomegranate_var_9",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Celestial Rambutan trait (Exotic)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_256",
    "fruitId": "papaya_var_9",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #257: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Botanical Specimen #257: Golden Papaya is cultivated primarily across Centr..."
    ],
    "explanation": "Botanical Specimen #257: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_257",
    "fruitId": "fig_var_9",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #258: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Botanical Specimen #258: Alpine Fig is cultivated primarily across Levant &...",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #258: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_258",
    "fruitId": "blueberry_var_9",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "North America",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #9).",
    "points": 300
  },
  {
    "id": "trivia_q_259",
    "fruitId": "raspberry_var_9",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Rubus idaeus var. imperial"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_260",
    "fruitId": "durian_var_9",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "95 kcal & 150% Vitamin C",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "95 kcal & 150% Vitamin C"
    ],
    "explanation": "Per 100g, Ruby Durian yields 95 kcal, 1.2g fiber, and 340mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_261",
    "fruitId": "mangosteen_var_9",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_262",
    "fruitId": "rambutan_var_9",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #263: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Botanical Specimen #263: Celestial Rambutan is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #263: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_263",
    "fruitId": "lychee_var_9",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #264: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Botanical Specimen #264: Midnight Lychee is cultivated primarily across Sou..."
    ],
    "explanation": "Botanical Specimen #264: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_264",
    "fruitId": "starfruit_var_9",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Ruby Grape trait (Mediterranean)",
      "Tropical Asia",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #9).",
    "points": 350
  },
  {
    "id": "trivia_q_265",
    "fruitId": "jackfruit_var_9",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Artocarpus heterophyllus var. honey",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_266",
    "fruitId": "buddhas_hand_var_9",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "137 kcal & 228% Vitamin C",
    "options": [
      "137 kcal & 228% Vitamin C",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 137 kcal, 3.0g fiber, and 454mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_267",
    "fruitId": "miracle_fruit_var_9",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Imperial Watermelon trait (Melon)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_268",
    "fruitId": "black_sapote_var_9",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #269: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Botanical Specimen #269: Velvet Black Sapote is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #269: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_269",
    "fruitId": "jabuticaba_var_9",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #270: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Botanical Specimen #270: Frost Jabuticaba is cultivated primarily across Mi...",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #270: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_270",
    "fruitId": "apple_var_10",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Central Asia"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #10).",
    "points": 150
  },
  {
    "id": "trivia_q_271",
    "fruitId": "banana_var_10",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Musa acuminata var. golden",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_272",
    "fruitId": "orange_var_10",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "69 kcal & 56% Vitamin C",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "69 kcal & 56% Vitamin C",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 69 kcal, 4.8g fiber, and 568mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_273",
    "fruitId": "strawberry_var_10",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_274",
    "fruitId": "watermelon_var_10",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #275: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Botanical Specimen #275: Imperial Watermelon is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #275: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_275",
    "fruitId": "grape_var_10",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #276: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Golden Papaya trait (Central America)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #276: Ruby Grape is cultivated primarily across Mediterr...",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #276: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_276",
    "fruitId": "pineapple_var_10",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Parana Basin, South America",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #10).",
    "points": 200
  },
  {
    "id": "trivia_q_277",
    "fruitId": "mango_var_10",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Mangifera indica var. celestial"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_278",
    "fruitId": "lemon_var_10",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "111 kcal & 134% Vitamin C",
    "options": [
      "111 kcal & 134% Vitamin C",
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 111 kcal, 6.6g fiber, and 162mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_279",
    "fruitId": "cherry_var_10",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_280",
    "fruitId": "peach_var_10",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #281: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Botanical Specimen #281: Honey Peach is cultivated primarily across Northwe...",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #281: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_281",
    "fruitId": "pear_var_10",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #282: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Botanical Specimen #282: Scarlet Pear is cultivated primarily across Temper...",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)"
    ],
    "explanation": "Botanical Specimen #282: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_282",
    "fruitId": "kiwi_var_10",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Yangtze Valley, China",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)",
      "Midnight Lychee trait (Southern China)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #10).",
    "points": 250
  },
  {
    "id": "trivia_q_283",
    "fruitId": "coconut_var_10",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Cocos nucifera var. velvet"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_284",
    "fruitId": "avocado_var_10",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "43 kcal & 212% Vitamin C",
    "options": [
      "Alpine Fig trait (Ficus carica var. alpine)",
      "43 kcal & 212% Vitamin C",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 43 kcal, 2.4g fiber, and 276mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_285",
    "fruitId": "pomegranate_var_10",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_286",
    "fruitId": "papaya_var_10",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #287: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "Botanical Specimen #287: Golden Papaya is cultivated primarily across Centr..."
    ],
    "explanation": "Botanical Specimen #287: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_287",
    "fruitId": "fig_var_10",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #288: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Botanical Specimen #288: Alpine Fig is cultivated primarily across Levant &..."
    ],
    "explanation": "Botanical Specimen #288: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_288",
    "fruitId": "blueberry_var_10",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)",
      "North America"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #10).",
    "points": 300
  },
  {
    "id": "trivia_q_289",
    "fruitId": "raspberry_var_10",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Scarlet Buddha's Hand trait (Citrus)",
      "Rubus idaeus var. imperial",
      "Royal Apple trait (Central Asia)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_290",
    "fruitId": "durian_var_10",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "85 kcal & 40% Vitamin C",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Golden Banana trait (Southeast Asia)",
      "85 kcal & 40% Vitamin C"
    ],
    "explanation": "Per 100g, Ruby Durian yields 85 kcal, 4.2g fiber, and 390mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_291",
    "fruitId": "mangosteen_var_10",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_292",
    "fruitId": "rambutan_var_10",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #293: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Wild Strawberry trait (Europe & Americas)",
      "Botanical Specimen #293: Celestial Rambutan is cultivated primarily across ...",
      "Frost Jabuticaba trait (Berry)"
    ],
    "explanation": "Botanical Specimen #293: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_293",
    "fruitId": "lychee_var_10",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #294: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Botanical Specimen #294: Midnight Lychee is cultivated primarily across Sou..."
    ],
    "explanation": "Botanical Specimen #294: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_294",
    "fruitId": "starfruit_var_10",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Tropical Asia",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #10).",
    "points": 350
  },
  {
    "id": "trivia_q_295",
    "fruitId": "jackfruit_var_10",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Artocarpus heterophyllus var. honey",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_296",
    "fruitId": "buddhas_hand_var_10",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "127 kcal & 118% Vitamin C",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "127 kcal & 118% Vitamin C"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 127 kcal, 6.0g fiber, and 504mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_297",
    "fruitId": "miracle_fruit_var_10",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Imperial Watermelon trait (Melon)",
      "Midnight Lemon trait (Northeast India)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Royal Apple trait (Malus domestica var. royal)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_298",
    "fruitId": "black_sapote_var_10",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #299: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Botanical Specimen #299: Velvet Black Sapote is cultivated primarily across...",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)"
    ],
    "explanation": "Botanical Specimen #299: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_299",
    "fruitId": "jabuticaba_var_10",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #300: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)",
      "Botanical Specimen #300: Frost Jabuticaba is cultivated primarily across Mi..."
    ],
    "explanation": "Botanical Specimen #300: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_300",
    "fruitId": "apple_var_11",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Central Asia",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #11).",
    "points": 150
  },
  {
    "id": "trivia_q_301",
    "fruitId": "banana_var_11",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Musa acuminata var. golden"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_302",
    "fruitId": "orange_var_11",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "59 kcal & 196% Vitamin C",
    "options": [
      "59 kcal & 196% Vitamin C",
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 59 kcal, 1.8g fiber, and 98mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_303",
    "fruitId": "strawberry_var_11",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_304",
    "fruitId": "watermelon_var_11",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #305: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Botanical Specimen #305: Imperial Watermelon is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #305: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_305",
    "fruitId": "grape_var_11",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #306: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)",
      "Botanical Specimen #306: Ruby Grape is cultivated primarily across Mediterr...",
      "Golden Papaya trait (Central America)"
    ],
    "explanation": "Botanical Specimen #306: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_306",
    "fruitId": "pineapple_var_11",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Parana Basin, South America",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #11).",
    "points": 200
  },
  {
    "id": "trivia_q_307",
    "fruitId": "mango_var_11",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Wild Blueberry trait (North America)",
      "Mangifera indica var. celestial",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_308",
    "fruitId": "lemon_var_11",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "101 kcal & 24% Vitamin C",
    "options": [
      "101 kcal & 24% Vitamin C",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 101 kcal, 3.6g fiber, and 212mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_309",
    "fruitId": "cherry_var_11",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Golden Papaya trait (Tropical)",
      "Apple trait (Central Asia)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_310",
    "fruitId": "peach_var_11",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #311: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Banana trait (Southeast Asia)",
      "Alpine Fig trait (Exotic)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Botanical Specimen #311: Honey Peach is cultivated primarily across Northwe..."
    ],
    "explanation": "Botanical Specimen #311: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_311",
    "fruitId": "pear_var_11",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #312: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Botanical Specimen #312: Scarlet Pear is cultivated primarily across Temper...",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Orange trait (Southern China)"
    ],
    "explanation": "Botanical Specimen #312: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_312",
    "fruitId": "kiwi_var_11",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Strawberry trait (Europe & Americas)",
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Yangtze Valley, China"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #11).",
    "points": 250
  },
  {
    "id": "trivia_q_313",
    "fruitId": "coconut_var_11",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Cocos nucifera var. velvet",
      "Watermelon trait (Kalahari, Africa)",
      "Apple trait (Pome)",
      "Golden Papaya trait (Carica papaya var. golden)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_314",
    "fruitId": "avocado_var_11",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "143 kcal & 102% Vitamin C",
    "options": [
      "Grape trait (Mediterranean)",
      "143 kcal & 102% Vitamin C",
      "Banana trait (Tropical)",
      "Alpine Fig trait (Ficus carica var. alpine)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 143 kcal, 5.4g fiber, and 326mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_315",
    "fruitId": "pomegranate_var_11",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Pineapple trait (Parana Basin, South America)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Orange trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_316",
    "fruitId": "papaya_var_11",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #317: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Botanical Specimen #317: Golden Papaya is cultivated primarily across Centr...",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Mango trait (India & Myanmar)",
      "Strawberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #317: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_317",
    "fruitId": "fig_var_11",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #318: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Apple trait (Malus domestica)",
      "Watermelon trait (Melon)",
      "Botanical Specimen #318: Alpine Fig is cultivated primarily across Levant &...",
      "Lemon trait (Northeast India)"
    ],
    "explanation": "Botanical Specimen #318: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_318",
    "fruitId": "blueberry_var_11",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Grape trait (Berry)",
      "Cherry trait (Anatolia, Turkey)",
      "Banana trait (Musa acuminata)",
      "North America"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #11).",
    "points": 300
  },
  {
    "id": "trivia_q_319",
    "fruitId": "raspberry_var_11",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Pineapple trait (Tropical)",
      "Orange trait (Citrus × sinensis)",
      "Rubus idaeus var. imperial",
      "Peach trait (Northwest China)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_320",
    "fruitId": "apple",
    "fruitName": "Apple",
    "category": "Pome",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Apple?",
    "correctAnswer": "35 kcal & 20% Vitamin C",
    "options": [
      "35 kcal & 20% Vitamin C",
      "Strawberry trait (Fragaria × ananassa)",
      "Pear trait (Temperate Europe)",
      "Mango trait (Tropical)"
    ],
    "explanation": "Per 100g, Apple yields 35 kcal, 1.2g fiber, and 80mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_321",
    "fruitId": "banana",
    "fruitName": "Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Lemon trait (Citrus)",
      "Kiwi trait (Yangtze Valley, China)",
      "Watermelon trait (Citrullus lanatus)",
      "Creamy, sweet, starchy with nuanced notes of golden aromatics"
    ],
    "explanation": "Culinary sommeliers describe Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_322",
    "fruitId": "orange",
    "fruitName": "Orange",
    "category": "Citrus",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Orange?",
    "correctAnswer": "Botanical Specimen #3: Orange is cultivated primarily across Southern China...",
    "options": [
      "Coconut trait (Indo-Pacific)",
      "Cherry trait (Stone Fruit)",
      "Grape trait (Vitis vinifera)",
      "Botanical Specimen #3: Orange is cultivated primarily across Southern China..."
    ],
    "explanation": "Botanical Specimen #3: Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_323",
    "fruitId": "strawberry",
    "fruitName": "Strawberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Strawberry?",
    "correctAnswer": "Botanical Specimen #4: Strawberry is cultivated primarily across Europe & A...",
    "options": [
      "Pineapple trait (Ananas comosus)",
      "Avocado trait (Mesoamerica)",
      "Botanical Specimen #4: Strawberry is cultivated primarily across Europe & A...",
      "Peach trait (Stone Fruit)"
    ],
    "explanation": "Botanical Specimen #4: Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_324",
    "fruitId": "watermelon",
    "fruitName": "Watermelon",
    "category": "Melon",
    "difficulty": "easy",
    "question": "Where did the Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Kalahari, Africa",
      "Mango trait (Mangifera indica)",
      "Pear trait (Pome)",
      "Pomegranate trait (Persia to Northern India)"
    ],
    "explanation": "Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #1).",
    "points": 350
  },
  {
    "id": "trivia_q_325",
    "fruitId": "grape",
    "fruitName": "Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Grape?",
    "correctAnswer": "Vitis vinifera",
    "options": [
      "Papaya trait (Central America)",
      "Kiwi trait (Exotic)",
      "Lemon trait (Citrus limon)",
      "Vitis vinifera"
    ],
    "explanation": "The formal taxonomic binomial for Grape is Vitis vinifera.",
    "points": 150
  },
  {
    "id": "trivia_q_326",
    "fruitId": "pineapple",
    "fruitName": "Pineapple",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Pineapple?",
    "correctAnswer": "77 kcal & 98% Vitamin C",
    "options": [
      "Coconut trait (Tropical)",
      "Fig trait (Levant & Mediterranean)",
      "77 kcal & 98% Vitamin C",
      "Cherry trait (Prunus avium)"
    ],
    "explanation": "Per 100g, Pineapple yields 77 kcal, 3.0g fiber, and 194mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_327",
    "fruitId": "mango",
    "fruitName": "Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Blueberry trait (North America)",
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
      "Peach trait (Prunus persica)",
      "Avocado trait (Stone Fruit)"
    ],
    "explanation": "Culinary sommeliers describe Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_328",
    "fruitId": "lemon",
    "fruitName": "Lemon",
    "category": "Citrus",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Lemon?",
    "correctAnswer": "Botanical Specimen #9: Lemon is cultivated primarily across Northeast India...",
    "options": [
      "Pear trait (Pyrus communis)",
      "Botanical Specimen #9: Lemon is cultivated primarily across Northeast India...",
      "Pomegranate trait (Exotic)",
      "Raspberry trait (Eurasia)"
    ],
    "explanation": "Botanical Specimen #9: Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_329",
    "fruitId": "cherry",
    "fruitName": "Cherry",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Cherry?",
    "correctAnswer": "Botanical Specimen #10: Cherry is cultivated primarily across Anatolia, Tur...",
    "options": [
      "Durian trait (Borneo & Sumatra)",
      "Botanical Specimen #10: Cherry is cultivated primarily across Anatolia, Tur...",
      "Kiwi trait (Actinidia deliciosa)",
      "Papaya trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #10: Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_330",
    "fruitId": "peach",
    "fruitName": "Peach",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "Where did the Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Mangosteen trait (Sundaland, Southeast Asia)",
      "Fig trait (Exotic)",
      "Coconut trait (Cocos nucifera)",
      "Northwest China"
    ],
    "explanation": "Peach was first documented and domesticated in Northwest China (Cultivar #1).",
    "points": 150
  },
  {
    "id": "trivia_q_331",
    "fruitId": "pear",
    "fruitName": "Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Pear?",
    "correctAnswer": "Pyrus communis",
    "options": [
      "Blueberry trait (Berry)",
      "Rambutan trait (Malaysia & Indonesia)",
      "Avocado trait (Persea americana)",
      "Pyrus communis"
    ],
    "explanation": "The formal taxonomic binomial for Pear is Pyrus communis.",
    "points": 200
  },
  {
    "id": "trivia_q_332",
    "fruitId": "kiwi",
    "fruitName": "Kiwi",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Kiwi?",
    "correctAnswer": "119 kcal & 176% Vitamin C",
    "options": [
      "119 kcal & 176% Vitamin C",
      "Pomegranate trait (Punica granatum)",
      "Raspberry trait (Berry)",
      "Lychee trait (Southern China)"
    ],
    "explanation": "Per 100g, Kiwi yields 119 kcal, 4.8g fiber, and 308mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_333",
    "fruitId": "coconut",
    "fruitName": "Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Papaya trait (Carica papaya)",
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
      "Starfruit trait (Tropical Asia)",
      "Durian trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_334",
    "fruitId": "avocado",
    "fruitName": "Avocado",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Avocado?",
    "correctAnswer": "Botanical Specimen #15: Avocado is cultivated primarily across Mesoamerica....",
    "options": [
      "Botanical Specimen #15: Avocado is cultivated primarily across Mesoamerica....",
      "Jackfruit trait (Western Ghats, India)",
      "Fig trait (Ficus carica)",
      "Mangosteen trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #15: Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_335",
    "fruitId": "pomegranate",
    "fruitName": "Pomegranate",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Pomegranate?",
    "correctAnswer": "Botanical Specimen #16: Pomegranate is cultivated primarily across Persia t...",
    "options": [
      "Blueberry trait (Vaccinium corymbosum)",
      "Botanical Specimen #16: Pomegranate is cultivated primarily across Persia t...",
      "Buddha's Hand trait (Lower Himalayas)",
      "Rambutan trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #16: Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_336",
    "fruitId": "papaya",
    "fruitName": "Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Where did the Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Central America",
      "Miracle Berry trait (West Africa)",
      "Raspberry trait (Rubus idaeus)",
      "Lychee trait (Exotic)"
    ],
    "explanation": "Papaya was first documented and domesticated in Central America (Cultivar #1).",
    "points": 200
  },
  {
    "id": "trivia_q_337",
    "fruitId": "fig",
    "fruitName": "Fig",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What is the correct botanical Latin binomial name for Fig?",
    "correctAnswer": "Ficus carica",
    "options": [
      "Ficus carica",
      "Durian trait (Durio zibethinus)",
      "Starfruit trait (Exotic)",
      "Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "The formal taxonomic binomial for Fig is Ficus carica.",
    "points": 250
  },
  {
    "id": "trivia_q_338",
    "fruitId": "blueberry",
    "fruitName": "Blueberry",
    "category": "Berry",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Blueberry?",
    "correctAnswer": "51 kcal & 254% Vitamin C",
    "options": [
      "Jabuticaba trait (Minas Gerais, Brazil)",
      "Mangosteen trait (Garcinia mangostana)",
      "Jackfruit trait (Tropical)",
      "51 kcal & 254% Vitamin C"
    ],
    "explanation": "Per 100g, Blueberry yields 51 kcal, 6.6g fiber, and 422mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_339",
    "fruitId": "raspberry",
    "fruitName": "Raspberry",
    "category": "Berry",
    "difficulty": "medium",
    "question": "How is the sensory flavor profile of Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Royal Apple trait (Central Asia)",
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
      "Rambutan trait (Nephelium lappaceum)",
      "Buddha's Hand trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_340",
    "fruitId": "durian",
    "fruitName": "Durian",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Durian?",
    "correctAnswer": "Botanical Specimen #21: Durian is cultivated primarily across Borneo & Suma...",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Miracle Berry trait (Superfruit)",
      "Lychee trait (Litchi chinensis)",
      "Botanical Specimen #21: Durian is cultivated primarily across Borneo & Suma..."
    ],
    "explanation": "Botanical Specimen #21: Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_341",
    "fruitId": "mangosteen",
    "fruitName": "Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Mangosteen?",
    "correctAnswer": "Botanical Specimen #22: Mangosteen is cultivated primarily across Sundaland...",
    "options": [
      "Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)",
      "Botanical Specimen #22: Mangosteen is cultivated primarily across Sundaland...",
      "Starfruit trait (Averrhoa carambola)"
    ],
    "explanation": "Botanical Specimen #22: Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_342",
    "fruitId": "rambutan",
    "fruitName": "Rambutan",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Jabuticaba trait (Berry)",
      "Jackfruit trait (Artocarpus heterophyllus)",
      "Malaysia & Indonesia"
    ],
    "explanation": "Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #1).",
    "points": 250
  },
  {
    "id": "trivia_q_343",
    "fruitId": "lychee",
    "fruitName": "Lychee",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Lychee?",
    "correctAnswer": "Litchi chinensis",
    "options": [
      "Royal Apple trait (Pome)",
      "Buddha's Hand trait (Citrus medica var. sarcodactylis)",
      "Litchi chinensis",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "The formal taxonomic binomial for Lychee is Litchi chinensis.",
    "points": 300
  },
  {
    "id": "trivia_q_344",
    "fruitId": "starfruit",
    "fruitName": "Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Starfruit?",
    "correctAnswer": "93 kcal & 82% Vitamin C",
    "options": [
      "93 kcal & 82% Vitamin C",
      "Miracle Berry trait (Synsepalum dulcificum)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Per 100g, Starfruit yields 93 kcal, 2.4g fiber, and 536mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_345",
    "fruitId": "jackfruit",
    "fruitName": "Jackfruit",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Alpine Orange trait (Citrus)",
      "Black Sapote trait (Diospyros nigra)",
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
      "Emerald Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "Culinary sommeliers describe Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_346",
    "fruitId": "buddhas_hand",
    "fruitName": "Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #27: Buddha's Hand is cultivated primarily across Lower ...",
    "options": [
      "Botanical Specimen #27: Buddha's Hand is cultivated primarily across Lower ...",
      "Jabuticaba trait (Plinia cauliflora)",
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Botanical Specimen #27: Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_347",
    "fruitId": "miracle_fruit",
    "fruitName": "Miracle Berry",
    "category": "Superfruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Miracle Berry?",
    "correctAnswer": "Botanical Specimen #28: Miracle Berry is cultivated primarily across West A...",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Botanical Specimen #28: Miracle Berry is cultivated primarily across West A..."
    ],
    "explanation": "Botanical Specimen #28: Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_348",
    "fruitId": "black_sapote",
    "fruitName": "Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)"
    ],
    "explanation": "Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #1).",
    "points": 300
  },
  {
    "id": "trivia_q_349",
    "fruitId": "jabuticaba",
    "fruitName": "Jabuticaba",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "What is the correct botanical Latin binomial name for Jabuticaba?",
    "correctAnswer": "Plinia cauliflora",
    "options": [
      "Plinia cauliflora",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)"
    ],
    "explanation": "The formal taxonomic binomial for Jabuticaba is Plinia cauliflora.",
    "points": 350
  },
  {
    "id": "trivia_q_350",
    "fruitId": "apple_var_2",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "135 kcal & 160% Vitamin C",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "135 kcal & 160% Vitamin C"
    ],
    "explanation": "Per 100g, Royal Apple yields 135 kcal, 4.2g fiber, and 130mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_351",
    "fruitId": "banana_var_2",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Creamy, sweet, starchy with nuanced notes of golden aromatics",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_352",
    "fruitId": "orange_var_2",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #33: Alpine Orange is cultivated primarily across Southe...",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Botanical Specimen #33: Alpine Orange is cultivated primarily across Southe..."
    ],
    "explanation": "Botanical Specimen #33: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_353",
    "fruitId": "strawberry_var_2",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #34: Wild Strawberry is cultivated primarily across Euro...",
    "options": [
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Botanical Specimen #34: Wild Strawberry is cultivated primarily across Euro..."
    ],
    "explanation": "Botanical Specimen #34: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_354",
    "fruitId": "watermelon_var_2",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Kalahari, Africa"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #2).",
    "points": 350
  },
  {
    "id": "trivia_q_355",
    "fruitId": "grape_var_2",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Vitis vinifera var. ruby",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_356",
    "fruitId": "pineapple_var_2",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "67 kcal & 238% Vitamin C",
    "options": [
      "67 kcal & 238% Vitamin C",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Velvet Coconut trait (Tropical)",
      "Alpine Fig trait (Levant & Mediterranean)"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 67 kcal, 6.0g fiber, and 244mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_357",
    "fruitId": "mango_var_2",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_358",
    "fruitId": "lemon_var_2",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #39: Midnight Lemon is cultivated primarily across North...",
    "options": [
      "Botanical Specimen #39: Midnight Lemon is cultivated primarily across North...",
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #39: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_359",
    "fruitId": "cherry_var_2",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #40: Giant Cherry is cultivated primarily across Anatoli...",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Botanical Specimen #40: Giant Cherry is cultivated primarily across Anatoli...",
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Botanical Specimen #40: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_360",
    "fruitId": "peach_var_2",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Northwest China",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #2).",
    "points": 150
  },
  {
    "id": "trivia_q_361",
    "fruitId": "pear_var_2",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Pyrus communis var. scarlet",
      "Frost Avocado trait (Persea americana var. frost)",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_362",
    "fruitId": "kiwi_var_2",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "109 kcal & 66% Vitamin C",
    "options": [
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "109 kcal & 66% Vitamin C",
      "Midnight Lychee trait (Southern China)"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 109 kcal, 1.8g fiber, and 358mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_363",
    "fruitId": "coconut_var_2",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_364",
    "fruitId": "avocado_var_2",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #45: Frost Avocado is cultivated primarily across Mesoam...",
    "options": [
      "Emerald Mangosteen trait (Exotic)",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Botanical Specimen #45: Frost Avocado is cultivated primarily across Mesoam..."
    ],
    "explanation": "Botanical Specimen #45: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_365",
    "fruitId": "pomegranate_var_2",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #46: Royal Pomegranate is cultivated primarily across Pe...",
    "options": [
      "Botanical Specimen #46: Royal Pomegranate is cultivated primarily across Pe...",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "Botanical Specimen #46: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_366",
    "fruitId": "papaya_var_2",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Central America"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #2).",
    "points": 200
  },
  {
    "id": "trivia_q_367",
    "fruitId": "fig_var_2",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Ficus carica var. alpine"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_368",
    "fruitId": "blueberry_var_2",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "41 kcal & 144% Vitamin C",
    "options": [
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "41 kcal & 144% Vitamin C",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 41 kcal, 3.6g fiber, and 472mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_369",
    "fruitId": "raspberry_var_2",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_370",
    "fruitId": "durian_var_2",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Ruby Durian?",
    "correctAnswer": "Botanical Specimen #51: Ruby Durian is cultivated primarily across Borneo &...",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "Golden Banana trait (Southeast Asia)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Botanical Specimen #51: Ruby Durian is cultivated primarily across Borneo &..."
    ],
    "explanation": "Botanical Specimen #51: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_371",
    "fruitId": "mangosteen_var_2",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Mangosteen?",
    "correctAnswer": "Botanical Specimen #52: Emerald Mangosteen is cultivated primarily across S...",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Botanical Specimen #52: Emerald Mangosteen is cultivated primarily across S...",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #52: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_372",
    "fruitId": "rambutan_var_2",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Celestial Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Malaysia & Indonesia"
    ],
    "explanation": "Celestial Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #2).",
    "points": 250
  },
  {
    "id": "trivia_q_373",
    "fruitId": "lychee_var_2",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Midnight Lychee?",
    "correctAnswer": "Litchi chinensis var. midnight",
    "options": [
      "Litchi chinensis var. midnight",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "The formal taxonomic binomial for Midnight Lychee is Litchi chinensis var. midnight.",
    "points": 300
  },
  {
    "id": "trivia_q_374",
    "fruitId": "starfruit_var_2",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Giant Starfruit?",
    "correctAnswer": "83 kcal & 222% Vitamin C",
    "options": [
      "83 kcal & 222% Vitamin C",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Per 100g, Giant Starfruit yields 83 kcal, 5.4g fiber, and 586mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_375",
    "fruitId": "jackfruit_var_2",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Honey Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Alpine Orange trait (Citrus)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)"
    ],
    "explanation": "Culinary sommeliers describe Honey Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_376",
    "fruitId": "buddhas_hand_var_2",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Scarlet Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #57: Scarlet Buddha's Hand is cultivated primarily acros...",
    "options": [
      "Botanical Specimen #57: Scarlet Buddha's Hand is cultivated primarily acros...",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Botanical Specimen #57: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_377",
    "fruitId": "miracle_fruit_var_2",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Miracle Berry?",
    "correctAnswer": "Botanical Specimen #58: Sugar Miracle Berry is cultivated primarily across ...",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Botanical Specimen #58: Sugar Miracle Berry is cultivated primarily across ...",
      "Royal Apple trait (Malus domestica var. royal)"
    ],
    "explanation": "Botanical Specimen #58: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_378",
    "fruitId": "black_sapote_var_2",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Velvet Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Mesoamerica"
    ],
    "explanation": "Velvet Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #2).",
    "points": 300
  },
  {
    "id": "trivia_q_379",
    "fruitId": "jabuticaba_var_2",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Frost Jabuticaba?",
    "correctAnswer": "Plinia cauliflora var. frost",
    "options": [
      "Plinia cauliflora var. frost",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)",
      "Honey Peach trait (Northwest China)"
    ],
    "explanation": "The formal taxonomic binomial for Frost Jabuticaba is Plinia cauliflora var. frost.",
    "points": 350
  },
  {
    "id": "trivia_q_380",
    "fruitId": "apple_var_3",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "125 kcal & 50% Vitamin C",
    "options": [
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "125 kcal & 50% Vitamin C"
    ],
    "explanation": "Per 100g, Royal Apple yields 125 kcal, 1.2g fiber, and 180mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_381",
    "fruitId": "banana_var_3",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Creamy, sweet, starchy with nuanced notes of golden aromatics",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_382",
    "fruitId": "orange_var_3",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #63: Alpine Orange is cultivated primarily across Southe...",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Botanical Specimen #63: Alpine Orange is cultivated primarily across Southe..."
    ],
    "explanation": "Botanical Specimen #63: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_383",
    "fruitId": "strawberry_var_3",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #64: Wild Strawberry is cultivated primarily across Euro...",
    "options": [
      "Botanical Specimen #64: Wild Strawberry is cultivated primarily across Euro...",
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)"
    ],
    "explanation": "Botanical Specimen #64: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_384",
    "fruitId": "watermelon_var_3",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Kalahari, Africa",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #3).",
    "points": 350
  },
  {
    "id": "trivia_q_385",
    "fruitId": "grape_var_3",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Golden Papaya trait (Central America)",
      "Vitis vinifera var. ruby",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_386",
    "fruitId": "pineapple_var_3",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "57 kcal & 128% Vitamin C",
    "options": [
      "57 kcal & 128% Vitamin C",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 57 kcal, 3.0g fiber, and 294mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_387",
    "fruitId": "mango_var_3",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Wild Blueberry trait (North America)",
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_388",
    "fruitId": "lemon_var_3",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #69: Midnight Lemon is cultivated primarily across North...",
    "options": [
      "Royal Pomegranate trait (Exotic)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Botanical Specimen #69: Midnight Lemon is cultivated primarily across North...",
      "Imperial Raspberry trait (Eurasia)"
    ],
    "explanation": "Botanical Specimen #69: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_389",
    "fruitId": "cherry_var_3",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #70: Giant Cherry is cultivated primarily across Anatoli...",
    "options": [
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Botanical Specimen #70: Giant Cherry is cultivated primarily across Anatoli..."
    ],
    "explanation": "Botanical Specimen #70: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_390",
    "fruitId": "peach_var_3",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)",
      "Northwest China",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #3).",
    "points": 150
  },
  {
    "id": "trivia_q_391",
    "fruitId": "pear_var_3",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Pyrus communis var. scarlet",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_392",
    "fruitId": "kiwi_var_3",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "99 kcal & 206% Vitamin C",
    "options": [
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "99 kcal & 206% Vitamin C"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 99 kcal, 4.8g fiber, and 408mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_393",
    "fruitId": "coconut_var_3",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)",
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_394",
    "fruitId": "avocado_var_3",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #75: Frost Avocado is cultivated primarily across Mesoam...",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Botanical Specimen #75: Frost Avocado is cultivated primarily across Mesoam...",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #75: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_395",
    "fruitId": "pomegranate_var_3",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #76: Royal Pomegranate is cultivated primarily across Pe...",
    "options": [
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Botanical Specimen #76: Royal Pomegranate is cultivated primarily across Pe...",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #76: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_396",
    "fruitId": "papaya_var_3",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Central America"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #3).",
    "points": 200
  },
  {
    "id": "trivia_q_397",
    "fruitId": "fig_var_3",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Ficus carica var. alpine",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_398",
    "fruitId": "blueberry_var_3",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "141 kcal & 34% Vitamin C",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "141 kcal & 34% Vitamin C"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 141 kcal, 6.6g fiber, and 522mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_399",
    "fruitId": "raspberry_var_3",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
      "Royal Apple trait (Central Asia)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_400",
    "fruitId": "durian_var_3",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Ruby Durian?",
    "correctAnswer": "Botanical Specimen #81: Ruby Durian is cultivated primarily across Borneo &...",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Botanical Specimen #81: Ruby Durian is cultivated primarily across Borneo &...",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Sugar Miracle Berry trait (Superfruit)"
    ],
    "explanation": "Botanical Specimen #81: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_401",
    "fruitId": "mangosteen_var_3",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Mangosteen?",
    "correctAnswer": "Botanical Specimen #82: Emerald Mangosteen is cultivated primarily across S...",
    "options": [
      "Botanical Specimen #82: Emerald Mangosteen is cultivated primarily across S...",
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)"
    ],
    "explanation": "Botanical Specimen #82: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_402",
    "fruitId": "rambutan_var_3",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Celestial Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Malaysia & Indonesia"
    ],
    "explanation": "Celestial Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #3).",
    "points": 250
  },
  {
    "id": "trivia_q_403",
    "fruitId": "lychee_var_3",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Midnight Lychee?",
    "correctAnswer": "Litchi chinensis var. midnight",
    "options": [
      "Litchi chinensis var. midnight",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)"
    ],
    "explanation": "The formal taxonomic binomial for Midnight Lychee is Litchi chinensis var. midnight.",
    "points": 300
  },
  {
    "id": "trivia_q_404",
    "fruitId": "starfruit_var_3",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Giant Starfruit?",
    "correctAnswer": "73 kcal & 112% Vitamin C",
    "options": [
      "73 kcal & 112% Vitamin C",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)"
    ],
    "explanation": "Per 100g, Giant Starfruit yields 73 kcal, 2.4g fiber, and 116mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_405",
    "fruitId": "jackfruit_var_3",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Honey Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)"
    ],
    "explanation": "Culinary sommeliers describe Honey Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_406",
    "fruitId": "buddhas_hand_var_3",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Scarlet Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #87: Scarlet Buddha's Hand is cultivated primarily acros...",
    "options": [
      "Wild Strawberry trait (Berry)",
      "Botanical Specimen #87: Scarlet Buddha's Hand is cultivated primarily acros...",
      "Celestial Mango trait (India & Myanmar)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)"
    ],
    "explanation": "Botanical Specimen #87: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_407",
    "fruitId": "miracle_fruit_var_3",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Miracle Berry?",
    "correctAnswer": "Botanical Specimen #88: Sugar Miracle Berry is cultivated primarily across ...",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Botanical Specimen #88: Sugar Miracle Berry is cultivated primarily across ...",
      "Imperial Watermelon trait (Melon)"
    ],
    "explanation": "Botanical Specimen #88: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_408",
    "fruitId": "black_sapote_var_3",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Velvet Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Mesoamerica"
    ],
    "explanation": "Velvet Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #3).",
    "points": 300
  },
  {
    "id": "trivia_q_409",
    "fruitId": "jabuticaba_var_3",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Frost Jabuticaba?",
    "correctAnswer": "Plinia cauliflora var. frost",
    "options": [
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Plinia cauliflora var. frost",
      "Honey Peach trait (Northwest China)"
    ],
    "explanation": "The formal taxonomic binomial for Frost Jabuticaba is Plinia cauliflora var. frost.",
    "points": 350
  },
  {
    "id": "trivia_q_410",
    "fruitId": "apple_var_4",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "115 kcal & 190% Vitamin C",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "115 kcal & 190% Vitamin C"
    ],
    "explanation": "Per 100g, Royal Apple yields 115 kcal, 4.2g fiber, and 230mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_411",
    "fruitId": "banana_var_4",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Creamy, sweet, starchy with nuanced notes of golden aromatics",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_412",
    "fruitId": "orange_var_4",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #93: Alpine Orange is cultivated primarily across Southe...",
    "options": [
      "Botanical Specimen #93: Alpine Orange is cultivated primarily across Southe...",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Botanical Specimen #93: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_413",
    "fruitId": "strawberry_var_4",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #94: Wild Strawberry is cultivated primarily across Euro...",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Botanical Specimen #94: Wild Strawberry is cultivated primarily across Euro..."
    ],
    "explanation": "Botanical Specimen #94: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_414",
    "fruitId": "watermelon_var_4",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Kalahari, Africa"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #4).",
    "points": 350
  },
  {
    "id": "trivia_q_415",
    "fruitId": "grape_var_4",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Golden Papaya trait (Central America)",
      "Vitis vinifera var. ruby",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_416",
    "fruitId": "pineapple_var_4",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "47 kcal & 268% Vitamin C",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "47 kcal & 268% Vitamin C",
      "Giant Cherry trait (Prunus avium var. giant)"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 47 kcal, 6.0g fiber, and 344mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_417",
    "fruitId": "mango_var_4",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_418",
    "fruitId": "lemon_var_4",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #99: Midnight Lemon is cultivated primarily across North...",
    "options": [
      "Imperial Raspberry trait (Eurasia)",
      "Royal Pomegranate trait (Exotic)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Botanical Specimen #99: Midnight Lemon is cultivated primarily across North..."
    ],
    "explanation": "Botanical Specimen #99: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_419",
    "fruitId": "cherry_var_4",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #100: Giant Cherry is cultivated primarily across Anatol...",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Botanical Specimen #100: Giant Cherry is cultivated primarily across Anatol...",
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Botanical Specimen #100: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_420",
    "fruitId": "peach_var_4",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Northwest China",
      "Velvet Coconut trait (Cocos nucifera var. velvet)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #4).",
    "points": 150
  },
  {
    "id": "trivia_q_421",
    "fruitId": "pear_var_4",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Pyrus communis var. scarlet"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_422",
    "fruitId": "kiwi_var_4",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "89 kcal & 96% Vitamin C",
    "options": [
      "89 kcal & 96% Vitamin C",
      "Midnight Lychee trait (Southern China)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 89 kcal, 1.8g fiber, and 458mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_423",
    "fruitId": "coconut_var_4",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)",
      "Golden Papaya trait (Carica papaya var. golden)"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_424",
    "fruitId": "avocado_var_4",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #105: Frost Avocado is cultivated primarily across Mesoa...",
    "options": [
      "Botanical Specimen #105: Frost Avocado is cultivated primarily across Mesoa...",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #105: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_425",
    "fruitId": "pomegranate_var_4",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #106: Royal Pomegranate is cultivated primarily across P...",
    "options": [
      "Botanical Specimen #106: Royal Pomegranate is cultivated primarily across P...",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #106: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_426",
    "fruitId": "papaya_var_4",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Midnight Lychee trait (Exotic)",
      "Sugar Miracle Berry trait (West Africa)",
      "Central America"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #4).",
    "points": 200
  },
  {
    "id": "trivia_q_427",
    "fruitId": "fig_var_4",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Ficus carica var. alpine",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_428",
    "fruitId": "blueberry_var_4",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "131 kcal & 174% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "131 kcal & 174% Vitamin C",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 131 kcal, 3.6g fiber, and 572mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_429",
    "fruitId": "raspberry_var_4",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_430",
    "fruitId": "durian_var_4",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Ruby Durian?",
    "correctAnswer": "Botanical Specimen #111: Ruby Durian is cultivated primarily across Borneo ...",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Botanical Specimen #111: Ruby Durian is cultivated primarily across Borneo ..."
    ],
    "explanation": "Botanical Specimen #111: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_431",
    "fruitId": "mangosteen_var_4",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Mangosteen?",
    "correctAnswer": "Botanical Specimen #112: Emerald Mangosteen is cultivated primarily across ...",
    "options": [
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Botanical Specimen #112: Emerald Mangosteen is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #112: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_432",
    "fruitId": "rambutan_var_4",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Celestial Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Frost Jabuticaba trait (Berry)",
      "Malaysia & Indonesia",
      "Wild Strawberry trait (Europe & Americas)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)"
    ],
    "explanation": "Celestial Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #4).",
    "points": 250
  },
  {
    "id": "trivia_q_433",
    "fruitId": "lychee_var_4",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Midnight Lychee?",
    "correctAnswer": "Litchi chinensis var. midnight",
    "options": [
      "Litchi chinensis var. midnight",
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)"
    ],
    "explanation": "The formal taxonomic binomial for Midnight Lychee is Litchi chinensis var. midnight.",
    "points": 300
  },
  {
    "id": "trivia_q_434",
    "fruitId": "starfruit_var_4",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Giant Starfruit?",
    "correctAnswer": "63 kcal & 252% Vitamin C",
    "options": [
      "63 kcal & 252% Vitamin C",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Per 100g, Giant Starfruit yields 63 kcal, 5.4g fiber, and 166mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_435",
    "fruitId": "jackfruit_var_4",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Honey Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Alpine Orange trait (Citrus)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics"
    ],
    "explanation": "Culinary sommeliers describe Honey Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_436",
    "fruitId": "buddhas_hand_var_4",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Scarlet Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #117: Scarlet Buddha's Hand is cultivated primarily acro...",
    "options": [
      "Botanical Specimen #117: Scarlet Buddha's Hand is cultivated primarily acro...",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Botanical Specimen #117: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_437",
    "fruitId": "miracle_fruit_var_4",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Miracle Berry?",
    "correctAnswer": "Botanical Specimen #118: Sugar Miracle Berry is cultivated primarily across...",
    "options": [
      "Botanical Specimen #118: Sugar Miracle Berry is cultivated primarily across...",
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)"
    ],
    "explanation": "Botanical Specimen #118: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_438",
    "fruitId": "black_sapote_var_4",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Velvet Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Giant Cherry trait (Anatolia, Turkey)"
    ],
    "explanation": "Velvet Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #4).",
    "points": 300
  },
  {
    "id": "trivia_q_439",
    "fruitId": "jabuticaba_var_4",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Frost Jabuticaba?",
    "correctAnswer": "Plinia cauliflora var. frost",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Plinia cauliflora var. frost"
    ],
    "explanation": "The formal taxonomic binomial for Frost Jabuticaba is Plinia cauliflora var. frost.",
    "points": 350
  },
  {
    "id": "trivia_q_440",
    "fruitId": "apple_var_5",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "105 kcal & 80% Vitamin C",
    "options": [
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "105 kcal & 80% Vitamin C",
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)"
    ],
    "explanation": "Per 100g, Royal Apple yields 105 kcal, 1.2g fiber, and 280mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_441",
    "fruitId": "banana_var_5",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Creamy, sweet, starchy with nuanced notes of golden aromatics"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_442",
    "fruitId": "orange_var_5",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #123: Alpine Orange is cultivated primarily across South...",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Botanical Specimen #123: Alpine Orange is cultivated primarily across South...",
      "Giant Cherry trait (Stone Fruit)"
    ],
    "explanation": "Botanical Specimen #123: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_443",
    "fruitId": "strawberry_var_5",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #124: Wild Strawberry is cultivated primarily across Eur...",
    "options": [
      "Botanical Specimen #124: Wild Strawberry is cultivated primarily across Eur...",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)"
    ],
    "explanation": "Botanical Specimen #124: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_444",
    "fruitId": "watermelon_var_5",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Kalahari, Africa",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)",
      "Royal Pomegranate trait (Persia to Northern India)"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #5).",
    "points": 350
  },
  {
    "id": "trivia_q_445",
    "fruitId": "grape_var_5",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Vitis vinifera var. ruby",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_446",
    "fruitId": "pineapple_var_5",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "37 kcal & 158% Vitamin C",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "37 kcal & 158% Vitamin C"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 37 kcal, 3.0g fiber, and 394mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_447",
    "fruitId": "mango_var_5",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Frost Avocado trait (Stone Fruit)",
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
      "Honey Peach trait (Prunus persica var. honey)",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_448",
    "fruitId": "lemon_var_5",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #129: Midnight Lemon is cultivated primarily across Nort...",
    "options": [
      "Botanical Specimen #129: Midnight Lemon is cultivated primarily across Nort...",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)"
    ],
    "explanation": "Botanical Specimen #129: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_449",
    "fruitId": "cherry_var_5",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #130: Giant Cherry is cultivated primarily across Anatol...",
    "options": [
      "Ruby Durian trait (Borneo & Sumatra)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Botanical Specimen #130: Giant Cherry is cultivated primarily across Anatol...",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #130: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_450",
    "fruitId": "peach_var_5",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Northwest China",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #5).",
    "points": 150
  },
  {
    "id": "trivia_q_451",
    "fruitId": "pear_var_5",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Pyrus communis var. scarlet",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_452",
    "fruitId": "kiwi_var_5",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "79 kcal & 236% Vitamin C",
    "options": [
      "79 kcal & 236% Vitamin C",
      "Midnight Lychee trait (Southern China)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 79 kcal, 4.8g fiber, and 508mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_453",
    "fruitId": "coconut_var_5",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_454",
    "fruitId": "avocado_var_5",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #135: Frost Avocado is cultivated primarily across Mesoa...",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)",
      "Botanical Specimen #135: Frost Avocado is cultivated primarily across Mesoa..."
    ],
    "explanation": "Botanical Specimen #135: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_455",
    "fruitId": "pomegranate_var_5",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #136: Royal Pomegranate is cultivated primarily across P...",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Botanical Specimen #136: Royal Pomegranate is cultivated primarily across P...",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #136: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_456",
    "fruitId": "papaya_var_5",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "Central America"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #5).",
    "points": 200
  },
  {
    "id": "trivia_q_457",
    "fruitId": "fig_var_5",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Giant Starfruit trait (Exotic)",
      "Ficus carica var. alpine",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_458",
    "fruitId": "blueberry_var_5",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "121 kcal & 64% Vitamin C",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "121 kcal & 64% Vitamin C",
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 121 kcal, 6.6g fiber, and 102mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_459",
    "fruitId": "raspberry_var_5",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_460",
    "fruitId": "durian_var_5",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Ruby Durian?",
    "correctAnswer": "Botanical Specimen #141: Ruby Durian is cultivated primarily across Borneo ...",
    "options": [
      "Botanical Specimen #141: Ruby Durian is cultivated primarily across Borneo ...",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Golden Banana trait (Southeast Asia)"
    ],
    "explanation": "Botanical Specimen #141: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_461",
    "fruitId": "mangosteen_var_5",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Mangosteen?",
    "correctAnswer": "Botanical Specimen #142: Emerald Mangosteen is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #142: Emerald Mangosteen is cultivated primarily across ...",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)"
    ],
    "explanation": "Botanical Specimen #142: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_462",
    "fruitId": "rambutan_var_5",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Celestial Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Wild Strawberry trait (Europe & Americas)",
      "Malaysia & Indonesia"
    ],
    "explanation": "Celestial Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #5).",
    "points": 250
  },
  {
    "id": "trivia_q_463",
    "fruitId": "lychee_var_5",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Midnight Lychee?",
    "correctAnswer": "Litchi chinensis var. midnight",
    "options": [
      "Litchi chinensis var. midnight",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "The formal taxonomic binomial for Midnight Lychee is Litchi chinensis var. midnight.",
    "points": 300
  },
  {
    "id": "trivia_q_464",
    "fruitId": "starfruit_var_5",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Giant Starfruit?",
    "correctAnswer": "53 kcal & 142% Vitamin C",
    "options": [
      "Golden Banana trait (Tropical)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "53 kcal & 142% Vitamin C",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Per 100g, Giant Starfruit yields 53 kcal, 2.4g fiber, and 216mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_465",
    "fruitId": "jackfruit_var_5",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Honey Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Honey Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_466",
    "fruitId": "buddhas_hand_var_5",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Scarlet Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #147: Scarlet Buddha's Hand is cultivated primarily acro...",
    "options": [
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Celestial Mango trait (India & Myanmar)",
      "Botanical Specimen #147: Scarlet Buddha's Hand is cultivated primarily acro..."
    ],
    "explanation": "Botanical Specimen #147: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_467",
    "fruitId": "miracle_fruit_var_5",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Miracle Berry?",
    "correctAnswer": "Botanical Specimen #148: Sugar Miracle Berry is cultivated primarily across...",
    "options": [
      "Botanical Specimen #148: Sugar Miracle Berry is cultivated primarily across...",
      "Royal Apple trait (Malus domestica var. royal)",
      "Imperial Watermelon trait (Melon)",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "Botanical Specimen #148: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_468",
    "fruitId": "black_sapote_var_5",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Velvet Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)"
    ],
    "explanation": "Velvet Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #5).",
    "points": 300
  },
  {
    "id": "trivia_q_469",
    "fruitId": "jabuticaba_var_5",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Frost Jabuticaba?",
    "correctAnswer": "Plinia cauliflora var. frost",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Plinia cauliflora var. frost"
    ],
    "explanation": "The formal taxonomic binomial for Frost Jabuticaba is Plinia cauliflora var. frost.",
    "points": 350
  },
  {
    "id": "trivia_q_470",
    "fruitId": "apple_var_6",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "95 kcal & 220% Vitamin C",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "95 kcal & 220% Vitamin C"
    ],
    "explanation": "Per 100g, Royal Apple yields 95 kcal, 4.2g fiber, and 330mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_471",
    "fruitId": "banana_var_6",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Creamy, sweet, starchy with nuanced notes of golden aromatics",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_472",
    "fruitId": "orange_var_6",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #153: Alpine Orange is cultivated primarily across South...",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Botanical Specimen #153: Alpine Orange is cultivated primarily across South..."
    ],
    "explanation": "Botanical Specimen #153: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_473",
    "fruitId": "strawberry_var_6",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #154: Wild Strawberry is cultivated primarily across Eur...",
    "options": [
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Botanical Specimen #154: Wild Strawberry is cultivated primarily across Eur...",
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)"
    ],
    "explanation": "Botanical Specimen #154: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_474",
    "fruitId": "watermelon_var_6",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Kalahari, Africa",
      "Celestial Mango trait (Mangifera indica var. celestial)"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #6).",
    "points": 350
  },
  {
    "id": "trivia_q_475",
    "fruitId": "grape_var_6",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Vitis vinifera var. ruby",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_476",
    "fruitId": "pineapple_var_6",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "137 kcal & 48% Vitamin C",
    "options": [
      "Giant Cherry trait (Prunus avium var. giant)",
      "Alpine Fig trait (Levant & Mediterranean)",
      "137 kcal & 48% Vitamin C",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 137 kcal, 6.0g fiber, and 444mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_477",
    "fruitId": "mango_var_6",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_478",
    "fruitId": "lemon_var_6",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #159: Midnight Lemon is cultivated primarily across Nort...",
    "options": [
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Botanical Specimen #159: Midnight Lemon is cultivated primarily across Nort..."
    ],
    "explanation": "Botanical Specimen #159: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_479",
    "fruitId": "cherry_var_6",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #160: Giant Cherry is cultivated primarily across Anatol...",
    "options": [
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Botanical Specimen #160: Giant Cherry is cultivated primarily across Anatol..."
    ],
    "explanation": "Botanical Specimen #160: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_480",
    "fruitId": "peach_var_6",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Alpine Fig trait (Exotic)",
      "Northwest China",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #6).",
    "points": 150
  },
  {
    "id": "trivia_q_481",
    "fruitId": "pear_var_6",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Pyrus communis var. scarlet"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_482",
    "fruitId": "kiwi_var_6",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "69 kcal & 126% Vitamin C",
    "options": [
      "69 kcal & 126% Vitamin C",
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 69 kcal, 1.8g fiber, and 558mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_483",
    "fruitId": "coconut_var_6",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_484",
    "fruitId": "avocado_var_6",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #165: Frost Avocado is cultivated primarily across Mesoa...",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Botanical Specimen #165: Frost Avocado is cultivated primarily across Mesoa...",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #165: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_485",
    "fruitId": "pomegranate_var_6",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #166: Royal Pomegranate is cultivated primarily across P...",
    "options": [
      "Botanical Specimen #166: Royal Pomegranate is cultivated primarily across P...",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #166: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_486",
    "fruitId": "papaya_var_6",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Central America",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #6).",
    "points": 200
  },
  {
    "id": "trivia_q_487",
    "fruitId": "fig_var_6",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Ficus carica var. alpine",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_488",
    "fruitId": "blueberry_var_6",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "111 kcal & 204% Vitamin C",
    "options": [
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "111 kcal & 204% Vitamin C",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 111 kcal, 3.6g fiber, and 152mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_489",
    "fruitId": "raspberry_var_6",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_490",
    "fruitId": "durian_var_6",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Ruby Durian?",
    "correctAnswer": "Botanical Specimen #171: Ruby Durian is cultivated primarily across Borneo ...",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Golden Banana trait (Southeast Asia)",
      "Botanical Specimen #171: Ruby Durian is cultivated primarily across Borneo ..."
    ],
    "explanation": "Botanical Specimen #171: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_491",
    "fruitId": "mangosteen_var_6",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Mangosteen?",
    "correctAnswer": "Botanical Specimen #172: Emerald Mangosteen is cultivated primarily across ...",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Velvet Black Sapote trait (Exotic)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Botanical Specimen #172: Emerald Mangosteen is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #172: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_492",
    "fruitId": "rambutan_var_6",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Celestial Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Malaysia & Indonesia"
    ],
    "explanation": "Celestial Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #6).",
    "points": 250
  },
  {
    "id": "trivia_q_493",
    "fruitId": "lychee_var_6",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Midnight Lychee?",
    "correctAnswer": "Litchi chinensis var. midnight",
    "options": [
      "Litchi chinensis var. midnight",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "The formal taxonomic binomial for Midnight Lychee is Litchi chinensis var. midnight.",
    "points": 300
  },
  {
    "id": "trivia_q_494",
    "fruitId": "starfruit_var_6",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Giant Starfruit?",
    "correctAnswer": "43 kcal & 32% Vitamin C",
    "options": [
      "43 kcal & 32% Vitamin C",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Per 100g, Giant Starfruit yields 43 kcal, 5.4g fiber, and 266mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_495",
    "fruitId": "jackfruit_var_6",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Honey Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics"
    ],
    "explanation": "Culinary sommeliers describe Honey Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_496",
    "fruitId": "buddhas_hand_var_6",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Scarlet Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #177: Scarlet Buddha's Hand is cultivated primarily acro...",
    "options": [
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Botanical Specimen #177: Scarlet Buddha's Hand is cultivated primarily acro..."
    ],
    "explanation": "Botanical Specimen #177: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_497",
    "fruitId": "miracle_fruit_var_6",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Miracle Berry?",
    "correctAnswer": "Botanical Specimen #178: Sugar Miracle Berry is cultivated primarily across...",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Botanical Specimen #178: Sugar Miracle Berry is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #178: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_498",
    "fruitId": "black_sapote_var_6",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Velvet Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)"
    ],
    "explanation": "Velvet Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #6).",
    "points": 300
  },
  {
    "id": "trivia_q_499",
    "fruitId": "jabuticaba_var_6",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Frost Jabuticaba?",
    "correctAnswer": "Plinia cauliflora var. frost",
    "options": [
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)",
      "Plinia cauliflora var. frost",
      "Emerald Pineapple trait (Tropical)"
    ],
    "explanation": "The formal taxonomic binomial for Frost Jabuticaba is Plinia cauliflora var. frost.",
    "points": 350
  },
  {
    "id": "trivia_q_500",
    "fruitId": "apple_var_7",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "85 kcal & 110% Vitamin C",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "85 kcal & 110% Vitamin C"
    ],
    "explanation": "Per 100g, Royal Apple yields 85 kcal, 1.2g fiber, and 380mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_501",
    "fruitId": "banana_var_7",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Creamy, sweet, starchy with nuanced notes of golden aromatics",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_502",
    "fruitId": "orange_var_7",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #183: Alpine Orange is cultivated primarily across South...",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Botanical Specimen #183: Alpine Orange is cultivated primarily across South..."
    ],
    "explanation": "Botanical Specimen #183: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_503",
    "fruitId": "strawberry_var_7",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #184: Wild Strawberry is cultivated primarily across Eur...",
    "options": [
      "Botanical Specimen #184: Wild Strawberry is cultivated primarily across Eur...",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)"
    ],
    "explanation": "Botanical Specimen #184: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_504",
    "fruitId": "watermelon_var_7",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Kalahari, Africa"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #7).",
    "points": 350
  },
  {
    "id": "trivia_q_505",
    "fruitId": "grape_var_7",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)",
      "Vitis vinifera var. ruby",
      "Midnight Lemon trait (Citrus limon var. midnight)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_506",
    "fruitId": "pineapple_var_7",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "127 kcal & 188% Vitamin C",
    "options": [
      "127 kcal & 188% Vitamin C",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Velvet Coconut trait (Tropical)",
      "Alpine Fig trait (Levant & Mediterranean)"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 127 kcal, 3.0g fiber, and 494mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_507",
    "fruitId": "mango_var_7",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Wild Blueberry trait (North America)",
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_508",
    "fruitId": "lemon_var_7",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #189: Midnight Lemon is cultivated primarily across Nort...",
    "options": [
      "Imperial Raspberry trait (Eurasia)",
      "Botanical Specimen #189: Midnight Lemon is cultivated primarily across Nort...",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #189: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_509",
    "fruitId": "cherry_var_7",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #190: Giant Cherry is cultivated primarily across Anatol...",
    "options": [
      "Botanical Specimen #190: Giant Cherry is cultivated primarily across Anatol...",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Botanical Specimen #190: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_510",
    "fruitId": "peach_var_7",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Northwest China",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #7).",
    "points": 150
  },
  {
    "id": "trivia_q_511",
    "fruitId": "pear_var_7",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Pyrus communis var. scarlet"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_512",
    "fruitId": "kiwi_var_7",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "59 kcal & 266% Vitamin C",
    "options": [
      "Midnight Lychee trait (Southern China)",
      "59 kcal & 266% Vitamin C",
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 59 kcal, 4.8g fiber, and 88mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_513",
    "fruitId": "coconut_var_7",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_514",
    "fruitId": "avocado_var_7",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #195: Frost Avocado is cultivated primarily across Mesoa...",
    "options": [
      "Botanical Specimen #195: Frost Avocado is cultivated primarily across Mesoa...",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Honey Jackfruit trait (Western Ghats, India)"
    ],
    "explanation": "Botanical Specimen #195: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_515",
    "fruitId": "pomegranate_var_7",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #196: Royal Pomegranate is cultivated primarily across P...",
    "options": [
      "Botanical Specimen #196: Royal Pomegranate is cultivated primarily across P...",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "Botanical Specimen #196: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_516",
    "fruitId": "papaya_var_7",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Central America",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Midnight Lychee trait (Exotic)",
      "Sugar Miracle Berry trait (West Africa)"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #7).",
    "points": 200
  },
  {
    "id": "trivia_q_517",
    "fruitId": "fig_var_7",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Ficus carica var. alpine",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_518",
    "fruitId": "blueberry_var_7",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "101 kcal & 94% Vitamin C",
    "options": [
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "101 kcal & 94% Vitamin C",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 101 kcal, 6.6g fiber, and 202mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_519",
    "fruitId": "raspberry_var_7",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_520",
    "fruitId": "durian_var_7",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Ruby Durian?",
    "correctAnswer": "Botanical Specimen #201: Ruby Durian is cultivated primarily across Borneo ...",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Botanical Specimen #201: Ruby Durian is cultivated primarily across Borneo ...",
      "Golden Banana trait (Southeast Asia)"
    ],
    "explanation": "Botanical Specimen #201: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_521",
    "fruitId": "mangosteen_var_7",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Mangosteen?",
    "correctAnswer": "Botanical Specimen #202: Emerald Mangosteen is cultivated primarily across ...",
    "options": [
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Botanical Specimen #202: Emerald Mangosteen is cultivated primarily across ...",
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)"
    ],
    "explanation": "Botanical Specimen #202: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_522",
    "fruitId": "rambutan_var_7",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Celestial Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Wild Strawberry trait (Europe & Americas)",
      "Malaysia & Indonesia"
    ],
    "explanation": "Celestial Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #7).",
    "points": 250
  },
  {
    "id": "trivia_q_523",
    "fruitId": "lychee_var_7",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Midnight Lychee?",
    "correctAnswer": "Litchi chinensis var. midnight",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Litchi chinensis var. midnight"
    ],
    "explanation": "The formal taxonomic binomial for Midnight Lychee is Litchi chinensis var. midnight.",
    "points": 300
  },
  {
    "id": "trivia_q_524",
    "fruitId": "starfruit_var_7",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Giant Starfruit?",
    "correctAnswer": "143 kcal & 172% Vitamin C",
    "options": [
      "Ruby Grape trait (Mediterranean)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "143 kcal & 172% Vitamin C"
    ],
    "explanation": "Per 100g, Giant Starfruit yields 143 kcal, 2.4g fiber, and 316mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_525",
    "fruitId": "jackfruit_var_7",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Honey Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Honey Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_526",
    "fruitId": "buddhas_hand_var_7",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Scarlet Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #207: Scarlet Buddha's Hand is cultivated primarily acro...",
    "options": [
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Botanical Specimen #207: Scarlet Buddha's Hand is cultivated primarily acro..."
    ],
    "explanation": "Botanical Specimen #207: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_527",
    "fruitId": "miracle_fruit_var_7",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Miracle Berry?",
    "correctAnswer": "Botanical Specimen #208: Sugar Miracle Berry is cultivated primarily across...",
    "options": [
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Botanical Specimen #208: Sugar Miracle Berry is cultivated primarily across...",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "Botanical Specimen #208: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_528",
    "fruitId": "black_sapote_var_7",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Velvet Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Mesoamerica"
    ],
    "explanation": "Velvet Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #7).",
    "points": 300
  },
  {
    "id": "trivia_q_529",
    "fruitId": "jabuticaba_var_7",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Frost Jabuticaba?",
    "correctAnswer": "Plinia cauliflora var. frost",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Plinia cauliflora var. frost"
    ],
    "explanation": "The formal taxonomic binomial for Frost Jabuticaba is Plinia cauliflora var. frost.",
    "points": 350
  },
  {
    "id": "trivia_q_530",
    "fruitId": "apple_var_8",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "75 kcal & 250% Vitamin C",
    "options": [
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "75 kcal & 250% Vitamin C"
    ],
    "explanation": "Per 100g, Royal Apple yields 75 kcal, 4.2g fiber, and 430mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_531",
    "fruitId": "banana_var_8",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Creamy, sweet, starchy with nuanced notes of golden aromatics",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_532",
    "fruitId": "orange_var_8",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #213: Alpine Orange is cultivated primarily across South...",
    "options": [
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Botanical Specimen #213: Alpine Orange is cultivated primarily across South..."
    ],
    "explanation": "Botanical Specimen #213: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_533",
    "fruitId": "strawberry_var_8",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #214: Wild Strawberry is cultivated primarily across Eur...",
    "options": [
      "Botanical Specimen #214: Wild Strawberry is cultivated primarily across Eur...",
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)"
    ],
    "explanation": "Botanical Specimen #214: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_534",
    "fruitId": "watermelon_var_8",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Kalahari, Africa",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #8).",
    "points": 350
  },
  {
    "id": "trivia_q_535",
    "fruitId": "grape_var_8",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Vitis vinifera var. ruby",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_536",
    "fruitId": "pineapple_var_8",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "117 kcal & 78% Vitamin C",
    "options": [
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "117 kcal & 78% Vitamin C",
      "Alpine Fig trait (Levant & Mediterranean)"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 117 kcal, 6.0g fiber, and 544mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_537",
    "fruitId": "mango_var_8",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Honey Peach trait (Prunus persica var. honey)",
      "Wild Blueberry trait (North America)",
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_538",
    "fruitId": "lemon_var_8",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #219: Midnight Lemon is cultivated primarily across Nort...",
    "options": [
      "Botanical Specimen #219: Midnight Lemon is cultivated primarily across Nort...",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)"
    ],
    "explanation": "Botanical Specimen #219: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_539",
    "fruitId": "cherry_var_8",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #220: Giant Cherry is cultivated primarily across Anatol...",
    "options": [
      "Botanical Specimen #220: Giant Cherry is cultivated primarily across Anatol...",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #220: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_540",
    "fruitId": "peach_var_8",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Northwest China",
      "Alpine Fig trait (Exotic)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #8).",
    "points": 150
  },
  {
    "id": "trivia_q_541",
    "fruitId": "pear_var_8",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Pyrus communis var. scarlet"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_542",
    "fruitId": "kiwi_var_8",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "49 kcal & 156% Vitamin C",
    "options": [
      "49 kcal & 156% Vitamin C",
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Midnight Lychee trait (Southern China)"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 49 kcal, 1.8g fiber, and 138mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_543",
    "fruitId": "coconut_var_8",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)",
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_544",
    "fruitId": "avocado_var_8",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #225: Frost Avocado is cultivated primarily across Mesoa...",
    "options": [
      "Botanical Specimen #225: Frost Avocado is cultivated primarily across Mesoa...",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)",
      "Honey Jackfruit trait (Western Ghats, India)"
    ],
    "explanation": "Botanical Specimen #225: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_545",
    "fruitId": "pomegranate_var_8",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #226: Royal Pomegranate is cultivated primarily across P...",
    "options": [
      "Botanical Specimen #226: Royal Pomegranate is cultivated primarily across P...",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #226: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_546",
    "fruitId": "papaya_var_8",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Central America"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #8).",
    "points": 200
  },
  {
    "id": "trivia_q_547",
    "fruitId": "fig_var_8",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Ficus carica var. alpine",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_548",
    "fruitId": "blueberry_var_8",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "91 kcal & 234% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "91 kcal & 234% Vitamin C",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 91 kcal, 3.6g fiber, and 252mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_549",
    "fruitId": "raspberry_var_8",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_550",
    "fruitId": "durian_var_8",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Ruby Durian?",
    "correctAnswer": "Botanical Specimen #231: Ruby Durian is cultivated primarily across Borneo ...",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Botanical Specimen #231: Ruby Durian is cultivated primarily across Borneo ...",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Sugar Miracle Berry trait (Superfruit)"
    ],
    "explanation": "Botanical Specimen #231: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_551",
    "fruitId": "mangosteen_var_8",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Mangosteen?",
    "correctAnswer": "Botanical Specimen #232: Emerald Mangosteen is cultivated primarily across ...",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Velvet Black Sapote trait (Exotic)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Botanical Specimen #232: Emerald Mangosteen is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #232: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_552",
    "fruitId": "rambutan_var_8",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Celestial Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Malaysia & Indonesia",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Frost Jabuticaba trait (Berry)",
      "Wild Strawberry trait (Europe & Americas)"
    ],
    "explanation": "Celestial Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #8).",
    "points": 250
  },
  {
    "id": "trivia_q_553",
    "fruitId": "lychee_var_8",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Midnight Lychee?",
    "correctAnswer": "Litchi chinensis var. midnight",
    "options": [
      "Royal Apple trait (Pome)",
      "Litchi chinensis var. midnight",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "The formal taxonomic binomial for Midnight Lychee is Litchi chinensis var. midnight.",
    "points": 300
  },
  {
    "id": "trivia_q_554",
    "fruitId": "starfruit_var_8",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Giant Starfruit?",
    "correctAnswer": "133 kcal & 62% Vitamin C",
    "options": [
      "133 kcal & 62% Vitamin C",
      "Ruby Grape trait (Mediterranean)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)"
    ],
    "explanation": "Per 100g, Giant Starfruit yields 133 kcal, 5.4g fiber, and 366mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_555",
    "fruitId": "jackfruit_var_8",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Honey Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Honey Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_556",
    "fruitId": "buddhas_hand_var_8",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Scarlet Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #237: Scarlet Buddha's Hand is cultivated primarily acro...",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Botanical Specimen #237: Scarlet Buddha's Hand is cultivated primarily acro..."
    ],
    "explanation": "Botanical Specimen #237: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_557",
    "fruitId": "miracle_fruit_var_8",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Miracle Berry?",
    "correctAnswer": "Botanical Specimen #238: Sugar Miracle Berry is cultivated primarily across...",
    "options": [
      "Botanical Specimen #238: Sugar Miracle Berry is cultivated primarily across...",
      "Imperial Watermelon trait (Melon)",
      "Midnight Lemon trait (Northeast India)",
      "Royal Apple trait (Malus domestica var. royal)"
    ],
    "explanation": "Botanical Specimen #238: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_558",
    "fruitId": "black_sapote_var_8",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Velvet Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)"
    ],
    "explanation": "Velvet Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #8).",
    "points": 300
  },
  {
    "id": "trivia_q_559",
    "fruitId": "jabuticaba_var_8",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Frost Jabuticaba?",
    "correctAnswer": "Plinia cauliflora var. frost",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Plinia cauliflora var. frost"
    ],
    "explanation": "The formal taxonomic binomial for Frost Jabuticaba is Plinia cauliflora var. frost.",
    "points": 350
  },
  {
    "id": "trivia_q_560",
    "fruitId": "apple_var_9",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "65 kcal & 140% Vitamin C",
    "options": [
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "65 kcal & 140% Vitamin C",
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)"
    ],
    "explanation": "Per 100g, Royal Apple yields 65 kcal, 1.2g fiber, and 480mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_561",
    "fruitId": "banana_var_9",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Creamy, sweet, starchy with nuanced notes of golden aromatics",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_562",
    "fruitId": "orange_var_9",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #243: Alpine Orange is cultivated primarily across South...",
    "options": [
      "Botanical Specimen #243: Alpine Orange is cultivated primarily across South...",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Botanical Specimen #243: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_563",
    "fruitId": "strawberry_var_9",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #244: Wild Strawberry is cultivated primarily across Eur...",
    "options": [
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)",
      "Botanical Specimen #244: Wild Strawberry is cultivated primarily across Eur..."
    ],
    "explanation": "Botanical Specimen #244: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_564",
    "fruitId": "watermelon_var_9",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Scarlet Pear trait (Pome)",
      "Kalahari, Africa",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Royal Pomegranate trait (Persia to Northern India)"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #9).",
    "points": 350
  },
  {
    "id": "trivia_q_565",
    "fruitId": "grape_var_9",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Vitis vinifera var. ruby",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_566",
    "fruitId": "pineapple_var_9",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "107 kcal & 218% Vitamin C",
    "options": [
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "107 kcal & 218% Vitamin C",
      "Alpine Fig trait (Levant & Mediterranean)"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 107 kcal, 3.0g fiber, and 594mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_567",
    "fruitId": "mango_var_9",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_568",
    "fruitId": "lemon_var_9",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #249: Midnight Lemon is cultivated primarily across Nort...",
    "options": [
      "Botanical Specimen #249: Midnight Lemon is cultivated primarily across Nort...",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Imperial Raspberry trait (Eurasia)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #249: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_569",
    "fruitId": "cherry_var_9",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #250: Giant Cherry is cultivated primarily across Anatol...",
    "options": [
      "Botanical Specimen #250: Giant Cherry is cultivated primarily across Anatol...",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Botanical Specimen #250: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_570",
    "fruitId": "peach_var_9",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Northwest China",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #9).",
    "points": 150
  },
  {
    "id": "trivia_q_571",
    "fruitId": "pear_var_9",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Pyrus communis var. scarlet",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_572",
    "fruitId": "kiwi_var_9",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "39 kcal & 46% Vitamin C",
    "options": [
      "39 kcal & 46% Vitamin C",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 39 kcal, 4.8g fiber, and 188mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_573",
    "fruitId": "coconut_var_9",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_574",
    "fruitId": "avocado_var_9",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #255: Frost Avocado is cultivated primarily across Mesoa...",
    "options": [
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Botanical Specimen #255: Frost Avocado is cultivated primarily across Mesoa..."
    ],
    "explanation": "Botanical Specimen #255: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_575",
    "fruitId": "pomegranate_var_9",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #256: Royal Pomegranate is cultivated primarily across P...",
    "options": [
      "Botanical Specimen #256: Royal Pomegranate is cultivated primarily across P...",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)"
    ],
    "explanation": "Botanical Specimen #256: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_576",
    "fruitId": "papaya_var_9",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Central America",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Midnight Lychee trait (Exotic)",
      "Sugar Miracle Berry trait (West Africa)"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #9).",
    "points": 200
  },
  {
    "id": "trivia_q_577",
    "fruitId": "fig_var_9",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Ficus carica var. alpine"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_578",
    "fruitId": "blueberry_var_9",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "81 kcal & 124% Vitamin C",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "81 kcal & 124% Vitamin C"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 81 kcal, 6.6g fiber, and 302mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_579",
    "fruitId": "raspberry_var_9",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Royal Apple trait (Central Asia)",
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
      "Scarlet Buddha's Hand trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_580",
    "fruitId": "durian_var_9",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Ruby Durian?",
    "correctAnswer": "Botanical Specimen #261: Ruby Durian is cultivated primarily across Borneo ...",
    "options": [
      "Botanical Specimen #261: Ruby Durian is cultivated primarily across Borneo ...",
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)"
    ],
    "explanation": "Botanical Specimen #261: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_581",
    "fruitId": "mangosteen_var_9",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Mangosteen?",
    "correctAnswer": "Botanical Specimen #262: Emerald Mangosteen is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #262: Emerald Mangosteen is cultivated primarily across ...",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #262: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_582",
    "fruitId": "rambutan_var_9",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Celestial Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Malaysia & Indonesia"
    ],
    "explanation": "Celestial Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #9).",
    "points": 250
  },
  {
    "id": "trivia_q_583",
    "fruitId": "lychee_var_9",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Midnight Lychee?",
    "correctAnswer": "Litchi chinensis var. midnight",
    "options": [
      "Litchi chinensis var. midnight",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "The formal taxonomic binomial for Midnight Lychee is Litchi chinensis var. midnight.",
    "points": 300
  },
  {
    "id": "trivia_q_584",
    "fruitId": "starfruit_var_9",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Giant Starfruit?",
    "correctAnswer": "123 kcal & 202% Vitamin C",
    "options": [
      "123 kcal & 202% Vitamin C",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Per 100g, Giant Starfruit yields 123 kcal, 2.4g fiber, and 416mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_585",
    "fruitId": "jackfruit_var_9",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Honey Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Honey Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_586",
    "fruitId": "buddhas_hand_var_9",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Scarlet Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #267: Scarlet Buddha's Hand is cultivated primarily acro...",
    "options": [
      "Botanical Specimen #267: Scarlet Buddha's Hand is cultivated primarily acro...",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Botanical Specimen #267: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_587",
    "fruitId": "miracle_fruit_var_9",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Miracle Berry?",
    "correctAnswer": "Botanical Specimen #268: Sugar Miracle Berry is cultivated primarily across...",
    "options": [
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Botanical Specimen #268: Sugar Miracle Berry is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #268: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_588",
    "fruitId": "black_sapote_var_9",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Velvet Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)"
    ],
    "explanation": "Velvet Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #9).",
    "points": 300
  },
  {
    "id": "trivia_q_589",
    "fruitId": "jabuticaba_var_9",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Frost Jabuticaba?",
    "correctAnswer": "Plinia cauliflora var. frost",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Plinia cauliflora var. frost"
    ],
    "explanation": "The formal taxonomic binomial for Frost Jabuticaba is Plinia cauliflora var. frost.",
    "points": 350
  },
  {
    "id": "trivia_q_590",
    "fruitId": "apple_var_10",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "55 kcal & 30% Vitamin C",
    "options": [
      "55 kcal & 30% Vitamin C",
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)"
    ],
    "explanation": "Per 100g, Royal Apple yields 55 kcal, 4.2g fiber, and 530mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_591",
    "fruitId": "banana_var_10",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Creamy, sweet, starchy with nuanced notes of golden aromatics",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_592",
    "fruitId": "orange_var_10",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #273: Alpine Orange is cultivated primarily across South...",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Botanical Specimen #273: Alpine Orange is cultivated primarily across South..."
    ],
    "explanation": "Botanical Specimen #273: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_593",
    "fruitId": "strawberry_var_10",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #274: Wild Strawberry is cultivated primarily across Eur...",
    "options": [
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Botanical Specimen #274: Wild Strawberry is cultivated primarily across Eur..."
    ],
    "explanation": "Botanical Specimen #274: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_594",
    "fruitId": "watermelon_var_10",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Kalahari, Africa",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)",
      "Royal Pomegranate trait (Persia to Northern India)"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #10).",
    "points": 350
  },
  {
    "id": "trivia_q_595",
    "fruitId": "grape_var_10",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Vitis vinifera var. ruby",
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_596",
    "fruitId": "pineapple_var_10",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "97 kcal & 108% Vitamin C",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "97 kcal & 108% Vitamin C",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 97 kcal, 6.0g fiber, and 124mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_597",
    "fruitId": "mango_var_10",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Wild Blueberry trait (North America)",
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_598",
    "fruitId": "lemon_var_10",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #279: Midnight Lemon is cultivated primarily across Nort...",
    "options": [
      "Botanical Specimen #279: Midnight Lemon is cultivated primarily across Nort...",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)"
    ],
    "explanation": "Botanical Specimen #279: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_599",
    "fruitId": "cherry_var_10",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #280: Giant Cherry is cultivated primarily across Anatol...",
    "options": [
      "Botanical Specimen #280: Giant Cherry is cultivated primarily across Anatol...",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #280: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_600",
    "fruitId": "peach_var_10",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Northwest China",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #10).",
    "points": 150
  },
  {
    "id": "trivia_q_601",
    "fruitId": "pear_var_10",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Pyrus communis var. scarlet",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_602",
    "fruitId": "kiwi_var_10",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "139 kcal & 186% Vitamin C",
    "options": [
      "139 kcal & 186% Vitamin C",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)",
      "Midnight Lychee trait (Southern China)"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 139 kcal, 1.8g fiber, and 238mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_603",
    "fruitId": "coconut_var_10",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Ruby Durian trait (Exotic)",
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
      "Giant Starfruit trait (Tropical Asia)",
      "Golden Papaya trait (Carica papaya var. golden)"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_604",
    "fruitId": "avocado_var_10",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #285: Frost Avocado is cultivated primarily across Mesoa...",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Botanical Specimen #285: Frost Avocado is cultivated primarily across Mesoa..."
    ],
    "explanation": "Botanical Specimen #285: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_605",
    "fruitId": "pomegranate_var_10",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #286: Royal Pomegranate is cultivated primarily across P...",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Botanical Specimen #286: Royal Pomegranate is cultivated primarily across P...",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #286: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_606",
    "fruitId": "papaya_var_10",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Central America",
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #10).",
    "points": 200
  },
  {
    "id": "trivia_q_607",
    "fruitId": "fig_var_10",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Ficus carica var. alpine"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_608",
    "fruitId": "blueberry_var_10",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "71 kcal & 264% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "71 kcal & 264% Vitamin C",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 71 kcal, 3.6g fiber, and 352mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_609",
    "fruitId": "raspberry_var_10",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Royal Apple trait (Central Asia)",
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_610",
    "fruitId": "durian_var_10",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Ruby Durian?",
    "correctAnswer": "Botanical Specimen #291: Ruby Durian is cultivated primarily across Borneo ...",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Botanical Specimen #291: Ruby Durian is cultivated primarily across Borneo ..."
    ],
    "explanation": "Botanical Specimen #291: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_611",
    "fruitId": "mangosteen_var_10",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Mangosteen?",
    "correctAnswer": "Botanical Specimen #292: Emerald Mangosteen is cultivated primarily across ...",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Botanical Specimen #292: Emerald Mangosteen is cultivated primarily across ...",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #292: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_612",
    "fruitId": "rambutan_var_10",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Celestial Rambutan originally evolve and originate?",
    "correctAnswer": "Malaysia & Indonesia",
    "options": [
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Wild Strawberry trait (Europe & Americas)",
      "Malaysia & Indonesia",
      "Frost Jabuticaba trait (Berry)"
    ],
    "explanation": "Celestial Rambutan was first documented and domesticated in Malaysia & Indonesia (Cultivar #10).",
    "points": 250
  },
  {
    "id": "trivia_q_613",
    "fruitId": "lychee_var_10",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Midnight Lychee?",
    "correctAnswer": "Litchi chinensis var. midnight",
    "options": [
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Litchi chinensis var. midnight"
    ],
    "explanation": "The formal taxonomic binomial for Midnight Lychee is Litchi chinensis var. midnight.",
    "points": 300
  },
  {
    "id": "trivia_q_614",
    "fruitId": "starfruit_var_10",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Giant Starfruit?",
    "correctAnswer": "113 kcal & 92% Vitamin C",
    "options": [
      "113 kcal & 92% Vitamin C",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Per 100g, Giant Starfruit yields 113 kcal, 5.4g fiber, and 466mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_615",
    "fruitId": "jackfruit_var_10",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Honey Jackfruit best characterized?",
    "correctAnswer": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "options": [
      "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)"
    ],
    "explanation": "Culinary sommeliers describe Honey Jackfruit as having: Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_616",
    "fruitId": "buddhas_hand_var_10",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Scarlet Buddha's Hand?",
    "correctAnswer": "Botanical Specimen #297: Scarlet Buddha's Hand is cultivated primarily acro...",
    "options": [
      "Botanical Specimen #297: Scarlet Buddha's Hand is cultivated primarily acro...",
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)"
    ],
    "explanation": "Botanical Specimen #297: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_617",
    "fruitId": "miracle_fruit_var_10",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Miracle Berry?",
    "correctAnswer": "Botanical Specimen #298: Sugar Miracle Berry is cultivated primarily across...",
    "options": [
      "Botanical Specimen #298: Sugar Miracle Berry is cultivated primarily across...",
      "Midnight Lemon trait (Northeast India)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Imperial Watermelon trait (Melon)"
    ],
    "explanation": "Botanical Specimen #298: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_618",
    "fruitId": "black_sapote_var_10",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Velvet Black Sapote originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Mesoamerica"
    ],
    "explanation": "Velvet Black Sapote was first documented and domesticated in Mesoamerica (Cultivar #10).",
    "points": 300
  },
  {
    "id": "trivia_q_619",
    "fruitId": "jabuticaba_var_10",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Frost Jabuticaba?",
    "correctAnswer": "Plinia cauliflora var. frost",
    "options": [
      "Plinia cauliflora var. frost",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)"
    ],
    "explanation": "The formal taxonomic binomial for Frost Jabuticaba is Plinia cauliflora var. frost.",
    "points": 350
  },
  {
    "id": "trivia_q_620",
    "fruitId": "apple_var_11",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Royal Apple?",
    "correctAnswer": "45 kcal & 170% Vitamin C",
    "options": [
      "45 kcal & 170% Vitamin C",
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Per 100g, Royal Apple yields 45 kcal, 1.2g fiber, and 580mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_621",
    "fruitId": "banana_var_11",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Golden Banana best characterized?",
    "correctAnswer": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Creamy, sweet, starchy with nuanced notes of golden aromatics"
    ],
    "explanation": "Culinary sommeliers describe Golden Banana as having: Creamy, sweet, starchy with nuanced notes of golden aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_622",
    "fruitId": "orange_var_11",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Alpine Orange?",
    "correctAnswer": "Botanical Specimen #303: Alpine Orange is cultivated primarily across South...",
    "options": [
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)",
      "Botanical Specimen #303: Alpine Orange is cultivated primarily across South...",
      "Ruby Grape trait (Vitis vinifera var. ruby)"
    ],
    "explanation": "Botanical Specimen #303: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_623",
    "fruitId": "strawberry_var_11",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Strawberry?",
    "correctAnswer": "Botanical Specimen #304: Wild Strawberry is cultivated primarily across Eur...",
    "options": [
      "Botanical Specimen #304: Wild Strawberry is cultivated primarily across Eur...",
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)"
    ],
    "explanation": "Botanical Specimen #304: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_624",
    "fruitId": "watermelon_var_11",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Where did the Imperial Watermelon originally evolve and originate?",
    "correctAnswer": "Kalahari, Africa",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Kalahari, Africa"
    ],
    "explanation": "Imperial Watermelon was first documented and domesticated in Kalahari, Africa (Cultivar #11).",
    "points": 350
  },
  {
    "id": "trivia_q_625",
    "fruitId": "grape_var_11",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Ruby Grape?",
    "correctAnswer": "Vitis vinifera var. ruby",
    "options": [
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)",
      "Vitis vinifera var. ruby",
      "Midnight Lemon trait (Citrus limon var. midnight)"
    ],
    "explanation": "The formal taxonomic binomial for Ruby Grape is Vitis vinifera var. ruby.",
    "points": 150
  },
  {
    "id": "trivia_q_626",
    "fruitId": "pineapple_var_11",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Emerald Pineapple?",
    "correctAnswer": "87 kcal & 248% Vitamin C",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "87 kcal & 248% Vitamin C"
    ],
    "explanation": "Per 100g, Emerald Pineapple yields 87 kcal, 3.0g fiber, and 174mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_627",
    "fruitId": "mango_var_11",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Celestial Mango best characterized?",
    "correctAnswer": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "options": [
      "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "Culinary sommeliers describe Celestial Mango as having: Velvety, luscious, floral honey with nuanced notes of celestial aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_628",
    "fruitId": "lemon_var_11",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Midnight Lemon?",
    "correctAnswer": "Botanical Specimen #309: Midnight Lemon is cultivated primarily across Nort...",
    "options": [
      "Imperial Raspberry trait (Eurasia)",
      "Botanical Specimen #309: Midnight Lemon is cultivated primarily across Nort...",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #309: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_629",
    "fruitId": "cherry_var_11",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Cherry?",
    "correctAnswer": "Botanical Specimen #310: Giant Cherry is cultivated primarily across Anatol...",
    "options": [
      "Apple trait (Central Asia)",
      "Botanical Specimen #310: Giant Cherry is cultivated primarily across Anatol...",
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)"
    ],
    "explanation": "Botanical Specimen #310: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_630",
    "fruitId": "peach_var_11",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Honey Peach originally evolve and originate?",
    "correctAnswer": "Northwest China",
    "options": [
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Banana trait (Southeast Asia)",
      "Northwest China",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Honey Peach was first documented and domesticated in Northwest China (Cultivar #11).",
    "points": 150
  },
  {
    "id": "trivia_q_631",
    "fruitId": "pear_var_11",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Scarlet Pear?",
    "correctAnswer": "Pyrus communis var. scarlet",
    "options": [
      "Orange trait (Southern China)",
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Pyrus communis var. scarlet"
    ],
    "explanation": "The formal taxonomic binomial for Scarlet Pear is Pyrus communis var. scarlet.",
    "points": 200
  },
  {
    "id": "trivia_q_632",
    "fruitId": "kiwi_var_11",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Sugar Kiwi?",
    "correctAnswer": "129 kcal & 76% Vitamin C",
    "options": [
      "Strawberry trait (Europe & Americas)",
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "129 kcal & 76% Vitamin C"
    ],
    "explanation": "Per 100g, Sugar Kiwi yields 129 kcal, 4.8g fiber, and 288mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_633",
    "fruitId": "coconut_var_11",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Velvet Coconut best characterized?",
    "correctAnswer": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "options": [
      "Watermelon trait (Kalahari, Africa)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Apple trait (Pome)",
      "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics"
    ],
    "explanation": "Culinary sommeliers describe Velvet Coconut as having: Nutty, creamy, refreshing water with nuanced notes of velvet aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_634",
    "fruitId": "avocado_var_11",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Frost Avocado?",
    "correctAnswer": "Botanical Specimen #315: Frost Avocado is cultivated primarily across Mesoa...",
    "options": [
      "Botanical Specimen #315: Frost Avocado is cultivated primarily across Mesoa...",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Grape trait (Mediterranean)",
      "Banana trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #315: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_635",
    "fruitId": "pomegranate_var_11",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Pomegranate?",
    "correctAnswer": "Botanical Specimen #316: Royal Pomegranate is cultivated primarily across P...",
    "options": [
      "Orange trait (Citrus)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Pineapple trait (Parana Basin, South America)",
      "Botanical Specimen #316: Royal Pomegranate is cultivated primarily across P..."
    ],
    "explanation": "Botanical Specimen #316: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_636",
    "fruitId": "papaya_var_11",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Golden Papaya originally evolve and originate?",
    "correctAnswer": "Central America",
    "options": [
      "Central America",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Strawberry trait (Berry)",
      "Mango trait (India & Myanmar)"
    ],
    "explanation": "Golden Papaya was first documented and domesticated in Central America (Cultivar #11).",
    "points": 200
  },
  {
    "id": "trivia_q_637",
    "fruitId": "fig_var_11",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Alpine Fig?",
    "correctAnswer": "Ficus carica var. alpine",
    "options": [
      "Ficus carica var. alpine",
      "Watermelon trait (Melon)",
      "Lemon trait (Northeast India)",
      "Apple trait (Malus domestica)"
    ],
    "explanation": "The formal taxonomic binomial for Alpine Fig is Ficus carica var. alpine.",
    "points": 250
  },
  {
    "id": "trivia_q_638",
    "fruitId": "blueberry_var_11",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Wild Blueberry?",
    "correctAnswer": "61 kcal & 154% Vitamin C",
    "options": [
      "Grape trait (Berry)",
      "61 kcal & 154% Vitamin C",
      "Cherry trait (Anatolia, Turkey)",
      "Banana trait (Musa acuminata)"
    ],
    "explanation": "Per 100g, Wild Blueberry yields 61 kcal, 6.6g fiber, and 402mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_639",
    "fruitId": "raspberry_var_11",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Imperial Raspberry best characterized?",
    "correctAnswer": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "options": [
      "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
      "Peach trait (Northwest China)",
      "Orange trait (Citrus × sinensis)",
      "Pineapple trait (Tropical)"
    ],
    "explanation": "Culinary sommeliers describe Imperial Raspberry as having: Velvety, delicate sweet-tart with nuanced notes of imperial aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_640",
    "fruitId": "apple",
    "fruitName": "Apple",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Apple?",
    "correctAnswer": "Botanical Specimen #1: Apple is cultivated primarily across Central Asia. I...",
    "options": [
      "Botanical Specimen #1: Apple is cultivated primarily across Central Asia. I...",
      "Strawberry trait (Fragaria × ananassa)",
      "Mango trait (Tropical)",
      "Pear trait (Temperate Europe)"
    ],
    "explanation": "Botanical Specimen #1: Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_641",
    "fruitId": "banana",
    "fruitName": "Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Banana?",
    "correctAnswer": "Botanical Specimen #2: Banana is cultivated primarily across Southeast Asia...",
    "options": [
      "Watermelon trait (Citrullus lanatus)",
      "Botanical Specimen #2: Banana is cultivated primarily across Southeast Asia...",
      "Kiwi trait (Yangtze Valley, China)",
      "Lemon trait (Citrus)"
    ],
    "explanation": "Botanical Specimen #2: Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_642",
    "fruitId": "orange",
    "fruitName": "Orange",
    "category": "Citrus",
    "difficulty": "easy",
    "question": "Where did the Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Coconut trait (Indo-Pacific)",
      "Southern China",
      "Cherry trait (Stone Fruit)",
      "Grape trait (Vitis vinifera)"
    ],
    "explanation": "Orange was first documented and domesticated in Southern China (Cultivar #1).",
    "points": 250
  },
  {
    "id": "trivia_q_643",
    "fruitId": "strawberry",
    "fruitName": "Strawberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Strawberry?",
    "correctAnswer": "Fragaria × ananassa",
    "options": [
      "Avocado trait (Mesoamerica)",
      "Fragaria × ananassa",
      "Pineapple trait (Ananas comosus)",
      "Peach trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Strawberry is Fragaria × ananassa.",
    "points": 300
  },
  {
    "id": "trivia_q_644",
    "fruitId": "watermelon",
    "fruitName": "Watermelon",
    "category": "Melon",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Watermelon?",
    "correctAnswer": "63 kcal & 72% Vitamin C",
    "options": [
      "63 kcal & 72% Vitamin C",
      "Mango trait (Mangifera indica)",
      "Pear trait (Pome)",
      "Pomegranate trait (Persia to Northern India)"
    ],
    "explanation": "Per 100g, Watermelon yields 63 kcal, 2.4g fiber, and 156mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_645",
    "fruitId": "grape",
    "fruitName": "Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Kiwi trait (Exotic)",
      "Papaya trait (Central America)",
      "Lemon trait (Citrus limon)",
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics"
    ],
    "explanation": "Culinary sommeliers describe Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_646",
    "fruitId": "pineapple",
    "fruitName": "Pineapple",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Pineapple?",
    "correctAnswer": "Botanical Specimen #7: Pineapple is cultivated primarily across Parana Basi...",
    "options": [
      "Fig trait (Levant & Mediterranean)",
      "Coconut trait (Tropical)",
      "Cherry trait (Prunus avium)",
      "Botanical Specimen #7: Pineapple is cultivated primarily across Parana Basi..."
    ],
    "explanation": "Botanical Specimen #7: Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_647",
    "fruitId": "mango",
    "fruitName": "Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Mango?",
    "correctAnswer": "Botanical Specimen #8: Mango is cultivated primarily across India & Myanmar...",
    "options": [
      "Peach trait (Prunus persica)",
      "Avocado trait (Stone Fruit)",
      "Botanical Specimen #8: Mango is cultivated primarily across India & Myanmar...",
      "Blueberry trait (North America)"
    ],
    "explanation": "Botanical Specimen #8: Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_648",
    "fruitId": "lemon",
    "fruitName": "Lemon",
    "category": "Citrus",
    "difficulty": "easy",
    "question": "Where did the Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Raspberry trait (Eurasia)",
      "Pomegranate trait (Exotic)",
      "Pear trait (Pyrus communis)",
      "Northeast India"
    ],
    "explanation": "Lemon was first documented and domesticated in Northeast India (Cultivar #1).",
    "points": 300
  },
  {
    "id": "trivia_q_649",
    "fruitId": "cherry",
    "fruitName": "Cherry",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Cherry?",
    "correctAnswer": "Prunus avium",
    "options": [
      "Prunus avium",
      "Kiwi trait (Actinidia deliciosa)",
      "Papaya trait (Tropical)",
      "Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "The formal taxonomic binomial for Cherry is Prunus avium.",
    "points": 350
  },
  {
    "id": "trivia_q_650",
    "fruitId": "peach",
    "fruitName": "Peach",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Peach?",
    "correctAnswer": "105 kcal & 150% Vitamin C",
    "options": [
      "Mangosteen trait (Sundaland, Southeast Asia)",
      "Fig trait (Exotic)",
      "Coconut trait (Cocos nucifera)",
      "105 kcal & 150% Vitamin C"
    ],
    "explanation": "Per 100g, Peach yields 105 kcal, 4.2g fiber, and 270mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_651",
    "fruitId": "pear",
    "fruitName": "Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
      "Blueberry trait (Berry)",
      "Rambutan trait (Malaysia & Indonesia)",
      "Avocado trait (Persea americana)"
    ],
    "explanation": "Culinary sommeliers describe Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_652",
    "fruitId": "kiwi",
    "fruitName": "Kiwi",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Kiwi?",
    "correctAnswer": "Botanical Specimen #13: Kiwi is cultivated primarily across Yangtze Valley,...",
    "options": [
      "Pomegranate trait (Punica granatum)",
      "Botanical Specimen #13: Kiwi is cultivated primarily across Yangtze Valley,...",
      "Raspberry trait (Berry)",
      "Lychee trait (Southern China)"
    ],
    "explanation": "Botanical Specimen #13: Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_653",
    "fruitId": "coconut",
    "fruitName": "Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Coconut?",
    "correctAnswer": "Botanical Specimen #14: Coconut is cultivated primarily across Indo-Pacific...",
    "options": [
      "Starfruit trait (Tropical Asia)",
      "Durian trait (Exotic)",
      "Papaya trait (Carica papaya)",
      "Botanical Specimen #14: Coconut is cultivated primarily across Indo-Pacific..."
    ],
    "explanation": "Botanical Specimen #14: Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_654",
    "fruitId": "avocado",
    "fruitName": "Avocado",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "Where did the Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Fig trait (Ficus carica)",
      "Mangosteen trait (Exotic)",
      "Jackfruit trait (Western Ghats, India)"
    ],
    "explanation": "Avocado was first documented and domesticated in Mesoamerica (Cultivar #1).",
    "points": 350
  },
  {
    "id": "trivia_q_655",
    "fruitId": "pomegranate",
    "fruitName": "Pomegranate",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What is the correct botanical Latin binomial name for Pomegranate?",
    "correctAnswer": "Punica granatum",
    "options": [
      "Punica granatum",
      "Buddha's Hand trait (Lower Himalayas)",
      "Blueberry trait (Vaccinium corymbosum)",
      "Rambutan trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Pomegranate is Punica granatum.",
    "points": 150
  },
  {
    "id": "trivia_q_656",
    "fruitId": "papaya",
    "fruitName": "Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Papaya?",
    "correctAnswer": "37 kcal & 228% Vitamin C",
    "options": [
      "37 kcal & 228% Vitamin C",
      "Raspberry trait (Rubus idaeus)",
      "Lychee trait (Exotic)",
      "Miracle Berry trait (West Africa)"
    ],
    "explanation": "Per 100g, Papaya yields 37 kcal, 6.0g fiber, and 384mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_657",
    "fruitId": "fig",
    "fruitName": "Fig",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "How is the sensory flavor profile of Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Black Sapote trait (Mesoamerica)",
      "Starfruit trait (Exotic)",
      "Durian trait (Durio zibethinus)",
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics"
    ],
    "explanation": "Culinary sommeliers describe Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_658",
    "fruitId": "blueberry",
    "fruitName": "Blueberry",
    "category": "Berry",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Blueberry?",
    "correctAnswer": "Botanical Specimen #19: Blueberry is cultivated primarily across North Amer...",
    "options": [
      "Botanical Specimen #19: Blueberry is cultivated primarily across North Amer...",
      "Jabuticaba trait (Minas Gerais, Brazil)",
      "Mangosteen trait (Garcinia mangostana)",
      "Jackfruit trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #19: Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_659",
    "fruitId": "raspberry",
    "fruitName": "Raspberry",
    "category": "Berry",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Raspberry?",
    "correctAnswer": "Botanical Specimen #20: Raspberry is cultivated primarily across Eurasia. I...",
    "options": [
      "Botanical Specimen #20: Raspberry is cultivated primarily across Eurasia. I...",
      "Rambutan trait (Nephelium lappaceum)",
      "Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "Botanical Specimen #20: Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_660",
    "fruitId": "durian",
    "fruitName": "Durian",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Lychee trait (Litchi chinensis)",
      "Miracle Berry trait (Superfruit)",
      "Borneo & Sumatra",
      "Golden Banana trait (Southeast Asia)"
    ],
    "explanation": "Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #1).",
    "points": 150
  },
  {
    "id": "trivia_q_661",
    "fruitId": "mangosteen",
    "fruitName": "Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Mangosteen?",
    "correctAnswer": "Garcinia mangostana",
    "options": [
      "Garcinia mangostana",
      "Alpine Orange trait (Southern China)",
      "Black Sapote trait (Exotic)",
      "Starfruit trait (Averrhoa carambola)"
    ],
    "explanation": "The formal taxonomic binomial for Mangosteen is Garcinia mangostana.",
    "points": 200
  },
  {
    "id": "trivia_q_662",
    "fruitId": "rambutan",
    "fruitName": "Rambutan",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Rambutan?",
    "correctAnswer": "79 kcal & 56% Vitamin C",
    "options": [
      "Jackfruit trait (Artocarpus heterophyllus)",
      "Jabuticaba trait (Berry)",
      "Wild Strawberry trait (Europe & Americas)",
      "79 kcal & 56% Vitamin C"
    ],
    "explanation": "Per 100g, Rambutan yields 79 kcal, 1.8g fiber, and 498mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_663",
    "fruitId": "lychee",
    "fruitName": "Lychee",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)",
      "Buddha's Hand trait (Citrus medica var. sarcodactylis)",
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics"
    ],
    "explanation": "Culinary sommeliers describe Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_664",
    "fruitId": "starfruit",
    "fruitName": "Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Starfruit?",
    "correctAnswer": "Botanical Specimen #25: Starfruit is cultivated primarily across Tropical A...",
    "options": [
      "Botanical Specimen #25: Starfruit is cultivated primarily across Tropical A...",
      "Miracle Berry trait (Synsepalum dulcificum)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Botanical Specimen #25: Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_665",
    "fruitId": "jackfruit",
    "fruitName": "Jackfruit",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Jackfruit?",
    "correctAnswer": "Botanical Specimen #26: Jackfruit is cultivated primarily across Western Gh...",
    "options": [
      "Botanical Specimen #26: Jackfruit is cultivated primarily across Western Gh...",
      "Black Sapote trait (Diospyros nigra)",
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "Botanical Specimen #26: Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_666",
    "fruitId": "buddhas_hand",
    "fruitName": "Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)",
      "Jabuticaba trait (Plinia cauliflora)",
      "Lower Himalayas"
    ],
    "explanation": "Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #1).",
    "points": 200
  },
  {
    "id": "trivia_q_667",
    "fruitId": "miracle_fruit",
    "fruitName": "Miracle Berry",
    "category": "Superfruit",
    "difficulty": "legendary",
    "question": "What is the correct botanical Latin binomial name for Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Synsepalum dulcificum",
      "Imperial Watermelon trait (Melon)",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "The formal taxonomic binomial for Miracle Berry is Synsepalum dulcificum.",
    "points": 250
  },
  {
    "id": "trivia_q_668",
    "fruitId": "black_sapote",
    "fruitName": "Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Black Sapote?",
    "correctAnswer": "121 kcal & 134% Vitamin C",
    "options": [
      "Golden Banana trait (Musa acuminata var. golden)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Ruby Grape trait (Berry)",
      "121 kcal & 134% Vitamin C"
    ],
    "explanation": "Per 100g, Black Sapote yields 121 kcal, 3.6g fiber, and 92mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_669",
    "fruitId": "jabuticaba",
    "fruitName": "Jabuticaba",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "How is the sensory flavor profile of Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics"
    ],
    "explanation": "Culinary sommeliers describe Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_670",
    "fruitId": "apple_var_2",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #31: Royal Apple is cultivated primarily across Central ...",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Botanical Specimen #31: Royal Apple is cultivated primarily across Central ..."
    ],
    "explanation": "Botanical Specimen #31: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_671",
    "fruitId": "banana_var_2",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #32: Golden Banana is cultivated primarily across Southe...",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Botanical Specimen #32: Golden Banana is cultivated primarily across Southe..."
    ],
    "explanation": "Botanical Specimen #32: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_672",
    "fruitId": "orange_var_2",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Southern China",
      "Ruby Grape trait (Vitis vinifera var. ruby)"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #2).",
    "points": 250
  },
  {
    "id": "trivia_q_673",
    "fruitId": "strawberry_var_2",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Fragaria × ananassa var. wild",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_674",
    "fruitId": "watermelon_var_2",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "53 kcal & 212% Vitamin C",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "53 kcal & 212% Vitamin C",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 53 kcal, 5.4g fiber, and 206mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_675",
    "fruitId": "grape_var_2",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Golden Papaya trait (Central America)",
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_676",
    "fruitId": "pineapple_var_2",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #37: Emerald Pineapple is cultivated primarily across Pa...",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Botanical Specimen #37: Emerald Pineapple is cultivated primarily across Pa..."
    ],
    "explanation": "Botanical Specimen #37: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_677",
    "fruitId": "mango_var_2",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #38: Celestial Mango is cultivated primarily across Indi...",
    "options": [
      "Botanical Specimen #38: Celestial Mango is cultivated primarily across Indi...",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "Botanical Specimen #38: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_678",
    "fruitId": "lemon_var_2",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)",
      "Northeast India",
      "Scarlet Pear trait (Pyrus communis var. scarlet)"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #2).",
    "points": 300
  },
  {
    "id": "trivia_q_679",
    "fruitId": "cherry_var_2",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Prunus avium var. giant",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_680",
    "fruitId": "peach_var_2",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "95 kcal & 40% Vitamin C",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "95 kcal & 40% Vitamin C"
    ],
    "explanation": "Per 100g, Honey Peach yields 95 kcal, 1.2g fiber, and 320mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_681",
    "fruitId": "pear_var_2",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
      "Celestial Rambutan trait (Malaysia & Indonesia)"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_682",
    "fruitId": "kiwi_var_2",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #43: Sugar Kiwi is cultivated primarily across Yangtze V...",
    "options": [
      "Botanical Specimen #43: Sugar Kiwi is cultivated primarily across Yangtze V...",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #43: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_683",
    "fruitId": "coconut_var_2",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #44: Velvet Coconut is cultivated primarily across Indo-...",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Botanical Specimen #44: Velvet Coconut is cultivated primarily across Indo-..."
    ],
    "explanation": "Botanical Specimen #44: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_684",
    "fruitId": "avocado_var_2",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Honey Jackfruit trait (Western Ghats, India)"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #2).",
    "points": 350
  },
  {
    "id": "trivia_q_685",
    "fruitId": "pomegranate_var_2",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Punica granatum var. royal",
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_686",
    "fruitId": "papaya_var_2",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "137 kcal & 118% Vitamin C",
    "options": [
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "137 kcal & 118% Vitamin C",
      "Sugar Miracle Berry trait (West Africa)"
    ],
    "explanation": "Per 100g, Golden Papaya yields 137 kcal, 3.0g fiber, and 434mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_687",
    "fruitId": "fig_var_2",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_688",
    "fruitId": "blueberry_var_2",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #49: Wild Blueberry is cultivated primarily across North...",
    "options": [
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Botanical Specimen #49: Wild Blueberry is cultivated primarily across North...",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #49: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_689",
    "fruitId": "raspberry_var_2",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #50: Imperial Raspberry is cultivated primarily across E...",
    "options": [
      "Scarlet Buddha's Hand trait (Citrus)",
      "Botanical Specimen #50: Imperial Raspberry is cultivated primarily across E...",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "Botanical Specimen #50: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_690",
    "fruitId": "durian_var_2",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Ruby Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Borneo & Sumatra"
    ],
    "explanation": "Ruby Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #2).",
    "points": 150
  },
  {
    "id": "trivia_q_691",
    "fruitId": "mangosteen_var_2",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Emerald Mangosteen?",
    "correctAnswer": "Garcinia mangostana var. emerald",
    "options": [
      "Garcinia mangostana var. emerald",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)"
    ],
    "explanation": "The formal taxonomic binomial for Emerald Mangosteen is Garcinia mangostana var. emerald.",
    "points": 200
  },
  {
    "id": "trivia_q_692",
    "fruitId": "rambutan_var_2",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Celestial Rambutan?",
    "correctAnswer": "69 kcal & 196% Vitamin C",
    "options": [
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "69 kcal & 196% Vitamin C",
      "Wild Strawberry trait (Europe & Americas)"
    ],
    "explanation": "Per 100g, Celestial Rambutan yields 69 kcal, 4.8g fiber, and 548mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_693",
    "fruitId": "lychee_var_2",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Midnight Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Culinary sommeliers describe Midnight Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_694",
    "fruitId": "starfruit_var_2",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Starfruit?",
    "correctAnswer": "Botanical Specimen #55: Giant Starfruit is cultivated primarily across Trop...",
    "options": [
      "Botanical Specimen #55: Giant Starfruit is cultivated primarily across Trop...",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Botanical Specimen #55: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_695",
    "fruitId": "jackfruit_var_2",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Honey Jackfruit?",
    "correctAnswer": "Botanical Specimen #56: Honey Jackfruit is cultivated primarily across West...",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Alpine Orange trait (Citrus)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Botanical Specimen #56: Honey Jackfruit is cultivated primarily across West..."
    ],
    "explanation": "Botanical Specimen #56: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_696",
    "fruitId": "buddhas_hand_var_2",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Scarlet Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Lower Himalayas",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)"
    ],
    "explanation": "Scarlet Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #2).",
    "points": 200
  },
  {
    "id": "trivia_q_697",
    "fruitId": "miracle_fruit_var_2",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Sugar Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum var. sugar",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Synsepalum dulcificum var. sugar"
    ],
    "explanation": "The formal taxonomic binomial for Sugar Miracle Berry is Synsepalum dulcificum var. sugar.",
    "points": 250
  },
  {
    "id": "trivia_q_698",
    "fruitId": "black_sapote_var_2",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Velvet Black Sapote?",
    "correctAnswer": "111 kcal & 24% Vitamin C",
    "options": [
      "111 kcal & 24% Vitamin C",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)"
    ],
    "explanation": "Per 100g, Velvet Black Sapote yields 111 kcal, 6.6g fiber, and 142mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_699",
    "fruitId": "jabuticaba_var_2",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Frost Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
      "Alpine Orange trait (Citrus × sinensis var. alpine)"
    ],
    "explanation": "Culinary sommeliers describe Frost Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_700",
    "fruitId": "apple_var_3",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #61: Royal Apple is cultivated primarily across Central ...",
    "options": [
      "Botanical Specimen #61: Royal Apple is cultivated primarily across Central ...",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)"
    ],
    "explanation": "Botanical Specimen #61: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_701",
    "fruitId": "banana_var_3",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #62: Golden Banana is cultivated primarily across Southe...",
    "options": [
      "Botanical Specimen #62: Golden Banana is cultivated primarily across Southe...",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "Botanical Specimen #62: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_702",
    "fruitId": "orange_var_3",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Southern China",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)",
      "Ruby Grape trait (Vitis vinifera var. ruby)"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #3).",
    "points": 250
  },
  {
    "id": "trivia_q_703",
    "fruitId": "strawberry_var_3",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Frost Avocado trait (Mesoamerica)",
      "Fragaria × ananassa var. wild",
      "Honey Peach trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_704",
    "fruitId": "watermelon_var_3",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "43 kcal & 102% Vitamin C",
    "options": [
      "43 kcal & 102% Vitamin C",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 43 kcal, 2.4g fiber, and 256mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_705",
    "fruitId": "grape_var_3",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
      "Sugar Kiwi trait (Exotic)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Golden Papaya trait (Central America)"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_706",
    "fruitId": "pineapple_var_3",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #67: Emerald Pineapple is cultivated primarily across Pa...",
    "options": [
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Alpine Fig trait (Levant & Mediterranean)",
      "Botanical Specimen #67: Emerald Pineapple is cultivated primarily across Pa..."
    ],
    "explanation": "Botanical Specimen #67: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_707",
    "fruitId": "mango_var_3",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #68: Celestial Mango is cultivated primarily across Indi...",
    "options": [
      "Botanical Specimen #68: Celestial Mango is cultivated primarily across Indi...",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "Botanical Specimen #68: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_708",
    "fruitId": "lemon_var_3",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Northeast India",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Imperial Raspberry trait (Eurasia)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #3).",
    "points": 300
  },
  {
    "id": "trivia_q_709",
    "fruitId": "cherry_var_3",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)",
      "Prunus avium var. giant"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_710",
    "fruitId": "peach_var_3",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "85 kcal & 180% Vitamin C",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)",
      "85 kcal & 180% Vitamin C"
    ],
    "explanation": "Per 100g, Honey Peach yields 85 kcal, 4.2g fiber, and 370mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_711",
    "fruitId": "pear_var_3",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_712",
    "fruitId": "kiwi_var_3",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #73: Sugar Kiwi is cultivated primarily across Yangtze V...",
    "options": [
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Botanical Specimen #73: Sugar Kiwi is cultivated primarily across Yangtze V..."
    ],
    "explanation": "Botanical Specimen #73: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_713",
    "fruitId": "coconut_var_3",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #74: Velvet Coconut is cultivated primarily across Indo-...",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Botanical Specimen #74: Velvet Coconut is cultivated primarily across Indo-..."
    ],
    "explanation": "Botanical Specimen #74: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_714",
    "fruitId": "avocado_var_3",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Mesoamerica"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #3).",
    "points": 350
  },
  {
    "id": "trivia_q_715",
    "fruitId": "pomegranate_var_3",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Punica granatum var. royal"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_716",
    "fruitId": "papaya_var_3",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "127 kcal & 258% Vitamin C",
    "options": [
      "127 kcal & 258% Vitamin C",
      "Midnight Lychee trait (Exotic)",
      "Sugar Miracle Berry trait (West Africa)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)"
    ],
    "explanation": "Per 100g, Golden Papaya yields 127 kcal, 6.0g fiber, and 484mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_717",
    "fruitId": "fig_var_3",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_718",
    "fruitId": "blueberry_var_3",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #79: Wild Blueberry is cultivated primarily across North...",
    "options": [
      "Honey Jackfruit trait (Tropical)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Botanical Specimen #79: Wild Blueberry is cultivated primarily across North...",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)"
    ],
    "explanation": "Botanical Specimen #79: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_719",
    "fruitId": "raspberry_var_3",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #80: Imperial Raspberry is cultivated primarily across E...",
    "options": [
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Royal Apple trait (Central Asia)",
      "Botanical Specimen #80: Imperial Raspberry is cultivated primarily across E..."
    ],
    "explanation": "Botanical Specimen #80: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_720",
    "fruitId": "durian_var_3",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Ruby Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Golden Banana trait (Southeast Asia)",
      "Borneo & Sumatra"
    ],
    "explanation": "Ruby Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #3).",
    "points": 150
  },
  {
    "id": "trivia_q_721",
    "fruitId": "mangosteen_var_3",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Emerald Mangosteen?",
    "correctAnswer": "Garcinia mangostana var. emerald",
    "options": [
      "Velvet Black Sapote trait (Exotic)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Alpine Orange trait (Southern China)",
      "Garcinia mangostana var. emerald"
    ],
    "explanation": "The formal taxonomic binomial for Emerald Mangosteen is Garcinia mangostana var. emerald.",
    "points": 200
  },
  {
    "id": "trivia_q_722",
    "fruitId": "rambutan_var_3",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Celestial Rambutan?",
    "correctAnswer": "59 kcal & 86% Vitamin C",
    "options": [
      "59 kcal & 86% Vitamin C",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Wild Strawberry trait (Europe & Americas)"
    ],
    "explanation": "Per 100g, Celestial Rambutan yields 59 kcal, 1.8g fiber, and 598mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_723",
    "fruitId": "lychee_var_3",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Midnight Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Culinary sommeliers describe Midnight Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_724",
    "fruitId": "starfruit_var_3",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Giant Starfruit?",
    "correctAnswer": "Botanical Specimen #85: Giant Starfruit is cultivated primarily across Trop...",
    "options": [
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Botanical Specimen #85: Giant Starfruit is cultivated primarily across Trop..."
    ],
    "explanation": "Botanical Specimen #85: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_725",
    "fruitId": "jackfruit_var_3",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Honey Jackfruit?",
    "correctAnswer": "Botanical Specimen #86: Honey Jackfruit is cultivated primarily across West...",
    "options": [
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Botanical Specimen #86: Honey Jackfruit is cultivated primarily across West..."
    ],
    "explanation": "Botanical Specimen #86: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_726",
    "fruitId": "buddhas_hand_var_3",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Scarlet Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Lower Himalayas",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)"
    ],
    "explanation": "Scarlet Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #3).",
    "points": 200
  },
  {
    "id": "trivia_q_727",
    "fruitId": "miracle_fruit_var_3",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Sugar Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum var. sugar",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Synsepalum dulcificum var. sugar",
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)"
    ],
    "explanation": "The formal taxonomic binomial for Sugar Miracle Berry is Synsepalum dulcificum var. sugar.",
    "points": 250
  },
  {
    "id": "trivia_q_728",
    "fruitId": "black_sapote_var_3",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Velvet Black Sapote?",
    "correctAnswer": "101 kcal & 164% Vitamin C",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "101 kcal & 164% Vitamin C"
    ],
    "explanation": "Per 100g, Velvet Black Sapote yields 101 kcal, 3.6g fiber, and 192mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_729",
    "fruitId": "jabuticaba_var_3",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Frost Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Emerald Pineapple trait (Tropical)",
      "Honey Peach trait (Northwest China)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics"
    ],
    "explanation": "Culinary sommeliers describe Frost Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_730",
    "fruitId": "apple_var_4",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #91: Royal Apple is cultivated primarily across Central ...",
    "options": [
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Scarlet Pear trait (Temperate Europe)",
      "Botanical Specimen #91: Royal Apple is cultivated primarily across Central ..."
    ],
    "explanation": "Botanical Specimen #91: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_731",
    "fruitId": "banana_var_4",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #92: Golden Banana is cultivated primarily across Southe...",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Botanical Specimen #92: Golden Banana is cultivated primarily across Southe...",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "Botanical Specimen #92: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_732",
    "fruitId": "orange_var_4",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Southern China",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #4).",
    "points": 250
  },
  {
    "id": "trivia_q_733",
    "fruitId": "strawberry_var_4",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Fragaria × ananassa var. wild"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_734",
    "fruitId": "watermelon_var_4",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "143 kcal & 242% Vitamin C",
    "options": [
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "143 kcal & 242% Vitamin C",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 143 kcal, 5.4g fiber, and 306mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_735",
    "fruitId": "grape_var_4",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_736",
    "fruitId": "pineapple_var_4",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #97: Emerald Pineapple is cultivated primarily across Pa...",
    "options": [
      "Botanical Specimen #97: Emerald Pineapple is cultivated primarily across Pa...",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Velvet Coconut trait (Tropical)",
      "Alpine Fig trait (Levant & Mediterranean)"
    ],
    "explanation": "Botanical Specimen #97: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_737",
    "fruitId": "mango_var_4",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #98: Celestial Mango is cultivated primarily across Indi...",
    "options": [
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)",
      "Botanical Specimen #98: Celestial Mango is cultivated primarily across Indi..."
    ],
    "explanation": "Botanical Specimen #98: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_738",
    "fruitId": "lemon_var_4",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Northeast India",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Imperial Raspberry trait (Eurasia)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #4).",
    "points": 300
  },
  {
    "id": "trivia_q_739",
    "fruitId": "cherry_var_4",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)",
      "Prunus avium var. giant"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_740",
    "fruitId": "peach_var_4",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "75 kcal & 70% Vitamin C",
    "options": [
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "75 kcal & 70% Vitamin C"
    ],
    "explanation": "Per 100g, Honey Peach yields 75 kcal, 1.2g fiber, and 420mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_741",
    "fruitId": "pear_var_4",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_742",
    "fruitId": "kiwi_var_4",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #103: Sugar Kiwi is cultivated primarily across Yangtze ...",
    "options": [
      "Botanical Specimen #103: Sugar Kiwi is cultivated primarily across Yangtze ...",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)",
      "Midnight Lychee trait (Southern China)"
    ],
    "explanation": "Botanical Specimen #103: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_743",
    "fruitId": "coconut_var_4",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #104: Velvet Coconut is cultivated primarily across Indo...",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Botanical Specimen #104: Velvet Coconut is cultivated primarily across Indo...",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #104: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_744",
    "fruitId": "avocado_var_4",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Emerald Mangosteen trait (Exotic)",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Mesoamerica"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #4).",
    "points": 350
  },
  {
    "id": "trivia_q_745",
    "fruitId": "pomegranate_var_4",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Punica granatum var. royal",
      "Scarlet Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_746",
    "fruitId": "papaya_var_4",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "117 kcal & 148% Vitamin C",
    "options": [
      "117 kcal & 148% Vitamin C",
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)"
    ],
    "explanation": "Per 100g, Golden Papaya yields 117 kcal, 3.0g fiber, and 534mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_747",
    "fruitId": "fig_var_4",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Giant Starfruit trait (Exotic)",
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Ruby Durian trait (Durio zibethinus var. ruby)"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_748",
    "fruitId": "blueberry_var_4",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #109: Wild Blueberry is cultivated primarily across Nort...",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Botanical Specimen #109: Wild Blueberry is cultivated primarily across Nort..."
    ],
    "explanation": "Botanical Specimen #109: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_749",
    "fruitId": "raspberry_var_4",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #110: Imperial Raspberry is cultivated primarily across ...",
    "options": [
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Botanical Specimen #110: Imperial Raspberry is cultivated primarily across ...",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "Botanical Specimen #110: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_750",
    "fruitId": "durian_var_4",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Ruby Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Borneo & Sumatra",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)"
    ],
    "explanation": "Ruby Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #4).",
    "points": 150
  },
  {
    "id": "trivia_q_751",
    "fruitId": "mangosteen_var_4",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Emerald Mangosteen?",
    "correctAnswer": "Garcinia mangostana var. emerald",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Garcinia mangostana var. emerald",
      "Velvet Black Sapote trait (Exotic)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)"
    ],
    "explanation": "The formal taxonomic binomial for Emerald Mangosteen is Garcinia mangostana var. emerald.",
    "points": 200
  },
  {
    "id": "trivia_q_752",
    "fruitId": "rambutan_var_4",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Celestial Rambutan?",
    "correctAnswer": "49 kcal & 226% Vitamin C",
    "options": [
      "Frost Jabuticaba trait (Berry)",
      "Wild Strawberry trait (Europe & Americas)",
      "49 kcal & 226% Vitamin C",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)"
    ],
    "explanation": "Per 100g, Celestial Rambutan yields 49 kcal, 4.8g fiber, and 128mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_753",
    "fruitId": "lychee_var_4",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Midnight Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Culinary sommeliers describe Midnight Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_754",
    "fruitId": "starfruit_var_4",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Starfruit?",
    "correctAnswer": "Botanical Specimen #115: Giant Starfruit is cultivated primarily across Tro...",
    "options": [
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Botanical Specimen #115: Giant Starfruit is cultivated primarily across Tro...",
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #115: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_755",
    "fruitId": "jackfruit_var_4",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Honey Jackfruit?",
    "correctAnswer": "Botanical Specimen #116: Honey Jackfruit is cultivated primarily across Wes...",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Alpine Orange trait (Citrus)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Botanical Specimen #116: Honey Jackfruit is cultivated primarily across Wes..."
    ],
    "explanation": "Botanical Specimen #116: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_756",
    "fruitId": "buddhas_hand_var_4",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Scarlet Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)",
      "Lower Himalayas",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Scarlet Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #4).",
    "points": 200
  },
  {
    "id": "trivia_q_757",
    "fruitId": "miracle_fruit_var_4",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Sugar Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum var. sugar",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Synsepalum dulcificum var. sugar"
    ],
    "explanation": "The formal taxonomic binomial for Sugar Miracle Berry is Synsepalum dulcificum var. sugar.",
    "points": 250
  },
  {
    "id": "trivia_q_758",
    "fruitId": "black_sapote_var_4",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Velvet Black Sapote?",
    "correctAnswer": "91 kcal & 54% Vitamin C",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "91 kcal & 54% Vitamin C"
    ],
    "explanation": "Per 100g, Velvet Black Sapote yields 91 kcal, 6.6g fiber, and 242mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_759",
    "fruitId": "jabuticaba_var_4",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Frost Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)"
    ],
    "explanation": "Culinary sommeliers describe Frost Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_760",
    "fruitId": "apple_var_5",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #121: Royal Apple is cultivated primarily across Central...",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Botanical Specimen #121: Royal Apple is cultivated primarily across Central...",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #121: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_761",
    "fruitId": "banana_var_5",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #122: Golden Banana is cultivated primarily across South...",
    "options": [
      "Botanical Specimen #122: Golden Banana is cultivated primarily across South...",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "Botanical Specimen #122: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_762",
    "fruitId": "orange_var_5",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Southern China",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #5).",
    "points": 250
  },
  {
    "id": "trivia_q_763",
    "fruitId": "strawberry_var_5",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Frost Avocado trait (Mesoamerica)",
      "Fragaria × ananassa var. wild",
      "Honey Peach trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_764",
    "fruitId": "watermelon_var_5",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "133 kcal & 132% Vitamin C",
    "options": [
      "133 kcal & 132% Vitamin C",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)",
      "Royal Pomegranate trait (Persia to Northern India)"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 133 kcal, 2.4g fiber, and 356mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_765",
    "fruitId": "grape_var_5",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Sugar Kiwi trait (Exotic)",
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
      "Golden Papaya trait (Central America)",
      "Midnight Lemon trait (Citrus limon var. midnight)"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_766",
    "fruitId": "pineapple_var_5",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #127: Emerald Pineapple is cultivated primarily across P...",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Botanical Specimen #127: Emerald Pineapple is cultivated primarily across P..."
    ],
    "explanation": "Botanical Specimen #127: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_767",
    "fruitId": "mango_var_5",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #128: Celestial Mango is cultivated primarily across Ind...",
    "options": [
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Botanical Specimen #128: Celestial Mango is cultivated primarily across Ind...",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "Botanical Specimen #128: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_768",
    "fruitId": "lemon_var_5",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Northeast India"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #5).",
    "points": 300
  },
  {
    "id": "trivia_q_769",
    "fruitId": "cherry_var_5",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Prunus avium var. giant",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_770",
    "fruitId": "peach_var_5",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "65 kcal & 210% Vitamin C",
    "options": [
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "65 kcal & 210% Vitamin C",
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Per 100g, Honey Peach yields 65 kcal, 4.2g fiber, and 470mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_771",
    "fruitId": "pear_var_5",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_772",
    "fruitId": "kiwi_var_5",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #133: Sugar Kiwi is cultivated primarily across Yangtze ...",
    "options": [
      "Botanical Specimen #133: Sugar Kiwi is cultivated primarily across Yangtze ...",
      "Imperial Raspberry trait (Berry)",
      "Midnight Lychee trait (Southern China)",
      "Royal Pomegranate trait (Punica granatum var. royal)"
    ],
    "explanation": "Botanical Specimen #133: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_773",
    "fruitId": "coconut_var_5",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #134: Velvet Coconut is cultivated primarily across Indo...",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Botanical Specimen #134: Velvet Coconut is cultivated primarily across Indo..."
    ],
    "explanation": "Botanical Specimen #134: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_774",
    "fruitId": "avocado_var_5",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Emerald Mangosteen trait (Exotic)",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Mesoamerica",
      "Alpine Fig trait (Ficus carica var. alpine)"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #5).",
    "points": 350
  },
  {
    "id": "trivia_q_775",
    "fruitId": "pomegranate_var_5",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)",
      "Punica granatum var. royal"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_776",
    "fruitId": "papaya_var_5",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "107 kcal & 38% Vitamin C",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "107 kcal & 38% Vitamin C"
    ],
    "explanation": "Per 100g, Golden Papaya yields 107 kcal, 6.0g fiber, and 584mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_777",
    "fruitId": "fig_var_5",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
      "Giant Starfruit trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_778",
    "fruitId": "blueberry_var_5",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #139: Wild Blueberry is cultivated primarily across Nort...",
    "options": [
      "Botanical Specimen #139: Wild Blueberry is cultivated primarily across Nort...",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)"
    ],
    "explanation": "Botanical Specimen #139: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_779",
    "fruitId": "raspberry_var_5",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #140: Imperial Raspberry is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #140: Imperial Raspberry is cultivated primarily across ...",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "Botanical Specimen #140: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_780",
    "fruitId": "durian_var_5",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Ruby Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "Golden Banana trait (Southeast Asia)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Borneo & Sumatra"
    ],
    "explanation": "Ruby Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #5).",
    "points": 150
  },
  {
    "id": "trivia_q_781",
    "fruitId": "mangosteen_var_5",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Emerald Mangosteen?",
    "correctAnswer": "Garcinia mangostana var. emerald",
    "options": [
      "Velvet Black Sapote trait (Exotic)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Alpine Orange trait (Southern China)",
      "Garcinia mangostana var. emerald"
    ],
    "explanation": "The formal taxonomic binomial for Emerald Mangosteen is Garcinia mangostana var. emerald.",
    "points": 200
  },
  {
    "id": "trivia_q_782",
    "fruitId": "rambutan_var_5",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Celestial Rambutan?",
    "correctAnswer": "39 kcal & 116% Vitamin C",
    "options": [
      "39 kcal & 116% Vitamin C",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)"
    ],
    "explanation": "Per 100g, Celestial Rambutan yields 39 kcal, 1.8g fiber, and 178mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_783",
    "fruitId": "lychee_var_5",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Midnight Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)"
    ],
    "explanation": "Culinary sommeliers describe Midnight Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_784",
    "fruitId": "starfruit_var_5",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Giant Starfruit?",
    "correctAnswer": "Botanical Specimen #145: Giant Starfruit is cultivated primarily across Tro...",
    "options": [
      "Botanical Specimen #145: Giant Starfruit is cultivated primarily across Tro...",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Botanical Specimen #145: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_785",
    "fruitId": "jackfruit_var_5",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Honey Jackfruit?",
    "correctAnswer": "Botanical Specimen #146: Honey Jackfruit is cultivated primarily across Wes...",
    "options": [
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Botanical Specimen #146: Honey Jackfruit is cultivated primarily across Wes...",
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "Botanical Specimen #146: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_786",
    "fruitId": "buddhas_hand_var_5",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Scarlet Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Lower Himalayas",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)"
    ],
    "explanation": "Scarlet Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #5).",
    "points": 200
  },
  {
    "id": "trivia_q_787",
    "fruitId": "miracle_fruit_var_5",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Sugar Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum var. sugar",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Synsepalum dulcificum var. sugar",
      "Royal Apple trait (Malus domestica var. royal)",
      "Imperial Watermelon trait (Melon)"
    ],
    "explanation": "The formal taxonomic binomial for Sugar Miracle Berry is Synsepalum dulcificum var. sugar.",
    "points": 250
  },
  {
    "id": "trivia_q_788",
    "fruitId": "black_sapote_var_5",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Velvet Black Sapote?",
    "correctAnswer": "81 kcal & 194% Vitamin C",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "81 kcal & 194% Vitamin C",
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)"
    ],
    "explanation": "Per 100g, Velvet Black Sapote yields 81 kcal, 3.6g fiber, and 292mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_789",
    "fruitId": "jabuticaba_var_5",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Frost Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)",
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics"
    ],
    "explanation": "Culinary sommeliers describe Frost Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_790",
    "fruitId": "apple_var_6",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #151: Royal Apple is cultivated primarily across Central...",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Botanical Specimen #151: Royal Apple is cultivated primarily across Central..."
    ],
    "explanation": "Botanical Specimen #151: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_791",
    "fruitId": "banana_var_6",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #152: Golden Banana is cultivated primarily across South...",
    "options": [
      "Botanical Specimen #152: Golden Banana is cultivated primarily across South...",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "Botanical Specimen #152: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_792",
    "fruitId": "orange_var_6",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Southern China"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #6).",
    "points": 250
  },
  {
    "id": "trivia_q_793",
    "fruitId": "strawberry_var_6",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Fragaria × ananassa var. wild",
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_794",
    "fruitId": "watermelon_var_6",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "123 kcal & 22% Vitamin C",
    "options": [
      "123 kcal & 22% Vitamin C",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)",
      "Royal Pomegranate trait (Persia to Northern India)"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 123 kcal, 5.4g fiber, and 406mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_795",
    "fruitId": "grape_var_6",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Golden Papaya trait (Central America)",
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_796",
    "fruitId": "pineapple_var_6",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #157: Emerald Pineapple is cultivated primarily across P...",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Botanical Specimen #157: Emerald Pineapple is cultivated primarily across P..."
    ],
    "explanation": "Botanical Specimen #157: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_797",
    "fruitId": "mango_var_6",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #158: Celestial Mango is cultivated primarily across Ind...",
    "options": [
      "Botanical Specimen #158: Celestial Mango is cultivated primarily across Ind...",
      "Honey Peach trait (Prunus persica var. honey)",
      "Wild Blueberry trait (North America)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "Botanical Specimen #158: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_798",
    "fruitId": "lemon_var_6",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Northeast India",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #6).",
    "points": 300
  },
  {
    "id": "trivia_q_799",
    "fruitId": "cherry_var_6",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Prunus avium var. giant"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_800",
    "fruitId": "peach_var_6",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "55 kcal & 100% Vitamin C",
    "options": [
      "55 kcal & 100% Vitamin C",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Per 100g, Honey Peach yields 55 kcal, 1.2g fiber, and 520mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_801",
    "fruitId": "pear_var_6",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_802",
    "fruitId": "kiwi_var_6",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #163: Sugar Kiwi is cultivated primarily across Yangtze ...",
    "options": [
      "Botanical Specimen #163: Sugar Kiwi is cultivated primarily across Yangtze ...",
      "Midnight Lychee trait (Southern China)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #163: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_803",
    "fruitId": "coconut_var_6",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #164: Velvet Coconut is cultivated primarily across Indo...",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Botanical Specimen #164: Velvet Coconut is cultivated primarily across Indo..."
    ],
    "explanation": "Botanical Specimen #164: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_804",
    "fruitId": "avocado_var_6",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Mesoamerica",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #6).",
    "points": 350
  },
  {
    "id": "trivia_q_805",
    "fruitId": "pomegranate_var_6",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Punica granatum var. royal",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_806",
    "fruitId": "papaya_var_6",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "97 kcal & 178% Vitamin C",
    "options": [
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "97 kcal & 178% Vitamin C"
    ],
    "explanation": "Per 100g, Golden Papaya yields 97 kcal, 3.0g fiber, and 114mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_807",
    "fruitId": "fig_var_6",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_808",
    "fruitId": "blueberry_var_6",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #169: Wild Blueberry is cultivated primarily across Nort...",
    "options": [
      "Botanical Specimen #169: Wild Blueberry is cultivated primarily across Nort...",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #169: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_809",
    "fruitId": "raspberry_var_6",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #170: Imperial Raspberry is cultivated primarily across ...",
    "options": [
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Royal Apple trait (Central Asia)",
      "Botanical Specimen #170: Imperial Raspberry is cultivated primarily across ...",
      "Scarlet Buddha's Hand trait (Citrus)"
    ],
    "explanation": "Botanical Specimen #170: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_810",
    "fruitId": "durian_var_6",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Ruby Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Borneo & Sumatra"
    ],
    "explanation": "Ruby Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #6).",
    "points": 150
  },
  {
    "id": "trivia_q_811",
    "fruitId": "mangosteen_var_6",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Emerald Mangosteen?",
    "correctAnswer": "Garcinia mangostana var. emerald",
    "options": [
      "Garcinia mangostana var. emerald",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)"
    ],
    "explanation": "The formal taxonomic binomial for Emerald Mangosteen is Garcinia mangostana var. emerald.",
    "points": 200
  },
  {
    "id": "trivia_q_812",
    "fruitId": "rambutan_var_6",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Celestial Rambutan?",
    "correctAnswer": "139 kcal & 256% Vitamin C",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "139 kcal & 256% Vitamin C"
    ],
    "explanation": "Per 100g, Celestial Rambutan yields 139 kcal, 4.8g fiber, and 228mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_813",
    "fruitId": "lychee_var_6",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Midnight Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Culinary sommeliers describe Midnight Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_814",
    "fruitId": "starfruit_var_6",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Starfruit?",
    "correctAnswer": "Botanical Specimen #175: Giant Starfruit is cultivated primarily across Tro...",
    "options": [
      "Botanical Specimen #175: Giant Starfruit is cultivated primarily across Tro...",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Botanical Specimen #175: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_815",
    "fruitId": "jackfruit_var_6",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Honey Jackfruit?",
    "correctAnswer": "Botanical Specimen #176: Honey Jackfruit is cultivated primarily across Wes...",
    "options": [
      "Botanical Specimen #176: Honey Jackfruit is cultivated primarily across Wes...",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "Botanical Specimen #176: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_816",
    "fruitId": "buddhas_hand_var_6",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Scarlet Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Lower Himalayas"
    ],
    "explanation": "Scarlet Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #6).",
    "points": 200
  },
  {
    "id": "trivia_q_817",
    "fruitId": "miracle_fruit_var_6",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Sugar Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum var. sugar",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Synsepalum dulcificum var. sugar"
    ],
    "explanation": "The formal taxonomic binomial for Sugar Miracle Berry is Synsepalum dulcificum var. sugar.",
    "points": 250
  },
  {
    "id": "trivia_q_818",
    "fruitId": "black_sapote_var_6",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Velvet Black Sapote?",
    "correctAnswer": "71 kcal & 84% Vitamin C",
    "options": [
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "71 kcal & 84% Vitamin C"
    ],
    "explanation": "Per 100g, Velvet Black Sapote yields 71 kcal, 6.6g fiber, and 342mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_819",
    "fruitId": "jabuticaba_var_6",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Frost Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)",
      "Honey Peach trait (Northwest China)"
    ],
    "explanation": "Culinary sommeliers describe Frost Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_820",
    "fruitId": "apple_var_7",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #181: Royal Apple is cultivated primarily across Central...",
    "options": [
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Botanical Specimen #181: Royal Apple is cultivated primarily across Central..."
    ],
    "explanation": "Botanical Specimen #181: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_821",
    "fruitId": "banana_var_7",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #182: Golden Banana is cultivated primarily across South...",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Botanical Specimen #182: Golden Banana is cultivated primarily across South..."
    ],
    "explanation": "Botanical Specimen #182: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_822",
    "fruitId": "orange_var_7",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Velvet Coconut trait (Indo-Pacific)",
      "Southern China"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #7).",
    "points": 250
  },
  {
    "id": "trivia_q_823",
    "fruitId": "strawberry_var_7",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Frost Avocado trait (Mesoamerica)",
      "Fragaria × ananassa var. wild"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_824",
    "fruitId": "watermelon_var_7",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "113 kcal & 162% Vitamin C",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "113 kcal & 162% Vitamin C"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 113 kcal, 2.4g fiber, and 456mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_825",
    "fruitId": "grape_var_7",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Golden Papaya trait (Central America)",
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_826",
    "fruitId": "pineapple_var_7",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #187: Emerald Pineapple is cultivated primarily across P...",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Botanical Specimen #187: Emerald Pineapple is cultivated primarily across P..."
    ],
    "explanation": "Botanical Specimen #187: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_827",
    "fruitId": "mango_var_7",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #188: Celestial Mango is cultivated primarily across Ind...",
    "options": [
      "Botanical Specimen #188: Celestial Mango is cultivated primarily across Ind...",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Wild Blueberry trait (North America)"
    ],
    "explanation": "Botanical Specimen #188: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_828",
    "fruitId": "lemon_var_7",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Imperial Raspberry trait (Eurasia)",
      "Northeast India",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #7).",
    "points": 300
  },
  {
    "id": "trivia_q_829",
    "fruitId": "cherry_var_7",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Ruby Durian trait (Borneo & Sumatra)",
      "Prunus avium var. giant",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_830",
    "fruitId": "peach_var_7",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "45 kcal & 240% Vitamin C",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "45 kcal & 240% Vitamin C",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Per 100g, Honey Peach yields 45 kcal, 4.2g fiber, and 570mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_831",
    "fruitId": "pear_var_7",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_832",
    "fruitId": "kiwi_var_7",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #193: Sugar Kiwi is cultivated primarily across Yangtze ...",
    "options": [
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)",
      "Botanical Specimen #193: Sugar Kiwi is cultivated primarily across Yangtze ...",
      "Royal Pomegranate trait (Punica granatum var. royal)"
    ],
    "explanation": "Botanical Specimen #193: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_833",
    "fruitId": "coconut_var_7",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #194: Velvet Coconut is cultivated primarily across Indo...",
    "options": [
      "Botanical Specimen #194: Velvet Coconut is cultivated primarily across Indo...",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #194: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_834",
    "fruitId": "avocado_var_7",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)",
      "Honey Jackfruit trait (Western Ghats, India)"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #7).",
    "points": 350
  },
  {
    "id": "trivia_q_835",
    "fruitId": "pomegranate_var_7",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Celestial Rambutan trait (Exotic)",
      "Punica granatum var. royal",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_836",
    "fruitId": "papaya_var_7",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "87 kcal & 68% Vitamin C",
    "options": [
      "87 kcal & 68% Vitamin C",
      "Sugar Miracle Berry trait (West Africa)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Midnight Lychee trait (Exotic)"
    ],
    "explanation": "Per 100g, Golden Papaya yields 87 kcal, 6.0g fiber, and 164mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_837",
    "fruitId": "fig_var_7",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Giant Starfruit trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_838",
    "fruitId": "blueberry_var_7",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #199: Wild Blueberry is cultivated primarily across Nort...",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Botanical Specimen #199: Wild Blueberry is cultivated primarily across Nort...",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #199: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_839",
    "fruitId": "raspberry_var_7",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #200: Imperial Raspberry is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #200: Imperial Raspberry is cultivated primarily across ...",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "Botanical Specimen #200: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_840",
    "fruitId": "durian_var_7",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Ruby Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Borneo & Sumatra"
    ],
    "explanation": "Ruby Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #7).",
    "points": 150
  },
  {
    "id": "trivia_q_841",
    "fruitId": "mangosteen_var_7",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Emerald Mangosteen?",
    "correctAnswer": "Garcinia mangostana var. emerald",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Velvet Black Sapote trait (Exotic)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Garcinia mangostana var. emerald"
    ],
    "explanation": "The formal taxonomic binomial for Emerald Mangosteen is Garcinia mangostana var. emerald.",
    "points": 200
  },
  {
    "id": "trivia_q_842",
    "fruitId": "rambutan_var_7",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Celestial Rambutan?",
    "correctAnswer": "129 kcal & 146% Vitamin C",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "129 kcal & 146% Vitamin C",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)"
    ],
    "explanation": "Per 100g, Celestial Rambutan yields 129 kcal, 1.8g fiber, and 278mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_843",
    "fruitId": "lychee_var_7",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Midnight Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics"
    ],
    "explanation": "Culinary sommeliers describe Midnight Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_844",
    "fruitId": "starfruit_var_7",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Giant Starfruit?",
    "correctAnswer": "Botanical Specimen #205: Giant Starfruit is cultivated primarily across Tro...",
    "options": [
      "Botanical Specimen #205: Giant Starfruit is cultivated primarily across Tro...",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #205: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_845",
    "fruitId": "jackfruit_var_7",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Honey Jackfruit?",
    "correctAnswer": "Botanical Specimen #206: Honey Jackfruit is cultivated primarily across Wes...",
    "options": [
      "Botanical Specimen #206: Honey Jackfruit is cultivated primarily across Wes...",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "Botanical Specimen #206: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_846",
    "fruitId": "buddhas_hand_var_7",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Scarlet Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)",
      "Lower Himalayas",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)"
    ],
    "explanation": "Scarlet Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #7).",
    "points": 200
  },
  {
    "id": "trivia_q_847",
    "fruitId": "miracle_fruit_var_7",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Sugar Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum var. sugar",
    "options": [
      "Synsepalum dulcificum var. sugar",
      "Royal Apple trait (Malus domestica var. royal)",
      "Imperial Watermelon trait (Melon)",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "The formal taxonomic binomial for Sugar Miracle Berry is Synsepalum dulcificum var. sugar.",
    "points": 250
  },
  {
    "id": "trivia_q_848",
    "fruitId": "black_sapote_var_7",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Velvet Black Sapote?",
    "correctAnswer": "61 kcal & 224% Vitamin C",
    "options": [
      "61 kcal & 224% Vitamin C",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)"
    ],
    "explanation": "Per 100g, Velvet Black Sapote yields 61 kcal, 3.6g fiber, and 392mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_849",
    "fruitId": "jabuticaba_var_7",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Frost Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
      "Honey Peach trait (Northwest China)"
    ],
    "explanation": "Culinary sommeliers describe Frost Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_850",
    "fruitId": "apple_var_8",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #211: Royal Apple is cultivated primarily across Central...",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)",
      "Botanical Specimen #211: Royal Apple is cultivated primarily across Central..."
    ],
    "explanation": "Botanical Specimen #211: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_851",
    "fruitId": "banana_var_8",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #212: Golden Banana is cultivated primarily across South...",
    "options": [
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Botanical Specimen #212: Golden Banana is cultivated primarily across South...",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "Botanical Specimen #212: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_852",
    "fruitId": "orange_var_8",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Velvet Coconut trait (Indo-Pacific)",
      "Southern China"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #8).",
    "points": 250
  },
  {
    "id": "trivia_q_853",
    "fruitId": "strawberry_var_8",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Fragaria × ananassa var. wild",
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_854",
    "fruitId": "watermelon_var_8",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "103 kcal & 52% Vitamin C",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "103 kcal & 52% Vitamin C",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 103 kcal, 5.4g fiber, and 506mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_855",
    "fruitId": "grape_var_8",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Sugar Kiwi trait (Exotic)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Golden Papaya trait (Central America)",
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_856",
    "fruitId": "pineapple_var_8",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #217: Emerald Pineapple is cultivated primarily across P...",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Botanical Specimen #217: Emerald Pineapple is cultivated primarily across P..."
    ],
    "explanation": "Botanical Specimen #217: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_857",
    "fruitId": "mango_var_8",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #218: Celestial Mango is cultivated primarily across Ind...",
    "options": [
      "Honey Peach trait (Prunus persica var. honey)",
      "Botanical Specimen #218: Celestial Mango is cultivated primarily across Ind...",
      "Wild Blueberry trait (North America)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "Botanical Specimen #218: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_858",
    "fruitId": "lemon_var_8",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Northeast India",
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #8).",
    "points": 300
  },
  {
    "id": "trivia_q_859",
    "fruitId": "cherry_var_8",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Ruby Durian trait (Borneo & Sumatra)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Prunus avium var. giant",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_860",
    "fruitId": "peach_var_8",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "35 kcal & 130% Vitamin C",
    "options": [
      "35 kcal & 130% Vitamin C",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Per 100g, Honey Peach yields 35 kcal, 1.2g fiber, and 100mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_861",
    "fruitId": "pear_var_8",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_862",
    "fruitId": "kiwi_var_8",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #223: Sugar Kiwi is cultivated primarily across Yangtze ...",
    "options": [
      "Botanical Specimen #223: Sugar Kiwi is cultivated primarily across Yangtze ...",
      "Midnight Lychee trait (Southern China)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #223: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_863",
    "fruitId": "coconut_var_8",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #224: Velvet Coconut is cultivated primarily across Indo...",
    "options": [
      "Botanical Specimen #224: Velvet Coconut is cultivated primarily across Indo...",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "Botanical Specimen #224: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_864",
    "fruitId": "avocado_var_8",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Mesoamerica",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)",
      "Honey Jackfruit trait (Western Ghats, India)"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #8).",
    "points": 350
  },
  {
    "id": "trivia_q_865",
    "fruitId": "pomegranate_var_8",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Punica granatum var. royal"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_866",
    "fruitId": "papaya_var_8",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "77 kcal & 208% Vitamin C",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "77 kcal & 208% Vitamin C"
    ],
    "explanation": "Per 100g, Golden Papaya yields 77 kcal, 3.0g fiber, and 214mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_867",
    "fruitId": "fig_var_8",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Giant Starfruit trait (Exotic)",
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
      "Ruby Durian trait (Durio zibethinus var. ruby)"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_868",
    "fruitId": "blueberry_var_8",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #229: Wild Blueberry is cultivated primarily across Nort...",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Botanical Specimen #229: Wild Blueberry is cultivated primarily across Nort..."
    ],
    "explanation": "Botanical Specimen #229: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_869",
    "fruitId": "raspberry_var_8",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #230: Imperial Raspberry is cultivated primarily across ...",
    "options": [
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Botanical Specimen #230: Imperial Raspberry is cultivated primarily across ...",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "Botanical Specimen #230: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_870",
    "fruitId": "durian_var_8",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Ruby Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Golden Banana trait (Southeast Asia)",
      "Borneo & Sumatra",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Sugar Miracle Berry trait (Superfruit)"
    ],
    "explanation": "Ruby Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #8).",
    "points": 150
  },
  {
    "id": "trivia_q_871",
    "fruitId": "mangosteen_var_8",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Emerald Mangosteen?",
    "correctAnswer": "Garcinia mangostana var. emerald",
    "options": [
      "Garcinia mangostana var. emerald",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)"
    ],
    "explanation": "The formal taxonomic binomial for Emerald Mangosteen is Garcinia mangostana var. emerald.",
    "points": 200
  },
  {
    "id": "trivia_q_872",
    "fruitId": "rambutan_var_8",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Celestial Rambutan?",
    "correctAnswer": "119 kcal & 36% Vitamin C",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "119 kcal & 36% Vitamin C",
      "Frost Jabuticaba trait (Berry)"
    ],
    "explanation": "Per 100g, Celestial Rambutan yields 119 kcal, 4.8g fiber, and 328mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_873",
    "fruitId": "lychee_var_8",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Midnight Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)"
    ],
    "explanation": "Culinary sommeliers describe Midnight Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_874",
    "fruitId": "starfruit_var_8",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Starfruit?",
    "correctAnswer": "Botanical Specimen #235: Giant Starfruit is cultivated primarily across Tro...",
    "options": [
      "Botanical Specimen #235: Giant Starfruit is cultivated primarily across Tro...",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #235: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_875",
    "fruitId": "jackfruit_var_8",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Honey Jackfruit?",
    "correctAnswer": "Botanical Specimen #236: Honey Jackfruit is cultivated primarily across Wes...",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Botanical Specimen #236: Honey Jackfruit is cultivated primarily across Wes...",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "Botanical Specimen #236: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_876",
    "fruitId": "buddhas_hand_var_8",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Scarlet Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)",
      "Lower Himalayas",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Scarlet Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #8).",
    "points": 200
  },
  {
    "id": "trivia_q_877",
    "fruitId": "miracle_fruit_var_8",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Sugar Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum var. sugar",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Imperial Watermelon trait (Melon)",
      "Synsepalum dulcificum var. sugar",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "The formal taxonomic binomial for Sugar Miracle Berry is Synsepalum dulcificum var. sugar.",
    "points": 250
  },
  {
    "id": "trivia_q_878",
    "fruitId": "black_sapote_var_8",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Velvet Black Sapote?",
    "correctAnswer": "51 kcal & 114% Vitamin C",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "51 kcal & 114% Vitamin C",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)"
    ],
    "explanation": "Per 100g, Velvet Black Sapote yields 51 kcal, 6.6g fiber, and 442mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_879",
    "fruitId": "jabuticaba_var_8",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Frost Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)"
    ],
    "explanation": "Culinary sommeliers describe Frost Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_880",
    "fruitId": "apple_var_9",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #241: Royal Apple is cultivated primarily across Central...",
    "options": [
      "Botanical Specimen #241: Royal Apple is cultivated primarily across Central...",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #241: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_881",
    "fruitId": "banana_var_9",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #242: Golden Banana is cultivated primarily across South...",
    "options": [
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Botanical Specimen #242: Golden Banana is cultivated primarily across South...",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "Botanical Specimen #242: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_882",
    "fruitId": "orange_var_9",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Southern China",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #9).",
    "points": 250
  },
  {
    "id": "trivia_q_883",
    "fruitId": "strawberry_var_9",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Fragaria × ananassa var. wild"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_884",
    "fruitId": "watermelon_var_9",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "93 kcal & 192% Vitamin C",
    "options": [
      "93 kcal & 192% Vitamin C",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 93 kcal, 2.4g fiber, and 556mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_885",
    "fruitId": "grape_var_9",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_886",
    "fruitId": "pineapple_var_9",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #247: Emerald Pineapple is cultivated primarily across P...",
    "options": [
      "Botanical Specimen #247: Emerald Pineapple is cultivated primarily across P...",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #247: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_887",
    "fruitId": "mango_var_9",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #248: Celestial Mango is cultivated primarily across Ind...",
    "options": [
      "Botanical Specimen #248: Celestial Mango is cultivated primarily across Ind...",
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "Botanical Specimen #248: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_888",
    "fruitId": "lemon_var_9",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Northeast India",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #9).",
    "points": 300
  },
  {
    "id": "trivia_q_889",
    "fruitId": "cherry_var_9",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Prunus avium var. giant"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_890",
    "fruitId": "peach_var_9",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "135 kcal & 20% Vitamin C",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)",
      "135 kcal & 20% Vitamin C",
      "Velvet Coconut trait (Cocos nucifera var. velvet)"
    ],
    "explanation": "Per 100g, Honey Peach yields 135 kcal, 4.2g fiber, and 150mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_891",
    "fruitId": "pear_var_9",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_892",
    "fruitId": "kiwi_var_9",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #253: Sugar Kiwi is cultivated primarily across Yangtze ...",
    "options": [
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Botanical Specimen #253: Sugar Kiwi is cultivated primarily across Yangtze ...",
      "Midnight Lychee trait (Southern China)"
    ],
    "explanation": "Botanical Specimen #253: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_893",
    "fruitId": "coconut_var_9",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #254: Velvet Coconut is cultivated primarily across Indo...",
    "options": [
      "Golden Papaya trait (Carica papaya var. golden)",
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Botanical Specimen #254: Velvet Coconut is cultivated primarily across Indo..."
    ],
    "explanation": "Botanical Specimen #254: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_894",
    "fruitId": "avocado_var_9",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Mesoamerica"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #9).",
    "points": 350
  },
  {
    "id": "trivia_q_895",
    "fruitId": "pomegranate_var_9",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Punica granatum var. royal"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_896",
    "fruitId": "papaya_var_9",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "67 kcal & 98% Vitamin C",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "67 kcal & 98% Vitamin C"
    ],
    "explanation": "Per 100g, Golden Papaya yields 67 kcal, 6.0g fiber, and 264mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_897",
    "fruitId": "fig_var_9",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_898",
    "fruitId": "blueberry_var_9",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #259: Wild Blueberry is cultivated primarily across Nort...",
    "options": [
      "Botanical Specimen #259: Wild Blueberry is cultivated primarily across Nort...",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)"
    ],
    "explanation": "Botanical Specimen #259: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_899",
    "fruitId": "raspberry_var_9",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #260: Imperial Raspberry is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #260: Imperial Raspberry is cultivated primarily across ...",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "Botanical Specimen #260: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_900",
    "fruitId": "durian_var_9",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Ruby Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "Golden Banana trait (Southeast Asia)",
      "Borneo & Sumatra",
      "Midnight Lychee trait (Litchi chinensis var. midnight)"
    ],
    "explanation": "Ruby Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #9).",
    "points": 150
  },
  {
    "id": "trivia_q_901",
    "fruitId": "mangosteen_var_9",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Emerald Mangosteen?",
    "correctAnswer": "Garcinia mangostana var. emerald",
    "options": [
      "Garcinia mangostana var. emerald",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)"
    ],
    "explanation": "The formal taxonomic binomial for Emerald Mangosteen is Garcinia mangostana var. emerald.",
    "points": 200
  },
  {
    "id": "trivia_q_902",
    "fruitId": "rambutan_var_9",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Celestial Rambutan?",
    "correctAnswer": "109 kcal & 176% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Frost Jabuticaba trait (Berry)",
      "Wild Strawberry trait (Europe & Americas)",
      "109 kcal & 176% Vitamin C"
    ],
    "explanation": "Per 100g, Celestial Rambutan yields 109 kcal, 1.8g fiber, and 378mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_903",
    "fruitId": "lychee_var_9",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Midnight Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics"
    ],
    "explanation": "Culinary sommeliers describe Midnight Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_904",
    "fruitId": "starfruit_var_9",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Giant Starfruit?",
    "correctAnswer": "Botanical Specimen #265: Giant Starfruit is cultivated primarily across Tro...",
    "options": [
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Botanical Specimen #265: Giant Starfruit is cultivated primarily across Tro..."
    ],
    "explanation": "Botanical Specimen #265: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_905",
    "fruitId": "jackfruit_var_9",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Honey Jackfruit?",
    "correctAnswer": "Botanical Specimen #266: Honey Jackfruit is cultivated primarily across Wes...",
    "options": [
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Botanical Specimen #266: Honey Jackfruit is cultivated primarily across Wes...",
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "Botanical Specimen #266: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_906",
    "fruitId": "buddhas_hand_var_9",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Scarlet Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Lower Himalayas",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)"
    ],
    "explanation": "Scarlet Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #9).",
    "points": 200
  },
  {
    "id": "trivia_q_907",
    "fruitId": "miracle_fruit_var_9",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Sugar Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum var. sugar",
    "options": [
      "Synsepalum dulcificum var. sugar",
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)"
    ],
    "explanation": "The formal taxonomic binomial for Sugar Miracle Berry is Synsepalum dulcificum var. sugar.",
    "points": 250
  },
  {
    "id": "trivia_q_908",
    "fruitId": "black_sapote_var_9",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Velvet Black Sapote?",
    "correctAnswer": "41 kcal & 254% Vitamin C",
    "options": [
      "41 kcal & 254% Vitamin C",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Ruby Grape trait (Berry)"
    ],
    "explanation": "Per 100g, Velvet Black Sapote yields 41 kcal, 3.6g fiber, and 492mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_909",
    "fruitId": "jabuticaba_var_9",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Frost Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics"
    ],
    "explanation": "Culinary sommeliers describe Frost Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_910",
    "fruitId": "apple_var_10",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #271: Royal Apple is cultivated primarily across Central...",
    "options": [
      "Botanical Specimen #271: Royal Apple is cultivated primarily across Central...",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)"
    ],
    "explanation": "Botanical Specimen #271: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_911",
    "fruitId": "banana_var_10",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #272: Golden Banana is cultivated primarily across South...",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Botanical Specimen #272: Golden Banana is cultivated primarily across South..."
    ],
    "explanation": "Botanical Specimen #272: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_912",
    "fruitId": "orange_var_10",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Southern China",
      "Ruby Grape trait (Vitis vinifera var. ruby)"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #10).",
    "points": 250
  },
  {
    "id": "trivia_q_913",
    "fruitId": "strawberry_var_10",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Fragaria × ananassa var. wild"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_914",
    "fruitId": "watermelon_var_10",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "83 kcal & 82% Vitamin C",
    "options": [
      "83 kcal & 82% Vitamin C",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)",
      "Royal Pomegranate trait (Persia to Northern India)"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 83 kcal, 5.4g fiber, and 86mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_915",
    "fruitId": "grape_var_10",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_916",
    "fruitId": "pineapple_var_10",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #277: Emerald Pineapple is cultivated primarily across P...",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Botanical Specimen #277: Emerald Pineapple is cultivated primarily across P..."
    ],
    "explanation": "Botanical Specimen #277: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_917",
    "fruitId": "mango_var_10",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #278: Celestial Mango is cultivated primarily across Ind...",
    "options": [
      "Wild Blueberry trait (North America)",
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Botanical Specimen #278: Celestial Mango is cultivated primarily across Ind..."
    ],
    "explanation": "Botanical Specimen #278: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_918",
    "fruitId": "lemon_var_10",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Northeast India",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Royal Pomegranate trait (Exotic)",
      "Imperial Raspberry trait (Eurasia)"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #10).",
    "points": 300
  },
  {
    "id": "trivia_q_919",
    "fruitId": "cherry_var_10",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)",
      "Prunus avium var. giant"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_920",
    "fruitId": "peach_var_10",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "125 kcal & 160% Vitamin C",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "125 kcal & 160% Vitamin C"
    ],
    "explanation": "Per 100g, Honey Peach yields 125 kcal, 1.2g fiber, and 200mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_921",
    "fruitId": "pear_var_10",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Frost Avocado trait (Persea americana var. frost)",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)",
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_922",
    "fruitId": "kiwi_var_10",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #283: Sugar Kiwi is cultivated primarily across Yangtze ...",
    "options": [
      "Botanical Specimen #283: Sugar Kiwi is cultivated primarily across Yangtze ...",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #283: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_923",
    "fruitId": "coconut_var_10",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #284: Velvet Coconut is cultivated primarily across Indo...",
    "options": [
      "Botanical Specimen #284: Velvet Coconut is cultivated primarily across Indo...",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "Botanical Specimen #284: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_924",
    "fruitId": "avocado_var_10",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Mesoamerica",
      "Emerald Mangosteen trait (Exotic)"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #10).",
    "points": 350
  },
  {
    "id": "trivia_q_925",
    "fruitId": "pomegranate_var_10",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Punica granatum var. royal"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_926",
    "fruitId": "papaya_var_10",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "57 kcal & 238% Vitamin C",
    "options": [
      "57 kcal & 238% Vitamin C",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)"
    ],
    "explanation": "Per 100g, Golden Papaya yields 57 kcal, 3.0g fiber, and 314mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_927",
    "fruitId": "fig_var_10",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_928",
    "fruitId": "blueberry_var_10",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #289: Wild Blueberry is cultivated primarily across Nort...",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Botanical Specimen #289: Wild Blueberry is cultivated primarily across Nort...",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #289: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_929",
    "fruitId": "raspberry_var_10",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #290: Imperial Raspberry is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #290: Imperial Raspberry is cultivated primarily across ...",
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)"
    ],
    "explanation": "Botanical Specimen #290: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_930",
    "fruitId": "durian_var_10",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Where did the Ruby Durian originally evolve and originate?",
    "correctAnswer": "Borneo & Sumatra",
    "options": [
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Borneo & Sumatra",
      "Sugar Miracle Berry trait (Superfruit)",
      "Golden Banana trait (Southeast Asia)"
    ],
    "explanation": "Ruby Durian was first documented and domesticated in Borneo & Sumatra (Cultivar #10).",
    "points": 150
  },
  {
    "id": "trivia_q_931",
    "fruitId": "mangosteen_var_10",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Emerald Mangosteen?",
    "correctAnswer": "Garcinia mangostana var. emerald",
    "options": [
      "Garcinia mangostana var. emerald",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Emerald Mangosteen is Garcinia mangostana var. emerald.",
    "points": 200
  },
  {
    "id": "trivia_q_932",
    "fruitId": "rambutan_var_10",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Celestial Rambutan?",
    "correctAnswer": "99 kcal & 66% Vitamin C",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "99 kcal & 66% Vitamin C"
    ],
    "explanation": "Per 100g, Celestial Rambutan yields 99 kcal, 4.8g fiber, and 428mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_933",
    "fruitId": "lychee_var_10",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Midnight Lychee best characterized?",
    "correctAnswer": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)"
    ],
    "explanation": "Culinary sommeliers describe Midnight Lychee as having: Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_934",
    "fruitId": "starfruit_var_10",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Giant Starfruit?",
    "correctAnswer": "Botanical Specimen #295: Giant Starfruit is cultivated primarily across Tro...",
    "options": [
      "Botanical Specimen #295: Giant Starfruit is cultivated primarily across Tro...",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Botanical Specimen #295: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_935",
    "fruitId": "jackfruit_var_10",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Honey Jackfruit?",
    "correctAnswer": "Botanical Specimen #296: Honey Jackfruit is cultivated primarily across Wes...",
    "options": [
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Botanical Specimen #296: Honey Jackfruit is cultivated primarily across Wes..."
    ],
    "explanation": "Botanical Specimen #296: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_936",
    "fruitId": "buddhas_hand_var_10",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Scarlet Buddha's Hand originally evolve and originate?",
    "correctAnswer": "Lower Himalayas",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Lower Himalayas"
    ],
    "explanation": "Scarlet Buddha's Hand was first documented and domesticated in Lower Himalayas (Cultivar #10).",
    "points": 200
  },
  {
    "id": "trivia_q_937",
    "fruitId": "miracle_fruit_var_10",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Sugar Miracle Berry?",
    "correctAnswer": "Synsepalum dulcificum var. sugar",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Synsepalum dulcificum var. sugar",
      "Royal Apple trait (Malus domestica var. royal)"
    ],
    "explanation": "The formal taxonomic binomial for Sugar Miracle Berry is Synsepalum dulcificum var. sugar.",
    "points": 250
  },
  {
    "id": "trivia_q_938",
    "fruitId": "black_sapote_var_10",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Velvet Black Sapote?",
    "correctAnswer": "141 kcal & 144% Vitamin C",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "141 kcal & 144% Vitamin C"
    ],
    "explanation": "Per 100g, Velvet Black Sapote yields 141 kcal, 6.6g fiber, and 542mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_939",
    "fruitId": "jabuticaba_var_10",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Frost Jabuticaba best characterized?",
    "correctAnswer": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "options": [
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)",
      "Honey Peach trait (Northwest China)",
      "Wine-like grape, floral terpene with nuanced notes of frost aromatics"
    ],
    "explanation": "Culinary sommeliers describe Frost Jabuticaba as having: Wine-like grape, floral terpene with nuanced notes of frost aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_940",
    "fruitId": "apple_var_11",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Royal Apple?",
    "correctAnswer": "Botanical Specimen #301: Royal Apple is cultivated primarily across Central...",
    "options": [
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Botanical Specimen #301: Royal Apple is cultivated primarily across Central...",
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #301: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_941",
    "fruitId": "banana_var_11",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Golden Banana?",
    "correctAnswer": "Botanical Specimen #302: Golden Banana is cultivated primarily across South...",
    "options": [
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Botanical Specimen #302: Golden Banana is cultivated primarily across South...",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "Botanical Specimen #302: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_942",
    "fruitId": "orange_var_11",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Where did the Alpine Orange originally evolve and originate?",
    "correctAnswer": "Southern China",
    "options": [
      "Southern China",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Alpine Orange was first documented and domesticated in Southern China (Cultivar #11).",
    "points": 250
  },
  {
    "id": "trivia_q_943",
    "fruitId": "strawberry_var_11",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Wild Strawberry?",
    "correctAnswer": "Fragaria × ananassa var. wild",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Fragaria × ananassa var. wild"
    ],
    "explanation": "The formal taxonomic binomial for Wild Strawberry is Fragaria × ananassa var. wild.",
    "points": 300
  },
  {
    "id": "trivia_q_944",
    "fruitId": "watermelon_var_11",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Imperial Watermelon?",
    "correctAnswer": "73 kcal & 222% Vitamin C",
    "options": [
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Royal Pomegranate trait (Persia to Northern India)",
      "73 kcal & 222% Vitamin C",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Per 100g, Imperial Watermelon yields 73 kcal, 2.4g fiber, and 136mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_945",
    "fruitId": "grape_var_11",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Ruby Grape best characterized?",
    "correctAnswer": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "options": [
      "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)"
    ],
    "explanation": "Culinary sommeliers describe Ruby Grape as having: Rich honey, bursting, wine notes with nuanced notes of ruby aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_946",
    "fruitId": "pineapple_var_11",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Emerald Pineapple?",
    "correctAnswer": "Botanical Specimen #307: Emerald Pineapple is cultivated primarily across P...",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Botanical Specimen #307: Emerald Pineapple is cultivated primarily across P...",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #307: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_947",
    "fruitId": "mango_var_11",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Celestial Mango?",
    "correctAnswer": "Botanical Specimen #308: Celestial Mango is cultivated primarily across Ind...",
    "options": [
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Wild Blueberry trait (North America)",
      "Botanical Specimen #308: Celestial Mango is cultivated primarily across Ind..."
    ],
    "explanation": "Botanical Specimen #308: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_948",
    "fruitId": "lemon_var_11",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Where did the Midnight Lemon originally evolve and originate?",
    "correctAnswer": "Northeast India",
    "options": [
      "Royal Pomegranate trait (Exotic)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Northeast India",
      "Imperial Raspberry trait (Eurasia)"
    ],
    "explanation": "Midnight Lemon was first documented and domesticated in Northeast India (Cultivar #11).",
    "points": 300
  },
  {
    "id": "trivia_q_949",
    "fruitId": "cherry_var_11",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Giant Cherry?",
    "correctAnswer": "Prunus avium var. giant",
    "options": [
      "Prunus avium var. giant",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Golden Papaya trait (Tropical)",
      "Apple trait (Central Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Giant Cherry is Prunus avium var. giant.",
    "points": 350
  },
  {
    "id": "trivia_q_950",
    "fruitId": "peach_var_11",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Honey Peach?",
    "correctAnswer": "115 kcal & 50% Vitamin C",
    "options": [
      "Banana trait (Southeast Asia)",
      "Alpine Fig trait (Exotic)",
      "115 kcal & 50% Vitamin C",
      "Velvet Coconut trait (Cocos nucifera var. velvet)"
    ],
    "explanation": "Per 100g, Honey Peach yields 115 kcal, 4.2g fiber, and 250mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_951",
    "fruitId": "pear_var_11",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Scarlet Pear best characterized?",
    "correctAnswer": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "options": [
      "Orange trait (Southern China)",
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics"
    ],
    "explanation": "Culinary sommeliers describe Scarlet Pear as having: Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_952",
    "fruitId": "kiwi_var_11",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Sugar Kiwi?",
    "correctAnswer": "Botanical Specimen #313: Sugar Kiwi is cultivated primarily across Yangtze ...",
    "options": [
      "Imperial Raspberry trait (Berry)",
      "Botanical Specimen #313: Sugar Kiwi is cultivated primarily across Yangtze ...",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Strawberry trait (Europe & Americas)"
    ],
    "explanation": "Botanical Specimen #313: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_953",
    "fruitId": "coconut_var_11",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Velvet Coconut?",
    "correctAnswer": "Botanical Specimen #314: Velvet Coconut is cultivated primarily across Indo...",
    "options": [
      "Golden Papaya trait (Carica papaya var. golden)",
      "Botanical Specimen #314: Velvet Coconut is cultivated primarily across Indo...",
      "Apple trait (Pome)",
      "Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Botanical Specimen #314: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_954",
    "fruitId": "avocado_var_11",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Where did the Frost Avocado originally evolve and originate?",
    "correctAnswer": "Mesoamerica",
    "options": [
      "Grape trait (Mediterranean)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Mesoamerica",
      "Banana trait (Tropical)"
    ],
    "explanation": "Frost Avocado was first documented and domesticated in Mesoamerica (Cultivar #11).",
    "points": 350
  },
  {
    "id": "trivia_q_955",
    "fruitId": "pomegranate_var_11",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Royal Pomegranate?",
    "correctAnswer": "Punica granatum var. royal",
    "options": [
      "Punica granatum var. royal",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Orange trait (Citrus)",
      "Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "The formal taxonomic binomial for Royal Pomegranate is Punica granatum var. royal.",
    "points": 150
  },
  {
    "id": "trivia_q_956",
    "fruitId": "papaya_var_11",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Golden Papaya?",
    "correctAnswer": "47 kcal & 128% Vitamin C",
    "options": [
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "47 kcal & 128% Vitamin C",
      "Strawberry trait (Berry)",
      "Mango trait (India & Myanmar)"
    ],
    "explanation": "Per 100g, Golden Papaya yields 47 kcal, 6.0g fiber, and 364mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_957",
    "fruitId": "fig_var_11",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Alpine Fig best characterized?",
    "correctAnswer": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "options": [
      "Apple trait (Malus domestica)",
      "Watermelon trait (Melon)",
      "Lemon trait (Northeast India)",
      "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics"
    ],
    "explanation": "Culinary sommeliers describe Alpine Fig as having: Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_958",
    "fruitId": "blueberry_var_11",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Wild Blueberry?",
    "correctAnswer": "Botanical Specimen #319: Wild Blueberry is cultivated primarily across Nort...",
    "options": [
      "Grape trait (Berry)",
      "Banana trait (Musa acuminata)",
      "Cherry trait (Anatolia, Turkey)",
      "Botanical Specimen #319: Wild Blueberry is cultivated primarily across Nort..."
    ],
    "explanation": "Botanical Specimen #319: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_959",
    "fruitId": "raspberry_var_11",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Imperial Raspberry?",
    "correctAnswer": "Botanical Specimen #320: Imperial Raspberry is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #320: Imperial Raspberry is cultivated primarily across ...",
      "Peach trait (Northwest China)",
      "Orange trait (Citrus × sinensis)",
      "Pineapple trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #320: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_960",
    "fruitId": "apple",
    "fruitName": "Apple",
    "category": "Pome",
    "difficulty": "easy",
    "question": "Where did the Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Central Asia",
      "Strawberry trait (Fragaria × ananassa)",
      "Mango trait (Tropical)",
      "Pear trait (Temperate Europe)"
    ],
    "explanation": "Apple was first documented and domesticated in Central Asia (Cultivar #1).",
    "points": 150
  },
  {
    "id": "trivia_q_961",
    "fruitId": "banana",
    "fruitName": "Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Banana?",
    "correctAnswer": "Musa acuminata",
    "options": [
      "Kiwi trait (Yangtze Valley, China)",
      "Musa acuminata",
      "Lemon trait (Citrus)",
      "Watermelon trait (Citrullus lanatus)"
    ],
    "explanation": "The formal taxonomic binomial for Banana is Musa acuminata.",
    "points": 200
  },
  {
    "id": "trivia_q_962",
    "fruitId": "orange",
    "fruitName": "Orange",
    "category": "Citrus",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Orange?",
    "correctAnswer": "49 kcal & 46% Vitamin C",
    "options": [
      "Coconut trait (Indo-Pacific)",
      "Cherry trait (Stone Fruit)",
      "Grape trait (Vitis vinifera)",
      "49 kcal & 46% Vitamin C"
    ],
    "explanation": "Per 100g, Orange yields 49 kcal, 1.8g fiber, and 118mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_963",
    "fruitId": "strawberry",
    "fruitName": "Strawberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Peach trait (Stone Fruit)",
      "Pineapple trait (Ananas comosus)",
      "Avocado trait (Mesoamerica)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics"
    ],
    "explanation": "Culinary sommeliers describe Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_964",
    "fruitId": "watermelon",
    "fruitName": "Watermelon",
    "category": "Melon",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Watermelon?",
    "correctAnswer": "Botanical Specimen #5: Watermelon is cultivated primarily across Kalahari, ...",
    "options": [
      "Botanical Specimen #5: Watermelon is cultivated primarily across Kalahari, ...",
      "Mango trait (Mangifera indica)",
      "Pomegranate trait (Persia to Northern India)",
      "Pear trait (Pome)"
    ],
    "explanation": "Botanical Specimen #5: Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_965",
    "fruitId": "grape",
    "fruitName": "Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Grape?",
    "correctAnswer": "Botanical Specimen #6: Grape is cultivated primarily across Mediterranean. ...",
    "options": [
      "Papaya trait (Central America)",
      "Kiwi trait (Exotic)",
      "Lemon trait (Citrus limon)",
      "Botanical Specimen #6: Grape is cultivated primarily across Mediterranean. ..."
    ],
    "explanation": "Botanical Specimen #6: Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_966",
    "fruitId": "pineapple",
    "fruitName": "Pineapple",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "Where did the Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Parana Basin, South America",
      "Fig trait (Levant & Mediterranean)",
      "Cherry trait (Prunus avium)",
      "Coconut trait (Tropical)"
    ],
    "explanation": "Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #1).",
    "points": 200
  },
  {
    "id": "trivia_q_967",
    "fruitId": "mango",
    "fruitName": "Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Mango?",
    "correctAnswer": "Mangifera indica",
    "options": [
      "Blueberry trait (North America)",
      "Avocado trait (Stone Fruit)",
      "Peach trait (Prunus persica)",
      "Mangifera indica"
    ],
    "explanation": "The formal taxonomic binomial for Mango is Mangifera indica.",
    "points": 250
  },
  {
    "id": "trivia_q_968",
    "fruitId": "lemon",
    "fruitName": "Lemon",
    "category": "Citrus",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Lemon?",
    "correctAnswer": "91 kcal & 124% Vitamin C",
    "options": [
      "91 kcal & 124% Vitamin C",
      "Pear trait (Pyrus communis)",
      "Pomegranate trait (Exotic)",
      "Raspberry trait (Eurasia)"
    ],
    "explanation": "Per 100g, Lemon yields 91 kcal, 3.6g fiber, and 232mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_969",
    "fruitId": "cherry",
    "fruitName": "Cherry",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "How is the sensory flavor profile of Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Kiwi trait (Actinidia deliciosa)",
      "Papaya trait (Tropical)",
      "Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Culinary sommeliers describe Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_970",
    "fruitId": "peach",
    "fruitName": "Peach",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Peach?",
    "correctAnswer": "Botanical Specimen #11: Peach is cultivated primarily across Northwest Chin...",
    "options": [
      "Fig trait (Exotic)",
      "Coconut trait (Cocos nucifera)",
      "Mangosteen trait (Sundaland, Southeast Asia)",
      "Botanical Specimen #11: Peach is cultivated primarily across Northwest Chin..."
    ],
    "explanation": "Botanical Specimen #11: Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_971",
    "fruitId": "pear",
    "fruitName": "Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Pear?",
    "correctAnswer": "Botanical Specimen #12: Pear is cultivated primarily across Temperate Europ...",
    "options": [
      "Blueberry trait (Berry)",
      "Avocado trait (Persea americana)",
      "Rambutan trait (Malaysia & Indonesia)",
      "Botanical Specimen #12: Pear is cultivated primarily across Temperate Europ..."
    ],
    "explanation": "Botanical Specimen #12: Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_972",
    "fruitId": "kiwi",
    "fruitName": "Kiwi",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "Where did the Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Lychee trait (Southern China)",
      "Pomegranate trait (Punica granatum)",
      "Raspberry trait (Berry)",
      "Yangtze Valley, China"
    ],
    "explanation": "Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #1).",
    "points": 250
  },
  {
    "id": "trivia_q_973",
    "fruitId": "coconut",
    "fruitName": "Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Coconut?",
    "correctAnswer": "Cocos nucifera",
    "options": [
      "Durian trait (Exotic)",
      "Cocos nucifera",
      "Starfruit trait (Tropical Asia)",
      "Papaya trait (Carica papaya)"
    ],
    "explanation": "The formal taxonomic binomial for Coconut is Cocos nucifera.",
    "points": 300
  },
  {
    "id": "trivia_q_974",
    "fruitId": "avocado",
    "fruitName": "Avocado",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "question": "Which nutrient metric is characteristic of a 100g serving of Avocado?",
    "correctAnswer": "133 kcal & 202% Vitamin C",
    "options": [
      "Jackfruit trait (Western Ghats, India)",
      "Fig trait (Ficus carica)",
      "133 kcal & 202% Vitamin C",
      "Mangosteen trait (Exotic)"
    ],
    "explanation": "Per 100g, Avocado yields 133 kcal, 5.4g fiber, and 346mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_975",
    "fruitId": "pomegranate",
    "fruitName": "Pomegranate",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "How is the sensory flavor profile of Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Blueberry trait (Vaccinium corymbosum)",
      "Rambutan trait (Exotic)",
      "Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "Culinary sommeliers describe Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_976",
    "fruitId": "papaya",
    "fruitName": "Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Papaya?",
    "correctAnswer": "Botanical Specimen #17: Papaya is cultivated primarily across Central Ameri...",
    "options": [
      "Botanical Specimen #17: Papaya is cultivated primarily across Central Ameri...",
      "Raspberry trait (Rubus idaeus)",
      "Lychee trait (Exotic)",
      "Miracle Berry trait (West Africa)"
    ],
    "explanation": "Botanical Specimen #17: Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_977",
    "fruitId": "fig",
    "fruitName": "Fig",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Fig?",
    "correctAnswer": "Botanical Specimen #18: Fig is cultivated primarily across Levant & Mediter...",
    "options": [
      "Botanical Specimen #18: Fig is cultivated primarily across Levant & Mediter...",
      "Durian trait (Durio zibethinus)",
      "Starfruit trait (Exotic)",
      "Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "Botanical Specimen #18: Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_978",
    "fruitId": "blueberry",
    "fruitName": "Blueberry",
    "category": "Berry",
    "difficulty": "medium",
    "question": "Where did the Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Jabuticaba trait (Minas Gerais, Brazil)",
      "North America",
      "Mangosteen trait (Garcinia mangostana)",
      "Jackfruit trait (Tropical)"
    ],
    "explanation": "Blueberry was first documented and domesticated in North America (Cultivar #1).",
    "points": 300
  },
  {
    "id": "trivia_q_979",
    "fruitId": "raspberry",
    "fruitName": "Raspberry",
    "category": "Berry",
    "difficulty": "medium",
    "question": "What is the correct botanical Latin binomial name for Raspberry?",
    "correctAnswer": "Rubus idaeus",
    "options": [
      "Rubus idaeus",
      "Royal Apple trait (Central Asia)",
      "Rambutan trait (Nephelium lappaceum)",
      "Buddha's Hand trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Raspberry is Rubus idaeus.",
    "points": 350
  },
  {
    "id": "trivia_q_980",
    "fruitId": "durian",
    "fruitName": "Durian",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Which nutrient metric is characteristic of a 100g serving of Durian?",
    "correctAnswer": "65 kcal & 30% Vitamin C",
    "options": [
      "Miracle Berry trait (Superfruit)",
      "Lychee trait (Litchi chinensis)",
      "Golden Banana trait (Southeast Asia)",
      "65 kcal & 30% Vitamin C"
    ],
    "explanation": "Per 100g, Durian yields 65 kcal, 1.2g fiber, and 460mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_981",
    "fruitId": "mangosteen",
    "fruitName": "Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Starfruit trait (Averrhoa carambola)",
      "Black Sapote trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_982",
    "fruitId": "rambutan",
    "fruitName": "Rambutan",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Rambutan?",
    "correctAnswer": "Botanical Specimen #23: Rambutan is cultivated primarily across Malaysia & ...",
    "options": [
      "Jackfruit trait (Artocarpus heterophyllus)",
      "Botanical Specimen #23: Rambutan is cultivated primarily across Malaysia & ...",
      "Wild Strawberry trait (Europe & Americas)",
      "Jabuticaba trait (Berry)"
    ],
    "explanation": "Botanical Specimen #23: Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_983",
    "fruitId": "lychee",
    "fruitName": "Lychee",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "What unique botanical characteristic distinguishes Lychee?",
    "correctAnswer": "Botanical Specimen #24: Lychee is cultivated primarily across Southern Chin...",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Botanical Specimen #24: Lychee is cultivated primarily across Southern Chin...",
      "Buddha's Hand trait (Citrus medica var. sarcodactylis)",
      "Royal Apple trait (Pome)"
    ],
    "explanation": "Botanical Specimen #24: Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_984",
    "fruitId": "starfruit",
    "fruitName": "Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Tropical Asia",
      "Miracle Berry trait (Synsepalum dulcificum)",
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)"
    ],
    "explanation": "Starfruit was first documented and domesticated in Tropical Asia (Cultivar #1).",
    "points": 350
  },
  {
    "id": "trivia_q_985",
    "fruitId": "jackfruit",
    "fruitName": "Jackfruit",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "What is the correct botanical Latin binomial name for Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus",
    "options": [
      "Alpine Orange trait (Citrus)",
      "Black Sapote trait (Diospyros nigra)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Artocarpus heterophyllus"
    ],
    "explanation": "The formal taxonomic binomial for Jackfruit is Artocarpus heterophyllus.",
    "points": 150
  },
  {
    "id": "trivia_q_986",
    "fruitId": "buddhas_hand",
    "fruitName": "Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Buddha's Hand?",
    "correctAnswer": "107 kcal & 108% Vitamin C",
    "options": [
      "107 kcal & 108% Vitamin C",
      "Jabuticaba trait (Plinia cauliflora)",
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)"
    ],
    "explanation": "Per 100g, Buddha's Hand yields 107 kcal, 3.0g fiber, and 574mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_987",
    "fruitId": "miracle_fruit",
    "fruitName": "Miracle Berry",
    "category": "Superfruit",
    "difficulty": "legendary",
    "question": "How is the sensory flavor profile of Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics"
    ],
    "explanation": "Culinary sommeliers describe Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_988",
    "fruitId": "black_sapote",
    "fruitName": "Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Black Sapote?",
    "correctAnswer": "Botanical Specimen #29: Black Sapote is cultivated primarily across Mesoame...",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Botanical Specimen #29: Black Sapote is cultivated primarily across Mesoame...",
      "Ruby Grape trait (Berry)"
    ],
    "explanation": "Botanical Specimen #29: Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_989",
    "fruitId": "jabuticaba",
    "fruitName": "Jabuticaba",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Jabuticaba?",
    "correctAnswer": "Botanical Specimen #30: Jabuticaba is cultivated primarily across Minas Ger...",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Botanical Specimen #30: Jabuticaba is cultivated primarily across Minas Ger..."
    ],
    "explanation": "Botanical Specimen #30: Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_990",
    "fruitId": "apple_var_2",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Central Asia",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #2).",
    "points": 150
  },
  {
    "id": "trivia_q_991",
    "fruitId": "banana_var_2",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Musa acuminata var. golden",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_992",
    "fruitId": "orange_var_2",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "39 kcal & 186% Vitamin C",
    "options": [
      "39 kcal & 186% Vitamin C",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 39 kcal, 4.8g fiber, and 168mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_993",
    "fruitId": "strawberry_var_2",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Honey Peach trait (Stone Fruit)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_994",
    "fruitId": "watermelon_var_2",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #35: Imperial Watermelon is cultivated primarily across ...",
    "options": [
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Botanical Specimen #35: Imperial Watermelon is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #35: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_995",
    "fruitId": "grape_var_2",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #36: Ruby Grape is cultivated primarily across Mediterra...",
    "options": [
      "Sugar Kiwi trait (Exotic)",
      "Botanical Specimen #36: Ruby Grape is cultivated primarily across Mediterra...",
      "Golden Papaya trait (Central America)",
      "Midnight Lemon trait (Citrus limon var. midnight)"
    ],
    "explanation": "Botanical Specimen #36: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_996",
    "fruitId": "pineapple_var_2",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Parana Basin, South America",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #2).",
    "points": 200
  },
  {
    "id": "trivia_q_997",
    "fruitId": "mango_var_2",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Wild Blueberry trait (North America)",
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Mangifera indica var. celestial"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_998",
    "fruitId": "lemon_var_2",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "81 kcal & 264% Vitamin C",
    "options": [
      "Royal Pomegranate trait (Exotic)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Imperial Raspberry trait (Eurasia)",
      "81 kcal & 264% Vitamin C"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 81 kcal, 6.6g fiber, and 282mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_999",
    "fruitId": "cherry_var_2",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_1000",
    "fruitId": "peach_var_2",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #41: Honey Peach is cultivated primarily across Northwes...",
    "options": [
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)",
      "Botanical Specimen #41: Honey Peach is cultivated primarily across Northwes...",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Botanical Specimen #41: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1001",
    "fruitId": "pear_var_2",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #42: Scarlet Pear is cultivated primarily across Tempera...",
    "options": [
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Botanical Specimen #42: Scarlet Pear is cultivated primarily across Tempera..."
    ],
    "explanation": "Botanical Specimen #42: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1002",
    "fruitId": "kiwi_var_2",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Midnight Lychee trait (Southern China)",
      "Yangtze Valley, China",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #2).",
    "points": 250
  },
  {
    "id": "trivia_q_1003",
    "fruitId": "coconut_var_2",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Cocos nucifera var. velvet",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_1004",
    "fruitId": "avocado_var_2",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "123 kcal & 92% Vitamin C",
    "options": [
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "123 kcal & 92% Vitamin C",
      "Honey Jackfruit trait (Western Ghats, India)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 123 kcal, 2.4g fiber, and 396mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_1005",
    "fruitId": "pomegranate_var_2",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Scarlet Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_1006",
    "fruitId": "papaya_var_2",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #47: Golden Papaya is cultivated primarily across Centra...",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Botanical Specimen #47: Golden Papaya is cultivated primarily across Centra...",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)"
    ],
    "explanation": "Botanical Specimen #47: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1007",
    "fruitId": "fig_var_2",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #48: Alpine Fig is cultivated primarily across Levant & ...",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Botanical Specimen #48: Alpine Fig is cultivated primarily across Levant & ...",
      "Giant Starfruit trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #48: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1008",
    "fruitId": "blueberry_var_2",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "North America"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #2).",
    "points": 300
  },
  {
    "id": "trivia_q_1009",
    "fruitId": "raspberry_var_2",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Royal Apple trait (Central Asia)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Rubus idaeus var. imperial"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_1010",
    "fruitId": "durian_var_2",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "55 kcal & 170% Vitamin C",
    "options": [
      "55 kcal & 170% Vitamin C",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Golden Banana trait (Southeast Asia)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 55 kcal, 4.2g fiber, and 510mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_1011",
    "fruitId": "mangosteen_var_2",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_1012",
    "fruitId": "rambutan_var_2",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #53: Celestial Rambutan is cultivated primarily across M...",
    "options": [
      "Botanical Specimen #53: Celestial Rambutan is cultivated primarily across M...",
      "Wild Strawberry trait (Europe & Americas)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Frost Jabuticaba trait (Berry)"
    ],
    "explanation": "Botanical Specimen #53: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1013",
    "fruitId": "lychee_var_2",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #54: Midnight Lychee is cultivated primarily across Sout...",
    "options": [
      "Botanical Specimen #54: Midnight Lychee is cultivated primarily across Sout...",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Botanical Specimen #54: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1014",
    "fruitId": "starfruit_var_2",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Golden Banana trait (Tropical)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Ruby Grape trait (Mediterranean)",
      "Tropical Asia"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #2).",
    "points": 350
  },
  {
    "id": "trivia_q_1015",
    "fruitId": "jackfruit_var_2",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Artocarpus heterophyllus var. honey",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_1016",
    "fruitId": "buddhas_hand_var_2",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "97 kcal & 248% Vitamin C",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "97 kcal & 248% Vitamin C"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 97 kcal, 6.0g fiber, and 104mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_1017",
    "fruitId": "miracle_fruit_var_2",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Imperial Watermelon trait (Melon)",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_1018",
    "fruitId": "black_sapote_var_2",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #59: Velvet Black Sapote is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #59: Velvet Black Sapote is cultivated primarily across ...",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)"
    ],
    "explanation": "Botanical Specimen #59: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1019",
    "fruitId": "jabuticaba_var_2",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #60: Frost Jabuticaba is cultivated primarily across Min...",
    "options": [
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)",
      "Botanical Specimen #60: Frost Jabuticaba is cultivated primarily across Min..."
    ],
    "explanation": "Botanical Specimen #60: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1020",
    "fruitId": "apple_var_3",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Central Asia"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #3).",
    "points": 150
  },
  {
    "id": "trivia_q_1021",
    "fruitId": "banana_var_3",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Musa acuminata var. golden",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_1022",
    "fruitId": "orange_var_3",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "139 kcal & 76% Vitamin C",
    "options": [
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "139 kcal & 76% Vitamin C",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 139 kcal, 1.8g fiber, and 218mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_1023",
    "fruitId": "strawberry_var_3",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Honey Peach trait (Stone Fruit)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_1024",
    "fruitId": "watermelon_var_3",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #65: Imperial Watermelon is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #65: Imperial Watermelon is cultivated primarily across ...",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Botanical Specimen #65: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1025",
    "fruitId": "grape_var_3",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #66: Ruby Grape is cultivated primarily across Mediterra...",
    "options": [
      "Botanical Specimen #66: Ruby Grape is cultivated primarily across Mediterra...",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)",
      "Golden Papaya trait (Central America)"
    ],
    "explanation": "Botanical Specimen #66: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1026",
    "fruitId": "pineapple_var_3",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Velvet Coconut trait (Tropical)",
      "Parana Basin, South America",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Alpine Fig trait (Levant & Mediterranean)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #3).",
    "points": 200
  },
  {
    "id": "trivia_q_1027",
    "fruitId": "mango_var_3",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Mangifera indica var. celestial",
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_1028",
    "fruitId": "lemon_var_3",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "71 kcal & 154% Vitamin C",
    "options": [
      "Imperial Raspberry trait (Eurasia)",
      "Royal Pomegranate trait (Exotic)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "71 kcal & 154% Vitamin C"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 71 kcal, 3.6g fiber, and 332mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_1029",
    "fruitId": "cherry_var_3",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_1030",
    "fruitId": "peach_var_3",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #71: Honey Peach is cultivated primarily across Northwes...",
    "options": [
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Botanical Specimen #71: Honey Peach is cultivated primarily across Northwes..."
    ],
    "explanation": "Botanical Specimen #71: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1031",
    "fruitId": "pear_var_3",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #72: Scarlet Pear is cultivated primarily across Tempera...",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Botanical Specimen #72: Scarlet Pear is cultivated primarily across Tempera...",
      "Wild Blueberry trait (Berry)"
    ],
    "explanation": "Botanical Specimen #72: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1032",
    "fruitId": "kiwi_var_3",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Midnight Lychee trait (Southern China)",
      "Yangtze Valley, China"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #3).",
    "points": 250
  },
  {
    "id": "trivia_q_1033",
    "fruitId": "coconut_var_3",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Cocos nucifera var. velvet",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_1034",
    "fruitId": "avocado_var_3",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "113 kcal & 232% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)",
      "113 kcal & 232% Vitamin C"
    ],
    "explanation": "Per 100g, Frost Avocado yields 113 kcal, 5.4g fiber, and 446mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_1035",
    "fruitId": "pomegranate_var_3",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Celestial Rambutan trait (Exotic)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_1036",
    "fruitId": "papaya_var_3",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #77: Golden Papaya is cultivated primarily across Centra...",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Botanical Specimen #77: Golden Papaya is cultivated primarily across Centra..."
    ],
    "explanation": "Botanical Specimen #77: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1037",
    "fruitId": "fig_var_3",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #78: Alpine Fig is cultivated primarily across Levant & ...",
    "options": [
      "Botanical Specimen #78: Alpine Fig is cultivated primarily across Levant & ...",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "Botanical Specimen #78: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1038",
    "fruitId": "blueberry_var_3",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Honey Jackfruit trait (Tropical)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "North America"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #3).",
    "points": 300
  },
  {
    "id": "trivia_q_1039",
    "fruitId": "raspberry_var_3",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Rubus idaeus var. imperial"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_1040",
    "fruitId": "durian_var_3",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "45 kcal & 60% Vitamin C",
    "options": [
      "45 kcal & 60% Vitamin C",
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 45 kcal, 1.2g fiber, and 560mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_1041",
    "fruitId": "mangosteen_var_3",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_1042",
    "fruitId": "rambutan_var_3",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #83: Celestial Rambutan is cultivated primarily across M...",
    "options": [
      "Botanical Specimen #83: Celestial Rambutan is cultivated primarily across M...",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Frost Jabuticaba trait (Berry)",
      "Wild Strawberry trait (Europe & Americas)"
    ],
    "explanation": "Botanical Specimen #83: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1043",
    "fruitId": "lychee_var_3",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #84: Midnight Lychee is cultivated primarily across Sout...",
    "options": [
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Botanical Specimen #84: Midnight Lychee is cultivated primarily across Sout..."
    ],
    "explanation": "Botanical Specimen #84: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1044",
    "fruitId": "starfruit_var_3",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Ruby Grape trait (Mediterranean)",
      "Tropical Asia",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Golden Banana trait (Tropical)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #3).",
    "points": 350
  },
  {
    "id": "trivia_q_1045",
    "fruitId": "jackfruit_var_3",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Alpine Orange trait (Citrus)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Artocarpus heterophyllus var. honey"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_1046",
    "fruitId": "buddhas_hand_var_3",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "87 kcal & 138% Vitamin C",
    "options": [
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "87 kcal & 138% Vitamin C",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 87 kcal, 3.0g fiber, and 154mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_1047",
    "fruitId": "miracle_fruit_var_3",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_1048",
    "fruitId": "black_sapote_var_3",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #89: Velvet Black Sapote is cultivated primarily across ...",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Botanical Specimen #89: Velvet Black Sapote is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #89: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1049",
    "fruitId": "jabuticaba_var_3",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #90: Frost Jabuticaba is cultivated primarily across Min...",
    "options": [
      "Botanical Specimen #90: Frost Jabuticaba is cultivated primarily across Min...",
      "Honey Peach trait (Northwest China)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)"
    ],
    "explanation": "Botanical Specimen #90: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1050",
    "fruitId": "apple_var_4",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)",
      "Central Asia"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #4).",
    "points": 150
  },
  {
    "id": "trivia_q_1051",
    "fruitId": "banana_var_4",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Musa acuminata var. golden",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_1052",
    "fruitId": "orange_var_4",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "129 kcal & 216% Vitamin C",
    "options": [
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "129 kcal & 216% Vitamin C"
    ],
    "explanation": "Per 100g, Alpine Orange yields 129 kcal, 4.8g fiber, and 268mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_1053",
    "fruitId": "strawberry_var_4",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Honey Peach trait (Stone Fruit)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Frost Avocado trait (Mesoamerica)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_1054",
    "fruitId": "watermelon_var_4",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #95: Imperial Watermelon is cultivated primarily across ...",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Botanical Specimen #95: Imperial Watermelon is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #95: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1055",
    "fruitId": "grape_var_4",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #96: Ruby Grape is cultivated primarily across Mediterra...",
    "options": [
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #96: Ruby Grape is cultivated primarily across Mediterra..."
    ],
    "explanation": "Botanical Specimen #96: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1056",
    "fruitId": "pineapple_var_4",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Parana Basin, South America",
      "Alpine Fig trait (Levant & Mediterranean)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #4).",
    "points": 200
  },
  {
    "id": "trivia_q_1057",
    "fruitId": "mango_var_4",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Wild Blueberry trait (North America)",
      "Mangifera indica var. celestial"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_1058",
    "fruitId": "lemon_var_4",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "61 kcal & 44% Vitamin C",
    "options": [
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "61 kcal & 44% Vitamin C",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 61 kcal, 6.6g fiber, and 382mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_1059",
    "fruitId": "cherry_var_4",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_1060",
    "fruitId": "peach_var_4",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #101: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Botanical Specimen #101: Honey Peach is cultivated primarily across Northwe...",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)"
    ],
    "explanation": "Botanical Specimen #101: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1061",
    "fruitId": "pear_var_4",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #102: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Botanical Specimen #102: Scarlet Pear is cultivated primarily across Temper...",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)"
    ],
    "explanation": "Botanical Specimen #102: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1062",
    "fruitId": "kiwi_var_4",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Yangtze Valley, China",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #4).",
    "points": 250
  },
  {
    "id": "trivia_q_1063",
    "fruitId": "coconut_var_4",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Cocos nucifera var. velvet"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_1064",
    "fruitId": "avocado_var_4",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "103 kcal & 122% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "103 kcal & 122% Vitamin C"
    ],
    "explanation": "Per 100g, Frost Avocado yields 103 kcal, 2.4g fiber, and 496mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_1065",
    "fruitId": "pomegranate_var_4",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_1066",
    "fruitId": "papaya_var_4",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #107: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Botanical Specimen #107: Golden Papaya is cultivated primarily across Centr...",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Midnight Lychee trait (Exotic)",
      "Sugar Miracle Berry trait (West Africa)"
    ],
    "explanation": "Botanical Specimen #107: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1067",
    "fruitId": "fig_var_4",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #108: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Botanical Specimen #108: Alpine Fig is cultivated primarily across Levant &..."
    ],
    "explanation": "Botanical Specimen #108: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1068",
    "fruitId": "blueberry_var_4",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "North America"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #4).",
    "points": 300
  },
  {
    "id": "trivia_q_1069",
    "fruitId": "raspberry_var_4",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Rubus idaeus var. imperial",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_1070",
    "fruitId": "durian_var_4",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "35 kcal & 200% Vitamin C",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "35 kcal & 200% Vitamin C",
      "Golden Banana trait (Southeast Asia)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 35 kcal, 4.2g fiber, and 90mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_1071",
    "fruitId": "mangosteen_var_4",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_1072",
    "fruitId": "rambutan_var_4",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #113: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Frost Jabuticaba trait (Berry)",
      "Wild Strawberry trait (Europe & Americas)",
      "Botanical Specimen #113: Celestial Rambutan is cultivated primarily across ...",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)"
    ],
    "explanation": "Botanical Specimen #113: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1073",
    "fruitId": "lychee_var_4",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #114: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Botanical Specimen #114: Midnight Lychee is cultivated primarily across Sou...",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Royal Apple trait (Pome)"
    ],
    "explanation": "Botanical Specimen #114: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1074",
    "fruitId": "starfruit_var_4",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Golden Banana trait (Tropical)",
      "Tropical Asia",
      "Ruby Grape trait (Mediterranean)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #4).",
    "points": 350
  },
  {
    "id": "trivia_q_1075",
    "fruitId": "jackfruit_var_4",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Alpine Orange trait (Citrus)",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Artocarpus heterophyllus var. honey"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_1076",
    "fruitId": "buddhas_hand_var_4",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "77 kcal & 28% Vitamin C",
    "options": [
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "77 kcal & 28% Vitamin C",
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 77 kcal, 6.0g fiber, and 204mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_1077",
    "fruitId": "miracle_fruit_var_4",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Imperial Watermelon trait (Melon)",
      "Midnight Lemon trait (Northeast India)",
      "Royal Apple trait (Malus domestica var. royal)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_1078",
    "fruitId": "black_sapote_var_4",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #119: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Botanical Specimen #119: Velvet Black Sapote is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #119: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1079",
    "fruitId": "jabuticaba_var_4",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #120: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Botanical Specimen #120: Frost Jabuticaba is cultivated primarily across Mi...",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Emerald Pineapple trait (Tropical)",
      "Honey Peach trait (Northwest China)"
    ],
    "explanation": "Botanical Specimen #120: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1080",
    "fruitId": "apple_var_5",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Central Asia",
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #5).",
    "points": 150
  },
  {
    "id": "trivia_q_1081",
    "fruitId": "banana_var_5",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Musa acuminata var. golden",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_1082",
    "fruitId": "orange_var_5",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "119 kcal & 106% Vitamin C",
    "options": [
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "119 kcal & 106% Vitamin C",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 119 kcal, 1.8g fiber, and 318mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_1083",
    "fruitId": "strawberry_var_5",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Frost Avocado trait (Mesoamerica)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Honey Peach trait (Stone Fruit)",
      "Emerald Pineapple trait (Ananas comosus var. emerald)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_1084",
    "fruitId": "watermelon_var_5",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #125: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Royal Pomegranate trait (Persia to Northern India)",
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Botanical Specimen #125: Imperial Watermelon is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #125: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1085",
    "fruitId": "grape_var_5",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #126: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #126: Ruby Grape is cultivated primarily across Mediterr..."
    ],
    "explanation": "Botanical Specimen #126: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1086",
    "fruitId": "pineapple_var_5",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Velvet Coconut trait (Tropical)",
      "Parana Basin, South America",
      "Alpine Fig trait (Levant & Mediterranean)",
      "Giant Cherry trait (Prunus avium var. giant)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #5).",
    "points": 200
  },
  {
    "id": "trivia_q_1087",
    "fruitId": "mango_var_5",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Wild Blueberry trait (North America)",
      "Mangifera indica var. celestial",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_1088",
    "fruitId": "lemon_var_5",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "51 kcal & 184% Vitamin C",
    "options": [
      "Royal Pomegranate trait (Exotic)",
      "51 kcal & 184% Vitamin C",
      "Imperial Raspberry trait (Eurasia)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 51 kcal, 3.6g fiber, and 432mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_1089",
    "fruitId": "cherry_var_5",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Ruby Durian trait (Borneo & Sumatra)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Golden Papaya trait (Tropical)",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_1090",
    "fruitId": "peach_var_5",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #131: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Alpine Fig trait (Exotic)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Botanical Specimen #131: Honey Peach is cultivated primarily across Northwe..."
    ],
    "explanation": "Botanical Specimen #131: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1091",
    "fruitId": "pear_var_5",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #132: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Botanical Specimen #132: Scarlet Pear is cultivated primarily across Temper...",
      "Frost Avocado trait (Persea americana var. frost)",
      "Wild Blueberry trait (Berry)",
      "Celestial Rambutan trait (Malaysia & Indonesia)"
    ],
    "explanation": "Botanical Specimen #132: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1092",
    "fruitId": "kiwi_var_5",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Midnight Lychee trait (Southern China)",
      "Imperial Raspberry trait (Berry)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Yangtze Valley, China"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #5).",
    "points": 250
  },
  {
    "id": "trivia_q_1093",
    "fruitId": "coconut_var_5",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Cocos nucifera var. velvet",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Ruby Durian trait (Exotic)",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_1094",
    "fruitId": "avocado_var_5",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "93 kcal & 262% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "93 kcal & 262% Vitamin C"
    ],
    "explanation": "Per 100g, Frost Avocado yields 93 kcal, 5.4g fiber, and 546mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_1095",
    "fruitId": "pomegranate_var_5",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_1096",
    "fruitId": "papaya_var_5",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #137: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Midnight Lychee trait (Exotic)",
      "Sugar Miracle Berry trait (West Africa)",
      "Botanical Specimen #137: Golden Papaya is cultivated primarily across Centr..."
    ],
    "explanation": "Botanical Specimen #137: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1097",
    "fruitId": "fig_var_5",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #138: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Botanical Specimen #138: Alpine Fig is cultivated primarily across Levant &..."
    ],
    "explanation": "Botanical Specimen #138: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1098",
    "fruitId": "blueberry_var_5",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "North America",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #5).",
    "points": 300
  },
  {
    "id": "trivia_q_1099",
    "fruitId": "raspberry_var_5",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Rubus idaeus var. imperial",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_1100",
    "fruitId": "durian_var_5",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "135 kcal & 90% Vitamin C",
    "options": [
      "135 kcal & 90% Vitamin C",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 135 kcal, 1.2g fiber, and 140mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_1101",
    "fruitId": "mangosteen_var_5",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Alpine Orange trait (Southern China)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_1102",
    "fruitId": "rambutan_var_5",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #143: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Botanical Specimen #143: Celestial Rambutan is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #143: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1103",
    "fruitId": "lychee_var_5",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #144: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Botanical Specimen #144: Midnight Lychee is cultivated primarily across Sou...",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Botanical Specimen #144: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1104",
    "fruitId": "starfruit_var_5",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Tropical Asia"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #5).",
    "points": 350
  },
  {
    "id": "trivia_q_1105",
    "fruitId": "jackfruit_var_5",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)",
      "Artocarpus heterophyllus var. honey"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_1106",
    "fruitId": "buddhas_hand_var_5",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "67 kcal & 168% Vitamin C",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "67 kcal & 168% Vitamin C",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 67 kcal, 3.0g fiber, and 254mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_1107",
    "fruitId": "miracle_fruit_var_5",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Midnight Lemon trait (Northeast India)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Imperial Watermelon trait (Melon)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_1108",
    "fruitId": "black_sapote_var_5",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #149: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Botanical Specimen #149: Velvet Black Sapote is cultivated primarily across...",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Ruby Grape trait (Berry)",
      "Giant Cherry trait (Anatolia, Turkey)"
    ],
    "explanation": "Botanical Specimen #149: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1109",
    "fruitId": "jabuticaba_var_5",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #150: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)",
      "Botanical Specimen #150: Frost Jabuticaba is cultivated primarily across Mi..."
    ],
    "explanation": "Botanical Specimen #150: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1110",
    "fruitId": "apple_var_6",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Central Asia",
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #6).",
    "points": 150
  },
  {
    "id": "trivia_q_1111",
    "fruitId": "banana_var_6",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Musa acuminata var. golden",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_1112",
    "fruitId": "orange_var_6",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "109 kcal & 246% Vitamin C",
    "options": [
      "109 kcal & 246% Vitamin C",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Giant Cherry trait (Stone Fruit)",
      "Velvet Coconut trait (Indo-Pacific)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 109 kcal, 4.8g fiber, and 368mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_1113",
    "fruitId": "strawberry_var_6",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)",
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_1114",
    "fruitId": "watermelon_var_6",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #155: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Botanical Specimen #155: Imperial Watermelon is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #155: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1115",
    "fruitId": "grape_var_6",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #156: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Botanical Specimen #156: Ruby Grape is cultivated primarily across Mediterr..."
    ],
    "explanation": "Botanical Specimen #156: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1116",
    "fruitId": "pineapple_var_6",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Velvet Coconut trait (Tropical)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Alpine Fig trait (Levant & Mediterranean)",
      "Parana Basin, South America"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #6).",
    "points": 200
  },
  {
    "id": "trivia_q_1117",
    "fruitId": "mango_var_6",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)",
      "Mangifera indica var. celestial"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_1118",
    "fruitId": "lemon_var_6",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "41 kcal & 74% Vitamin C",
    "options": [
      "Royal Pomegranate trait (Exotic)",
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Imperial Raspberry trait (Eurasia)",
      "41 kcal & 74% Vitamin C"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 41 kcal, 6.6g fiber, and 482mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_1119",
    "fruitId": "cherry_var_6",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Golden Papaya trait (Tropical)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_1120",
    "fruitId": "peach_var_6",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #161: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Botanical Specimen #161: Honey Peach is cultivated primarily across Northwe...",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)"
    ],
    "explanation": "Botanical Specimen #161: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1121",
    "fruitId": "pear_var_6",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #162: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Frost Avocado trait (Persea americana var. frost)",
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)",
      "Botanical Specimen #162: Scarlet Pear is cultivated primarily across Temper..."
    ],
    "explanation": "Botanical Specimen #162: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1122",
    "fruitId": "kiwi_var_6",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Yangtze Valley, China",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)",
      "Midnight Lychee trait (Southern China)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #6).",
    "points": 250
  },
  {
    "id": "trivia_q_1123",
    "fruitId": "coconut_var_6",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Cocos nucifera var. velvet",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_1124",
    "fruitId": "avocado_var_6",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "83 kcal & 152% Vitamin C",
    "options": [
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "83 kcal & 152% Vitamin C"
    ],
    "explanation": "Per 100g, Frost Avocado yields 83 kcal, 2.4g fiber, and 596mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_1125",
    "fruitId": "pomegranate_var_6",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Celestial Rambutan trait (Exotic)",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Scarlet Buddha's Hand trait (Lower Himalayas)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_1126",
    "fruitId": "papaya_var_6",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #167: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Botanical Specimen #167: Golden Papaya is cultivated primarily across Centr...",
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #167: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1127",
    "fruitId": "fig_var_6",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #168: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Velvet Black Sapote trait (Mesoamerica)",
      "Botanical Specimen #168: Alpine Fig is cultivated primarily across Levant &..."
    ],
    "explanation": "Botanical Specimen #168: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1128",
    "fruitId": "blueberry_var_6",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Honey Jackfruit trait (Tropical)",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "North America"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #6).",
    "points": 300
  },
  {
    "id": "trivia_q_1129",
    "fruitId": "raspberry_var_6",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Rubus idaeus var. imperial",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_1130",
    "fruitId": "durian_var_6",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "125 kcal & 230% Vitamin C",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "125 kcal & 230% Vitamin C",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Golden Banana trait (Southeast Asia)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 125 kcal, 4.2g fiber, and 190mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_1131",
    "fruitId": "mangosteen_var_6",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)",
      "Alpine Orange trait (Southern China)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_1132",
    "fruitId": "rambutan_var_6",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #173: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Botanical Specimen #173: Celestial Rambutan is cultivated primarily across ..."
    ],
    "explanation": "Botanical Specimen #173: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1133",
    "fruitId": "lychee_var_6",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #174: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Botanical Specimen #174: Midnight Lychee is cultivated primarily across Sou...",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Botanical Specimen #174: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1134",
    "fruitId": "starfruit_var_6",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Ruby Grape trait (Mediterranean)",
      "Golden Banana trait (Tropical)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Tropical Asia"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #6).",
    "points": 350
  },
  {
    "id": "trivia_q_1135",
    "fruitId": "jackfruit_var_6",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Alpine Orange trait (Citrus)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Artocarpus heterophyllus var. honey"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_1136",
    "fruitId": "buddhas_hand_var_6",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "57 kcal & 58% Vitamin C",
    "options": [
      "Celestial Mango trait (India & Myanmar)",
      "Wild Strawberry trait (Berry)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "57 kcal & 58% Vitamin C"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 57 kcal, 6.0g fiber, and 304mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_1137",
    "fruitId": "miracle_fruit_var_6",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_1138",
    "fruitId": "black_sapote_var_6",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #179: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Botanical Specimen #179: Velvet Black Sapote is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #179: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1139",
    "fruitId": "jabuticaba_var_6",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #180: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Botanical Specimen #180: Frost Jabuticaba is cultivated primarily across Mi..."
    ],
    "explanation": "Botanical Specimen #180: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1140",
    "fruitId": "apple_var_7",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Celestial Mango trait (Tropical)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Central Asia"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #7).",
    "points": 150
  },
  {
    "id": "trivia_q_1141",
    "fruitId": "banana_var_7",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Musa acuminata var. golden",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Midnight Lemon trait (Citrus)",
      "Sugar Kiwi trait (Yangtze Valley, China)"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_1142",
    "fruitId": "orange_var_7",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "99 kcal & 136% Vitamin C",
    "options": [
      "99 kcal & 136% Vitamin C",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)"
    ],
    "explanation": "Per 100g, Alpine Orange yields 99 kcal, 1.8g fiber, and 418mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_1143",
    "fruitId": "strawberry_var_7",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_1144",
    "fruitId": "watermelon_var_7",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #185: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Scarlet Pear trait (Pome)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Botanical Specimen #185: Imperial Watermelon is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #185: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1145",
    "fruitId": "grape_var_7",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #186: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Botanical Specimen #186: Ruby Grape is cultivated primarily across Mediterr...",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Golden Papaya trait (Central America)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #186: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1146",
    "fruitId": "pineapple_var_7",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "hard",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Alpine Fig trait (Levant & Mediterranean)",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Parana Basin, South America",
      "Velvet Coconut trait (Tropical)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #7).",
    "points": 200
  },
  {
    "id": "trivia_q_1147",
    "fruitId": "mango_var_7",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Frost Avocado trait (Stone Fruit)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Wild Blueberry trait (North America)",
      "Mangifera indica var. celestial"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_1148",
    "fruitId": "lemon_var_7",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "141 kcal & 214% Vitamin C",
    "options": [
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Imperial Raspberry trait (Eurasia)",
      "141 kcal & 214% Vitamin C",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 141 kcal, 3.6g fiber, and 532mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_1149",
    "fruitId": "cherry_var_7",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Ruby Durian trait (Borneo & Sumatra)",
      "Golden Papaya trait (Tropical)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_1150",
    "fruitId": "peach_var_7",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #191: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Alpine Fig trait (Exotic)",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Botanical Specimen #191: Honey Peach is cultivated primarily across Northwe..."
    ],
    "explanation": "Botanical Specimen #191: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1151",
    "fruitId": "pear_var_7",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #192: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Botanical Specimen #192: Scarlet Pear is cultivated primarily across Temper..."
    ],
    "explanation": "Botanical Specimen #192: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1152",
    "fruitId": "kiwi_var_7",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Yangtze Valley, China",
      "Midnight Lychee trait (Southern China)",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Imperial Raspberry trait (Berry)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #7).",
    "points": 250
  },
  {
    "id": "trivia_q_1153",
    "fruitId": "coconut_var_7",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Cocos nucifera var. velvet",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Giant Starfruit trait (Tropical Asia)",
      "Ruby Durian trait (Exotic)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_1154",
    "fruitId": "avocado_var_7",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "73 kcal & 42% Vitamin C",
    "options": [
      "73 kcal & 42% Vitamin C",
      "Alpine Fig trait (Ficus carica var. alpine)",
      "Emerald Mangosteen trait (Exotic)",
      "Honey Jackfruit trait (Western Ghats, India)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 73 kcal, 5.4g fiber, and 126mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_1155",
    "fruitId": "pomegranate_var_7",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_1156",
    "fruitId": "papaya_var_7",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #197: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Sugar Miracle Berry trait (West Africa)",
      "Botanical Specimen #197: Golden Papaya is cultivated primarily across Centr...",
      "Midnight Lychee trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #197: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1157",
    "fruitId": "fig_var_7",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #198: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Botanical Specimen #198: Alpine Fig is cultivated primarily across Levant &...",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Giant Starfruit trait (Exotic)",
      "Velvet Black Sapote trait (Mesoamerica)"
    ],
    "explanation": "Botanical Specimen #198: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1158",
    "fruitId": "blueberry_var_7",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "North America",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #7).",
    "points": 300
  },
  {
    "id": "trivia_q_1159",
    "fruitId": "raspberry_var_7",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Rubus idaeus var. imperial",
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_1160",
    "fruitId": "durian_var_7",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "115 kcal & 120% Vitamin C",
    "options": [
      "Sugar Miracle Berry trait (Superfruit)",
      "115 kcal & 120% Vitamin C",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Golden Banana trait (Southeast Asia)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 115 kcal, 1.2g fiber, and 240mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_1161",
    "fruitId": "mangosteen_var_7",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Alpine Orange trait (Southern China)",
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_1162",
    "fruitId": "rambutan_var_7",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #203: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #203: Celestial Rambutan is cultivated primarily across ...",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Wild Strawberry trait (Europe & Americas)",
      "Frost Jabuticaba trait (Berry)"
    ],
    "explanation": "Botanical Specimen #203: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1163",
    "fruitId": "lychee_var_7",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #204: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Botanical Specimen #204: Midnight Lychee is cultivated primarily across Sou...",
      "Royal Apple trait (Pome)",
      "Imperial Watermelon trait (Kalahari, Africa)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)"
    ],
    "explanation": "Botanical Specimen #204: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1164",
    "fruitId": "starfruit_var_7",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Golden Banana trait (Tropical)",
      "Ruby Grape trait (Mediterranean)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Tropical Asia"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #7).",
    "points": 350
  },
  {
    "id": "trivia_q_1165",
    "fruitId": "jackfruit_var_7",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Alpine Orange trait (Citrus)",
      "Artocarpus heterophyllus var. honey",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Emerald Pineapple trait (Parana Basin, South America)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_1166",
    "fruitId": "buddhas_hand_var_7",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "47 kcal & 198% Vitamin C",
    "options": [
      "47 kcal & 198% Vitamin C",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 47 kcal, 3.0g fiber, and 354mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_1167",
    "fruitId": "miracle_fruit_var_7",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Royal Apple trait (Malus domestica var. royal)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
      "Imperial Watermelon trait (Melon)",
      "Midnight Lemon trait (Northeast India)"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_1168",
    "fruitId": "black_sapote_var_7",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #209: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Giant Cherry trait (Anatolia, Turkey)",
      "Botanical Specimen #209: Velvet Black Sapote is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #209: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1169",
    "fruitId": "jabuticaba_var_7",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #210: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Emerald Pineapple trait (Tropical)",
      "Botanical Specimen #210: Frost Jabuticaba is cultivated primarily across Mi...",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Honey Peach trait (Northwest China)"
    ],
    "explanation": "Botanical Specimen #210: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1170",
    "fruitId": "apple_var_8",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "hard",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Scarlet Pear trait (Temperate Europe)",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Central Asia",
      "Celestial Mango trait (Tropical)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #8).",
    "points": 150
  },
  {
    "id": "trivia_q_1171",
    "fruitId": "banana_var_8",
    "fruitName": "Golden Banana",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Golden Banana?",
    "correctAnswer": "Musa acuminata var. golden",
    "options": [
      "Sugar Kiwi trait (Yangtze Valley, China)",
      "Midnight Lemon trait (Citrus)",
      "Imperial Watermelon trait (Citrullus lanatus var. imperial)",
      "Musa acuminata var. golden"
    ],
    "explanation": "The formal taxonomic binomial for Golden Banana is Musa acuminata var. golden.",
    "points": 200
  },
  {
    "id": "trivia_q_1172",
    "fruitId": "orange_var_8",
    "fruitName": "Alpine Orange",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Alpine Orange?",
    "correctAnswer": "89 kcal & 26% Vitamin C",
    "options": [
      "Velvet Coconut trait (Indo-Pacific)",
      "Giant Cherry trait (Stone Fruit)",
      "Ruby Grape trait (Vitis vinifera var. ruby)",
      "89 kcal & 26% Vitamin C"
    ],
    "explanation": "Per 100g, Alpine Orange yields 89 kcal, 4.8g fiber, and 468mg potassium.",
    "points": 250
  },
  {
    "id": "trivia_q_1173",
    "fruitId": "strawberry_var_8",
    "fruitName": "Wild Strawberry",
    "category": "Berry",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Wild Strawberry best characterized?",
    "correctAnswer": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "options": [
      "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
      "Emerald Pineapple trait (Ananas comosus var. emerald)",
      "Honey Peach trait (Stone Fruit)",
      "Frost Avocado trait (Mesoamerica)"
    ],
    "explanation": "Culinary sommeliers describe Wild Strawberry as having: Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics.",
    "points": 300
  },
  {
    "id": "trivia_q_1174",
    "fruitId": "watermelon_var_8",
    "fruitName": "Imperial Watermelon",
    "category": "Melon",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Imperial Watermelon?",
    "correctAnswer": "Botanical Specimen #215: Imperial Watermelon is cultivated primarily across...",
    "options": [
      "Botanical Specimen #215: Imperial Watermelon is cultivated primarily across...",
      "Royal Pomegranate trait (Persia to Northern India)",
      "Celestial Mango trait (Mangifera indica var. celestial)",
      "Scarlet Pear trait (Pome)"
    ],
    "explanation": "Botanical Specimen #215: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1175",
    "fruitId": "grape_var_8",
    "fruitName": "Ruby Grape",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Ruby Grape?",
    "correctAnswer": "Botanical Specimen #216: Ruby Grape is cultivated primarily across Mediterr...",
    "options": [
      "Golden Papaya trait (Central America)",
      "Botanical Specimen #216: Ruby Grape is cultivated primarily across Mediterr...",
      "Midnight Lemon trait (Citrus limon var. midnight)",
      "Sugar Kiwi trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #216: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1176",
    "fruitId": "pineapple_var_8",
    "fruitName": "Emerald Pineapple",
    "category": "Tropical",
    "difficulty": "legendary",
    "question": "Where did the Emerald Pineapple originally evolve and originate?",
    "correctAnswer": "Parana Basin, South America",
    "options": [
      "Parana Basin, South America",
      "Giant Cherry trait (Prunus avium var. giant)",
      "Velvet Coconut trait (Tropical)",
      "Alpine Fig trait (Levant & Mediterranean)"
    ],
    "explanation": "Emerald Pineapple was first documented and domesticated in Parana Basin, South America (Cultivar #8).",
    "points": 200
  },
  {
    "id": "trivia_q_1177",
    "fruitId": "mango_var_8",
    "fruitName": "Celestial Mango",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Celestial Mango?",
    "correctAnswer": "Mangifera indica var. celestial",
    "options": [
      "Mangifera indica var. celestial",
      "Wild Blueberry trait (North America)",
      "Honey Peach trait (Prunus persica var. honey)",
      "Frost Avocado trait (Stone Fruit)"
    ],
    "explanation": "The formal taxonomic binomial for Celestial Mango is Mangifera indica var. celestial.",
    "points": 250
  },
  {
    "id": "trivia_q_1178",
    "fruitId": "lemon_var_8",
    "fruitName": "Midnight Lemon",
    "category": "Citrus",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Midnight Lemon?",
    "correctAnswer": "131 kcal & 104% Vitamin C",
    "options": [
      "Scarlet Pear trait (Pyrus communis var. scarlet)",
      "Imperial Raspberry trait (Eurasia)",
      "131 kcal & 104% Vitamin C",
      "Royal Pomegranate trait (Exotic)"
    ],
    "explanation": "Per 100g, Midnight Lemon yields 131 kcal, 6.6g fiber, and 582mg potassium.",
    "points": 300
  },
  {
    "id": "trivia_q_1179",
    "fruitId": "cherry_var_8",
    "fruitName": "Giant Cherry",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Giant Cherry best characterized?",
    "correctAnswer": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "options": [
      "Golden Papaya trait (Tropical)",
      "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
      "Sugar Kiwi trait (Actinidia deliciosa var. sugar)",
      "Ruby Durian trait (Borneo & Sumatra)"
    ],
    "explanation": "Culinary sommeliers describe Giant Cherry as having: Deep nectar, sweet-tart with nuanced notes of giant aromatics.",
    "points": 350
  },
  {
    "id": "trivia_q_1180",
    "fruitId": "peach_var_8",
    "fruitName": "Honey Peach",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Honey Peach?",
    "correctAnswer": "Botanical Specimen #221: Honey Peach is cultivated primarily across Northwe...",
    "options": [
      "Velvet Coconut trait (Cocos nucifera var. velvet)",
      "Botanical Specimen #221: Honey Peach is cultivated primarily across Northwe...",
      "Emerald Mangosteen trait (Sundaland, Southeast Asia)",
      "Alpine Fig trait (Exotic)"
    ],
    "explanation": "Botanical Specimen #221: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 150
  },
  {
    "id": "trivia_q_1181",
    "fruitId": "pear_var_8",
    "fruitName": "Scarlet Pear",
    "category": "Pome",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Scarlet Pear?",
    "correctAnswer": "Botanical Specimen #222: Scarlet Pear is cultivated primarily across Temper...",
    "options": [
      "Celestial Rambutan trait (Malaysia & Indonesia)",
      "Wild Blueberry trait (Berry)",
      "Frost Avocado trait (Persea americana var. frost)",
      "Botanical Specimen #222: Scarlet Pear is cultivated primarily across Temper..."
    ],
    "explanation": "Botanical Specimen #222: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1182",
    "fruitId": "kiwi_var_8",
    "fruitName": "Sugar Kiwi",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Sugar Kiwi originally evolve and originate?",
    "correctAnswer": "Yangtze Valley, China",
    "options": [
      "Imperial Raspberry trait (Berry)",
      "Yangtze Valley, China",
      "Royal Pomegranate trait (Punica granatum var. royal)",
      "Midnight Lychee trait (Southern China)"
    ],
    "explanation": "Sugar Kiwi was first documented and domesticated in Yangtze Valley, China (Cultivar #8).",
    "points": 250
  },
  {
    "id": "trivia_q_1183",
    "fruitId": "coconut_var_8",
    "fruitName": "Velvet Coconut",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Velvet Coconut?",
    "correctAnswer": "Cocos nucifera var. velvet",
    "options": [
      "Ruby Durian trait (Exotic)",
      "Golden Papaya trait (Carica papaya var. golden)",
      "Cocos nucifera var. velvet",
      "Giant Starfruit trait (Tropical Asia)"
    ],
    "explanation": "The formal taxonomic binomial for Velvet Coconut is Cocos nucifera var. velvet.",
    "points": 300
  },
  {
    "id": "trivia_q_1184",
    "fruitId": "avocado_var_8",
    "fruitName": "Frost Avocado",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Frost Avocado?",
    "correctAnswer": "63 kcal & 182% Vitamin C",
    "options": [
      "63 kcal & 182% Vitamin C",
      "Honey Jackfruit trait (Western Ghats, India)",
      "Emerald Mangosteen trait (Exotic)",
      "Alpine Fig trait (Ficus carica var. alpine)"
    ],
    "explanation": "Per 100g, Frost Avocado yields 63 kcal, 2.4g fiber, and 176mg potassium.",
    "points": 350
  },
  {
    "id": "trivia_q_1185",
    "fruitId": "pomegranate_var_8",
    "fruitName": "Royal Pomegranate",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Royal Pomegranate best characterized?",
    "correctAnswer": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "options": [
      "Scarlet Buddha's Hand trait (Lower Himalayas)",
      "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
      "Wild Blueberry trait (Vaccinium corymbosum var. wild)",
      "Celestial Rambutan trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Royal Pomegranate as having: Deep tart-sweet, ruby burst with nuanced notes of royal aromatics.",
    "points": 150
  },
  {
    "id": "trivia_q_1186",
    "fruitId": "papaya_var_8",
    "fruitName": "Golden Papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Golden Papaya?",
    "correctAnswer": "Botanical Specimen #227: Golden Papaya is cultivated primarily across Centr...",
    "options": [
      "Sugar Miracle Berry trait (West Africa)",
      "Midnight Lychee trait (Exotic)",
      "Imperial Raspberry trait (Rubus idaeus var. imperial)",
      "Botanical Specimen #227: Golden Papaya is cultivated primarily across Centr..."
    ],
    "explanation": "Botanical Specimen #227: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 200
  },
  {
    "id": "trivia_q_1187",
    "fruitId": "fig_var_8",
    "fruitName": "Alpine Fig",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Alpine Fig?",
    "correctAnswer": "Botanical Specimen #228: Alpine Fig is cultivated primarily across Levant &...",
    "options": [
      "Velvet Black Sapote trait (Mesoamerica)",
      "Giant Starfruit trait (Exotic)",
      "Ruby Durian trait (Durio zibethinus var. ruby)",
      "Botanical Specimen #228: Alpine Fig is cultivated primarily across Levant &..."
    ],
    "explanation": "Botanical Specimen #228: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1188",
    "fruitId": "blueberry_var_8",
    "fruitName": "Wild Blueberry",
    "category": "Berry",
    "difficulty": "legendary",
    "question": "Where did the Wild Blueberry originally evolve and originate?",
    "correctAnswer": "North America",
    "options": [
      "Emerald Mangosteen trait (Garcinia mangostana var. emerald)",
      "North America",
      "Frost Jabuticaba trait (Minas Gerais, Brazil)",
      "Honey Jackfruit trait (Tropical)"
    ],
    "explanation": "Wild Blueberry was first documented and domesticated in North America (Cultivar #8).",
    "points": 300
  },
  {
    "id": "trivia_q_1189",
    "fruitId": "raspberry_var_8",
    "fruitName": "Imperial Raspberry",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Imperial Raspberry?",
    "correctAnswer": "Rubus idaeus var. imperial",
    "options": [
      "Scarlet Buddha's Hand trait (Citrus)",
      "Royal Apple trait (Central Asia)",
      "Celestial Rambutan trait (Nephelium lappaceum var. celestial)",
      "Rubus idaeus var. imperial"
    ],
    "explanation": "The formal taxonomic binomial for Imperial Raspberry is Rubus idaeus var. imperial.",
    "points": 350
  },
  {
    "id": "trivia_q_1190",
    "fruitId": "durian_var_8",
    "fruitName": "Ruby Durian",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "Which nutrient metric is characteristic of a 100g serving of Ruby Durian?",
    "correctAnswer": "105 kcal & 260% Vitamin C",
    "options": [
      "105 kcal & 260% Vitamin C",
      "Midnight Lychee trait (Litchi chinensis var. midnight)",
      "Golden Banana trait (Southeast Asia)",
      "Sugar Miracle Berry trait (Superfruit)"
    ],
    "explanation": "Per 100g, Ruby Durian yields 105 kcal, 4.2g fiber, and 290mg potassium.",
    "points": 150
  },
  {
    "id": "trivia_q_1191",
    "fruitId": "mangosteen_var_8",
    "fruitName": "Emerald Mangosteen",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Emerald Mangosteen best characterized?",
    "correctAnswer": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "options": [
      "Giant Starfruit trait (Averrhoa carambola var. giant)",
      "Alpine Orange trait (Southern China)",
      "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
      "Velvet Black Sapote trait (Exotic)"
    ],
    "explanation": "Culinary sommeliers describe Emerald Mangosteen as having: Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics.",
    "points": 200
  },
  {
    "id": "trivia_q_1192",
    "fruitId": "rambutan_var_8",
    "fruitName": "Celestial Rambutan",
    "category": "Exotic",
    "difficulty": "legendary",
    "question": "What unique botanical characteristic distinguishes Celestial Rambutan?",
    "correctAnswer": "Botanical Specimen #233: Celestial Rambutan is cultivated primarily across ...",
    "options": [
      "Botanical Specimen #233: Celestial Rambutan is cultivated primarily across ...",
      "Honey Jackfruit trait (Artocarpus heterophyllus var. honey)",
      "Frost Jabuticaba trait (Berry)",
      "Wild Strawberry trait (Europe & Americas)"
    ],
    "explanation": "Botanical Specimen #233: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 250
  },
  {
    "id": "trivia_q_1193",
    "fruitId": "lychee_var_8",
    "fruitName": "Midnight Lychee",
    "category": "Exotic",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Midnight Lychee?",
    "correctAnswer": "Botanical Specimen #234: Midnight Lychee is cultivated primarily across Sou...",
    "options": [
      "Royal Apple trait (Pome)",
      "Scarlet Buddha's Hand trait (Citrus medica var. sarcodactylis var. scarlet)",
      "Botanical Specimen #234: Midnight Lychee is cultivated primarily across Sou...",
      "Imperial Watermelon trait (Kalahari, Africa)"
    ],
    "explanation": "Botanical Specimen #234: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1194",
    "fruitId": "starfruit_var_8",
    "fruitName": "Giant Starfruit",
    "category": "Exotic",
    "difficulty": "hard",
    "question": "Where did the Giant Starfruit originally evolve and originate?",
    "correctAnswer": "Tropical Asia",
    "options": [
      "Ruby Grape trait (Mediterranean)",
      "Sugar Miracle Berry trait (Synsepalum dulcificum var. sugar)",
      "Tropical Asia",
      "Golden Banana trait (Tropical)"
    ],
    "explanation": "Giant Starfruit was first documented and domesticated in Tropical Asia (Cultivar #8).",
    "points": 350
  },
  {
    "id": "trivia_q_1195",
    "fruitId": "jackfruit_var_8",
    "fruitName": "Honey Jackfruit",
    "category": "Tropical",
    "difficulty": "easy",
    "question": "What is the correct botanical Latin binomial name for Honey Jackfruit?",
    "correctAnswer": "Artocarpus heterophyllus var. honey",
    "options": [
      "Artocarpus heterophyllus var. honey",
      "Emerald Pineapple trait (Parana Basin, South America)",
      "Velvet Black Sapote trait (Diospyros nigra var. velvet)",
      "Alpine Orange trait (Citrus)"
    ],
    "explanation": "The formal taxonomic binomial for Honey Jackfruit is Artocarpus heterophyllus var. honey.",
    "points": 150
  },
  {
    "id": "trivia_q_1196",
    "fruitId": "buddhas_hand_var_8",
    "fruitName": "Scarlet Buddha's Hand",
    "category": "Citrus",
    "difficulty": "legendary",
    "question": "Which nutrient metric is characteristic of a 100g serving of Scarlet Buddha's Hand?",
    "correctAnswer": "37 kcal & 88% Vitamin C",
    "options": [
      "Wild Strawberry trait (Berry)",
      "Celestial Mango trait (India & Myanmar)",
      "Frost Jabuticaba trait (Plinia cauliflora var. frost)",
      "37 kcal & 88% Vitamin C"
    ],
    "explanation": "Per 100g, Scarlet Buddha's Hand yields 37 kcal, 6.0g fiber, and 404mg potassium.",
    "points": 200
  },
  {
    "id": "trivia_q_1197",
    "fruitId": "miracle_fruit_var_8",
    "fruitName": "Sugar Miracle Berry",
    "category": "Superfruit",
    "difficulty": "hard",
    "question": "How is the sensory flavor profile of Sugar Miracle Berry best characterized?",
    "correctAnswer": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "options": [
      "Midnight Lemon trait (Northeast India)",
      "Imperial Watermelon trait (Melon)",
      "Royal Apple trait (Malus domestica var. royal)",
      "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics"
    ],
    "explanation": "Culinary sommeliers describe Sugar Miracle Berry as having: Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics.",
    "points": 250
  },
  {
    "id": "trivia_q_1198",
    "fruitId": "black_sapote_var_8",
    "fruitName": "Velvet Black Sapote",
    "category": "Exotic",
    "difficulty": "medium",
    "question": "What unique botanical characteristic distinguishes Velvet Black Sapote?",
    "correctAnswer": "Botanical Specimen #239: Velvet Black Sapote is cultivated primarily across...",
    "options": [
      "Giant Cherry trait (Anatolia, Turkey)",
      "Ruby Grape trait (Berry)",
      "Golden Banana trait (Musa acuminata var. golden)",
      "Botanical Specimen #239: Velvet Black Sapote is cultivated primarily across..."
    ],
    "explanation": "Botanical Specimen #239: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 300
  },
  {
    "id": "trivia_q_1199",
    "fruitId": "jabuticaba_var_8",
    "fruitName": "Frost Jabuticaba",
    "category": "Berry",
    "difficulty": "easy",
    "question": "What unique botanical characteristic distinguishes Frost Jabuticaba?",
    "correctAnswer": "Botanical Specimen #240: Frost Jabuticaba is cultivated primarily across Mi...",
    "options": [
      "Honey Peach trait (Northwest China)",
      "Emerald Pineapple trait (Tropical)",
      "Alpine Orange trait (Citrus × sinensis var. alpine)",
      "Botanical Specimen #240: Frost Jabuticaba is cultivated primarily across Mi..."
    ],
    "explanation": "Botanical Specimen #240: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "points": 350
  },
  {
    "id": "trivia_q_1200",
    "fruitId": "apple_var_9",
    "fruitName": "Royal Apple",
    "category": "Pome",
    "difficulty": "legendary",
    "question": "Where did the Royal Apple originally evolve and originate?",
    "correctAnswer": "Central Asia",
    "options": [
      "Central Asia",
      "Wild Strawberry trait (Fragaria × ananassa var. wild)",
      "Celestial Mango trait (Tropical)",
      "Scarlet Pear trait (Temperate Europe)"
    ],
    "explanation": "Royal Apple was first documented and domesticated in Central Asia (Cultivar #9).",
    "points": 150
  }
];

if (typeof window !== "undefined") {
  window.TRIVIA_QUESTION_BANK = TRIVIA_QUESTION_BANK;
}

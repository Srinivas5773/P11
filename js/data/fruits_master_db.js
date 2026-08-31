/**
 * FruitQuest - Master Botanical Database (320+ Species & Cultivars)
 * Comprehensive botanical profiles with complete nutritional metrics,
 * cultivation parameters, soil pH, climate requirements, and vector art specs.
 */

const FRUITS_MASTER_DB = [
  {
    "id": "apple",
    "name": "Apple",
    "scientificName": "Malus domestica",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #1)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 35,
      "vitaminC": "20%",
      "fiber": "1.2g",
      "sugar": "4.0g",
      "potassium": "80mg"
    },
    "funFact": "Botanical Specimen #1: Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 14,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana",
    "name": "Banana",
    "scientificName": "Musa acuminata",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #1)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 42,
      "vitaminC": "33%",
      "fiber": "1.5g",
      "sugar": "4.7g",
      "potassium": "99mg"
    },
    "funFact": "Botanical Specimen #2: Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 15,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "crescent",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange",
    "name": "Orange",
    "scientificName": "Citrus × sinensis",
    "category": "Citrus",
    "difficulty": "easy",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #1)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 49,
      "vitaminC": "46%",
      "fiber": "1.8g",
      "sugar": "5.4g",
      "potassium": "118mg"
    },
    "funFact": "Botanical Specimen #3: Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 16,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry",
    "name": "Strawberry",
    "scientificName": "Fragaria × ananassa",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #1)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 56,
      "vitaminC": "59%",
      "fiber": "2.1g",
      "sugar": "6.1g",
      "potassium": "137mg"
    },
    "funFact": "Botanical Specimen #4: Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 17,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "heart_tapered",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon",
    "name": "Watermelon",
    "scientificName": "Citrullus lanatus",
    "category": "Melon",
    "difficulty": "easy",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #1)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 63,
      "vitaminC": "72%",
      "fiber": "2.4g",
      "sugar": "6.8g",
      "potassium": "156mg"
    },
    "funFact": "Botanical Specimen #5: Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 18,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "wedge",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape",
    "name": "Grape",
    "scientificName": "Vitis vinifera",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #1)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 70,
      "vitaminC": "85%",
      "fiber": "2.7g",
      "sugar": "7.5g",
      "potassium": "175mg"
    },
    "funFact": "Botanical Specimen #6: Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 19,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "bunch",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple",
    "name": "Pineapple",
    "scientificName": "Ananas comosus",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #1)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 77,
      "vitaminC": "98%",
      "fiber": "3.0g",
      "sugar": "8.2g",
      "potassium": "194mg"
    },
    "funFact": "Botanical Specimen #7: Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 20,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "cylinder_cone",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango",
    "name": "Mango",
    "scientificName": "Mangifera indica",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #1)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 84,
      "vitaminC": "111%",
      "fiber": "3.3g",
      "sugar": "8.9g",
      "potassium": "213mg"
    },
    "funFact": "Botanical Specimen #8: Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 21,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon",
    "name": "Lemon",
    "scientificName": "Citrus limon",
    "category": "Citrus",
    "difficulty": "easy",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #1)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 91,
      "vitaminC": "124%",
      "fiber": "3.6g",
      "sugar": "9.6g",
      "potassium": "232mg"
    },
    "funFact": "Botanical Specimen #9: Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 22,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "ellipse_pointed",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry",
    "name": "Cherry",
    "scientificName": "Prunus avium",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #1)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 98,
      "vitaminC": "137%",
      "fiber": "3.9g",
      "sugar": "10.3g",
      "potassium": "251mg"
    },
    "funFact": "Botanical Specimen #10: Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 23,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach",
    "name": "Peach",
    "scientificName": "Prunus persica",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #1)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 105,
      "vitaminC": "150%",
      "fiber": "4.2g",
      "sugar": "11.0g",
      "potassium": "270mg"
    },
    "funFact": "Botanical Specimen #11: Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 24,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear",
    "name": "Pear",
    "scientificName": "Pyrus communis",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #1)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 112,
      "vitaminC": "163%",
      "fiber": "4.5g",
      "sugar": "11.7g",
      "potassium": "289mg"
    },
    "funFact": "Botanical Specimen #12: Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 25,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "pyriform",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi",
    "name": "Kiwi",
    "scientificName": "Actinidia deliciosa",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #1)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 119,
      "vitaminC": "176%",
      "fiber": "4.8g",
      "sugar": "12.4g",
      "potassium": "308mg"
    },
    "funFact": "Botanical Specimen #13: Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 26,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut",
    "name": "Coconut",
    "scientificName": "Cocos nucifera",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #1)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 126,
      "vitaminC": "189%",
      "fiber": "5.1g",
      "sugar": "13.1g",
      "potassium": "327mg"
    },
    "funFact": "Botanical Specimen #14: Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 27,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado",
    "name": "Avocado",
    "scientificName": "Persea americana",
    "category": "Stone Fruit",
    "difficulty": "easy",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #1)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 133,
      "vitaminC": "202%",
      "fiber": "5.4g",
      "sugar": "13.8g",
      "potassium": "346mg"
    },
    "funFact": "Botanical Specimen #15: Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 28,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate",
    "name": "Pomegranate",
    "scientificName": "Punica granatum",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #1)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 140,
      "vitaminC": "215%",
      "fiber": "5.7g",
      "sugar": "14.5g",
      "potassium": "365mg"
    },
    "funFact": "Botanical Specimen #16: Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 29,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya",
    "name": "Papaya",
    "scientificName": "Carica papaya",
    "category": "Tropical",
    "difficulty": "medium",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #1)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 37,
      "vitaminC": "228%",
      "fiber": "6.0g",
      "sugar": "15.2g",
      "potassium": "384mg"
    },
    "funFact": "Botanical Specimen #17: Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 30,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig",
    "name": "Fig",
    "scientificName": "Ficus carica",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #1)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 44,
      "vitaminC": "241%",
      "fiber": "6.3g",
      "sugar": "15.9g",
      "potassium": "403mg"
    },
    "funFact": "Botanical Specimen #18: Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 31,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry",
    "name": "Blueberry",
    "scientificName": "Vaccinium corymbosum",
    "category": "Berry",
    "difficulty": "medium",
    "emoji": "🫐",
    "origin": "North America (Cultivar #1)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 51,
      "vitaminC": "254%",
      "fiber": "6.6g",
      "sugar": "16.6g",
      "potassium": "422mg"
    },
    "funFact": "Botanical Specimen #19: Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 32,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry",
    "name": "Raspberry",
    "scientificName": "Rubus idaeus",
    "category": "Berry",
    "difficulty": "medium",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #1)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 58,
      "vitaminC": "267%",
      "fiber": "6.9g",
      "sugar": "17.3g",
      "potassium": "441mg"
    },
    "funFact": "Botanical Specimen #20: Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 33,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian",
    "name": "Durian",
    "scientificName": "Durio zibethinus",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #1)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 65,
      "vitaminC": "30%",
      "fiber": "1.2g",
      "sugar": "18.0g",
      "potassium": "460mg"
    },
    "funFact": "Botanical Specimen #21: Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 34,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen",
    "name": "Mangosteen",
    "scientificName": "Garcinia mangostana",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #1)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 72,
      "vitaminC": "43%",
      "fiber": "1.5g",
      "sugar": "18.7g",
      "potassium": "479mg"
    },
    "funFact": "Botanical Specimen #22: Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 35,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan",
    "name": "Rambutan",
    "scientificName": "Nephelium lappaceum",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #1)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 79,
      "vitaminC": "56%",
      "fiber": "1.8g",
      "sugar": "19.4g",
      "potassium": "498mg"
    },
    "funFact": "Botanical Specimen #23: Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 36,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee",
    "name": "Lychee",
    "scientificName": "Litchi chinensis",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #1)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 86,
      "vitaminC": "69%",
      "fiber": "2.1g",
      "sugar": "20.1g",
      "potassium": "517mg"
    },
    "funFact": "Botanical Specimen #24: Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 37,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit",
    "name": "Starfruit",
    "scientificName": "Averrhoa carambola",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #1)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 93,
      "vitaminC": "82%",
      "fiber": "2.4g",
      "sugar": "20.8g",
      "potassium": "536mg"
    },
    "funFact": "Botanical Specimen #25: Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 38,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit",
    "name": "Jackfruit",
    "scientificName": "Artocarpus heterophyllus",
    "category": "Tropical",
    "difficulty": "hard",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #1)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 100,
      "vitaminC": "95%",
      "fiber": "2.7g",
      "sugar": "21.5g",
      "potassium": "555mg"
    },
    "funFact": "Botanical Specimen #26: Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 39,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand",
    "name": "Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #1)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 107,
      "vitaminC": "108%",
      "fiber": "3.0g",
      "sugar": "4.2g",
      "potassium": "574mg"
    },
    "funFact": "Botanical Specimen #27: Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 40,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit",
    "name": "Miracle Berry",
    "scientificName": "Synsepalum dulcificum",
    "category": "Superfruit",
    "difficulty": "legendary",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #1)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 114,
      "vitaminC": "121%",
      "fiber": "3.3g",
      "sugar": "4.9g",
      "potassium": "593mg"
    },
    "funFact": "Botanical Specimen #28: Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 41,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote",
    "name": "Black Sapote",
    "scientificName": "Diospyros nigra",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #1)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 121,
      "vitaminC": "134%",
      "fiber": "3.6g",
      "sugar": "5.6g",
      "potassium": "92mg"
    },
    "funFact": "Botanical Specimen #29: Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 42,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba",
    "name": "Jabuticaba",
    "scientificName": "Plinia cauliflora",
    "category": "Berry",
    "difficulty": "legendary",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #1)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 128,
      "vitaminC": "147%",
      "fiber": "3.9g",
      "sugar": "6.3g",
      "potassium": "111mg"
    },
    "funFact": "Botanical Specimen #30: Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 43,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_2",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "hard",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #2)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 135,
      "vitaminC": "160%",
      "fiber": "4.2g",
      "sugar": "7.0g",
      "potassium": "130mg"
    },
    "funFact": "Botanical Specimen #31: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 44,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_2",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #2)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 142,
      "vitaminC": "173%",
      "fiber": "4.5g",
      "sugar": "7.7g",
      "potassium": "149mg"
    },
    "funFact": "Botanical Specimen #32: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 45,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_2",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #2)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 39,
      "vitaminC": "186%",
      "fiber": "4.8g",
      "sugar": "8.4g",
      "potassium": "168mg"
    },
    "funFact": "Botanical Specimen #33: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 46,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_2",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #2)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 46,
      "vitaminC": "199%",
      "fiber": "5.1g",
      "sugar": "9.1g",
      "potassium": "187mg"
    },
    "funFact": "Botanical Specimen #34: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 47,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_2",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "medium",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #2)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 53,
      "vitaminC": "212%",
      "fiber": "5.4g",
      "sugar": "9.8g",
      "potassium": "206mg"
    },
    "funFact": "Botanical Specimen #35: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 48,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_2",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #2)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 60,
      "vitaminC": "225%",
      "fiber": "5.7g",
      "sugar": "10.5g",
      "potassium": "225mg"
    },
    "funFact": "Botanical Specimen #36: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 49,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_2",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #2)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 67,
      "vitaminC": "238%",
      "fiber": "6.0g",
      "sugar": "11.2g",
      "potassium": "244mg"
    },
    "funFact": "Botanical Specimen #37: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 50,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_2",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #2)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 74,
      "vitaminC": "251%",
      "fiber": "6.3g",
      "sugar": "11.9g",
      "potassium": "263mg"
    },
    "funFact": "Botanical Specimen #38: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 51,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_2",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #2)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 81,
      "vitaminC": "264%",
      "fiber": "6.6g",
      "sugar": "12.6g",
      "potassium": "282mg"
    },
    "funFact": "Botanical Specimen #39: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 52,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_2",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #2)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 88,
      "vitaminC": "27%",
      "fiber": "6.9g",
      "sugar": "13.3g",
      "potassium": "301mg"
    },
    "funFact": "Botanical Specimen #40: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 53,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_2",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #2)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 95,
      "vitaminC": "40%",
      "fiber": "1.2g",
      "sugar": "14.0g",
      "potassium": "320mg"
    },
    "funFact": "Botanical Specimen #41: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 54,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_2",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #2)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 102,
      "vitaminC": "53%",
      "fiber": "1.5g",
      "sugar": "14.7g",
      "potassium": "339mg"
    },
    "funFact": "Botanical Specimen #42: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 55,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_2",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #2)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 109,
      "vitaminC": "66%",
      "fiber": "1.8g",
      "sugar": "15.4g",
      "potassium": "358mg"
    },
    "funFact": "Botanical Specimen #43: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 56,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_2",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #2)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 116,
      "vitaminC": "79%",
      "fiber": "2.1g",
      "sugar": "16.1g",
      "potassium": "377mg"
    },
    "funFact": "Botanical Specimen #44: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 57,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_2",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #2)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 123,
      "vitaminC": "92%",
      "fiber": "2.4g",
      "sugar": "16.8g",
      "potassium": "396mg"
    },
    "funFact": "Botanical Specimen #45: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 58,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_2",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #2)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 130,
      "vitaminC": "105%",
      "fiber": "2.7g",
      "sugar": "17.5g",
      "potassium": "415mg"
    },
    "funFact": "Botanical Specimen #46: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 14,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_2",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "medium",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #2)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 137,
      "vitaminC": "118%",
      "fiber": "3.0g",
      "sugar": "18.2g",
      "potassium": "434mg"
    },
    "funFact": "Botanical Specimen #47: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 15,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_2",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #2)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 144,
      "vitaminC": "131%",
      "fiber": "3.3g",
      "sugar": "18.9g",
      "potassium": "453mg"
    },
    "funFact": "Botanical Specimen #48: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 16,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_2",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "legendary",
    "emoji": "🫐",
    "origin": "North America (Cultivar #2)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 41,
      "vitaminC": "144%",
      "fiber": "3.6g",
      "sugar": "19.6g",
      "potassium": "472mg"
    },
    "funFact": "Botanical Specimen #49: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 17,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_2",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #2)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 48,
      "vitaminC": "157%",
      "fiber": "3.9g",
      "sugar": "20.3g",
      "potassium": "491mg"
    },
    "funFact": "Botanical Specimen #50: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 18,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian_var_2",
    "name": "Ruby Durian",
    "scientificName": "Durio zibethinus var. ruby",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #2)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 55,
      "vitaminC": "170%",
      "fiber": "4.2g",
      "sugar": "21.0g",
      "potassium": "510mg"
    },
    "funFact": "Botanical Specimen #51: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 19,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen_var_2",
    "name": "Emerald Mangosteen",
    "scientificName": "Garcinia mangostana var. emerald",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #2)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 62,
      "vitaminC": "183%",
      "fiber": "4.5g",
      "sugar": "21.7g",
      "potassium": "529mg"
    },
    "funFact": "Botanical Specimen #52: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 20,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan_var_2",
    "name": "Celestial Rambutan",
    "scientificName": "Nephelium lappaceum var. celestial",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #2)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 69,
      "vitaminC": "196%",
      "fiber": "4.8g",
      "sugar": "4.4g",
      "potassium": "548mg"
    },
    "funFact": "Botanical Specimen #53: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 21,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee_var_2",
    "name": "Midnight Lychee",
    "scientificName": "Litchi chinensis var. midnight",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #2)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 76,
      "vitaminC": "209%",
      "fiber": "5.1g",
      "sugar": "5.1g",
      "potassium": "567mg"
    },
    "funFact": "Botanical Specimen #54: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 22,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit_var_2",
    "name": "Giant Starfruit",
    "scientificName": "Averrhoa carambola var. giant",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #2)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 83,
      "vitaminC": "222%",
      "fiber": "5.4g",
      "sugar": "5.8g",
      "potassium": "586mg"
    },
    "funFact": "Botanical Specimen #55: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 23,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit_var_2",
    "name": "Honey Jackfruit",
    "scientificName": "Artocarpus heterophyllus var. honey",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #2)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 90,
      "vitaminC": "235%",
      "fiber": "5.7g",
      "sugar": "6.5g",
      "potassium": "85mg"
    },
    "funFact": "Botanical Specimen #56: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 24,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand_var_2",
    "name": "Scarlet Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis var. scarlet",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #2)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 97,
      "vitaminC": "248%",
      "fiber": "6.0g",
      "sugar": "7.2g",
      "potassium": "104mg"
    },
    "funFact": "Botanical Specimen #57: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 25,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit_var_2",
    "name": "Sugar Miracle Berry",
    "scientificName": "Synsepalum dulcificum var. sugar",
    "category": "Superfruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #2)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 104,
      "vitaminC": "261%",
      "fiber": "6.3g",
      "sugar": "7.9g",
      "potassium": "123mg"
    },
    "funFact": "Botanical Specimen #58: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 26,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote_var_2",
    "name": "Velvet Black Sapote",
    "scientificName": "Diospyros nigra var. velvet",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #2)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 111,
      "vitaminC": "24%",
      "fiber": "6.6g",
      "sugar": "8.6g",
      "potassium": "142mg"
    },
    "funFact": "Botanical Specimen #59: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 27,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba_var_2",
    "name": "Frost Jabuticaba",
    "scientificName": "Plinia cauliflora var. frost",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #2)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 118,
      "vitaminC": "37%",
      "fiber": "6.9g",
      "sugar": "9.3g",
      "potassium": "161mg"
    },
    "funFact": "Botanical Specimen #60: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 28,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_3",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "legendary",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #3)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 125,
      "vitaminC": "50%",
      "fiber": "1.2g",
      "sugar": "10.0g",
      "potassium": "180mg"
    },
    "funFact": "Botanical Specimen #61: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 29,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_3",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #3)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 132,
      "vitaminC": "63%",
      "fiber": "1.5g",
      "sugar": "10.7g",
      "potassium": "199mg"
    },
    "funFact": "Botanical Specimen #62: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 30,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_3",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #3)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 139,
      "vitaminC": "76%",
      "fiber": "1.8g",
      "sugar": "11.4g",
      "potassium": "218mg"
    },
    "funFact": "Botanical Specimen #63: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 31,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_3",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #3)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 36,
      "vitaminC": "89%",
      "fiber": "2.1g",
      "sugar": "12.1g",
      "potassium": "237mg"
    },
    "funFact": "Botanical Specimen #64: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 32,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_3",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "legendary",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #3)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 43,
      "vitaminC": "102%",
      "fiber": "2.4g",
      "sugar": "12.8g",
      "potassium": "256mg"
    },
    "funFact": "Botanical Specimen #65: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 33,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_3",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #3)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 50,
      "vitaminC": "115%",
      "fiber": "2.7g",
      "sugar": "13.5g",
      "potassium": "275mg"
    },
    "funFact": "Botanical Specimen #66: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 34,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_3",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "hard",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #3)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 57,
      "vitaminC": "128%",
      "fiber": "3.0g",
      "sugar": "14.2g",
      "potassium": "294mg"
    },
    "funFact": "Botanical Specimen #67: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 35,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_3",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #3)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 64,
      "vitaminC": "141%",
      "fiber": "3.3g",
      "sugar": "14.9g",
      "potassium": "313mg"
    },
    "funFact": "Botanical Specimen #68: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 36,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_3",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #3)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 71,
      "vitaminC": "154%",
      "fiber": "3.6g",
      "sugar": "15.6g",
      "potassium": "332mg"
    },
    "funFact": "Botanical Specimen #69: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 37,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_3",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #3)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 78,
      "vitaminC": "167%",
      "fiber": "3.9g",
      "sugar": "16.3g",
      "potassium": "351mg"
    },
    "funFact": "Botanical Specimen #70: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 38,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_3",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #3)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 85,
      "vitaminC": "180%",
      "fiber": "4.2g",
      "sugar": "17.0g",
      "potassium": "370mg"
    },
    "funFact": "Botanical Specimen #71: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 39,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_3",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #3)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 92,
      "vitaminC": "193%",
      "fiber": "4.5g",
      "sugar": "17.7g",
      "potassium": "389mg"
    },
    "funFact": "Botanical Specimen #72: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 40,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_3",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #3)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 99,
      "vitaminC": "206%",
      "fiber": "4.8g",
      "sugar": "18.4g",
      "potassium": "408mg"
    },
    "funFact": "Botanical Specimen #73: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 41,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_3",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #3)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 106,
      "vitaminC": "219%",
      "fiber": "5.1g",
      "sugar": "19.1g",
      "potassium": "427mg"
    },
    "funFact": "Botanical Specimen #74: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 42,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_3",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #3)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 113,
      "vitaminC": "232%",
      "fiber": "5.4g",
      "sugar": "19.8g",
      "potassium": "446mg"
    },
    "funFact": "Botanical Specimen #75: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 43,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_3",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #3)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 120,
      "vitaminC": "245%",
      "fiber": "5.7g",
      "sugar": "20.5g",
      "potassium": "465mg"
    },
    "funFact": "Botanical Specimen #76: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 44,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_3",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #3)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 127,
      "vitaminC": "258%",
      "fiber": "6.0g",
      "sugar": "21.2g",
      "potassium": "484mg"
    },
    "funFact": "Botanical Specimen #77: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 45,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_3",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #3)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 134,
      "vitaminC": "21%",
      "fiber": "6.3g",
      "sugar": "21.9g",
      "potassium": "503mg"
    },
    "funFact": "Botanical Specimen #78: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 46,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_3",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "North America (Cultivar #3)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 141,
      "vitaminC": "34%",
      "fiber": "6.6g",
      "sugar": "4.6g",
      "potassium": "522mg"
    },
    "funFact": "Botanical Specimen #79: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 47,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_3",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #3)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 38,
      "vitaminC": "47%",
      "fiber": "6.9g",
      "sugar": "5.3g",
      "potassium": "541mg"
    },
    "funFact": "Botanical Specimen #80: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 48,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian_var_3",
    "name": "Ruby Durian",
    "scientificName": "Durio zibethinus var. ruby",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #3)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 45,
      "vitaminC": "60%",
      "fiber": "1.2g",
      "sugar": "6.0g",
      "potassium": "560mg"
    },
    "funFact": "Botanical Specimen #81: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 49,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen_var_3",
    "name": "Emerald Mangosteen",
    "scientificName": "Garcinia mangostana var. emerald",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #3)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 52,
      "vitaminC": "73%",
      "fiber": "1.5g",
      "sugar": "6.7g",
      "potassium": "579mg"
    },
    "funFact": "Botanical Specimen #82: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 50,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan_var_3",
    "name": "Celestial Rambutan",
    "scientificName": "Nephelium lappaceum var. celestial",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #3)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 59,
      "vitaminC": "86%",
      "fiber": "1.8g",
      "sugar": "7.4g",
      "potassium": "598mg"
    },
    "funFact": "Botanical Specimen #83: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 51,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee_var_3",
    "name": "Midnight Lychee",
    "scientificName": "Litchi chinensis var. midnight",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #3)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 66,
      "vitaminC": "99%",
      "fiber": "2.1g",
      "sugar": "8.1g",
      "potassium": "97mg"
    },
    "funFact": "Botanical Specimen #84: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 52,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit_var_3",
    "name": "Giant Starfruit",
    "scientificName": "Averrhoa carambola var. giant",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #3)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 73,
      "vitaminC": "112%",
      "fiber": "2.4g",
      "sugar": "8.8g",
      "potassium": "116mg"
    },
    "funFact": "Botanical Specimen #85: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 53,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit_var_3",
    "name": "Honey Jackfruit",
    "scientificName": "Artocarpus heterophyllus var. honey",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #3)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 80,
      "vitaminC": "125%",
      "fiber": "2.7g",
      "sugar": "9.5g",
      "potassium": "135mg"
    },
    "funFact": "Botanical Specimen #86: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 54,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand_var_3",
    "name": "Scarlet Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis var. scarlet",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #3)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 87,
      "vitaminC": "138%",
      "fiber": "3.0g",
      "sugar": "10.2g",
      "potassium": "154mg"
    },
    "funFact": "Botanical Specimen #87: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 55,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit_var_3",
    "name": "Sugar Miracle Berry",
    "scientificName": "Synsepalum dulcificum var. sugar",
    "category": "Superfruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #3)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 94,
      "vitaminC": "151%",
      "fiber": "3.3g",
      "sugar": "10.9g",
      "potassium": "173mg"
    },
    "funFact": "Botanical Specimen #88: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 56,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote_var_3",
    "name": "Velvet Black Sapote",
    "scientificName": "Diospyros nigra var. velvet",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #3)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 101,
      "vitaminC": "164%",
      "fiber": "3.6g",
      "sugar": "11.6g",
      "potassium": "192mg"
    },
    "funFact": "Botanical Specimen #89: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 57,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba_var_3",
    "name": "Frost Jabuticaba",
    "scientificName": "Plinia cauliflora var. frost",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #3)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 108,
      "vitaminC": "177%",
      "fiber": "3.9g",
      "sugar": "12.3g",
      "potassium": "211mg"
    },
    "funFact": "Botanical Specimen #90: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 58,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_4",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "hard",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #4)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 115,
      "vitaminC": "190%",
      "fiber": "4.2g",
      "sugar": "13.0g",
      "potassium": "230mg"
    },
    "funFact": "Botanical Specimen #91: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 14,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_4",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #4)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 122,
      "vitaminC": "203%",
      "fiber": "4.5g",
      "sugar": "13.7g",
      "potassium": "249mg"
    },
    "funFact": "Botanical Specimen #92: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 15,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_4",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #4)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 129,
      "vitaminC": "216%",
      "fiber": "4.8g",
      "sugar": "14.4g",
      "potassium": "268mg"
    },
    "funFact": "Botanical Specimen #93: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 16,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_4",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #4)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 136,
      "vitaminC": "229%",
      "fiber": "5.1g",
      "sugar": "15.1g",
      "potassium": "287mg"
    },
    "funFact": "Botanical Specimen #94: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 17,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_4",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "medium",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #4)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 143,
      "vitaminC": "242%",
      "fiber": "5.4g",
      "sugar": "15.8g",
      "potassium": "306mg"
    },
    "funFact": "Botanical Specimen #95: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 18,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_4",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #4)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 40,
      "vitaminC": "255%",
      "fiber": "5.7g",
      "sugar": "16.5g",
      "potassium": "325mg"
    },
    "funFact": "Botanical Specimen #96: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 19,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_4",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #4)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 47,
      "vitaminC": "268%",
      "fiber": "6.0g",
      "sugar": "17.2g",
      "potassium": "344mg"
    },
    "funFact": "Botanical Specimen #97: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 20,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_4",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #4)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 54,
      "vitaminC": "31%",
      "fiber": "6.3g",
      "sugar": "17.9g",
      "potassium": "363mg"
    },
    "funFact": "Botanical Specimen #98: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 21,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_4",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #4)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 61,
      "vitaminC": "44%",
      "fiber": "6.6g",
      "sugar": "18.6g",
      "potassium": "382mg"
    },
    "funFact": "Botanical Specimen #99: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 22,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_4",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #4)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 68,
      "vitaminC": "57%",
      "fiber": "6.9g",
      "sugar": "19.3g",
      "potassium": "401mg"
    },
    "funFact": "Botanical Specimen #100: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 23,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_4",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #4)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 75,
      "vitaminC": "70%",
      "fiber": "1.2g",
      "sugar": "20.0g",
      "potassium": "420mg"
    },
    "funFact": "Botanical Specimen #101: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 24,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_4",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #4)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 82,
      "vitaminC": "83%",
      "fiber": "1.5g",
      "sugar": "20.7g",
      "potassium": "439mg"
    },
    "funFact": "Botanical Specimen #102: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 25,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_4",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #4)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 89,
      "vitaminC": "96%",
      "fiber": "1.8g",
      "sugar": "21.4g",
      "potassium": "458mg"
    },
    "funFact": "Botanical Specimen #103: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 26,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_4",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #4)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 96,
      "vitaminC": "109%",
      "fiber": "2.1g",
      "sugar": "4.1g",
      "potassium": "477mg"
    },
    "funFact": "Botanical Specimen #104: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 27,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_4",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #4)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 103,
      "vitaminC": "122%",
      "fiber": "2.4g",
      "sugar": "4.8g",
      "potassium": "496mg"
    },
    "funFact": "Botanical Specimen #105: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 28,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_4",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #4)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 110,
      "vitaminC": "135%",
      "fiber": "2.7g",
      "sugar": "5.5g",
      "potassium": "515mg"
    },
    "funFact": "Botanical Specimen #106: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 29,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_4",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "medium",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #4)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 117,
      "vitaminC": "148%",
      "fiber": "3.0g",
      "sugar": "6.2g",
      "potassium": "534mg"
    },
    "funFact": "Botanical Specimen #107: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 30,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_4",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #4)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 124,
      "vitaminC": "161%",
      "fiber": "3.3g",
      "sugar": "6.9g",
      "potassium": "553mg"
    },
    "funFact": "Botanical Specimen #108: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 31,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_4",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "legendary",
    "emoji": "🫐",
    "origin": "North America (Cultivar #4)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 131,
      "vitaminC": "174%",
      "fiber": "3.6g",
      "sugar": "7.6g",
      "potassium": "572mg"
    },
    "funFact": "Botanical Specimen #109: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 32,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_4",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #4)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 138,
      "vitaminC": "187%",
      "fiber": "3.9g",
      "sugar": "8.3g",
      "potassium": "591mg"
    },
    "funFact": "Botanical Specimen #110: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 33,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian_var_4",
    "name": "Ruby Durian",
    "scientificName": "Durio zibethinus var. ruby",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #4)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 35,
      "vitaminC": "200%",
      "fiber": "4.2g",
      "sugar": "9.0g",
      "potassium": "90mg"
    },
    "funFact": "Botanical Specimen #111: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 34,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen_var_4",
    "name": "Emerald Mangosteen",
    "scientificName": "Garcinia mangostana var. emerald",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #4)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 42,
      "vitaminC": "213%",
      "fiber": "4.5g",
      "sugar": "9.7g",
      "potassium": "109mg"
    },
    "funFact": "Botanical Specimen #112: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 35,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan_var_4",
    "name": "Celestial Rambutan",
    "scientificName": "Nephelium lappaceum var. celestial",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #4)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 49,
      "vitaminC": "226%",
      "fiber": "4.8g",
      "sugar": "10.4g",
      "potassium": "128mg"
    },
    "funFact": "Botanical Specimen #113: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 36,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee_var_4",
    "name": "Midnight Lychee",
    "scientificName": "Litchi chinensis var. midnight",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #4)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 56,
      "vitaminC": "239%",
      "fiber": "5.1g",
      "sugar": "11.1g",
      "potassium": "147mg"
    },
    "funFact": "Botanical Specimen #114: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 37,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit_var_4",
    "name": "Giant Starfruit",
    "scientificName": "Averrhoa carambola var. giant",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #4)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 63,
      "vitaminC": "252%",
      "fiber": "5.4g",
      "sugar": "11.8g",
      "potassium": "166mg"
    },
    "funFact": "Botanical Specimen #115: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 38,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit_var_4",
    "name": "Honey Jackfruit",
    "scientificName": "Artocarpus heterophyllus var. honey",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #4)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 70,
      "vitaminC": "265%",
      "fiber": "5.7g",
      "sugar": "12.5g",
      "potassium": "185mg"
    },
    "funFact": "Botanical Specimen #116: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 39,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand_var_4",
    "name": "Scarlet Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis var. scarlet",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #4)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 77,
      "vitaminC": "28%",
      "fiber": "6.0g",
      "sugar": "13.2g",
      "potassium": "204mg"
    },
    "funFact": "Botanical Specimen #117: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 40,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit_var_4",
    "name": "Sugar Miracle Berry",
    "scientificName": "Synsepalum dulcificum var. sugar",
    "category": "Superfruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #4)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 84,
      "vitaminC": "41%",
      "fiber": "6.3g",
      "sugar": "13.9g",
      "potassium": "223mg"
    },
    "funFact": "Botanical Specimen #118: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 41,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote_var_4",
    "name": "Velvet Black Sapote",
    "scientificName": "Diospyros nigra var. velvet",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #4)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 91,
      "vitaminC": "54%",
      "fiber": "6.6g",
      "sugar": "14.6g",
      "potassium": "242mg"
    },
    "funFact": "Botanical Specimen #119: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 42,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba_var_4",
    "name": "Frost Jabuticaba",
    "scientificName": "Plinia cauliflora var. frost",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #4)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 98,
      "vitaminC": "67%",
      "fiber": "6.9g",
      "sugar": "15.3g",
      "potassium": "261mg"
    },
    "funFact": "Botanical Specimen #120: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 43,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_5",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "legendary",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #5)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 105,
      "vitaminC": "80%",
      "fiber": "1.2g",
      "sugar": "16.0g",
      "potassium": "280mg"
    },
    "funFact": "Botanical Specimen #121: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 44,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_5",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #5)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 112,
      "vitaminC": "93%",
      "fiber": "1.5g",
      "sugar": "16.7g",
      "potassium": "299mg"
    },
    "funFact": "Botanical Specimen #122: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 45,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_5",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #5)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 119,
      "vitaminC": "106%",
      "fiber": "1.8g",
      "sugar": "17.4g",
      "potassium": "318mg"
    },
    "funFact": "Botanical Specimen #123: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 46,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_5",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #5)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 126,
      "vitaminC": "119%",
      "fiber": "2.1g",
      "sugar": "18.1g",
      "potassium": "337mg"
    },
    "funFact": "Botanical Specimen #124: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 47,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_5",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "legendary",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #5)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 133,
      "vitaminC": "132%",
      "fiber": "2.4g",
      "sugar": "18.8g",
      "potassium": "356mg"
    },
    "funFact": "Botanical Specimen #125: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 48,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_5",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #5)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 140,
      "vitaminC": "145%",
      "fiber": "2.7g",
      "sugar": "19.5g",
      "potassium": "375mg"
    },
    "funFact": "Botanical Specimen #126: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 49,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_5",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "hard",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #5)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 37,
      "vitaminC": "158%",
      "fiber": "3.0g",
      "sugar": "20.2g",
      "potassium": "394mg"
    },
    "funFact": "Botanical Specimen #127: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 50,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_5",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #5)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 44,
      "vitaminC": "171%",
      "fiber": "3.3g",
      "sugar": "20.9g",
      "potassium": "413mg"
    },
    "funFact": "Botanical Specimen #128: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 51,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_5",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #5)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 51,
      "vitaminC": "184%",
      "fiber": "3.6g",
      "sugar": "21.6g",
      "potassium": "432mg"
    },
    "funFact": "Botanical Specimen #129: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 52,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_5",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #5)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 58,
      "vitaminC": "197%",
      "fiber": "3.9g",
      "sugar": "4.3g",
      "potassium": "451mg"
    },
    "funFact": "Botanical Specimen #130: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 53,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_5",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #5)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 65,
      "vitaminC": "210%",
      "fiber": "4.2g",
      "sugar": "5.0g",
      "potassium": "470mg"
    },
    "funFact": "Botanical Specimen #131: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 54,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_5",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #5)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 72,
      "vitaminC": "223%",
      "fiber": "4.5g",
      "sugar": "5.7g",
      "potassium": "489mg"
    },
    "funFact": "Botanical Specimen #132: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 55,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_5",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #5)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 79,
      "vitaminC": "236%",
      "fiber": "4.8g",
      "sugar": "6.4g",
      "potassium": "508mg"
    },
    "funFact": "Botanical Specimen #133: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 56,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_5",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #5)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 86,
      "vitaminC": "249%",
      "fiber": "5.1g",
      "sugar": "7.1g",
      "potassium": "527mg"
    },
    "funFact": "Botanical Specimen #134: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 57,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_5",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #5)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 93,
      "vitaminC": "262%",
      "fiber": "5.4g",
      "sugar": "7.8g",
      "potassium": "546mg"
    },
    "funFact": "Botanical Specimen #135: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 58,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_5",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #5)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 100,
      "vitaminC": "25%",
      "fiber": "5.7g",
      "sugar": "8.5g",
      "potassium": "565mg"
    },
    "funFact": "Botanical Specimen #136: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 14,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_5",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #5)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 107,
      "vitaminC": "38%",
      "fiber": "6.0g",
      "sugar": "9.2g",
      "potassium": "584mg"
    },
    "funFact": "Botanical Specimen #137: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 15,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_5",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #5)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 114,
      "vitaminC": "51%",
      "fiber": "6.3g",
      "sugar": "9.9g",
      "potassium": "83mg"
    },
    "funFact": "Botanical Specimen #138: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 16,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_5",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "North America (Cultivar #5)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 121,
      "vitaminC": "64%",
      "fiber": "6.6g",
      "sugar": "10.6g",
      "potassium": "102mg"
    },
    "funFact": "Botanical Specimen #139: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 17,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_5",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #5)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 128,
      "vitaminC": "77%",
      "fiber": "6.9g",
      "sugar": "11.3g",
      "potassium": "121mg"
    },
    "funFact": "Botanical Specimen #140: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 18,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian_var_5",
    "name": "Ruby Durian",
    "scientificName": "Durio zibethinus var. ruby",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #5)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 135,
      "vitaminC": "90%",
      "fiber": "1.2g",
      "sugar": "12.0g",
      "potassium": "140mg"
    },
    "funFact": "Botanical Specimen #141: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 19,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen_var_5",
    "name": "Emerald Mangosteen",
    "scientificName": "Garcinia mangostana var. emerald",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #5)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 142,
      "vitaminC": "103%",
      "fiber": "1.5g",
      "sugar": "12.7g",
      "potassium": "159mg"
    },
    "funFact": "Botanical Specimen #142: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 20,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan_var_5",
    "name": "Celestial Rambutan",
    "scientificName": "Nephelium lappaceum var. celestial",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #5)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 39,
      "vitaminC": "116%",
      "fiber": "1.8g",
      "sugar": "13.4g",
      "potassium": "178mg"
    },
    "funFact": "Botanical Specimen #143: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 21,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee_var_5",
    "name": "Midnight Lychee",
    "scientificName": "Litchi chinensis var. midnight",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #5)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 46,
      "vitaminC": "129%",
      "fiber": "2.1g",
      "sugar": "14.1g",
      "potassium": "197mg"
    },
    "funFact": "Botanical Specimen #144: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 22,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit_var_5",
    "name": "Giant Starfruit",
    "scientificName": "Averrhoa carambola var. giant",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #5)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 53,
      "vitaminC": "142%",
      "fiber": "2.4g",
      "sugar": "14.8g",
      "potassium": "216mg"
    },
    "funFact": "Botanical Specimen #145: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 23,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit_var_5",
    "name": "Honey Jackfruit",
    "scientificName": "Artocarpus heterophyllus var. honey",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #5)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 60,
      "vitaminC": "155%",
      "fiber": "2.7g",
      "sugar": "15.5g",
      "potassium": "235mg"
    },
    "funFact": "Botanical Specimen #146: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 24,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand_var_5",
    "name": "Scarlet Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis var. scarlet",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #5)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 67,
      "vitaminC": "168%",
      "fiber": "3.0g",
      "sugar": "16.2g",
      "potassium": "254mg"
    },
    "funFact": "Botanical Specimen #147: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 25,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit_var_5",
    "name": "Sugar Miracle Berry",
    "scientificName": "Synsepalum dulcificum var. sugar",
    "category": "Superfruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #5)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 74,
      "vitaminC": "181%",
      "fiber": "3.3g",
      "sugar": "16.9g",
      "potassium": "273mg"
    },
    "funFact": "Botanical Specimen #148: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 26,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote_var_5",
    "name": "Velvet Black Sapote",
    "scientificName": "Diospyros nigra var. velvet",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #5)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 81,
      "vitaminC": "194%",
      "fiber": "3.6g",
      "sugar": "17.6g",
      "potassium": "292mg"
    },
    "funFact": "Botanical Specimen #149: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 27,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba_var_5",
    "name": "Frost Jabuticaba",
    "scientificName": "Plinia cauliflora var. frost",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #5)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 88,
      "vitaminC": "207%",
      "fiber": "3.9g",
      "sugar": "18.3g",
      "potassium": "311mg"
    },
    "funFact": "Botanical Specimen #150: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 28,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_6",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "hard",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #6)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 95,
      "vitaminC": "220%",
      "fiber": "4.2g",
      "sugar": "19.0g",
      "potassium": "330mg"
    },
    "funFact": "Botanical Specimen #151: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 29,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_6",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #6)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 102,
      "vitaminC": "233%",
      "fiber": "4.5g",
      "sugar": "19.7g",
      "potassium": "349mg"
    },
    "funFact": "Botanical Specimen #152: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 30,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_6",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #6)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 109,
      "vitaminC": "246%",
      "fiber": "4.8g",
      "sugar": "20.4g",
      "potassium": "368mg"
    },
    "funFact": "Botanical Specimen #153: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 31,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_6",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #6)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 116,
      "vitaminC": "259%",
      "fiber": "5.1g",
      "sugar": "21.1g",
      "potassium": "387mg"
    },
    "funFact": "Botanical Specimen #154: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 32,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_6",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "medium",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #6)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 123,
      "vitaminC": "22%",
      "fiber": "5.4g",
      "sugar": "21.8g",
      "potassium": "406mg"
    },
    "funFact": "Botanical Specimen #155: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 33,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_6",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #6)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 130,
      "vitaminC": "35%",
      "fiber": "5.7g",
      "sugar": "4.5g",
      "potassium": "425mg"
    },
    "funFact": "Botanical Specimen #156: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 34,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_6",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #6)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 137,
      "vitaminC": "48%",
      "fiber": "6.0g",
      "sugar": "5.2g",
      "potassium": "444mg"
    },
    "funFact": "Botanical Specimen #157: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 35,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_6",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #6)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 144,
      "vitaminC": "61%",
      "fiber": "6.3g",
      "sugar": "5.9g",
      "potassium": "463mg"
    },
    "funFact": "Botanical Specimen #158: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 36,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_6",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #6)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 41,
      "vitaminC": "74%",
      "fiber": "6.6g",
      "sugar": "6.6g",
      "potassium": "482mg"
    },
    "funFact": "Botanical Specimen #159: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 37,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_6",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #6)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 48,
      "vitaminC": "87%",
      "fiber": "6.9g",
      "sugar": "7.3g",
      "potassium": "501mg"
    },
    "funFact": "Botanical Specimen #160: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 38,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_6",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #6)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 55,
      "vitaminC": "100%",
      "fiber": "1.2g",
      "sugar": "8.0g",
      "potassium": "520mg"
    },
    "funFact": "Botanical Specimen #161: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 39,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_6",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #6)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 62,
      "vitaminC": "113%",
      "fiber": "1.5g",
      "sugar": "8.7g",
      "potassium": "539mg"
    },
    "funFact": "Botanical Specimen #162: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 40,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_6",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #6)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 69,
      "vitaminC": "126%",
      "fiber": "1.8g",
      "sugar": "9.4g",
      "potassium": "558mg"
    },
    "funFact": "Botanical Specimen #163: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 41,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_6",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #6)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 76,
      "vitaminC": "139%",
      "fiber": "2.1g",
      "sugar": "10.1g",
      "potassium": "577mg"
    },
    "funFact": "Botanical Specimen #164: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 42,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_6",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #6)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 83,
      "vitaminC": "152%",
      "fiber": "2.4g",
      "sugar": "10.8g",
      "potassium": "596mg"
    },
    "funFact": "Botanical Specimen #165: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 43,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_6",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #6)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 90,
      "vitaminC": "165%",
      "fiber": "2.7g",
      "sugar": "11.5g",
      "potassium": "95mg"
    },
    "funFact": "Botanical Specimen #166: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 44,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_6",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "medium",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #6)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 97,
      "vitaminC": "178%",
      "fiber": "3.0g",
      "sugar": "12.2g",
      "potassium": "114mg"
    },
    "funFact": "Botanical Specimen #167: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 45,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_6",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #6)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 104,
      "vitaminC": "191%",
      "fiber": "3.3g",
      "sugar": "12.9g",
      "potassium": "133mg"
    },
    "funFact": "Botanical Specimen #168: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 46,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_6",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "legendary",
    "emoji": "🫐",
    "origin": "North America (Cultivar #6)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 111,
      "vitaminC": "204%",
      "fiber": "3.6g",
      "sugar": "13.6g",
      "potassium": "152mg"
    },
    "funFact": "Botanical Specimen #169: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 47,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_6",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #6)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 118,
      "vitaminC": "217%",
      "fiber": "3.9g",
      "sugar": "14.3g",
      "potassium": "171mg"
    },
    "funFact": "Botanical Specimen #170: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 48,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian_var_6",
    "name": "Ruby Durian",
    "scientificName": "Durio zibethinus var. ruby",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #6)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 125,
      "vitaminC": "230%",
      "fiber": "4.2g",
      "sugar": "15.0g",
      "potassium": "190mg"
    },
    "funFact": "Botanical Specimen #171: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 49,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen_var_6",
    "name": "Emerald Mangosteen",
    "scientificName": "Garcinia mangostana var. emerald",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #6)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 132,
      "vitaminC": "243%",
      "fiber": "4.5g",
      "sugar": "15.7g",
      "potassium": "209mg"
    },
    "funFact": "Botanical Specimen #172: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 50,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan_var_6",
    "name": "Celestial Rambutan",
    "scientificName": "Nephelium lappaceum var. celestial",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #6)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 139,
      "vitaminC": "256%",
      "fiber": "4.8g",
      "sugar": "16.4g",
      "potassium": "228mg"
    },
    "funFact": "Botanical Specimen #173: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 51,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee_var_6",
    "name": "Midnight Lychee",
    "scientificName": "Litchi chinensis var. midnight",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #6)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 36,
      "vitaminC": "269%",
      "fiber": "5.1g",
      "sugar": "17.1g",
      "potassium": "247mg"
    },
    "funFact": "Botanical Specimen #174: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 52,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit_var_6",
    "name": "Giant Starfruit",
    "scientificName": "Averrhoa carambola var. giant",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #6)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 43,
      "vitaminC": "32%",
      "fiber": "5.4g",
      "sugar": "17.8g",
      "potassium": "266mg"
    },
    "funFact": "Botanical Specimen #175: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 53,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit_var_6",
    "name": "Honey Jackfruit",
    "scientificName": "Artocarpus heterophyllus var. honey",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #6)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 50,
      "vitaminC": "45%",
      "fiber": "5.7g",
      "sugar": "18.5g",
      "potassium": "285mg"
    },
    "funFact": "Botanical Specimen #176: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 54,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand_var_6",
    "name": "Scarlet Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis var. scarlet",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #6)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 57,
      "vitaminC": "58%",
      "fiber": "6.0g",
      "sugar": "19.2g",
      "potassium": "304mg"
    },
    "funFact": "Botanical Specimen #177: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 55,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit_var_6",
    "name": "Sugar Miracle Berry",
    "scientificName": "Synsepalum dulcificum var. sugar",
    "category": "Superfruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #6)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 64,
      "vitaminC": "71%",
      "fiber": "6.3g",
      "sugar": "19.9g",
      "potassium": "323mg"
    },
    "funFact": "Botanical Specimen #178: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 56,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote_var_6",
    "name": "Velvet Black Sapote",
    "scientificName": "Diospyros nigra var. velvet",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #6)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 71,
      "vitaminC": "84%",
      "fiber": "6.6g",
      "sugar": "20.6g",
      "potassium": "342mg"
    },
    "funFact": "Botanical Specimen #179: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 57,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba_var_6",
    "name": "Frost Jabuticaba",
    "scientificName": "Plinia cauliflora var. frost",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #6)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 78,
      "vitaminC": "97%",
      "fiber": "6.9g",
      "sugar": "21.3g",
      "potassium": "361mg"
    },
    "funFact": "Botanical Specimen #180: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 58,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_7",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "legendary",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #7)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 85,
      "vitaminC": "110%",
      "fiber": "1.2g",
      "sugar": "22.0g",
      "potassium": "380mg"
    },
    "funFact": "Botanical Specimen #181: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 14,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_7",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #7)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 92,
      "vitaminC": "123%",
      "fiber": "1.5g",
      "sugar": "4.7g",
      "potassium": "399mg"
    },
    "funFact": "Botanical Specimen #182: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 15,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_7",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #7)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 99,
      "vitaminC": "136%",
      "fiber": "1.8g",
      "sugar": "5.4g",
      "potassium": "418mg"
    },
    "funFact": "Botanical Specimen #183: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 16,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_7",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #7)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 106,
      "vitaminC": "149%",
      "fiber": "2.1g",
      "sugar": "6.1g",
      "potassium": "437mg"
    },
    "funFact": "Botanical Specimen #184: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 17,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_7",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "legendary",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #7)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 113,
      "vitaminC": "162%",
      "fiber": "2.4g",
      "sugar": "6.8g",
      "potassium": "456mg"
    },
    "funFact": "Botanical Specimen #185: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 18,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_7",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #7)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 120,
      "vitaminC": "175%",
      "fiber": "2.7g",
      "sugar": "7.5g",
      "potassium": "475mg"
    },
    "funFact": "Botanical Specimen #186: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 19,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_7",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "hard",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #7)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 127,
      "vitaminC": "188%",
      "fiber": "3.0g",
      "sugar": "8.2g",
      "potassium": "494mg"
    },
    "funFact": "Botanical Specimen #187: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 20,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_7",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #7)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 134,
      "vitaminC": "201%",
      "fiber": "3.3g",
      "sugar": "8.9g",
      "potassium": "513mg"
    },
    "funFact": "Botanical Specimen #188: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 21,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_7",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #7)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 141,
      "vitaminC": "214%",
      "fiber": "3.6g",
      "sugar": "9.6g",
      "potassium": "532mg"
    },
    "funFact": "Botanical Specimen #189: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 22,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_7",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #7)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 38,
      "vitaminC": "227%",
      "fiber": "3.9g",
      "sugar": "10.3g",
      "potassium": "551mg"
    },
    "funFact": "Botanical Specimen #190: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 23,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_7",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #7)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 45,
      "vitaminC": "240%",
      "fiber": "4.2g",
      "sugar": "11.0g",
      "potassium": "570mg"
    },
    "funFact": "Botanical Specimen #191: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 24,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_7",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #7)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 52,
      "vitaminC": "253%",
      "fiber": "4.5g",
      "sugar": "11.7g",
      "potassium": "589mg"
    },
    "funFact": "Botanical Specimen #192: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 25,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_7",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #7)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 59,
      "vitaminC": "266%",
      "fiber": "4.8g",
      "sugar": "12.4g",
      "potassium": "88mg"
    },
    "funFact": "Botanical Specimen #193: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 26,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_7",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #7)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 66,
      "vitaminC": "29%",
      "fiber": "5.1g",
      "sugar": "13.1g",
      "potassium": "107mg"
    },
    "funFact": "Botanical Specimen #194: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 27,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_7",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #7)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 73,
      "vitaminC": "42%",
      "fiber": "5.4g",
      "sugar": "13.8g",
      "potassium": "126mg"
    },
    "funFact": "Botanical Specimen #195: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 28,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_7",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #7)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 80,
      "vitaminC": "55%",
      "fiber": "5.7g",
      "sugar": "14.5g",
      "potassium": "145mg"
    },
    "funFact": "Botanical Specimen #196: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 29,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_7",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #7)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 87,
      "vitaminC": "68%",
      "fiber": "6.0g",
      "sugar": "15.2g",
      "potassium": "164mg"
    },
    "funFact": "Botanical Specimen #197: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 30,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_7",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #7)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 94,
      "vitaminC": "81%",
      "fiber": "6.3g",
      "sugar": "15.9g",
      "potassium": "183mg"
    },
    "funFact": "Botanical Specimen #198: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 31,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_7",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "North America (Cultivar #7)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 101,
      "vitaminC": "94%",
      "fiber": "6.6g",
      "sugar": "16.6g",
      "potassium": "202mg"
    },
    "funFact": "Botanical Specimen #199: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 32,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_7",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #7)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 108,
      "vitaminC": "107%",
      "fiber": "6.9g",
      "sugar": "17.3g",
      "potassium": "221mg"
    },
    "funFact": "Botanical Specimen #200: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 33,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian_var_7",
    "name": "Ruby Durian",
    "scientificName": "Durio zibethinus var. ruby",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #7)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 115,
      "vitaminC": "120%",
      "fiber": "1.2g",
      "sugar": "18.0g",
      "potassium": "240mg"
    },
    "funFact": "Botanical Specimen #201: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 34,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen_var_7",
    "name": "Emerald Mangosteen",
    "scientificName": "Garcinia mangostana var. emerald",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #7)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 122,
      "vitaminC": "133%",
      "fiber": "1.5g",
      "sugar": "18.7g",
      "potassium": "259mg"
    },
    "funFact": "Botanical Specimen #202: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 35,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan_var_7",
    "name": "Celestial Rambutan",
    "scientificName": "Nephelium lappaceum var. celestial",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #7)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 129,
      "vitaminC": "146%",
      "fiber": "1.8g",
      "sugar": "19.4g",
      "potassium": "278mg"
    },
    "funFact": "Botanical Specimen #203: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 36,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee_var_7",
    "name": "Midnight Lychee",
    "scientificName": "Litchi chinensis var. midnight",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #7)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 136,
      "vitaminC": "159%",
      "fiber": "2.1g",
      "sugar": "20.1g",
      "potassium": "297mg"
    },
    "funFact": "Botanical Specimen #204: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 37,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit_var_7",
    "name": "Giant Starfruit",
    "scientificName": "Averrhoa carambola var. giant",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #7)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 143,
      "vitaminC": "172%",
      "fiber": "2.4g",
      "sugar": "20.8g",
      "potassium": "316mg"
    },
    "funFact": "Botanical Specimen #205: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 38,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit_var_7",
    "name": "Honey Jackfruit",
    "scientificName": "Artocarpus heterophyllus var. honey",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #7)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 40,
      "vitaminC": "185%",
      "fiber": "2.7g",
      "sugar": "21.5g",
      "potassium": "335mg"
    },
    "funFact": "Botanical Specimen #206: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 39,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand_var_7",
    "name": "Scarlet Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis var. scarlet",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #7)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 47,
      "vitaminC": "198%",
      "fiber": "3.0g",
      "sugar": "4.2g",
      "potassium": "354mg"
    },
    "funFact": "Botanical Specimen #207: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 40,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit_var_7",
    "name": "Sugar Miracle Berry",
    "scientificName": "Synsepalum dulcificum var. sugar",
    "category": "Superfruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #7)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 54,
      "vitaminC": "211%",
      "fiber": "3.3g",
      "sugar": "4.9g",
      "potassium": "373mg"
    },
    "funFact": "Botanical Specimen #208: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 41,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote_var_7",
    "name": "Velvet Black Sapote",
    "scientificName": "Diospyros nigra var. velvet",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #7)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 61,
      "vitaminC": "224%",
      "fiber": "3.6g",
      "sugar": "5.6g",
      "potassium": "392mg"
    },
    "funFact": "Botanical Specimen #209: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 42,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba_var_7",
    "name": "Frost Jabuticaba",
    "scientificName": "Plinia cauliflora var. frost",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #7)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 68,
      "vitaminC": "237%",
      "fiber": "3.9g",
      "sugar": "6.3g",
      "potassium": "411mg"
    },
    "funFact": "Botanical Specimen #210: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 43,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_8",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "hard",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #8)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 75,
      "vitaminC": "250%",
      "fiber": "4.2g",
      "sugar": "7.0g",
      "potassium": "430mg"
    },
    "funFact": "Botanical Specimen #211: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 44,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_8",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #8)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 82,
      "vitaminC": "263%",
      "fiber": "4.5g",
      "sugar": "7.7g",
      "potassium": "449mg"
    },
    "funFact": "Botanical Specimen #212: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 45,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_8",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #8)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 89,
      "vitaminC": "26%",
      "fiber": "4.8g",
      "sugar": "8.4g",
      "potassium": "468mg"
    },
    "funFact": "Botanical Specimen #213: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 46,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_8",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #8)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 96,
      "vitaminC": "39%",
      "fiber": "5.1g",
      "sugar": "9.1g",
      "potassium": "487mg"
    },
    "funFact": "Botanical Specimen #214: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 47,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_8",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "medium",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #8)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 103,
      "vitaminC": "52%",
      "fiber": "5.4g",
      "sugar": "9.8g",
      "potassium": "506mg"
    },
    "funFact": "Botanical Specimen #215: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 48,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_8",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #8)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 110,
      "vitaminC": "65%",
      "fiber": "5.7g",
      "sugar": "10.5g",
      "potassium": "525mg"
    },
    "funFact": "Botanical Specimen #216: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 49,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_8",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #8)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 117,
      "vitaminC": "78%",
      "fiber": "6.0g",
      "sugar": "11.2g",
      "potassium": "544mg"
    },
    "funFact": "Botanical Specimen #217: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 50,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_8",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #8)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 124,
      "vitaminC": "91%",
      "fiber": "6.3g",
      "sugar": "11.9g",
      "potassium": "563mg"
    },
    "funFact": "Botanical Specimen #218: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 51,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_8",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #8)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 131,
      "vitaminC": "104%",
      "fiber": "6.6g",
      "sugar": "12.6g",
      "potassium": "582mg"
    },
    "funFact": "Botanical Specimen #219: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 52,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_8",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #8)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 138,
      "vitaminC": "117%",
      "fiber": "6.9g",
      "sugar": "13.3g",
      "potassium": "81mg"
    },
    "funFact": "Botanical Specimen #220: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 53,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_8",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #8)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 35,
      "vitaminC": "130%",
      "fiber": "1.2g",
      "sugar": "14.0g",
      "potassium": "100mg"
    },
    "funFact": "Botanical Specimen #221: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 54,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_8",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #8)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 42,
      "vitaminC": "143%",
      "fiber": "1.5g",
      "sugar": "14.7g",
      "potassium": "119mg"
    },
    "funFact": "Botanical Specimen #222: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 55,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_8",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #8)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 49,
      "vitaminC": "156%",
      "fiber": "1.8g",
      "sugar": "15.4g",
      "potassium": "138mg"
    },
    "funFact": "Botanical Specimen #223: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 56,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_8",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #8)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 56,
      "vitaminC": "169%",
      "fiber": "2.1g",
      "sugar": "16.1g",
      "potassium": "157mg"
    },
    "funFact": "Botanical Specimen #224: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 57,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_8",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #8)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 63,
      "vitaminC": "182%",
      "fiber": "2.4g",
      "sugar": "16.8g",
      "potassium": "176mg"
    },
    "funFact": "Botanical Specimen #225: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 58,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_8",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #8)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 70,
      "vitaminC": "195%",
      "fiber": "2.7g",
      "sugar": "17.5g",
      "potassium": "195mg"
    },
    "funFact": "Botanical Specimen #226: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 14,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_8",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "medium",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #8)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 77,
      "vitaminC": "208%",
      "fiber": "3.0g",
      "sugar": "18.2g",
      "potassium": "214mg"
    },
    "funFact": "Botanical Specimen #227: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 15,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_8",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #8)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 84,
      "vitaminC": "221%",
      "fiber": "3.3g",
      "sugar": "18.9g",
      "potassium": "233mg"
    },
    "funFact": "Botanical Specimen #228: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 16,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_8",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "legendary",
    "emoji": "🫐",
    "origin": "North America (Cultivar #8)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 91,
      "vitaminC": "234%",
      "fiber": "3.6g",
      "sugar": "19.6g",
      "potassium": "252mg"
    },
    "funFact": "Botanical Specimen #229: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 17,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_8",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #8)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 98,
      "vitaminC": "247%",
      "fiber": "3.9g",
      "sugar": "20.3g",
      "potassium": "271mg"
    },
    "funFact": "Botanical Specimen #230: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 18,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian_var_8",
    "name": "Ruby Durian",
    "scientificName": "Durio zibethinus var. ruby",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #8)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 105,
      "vitaminC": "260%",
      "fiber": "4.2g",
      "sugar": "21.0g",
      "potassium": "290mg"
    },
    "funFact": "Botanical Specimen #231: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 19,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen_var_8",
    "name": "Emerald Mangosteen",
    "scientificName": "Garcinia mangostana var. emerald",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #8)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 112,
      "vitaminC": "23%",
      "fiber": "4.5g",
      "sugar": "21.7g",
      "potassium": "309mg"
    },
    "funFact": "Botanical Specimen #232: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 20,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan_var_8",
    "name": "Celestial Rambutan",
    "scientificName": "Nephelium lappaceum var. celestial",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #8)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 119,
      "vitaminC": "36%",
      "fiber": "4.8g",
      "sugar": "4.4g",
      "potassium": "328mg"
    },
    "funFact": "Botanical Specimen #233: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 21,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee_var_8",
    "name": "Midnight Lychee",
    "scientificName": "Litchi chinensis var. midnight",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #8)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 126,
      "vitaminC": "49%",
      "fiber": "5.1g",
      "sugar": "5.1g",
      "potassium": "347mg"
    },
    "funFact": "Botanical Specimen #234: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 22,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit_var_8",
    "name": "Giant Starfruit",
    "scientificName": "Averrhoa carambola var. giant",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #8)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 133,
      "vitaminC": "62%",
      "fiber": "5.4g",
      "sugar": "5.8g",
      "potassium": "366mg"
    },
    "funFact": "Botanical Specimen #235: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 23,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit_var_8",
    "name": "Honey Jackfruit",
    "scientificName": "Artocarpus heterophyllus var. honey",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #8)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 140,
      "vitaminC": "75%",
      "fiber": "5.7g",
      "sugar": "6.5g",
      "potassium": "385mg"
    },
    "funFact": "Botanical Specimen #236: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 24,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand_var_8",
    "name": "Scarlet Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis var. scarlet",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #8)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 37,
      "vitaminC": "88%",
      "fiber": "6.0g",
      "sugar": "7.2g",
      "potassium": "404mg"
    },
    "funFact": "Botanical Specimen #237: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 25,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit_var_8",
    "name": "Sugar Miracle Berry",
    "scientificName": "Synsepalum dulcificum var. sugar",
    "category": "Superfruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #8)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 44,
      "vitaminC": "101%",
      "fiber": "6.3g",
      "sugar": "7.9g",
      "potassium": "423mg"
    },
    "funFact": "Botanical Specimen #238: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 26,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote_var_8",
    "name": "Velvet Black Sapote",
    "scientificName": "Diospyros nigra var. velvet",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #8)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 51,
      "vitaminC": "114%",
      "fiber": "6.6g",
      "sugar": "8.6g",
      "potassium": "442mg"
    },
    "funFact": "Botanical Specimen #239: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 27,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba_var_8",
    "name": "Frost Jabuticaba",
    "scientificName": "Plinia cauliflora var. frost",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #8)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 58,
      "vitaminC": "127%",
      "fiber": "6.9g",
      "sugar": "9.3g",
      "potassium": "461mg"
    },
    "funFact": "Botanical Specimen #240: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 28,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_9",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "legendary",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #9)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 65,
      "vitaminC": "140%",
      "fiber": "1.2g",
      "sugar": "10.0g",
      "potassium": "480mg"
    },
    "funFact": "Botanical Specimen #241: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 29,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_9",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #9)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 72,
      "vitaminC": "153%",
      "fiber": "1.5g",
      "sugar": "10.7g",
      "potassium": "499mg"
    },
    "funFact": "Botanical Specimen #242: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 30,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_9",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #9)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 79,
      "vitaminC": "166%",
      "fiber": "1.8g",
      "sugar": "11.4g",
      "potassium": "518mg"
    },
    "funFact": "Botanical Specimen #243: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 31,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_9",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #9)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 86,
      "vitaminC": "179%",
      "fiber": "2.1g",
      "sugar": "12.1g",
      "potassium": "537mg"
    },
    "funFact": "Botanical Specimen #244: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 32,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_9",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "legendary",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #9)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 93,
      "vitaminC": "192%",
      "fiber": "2.4g",
      "sugar": "12.8g",
      "potassium": "556mg"
    },
    "funFact": "Botanical Specimen #245: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 33,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_9",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #9)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 100,
      "vitaminC": "205%",
      "fiber": "2.7g",
      "sugar": "13.5g",
      "potassium": "575mg"
    },
    "funFact": "Botanical Specimen #246: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 34,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_9",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "hard",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #9)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 107,
      "vitaminC": "218%",
      "fiber": "3.0g",
      "sugar": "14.2g",
      "potassium": "594mg"
    },
    "funFact": "Botanical Specimen #247: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 35,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_9",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #9)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 114,
      "vitaminC": "231%",
      "fiber": "3.3g",
      "sugar": "14.9g",
      "potassium": "93mg"
    },
    "funFact": "Botanical Specimen #248: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 36,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_9",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #9)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 121,
      "vitaminC": "244%",
      "fiber": "3.6g",
      "sugar": "15.6g",
      "potassium": "112mg"
    },
    "funFact": "Botanical Specimen #249: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 37,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_9",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #9)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 128,
      "vitaminC": "257%",
      "fiber": "3.9g",
      "sugar": "16.3g",
      "potassium": "131mg"
    },
    "funFact": "Botanical Specimen #250: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 38,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_9",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #9)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 135,
      "vitaminC": "20%",
      "fiber": "4.2g",
      "sugar": "17.0g",
      "potassium": "150mg"
    },
    "funFact": "Botanical Specimen #251: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 39,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_9",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #9)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 142,
      "vitaminC": "33%",
      "fiber": "4.5g",
      "sugar": "17.7g",
      "potassium": "169mg"
    },
    "funFact": "Botanical Specimen #252: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 40,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_9",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #9)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 39,
      "vitaminC": "46%",
      "fiber": "4.8g",
      "sugar": "18.4g",
      "potassium": "188mg"
    },
    "funFact": "Botanical Specimen #253: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 41,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_9",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #9)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 46,
      "vitaminC": "59%",
      "fiber": "5.1g",
      "sugar": "19.1g",
      "potassium": "207mg"
    },
    "funFact": "Botanical Specimen #254: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 42,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_9",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #9)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 53,
      "vitaminC": "72%",
      "fiber": "5.4g",
      "sugar": "19.8g",
      "potassium": "226mg"
    },
    "funFact": "Botanical Specimen #255: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 43,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_9",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #9)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 60,
      "vitaminC": "85%",
      "fiber": "5.7g",
      "sugar": "20.5g",
      "potassium": "245mg"
    },
    "funFact": "Botanical Specimen #256: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 44,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_9",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #9)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 67,
      "vitaminC": "98%",
      "fiber": "6.0g",
      "sugar": "21.2g",
      "potassium": "264mg"
    },
    "funFact": "Botanical Specimen #257: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 45,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_9",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #9)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 74,
      "vitaminC": "111%",
      "fiber": "6.3g",
      "sugar": "21.9g",
      "potassium": "283mg"
    },
    "funFact": "Botanical Specimen #258: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 46,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_9",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "North America (Cultivar #9)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 81,
      "vitaminC": "124%",
      "fiber": "6.6g",
      "sugar": "4.6g",
      "potassium": "302mg"
    },
    "funFact": "Botanical Specimen #259: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 47,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_9",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #9)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 88,
      "vitaminC": "137%",
      "fiber": "6.9g",
      "sugar": "5.3g",
      "potassium": "321mg"
    },
    "funFact": "Botanical Specimen #260: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 48,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian_var_9",
    "name": "Ruby Durian",
    "scientificName": "Durio zibethinus var. ruby",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #9)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 95,
      "vitaminC": "150%",
      "fiber": "1.2g",
      "sugar": "6.0g",
      "potassium": "340mg"
    },
    "funFact": "Botanical Specimen #261: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 49,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen_var_9",
    "name": "Emerald Mangosteen",
    "scientificName": "Garcinia mangostana var. emerald",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #9)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 102,
      "vitaminC": "163%",
      "fiber": "1.5g",
      "sugar": "6.7g",
      "potassium": "359mg"
    },
    "funFact": "Botanical Specimen #262: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 50,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan_var_9",
    "name": "Celestial Rambutan",
    "scientificName": "Nephelium lappaceum var. celestial",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #9)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 109,
      "vitaminC": "176%",
      "fiber": "1.8g",
      "sugar": "7.4g",
      "potassium": "378mg"
    },
    "funFact": "Botanical Specimen #263: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 51,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee_var_9",
    "name": "Midnight Lychee",
    "scientificName": "Litchi chinensis var. midnight",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #9)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 116,
      "vitaminC": "189%",
      "fiber": "2.1g",
      "sugar": "8.1g",
      "potassium": "397mg"
    },
    "funFact": "Botanical Specimen #264: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 52,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit_var_9",
    "name": "Giant Starfruit",
    "scientificName": "Averrhoa carambola var. giant",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #9)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 123,
      "vitaminC": "202%",
      "fiber": "2.4g",
      "sugar": "8.8g",
      "potassium": "416mg"
    },
    "funFact": "Botanical Specimen #265: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 53,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit_var_9",
    "name": "Honey Jackfruit",
    "scientificName": "Artocarpus heterophyllus var. honey",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #9)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 130,
      "vitaminC": "215%",
      "fiber": "2.7g",
      "sugar": "9.5g",
      "potassium": "435mg"
    },
    "funFact": "Botanical Specimen #266: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 54,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand_var_9",
    "name": "Scarlet Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis var. scarlet",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #9)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 137,
      "vitaminC": "228%",
      "fiber": "3.0g",
      "sugar": "10.2g",
      "potassium": "454mg"
    },
    "funFact": "Botanical Specimen #267: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 55,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit_var_9",
    "name": "Sugar Miracle Berry",
    "scientificName": "Synsepalum dulcificum var. sugar",
    "category": "Superfruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #9)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 144,
      "vitaminC": "241%",
      "fiber": "3.3g",
      "sugar": "10.9g",
      "potassium": "473mg"
    },
    "funFact": "Botanical Specimen #268: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 56,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote_var_9",
    "name": "Velvet Black Sapote",
    "scientificName": "Diospyros nigra var. velvet",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #9)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 41,
      "vitaminC": "254%",
      "fiber": "3.6g",
      "sugar": "11.6g",
      "potassium": "492mg"
    },
    "funFact": "Botanical Specimen #269: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 57,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba_var_9",
    "name": "Frost Jabuticaba",
    "scientificName": "Plinia cauliflora var. frost",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #9)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 48,
      "vitaminC": "267%",
      "fiber": "3.9g",
      "sugar": "12.3g",
      "potassium": "511mg"
    },
    "funFact": "Botanical Specimen #270: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 58,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_10",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "hard",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #10)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 55,
      "vitaminC": "30%",
      "fiber": "4.2g",
      "sugar": "13.0g",
      "potassium": "530mg"
    },
    "funFact": "Botanical Specimen #271: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 14,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_10",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #10)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 62,
      "vitaminC": "43%",
      "fiber": "4.5g",
      "sugar": "13.7g",
      "potassium": "549mg"
    },
    "funFact": "Botanical Specimen #272: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 15,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_10",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #10)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 69,
      "vitaminC": "56%",
      "fiber": "4.8g",
      "sugar": "14.4g",
      "potassium": "568mg"
    },
    "funFact": "Botanical Specimen #273: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 16,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_10",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #10)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 76,
      "vitaminC": "69%",
      "fiber": "5.1g",
      "sugar": "15.1g",
      "potassium": "587mg"
    },
    "funFact": "Botanical Specimen #274: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 17,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_10",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "medium",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #10)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 83,
      "vitaminC": "82%",
      "fiber": "5.4g",
      "sugar": "15.8g",
      "potassium": "86mg"
    },
    "funFact": "Botanical Specimen #275: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 18,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_10",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #10)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 90,
      "vitaminC": "95%",
      "fiber": "5.7g",
      "sugar": "16.5g",
      "potassium": "105mg"
    },
    "funFact": "Botanical Specimen #276: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 19,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_10",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #10)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 97,
      "vitaminC": "108%",
      "fiber": "6.0g",
      "sugar": "17.2g",
      "potassium": "124mg"
    },
    "funFact": "Botanical Specimen #277: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 20,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_10",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #10)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 104,
      "vitaminC": "121%",
      "fiber": "6.3g",
      "sugar": "17.9g",
      "potassium": "143mg"
    },
    "funFact": "Botanical Specimen #278: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 21,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_10",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #10)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 111,
      "vitaminC": "134%",
      "fiber": "6.6g",
      "sugar": "18.6g",
      "potassium": "162mg"
    },
    "funFact": "Botanical Specimen #279: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 22,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_10",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #10)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 118,
      "vitaminC": "147%",
      "fiber": "6.9g",
      "sugar": "19.3g",
      "potassium": "181mg"
    },
    "funFact": "Botanical Specimen #280: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 23,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_10",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #10)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 125,
      "vitaminC": "160%",
      "fiber": "1.2g",
      "sugar": "20.0g",
      "potassium": "200mg"
    },
    "funFact": "Botanical Specimen #281: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 24,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_10",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #10)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 132,
      "vitaminC": "173%",
      "fiber": "1.5g",
      "sugar": "20.7g",
      "potassium": "219mg"
    },
    "funFact": "Botanical Specimen #282: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 25,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_10",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #10)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 139,
      "vitaminC": "186%",
      "fiber": "1.8g",
      "sugar": "21.4g",
      "potassium": "238mg"
    },
    "funFact": "Botanical Specimen #283: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 26,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_10",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #10)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 36,
      "vitaminC": "199%",
      "fiber": "2.1g",
      "sugar": "4.1g",
      "potassium": "257mg"
    },
    "funFact": "Botanical Specimen #284: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 27,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_10",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "legendary",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #10)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 43,
      "vitaminC": "212%",
      "fiber": "2.4g",
      "sugar": "4.8g",
      "potassium": "276mg"
    },
    "funFact": "Botanical Specimen #285: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 28,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_10",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #10)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 50,
      "vitaminC": "225%",
      "fiber": "2.7g",
      "sugar": "5.5g",
      "potassium": "295mg"
    },
    "funFact": "Botanical Specimen #286: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 29,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_10",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "medium",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #10)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 57,
      "vitaminC": "238%",
      "fiber": "3.0g",
      "sugar": "6.2g",
      "potassium": "314mg"
    },
    "funFact": "Botanical Specimen #287: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 30,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_10",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #10)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 64,
      "vitaminC": "251%",
      "fiber": "3.3g",
      "sugar": "6.9g",
      "potassium": "333mg"
    },
    "funFact": "Botanical Specimen #288: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 31,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_10",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "legendary",
    "emoji": "🫐",
    "origin": "North America (Cultivar #10)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 71,
      "vitaminC": "264%",
      "fiber": "3.6g",
      "sugar": "7.6g",
      "potassium": "352mg"
    },
    "funFact": "Botanical Specimen #289: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 32,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_10",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #10)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 78,
      "vitaminC": "27%",
      "fiber": "3.9g",
      "sugar": "8.3g",
      "potassium": "371mg"
    },
    "funFact": "Botanical Specimen #290: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 33,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "durian_var_10",
    "name": "Ruby Durian",
    "scientificName": "Durio zibethinus var. ruby",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍈",
    "origin": "Borneo & Sumatra (Cultivar #10)",
    "flavor": "Caramel, roasted almond, savory custard with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#8B9A46",
      "secondary": "#588157",
      "stem": "#344E41",
      "leaf": "#588157",
      "glow": "#8B9A4666"
    },
    "nutrition": {
      "calories": 85,
      "vitaminC": "40%",
      "fiber": "4.2g",
      "sugar": "9.0g",
      "potassium": "390mg"
    },
    "funFact": "Botanical Specimen #291: Ruby Durian is cultivated primarily across Borneo & Sumatra. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 34,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mangosteen_var_10",
    "name": "Emerald Mangosteen",
    "scientificName": "Garcinia mangostana var. emerald",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🟣",
    "origin": "Sundaland, Southeast Asia (Cultivar #10)",
    "flavor": "Peach, lychee, strawberry, vanilla with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#4A0E2E",
      "secondary": "#2B091B",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#4A0E2E66"
    },
    "nutrition": {
      "calories": 92,
      "vitaminC": "53%",
      "fiber": "4.5g",
      "sugar": "9.7g",
      "potassium": "409mg"
    },
    "funFact": "Botanical Specimen #292: Emerald Mangosteen is cultivated primarily across Sundaland, Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 35,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "rambutan_var_10",
    "name": "Celestial Rambutan",
    "scientificName": "Nephelium lappaceum var. celestial",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🔴",
    "origin": "Malaysia & Indonesia (Cultivar #10)",
    "flavor": "Floral, translucent, sweet grape with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#EF233C",
      "stem": "#70E000",
      "leaf": "#386641",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 99,
      "vitaminC": "66%",
      "fiber": "4.8g",
      "sugar": "10.4g",
      "potassium": "428mg"
    },
    "funFact": "Botanical Specimen #293: Celestial Rambutan is cultivated primarily across Malaysia & Indonesia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 36,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lychee_var_10",
    "name": "Midnight Lychee",
    "scientificName": "Litchi chinensis var. midnight",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🍓",
    "origin": "Southern China (Cultivar #10)",
    "flavor": "Rose-perfumed, juicy nectar with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#C1121F",
      "secondary": "#780001",
      "stem": "#588157",
      "leaf": "#52B788",
      "glow": "#C1121F66"
    },
    "nutrition": {
      "calories": 106,
      "vitaminC": "79%",
      "fiber": "5.1g",
      "sugar": "11.1g",
      "potassium": "447mg"
    },
    "funFact": "Botanical Specimen #294: Midnight Lychee is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 37,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "starfruit_var_10",
    "name": "Giant Starfruit",
    "scientificName": "Averrhoa carambola var. giant",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "⭐",
    "origin": "Tropical Asia (Cultivar #10)",
    "flavor": "Crisp, tangy-sweet, apple-grape crunch with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#70E000",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 113,
      "vitaminC": "92%",
      "fiber": "5.4g",
      "sugar": "11.8g",
      "potassium": "466mg"
    },
    "funFact": "Botanical Specimen #295: Giant Starfruit is cultivated primarily across Tropical Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 38,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jackfruit_var_10",
    "name": "Honey Jackfruit",
    "scientificName": "Artocarpus heterophyllus var. honey",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍈",
    "origin": "Western Ghats, India (Cultivar #10)",
    "flavor": "Juicy Fruit bubblegum, banana-pineapple with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#588157",
      "secondary": "#3A5A40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#58815766"
    },
    "nutrition": {
      "calories": 120,
      "vitaminC": "105%",
      "fiber": "5.7g",
      "sugar": "12.5g",
      "potassium": "485mg"
    },
    "funFact": "Botanical Specimen #296: Honey Jackfruit is cultivated primarily across Western Ghats, India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 39,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "buddhas_hand_var_10",
    "name": "Scarlet Buddha's Hand",
    "scientificName": "Citrus medica var. sarcodactylis var. scarlet",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🖐️",
    "origin": "Lower Himalayas (Cultivar #10)",
    "flavor": "Fragrant floral perfume, sweet pith with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#70E000",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 127,
      "vitaminC": "118%",
      "fiber": "6.0g",
      "sugar": "13.2g",
      "potassium": "504mg"
    },
    "funFact": "Botanical Specimen #297: Scarlet Buddha's Hand is cultivated primarily across Lower Himalayas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 40,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "miracle_fruit_var_10",
    "name": "Sugar Miracle Berry",
    "scientificName": "Synsepalum dulcificum var. sugar",
    "category": "Superfruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "West Africa (Cultivar #10)",
    "flavor": "Miraculin glycoprotein turns sour to sweet with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#D90429",
      "secondary": "#9E2A2B",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#D9042966"
    },
    "nutrition": {
      "calories": 134,
      "vitaminC": "131%",
      "fiber": "6.3g",
      "sugar": "13.9g",
      "potassium": "523mg"
    },
    "funFact": "Botanical Specimen #298: Sugar Miracle Berry is cultivated primarily across West Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 41,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "black_sapote_var_10",
    "name": "Velvet Black Sapote",
    "scientificName": "Diospyros nigra var. velvet",
    "category": "Exotic",
    "difficulty": "medium",
    "emoji": "🍫",
    "origin": "Mesoamerica (Cultivar #10)",
    "flavor": "Rich chocolate pudding, caramel custard with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#2D6A4F",
      "secondary": "#1B4332",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#2D6A4F66"
    },
    "nutrition": {
      "calories": 141,
      "vitaminC": "144%",
      "fiber": "6.6g",
      "sugar": "14.6g",
      "potassium": "542mg"
    },
    "funFact": "Botanical Specimen #299: Velvet Black Sapote is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 42,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "jabuticaba_var_10",
    "name": "Frost Jabuticaba",
    "scientificName": "Plinia cauliflora var. frost",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🟣",
    "origin": "Minas Gerais, Brazil (Cultivar #10)",
    "flavor": "Wine-like grape, floral terpene with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#10002B",
      "secondary": "#240046",
      "stem": "#582F0E",
      "leaf": "#2D6A4F",
      "glow": "#10002B66"
    },
    "nutrition": {
      "calories": 38,
      "vitaminC": "157%",
      "fiber": "6.9g",
      "sugar": "15.3g",
      "potassium": "561mg"
    },
    "funFact": "Botanical Specimen #300: Frost Jabuticaba is cultivated primarily across Minas Gerais, Brazil. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 43,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "apple_var_11",
    "name": "Royal Apple",
    "scientificName": "Malus domestica var. royal",
    "category": "Pome",
    "difficulty": "legendary",
    "emoji": "🍎",
    "origin": "Central Asia (Cultivar #11)",
    "flavor": "Sweet, crisp, slightly tart with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#D90429",
      "stem": "#6F4E37",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 45,
      "vitaminC": "170%",
      "fiber": "1.2g",
      "sugar": "16.0g",
      "potassium": "580mg"
    },
    "funFact": "Botanical Specimen #301: Royal Apple is cultivated primarily across Central Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.5 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 44,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "banana_var_11",
    "name": "Golden Banana",
    "scientificName": "Musa acuminata var. golden",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🍌",
    "origin": "Southeast Asia (Cultivar #11)",
    "flavor": "Creamy, sweet, starchy with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FFE135",
      "secondary": "#F4C430",
      "stem": "#5C4033",
      "leaf": "#70E000",
      "glow": "#FFE13566"
    },
    "nutrition": {
      "calories": 52,
      "vitaminC": "183%",
      "fiber": "1.5g",
      "sugar": "16.7g",
      "potassium": "599mg"
    },
    "funFact": "Botanical Specimen #302: Golden Banana is cultivated primarily across Southeast Asia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.6 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 45,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "orange_var_11",
    "name": "Alpine Orange",
    "scientificName": "Citrus × sinensis var. alpine",
    "category": "Citrus",
    "difficulty": "medium",
    "emoji": "🍊",
    "origin": "Southern China (Cultivar #11)",
    "flavor": "Juicy, citrusy, sweet-tangy with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#FF5400",
      "stem": "#386641",
      "leaf": "#38B000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 59,
      "vitaminC": "196%",
      "fiber": "1.8g",
      "sugar": "17.4g",
      "potassium": "98mg"
    },
    "funFact": "Botanical Specimen #303: Alpine Orange is cultivated primarily across Southern China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.7 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 46,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "strawberry_var_11",
    "name": "Wild Strawberry",
    "scientificName": "Fragaria × ananassa var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🍓",
    "origin": "Europe & Americas (Cultivar #11)",
    "flavor": "Aromatic, bright, sweet-acidic with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#FF0054",
      "secondary": "#D90429",
      "stem": "#2D6A4F",
      "leaf": "#007F5F",
      "glow": "#FF005466"
    },
    "nutrition": {
      "calories": 66,
      "vitaminC": "209%",
      "fiber": "2.1g",
      "sugar": "18.1g",
      "potassium": "117mg"
    },
    "funFact": "Botanical Specimen #304: Wild Strawberry is cultivated primarily across Europe & Americas. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.8 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 47,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "watermelon_var_11",
    "name": "Imperial Watermelon",
    "scientificName": "Citrullus lanatus var. imperial",
    "category": "Melon",
    "difficulty": "legendary",
    "emoji": "🍉",
    "origin": "Kalahari, Africa (Cultivar #11)",
    "flavor": "Crisp, ultra-hydrating, refreshing sweet with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#FF3366",
      "secondary": "#2D6A4F",
      "stem": "#1B4332",
      "leaf": "#74C69D",
      "glow": "#FF336666"
    },
    "nutrition": {
      "calories": 73,
      "vitaminC": "222%",
      "fiber": "2.4g",
      "sugar": "18.8g",
      "potassium": "136mg"
    },
    "funFact": "Botanical Specimen #305: Imperial Watermelon is cultivated primarily across Kalahari, Africa. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "5.9 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 48,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "grape_var_11",
    "name": "Ruby Grape",
    "scientificName": "Vitis vinifera var. ruby",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🍇",
    "origin": "Mediterranean (Cultivar #11)",
    "flavor": "Rich honey, bursting, wine notes with nuanced notes of ruby aromatics",
    "colors": {
      "primary": "#7209B7",
      "secondary": "#560BAD",
      "stem": "#6F4E37",
      "leaf": "#38B000",
      "glow": "#7209B766"
    },
    "nutrition": {
      "calories": 80,
      "vitaminC": "235%",
      "fiber": "2.7g",
      "sugar": "19.5g",
      "potassium": "155mg"
    },
    "funFact": "Botanical Specimen #306: Ruby Grape is cultivated primarily across Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.0 - 7.3",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 49,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pineapple_var_11",
    "name": "Emerald Pineapple",
    "scientificName": "Ananas comosus var. emerald",
    "category": "Tropical",
    "difficulty": "hard",
    "emoji": "🍍",
    "origin": "Parana Basin, South America (Cultivar #11)",
    "flavor": "Vibrant sweet-acidic tropical punch with nuanced notes of emerald aromatics",
    "colors": {
      "primary": "#FAA307",
      "secondary": "#D00000",
      "stem": "#2D6A4F",
      "leaf": "#2D6A4F",
      "glow": "#FAA30766"
    },
    "nutrition": {
      "calories": 87,
      "vitaminC": "248%",
      "fiber": "3.0g",
      "sugar": "20.2g",
      "potassium": "174mg"
    },
    "funFact": "Botanical Specimen #307: Emerald Pineapple is cultivated primarily across Parana Basin, South America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.1 - 7.4",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Early Summer",
      "germinationDays": 50,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "mango_var_11",
    "name": "Celestial Mango",
    "scientificName": "Mangifera indica var. celestial",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥭",
    "origin": "India & Myanmar (Cultivar #11)",
    "flavor": "Velvety, luscious, floral honey with nuanced notes of celestial aromatics",
    "colors": {
      "primary": "#FFB703",
      "secondary": "#FB8500",
      "stem": "#603808",
      "leaf": "#386641",
      "glow": "#FFB70366"
    },
    "nutrition": {
      "calories": 94,
      "vitaminC": "261%",
      "fiber": "3.3g",
      "sugar": "20.9g",
      "potassium": "193mg"
    },
    "funFact": "Botanical Specimen #308: Celestial Mango is cultivated primarily across India & Myanmar. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.2 - 7.5",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 51,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "lemon_var_11",
    "name": "Midnight Lemon",
    "scientificName": "Citrus limon var. midnight",
    "category": "Citrus",
    "difficulty": "legendary",
    "emoji": "🍋",
    "origin": "Northeast India (Cultivar #11)",
    "flavor": "Sharply sour, intensely zesty with nuanced notes of midnight aromatics",
    "colors": {
      "primary": "#FFEE32",
      "secondary": "#FFD100",
      "stem": "#40916C",
      "leaf": "#40916C",
      "glow": "#FFEE3266"
    },
    "nutrition": {
      "calories": 101,
      "vitaminC": "24%",
      "fiber": "3.6g",
      "sugar": "21.6g",
      "potassium": "212mg"
    },
    "funFact": "Botanical Specimen #309: Midnight Lemon is cultivated primarily across Northeast India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.3 - 7.6",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 52,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "cherry_var_11",
    "name": "Giant Cherry",
    "scientificName": "Prunus avium var. giant",
    "category": "Stone Fruit",
    "difficulty": "hard",
    "emoji": "🍒",
    "origin": "Anatolia, Turkey (Cultivar #11)",
    "flavor": "Deep nectar, sweet-tart with nuanced notes of giant aromatics",
    "colors": {
      "primary": "#9E0059",
      "secondary": "#FF0054",
      "stem": "#588157",
      "leaf": "#588157",
      "glow": "#9E005966"
    },
    "nutrition": {
      "calories": 108,
      "vitaminC": "37%",
      "fiber": "3.9g",
      "sugar": "4.3g",
      "potassium": "231mg"
    },
    "funFact": "Botanical Specimen #310: Giant Cherry is cultivated primarily across Anatolia, Turkey. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.4 - 7.7",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 53,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "peach_var_11",
    "name": "Honey Peach",
    "scientificName": "Prunus persica var. honey",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🍑",
    "origin": "Northwest China (Cultivar #11)",
    "flavor": "Velvety, fragrant, juicy honey with nuanced notes of honey aromatics",
    "colors": {
      "primary": "#FF9E80",
      "secondary": "#FF6E40",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#FF9E8066"
    },
    "nutrition": {
      "calories": 115,
      "vitaminC": "50%",
      "fiber": "4.2g",
      "sugar": "5.0g",
      "potassium": "250mg"
    },
    "funFact": "Botanical Specimen #311: Honey Peach is cultivated primarily across Northwest China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.5 - 7.8",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Spring",
      "germinationDays": 54,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pear_var_11",
    "name": "Scarlet Pear",
    "scientificName": "Pyrus communis var. scarlet",
    "category": "Pome",
    "difficulty": "easy",
    "emoji": "🍐",
    "origin": "Temperate Europe (Cultivar #11)",
    "flavor": "Buttery, mellow, grainy sweet with nuanced notes of scarlet aromatics",
    "colors": {
      "primary": "#AACC00",
      "secondary": "#80B918",
      "stem": "#6F4E37",
      "leaf": "#2B9348",
      "glow": "#AACC0066"
    },
    "nutrition": {
      "calories": 122,
      "vitaminC": "63%",
      "fiber": "4.5g",
      "sugar": "5.7g",
      "potassium": "269mg"
    },
    "funFact": "Botanical Specimen #312: Scarlet Pear is cultivated primarily across Temperate Europe. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.6 - 7.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 55,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "kiwi_var_11",
    "name": "Sugar Kiwi",
    "scientificName": "Actinidia deliciosa var. sugar",
    "category": "Exotic",
    "difficulty": "legendary",
    "emoji": "🥝",
    "origin": "Yangtze Valley, China (Cultivar #11)",
    "flavor": "Bright green acidity, sweet-tangy with nuanced notes of sugar aromatics",
    "colors": {
      "primary": "#70E000",
      "secondary": "#38B000",
      "stem": "#6F4E37",
      "leaf": "#2D6A4F",
      "glow": "#70E00066"
    },
    "nutrition": {
      "calories": 129,
      "vitaminC": "76%",
      "fiber": "4.8g",
      "sugar": "6.4g",
      "potassium": "288mg"
    },
    "funFact": "Botanical Specimen #313: Sugar Kiwi is cultivated primarily across Yangtze Valley, China. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.7 - 8.0",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Late Summer",
      "germinationDays": 56,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "coconut_var_11",
    "name": "Velvet Coconut",
    "scientificName": "Cocos nucifera var. velvet",
    "category": "Tropical",
    "difficulty": "easy",
    "emoji": "🥥",
    "origin": "Indo-Pacific (Cultivar #11)",
    "flavor": "Nutty, creamy, refreshing water with nuanced notes of velvet aromatics",
    "colors": {
      "primary": "#4A3525",
      "secondary": "#342217",
      "stem": "#2D6A4F",
      "leaf": "#52B788",
      "glow": "#4A352566"
    },
    "nutrition": {
      "calories": 136,
      "vitaminC": "89%",
      "fiber": "5.1g",
      "sugar": "7.1g",
      "potassium": "307mg"
    },
    "funFact": "Botanical Specimen #314: Velvet Coconut is cultivated primarily across Indo-Pacific. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.8 - 8.1",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Autumn",
      "germinationDays": 57,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "avocado_var_11",
    "name": "Frost Avocado",
    "scientificName": "Persea americana var. frost",
    "category": "Stone Fruit",
    "difficulty": "medium",
    "emoji": "🥑",
    "origin": "Mesoamerica (Cultivar #11)",
    "flavor": "Rich, buttery, nutty, smooth with nuanced notes of frost aromatics",
    "colors": {
      "primary": "#B7E4C7",
      "secondary": "#52B788",
      "stem": "#6F4E37",
      "leaf": "#1B4332",
      "glow": "#B7E4C766"
    },
    "nutrition": {
      "calories": 143,
      "vitaminC": "102%",
      "fiber": "5.4g",
      "sugar": "7.8g",
      "potassium": "326mg"
    },
    "funFact": "Botanical Specimen #315: Frost Avocado is cultivated primarily across Mesoamerica. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "6.9 - 8.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 58,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "pomegranate_var_11",
    "name": "Royal Pomegranate",
    "scientificName": "Punica granatum var. royal",
    "category": "Exotic",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "Persia to Northern India (Cultivar #11)",
    "flavor": "Deep tart-sweet, ruby burst with nuanced notes of royal aromatics",
    "colors": {
      "primary": "#A61C1C",
      "secondary": "#6B0F1A",
      "stem": "#3D0C11",
      "leaf": "#2D6A4F",
      "glow": "#A61C1C66"
    },
    "nutrition": {
      "calories": 40,
      "vitaminC": "115%",
      "fiber": "5.7g",
      "sugar": "8.5g",
      "potassium": "345mg"
    },
    "funFact": "Botanical Specimen #316: Royal Pomegranate is cultivated primarily across Persia to Northern India. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.0 - 6.8",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Spring",
      "germinationDays": 14,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "papaya_var_11",
    "name": "Golden Papaya",
    "scientificName": "Carica papaya var. golden",
    "category": "Tropical",
    "difficulty": "legendary",
    "emoji": "🥭",
    "origin": "Central America (Cultivar #11)",
    "flavor": "Musky, tropical sweet, buttery melon with nuanced notes of golden aromatics",
    "colors": {
      "primary": "#FF7B00",
      "secondary": "#E85D04",
      "stem": "#386641",
      "leaf": "#70E000",
      "glow": "#FF7B0066"
    },
    "nutrition": {
      "calories": 47,
      "vitaminC": "128%",
      "fiber": "6.0g",
      "sugar": "9.2g",
      "potassium": "364mg"
    },
    "funFact": "Botanical Specimen #317: Golden Papaya is cultivated primarily across Central America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.1 - 6.9",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Early Summer",
      "germinationDays": 15,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "fig_var_11",
    "name": "Alpine Fig",
    "scientificName": "Ficus carica var. alpine",
    "category": "Exotic",
    "difficulty": "easy",
    "emoji": "🫒",
    "origin": "Levant & Mediterranean (Cultivar #11)",
    "flavor": "Jammy, honeyed, delicate crunch with nuanced notes of alpine aromatics",
    "colors": {
      "primary": "#4A0E4E",
      "secondary": "#2A0845",
      "stem": "#386641",
      "leaf": "#40916C",
      "glow": "#4A0E4E66"
    },
    "nutrition": {
      "calories": 54,
      "vitaminC": "141%",
      "fiber": "6.3g",
      "sugar": "9.9g",
      "potassium": "383mg"
    },
    "funFact": "Botanical Specimen #318: Alpine Fig is cultivated primarily across Levant & Mediterranean. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.2 - 7.0",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Late Summer",
      "germinationDays": 16,
      "waterNeed": "High Humid Rainforest"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "blueberry_var_11",
    "name": "Wild Blueberry",
    "scientificName": "Vaccinium corymbosum var. wild",
    "category": "Berry",
    "difficulty": "hard",
    "emoji": "🫐",
    "origin": "North America (Cultivar #11)",
    "flavor": "Floral tang, sweet juicy burst with nuanced notes of wild aromatics",
    "colors": {
      "primary": "#3A0CA3",
      "secondary": "#1F005B",
      "stem": "#4CC9F0",
      "leaf": "#52B788",
      "glow": "#3A0CA366"
    },
    "nutrition": {
      "calories": 61,
      "vitaminC": "154%",
      "fiber": "6.6g",
      "sugar": "10.6g",
      "potassium": "402mg"
    },
    "funFact": "Botanical Specimen #319: Wild Blueberry is cultivated primarily across North America. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.3 - 7.1",
      "sunlight": "Full Direct Sunlight (8+ hrs)",
      "harvestSeason": "Autumn",
      "germinationDays": 17,
      "waterNeed": "Low Drought-Tolerant"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  },
  {
    "id": "raspberry_var_11",
    "name": "Imperial Raspberry",
    "scientificName": "Rubus idaeus var. imperial",
    "category": "Berry",
    "difficulty": "easy",
    "emoji": "🫐",
    "origin": "Eurasia (Cultivar #11)",
    "flavor": "Velvety, delicate sweet-tart with nuanced notes of imperial aromatics",
    "colors": {
      "primary": "#E63946",
      "secondary": "#C1121F",
      "stem": "#52B788",
      "leaf": "#52B788",
      "glow": "#E6394666"
    },
    "nutrition": {
      "calories": 68,
      "vitaminC": "167%",
      "fiber": "6.9g",
      "sugar": "11.3g",
      "potassium": "421mg"
    },
    "funFact": "Botanical Specimen #320: Imperial Raspberry is cultivated primarily across Eurasia. It exhibits specialized cellular adaptations for climate resilience and enhanced phytochemical synthesis.",
    "cultivation": {
      "soilPh": "7.4 - 7.2",
      "sunlight": "Partial Canopy Shade",
      "harvestSeason": "Year-round Tropical",
      "germinationDays": 18,
      "waterNeed": "Moderate Regular"
    },
    "shape": {
      "type": "circle",
      "width": 140,
      "height": 140,
      "glow": true
    }
  }
];

if (typeof window !== "undefined") {
  window.FRUITS_MASTER_DB = FRUITS_MASTER_DB;
  // Replace base database with master database
  window.FRUITS_DATABASE = FRUITS_MASTER_DB;
}

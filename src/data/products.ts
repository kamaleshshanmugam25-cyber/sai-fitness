import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  // 1. Optimum Nutrition Gold Standard 100% Whey
  {
    id: 'on-gold-standard-100-whey',
    slug: 'optimum-nutrition-gold-standard-100-whey',
    name: 'Optimum Nutrition Gold Standard 100% Whey Protein',
    brand: 'Optimum Nutrition',
    brandSlug: 'optimum-nutrition',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'recovery'],
    shortDescription: 'The world’s best-selling whey protein blend delivering 24g of premium protein and 5.5g of naturally occurring BCAAs per scoop.',
    fullDescription: 'Optimum Nutrition Gold Standard 100% Whey delivers 24g of high-quality whey protein per serving, primarily composed of Whey Protein Isolate (WPI). Formulated with ultra-filtered whey protein concentrate, it aids in muscle building, repair, and accelerated recovery after intense workout sessions.',
    sellingPrice: 3299,
    mrp: 4199,
    discountPercentage: 21,
    rating: 4.8,
    reviewCount: 1420,
    inStock: true,
    stockCount: 42,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'double-rich-chocolate', name: 'Double Rich Chocolate', inStock: true },
      { id: 'extreme-milk-chocolate', name: 'Extreme Milk Chocolate', inStock: true },
      { id: 'vanilla-ice-cream', name: 'Vanilla Ice Cream', inStock: true },
      { id: 'mocha-cappuccino', name: 'Mocha Cappuccino', inStock: false }
    ],
    weights: [
      { id: '1kg', label: '1 kg (2.2 lbs)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 30 },
      { id: '2kg', label: '2 kg (4.4 lbs)', priceMultiplier: 1.95, mrpMultiplier: 1.95, servingsCount: 63 },
      { id: '5lbs', label: '5 lbs (2.27 kg)', priceMultiplier: 2.1, mrpMultiplier: 2.05, servingsCount: 74 }
    ],
    highlights: [
      '24g Whey Protein with Whey Isolate as Primary Source',
      '5.5g Naturally Occurring BCAAs per serving',
      '4g Glutamine and Glutamic Acid for muscle recovery',
      'Informed-Choice Certified — Banned Substance Tested'
    ],
    nutritionalFacts: {
      servingSize: '1 Rounded Scoop (30.4g)',
      servingsPerContainer: 74,
      proteinPerServing: '24g',
      bcaaPerServing: '5.5g',
      caloriesPerServing: '120 kcal',
      carbsPerServing: '3g',
      fatsPerServing: '1.5g',
      addedSugar: '0g',
      micronutrients: [
        { label: 'Calcium', value: '130mg', percentDailyValue: '10%' },
        { label: 'Sodium', value: '130mg', percentDailyValue: '6%' },
        { label: 'Potassium', value: '210mg', percentDailyValue: '4%' }
      ]
    },
    ingredients: [
      'Protein Blend (Whey Protein Isolate, Whey Protein Concentrate, Hydrolyzed Whey Peptides)',
      'Cocoa Powder (Processed with Alkali)',
      'Lecithin (Soy or Sunflower)',
      'Natural and Artificial Flavor',
      'Acesulfame Potassium',
      'Sucralose',
      'Lactase Enzyme'
    ],
    usageInstructions: {
      recommendedDose: '1 scoop (30.4g) in 180ml - 240ml of cold water or skimmed milk.',
      directions: 'Mix thoroughly in a shaker cup for 25-30 seconds until fully dissolved.',
      bestTimeToTake: 'First thing in the morning, 30-45 minutes post-workout, or between meals.',
      warningNote: 'Contains milk and soy ingredients. Not intended to replace a balanced whole-food diet.'
    },
    authenticity: {
      importer: 'Glanbia Performance Nutrition India Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Verified with unique 6-digit scratch verification code on lid seal.',
      fssaiLicense: '10017011004390'
    }
  },

  // 2. Dymatize ISO 100 Hydrolyzed Whey Isolate
  {
    id: 'dymatize-iso100-hydrolyzed',
    slug: 'dymatize-iso-100-hydrolyzed-protein',
    name: 'Dymatize ISO 100 Hydrolyzed Whey Protein Isolate',
    brand: 'Dymatize',
    brandSlug: 'dymatize',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'recovery'],
    shortDescription: 'Ultra-fast absorbing hydrolyzed 100% whey protein isolate with zero sugar and ultra-low carbs.',
    fullDescription: 'Dymatize ISO100 is formulated using cross-flow microfiltration, multi-step purification that preserves important muscle-building protein fractions while removing excess carbohydrates, fat, lactose, and cholesterol.',
    sellingPrice: 4799,
    mrp: 6199,
    discountPercentage: 22,
    rating: 4.9,
    reviewCount: 980,
    inStock: true,
    stockCount: 28,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'gourmet-chocolate', name: 'Gourmet Chocolate', inStock: true },
      { id: 'fudge-brownie', name: 'Fudge Brownie', inStock: true },
      { id: 'smooth-banana', name: 'Smooth Banana', inStock: true },
      { id: 'cookies-cream', name: 'Cookies & Cream', inStock: true }
    ],
    weights: [
      { id: '5lbs', label: '5 lbs (2.3 kg)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 71 },
      { id: '2lbs', label: '2 lbs (907 g)', priceMultiplier: 0.52, mrpMultiplier: 0.53, servingsCount: 29 }
    ],
    highlights: [
      '25g Hydrolyzed 100% Whey Protein Isolate',
      '5.5g BCAAs including 2.6g of Leucine',
      'Less than 1g Sugar and 1g Fat',
      'Gluten-Free & Tested for Banned Substances'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (32g)',
      servingsPerContainer: 71,
      proteinPerServing: '25g',
      bcaaPerServing: '5.5g',
      caloriesPerServing: '120 kcal',
      carbsPerServing: '2g',
      fatsPerServing: '0.5g',
      addedSugar: '0g',
      micronutrients: [
        { label: 'Calcium', value: '100mg', percentDailyValue: '8%' },
        { label: 'Potassium', value: '160mg', percentDailyValue: '4%' }
      ]
    },
    ingredients: [
      'Hydrolyzed Whey Protein Isolate',
      'Whey Protein Isolate',
      'Natural & Artificial Flavors',
      'Salt',
      'Soy Lecithin',
      'Sucralose',
      'Steviol Glycosides (Stevia)'
    ],
    usageInstructions: {
      recommendedDose: '1 scoop in 150ml - 180ml of water.',
      directions: 'Shake vigorously for 15 seconds. Absorbs rapidly, ideal post-workout.',
      bestTimeToTake: 'Immediately following workout or high-intensity training.',
      warningNote: 'Contains Milk and Soy. Store in a cool, dry place.'
    },
    authenticity: {
      importer: 'Muscle House India / Bright Performance',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Official hologram verification sticker on cap with QR code.',
      fssaiLicense: '10015011002634'
    }
  },

  // 3. MuscleBlaze Biozyme Performance Whey
  {
    id: 'muscleblaze-biozyme-performance-whey',
    slug: 'muscleblaze-biozyme-performance-whey',
    name: 'MuscleBlaze Biozyme Performance Whey',
    brand: 'MuscleBlaze',
    brandSlug: 'muscleblaze',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'recovery'],
    shortDescription: 'Clinically tested for 50% higher protein absorption and 60% higher BCAA absorption in Indian bodies.',
    fullDescription: 'MuscleBlaze Biozyme Performance Whey is formulated with the proprietary Enhanced Absorption Formula (EAF®) to minimize bloating and gastrointestinal discomfort while maximizing lean muscle protein synthesis.',
    sellingPrice: 2499,
    mrp: 3299,
    discountPercentage: 24,
    rating: 4.7,
    reviewCount: 2150,
    inStock: true,
    stockCount: 65,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'rich-chocolate', name: 'Rich Chocolate', inStock: true },
      { id: 'magical-mango', name: 'Magical Mango', inStock: true },
      { id: 'cafe-mocha', name: 'Cafe Mocha', inStock: true },
      { id: 'kesar-kulfi', name: 'Kesar Kulfi', inStock: true }
    ],
    weights: [
      { id: '1kg', label: '1 kg (2.2 lbs)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 28 },
      { id: '2kg', label: '2 kg (4.4 lbs)', priceMultiplier: 1.88, mrpMultiplier: 1.85, servingsCount: 56 }
    ],
    highlights: [
      '25g Protein per serving from Whey Protein Concentrate',
      'Enhanced Absorption Formula (EAF®) with digestive enzymes',
      '5.51g BCAAs & 11.75g EAAs',
      'Labdoor USA Certified for Purity & Accuracy'
    ],
    nutritionalFacts: {
      servingSize: '1 Heaping Scoop (36g)',
      servingsPerContainer: 56,
      proteinPerServing: '25g',
      bcaaPerServing: '5.51g',
      eaasPerServing: '11.75g',
      caloriesPerServing: '138 kcal',
      carbsPerServing: '4.8g',
      fatsPerServing: '2.1g',
      addedSugar: '0g'
    },
    ingredients: [
      'Whey Protein Concentrate',
      'Cocoa Powder',
      'EAF (Enhanced Absorption Formula Enzymes)',
      'Emulsifier (INS 322)',
      'Artificial Sweetener (INS 955)'
    ],
    usageInstructions: {
      recommendedDose: '1 level scoop (36g) in 200ml chilled water.',
      directions: 'Shake for 20-25 seconds in a shaker.',
      bestTimeToTake: 'Post workout or in between meals.',
      warningNote: 'Contains milk and sunflower derivatives.'
    },
    authenticity: {
      importer: 'Healthkart Bright Lifecare Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Verify with 8-character unique alphanumeric authentication code via MB Auth SMS.',
      fssaiLicense: '10015064000576'
    }
  },

  // 4. Optimum Nutrition Micronized Creatine Monohydrate
  {
    id: 'on-micronized-creatine-powder',
    slug: 'optimum-nutrition-micronized-creatine',
    name: 'Optimum Nutrition Micronized Creatine Powder',
    brand: 'Optimum Nutrition',
    brandSlug: 'optimum-nutrition',
    category: 'creatine',
    categoryName: 'Creatine',
    goals: ['strength-performance', 'muscle-gain'],
    shortDescription: '100% pure micronized creatine monohydrate to support muscle power, explosive energy and strength.',
    fullDescription: 'Optimum Nutrition Micronized Creatine Powder contains 3g of 100% pure creatine monohydrate per scoop. Micronized to stay in solution longer and blend easily with water or your favorite juice without gritty texture.',
    sellingPrice: 1199,
    mrp: 1499,
    discountPercentage: 20,
    rating: 4.8,
    reviewCount: 890,
    inStock: true,
    stockCount: 50,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'unflavoured', name: 'Unflavoured', inStock: true }
    ],
    weights: [
      { id: '250g', label: '250 g (8.8 oz)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 83 },
      { id: '400g', label: '400 g (14.1 oz)', priceMultiplier: 1.5, mrpMultiplier: 1.45, servingsCount: 133 }
    ],
    highlights: [
      '3g Pure Creatine Monohydrate per scoop',
      'Micronized for effortless mixing and superior absorption',
      'Supports cellular ATP energy during intense lifting',
      'Zero Calories, Zero Sugar, Unflavored'
    ],
    nutritionalFacts: {
      servingSize: '1 Rounded Scoop (3g)',
      servingsPerContainer: 83,
      proteinPerServing: '0g',
      caloriesPerServing: '0 kcal',
      carbsPerServing: '0g',
      fatsPerServing: '0g',
      addedSugar: '0g',
      creatinePerServing: '3000mg (3g)'
    },
    ingredients: ['100% Micronized Creatine Monohydrate'],
    usageInstructions: {
      recommendedDose: '1 rounded teaspoon (3g) mixed with 240ml of cold water or your daily protein shake.',
      directions: 'Consume daily with adequate hydration (minimum 3-4 liters of water throughout the day).',
      bestTimeToTake: 'Pre-workout or immediately post-workout with carbohydrate source.',
      warningNote: 'Maintain adequate hydration throughout use. Consult your physician if you have kidney conditions.'
    },
    authenticity: {
      importer: 'Glanbia Performance Nutrition India Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Direct verification through Glanbia security scratch seal.',
      fssaiLicense: '10017011004390'
    }
  },

  // 5. MuscleBlaze Creatine Monohydrate CreAMP
  {
    id: 'muscleblaze-creamp-creatine',
    slug: 'muscleblaze-creatine-monohydrate-creamp',
    name: 'MuscleBlaze Creatine Monohydrate CreAMP™',
    brand: 'MuscleBlaze',
    brandSlug: 'muscleblaze',
    category: 'creatine',
    categoryName: 'Creatine',
    goals: ['strength-performance'],
    shortDescription: 'Patented CreAMP™ formulation with micro-solubilizers for enhanced creatine bioavailability.',
    fullDescription: 'MuscleBlaze CreAMP™ delivers 3g of pharmaceutical-grade creatine monohydrate per serving. Formulated to enhance strength output, sprint capacity, and accelerate ATP replenishment.',
    sellingPrice: 899,
    mrp: 1199,
    discountPercentage: 25,
    rating: 4.7,
    reviewCount: 650,
    inStock: true,
    stockCount: 38,
    isBestseller: false,
    isFeatured: false,
    isNewArrival: true,
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'unflavoured', name: 'Unflavoured', inStock: true },
      { id: 'fruit-punch', name: 'Fruit Punch', inStock: true }
    ],
    weights: [
      { id: '100g', label: '100 g', priceMultiplier: 0.65, mrpMultiplier: 0.65, servingsCount: 33 },
      { id: '250g', label: '250 g', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 83 }
    ],
    highlights: [
      '3g Pure Micronized Creatine Monohydrate',
      'CreAMP™ formulation for faster muscular uptake',
      'Labdoor Certified for heavy metals and purity'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (3g)',
      servingsPerContainer: 83,
      proteinPerServing: '0g',
      caloriesPerServing: '0 kcal',
      carbsPerServing: '0g',
      fatsPerServing: '0g',
      addedSugar: '0g',
      creatinePerServing: '3g'
    },
    ingredients: ['Micronized Creatine Monohydrate'],
    usageInstructions: {
      recommendedDose: 'Mix 1 scoop (3g) in 250ml water.',
      directions: 'Drink immediately after mixing.',
      bestTimeToTake: 'Consistent daily timing, ideally post-workout.',
      warningNote: 'Drink plenty of water when supplementing with creatine.'
    },
    authenticity: {
      importer: 'Healthkart Bright Lifecare Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'SMS code verification printed on the canister.',
      fssaiLicense: '10015064000576'
    }
  },

  // 6. Optimum Nutrition Serious Mass
  {
    id: 'on-serious-mass-gainer',
    slug: 'optimum-nutrition-serious-mass-gainer',
    name: 'Optimum Nutrition Serious Mass High Protein Gainer',
    brand: 'Optimum Nutrition',
    brandSlug: 'optimum-nutrition',
    category: 'mass-gainers',
    categoryName: 'Mass Gainers',
    goals: ['muscle-gain'],
    shortDescription: 'Ultimate weight gain formula providing 1,250 calories and 50g of muscle building protein per serving.',
    fullDescription: 'Optimum Nutrition Serious Mass is the definitive weight gain formula. With 1,250 calories per serving and 50 grams of protein to support muscle recovery, this powder makes the ideal post-workout and between meals shake for sizing up your goals.',
    sellingPrice: 3899,
    mrp: 4799,
    discountPercentage: 19,
    rating: 4.6,
    reviewCount: 780,
    inStock: true,
    stockCount: 30,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'chocolate', name: 'Chocolate', inStock: true },
      { id: 'vanilla', name: 'Vanilla', inStock: true }
    ],
    weights: [
      { id: '3lbs', label: '3 lbs (1.36 kg)', priceMultiplier: 0.65, mrpMultiplier: 0.65, servingsCount: 4 },
      { id: '6lbs', label: '6 lbs (2.72 kg)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 8 }
    ],
    highlights: [
      '1,250 Calories per serving with water, 1,640 with milk',
      '50g Protein from Whey, Casein, and Egg albumins',
      '252g Carbohydrates with no added sugar',
      'Fortified with 25 essential vitamins & minerals'
    ],
    nutritionalFacts: {
      servingSize: '2 Heaping Scoops (334g)',
      servingsPerContainer: 8,
      proteinPerServing: '50g',
      caloriesPerServing: '1250 kcal',
      carbsPerServing: '252g',
      fatsPerServing: '4.5g',
      addedSugar: '0g',
      micronutrients: [
        { label: 'Vitamin C', value: '60mg', percentDailyValue: '100%' },
        { label: 'Iron', value: '8mg', percentDailyValue: '45%' },
        { label: 'Zinc', value: '15mg', percentDailyValue: '100%' }
      ]
    },
    ingredients: [
      'Maltodextrin',
      'Protein Blend (Whey Protein Concentrate, Calcium Caseinate, Egg Albumen, Sweet Dairy Whey)',
      'Natural and Artificial Flavors',
      'Vitamin and Mineral Blend'
    ],
    usageInstructions: {
      recommendedDose: '2 heaping scoops blended with 700ml of cold water or milk.',
      directions: 'Blend for 45-60 seconds.',
      bestTimeToTake: 'Between meals, immediately post-workout, or before bed.',
      warningNote: 'Very high in calories.'
    },
    authenticity: {
      importer: 'Glanbia Performance Nutrition India Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Importer security seal with scratch verification sticker on tub neck.',
      fssaiLicense: '10017011004390'
    }
  },

  // 7. Optimum Nutrition Gold Standard Pre-Workout
  {
    id: 'on-gold-standard-pre-workout',
    slug: 'optimum-nutrition-gold-standard-pre-workout',
    name: 'Optimum Nutrition Gold Standard Pre-Workout',
    brand: 'Optimum Nutrition',
    brandSlug: 'optimum-nutrition',
    category: 'pre-workout',
    categoryName: 'Pre-Workout',
    goals: ['strength-performance', 'endurance'],
    shortDescription: 'Amplifies energy, laser focus, and elevated endurance with natural caffeine and Beta-Alanine.',
    fullDescription: 'Optimum Nutrition Gold Standard Pre-Workout pairs 175mg of caffeine from natural sources with 1.5g of Beta-Alanine and 3g of Creatine Monohydrate to deliver clean, focused energy without jitters.',
    sellingPrice: 2299,
    mrp: 2899,
    discountPercentage: 21,
    rating: 4.7,
    reviewCount: 540,
    inStock: true,
    stockCount: 35,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'fruit-punch', name: 'Fruit Punch', inStock: true },
      { id: 'blue-raspberry', name: 'Blue Raspberry', inStock: true }
    ],
    weights: [
      { id: '30serv', label: '30 Servings (300g)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 30 }
    ],
    highlights: [
      '175mg Caffeine from Natural Sources',
      '1.5g CarnoSyn® Beta-Alanine to delay muscle fatigue',
      '3g Creatine Monohydrate for explosive power'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (11g)',
      servingsPerContainer: 30,
      proteinPerServing: '0g',
      caloriesPerServing: '25 kcal',
      carbsPerServing: '1g',
      fatsPerServing: '0g',
      addedSugar: '0g',
      caffeinePerServing: '175mg'
    },
    ingredients: [
      'Creatine Monohydrate',
      'Beta-Alanine',
      'L-Citrulline Malate',
      'Caffeine'
    ],
    usageInstructions: {
      recommendedDose: 'Mix 1 level scoop (11g) with 200ml - 250ml of cold water.',
      directions: 'Consume 20-30 minutes before your workout.',
      bestTimeToTake: 'Pre-workout.',
      warningNote: 'Contains 175mg caffeine.'
    },
    authenticity: {
      importer: 'Glanbia Performance Nutrition India Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Scratch verification code on neck seal.',
      fssaiLicense: '10017011004390'
    }
  },

  // 8. Scivation Xtend BCAA 7G
  {
    id: 'scivation-xtend-original-bcaa',
    slug: 'scivation-xtend-original-bcaa-7g',
    name: 'Scivation Xtend Original 7G BCAA & Hydration',
    brand: 'Dymatize',
    brandSlug: 'dymatize',
    category: 'bcaa-amino-acids',
    categoryName: 'BCAA & Amino Acids',
    goals: ['recovery', 'endurance'],
    shortDescription: 'The world’s benchmark intra-workout formula with 7g BCAAs, electrolytes, and glutamine.',
    fullDescription: 'Scivation XTEND contains 7 grams of branched-chain amino acids in the scientifically proven 2:1:1 ratio, plus Glutamine and Citrulline Malate for intra-workout hydration.',
    sellingPrice: 2099,
    mrp: 2799,
    discountPercentage: 25,
    rating: 4.8,
    reviewCount: 910,
    inStock: true,
    stockCount: 45,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'blue-raspberry', name: 'Blue Raspberry Ice', inStock: true },
      { id: 'watermelon-explosion', name: 'Watermelon Explosion', inStock: true }
    ],
    weights: [
      { id: '30serv', label: '30 Servings (420g)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 30 }
    ],
    highlights: [
      '7g BCAAs in 2:1:1 ratio (Leucine, Isoleucine, Valine)',
      '2.5g L-Glutamine for tissue recovery',
      'Zero Sugar, Zero Calories'
    ],
    nutritionalFacts: {
      servingSize: '1 Level Scoop (14g)',
      servingsPerContainer: 30,
      proteinPerServing: '0g',
      bcaaPerServing: '7g',
      caloriesPerServing: '0 kcal',
      carbsPerServing: '0g',
      fatsPerServing: '0g',
      addedSugar: '0g'
    },
    ingredients: [
      'L-Leucine',
      'L-Glutamine',
      'L-Isoleucine',
      'L-Valine',
      'Electrolyte Blend'
    ],
    usageInstructions: {
      recommendedDose: 'Mix 1 scoop with 350ml water.',
      directions: 'Sip steadily throughout training.',
      bestTimeToTake: 'Intra-workout.',
      warningNote: 'Store tightly closed in cool, dry place.'
    },
    authenticity: {
      importer: 'Bright Performance / Muscle House India',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Importer holographic authenticity sticker on lid.',
      fssaiLicense: '10015011002634'
    }
  },

  // 9. GNC Mega Men One Daily Multivitamin
  {
    id: 'gnc-mega-men-one-daily',
    slug: 'gnc-mega-men-one-daily-multivitamin',
    name: 'GNC Mega Men One Daily Multivitamin',
    brand: 'GNC Live Well',
    brandSlug: 'gnc',
    category: 'vitamins-health',
    categoryName: 'Vitamins & Minerals',
    goals: ['daily-nutrition'],
    shortDescription: 'Comprehensive athletic multivitamin delivering 37 essential nutrients, amino acids, and immunity boosters.',
    fullDescription: 'GNC Mega Men One Daily is a customized micronutrient formula engineered for active men. Packed with essential vitamins, minerals, and antioxidants to bridge nutritional gaps.',
    sellingPrice: 1299,
    mrp: 1699,
    discountPercentage: 23,
    rating: 4.8,
    reviewCount: 620,
    inStock: true,
    stockCount: 55,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'tablets', name: 'Coated Caplets', inStock: true }
    ],
    weights: [
      { id: '60tabs', label: '60 Caplets (2 Month Supply)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 60 }
    ],
    highlights: [
      '37 Essential Nutrients for athletes',
      'Full spectrum B-Complex for energy production',
      'Antioxidants & Zinc for peak immunity'
    ],
    nutritionalFacts: {
      servingSize: '1 Caplet',
      servingsPerContainer: 60,
      proteinPerServing: '0g',
      caloriesPerServing: '0 kcal',
      carbsPerServing: '0g',
      fatsPerServing: '0g',
      addedSugar: '0g'
    },
    ingredients: ['Vitamin & Mineral Complex', 'Cellulose'],
    usageInstructions: {
      recommendedDose: 'Take 1 caplet daily with food.',
      directions: 'Swallow with water. Do not chew.',
      bestTimeToTake: 'Morning with breakfast.',
      warningNote: 'Dietary supplement.'
    },
    authenticity: {
      importer: 'Guardian Healthcare Services Pvt. Ltd. (GNC India)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Holographic GNC authenticity seal.',
      fssaiLicense: '10016022005191'
    }
  },

  // 10. MuscleBlaze 30g Hi-Protein Bar (Protein Bars Category)
  {
    id: 'mb-hi-protein-bar-30g',
    slug: 'muscleblaze-30g-protein-bar',
    name: 'MuscleBlaze 30g Protein Bar (Pack of 6)',
    brand: 'MuscleBlaze',
    brandSlug: 'muscleblaze',
    category: 'protein-bars',
    categoryName: 'Protein Bars',
    goals: ['daily-nutrition', 'recovery'],
    shortDescription: 'Power-packed snack offering 30g pure whey protein, zero added sugar, and 9.5g fiber per bar.',
    fullDescription: 'MuscleBlaze 30g Protein Bar provides high-octane nutrition on the go. Packed with whey protein isolate and almonds, it satisfies cravings while fueling muscle recovery without sugar spikes.',
    sellingPrice: 899,
    mrp: 1099,
    discountPercentage: 18,
    rating: 4.6,
    reviewCount: 380,
    inStock: true,
    stockCount: 45,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1622484216850-8b0682229555?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'choco-almond', name: 'Choco Almond Fudge', inStock: true },
      { id: 'cookies-cream', name: 'Cookies & Cream', inStock: true }
    ],
    weights: [
      { id: 'box-6', label: 'Box of 6 Bars (450g)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 6 },
      { id: 'box-12', label: 'Box of 12 Bars (900g)', priceMultiplier: 1.9, mrpMultiplier: 1.85, servingsCount: 12 }
    ],
    highlights: [
      '30g Premium Protein Blend per 75g Bar',
      'Zero Added Sugar & 9.5g Dietary Fiber',
      'Real California Almonds & Dark Cocoa'
    ],
    nutritionalFacts: {
      servingSize: '1 Bar (75g)',
      servingsPerContainer: 6,
      proteinPerServing: '30g',
      caloriesPerServing: '270 kcal',
      carbsPerServing: '22g',
      fatsPerServing: '7.5g',
      addedSugar: '0g'
    },
    ingredients: [
      'Protein Blend (Whey Protein Isolate, Whey Protein Concentrate, Soy Protein Isolate)',
      'Almonds',
      'Dietary Fiber',
      'Dark Chocolate Compound'
    ],
    usageInstructions: {
      recommendedDose: 'Consume 1 bar whenever you need a high-protein snack.',
      directions: 'Unwrap and enjoy anytime.',
      bestTimeToTake: 'Mid-morning snack, pre-workout energy, or on-the-go.',
      warningNote: 'Contains almonds, soy, and dairy.'
    },
    authenticity: {
      importer: 'Healthkart Bright Lifecare Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Healthkart authentication SMS barcode on box.',
      fssaiLicense: '10015064000576'
    }
  },

  // 11. SAI FITNESS Pro Stainless Steel Shaker (Fitness Accessories)
  {
    id: 'sai-fitness-pro-stainless-shaker',
    slug: 'sai-fitness-pro-stainless-shaker-750ml',
    name: 'SAI FITNESS Pro Matte Stainless Steel Shaker (750ml)',
    brand: 'SAI FITNESS',
    brandSlug: 'sai-fitness',
    category: 'fitness-accessories',
    categoryName: 'Fitness Accessories',
    goals: ['daily-nutrition', 'recovery'],
    shortDescription: 'Insulated double-wall medical-grade 304 stainless steel shaker bottle with leak-proof flip lock.',
    fullDescription: 'The official SAI FITNESS Pro Shaker Bottle. Engineered with food-grade 304 stainless steel to ensure zero plastic odor, double-wall insulation to keep shakes chilled for up to 12 hours, and a silent surgical-grade blending whisk.',
    sellingPrice: 799,
    mrp: 1199,
    discountPercentage: 33,
    rating: 4.9,
    reviewCount: 420,
    inStock: true,
    stockCount: 60,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: true,
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'matte-forest-green', name: 'Forest Green Matte', inStock: true },
      { id: 'matte-black', name: 'Charcoal Matte', inStock: true }
    ],
    weights: [
      { id: '750ml', label: '750 ml Capacity', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 1 }
    ],
    highlights: [
      '100% BPA Free Food-Grade 304 Stainless Steel',
      'Zero Retained Odor unlike plastic shakers',
      'Heavy-Duty Silicone Sealed Leak-Proof Cap',
      'Keeps liquids cold for up to 12 hours'
    ],
    nutritionalFacts: {
      servingSize: '1 Shaker Bottle',
      servingsPerContainer: 1,
      proteinPerServing: '0g',
      caloriesPerServing: '0 kcal',
      carbsPerServing: '0g',
      fatsPerServing: '0g',
      addedSugar: '0g'
    },
    ingredients: ['304 Stainless Steel Body', 'BPA-Free Polypropylene Lid', 'Food-Grade Silicone Seal'],
    usageInstructions: {
      recommendedDose: 'Use for all protein shakes, BCAAs, pre-workouts, and daily hydration.',
      directions: 'Hand wash with warm water and mild soap.',
      bestTimeToTake: 'All-day gym and lifestyle hydration.',
      warningNote: 'Do not microwave. Not recommended for hot boiling liquids.'
    },
    authenticity: {
      importer: 'SAI FITNESS Official Merchandising',
      scratchCodeAvailable: false,
      batchTestedNotice: 'Inspected and certified food-safe grade 304 steel.',
      fssaiLicense: 'Exempt (Gym Gear)'
    }
  },

  // 12. MuscleTech Nitro-Tech Ripped
  {
    id: 'muscletech-nitrotech-ripped',
    slug: 'muscletech-nitro-tech-ripped-protein',
    name: 'MuscleTech Nitro-Tech Ripped Ultimate Protein',
    brand: 'MuscleTech',
    brandSlug: 'muscletech',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain'],
    shortDescription: '30g whey isolate & peptides enriched with CLA, L-Carnitine, and Green Tea extract.',
    fullDescription: 'MuscleTech Nitro-Tech Ripped combines highest-purity whey isolate and peptides with scientifically studied fat-burning ingredients like CLA and L-Carnitine L-Tartrate for defined muscle conditioning.',
    sellingPrice: 4299,
    mrp: 5499,
    discountPercentage: 22,
    rating: 4.7,
    reviewCount: 310,
    inStock: true,
    stockCount: 24,
    isBestseller: false,
    isFeatured: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop'
    ],
    flavors: [
      { id: 'french-vanilla', name: 'French Vanilla Swirl', inStock: true },
      { id: 'chocolate-fudge', name: 'Chocolate Fudge Brownie', inStock: true }
    ],
    weights: [
      { id: '4lbs', label: '4 lbs (1.81 kg)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 42 }
    ],
    highlights: [
      '30g Pure Whey Isolate & Peptides',
      '500mg L-Carnitine L-Tartrate',
      '250mg CLA & Green Tea Extract'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (43g)',
      servingsPerContainer: 42,
      proteinPerServing: '30g',
      caloriesPerServing: '160 kcal',
      carbsPerServing: '4g',
      fatsPerServing: '2.5g',
      addedSugar: '0g'
    },
    ingredients: ['Whey Peptides', 'Whey Protein Isolate', 'CLA Powder', 'L-Carnitine L-Tartrate'],
    usageInstructions: {
      recommendedDose: 'Mix 1 scoop with 240ml cold water.',
      directions: 'Shake thoroughly for 30 seconds.',
      bestTimeToTake: 'Between major meals and post-workout.',
      warningNote: 'Contains milk and soy.'
    },
    authenticity: {
      importer: 'Shri Balaji Overseas / MuscleTech India',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Verify code via MuscleTech verify app.',
      fssaiLicense: '10014011002019'
    }
  }
];

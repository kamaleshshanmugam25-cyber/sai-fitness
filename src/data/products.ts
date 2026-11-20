import type { Product } from '../types';
import { PRODUCT_IMAGES } from './productImages';

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
      PRODUCT_IMAGES.optimumNutrition.goldStandard100Whey.primary
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
      PRODUCT_IMAGES.dymatize.iso100Hydrolyzed.primary
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
      recommendedDose: '1 scoop (32g) dissolved in 150ml - 180ml of cold water or almond milk.',
      directions: 'Shake thoroughly for 20 seconds. Drink immediately post workout.',
      bestTimeToTake: 'Immediately after training or early morning fast-breaking.',
      warningNote: 'Contains milk and soy ingredients. Store in a cool, dry place.'
    },
    authenticity: {
      importer: 'Bright Performance Nutrition Pvt. Ltd. (Official Master Importer)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Authentic Hologram & TruSeal QR scratch code verification on cap.',
      fssaiLicense: '10014011002277'
    }
  },

  // 3. MuscleBlaze Biozyme Performance Whey
  {
    id: 'muscleblaze-biozyme-performance-whey',
    slug: 'muscleblaze-biozyme-performance-whey',
    name: 'MuscleBlaze Biozyme Performance Whey Protein',
    brand: 'MuscleBlaze',
    brandSlug: 'muscleblaze',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'recovery'],
    shortDescription: 'Clinically tested Enhanced Absorption Formula (EAF®) ensuring 50% higher protein absorption and 60% higher BCAA absorption.',
    fullDescription: 'MuscleBlaze Biozyme Performance Whey is clinically proven to lower stomach discomfort and maximize protein bioavailability. Formulated specifically to optimize amino uptake for Indian diets.',
    sellingPrice: 2899,
    mrp: 3699,
    discountPercentage: 22,
    rating: 4.8,
    reviewCount: 2150,
    inStock: true,
    stockCount: 65,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.muscleblaze.biozymePerformanceWhey.primary
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
      '25g Pure Protein per scoop (36g serving)',
      '11.75g EAAs & 5.51g BCAAs for fast muscle repair',
      'Clinically Tested Enhanced Absorption Formula (EAF®)',
      'Certified by Informed-Choice UK & Labdoor USA'
    ],
    nutritionalFacts: {
      servingSize: '1 Heaping Scoop (36g)',
      servingsPerContainer: 56,
      proteinPerServing: '25g',
      bcaaPerServing: '5.51g',
      eaasPerServing: '11.75g',
      caloriesPerServing: '136 kcal',
      carbsPerServing: '4.5g',
      fatsPerServing: '2.1g',
      addedSugar: '0g'
    },
    ingredients: [
      'Whey Protein Concentrate',
      'Whey Protein Isolate',
      'Cocoa Powder',
      'Digestive Enzyme Blend (Protease, Amylase, Lactase, Cellulase, Lipase)',
      'Sodium Chloride',
      'Sucralose'
    ],
    usageInstructions: {
      recommendedDose: '1 scoop (36g) in 200ml cold water.',
      directions: 'Shake for 15-20 seconds in a shaker until completely blended.',
      bestTimeToTake: 'Post-workout or between main meals.',
      warningNote: 'Contains milk derivatives. Not suitable for individuals with severe lactose intolerance.'
    },
    authenticity: {
      importer: 'HealthKart (Bright Life Care Pvt. Ltd.)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Unique 8-digit verification code under scratch label; verify via SMS to 8527732632 or website.',
      fssaiLicense: '10015064000576'
    }
  },

  // 4. MuscleBlaze Biozyme Gold 100% Whey
  {
    id: 'muscleblaze-biozyme-gold-whey',
    slug: 'muscleblaze-biozyme-gold-100-whey',
    name: 'MuscleBlaze Biozyme Gold 100% Whey Protein',
    brand: 'MuscleBlaze',
    brandSlug: 'muscleblaze',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'recovery'],
    shortDescription: 'Gold standard formula delivering 25g pure isolate-dominant protein, 5.51g BCAAs with patented EAF® for 50% higher absorption.',
    fullDescription: 'MuscleBlaze Biozyme Gold 100% Whey is crafted with premium imported whey isolate as primary source. Clinically tested on Indian bodies, it guarantees verified protein content, tested for zero heavy metal contamination and certified by Labdoor USA.',
    sellingPrice: 3699,
    mrp: 4699,
    discountPercentage: 21,
    rating: 4.8,
    reviewCount: 842,
    inStock: true,
    stockCount: 38,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.muscleblaze.biozymeGoldWhey.primary
    ],
    flavors: [
      { id: 'double-rich-chocolate', name: 'Double Rich Chocolate', inStock: true },
      { id: 'chocolate-hazelnut', name: 'Chocolate Hazelnut', inStock: true }
    ],
    weights: [
      { id: '1kg', label: '1 kg (2.2 lbs)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 30 },
      { id: '2kg', label: '2 kg (4.4 lbs)', priceMultiplier: 1.95, mrpMultiplier: 1.95, servingsCount: 60 }
    ],
    highlights: [
      '25g Pure Isolate-Dominant Protein per scoop',
      'Enhanced Absorption Formula (EAF®) for 50% Higher Protein Absorption',
      'Labdoor Certified for Protein Accuracy & Zero Contaminants',
      '5.5g BCAAs and 11.75g EAAs'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (33g)',
      servingsPerContainer: 60,
      proteinPerServing: '25g',
      bcaaPerServing: '5.51g',
      eaasPerServing: '11.75g',
      caloriesPerServing: '128 kcal',
      carbsPerServing: '3.2g',
      fatsPerServing: '1.4g',
      addedSugar: '0g'
    },
    ingredients: [
      'Whey Protein Isolate',
      'Whey Protein Concentrate',
      'Biozyme EAF Enzyme Matrix',
      'Cocoa Powder',
      'Natural Flavors',
      'Sucralose'
    ],
    usageInstructions: {
      recommendedDose: '1 scoop in 200ml cold water.',
      directions: 'Shake thoroughly for 20-30 seconds. Drink immediately.',
      bestTimeToTake: 'Post workout or between meals.',
      warningNote: 'Contains milk derivatives. Consult physician before use if pregnant.'
    },
    authenticity: {
      importer: 'HealthKart (Bright Life Care Pvt. Ltd.)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Unique scratch code with SMS and web verification via MuscleBlaze portal.',
      fssaiLicense: '10015064000576'
    }
  },

  // 5. MuscleBlaze Biozyme Iso-Zero
  {
    id: 'muscleblaze-biozyme-isozero',
    slug: 'muscleblaze-biozyme-iso-zero-whey-isolate',
    name: 'MuscleBlaze Biozyme Iso-Zero Low Carb 100% Pure Whey Isolate',
    brand: 'MuscleBlaze',
    brandSlug: 'muscleblaze',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'recovery'],
    shortDescription: 'Zero lactose, ultra-pure whey protein isolate with 27g protein, zero added sugar, and clinically tested Enhanced Absorption Formula.',
    fullDescription: 'MuscleBlaze Biozyme Iso-Zero is formulated for elite athletes and cutting bodybuilders who demand maximum protein purity with virtually zero carbs and zero fats. Powered by EAF® for superior amino uptake and zero bloating.',
    sellingPrice: 4299,
    mrp: 5499,
    discountPercentage: 22,
    rating: 4.9,
    reviewCount: 512,
    inStock: true,
    stockCount: 25,
    isBestseller: false,
    isFeatured: true,
    isNewArrival: true,
    images: [
      PRODUCT_IMAGES.muscleblaze.biozymeIsozero.primary
    ],
    flavors: [
      { id: 'ice-cream-chocolate', name: 'Low Carb Ice Cream Chocolate', inStock: true },
      { id: 'cookies-cream', name: 'Cookies & Cream', inStock: true }
    ],
    weights: [
      { id: '1kg', label: '1 kg (2.2 lbs)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 30 },
      { id: '2kg', label: '2 kg (4.4 lbs)', priceMultiplier: 1.95, mrpMultiplier: 1.95, servingsCount: 60 }
    ],
    highlights: [
      '27g Pure Whey Protein Isolate per scoop',
      'Zero Lactose Formulation — Ideal for Sensitive Digestion',
      'Less than 1g Carbohydrates and Zero Sugar',
      'Clinically Tested Enhanced Absorption Formula (EAF®)'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (34g)',
      servingsPerContainer: 60,
      proteinPerServing: '27g',
      bcaaPerServing: '5.9g',
      eaasPerServing: '12.6g',
      caloriesPerServing: '122 kcal',
      carbsPerServing: '0.8g',
      fatsPerServing: '0.6g',
      addedSugar: '0g'
    },
    ingredients: [
      'Micro-Filtered Whey Protein Isolate',
      'Cocoa Powder',
      'Biozyme EAF Protease Complex',
      'Natural & Nature Identical Flavors',
      'Sucralose'
    ],
    usageInstructions: {
      recommendedDose: '1 scoop (34g) in 180ml - 220ml of chilled water.',
      directions: 'Mix for 15-20 seconds in a shaker. Enjoy crisp, smooth texture.',
      bestTimeToTake: 'Immediately post-workout or during strict contest prep.',
      warningNote: 'Lactose free. Contains milk protein.'
    },
    authenticity: {
      importer: 'HealthKart (Bright Life Care Pvt. Ltd.)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Authentic MB seal with 8-character scratch verification code.',
      fssaiLicense: '10015064000576'
    }
  },

  // 6. GNC Pro Performance 100% Whey
  {
    id: 'gnc-pro-performance-100-whey',
    slug: 'gnc-pro-performance-100-whey-protein',
    name: 'GNC Pro Performance 100% Whey Protein',
    brand: 'GNC Live Well',
    brandSlug: 'gnc',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'daily-nutrition'],
    shortDescription: 'Classic American formulation delivering 24g of high-quality whey protein, 5.5g BCAAs, and digestive enzymes for rapid lean muscle repair.',
    fullDescription: 'GNC Pro Performance 100% Whey Protein delivers an ultra-macronutrient protein formula with comprehensive amino acids. Instantized for easy mixing and tested banned-substance free by Informed Choice.',
    sellingPrice: 2999,
    mrp: 3999,
    discountPercentage: 25,
    rating: 4.7,
    reviewCount: 730,
    inStock: true,
    stockCount: 34,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.gnc.proPerformance100Whey.primary
    ],
    flavors: [
      { id: 'chocolate-supreme', name: 'Chocolate Supreme', inStock: true },
      { id: 'mawa-kulfi', name: 'Mawa Kulfi', inStock: true },
      { id: 'vanilla-cream', name: 'Vanilla Cream', inStock: true }
    ],
    weights: [
      { id: '2lbs', label: '2 lbs (907g)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 26 },
      { id: '4lbs', label: '4 lbs (1.81kg)', priceMultiplier: 1.92, mrpMultiplier: 1.9, servingsCount: 52 }
    ],
    highlights: [
      '24g Whey Protein Blend (Concentrate + Isolate)',
      '5.5g Naturally Occurring BCAAs per scoop',
      'Enriched with Digestive Enzymes for Smooth Digestion',
      'Informed Choice Certified — Free of Banned Substances'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (35g)',
      servingsPerContainer: 52,
      proteinPerServing: '24g',
      bcaaPerServing: '5.5g',
      caloriesPerServing: '135 kcal',
      carbsPerServing: '4g',
      fatsPerServing: '2g',
      addedSugar: '0g'
    },
    ingredients: [
      '100% Whey Protein Blend (Whey Protein Concentrate, Whey Protein Isolate)',
      'Cocoa Powder',
      'Digestive Enzyme Complex',
      'Natural and Artificial Flavors',
      'Sucralose'
    ],
    usageInstructions: {
      recommendedDose: '1 scoop in 180ml of water or low-fat milk.',
      directions: 'Shake well for 20 seconds. Take post workout or mid morning.',
      bestTimeToTake: 'Post-workout or as a daily dietary protein supplement.',
      warningNote: 'Contains milk derivatives. Store in a cool, dry place.'
    },
    authenticity: {
      importer: 'Guardian Healthcare Services Pvt. Ltd. (Exclusive GNC India Master Importer)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Verified Guardian hologram seal with online batch code verification.',
      fssaiLicense: '10016011003859'
    }
  },

  // 7. GNC AMP Pure Isolate
  {
    id: 'gnc-amp-pure-isolate',
    slug: 'gnc-amp-pure-isolate-whey-protein',
    name: 'GNC AMP Pure Isolate Micro-Filtered Whey Protein Isolate',
    brand: 'GNC Live Well',
    brandSlug: 'gnc',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'recovery'],
    shortDescription: 'Fast-absorbing micro-filtered whey protein isolate delivering 25g protein, 5g BCAAs, and 1g creatine with virtually zero fat and sugar.',
    fullDescription: 'GNC Advanced Muscle Performance (AMP) Pure Isolate undergoes a multi-step microfiltration process ensuring premium quality, fast gastric emptying, and immediate amino acid surge to recovering muscles.',
    sellingPrice: 4499,
    mrp: 5999,
    discountPercentage: 25,
    rating: 4.8,
    reviewCount: 410,
    inStock: true,
    stockCount: 22,
    isBestseller: false,
    isFeatured: true,
    isNewArrival: true,
    images: [
      PRODUCT_IMAGES.gnc.ampPureIsolate.primary
    ],
    flavors: [
      { id: 'cookies-cream', name: 'Cookies & Cream', inStock: true },
      { id: 'chocolate-frosting', name: 'Chocolate Frosting', inStock: true }
    ],
    weights: [
      { id: '2lbs', label: '2 lbs (907g)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 28 },
      { id: '4.4lbs', label: '4.4 lbs (2kg)', priceMultiplier: 1.95, mrpMultiplier: 1.95, servingsCount: 62 }
    ],
    highlights: [
      '25g Micro-Filtered Pure Whey Protein Isolate',
      '5g BCAAs and 1g Micronized Creatine per serving',
      'Fast Absorption Rate for Immediate Muscle Repair',
      'Low Carbohydrates and Zero Added Sugars'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (32g)',
      servingsPerContainer: 62,
      proteinPerServing: '25g',
      bcaaPerServing: '5g',
      caloriesPerServing: '120 kcal',
      carbsPerServing: '2g',
      fatsPerServing: '1g',
      addedSugar: '0g',
      creatinePerServing: '1g'
    },
    ingredients: [
      'Whey Protein Isolate',
      'Creatine Monohydrate',
      'Natural & Artificial Flavors',
      'Lecithin',
      'Sucralose'
    ],
    usageInstructions: {
      recommendedDose: '1 scoop (32g) in 180ml cold water.',
      directions: 'Shake for 20 seconds. Drink immediately post-exercise.',
      bestTimeToTake: 'Immediately post-workout or first thing upon waking.',
      warningNote: 'Contains milk and soy ingredients.'
    },
    authenticity: {
      importer: 'Guardian Healthcare Services Pvt. Ltd. (Exclusive GNC India)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Guardian verified tamper-evident security seal with authentication QR.',
      fssaiLicense: '10016011003859'
    }
  },

  // 8. GNC AMP Gold Series 100% Whey
  {
    id: 'gnc-amp-gold-series-whey',
    slug: 'gnc-amp-gold-series-100-whey-protein',
    name: 'GNC AMP Gold Series 100% Whey Advanced Protein',
    brand: 'GNC Live Well',
    brandSlug: 'gnc',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'recovery'],
    shortDescription: 'Premium blend of whey isolate, concentrate and hydrolysate with added DigeZyme® digestive enzymes delivering 24g protein and 5.5g BCAAs.',
    fullDescription: 'GNC AMP Gold Series 100% Whey Advanced is engineered for maximum biological value. Combines fast and ultra-fast absorbing protein fractions with DigeZyme® to prevent bloating and maximize muscle synthesis.',
    sellingPrice: 3499,
    mrp: 4599,
    discountPercentage: 24,
    rating: 4.8,
    reviewCount: 620,
    inStock: true,
    stockCount: 29,
    isBestseller: true,
    isFeatured: false,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.gnc.ampGoldSeriesWhey.primary
    ],
    flavors: [
      { id: 'double-rich-chocolate', name: 'Double Rich Chocolate', inStock: true },
      { id: 'strawberry-shake', name: 'Strawberry Shake', inStock: true }
    ],
    weights: [
      { id: '2lbs', label: '2 lbs (907g)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 29 },
      { id: '4.4lbs', label: '4.4 lbs (2kg)', priceMultiplier: 1.95, mrpMultiplier: 1.95, servingsCount: 64 }
    ],
    highlights: [
      '24g Protein with Whey Isolate as Main Ingredient',
      '5.5g BCAAs + 4g Glutamine for Peak Muscle Recovery',
      'Enhanced with DigeZyme® Multi-Enzyme Complex',
      'Ultra-Filtered for Superior Solubility'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (31g)',
      servingsPerContainer: 64,
      proteinPerServing: '24g',
      bcaaPerServing: '5.5g',
      caloriesPerServing: '125 kcal',
      carbsPerServing: '3g',
      fatsPerServing: '1.5g',
      addedSugar: '0g'
    },
    ingredients: [
      'Whey Protein Isolate',
      'Whey Protein Concentrate',
      'Whey Peptides',
      'DigeZyme Enzyme Matrix',
      'Cocoa Powder',
      'Sucralose'
    ],
    usageInstructions: {
      recommendedDose: '1 scoop in 200ml cold water.',
      directions: 'Mix for 20 seconds. Take 1-2 servings daily.',
      bestTimeToTake: 'Post-workout and between meals.',
      warningNote: 'Contains milk and soy derivatives.'
    },
    authenticity: {
      importer: 'Guardian Healthcare Services Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Authentic Guardian hologram with verifiable batch number.',
      fssaiLicense: '10016011003859'
    }
  },

  // 9. MyProtein Impact Whey Protein
  {
    id: 'myprotein-impact-whey-protein',
    slug: 'myprotein-impact-whey-protein-pouch',
    name: 'MyProtein Impact Whey Protein Premium Concentrate',
    brand: 'MyProtein',
    brandSlug: 'myprotein',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'daily-nutrition'],
    shortDescription: 'Europe’s #1 selling whey protein powder delivering 21g of high-grade protein from vegetarian sweet cheese whey with 4.5g BCAAs per scoop.',
    fullDescription: 'Created with premium, grass-fed cow’s milk, MyProtein Impact Whey Protein provides 21g of protein per serving. Ranked Grade A by independent tester Labdoor for quality and value, it offers superior mixability and authentic taste.',
    sellingPrice: 2499,
    mrp: 3299,
    discountPercentage: 24,
    rating: 4.7,
    reviewCount: 1150,
    inStock: true,
    stockCount: 40,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.myprotein.impactWheyProtein.primary
    ],
    flavors: [
      { id: 'chocolate-smooth', name: 'Chocolate Smooth', inStock: true },
      { id: 'cookies-cream', name: 'Cookies & Cream', inStock: true },
      { id: 'salted-caramel', name: 'Salted Caramel', inStock: true }
    ],
    weights: [
      { id: '1kg', label: '1 kg (2.2 lbs)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 40 },
      { id: '2.5kg', label: '2.5 kg (5.5 lbs)', priceMultiplier: 2.2, mrpMultiplier: 2.15, servingsCount: 100 }
    ],
    highlights: [
      '21g Premium Protein per 25g serving (80%+ Protein Content)',
      '4.5g Naturally Occurring BCAAs and 3.6g Glutamine',
      'Ranked Grade A by Labdoor for Authenticity and Value',
      'Europe’s #1 Sports Nutrition Brand'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (25g)',
      servingsPerContainer: 100,
      proteinPerServing: '21g',
      bcaaPerServing: '4.5g',
      caloriesPerServing: '103 kcal',
      carbsPerServing: '1.9g',
      fatsPerServing: '1.3g',
      addedSugar: '0g'
    },
    ingredients: [
      'Whey Protein Concentrate (Milk) (96%)',
      'Emulsifier (Soy Lecithin)',
      'Flavoring',
      'Sweetener (Sucralose)'
    ],
    usageInstructions: {
      recommendedDose: '1 large scoop (25g) in 150-250ml water or milk.',
      directions: 'Consume 30 minutes before and/or after your workout.',
      bestTimeToTake: 'Post-workout or as a daily protein boost.',
      warningNote: 'Contains milk and soy. Suitable for vegetarians.'
    },
    authenticity: {
      importer: 'The Hut Group India / Paradise Nutrition Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Original importer security strip with batch verification.',
      fssaiLicense: '10019022009841'
    }
  },

  // 10. Optimum Nutrition Micronized Creatine
  {
    id: 'on-micronized-creatine-powder',
    slug: 'optimum-nutrition-micronized-creatine-powder',
    name: 'Optimum Nutrition Micronized Creatine Monohydrate',
    brand: 'Optimum Nutrition',
    brandSlug: 'optimum-nutrition',
    category: 'creatine',
    categoryName: 'Creatine',
    goals: ['strength-performance', 'muscle-gain'],
    shortDescription: '100% pure micronized creatine monohydrate providing 3g of pure creatine per serving to replenish ATP cellular energy stores.',
    fullDescription: 'Optimum Nutrition Micronized Creatine Powder is manufactured with Creapure standards. Micronized to stay suspended in liquid longer and absorb easily without gritty residue.',
    sellingPrice: 1199,
    mrp: 1499,
    discountPercentage: 20,
    rating: 4.8,
    reviewCount: 940,
    inStock: true,
    stockCount: 52,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.optimumNutrition.micronizedCreatine.primary
    ],
    flavors: [
      { id: 'unflavoured', name: 'Unflavoured', inStock: true }
    ],
    weights: [
      { id: '250g', label: '250 g (8.8 oz)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 83 },
      { id: '400g', label: '400 g (14.1 oz)', priceMultiplier: 1.5, mrpMultiplier: 1.45, servingsCount: 133 }
    ],
    highlights: [
      '3g Pure Micronized Creatine Monohydrate per serving',
      'Ultra-fine powder for effortless mixability',
      'Boosts strength, power, and sprint speed',
      'Zero calories, zero sugars, unflavoured versatility'
    ],
    nutritionalFacts: {
      servingSize: '1 Rounded Scoop (3g)',
      servingsPerContainer: 83,
      proteinPerServing: '0g',
      caloriesPerServing: '0 kcal',
      carbsPerServing: '0g',
      fatsPerServing: '0g',
      addedSugar: '0g',
      creatinePerServing: '3g'
    },
    ingredients: [
      '100% Pure Micronized Creatine Monohydrate'
    ],
    usageInstructions: {
      recommendedDose: '1 level scoop (3g) mixed with 240ml of cold water or your favourite sports beverage.',
      directions: 'Stir or shake until dissolved. Drink immediately.',
      bestTimeToTake: 'Post-workout with a carbohydrate/protein shake, or first thing in the morning.',
      warningNote: 'Maintain adequate hydration (3-4 litres of water daily) during creatine supplementation.'
    },
    authenticity: {
      importer: 'Glanbia Performance Nutrition India Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Authenticate genuine jar using 6-digit scratch code on lid.',
      fssaiLicense: '10017011004390'
    }
  },

  // 11. MuscleBlaze CreAMP Creatine Monohydrate
  {
    id: 'muscleblaze-creamp-creatine',
    slug: 'muscleblaze-creamp-creatine-monohydrate',
    name: 'MuscleBlaze CreAMP Creatine Monohydrate (Creapure®)',
    brand: 'MuscleBlaze',
    brandSlug: 'muscleblaze',
    category: 'creatine',
    categoryName: 'Creatine',
    goals: ['strength-performance', 'muscle-gain'],
    shortDescription: 'Powered by MB CreAMP formulation to enhance intramuscular phosphocreatine resynthesis and delay muscle fatigue.',
    fullDescription: 'MuscleBlaze CreAMP Creatine Monohydrate is tested by Labdoor USA for purity and heavy metal safety. Boosts cellular hydration for fuller muscle bellies and increased max strength reps.',
    sellingPrice: 899,
    mrp: 1199,
    discountPercentage: 25,
    rating: 4.7,
    reviewCount: 680,
    inStock: true,
    stockCount: 44,
    isBestseller: false,
    isFeatured: false,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.muscleblaze.creampCreatine.primary
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
      '3g Ultra-Micronized Creatine per serving',
      'Labdoor USA Certified for Heavy Metal Safety',
      'Accelerates ATP Regeneration between heavy sets',
      'Zero fillers, 100% pure formula'
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
    ingredients: [
      'Pure Micronized Creatine Monohydrate'
    ],
    usageInstructions: {
      recommendedDose: 'Mix 1 scoop (3g) in 200ml cold water.',
      directions: 'Consume directly after workouts with fast carbohydrates.',
      bestTimeToTake: 'Post-workout.',
      warningNote: 'Drink plenty of water throughout the day.'
    },
    authenticity: {
      importer: 'HealthKart (Bright Life Care Pvt. Ltd.)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Verify with 8-character code sent via SMS to 8527732632.',
      fssaiLicense: '10015064000576'
    }
  },

  // 12. Optimum Nutrition Serious Mass
  {
    id: 'on-serious-mass-gainer',
    slug: 'optimum-nutrition-serious-mass-weight-gainer',
    name: 'Optimum Nutrition Serious Mass High Calorie Weight Gainer',
    brand: 'Optimum Nutrition',
    brandSlug: 'optimum-nutrition',
    category: 'mass-gainers',
    categoryName: 'Mass Gainers',
    goals: ['muscle-gain', 'daily-nutrition'],
    shortDescription: 'Ultimate mass building formula providing 1,250 calories and 50g of blended protein per serving for serious weight gain.',
    fullDescription: 'Optimum Nutrition Serious Mass is the definitive weight-gain formula. Packed with 1,250 calories, 50 grams of protein, and over 250 grams of carbohydrates with zero added sugar per 2-scoop serving.',
    sellingPrice: 2299,
    mrp: 2999,
    discountPercentage: 23,
    rating: 4.6,
    reviewCount: 820,
    inStock: true,
    stockCount: 30,
    isBestseller: true,
    isFeatured: true,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.optimumNutrition.seriousMass.primary
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
      '1,250 Calories per serving (in water) / 1,640 Calories (in milk)',
      '50g Blended Protein (Whey, Casein, Egg)',
      '252g Carbohydrates to support high-intensity training fuel',
      '25 Essential Vitamins & Minerals plus Creatine & Glutamine'
    ],
    nutritionalFacts: {
      servingSize: '2 Heaping Scoops (334g)',
      servingsPerContainer: 8,
      proteinPerServing: '50g',
      caloriesPerServing: '1250 kcal',
      carbsPerServing: '252g',
      fatsPerServing: '4.5g',
      addedSugar: '0g',
      creatinePerServing: '1g',
      micronutrients: [
        { label: 'Vitamin C', value: '60mg', percentDailyValue: '100%' },
        { label: 'Calcium', value: '590mg', percentDailyValue: '59%' },
        { label: 'Iron', value: '8mg', percentDailyValue: '44%' }
      ]
    },
    ingredients: [
      'Maltodextrin',
      'Protein Blend (Whey Protein Concentrate, Calcium Caseinate, Egg Albumin)',
      'Cocoa Powder',
      'Creatine Monohydrate',
      'L-Glutamine',
      'Vitamin and Mineral Blend'
    ],
    usageInstructions: {
      recommendedDose: 'Mix 2 heaping scoops in 710ml of cold water or milk.',
      directions: 'Blend for 45-60 seconds in an electric blender for a rich shake.',
      bestTimeToTake: 'Between meals, immediately post-workout, or before bed.',
      warningNote: 'Contains egg, milk, and soy derivatives. High calorie formula.'
    },
    authenticity: {
      importer: 'Glanbia Performance Nutrition India Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Inspect batch code stamped on the neck and authenticate via official app.',
      fssaiLicense: '10017011004390'
    }
  },

  // 13. Optimum Nutrition Gold Standard Pre-Workout
  {
    id: 'on-gold-standard-pre-workout',
    slug: 'optimum-nutrition-gold-standard-pre-workout',
    name: 'Optimum Nutrition Gold Standard Pre-Workout Powder',
    brand: 'Optimum Nutrition',
    brandSlug: 'optimum-nutrition',
    category: 'pre-workout',
    categoryName: 'Pre-Workout',
    goals: ['strength-performance', 'endurance'],
    shortDescription: 'Unleashes amplified energy, intense focus, and enhanced endurance with 175mg of caffeine from natural sources and 1.5g beta-alanine.',
    fullDescription: 'Optimum Nutrition Gold Standard Pre-Workout raises the bar by giving you only what you need to achieve your true strength. Crafted with premium banned substance-tested ingredients.',
    sellingPrice: 1999,
    mrp: 2499,
    discountPercentage: 20,
    rating: 4.7,
    reviewCount: 540,
    inStock: true,
    stockCount: 26,
    isBestseller: false,
    isFeatured: true,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.optimumNutrition.goldStandardPreWorkout.primary
    ],
    flavors: [
      { id: 'fruit-punch', name: 'Fruit Punch', inStock: true },
      { id: 'blue-raspberry', name: 'Blue Raspberry', inStock: true }
    ],
    weights: [
      { id: '30serv', label: '30 Servings (300g)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 30 }
    ],
    highlights: [
      '175mg Caffeine from Natural Sources (Tea and Coffee Bean)',
      '1.5g Beta-Alanine (CarnoSyn®) for Muscular Endurance',
      '3g Creatine Monohydrate for Explosive Power Output',
      'Informed-Choice Certified — Banned Substance Tested'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (10g)',
      servingsPerContainer: 30,
      proteinPerServing: '0g',
      caloriesPerServing: '25 kcal',
      carbsPerServing: '1g',
      fatsPerServing: '0g',
      addedSugar: '0g',
      caffeinePerServing: '175mg',
      creatinePerServing: '3g'
    },
    ingredients: [
      'Creatine Monohydrate',
      'Beta-Alanine',
      'L-Citrulline Malate',
      'Natural & Artificial Flavors',
      'Citric Acid',
      'Caffeine (from Tea and Coffee Bean)',
      'Sucralose'
    ],
    usageInstructions: {
      recommendedDose: 'Mix 1 level scoop (10g) in 180ml - 240ml of cold water.',
      directions: 'Consume 20-30 minutes before training.',
      bestTimeToTake: 'Pre-workout only.',
      warningNote: 'Contains 175mg caffeine. Do not consume within 4 hours of bedtime. Do not exceed 1 scoop in 24 hours.'
    },
    authenticity: {
      importer: 'Glanbia Performance Nutrition India Pvt. Ltd.',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Scratch-to-reveal authentication code located on tub lid.',
      fssaiLicense: '10017011004390'
    }
  },

  // 14. Scivation XTEND BCAA
  {
    id: 'scivation-xtend-original-bcaa',
    slug: 'scivation-xtend-original-7g-bcaa',
    name: 'Scivation XTEND Original 7g BCAA Electrolyte Powder',
    brand: 'Scivation',
    brandSlug: 'scivation',
    category: 'bcaa-amino-acids',
    categoryName: 'BCAA & Amino Acids',
    goals: ['recovery', 'endurance'],
    shortDescription: 'World’s #1 BCAA brand delivering 7g of 2:1:1 BCAAs, 2.5g L-Glutamine, and hydrating electrolytes with zero sugar or calories.',
    fullDescription: 'Scivation XTEND is the original, category-defining intra-workout recovery powder. Clinically shown to support muscle protein synthesis and promote hydration during demanding physical exertion.',
    sellingPrice: 1899,
    mrp: 2399,
    discountPercentage: 21,
    rating: 4.8,
    reviewCount: 710,
    inStock: true,
    stockCount: 35,
    isBestseller: true,
    isFeatured: false,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.other.scivationXtendBcaa.primary
    ],
    flavors: [
      { id: 'blue-raspberry', name: 'Blue Raspberry Ice', inStock: true },
      { id: 'watermelon-explosion', name: 'Watermelon Explosion', inStock: true }
    ],
    weights: [
      { id: '30serv', label: '30 Servings (420g)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 30 }
    ],
    highlights: [
      '7g of Clinically Dosed 2:1:1 Branched Chain Amino Acids',
      '2.5g L-Glutamine & 1g Citrulline Malate',
      'Electrolyte Blend for Advanced Intra-Workout Hydration',
      'Zero Sugars, Zero Carbohydrates, Zero Calories'
    ],
    nutritionalFacts: {
      servingSize: '1 Level Scoop (14g)',
      servingsPerContainer: 30,
      proteinPerServing: '0g',
      bcaaPerServing: '7g',
      caloriesPerServing: '0 kcal',
      carbsPerServing: '0g',
      fatsPerServing: '0g',
      addedSugar: '0g',
      micronutrients: [
        { label: 'Sodium', value: '220mg', percentDailyValue: '10%' },
        { label: 'Potassium', value: '180mg', percentDailyValue: '4%' }
      ]
    },
    ingredients: [
      'L-Leucine, L-Isoleucine, L-Valine',
      'L-Glutamine',
      'Electrolyte Blend (Sodium Citrate, Potassium Chloride, Sodium Chloride)',
      'Citrulline Malate',
      'Citric Acid, Malic Acid',
      'Natural & Artificial Flavor',
      'Sucralose'
    ],
    usageInstructions: {
      recommendedDose: 'Mix 1 scoop (14g) in 300ml - 400ml of cold water.',
      directions: 'Sip continuously during and immediately after workout.',
      bestTimeToTake: 'Intra-workout or throughout non-training recovery days.',
      warningNote: 'Store in a cool dry place. Keep lid tightly closed.'
    },
    authenticity: {
      importer: 'Muscle House India Pvt. Ltd. (Official Master Importer)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Authenticate with unique importer scratch code on tub shoulder.',
      fssaiLicense: '10018011005221'
    }
  },

  // 15. GNC Mega Men One Daily
  {
    id: 'gnc-mega-men-one-daily',
    slug: 'gnc-mega-men-one-daily-multivitamin',
    name: 'GNC Mega Men One Daily Multivitamin & Mineral Caplets',
    brand: 'GNC Live Well',
    brandSlug: 'gnc',
    category: 'vitamins-health',
    categoryName: 'Vitamins & Minerals',
    goals: ['daily-nutrition'],
    shortDescription: 'Customized micronutrition for active men with 37 essential nutrients, muscle function enhancers, and antioxidant support.',
    fullDescription: 'GNC Mega Men One Daily provides 37 nutrients to support men’s wellness, heart health, immune defense, and energetic vitality. Includes B-complex vitamins for cellular energy production.',
    sellingPrice: 1299,
    mrp: 1699,
    discountPercentage: 24,
    rating: 4.6,
    reviewCount: 390,
    inStock: true,
    stockCount: 45,
    isBestseller: false,
    isFeatured: false,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.gnc.megaMenOneDaily.primary
    ],
    flavors: [
      { id: 'tablets', name: 'Coated Caplets', inStock: true }
    ],
    weights: [
      { id: '60tabs', label: '60 Caplets (2 Month Supply)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 60 }
    ],
    highlights: [
      '37 Essential Nutrients Formulated for Active Male Physiology',
      'High-Potency B-Vitamin Complex for Athletic Energy',
      'Antioxidant Blend with Lutein, Zeaxanthin & Lycopene',
      'Supports Immune Health, Prostate & Heart Function'
    ],
    nutritionalFacts: {
      servingSize: '1 Caplet',
      servingsPerContainer: 60,
      proteinPerServing: '0g',
      caloriesPerServing: '0 kcal',
      carbsPerServing: '0g',
      fatsPerServing: '0g',
      addedSugar: '0g',
      micronutrients: [
        { label: 'Vitamin A', value: '1050mcg', percentDailyValue: '117%' },
        { label: 'Vitamin C', value: '100mg', percentDailyValue: '111%' },
        { label: 'Vitamin D3', value: '30mcg (1200 IU)', percentDailyValue: '150%' },
        { label: 'Zinc', value: '25mg', percentDailyValue: '227%' }
      ]
    },
    ingredients: [
      'Vitamin & Mineral Premix',
      'Microcrystalline Cellulose',
      'Stearic Acid',
      'Magnesium Stearate',
      'Lycopene, Lutein Extract'
    ],
    usageInstructions: {
      recommendedDose: 'Take 1 caplet daily with water.',
      directions: 'Consume with food, preferably breakfast or lunch.',
      bestTimeToTake: 'Morning with your first meal.',
      warningNote: 'Consult physician before use if you are taking blood thinners or prescription medications.'
    },
    authenticity: {
      importer: 'Guardian Healthcare Services Pvt. Ltd. (Exclusive GNC India)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Original tamper-proof safety seal under lid with verifiable lot code.',
      fssaiLicense: '10016011003859'
    }
  },

  // 16. MuscleTech NitroTech Ripped
  {
    id: 'muscletech-nitrotech-ripped',
    slug: 'muscletech-nitrotech-ripped-whey-isolate',
    name: 'MuscleTech Nitro-Tech Ripped Lean Whey Protein Isolate',
    brand: 'MuscleTech',
    brandSlug: 'muscletech',
    category: 'whey-protein',
    categoryName: 'Whey Protein',
    goals: ['muscle-gain', 'recovery'],
    shortDescription: 'Ultimate protein + weight loss formula delivering 30g whey peptides & isolate with C. canephora robusta for lean muscle definition.',
    fullDescription: 'MuscleTech Nitro-Tech Ripped delivers 30 grams of pure whey peptides and isolate, alongside a scientifically tested key weight loss driver. Backed by rigorous research to build lean muscle while trimming body fat.',
    sellingPrice: 3899,
    mrp: 4999,
    discountPercentage: 22,
    rating: 4.8,
    reviewCount: 460,
    inStock: true,
    stockCount: 19,
    isBestseller: false,
    isFeatured: true,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.other.muscletechNitrotechRipped.primary
    ],
    flavors: [
      { id: 'french-vanilla', name: 'French Vanilla Swirl', inStock: true },
      { id: 'chocolate-fudge', name: 'Chocolate Fudge Brownie', inStock: true }
    ],
    weights: [
      { id: '4lbs', label: '4 lbs (1.81 kg)', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 42 }
    ],
    highlights: [
      '30g Pure Whey Peptides & Whey Isolate per scoop',
      '500mg L-Carnitine L-Tartrate & 250mg CLA',
      'Scientifically Tested Weight Loss Driver (C. Canephora Robusta)',
      'Ultra-Clean Formula with Low Carbs and Fats'
    ],
    nutritionalFacts: {
      servingSize: '1 Scoop (43g)',
      servingsPerContainer: 42,
      proteinPerServing: '30g',
      caloriesPerServing: '160 kcal',
      carbsPerServing: '3g',
      fatsPerServing: '2.5g',
      addedSugar: '0g'
    },
    ingredients: [
      'Whey Peptides, Whey Protein Isolate',
      'L-Carnitine L-Tartrate, Green Coffee Bean Extract (C. Canephora Robusta)',
      'CLA (Conjugated Linoleic Acid)',
      'Cocoa Powder',
      'Natural & Artificial Flavors',
      'Sucralose'
    ],
    usageInstructions: {
      recommendedDose: 'Mix 1 serving (1 scoop) with 240ml of cold water or skim milk.',
      directions: 'Consume twice daily, 30 to 60 minutes before your two largest meals.',
      bestTimeToTake: 'Pre-workout and between meals.',
      warningNote: 'Contains milk and soy ingredients. Do not exceed 2 servings in a 24-hour period.'
    },
    authenticity: {
      importer: 'Shri Balaji Overseas / MuscleTech Authorized Importer',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Verify through official MuscleTech Verify app with security QR label.',
      fssaiLicense: '10018064001402'
    }
  },

  // 17. MuscleBlaze 30g Hi-Protein Bar
  {
    id: 'mb-hi-protein-bar-30g',
    slug: 'muscleblaze-30g-hi-protein-bar-box',
    name: 'MuscleBlaze 30g Hi-Protein Bar (Box of 6)',
    brand: 'MuscleBlaze',
    brandSlug: 'muscleblaze',
    category: 'protein-bars',
    categoryName: 'Protein Bars',
    goals: ['daily-nutrition', 'recovery'],
    shortDescription: 'Massive 30g protein punch in an indulgent multi-layer chocolate bar with zero added sugar and 5.5g BCAAs.',
    fullDescription: 'MuscleBlaze 30g Hi-Protein Bar is crafted for intense training schedules where convenient high-protein nutrition is non-negotiable. Loaded with 30 grams of premium protein blend and dietary fiber.',
    sellingPrice: 949,
    mrp: 1199,
    discountPercentage: 21,
    rating: 4.7,
    reviewCount: 310,
    inStock: true,
    stockCount: 50,
    isBestseller: false,
    isFeatured: false,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.muscleblaze.hiProteinBar.primary
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
      '30g High Quality Protein per 75g Bar',
      '5.5g BCAAs for Muscle Repair on the Go',
      'Zero Added Sugar & High Dietary Fiber',
      'Crispy, Decadent Multi-Layer Chocolate Texture'
    ],
    nutritionalFacts: {
      servingSize: '1 Bar (75g)',
      servingsPerContainer: 6,
      proteinPerServing: '30g',
      bcaaPerServing: '5.5g',
      caloriesPerServing: '278 kcal',
      carbsPerServing: '22g',
      fatsPerServing: '7g',
      addedSugar: '0g'
    },
    ingredients: [
      'Protein Blend (Whey Protein Isolate, Calcium Caseinate, Soy Protein Isolate)',
      'Dark Chocolate Coating',
      'Dietary Fiber (Oligofructose)',
      'Almond Nibs',
      'Humectant (Glycerol)'
    ],
    usageInstructions: {
      recommendedDose: '1 bar as a convenient snack or meal replacement.',
      directions: 'Ready to eat immediately upon opening.',
      bestTimeToTake: 'Mid-afternoon snack, pre-workout energy, or post-workout fuel.',
      warningNote: 'Contains milk, soy, and tree nuts (almonds).'
    },
    authenticity: {
      importer: 'HealthKart (Bright Life Care Pvt. Ltd.)',
      scratchCodeAvailable: true,
      batchTestedNotice: 'Official sealed box with batch number and expiration date.',
      fssaiLicense: '10015064000576'
    }
  },

  // 18. Sai Fitness Pro Stainless Steel Shaker
  {
    id: 'sai-fitness-pro-stainless-shaker',
    slug: 'sai-fitness-pro-stainless-steel-shaker-750ml',
    name: 'Sai Fitness Pro Heavy Duty Stainless Steel Shaker (750ml)',
    brand: 'Sai Fitness Pro',
    brandSlug: 'fitness-accessories',
    category: 'fitness-accessories',
    categoryName: 'Fitness Accessories',
    goals: ['daily-nutrition'],
    shortDescription: 'Double-wall food-grade 304 stainless steel shaker bottle with leak-proof screw cap, volume markings, and silent blending whisk.',
    fullDescription: 'Ditch smelly plastic shakers forever. The Sai Fitness Pro Heavy Duty Stainless Steel Shaker is engineered from kitchen-grade 304 stainless steel that prevents odor absorption and keeps beverages icy cold.',
    sellingPrice: 799,
    mrp: 999,
    discountPercentage: 20,
    rating: 4.9,
    reviewCount: 420,
    inStock: true,
    stockCount: 60,
    isBestseller: true,
    isFeatured: false,
    isNewArrival: false,
    images: [
      PRODUCT_IMAGES.other.saiProStainlessShaker.primary
    ],
    flavors: [
      { id: 'matte-black', name: 'Charcoal Matte Black', inStock: true },
      { id: 'brushed-steel', name: 'Brushed Steel Silver', inStock: true }
    ],
    weights: [
      { id: '750ml', label: '750 ml Capacity', priceMultiplier: 1.0, mrpMultiplier: 1.0, servingsCount: 1 }
    ],
    highlights: [
      'Food-Grade 304 Stainless Steel — 100% Odor Resistant & BPA Free',
      'Precision Built-in Measurement Markings (ml & oz)',
      'Leak-Proof Screw Lid with Silicone Seal Ring',
      'Ergonomic Carry Handle & Silent Mixing Mesh'
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
    ingredients: [
      'Food-Grade 304 Stainless Steel (Body)',
      'BPA-Free Polypropylene (Lid)',
      'Food-Grade Silicone (Gasket)'
    ],
    usageInstructions: {
      recommendedDose: 'Use for water, protein shakes, BCAAs, or pre-workout drinks.',
      directions: 'Wash thoroughly before first use with warm soapy water.',
      bestTimeToTake: 'During training, travel, or work desk hydration.',
      warningNote: 'Hand wash recommended to preserve matte powder coating. Not for hot boiling liquids.'
    },
    authenticity: {
      importer: 'Sai Fitness Direct Sourcing',
      scratchCodeAvailable: false,
      batchTestedNotice: 'Laser-etched authenticity mark and certified food-safe packaging.',
      fssaiLicense: 'N/A — Food Contact Ware Certified'
    }
  }
];

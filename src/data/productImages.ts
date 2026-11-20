/**
 * Structured product image catalog for Sai Fitness
 * All images are authentic manufacturer packaging photographs stored locally in /public/images/products/
 */

export interface ProductImageDefinition {
  primary: string;
  gallery: string[];
  alt: string;
}

export const PRODUCT_IMAGES = {
  muscleblaze: {
    biozymePerformanceWhey: {
      primary: '/images/products/muscleblaze/biozyme-performance-whey.jpg',
      gallery: ['/images/products/muscleblaze/biozyme-performance-whey.jpg'],
      alt: 'MuscleBlaze Biozyme Performance Whey Protein Tub Packaging'
    },
    biozymeGoldWhey: {
      primary: '/images/products/muscleblaze/biozyme-gold-whey.jpg',
      gallery: ['/images/products/muscleblaze/biozyme-gold-whey.jpg'],
      alt: 'MuscleBlaze Biozyme Gold 100% Whey Protein Packaging'
    },
    biozymeIsozero: {
      primary: '/images/products/muscleblaze/biozyme-isozero.jpg',
      gallery: ['/images/products/muscleblaze/biozyme-isozero.jpg'],
      alt: 'MuscleBlaze Biozyme Iso-Zero Low Carb Isolate Packaging'
    },
    creampCreatine: {
      primary: '/images/products/muscleblaze/creamp-creatine.jpg',
      gallery: ['/images/products/muscleblaze/creamp-creatine.jpg'],
      alt: 'MuscleBlaze CreAMP Creatine Monohydrate Jar Packaging'
    },
    hiProteinBar: {
      primary: '/images/products/muscleblaze/hi-protein-bar.jpg',
      gallery: ['/images/products/muscleblaze/hi-protein-bar.jpg'],
      alt: 'MuscleBlaze 30g Hi-Protein Bar Box Packaging'
    }
  },
  gnc: {
    proPerformance100Whey: {
      primary: '/images/products/gnc/pro-performance-100-whey.jpg',
      gallery: ['/images/products/gnc/pro-performance-100-whey.jpg'],
      alt: 'GNC Pro Performance 100% Whey Protein Tub Packaging'
    },
    ampPureIsolate: {
      primary: '/images/products/gnc/amp-pure-isolate.png',
      gallery: ['/images/products/gnc/amp-pure-isolate.png'],
      alt: 'GNC AMP Pure Isolate Advanced Micro-Filtered Tub'
    },
    ampGoldSeriesWhey: {
      primary: '/images/products/gnc/amp-gold-series-whey.jpg',
      gallery: ['/images/products/gnc/amp-gold-series-whey.jpg'],
      alt: 'GNC AMP Gold Series 100% Whey Protein Jar'
    },
    megaMenOneDaily: {
      primary: '/images/products/gnc/mega-men-one-daily.jpg',
      gallery: ['/images/products/gnc/mega-men-one-daily.jpg'],
      alt: 'GNC Mega Men One Daily Multivitamin Bottle'
    }
  },
  optimumNutrition: {
    goldStandard100Whey: {
      primary: '/images/products/optimum-nutrition/gold-standard-100-whey.jpg',
      gallery: ['/images/products/optimum-nutrition/gold-standard-100-whey.jpg'],
      alt: 'Optimum Nutrition Gold Standard 100% Whey Red & Black Tub'
    },
    micronizedCreatine: {
      primary: '/images/products/optimum-nutrition/micronized-creatine.jpg',
      gallery: ['/images/products/optimum-nutrition/micronized-creatine.jpg'],
      alt: 'Optimum Nutrition Micronized Creatine Powder Tub'
    },
    seriousMass: {
      primary: '/images/products/optimum-nutrition/serious-mass.webp',
      gallery: ['/images/products/optimum-nutrition/serious-mass.webp'],
      alt: 'Optimum Nutrition Serious Mass High Calorie Weight Gainer'
    },
    goldStandardPreWorkout: {
      primary: '/images/products/optimum-nutrition/gold-standard-pre-workout.jpg',
      gallery: ['/images/products/optimum-nutrition/gold-standard-pre-workout.jpg'],
      alt: 'Optimum Nutrition Gold Standard Pre-Workout Tub'
    }
  },
  dymatize: {
    iso100Hydrolyzed: {
      primary: '/images/products/dymatize/iso100-hydrolyzed.jpg',
      gallery: ['/images/products/dymatize/iso100-hydrolyzed.jpg'],
      alt: 'Dymatize ISO 100 Hydrolyzed 100% Whey Protein Isolate Tub'
    }
  },
  myprotein: {
    impactWheyProtein: {
      primary: '/images/products/myprotein/impact-whey-protein.jpg',
      gallery: ['/images/products/myprotein/impact-whey-protein.jpg'],
      alt: 'MyProtein Impact Whey Protein Authentic Pouch'
    }
  },
  other: {
    scivationXtendBcaa: {
      primary: '/images/products/other/scivation-xtend-bcaa.jpg',
      gallery: ['/images/products/other/scivation-xtend-bcaa.jpg'],
      alt: 'Scivation XTEND Original 7g BCAA Tub'
    },
    muscletechNitrotechRipped: {
      primary: '/images/products/other/muscletech-nitrotech-ripped.jpg',
      gallery: ['/images/products/other/muscletech-nitrotech-ripped.jpg'],
      alt: 'MuscleTech Nitro-Tech Ripped Lean Whey Protein Isolate Tub'
    },
    saiProStainlessShaker: {
      primary: '/images/products/other/sai-pro-stainless-shaker.jpg',
      gallery: ['/images/products/other/sai-pro-stainless-shaker.jpg'],
      alt: 'Sai Fitness Pro Heavy Duty Stainless Steel Shaker Bottle'
    }
  }
} as const;

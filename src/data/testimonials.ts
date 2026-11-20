export interface Testimonial {
  id: string;
  author: string;
  role: string;
  city: string;
  productPurchased: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Vikramaditya S.',
    role: 'Competitive Powerlifter',
    city: 'Tiruchirappalli',
    productPurchased: 'Optimum Nutrition Gold Standard 100% Whey',
    rating: 5,
    date: 'February 2026',
    comment: 'I have been ordering my stack exclusively through SAI FITNESS for over 8 months. Every single ON tub comes with genuine Glanbia importer scratch stickers that verify instantly on the official portal. Delivery in Trichy is lightning quick.',
    verifiedPurchase: true
  },
  {
    id: 'test-2',
    author: 'Neha R.',
    role: 'CrossFit Athlete & Coach',
    city: 'Hyderabad',
    productPurchased: 'Scivation Xtend Original 7G BCAA',
    rating: 5,
    date: 'January 2026',
    comment: 'The WhatsApp assistance is top notch! I had doubts regarding batch codes and mixability of intra-workouts, and their team answered with importer documentation within 5 minutes. The package arrived double-sealed and in mint condition.',
    verifiedPurchase: true
  },
  {
    id: 'test-3',
    author: 'Karthik Menon',
    role: 'Marathoner & Strength Trainee',
    city: 'Chennai',
    productPurchased: 'MuscleBlaze Fish Oil Gold Triple Strength',
    rating: 5,
    date: 'January 2026',
    comment: 'Zero fishy burps, authentic seals, and great pricing. The website interface is clean and doesn’t push fake gimmicks. Appreciate the transparency in nutritional breakdowns.',
    verifiedPurchase: true
  },
  {
    id: 'test-4',
    author: 'Rajesh Sharma',
    role: 'Bodybuilding Competitor',
    city: 'Mumbai',
    productPurchased: 'Dymatize ISO 100 Hydrolyzed Whey',
    rating: 5,
    date: 'December 2025',
    comment: 'ISO100 gourmet chocolate was 100% genuine with Muscle House India hologram. SAI FITNESS has earned my permanent trust. Highly recommended for serious athletes.',
    verifiedPurchase: true
  }
];

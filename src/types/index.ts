export type ProductCategory =
  | 'whey-protein'
  | 'creatine'
  | 'mass-gainers'
  | 'pre-workout'
  | 'bcaa-amino-acids'
  | 'vitamins-health'
  | 'protein-bars'
  | 'fitness-accessories';

export type FitnessGoal =
  | 'muscle-gain'
  | 'strength-performance'
  | 'recovery'
  | 'daily-nutrition'
  | 'endurance';

export interface ProductVariantFlavor {
  id: string;
  name: string;
  inStock: boolean;
}

export interface ProductVariantWeight {
  id: string;
  label: string; // e.g. "1 kg (2.2 lbs)", "2 kg (4.4 lbs)", "5 lbs", "Pack of 6"
  priceMultiplier: number;
  mrpMultiplier: number;
  servingsCount: number;
}

export interface NutritionalFactItem {
  label: string;
  value: string;
  percentDailyValue?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  brandSlug: string;
  category: ProductCategory;
  categoryName: string;
  goals?: FitnessGoal[];
  shortDescription: string;
  fullDescription: string;
  sellingPrice: number;
  mrp: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  isBestseller: boolean;
  isFeatured: boolean;
  isNewArrival: boolean;
  images: string[];
  flavors: ProductVariantFlavor[];
  weights: ProductVariantWeight[];
  highlights: string[];
  nutritionalFacts: {
    servingSize: string;
    servingsPerContainer: number;
    proteinPerServing: string;
    bcaaPerServing?: string;
    eaasPerServing?: string;
    caloriesPerServing: string;
    carbsPerServing: string;
    fatsPerServing: string;
    addedSugar: string;
    creatinePerServing?: string;
    caffeinePerServing?: string;
    micronutrients?: NutritionalFactItem[];
  };
  ingredients: string[];
  usageInstructions: {
    recommendedDose: string;
    directions: string;
    bestTimeToTake: string;
    warningNote: string;
  };
  authenticity: {
    importer: string;
    scratchCodeAvailable: boolean;
    batchTestedNotice: string;
    fssaiLicense: string;
  };
}

export interface CartItem {
  cartKey: string;
  product: Product;
  selectedFlavor: string;
  selectedWeight: ProductVariantWeight;
  unitPrice: number;
  unitMrp: number;
  quantity: number;
}

export interface Coupon {
  code: string;
  discountPercentage: number;
  maxDiscount?: number;
  minOrderValue: number;
  description: string;
}

export interface CustomerAddress {
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
}

export type PaymentMethod = 'razorpay' | 'upi' | 'cod';

export interface OrderRecord {
  orderId: string;
  orderDate: string;
  customer: CustomerAddress;
  items: CartItem[];
  pricing: {
    subtotal: number;
    discount: number;
    shipping: number;
    codFee: number;
    total: number;
    couponApplied?: string;
  };
  paymentMethod: PaymentMethod;
  paymentStatus: 'paid' | 'authorized' | 'pending';
  estimatedDelivery: string;
}

export interface FilterState {
  searchQuery: string;
  category: string;
  brands: string[];
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
  sortBy: 'popularity' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
}

export interface CategoryMetadata {
  id: ProductCategory;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  badge: string;
}

export interface GoalMetadata {
  id: FitnessGoal;
  slug: string;
  title: string;
  shortDesc: string;
  recommendedCategory: ProductCategory;
  image: string;
  badge: string;
}

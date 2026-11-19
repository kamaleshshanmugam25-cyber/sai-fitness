export interface BrandConfig {
  name: string;
  slogan: string;
  tagline: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  address: {
    street: string;
    hub: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  businessHours: string;
  announcements: string[];
  features: {
    freeShippingThreshold: number;
    standardShippingFee: number;
    codAvailable: boolean;
    codFee: number;
    currencySymbol: string;
  };
  supportedBrands: {
    id: string;
    name: string;
    origin: string;
    tagline: string;
    logoText: string;
  }[];
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export const BRAND_CONFIG: BrandConfig = {
  name: "SAI FITNESS",
  slogan: "FUEL YOUR BODY. ELEVATE YOUR PERFORMANCE.",
  tagline: "YOUR FITNESS. YOUR STRENGTH. YOUR NEXT LEVEL.",
  description: "Discover trusted sports nutrition products from leading international and Indian brands to support your fitness journey. 100% authentic multi-brand catalogue with verified importer seals.",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  email: "support@saifitness.in",
  address: {
    street: "Plot No. 42, 80 Feet Main Road, 4th Block, Koramangala",
    hub: "SAI FITNESS Nutrition & Wellness Hub",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560034",
    country: "India",
  },
  businessHours: "Mon – Sat: 9:00 AM – 9:00 PM IST | Sun: 10:00 AM – 6:00 PM IST",
  announcements: [
    "AUTHENTIC PRODUCTS | 100% SOURCED FROM AUTHORIZED IMPORTERS",
    "FREE INDIA-WIDE DELIVERY ON ALL ORDERS OVER ₹1,999",
    "ORDER VIA WHATSAPP WITH CERTIFIED NUTRITIONIST GUIDANCE",
    "USE CODE 'SAIFIT10' TO GET 10% OFF ON ORDERS OVER ₹1,499"
  ],
  features: {
    freeShippingThreshold: 1999,
    standardShippingFee: 99,
    codAvailable: true,
    codFee: 49,
    currencySymbol: "₹",
  },
  supportedBrands: [
    { id: "optimum-nutrition", name: "Optimum Nutrition", origin: "USA", tagline: "The World's Gold Standard in Protein", logoText: "ON" },
    { id: "muscleblaze", name: "MuscleBlaze", origin: "India", tagline: "India's Leading Performance Supplement Brand", logoText: "MB" },
    { id: "gnc", name: "GNC Live Well", origin: "USA", tagline: "Pioneering Health & Athletic Wellness Since 1935", logoText: "GNC" },
    { id: "dymatize", name: "Dymatize", origin: "USA", tagline: "Elite Hydrolyzed ISO100 Protein Science", logoText: "DYMATIZE" },
    { id: "myprotein", name: "MyProtein", origin: "UK", tagline: "Europe's #1 Sports Nutrition Brand", logoText: "MYPROTEIN" },
    { id: "muscletech", name: "MuscleTech", origin: "USA", tagline: "Advanced Nitro-Tech Performance Formulas", logoText: "MUSCLETECH" },
    { id: "ultimate-nutrition", name: "Ultimate Nutrition", origin: "USA", tagline: "Classic Prostar 100% Whey Engineering", logoText: "ULTIMATE" },
    { id: "bsn", name: "BSN Nutrition", origin: "USA", tagline: "Legendary Syntha-6 & N.O.-XPLODE Innovation", logoText: "BSN" }
  ],
  socials: {
    instagram: "https://instagram.com/saifitness.in",
    facebook: "https://facebook.com/saifitness.in",
    youtube: "https://youtube.com/@saifitness"
  }
};

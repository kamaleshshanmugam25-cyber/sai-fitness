export interface BrandConfig {
  name: string;
  fullName: string;
  slogan: string;
  tagline: string;
  description: string;
  businessType: string;
  mainServices: string[];
  googleRating: number;
  googleReviews: number;
  googleReviewsDisplay: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  instagramHandle: string;
  founder: string;
  motto: string;
  logoUrl: string;
  email: string;
  address: {
    street: string;
    hub: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    landmark?: string;
    googleMapsUrl: string;
  };
  branches: {
    id: string;
    name: string;
    area: string;
    address: string;
    phone: string;
    hours: string;
    features: string[];
  }[];
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
  fullName: "Sai Fitness – Unisex Fitness Center",
  slogan: "MASTER THE BLASTER 👑 FEELING ON 🔝",
  tagline: "MASTER THE BLASTER 👑 FEELING ON 🔝",
  description: "Tiruchirappalli's leading Unisex Fitness Center, AC Gym & authentic sports nutrition store. Certified gym training, bodybuilding, weight-loss coaching and 100% genuine supplements with 4.9⭐ on Google (1,586+ reviews).",
  businessType: "Unisex Gym / Fitness Center",
  mainServices: [
    "Gym training",
    "Bodybuilding",
    "Weight-loss coaching",
    "Authentic sports nutrition"
  ],
  googleRating: 4.9,
  googleReviews: 1586,
  googleReviewsDisplay: "1,586",
  phone: "9894558995",
  phoneDisplay: "+91 98945 58995",
  whatsappNumber: "919894558995",
  whatsappDisplay: "+91 98945 58995",
  instagramHandle: "@saifitness_trichy_",
  founder: "M. Saisaran (@m.saisaran)",
  motto: "WE SHAPE U • YOU 🆚 YOU",
  logoUrl: "/images/logo.png",
  email: "support@saifitness.in",
  address: {
    street: "No. 11A, Subramania Swamy Kovil Street, 8, W Blvd Road, near Old Passport Office",
    hub: "Sai Fitness – Unisex Fitness Center",
    city: "Trichy",
    state: "Tamil Nadu",
    pincode: "620008",
    country: "India",
    landmark: "Near Old Passport Office, Subramania Swamy Kovil Street",
    googleMapsUrl: "https://www.google.com/search?q=saifitness+trichy",
  },
  branches: [
    {
      id: "wb-road",
      name: "Main Branch — W Blvd Road (Tharanallur)",
      area: "West Boulevard Road / Tharanallur",
      address: "No. 11A, Subramania Swamy Kovil Street, 8, W Blvd Road, near Old Passport Office, Trichy – 620008",
      phone: "+91 98945 58995",
      hours: "Mon – Sat: 5:00 AM – 10:00 PM | Sun: 6:00 AM – 1:00 PM",
      features: ["Unisex AC Gym", "Bodybuilding Prep", "Weight-Loss Coaching", "Sports Nutrition Store"]
    },
    {
      id: "thiruvanaikoil",
      name: "Branch 2 — Thiruvanaikoil",
      area: "Thiruvanaikoil",
      address: "Srinivasa Nagar, Thiruvanaikoil, Tiruchirappalli, Tamil Nadu - 620005",
      phone: "+91 80127 72255",
      hours: "Mon – Sat: 5:30 AM – 9:30 PM | Sun: 6:00 AM – 12:00 PM",
      features: ["AC Fitness Facility", "Personal Coaching", "Cardio & Strength Equipment", "Diet Consultation"]
    }
  ],
  businessHours: "Mon – Sat: 5:00 AM – 10:00 PM IST | Sun: 6:00 AM – 1:00 PM IST",
  announcements: [
    "MASTER THE BLASTER 👑 FEELING ON 🔝",
    "4.9 ⭐ RATED ON GOOGLE (1,586+ REVIEWS) — TRICHY'S PREMIER UNISEX GYM",
    "GYM TRAINING • BODYBUILDING • WEIGHT-LOSS COACHING • 100% GENUINE SUPPLEMENTS",
    "FOLLOW US ON INSTAGRAM: @saifitness_trichy_",
    "FREE INDIA-WIDE DELIVERY ON ALL ORDERS OVER ₹1,999"
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
    instagram: "https://instagram.com/saifitness_trichy_",
    facebook: "https://facebook.com/saifitness.in",
    youtube: "https://youtube.com/@saifitness"
  }
};

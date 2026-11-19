import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { BrandShowcase } from '../components/home/BrandShowcase';
import { BestsellersSection } from '../components/home/BestsellersSection';
import { PromoBanner } from '../components/home/PromoBanner';
import { GoalsSection } from '../components/home/GoalsSection';
import { ConsultationSection } from '../components/home/ConsultationSection';
import { WhyChooseSai } from '../components/home/WhyChooseSai';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { NewsletterSection } from '../components/home/NewsletterSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* SECTION 1 — HERO BANNER */}
      <HeroSection />

      {/* SECTION 2 — TRUST STRIP */}
      <TrustStrip />

      {/* SECTION 3 — SHOP BY CATEGORY */}
      <CategoryGrid />

      {/* SECTION 4 — SHOP BY BRAND */}
      <BrandShowcase />

      {/* SECTION 5 — BEST SELLERS */}
      <BestsellersSection />

      {/* SECTION 6 — PROMOTIONAL BANNER */}
      <PromoBanner />

      {/* SECTION 7 — SHOP BY FITNESS GOALS */}
      <GoalsSection />

      {/* SECTION 8 — TALK TO US BEFORE YOU ORDER (Wave Nutrition Consultation Block) */}
      <ConsultationSection />

      {/* SECTION 9 — WHY CHOOSE SAI FITNESS */}
      <WhyChooseSai />

      {/* SECTION 9 — CUSTOMER REVIEWS */}
      <TestimonialsSection />

      {/* SECTION 10 — NEWSLETTER */}
      <NewsletterSection />
    </div>
  );
};

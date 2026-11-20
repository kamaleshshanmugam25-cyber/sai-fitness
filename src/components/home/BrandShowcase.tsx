import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASING } from '../../utils/motion';

interface BrandVisualMeta {
  flag: string;
  heroImage: string;
  badge: string;
  specialty: string;
  vaultCount: string;
  colorAccent: string;
}

const BRAND_VISUALS: Record<string, BrandVisualMeta> = {
  'optimum-nutrition': {
    flag: '🇺🇸',
    heroImage: '/images/products/optimum-nutrition/gold-standard-100-whey.jpg',
    badge: '#1 Global Bestseller',
    specialty: '24g Whey Isolate • 5.5g BCAAs',
    vaultCount: '42+ Batches',
    colorAccent: '#F4BE38'
  },
  'muscleblaze': {
    flag: '🇮🇳',
    heroImage: '/images/products/muscleblaze/biozyme-performance-whey.jpg',
    badge: 'Labdoor USA Certified',
    specialty: 'Patented Biozyme™ Absorption',
    vaultCount: '38+ Batches',
    colorAccent: '#F4BE38'
  },
  'gnc': {
    flag: '🇺🇸',
    heroImage: '/images/products/gnc/pro-performance-100-whey.jpg',
    badge: 'Since 1935 Heritage',
    specialty: '100% Pure Whey Performance',
    vaultCount: '29+ Batches',
    colorAccent: '#E53E3E'
  },
  'dymatize': {
    flag: '🇺🇸',
    heroImage: '/images/products/dymatize/iso100-hydrolyzed.jpg',
    badge: 'Olympic Grade Isolate',
    specialty: '100% Hydrolyzed • Zero Sugar',
    vaultCount: '19+ Batches',
    colorAccent: '#00B4D8'
  },
  'myprotein': {
    flag: '🇬🇧',
    heroImage: '/images/products/myprotein/impact-whey-protein.jpg',
    badge: "Europe's #1 Brand",
    specialty: 'Grade-A Whey • 21g Protein',
    vaultCount: '24+ Batches',
    colorAccent: '#00A896'
  },
  'muscletech': {
    flag: '🇺🇸',
    heroImage: '/images/products/other/muscletech-nitrotech-ripped.jpg',
    badge: 'Nitro-Tech Series',
    specialty: 'Lean Whey Isolate + CLA Matrix',
    vaultCount: '22+ Batches',
    colorAccent: '#E63946'
  },
  'ultimate-nutrition': {
    flag: '🇺🇸',
    heroImage: '/images/products/other/ultimate-nutrition-prostar-whey.jpg',
    badge: 'Prostar Formula',
    specialty: 'Micro & Ultra-Filtered Isolate',
    vaultCount: '18+ Batches',
    colorAccent: '#D4AF37'
  },
  'bsn': {
    flag: '🇺🇸',
    heroImage: '/images/products/other/bsn-syntha-6.png',
    badge: 'Syntha-6 Series',
    specialty: 'Ultra-Premium Protein Matrix',
    vaultCount: '21+ Batches',
    colorAccent: '#DC2626'
  }
};

export const BrandShowcase: React.FC = () => {
  const brands = BRAND_CONFIG.supportedBrands;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FFF4D6] border-b border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Viewport Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: PREMIUM_EASING }}
          className="flex items-end justify-between mb-8 gap-4 text-left"
        >
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#858585] font-bold">
              Shop By
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#252525] uppercase tracking-tight">
              TOP <span className="text-[#F4BE38]">BRANDS</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/brands"
              className="text-xs sm:text-sm font-heading font-bold text-[#252525] hover:text-[#F4BE38] hover:underline flex items-center gap-1 group"
            >
              <span>All brands</span>
              <ArrowRight className="w-4 h-4 text-[#F4BE38] group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#EAE6DC] hover:bg-[#F4BE38] hover:text-[#252525] hover:border-[#F4BE38] text-[#252525] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#EAE6DC] hover:bg-[#F4BE38] hover:text-[#252525] hover:border-[#F4BE38] text-[#252525] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 8 Brand Showcase Containers Grid with Premium Visuals & Smooth Hover */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5"
        >
          {brands.map((brand, idx) => {
            const visual = BRAND_VISUALS[brand.id] || {
              flag: '🌐',
              heroImage: '/images/products/placeholder-supplement.svg',
              badge: 'Official Brand',
              specialty: brand.tagline,
              vaultCount: 'Verified Stock',
              colorAccent: '#F4BE38'
            };

            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: PREMIUM_EASING }}
              >
                <Link
                  to={`/shop?brand=${encodeURIComponent(brand.name)}`}
                  className="group relative rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] hover:border-[#F4BE38] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between shadow-sm text-left h-full overflow-hidden p-5"
                >
                  {/* Subtle Ambient Background Radial Glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FFF4D6]/50 blur-2xl group-hover:bg-[#F4BE38]/20 transition-all duration-500 pointer-events-none" />

                  {/* Card Header: Origin Flag & Verified Status */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF4D6] border border-[#EDDA5E] text-[10px] font-mono font-bold text-[#252525] shadow-2xs">
                      <span>{visual.flag}</span>
                      <span>{brand.origin} Formulation</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Official Import</span>
                    </span>
                  </div>

                  {/* Hero Product Stage with Pedestal & Monogram */}
                  <div className="relative my-3.5 h-44 sm:h-48 rounded-2xl bg-gradient-to-b from-[#FFFDF5] to-[#F8F6F0] border border-[#EAE6DC]/70 group-hover:border-[#EDDA5E]/60 flex items-center justify-center p-3 overflow-hidden transition-all duration-300">
                    {/* Radial Spotlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,190,56,0.14)_0%,transparent_70%)]" />

                    {/* Floating Brand Monogram Pill in top-left */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2 py-0.5 rounded-md bg-[#252525] text-[#F4BE38] font-heading font-black text-[10px] tracking-wider uppercase border border-[#333333] shadow-sm">
                        {brand.logoText}
                      </span>
                    </div>

                    {/* Floating Badge in top-right */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="px-2 py-0.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[#252525] font-mono text-[9px] font-bold border border-[#EAE6DC] shadow-2xs">
                        {visual.badge}
                      </span>
                    </div>

                    {/* Authentic Product Image */}
                    <img
                      src={visual.heroImage}
                      alt={brand.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/products/placeholder-supplement.svg';
                      }}
                      className="h-full w-auto max-w-[85%] object-contain drop-shadow-md group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                    />
                  </div>

                  {/* Brand Details */}
                  <div className="space-y-1.5 relative z-10">
                    <h3 className="font-heading font-black text-base sm:text-lg text-[#252525] group-hover:text-[#F4BE38] group-hover:-translate-y-0.5 transition-all duration-200 leading-snug">
                      {brand.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#858585] line-clamp-1 font-medium">
                      {visual.specialty}
                    </p>
                  </div>

                  {/* Card Footer: Authenticity & Explore CTA */}
                  <div className="pt-3 mt-3 border-t border-[#EAE6DC] flex items-center justify-between text-xs font-bold text-[#252525] relative z-10">
                    <div className="flex items-center gap-1 text-[#858585] text-[10px] font-mono font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#F4BE38]" />
                      <span>{visual.vaultCount}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FFFDF5] group-hover:bg-[#F4BE38] border border-[#EAE6DC] group-hover:border-[#F4BE38] text-[11px] font-heading font-bold text-[#252525] transition-all duration-200 shadow-2xs group-hover:shadow-sm">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 text-[#252525] group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Brand Continuous Ticker Marquee with Pause on Hover */}
        <div className="mt-10 pt-6 border-t border-[#EAE6DC] overflow-hidden">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#858585] mb-4 text-center font-bold">
            AUTHORIZED DISTRIBUTION NETWORK
          </p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-8 py-2">
              {[...brands, ...brands].map((brand, i) => (
                <Link
                  key={`${brand.id}-${i}`}
                  to={`/shop?brand=${encodeURIComponent(brand.name)}`}
                  className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFFDF5] border border-[#EAE6DC] hover:border-[#F4BE38]/60 text-xs font-heading font-bold text-[#252525] hover:text-[#F4BE38] whitespace-nowrap transition-all duration-200 shadow-2xs hover:shadow-sm hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4BE38]" />
                  <span>{brand.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

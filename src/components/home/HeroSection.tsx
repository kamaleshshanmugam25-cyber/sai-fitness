import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { PREMIUM_EASING } from '../../utils/motion';

interface ShowcaseSet {
  id: string;
  categoryTag: string;
  categorySlug: string;
  title: string;
  price: string;
  ctaText: string;
  tubs: {
    left: { image: string; alt: string; name: string };
    center: { image: string; alt: string; name: string };
    right: { image: string; alt: string; name: string };
  };
}

const SHOWCASE_SETS: ShowcaseSet[] = [
  {
    id: 'protein-trio',
    categoryTag: '100% WHEY PROTEIN',
    categorySlug: 'whey-protein',
    title: 'Optimum Nutrition Gold Standard 100% Whey – 2 kg',
    price: '₹3,299',
    ctaText: 'Shop whey protein →',
    tubs: {
      left: {
        image: '/images/products/dymatize/iso100-hydrolyzed.jpg',
        alt: 'Dymatize ISO 100 Hydrolyzed Whey Isolate',
        name: 'Dymatize ISO 100'
      },
      center: {
        image: '/images/products/optimum-nutrition/gold-standard-100-whey.jpg',
        alt: 'ON Gold Standard 100% Whey',
        name: 'ON Gold Standard'
      },
      right: {
        image: '/images/products/muscleblaze/biozyme-performance-whey.jpg',
        alt: 'MuscleBlaze Biozyme Performance Whey',
        name: 'MB Biozyme Whey'
      }
    }
  },
  {
    id: 'gnc-myprotein-trio',
    categoryTag: 'INTERNATIONAL ISOLATES',
    categorySlug: 'whey-protein',
    title: 'GNC Pro Performance 100% Whey – 2 lbs',
    price: '₹2,999',
    ctaText: 'Shop GNC & MyProtein →',
    tubs: {
      left: {
        image: '/images/products/myprotein/impact-whey-protein.jpg',
        alt: 'MyProtein Impact Whey Protein',
        name: 'MyProtein Impact'
      },
      center: {
        image: '/images/products/gnc/pro-performance-100-whey.jpg',
        alt: 'GNC Pro Performance 100% Whey',
        name: 'GNC Pro 100%'
      },
      right: {
        image: '/images/products/gnc/amp-gold-series-whey.jpg',
        alt: 'GNC AMP Gold Series Whey',
        name: 'GNC AMP Gold'
      }
    }
  },
  {
    id: 'creatine-trio',
    categoryTag: 'CREATINE MONOHYDRATE',
    categorySlug: 'creatine',
    title: 'ON Micronized Creatine Monohydrate – 250g',
    price: '₹1,199',
    ctaText: 'Shop creatine →',
    tubs: {
      left: {
        image: '/images/products/muscleblaze/creamp-creatine.jpg',
        alt: 'MuscleBlaze CreAMP Monohydrate',
        name: 'MB CreAMP'
      },
      center: {
        image: '/images/products/optimum-nutrition/micronized-creatine.jpg',
        alt: 'Optimum Nutrition Micronized Creatine',
        name: 'ON Creatine'
      },
      right: {
        image: '/images/products/muscleblaze/biozyme-gold-whey.jpg',
        alt: 'MuscleBlaze Biozyme Gold Whey',
        name: 'MB Biozyme Gold'
      }
    }
  },
  {
    id: 'mass-gainer-trio',
    categoryTag: 'MASS & PRE-WORKOUT',
    categorySlug: 'mass-gainers',
    title: 'Optimum Nutrition Serious Mass High Calorie Gainer',
    price: '₹2,299',
    ctaText: 'Shop performance stack →',
    tubs: {
      left: {
        image: '/images/products/other/scivation-xtend-bcaa.jpg',
        alt: 'Scivation XTEND 7g BCAA',
        name: 'XTEND BCAA'
      },
      center: {
        image: '/images/products/optimum-nutrition/serious-mass.webp',
        alt: 'Optimum Nutrition Serious Mass',
        name: 'ON Serious Mass'
      },
      right: {
        image: '/images/products/optimum-nutrition/gold-standard-pre-workout.jpg',
        alt: 'ON Gold Standard Pre-Workout',
        name: 'ON Pre-Workout'
      }
    }
  }
];

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [heroSearch, setHeroSearch] = useState('');
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_SETS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SHOWCASE_SETS.length) % SHOWCASE_SETS.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlay, nextSlide]);

  const activeSet = SHOWCASE_SETS[currentIndex];

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroSearch.trim()) return;
    navigate(`/search?q=${encodeURIComponent(heroSearch.trim())}`);
  };

  // Product images slide in from RIGHT TO LEFT
  const tubContainerVariants: Variants = {
    enter: {
      x: 80,
      opacity: 0,
      scale: 0.96
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { duration: 0.7, ease: PREMIUM_EASING },
        scale: { duration: 0.7, ease: PREMIUM_EASING },
        opacity: { duration: 0.4 }
      }
    },
    exit: {
      x: -80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { duration: 0.45, ease: PREMIUM_EASING },
        opacity: { duration: 0.3 }
      }
    }
  };

  // Master entrance sequence for Left Column
  const leftColumnVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: PREMIUM_EASING
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FFFDF5] py-12 lg:py-20 border-b border-[#EAE6DC]">
      {/* Background Subtle Ambient Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: PREMIUM_EASING }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#F4BE38]/12 via-[#FFF4D6]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFF4D6]/60 via-transparent to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* =========================================================================
              LEFT COLUMN — CINEMATIC TEXT REVEAL & STAGGERED ENTRANCE
             ========================================================================= */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Kicker with Official Logo, Motto & Rating */}
            <motion.div variants={itemFadeUp} className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#EAE6DC] shadow-2xs">
                <img
                  src="/images/logo.png"
                  alt="Sai Fitness Official Logo"
                  className="w-5 h-5 rounded-full object-contain ring-1 ring-[#F4BE38]"
                />
                <span className="font-heading font-extrabold text-xs text-[#252525]">SAI FITNESS</span>
                <span className="text-[10px] font-mono font-bold text-[#F4BE38]">WE SHAPE U</span>
              </div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#252525] font-bold px-3 py-1 rounded-full bg-[#FFF4D6] border border-[#EDDA5E]/50 shadow-2xs">
                YOU 🆚 YOU 👑
              </span>
              <a
                href={BRAND_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#EAE6DC] text-xs font-bold text-[#252525] hover:border-[#F4BE38] transition-colors shadow-2xs"
              >
                <span className="text-[#F4BE38]">★</span>
                <span>4.9</span>
                <span className="text-[#858585] font-normal">(1,586 Google Reviews)</span>
              </a>
            </motion.div>

            {/* Cinematic Line-by-Line Heading Reveal in Deep Charcoal & Premium Yellow */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#252525] leading-[1.08]">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  variants={{
                    hidden: { y: '100%', opacity: 0 },
                    visible: {
                      y: '0%',
                      opacity: 1,
                      transition: { duration: 0.9, ease: PREMIUM_EASING }
                    }
                  }}
                >
                  Fuel that's
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-[#F4BE38]"
                  variants={{
                    hidden: { y: '100%', opacity: 0 },
                    visible: {
                      y: '0%',
                      opacity: 1,
                      transition: { duration: 0.9, delay: 0.1, ease: PREMIUM_EASING }
                    }
                  }}
                >
                  guaranteed genuine.
                </motion.span>
              </span>
            </h1>

            {/* Smooth Fade-up Subhead in Muted Grey */}
            <motion.p
              variants={itemFadeUp}
              className="text-base sm:text-lg text-[#858585] max-w-lg leading-relaxed"
            >
              Sai Fitness – Unisex Fitness Center in Trichy. Premier gym training, bodybuilding & weight-loss coaching, backed by 100% authentic international sports nutrition.
            </motion.p>

            {/* In-Hero Search Input */}
            <motion.div variants={itemFadeUp} className="max-w-lg pt-1">
              <form
                onSubmit={handleHeroSearchSubmit}
                className="relative flex items-center shadow-sm rounded-full bg-[#FFFFFF] border border-[#EAE6DC] p-1.5 focus-within:border-[#F4BE38] focus-within:ring-4 focus-within:ring-[#F4BE38]/15 transition-all duration-300"
              >
                <Search className="w-5 h-5 text-[#858585] ml-3.5" />
                <input
                  type="text"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  placeholder="Search protein, creatine, brands..."
                  className="w-full bg-transparent px-3 py-2 text-sm text-[#252525] placeholder-[#858585] focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-shine px-6 py-2.5 rounded-full bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-180 hover:-translate-y-0.5 active:scale-95 shrink-0 shadow-sm"
                >
                  Search
                </button>
              </form>
            </motion.div>

            {/* Staggered Action Buttons */}
            <motion.div variants={itemFadeUp} className="pt-2 flex items-center gap-3">
              <Link
                to="/shop"
                className="btn-shine px-8 py-3.5 rounded-full bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95 flex items-center justify-center"
              >
                Shop all
              </Link>

              <Link
                to="/brands"
                className="px-8 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#FFF4D6] text-[#252525] border border-[#EAE6DC] hover:border-[#F4BE38] hover:text-[#252525] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:scale-95 flex items-center justify-center"
              >
                Brands
              </Link>
            </motion.div>
          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN — SHOWCASE CARD
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: PREMIUM_EASING }}
            className="lg:col-span-6 relative"
          >
            <div 
              className="relative rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] p-6 sm:p-8 aspect-[4/3] flex flex-col justify-between overflow-hidden shadow-sm group hover:shadow-xl transition-shadow duration-500"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Soft Warm Yellow Spotlight Glow behind product tubs */}
              <div className="absolute inset-0 bg-radial from-[#F4BE38]/15 via-transparent to-transparent pointer-events-none" />

              {/* Navigation Arrows with Smooth Scale */}
              <button
                onClick={prevSlide}
                aria-label="Previous showcase"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#252525] border border-[#EAE6DC] shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 opacity-0 group-hover:opacity-100 z-30"
              >
                <ChevronLeft className="w-4 h-4 text-[#252525]" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next showcase"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#252525] border border-[#EAE6DC] shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 opacity-0 group-hover:opacity-100 z-30"
              >
                <ChevronRight className="w-4 h-4 text-[#252525]" />
              </button>

              {/* Animated Product Tubs Composition Sliding in from RIGHT */}
              <div className="relative flex-1 flex items-center justify-center pt-2 pb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSet.id}
                    variants={tubContainerVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative flex items-end justify-center gap-3 sm:gap-6 w-full max-w-md mx-auto"
                  >
                    {/* Left Tub */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                      className="relative w-28 sm:w-36 aspect-square rounded-2xl overflow-hidden bg-[#FFFFFF] p-2.5 shadow-lg border border-[#EAE6DC] -rotate-3 z-10 transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={activeSet.tubs.left.image}
                        alt={activeSet.tubs.left.alt}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = '/images/products/placeholder-supplement.svg';
                        }}
                        className="w-full h-full object-contain object-center rounded-xl"
                      />
                      <span className="absolute bottom-1 left-0 right-0 text-center font-mono text-[9px] font-bold text-[#858585] bg-[#FFFFFF]/90 backdrop-blur-xs py-0.5">
                        {activeSet.tubs.left.name}
                      </span>
                    </motion.div>

                    {/* Center Tub with Premium Yellow border accent */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.2 }}
                      className="relative w-36 sm:w-44 aspect-square rounded-2xl overflow-hidden bg-[#FFFFFF] p-3 shadow-2xl border-2 border-[#F4BE38] scale-110 z-20 transition-transform duration-300 hover:scale-115"
                    >
                      <img
                        src={activeSet.tubs.center.image}
                        alt={activeSet.tubs.center.alt}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = '/images/products/placeholder-supplement.svg';
                        }}
                        className="w-full h-full object-contain object-center rounded-xl"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-0.5 rounded-full bg-[#F4BE38] text-[#252525] text-[9px] font-bold uppercase tracking-wider shadow-sm">
                          Verified
                        </span>
                      </div>
                      <span className="absolute bottom-1 left-0 right-0 text-center font-mono text-[10px] font-extrabold text-[#252525] bg-[#FFFFFF]/95 backdrop-blur-xs py-0.5">
                        {activeSet.tubs.center.name}
                      </span>
                    </motion.div>

                    {/* Right Tub */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.5 }}
                      className="relative w-28 sm:w-36 aspect-square rounded-2xl overflow-hidden bg-[#FFFFFF] p-2.5 shadow-lg border border-[#EAE6DC] rotate-3 z-10 transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={activeSet.tubs.right.image}
                        alt={activeSet.tubs.right.alt}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = '/images/products/placeholder-supplement.svg';
                        }}
                        className="w-full h-full object-contain object-center rounded-xl"
                      />
                      <span className="absolute bottom-1 left-0 right-0 text-center font-mono text-[9px] font-bold text-[#858585] bg-[#FFFFFF]/90 backdrop-blur-xs py-0.5">
                        {activeSet.tubs.right.name}
                      </span>
                    </motion.div>

                    {/* Dynamic Floor Reflection Shadow Effect */}
                    <motion.div
                      animate={{ scale: [1, 0.92, 1], opacity: [0.22, 0.12, 0.22] }}
                      transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.2 }}
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-[#252525] rounded-full blur-md pointer-events-none"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Floating Card & Premium Yellow Action Pill */}
              <div className="relative z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                {/* Floating Card at Bottom Left */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSet.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: PREMIUM_EASING }}
                    className="p-3 sm:p-3.5 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#EAE6DC] shadow-md text-left flex-1 max-w-sm"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#F4BE38] font-bold block">
                      {activeSet.categoryTag}
                    </span>
                    <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#252525] line-clamp-1 leading-snug">
                      {activeSet.title}
                    </h4>
                    <p className="font-heading font-bold text-xs sm:text-sm text-[#252525] mt-0.5">
                      {activeSet.price}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Floating Action Button at Bottom Right */}
                <Link
                  to={`/category/${activeSet.categorySlug}`}
                  className="btn-shine px-6 py-3 rounded-full bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-180 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95 flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>{activeSet.ctaText}</span>
                </Link>
              </div>
            </div>

            {/* Bottom Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-4">
              {SHOWCASE_SETS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    idx === currentIndex
                      ? 'w-8 bg-[#F4BE38]'
                      : 'w-2 bg-[#EAE6DC] hover:bg-[#858585] hover:w-3'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

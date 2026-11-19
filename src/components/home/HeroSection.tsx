import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

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
    id: 'pre-workout-trio',
    categoryTag: 'PRE WORKOUT',
    categorySlug: 'pre-workout',
    title: 'Cellucor C4 Original Pre-Workout – 50 Servings',
    price: '₹2,800',
    ctaText: 'Shop pre-workout →',
    tubs: {
      left: {
        image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=500&auto=format&fit=crop',
        alt: 'Ghost Legend Pre-Workout Red Tub',
        name: 'Ghost Legend'
      },
      center: {
        image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop',
        alt: 'Cellucor C4 Original Yellow Lime Tub',
        name: 'C4 Original'
      },
      right: {
        image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=500&auto=format&fit=crop',
        alt: 'Convict High Stim Pre-Workout Black Tub',
        name: 'Convict Pre'
      }
    }
  },
  {
    id: 'protein-trio',
    categoryTag: 'PROTEIN',
    categorySlug: 'whey-protein',
    title: 'Optimum Nutrition Gold Standard 100% Whey – 2 kg',
    price: '₹3,299',
    ctaText: 'Shop protein →',
    tubs: {
      left: {
        image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=500&auto=format&fit=crop',
        alt: 'Dymatize ISO 100 Hydrolyzed Whey',
        name: 'Dymatize ISO 100'
      },
      center: {
        image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop',
        alt: 'ON Gold Standard 100% Whey',
        name: 'ON 100% Whey'
      },
      right: {
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=500&auto=format&fit=crop',
        alt: 'MuscleTech Nitro-Tech Gold',
        name: 'Nitro-Tech Gold'
      }
    }
  },
  {
    id: 'creatine-trio',
    categoryTag: 'CREATINE',
    categorySlug: 'creatine',
    title: 'ON Micronized Creatine Monohydrate – 250g',
    price: '₹1,199',
    ctaText: 'Shop creatine →',
    tubs: {
      left: {
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=500&auto=format&fit=crop',
        alt: 'MuscleBlaze CreAMP Monohydrate',
        name: 'MB CreAMP'
      },
      center: {
        image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=600&auto=format&fit=crop',
        alt: 'Optimum Nutrition Micronized Creatine',
        name: 'ON Creatine'
      },
      right: {
        image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=500&auto=format&fit=crop',
        alt: 'Cellucor COR-Performance Creatine',
        name: 'COR Creatine'
      }
    }
  },
  {
    id: 'mass-gainer-trio',
    categoryTag: 'MASS GAINERS',
    categorySlug: 'mass-gainers',
    title: 'MuscleBlaze Super Gainer XXL – 3 kg Chocolate',
    price: '₹2,499',
    ctaText: 'Shop mass gainers →',
    tubs: {
      left: {
        image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=500&auto=format&fit=crop',
        alt: 'Optimum Nutrition Serious Mass',
        name: 'Serious Mass'
      },
      center: {
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=600&auto=format&fit=crop',
        alt: 'MuscleBlaze Super Gainer XXL 3kg',
        name: 'MB Gainer XXL'
      },
      right: {
        image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=500&auto=format&fit=crop',
        alt: 'Dymatize Super Mass Gainer',
        name: 'Dymatize Mass'
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
    }, 4200);
    return () => clearInterval(timer);
  }, [isAutoPlay, nextSlide]);

  const activeSet = SHOWCASE_SETS[currentIndex];

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroSearch.trim()) return;
    navigate(`/search?q=${encodeURIComponent(heroSearch.trim())}`);
  };

  // Variants for product composition sliding in from LEFT TO RIGHT
  const tubContainerVariants: Variants = {
    enter: {
      x: -100,
      opacity: 0,
      scale: 0.95
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 220, damping: 24 },
        opacity: { duration: 0.35 }
      }
    },
    exit: {
      x: 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring' as const, stiffness: 220, damping: 24 },
        opacity: { duration: 0.25 }
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F0F7FC]/70 py-12 lg:py-20 border-b border-[#E2E8F0]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* =========================================================================
              LEFT COLUMN (Wave Nutrition Exact Blue & White Architecture)
             ========================================================================= */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Kicker */}
            <span className="font-mono text-xs uppercase tracking-widest text-[#0284C7] font-bold">
              SAI FITNESS
            </span>

            {/* Signature Wave Nutrition H1 */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#0F172A] leading-[1.08]">
              Fuel that's <br />
              <span className="text-[#0284C7]">guaranteed genuine.</span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[#64748B] max-w-lg leading-relaxed">
              Top brands, sealed and sourced right. Free delivery across India.
            </p>

            {/* In-Hero Search Input (Exact Wave Nutrition Pill with Blue Search Button) */}
            <div className="max-w-lg pt-1">
              <form onSubmit={handleHeroSearchSubmit} className="relative flex items-center shadow-sm rounded-full bg-[#FFFFFF] border border-[#CBD5E1] p-1.5 focus-within:border-[#0284C7] focus-within:ring-2 focus-within:ring-[#0284C7]/20 transition-all">
                <Search className="w-5 h-5 text-[#94A3B8] ml-3.5" />
                <input
                  type="text"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  placeholder="Search protein, brands..."
                  className="w-full bg-transparent px-3 py-2 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Action Buttons: "Shop all" (Dark Slate) & "Brands" (White with Border) */}
            <div className="pt-2 flex items-center gap-3">
              <Link
                to="/shop"
                className="px-8 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                Shop all
              </Link>

              <Link
                to="/brands"
                className="px-8 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#F8FAFC] text-[#0F172A] border border-[#0F172A] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                Brands
              </Link>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN (Wave Nutrition Exact Showcase Card with 3 Tubs & Animation)
             ========================================================================= */}
          <div className="lg:col-span-6 relative">
            <div 
              className="relative rounded-3xl bg-[#F0F7FC] border border-[#E0EEF8] p-6 sm:p-8 aspect-[4/3] flex flex-col justify-between overflow-hidden shadow-sm group"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Soft Cyan Spotlight Glow behind product tubs */}
              <div className="absolute inset-0 bg-radial from-[#38BDF8]/25 via-transparent to-transparent pointer-events-none" />

              {/* Navigation Arrows (Visible on hover) */}
              <button
                onClick={prevSlide}
                aria-label="Previous showcase"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#0F172A] shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-30"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next showcase"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#0F172A] shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-30"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Animated Product Tubs Composition (Exact Wave Nutrition 3-Tub Lineup) */}
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
                    {/* Left Tub (Rotated slightly, subtle shadow) */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                      className="relative w-28 sm:w-36 aspect-square rounded-2xl overflow-hidden bg-white/90 p-2 shadow-lg border border-slate-100 -rotate-3 z-10"
                    >
                      <img
                        src={activeSet.tubs.left.image}
                        alt={activeSet.tubs.left.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <span className="absolute bottom-1 left-0 right-0 text-center font-mono text-[9px] font-bold text-slate-700 bg-white/80 py-0.5">
                        {activeSet.tubs.left.name}
                      </span>
                    </motion.div>

                    {/* Center Tub (Prominent front & center with realistic elevated shadow) */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.2 }}
                      className="relative w-36 sm:w-44 aspect-square rounded-2xl overflow-hidden bg-white p-2.5 shadow-2xl border-2 border-[#0284C7]/20 scale-110 z-20"
                    >
                      <img
                        src={activeSet.tubs.center.image}
                        alt={activeSet.tubs.center.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-0.5 rounded-full bg-[#0284C7] text-white text-[9px] font-bold uppercase tracking-wider">
                          Verified
                        </span>
                      </div>
                      <span className="absolute bottom-1 left-0 right-0 text-center font-mono text-[10px] font-extrabold text-[#0284C7] bg-white/90 py-0.5">
                        {activeSet.tubs.center.name}
                      </span>
                    </motion.div>

                    {/* Right Tub (Rotated slightly, subtle shadow) */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.4 }}
                      className="relative w-28 sm:w-36 aspect-square rounded-2xl overflow-hidden bg-white/90 p-2 shadow-lg border border-slate-100 rotate-3 z-10"
                    >
                      <img
                        src={activeSet.tubs.right.image}
                        alt={activeSet.tubs.right.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <span className="absolute bottom-1 left-0 right-0 text-center font-mono text-[9px] font-bold text-slate-700 bg-white/80 py-0.5">
                        {activeSet.tubs.right.name}
                      </span>
                    </motion.div>

                    {/* Floor Reflection Shadow Effect */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-slate-400/20 rounded-full blur-md pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Floating Card & Blue Action Pill (Exact Wave Nutrition Composition) */}
              <div className="relative z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                {/* Floating White Pill Card at Bottom Left */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSet.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 sm:p-3.5 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E2E8F0] shadow-md text-left flex-1 max-w-sm"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold block">
                      {activeSet.categoryTag}
                    </span>
                    <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#0F172A] line-clamp-1 leading-snug">
                      {activeSet.title}
                    </h4>
                    <p className="font-heading font-bold text-xs sm:text-sm text-[#0F172A] mt-0.5">
                      {activeSet.price}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Floating Vibrant Blue Action Button at Bottom Right */}
                <Link
                  to={`/category/${activeSet.categorySlug}`}
                  className="px-6 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>{activeSet.ctaText}</span>
                </Link>
              </div>
            </div>

            {/* Bottom Pagination Dots (Wave Nutrition Style) */}
            <div className="flex items-center justify-center gap-2 pt-4">
              {SHOWCASE_SETS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#0284C7]'
                      : 'w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

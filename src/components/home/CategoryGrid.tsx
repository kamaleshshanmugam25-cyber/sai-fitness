import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../../data/categories';
import { PREMIUM_EASING } from '../../utils/motion';

export const CategoryGrid: React.FC = () => {
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

  const getProductCount = (slug: string) => {
    switch (slug) {
      case 'whey-protein': return '42 Products';
      case 'pre-workout': return '39 Products';
      case 'creatine': return '19 Products';
      case 'mass-gainers': return '21 Products';
      case 'bcaa-amino-acids': return '16 Products';
      case 'vitamins-minerals': return '28 Products';
      case 'protein-bars': return '12 Products';
      case 'fitness-accessories': return '14 Products';
      default: return '15+ Products';
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FFFDF5] border-b border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Viewport Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: PREMIUM_EASING }}
          className="flex items-end justify-between mb-8 gap-4 text-left"
        >
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#858585] font-bold">
              Browse
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#252525] uppercase tracking-tight">
              Browse <span className="text-[#F4BE38]">CATEGORIES</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/shop"
              className="text-xs sm:text-sm font-heading font-bold text-[#252525] hover:text-[#F4BE38] hover:underline flex items-center gap-1 group"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 text-[#F4BE38] group-hover:translate-x-1 transition-transform duration-200" />
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

        {/* Categories Grid with Staggered Viewport Entrance */}
        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: PREMIUM_EASING }
                }
              }}
            >
              <Link
                to={`/category/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#EAE6DC] hover:border-[#F4BE38]/70 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between shadow-sm text-left h-full"
              >
                {/* Category Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF4D6]">
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/products/placeholder-supplement.svg';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#EAE6DC] text-[10px] font-mono tracking-widest uppercase text-[#F4BE38] font-bold shadow-sm">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Content with Category Title & Arrow physics */}
                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-[#252525] group-hover:text-[#F4BE38] group-hover:-translate-y-0.5 transition-all duration-200 leading-snug">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#858585] mt-0.5 font-medium">
                      {getProductCount(cat.slug)}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#252525] group-hover:text-[#F4BE38] transition-colors">
                    <span>Explore products</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F4BE38] group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

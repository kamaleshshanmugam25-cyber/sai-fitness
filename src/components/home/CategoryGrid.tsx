import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

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
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wave Nutrition 2-Tone Section Header */}
        <div className="flex items-end justify-between mb-8 gap-4 text-left">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#64748B] font-bold">
              Browse
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] uppercase tracking-tight">
              Browse <span className="text-[#0284C7]">CATEGORIES</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/shop"
              className="text-xs sm:text-sm font-heading font-bold text-[#0284C7] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 text-[#0284C7]" />
            </Link>

            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#CBD5E1] hover:bg-[#0284C7] hover:text-[#FFFFFF] text-[#0F172A] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#CBD5E1] hover:bg-[#0284C7] hover:text-[#FFFFFF] text-[#0F172A] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
        >
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#BAE6FD] hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm text-left"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F1F5F9]">
                <img
                  src={cat.heroImage}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E2E8F0] text-[10px] font-mono tracking-widest uppercase text-[#0284C7] font-bold shadow-sm">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Content with Product Count */}
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-base text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] font-mono text-[#64748B] mt-0.5 font-medium">
                    {getProductCount(cat.slug)}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#0284C7]">
                  <span>Explore products</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

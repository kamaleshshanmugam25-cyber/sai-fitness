import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const BrandShowcase: React.FC = () => {
  const brands = BRAND_CONFIG.supportedBrands;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wave Nutrition 2-Tone Section Header */}
        <div className="flex items-end justify-between mb-8 gap-4 text-left">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#64748B] font-bold">
              Shop By
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] uppercase tracking-tight">
              TOP <span className="text-[#0284C7]">BRANDS</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/brands"
              className="text-xs sm:text-sm font-heading font-bold text-[#0284C7] hover:underline flex items-center gap-1"
            >
              <span>All brands</span>
              <ArrowRight className="w-4 h-4 text-[#0284C7]" />
            </Link>

            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] hover:bg-[#0284C7] hover:text-[#FFFFFF] text-[#0F172A] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] hover:bg-[#0284C7] hover:text-[#FFFFFF] text-[#0F172A] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Brand Cards Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5"
        >
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/shop?brand=${encodeURIComponent(brand.name)}`}
              className="group p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BAE6FD] hover:bg-[#FFFFFF] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md text-left"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold">
                    {brand.origin} Formulation
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-[#64748B] line-clamp-2">
                  {brand.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0]/70 flex items-center justify-between text-xs font-bold text-[#0284C7]">
                <span className="font-mono text-[10px] text-[#64748B]">Official Import</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

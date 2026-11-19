import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, ShieldCheck } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#263C32] p-8 sm:p-14 lg:p-16 text-[#FFFFFF] shadow-2xl border border-[#324D41]">
          {/* Subtle Organic Background Details */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D5AD65]/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1C2D25] rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2D25] border border-[#D5AD65]/30 text-xs font-mono text-[#D5AD65]">
              <Tag className="w-3.5 h-3.5" />
              <span>SPECIAL PROMOTION: USE CODE SAIFIT10</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#FFFFFF] uppercase tracking-tight leading-tight">
              FUEL YOUR <br />
              <span className="text-[#D5AD65]">AMBITION.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#E8E4DA] leading-relaxed">
              Discover nutrition that supports your performance goals. Authentic protein powders, creatine, and pre-workouts from global brands.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/shop"
                className="px-8 py-3.5 rounded-xl bg-[#D5AD65] hover:bg-[#C49B52] text-[#263C32] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>EXPLORE OFFERS</span>
                <ArrowRight className="w-4 h-4 text-[#263C32]" />
              </Link>

              <div className="flex items-center gap-2 text-xs text-[#E8E4DA] px-2 py-1">
                <ShieldCheck className="w-4 h-4 text-[#D5AD65]" />
                <span>10% Instant Savings on orders over ₹1,499</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_CONFIG } from '../config/brandConfig';
import { PRODUCTS } from '../data/products';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BrandsPage: React.FC = () => {
  const brands = BRAND_CONFIG.supportedBrands;

  return (
    <div className="py-12 bg-[#F8F6F0] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <nav className="flex items-center gap-2 text-xs text-[#85877F]">
          <Link to="/" className="hover:text-[#263C32]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <span className="text-[#263C32] font-semibold">Supported Brands</span>
        </nav>

        <div className="space-y-3 border-b border-[#E8E4DA] pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
            MULTI-BRAND SPORTS NUTRITION
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#252821] uppercase tracking-tight">
            SUPPORTED BRANDS
          </h1>
          <p className="text-xs sm:text-sm text-[#85877F] max-w-2xl leading-relaxed">
            We inventory stock exclusively from authorized Indian master importers with intact manufacturer batch security seals and verified lab analysis certificates.
          </p>
        </div>

        {/* Brands Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => {
            const productCount = PRODUCTS.filter((p) => p.brand === brand.name).length;
            return (
              <div
                key={brand.id}
                className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] hover:border-[#263C32]/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D5AD65] font-bold">
                      {brand.origin} Formulation
                    </span>
                    <span className="text-[11px] font-mono text-[#85877F]">
                      {productCount} Products In Vault
                    </span>
                  </div>

                  <h3 className="font-title font-extrabold text-2xl text-[#252821] group-hover:text-[#263C32] transition-colors">
                    {brand.name}
                  </h3>

                  <p className="text-xs text-[#85877F] leading-relaxed">
                    {brand.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E4DA] space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#85877F]">
                    <CheckCircle2 className="w-4 h-4 text-[#263C32] shrink-0" />
                    <span>Official Importer Hologram Verification</span>
                  </div>

                  <Link
                    to={`/shop?brand=${encodeURIComponent(brand.name)}`}
                    className="w-full py-3 rounded-xl bg-[#263C32] hover:bg-[#1C2D25] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>EXPLORE {brand.name.toUpperCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D5AD65]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authenticity Notice */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] border border-[#E8E4DA] flex items-center justify-center text-[#263C32] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#252821]">Are You an Authorized Brand Importer?</h4>
              <p className="text-xs text-[#85877F] mt-0.5">
                We continuously expand our multi-brand vault with certified, lab-tested supplement formulations.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-[#263C32] hover:bg-[#1C2D25] text-xs font-heading font-bold uppercase tracking-wider text-[#FFFFFF] shrink-0 shadow-sm"
          >
            CONTACT PROCUREMENT
          </Link>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_CONFIG } from '../config/brandConfig';
import { PRODUCTS } from '../data/products';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASING } from '../utils/motion';

export const BrandsPage: React.FC = () => {
  const brands = BRAND_CONFIG.supportedBrands;

  return (
    <div className="py-12 bg-[#FFFDF5] min-h-screen text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <nav className="flex items-center gap-2 text-xs text-[#858585]">
          <Link to="/" className="hover:text-[#F4BE38] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#EAE6DC]" />
          <span className="text-[#252525] font-semibold">Supported Brands</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: PREMIUM_EASING }}
          className="space-y-3 border-b border-[#EAE6DC] pb-8"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
            MULTI-BRAND SPORTS NUTRITION
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#252525] uppercase tracking-tight">
            SUPPORTED BRANDS
          </h1>
          <p className="text-xs sm:text-sm text-[#858585] max-w-2xl leading-relaxed">
            We inventory stock exclusively from authorized Indian master importers with intact manufacturer batch security seals and verified lab analysis certificates.
          </p>
        </motion.div>

        {/* Brands Detailed Grid with Staggered Entrance */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {brands.map((brand) => {
            const productCount = PRODUCTS.filter((p) => p.brand === brand.name).length;
            return (
              <motion.div
                key={brand.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
                }}
                className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] hover:border-[#F4BE38]/80 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between space-y-6 shadow-sm group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F4BE38] font-bold">
                      {brand.origin} Formulation
                    </span>
                    <span className="text-[11px] font-mono text-[#858585]">
                      {productCount} Products In Vault
                    </span>
                  </div>

                  <h3 className="font-title font-extrabold text-2xl text-[#252525] group-hover:text-[#F4BE38] transition-colors">
                    {brand.name}
                  </h3>

                  <p className="text-xs text-[#858585] leading-relaxed">
                    {brand.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE6DC] space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#858585]">
                    <CheckCircle2 className="w-4 h-4 text-[#F4BE38] shrink-0" />
                    <span>Official Importer Hologram Verification</span>
                  </div>

                  <Link
                    to={`/shop?brand=${encodeURIComponent(brand.name)}`}
                    className="btn-shine w-full py-3 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm group/btn"
                  >
                    <span>EXPLORE {brand.name.toUpperCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#252525] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Authenticity Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: PREMIUM_EASING }}
          className="p-8 rounded-3xl bg-[#FFF4D6] border border-[#EAE6DC] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#EDDA5E] flex items-center justify-center text-[#F4BE38] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#252525]">Are You an Authorized Brand Importer?</h4>
              <p className="text-xs text-[#858585] mt-0.5">
                We continuously expand our multi-brand vault with certified, lab-tested supplement formulations.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="btn-shine px-6 py-3 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-xs font-heading font-bold uppercase tracking-wider text-[#252525] shrink-0 shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            CONTACT PROCUREMENT
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

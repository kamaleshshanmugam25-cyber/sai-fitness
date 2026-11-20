import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASING } from '../../utils/motion';

export const PromoBanner: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FFF4D6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: PREMIUM_EASING }}
          className="relative rounded-3xl overflow-hidden bg-[#333333] p-8 sm:p-14 lg:p-16 text-[#FFFFFF] shadow-2xl border border-[#252525]"
        >
          {/* Subtle Organic Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4BE38]/20 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#252525] rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: PREMIUM_EASING }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#252525] border border-[#F4BE38]/40 text-xs font-mono text-[#F4BE38]"
            >
              <Tag className="w-3.5 h-3.5 text-[#F4BE38]" />
              <span>SPECIAL PROMOTION: USE CODE SAIFIT10</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: PREMIUM_EASING }}
              className="font-heading font-extrabold text-3xl sm:text-5xl text-[#FFFFFF] uppercase tracking-tight leading-tight"
            >
              FUEL YOUR <br />
              <span className="text-[#F4BE38]">AMBITION.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: PREMIUM_EASING }}
              className="text-sm sm:text-base text-[#EAE6DC] leading-relaxed"
            >
              Discover nutrition that supports your performance goals. Authentic protein powders, creatine, and pre-workouts from global brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: PREMIUM_EASING }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                to="/shop"
                className="btn-shine px-8 py-3.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-xl active:scale-95 group"
              >
                <span>EXPLORE OFFERS</span>
                <ArrowRight className="w-4 h-4 text-[#252525] group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-2 text-xs text-[#EAE6DC] px-2 py-1">
                <ShieldCheck className="w-4 h-4 text-[#F4BE38]" />
                <span>10% Instant Savings on orders over ₹1,499</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

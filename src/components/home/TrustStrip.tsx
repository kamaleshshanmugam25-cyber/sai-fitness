import React from 'react';
import { ShieldCheck, Truck, Dumbbell, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { PREMIUM_EASING } from '../../utils/motion';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: '100% Genuine Nutrition',
      description: 'Sealed supplements directly from authorized master importers with verifiable batch codes.'
    },
    {
      icon: Dumbbell,
      title: 'Unisex Gym & Coaching',
      description: 'Professional gym training, contest bodybuilding prep, and guided weight-loss transformation coaching.'
    },
    {
      icon: Star,
      title: `${BRAND_CONFIG.googleRating} ⭐ Google Rating`,
      description: `Backed by ${BRAND_CONFIG.googleReviewsDisplay}+ verified Google reviews from our dedicated Trichy fitness family.`
    },
    {
      icon: Truck,
      title: 'Free India-Wide Delivery',
      description: 'Dispatched within 24h with tamper-evident packaging on all supplement orders over ₹1,999.'
    }
  ];

  return (
    <section className="bg-[#FFF4D6] border-b border-[#EAE6DC] py-8 sm:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: PREMIUM_EASING }}
          className="text-center mb-6"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#252525] font-bold">
            WHY SHOP WITH SAI FITNESS
          </span>
        </motion.div>

        <motion.div
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: PREMIUM_EASING }
                  }
                }}
                className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm hover:border-[#F4BE38]/70 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF4D6] border border-[#EDDA5E]/40 flex items-center justify-center text-[#252525] shrink-0 group-hover:scale-105 group-hover:bg-[#F4BE38] group-hover:text-[#252525] transition-all duration-200">
                  <IconComponent className="w-5 h-5 transition-transform duration-200" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-heading font-extrabold text-sm text-[#252525] group-hover:text-[#252525] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#858585] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

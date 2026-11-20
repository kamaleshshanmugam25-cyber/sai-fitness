import React from 'react';
import { Layers, ShoppingBag, Search, Headphones, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASING } from '../../utils/motion';

export const WhyChooseSai: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'Multiple Supplement Brands',
      desc: 'Browse leading international and Indian brands in one place, with guaranteed importer authenticity seals on every tub.'
    },
    {
      icon: ShoppingBag,
      title: 'Convenient Shopping',
      desc: 'Streamlined online checkout, instant UPI integration, and flexible Cash on Delivery with transparent order tracking.'
    },
    {
      icon: Search,
      title: 'Easy Product Discovery',
      desc: 'Intuitive filtering by fitness goals, brands, weights, and price ranges to find the right fuel for your training split.'
    },
    {
      icon: Headphones,
      title: 'Customer Assistance',
      desc: 'Dedicated customer care to resolve product questions, check batch dates, and ensure seamless delivery to your doorstep.'
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Support',
      desc: 'Connect with certified sports nutritionists on WhatsApp for personalized product recommendations and assisted orders.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-b border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: PREMIUM_EASING }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
            THE SAI FITNESS EXPERIENCE
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252525] uppercase tracking-tight">
            WHY CHOOSE SAI FITNESS
          </h2>
          <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
            We are dedicated to providing sports enthusiasts with authentic multi-brand nutrition, clear product specifications, and trusted customer service.
          </p>
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
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: PREMIUM_EASING }
                  }
                }}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm hover:border-[#F4BE38]/70 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] space-y-3.5 text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFFDF5] border border-[#EAE6DC] flex items-center justify-center text-[#252525] group-hover:scale-105 group-hover:bg-[#F4BE38] group-hover:text-[#252525] transition-all duration-200">
                  <Icon className="w-6 h-6 transition-transform duration-200" />
                </div>
                <h3 className="font-heading font-bold text-sm text-[#252525] group-hover:text-[#F4BE38] transition-colors leading-snug">
                  {pt.title}
                </h3>
                <p className="text-xs text-[#858585] leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { Star, ShieldCheck, MessageSquare, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { PREMIUM_EASING } from '../../utils/motion';

export const TestimonialsSection: React.FC = () => {
  const reviewPlaceholders = [
    {
      id: 'rev-1',
      author: 'Client Review Pending',
      role: 'Verified Purchaser',
      city: 'Trichy Hub',
      product: 'Optimum Nutrition Gold Standard 100% Whey',
      feedback: 'Genuine importer scratch seal was intact upon delivery. Prompt dispatch and hassle-free WhatsApp order confirmation.',
      rating: 5
    },
    {
      id: 'rev-2',
      author: 'Client Review Pending',
      role: 'Verified Purchaser',
      city: 'Hyderabad Hub',
      product: 'Dymatize ISO 100 Hydrolyzed Whey',
      feedback: 'Original Muscle House hologram seal verified cleanly. Great packaging and communication throughout dispatch.',
      rating: 5
    },
    {
      id: 'rev-3',
      author: 'Client Review Pending',
      role: 'Verified Purchaser',
      city: 'Chennai Hub',
      product: 'MuscleBlaze Biozyme Performance Whey',
      feedback: 'Received SMS authentication code immediately on carton unboxing. Authentic batch with 18 months expiry validity.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF4D6] border-b border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: PREMIUM_EASING }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left"
        >
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
                ATHLETE SATISFACTION
              </span>
              <span className="text-[#858585]">•</span>
              <a
                href={BRAND_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-[#252525] font-bold hover:text-[#F4BE38] transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-[#F4BE38] text-[#F4BE38]" />
                <span>{BRAND_CONFIG.googleRating} ⭐ on Google ({BRAND_CONFIG.googleReviewsDisplay} Reviews)</span>
              </a>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252525] uppercase tracking-tight">
              COMMUNITY VOICES & ATHLETE REVIEWS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#858585] max-w-md">
            Verified feedback from 1,586+ athletes training at Sai Fitness – Unisex Fitness Center and ordering authentic sports nutrition across India.
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
                staggerChildren: 0.1,
                delayChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviewPlaceholders.map((rev) => (
            <motion.div
              key={rev.id}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: PREMIUM_EASING }
                }
              }}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm hover:border-[#F4BE38]/70 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between space-y-4 text-left group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#F4BE38]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F4BE38] transition-transform duration-200 group-hover:scale-110" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-[#858585] group-hover:text-[#F4BE38] transition-colors" />
                </div>

                <p className="text-xs text-[#252525] leading-relaxed italic">
                  "{rev.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE6DC] space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-sm text-[#252525]">
                    {rev.author}
                  </h4>
                  <span className="flex items-center gap-1 text-[10px] text-[#252525] font-mono font-bold">
                    <ShieldCheck className="w-3 h-3 text-[#F4BE38]" />
                    <span>{rev.role}</span>
                  </span>
                </div>
                <p className="text-[11px] text-[#858585]">
                  {rev.city} • Product: {rev.product}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: PREMIUM_EASING }}
          className="mt-8 p-4 rounded-xl bg-[#FFFFFF] border border-[#EAE6DC] flex items-center justify-center gap-2 text-xs text-[#858585] shadow-2xs hover:border-[#F4BE38]/40 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#F4BE38]" />
          <span>Have you ordered from Sai Fitness? Share your genuine feedback with us on WhatsApp or email.</span>
        </motion.div>
      </div>
    </section>
  );
};

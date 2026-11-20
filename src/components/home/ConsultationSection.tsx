import React from 'react';
import { Phone, MapPin, Truck, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { Link } from 'react-router-dom';
import { PREMIUM_EASING } from '../../utils/motion';

export const ConsultationSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#333333] text-[#FFFFFF] relative overflow-hidden border-b border-[#252525]">
      {/* Ambient Glows with Fade Entrance */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: PREMIUM_EASING }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4BE38]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF4D6]/10 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Reassurance Copy with Fade-Up */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: PREMIUM_EASING }}
            className="lg:col-span-5 space-y-4 text-left"
          >
            <div className="flex items-center gap-3 pb-1">
              <div className="w-12 h-12 rounded-full p-0.5 bg-[#252525] border-2 border-[#F4BE38] shadow-lg shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Sai Fitness Official Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold block">
                  NOT SURE WHAT TO BUY?
                </span>
                <span className="text-[10px] font-mono text-[#EAE6DC]">WE SHAPE U • COACH CONSULTATION</span>
              </div>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight leading-tight">
              Talk to us before <br />
              <span className="text-[#F4BE38]">you order.</span>
            </h2>
            <p className="text-sm text-[#EAE6DC] leading-relaxed max-w-md">
              Tell us your fitness goal and budget and we'll suggest the right supplement, check flavour stock, or assist with your bulk order. Or visit our verified showroom in Trichy.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  'Hi Sai Fitness, I need expert advice on choosing the right supplements for my goal.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:-translate-y-0.5 active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 text-[#252525]" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1 text-[#252525] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3 Action Cards with Staggered Entrance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              }
            }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
          >
            {/* Card 1: Direct Call */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
              }}
            >
              <a
                href={`tel:${BRAND_CONFIG.phone}`}
                className="p-5 rounded-2xl bg-[#252525] border border-[#333333] hover:border-[#F4BE38]/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#333333] flex items-center justify-center text-[#F4BE38] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#FFFFFF] group-hover:text-[#F4BE38] transition-colors">
                      Call {BRAND_CONFIG.phone}
                    </h4>
                    <p className="text-xs text-[#858585] mt-1">
                      Product advice, dosage timing and direct order help.
                    </p>
                  </div>
                </div>
                <span className="mt-4 text-[11px] font-mono font-bold text-[#F4BE38] flex items-center gap-1">
                  <span>Call now</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>

            {/* Card 2: Physical Store Visit */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
              }}
            >
              <Link
                to="/contact"
                className="p-5 rounded-2xl bg-[#252525] border border-[#333333] hover:border-[#F4BE38]/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#333333] flex items-center justify-center text-[#F4BE38] group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#FFFFFF] group-hover:text-[#F4BE38] transition-colors">
                      Visit Our Trichy Gym
                    </h4>
                    <p className="text-xs text-[#858585] mt-1">
                      W Blvd Road, Trichy — Unisex gym training & supplements store.
                    </p>
                  </div>
                </div>
                <span className="mt-4 text-[11px] font-mono font-bold text-[#F4BE38] flex items-center gap-1">
                  <span>Store details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Card 3: Frictionless Order Tracking */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
              }}
            >
              <div className="p-5 rounded-2xl bg-[#252525] border border-[#333333] hover:border-[#F4BE38]/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#333333] flex items-center justify-center text-[#F4BE38] group-hover:scale-110 transition-transform">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#FFFFFF] group-hover:text-[#F4BE38] transition-colors">
                      Track Your Order
                    </h4>
                    <p className="text-xs text-[#858585] mt-1">
                      Order number and phone on WhatsApp, no complex login required.
                    </p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Sai Fitness, I want to track my order status.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-[11px] font-mono font-bold text-[#F4BE38] flex items-center gap-1"
                >
                  <span>Live dispatch tracking</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

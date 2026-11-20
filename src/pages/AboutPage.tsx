import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Dumbbell, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASING } from '../utils/motion';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#FFFDF5] min-h-screen text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner with Cinematic Fade Up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: PREMIUM_EASING }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Official Sai Fitness Emblem */}
          <div className="w-28 h-28 mx-auto rounded-full bg-[#252525] p-1 border-2 border-[#F4BE38] shadow-2xl hover:scale-105 hover:rotate-3 transition-all duration-300">
            <img
              src="/images/logo.png"
              alt="Sai Fitness Official Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#252525] font-bold px-3 py-1 rounded-full bg-[#FFF4D6] border border-[#EDDA5E] shadow-2xs">
              WE SHAPE U • YOU 🆚 YOU
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#858585] px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#EAE6DC] shadow-2xs">
              FOUNDER: @m.saisaran
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#252525] uppercase tracking-tight">
            SAI FITNESS — <br />
            <span className="text-[#F4BE38]">UNISEX FITNESS CENTER & NUTRITION HUB</span>
          </h1>
          <p className="text-sm sm:text-base text-[#858585] leading-relaxed">
            Tiruchirappalli's #1 rated fitness destination with 4.9 ⭐ from 1,586+ verified Google reviews. High-energy gym training, competitive bodybuilding coaching, structured weight-loss transformations, and 100% genuine sports supplements.
          </p>
        </motion.div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: PREMIUM_EASING }}
            className="space-y-6"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-[#F4BE38] font-bold">
              OUR MISSION & IDENTITY
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#252525] uppercase tracking-tight">
              MORE THAN A GYM. A COMMUNITY OF DEDICATED ATHLETES.
            </h2>
            <p className="text-sm text-[#858585] leading-relaxed">
              Located at No. 11A Subramania Swamy Kovil Street, W Blvd Road in Trichy, Sai Fitness operates as a premier Unisex Fitness Center equipped with advanced strength equipment, cardio conditioning, and contest prep coaching.
            </p>
            <p className="text-sm text-[#858585] leading-relaxed">
              Whether your goal is bodybuilding stage conditioning, sustainable weight-loss coaching, or general fitness longevity, our certified trainers work directly with you. To protect your hard work, our in-house supplement desk guarantees 100% authentic, tamper-evident nutrition sourced directly from official Indian master importers with verifiable scratch codes.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm hover:border-[#F4BE38] transition-all text-center">
                <span className="font-heading font-extrabold text-xl text-[#F4BE38]">4.9 ⭐</span>
                <p className="text-[11px] text-[#858585] mt-0.5 font-medium">1,586 Google Reviews</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm hover:border-[#F4BE38] transition-all text-center">
                <span className="font-heading font-extrabold text-xl text-[#252525]">Unisex</span>
                <p className="text-[11px] text-[#858585] mt-0.5 font-medium">AC Fitness Facility</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm hover:border-[#F4BE38] transition-all text-center">
                <span className="font-heading font-extrabold text-xl text-[#252525]">3 Core</span>
                <p className="text-[11px] text-[#858585] mt-0.5 font-medium">Training Programs</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm hover:border-[#F4BE38] transition-all text-center">
                <span className="font-heading font-extrabold text-xl text-[#F4BE38]">100%</span>
                <p className="text-[11px] text-[#858585] mt-0.5 font-medium">Genuine Importer Seals</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: PREMIUM_EASING }}
            className="relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#EAE6DC] p-3 shadow-md group"
          >
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
              alt="Sai Fitness Training Facility & Nutrition Hub"
              className="w-full h-[440px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          </motion.div>
        </div>

        {/* 4 Pillars of Integrity with Staggered Viewport Entrance */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: PREMIUM_EASING }}
            className="text-center max-w-xl mx-auto space-y-2"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
              CORE PILLARS
            </span>
            <h3 className="font-heading font-extrabold text-3xl text-[#252525] uppercase tracking-tight">
              FOUR PILLARS OF SAI FITNESS
            </h3>
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
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              {
                icon: ShieldCheck,
                title: 'Importer Direct',
                desc: 'Direct contractual relationships with official Indian importers ensure uncompromised provenance for every canister.'
              },
              {
                icon: Award,
                title: 'Batch Transparency',
                desc: 'We disclose shelf-life and batch dates proactively before order confirmation on WhatsApp or online checkout.'
              },
              {
                icon: Dumbbell,
                title: 'Athlete Advisory',
                desc: 'Our advisors are certified sports nutritionists with practical fitness training experience.'
              },
              {
                icon: CheckCircle2,
                title: 'Rapid Logistics',
                desc: 'Heavy-duty multi-layer corrugation protects fragile protein seals from vibration during transit.'
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
                  }}
                  className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm hover:border-[#F4BE38]/80 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] space-y-3 group"
                >
                  <Icon className="w-8 h-8 text-[#F4BE38] group-hover:scale-110 transition-transform duration-200" />
                  <h4 className="font-heading font-bold text-base text-[#252525] group-hover:text-[#F4BE38] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#858585] leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA to Shop with Banner Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: PREMIUM_EASING }}
          className="p-10 rounded-3xl bg-[#333333] border border-[#252525] text-[#FFFDF5] text-center space-y-4 shadow-xl"
        >
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FFFDF5] uppercase tracking-tight">
            READY TO FUEL YOUR NEXT LEVEL?
          </h3>
          <p className="text-xs sm:text-sm text-[#FFFDF5]/80 max-w-lg mx-auto">
            Browse our curated selection of verified multi-brand sports nutrition formulations.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 shadow-sm group"
            >
              <span>EXPLORE CATALOGUE</span>
              <ArrowRight className="w-4 h-4 text-[#252525] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

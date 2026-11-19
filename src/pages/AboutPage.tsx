import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Dumbbell, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#F8F6F0] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
            THE SAI FITNESS STANDARD
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#252821] uppercase tracking-tight">
            FUEL YOUR BODY. <br />
            <span className="text-[#263C32]">ELEVATE YOUR PERFORMANCE.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#85877F] leading-relaxed">
            Founded to eliminate the pervasive scourge of counterfeit sports supplements in India. We connect athletes directly with verified international formulation imports.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#D5AD65] font-bold">
              OUR MISSION & PRINCIPLE
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#252821] uppercase tracking-tight">
              NEVER GUESS WHAT IS INSIDE YOUR SHAKER.
            </h2>
            <p className="text-sm text-[#85877F] leading-relaxed">
              In fitness, precision is everything. A gram of protein missed or an adulterated batch consumed undermines months of discipline under the barbell. SAI FITNESS was created as a trusted multi-brand store for certified sports nutrition.
            </p>
            <p className="text-sm text-[#85877F] leading-relaxed">
              Every single product stocked in our temperature-controlled facility is acquired directly through official, licensed Indian master importers—including Glanbia Performance Nutrition India, Bright Performance, Muscle House, and Guardian Healthcare. We never purchase from grey-market middlemen or unauthorized stockists.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm">
                <span className="font-heading font-extrabold text-2xl text-[#263C32]">100%</span>
                <p className="text-xs text-[#85877F] mt-1 font-medium">Scratch Code Authenticity</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm">
                <span className="font-heading font-extrabold text-2xl text-[#D5AD65]">FSSAI</span>
                <p className="text-xs text-[#85877F] mt-1 font-medium">Registered Compliance</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E8E4DA] p-3 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
              alt="Sai Fitness Training Facility & Nutrition Hub"
              className="w-full h-[440px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* 4 Pillars of Integrity */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
              CORE PILLARS
            </span>
            <h3 className="font-heading font-extrabold text-3xl text-[#252821] uppercase tracking-tight">
              FOUR PILLARS OF SAI FITNESS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#263C32]" />
              <h4 className="font-heading font-bold text-base text-[#252821]">Importer Direct</h4>
              <p className="text-xs text-[#85877F] leading-relaxed">
                Direct contractual relationships with official Indian importers ensure uncompromised provenance for every canister.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm space-y-3">
              <Award className="w-8 h-8 text-[#263C32]" />
              <h4 className="font-heading font-bold text-base text-[#252821]">Batch Transparency</h4>
              <p className="text-xs text-[#85877F] leading-relaxed">
                We disclose shelf-life and batch dates proactively before order confirmation on WhatsApp or online checkout.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm space-y-3">
              <Dumbbell className="w-8 h-8 text-[#263C32]" />
              <h4 className="font-heading font-bold text-base text-[#252821]">Athlete Advisory</h4>
              <p className="text-xs text-[#85877F] leading-relaxed">
                Our advisors are certified sports nutritionists with practical fitness training experience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#263C32]" />
              <h4 className="font-heading font-bold text-base text-[#252821]">Rapid Logistics</h4>
              <p className="text-xs text-[#85877F] leading-relaxed">
                Heavy-duty multi-layer corrugation protects fragile protein seals from vibration during transit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Shop */}
        <div className="p-10 rounded-3xl bg-[#263C32] text-[#FFFFFF] text-center space-y-4 shadow-xl">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FFFFFF] uppercase tracking-tight">
            READY TO FUEL YOUR NEXT LEVEL?
          </h3>
          <p className="text-xs sm:text-sm text-[#E8E4DA] max-w-lg mx-auto">
            Browse our curated selection of verified multi-brand sports nutrition formulations.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#D5AD65] hover:bg-[#C49B52] text-[#263C32] font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>EXPLORE CATALOGUE</span>
              <ArrowRight className="w-4 h-4 text-[#263C32]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

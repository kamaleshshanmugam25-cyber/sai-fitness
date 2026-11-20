import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { PREMIUM_EASING } from '../../utils/motion';

interface GoalConfig {
  id: string;
  pillLabel: string;
  subtitle: string;
  heading: string;
  description: string;
  categoryFilter: string;
}

const GOALS_DATA: GoalConfig[] = [
  {
    id: 'muscle-gain',
    pillLabel: 'BUILD MUSCLE',
    subtitle: 'Protein, creatine & aminos',
    heading: 'BUILD LEAN MUSCLE',
    description: 'Whey isolates, micronized creatine and BCAAs for rapid protein synthesis and accelerated recovery.',
    categoryFilter: 'whey-protein'
  },
  {
    id: 'weight-gain',
    pillLabel: 'GAIN WEIGHT',
    subtitle: 'Mass gainers & carbohydrates',
    heading: 'GAIN WEIGHT & MASS',
    description: 'Calorie-dense complex carbohydrate blends with digestive enzymes to fuel sustained bulking phases.',
    categoryFilter: 'mass-gainers'
  },
  {
    id: 'fat-loss',
    pillLabel: 'LOSE FAT',
    subtitle: 'Thermogenics & isolates',
    heading: 'FAT LOSS & DEFINITION',
    description: 'Ultra-low carb 100% isolates and clean energy pre-workouts to preserve lean mass during cutting phases.',
    categoryFilter: 'pre-workout'
  },
  {
    id: 'energy',
    pillLabel: 'ENERGY',
    subtitle: 'Pre-workout & electrolytes',
    heading: 'ENERGY & ENDURANCE',
    description: 'High-stimulant pre-workouts, citrulline pumps, and intra-workout amino electrolytes for peak workout intensity.',
    categoryFilter: 'pre-workout'
  },
  {
    id: 'health',
    pillLabel: 'HEALTH',
    subtitle: 'Vitamins & wellness',
    heading: 'DAILY HEALTH & RECOVERY',
    description: 'Athletic multivitamins, triple-strength omega-3 fish oils, and joint support complexes for longevity.',
    categoryFilter: 'vitamins-minerals'
  }
];

export const GoalsSection: React.FC = () => {
  const [activeGoalId, setActiveGoalId] = useState('muscle-gain');
  const activeGoal = GOALS_DATA.find((g) => g.id === activeGoalId) || GOALS_DATA[0];

  const goalProducts = PRODUCTS.filter((p) => p.category === activeGoal.categoryFilter).slice(0, 4);

  return (
    <section className="py-14 sm:py-20 bg-[#FFFDF5] border-b border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Viewport Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: PREMIUM_EASING }}
          className="space-y-1 mb-8 text-left"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#858585] font-bold">
            Shop By Goal
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#252525] uppercase tracking-tight">
            WHAT'S YOUR <span className="text-[#F4BE38]">GOAL?</span>
          </h2>
        </motion.div>

        {/* 5 Goal Pill Tabs with Smooth Physics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: PREMIUM_EASING }}
          className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-8 scrollbar-none"
        >
          {GOALS_DATA.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setActiveGoalId(goal.id)}
              className={`px-5 py-2.5 rounded-full font-heading font-extrabold text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:scale-95 ${
                activeGoalId === goal.id
                  ? 'bg-[#F4BE38] text-[#252525] shadow-md scale-105'
                  : 'bg-[#FFFFFF] text-[#252525] hover:bg-[#FFF4D6] hover:text-[#252525] border border-[#EAE6DC]'
              }`}
            >
              {goal.pillLabel}
            </button>
          ))}
        </motion.div>

        {/* Active Goal Context Bar with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: PREMIUM_EASING }}
            className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
          >
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
                {activeGoal.subtitle}
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#252525]">
                {activeGoal.heading}
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] max-w-2xl leading-relaxed">
                {activeGoal.description}
              </p>
            </div>

            <Link
              to={`/category/${activeGoal.categoryFilter}`}
              className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider shrink-0 transition-all duration-200 shadow hover:-translate-y-0.5 active:scale-95 group"
            >
              <span>Shop All {activeGoal.pillLabel}</span>
              <ArrowRight className="w-4 h-4 text-[#252525] group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Curated Product Cards Grid with Staggered Viewport Entrance */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal.id}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {goalProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: PREMIUM_EASING }
                  }
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

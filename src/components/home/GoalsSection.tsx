import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

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
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wave Nutrition 2-Tone Section Header */}
        <div className="space-y-1 mb-8 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#64748B] font-bold">
            Shop By Goal
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] uppercase tracking-tight">
            WHAT'S YOUR <span className="text-[#0284C7]">GOAL?</span>
          </h2>
        </div>

        {/* 5 Wave Nutrition Goal Pill Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {GOALS_DATA.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setActiveGoalId(goal.id)}
              className={`px-5 py-2.5 rounded-full font-heading font-extrabold text-xs tracking-wider uppercase whitespace-nowrap transition-all shadow-sm ${
                activeGoalId === goal.id
                  ? 'bg-[#0284C7] text-[#FFFFFF] shadow-md scale-105'
                  : 'bg-[#FFFFFF] text-[#0F172A] hover:bg-[#F0F7FC] hover:text-[#0284C7] border border-[#E2E8F0]'
              }`}
            >
              {goal.pillLabel}
            </button>
          ))}
        </div>

        {/* Active Goal Context Bar */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0284C7] font-bold">
              {activeGoal.subtitle}
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F172A]">
              {activeGoal.heading}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl leading-relaxed">
              {activeGoal.description}
            </p>
          </div>

          <Link
            to={`/category/${activeGoal.categoryFilter}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow hover:scale-105"
          >
            <span>Shop All {activeGoal.pillLabel}</span>
            <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
          </Link>
        </div>

        {/* Curated Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

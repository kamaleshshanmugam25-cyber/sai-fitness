import type { GoalMetadata } from '../types';

export const FITNESS_GOALS: GoalMetadata[] = [
  {
    id: 'muscle-gain',
    slug: 'muscle-gain',
    title: 'Muscle Gain',
    shortDesc: 'High-protein isolates, mass builders, and amino acid formulations designed for hypertrophy.',
    recommendedCategory: 'whey-protein',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    badge: 'Hypertrophy'
  },
  {
    id: 'strength-performance',
    slug: 'strength-performance',
    title: 'Strength & Performance',
    shortDesc: 'Micronized creatine and high-intensity pre-workouts to amplify power output under heavy loads.',
    recommendedCategory: 'creatine',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    badge: 'Peak Power'
  },
  {
    id: 'recovery',
    slug: 'recovery',
    title: 'Muscle Recovery',
    shortDesc: 'Fermented 2:1:1 BCAAs, EAAs, and glutamine matrices to accelerate tissue repair and combat fatigue.',
    recommendedCategory: 'bcaa-amino-acids',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
    badge: 'Repair & Hydration'
  },
  {
    id: 'daily-nutrition',
    slug: 'daily-nutrition',
    title: 'Daily Nutrition',
    shortDesc: 'Athletic multivitamins, omega-3 fatty acids, and clean protein bars for foundational wellness.',
    recommendedCategory: 'vitamins-health',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    badge: 'Foundational'
  },
  {
    id: 'endurance',
    slug: 'endurance',
    title: 'Endurance & Stamina',
    shortDesc: 'Electrolyte rehydration blends and sustained-release energy fuel for long-distance training.',
    recommendedCategory: 'pre-workout',
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=800&auto=format&fit=crop',
    badge: 'Stamina'
  }
];

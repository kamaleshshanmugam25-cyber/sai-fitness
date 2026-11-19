import React, { useState } from 'react';
import type { Product } from '../../types';
import { ShieldCheck, CheckCircle2, AlertTriangle, Truck } from 'lucide-react';

interface NutritionTableProps {
  product: Product;
}

export const NutritionTable: React.FC<NutritionTableProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<'nutrition' | 'ingredients' | 'usage' | 'authenticity'>('nutrition');

  const { nutritionalFacts, ingredients, usageInstructions, authenticity } = product;

  return (
    <div className="rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] overflow-hidden shadow-sm text-left">
      {/* Tabs Header */}
      <div className="flex border-b border-[#E8E4DA] bg-[#F8F6F0] overflow-x-auto">
        <button
          onClick={() => setActiveTab('nutrition')}
          className={`px-6 py-4 text-xs font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
            activeTab === 'nutrition'
              ? 'text-[#263C32] border-b-2 border-[#263C32] bg-[#FFFFFF]'
              : 'text-[#85877F] hover:text-[#252821]'
          }`}
        >
          Nutritional Information
        </button>

        <button
          onClick={() => setActiveTab('ingredients')}
          className={`px-6 py-4 text-xs font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
            activeTab === 'ingredients'
              ? 'text-[#263C32] border-b-2 border-[#263C32] bg-[#FFFFFF]'
              : 'text-[#85877F] hover:text-[#252821]'
          }`}
        >
          Ingredients Breakdown
        </button>

        <button
          onClick={() => setActiveTab('usage')}
          className={`px-6 py-4 text-xs font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
            activeTab === 'usage'
              ? 'text-[#263C32] border-b-2 border-[#263C32] bg-[#FFFFFF]'
              : 'text-[#85877F] hover:text-[#252821]'
          }`}
        >
          Directions & Usage
        </button>

        <button
          onClick={() => setActiveTab('authenticity')}
          className={`px-6 py-4 text-xs font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
            activeTab === 'authenticity'
              ? 'text-[#263C32] border-b-2 border-[#263C32] bg-[#FFFFFF]'
              : 'text-[#85877F] hover:text-[#252821]'
          }`}
        >
          Importer & Authenticity
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-6 sm:p-8">
        {/* 1. Nutrition Facts */}
        {activeTab === 'nutrition' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA]">
              <div>
                <span className="text-[11px] text-[#85877F] uppercase font-mono">Serving Size</span>
                <p className="font-heading font-bold text-sm text-[#252821]">{nutritionalFacts.servingSize}</p>
              </div>
              <div>
                <span className="text-[11px] text-[#85877F] uppercase font-mono">Servings Per Container</span>
                <p className="font-heading font-bold text-sm text-[#263C32]">{nutritionalFacts.servingsPerContainer} Servings</p>
              </div>
              <div>
                <span className="text-[11px] text-[#85877F] uppercase font-mono">Calories</span>
                <p className="font-heading font-bold text-sm text-[#252821]">{nutritionalFacts.caloriesPerServing}</p>
              </div>
            </div>

            {/* Macro Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#252821]">
                <thead className="border-b border-[#E8E4DA] text-[#85877F] uppercase font-mono text-[10px]">
                  <tr>
                    <th className="py-2.5">Nutrient Composition</th>
                    <th className="py-2.5">Amount Per Serving</th>
                    <th className="py-2.5 text-right">% Daily Value*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E4DA] font-mono">
                  <tr>
                    <td className="py-3 font-sans font-bold text-sm text-[#263C32]">Protein</td>
                    <td className="py-3 font-bold text-[#263C32]">{nutritionalFacts.proteinPerServing}</td>
                    <td className="py-3 text-right text-[#85877F]">—</td>
                  </tr>
                  {nutritionalFacts.bcaaPerServing && (
                    <tr>
                      <td className="py-2.5 font-sans">Naturally Occurring BCAAs</td>
                      <td className="py-2.5">{nutritionalFacts.bcaaPerServing}</td>
                      <td className="py-2.5 text-right text-[#85877F]">—</td>
                    </tr>
                  )}
                  {nutritionalFacts.creatinePerServing && (
                    <tr>
                      <td className="py-2.5 font-sans">Creatine Monohydrate</td>
                      <td className="py-2.5 text-[#263C32]">{nutritionalFacts.creatinePerServing}</td>
                      <td className="py-2.5 text-right text-[#85877F]">—</td>
                    </tr>
                  )}
                  {nutritionalFacts.caffeinePerServing && (
                    <tr>
                      <td className="py-2.5 font-sans">Caffeine Content</td>
                      <td className="py-2.5 text-[#263C32]">{nutritionalFacts.caffeinePerServing}</td>
                      <td className="py-2.5 text-right text-[#85877F]">—</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-2.5 font-sans">Total Carbohydrates</td>
                    <td className="py-2.5">{nutritionalFacts.carbsPerServing}</td>
                    <td className="py-2.5 text-right text-[#85877F]">—</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-sans">Added Sugars</td>
                    <td className="py-2.5">{nutritionalFacts.addedSugar}</td>
                    <td className="py-2.5 text-right text-[#85877F]">0%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-sans">Total Fats</td>
                    <td className="py-2.5">{nutritionalFacts.fatsPerServing}</td>
                    <td className="py-2.5 text-right text-[#85877F]">—</td>
                  </tr>
                  {nutritionalFacts.micronutrients?.map((micro, idx) => (
                    <tr key={idx}>
                      <td className="py-2.5 font-sans">{micro.label}</td>
                      <td className="py-2.5">{micro.value}</td>
                      <td className="py-2.5 text-right text-[#263C32] font-semibold">{micro.percentDailyValue || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-[#85877F] leading-relaxed">
              * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet based on standard adult reference guidelines.
            </p>
          </div>
        )}

        {/* 2. Ingredients */}
        {activeTab === 'ingredients' && (
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-[#252821]">Full Formulation Ingredients:</h4>
            <ul className="space-y-2">
              {ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#252821]">
                  <CheckCircle2 className="w-4 h-4 text-[#263C32] shrink-0 mt-0.5" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] text-xs text-[#85877F] space-y-1 mt-6">
              <span className="font-heading font-bold text-[#252821] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#D5AD65]" />
                Allergen Information:
              </span>
              <p>Contains milk, soy, and sunflower lecithin ingredients. Manufactured in cGMP compliant facilities.</p>
            </div>
          </div>
        )}

        {/* 3. Directions & Usage */}
        {activeTab === 'usage' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] space-y-1">
                <span className="text-[11px] text-[#263C32] uppercase font-mono font-bold">Recommended Dose</span>
                <p className="text-xs text-[#252821] font-medium">{usageInstructions.recommendedDose}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] space-y-1">
                <span className="text-[11px] text-[#263C32] uppercase font-mono font-bold">Optimal Timing</span>
                <p className="text-xs text-[#252821] font-medium">{usageInstructions.bestTimeToTake}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#85877F]">
              <h5 className="font-heading font-bold text-sm text-[#252821]">Directions:</h5>
              <p className="leading-relaxed text-[#252821]">{usageInstructions.directions}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#EFEEE7] border border-[#E8E4DA] text-xs text-[#85877F] space-y-1">
              <span className="font-heading font-bold text-[#252821]">Advisory Notice:</span>
              <p>{usageInstructions.warningNote}</p>
            </div>
          </div>
        )}

        {/* 4. Importer & Authenticity */}
        {activeTab === 'authenticity' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#F8F6F0] border border-[#263C32]/30 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#263C32]" />
                <h4 className="font-heading font-bold text-sm text-[#252821]">Official Importer Verification</h4>
              </div>
              <p className="text-xs text-[#85877F] leading-relaxed">
                Authorized Indian Master Importer: <strong className="text-[#252821]">{authenticity.importer}</strong>
              </p>
              <p className="text-xs text-[#85877F] leading-relaxed">
                Verification Protocol: {authenticity.batchTestedNotice}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#263C32] font-bold">
                <span>FSSAI License: {authenticity.fssaiLicense}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#EFEEE7] border border-[#E8E4DA] text-xs text-[#85877F] space-y-2">
              <div className="flex items-center gap-2 text-[#252821] font-bold">
                <Truck className="w-4 h-4 text-[#263C32]" />
                <span>Tamper-Evident Packaging</span>
              </div>
              <p>
                Every container is sealed with original manufacturer inner foils and dispatched in heavy-gauge corrugated cartons to safeguard integrity during transit.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

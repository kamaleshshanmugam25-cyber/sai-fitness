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
    <div className="rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] overflow-hidden shadow-sm text-left">
      {/* Tabs Header */}
      <div className="flex border-b border-[#EAE6DC] bg-[#FFFDF5] overflow-x-auto">
        <button
          onClick={() => setActiveTab('nutrition')}
          className={`px-6 py-4 text-xs font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
            activeTab === 'nutrition'
              ? 'text-[#252525] border-b-2 border-[#F4BE38] bg-[#FFFFFF]'
              : 'text-[#858585] hover:text-[#252525]'
          }`}
        >
          Nutritional Information
        </button>

        <button
          onClick={() => setActiveTab('ingredients')}
          className={`px-6 py-4 text-xs font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
            activeTab === 'ingredients'
              ? 'text-[#252525] border-b-2 border-[#F4BE38] bg-[#FFFFFF]'
              : 'text-[#858585] hover:text-[#252525]'
          }`}
        >
          Ingredients Breakdown
        </button>

        <button
          onClick={() => setActiveTab('usage')}
          className={`px-6 py-4 text-xs font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
            activeTab === 'usage'
              ? 'text-[#252525] border-b-2 border-[#F4BE38] bg-[#FFFFFF]'
              : 'text-[#858585] hover:text-[#252525]'
          }`}
        >
          Directions & Usage
        </button>

        <button
          onClick={() => setActiveTab('authenticity')}
          className={`px-6 py-4 text-xs font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
            activeTab === 'authenticity'
              ? 'text-[#252525] border-b-2 border-[#F4BE38] bg-[#FFFFFF]'
              : 'text-[#858585] hover:text-[#252525]'
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
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC]">
              <div>
                <span className="text-[11px] text-[#858585] uppercase font-mono">Serving Size</span>
                <p className="font-heading font-bold text-sm text-[#252525]">{nutritionalFacts.servingSize}</p>
              </div>
              <div>
                <span className="text-[11px] text-[#858585] uppercase font-mono">Servings Per Container</span>
                <p className="font-heading font-bold text-sm text-[#252525]">{nutritionalFacts.servingsPerContainer} Servings</p>
              </div>
              <div>
                <span className="text-[11px] text-[#858585] uppercase font-mono">Calories</span>
                <p className="font-heading font-bold text-sm text-[#252525]">{nutritionalFacts.caloriesPerServing}</p>
              </div>
            </div>

            {/* Macro Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#252525]">
                <thead className="border-b border-[#EAE6DC] text-[#858585] uppercase font-mono text-[10px]">
                  <tr>
                    <th className="py-2.5">Nutrient Composition</th>
                    <th className="py-2.5">Amount Per Serving</th>
                    <th className="py-2.5 text-right">% Daily Value*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE6DC] font-mono">
                  <tr>
                    <td className="py-3 font-sans font-bold text-sm text-[#252525]">Protein</td>
                    <td className="py-3 font-bold text-[#252525]">{nutritionalFacts.proteinPerServing}</td>
                    <td className="py-3 text-right text-[#858585]">—</td>
                  </tr>
                  {nutritionalFacts.bcaaPerServing && (
                    <tr>
                      <td className="py-2.5 font-sans">Naturally Occurring BCAAs</td>
                      <td className="py-2.5">{nutritionalFacts.bcaaPerServing}</td>
                      <td className="py-2.5 text-right text-[#858585]">—</td>
                    </tr>
                  )}
                  {nutritionalFacts.creatinePerServing && (
                    <tr>
                      <td className="py-2.5 font-sans">Creatine Monohydrate</td>
                      <td className="py-2.5 text-[#252525]">{nutritionalFacts.creatinePerServing}</td>
                      <td className="py-2.5 text-right text-[#858585]">—</td>
                    </tr>
                  )}
                  {nutritionalFacts.caffeinePerServing && (
                    <tr>
                      <td className="py-2.5 font-sans">Caffeine Content</td>
                      <td className="py-2.5 text-[#252525]">{nutritionalFacts.caffeinePerServing}</td>
                      <td className="py-2.5 text-right text-[#858585]">—</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-2.5 font-sans">Total Carbohydrates</td>
                    <td className="py-2.5">{nutritionalFacts.carbsPerServing}</td>
                    <td className="py-2.5 text-right text-[#858585]">—</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-sans">Added Sugars</td>
                    <td className="py-2.5">{nutritionalFacts.addedSugar}</td>
                    <td className="py-2.5 text-right text-[#858585]">0%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-sans">Total Fats</td>
                    <td className="py-2.5">{nutritionalFacts.fatsPerServing}</td>
                    <td className="py-2.5 text-right text-[#858585]">—</td>
                  </tr>
                  {nutritionalFacts.micronutrients?.map((micro, idx) => (
                    <tr key={idx}>
                      <td className="py-2.5 font-sans">{micro.label}</td>
                      <td className="py-2.5">{micro.value}</td>
                      <td className="py-2.5 text-right text-[#252525] font-semibold">{micro.percentDailyValue || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-[#858585] leading-relaxed">
              * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet based on standard adult reference guidelines.
            </p>
          </div>
        )}

        {/* 2. Ingredients */}
        {activeTab === 'ingredients' && (
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-[#252525]">Full Formulation Ingredients:</h4>
            <ul className="space-y-2">
              {ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#252525]">
                  <CheckCircle2 className="w-4 h-4 text-[#F4BE38] shrink-0 mt-0.5" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] text-xs text-[#858585] space-y-1 mt-6">
              <span className="font-heading font-bold text-[#252525] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#F4BE38]" />
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
              <div className="p-4 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] space-y-1">
                <span className="text-[11px] text-[#252525] uppercase font-mono font-bold">Recommended Dose</span>
                <p className="text-xs text-[#252525] font-medium">{usageInstructions.recommendedDose}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] space-y-1">
                <span className="text-[11px] text-[#252525] uppercase font-mono font-bold">Optimal Timing</span>
                <p className="text-xs text-[#252525] font-medium">{usageInstructions.bestTimeToTake}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#858585]">
              <h5 className="font-heading font-bold text-sm text-[#252525]">Directions:</h5>
              <p className="leading-relaxed text-[#252525]">{usageInstructions.directions}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] text-xs text-[#858585] space-y-1">
              <span className="font-heading font-bold text-[#252525]">Advisory Notice:</span>
              <p>{usageInstructions.warningNote}</p>
            </div>
          </div>
        )}

        {/* 4. Importer & Authenticity */}
        {activeTab === 'authenticity' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#FFF4D6] border border-[#EDDA5E] space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F4BE38]" />
                <h4 className="font-heading font-bold text-sm text-[#252525]">Official Importer Verification</h4>
              </div>
              <p className="text-xs text-[#858585] leading-relaxed">
                Authorized Indian Master Importer: <strong className="text-[#252525]">{authenticity.importer}</strong>
              </p>
              <p className="text-xs text-[#858585] leading-relaxed">
                Verification Protocol: {authenticity.batchTestedNotice}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#252525] font-bold">
                <span>FSSAI License: {authenticity.fssaiLicense}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] text-xs text-[#858585] space-y-2">
              <div className="flex items-center gap-2 text-[#252525] font-bold">
                <Truck className="w-4 h-4 text-[#F4BE38]" />
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

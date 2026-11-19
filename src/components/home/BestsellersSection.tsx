import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Percent } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

export const BestsellersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'on-sale' | 'new-arrivals' | 'all-bestsellers'>('on-sale');

  const displayProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'on-sale') return p.discountPercentage >= 20;
    if (activeTab === 'new-arrivals') return p.isNewArrival || p.stockCount > 25;
    return p.isBestseller;
  }).slice(0, 4);

  return (
    <section className="py-14 sm:py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wave Nutrition 2-Tone Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 text-left">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#64748B] font-bold">
              {activeTab === 'on-sale' ? 'LIMITED PERIOD SAVINGS' : 'JUST DROPPED IN VAULT'}
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight">
              {activeTab === 'on-sale' ? (
                <>
                  On <span className="text-[#0284C7] underline decoration-[#0284C7] decoration-4 underline-offset-8">Sale</span>
                </>
              ) : activeTab === 'new-arrivals' ? (
                <>
                  NEW <span className="text-[#0284C7]">ARRIVALS</span>
                </>
              ) : (
                <>
                  BEST <span className="text-[#0284C7]">SELLERS</span>
                </>
              )}
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('on-sale')}
              className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'on-sale'
                  ? 'bg-[#0284C7] text-[#FFFFFF] shadow-md'
                  : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#F0F7FC] hover:text-[#0284C7] border border-[#CBD5E1]'
              }`}
            >
              <Percent className="w-3.5 h-3.5 text-[#FFFFFF]" />
              <span>On Sale</span>
            </button>
            <button
              onClick={() => setActiveTab('new-arrivals')}
              className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'new-arrivals'
                  ? 'bg-[#0284C7] text-[#FFFFFF] shadow-md'
                  : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#F0F7FC] hover:text-[#0284C7] border border-[#CBD5E1]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>New Arrivals</span>
            </button>
            <button
              onClick={() => setActiveTab('all-bestsellers')}
              className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeTab === 'all-bestsellers'
                  ? 'bg-[#0284C7] text-[#FFFFFF] shadow-md'
                  : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#F0F7FC] hover:text-[#0284C7] border border-[#CBD5E1]'
              }`}
            >
              <span>All Bestsellers</span>
            </button>
          </div>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Shortcut */}
        <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex items-center justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#0284C7] hover:text-[#FFFFFF] text-[#0F172A] border border-[#CBD5E1] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-sm group"
          >
            <span>View Complete Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#0284C7] group-hover:text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

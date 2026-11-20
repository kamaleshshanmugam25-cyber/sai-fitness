import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Percent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { PREMIUM_EASING } from '../../utils/motion';

export const BestsellersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'on-sale' | 'new-arrivals' | 'all-bestsellers'>('on-sale');

  const displayProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'on-sale') return p.discountPercentage >= 20;
    if (activeTab === 'new-arrivals') return p.isNewArrival || p.stockCount > 25;
    return p.isBestseller;
  }).slice(0, 4);

  return (
    <section className="py-14 sm:py-20 bg-[#FFFDF5] border-b border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Animated Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: PREMIUM_EASING }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 text-left"
        >
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#858585] font-bold">
              {activeTab === 'on-sale' ? 'LIMITED PERIOD SAVINGS' : 'JUST DROPPED IN VAULT'}
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#252525] tracking-tight">
              {activeTab === 'on-sale' ? (
                <>
                  On <span className="text-[#F4BE38] underline decoration-[#EDDA5E] decoration-4 underline-offset-8">Sale</span>
                </>
              ) : activeTab === 'new-arrivals' ? (
                <>
                  NEW <span className="text-[#F4BE38]">ARRIVALS</span>
                </>
              ) : (
                <>
                  BEST <span className="text-[#F4BE38]">SELLERS</span>
                </>
              )}
            </h2>
          </div>

          {/* Tab buttons with smooth scale physics */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('on-sale')}
              className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 hover:-translate-y-0.5 active:scale-95 ${
                activeTab === 'on-sale'
                  ? 'bg-[#F4BE38] text-[#252525] shadow-md'
                  : 'bg-[#FFFFFF] text-[#252525] hover:bg-[#FFF4D6] hover:text-[#252525] border border-[#EAE6DC]'
              }`}
            >
              <Percent className={`w-3.5 h-3.5 ${activeTab === 'on-sale' ? 'text-[#252525]' : 'text-[#858585]'}`} />
              <span>On Sale</span>
            </button>
            <button
              onClick={() => setActiveTab('new-arrivals')}
              className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 hover:-translate-y-0.5 active:scale-95 ${
                activeTab === 'new-arrivals'
                  ? 'bg-[#F4BE38] text-[#252525] shadow-md'
                  : 'bg-[#FFFFFF] text-[#252525] hover:bg-[#FFF4D6] hover:text-[#252525] border border-[#EAE6DC]'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${activeTab === 'new-arrivals' ? 'text-[#252525]' : 'text-[#858585]'}`} />
              <span>New Arrivals</span>
            </button>
            <button
              onClick={() => setActiveTab('all-bestsellers')}
              className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${
                activeTab === 'all-bestsellers'
                  ? 'bg-[#F4BE38] text-[#252525] shadow-md'
                  : 'bg-[#FFFFFF] text-[#252525] hover:bg-[#FFF4D6] hover:text-[#252525] border border-[#EAE6DC]'
              }`}
            >
              <span>All Bestsellers</span>
            </button>
          </div>
        </motion.div>

        {/* 4 Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
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
            {displayProducts.map((product) => (
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

        {/* Bottom Shortcut */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: PREMIUM_EASING }}
          className="mt-10 pt-6 border-t border-[#EAE6DC] flex items-center justify-center"
        >
          <Link
            to="/shop"
            className="btn-shine inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#F4BE38] hover:text-[#252525] text-[#252525] border border-[#EAE6DC] hover:border-[#F4BE38] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:scale-95 group"
          >
            <span>View Complete Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#F4BE38] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

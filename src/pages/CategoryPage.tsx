import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { ChevronRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PREMIUM_EASING } from '../utils/motion';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState('popularity');

  const category = CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];

  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === category.id).sort((a, b) => {
      if (sortBy === 'price-asc') return a.sellingPrice - b.sellingPrice;
      if (sortBy === 'price-desc') return b.sellingPrice - a.sellingPrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });
  }, [category.id, sortBy]);

  return (
    <div className="py-12 bg-[#FFFDF5] min-h-screen text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#858585]">
          <Link to="/" className="hover:text-[#F4BE38] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#EAE6DC]" />
          <Link to="/shop" className="hover:text-[#F4BE38] transition-colors">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#EAE6DC]" />
          <span className="text-[#252525] font-semibold">{category.name}</span>
        </nav>

        {/* Category Hero Banner with Fade-Up & Background Zoom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: PREMIUM_EASING }}
          className="relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#EAE6DC] p-8 sm:p-12 min-h-[260px] flex flex-col justify-end shadow-sm group"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={category.heroImage}
              alt={category.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/products/placeholder-supplement.svg';
              }}
              className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#FFF4D6] border border-[#EDDA5E] text-[10px] font-mono tracking-widest uppercase text-[#252525] font-bold inline-block shadow-2xs">
              {category.badge}
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#252525] uppercase tracking-tight">
              {category.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
              {category.fullDesc}
            </p>
          </div>
        </motion.div>

        {/* Control Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAE6DC]">
          <div className="flex items-center gap-2 text-xs text-[#858585]">
            <ShieldCheck className="w-4 h-4 text-[#F4BE38]" />
            <span>Showing <strong>{categoryProducts.length}</strong> authenticated products with verified importer batch codes</span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-[#858585]">Sort By:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FFFFFF] text-[#252525] text-xs font-medium px-3.5 py-2.5 pr-8 rounded-xl border border-[#EAE6DC] focus:border-[#F4BE38] focus:outline-none appearance-none cursor-pointer transition-colors shadow-2xs"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#858585] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid with Staggered Entrance */}
        <AnimatePresence mode="wait">
          <motion.div
            key={sortBy}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.05
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categoryProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: PREMIUM_EASING } }
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { ChevronRight, ShieldCheck, ChevronDown } from 'lucide-react';

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
    <div className="py-12 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#85877F]">
          <Link to="/" className="hover:text-[#263C32]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <Link to="/shop" className="hover:text-[#263C32]">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <span className="text-[#263C32] font-semibold">{category.name}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E8E4DA] p-8 sm:p-12 min-h-[260px] flex flex-col justify-end shadow-sm">
          <div className="absolute inset-0 z-0">
            <img
              src={category.heroImage}
              alt={category.name}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#F8F6F0] border border-[#E8E4DA] text-[10px] font-mono tracking-widest uppercase text-[#263C32] font-bold inline-block">
              {category.badge}
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#252821] uppercase tracking-tight">
              {category.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#85877F] leading-relaxed">
              {category.fullDesc}
            </p>
          </div>
        </div>

        {/* Control Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E4DA]">
          <div className="flex items-center gap-2 text-xs text-[#85877F]">
            <ShieldCheck className="w-4 h-4 text-[#263C32]" />
            <span>Showing <strong>{categoryProducts.length}</strong> authenticated products with verified importer batch codes</span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-[#85877F]">Sort By:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FFFFFF] text-[#252821] text-xs font-medium px-3.5 py-2.5 pr-8 rounded-xl border border-[#E8E4DA] focus:border-[#263C32] focus:outline-none appearance-none cursor-pointer"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#85877F] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Educational Info Box */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-3 shadow-sm">
          <h3 className="font-heading font-bold text-lg text-[#252821]">
            How to Choose Your {category.name} Stack
          </h3>
          <p className="text-xs text-[#85877F] leading-relaxed">
            Every athlete's nutritional requirement is governed by body weight, metabolic rate, training frequency, and specific physiological targets. If you are unsure which variant or brand formulation matches your current split, connect with our certified sports nutritionist on WhatsApp for personalized batch and dosage recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

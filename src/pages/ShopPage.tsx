import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/product/ProductCard';
import {
  SlidersHorizontal,
  X,
  Search,
  Check,
  ChevronDown,
  RotateCcw
} from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { motion, AnimatePresence } from 'framer-motion';
import { PREMIUM_EASING } from '../utils/motion';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get('category') || 'all';
  const initialBrand = searchParams.get('brand') || '';
  const initialSort = searchParams.get('sort') || 'popularity';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    initialBrand ? [initialBrand] : []
  );
  const [priceRange, setPriceRange] = useState<number>(6500);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>(initialSort);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
    const b = searchParams.get('brand');
    if (b) setSelectedBrands([b]);
  }, [searchParams]);

  const allBrands = useMemo(() => {
    return Array.from(new Set(PRODUCTS.map((p) => p.brand)));
  }, []);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrands([]);
    setPriceRange(6500);
    setInStockOnly(false);
    setSortBy('popularity');
    setSearchQuery('');
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCat = product.categoryName.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesCat) return false;
      }

      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      if (product.sellingPrice > priceRange) {
        return false;
      }

      if (inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.sellingPrice - b.sellingPrice;
      if (sortBy === 'price-desc') return b.sellingPrice - a.sellingPrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.isNewArrival ? 1 : -1;
      return b.reviewCount - a.reviewCount;
    });
  }, [searchQuery, selectedCategory, selectedBrands, priceRange, inStockOnly, sortBy]);

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedBrands.length +
    (inStockOnly ? 1 : 0) +
    (priceRange < 6500 ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  return (
    <div className="py-12 bg-[#FFFDF5] min-h-screen text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header with Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: PREMIUM_EASING }}
          className="space-y-2 border-b border-[#EAE6DC] pb-8 text-left"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
            MULTI-BRAND CATALOGUE
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#252525] uppercase tracking-tight">
            SHOP ALL SUPPLEMENTS
          </h1>
          <p className="text-xs sm:text-sm text-[#858585] max-w-2xl">
            Explore authentic whey proteins, micronized creatines, mass gainers, pre-workouts, and fitness essentials from world-renowned brands.
          </p>
        </motion.div>

        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#858585]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name, brand, or category..."
              className="w-full bg-[#FFFDF5] text-[#252525] pl-10 pr-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:bg-white focus:outline-none placeholder-[#858585] transition-colors"
            />
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-xs font-bold text-[#252525] flex items-center gap-2 hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#252525]" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#858585] hidden sm:inline">Sort:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#FFFDF5] text-[#252525] text-xs font-medium px-3.5 py-2.5 pr-8 rounded-xl border border-[#EAE6DC] focus:border-[#F4BE38] focus:outline-none appearance-none cursor-pointer transition-colors shadow-2xs"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest Additions</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#858585] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-xs text-left">
            <span className="text-[#858585]">Active filters:</span>
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4D6] border border-[#EDDA5E] text-[#252525] font-semibold shadow-2xs">
                <span>Category: {selectedCategory}</span>
                <button onClick={() => setSelectedCategory('all')}>
                  <X className="w-3 h-3 text-[#858585] hover:text-[#252525]" />
                </button>
              </span>
            )}
            {selectedBrands.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4D6] border border-[#EDDA5E] text-[#252525] font-semibold shadow-2xs"
              >
                <span>{b}</span>
                <button onClick={() => handleBrandToggle(b)}>
                  <X className="w-3 h-3 text-[#858585] hover:text-[#252525]" />
                </button>
              </span>
            ))}
            {inStockOnly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4D6] border border-[#EDDA5E] text-[#252525] font-semibold shadow-2xs">
                <span>In Stock Only</span>
                <button onClick={() => setInStockOnly(false)}>
                  <X className="w-3 h-3 text-[#858585] hover:text-[#252525]" />
                </button>
              </span>
            )}
            <button
              onClick={handleResetFilters}
              className="text-[#252525] hover:underline text-xs flex items-center gap-1 ml-2 font-bold active:scale-95 transition-transform"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear all</span>
            </button>
          </div>
        )}

        {/* Main Body */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-left">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DC]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#F4BE38]" />
                  <h3 className="font-heading font-bold text-sm text-[#252525] uppercase tracking-wider">
                    Filters
                  </h3>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="text-[11px] text-[#252525] font-bold hover:underline"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#252525] font-bold">
                  Categories
                </h4>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-between ${
                      selectedCategory === 'all'
                        ? 'bg-[#F4BE38] text-[#252525] font-bold shadow-sm'
                        : 'text-[#252525] hover:bg-[#FFF4D6]/50'
                    }`}
                  >
                    <span>All Products</span>
                    <span className={`text-[10px] font-mono ${selectedCategory === 'all' ? 'text-[#252525]' : 'text-[#858585]'}`}>
                      {PRODUCTS.length}
                    </span>
                  </button>

                  {CATEGORIES.map((cat) => {
                    const count = PRODUCTS.filter((p) => p.category === cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-between ${
                          selectedCategory === cat.id
                            ? 'bg-[#F4BE38] text-[#252525] font-bold shadow-sm'
                            : 'text-[#252525] hover:bg-[#FFF4D6]/50'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className={`text-[10px] font-mono ${selectedCategory === cat.id ? 'text-[#252525]' : 'text-[#858585]'}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brands Checkboxes */}
              <div className="space-y-3 pt-4 border-t border-[#EAE6DC]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#252525] font-bold">
                  Brands
                </h4>
                <div className="space-y-2">
                  {allBrands.map((brand) => {
                    const isChecked = selectedBrands.includes(brand);
                    const count = PRODUCTS.filter((p) => p.brand === brand).length;
                    return (
                      <label
                        key={brand}
                        className="flex items-center justify-between cursor-pointer group text-xs text-[#252525] hover:text-[#252525] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            onClick={() => handleBrandToggle(brand)}
                            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                              isChecked
                                ? 'bg-[#F4BE38] border-[#F4BE38] text-[#252525]'
                                : 'border-[#EAE6DC] bg-[#FFFFFF] group-hover:border-[#F4BE38]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span onClick={() => handleBrandToggle(brand)}>{brand}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#858585]">{count}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-3 pt-4 border-t border-[#EAE6DC]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono uppercase tracking-wider text-[#252525] font-bold">
                    Max Price
                  </span>
                  <span className="text-[#252525] font-mono font-bold">
                    {formatCurrency(priceRange)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="6500"
                  step="250"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#F4BE38] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#858585] font-mono">
                  <span>₹500</span>
                  <span>₹6,500</span>
                </div>
              </div>

              {/* In-Stock Toggle */}
              <div className="pt-4 border-t border-[#EAE6DC]">
                <label className="flex items-center justify-between cursor-pointer text-xs">
                  <span className="text-[#252525] font-medium">In Stock Only</span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 accent-[#F4BE38] rounded cursor-pointer"
                  />
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between text-xs text-[#858585]">
              <span>
                Showing <strong className="text-[#252525]">{filteredProducts.length}</strong> products
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] text-center space-y-4 shadow-sm"
              >
                <p className="text-base font-bold text-[#252525]">No supplements match your criteria</p>
                <p className="text-xs text-[#858585] max-w-sm mx-auto">
                  Try clearing active filters or adjusting the price slider.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="btn-shine px-6 py-2.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-bold text-xs uppercase hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm"
                >
                  RESET FILTERS
                </button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.4, ease: PREMIUM_EASING }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer with Smooth AnimatePresence */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 flex text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-[#252525]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: PREMIUM_EASING }}
              className="relative ml-auto w-full max-w-xs bg-[#FFFFFF] h-full p-6 overflow-y-auto space-y-6 flex flex-col justify-between shadow-2xl z-10"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DC]">
                  <h3 className="font-heading font-bold text-base text-[#252525]">Filter Catalogue</h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1 text-[#858585] hover:text-[#252525] hover:scale-110 active:scale-90 transition-transform"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories */}
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase text-[#252525] font-bold">Categories</p>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`block w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${
                        selectedCategory === 'all' ? 'bg-[#F4BE38] text-[#252525] font-bold' : 'text-[#252525] hover:bg-[#FFF4D6]/50'
                      }`}
                    >
                      All Products
                    </button>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`block w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${
                          selectedCategory === cat.id ? 'bg-[#F4BE38] text-[#252525] font-bold' : 'text-[#252525] hover:bg-[#FFF4D6]/50'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="space-y-2 pt-2 border-t border-[#EAE6DC]">
                  <p className="text-xs font-mono uppercase text-[#252525] font-bold">Brands</p>
                  <div className="space-y-1.5">
                    {allBrands.map((brand) => (
                      <label key={brand} className="flex items-center gap-2 text-xs text-[#252525] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                          className="accent-[#F4BE38]"
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="btn-shine w-full py-3 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase hover:-translate-y-0.5 active:scale-95 transition-all shadow-md"
              >
                SHOW {filteredProducts.length} PRODUCTS
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

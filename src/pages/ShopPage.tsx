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
    <div className="py-12 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-2 border-b border-[#E8E4DA] pb-8 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
            MULTI-BRAND CATALOGUE
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#252821] uppercase tracking-tight">
            SHOP ALL SUPPLEMENTS
          </h1>
          <p className="text-xs sm:text-sm text-[#85877F] max-w-2xl">
            Explore authentic whey proteins, micronized creatines, mass gainers, pre-workouts, and fitness essentials from world-renowned brands.
          </p>
        </div>

        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#85877F]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name, brand, or category..."
              className="w-full bg-[#F8F6F0] text-[#252821] pl-10 pr-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none placeholder-[#85877F]"
            />
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2.5 rounded-xl bg-[#263C32] text-xs font-bold text-[#FFFFFF] flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#D5AD65]" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#85877F] hidden sm:inline">Sort:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#F8F6F0] text-[#252821] text-xs font-medium px-3.5 py-2.5 pr-8 rounded-xl border border-[#E8E4DA] focus:border-[#263C32] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest Additions</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#85877F] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-xs text-left">
            <span className="text-[#85877F]">Active filters:</span>
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#263C32] text-[#263C32] font-semibold">
                <span>Category: {selectedCategory}</span>
                <button onClick={() => setSelectedCategory('all')}>
                  <X className="w-3 h-3 text-[#85877F] hover:text-[#263C32]" />
                </button>
              </span>
            )}
            {selectedBrands.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#263C32] text-[#263C32] font-semibold"
              >
                <span>{b}</span>
                <button onClick={() => handleBrandToggle(b)}>
                  <X className="w-3 h-3 text-[#85877F] hover:text-[#263C32]" />
                </button>
              </span>
            ))}
            {inStockOnly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#263C32] text-[#263C32] font-semibold">
                <span>In Stock Only</span>
                <button onClick={() => setInStockOnly(false)}>
                  <X className="w-3 h-3 text-[#85877F] hover:text-[#263C32]" />
                </button>
              </span>
            )}
            <button
              onClick={handleResetFilters}
              className="text-[#263C32] hover:underline text-xs flex items-center gap-1 ml-2 font-bold"
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
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E4DA]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#263C32]" />
                  <h3 className="font-heading font-bold text-sm text-[#252821] uppercase tracking-wider">
                    Filters
                  </h3>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="text-[11px] text-[#263C32] font-bold hover:underline"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#252821] font-bold">
                  Categories
                </h4>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-between ${
                      selectedCategory === 'all'
                        ? 'bg-[#263C32] text-[#FFFFFF] font-bold'
                        : 'text-[#252821] hover:bg-[#F8F6F0]'
                    }`}
                  >
                    <span>All Products</span>
                    <span className={`text-[10px] font-mono ${selectedCategory === 'all' ? 'text-[#D5AD65]' : 'text-[#85877F]'}`}>
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
                            ? 'bg-[#263C32] text-[#FFFFFF] font-bold'
                            : 'text-[#252821] hover:bg-[#F8F6F0]'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className={`text-[10px] font-mono ${selectedCategory === cat.id ? 'text-[#D5AD65]' : 'text-[#85877F]'}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brands Checkboxes */}
              <div className="space-y-3 pt-4 border-t border-[#E8E4DA]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#252821] font-bold">
                  Brands
                </h4>
                <div className="space-y-2">
                  {allBrands.map((brand) => {
                    const isChecked = selectedBrands.includes(brand);
                    const count = PRODUCTS.filter((p) => p.brand === brand).length;
                    return (
                      <label
                        key={brand}
                        className="flex items-center justify-between cursor-pointer group text-xs text-[#252821]"
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            onClick={() => handleBrandToggle(brand)}
                            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                              isChecked
                                ? 'bg-[#263C32] border-[#263C32] text-[#FFFFFF]'
                                : 'border-[#E8E4DA] bg-[#FFFFFF]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span onClick={() => handleBrandToggle(brand)}>{brand}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#85877F]">{count}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-3 pt-4 border-t border-[#E8E4DA]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono uppercase tracking-wider text-[#252821] font-bold">
                    Max Price
                  </span>
                  <span className="text-[#263C32] font-mono font-bold">
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
                  className="w-full accent-[#263C32] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#85877F] font-mono">
                  <span>₹500</span>
                  <span>₹6,500</span>
                </div>
              </div>

              {/* In-Stock Toggle */}
              <div className="pt-4 border-t border-[#E8E4DA]">
                <label className="flex items-center justify-between cursor-pointer text-xs">
                  <span className="text-[#252821] font-medium">In Stock Only</span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 accent-[#263C32] rounded cursor-pointer"
                  />
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between text-xs text-[#85877F]">
              <span>
                Showing <strong className="text-[#252821]">{filteredProducts.length}</strong> products
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="p-12 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] text-center space-y-4">
                <p className="text-base font-bold text-[#252821]">No supplements match your criteria</p>
                <p className="text-xs text-[#85877F] max-w-sm mx-auto">
                  Try clearing active filters or adjusting the price slider.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-xl bg-[#263C32] text-[#FFFFFF] font-bold text-xs"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex text-left">
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-[#252821]/60 backdrop-blur-sm"
          />
          <div className="relative ml-auto w-full max-w-xs bg-[#FFFFFF] h-full p-6 overflow-y-auto space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E4DA]">
                <h3 className="font-heading font-bold text-base text-[#252821]">Filter Catalogue</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-[#85877F] hover:text-[#252821]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase text-[#263C32] font-bold">Categories</p>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left px-3 py-1.5 rounded-lg text-xs ${
                      selectedCategory === 'all' ? 'bg-[#263C32] text-[#FFFFFF] font-bold' : 'text-[#252821]'
                    }`}
                  >
                    All Products
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left px-3 py-1.5 rounded-lg text-xs ${
                        selectedCategory === cat.id ? 'bg-[#263C32] text-[#FFFFFF] font-bold' : 'text-[#252821]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="space-y-2 pt-2 border-t border-[#E8E4DA]">
                <p className="text-xs font-mono uppercase text-[#263C32] font-bold">Brands</p>
                <div className="space-y-1.5">
                  {allBrands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 text-xs text-[#252821]">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="accent-[#263C32]"
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 rounded-xl bg-[#263C32] text-[#FFFFFF] font-heading font-bold text-xs uppercase"
            >
              SHOW {filteredProducts.length} PRODUCTS
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

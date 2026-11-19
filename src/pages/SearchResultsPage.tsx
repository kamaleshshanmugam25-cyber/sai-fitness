import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Search, ChevronRight } from 'lucide-react';

export const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter((product) => {
      const matchName = product.name.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchCat = product.categoryName.toLowerCase().includes(q);
      const matchFlavors = product.flavors.some((f) => f.name.toLowerCase().includes(q));
      return matchName || matchBrand || matchCat || matchFlavors;
    });
  }, [query]);

  return (
    <div className="py-12 bg-[#F8F6F0] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#85877F]">
          <Link to="/" className="hover:text-[#263C32]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <Link to="/shop" className="hover:text-[#263C32]">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <span className="text-[#263C32] font-semibold">Search Results</span>
        </nav>

        {/* Search Query Header */}
        <div className="space-y-2 border-b border-[#E8E4DA] pb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#263C32] font-bold">
            <Search className="w-4 h-4 text-[#D5AD65]" />
            <span>STORE DIRECTORY SEARCH</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252821]">
            Results for <span className="text-[#263C32]">"{query}"</span>
          </h1>
          <p className="text-xs text-[#85877F]">
            Found {results.length} authenticated supplement{results.length === 1 ? '' : 's'} matching your criteria.
          </p>
        </div>

        {/* Results Grid or Empty State */}
        {results.length === 0 ? (
          <div className="p-12 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] text-center space-y-6 max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#F8F6F0] flex items-center justify-center text-[#85877F] mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-xl text-[#252821]">
                No supplements found for "{query}"
              </h3>
              <p className="text-xs text-[#85877F] leading-relaxed">
                Check your spelling or try popular categories like Whey Protein, Micronized Creatine, or Optimum Nutrition.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <Link
                to="/search?q=Whey"
                className="px-3.5 py-2 rounded-xl bg-[#F8F6F0] hover:bg-[#263C32] text-[#252821] hover:text-[#FFFFFF] text-xs font-semibold transition-colors"
              >
                Whey Protein
              </Link>
              <Link
                to="/search?q=Creatine"
                className="px-3.5 py-2 rounded-xl bg-[#F8F6F0] hover:bg-[#263C32] text-[#252821] hover:text-[#FFFFFF] text-xs font-semibold transition-colors"
              >
                Creatine Monohydrate
              </Link>
              <Link
                to="/search?q=Pre-Workout"
                className="px-3.5 py-2 rounded-xl bg-[#F8F6F0] hover:bg-[#263C32] text-[#252821] hover:text-[#FFFFFF] text-xs font-semibold transition-colors"
              >
                Pre-Workout
              </Link>
              <Link
                to="/shop"
                className="px-4 py-2 rounded-xl bg-[#263C32] text-[#FFFFFF] text-xs font-bold transition-colors"
              >
                Browse All
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

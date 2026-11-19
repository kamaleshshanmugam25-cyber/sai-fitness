import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/product/ProductCard';
import { Heart, ArrowRight, ChevronRight } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, clearWishlist, wishlistCount } = useWishlist();

  return (
    <div className="py-12 bg-[#F8F6F0] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs text-[#85877F]">
          <Link to="/" className="hover:text-[#263C32]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <span className="text-[#263C32] font-semibold">My Wishlist</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E4DA] gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
              SAVED SUPPLEMENTS
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252821] uppercase tracking-tight">
              MY WISHLIST ({wishlistCount})
            </h1>
          </div>

          {wishlistCount > 0 && (
            <button
              onClick={clearWishlist}
              className="text-xs text-[#85877F] hover:text-red-500 transition-colors font-medium"
            >
              Clear Entire Wishlist
            </button>
          )}
        </div>

        {wishlistCount === 0 ? (
          <div className="py-16 text-center max-w-md mx-auto space-y-4 p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#F8F6F0] flex items-center justify-center text-[#85877F] mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-extrabold text-xl text-[#252821]">
              Your wishlist is currently empty
            </h2>
            <p className="text-xs text-[#85877F] leading-relaxed">
              Save your favorite proteins, creatines, and pre-workout formulas here for quick access.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#263C32] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#1C2D25] transition-colors shadow-sm"
            >
              <span>BROWSE SUPPLEMENTS</span>
              <ArrowRight className="w-4 h-4 text-[#D5AD65]" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

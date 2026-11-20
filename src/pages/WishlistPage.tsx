import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/product/ProductCard';
import { Heart, ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PREMIUM_EASING } from '../utils/motion';

export const WishlistPage: React.FC = () => {
  const { wishlist, clearWishlist, wishlistCount } = useWishlist();

  return (
    <div className="py-12 bg-[#FFFDF5] min-h-screen text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs text-[#858585]">
          <Link to="/" className="hover:text-[#F4BE38] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#EAE6DC]" />
          <span className="text-[#252525] font-semibold">My Wishlist</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EAE6DC] gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
              SAVED SUPPLEMENTS
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252525] uppercase tracking-tight">
              MY WISHLIST ({wishlistCount})
            </h1>
          </div>

          {wishlistCount > 0 && (
            <button
              onClick={clearWishlist}
              className="text-xs text-[#858585] hover:text-red-500 transition-colors font-medium active:scale-95"
            >
              Clear Entire Wishlist
            </button>
          )}
        </div>

        {wishlistCount === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: PREMIUM_EASING }}
            className="py-16 text-center max-w-md mx-auto space-y-4 p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-[#FFF4D6] flex items-center justify-center text-[#858585] mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-extrabold text-xl text-[#252525]">
              Your wishlist is currently empty
            </h2>
            <p className="text-xs text-[#858585] leading-relaxed">
              Save your favorite proteins, creatines, and pre-workout formulas here for quick access.
            </p>
            <Link
              to="/shop"
              className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 active:scale-95 shadow-sm group"
            >
              <span>BROWSE SUPPLEMENTS</span>
              <ArrowRight className="w-4 h-4 text-[#252525] group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {wishlist.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.35, ease: PREMIUM_EASING }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

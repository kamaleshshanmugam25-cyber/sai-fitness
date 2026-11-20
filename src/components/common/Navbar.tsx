import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  User,
  Truck
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { CATEGORIES } from '../../data/categories';
import { PRODUCTS } from '../../data/products';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { PREMIUM_EASING, dropdownVariants } from '../../utils/motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const { cartCount, subtotal, setIsCartDrawerOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();
  const categoryMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCategoryMenuOpen(false);
    setIsAccountOpen(false);
    setIsSearchFocused(false);
  }, [location.pathname]);

  // Click outside listener for account dropdown & search suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setIsAccountOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut: Escape closes search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchFocused(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnterCategories = () => {
    if (categoryMenuTimeoutRef.current) clearTimeout(categoryMenuTimeoutRef.current);
    setIsCategoryMenuOpen(true);
  };

  const handleMouseLeaveCategories = () => {
    categoryMenuTimeoutRef.current = setTimeout(() => {
      setIsCategoryMenuOpen(false);
    }, 220);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchFocused(false);
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleSelectQuery = (term: string) => {
    setSearchQuery(term);
    setIsSearchFocused(false);
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  // Live search filtering
  const trimmedQuery = searchQuery.trim().toLowerCase();

  const liveProducts = trimmedQuery.length > 0
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(trimmedQuery) ||
        p.brand.toLowerCase().includes(trimmedQuery) ||
        p.categoryName.toLowerCase().includes(trimmedQuery)
      ).slice(0, 4)
    : [];

  const liveCategories = trimmedQuery.length > 0
    ? CATEGORIES.filter((c) =>
        c.name.toLowerCase().includes(trimmedQuery)
      ).slice(0, 3)
    : [];

  const liveBrands = trimmedQuery.length > 0
    ? BRAND_CONFIG.supportedBrands.filter((b) =>
        b.name.toLowerCase().includes(trimmedQuery)
      ).slice(0, 3)
    : [];

  const POPULAR_SEARCH_TAGS = [
    'Whey Protein',
    'Creatine',
    'Mass Gainer',
    'Pre-Workout',
    'BCAA',
    'Multivitamin',
    'Protein Bars'
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? 'bg-[#333333]/95 backdrop-blur-md shadow-md border-b border-[#252525]'
          : 'bg-[#333333] border-b border-[#252525]'
      }`}
    >
      {/* =========================================================================
          TIER 1: MAIN HEADER ROW
         ========================================================================= */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled ? 'py-2.5' : 'py-3.5'
        }`}
      >
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Left: Brand Monogram & Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-11 h-11 shrink-0">
              <img
                src="/images/logo.png"
                alt="Sai Fitness Official Logo"
                className="w-full h-full object-contain rounded-full shadow-md group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 ring-2 ring-[#F4BE38]/60 bg-[#252525]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#FFFFFF] flex items-center gap-1 leading-none group-hover:text-[#F4BE38] transition-colors">
                SAI <span className="text-[#F4BE38]">FITNESS</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#F4BE38] uppercase mt-0.5 font-bold">
                WE SHAPE U • TRICHY
              </span>
            </div>
          </Link>

          {/* Center: Full-Width Search Input with Live Suggestions */}
          <div ref={searchContainerRef} className="relative hidden md:flex flex-1 max-w-2xl z-50">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <div className="relative flex items-center">
                {/* Leading Search Icon */}
                <Search className="absolute left-4 w-4 h-4 text-[#858585] pointer-events-none" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search for supplements, whey protein, creatine, brands..."
                  className="w-full bg-[#252525] text-[#FFFDF5] pl-11 pr-20 py-2.5 rounded-full border border-[#333333] focus:border-[#F4BE38] focus:bg-[#202020] focus:ring-2 focus:ring-[#F4BE38]/30 focus:outline-none text-xs sm:text-sm placeholder-[#858585] transition-all duration-200 shadow-inner"
                />

                {/* Fixed Right Actions (Clear & Submit) */}
                <div className="absolute right-1.5 flex items-center gap-1">
                  {searchQuery.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="w-6 h-6 rounded-full text-[#858585] hover:text-[#FFFDF5] hover:bg-[#333333] flex items-center justify-center transition-colors"
                      aria-label="Clear search query"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-full bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm shrink-0"
                    aria-label="Submit search"
                  >
                    <Search className="w-4 h-4 text-[#252525]" />
                  </button>
                </div>
              </div>
            </form>

            {/* Floating Live Suggestions Dropdown */}
            <AnimatePresence>
              {isSearchFocused && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: PREMIUM_EASING }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#252525] border border-[#3a3a3a] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl z-50 text-left"
                >
                  {trimmedQuery.length === 0 ? (
                    <div className="p-4 space-y-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#858585] font-bold block">
                        Popular Searches
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {POPULAR_SEARCH_TAGS.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => handleSelectQuery(tag)}
                            className="px-3 py-1.5 rounded-full bg-[#333333] hover:bg-[#F4BE38] hover:text-[#252525] text-xs font-semibold text-[#FFFDF5] border border-[#3a3a3a] transition-all duration-180 hover:scale-105 cursor-pointer"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-[#333333]">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#858585] font-bold block mb-2">
                          Featured Brands
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {BRAND_CONFIG.supportedBrands.slice(0, 5).map((b) => (
                            <Link
                              key={b.id}
                              to={`/shop?brand=${encodeURIComponent(b.name)}`}
                              onClick={() => setIsSearchFocused(false)}
                              className="px-2.5 py-1 rounded-lg bg-[#2d2d2d] hover:bg-[#F4BE38] hover:text-[#252525] text-[11px] font-mono text-[#EAE6DC] transition-colors"
                            >
                              {b.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 space-y-3 max-h-[420px] overflow-y-auto">
                      {/* Matching Categories & Brands */}
                      {(liveCategories.length > 0 || liveBrands.length > 0) && (
                        <div className="flex flex-wrap gap-1.5 pb-2 border-b border-[#333333]">
                          {liveCategories.map((c) => (
                            <Link
                              key={c.id}
                              to={`/category/${c.slug}`}
                              onClick={() => setIsSearchFocused(false)}
                              className="px-2.5 py-1 rounded-full bg-[#FFF4D6] hover:bg-[#F4BE38] text-[#252525] text-[11px] font-bold transition-colors flex items-center gap-1"
                            >
                              <span className="text-[10px] text-[#858585]">Category:</span>
                              <span>{c.name}</span>
                            </Link>
                          ))}
                          {liveBrands.map((b) => (
                            <Link
                              key={b.id}
                              to={`/shop?brand=${encodeURIComponent(b.name)}`}
                              onClick={() => setIsSearchFocused(false)}
                              className="px-2.5 py-1 rounded-full bg-[#333333] hover:bg-[#F4BE38] hover:text-[#252525] text-[#FFFDF5] text-[11px] font-bold transition-colors flex items-center gap-1"
                            >
                              <span className="text-[10px] text-[#858585]">Brand:</span>
                              <span>{b.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Matching Products */}
                      {liveProducts.length > 0 ? (
                        <div className="space-y-1">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#858585] font-bold px-2 block mb-1">
                            Matching Products
                          </span>
                          {liveProducts.map((prod) => (
                            <Link
                              key={prod.id}
                              to={`/product/${prod.slug}`}
                              onClick={() => setIsSearchFocused(false)}
                              className="flex items-center justify-between p-2 rounded-xl hover:bg-[#333333] transition-colors group"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] p-1 shrink-0 flex items-center justify-center overflow-hidden">
                                  <img
                                    src={prod.images[0]}
                                    alt={prod.name}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src = '/images/products/placeholder-supplement.svg';
                                    }}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <span className="text-[10px] font-mono font-bold text-[#F4BE38] block truncate">
                                    {prod.brand}
                                  </span>
                                  <h4 className="text-xs font-bold text-[#FFFDF5] group-hover:text-[#F4BE38] truncate">
                                    {prod.name}
                                  </h4>
                                </div>
                              </div>

                              <div className="text-right shrink-0 ml-3">
                                <span className="font-heading font-extrabold text-xs text-[#FFFDF5] block">
                                  ₹{prod.sellingPrice.toLocaleString('en-IN')}
                                </span>
                                {prod.mrp > prod.sellingPrice && (
                                  <span className="text-[10px] text-[#858585] line-through block">
                                    ₹{prod.mrp.toLocaleString('en-IN')}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="py-4 text-center text-xs text-[#858585]">
                          No direct products found for "<span className="text-[#F4BE38]">{searchQuery}</span>"
                        </div>
                      )}

                      {/* View All Footer */}
                      <button
                        type="button"
                        onClick={() => handleSelectQuery(searchQuery)}
                        className="w-full pt-2 border-t border-[#333333] flex items-center justify-between text-xs font-bold text-[#F4BE38] hover:text-[#EDDA5E] px-2 py-1 transition-colors cursor-pointer"
                      >
                        <span>See all results for "{searchQuery}"</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Quick Utilities (Wishlist, Account, Mini-Cart Pill) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist Link with Animated Badge */}
            <Link
              to="/wishlist"
              className="relative p-2.5 text-[#FFFDF5] hover:text-[#F4BE38] hover:bg-[#252525] rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hidden sm:flex items-center justify-center"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
              <AnimatePresence>
                {wishlistCount > 0 && (
                  <motion.span
                    key={wishlistCount}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#F4BE38] text-[#252525] font-mono font-bold text-[10px] flex items-center justify-center shadow"
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Account Trigger & Smooth Dropdown */}
            <div className="relative" ref={accountRef}>
              <button
                type="button"
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="p-2.5 text-[#FFFDF5] hover:text-[#F4BE38] hover:bg-[#252525] rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hidden sm:flex items-center justify-center"
                title="Customer Account"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Account Dropdown with Fade and Slide Animation */}
              <AnimatePresence>
                {isAccountOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-2 w-56 bg-[#FFFFFF] border border-[#EAE6DC] rounded-2xl shadow-xl p-3 z-50 text-left"
                  >
                    <p className="text-xs font-mono font-bold text-[#858585] px-2 py-1 uppercase">
                      Account Access
                    </p>
                    <div className="space-y-1 pt-1">
                      <Link
                        to="/checkout"
                        onClick={() => setIsAccountOpen(false)}
                        className="block px-3 py-2 rounded-xl text-xs font-medium text-[#252525] hover:bg-[#FFF4D6] hover:text-[#252525] transition-colors"
                      >
                        Instant Indian Checkout
                      </Link>
                      <Link
                        to="/wishlist"
                        onClick={() => setIsAccountOpen(false)}
                        className="block px-3 py-2 rounded-xl text-xs font-medium text-[#252525] hover:bg-[#FFF4D6] hover:text-[#252525] transition-colors"
                      >
                        My Wishlist ({wishlistCount})
                      </Link>
                      <a
                        href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 rounded-xl text-xs font-bold text-[#252525] hover:bg-[#FFF4D6] transition-colors"
                      >
                        WhatsApp Nutrition Advisory
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mini-Cart Pill Button with Animated Badge */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="btn-shine flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95 group"
              aria-label="Open cart drawer"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#252525] group-hover:scale-110 transition-transform duration-200" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.4, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                      className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#252525] text-[#F4BE38] font-mono font-extrabold text-[9px] flex items-center justify-center shadow-sm"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <span className="font-heading font-extrabold text-xs text-[#252525] tracking-tight">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#FFFDF5] hover:text-[#F4BE38] hover:bg-[#252525] rounded-xl transition-all duration-200 active:scale-90"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Row */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 w-3.5 h-3.5 text-[#858585] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search supplements, brands..."
                className="w-full bg-[#252525] text-[#FFFDF5] pl-10 pr-18 py-2 rounded-full border border-[#333333] focus:border-[#F4BE38] focus:bg-[#202020] focus:outline-none text-xs placeholder-[#858585] transition-all shadow-inner"
              />
              <div className="absolute right-1 flex items-center gap-1">
                {searchQuery.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="w-5 h-5 rounded-full text-[#858585] hover:text-[#FFFDF5] flex items-center justify-center"
                    aria-label="Clear search"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
                <button
                  type="submit"
                  className="w-7 h-7 rounded-full bg-[#F4BE38] text-[#252525] flex items-center justify-center active:scale-90 shadow-sm shrink-0"
                  aria-label="Search"
                >
                  <Search className="w-3.5 h-3.5 text-[#252525]" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* =========================================================================
          TIER 2: SUB-NAVIGATION ROW & MEGA-MENU
         ========================================================================= */}
      <div className="hidden lg:block border-t border-[#252525] bg-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs font-semibold">
            {/* Left: Premium Yellow "= SHOP BY CATEGORY ▾" Mega-Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterCategories}
              onMouseLeave={handleMouseLeaveCategories}
            >
              <button
                type="button"
                className="btn-shine flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold uppercase tracking-wider text-[11px] transition-all duration-180 hover:-translate-y-0.5 shadow-sm active:scale-95"
              >
                <Menu className="w-3.5 h-3.5 text-[#252525]" />
                <span>SHOP BY CATEGORY</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#252525] transition-transform duration-300 ${
                    isCategoryMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega-Menu Opening with Smooth Fade & Scale */}
              <AnimatePresence>
                {isCategoryMenuOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 w-[740px] bg-[#FFFFFF] border border-[#EAE6DC] rounded-2xl shadow-2xl p-5 grid grid-cols-4 gap-3 z-50 text-left"
                  >
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/category/${cat.slug}`}
                        className="group p-2.5 rounded-xl hover:bg-[#FFF4D6] transition-all duration-200 border border-transparent hover:border-[#F4BE38]/50 hover:-translate-y-0.5 flex flex-col justify-between"
                      >
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono tracking-wider text-[#F4BE38] uppercase font-bold">
                            {cat.badge}
                          </span>
                          <h4 className="font-heading font-bold text-xs text-[#252525] group-hover:text-[#252525] transition-colors leading-snug">
                            {cat.name}
                          </h4>
                          <p className="text-[10px] text-[#858585] line-clamp-1">
                            {cat.shortDesc}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-[#252525] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 text-[#F4BE38]" />
                        </div>
                      </Link>
                    ))}

                    <div className="col-span-4 pt-3 border-t border-[#EAE6DC] flex items-center justify-between text-xs text-[#858585]">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#F4BE38]" />
                        <span>All products backed by official importer batch verification.</span>
                      </div>
                      <Link
                        to="/shop"
                        className="text-[#252525] hover:text-[#F4BE38] hover:underline font-bold flex items-center gap-1 group"
                      >
                        <span>View All Products</span>
                        <ArrowRight className="w-3 h-3 text-[#F4BE38] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Center: Main Navigation Links with Animated Underline */}
            <nav className="flex items-center gap-7 text-[12px] font-semibold tracking-wide">
              <Link
                to="/"
                className={`py-1 uppercase nav-link-animated transition-colors ${
                  location.pathname === '/'
                    ? 'text-[#F4BE38] font-bold active'
                    : 'text-[#FFFDF5] hover:text-[#F4BE38]'
                }`}
              >
                HOME
              </Link>
              <Link
                to="/shop"
                className={`py-1 uppercase nav-link-animated transition-colors ${
                  location.pathname === '/shop'
                    ? 'text-[#F4BE38] font-bold active'
                    : 'text-[#FFFDF5] hover:text-[#F4BE38]'
                }`}
              >
                SHOP ALL
              </Link>
              <Link
                to="/brands"
                className={`py-1 uppercase nav-link-animated transition-colors ${
                  location.pathname === '/brands'
                    ? 'text-[#F4BE38] font-bold active'
                    : 'text-[#FFFDF5] hover:text-[#F4BE38]'
                }`}
              >
                BRANDS
              </Link>
                
              <Link
                to="/about"
                className={`py-1 uppercase nav-link-animated transition-colors ${
                  location.pathname === '/about'
                    ? 'text-[#F4BE38] font-bold active'
                    : 'text-[#FFFDF5] hover:text-[#F4BE38]'
                }`}
              >
                ABOUT US
              </Link>
              <Link
                to="/contact"
                className={`py-1 uppercase nav-link-animated transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-[#F4BE38] font-bold active'
                    : 'text-[#FFFDF5] hover:text-[#F4BE38]'
                }`}
              >
                CONTACT
              </Link>
            </nav>

            {/* Right: Hotline & Frictionless Order Tracking */}
            <div className="flex items-center gap-5 text-[11px] text-[#858585]">
              <a
                href={`tel:${BRAND_CONFIG.phone}`}
                className="flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#F4BE38] font-semibold transition-colors hover:-translate-y-0.5"
              >
                <span>+91  98945 58995</span>
              </a>
              <span className="text-[#858585]">•</span>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Sai Fitness, I want to track my order status.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#F4BE38] hover:text-[#EDDA5E] hover:underline font-bold group"
              >
                <Truck className="w-3.5 h-3.5 text-[#F4BE38] group-hover:scale-110 transition-transform" />
                <span>Track Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE NAVIGATION DRAWER
         ========================================================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: PREMIUM_EASING }}
            className="lg:hidden border-t border-[#252525] bg-[#333333] px-4 pt-4 pb-6 space-y-4 max-h-[80vh] overflow-y-auto text-left shadow-lg overflow-hidden"
          >
            <div className="space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-base font-bold text-[#FFFDF5] hover:bg-[#252525] hover:text-[#F4BE38] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-base font-bold text-[#FFFDF5] hover:bg-[#252525] hover:text-[#F4BE38] transition-colors"
              >
                Shop All Supplements
              </Link>
            </div>

            <div className="pt-2 border-t border-[#252525]">
              <p className="px-3 text-xs font-mono uppercase tracking-wider text-[#F4BE38] font-bold mb-2">
                Browse Categories
              </p>
              <div className="grid grid-cols-1 gap-1">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-[#FFFDF5] hover:bg-[#252525] hover:text-[#F4BE38] transition-colors group"
                  >
                    <span>{cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F4BE38] group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#252525] space-y-1">
              <Link
                to="/brands"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-[#FFFDF5] hover:bg-[#252525] hover:text-[#F4BE38] transition-colors"
              >
                Brands
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-[#FFFDF5] hover:bg-[#252525] hover:text-[#F4BE38] transition-colors"
              >
                About Sai Fitness
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-[#FFFDF5] hover:bg-[#252525] hover:text-[#F4BE38] transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-3 border-t border-[#252525]">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine w-full py-2.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs flex items-center justify-center gap-2 shadow active:scale-95 transition-all"
              >
                <span>WHATSAPP SUPPORT: {BRAND_CONFIG.whatsappDisplay}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

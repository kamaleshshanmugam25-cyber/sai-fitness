import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Dumbbell,
  User,
  Truck
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { CATEGORIES } from '../../data/categories';
import { BRAND_CONFIG } from '../../config/brandConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { cartCount, subtotal, setIsCartDrawerOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();
  const categoryMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
  }, [location.pathname]);

  const handleMouseEnterCategories = () => {
    if (categoryMenuTimeoutRef.current) clearTimeout(categoryMenuTimeoutRef.current);
    setIsCategoryMenuOpen(true);
  };

  const handleMouseLeaveCategories = () => {
    categoryMenuTimeoutRef.current = setTimeout(() => {
      setIsCategoryMenuOpen(false);
    }, 250);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery('');
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-[#FFFFFF] ${
        isScrolled ? 'shadow-md border-b border-[#E2E8F0]' : 'border-b border-[#E2E8F0]'
      }`}
    >
      {/* =========================================================================
          TIER 1: MAIN HEADER ROW (Wave Nutrition Blue & White Style)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Left: Brand Monogram & Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#0284C7] flex items-center justify-center text-[#FFFFFF] shadow-sm group-hover:bg-[#0369A1] transition-colors">
              <Dumbbell className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#0F172A] flex items-center gap-1 leading-none">
                SAI <span className="text-[#0284C7]">FITNESS</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#64748B] uppercase mt-0.5">
                WE FEED YOU BUILD
              </span>
            </div>
          </Link>

          {/* Center: Full-Width Search Input */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for supplements, whey protein, creatine, brands..."
                className="w-full bg-[#F8FAFC] text-[#0F172A] pl-5 pr-14 py-2.5 rounded-full border border-[#E2E8F0] focus:border-[#0284C7] focus:bg-[#FFFFFF] focus:outline-none text-xs sm:text-sm placeholder-[#64748B] transition-all shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-[#FFFFFF] flex items-center justify-center transition-colors shadow-sm"
                aria-label="Submit search"
              >
                <Search className="w-4 h-4 text-[#FFFFFF]" />
              </button>
            </form>
          </div>

          {/* Right: Quick Utilities (Wishlist, Account, Mini-Cart Pill) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="relative p-2.5 text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F7FC] rounded-full transition-colors hidden sm:flex items-center justify-center"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#0284C7] text-[#FFFFFF] font-mono font-bold text-[10px] flex items-center justify-center shadow">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Account Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="p-2.5 text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F7FC] rounded-full transition-colors hidden sm:flex items-center justify-center"
                title="Customer Account"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Account Dropdown */}
              {isAccountOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl shadow-xl p-3 z-50 text-left animate-in fade-in-50 duration-200">
                  <p className="text-xs font-mono font-bold text-[#64748B] px-2 py-1 uppercase">
                    Account Access
                  </p>
                  <div className="space-y-1 pt-1">
                    <Link
                      to="/checkout"
                      onClick={() => setIsAccountOpen(false)}
                      className="block px-3 py-1.5 rounded-lg text-xs font-medium text-[#0F172A] hover:bg-[#F0F7FC] hover:text-[#0284C7]"
                    >
                      Instant Indian Checkout
                    </Link>
                    <Link
                      to="/wishlist"
                      onClick={() => setIsAccountOpen(false)}
                      className="block px-3 py-1.5 rounded-lg text-xs font-medium text-[#0F172A] hover:bg-[#F0F7FC] hover:text-[#0284C7]"
                    >
                      My Wishlist ({wishlistCount})
                    </Link>
                    <a
                      href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-1.5 rounded-lg text-xs font-bold text-[#0284C7] hover:bg-[#F0F7FC]"
                    >
                      WhatsApp Nutrition Advisory
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Mini-Cart Pill Button */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-[#FFFFFF] transition-all shadow-md active:scale-95 group"
              aria-label="Open cart drawer"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#38BDF8]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#0284C7] text-[#FFFFFF] font-mono font-extrabold text-[9px] flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="font-heading font-extrabold text-xs text-[#FFFFFF] tracking-tight">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F7FC] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Row */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search supplements, brands..."
              className="w-full bg-[#F8FAFC] text-[#0F172A] pl-4 pr-11 py-2 rounded-full border border-[#E2E8F0] focus:border-[#0284C7] focus:bg-[#FFFFFF] focus:outline-none text-xs placeholder-[#64748B]"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#0284C7] text-[#FFFFFF] flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 text-[#FFFFFF]" />
            </button>
          </form>
        </div>
      </div>

      {/* =========================================================================
          TIER 2: SUB-NAVIGATION ROW (Wave Nutrition Exact Blue Pill & Links)
         ========================================================================= */}
      <div className="hidden lg:block border-t border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5 text-xs font-semibold">
            {/* Left: Blue "= SHOP BY CATEGORY ▾" Button */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterCategories}
              onMouseLeave={handleMouseLeaveCategories}
            >
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-[#FFFFFF] font-heading font-bold uppercase tracking-wider text-[11px] transition-all shadow-sm"
              >
                <Menu className="w-3.5 h-3.5 text-[#FFFFFF]" />
                <span>SHOP BY CATEGORY</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#FFFFFF] transition-transform duration-200 ${
                    isCategoryMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Category Popover Menu */}
              {isCategoryMenuOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-[720px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl shadow-2xl p-5 grid grid-cols-4 gap-3 z-50 text-left animate-in fade-in-50 duration-200">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      className="group p-2.5 rounded-xl hover:bg-[#F0F7FC] transition-all border border-transparent hover:border-[#BAE6FD] flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono tracking-wider text-[#0284C7] uppercase font-bold">
                          {cat.badge}
                        </span>
                        <h4 className="font-heading font-bold text-xs text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug">
                          {cat.name}
                        </h4>
                        <p className="text-[10px] text-[#64748B] line-clamp-1">
                          {cat.shortDesc}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  ))}

                  <div className="col-span-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                      <span>All products backed by official importer batch verification.</span>
                    </div>
                    <Link
                      to="/shop"
                      className="text-[#0284C7] hover:underline font-bold flex items-center gap-1"
                    >
                      <span>View All Products</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Center: Main Primary Navigation Links */}
            <nav className="flex items-center gap-6 text-[12px] font-semibold tracking-wide">
              <Link
                to="/"
                className={`py-1 uppercase transition-colors ${
                  location.pathname === '/'
                    ? 'text-[#0284C7] font-bold border-b-2 border-[#0284C7]'
                    : 'text-[#0F172A] hover:text-[#0284C7]'
                }`}
              >
                HOME
              </Link>
              <Link
                to="/shop"
                className={`py-1 uppercase transition-colors ${
                  location.pathname === '/shop'
                    ? 'text-[#0284C7] font-bold border-b-2 border-[#0284C7]'
                    : 'text-[#0F172A] hover:text-[#0284C7]'
                }`}
              >
                SHOP ALL
              </Link>
              <Link
                to="/brands"
                className={`py-1 uppercase transition-colors ${
                  location.pathname === '/brands'
                    ? 'text-[#0284C7] font-bold border-b-2 border-[#0284C7]'
                    : 'text-[#0F172A] hover:text-[#0284C7]'
                }`}
              >
                BRANDS
              </Link>
              <Link
                to="/shop?filter=offers"
                className="py-1 uppercase text-[#0F172A] hover:text-[#0284C7] transition-colors"
              >
                OFFERS
              </Link>
              <Link
                to="/about"
                className={`py-1 uppercase transition-colors ${
                  location.pathname === '/about'
                    ? 'text-[#0284C7] font-bold border-b-2 border-[#0284C7]'
                    : 'text-[#0F172A] hover:text-[#0284C7]'
                }`}
              >
                ABOUT US
              </Link>
              <Link
                to="/contact"
                className={`py-1 uppercase transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-[#0284C7] font-bold border-b-2 border-[#0284C7]'
                    : 'text-[#0F172A] hover:text-[#0284C7]'
                }`}
              >
                CONTACT
              </Link>
            </nav>

            {/* Right: Hotline & Frictionless Order Tracking */}
            <div className="flex items-center gap-5 text-[11px] text-[#64748B]">
              <a
                href={`tel:${BRAND_CONFIG.phone}`}
                className="flex items-center gap-1.5 text-[#0F172A] hover:text-[#0284C7] font-semibold transition-colors"
              >
                <span>+91 98765 43210</span>
              </a>
              <span className="text-[#CBD5E1]">•</span>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Sai Fitness, I want to track my order status.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#0284C7] hover:underline font-bold"
              >
                <Truck className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Track Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE NAVIGATION DRAWER
         ========================================================================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-[#FFFFFF] px-4 pt-4 pb-6 space-y-4 max-h-[80vh] overflow-y-auto text-left shadow-lg">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-[#0F172A] hover:bg-[#F0F7FC]"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-[#0F172A] hover:bg-[#F0F7FC]"
            >
              Shop All Supplements
            </Link>
          </div>

          <div className="pt-2 border-t border-[#E2E8F0]">
            <p className="px-3 text-xs font-mono uppercase tracking-wider text-[#0284C7] font-bold mb-2">
              Browse Categories
            </p>
            <div className="grid grid-cols-1 gap-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#0F172A] hover:bg-[#F0F7FC] hover:text-[#0284C7]"
                >
                  <span>{cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0284C7]" />
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#E2E8F0] space-y-1">
            <Link
              to="/brands"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F0F7FC]"
            >
              Brands
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F0F7FC]"
            >
              About Sai Fitness
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F0F7FC]"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-[#E2E8F0]">
            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-[#FFFFFF] font-heading font-bold text-xs flex items-center justify-center gap-2 shadow"
            >
              <span>WHATSAPP SUPPORT: {BRAND_CONFIG.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

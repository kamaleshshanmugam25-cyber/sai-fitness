import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductGallery } from '../components/product/ProductGallery';
import { VariantSelector } from '../components/product/VariantSelector';
import { NutritionTable } from '../components/product/NutritionTable';
import { ProductCard } from '../components/product/ProductCard';
import { ChevronRight, ShieldCheck, Truck, RefreshCw, Star } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter(
      (p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
    ).slice(0, 4);
  }, [product.id, product.category, product.brand]);

  return (
    <div className="py-10 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#85877F] overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#263C32]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <Link to="/shop" className="hover:text-[#263C32]">Supplements</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <Link to={`/category/${product.category}`} className="hover:text-[#263C32]">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <span className="text-[#263C32] font-semibold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Top Product Hero: Left Gallery + Right Variant Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Gallery */}
          <div className="lg:col-span-6 space-y-6">
            <ProductGallery images={product.images} productName={product.name} />

            {/* Verification Guarantee Strip */}
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] grid grid-cols-3 gap-3 text-center text-[11px] text-[#85877F] shadow-sm">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#263C32]" />
                <span className="font-bold text-[#252821]">100% Genuine</span>
                <span className="text-[10px]">Official Importer</span>
              </div>
              <div className="flex flex-col items-center gap-1 border-x border-[#E8E4DA] px-2">
                <Truck className="w-4 h-4 text-[#263C32]" />
                <span className="font-bold text-[#252821]">24h Dispatch</span>
                <span className="text-[10px]">Padded Transit</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-4 h-4 text-[#263C32]" />
                <span className="font-bold text-[#252821]">Fresh Batches</span>
                <span className="text-[10px]">12+ Mo Expiry</span>
              </div>
            </div>
          </div>

          {/* Right: Variant Selector & Purchase Controls */}
          <div className="lg:col-span-6">
            <VariantSelector product={product} />
          </div>
        </div>

        {/* Full Product Description & Overview */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-4 shadow-sm">
          <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
            PRODUCT OVERVIEW & FORMULATION PROFILE
          </span>
          <h2 className="font-heading font-extrabold text-2xl text-[#252821]">
            About {product.name}
          </h2>
          <p className="text-sm text-[#85877F] leading-relaxed">
            {product.fullDescription}
          </p>
        </div>

        {/* Nutritional Facts, Ingredients, Directions & Authenticity Tabs */}
        <NutritionTable product={product} />

        {/* Verified Customer Reviews Section */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8E4DA] gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
                CUSTOMER FEEDBACK
              </span>
              <h3 className="font-heading font-bold text-xl text-[#252821]">
                Verified Reviews & Ratings
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex text-[#D5AD65]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D5AD65]" />
                ))}
              </div>
              <span className="font-heading font-extrabold text-xl text-[#252821]">
                {product.rating} / 5
              </span>
              <span className="text-xs text-[#85877F]">
                ({product.reviewCount} customer reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-xs text-[#252821]">Anand K. (Verified Buyer)</span>
                <span className="text-[10px] text-[#85877F]">Bengaluru Hub</span>
              </div>
              <div className="flex text-[#D5AD65]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#D5AD65]" />
                ))}
              </div>
              <p className="text-xs text-[#252821] leading-relaxed">
                "Mixability is smooth with zero clumping. The scratch code verified on the Glanbia website on the first try. Authentic product and super fast delivery."
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-xs text-[#252821]">Gaurav P. (Verified Buyer)</span>
                <span className="text-[10px] text-[#85877F]">Hyderabad Hub</span>
              </div>
              <div className="flex text-[#D5AD65]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#D5AD65]" />
                ))}
              </div>
              <p className="text-xs text-[#252821] leading-relaxed">
                "Ordered via WhatsApp after asking about protein percentages. Team was courteous and gave accurate batch expiry info. Arrived safely packaged."
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
                  RECOMMENDED SUPPLEMENTS
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#252821] uppercase tracking-tight">
                  RELATED PRODUCTS
                </h3>
              </div>
              <Link to="/shop" className="text-xs text-[#263C32] hover:underline font-bold">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

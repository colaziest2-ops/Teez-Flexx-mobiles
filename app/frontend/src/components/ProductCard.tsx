import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFallbackImage } from '@/lib/imageUtils';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-brand-charcoal rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-lg"
    >
      {product.isPopular && (
        <div className="absolute top-3 left-3 bg-brand-gold text-brand-black text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full flex items-center gap-1 z-10">
          <Flame className="w-3 h-3 fill-brand-black" /> Popular
        </div>
      )}

      <Link to={`/product/${product.id}`} className="block">
        {/* Aspect-ratio container prevents cropping — full device always visible */}
        <div className="relative w-full aspect-[4/3] bg-black/30 p-6 overflow-hidden border-b border-white/5">
          <img
            src={product.image}
            alt={`Teez-Flexx Premium Pre-owned ${product.model}`}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.onerror = null;
              const slug = product.model.toLowerCase().replace(/\s+/g, '-');
              e.currentTarget.src = getFallbackImage(slug);
            }}
          />
        </div>
      </Link>

      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-1">
            <h3 className="text-lg font-bold text-white line-clamp-1">{product.model}</h3>
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-brand-gold font-mono">{product.storage}</span>
          </div>
          <p className="text-xs text-brand-muted mt-1">{product.description}</p>
          {product.conditionNote && (
            <p className="text-xs text-brand-muted mt-1 italic">{product.conditionNote}</p>
          )}
        </div>

        <div className="mt-5 space-y-3">
          <span className="text-2xl font-black text-brand-gold font-mono block">
            R {product.price.toLocaleString('en-ZA')}
          </span>
          {/* ≥48px tap target, touch-manipulation, visible focus ring */}
          <Button
            onClick={() => onAddToCart(product)}
            className="w-full bg-white/5 border border-white/10 text-white hover:bg-brand-gold hover:text-brand-black active:scale-95 text-sm font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 min-h-[48px] touch-manipulation focus:ring-2 focus:ring-brand-gold transition-all"
          >
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

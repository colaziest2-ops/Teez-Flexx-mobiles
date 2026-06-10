'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductDetailPage({ params }) {
  const productId = params?.id || '1';
  
  // Mock product - in a real app this would be fetched
  const product = {
    id: productId,
    model: 'iPhone 15 Pro',
    storage: '256GB',
    condition: 'New',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=800',
    description: 'Latest iPhone with cutting-edge technology',
    specs: ['A17 Pro Chip', 'Titanium Design', '48MP Camera', 'Excellent Battery Life']
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/shop" className="text-emerald-600 hover:text-emerald-700 mb-6 inline-block">
          ← Back to Shop
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
            <img src={product.image} alt={product.model} className="w-full h-full object-cover" />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.model}</h1>
            <p className="text-xl text-slate-600 mb-6">{product.description}</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-slate-600">Storage</span>
                <span className="font-semibold">{product.storage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Condition</span>
                <span className="font-semibold">{product.condition}</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm text-slate-600 mb-2">Specifications</p>
              <ul className="space-y-2">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-emerald-600">R{product.price.toLocaleString()}</span>
            </div>

            <Button className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 py-4 text-lg mb-4">
              Add to Cart
            </Button>
            <Button variant="outline" className="w-full rounded-full py-4 text-lg">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

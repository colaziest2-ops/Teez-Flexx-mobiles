'use client';

import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const coversData = [
  {
    id: 1,
    name: 'Colorful Geometric Case',
    price: 349,
    color: 'Multi',
    image: 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=800',
    description: 'Vibrant geometric pattern phone case with premium protection'
  },
  {
    id: 2,
    name: 'Premium Leather Case',
    price: 599,
    color: 'Brown',
    image: 'https://images.unsplash.com/photo-1576107324820-c10884700b6b?w=800',
    description: 'Genuine leather case with card slot and magnetic closure'
  },
  {
    id: 3,
    name: 'Clear Transparent Case',
    price: 249,
    color: 'Clear',
    image: 'https://images.unsplash.com/photo-1623393835885-560a7c576aa2?w=800',
    description: 'Crystal clear protective case showing your phone design'
  },
  {
    id: 4,
    name: 'Pastel Rainbow Case',
    price: 299,
    color: 'Multi',
    image: 'https://images.unsplash.com/photo-1623393884989-cb3663e431c5?w=800',
    description: 'Soft pastel rainbow gradient case perfect for any style'
  },
  {
    id: 5,
    name: 'Silicone Case Collection',
    price: 499,
    color: 'Various',
    image: 'https://images.pexels.com/photos/34444234/pexels-photo-34444234.jpeg?w=800',
    description: 'Premium silicone cases in multiple colors - buy one or the set'
  },
  {
    id: 6,
    name: 'Designer Phone Cases',
    price: 449,
    color: 'Multiple',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800',
    description: 'Luxury designer cases with premium finishes'
  },
];

export default function CoversPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleAddToCart = (cover) => {
    addToCart({
      id: cover.id,
      name: cover.name,
      price: cover.price,
      quantity: 1,
      image: cover.image,
    });
    toast.success(`${cover.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Custom Phone Covers</h1>
          <p className="text-slate-600">Protect your iPhone in style with our premium covers collection</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coversData.map((cover, index) => (
            <div
              key={cover.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:scale-105 duration-300"
            >
              <div
                className="aspect-square overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={cover.image}
                  alt={cover.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cover.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{cover.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">R{cover.price}</span>
                    <p className="text-xs text-slate-500">Color: {cover.color}</p>
                  </div>
                  <Button
                    className="rounded-full bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleAddToCart(cover)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          mainSrc={coversData[currentImageIndex].image}
          nextSrc={coversData[(currentImageIndex + 1) % coversData.length].image}
          prevSrc={coversData[(currentImageIndex + coversData.length - 1) % coversData.length].image}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImageIndex((currentImageIndex + coversData.length - 1) % coversData.length)
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % coversData.length)
          }
          imageTitle={`${coversData[currentImageIndex].name}`}
        />
      )}

      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Our Covers?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Materials</h3>
              <p className="text-slate-600">High-quality materials that last</p>
            </div>
            <div>
              <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Perfect Fit</h3>
              <p className="text-slate-600">Precise fit for all iPhone models</p>
            </div>
            <div>
              <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Stylish Designs</h3>
              <p className="text-slate-600">Updated designs for every taste</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

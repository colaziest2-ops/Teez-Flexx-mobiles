import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const CoversPage = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const covers = [
    {
      name: 'Colorful Geometric Case',
      price: 349,
      color: 'Multi',
      image: 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=800',
      description: 'Vibrant geometric pattern phone case'
    },
    {
      name: 'Premium Leather Case',
      price: 599,
      color: 'Brown',
      image: 'https://images.unsplash.com/photo-1576107324820-c10884700b6b?w=800',
      description: 'Genuine leather case with card slot'
    },
    {
      name: 'Clear Transparent Case',
      price: 249,
      color: 'Clear',
      image: 'https://images.unsplash.com/photo-1623393835885-560a7c576aa2?w=800',
      description: 'Crystal clear protective case'
    },
    {
      name: 'Pastel Rainbow Case',
      price: 299,
      color: 'Multi',
      image: 'https://images.unsplash.com/photo-1623393884989-cb3663e431c5?w=800',
      description: 'Soft pastel rainbow gradient case'
    },
    {
      name: 'Silicone Case Collection',
      price: 499,
      color: 'Various',
      image: 'https://images.pexels.com/photos/34444234/pexels-photo-34444234.jpeg?w=800',
      description: 'Premium silicone cases in multiple colors'
    },
    {
      name: 'Designer Phone Cases',
      price: 449,
      color: 'Multi',
      image: 'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800',
      description: 'Unique designer patterns and styles'
    }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const images = covers.map(c => c.image);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-testid="covers-page-title">
            Custom Phone Covers
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Protect your iPhone in style with our premium collection of custom covers. From sleek leather to vibrant patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {covers.map((cover, index) => (
            <div
              key={index}
              className="product-card bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg"
              data-testid={`cover-card-${index}`}
            >
              <div
                className="relative h-80 cursor-zoom-in"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={cover.image}
                  alt={cover.name}
                  className="w-full h-full object-cover image-zoom"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2" data-testid={`cover-name-${index}`}>
                  {cover.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{cover.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-900" data-testid={`cover-price-${index}`}>
                    R{cover.price}
                  </span>
                  <span className="text-sm text-slate-500">{cover.color}</span>
                </div>
                <Button
                  onClick={() => navigate('/contact')}
                  className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white"
                  data-testid={`cover-contact-btn-${index}`}
                >
                  Contact for Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Custom Design Service</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Want a unique design? We offer custom phone cover design and printing services. Bring your ideas to life!
          </p>
          <Button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-white text-emerald-600 hover:bg-slate-50 px-8 py-6 text-lg font-semibold"
            data-testid="custom-design-contact-btn"
          >
            Get Custom Design
          </Button>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[currentImageIndex]}
          nextSrc={images[(currentImageIndex + 1) % images.length]}
          prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() => setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default CoversPage;
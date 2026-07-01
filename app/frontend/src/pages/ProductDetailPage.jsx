import { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { COLOUR_META, imageUrl, handleImageError } from '@/lib/imageUtils';


const VARIANT_LOOKUP = {
  'iphone-11':          { label:'iPhone 11',         condition:'Used',         colours:['black','white','yellow','green','purple','red'],                                    storages:['64GB','128GB','256GB'],       prices:{'64GB':5999,'128GB':6999,'256GB':8499},          specs:['A13 Bionic chip','Dual 12MP cameras','4K video','IP68 water resistant']             },
  'iphone-11-pro':      { label:'iPhone 11 Pro',     condition:'Used',         colours:['midnight-green','space-grey','silver','gold'],                                      storages:['64GB','256GB','512GB'],       prices:{'64GB':7999,'256GB':9499,'512GB':11499},          specs:['A13 Bionic chip','Triple 12MP cameras','Super Retina XDR','IP68']                    },
  'iphone-11-pro-max':  { label:'iPhone 11 Pro Max', condition:'Used',         colours:['midnight-green','space-grey','silver','gold'],                                      storages:['64GB','256GB','512GB'],       prices:{'64GB':9499,'256GB':10999,'512GB':12999},         specs:['A13 Bionic chip','Triple camera','6.5" Super Retina XDR','IP68']                     },
  'iphone-12-mini':     { label:'iPhone 12 mini',    condition:'Refurbished',  colours:['black','white','blue','green','red','purple'],                                      storages:['64GB','128GB','256GB'],       prices:{'64GB':7499,'128GB':8499,'256GB':9999},           specs:['A14 Bionic','5G','Ceramic Shield','MagSafe']                                         },
  'iphone-12':          { label:'iPhone 12',         condition:'Refurbished',  colours:['black','white','blue','green','red','purple'],                                      storages:['64GB','128GB','256GB'],       prices:{'64GB':8999,'128GB':9999,'256GB':11499},          specs:['A14 Bionic','5G','Ceramic Shield','Dual camera','MagSafe']                           },
  'iphone-12-pro':      { label:'iPhone 12 Pro',     condition:'Refurbished',  colours:['graphite','silver','gold','pacific-blue'],                                          storages:['128GB','256GB','512GB'],      prices:{'128GB':11999,'256GB':13499,'512GB':15499},       specs:['A14 Bionic','Triple camera with LiDAR','5G','ProRAW support']                        },
  'iphone-12-pro-max':  { label:'iPhone 12 Pro Max', condition:'Refurbished',  colours:['graphite','silver','gold','pacific-blue'],                                          storages:['128GB','256GB','512GB'],      prices:{'128GB':13499,'256GB':14999,'512GB':16999},       specs:['A14 Bionic','Sensor-shift OIS','6.7" display','5G','LiDAR']                          },
  'iphone-13-mini':     { label:'iPhone 13 mini',    condition:'Refurbished',  colours:['midnight','starlight','blue','pink','green','red'],                                 storages:['128GB','256GB','512GB'],      prices:{'128GB':9999,'256GB':11499,'512GB':13499},        specs:['A15 Bionic','Cinematic mode','Smaller notch','Longer battery']                       },
  'iphone-13':          { label:'iPhone 13',         condition:'Refurbished',  colours:['midnight','starlight','blue','pink','green','red'],                                 storages:['128GB','256GB','512GB'],      prices:{'128GB':11999,'256GB':13499,'512GB':15499},       specs:['A15 Bionic','Cinematic mode','Smaller notch','Longer battery life']                  },
  'iphone-13-pro':      { label:'iPhone 13 Pro',     condition:'Refurbished',  colours:['graphite','silver','gold','sierra-blue','alpine-green'],                            storages:['128GB','256GB','512GB','1TB'],prices:{'128GB':14999,'256GB':16499,'512GB':18499,'1TB':20999},specs:['A15 Bionic','ProMotion 120Hz','Triple camera','Macro mode']              },
  'iphone-13-pro-max':  { label:'iPhone 13 Pro Max', condition:'Refurbished',  colours:['graphite','silver','gold','sierra-blue','alpine-green'],                            storages:['128GB','256GB','512GB','1TB'],prices:{'128GB':16499,'256GB':17999,'512GB':19999,'1TB':22499},specs:['A15 Bionic','6.7" ProMotion','Triple camera','All-day battery']          },
  'iphone-14':          { label:'iPhone 14',         condition:'New',          colours:['midnight','starlight','blue','purple','yellow','red'],                              storages:['128GB','256GB','512GB'],      prices:{'128GB':14999,'256GB':16499,'512GB':18999},       specs:['A15 Bionic','Crash Detection','Emergency SOS via satellite','48MP camera']           },
  'iphone-14-plus':     { label:'iPhone 14 Plus',    condition:'New',          colours:['midnight','starlight','blue','purple','yellow','red'],                              storages:['128GB','256GB','512GB'],      prices:{'128GB':16999,'256GB':18499,'512GB':20999},       specs:['A15 Bionic','6.7" display','Crash Detection','All-day battery']                      },
  'iphone-14-pro':      { label:'iPhone 14 Pro',     condition:'New',          colours:['space-black','silver','gold','deep-purple'],                                        storages:['128GB','256GB','512GB','1TB'],prices:{'128GB':18999,'256GB':20499,'512GB':22999,'1TB':25499},specs:['A16 Bionic','Dynamic Island','48MP camera','Always-On display']          },
  'iphone-14-pro-max':  { label:'iPhone 14 Pro Max', condition:'New',          colours:['space-black','silver','gold','deep-purple'],                                        storages:['128GB','256GB','512GB','1TB'],prices:{'128GB':20999,'256GB':22499,'512GB':24999,'1TB':27499},specs:['A16 Bionic','Dynamic Island','6.7" Always-On','ProRes video']            },
  'iphone-15':          { label:'iPhone 15',         condition:'New',          colours:['black','blue','green','yellow','pink'],                                             storages:['128GB','256GB','512GB'],      prices:{'128GB':19999,'256GB':21499,'512GB':23999},       specs:['A16 Bionic','USB-C','Dynamic Island','48MP camera']                                  },
  'iphone-15-plus':     { label:'iPhone 15 Plus',    condition:'New',          colours:['black','blue','green','yellow','pink'],                                             storages:['128GB','256GB','512GB'],      prices:{'128GB':21999,'256GB':23499,'512GB':25999},       specs:['A16 Bionic','USB-C','6.7" Dynamic Island','Super Retina XDR']                        },
  'iphone-15-pro':      { label:'iPhone 15 Pro',     condition:'New',          colours:['black-titanium','white-titanium','blue-titanium','natural-titanium'],               storages:['128GB','256GB','512GB','1TB'],prices:{'128GB':24999,'256GB':26499,'512GB':28999,'1TB':31499},specs:['A17 Pro','Titanium design','Action Button','USB 3 speeds']               },
  'iphone-15-pro-max':  { label:'iPhone 15 Pro Max', condition:'New',          colours:['black-titanium','white-titanium','blue-titanium','natural-titanium'],               storages:['256GB','512GB','1TB'],        prices:{'256GB':28499,'512GB':30999,'1TB':33499},         specs:['A17 Pro','Titanium','5x Tetraprism zoom','USB 3 speeds']                             },
  'iphone-16':          { label:'iPhone 16',         condition:'New',          colours:['black','white','ultramarine','teal','pink'],                                        storages:['128GB','256GB','512GB'],      prices:{'128GB':22999,'256GB':24499,'512GB':26999},       specs:['A18 chip','Camera Control button','Action Button','Apple Intelligence']              },
  'iphone-16-plus':     { label:'iPhone 16 Plus',    condition:'New',          colours:['black','white','ultramarine','teal','pink'],                                        storages:['128GB','256GB','512GB'],      prices:{'128GB':24999,'256GB':26499,'512GB':28999},       specs:['A18 chip','6.7" display','Camera Control','Apple Intelligence']                      },
  'iphone-16-pro':      { label:'iPhone 16 Pro',     condition:'New',          colours:['black-titanium','white-titanium','natural-titanium','desert-titanium'],             storages:['128GB','256GB','512GB','1TB'],prices:{'128GB':27999,'256GB':29499,'512GB':31999,'1TB':34499},specs:['A18 Pro','Camera Control','4K 120fps Dolby Vision','Apple Intelligence']  },
  'iphone-16-pro-max':  { label:'iPhone 16 Pro Max', condition:'New',          colours:['black-titanium','white-titanium','natural-titanium','desert-titanium'],             storages:['256GB','512GB','1TB'],        prices:{'256GB':31499,'512GB':33999,'1TB':36499},         specs:['A18 Pro','6.9" display','5x zoom','Camera Control','Apple Intelligence']             },
};

const CONDITION_STYLES = {
  'New':          { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  'Refurbished':  { bg: 'bg-blue-100',    text: 'text-blue-700'    },
  'Used':         { bg: 'bg-amber-100',   text: 'text-amber-700'   },
};

const ProductDetailPage = () => {
  const { id: slug } = useParams();
  const [searchParams] = useSearchParams();
  const variantData = VARIANT_LOOKUP[slug];

  const [selectedColour, setSelectedColour] = useState(
    searchParams.get('colour') || (variantData && variantData.colours[0]) || ''
  );
  const [selectedStorage, setSelectedStorage] = useState(
    searchParams.get('storage') || (variantData && variantData.storages[0]) || ''
  );

  if (!variantData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Product not found.</p>
          <Link to="/shop" className="text-emerald-600 hover:text-emerald-700">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const price = variantData.prices[selectedStorage] || Object.values(variantData.prices)[0];
  const imgSrc = imageUrl(slug, selectedColour);
  const colourMeta = COLOUR_META[selectedColour] || { label: selectedColour, hex: '#ccc' };
  const condStyle = CONDITION_STYLES[variantData.condition] || { bg: 'bg-slate-100', text: 'text-slate-700' };

  const handleAddToCart = () => {
    // wire up your CartContext here e.g.: addToCart({ id, name, price, image })
    alert(`Added: ${variantData.label} ${colourMeta.label} ${selectedStorage} — R${price.toLocaleString()}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Link
          to="/shop"
          className="text-emerald-600 hover:text-emerald-700 mb-8 inline-flex items-center gap-1 text-sm font-medium"
        >
          ← Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-6">

          {/* Image */}
          <div>
            <div className="bg-white rounded-3xl border border-slate-100 aspect-square overflow-hidden shadow-sm flex items-center justify-center">
              <img
                key={imgSrc}
                src={imgSrc}
                alt={`${variantData.label} ${colourMeta.label}`}
                className="w-full h-full object-cover"
                onError={(e) => handleImageError(e, slug)}
              />
            </div>

            {/* Colour dots */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {variantData.colours.map((c) => {
                const meta = COLOUR_META[c] || { hex: '#ccc' };
                return (
                  <button
                    key={c}
                    title={(COLOUR_META[c] || {}).label || c}
                    onClick={() => setSelectedColour(c)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColour === c
                        ? 'border-emerald-500 scale-110 shadow-md'
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                    style={{ backgroundColor: meta.hex }}
                  />
                );
              })}
            </div>
            <p className="text-sm text-slate-500 mt-2">{colourMeta.label}</p>
          </div>

          {/* Details */}
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${condStyle.bg} ${condStyle.text}`}>
              {variantData.condition}
            </span>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">{variantData.label}</h1>
            <p className="text-slate-500 mb-8">{colourMeta.label}</p>

            {/* Storage */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-slate-700 mb-3">Storage</p>
              <div className="flex flex-wrap gap-2">
                {variantData.storages.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedStorage(s)}
                    className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all ${
                      selectedStorage === s
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {s}
                    <span className={`block text-xs font-normal mt-0.5 ${selectedStorage === s ? 'text-slate-300' : 'text-slate-400'}`}>
                      R{variantData.prices[s].toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-slate-700 mb-3">Highlights</p>
              <ul className="space-y-2">
                {variantData.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2 text-slate-600 text-sm">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price + CTA */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-500">{selectedStorage}</p>
                  <p className="text-3xl font-bold text-emerald-600">R{price.toLocaleString()}</p>
                </div>
              </div>
              <button
                className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-base font-semibold mb-3 flex items-center justify-center gap-2 transition-colors"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
              <button className="w-full rounded-full border border-slate-200 hover:border-slate-400 bg-white text-slate-700 py-3 text-base font-medium transition-colors">
                Ask via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
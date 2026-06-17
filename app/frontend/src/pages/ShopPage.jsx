import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight, Sparkles, RefreshCw } from 'lucide-react';

const SUPABASE_BASE =
  'https://qphtpwbmgadegkhkhxua.supabase.co/storage/v1/object/public/product-images';

/* ─── Colour metadata ─── */
const COLOUR_META = {
  'black':              { label: 'Black',              hex: '#1a1a1a' },
  'white':              { label: 'White',              hex: '#f5f5f0' },
  'silver':             { label: 'Silver',             hex: '#c0c0c0' },
  'gold':               { label: 'Gold',               hex: '#d4af70' },
  'space-grey':         { label: 'Space Grey',         hex: '#6e6e73' },
  'graphite':           { label: 'Graphite',           hex: '#4e4e52' },
  'space-black':        { label: 'Space Black',        hex: '#2c2c2e' },
  'black-titanium':     { label: 'Black Titanium',     hex: '#2c2c2e' },
  'white-titanium':     { label: 'White Titanium',     hex: '#e8e5de' },
  'blue-titanium':      { label: 'Blue Titanium',      hex: '#5b6b7a' },
  'natural-titanium':   { label: 'Natural Titanium',   hex: '#a89a88' },
  'desert-titanium':    { label: 'Desert Titanium',    hex: '#c4a882' },
  'blue':               { label: 'Blue',               hex: '#4a90d9' },
  'sierra-blue':        { label: 'Sierra Blue',        hex: '#9ab8cd' },
  'pacific-blue':       { label: 'Pacific Blue',       hex: '#2e5f7a' },
  'ultramarine':        { label: 'Ultramarine',        hex: '#3a4f8a' },
  'green':              { label: 'Green',              hex: '#4caf7d' },
  'midnight-green':     { label: 'Midnight Green',     hex: '#3a4f42' },
  'alpine-green':       { label: 'Alpine Green',       hex: '#576856' },
  'teal':               { label: 'Teal',               hex: '#3a8a8a' },
  'pink':               { label: 'Pink',               hex: '#f5b8c4' },
  'purple':             { label: 'Purple',             hex: '#9b59b6' },
  'deep-purple':        { label: 'Deep Purple',        hex: '#3d2060' },
  'yellow':             { label: 'Yellow',             hex: '#f5e642' },
  'red':                { label: 'Red',                hex: '#d0021b' },
  'starlight':          { label: 'Starlight',          hex: '#f1ece2' },
  'midnight':           { label: 'Midnight',           hex: '#1a2232' },
  'coral':              { label: 'Coral',              hex: '#ff6b6b' },
};

/* ─── NEW iPhones Data ─── */
const NEW_IPHONE_DATA = {
  'iPhone 15': {
    generation: 15,
    variants: [
      { slug: 'iphone-15', label: 'iPhone 15', colours: ['black','blue','green','yellow','pink'], storages: ['128GB'], prices: { '128GB': 12499 } },
    ],
  },
  'iPhone 16': {
    generation: 16,
    variants: [
      { slug: 'iphone-16', label: 'iPhone 16', colours: ['black','white','ultramarine','teal','pink'], storages: ['128GB'], prices: { '128GB': 15499 } },
    ],
  },
  'iPhone 17': {
    generation: 17,
    variants: [
      { slug: 'iphone-17',         label: 'iPhone 17',         colours: ['black','white','green','blue','pink'],                                      storages: ['256GB'],          prices: { '256GB': 17999 } },
      { slug: 'iphone-17-pro',     label: 'iPhone 17 Pro',     colours: ['black-titanium','white-titanium','natural-titanium','desert-titanium'],     storages: ['256GB'],          prices: { '256GB': 24999 } },
      { slug: 'iphone-17-pro-max', label: 'iPhone 17 Pro Max', colours: ['black-titanium','white-titanium','natural-titanium','desert-titanium'],     storages: ['256GB','512GB'],  prices: { '256GB': 27999, '512GB': 32499 } },
    ],
  },
};

/* ─── REFURBISHED / PRE-OWNED Data ─── */
const REFURBISHED_IPHONE_DATA = {
  'iPhone XR': {
    generation: 10,
    variants: [
      { slug: 'iphone-xr', label: 'iPhone XR', colours: ['black','white','blue','yellow','coral','red'], storages: ['64GB','128GB'], prices: { '64GB': 3700, '128GB': 4500 } },
    ],
  },
  'iPhone 11': {
    generation: 11,
    variants: [
      { slug: 'iphone-11',         label: 'iPhone 11',         colours: ['black','white','yellow','green','purple','red'],   storages: ['64GB','128GB'],  prices: { '64GB': 4700, '128GB': 5500 } },
      { slug: 'iphone-11-pro',     label: 'iPhone 11 Pro',     colours: ['midnight-green','space-grey','silver','gold'],     storages: ['64GB','256GB'],  prices: { '64GB': 5500, '256GB': 6000 } },
      { slug: 'iphone-11-pro-max', label: 'iPhone 11 Pro Max', colours: ['midnight-green','space-grey','silver','gold'],     storages: ['64GB','256GB'],  prices: { '64GB': 7500, '256GB': 8000 } },
    ],
  },
  'iPhone 12': {
    generation: 12,
    variants: [
      { slug: 'iphone-12',         label: 'iPhone 12',         colours: ['black','white','blue','green','red','purple'],     storages: ['64GB','128GB'],  prices: { '64GB': 5600, '128GB': 6000 } },
      { slug: 'iphone-12-pro-max', label: 'iPhone 12 Pro Max', colours: ['graphite','silver','gold','pacific-blue'],         storages: ['128GB','256GB'], prices: { '128GB': 9500, '256GB': 10000 } },
    ],
  },
  'iPhone 13': {
    generation: 13,
    variants: [
      { slug: 'iphone-13',         label: 'iPhone 13',         colours: ['midnight','starlight','blue','pink','green','red'],          storages: ['128GB','256GB'], prices: { '128GB': 7500, '256GB': 8000 } },
      { slug: 'iphone-13-pro',     label: 'iPhone 13 Pro',     colours: ['graphite','silver','gold','sierra-blue','alpine-green'],     storages: ['128GB','256GB'], prices: { '128GB': 10000, '256GB': 10500 } },
      { slug: 'iphone-13-pro-max', label: 'iPhone 13 Pro Max', colours: ['graphite','silver','gold','sierra-blue','alpine-green'],     storages: ['128GB','256GB'], prices: { '128GB': 11500, '256GB': 12000 } },
    ],
  },
  'iPhone 14': {
    generation: 14,
    variants: [
      { slug: 'iphone-14',         label: 'iPhone 14',         colours: ['midnight','starlight','blue','purple','yellow','red'],  storages: ['128GB'],         prices: { '128GB': 8500 } },
      { slug: 'iphone-14-pro',     label: 'iPhone 14 Pro',     colours: ['space-black','silver','gold','deep-purple'],           storages: ['128GB','256GB'], prices: { '128GB': 12500, '256GB': 13000 } },
      { slug: 'iphone-14-pro-max', label: 'iPhone 14 Pro Max', colours: ['space-black','silver','gold','deep-purple'],           storages: ['128GB','256GB'], prices: { '128GB': 13000, '256GB': 13500 } },
    ],
  },
  'iPhone 15': {
    generation: 15,
    variants: [
      { slug: 'iphone-15',         label: 'iPhone 15',         colours: ['black','blue','green','yellow','pink'],                                         storages: ['128GB','256GB'], prices: { '128GB': 11000, '256GB': 11500 } },
      { slug: 'iphone-15-pro',     label: 'iPhone 15 Pro',     colours: ['black-titanium','white-titanium','blue-titanium','natural-titanium'],           storages: ['128GB','256GB'], prices: { '128GB': 14000, '256GB': 14500 } },
      { slug: 'iphone-15-pro-max', label: 'iPhone 15 Pro Max', colours: ['black-titanium','white-titanium','blue-titanium','natural-titanium'],           storages: ['256GB','512GB'], prices: { '256GB': 18000, '512GB': 19000 } },
    ],
  },
  'iPhone 16': {
    generation: 16,
    variants: [
      { slug: 'iphone-16',         label: 'iPhone 16',         colours: ['black','white','ultramarine','teal','pink'],                           storages: ['128GB','256GB'], prices: { '128GB': 12500, '256GB': 13000 } },
      { slug: 'iphone-16-plus',    label: 'iPhone 16 Plus',    colours: ['black','white','ultramarine','teal','pink'],                           storages: ['128GB','256GB'], prices: { '128GB': 13500, '256GB': 14000 } },
      { slug: 'iphone-16-pro-max', label: 'iPhone 16 Pro Max', colours: ['black-titanium','white-titanium','natural-titanium','desert-titanium'],storages: ['256GB','512GB'], prices: { '256GB': 20000, '512GB': 21500 } },
    ],
  },
};

/* ─── Helpers ─── */
function getGenerations(data) {
  return Object.keys(data).sort(
    (a, b) => data[b].generation - data[a].generation
  );
}

function imageUrl(modelSlug, colourSlug) {
  return `${SUPABASE_BASE}/${modelSlug}/${colourSlug}.jpg`;
}

/* ─── Main Component ─── */
const ShopPage = () => {
  const [activeTab, setActiveTab] = useState('new');

  const currentData = activeTab === 'new' ? NEW_IPHONE_DATA : REFURBISHED_IPHONE_DATA;
  const generations = useMemo(() => getGenerations(currentData), [currentData]);

  const firstGen = generations[0];
  const firstVariant = currentData[firstGen].variants[0];

  const [selectedGen, setSelectedGen] = useState(firstGen);
  const [selectedVariantSlug, setSelectedVariantSlug] = useState(firstVariant.slug);
  const [selectedColour, setSelectedColour] = useState(firstVariant.colours[0]);
  const [selectedStorage, setSelectedStorage] = useState(firstVariant.storages[0]);

  const variants = useMemo(() => {
    if (currentData[selectedGen]) return currentData[selectedGen].variants;
    return currentData[generations[0]].variants;
  }, [currentData, selectedGen, generations]);

  const variant = useMemo(
    () => variants.find((v) => v.slug === selectedVariantSlug) || variants[0],
    [variants, selectedVariantSlug]
  );

  const price = variant.prices[selectedStorage] || Object.values(variant.prices)[0];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const data = tab === 'new' ? NEW_IPHONE_DATA : REFURBISHED_IPHONE_DATA;
    const gens = getGenerations(data);
    const fGen = gens[0];
    const fVariant = data[fGen].variants[0];
    setSelectedGen(fGen);
    setSelectedVariantSlug(fVariant.slug);
    setSelectedColour(fVariant.colours[0]);
    setSelectedStorage(fVariant.storages[0]);
  };

  const handleGenChange = (gen) => {
    const firstV = currentData[gen].variants[0];
    setSelectedGen(gen);
    setSelectedVariantSlug(firstV.slug);
    setSelectedColour(firstV.colours[0]);
    setSelectedStorage(firstV.storages[0]);
  };

  const handleVariantChange = (slug) => {
    const v = currentData[selectedGen].variants.find((x) => x.slug === slug);
    setSelectedVariantSlug(slug);
    setSelectedColour(v.colours[0]);
    setSelectedStorage(v.storages[0]);
  };

  const imgSrc = imageUrl(variant.slug, selectedColour);
  const colourLabel = (COLOUR_META[selectedColour] || {}).label || selectedColour;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100 py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">Shop iPhones</h1>
          <p className="text-slate-500 text-sm sm:text-base">Choose your model, colour and storage</p>

          {/* Tabs */}
          <div className="mt-6 flex gap-2 sm:gap-3">
            <button
              onClick={() => handleTabChange('new')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold border-2 transition-all touch-manipulation min-h-[44px] ${
                activeTab === 'new'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
              }`}
            >
              <Sparkles className="h-4 w-4" />
              New iPhones
            </button>
            <button
              onClick={() => handleTabChange('refurbished')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold border-2 transition-all touch-manipulation min-h-[44px] ${
                activeTab === 'refurbished'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
              }`}
            >
              <RefreshCw className="h-4 w-4" />
              Refurbished / Pre-Owned
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Condition badge */}
        <div className="mb-6">
          {activeTab === 'new' ? (
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Sparkles className="h-3 w-3" /> Brand New — Sealed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold px-3 py-1.5 rounded-full">
              <RefreshCw className="h-3 w-3" /> Pre-Owned — Includes: Charger • Screen Protector & Case • 3-Month Warranty
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-start">

          {/* Left: Image */}
          <div className="lg:sticky lg:top-24 order-1">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 aspect-square overflow-hidden shadow-sm flex items-center justify-center p-4 sm:p-6">
              <img
                key={imgSrc}
                src={imgSrc}
                alt={`${variant.label} in ${colourLabel}`}
                className="w-full h-full object-contain transition-opacity duration-300"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1592286927505-1def25115558?w=800';
                }}
              />
            </div>

            {/* Colour dots */}
            <div className="flex gap-2 mt-3 sm:mt-4 flex-wrap justify-center">
              {variant.colours.map((c) => {
                const meta = COLOUR_META[c] || { hex: '#ccc' };
                return (
                  <button
                    key={c}
                    title={(COLOUR_META[c] || {}).label || c}
                    onClick={() => setSelectedColour(c)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 transition-all touch-manipulation ${
                      selectedColour === c
                        ? 'border-emerald-500 scale-110 shadow-md'
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                    style={{ backgroundColor: meta.hex }}
                  />
                );
              })}
            </div>
            <p className="text-center text-sm text-slate-500 mt-2">{colourLabel}</p>
          </div>

          {/* Right: Selectors */}
          <div className="space-y-6 sm:space-y-8 order-2">

            {/* Step 1: Generation */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                1 — Choose generation
              </p>
              <div className="flex flex-wrap gap-2">
                {generations.map((gen) => (
                  <button
                    key={gen}
                    onClick={() => handleGenChange(gen)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all touch-manipulation min-h-[40px] ${
                      selectedGen === gen
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {gen}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Model */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                2 — Choose model
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {variants.map((v) => (
                  <button
                    key={v.slug}
                    onClick={() => handleVariantChange(v.slug)}
                    className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold border text-left transition-all touch-manipulation min-h-[44px] ${
                      selectedVariantSlug === v.slug
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Colour */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                3 — Choose colour
              </p>
              <div className="flex flex-wrap gap-2">
                {variant.colours.map((c) => {
                  const meta = COLOUR_META[c] || { label: c, hex: '#ccc' };
                  return (
                    <button
                      key={c}
                      onClick={() => setSelectedColour(c)}
                      className={`flex items-center gap-2 px-2 sm:px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all touch-manipulation min-h-[40px] ${
                        selectedColour === c
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full inline-block border border-white/30 flex-shrink-0"
                        style={{ backgroundColor: meta.hex }}
                      />
                      <span className="hidden sm:inline">{meta.label}</span>
                      <span className="sm:hidden">{meta.label.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Storage */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                4 — Choose storage
              </p>
              <div className="flex flex-wrap gap-2">
                {variant.storages.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedStorage(s)}
                    className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all touch-manipulation min-h-[40px] ${
                      selectedStorage === s
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary + CTA */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">{variant.label}</h2>
                  <p className="text-slate-500 text-sm">
                    {colourLabel} · {selectedStorage}
                    {activeTab === 'refurbished' && ' · Pre-Owned'}
                  </p>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-emerald-600">
                  R{price.toLocaleString()}
                </span>
              </div>

              <button
                className="w-full mt-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 transition-colors touch-manipulation min-h-[48px]"
                onClick={() => {
                  alert(`Added: ${variant.label} ${colourLabel} ${selectedStorage} — R${price.toLocaleString()}`);
                }}
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>

              <Link
                to={`/product/${variant.slug}?colour=${selectedColour}&storage=${selectedStorage}`}
                className="flex items-center justify-center gap-1 mt-3 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
              >
                View full details <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* ZAR Note */}
            <p className="text-xs text-slate-400 text-center">
              Prices are in South African Rand (ZAR). Contact us for availability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
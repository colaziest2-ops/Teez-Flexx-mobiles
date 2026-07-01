/* Shared image helpers for product pages */

export const SUPABASE_BASE =
  'https://qphtpwbmgadegkhkhxua.supabase.co/storage/v1/object/public/product-images';

export const COLOUR_META = {
  black:              { label: 'Black',              hex: '#1a1a1a' },
  white:              { label: 'White',              hex: '#f5f5f0' },
  silver:             { label: 'Silver',             hex: '#c0c0c0' },
  gold:               { label: 'Gold',               hex: '#d4af70' },
  'space-grey':       { label: 'Space Grey',         hex: '#6e6e73' },
  graphite:           { label: 'Graphite',           hex: '#4e4e52' },
  'space-black':      { label: 'Space Black',        hex: '#2c2c2e' },
  'black-titanium':   { label: 'Black Titanium',     hex: '#2c2c2e' },
  'white-titanium':   { label: 'White Titanium',     hex: '#e8e5de' },
  'blue-titanium':    { label: 'Blue Titanium',      hex: '#5b6b7a' },
  'natural-titanium': { label: 'Natural Titanium',   hex: '#a89a88' },
  'desert-titanium':  { label: 'Desert Titanium',    hex: '#c4a882' },
  blue:               { label: 'Blue',               hex: '#4a90d9' },
  'sierra-blue':      { label: 'Sierra Blue',        hex: '#9ab8cd' },
  'pacific-blue':     { label: 'Pacific Blue',       hex: '#2e5f7a' },
  ultramarine:        { label: 'Ultramarine',        hex: '#3a4f8a' },
  green:              { label: 'Green',              hex: '#4caf7d' },
  'midnight-green':   { label: 'Midnight Green',     hex: '#3a4f42' },
  'alpine-green':     { label: 'Alpine Green',       hex: '#576856' },
  teal:               { label: 'Teal',               hex: '#3a8a8a' },
  pink:               { label: 'Pink',               hex: '#f5b8c4' },
  purple:             { label: 'Purple',             hex: '#9b59b6' },
  'deep-purple':      { label: 'Deep Purple',        hex: '#3d2060' },
  yellow:             { label: 'Yellow',             hex: '#f5e642' },
  red:                { label: 'Red',                hex: '#d0021b' },
  starlight:          { label: 'Starlight',          hex: '#f1ece2' },
  midnight:           { label: 'Midnight',           hex: '#1a2232' },
  coral:              { label: 'Coral',              hex: '#ff6b6b' },
  lavender:           { label: 'Lavender',           hex: '#b5a0d4' },
  'cosmic-orange':    { label: 'Cosmic Orange',      hex: '#e8601c' },
  'deep-blue':        { label: 'Deep Blue',          hex: '#1b3a6b' },
};

/*
  Verified, working Unsplash fallback images.
  Where the Supabase colour photo is missing, we fall back to a high-quality
  representative Unsplash image matched to the model generation.
  iPhone 17 images are not yet in Supabase, so they use a modern flagship photo.
*/
export const FALLBACK_IMAGES = {
  'iphone-17-pro-max': 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
  'iphone-17-pro':     'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
  'iphone-17':         'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
  'iphone-16-pro-max': 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800',
  'iphone-16-pro':     'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800',
  'iphone-16-plus':    'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800',
  'iphone-16':         'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800',
  'iphone-15-pro-max': 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800',
  'iphone-15-pro':     'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800',
  'iphone-15-plus':    'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800',
  'iphone-15':         'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800',
  'iphone-14-pro-max': 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800',
  'iphone-14-pro':     'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800',
  'iphone-14-plus':    'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800',
  'iphone-14':         'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800',
  'iphone-13-pro-max': 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800',
  'iphone-13-pro':     'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800',
  'iphone-13-mini':    'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800',
  'iphone-13':         'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800',
  'iphone-12-pro-max': 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=800',
  'iphone-12-pro':     'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=800',
  'iphone-12-mini':    'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=800',
  'iphone-12':         'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=800',
  'iphone-11-pro-max': 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=800',
  'iphone-11-pro':     'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=800',
  'iphone-11':         'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=800',
  'iphone-xr':         'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800',
};

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=800';

export function getFallbackImage(modelSlug) {
  return FALLBACK_IMAGES[modelSlug] || DEFAULT_FALLBACK;
}

export function imageUrl(modelSlug, colourSlug) {
  return `${SUPABASE_BASE}/${modelSlug}/${colourSlug}.jpg`;
}

export function handleImageError(e, modelSlug) {
  e.target.onerror = null;
  e.target.src = getFallbackImage(modelSlug);
}

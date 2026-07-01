export interface Product {
  id: number;
  model: string;
  storage: string;
  price: number;
  condition: 'New' | 'Pre-owned';
  image: string;
  description: string;
  isPopular?: boolean;
  conditionNote?: string;
}

export const products: Product[] = [
  // ─── NEW iPhones ───
  {
    id: 101,
    model: 'iPhone 15',
    storage: '128GB',
    price: 12499,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Brand New — Sealed with full Apple warranty',
    isPopular: true,
  },
  {
    id: 102,
    model: 'iPhone 16',
    storage: '128GB',
    price: 15499,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Brand New — Sealed with full Apple warranty',
    isPopular: true,
  },
  {
    id: 103,
    model: 'iPhone 17',
    storage: '256GB',
    price: 17999,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    description: 'Brand New — Sealed with full Apple warranty',
  },
  {
    id: 104,
    model: 'iPhone 17 Pro',
    storage: '256GB',
    price: 24999,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    description: 'Brand New — Sealed with full Apple warranty',
    isPopular: true,
  },
  {
    id: 105,
    model: 'iPhone 17 Pro Max',
    storage: '256GB',
    price: 27999,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    description: 'Brand New — Sealed with full Apple warranty',
  },
  {
    id: 106,
    model: 'iPhone 17 Pro Max',
    storage: '512GB',
    price: 32499,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    description: 'Brand New — Sealed with full Apple warranty',
  },

  // ─── PRE-OWNED iPhones ───

  // iPhone XR
  {
    id: 1,
    model: 'iPhone XR',
    storage: '64GB',
    price: 3700,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 2,
    model: 'iPhone XR',
    storage: '128GB',
    price: 4500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 11
  {
    id: 3,
    model: 'iPhone 11',
    storage: '64GB',
    price: 4700,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 4,
    model: 'iPhone 11',
    storage: '128GB',
    price: 5500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 5,
    model: 'iPhone 11 Pro',
    storage: '64GB',
    price: 5500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 6,
    model: 'iPhone 11 Pro',
    storage: '256GB',
    price: 6000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 7,
    model: 'iPhone 11 Pro Max',
    storage: '64GB',
    price: 7500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 8,
    model: 'iPhone 11 Pro Max',
    storage: '256GB',
    price: 8000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 12
  {
    id: 9,
    model: 'iPhone 12',
    storage: '64GB',
    price: 5600,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 10,
    model: 'iPhone 12',
    storage: '128GB',
    price: 6000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 11,
    model: 'iPhone 12 Pro Max',
    storage: '128GB',
    price: 9500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 12,
    model: 'iPhone 12 Pro Max',
    storage: '256GB',
    price: 10000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 13
  {
    id: 13,
    model: 'iPhone 13',
    storage: '128GB',
    price: 7500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 14,
    model: 'iPhone 13',
    storage: '256GB',
    price: 8000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 15,
    model: 'iPhone 13 Pro',
    storage: '128GB',
    price: 10000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 16,
    model: 'iPhone 13 Pro',
    storage: '256GB',
    price: 10500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 17,
    model: 'iPhone 13 Pro Max',
    storage: '128GB',
    price: 11500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 18,
    model: 'iPhone 13 Pro Max',
    storage: '256GB',
    price: 12000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 14
  {
    id: 19,
    model: 'iPhone 14',
    storage: '128GB',
    price: 8500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 20,
    model: 'iPhone 14 Pro',
    storage: '128GB',
    price: 12500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 21,
    model: 'iPhone 14 Pro',
    storage: '256GB',
    price: 13000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 22,
    model: 'iPhone 14 Pro Max',
    storage: '128GB',
    price: 13000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 23,
    model: 'iPhone 14 Pro Max',
    storage: '256GB',
    price: 13500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 15
  {
    id: 24,
    model: 'iPhone 15',
    storage: '128GB',
    price: 11000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 25,
    model: 'iPhone 15',
    storage: '256GB',
    price: 11500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 26,
    model: 'iPhone 15 Pro',
    storage: '128GB',
    price: 14000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 27,
    model: 'iPhone 15 Pro',
    storage: '256GB',
    price: 14500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 28,
    model: 'iPhone 15 Pro Max',
    storage: '256GB',
    price: 18000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 29,
    model: 'iPhone 15 Pro Max',
    storage: '512GB',
    price: 19000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 16
  {
    id: 30,
    model: 'iPhone 16',
    storage: '128GB',
    price: 12500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 31,
    model: 'iPhone 16',
    storage: '256GB',
    price: 13000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 32,
    model: 'iPhone 16 Plus',
    storage: '128GB',
    price: 13500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 33,
    model: 'iPhone 16 Plus',
    storage: '256GB',
    price: 14000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 34,
    model: 'iPhone 16 Pro Max',
    storage: '256GB',
    price: 20000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 35,
    model: 'iPhone 16 Pro Max',
    storage: '512GB',
    price: 21500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByModel = (model: string): Product[] => {
  return products.filter(p => p.model.includes(model));
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.condition === 'New');
};

export const getPreOwnedProducts = (): Product[] => {
  return products.filter(p => p.condition === 'Pre-owned');
};

export const storages = ['64GB', '128GB', '256GB', '512GB', '1TB'];
export const models = ['XR', '11', '12', '13', '14', '15', '16', '17'];

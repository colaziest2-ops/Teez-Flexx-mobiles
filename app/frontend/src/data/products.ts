export interface Product {
  id: number;
  model: string;
  storage: string;
  price: number;
  condition: 'Pre-owned';
  image: string;
  description: string;
  isPopular?: boolean;
  conditionNote?: string;
}

export const products: Product[] = [
  // iPhone XR Series
  {
    id: 1,
    model: 'iPhone XR',
    storage: '64GB',
    price: 3700,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1556656793-02771a883d33?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 2,
    model: 'iPhone XR',
    storage: '128GB',
    price: 4500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1556656793-02771a883d33?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 11 Series
  {
    id: 3,
    model: 'iPhone 11',
    storage: '64GB',
    price: 4700,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1573920111312-04f1d1e45d9d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 4,
    model: 'iPhone 11',
    storage: '128GB',
    price: 5500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1573920111312-04f1d1e45d9d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 5,
    model: 'iPhone 11 Pro',
    storage: '64GB',
    price: 5500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1573920111312-04f1d1e45d9d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 6,
    model: 'iPhone 11 Pro Max',
    storage: '64GB',
    price: 7500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1573920111312-04f1d1e45d9d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 7,
    model: 'iPhone 11 Pro Max',
    storage: '256GB',
    price: 8000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1573920111312-04f1d1e45d9d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 12 Series
  {
    id: 8,
    model: 'iPhone 12',
    storage: '64GB',
    price: 5600,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c3ca3806d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 9,
    model: 'iPhone 12',
    storage: '128GB',
    price: 6000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c3ca3806d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 10,
    model: 'iPhone 12 Pro Max',
    storage: '128GB',
    price: 9500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c3ca3806d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 11,
    model: 'iPhone 12 Pro Max',
    storage: '256GB',
    price: 10000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c3ca3806d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 13 Series
  {
    id: 12,
    model: 'iPhone 13',
    storage: '128GB',
    price: 7500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 13,
    model: 'iPhone 13 Pro',
    storage: '128GB',
    price: 10000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 14,
    model: 'iPhone 13 Pro',
    storage: '256GB',
    price: 11000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 15,
    model: 'iPhone 13 Pro Max',
    storage: '128GB',
    price: 11500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 16,
    model: 'iPhone 13 Pro Max',
    storage: '256GB',
    price: 12000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 14 Series
  {
    id: 17,
    model: 'iPhone 14',
    storage: '128GB',
    price: 8500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 18,
    model: 'iPhone 14 Pro',
    storage: '128GB',
    price: 12500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 19,
    model: 'iPhone 14 Pro Max',
    storage: '128GB',
    price: 14500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 15 Series
  {
    id: 20,
    model: 'iPhone 15',
    storage: '128GB',
    price: 11000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 21,
    model: 'iPhone 15 Pro',
    storage: '128GB',
    price: 14500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 22,
    model: 'iPhone 15 Pro Max',
    storage: '256GB',
    price: 18000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },

  // iPhone 16 Series
  {
    id: 23,
    model: 'iPhone 16',
    storage: '128GB',
    price: 12500,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1726486369031-8941f8e00b3d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
    isPopular: true,
  },
  {
    id: 24,
    model: 'iPhone 16 Pro',
    storage: '128GB',
    price: 17000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1726486369031-8941f8e00b3d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
  {
    id: 25,
    model: 'iPhone 16 Pro Max',
    storage: '256GB',
    price: 20000,
    condition: 'Pre-owned',
    image: 'https://images.unsplash.com/photo-1726486369031-8941f8e00b3d?w=500',
    description: 'Included: Charger • Screen Protector & Case • 3-Month Warranty',
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByModel = (model: string): Product[] => {
  return products.filter(p => p.model.includes(model));
};

export const storages = ['64GB', '128GB', '256GB', '512GB', '1TB'];
export const models = ['XR', '11', '12', '13', '14', '15', '16'];

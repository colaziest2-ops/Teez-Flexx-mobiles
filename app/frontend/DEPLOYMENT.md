# Teez-Flexx Mobiles - Next.js Frontend

A modern, responsive e-commerce website for Teez-Flexx Mobiles, built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, **Radix UI**, and **Supabase**.

## Features

- ✅ Modern UI with Tailwind CSS & Radix UI components
- ✅ Mobile-responsive design
- ✅ Shopping cart and checkout flow
- ✅ Product filtering and search
- ✅ Phone covers gallery with lightbox
- ✅ Services: Diagnostics, Repairs, Trade-in
- ✅ Supabase integration ready
- ✅ SEO optimized with sitemap & robots.txt
- ✅ Dark/light mode support
- ✅ Real-time notifications with Sonner
- ✅ Form validation with React Hook Form + Zod

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Form Handling**: React Hook Form + Zod
- **Data Fetching**: TanStack React Query (SWR)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- Yarn 1.22+ or npm 10+
- Supabase account

### Installation

```bash
# Install dependencies
yarn install

# Copy environment variables
cp .env.example .env.local

# Add your Supabase credentials to .env.local
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
# Build the project
yarn build

# Start production server
yarn start
```

## Project Structure

```
app/
├── layout.tsx                 # Root layout with providers
├── page.tsx                  # Home page
├── shop/                     # Shop page
├── covers/                   # Phone covers gallery
├── diagnostic/               # Diagnostics service
├── repairs/                  # Repairs service
├── trade-in/                # Trade-in service
├── cart/                     # Shopping cart
├── checkout/                 # Checkout flow
├── login/                    # Authentication
├── about/                    # About page
├── contact/                  # Contact page
├── admin/                    # Admin dashboard
├── sitemap.ts               # SEO sitemap
└── robots.ts                # Robots.txt

src/
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer
│   ├── WhatsAppButton.tsx    # WhatsApp CTA
│   └── ui/                  # Radix UI components
├── context/
│   ├── AuthContext.jsx      # Auth state management
│   └── CartContext.jsx      # Cart state management
├── lib/
│   ├── supabase/
│   │   ├── client.ts        # Supabase client
│   │   ├── auth.ts          # Auth utilities
│   │   ├── products.ts      # Product queries
│   │   ├── orders.ts        # Order queries
│   │   └── repairs.ts       # Repair queries
│   └── api/
├── constants/               # App constants
└── styles/                 # Global styles

public/                      # Static assets
```

## Supabase Setup

### Database Tables

Create the following tables in Supabase:

```sql
-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  model VARCHAR NOT NULL,
  storage VARCHAR,
  condition VARCHAR,
  price DECIMAL,
  stock INTEGER,
  description TEXT,
  image_url VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Repairs
CREATE TABLE repairs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users,
  device_model VARCHAR,
  issue_description TEXT,
  status VARCHAR,
  cost_estimate DECIMAL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders (basic example)
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users,
  total DECIMAL,
  status VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Environment Variables

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

## Authentication

The app uses Supabase Auth with context providers for state management:

```typescript
import { useAuth } from '@/context/AuthContext';

export default function MyComponent() {
  const { user, login, logout } = useAuth();
  // ...
}
```

## Deployment to Vercel

1. Push code to GitHub/GitLab
2. Import project in Vercel Dashboard
3. Configure environment variables
4. Deploy

```bash
vercel deploy --prod
```

## Key Features Implementation

### Shopping Cart
- Managed with React Context (`CartContext`)
- Add/remove items
- Update quantities
- Persistent state (can add localStorage)

### Product Filtering
- Real-time filter by condition, storage, model
- Mobile-friendly filter UI

### Phone Covers Gallery
- Lightbox with react-image-lightbox
- Responsive grid layout
- Zoom capability

### WhatsApp Integration
- Floating WhatsApp button
- Direct chat link

## Performance Optimizations

- ✅ Image optimization with next/image
- ✅ Code splitting and lazy loading
- ✅ Static generation where possible
- ✅ Compression enabled
- ✅ Tree-shaking unused code
- ✅ Minified CSS/JS

## Security

- ✅ Input validation with Zod
- ✅ HTTPS enforced on Vercel
- ✅ Secure environment variables
- ✅ CORS configured for Supabase
- ✅ SQL injection prevention (ORM)

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to branch
4. Open a Pull Request

## License

Private - Teez-Flexx Mobiles

## Support

For issues or questions:
- Email: info@teezflexx.co.za
- WhatsApp: +27 XX XXX XXXX

---

**Last Updated**: June 2026  
**Version**: 1.0.0

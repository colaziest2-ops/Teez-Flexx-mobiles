import type { Metadata } from 'next';
import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsappButton';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import '@/App.css';
import '@/index.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: 'Teez-Flexx Mobiles | iPhone Specialists South Africa',
    template: '%s | Teez-Flexx Mobiles',
  },
  description:
    "South Africa's trusted iPhone specialist. Professional repairs, quality devices, and fair trade-in prices. Buy, repair, and sell iPhones with confidence.",
  keywords: ['iPhone', 'repair', 'trade-in', 'buy', 'sell', 'South Africa', 'phone covers'],
  openGraph: {
    title: 'Teez-Flexx Mobiles',
    description: "South Africa's trusted iPhone specialist",
    url: 'https://flexx-iphone-za.vercel.app',
    siteName: 'Teez-Flexx Mobiles',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Teez-Flexx Mobiles',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-image-lightbox@5.1.4/style.css" />
      </head>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
              <WhatsAppButton />
              <Toaster position="top-right" />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

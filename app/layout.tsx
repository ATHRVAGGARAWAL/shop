import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/lib/cart-context";
import { ToastProvider } from "@/lib/toast-context";
import { WishlistProvider } from "@/lib/wishlist-context";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BottomNav } from "@/components/layout/bottom-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL('https://devkinandanandsons.com'),
  title: {
    default: "DEVKI NANDAN AND SONS | Trusted Electrical Goods Supplier",
    template: "%s | DEVKI NANDAN AND SONS"
  },
  description: "Reliable supplier of wires, cables, switches, and electrical accessories for residential, commercial, and industrial projects. Authorized dealers for top brands.",
  keywords: ["electrical goods", "wires", "cables", "switches", "Philips lighting", "Polycab wires", "industrial electrical supply", "wholesale electrical"],
  authors: [{ name: "Devki Nandan and Sons" }],
  creator: "Devki Nandan and Sons",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://devkinandanandsons.com",
    title: "DEVKI NANDAN AND SONS | Electrical Goods Wholesale & Retail",
    description: "Your trusted partner for quality electrical supplies. Wires, cables, lighting, switchgears, and more from top brands like Philips, Polycab, and Havells.",
    siteName: "DEVKI NANDAN AND SONS",
    images: [
      {
        url: "/logo.png", // We should ideally have a larger OG image
        width: 800,
        height: 600,
        alt: "Devki Nandan and Sons Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVKI NANDAN AND SONS | Electrical Goods Supplier",
    description: "Trusted electrical goods supplier for residential and industrial needs.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Devki Nandan and Sons",
  "url": "https://devkinandanandsons.com",
  "logo": "https://devkinandanandsons.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210", // Placeholder
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Shop Address Here", // Placeholder
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "110006",
    "addressCountry": "IN"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          "antialiased min-h-screen flex flex-col"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToastProvider>
          <WishlistProvider>
            <CartProvider>
              <Header />
              <div className="flex-grow">
                {children}
              </div>
              <BottomNav />
              <Footer />
            </CartProvider>

          </WishlistProvider>
        </ToastProvider>
      </body>
    </html>
  );
}

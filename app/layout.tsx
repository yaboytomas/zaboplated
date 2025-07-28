import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ZaboPlated - Premium Restaurant Branding & Marketing Agency",
  description:
    "Transform your restaurant with stunning menu designs, professional food photography, social media management, and complete brand transformation. Helping mom-and-pop restaurants create unforgettable dining experiences.",
  keywords:
    "restaurant branding, menu design, food photography, social media marketing, restaurant marketing, brand transformation, cocktail menus, restaurant publicity",
  authors: [{ name: "ZaboPlated" }],
  creator: "ZaboPlated",
  publisher: "ZaboPlated",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zaboplated.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ZaboPlated - Premium Restaurant Branding & Marketing Agency",
    description:
      "Transform your restaurant with stunning menu designs, professional food photography, social media management, and complete brand transformation. Helping mom-and-pop restaurants create unforgettable dining experiences.",
    url: "https://zaboplated.com",
    siteName: "ZaboPlated",
    images: [
      {
        url: "/images/zaboplated-logo.jpg",
        width: 1200,
        height: 630,
        alt: "ZaboPlated - Restaurant Branding Agency",
        type: "image/jpeg",
      },
      {
        url: "/images/zaboplated-logo.jpg",
        width: 800,
        height: 600,
        alt: "ZaboPlated - Restaurant Branding Agency",
        type: "image/jpeg",
      },
      {
        url: "/images/zaboplated-logo.jpg",
        width: 600,
        height: 600,
        alt: "ZaboPlated - Restaurant Branding Agency",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZaboPlated - Premium Restaurant Branding & Marketing Agency",
    description:
      "Transform your restaurant with stunning menu designs, professional food photography, social media management, and complete brand transformation. Helping mom-and-pop restaurants create unforgettable dining experiences.",
    images: ["/images/zaboplated-logo.jpg"],
    creator: "@zaboplated",
    site: "@zaboplated",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f43f5e" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="CFHNqfdLb4hxfOBVB924bvixa-kTM-hxYzKDFAMRqBY" />
        
        {/* Enhanced Social Media Meta Tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="ZaboPlated - Restaurant Branding Agency" />
        
        {/* WhatsApp specific meta tags */}
        <meta property="og:image:secure_url" content="https://zaboplated.com/images/zaboplated-logo.jpg" />
        <meta name="twitter:image:alt" content="ZaboPlated - Restaurant Branding Agency" />
        
        {/* Additional social media optimizations */}
        <meta name="author" content="ZaboPlated" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* LinkedIn specific meta tags */}
        <meta property="og:site_name" content="ZaboPlated" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        
        {/* Pinterest specific meta tags */}
        <meta name="pinterest-rich-pin" content="true" />
        
        <link rel="icon" href="/images/zaboplated-logo.jpg" type="image/jpeg" />
        <link rel="icon" href="/images/zaboplated-logo.jpg" sizes="32x32" type="image/jpeg" />
        <link rel="icon" href="/images/zaboplated-logo.jpg" sizes="16x16" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/zaboplated-logo.jpg" />
        <link rel="shortcut icon" href="/images/zaboplated-logo.jpg" type="image/jpeg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ZaboPlated",
              "alternateName": "ZaboPlated Restaurant Branding Agency",
              "description": "Premium restaurant branding and marketing agency specializing in menu design, food photography, and social media management for restaurants.",
              "url": "https://zaboplated.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://zaboplated.com/images/zaboplated-logo.jpg",
                "width": 120,
                "height": 60
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://zaboplated.com/images/zaboplated-logo.jpg",
                "width": 1200,
                "height": 630
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-407-247-1648",
                "contactType": "customer service",
                "email": "contact@zaboplated.com",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Orlando",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://instagram.com/zaboplated",
                "https://facebook.com/zaboplated",
                "https://twitter.com/zaboplated",
                "https://linkedin.com/company/zaboplated"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 28.5383,
                  "longitude": -81.3792
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Restaurant Branding Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Menu Design & Branding",
                      "description": "Professional menu design and restaurant branding services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Food Photography",
                      "description": "High-quality food photography for restaurant marketing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Video Content Creation",
                      "description": "Professional video content for restaurant marketing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Social Media Management",
                      "description": "Complete social media management for restaurants"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Specialty Menu Creation",
                      "description": "Custom specialty menu design and creation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Brand Transformation",
                      "description": "Complete restaurant brand transformation services"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ZaboPlated",
              "description": "Restaurant branding and marketing agency in Orlando, FL",
              "url": "https://zaboplated.com",
              "telephone": "+1-407-247-1648",
              "email": "contact@zaboplated.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Orlando",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5383,
                "longitude": -81.3792
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Credit Card, Check",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 28.5383,
                  "longitude": -81.3792
                },
                "geoRadius": "50000"
              }
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ZaboPlated",
              "url": "https://zaboplated.com",
              "description": "Premium restaurant branding and marketing agency",
              "publisher": {
                "@type": "Organization",
                "name": "ZaboPlated"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://zaboplated.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}

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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZaboPlated",
              description:
                "Premium restaurant branding and marketing agency specializing in menu design, food photography, and social media management.",
              url: "https://zaboplated.com",
              logo: "https://zaboplated.com/images/zaboplated-logo.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "hello@zaboplated.com",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Orlando",
                addressRegion: "FL",
                addressCountry: "US",
              },
              sameAs: [
                "https://instagram.com/zaboplated",
                "https://facebook.com/zaboplated",
                "https://twitter.com/zaboplated",
                "https://linkedin.com/company/zaboplated",
              ],
              services: [
                "Menu Design & Branding",
                "Food Photography",
                "Video Content Creation",
                "Social Media Management",
                "Specialty Menu Creation",
                "Brand Transformation",
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}

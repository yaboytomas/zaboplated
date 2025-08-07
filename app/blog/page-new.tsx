import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import BlogPageClient from "./blog-client"

export const metadata: Metadata = {
  title: "Restaurant Marketing Blog - Expert Tips & Strategies | ZaboPlated",
  description: "Discover expert restaurant marketing tips, menu design trends, food photography techniques, and branding strategies to grow your restaurant business.",
  keywords: "restaurant blog, menu design tips, food photography, restaurant marketing, branding strategies, social media marketing, restaurant business",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Restaurant Marketing Blog - Expert Tips & Strategies | ZaboPlated",
    description: "Discover expert restaurant marketing tips, menu design trends, food photography techniques, and branding strategies to grow your restaurant business.",
    url: "https://zaboplated.com/blog",
    type: "website",
    images: [
      {
        url: "/images/blog/menu-design-trends.png",
        width: 1200,
        height: 630,
        alt: "Restaurant Marketing Blog - ZaboPlated",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing Blog - Expert Tips & Strategies | ZaboPlated",
    description: "Discover expert restaurant marketing tips, menu design trends, food photography techniques, and branding strategies to grow your restaurant business.",
    images: ["/images/blog/menu-design-trends.png"],
  },
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <BlogPageClient />
      <Footer />
    </>
  )
}

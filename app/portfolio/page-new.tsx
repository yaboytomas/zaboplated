import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import PortfolioClient from "./portfolio-client"

export const metadata: Metadata = {
  title: "Restaurant Branding Portfolio - See Our Success Stories | ZaboPlated",
  description: "Explore our portfolio of successful restaurant branding projects. See how we've helped restaurants increase sales with stunning menu design, food photography, and brand transformation.",
  keywords: "restaurant portfolio, menu design examples, food photography portfolio, restaurant branding cases, successful restaurant marketing",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Restaurant Branding Portfolio - See Our Success Stories | ZaboPlated",
    description: "Explore our portfolio of successful restaurant branding projects. See how we've helped restaurants increase sales with stunning menu design, food photography, and brand transformation.",
    url: "https://zaboplated.com/portfolio",
    type: "website",
    images: [
      {
        url: "/images/portfolio/bella-vista-menu.png",
        width: 1200,
        height: 630,
        alt: "Restaurant Portfolio - ZaboPlated",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Branding Portfolio - See Our Success Stories | ZaboPlated",
    description: "Explore our portfolio of successful restaurant branding projects. See how we've helped restaurants increase sales with stunning menu design, food photography, and brand transformation.",
    images: ["/images/portfolio/bella-vista-menu.png"],
  },
}

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <PortfolioClient />
      <Footer />
    </>
  )
}

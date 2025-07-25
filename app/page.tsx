import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { ContactFormValidation } from "@/components/contact-form-validation"
import { EnhancedCTA } from "@/components/enhanced-cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollProgress } from "@/components/scroll-progress"
import { Preloader } from "@/components/preloader"
import { InteractiveBackground } from "@/components/interactive-elements"

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-x-hidden">
        <InteractiveBackground />
        <ScrollProgress />
        <FloatingElements />
        <Navigation />
        <EnhancedHeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <BlogSection />
        <EnhancedCTA />
        <ContactFormValidation />
        <Footer />
      </main>
    </>
  )
}

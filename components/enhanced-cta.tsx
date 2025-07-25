"use client"

import { useState } from "react"
import { ArrowRight, Sparkles, CheckCircle, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "./scroll-animations"
import { MagneticButton } from "./interactive-elements"

export function EnhancedCTA() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const features = [
    "Free consultation & strategy session",
    "Custom design mockups within 48 hours",
    "Unlimited revisions until perfect",
    "30-day satisfaction guarantee",
  ]

  const testimonialSnippets = [
    { text: "Increased sales by 40%", author: "Maria R." },
    { text: "Doubled Instagram followers", author: "James C." },
    { text: "1M+ video views", author: "Sarah T." },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-rose-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400/60 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <ScrollAnimation animation="fadeInLeft">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-rose-400 mr-2" />
                <span className="text-rose-400 font-semibold font-inter">Ready to Transform?</span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={200}>
              <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Create Something
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent block">
                  Extraordinary
                </span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={400}>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-inter">
                Join 100+ successful restaurants that have transformed their brand and boosted their revenue with our
                proven strategies.
              </p>
            </ScrollAnimation>

            {/* Features List */}
            <ScrollAnimation animation="fadeInLeft" delay={600}>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center group cursor-pointer"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                        hoveredFeature === index
                          ? "bg-gradient-to-r from-rose-400 to-pink-400 scale-110"
                          : "bg-rose-500/20 border border-rose-400/30"
                      }`}
                    >
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span
                      className={`font-inter transition-all duration-300 ${
                        hoveredFeature === index ? "text-white translate-x-2" : "text-gray-300"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* Social Proof */}
            <ScrollAnimation animation="fadeInLeft" delay={800}>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 font-inter">Trusted by 100+ restaurants</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={1000}>
              <MagneticButton
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-400 hover:via-pink-400 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-rose-500/25 font-outfit relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Transformation Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </MagneticButton>
            </ScrollAnimation>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="relative">
            <ScrollAnimation animation="fadeInRight" delay={400}>
              <div className="space-y-6">
                {testimonialSnippets.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm border border-rose-200/50 hover:from-white hover:to-gray-50 hover:border-rose-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-xl"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-900 font-bold mb-2 font-inter text-lg">"{testimonial.text}"</p>
                          <p className="text-rose-600 text-sm font-semibold font-inter">- {testimonial.author}</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-500 fill-current drop-shadow-sm" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600 font-medium">5.0</span>
                        </div>
                      </div>

                      {/* Success indicator */}
                      <div className="mt-4 pt-4 border-t border-rose-100">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-sm text-gray-700 font-medium">Verified Success Story</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollAnimation>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-rose-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-400/30 to-rose-400/30 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

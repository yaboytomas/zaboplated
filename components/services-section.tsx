"use client"

import { useState } from "react"
import { Palette, Camera, Video, TrendingUp, MenuIcon, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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

  const services = [
    {
      icon: Palette,
      title: "Menu Design & Branding",
      description:
        "Beautiful, appetite-inducing menu designs that reflect your restaurant's personality and drive sales.",
      features: ["Custom Menu Layouts", "Brand Identity Design", "Print & Digital Formats", "Seasonal Updates"],
      color: "from-rose-500 via-pink-500 to-red-500",
      bgColor: "from-rose-50 to-pink-100",
    },
    {
      icon: Camera,
      title: "Food Photography",
      description: "Mouth-watering food photography that makes your dishes irresistible on social media and menus.",
      features: ["Professional Food Styling", "High-Resolution Images", "Social Media Ready", "Menu Photography"],
      color: "from-purple-500 via-pink-500 to-rose-500",
      bgColor: "from-purple-50 to-pink-100",
    },
    {
      icon: Video,
      title: "Video Content Creation",
      description: "Engaging video content including reels, behind-the-scenes footage, and promotional videos.",
      features: ["Instagram Reels", "TikTok Content", "Behind-the-Scenes", "Promotional Videos"],
      color: "from-pink-500 via-purple-500 to-indigo-500",
      bgColor: "from-pink-50 to-purple-100",
    },
    {
      icon: TrendingUp,
      title: "Social Media Management",
      description: "Complete social media strategy and management to grow your restaurant's online presence.",
      features: ["Content Strategy", "Daily Posting", "Community Management", "Analytics & Reporting"],
      color: "from-indigo-500 via-purple-500 to-pink-500",
      bgColor: "from-indigo-50 to-purple-100",
    },
    {
      icon: MenuIcon,
      title: "Specialty Menu Creation",
      description: "Craft cocktail menus, seasonal specials, and promotional materials that boost revenue.",
      features: ["Cocktail Menus", "Seasonal Specials", "Wine Lists", "Promotional Materials"],
      color: "from-orange-500 via-red-500 to-pink-500",
      bgColor: "from-orange-50 to-red-100",
    },
    {
      icon: Sparkles,
      title: "Brand Transformation",
      description: "Complete restaurant rebranding to attract new customers and revitalize your image.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Presence"],
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      bgColor: "from-emerald-50 to-teal-100",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-20 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-medium leading-relaxed">
            We offer comprehensive restaurant branding and marketing services to help your business thrive in today's
            competitive market.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:-translate-y-2 border-0 ${
                hoveredCard === index ? "shadow-2xl scale-105 -translate-y-2" : "shadow-lg"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background:
                  hoveredCard === index
                    ? `linear-gradient(135deg, ${service.bgColor.replace("from-", "").replace(" to-", ", ")})`
                    : "white",
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 ${
                  hoveredCard === index ? "opacity-5" : ""
                }`}
              />

              <CardHeader className="relative z-10 p-4 sm:p-6">
                <div
                  className={`w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 relative overflow-hidden shadow-lg ${
                    hoveredCard === index ? "scale-110 rotate-3 shadow-2xl" : ""
                  }`}
                >
                  <service.icon className="h-6 sm:h-8 w-6 sm:w-8 text-white relative z-10" />
                  {hoveredCard === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                  )}
                </div>
                <CardTitle className="font-outfit text-lg sm:text-xl font-bold text-gray-900 mb-2 tracking-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 p-4 sm:p-6 pt-0">
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600 font-inter">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0 shadow-sm`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className={`w-full border-2 transition-all duration-300 text-sm font-outfit font-semibold ${
                    hoveredCard === index
                      ? `bg-gradient-to-r ${service.color} text-white border-transparent shadow-lg`
                      : "border-rose-200 text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50"
                  }`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

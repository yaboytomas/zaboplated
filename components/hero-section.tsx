"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Sparkles, Camera, Palette, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-rose-300 via-pink-400 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-purple-300 via-rose-400 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-pink-300 via-purple-400 to-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-br from-yellow-200 via-orange-300 to-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-6000"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-rose-50/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6 sm:mb-8 animate-float">
              <div className="relative">
                <Image
                  src="/images/zaboplated-logo.jpg"
                  alt="ZaboPlated - Premium Restaurant Branding Agency Logo"
                  width={400}
                  height={200}
                  className="mx-auto h-24 sm:h-32 lg:h-36 w-auto object-contain drop-shadow-2xl"
                  priority
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/20 via-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>

            <h1 className="font-outfit text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight px-4 tracking-tight">
              Elevate Your
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient font-black">
                {" "}
                Restaurant's{" "}
              </span>
              Story
            </h1>

            <p className="font-inter text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
              From stunning menu designs to captivating social media content, we help mom-and-pop restaurants create
              unforgettable dining experiences that keep customers coming back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl font-outfit"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-rose-300 text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:border-pink-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 bg-white/80 backdrop-blur-sm font-outfit"
              >
                View Our Work
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              {[
                { icon: Palette, label: "Menu Design", count: "200+", color: "from-rose-500 to-pink-600" },
                { icon: Camera, label: "Photo Shoots", count: "150+", color: "from-pink-500 to-purple-600" },
                { icon: TrendingUp, label: "Social Campaigns", count: "300+", color: "from-purple-500 to-indigo-600" },
                { icon: Sparkles, label: "Happy Clients", count: "100+", color: "from-indigo-500 to-rose-600" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 delay-${index * 200} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/50 hover:border-rose-200/50">
                    <div
                      className={`w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg`}
                    >
                      <stat.icon className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 mb-1 font-outfit">{stat.count}</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium font-inter">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

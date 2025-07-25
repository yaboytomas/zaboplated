"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Sparkles, Camera, Palette, TrendingUp, Play } from "lucide-react"
import { ScrollAnimation } from "./scroll-animations"
import { MagneticButton } from "./interactive-elements"
import Image from "next/image"

export function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)

  const words = ["Restaurant's", "Brand's", "Story's", "Vision's"]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
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
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-300 via-pink-400 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300 via-rose-400 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-pink-300 via-purple-400 to-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-4000"></div>

        {/* Additional floating elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28">
        <div className="text-center">
          <ScrollAnimation animation="scaleIn" delay={200}>
            <div className="mb-8 animate-float">
              <div className="relative">
                <Image
                  src="/images/zaboplated-logo.jpg"
                  alt="ZaboPlated - Premium Restaurant Branding Agency Logo"
                  width={400}
                  height={200}
                  className="mx-auto h-32 lg:h-40 w-auto object-contain drop-shadow-2xl"
                  priority
                />
                <div className="absolute -inset-6 bg-gradient-to-r from-rose-400/20 via-pink-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={400}>
            <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
              Elevate Your
              <span className="block relative">
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient font-black">
                  {words[currentWord]}
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 rounded-full transform scale-x-0 animate-[scaleX_0.8s_ease-out_0.5s_forwards]"></div>
              </span>
              Story
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={600}>
            <p className="font-inter text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              From stunning menu designs to captivating social media content, we help mom-and-pop restaurants create
              <span className="text-rose-600 font-semibold"> unforgettable dining experiences</span> that keep customers
              coming back.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <MagneticButton
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-rose-500/25 font-outfit relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection("portfolio")}
                className="group border-2 border-rose-300 text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:border-pink-400 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 bg-white/80 backdrop-blur-sm font-outfit relative overflow-hidden"
              >
                <span className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  View Our Work
                </span>
              </MagneticButton>
            </div>
          </ScrollAnimation>

          {/* Enhanced Stats */}
          <ScrollAnimation animation="fadeInUp" delay={1000}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Palette, label: "Menu Designs", count: "200+", color: "from-rose-500 to-pink-600", delay: 0 },
                {
                  icon: Camera,
                  label: "Photo Shoots",
                  count: "150+",
                  color: "from-pink-500 to-purple-600",
                  delay: 200,
                },
                {
                  icon: TrendingUp,
                  label: "Social Campaigns",
                  count: "300+",
                  color: "from-purple-500 to-indigo-600",
                  delay: 400,
                },
                {
                  icon: Sparkles,
                  label: "Happy Clients",
                  count: "100+",
                  color: "from-indigo-500 to-rose-600",
                  delay: 600,
                },
              ].map((stat, index) => (
                <ScrollAnimation key={index} animation="scaleIn" delay={1200 + stat.delay}>
                  <div className="group text-center transition-all duration-500 transform hover:scale-110 cursor-pointer">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-rose-200/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <stat.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-3xl font-black text-gray-900 mb-2 font-outfit group-hover:text-rose-600 transition-colors duration-300">
                          {stat.count}
                        </div>
                        <div className="text-sm text-gray-600 font-medium font-inter">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

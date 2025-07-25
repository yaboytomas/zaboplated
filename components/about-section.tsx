"use client"

import { Award, Users, Clock, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const stats = [
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "300+", label: "Projects Completed" },
    { icon: Clock, value: "3+", label: "Years Experience" },
    { icon: Star, value: "5.0", label: "Average Rating" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                ZaboPlated
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hi! I'm the founder of ZaboPlated, and I'm passionate about helping mom-and-pop restaurants tell their
              unique stories through beautiful design and strategic marketing.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Having worked with over 100 restaurants, I understand the challenges small business owners face. That's
              why I created ZaboPlated - to provide premium branding and marketing services that were previously only
              available to big chains.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From crafting mouth-watering menu designs to creating viral social media content, I'm here to help your
              restaurant not just survive, but thrive in today's competitive market.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/about/founder-photo.png"
                alt="About ZaboPlated Founder"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-rose-200 to-pink-300 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-200 to-rose-300 rounded-full -z-10 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

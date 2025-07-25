"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      title: "Owner, Bella Vista Italian Bistro",
      image: "/images/testimonials/maria-rodriguez.png",
      rating: 5,
      text: "ZaboPlated completely transformed our restaurant's image. Our new menu design is not only beautiful but has increased our average order value by 40%. The team understood our vision perfectly and delivered beyond our expectations.",
      results: "+40% sales increase",
      location: "Los Angeles, CA",
    },
    {
      id: 2,
      name: "James Chen",
      title: "Manager, Craft Cocktail Lounge",
      image: "/images/testimonials/james-chen.png",
      rating: 5,
      text: "The social media strategy ZaboPlated created for us was incredible. Our Instagram followers doubled in just 3 months, and we're seeing customers come in specifically because of our social media presence. Highly recommend!",
      results: "+200% Instagram growth",
      location: "San Francisco, CA",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      title: "Owner, Farm Fresh Kitchen",
      image: "/images/testimonials/sarah-thompson.png",
      rating: 5,
      text: "Working with ZaboPlated was the best decision we made for our restaurant. Their video content went viral and brought us customers from all over the city. The team is professional, creative, and truly cares about our success.",
      results: "1M+ video views",
      location: "Portland, OR",
    },
    {
      id: 4,
      name: "David Kim",
      title: "Owner, Artisan Bread Co.",
      image: "/images/testimonials/david-kim.png",
      rating: 5,
      text: "The complete rebrand ZaboPlated did for our bakery was phenomenal. Our new packaging and signage have customers stopping in just to see what we're about. Brand recognition has increased dramatically.",
      results: "+60% brand recognition",
      location: "Seattle, WA",
    },
    {
      id: 5,
      name: "Lisa Martinez",
      title: "Owner, Coastal Cafe",
      image: "/images/testimonials/lisa-martinez.png",
      rating: 5,
      text: "The food photography ZaboPlated provided made our dishes look absolutely irresistible. We've seen a significant increase in orders for the items they photographed. Their attention to detail is unmatched.",
      results: "+35% photo item sales",
      location: "San Diego, CA",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what restaurant owners are saying about their transformation with
            ZaboPlated.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <Avatar className="w-20 h-20 md:w-24 md:h-24 ring-4 ring-rose-200">
                      <AvatarImage
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-rose-500 to-pink-600 text-white text-xl font-bold">
                        {testimonials[currentTestimonial].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      <Quote className="h-8 w-8 text-rose-400 mb-4" />
                    </div>

                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-inter">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <div className="font-outfit font-bold text-gray-900 text-lg">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-gray-600 font-inter">{testimonials[currentTestimonial].title}</div>
                        <div className="text-sm text-gray-500 font-inter">
                          {testimonials[currentTestimonial].location}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {testimonials[currentTestimonial].results}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={previousTestimonial}
              className="rounded-full border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-rose-500 to-pink-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                index === currentTestimonial
                  ? "ring-2 ring-rose-300 shadow-xl scale-105"
                  : "hover:shadow-lg bg-white/60"
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 font-outfit">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 font-inter">{testimonial.title}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm line-clamp-3 font-inter mb-3">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs bg-gradient-to-r from-rose-500 to-pink-600 text-white px-2 py-1 rounded-full">
                    {testimonial.results}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

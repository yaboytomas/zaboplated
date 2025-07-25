"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurant: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to send message')
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        restaurant: "",
        service: "",
        message: "",
      })

      alert('Message sent successfully! We\'ll get back to you soon.')
    } catch (error) {
      console.error("Form submission error:", error)
      alert('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@zaboplated.com",
      description: "Send us an email anytime!",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (407) 247-1648",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Orlando, FL",
      description: "We serve restaurants nationwide",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Create Something{" "}
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Beautiful</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your restaurant's brand? Let's discuss how we can help you create an unforgettable dining
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    {info.title === "Visit Us" ? (
                      <a 
                        href="https://maps.google.com/?q=Orlando,FL" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-start space-x-4 group cursor-pointer"
                      >
                        <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors duration-300">{info.title}</h3>
                          <p className="text-rose-600 font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-rose-600 font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Get Your Free Consultation</CardTitle>
                <p className="text-gray-600">
                  Tell us about your restaurant and we'll create a custom proposal for you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="+1-407-247-1648"
                      />
                    </div>
                    <div>
                      <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-2">
                        Restaurant Name *
                      </label>
                      <Input
                        id="restaurant"
                        name="restaurant"
                        type="text"
                        required
                        value={formData.restaurant}
                        onChange={handleChange}
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Your restaurant name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    >
                      <option value="">Select a service</option>
                      <option value="menu-design">Menu Design & Branding</option>
                      <option value="photography">Food Photography</option>
                      <option value="video">Video Content Creation</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="specialty-menus">Specialty Menu Creation</option>
                      <option value="brand-transformation">Brand Transformation</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Your Project *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                      placeholder="Describe your restaurant, your goals, and how we can help you succeed..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message & Get Free Consultation
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

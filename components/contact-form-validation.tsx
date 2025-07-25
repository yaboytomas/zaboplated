"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FormData {
  name: string
  email: string
  phone: string
  restaurant: string
  service: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export function ContactFormValidation() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    restaurant: "",
    service: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
      if (!phoneRegex.test(formData.phone.replace(/[\s\-$$$$]/g, ""))) {
        newErrors.phone = "Please enter a valid phone number"
      }
    }

    // Restaurant name validation
    if (!formData.restaurant.trim()) {
      newErrors.restaurant = "Restaurant name is required"
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        restaurant: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@zaboplated.com",
      description: "Send us an email anytime!",
      href: "mailto:hello@zaboplated.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Los Angeles, CA",
      description: "We serve restaurants nationwide",
      href: "#",
    },
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-outfit">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-6 font-inter">
                Your message has been sent successfully. We'll get back to you within 24 hours with a personalized
                proposal for your restaurant.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

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
                    <a
                      href={info.href}
                      className="flex items-start space-x-4 group"
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-rose-600 font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </a>
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
                        value={formData.name}
                        onChange={handleChange}
                        className={`border-rose-200 focus:border-rose-500 focus:ring-rose-500 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`border-rose-200 focus:border-rose-500 focus:ring-rose-500 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
                        className={`border-rose-200 focus:border-rose-500 focus:ring-rose-500 ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-2">
                        Restaurant Name *
                      </label>
                      <Input
                        id="restaurant"
                        name="restaurant"
                        type="text"
                        value={formData.restaurant}
                        onChange={handleChange}
                        className={`border-rose-200 focus:border-rose-500 focus:ring-rose-500 ${
                          errors.restaurant ? "border-red-500" : ""
                        }`}
                        placeholder="Your restaurant name"
                      />
                      {errors.restaurant && <p className="mt-1 text-sm text-red-600">{errors.restaurant}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 ${
                        errors.service ? "border-red-500" : ""
                      }`}
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
                    {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Your Project *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`border-rose-200 focus:border-rose-500 focus:ring-rose-500 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Describe your restaurant, your goals, and how we can help you succeed..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message & Get Free Consultation
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
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

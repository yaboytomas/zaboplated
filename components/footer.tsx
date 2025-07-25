"use client"

import { useState } from "react"
import {
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

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

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-300" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-300" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-300" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-300" },
  ]

  const footerSections = {
    services: {
      title: "Services",
      links: [
        { name: "Menu Design & Branding", action: () => scrollToSection("services") },
        { name: "Food Photography", action: () => scrollToSection("services") },
        { name: "Video Content Creation", action: () => scrollToSection("services") },
        { name: "Social Media Management", action: () => scrollToSection("services") },
        { name: "Specialty Menu Creation", action: () => scrollToSection("services") },
        { name: "Brand Transformation", action: () => scrollToSection("services") },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", action: () => scrollToSection("about") },
        { name: "Portfolio", action: () => scrollToSection("portfolio") },
        { name: "Blog", action: () => scrollToSection("blog") },
        { name: "Contact", action: () => scrollToSection("contact") },
        { name: "Testimonials", action: () => scrollToSection("about") },
        { name: "Careers", action: () => scrollToSection("contact") },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Design Tips", action: () => scrollToSection("blog") },
        { name: "Marketing Guides", action: () => scrollToSection("blog") },
        { name: "Industry Trends", action: () => scrollToSection("blog") },
        { name: "Case Studies", action: () => scrollToSection("portfolio") },
        { name: "Free Resources", action: () => scrollToSection("blog") },
        { name: "Support", action: () => scrollToSection("contact") },
      ],
    },
  }

  const contactInfo = [
    { icon: Mail, text: "hello@zaboplated.com", color: "text-rose-300", href: "mailto:hello@zaboplated.com" },
    { icon: Phone, text: "+1 (555) 123-4567", color: "text-pink-300", href: "tel:+15551234567" },
    { icon: MapPin, text: "Los Angeles, CA", color: "text-purple-300", href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-purple-500/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section - Takes more space on desktop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
              <Image
                src="/images/zaboplated-logo.jpg"
                alt="ZaboPlated Logo"
                width={120}
                height={60}
                className="h-8 w-auto object-contain filter brightness-0 invert"
              />
              <div className="h-8 w-px bg-gradient-to-b from-rose-300 via-pink-300 to-purple-300" />
              <span className="text-sm font-bold bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent font-outfit">
                Premium Restaurant Branding
              </span>
            </div>

            <p className="text-gray-200 text-sm leading-relaxed max-w-md font-inter">
              Transforming mom-and-pop restaurants through stunning design, strategic marketing, and authentic
              storytelling.
            </p>

            {/* Contact Info - Compact */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-sm group cursor-pointer transition-all duration-300 hover:translate-x-2"
                >
                  <contact.icon
                    className={`h-4 w-4 ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300 font-inter">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`h-9 w-9 text-gray-300 ${social.color} hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                  asChild
                >
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections - Responsive Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="space-y-4">
                {/* Mobile: Collapsible, Desktop: Always Open */}
                <button
                  onClick={() => toggleSection(key)}
                  className="flex items-center justify-between w-full text-left sm:cursor-default"
                >
                  <h3 className="text-sm font-bold bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent uppercase tracking-wider font-outfit">
                    {section.title}
                  </h3>
                  <div className="sm:hidden">
                    {openSections[key] ? (
                      <ChevronUp className="h-4 w-4 text-gray-300" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-300" />
                    )}
                  </div>
                </button>

                {/* Links - Collapsible on mobile, always visible on desktop */}
                <div
                  className={`space-y-3 transition-all duration-300 sm:block ${openSections[key] ? "block" : "hidden"}`}
                >
                  {section.links.map((link, index) => (
                    <button
                      key={index}
                      onClick={link.action}
                      className="block text-sm text-gray-200 hover:text-rose-300 transition-all duration-300 hover:translate-x-1 transform text-left font-inter"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-xs text-gray-300 font-inter">
              <span>© 2024 ZaboPlated. Made with</span>
              <Heart className="h-3 w-3 text-rose-300 animate-pulse" />
              <span>for restaurants everywhere.</span>
            </div>

            <div className="flex items-center space-x-6 text-xs">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <button
                  key={index}
                  className="text-gray-300 hover:text-rose-300 transition-colors duration-300 relative group font-inter"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-rose-300 to-pink-300 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

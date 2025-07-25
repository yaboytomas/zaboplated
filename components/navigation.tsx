"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()
  const router = useRouter()

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Only update active section on home page
      if (isHomePage) {
        const sections = ["home", "services", "portfolio", "about", "blog", "contact"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // If on home page, scroll to section
      scrollToSection(sectionId)
    } else {
      // If on other pages, navigate to home page with hash
      router.push(`/#${sectionId}`)
    }
    setIsMobileMenuOpen(false)
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

  const handleGetStarted = () => {
    if (isHomePage) {
      scrollToSection("contact")
    } else {
      router.push("/#contact")
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "Portfolio", href: "portfolio", isPage: true },
    { name: "About", href: "about" },
    { name: "Blog", href: "blog", isPage: true },
    { name: "Contact", href: "contact" },
  ]

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-2xl border border-rose-200/50"
          : "bg-white/80 backdrop-blur-sm shadow-xl border border-pink-200/30"
      } rounded-xl sm:rounded-2xl max-w-6xl w-[96%] sm:w-[95%] mx-auto`}
      style={{
        background: isScrolled
          ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(253,242,248,0.95) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(252,231,243,0.8) 100%)",
      }}
    >
      <div className="px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:hidden">
          {/* Mobile Layout */}
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <Image
              src="/images/zaboplated-logo.jpg"
              alt="ZaboPlated"
              width={80}
              height={40}
              className="h-6 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Mobile Brand Name - Center */}
          <Link href="/" className="flex-1 flex justify-center cursor-pointer group">
            <div className="text-center">
              <h1 className="font-outfit text-lg font-black bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent group-hover:from-rose-600 group-hover:via-pink-600 group-hover:to-purple-700 transition-all duration-300 tracking-tight">
                ZaboPlated
              </h1>
              <div className="h-0.5 w-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </Link>

          <div className="flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 h-10 w-10"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <Image
              src="/images/zaboplated-logo.jpg"
              alt="ZaboPlated"
              width={120}
              height={60}
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.isPage) {
                return (
                  <Link key={item.name} href={`/${item.href}`}>
                    <button
                      className={`px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                        pathname.startsWith(`/${item.href}`)
                          ? "text-white bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg"
                          : "text-gray-700 hover:text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50"
                      }`}
                    >
                      {item.name}
                      {!pathname.startsWith(`/${item.href}`) && (
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                      )}
                    </button>
                  </Link>
                )
              }

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                    isHomePage && activeSection === item.href
                      ? "text-white bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg"
                      : "text-gray-700 hover:text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50"
                  }`}
                >
                  {item.name}
                  {!(isHomePage && activeSection === item.href) && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                  )}
                </button>
              )
            })}
          </div>

          <Button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-4 lg:px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-white/95 via-rose-50/95 to-pink-50/95 backdrop-blur-md border-t border-rose-200/50 rounded-b-xl sm:rounded-b-2xl mt-1">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Mobile Menu Header */}
            <div className="text-center py-3 border-b border-rose-200/30 mb-3">
              <h2 className="font-outfit text-xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Navigation
              </h2>
              <p className="text-xs text-gray-600 mt-1 font-inter">Choose your destination</p>
            </div>

            {navItems.map((item) => {
              if (item.isPage) {
                return (
                  <Link key={item.name} href={`/${item.href}`}>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                        pathname.startsWith(`/${item.href}`)
                          ? "text-white bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg"
                          : "text-gray-700 hover:text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50"
                      }`}
                    >
                      {item.name}
                    </button>
                  </Link>
                )
              }

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                    isHomePage && activeSection === item.href
                      ? "text-white bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg"
                      : "text-gray-700 hover:text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50"
                  }`}
                >
                  {item.name}
                </button>
              )
            })}

            <Button
              onClick={handleGetStarted}
              className="w-full mt-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white rounded-xl py-3 font-semibold shadow-lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

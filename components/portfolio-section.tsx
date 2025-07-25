"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Heart } from "lucide-react"
import { PortfolioModal } from "./portfolio-modal"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const portfolioItems = [
    {
      id: 1,
      title: "Bella Vista Italian Bistro",
      category: "menu-design",
      image: "/images/portfolio/bella-vista-menu.png",
      description: "Complete menu redesign and brand refresh for a family-owned Italian restaurant.",
      tags: ["Menu Design", "Branding", "Photography"],
      results: "+40% sales increase",
      gradient: "from-rose-500 to-pink-600",
      fullDescription:
        "Bella Vista Italian Bistro approached us with outdated menus that weren't reflecting their authentic Italian heritage or driving sales. We completely reimagined their brand identity and menu design.",
      challenge:
        "The restaurant had been using the same menu design for over 10 years, resulting in declining customer engagement and difficulty highlighting their premium dishes.",
      solution:
        "We created a sophisticated menu design that celebrates Italian culinary traditions while using modern design principles to guide customers toward high-margin items.",
      outcome:
        "Within 3 months of implementing the new menu design, Bella Vista saw a 40% increase in sales and significantly improved customer satisfaction scores.",
      additionalImages: [
        "/placeholder.svg?height=400&width=600&text=Menu+Interior",
        "/placeholder.svg?height=400&width=600&text=Brand+Materials",
      ],
    },
    {
      id: 2,
      title: "Craft Cocktail Bar Social Campaign",
      category: "social-media",
      image: "/images/portfolio/cocktail-bar-social.png",
      description: "Social media content creation and management for a trendy cocktail bar.",
      tags: ["Social Media", "Photography", "Video Content"],
      results: "+200% Instagram followers",
      gradient: "from-purple-500 to-pink-600",
      fullDescription:
        "A trendy cocktail bar sought to elevate its social media presence to attract a younger, more engaged audience. They needed a strategy that would capture the bar's unique atmosphere and showcase their innovative cocktails.",
      challenge:
        "The bar's existing social media lacked a cohesive brand identity and struggled to stand out in a crowded market. Content was inconsistent, and engagement was low.",
      solution:
        "We developed a comprehensive social media strategy that included high-quality photography and video content, engaging captions, and targeted advertising campaigns. We also implemented a consistent posting schedule and actively engaged with followers.",
      outcome:
        "Within six months, the bar saw a 200% increase in Instagram followers and a significant boost in brand awareness. Social media became a key driver of foot traffic and revenue.",
      additionalImages: [
        "/images/portfolio/cocktail-bar-post1.png",
        "/images/portfolio/cocktail-bar-post2.png",
      ],
    },
    {
      id: 3,
      title: "Farm-to-Table Restaurant Reels",
      category: "video",
      image: "/images/portfolio/farm-table-video.png",
      description: "Behind-the-scenes video content showcasing fresh ingredients and cooking process.",
      tags: ["Video Production", "Content Strategy"],
      results: "1M+ views on TikTok",
      gradient: "from-green-500 to-emerald-600",
      fullDescription:
        "A farm-to-table restaurant wanted to connect with customers on a deeper level by showcasing their commitment to fresh, locally sourced ingredients. They needed a way to visually communicate their story and values.",
      challenge:
        "The restaurant struggled to capture the essence of their farm-to-table philosophy through traditional marketing channels. They needed a more engaging and authentic way to reach their target audience.",
      solution:
        "We created a series of behind-the-scenes video reels for TikTok and Instagram that highlighted the restaurant's relationships with local farmers, the preparation of seasonal dishes, and the passion of the culinary team.",
      outcome:
        "The video reels went viral, generating over 1 million views on TikTok and significantly increasing brand awareness. The restaurant saw a surge in reservations and positive customer feedback.",
      additionalImages: [
        "/images/portfolio/farm-table-still1.png",
        "/images/portfolio/farm-table-still2.png",
      ],
    },
    {
      id: 4,
      title: "Artisan Bakery Brand Identity",
      category: "branding",
      image: "/images/portfolio/artisan-bakery-branding.png",
      description: "Complete brand transformation for a local bakery including logo, packaging, and signage.",
      tags: ["Brand Identity", "Packaging Design", "Signage"],
      results: "+60% brand recognition",
      gradient: "from-orange-500 to-red-600",
      fullDescription:
        "An artisan bakery sought to revitalize its brand identity to better reflect its commitment to quality ingredients and handcrafted goods. They needed a cohesive brand image that would resonate with their target audience.",
      challenge:
        "The bakery's existing brand was outdated and lacked a clear visual identity. Packaging was generic, and signage was inconsistent, resulting in low brand recognition.",
      solution:
        "We developed a complete brand transformation that included a new logo, custom packaging design, and updated signage. The new brand identity was inspired by the bakery's artisanal techniques and commitment to quality.",
      outcome:
        "Within a year, the bakery saw a 60% increase in brand recognition and a significant improvement in customer perception. The new brand identity helped the bakery stand out in a competitive market.",
      additionalImages: [
        "/images/portfolio/artisan-bakery-packaging.png",
        "/images/portfolio/artisan-bakery-signage.png",
      ],
    },
    {
      id: 5,
      title: "Seasonal Menu Photography",
      category: "photography",
      image: "/images/portfolio/seasonal-menu-photography.png",
      description: "Professional food photography for seasonal menu launch.",
      tags: ["Food Photography", "Menu Design"],
      results: "+25% seasonal sales",
      gradient: "from-indigo-500 to-purple-600",
      fullDescription:
        "A restaurant wanted to showcase its new seasonal menu with mouthwatering food photography that would entice customers and drive sales. They needed images that would capture the freshness and flavor of their dishes.",
      challenge:
        "The restaurant's existing menu photography was amateurish and failed to capture the appeal of their dishes. They needed professional-quality images that would make their menu more visually appealing.",
      solution:
        "We provided professional food photography services that highlighted the vibrant colors and textures of the restaurant's seasonal dishes. We used natural lighting and expert styling techniques to create images that were both appetizing and visually stunning.",
      outcome:
        "The restaurant saw a 25% increase in seasonal sales after launching the new menu with the professional food photography. Customers were drawn to the visually appealing images, resulting in higher order values.",
      additionalImages: [
        "/images/portfolio/seasonal-dish1.png",
        "/images/portfolio/seasonal-dish2.png",
      ],
    },
    {
      id: 6,
      title: "Coffee Shop Social Strategy",
      category: "social-media",
      image: "/images/portfolio/coffee-shop-social.png",
      description: "Comprehensive social media strategy and daily content creation.",
      tags: ["Social Strategy", "Content Creation", "Community Management"],
      results: "+150% engagement rate",
      gradient: "from-amber-500 to-orange-600",
      fullDescription:
        "A local coffee shop sought to build a stronger online presence and engage with its community through social media. They needed a comprehensive strategy that would increase brand awareness and drive foot traffic.",
      challenge:
        "The coffee shop's existing social media presence was inconsistent and lacked a clear strategy. They struggled to create engaging content and build a loyal following.",
      solution:
        "We developed a comprehensive social media strategy that included daily content creation, community management, and targeted advertising campaigns. We focused on creating content that was authentic, engaging, and relevant to the coffee shop's target audience.",
      outcome:
        "Within three months, the coffee shop saw a 150% increase in engagement rate and a significant boost in brand awareness. Social media became a valuable tool for connecting with customers and promoting the coffee shop's unique offerings.",
      additionalImages: [
        "/images/portfolio/coffee-shop-post3.png",
        "/images/portfolio/coffee-shop-post4.png",
      ],
    },
  ]

  const filters = [
    { id: "all", label: "All Work", color: "from-rose-500 to-pink-600" },
    { id: "menu-design", label: "Menu Design", color: "from-purple-500 to-pink-600" },
    { id: "photography", label: "Photography", color: "from-indigo-500 to-purple-600" },
    { id: "video", label: "Video Content", color: "from-green-500 to-emerald-600" },
    { id: "social-media", label: "Social Media", color: "from-orange-500 to-red-600" },
    { id: "branding", label: "Branding", color: "from-cyan-500 to-blue-600" },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const openModal = (item: any) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const nextItem = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem?.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedItem(filteredItems[nextIndex])
  }

  const previousItem = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem?.id)
    const previousIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedItem(filteredItems[previousIndex])
  }

  return (
    <section id="portfolio" className="py-12 sm:py-20 bg-gradient-to-br from-purple-50/30 via-pink-50/50 to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            See how we've helped restaurants transform their brand and boost their success through stunning design and
            strategic marketing.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-4 sm:px-6 py-2 transition-all duration-300 text-sm border-2 ${
                  activeFilter === filter.id
                    ? `bg-gradient-to-r ${filter.color} text-white shadow-lg border-transparent`
                    : "border-rose-200 text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:border-pink-300"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-4 border-0 bg-white/80 backdrop-blur-sm cursor-pointer"
              onClick={() => openModal(item)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 sm:h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white/90 hover:bg-white h-8 w-8 sm:h-10 sm:w-10 shadow-lg"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className={`bg-gradient-to-r ${item.gradient} text-white text-xs shadow-lg`}>
                    {item.results}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border border-rose-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            onClick={() => window.location.href = '/portfolio'}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-600 hover:from-purple-600 hover:via-pink-600 hover:to-rose-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            View Full Portfolio
            <Heart className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Button>
        </div>
      </div>
      <PortfolioModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={nextItem}
        onPrevious={previousItem}
      />
    </section>
  )
}

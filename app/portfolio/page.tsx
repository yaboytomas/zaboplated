"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { PortfolioModal } from "@/components/portfolio-modal"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingElements } from "@/components/floating-elements"
import { InteractiveBackground } from "@/components/interactive-elements"
import { ArrowLeft, ExternalLink, Heart, Filter, Search, Star } from "lucide-react"

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
      "/images/portfolio/bella-vista-interior.png",
      "/images/portfolio/bella-vista-branding.png",
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
      "The restaurant's existing food photography was inconsistent and didn't effectively showcase the quality and appeal of their seasonal dishes. They needed professional images that would drive customer interest.",
    solution:
      "We conducted a comprehensive food photography session that highlighted the restaurant's seasonal menu items. We used professional lighting, styling, and post-processing techniques to create images that were both appetizing and visually appealing.",
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
      "A local coffee shop wanted to build a strong social media presence to connect with their community and attract new customers. They needed a strategy that would showcase their unique coffee culture and daily operations.",
    challenge:
      "The coffee shop had minimal social media presence and struggled to create engaging content consistently. They needed a strategy that would reflect their brand personality and connect with coffee enthusiasts.",
    solution:
      "We developed a comprehensive social media strategy that included daily content creation, community engagement, and influencer partnerships. We created content that showcased the coffee-making process, barista skills, and the cozy atmosphere.",
    outcome:
      "Within three months, the coffee shop saw a 150% increase in engagement rate and a significant boost in brand awareness. Social media became a valuable tool for connecting with customers and promoting the coffee shop's unique offerings.",
    additionalImages: [
      "/images/portfolio/coffee-shop-post3.png",
      "/images/portfolio/coffee-shop-post4.png",
    ],
  },
]

const filters = [
  { id: "all", label: "All Projects", color: "from-rose-500 to-pink-600" },
  { id: "menu-design", label: "Menu Design", color: "from-blue-500 to-purple-600" },
  { id: "social-media", label: "Social Media", color: "from-green-500 to-emerald-600" },
  { id: "video", label: "Video Content", color: "from-purple-500 to-pink-600" },
  { id: "branding", label: "Branding", color: "from-orange-500 to-red-600" },
  { id: "photography", label: "Photography", color: "from-indigo-500 to-purple-600" },
]

export default function PortfolioPage() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredItems = portfolioItems.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.category === activeFilter
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const openModal = (item: any) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const nextItem = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedItem(filteredItems[nextIndex])
  }

  const previousItem = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    setSelectedItem(filteredItems[prevIndex])
  }

  const handleGetStarted = () => {
    router.push("/#contact")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Navigation />
      <ScrollProgress />
      <FloatingElements />
      <InteractiveBackground />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="mb-6 text-rose-600 hover:text-rose-700 font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover how we've transformed restaurants through stunning design, strategic marketing, and unforgettable branding.
          </p>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`rounded-full px-4 py-2 transition-all duration-300 text-sm border-2 ${
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
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setActiveFilter("all")
                }}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full bg-white/90 hover:bg-white h-10 w-10 shadow-lg"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge className={`bg-gradient-to-r ${item.gradient} text-white text-xs shadow-lg`}>
                          {item.results}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          Featured Project
                        </div>
                        <Button
                          variant="ghost"
                          className="text-rose-600 hover:text-rose-700 font-semibold p-0 h-auto"
                        >
                          View Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to Transform Your Restaurant?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Let's create something amazing together. Our team is ready to help you elevate your brand and boost your success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleGetStarted}
                      className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                      Start Your Project
                      <Heart className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => router.push("/")}
                      className="border-2 border-rose-300 text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:border-pink-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                    >
                      Learn More About Us
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <PortfolioModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={nextItem}
        onPrevious={previousItem}
      />
    </main>
  )
} 
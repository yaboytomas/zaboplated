"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogSearch } from "@/components/blog-search"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BlogPage() {
  const router = useRouter()
  const [filteredPosts, setFilteredPosts] = useState<any[]>([])

  const blogPosts = [
    {
      id: 1,
      slug: "menu-design-trends-2024",
      title: "10 Menu Design Trends That Will Boost Your Restaurant Sales in 2024",
      excerpt:
        "Discover the latest menu design trends that are proven to increase customer spending and improve the dining experience.",
      image: "/images/blog/menu-design-trends.png",
      category: "Menu Design",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "ZaboPlated Team",
      featured: true,
      tags: ["Design", "Sales", "Trends", "Psychology"],
    },
    {
      id: 2,
      slug: "food-photography-budget",
      title: "How to Create Instagram-Worthy Food Photography on a Budget",
      excerpt:
        "Learn professional food photography techniques that will make your dishes look irresistible on social media.",
      image: "/images/blog/food-photography-tips.png",
      category: "Photography",
      date: "2024-01-10",
      readTime: "7 min read",
      author: "ZaboPlated Team",
      featured: true,
      tags: ["Photography", "Social Media", "Budget", "DIY"],
    },
    {
      id: 3,
      slug: "social-media-marketing-guide",
      title: "The Ultimate Guide to Restaurant Social Media Marketing",
      excerpt:
        "A comprehensive guide to building a strong social media presence that drives foot traffic and increases sales.",
      image: "/images/blog/social-media-marketing.png",
      category: "Social Media",
      date: "2024-01-05",
      readTime: "10 min read",
      author: "ZaboPlated Team",
      featured: true,
      tags: ["Social Media", "Marketing", "Strategy", "Growth"],
    },
    {
      id: 4,
      slug: "restaurant-branding-mistakes",
      title: "5 Common Restaurant Branding Mistakes That Are Costing You Customers",
      excerpt:
        "Avoid these critical branding mistakes that could be driving potential customers away from your restaurant.",
      image: "/placeholder.svg?height=300&width=400&text=Branding+Mistakes",
      category: "Branding",
      date: "2024-01-01",
      readTime: "6 min read",
      author: "ZaboPlated Team",
      featured: false,
      tags: ["Branding", "Mistakes", "Customer Experience"],
    },
    {
      id: 5,
      slug: "seasonal-menu-design",
      title: "Creating Seasonal Menus That Drive Revenue",
      excerpt:
        "Learn how to design seasonal menus that not only reflect the time of year but also maximize your profits.",
      image: "/placeholder.svg?height=300&width=400&text=Seasonal+Menu",
      category: "Menu Design",
      date: "2023-12-28",
      readTime: "8 min read",
      author: "ZaboPlated Team",
      featured: false,
      tags: ["Menu Design", "Seasonal", "Revenue", "Strategy"],
    },
    {
      id: 6,
      slug: "video-content-restaurants",
      title: "Why Video Content is Essential for Restaurant Marketing in 2024",
      excerpt:
        "Discover how video content can transform your restaurant's marketing strategy and attract more customers.",
      image: "/placeholder.svg?height=300&width=400&text=Video+Content",
      category: "Video Marketing",
      date: "2023-12-25",
      readTime: "4 min read",
      author: "ZaboPlated Team",
      featured: false,
      tags: ["Video", "Marketing", "Content", "Engagement"],
    },
  ]

  const handleGetStarted = () => {
    router.push("/#contact")
  }

  const postsToShow = filteredPosts.length > 0 ? filteredPosts : blogPosts
  const featuredPosts = postsToShow.filter((post) => post.featured)
  const regularPosts = postsToShow.filter((post) => !post.featured)

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Restaurant Marketing{" "}
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert tips, trends, and strategies to help your restaurant thrive in today's competitive market.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlogSearch posts={blogPosts} onFilteredPosts={setFilteredPosts} />
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-outfit text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">{post.category}</Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-rose-600 hover:text-rose-700 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      {regularPosts.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-outfit text-3xl font-bold text-gray-900 mb-8 text-center">
              {featuredPosts.length > 0 ? "More Articles" : "All Articles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">{post.category}</Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Tags */}
                    {post.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border border-rose-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-rose-600 hover:text-rose-700 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {postsToShow.length === 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gray-50 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button onClick={handleGetStarted} className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                Get Started with ZaboPlated
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

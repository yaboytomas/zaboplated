"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BlogSearch } from "@/components/blog-search"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
  featured: boolean
  tags: string[]
}

const blogPosts: BlogPost[] = [
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
      "Master social media marketing for your restaurant with proven strategies that increase engagement and drive more customers.",
    image: "/images/blog/social-media-marketing.png",
    category: "Social Media",
    date: "2024-01-05",
    readTime: "8 min read",
    author: "ZaboPlated Team",
    featured: false,
    tags: ["Social Media", "Marketing", "Engagement", "Strategy"],
  },
  {
    id: 4,
    slug: "branding-mistakes-restaurants-avoid",
    title: "5 Critical Branding Mistakes That Are Killing Your Restaurant's Success",
    excerpt:
      "Avoid these common branding pitfalls that are costing restaurants customers and revenue every day.",
    image: "/images/blog/branding-mistakes.png",
    category: "Branding",
    date: "2023-12-28",
    readTime: "6 min read",
    author: "ZaboPlated Team",
    featured: false,
    tags: ["Branding", "Mistakes", "Strategy", "Business"],
  },
  {
    id: 5,
    slug: "seasonal-menu-marketing",
    title: "How to Market Your Seasonal Menu for Maximum Impact",
    excerpt:
      "Turn your seasonal offerings into profit drivers with these proven marketing strategies and design tips.",
    image: "/images/blog/seasonal-menu.png",
    category: "Menu Design",
    date: "2023-12-20",
    readTime: "5 min read",
    author: "ZaboPlated Team",
    featured: false,
    tags: ["Seasonal", "Marketing", "Menu", "Sales"],
  },
  {
    id: 6,
    slug: "video-content-restaurant-marketing",
    title: "Video Content That Converts: A Restaurant Owner's Guide",
    excerpt:
      "Create compelling video content that showcases your restaurant and drives more customers through your doors.",
    image: "/images/blog/video-content.png",
    category: "Video Marketing",
    date: "2023-12-15",
    readTime: "7 min read",
    author: "ZaboPlated Team",
    featured: false,
    tags: ["Video", "Content", "Marketing", "Conversion"],
  },
]

export default function BlogPageClient() {
  const router = useRouter()
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])

  const postsToShow = filteredPosts.length > 0 ? filteredPosts : blogPosts

  const handleSearch = (results: BlogPost[]) => {
    setFilteredPosts(results)
  }

  const featuredPosts = postsToShow.filter((post: BlogPost) => post.featured)
  const regularPosts = postsToShow.filter((post: BlogPost) => !post.featured)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Restaurant Marketing <span className="text-rose-500">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert tips, trends, and strategies to help your restaurant thrive in today's competitive market.
            </p>
            <BlogSearch posts={blogPosts} onFilteredPosts={handleSearch} />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post: BlogPost) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary" className="bg-rose-100 text-rose-700">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.author}</span>
                      <Link href={`/blog/${post.slug}`}>
                        <Button className="bg-rose-500 hover:bg-rose-600">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post: BlogPost) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button size="sm" variant="outline" className="hover:bg-rose-50 hover:border-rose-300">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

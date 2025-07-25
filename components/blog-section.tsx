"use client"

import { Calendar, ArrowRight, Clock } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Menu Design Trends That Will Boost Your Restaurant Sales in 2024",
      excerpt:
        "Discover the latest menu design trends that are proven to increase customer spending and improve the dining experience.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Menu Design",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "ZaboPlated Team",
    },
    {
      id: 2,
      title: "How to Create Instagram-Worthy Food Photography on a Budget",
      excerpt:
        "Learn professional food photography techniques that will make your dishes look irresistible on social media.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Photography",
      date: "2024-01-10",
      readTime: "7 min read",
      author: "ZaboPlated Team",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Restaurant Social Media Marketing",
      excerpt:
        "A comprehensive guide to building a strong social media presence that drives foot traffic and increases sales.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Social Media",
      date: "2024-01-05",
      readTime: "10 min read",
      author: "ZaboPlated Team",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest{" "}
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and strategies to grow your restaurant business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
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
                <Link
                  href={`/blog/${post.id === 1 ? "menu-design-trends-2024" : post.id === 2 ? "food-photography-budget" : "social-media-marketing-guide"}`}
                >
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

        <div className="text-center">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

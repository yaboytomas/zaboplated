"use client"

import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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
  tags: string[]
}

const allBlogPosts: BlogPost[] = [
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
    tags: ["Social Media", "Marketing", "Strategy", "Growth"],
  },
  {
    id: 4,
    slug: "restaurant-branding-mistakes",
    title: "5 Common Restaurant Branding Mistakes That Are Costing You Customers",
    excerpt:
      "Avoid these critical branding mistakes that could be driving potential customers away from your restaurant.",
    image: "/images/blog/branding-mistakes.png",
    category: "Branding",
    date: "2024-01-01",
    readTime: "6 min read",
    author: "ZaboPlated Team",
    tags: ["Branding", "Mistakes", "Customer Experience"],
  },
  {
    id: 5,
    slug: "seasonal-menu-design",
    title: "Creating Seasonal Menus That Drive Revenue",
    excerpt:
      "Learn how to design seasonal menus that not only reflect the time of year but also maximize your profits.",
    image: "/images/blog/seasonal-menu.png",
    category: "Menu Design",
    date: "2023-12-28",
    readTime: "8 min read",
    author: "ZaboPlated Team",
    tags: ["Menu Design", "Seasonal", "Revenue", "Strategy"],
  },
  {
    id: 6,
    slug: "video-content-restaurants",
    title: "Why Video Content is Essential for Restaurant Marketing in 2024",
    excerpt:
      "Discover how video content can transform your restaurant's marketing strategy and attract more customers.",
    image: "/images/blog/video-content.png",
    category: "Video Marketing",
    date: "2023-12-25",
    readTime: "4 min read",
    author: "ZaboPlated Team",
    tags: ["Video", "Marketing", "Content", "Engagement"],
  },
]

const categoryDescriptions: { [key: string]: string } = {
  "menu-design":
    "Explore the latest trends and strategies in menu design that drive sales and enhance customer experience.",
  photography: "Master the art of food photography with professional tips, techniques, and budget-friendly solutions.",
  "social-media": "Build a powerful social media presence that engages customers and drives restaurant traffic.",
  branding: "Create a memorable brand identity that sets your restaurant apart from the competition.",
  "video-marketing": "Harness the power of video content to showcase your restaurant and attract new customers.",
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter()
  const categorySlug = params.category
  const categoryName = categorySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const categoryPosts = allBlogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === categorySlug)

  const categoryDescription =
    categoryDescriptions[categorySlug] ||
    `Discover expert insights and practical tips about ${categoryName.toLowerCase()}.`

  const handleGetStarted = () => {
    router.push("/#contact")
  }

  if (categoryPosts.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <Navigation />
        <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The category you're looking for doesn't exist or has no posts yet.</p>
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 text-rose-600 hover:text-rose-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Articles
            </Button>
          </Link>

          <div className="text-center">
            <Badge className="bg-gradient-to-r from-rose-500 to-pink-600 text-white mb-4 text-lg px-4 py-2">
              {categoryName}
            </Badge>
            <h1 className="font-outfit text-4xl md:text-6xl font-black text-gray-900 mb-6">
              {categoryName}{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Articles
              </span>
            </h1>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto mb-8">{categoryDescription}</p>
            <div className="text-gray-500">
              {categoryPosts.length} article{categoryPosts.length !== 1 ? "s" : ""} in this category
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post) => (
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

                  {/* Tags */}
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

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-8 border border-rose-200">
              <h3 className="font-outfit text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Restaurant?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get expert help implementing these {categoryName.toLowerCase()} strategies for your restaurant.
              </p>
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 text-lg"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

interface Category {
  title: string
  description: string
}

interface Props {
  category: Category
  categorySlug: string
  posts: BlogPost[]
}

export default function CategoryPageClient({ category, categorySlug, posts }: Props) {
  const router = useRouter()

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => router.push("/blog")}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {category.title} <span className="text-rose-500">Articles</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No posts found</h2>
              <p className="text-gray-600 mb-6">
                We're working on adding more content in this category. Check back soon!
              </p>
              <Link href="/blog">
                <Button className="bg-rose-500 hover:bg-rose-600">
                  Browse All Posts
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {posts.length} article{posts.length !== 1 ? 's' : ''} in {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
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
                        {post.tags.slice(0, 3).map((tag, index) => (
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
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experts help you implement these strategies and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button className="bg-rose-500 hover:bg-rose-600">
                View Our Work
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

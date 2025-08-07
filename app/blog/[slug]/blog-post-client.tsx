"use client"

import { Calendar, Clock, ArrowLeft, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
}

interface Props {
  post: BlogPost
}

export default function BlogPostClient({ post }: Props) {
  const router = useRouter()

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
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

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-6">
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">Marketing Expert</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="hover:bg-gray-50"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-red-50 hover:border-red-200"
              >
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose prose-lg prose-rose max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-rose-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-ul:text-gray-700 prose-ol:text-gray-700
              prose-li:text-gray-700"
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg border border-rose-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Restaurant's Brand?
            </h3>
            <p className="text-gray-600 mb-6">
              Let ZaboPlated help you implement these strategies and create a brand that drives real results.
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
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* You could add related posts logic here */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/blog/food-photography-tips.png"
                  alt="Food Photography Tips"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="text-xs mb-3">
                  Photography
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How to Create Instagram-Worthy Food Photography on a Budget
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn professional food photography techniques that will make your dishes look irresistible...
                </p>
                <Link href="/blog/food-photography-budget">
                  <Button size="sm" variant="outline" className="hover:bg-rose-50">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/blog/social-media-marketing.png"
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="text-xs mb-3">
                  Social Media
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  The Ultimate Guide to Restaurant Social Media Marketing
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Master social media marketing for your restaurant with proven strategies...
                </p>
                <Link href="/blog/social-media-marketing-guide">
                  <Button size="sm" variant="outline" className="hover:bg-rose-50">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/blog/branding-mistakes.png"
                  alt="Branding Mistakes"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="text-xs mb-3">
                  Branding
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5 Critical Branding Mistakes That Are Killing Your Restaurant's Success
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Avoid these common branding pitfalls that are costing restaurants customers...
                </p>
                <Link href="/blog/branding-mistakes-restaurants-avoid">
                  <Button size="sm" variant="outline" className="hover:bg-rose-50">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

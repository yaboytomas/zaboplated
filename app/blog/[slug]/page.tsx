"use client"

import { Calendar, Clock, ArrowLeft, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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

const blogPosts: { [key: string]: BlogPost } = {
  "menu-design-trends-2024": {
    slug: "menu-design-trends-2024",
    title: "10 Menu Design Trends That Will Boost Your Restaurant Sales in 2024",
    excerpt:
      "Discover the latest menu design trends that are proven to increase customer spending and improve the dining experience.",
    image: "/images/blog/menu-design-trends.png",
    category: "Menu Design",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "ZaboPlated Team",
    content: `
      <p>Menu design is more than just listing your dishes – it's a powerful sales tool that can significantly impact your restaurant's revenue. In 2024, we're seeing exciting trends that combine psychology, design, and technology to create menus that not only look beautiful but also drive sales.</p>

      <h2>1. Minimalist Design with Strategic White Space</h2>
      <p>Less is more in 2024. Restaurants are embracing clean, minimalist designs that use white space strategically to guide the customer's eye to high-profit items. This approach reduces decision fatigue and makes the dining experience more enjoyable.</p>

      <h2>2. Bold Typography Hierarchies</h2>
      <p>Typography is taking center stage with bold, custom fonts that reflect the restaurant's personality. We're seeing creative use of font weights and sizes to create clear hierarchies that guide customers through the menu naturally.</p>

      <h2>3. Sustainable and Eco-Friendly Materials</h2>
      <p>Environmental consciousness is driving menu design choices. Restaurants are opting for recycled papers, plant-based inks, and reusable menu formats that align with their sustainability values.</p>

      <h2>4. Interactive QR Code Integration</h2>
      <p>QR codes are no longer just for contactless ordering – they're being integrated creatively into menu designs to provide additional information, chef stories, and even augmented reality experiences.</p>

      <h2>5. Color Psychology for Appetite Appeal</h2>
      <p>Strategic use of colors that stimulate appetite – warm oranges, rich reds, and earthy greens – are being used to make dishes more appealing and encourage higher spending.</p>

      <h2>Implementation Tips</h2>
      <ul>
        <li>Test your menu design with real customers before finalizing</li>
        <li>Ensure readability in your restaurant's lighting conditions</li>
        <li>Update seasonal items regularly to keep the menu fresh</li>
        <li>Consider your target demographic when choosing design elements</li>
      </ul>

      <p>Ready to transform your menu design? Contact ZaboPlated today to discover how we can help increase your restaurant's sales through strategic menu design.</p>
    `,
  },
  "food-photography-budget": {
    slug: "food-photography-budget",
    title: "How to Create Instagram-Worthy Food Photography on a Budget",
    excerpt:
      "Learn professional food photography techniques that will make your dishes look irresistible on social media.",
    image: "/images/blog/food-photography-tips.png",
    category: "Photography",
    date: "2024-01-10",
    readTime: "7 min read",
    author: "ZaboPlated Team",
    content: `
      <p>Great food photography doesn't require expensive equipment or a professional studio. With the right techniques and a bit of creativity, you can create stunning images that make your dishes irresistible on social media.</p>

      <h2>Essential Equipment (Under $100)</h2>
      <p>You don't need a professional camera to start. A smartphone with a good camera, a simple tripod, and some basic lighting equipment can produce amazing results.</p>

      <h2>Lighting is Everything</h2>
      <p>Natural light is your best friend. Position your food near a window with soft, diffused light. Avoid direct sunlight which creates harsh shadows. If shooting at night, invest in a simple LED light panel.</p>

      <h2>Composition Techniques</h2>
      <ul>
        <li><strong>Rule of Thirds:</strong> Place your main dish along the intersection points</li>
        <li><strong>Overhead Shots:</strong> Perfect for flat lays and showing multiple dishes</li>
        <li><strong>45-Degree Angle:</strong> Shows both the top and side of the dish</li>
        <li><strong>Close-ups:</strong> Highlight textures and details</li>
      </ul>

      <h2>Styling Tips</h2>
      <p>Food styling can make or break your photo. Use fresh ingredients, add garnishes strategically, and consider the color palette of your entire composition.</p>

      <h2>Props and Backgrounds</h2>
      <p>Simple props like wooden boards, cloth napkins, and vintage utensils can add character without overwhelming the food. Keep backgrounds neutral to make your dishes pop.</p>

      <h2>Post-Processing Magic</h2>
      <p>Basic editing can transform a good photo into a great one. Adjust brightness, contrast, and saturation. Apps like VSCO, Lightroom Mobile, and Snapseed offer professional-level editing tools.</p>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Over-editing that makes food look unnatural</li>
        <li>Poor lighting that creates unflattering shadows</li>
        <li>Cluttered compositions that distract from the food</li>
        <li>Not considering your brand's visual consistency</li>
      </ul>

      <p>Remember, consistency is key to building a strong visual brand on social media. Develop your unique style and stick to it across all your food photography.</p>
    `,
  },
  "social-media-marketing-guide": {
    slug: "social-media-marketing-guide",
    title: "The Ultimate Guide to Restaurant Social Media Marketing",
    excerpt:
      "A comprehensive guide to building a strong social media presence that drives foot traffic and increases sales.",
    image: "/images/blog/social-media-marketing.png",
    category: "Social Media",
    date: "2024-01-05",
    readTime: "10 min read",
    author: "ZaboPlated Team",
    content: `
      <p>Social media marketing is no longer optional for restaurants – it's essential. With the right strategy, you can build a loyal community, drive foot traffic, and increase sales significantly.</p>

      <h2>Choosing the Right Platforms</h2>
      <p>Not all social media platforms are created equal for restaurants. Focus your efforts on platforms where your target audience is most active:</p>
      
      <ul>
        <li><strong>Instagram:</strong> Perfect for visual content and younger demographics</li>
        <li><strong>Facebook:</strong> Great for community building and older demographics</li>
        <li><strong>TikTok:</strong> Ideal for viral content and Gen Z audience</li>
        <li><strong>Twitter:</strong> Good for customer service and real-time updates</li>
      </ul>

      <h2>Content Strategy That Works</h2>
      <p>Successful restaurant social media isn't just about posting food photos. Create a content mix that includes:</p>

      <h3>Behind-the-Scenes Content</h3>
      <p>Show your kitchen in action, introduce your staff, and share the story behind your dishes. This builds trust and connection with your audience.</p>

      <h3>User-Generated Content</h3>
      <p>Encourage customers to share photos of their meals and experiences. Repost their content (with permission) to build community and social proof.</p>

      <h3>Educational Content</h3>
      <p>Share cooking tips, ingredient information, and food facts. This positions your restaurant as an authority in your niche.</p>

      <h2>Posting Schedule and Consistency</h2>
      <p>Consistency is crucial for social media success. Create a content calendar and stick to a regular posting schedule. Quality over quantity – it's better to post less frequently with high-quality content than to post daily with mediocre content.</p>

      <h2>Engagement Strategies</h2>
      <ul>
        <li>Respond to comments and messages promptly</li>
        <li>Ask questions in your captions to encourage interaction</li>
        <li>Use relevant hashtags to increase discoverability</li>
        <li>Collaborate with local influencers and food bloggers</li>
        <li>Run contests and giveaways to boost engagement</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Track key metrics to understand what's working:</p>
      <ul>
        <li>Engagement rate (likes, comments, shares)</li>
        <li>Follower growth</li>
        <li>Website traffic from social media</li>
        <li>Reservation bookings attributed to social media</li>
        <li>Brand mention sentiment</li>
      </ul>

      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li>Posting only promotional content</li>
        <li>Ignoring negative comments or reviews</li>
        <li>Using too many hashtags or irrelevant ones</li>
        <li>Not maintaining a consistent brand voice</li>
        <li>Focusing on vanity metrics instead of business results</li>
      </ul>

      <p>Social media marketing for restaurants requires patience, consistency, and authenticity. Focus on building genuine relationships with your audience, and the business results will follow.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const post = blogPosts[params.slug]

  const handleGetStarted = () => {
    router.push("/#contact")
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <Navigation />
        <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">Back to Blog</Button>
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
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 text-rose-600 hover:text-rose-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-rose-500 to-pink-600 text-white mb-4">{post.category}</Badge>
            <h1 className="font-outfit text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <Clock className="h-4 w-4 ml-4 mr-2" />
              {post.readTime}
              <span className="ml-4">By {post.author}</span>
            </div>
          </div>

          <div className="relative mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <article
                className="prose prose-lg max-w-none font-inter prose-headings:font-outfit prose-headings:font-bold prose-h2:text-2xl prose-h2:text-gray-900 prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-gray-600 prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Like
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <Card className="bg-gradient-to-br from-rose-50 to-pink-100 border-rose-200">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-outfit text-lg font-bold text-gray-900 mb-2">
                      Ready to Transform Your Restaurant?
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get a free consultation and see how we can help boost your sales.
                    </p>
                    <Button
                      onClick={handleGetStarted}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-outfit text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {Object.values(blogPosts)
                        .filter((p) => p.slug !== post.slug)
                        .slice(0, 3)
                        .map((relatedPost) => (
                          <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                            <div className="group cursor-pointer">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-200 line-clamp-2 mb-1">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-gray-500">{relatedPost.readTime}</p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

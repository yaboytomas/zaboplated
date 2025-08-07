import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import BlogPostClient from "./blog-post-client"

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
      <p>Colors have a powerful impact on appetite and purchasing decisions. In 2024, we're seeing more strategic use of warm colors like reds and oranges to stimulate appetite, while cooler colors are used for healthy or premium items.</p>

      <h2>6. Digital Menu Boards with Dynamic Content</h2>
      <p>Digital displays are becoming more sophisticated, allowing restaurants to change pricing, highlight seasonal items, and showcase mouth-watering videos of their dishes in real-time.</p>

      <h2>7. Storytelling Through Design</h2>
      <p>Modern menus are becoming narrative experiences, telling the story of ingredients, cooking methods, and the restaurant's heritage through thoughtful design elements and copy.</p>

      <h2>8. Accessibility-First Design</h2>
      <p>Inclusive design is no longer an afterthought. Restaurants are prioritizing readability with high contrast colors, larger fonts, and braille options to ensure all customers can enjoy their dining experience.</p>

      <h2>9. Local and Seasonal Emphasis</h2>
      <p>Highlighting local sourcing and seasonal ingredients through design elements helps build trust and justifies premium pricing while appealing to environmentally conscious diners.</p>

      <h2>10. Mobile-Optimized Design</h2>
      <p>With QR code menus becoming standard, designing for mobile-first experiences is crucial. This means clean layouts, easy navigation, and fast loading times.</p>

      <h2>Conclusion</h2>
      <p>These trends represent more than just aesthetic choices – they're strategic decisions that can significantly impact your bottom line. At ZaboPlated, we help restaurants implement these cutting-edge design principles to create menus that not only look stunning but also drive sales and enhance the customer experience.</p>

      <p>Ready to transform your menu design? Contact our team of experts to discover how these trends can work for your restaurant.</p>
    `
  },
  "food-photography-budget": {
    slug: "food-photography-budget",
    title: "How to Create Instagram-Worthy Food Photography on a Budget",
    excerpt:
      "Learn professional food photography techniques that will make your dishes look irresistible on social media without breaking the bank.",
    image: "/images/blog/food-photography-tips.png",
    category: "Photography",
    date: "2024-01-10",
    readTime: "7 min read",
    author: "ZaboPlated Team",
    content: `
      <p>Great food photography doesn't have to cost a fortune. With the right techniques and a bit of creativity, you can create stunning images that make your dishes irresistible on social media and marketing materials.</p>

      <h2>Essential Equipment You Already Have</h2>
      <p>Your smartphone is more powerful than you think. Modern phones have cameras capable of professional-quality images when used correctly. Here's what you need:</p>
      <ul>
        <li>A smartphone with a good camera</li>
        <li>Natural light (the best light is free!)</li>
        <li>Simple props you likely have at home</li>
        <li>A steady hand or basic tripod</li>
      </ul>

      <h2>Lighting: Your Secret Weapon</h2>
      <p>Natural light is your best friend and it's completely free. Position your food near a large window with soft, diffused light. Avoid direct sunlight which creates harsh shadows.</p>

      <h2>Composition Techniques That Work</h2>
      <p>Learn the rule of thirds, leading lines, and negative space. These composition principles will instantly improve your food photography without any additional cost.</p>

      <h2>Props and Styling on a Shoestring</h2>
      <p>You don't need expensive props. Use what you have: textured fabrics, wooden cutting boards, simple white plates, and fresh ingredients as garnishes.</p>

      <h2>Editing Apps That Transform Your Photos</h2>
      <p>Free apps like VSCO, Lightroom Mobile, and Canva can turn good photos into great ones. Learn basic adjustments like exposure, contrast, and saturation.</p>

      <h2>Common Mistakes to Avoid</h2>
      <p>Overfiltering, poor lighting, cluttered backgrounds, and not considering the story your image tells are the most common pitfalls.</p>

      <h2>Building Your Food Photography Skills</h2>
      <p>Practice regularly, study other food photographers' work, and don't be afraid to experiment with different angles and styles.</p>

      <p>Remember, consistency is key. Develop your unique style and stick to it across all your social media platforms to build brand recognition.</p>
    `
  },
  "social-media-marketing-guide": {
    slug: "social-media-marketing-guide",
    title: "The Ultimate Guide to Restaurant Social Media Marketing",
    excerpt:
      "Master social media marketing for your restaurant with proven strategies that increase engagement and drive more customers.",
    image: "/images/blog/social-media-marketing.png",
    category: "Social Media",
    date: "2024-01-05",
    readTime: "8 min read",
    author: "ZaboPlated Team",
    content: `
      <p>Social media isn't just about posting pretty pictures anymore. It's a powerful marketing tool that can drive real business results for your restaurant. Here's how to do it right.</p>

      <h2>Platform Strategy: Where Your Customers Are</h2>
      <p>Different platforms serve different purposes. Instagram is perfect for visual storytelling, Facebook for community building, TikTok for viral content, and Twitter for customer service.</p>

      <h2>Content That Converts</h2>
      <p>Behind-the-scenes content, user-generated content, limited-time offers, and staff spotlights perform better than just food photos.</p>

      <h2>Timing and Frequency</h2>
      <p>Post when your audience is most active. For restaurants, this is typically during meal times and evenings when people are planning their next meal.</p>

      <h2>Engagement Strategies That Work</h2>
      <p>Respond to comments quickly, use interactive features like polls and questions, and encourage user-generated content with branded hashtags.</p>

      <h2>Measuring Success</h2>
      <p>Track metrics that matter: engagement rate, reach, website clicks, and most importantly, how social media translates to actual customers and sales.</p>

      <p>Social media marketing is a marathon, not a sprint. Consistency and authenticity will build a loyal following that translates to real business growth.</p>
    `
  },
  "branding-mistakes-restaurants-avoid": {
    slug: "branding-mistakes-restaurants-avoid",
    title: "5 Critical Branding Mistakes That Are Killing Your Restaurant's Success",
    excerpt:
      "Avoid these common branding pitfalls that are costing restaurants customers and revenue every day.",
    image: "/images/blog/branding-mistakes.png",
    category: "Branding",
    date: "2023-12-28",
    readTime: "6 min read",
    author: "ZaboPlated Team",
    content: `
      <p>Your restaurant's brand is more than just a logo – it's the entire experience customers have with your business. Unfortunately, many restaurants make critical branding mistakes that cost them customers and revenue.</p>

      <h2>Mistake #1: Inconsistent Visual Identity</h2>
      <p>Using different fonts, colors, and styles across your menu, signage, and social media confuses customers and weakens your brand recognition.</p>

      <h2>Mistake #2: Ignoring Your Target Audience</h2>
      <p>Trying to appeal to everyone means appealing to no one. Define your ideal customer and tailor your branding specifically to them.</p>

      <h2>Mistake #3: Competing on Price Alone</h2>
      <p>When you only compete on price, you become a commodity. Instead, focus on what makes your restaurant unique and valuable.</p>

      <h2>Mistake #4: Neglecting the Complete Customer Experience</h2>
      <p>Your brand extends beyond visuals to include service, atmosphere, food quality, and every touchpoint with customers.</p>

      <h2>Mistake #5: Not Telling Your Story</h2>
      <p>Customers connect with stories, not just products. Share your restaurant's origin, values, and mission to create emotional connections.</p>

      <p>Fixing these branding mistakes can transform your restaurant from just another dining option to a beloved local destination that customers actively seek out and recommend to others.</p>
    `
  },
  "seasonal-menu-marketing": {
    slug: "seasonal-menu-marketing",
    title: "How to Market Your Seasonal Menu for Maximum Impact",
    excerpt:
      "Turn your seasonal offerings into profit drivers with these proven marketing strategies and design tips.",
    image: "/images/blog/seasonal-menu.png",
    category: "Menu Design",
    date: "2023-12-20",
    readTime: "5 min read",
    author: "ZaboPlated Team",
    content: `
      <p>Seasonal menus are a powerful way to keep your restaurant fresh and exciting while maximizing profit margins. Here's how to market them effectively.</p>

      <h2>Build Anticipation Before Launch</h2>
      <p>Start teasing your seasonal menu weeks before launch. Share behind-the-scenes content of recipe development and ingredient sourcing.</p>

      <h2>Create FOMO with Limited-Time Messaging</h2>
      <p>Emphasize scarcity and exclusivity. Use phrases like "while supplies last" and "limited time only" to drive urgency.</p>

      <h2>Visual Storytelling</h2>
      <p>Use seasonal colors, textures, and imagery in your marketing materials to reinforce the seasonal theme and create emotional connections.</p>

      <h2>Staff Training and Enthusiasm</h2>
      <p>Your staff are your best salespeople. Train them on new items and encourage them to share their favorites with genuine enthusiasm.</p>

      <h2>Pricing Strategy</h2>
      <p>Seasonal items can command premium pricing when positioned correctly. Focus on quality, uniqueness, and the limited-time nature of the offerings.</p>

      <p>Remember, seasonal menus are not just about the food – they're about creating an experience that customers can only get at your restaurant during specific times of the year.</p>
    `
  },
  "video-content-restaurant-marketing": {
    slug: "video-content-restaurant-marketing",
    title: "Video Content That Converts: A Restaurant Owner's Guide",
    excerpt:
      "Create compelling video content that showcases your restaurant and drives more customers through your doors.",
    image: "/images/blog/video-content.png",
    category: "Video Marketing",
    date: "2023-12-15",
    readTime: "7 min read",
    author: "ZaboPlated Team",
    content: `
      <p>Video content is no longer optional for restaurants – it's essential. From TikTok to Instagram Reels, video drives engagement and converts viewers into customers better than any other content type.</p>

      <h2>Types of Video Content That Work</h2>
      <p>Recipe reveals, behind-the-scenes kitchen footage, staff introductions, customer testimonials, and day-in-the-life content all perform well.</p>

      <h2>Equipment You Need</h2>
      <p>Start simple with your smartphone and good lighting. As you grow, consider investing in a tripod, external microphone, and basic lighting setup.</p>

      <h2>Storytelling Through Video</h2>
      <p>Every video should tell a story. Whether it's the journey of an ingredient from farm to plate or a customer's first bite reaction, narrative drives engagement.</p>

      <h2>Platform-Specific Strategies</h2>
      <p>Tailor your content to each platform. TikTok favors quick, entertaining content while YouTube allows for longer-form educational videos.</p>

      <h2>Measuring Video Performance</h2>
      <p>Track views, engagement rates, shares, and most importantly, how video content translates to restaurant visits and sales.</p>

      <p>Video content creation is a skill that improves with practice. Start creating today, learn from your analytics, and iterate based on what resonates with your audience.</p>
    `
  }
}

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: "Blog Post Not Found | ZaboPlated",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | ZaboPlated`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, restaurant ${post.category.toLowerCase()}, ${post.title.toLowerCase().split(' ').slice(0, 5).join(', ')}`,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ZaboPlated`,
      description: post.excerpt,
      url: `https://zaboplated.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ZaboPlated`,
      description: post.excerpt,
      images: [post.image],
    },
    other: {
      "article:author": post.author,
      "article:published_time": post.date,
      "article:section": post.category,
      "article:tag": post.category,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <BlogPostClient post={post} />
      <Footer />
    </>
  )
}

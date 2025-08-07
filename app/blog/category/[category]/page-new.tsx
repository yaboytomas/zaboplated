import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"


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
    category: "Food Photography",
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
      "Master social media marketing for your restaurant with proven strategies that increase engagement and drive more customers.",
    image: "/images/blog/social-media-marketing.png",
    category: "Social Media Marketing",
    date: "2024-01-05",
    readTime: "8 min read",
    author: "ZaboPlated Team",
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
    tags: ["Branding", "Mistakes", "Strategy", "Business"],
  },
  {
    id: 5,
    slug: "seasonal-menu-marketing",
    title: "How to Market Your Seasonal Menu for Maximum Impact",
    excerpt:
      "Turn your seasonal offerings into profit drivers with these proven marketing strategies and design tips.",
    image: "/images/blog/seasonal-menu.png",
    category: "Restaurant Marketing",
    date: "2023-12-20",
    readTime: "5 min read",
    author: "ZaboPlated Team",
    tags: ["Seasonal", "Marketing", "Menu", "Sales"],
  },
  {
    id: 6,
    slug: "video-content-restaurant-marketing",
    title: "Video Content That Converts: A Restaurant Owner's Guide",
    excerpt:
      "Create compelling video content that showcases your restaurant and drives more customers through your doors.",
    image: "/images/blog/video-content.png",
    category: "Video Content",
    date: "2023-12-15",
    readTime: "7 min read",
    author: "ZaboPlated Team",
    tags: ["Video", "Content", "Marketing", "Conversion"],
  },
]

const categoryInfo: { [key: string]: { title: string; description: string } } = {
  "menu-design": {
    title: "Menu Design",
    description: "Expert tips and trends for creating menus that boost sales and enhance customer experience."
  },
  "food-photography": {
    title: "Food Photography",
    description: "Professional photography techniques to make your dishes irresistible on social media and marketing materials."
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    description: "Proven strategies to grow your restaurant's social media presence and convert followers into customers."
  },
  "branding": {
    title: "Branding",
    description: "Build a memorable restaurant brand that stands out in the competitive food industry."
  },
  "restaurant-marketing": {
    title: "Restaurant Marketing",
    description: "Comprehensive marketing strategies to attract more customers and increase revenue."
  },
  "video-content": {
    title: "Video Content",
    description: "Create engaging video content that showcases your restaurant and drives customer engagement."
  }
}

interface Props {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categorySlug = params.category
  const category = categoryInfo[categorySlug]
  
  if (!category) {
    return {
      title: "Category Not Found | ZaboPlated",
      description: "The requested blog category could not be found.",
    }
  }

  return {
    title: `${category.title} Blog Posts | ZaboPlated Restaurant Marketing`,
    description: category.description,
    keywords: `${category.title.toLowerCase()}, restaurant ${category.title.toLowerCase()}, ${category.title.toLowerCase()} tips, restaurant marketing`,
    alternates: {
      canonical: `/blog/category/${categorySlug}`,
    },
    openGraph: {
      title: `${category.title} Blog Posts | ZaboPlated Restaurant Marketing`,
      description: category.description,
      url: `https://zaboplated.com/blog/category/${categorySlug}`,
      type: "website",
      images: [
        {
          url: "/images/blog/menu-design-trends.png",
          width: 1200,
          height: 630,
          alt: `${category.title} Blog Posts - ZaboPlated`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} Blog Posts | ZaboPlated Restaurant Marketing`,
      description: category.description,
      images: ["/images/blog/menu-design-trends.png"],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(categoryInfo).map((category) => ({
    category: category,
  }))
}

export default function CategoryPage({ params }: Props) {
  const categorySlug = params.category
  const category = categoryInfo[categorySlug]

  if (!category) {
    notFound()
  }

  // Map category slugs to actual category names in posts
  const categoryMapping: { [key: string]: string } = {
    "menu-design": "Menu Design",
    "food-photography": "Food Photography", 
    "social-media-marketing": "Social Media Marketing",
    "branding": "Branding",
    "restaurant-marketing": "Restaurant Marketing",
    "video-content": "Video Content"
  }

  const categoryName = categoryMapping[categorySlug]
  const filteredPosts = allBlogPosts.filter(post => 
    post.category === categoryName || 
    post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  )

  return (
    <>
      <Navigation />
      <CategoryPageClient 
        category={category}
        categorySlug={categorySlug}
        posts={filteredPosts}
      />
      <Footer />
    </>
  )
}

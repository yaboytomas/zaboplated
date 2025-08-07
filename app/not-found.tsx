import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Page Not Found | ZaboPlated",
  description: "The page you're looking for doesn't exist. Return to ZaboPlated's homepage to explore our restaurant branding and marketing services.",
  alternates: {
    canonical: "/404",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-50">
        <div className="max-w-md w-full text-center px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-rose-500 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/">
              <Button className="w-full bg-rose-500 hover:bg-rose-600">
                Return to Homepage
              </Button>
            </Link>
            
            <Link href="/blog">
              <Button variant="outline" className="w-full border-rose-200 text-rose-700 hover:bg-rose-50">
                Browse Our Blog
              </Button>
            </Link>
            
            <Link href="/portfolio">
              <Button variant="outline" className="w-full border-rose-200 text-rose-700 hover:bg-rose-50">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

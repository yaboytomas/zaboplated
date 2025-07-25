"use client"

import { useState, useMemo } from "react"
import { Search, X, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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

interface BlogSearchProps {
  posts: BlogPost[]
  onFilteredPosts: (posts: BlogPost[]) => void
}

export function BlogSearch({ posts, onFilteredPosts }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const categories = ["All", "Menu Design", "Photography", "Social Media", "Branding", "Video Marketing"]

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    posts.forEach((post) => {
      if (post.tags) {
        post.tags.forEach((tag) => tags.add(tag))
      }
    })
    return Array.from(tags).sort()
  }, [posts])

  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) => post.tags && selectedTags.some((tag) => post.tags.includes(tag)))
    }

    return filtered
  }, [posts, searchTerm, selectedCategory, selectedTags])

  // Update parent component when filters change
  useMemo(() => {
    onFilteredPosts(filteredPosts)
  }, [filteredPosts, onFilteredPosts])

  const clearSearch = () => {
    setSearchTerm("")
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setSelectedTags([])
  }

  const hasActiveFilters = searchTerm || selectedCategory !== "All" || selectedTags.length > 0

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10 py-3 rounded-full border-rose-200 focus:border-rose-500 focus:ring-rose-500"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-6 py-2 transition-all duration-300 text-sm border-2 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg border-transparent"
                : "border-rose-200 text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:border-pink-300 bg-transparent"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Advanced Filters */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
            >
              <Filter className="h-4 w-4 mr-2" />
              Tags {selectedTags.length > 0 && `(${selectedTags.length})`}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 max-h-64 overflow-y-auto">
            {allTags.map((tag) => (
              <DropdownMenuItem
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer ${selectedTags.includes(tag) ? "bg-rose-50 text-rose-700" : ""}`}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{tag}</span>
                  {selectedTags.includes(tag) && <div className="w-2 h-2 bg-rose-500 rounded-full"></div>}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearAllFilters} className="text-gray-500 hover:text-gray-700 text-sm">
            Clear all filters
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {(selectedTags.length > 0 || searchTerm || selectedCategory !== "All") && (
        <div className="flex flex-wrap justify-center gap-2">
          {searchTerm && (
            <Badge variant="secondary" className="bg-rose-100 text-rose-700 border border-rose-200">
              Search: "{searchTerm}"
              <button onClick={clearSearch} className="ml-2 hover:text-rose-900">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 border border-purple-200">
              Category: {selectedCategory}
              <button onClick={() => setSelectedCategory("All")} className="ml-2 hover:text-purple-900">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-pink-100 text-pink-700 border border-pink-200">
              {tag}
              <button onClick={() => toggleTag(tag)} className="ml-2 hover:text-pink-900">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* Results Count */}
      <div className="text-center text-gray-600">
        {filteredPosts.length === posts.length ? (
          <span>Showing all {posts.length} articles</span>
        ) : (
          <span>
            Showing {filteredPosts.length} of {posts.length} articles
          </span>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { X, Heart, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
  tags: string[]
  results: string
  gradient: string
  fullDescription: string
  challenge: string
  solution: string
  outcome: string
  additionalImages?: string[]
}

interface PortfolioModalProps {
  item: PortfolioItem | null
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function PortfolioModal({ item, isOpen, onClose, onNext, onPrevious }: PortfolioModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !item) return null

  const allImages = [item.image, ...(item.additionalImages || [])]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 font-outfit">{item.title}</h2>
            <Badge className={`mt-2 bg-gradient-to-r ${item.gradient} text-white`}>{item.results}</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={onPrevious} className="rounded-full hover:bg-gray-100">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onNext} className="rounded-full hover:bg-gray-100">
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-gray-100">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)] overflow-hidden">
          {/* Image Section */}
          <div className="lg:w-2/3 relative bg-gray-50">
            <div className="relative h-64 lg:h-full">
              <img
                src={allImages[currentImageIndex] || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {allImages.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-lg"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-lg"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/3 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border border-rose-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-outfit">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{item.fullDescription}</p>
              </div>

              {/* Challenge */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-outfit">Challenge</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{item.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-outfit">Solution</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{item.solution}</p>
              </div>

              {/* Outcome */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-outfit">Outcome</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{item.outcome}</p>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  className={`w-full bg-gradient-to-r ${item.gradient} text-white hover:opacity-90 transition-opacity duration-300`}
                >
                  Start Your Project
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

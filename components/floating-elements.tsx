"use client"

import { useEffect, useState } from "react"
import { Sparkles, Heart, Star, Utensils } from "lucide-react"

export function FloatingElements() {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; icon: any; delay: number }>>([])

  useEffect(() => {
    const icons = [Sparkles, Heart, Star, Utensils]
    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: (i * 12 + 15) % 100,
      y: (i * 18 + 20) % 100,
      icon: icons[i % icons.length],
      delay: (i * 0.6) % 5,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => {
        const Icon = element.icon
        return (
          <div
            key={element.id}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <Icon className="w-8 h-8 text-rose-300" />
          </div>
        )
      })}
    </div>
  )
}

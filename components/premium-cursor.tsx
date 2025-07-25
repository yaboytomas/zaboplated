"use client"

import { useEffect, useState } from "react"

export function PremiumCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, .cursor-hover")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-rose-400 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isHovering ? 0.8 : 1})`,
        }}
      />
    </>
  )
}

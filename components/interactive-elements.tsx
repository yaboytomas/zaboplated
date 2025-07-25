"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Sparkles, Heart, Star, Utensils, Camera, Palette } from "lucide-react"

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      icon: any
    }>
  >([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const icons = [Sparkles, Heart, Star, Utensils, Camera, Palette]
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: ((i * 7 + 15) % 100) * (window.innerWidth / 100),
      y: ((i * 11 + 20) % 100) * (window.innerHeight / 100),
      size: 10 + (i % 10),
      opacity: 0.1 + (i % 3) * 0.1,
      speed: 1 + (i % 2),
      icon: icons[i % icons.length],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Mouse follower gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-rose-300/10 via-pink-300/10 to-purple-300/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated particles */}
      {particles.map((particle) => {
        const Icon = particle.icon
        return (
          <div
            key={particle.id}
            className="absolute animate-float-slow"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.speed + 3}s`,
              animationDelay: `${particle.id * 0.2}s`,
            }}
          >
            <Icon className="text-rose-300" style={{ width: particle.size, height: particle.size }} />
          </div>
        )
      })}
    </div>
  )
}

export function MagneticButton({ children, className = "", ...props }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * 0.15
    const deltaY = (e.clientY - centerY) * 0.15
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <button
      className={`transition-all duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.05 : 1})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  )
}

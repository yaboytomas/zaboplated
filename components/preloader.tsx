"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 10 + (prev % 5)
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-rose-50 via-white to-pink-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="absolute -inset-8 bg-gradient-to-r from-rose-400/20 via-pink-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative animate-float">
            <Image
              src="/images/zaboplated-logo.jpg"
              alt="ZaboPlated"
              width={200}
              height={100}
              className="h-20 w-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="font-outfit text-2xl font-bold text-gray-900 mb-2">
            Crafting Your
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>
          </h2>
          <p className="text-gray-600 font-inter">Preparing something delicious...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
            </div>
          </div>
          <div className="text-center mt-2 text-sm text-gray-500 font-inter">{Math.round(progress)}%</div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow opacity-20"
              style={{
                left: `${(i * 15 + 10) % 100}%`,
                top: `${(i * 20 + 15) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            >
              <div className="w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

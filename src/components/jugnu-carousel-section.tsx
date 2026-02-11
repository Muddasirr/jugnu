"use client"

import { useState, useEffect, useRef, useCallback } from "react"

export default function JugnuCarouselSection() {
  const baseSlides = [
    {
      id: 1,
      image: "/carousel1.png",
      alt: "Group of women in traditional clothing",
    },
    {
      id: 2,
      image: "/carousel2.png",
      alt: "Women in traditional headwear",
    },
    {
      id: 3,
      image: "/carousel3.png",
      alt: "Woman in maroon hijab",
    },
    {
      id: 4,
      image: "/carousel4.png",
      alt: "Portrait of woman",
    },
  ]

  // Triple the slides for seamless infinite looping
  const slides = [...baseSlides, ...baseSlides, ...baseSlides]
  const totalBase = baseSlides.length
  // Start at the beginning of the middle copy
  const [currentSlide, setCurrentSlide] = useState(totalBase)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Reset position without animation when reaching clone boundaries
  const handleTransitionEnd = useCallback(() => {
    if (currentSlide >= totalBase * 2) {
      setIsTransitioning(false)
      setCurrentSlide(totalBase)
    } else if (currentSlide < totalBase) {
      setIsTransitioning(false)
      setCurrentSlide(currentSlide + totalBase)
    }
  }, [currentSlide, totalBase])

  // Re-enable transition after a reset
  useEffect(() => {
    if (!isTransitioning) {
      // Use requestAnimationFrame to ensure the non-transition move has painted
      const id = requestAnimationFrame(() => {
        setIsTransitioning(true)
      })
      return () => cancelAnimationFrame(id)
    }
  }, [isTransitioning])

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(totalBase + index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1)
    setIsAutoPlay(false)
  }

  // Which base slide is active (for indicators)
  const activeBaseIndex = ((currentSlide % totalBase) + totalBase) % totalBase

  return (
    <section className="relative w-full bg-white py-16 px-6 md:py-24 md:px-12">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#AC1514]">FRAMES OF</span> <span className="text-black">THE JUGNU PROJECT</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative w-full">
              {/* Slides - 4 items visible at once */}
              <div
                ref={sliderRef}
                className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
                style={{
                  transform: `translateX(-${currentSlide * 25}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {slides.map((slide, index) => (
                  <div key={`${slide.id}-${index}`} className="w-1/4 flex-shrink-0 px-2">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {baseSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === activeBaseIndex ? "bg-red-600 w-3 h-3" : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

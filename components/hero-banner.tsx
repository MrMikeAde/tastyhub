"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import LocationModal from "@/components/location-modal"

const heroImages = [
  "/delicious-juicy-burger-with-cheese-and-lettuce.jpg",
  "/crispy-golden-french-fries-in-basket.jpg",
  "/fried-chicken-pieces-golden-and-crispy.jpg",
]

export default function HeroBanner() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleOrderClick = () => {
    setIsLocationModalOpen(true)
  }

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen md:h-screen flex items-center overflow-hidden mt-20 bg-gradient-to-br from-[#FFF8F5] to-white"
      >
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 opacity-10">
              <svg viewBox="0 0 24 24" fill="#E63946" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <div className="w-12 h-12 opacity-10">
              <svg viewBox="0 0 24 24" fill="#FFD166" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float">
            <div className="w-20 h-20 opacity-10">
              <svg viewBox="0 0 24 24" fill="#E63946" aria-hidden="true">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center md:text-left space-y-6 animate-slide-in-left order-2 md:order-1">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight text-balance drop-shadow-sm">
                  Freshly Made. Always Crunchy.
                </h1>
                <p className="text-lg md:text-xl text-[#555555] max-w-xl mx-auto md:mx-0 text-balance leading-relaxed">
                  Delicious meals prepared fresh, fast, and with love — delivered right to your door or ready for
                  pickup.
                </p>
              </div>

              <div className="flex justify-center md:justify-start pt-4">
                <Button
                  onClick={handleOrderClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[44px]"
                  aria-label="Order now"
                >
                  Order Now
                </Button>
              </div>
            </div>

            {/* Right side - Featured image carousel */}
            <div className="relative order-1 md:order-2 animate-slide-in-right">
              <div className="relative aspect-square md:aspect-auto md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=600&width=600&query=delicious fast food meal"}
                      alt={`TastyHub delicious food ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>

              {/* Image indicators */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                      index === currentImage ? "bg-primary w-6" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentImage}
                  >
                    <span className="sr-only">Slide {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Optional curved divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <LocationModal isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} />
    </>
  )
}

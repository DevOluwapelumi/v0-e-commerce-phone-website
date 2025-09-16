"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    subtitle: "Titanium. So strong. So light. So Pro.",
    description: "Experience the most advanced iPhone ever with A17 Pro chip and revolutionary camera system.",
    image: "/iphone-15-pro-max-titanium-premium-smartphone.jpg",
    cta: "Shop iPhone",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    subtitle: "Galaxy AI is here",
    description: "Unleash your creativity with the most powerful Galaxy smartphone featuring advanced AI capabilities.",
    image: "/samsung-galaxy-s24-ultra-black-premium-smartphone.jpg",
    cta: "Explore Galaxy",
  },
  {
    id: 3,
    title: "Google Pixel 8 Pro",
    subtitle: "The best of Google. Even more helpful.",
    description: "Capture stunning photos with Magic Eraser and enjoy the pure Android experience.",
    image: "/google-pixel-8-pro-camera-smartphone.jpg",
    cta: "Discover Pixel",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[80vh] overflow-hidden bg-gradient-to-br from-background to-muted">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold text-balance">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-primary font-semibold">{slide.subtitle}</p>
                <p className="text-lg text-muted-foreground max-w-lg text-pretty">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6">
                    {slide.cta}
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative animate-slide-in-left">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary" : "bg-background/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

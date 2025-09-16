import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductShowcase />
    </main>
  )
}

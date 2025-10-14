import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import MenuSection from "@/components/menu-section"
import OrderSteps from "@/components/order-steps"
import LocationSection from "@/components/location-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <MenuSection />
      <OrderSteps />
      <LocationSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}

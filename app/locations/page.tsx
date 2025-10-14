import Header from "@/components/header"
import LocationSection from "@/components/location-section"
import Footer from "@/components/footer"

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <LocationSection />
      </div>
      <Footer />
    </main>
  )
}

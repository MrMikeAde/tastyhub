import Header from "@/components/header"
import OrderSteps from "@/components/order-steps"
import Footer from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <OrderSteps />
      </div>
      <Footer />
    </main>
  )
}

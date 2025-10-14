import { UtensilsCrossed, ShoppingBag, Truck } from "lucide-react"

const steps = [
  {
    icon: UtensilsCrossed,
    title: "Choose Your Meal",
    description: "Browse our delicious menu and select your favorites",
  },
  {
    icon: ShoppingBag,
    title: "Place Your Order",
    description: "Add items to cart and complete your order",
  },
  {
    icon: Truck,
    title: "Get It Delivered",
    description: "Sit back and relax while we deliver to your door",
  },
]

export default function OrderSteps() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Three simple steps to satisfy your cravings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-4">{index + 1}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

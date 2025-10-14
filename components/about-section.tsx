import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At TastyHub Online, we believe that great food starts with great ingredients. Since our founding, we've
              been committed to serving freshly made, delicious fast food that never compromises on quality.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every burger, every piece of chicken, every side is prepared with care and attention to detail. We source
              locally when possible and ensure that every bite delivers the perfect crunch you crave.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              Learn More About Us
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/restaurant-kitchen-chef-preparing-fresh-food.jpg"
              alt="TastyHub Kitchen"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

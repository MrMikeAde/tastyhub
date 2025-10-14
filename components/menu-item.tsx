"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export default function MenuItem({ item }: { item: MenuItem }) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem({ ...item, quantity })

    toast({
      title: "Added to cart!",
      description: `${quantity}x ${item.name}`,
    })

    setTimeout(() => {
      setIsAdding(false)
      setQuantity(1)
    }, 500)
  }

  return (
    <article className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary" aria-label={`Price: ${item.price} Naira`}>
            ₦{item.price.toLocaleString()}
          </span>
          <div
            className="flex items-center space-x-2 bg-muted rounded-full px-3 py-1"
            role="group"
            aria-label="Quantity selector"
          >
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Decrease quantity"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" aria-hidden="true" />
            </button>
            <span className="font-semibold w-8 text-center" aria-live="polite" aria-atomic="true">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <Button
          onClick={handleAddToCart}
          className={`w-full bg-primary hover:bg-primary/90 text-white min-h-[44px] ${isAdding ? "animate-bounce-once" : ""}`}
          aria-label={`Add ${quantity} ${item.name} to cart`}
        >
          <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
          Add to Cart
        </Button>
      </div>
    </article>
  )
}

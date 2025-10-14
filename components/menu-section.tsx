"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { menuData } from "@/lib/menu-data"
import MenuItem from "@/components/menu-item"
import MenuItemSkeleton from "@/components/menu-item-skeleton"
import { Button } from "@/components/ui/button"

export default function MenuSection() {
  const [isLoading, setIsLoading] = useState(true)
  const displayedItems = menuData.slice(0, 6)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Explore our delicious selection of freshly made fast food favorites
          </p>
        </div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[...Array(6)].map((_, i) => (
              <MenuItemSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 min-h-[44px]"
              aria-label="View full menu"
            >
              See More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

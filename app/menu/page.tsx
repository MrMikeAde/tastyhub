"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MenuItem from "@/components/menu-item"
import MenuItemSkeleton from "@/components/menu-item-skeleton"
import { menuData } from "@/lib/menu-data"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  const categories = ["All", ...Array.from(new Set(menuData.map((item) => item.category)))]

  const filteredItems =
    selectedCategory === "All" ? menuData : menuData.filter((item) => item.category === selectedCategory)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [selectedCategory])

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Full Menu</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Browse our complete selection of delicious meals
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Menu categories">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all min-h-[44px] ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-muted text-foreground hover:bg-primary/10"
                  }`}
                  role="tab"
                  aria-selected={selectedCategory === category}
                  aria-controls="menu-items"
                >
                  {category}
                </button>
              ))}
            </div>

            <div id="menu-items" role="tabpanel">
              {isLoading ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {[...Array(8)].map((_, i) => (
                    <MenuItemSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              )}

              {!isLoading && filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No items found in this category</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

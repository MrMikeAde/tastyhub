"use client"

import type React from "react"

import { useState } from "react"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LocationModal from "@/components/location-modal"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCart()
  const { toast } = useToast()
  const [isCheckout, setIsCheckout] = useState(false)
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "cash",
  })

  if (!isOpen) return null

  const subtotal = getTotalPrice()
  const vat = subtotal * 0.075 // 7.5% VAT
  const total = subtotal + vat

  const handleProceedToCheckout = () => {
    const savedLocation = localStorage.getItem("TastyHub_location")
    if (!savedLocation) {
      toast({
        title: "Location Required",
        description: "Please select your delivery or pickup location first.",
        variant: "destructive",
      })
      setIsLocationModalOpen(true)
      return
    }
    setIsCheckout(true)
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()

    toast({
      title: "Order Received! 🎉",
      description: "Your delicious food is on its way!",
    })

    clearCart()
    setIsCheckout(false)
    setFormData({ name: "", email: "", phone: "", payment: "cash" })
    onClose()
  }

  const savedLocation = typeof window !== "undefined" ? localStorage.getItem("TastyHub_location") : null

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold">{isCheckout ? "Checkout" : "Your Cart"}</h2>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {!isCheckout ? (
              <>
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg mb-4">Your cart is empty</p>
                    <Button onClick={onClose} className="bg-primary hover:bg-primary/90 text-white">
                      Start Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 bg-muted p-4 rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.name}</h3>
                          <p className="text-primary font-bold">₦{item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-background rounded"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-background rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 hover:bg-background rounded-full transition-colors text-primary"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <p className="font-bold">₦{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <form onSubmit={handleCheckout} className="space-y-4">
                {savedLocation && (
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-1">Delivery/Pickup Location:</p>
                    <p className="text-sm text-muted-foreground">{savedLocation}</p>
                  </div>
                )}
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="080XXXXXXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="payment">Payment Method</Label>
                  <select
                    id="payment"
                    value={formData.payment}
                    onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="cash">Cash on Delivery</option>
                    <option value="card">Card Payment</option>
                    <option value="transfer">Bank Transfer</option>
                  </select>
                </div>
              </form>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 bg-muted">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>VAT (7.5%)</span>
                  <span>₦{vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">₦{total.toLocaleString()}</span>
                </div>
              </div>
              {!isCheckout ? (
                <Button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button type="button" onClick={() => setIsCheckout(false)} variant="outline" className="flex-1">
                    Back to Cart
                  </Button>
                  <Button onClick={handleCheckout} className="flex-1 bg-primary hover:bg-primary/90 text-white">
                    Confirm Order
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onLocationSaved={() => {
          setIsLocationModalOpen(false)
          setIsCheckout(true)
        }}
      />
    </>
  )
}

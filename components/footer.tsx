"use client"

import type React from "react"

import { useState } from "react"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function Footer() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Subscribed!",
      description: "Thanks for subscribing to our newsletter.",
    })
    setEmail("")
  }

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-4">TastyHub</h3>
            <p className="text-white/80 mb-4">Freshly Made. Always Tasty.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="text-white/80">Careers</li>
              <li className="text-white/80">Privacy Policy</li>
              <li className="text-white/80">Terms of Use</li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-white/80 hover:text-secondary transition-colors">
                  Burgers
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/80 hover:text-secondary transition-colors">
                  Chicken
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/80 hover:text-secondary transition-colors">
                  Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4 text-sm">Subscribe for exclusive deals and updates</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} TastyHub Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

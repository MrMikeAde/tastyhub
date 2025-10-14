"use client"

import { Mail, Phone, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 min-h-[44px] min-w-[44px]">
                    <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:hello@TastyHub.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@TastyHub.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 min-h-[44px] min-w-[44px]">
                    <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+2348031234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +234 803 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 min-h-[44px] min-w-[44px]">
                    <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Working Hours</p>
                    <p className="text-muted-foreground">Mon - Sun: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

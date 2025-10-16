import { Calendar, Phone, MoveRight } from "lucide-react"

export default function AnnouncementBar() {
  const whatsappUrl =
    "https://wa.me/2349131861818?text=Hello%20Mr%20Mike,%20I%20need%20your%20web%20development%20service"

  return (
    <div className="bg-primary text-white py-2 text-center text-sm animate-subtle-pulse">
      <div className="container mx-auto px-4 flex justify-center items-center gap-2">
        {/* Mobile view */}
        <div className="md:hidden flex items-center gap-2">
          <span className="text-xs">Need our Web development service?</span>
          <MoveRight className="w-4 h-4 flex-shrink-0" />
          <a
            href="https://cal.com/mrmike/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <Calendar className="w-5 h-5" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-2">
          <span>Need our Web development service?</span>
          <MoveRight className="w-4 h-4" />
          <a
            href="https://cal.com/mrmike/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-secondary transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book a meeting
          </a>
          <span>- or -</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-secondary transition-colors"
          >
            <Phone className="w-4 h-4" />
            Whatsapp
          </a>
        </div>
      </div>
    </div>
  )
}
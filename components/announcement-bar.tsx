import { Calendar, Phone } from "lucide-react"

export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-white py-2 text-center text-sm animate-subtle-pulse">
      <div className="container mx-auto px-4 flex justify-center items-center gap-4">
        <span>If you want our web development service,</span>
        <a
          href="https://cal.com/mrmike/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-secondary transition-colors"
        >
          <Calendar className="w-4 h-4" />
          Book a meeting
        </a>
        <span>or</span>
        <a
          href="https://wa.me/2349131861818"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-secondary transition-colors"
        >
          <Phone className="w-4 h-4" />
          Whatsapp (+234 913 186 1818)
        </a>
      </div>
    </div>
  )
}

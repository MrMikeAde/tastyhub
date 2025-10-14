import { MapPin, Phone } from "lucide-react"

const locations = [
  {
    city: "Lagos",
    address: "15 Obafemi Awolowo Way, Ikeja GRA, Lagos",
    phone: "+234 803 123 4567",
  },
  {
    city: "Ibadan, Oyo",
    address: "Bodija Market Road, Ibadan, Oyo State",
    phone: "+234 803 234 5678",
  },
  {
    city: "Abuja",
    address: "Plot 1234, Adetokunbo Ademola Crescent, Wuse 2, Abuja",
    phone: "+234 803 345 6789",
  },
]

export default function LocationSection() {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h2>
          <p className="text-lg text-muted-foreground">Visit us at any of our branches</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7234567890123!2d7.4234567890123!3d5.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDcnMjQuNCJOIDfCsDI1JzI0LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location List */}
          <div className="space-y-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">{location.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

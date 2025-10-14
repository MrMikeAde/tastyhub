"use client"

import { useState, useEffect, useRef } from "react"
import { X, MapPin, Truck, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { nigeriaData } from "@/lib/nigeria-data"

interface LocationModalProps {
  isOpen: boolean
  onClose: () => void
  onLocationSaved?: (location: string) => void
  initialType?: "delivery" | "pickup"
}

type DeliveryType = "delivery" | "pickup" | null

export default function LocationModal({ isOpen, onClose, onLocationSaved, initialType }: LocationModalProps) {
  const [step, setStep] = useState(1)
  const [deliveryType, setDeliveryType] = useState<DeliveryType>(null)
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedBranch, setSelectedBranch] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState("")
  const { toast } = useToast()

  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      if (initialType) {
        setStep(2)
        setDeliveryType(initialType)
      } else {
        setStep(1)
        setDeliveryType(null)
      }
      setSelectedState("")
      setSelectedCity("")
      setSelectedBranch("")
      setDeliveryAddress("")

      setTimeout(() => closeButtonRef.current?.focus(), 100)
    }
  }, [isOpen, initialType])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleDeliveryTypeSelect = (type: DeliveryType) => {
    setDeliveryType(type)
    setStep(2)
  }

  const handleStateSelect = (state: string) => {
    setSelectedState(state)
    setSelectedCity("")
    setStep(3)
  }

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setStep(4)
  }

  const handleConfirm = () => {
    let locationString = ""

    if (deliveryType === "pickup" && selectedBranch) {
      const branch = nigeriaData[selectedState]?.cities[selectedCity]?.branches.find((b) => b.name === selectedBranch)
      locationString = `Pickup: ${branch?.name}, ${selectedCity}`
    } else if (deliveryType === "delivery" && deliveryAddress) {
      locationString = `Delivery to: ${selectedCity}, ${selectedState}`
    }

    if (locationString) {
      localStorage.setItem("TastyHub_location", locationString)
      localStorage.setItem("TastyHub_delivery_type", deliveryType || "")
      localStorage.setItem("TastyHub_state", selectedState)
      localStorage.setItem("TastyHub_city", selectedCity)

      if (deliveryType === "pickup") {
        localStorage.setItem("TastyHub_branch", selectedBranch)
      } else {
        localStorage.setItem("TastyHub_address", deliveryAddress)
      }

      toast({
        title: "Location Saved!",
        description: locationString,
      })

      if (onLocationSaved) {
        onLocationSaved(locationString)
      }

      onClose()
    }
  }

  const cities = selectedState ? Object.keys(nigeriaData[selectedState]?.cities || {}) : []
  const branches = selectedState && selectedCity ? nigeriaData[selectedState]?.cities[selectedCity]?.branches || [] : []

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 id="location-modal-title" className="text-2xl font-bold">
              {step === 1
                ? "How would you like to receive your order?"
                : `${deliveryType === "delivery" ? "Delivery" : "Pickup"} - Select Your Location`}
            </h2>
            {step > 1 && (
              <div
                className="flex items-center gap-2 mt-2"
                role="progressbar"
                aria-valuenow={step - 1}
                aria-valuemin={1}
                aria-valuemax={3}
              >
                {[2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-muted"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            )}
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleDeliveryTypeSelect("delivery")}
                  className="p-8 border-2 border-muted hover:border-primary rounded-lg transition-all text-center group min-h-[44px]"
                  aria-label="Select delivery option"
                >
                  <Truck
                    className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold mb-2">Delivery</h3>
                  <p className="text-sm text-muted-foreground">Get your order delivered to your doorstep</p>
                </button>
                <button
                  onClick={() => handleDeliveryTypeSelect("pickup")}
                  className="p-8 border-2 border-muted hover:border-primary rounded-lg transition-all text-center group min-h-[44px]"
                  aria-label="Select pickup option"
                >
                  <Store
                    className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold mb-2">Pickup</h3>
                  <p className="text-sm text-muted-foreground">Pick up your order from our nearest branch</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select State */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Select Your State</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(nigeriaData).map((state) => (
                  <button
                    key={state}
                    onClick={() => handleStateSelect(state)}
                    className="p-4 border-2 border-muted hover:border-primary rounded-lg transition-all text-left font-medium min-h-[44px]"
                    aria-label={`Select ${state}`}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Select City */}
          {step === 3 && (
            <div className="space-y-4">
              <button
                onClick={() => setStep(2)}
                className="text-primary hover:underline mb-2 min-h-[44px]"
                aria-label="Go back to state selection"
              >
                ← Back to States
              </button>
              <h3 className="text-xl font-bold mb-4">Select Your City in {selectedState}</h3>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="p-4 border-2 border-muted hover:border-primary rounded-lg transition-all text-left font-medium min-h-[44px]"
                    aria-label={`Select ${city}`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Select Branch or Enter Address */}
          {step === 4 && deliveryType === "pickup" && (
            <div className="space-y-4">
              <button
                onClick={() => setStep(3)}
                className="text-primary hover:underline mb-2 min-h-[44px]"
                aria-label="Go back to city selection"
              >
                ← Back to Cities
              </button>
              <h3 className="text-xl font-bold mb-4">Select a Branch in {selectedCity}</h3>
              <div className="space-y-3">
                {branches.map((branch) => (
                  <button
                    key={branch.name}
                    onClick={() => setSelectedBranch(branch.name)}
                    className={`w-full p-4 border-2 rounded-lg transition-all text-left min-h-[44px] ${
                      selectedBranch === branch.name
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary"
                    }`}
                    aria-label={`Select ${branch.name}`}
                    aria-pressed={selectedBranch === branch.name}
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h4 className="font-bold mb-1">{branch.name}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{branch.address}</p>
                        <p className="text-sm text-primary font-medium">{branch.hours}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && deliveryType === "delivery" && (
            <div className="space-y-4">
              <button
                onClick={() => setStep(3)}
                className="text-primary hover:underline mb-2 min-h-[44px]"
                aria-label="Go back to city selection"
              >
                ← Back to Cities
              </button>
              <h3 className="text-xl font-bold mb-4">Enter Delivery Address</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="delivery-address" className="block text-sm font-medium mb-2">
                    Street Address
                  </label>
                  <input
                    id="delivery-address"
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="e.g., 123 Main Street, Apartment 4B"
                    className="w-full px-4 py-3 border-2 border-muted rounded-lg focus:border-primary focus:outline-none min-h-[44px]"
                    aria-required="true"
                  />
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Delivery Details:</p>
                  <p className="text-sm text-muted-foreground">Estimated delivery fee: ₦500 - ₦1,500</p>
                  <p className="text-sm text-muted-foreground">Estimated delivery time: 30-45 minutes</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {step === 4 && (
          <div className="border-t p-6 bg-muted">
            <Button
              onClick={handleConfirm}
              disabled={
                (deliveryType === "pickup" && !selectedBranch) ||
                (deliveryType === "delivery" && !deliveryAddress.trim())
              }
              className="w-full bg-primary hover:bg-primary/90 text-white min-h-[44px]"
              size="lg"
              aria-label="Confirm location selection"
            >
              Confirm Location
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

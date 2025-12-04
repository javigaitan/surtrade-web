"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappNumber = "5491112345678" // Replace with actual WhatsApp number
  const message = "Hola, me gustaría obtener más información sobre sus productos y servicios."

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg transition-all hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  )
}

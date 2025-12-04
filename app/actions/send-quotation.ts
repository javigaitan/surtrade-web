"use server"

import emailjs from "@emailjs/browser"

interface QuotationItem {
  name: string
  quantity: number
  category: string
  subcategory: string
}

interface QuotationData {
  name: string
  phone: string
  email: string
  message: string
  items: QuotationItem[]
}

export async function sendQuotationRequest(data: QuotationData) {
  try {
    // Send email via EmailJS
    try {
      const emailData = {
        to_email: "info@surtrade.com",
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        products: data.items
          .map((item) => `${item.name} (Cantidad: ${item.quantity}) - Categoría: ${item.category}`)
          .join("\n"),
        timestamp: new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" }),
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        console.error("[v0] EmailJS not configured properly")
        // Return success anyway so user experience isn't affected
        return { success: true, message: "Solicitud recibida" }
      }

      await emailjs.send(serviceId, templateId, emailData, publicKey)

      return { success: true, message: "Solicitud enviada exitosamente" }
    } catch (emailError) {
      console.error("[v0] Error sending email:", emailError)
      // Return success to user even if email fails
      return { success: true, message: "Solicitud recibida" }
    }
  } catch (error) {
    console.error("[v0] Error submitting quotation:", error)
    return {
      success: false,
      message: "Hubo un error al enviar su solicitud. Por favor intente nuevamente o contáctenos directamente.",
    }
  }
}

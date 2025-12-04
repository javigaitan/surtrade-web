import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/contexts/cart-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Surtrade y Co. | Soluciones de Comercio Internacional para PYMEs",
  description:
    "Sólida experiencia en comercio internacional, brindando soluciones integrales de importación para PYMEs argentinas. Especialistas en packaging, maquinaria y logística.",
  keywords:
    "Surtrade, importaciones, packaging, doypack, máquinas selladoras, logística, comercio internacional, PYMEs, Argentina",
  openGraph: {
    title: "Surtrade y Co. | Soluciones de Comercio Internacional",
    description:
      "Sólida experiencia en comercio internacional, brindando soluciones integrales de importación para PYMEs argentinas.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}

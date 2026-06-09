import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/context/CartContext"

export const metadata: Metadata = {
  title: {
    default: "Jamees Food | 100% Natural Frozen Treats & Snacks",
    template: "%s | Jamees Food",
  },
  description:
    "Experience the purity of nature with our handcrafted frozen treats and authentic snacks. Clean ingredients, timeless flavors for everyone.",
  keywords: ["jamees food", "natural snacks", "ice candy", "syrups", "UAE", "Kerala", "SipUp", "Karumuru"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-on-surface overflow-x-hidden selection:bg-strawberry-red selection:text-white antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

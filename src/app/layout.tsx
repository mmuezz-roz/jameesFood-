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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface overflow-x-hidden selection:bg-strawberry-red selection:text-white antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

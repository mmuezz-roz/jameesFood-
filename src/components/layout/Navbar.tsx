"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import CartSidebar from "@/components/cart/CartSidebar"

const NAV_LINKS = [
  { href: "/#ice-candy", label: "Ice Candy" },
  { href: "/#snacks", label: "Snacks" },
  { href: "/#syrups", label: "Syrups" },
  { href: "/#mashbere", label: "Mashbere" },
]

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] rounded-full bg-surface/80 backdrop-blur-2xl border border-white/40 shadow-xl z-50 flex justify-between items-center px-5 md:px-10 py-3.5 max-w-[1440px]">
        {/* Logo */}
        <Link className="flex items-center shrink-0" href="/">
          <img
            alt="Jamees Food Logo"
            className="h-9 w-auto"
            src="/jamees_logo.png.webp"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              className="text-on-surface-variant hover:text-strawberry-red transition-all font-semibold text-sm"
              href={l.href}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-strawberry-red hover:scale-110 transition-transform p-1"
            aria-label="Open cart"
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-mango-yellow text-white text-[9px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-5 bg-on-surface rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-5 bg-on-surface rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-on-surface rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        <CartSidebar />
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-[76px] left-1/2 -translate-x-1/2 w-[94%] max-w-sm z-40 md:hidden bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden">
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-on-surface font-semibold text-base px-5 py-4 rounded-2xl hover:bg-surface-container-low transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="border-t border-black/5 mt-2 pt-3 flex flex-col gap-2">
                <Link
                  href="/products"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center bg-strawberry-red text-white font-bold py-3.5 rounded-2xl hover:brightness-110 transition-all"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center text-on-surface font-bold py-3.5 rounded-2xl border border-outline/20 hover:bg-surface-container-low transition-all"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

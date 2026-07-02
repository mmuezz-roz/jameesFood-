"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import CartSidebar from "@/components/cart/CartSidebar"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { href: "/#ice-candy", label: "Ice Candy", icon: "ac_unit" },
  { href: "/#snacks", label: "Snacks", icon: "cookie" },
  { href: "/#syrups", label: "Syrups", icon: "water_drop" },
  { href: "/#mashbere", label: "Mashbere", icon: "restaurant" },
]

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 w-[94%] rounded-full bg-surface/80 backdrop-blur-xl border border-white/40 shadow-xl z-50 flex justify-between items-center px-5 md:px-10 xl:px-16 py-3.5 max-w-[1440px] transition-all duration-500 ease-in-out transform-gpu ${
          hidden ? "-top-32 opacity-0 pointer-events-none" : "top-4 opacity-100"
        }`}
      >
        {/* Logo */}
        <Link className="flex items-center shrink-0 hover:scale-105 transition-transform duration-300" href="/">
          <Image
            alt="Jamees Food Logo"
            className="h-9 w-auto"
            src="/jamees_logo.png.webp"
            width={120}
            height={36}
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div 
          className="hidden md:flex items-center space-x-2 relative" 
          onMouseLeave={() => setHoveredPath(null)}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onMouseEnter={() => setHoveredPath(l.href)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors z-10 ${
                hoveredPath === l.href ? "text-strawberry-red" : "text-on-surface-variant"
              }`}
            >
              {hoveredPath === l.href && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-strawberry-red/10 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-strawberry-red hover:scale-110 active:scale-95 transition-all p-2 rounded-full hover:bg-strawberry-red/10"
            aria-label="Open cart"
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-mango-yellow text-white text-[10px] font-bold min-w-[20px] h-[20px] flex items-center justify-center rounded-full ring-2 ring-white shadow-sm"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-full hover:bg-black/5 active:scale-95 transition-all"
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
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel — anchored left/right to avoid any overflow */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              className="fixed top-[96px] left-4 right-4 z-50 md:hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/60 overflow-hidden"
              style={{ maxHeight: "calc(100vh - 100px)" }}
            >
              {/* Nav links */}
              <div className="flex flex-col p-3 gap-1 overflow-y-auto">
                {NAV_LINKS.map((l, idx) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 w-full text-on-surface font-semibold text-base px-4 py-3.5 rounded-xl hover:bg-strawberry-red/10 hover:text-strawberry-red transition-all active:scale-[0.98]"
                    >
                      <span className="material-symbols-outlined text-xl opacity-60" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {l.icon}
                      </span>
                      {l.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider + CTA buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.18 }}
                  className="border-t border-black/8 mt-2 pt-3 flex flex-col gap-2"
                >
                  <Link
                    href="/products"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-strawberry-red text-white font-bold py-3.5 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-strawberry-red/25"
                  >
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
                    Shop Now
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full text-on-surface font-bold py-3.5 rounded-xl border border-black/10 hover:bg-black/5 active:scale-[0.98] transition-all"
                  >
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                    Our Story
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

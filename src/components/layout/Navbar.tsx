"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] rounded-full bg-surface/70 backdrop-blur-2xl border border-white/40 shadow-xl z-50 flex justify-between items-center px-10 py-4 max-w-[1440px]">
      <Link className="flex items-center" href="/">
        <img 
          alt="Jamees Food Logo" 
          className="h-10 w-auto" 
          src="https://lh3.googleusercontent.com/aida/AP1WRLvhAMhSM8CU_Zp4CibZl4tmOwdg5UHFY2fMlx4oKMTzX7sHXYiPJsUJja7Z_74SFV8hx25JYcn9gMuOIbciN2ITzuHGndDDrTMH6v2HKvi3sBHl0J50HJPVeoEwPXzrptpLTrUwKv0CULviBRtaanmC9tR8OKAVeSU5dxAgzt1IdwITrI4B_TyUgjeMJ25c5U-jkaGAB0FFsXW9VsKEo7dnS8gVEeuk1d30Ued5SS0hwWoc8T0saA-hoEEE" 
        />
      </Link>
      
      <div className="hidden md:flex items-center space-x-10">
        <Link className="text-strawberry-red font-bold text-base tracking-tight hover:opacity-80 transition-all" href="/#ice-candy">
          Ice Candy
        </Link>
        <Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-semibold text-base" href="/#snacks">
          Snacks
        </Link>
        <Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-semibold text-base" href="/#syrups">
          Syrups
        </Link>
        <Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-semibold text-base" href="/#mashbere">
          Mashbere
        </Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <button className="text-on-surface-variant hover:text-strawberry-red transition-all">
          <span className="material-symbols-outlined text-2xl">search</span>
        </button>
        <button className="relative text-strawberry-red hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
          <span className="absolute -top-1 -right-1 bg-mango-yellow text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
            3
          </span>
        </button>
      </div>
    </nav>
  )
}

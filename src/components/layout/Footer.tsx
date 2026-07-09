"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-16 lg:pt-24 pb-8 lg:pb-12 rounded-t-[3rem] md:rounded-t-[6rem] shadow-[0_-20px_50px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-20">
          
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-1">
            <Image 
              alt="Jamees Logo" 
              className="h-10 lg:h-12 w-auto mb-6 lg:mb-8" 
              src="/jamees_logo.png.webp" 
              width={160}
              height={48}
              style={{ width: "auto" }}
            />
            <p className="text-on-surface-variant text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 max-w-[280px] lg:max-w-none">
              UAE&apos;s favorite frozen treats since 2024. Handcrafted, 100% natural, and always wholesome. Shop Ice Candy, Sweets, and more.
            </p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 bg-surface-container-low rounded-full flex items-center justify-center text-strawberry-red hover:bg-strawberry-red hover:text-white transition-all shadow-sm" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h4 className="font-black text-sm lg:text-lg mb-6 lg:mb-8 uppercase tracking-widest text-on-surface">Explore</h4>
              <ul className="space-y-4 text-sm lg:text-base">
                <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/#ice-candy">Ice Candy</Link></li>
                <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/#snacks">Savory Snacks</Link></li>
                <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/#syrups">Natural Syrups</Link></li>
                <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/products">New Arrivals</Link></li>
              </ul>
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h4 className="font-black text-sm lg:text-lg mb-6 lg:mb-8 uppercase tracking-widest text-on-surface">Company</h4>
              <ul className="space-y-4 text-sm lg:text-base">
                <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/about">Our Story</Link></li>
                <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/#mashbere">Mashbere B2B</Link></li>
                <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/contact?type=retailer">Retail Partnership</Link></li>
                <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/faq">FAQ</Link></li>
                <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-1">
            <h4 className="font-black text-sm lg:text-lg mb-4 lg:mb-8 uppercase tracking-widest text-on-surface">Join Our Journey</h4>
            <p className="text-on-surface-variant mb-6 text-sm max-w-[280px] lg:max-w-none">Subscribe for new flavor drops and exclusive UAE offers.</p>
            <div className="relative w-full max-w-[320px] lg:max-w-none">
              <input 
                className="w-full bg-surface-container-low border-none rounded-full py-3 lg:py-4 px-6 text-sm focus:ring-2 focus:ring-strawberry-red/20 transition-all outline-none" 
                placeholder="Enter email" 
                type="email" 
              />
              <button className="absolute right-1.5 top-1.5 lg:right-2 lg:top-2 bg-strawberry-red text-white p-1.5 lg:p-2 rounded-full hover:scale-105 transition-all">
                <span className="material-symbols-outlined text-lg lg:text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
          
        </div>

        <div className="pt-8 lg:pt-12 border-t border-on-surface/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] lg:text-xs text-on-surface-variant/60 font-bold uppercase tracking-widest text-center">
          <p>© 2024 Jamees Food Trading. All rights reserved.</p>
          <div className="flex gap-6 lg:gap-8">
            <Link className="hover:text-strawberry-red transition-all" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-strawberry-red transition-all" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

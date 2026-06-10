"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-24 pb-12 rounded-t-[4rem] md:rounded-t-[6rem] shadow-[0_-20px_50px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          <div className="sm:col-span-2 lg:col-span-1">
            <Image 
              alt="Jamees Logo" 
              className="h-12 w-auto mb-8" 
              src="/jamees_logo.png.webp" 
              width={160}
              height={48}
              style={{ width: "auto" }}
            />
            <p className="text-on-surface-variant text-base leading-relaxed mb-8">
              UAE&apos;s favorite frozen treats since 2024. Handcrafted, 100% natural, and always wholesome. Shop Ice Candy, Sweets, and more.
            </p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 bg-surface-container-low rounded-full flex items-center justify-center text-strawberry-red hover:bg-strawberry-red hover:text-white transition-all shadow-sm" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-on-surface">Explore</h4>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/#ice-candy">Ice Candy</Link></li>
              <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/#snacks">Savory Snacks</Link></li>
              <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/#syrups">Natural Syrups</Link></li>
              <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/products">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-on-surface">Company</h4>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/about">Our Story</Link></li>
              <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/#mashbere">Mashbere B2B</Link></li>
              <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/contact?type=retailer">Retail Partnership</Link></li>
              <li><Link className="text-on-surface-variant hover:text-strawberry-red transition-all font-medium" href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-on-surface">Join Our Journey</h4>
            <p className="text-on-surface-variant mb-6 text-sm">Subscribe for new flavor drops and exclusive UAE offers.</p>
            <div className="relative">
              <input 
                className="w-full bg-surface-container-low border-none rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-strawberry-red/20 transition-all outline-none" 
                placeholder="Enter email" 
                type="email" 
              />
              <button className="absolute right-2 top-2 bg-strawberry-red text-white p-2 rounded-full hover:scale-105 transition-all">
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
          
        </div>

        <div className="pt-12 border-t border-on-surface/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-on-surface-variant/60 font-bold uppercase tracking-widest">
          <p>© 2024 Jamees Food Trading. All rights reserved.</p>
          <div className="flex gap-8">
            <Link className="hover:text-strawberry-red transition-all" href="#">Privacy Policy</Link>
            <Link className="hover:text-strawberry-red transition-all" href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

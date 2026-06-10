"use client"

import { useRef } from "react"
import Image from "next/image"

import pookee09 from "../app/public/09.jpg"
import popsicle14 from "../app/public/14.jpg"

export default function TrendingSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" })
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16 reveal gap-4">
        <div className="group cursor-default">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-strawberry-red opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-strawberry-red"></span>
            </span>
            <span className="text-strawberry-red text-[9px] font-bold tracking-[0.35em] uppercase transition-all duration-500 group-hover:tracking-[0.5em]">This Week</span>
          </div>
          <h2
            className="uppercase font-black text-3xl md:text-6xl tracking-tight leading-none text-on-surface transition-all duration-500 md:group-hover:tracking-widest"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Trending
          </h2>
          <div className="mt-2 h-[2px] w-0 group-hover:w-full bg-strawberry-red transition-all duration-700 ease-out rounded-full"></div>
        </div>
        <div className="hidden md:flex space-x-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border-2 border-strawberry-red/20 flex items-center justify-center hover:bg-strawberry-red hover:text-white transition-all active:scale-95"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full bg-strawberry-red text-white flex items-center justify-center hover:brightness-110 shadow-lg shadow-strawberry-red/20 transition-all active:scale-95"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      
      <div ref={scrollRef} className="flex overflow-x-auto gap-4 md:gap-6 pb-10 scrollbar-hide reveal -mx-4 px-4 snap-x snap-mandatory scroll-smooth">
        
        {/* Card 1 */}
        <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="relative block min-w-[75vw] sm:min-w-[300px] md:min-w-[340px] aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 snap-center border border-black/5 cursor-pointer shrink-0">
          {/* Background Image */}
          <Image 
            src={pookee09} 
            alt="Premium Pookee" 
            fill 
            sizes="(max-width: 768px) 100vw, 340px" 
            className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
          
          {/* Badge */}
          <span className="absolute top-5 left-5 bg-white text-strawberry-red text-[9px] md:text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg z-20">
            BEST SELLER
          </span>

          {/* Content Pinned to Bottom */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-20 transition-transform duration-500 md:translate-y-10 group-hover:translate-y-0">
            <span className="text-white/60 font-bold tracking-[0.25em] text-[9px] uppercase mb-1 drop-shadow-sm">Mashbere Original</span>
            <h4 className="uppercase text-2xl md:text-3xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Premium <span className="font-black">Pookee</span>
            </h4>
            <p className="text-sm text-white/80 mt-2 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Authentic Mashbere flavor crafted perfectly for the summer season.
            </p>
            
            {/* Action Button */}
            <div className="mt-5 w-full bg-strawberry-red text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] uppercase md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <span className="material-symbols-outlined text-base">shopping_cart</span> Shop Now
            </div>
          </div>
        </a>
        
        {/* Card 2 */}
        <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="relative block min-w-[75vw] sm:min-w-[300px] md:min-w-[340px] aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 snap-center border border-black/5 cursor-pointer shrink-0">
          {/* Background Image */}
          <Image 
            src={popsicle14} 
            alt="Mashbere Popsicle" 
            fill 
            sizes="(max-width: 768px) 100vw, 340px" 
            className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
          
          {/* Badge */}
          <span className="absolute top-5 left-5 bg-mango-yellow text-white text-[9px] md:text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg z-20">
            NEW ARRIVAL
          </span>

          {/* Content Pinned to Bottom */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-20 transition-transform duration-500 md:translate-y-10 group-hover:translate-y-0">
            <span className="text-white/60 font-bold tracking-[0.25em] text-[9px] uppercase mb-1 drop-shadow-sm">Mashbere Exclusive</span>
            <h4 className="uppercase text-2xl md:text-3xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Signature <span className="font-black">Popsicle</span>
            </h4>
            <p className="text-sm text-white/80 mt-2 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Real fruit extracts blended into a refreshing classic treat.
            </p>
            
            {/* Action Button */}
            <div className="mt-5 w-full bg-white text-on-surface font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] uppercase md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <span className="material-symbols-outlined text-base">shopping_cart</span> Shop Now
            </div>
          </div>
        </a>
        
      </div>
    </>
  )
}

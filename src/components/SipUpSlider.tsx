"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

import mashberePomoImg from "../../public/mashbere-pomo.png"
import mashbereLycheeImg from "../../public/mashbere-lychee.png"
import mashbereMangoImg from "../../public/mashbere-mango.png"

const sips = [
  { src: mashberePomoImg, alt: "Pomegranate SipUp" },
  { src: mashbereLycheeImg, alt: "Lychee SipUp" },
  { src: mashbereMangoImg, alt: "Mango SipUp" },
]

export default function SipUpSlider() {
  const [currentIndex, setCurrentIndex] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sips.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative flex items-end justify-center w-full h-[384px]">
      {/* --- Desktop View: Fanned Out (hidden on mobile) --- */}
      <div className="hidden md:flex relative w-full h-full justify-center items-end">
        {/* Left */}
        <div className="absolute left-[25%] -translate-x-1/2 bottom-0 h-80 w-32 group-hover:-translate-x-[60%] group-hover:-rotate-6 transition-all duration-500 drop-shadow-xl z-10">
          <Image src={mashberePomoImg} alt="Pomegranate SipUp" fill sizes="(max-width: 1200px) 50vw, 33vw" className="object-contain object-bottom" />
        </div>
        {/* Center */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-96 w-40 group-hover:-translate-y-4 transition-all duration-500 drop-shadow-2xl z-20">
          <Image src={mashbereLycheeImg} alt="Lychee SipUp" fill sizes="(max-width: 1200px) 50vw, 33vw" className="object-contain object-bottom" />
        </div>
        {/* Right */}
        <div className="absolute left-[75%] -translate-x-1/2 bottom-0 h-80 w-32 group-hover:-translate-x-[40%] group-hover:rotate-6 transition-all duration-500 drop-shadow-xl z-10">
          <Image src={mashbereMangoImg} alt="Mango SipUp" fill sizes="(max-width: 1200px) 50vw, 33vw" className="object-contain object-bottom" />
        </div>
      </div>

      {/* --- Mobile View: Auto Swiping (hidden on desktop) --- */}
      <div className="flex md:hidden relative w-full h-full justify-center items-end overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 bottom-6 h-[320px] w-48 drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] z-20"
          >
            <Image 
              src={sips[currentIndex].src} 
              alt={sips[currentIndex].alt} 
              fill 
              sizes="100vw" 
              className="object-contain object-bottom" 
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Progress Dots */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full shadow-sm border border-black/5">
          {sips.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-700 ease-out ${i === currentIndex ? 'w-5 bg-mango-yellow' : 'w-1.5 bg-black/15'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"

export default function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let intervalId: NodeJS.Timeout

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        // Only auto-scroll on mobile (where scrollWidth > clientWidth)
        if (container.scrollWidth > container.clientWidth) {
          const maxScrollLeft = container.scrollWidth - container.clientWidth
          
          if (container.scrollLeft >= maxScrollLeft - 10) {
            // Reached the end, smoothly go back to start
            container.scrollTo({ left: 0, behavior: "smooth" })
          } else {
            // Scroll to next snap point (approx width of one card + gap)
            container.scrollBy({ left: container.clientWidth * 0.85, behavior: "smooth" })
          }
        }
      }, 3500) // 3.5 seconds per slide
    }

    startAutoScroll()

    // Pause on interaction
    const pauseScroll = () => clearInterval(intervalId)
    const resumeScroll = () => {
      clearInterval(intervalId)
      startAutoScroll()
    }

    container.addEventListener('touchstart', pauseScroll, { passive: true })
    container.addEventListener('touchend', resumeScroll, { passive: true })
    container.addEventListener('mouseenter', pauseScroll)
    container.addEventListener('mouseleave', resumeScroll)

    return () => {
      clearInterval(intervalId)
      container.removeEventListener('touchstart', pauseScroll)
      container.removeEventListener('touchend', resumeScroll)
      container.removeEventListener('mouseenter', pauseScroll)
      container.removeEventListener('mouseleave', resumeScroll)
    }
  }, [])

  return (
    <div 
      ref={scrollRef}
      className="flex md:grid md:grid-cols-3 gap-5 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-8 md:pb-0 reveal"
    >
      {/* Testimonial 1 */}
      <div className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center bg-white p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-gray-50 hover:shadow-xl transition-all flex flex-col justify-between">
        <div>
          <div className="text-mango-yellow mb-6 flex">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed italic">&quot;Tastes just like the ice candy my lola used to make! That authentic fruit flavor takes me back to childhood. Perfect texture every single time.&quot;</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-strawberry-red/10 flex items-center justify-center font-black text-strawberry-red text-sm">K</div>
          <div>
            <span className="uppercase text-sm font-light tracking-wider" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Kevin <span className="font-black">M.</span></span>
          </div>
        </div>
      </div>
      
      {/* Testimonial 2 */}
      <div className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center bg-strawberry-red p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-strawberry-red/20 md:-translate-y-8 text-white flex flex-col justify-between">
        <div>
          <div className="text-white/40 mb-6 flex">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <p className="text-lg text-white/95 mb-10 leading-relaxed italic font-medium">&quot;My new afternoon pick-me-up! These ice candies melt perfectly. Love that they&apos;re portable, natural, and actually satisfy my sweet tooth without the guilt.&quot;</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-strawberry-red shadow-lg text-sm">S</div>
          <div>
            <span className="uppercase text-sm font-light tracking-wider" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Salama <span className="font-black">A.</span></span>
          </div>
        </div>
      </div>
      
      {/* Testimonial 3 */}
      <div className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center bg-white p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-gray-50 hover:shadow-xl transition-all flex flex-col justify-between">
        <div>
          <div className="text-mango-yellow mb-6 flex">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed italic">&quot;Finally, a frozen treat I feel good about giving my kids! No artificial junk, just real fruit flavors they adore. Mango is our absolute favorite!&quot;</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-strawberry-red/10 flex items-center justify-center font-black text-strawberry-red text-sm">H</div>
          <div>
            <span className="uppercase text-sm font-light tracking-wider" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Hessa <span className="font-black">R.</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"

const ITEMS = [
  "100% Natural",
  "UAE & Kerala",
  "No Preservatives",
  "Farm Fresh",
  "Guilt-Free Joy",
  "Real Fruit Flavours",
  "Family Crafted",
  "Bold Flavors",
]

// Duplicate for seamless looping
const ROW1 = [...ITEMS, ...ITEMS, ...ITEMS]
const ROW2 = [...ITEMS, ...ITEMS, ...ITEMS]

const Dot = () => (
  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A000] flex-shrink-0 mx-6" />
)

export default function ValuesStrip() {
  const [paused, setPaused] = useState(false)

  return (
    <section
      className="bg-[#111010] py-4 overflow-hidden border-y border-[#111010] select-none cursor-pointer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Brand values"
    >
      {/* Row 1 — scrolls left */}
      <div className="flex items-center mb-2">
        <div
          className="flex items-center animate-marquee-left whitespace-nowrap"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {ROW1.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-display font-medium text-[13px] text-[#FAFAF8]/80 uppercase tracking-[0.12em] whitespace-nowrap">
                {item}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (opposite direction) */}
      <div className="flex items-center">
        <div
          className="flex items-center animate-marquee-right whitespace-nowrap"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {ROW2.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-display font-medium text-[13px] text-[#E8A000]/70 uppercase tracking-[0.12em] whitespace-nowrap">
                {item}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

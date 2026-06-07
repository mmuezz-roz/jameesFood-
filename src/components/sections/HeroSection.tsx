"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

const WORDS = ["SipUp", "Karumuru", "Ice Candy", "Syrups"]

const STATS = [
  { value: "100%", label: "Natural" },
  { value: "3+",   label: "Ranges" },
  { value: "UAE",  label: "& Kerala" },
]

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center bg-[#FAFAF8] overflow-hidden"
    >
      {/* Subtle warm radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E8A000]/[0.08] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1BBFA3]/[0.06] blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="tag bg-[#E8A000]/12 text-[#B87A00] w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A000] animate-pulse" />
              100% Natural · UAE &amp; Kerala
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-[#111010] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
            >
              Taste the joy
              <br />
              <span className="text-[#E8A000]">of{" "}
                <span className="relative inline-block" style={{ minWidth: "4.5ch" }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-110%", opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block"
                    >
                      {WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
              <br />
              <span>Nature.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#111010]/55 text-lg leading-relaxed max-w-md font-sans"
            >
              Bold flavors, guilt-free joy — rooted in local farms, crafted for families across the UAE and Kerala.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link id="hero-explore-cta" href="/products" className="btn btn-primary">
                Explore Products <ArrowRight size={14} />
              </Link>
              <Link id="hero-story-cta" href="/about" className="btn btn-outline">
                Our Story
              </Link>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-8 pt-2"
            >
              {STATS.map((s, i) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-[#E8A000] text-xl">{s.value}</div>
                  <div className="text-[11px] font-medium uppercase tracking-widest text-[#111010]/40">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Large gold circle */}
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[#E8A000]/15" />
              <div className="absolute inset-4 rounded-full border border-[#E8A000]/10" />

              {/* Main circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#F2EDE4] via-[#E8A000]/10 to-[#F2EDE4] flex items-center justify-center shadow-[0_24px_80px_rgba(232,160,0,0.18)]">
                <div className="flex flex-col items-center gap-3 text-center">
                  <span className="text-[80px] md:text-[100px] leading-none select-none">🥤</span>
                  <span className="font-display font-semibold text-[#111010]/30 text-[10px] tracking-[0.2em] uppercase">
                    SipUp · Karumuru · Syrups
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 md:top-4 md:-right-8 card px-4 py-2.5 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1BBFA3]" />
                  <span className="font-display font-semibold text-[#111010] text-xs">100% Natural</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-3 -left-2 md:bottom-6 md:-left-10 card px-4 py-2.5 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">🌿</span>
                  <span className="font-display font-semibold text-[#111010] text-xs">Guilt-Free Joy</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-1/2 -right-4 md:-right-12 card px-3.5 py-2 shadow-md"
              >
                <span className="font-display font-semibold text-[#E8A000] text-xs">Farm Fresh 🌾</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#111010]/25"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}

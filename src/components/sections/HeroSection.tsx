"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import heroBg from "../../../public/hero-bg.webp"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

const WORDS = ["SipUp", "Karumuru", "Ice Candy", "Syrups"]

const STATS = [
  { value: "100%", label: "Natural" },
  { value: "3+",   label: "Ranges" },
  { value: "UAE",  label: "& Kerala" },
]

// Split a sentence into individual word spans for staggered animation
function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ")
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden leading-[1.1]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00a0"}
        </span>
      ))}
    </>
  )
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax scroll for background
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

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
      {/* Background Layer with parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <Image 
            src={heroBg} 
            alt="Hero Background" 
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            priority
            placeholder="blur"
            className="object-cover object-center scale-110"
          />
        </motion.div>
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-2xl">

          {/* Left: Text */}
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

            {/* Headline — word-by-word cascade */}
            <h1
              className="font-display font-bold text-[#111010] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
            >
              <WordReveal text="Taste the joy" delay={0.05} />
              <br />
              <span className="text-[#E8A000]">
                <WordReveal text="of" delay={0.2} />
                {" "}
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
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  Nature.
                </motion.span>
              </span>
            </h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-[#111010]/55 text-lg leading-relaxed max-w-md font-sans"
            >
              Bold flavors, guilt-free joy — rooted in local farms, crafted for families across the UAE and Kerala.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <Link id="hero-explore-cta" href="/products" className="btn btn-primary w-full sm:w-auto justify-center">
                Shop Now <ArrowRight size={14} />
              </Link>
              <Link id="hero-story-cta" href="/about" className="btn btn-outline w-full sm:w-auto justify-center">
                Our Story
              </Link>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex items-center gap-8 pt-2"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                >
                  <div className="font-display font-bold text-[#E8A000] text-xl">{s.value}</div>
                  <div className="text-[11px] font-medium uppercase tracking-widest text-[#111010]/40">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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

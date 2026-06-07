"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const PILLARS = [
  {
    id: "frozen",
    emoji: "❄️",
    label: "Frozen Treats",
    description: "Premium frozen desserts for retail shelves and food service.",
  },
  {
    id: "equipment",
    emoji: "🏪",
    label: "Commercial Equipment",
    description: "Dispensers, freezers, and machinery for modern food businesses.",
  },
  {
    id: "pokees",
    emoji: "🥤",
    label: "Pokees & Beverages",
    description: "Ready-to-stock beverages and novelty treats at trade volume.",
  },
]

export default function MashbereSection() {
  const ref      = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      id="mashbere"
      className="py-20 bg-[#111010] overflow-hidden relative"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #E8A000 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#E8A000]/10 blur-[60px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E8A000]/60 mb-3"
          >
            Our Trade Family
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-[#FAFAF8] leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Mashbere
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#FAFAF8]/45 text-base leading-relaxed"
          >
            Frozen treats, beverages &amp; commercial equipment — crafted for retailers and businesses across the UAE.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
              className="group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-[#E8A000]/20 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{p.emoji}</span>
              <h4 className="font-display font-semibold text-[#FAFAF8] text-base mb-2">{p.label}</h4>
              <p className="text-sm text-[#FAFAF8]/40 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start gap-3"
        >
          <Link
            id="mashbere-visit-cta"
            href="https://mashbere.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Mashbere <ArrowUpRight size={14} />
          </Link>
          <Link
            id="mashbere-retailer-cta"
            href="/contact?type=retailer"
            className="btn"
            style={{ border: "2px solid rgba(255,255,255,0.15)", color: "rgba(250,250,248,0.7)" }}
          >
            Retailer Enquiry
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

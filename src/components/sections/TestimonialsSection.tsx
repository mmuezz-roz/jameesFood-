"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Nair",
    location: "Dubai, UAE",
    quote:
      "My kids absolutely love the SipUp mango ice candy! Finally a treat I can feel good about giving them — no artificial colours, just real fruit flavour.",
    rating: 5,
    emoji: "🧊",
    accent: "#1BBFA3",
  },
  {
    id: 2,
    name: "Rajan Menon",
    location: "Kochi, Kerala",
    quote:
      "The Karumuru snacks remind me of homemade chakli but lighter and crispier. Genuinely addictive — I keep a bag on my desk every week.",
    rating: 5,
    emoji: "🌾",
    accent: "#C2522D",
  },
  {
    id: 3,
    name: "Fatima Al Sayed",
    location: "Abu Dhabi, UAE",
    quote:
      "The rose syrup is incredible in lemonade. I've been looking for something this authentic for years. Jamees Food is now a permanent fixture in my kitchen.",
    rating: 5,
    emoji: "🍯",
    accent: "#E8A000",
  },
]

function TestimonialCard({ t, index, isInView }: { t: typeof TESTIMONIALS[0]; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-2xl p-6 border border-[#111010]/[0.06] flex flex-col gap-4 overflow-hidden group hover:shadow-[0_12px_40px_rgba(17,16,16,0.1)] transition-shadow duration-300"
    >
      {/* Shimmer sweep on reveal */}
      {isInView && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%", opacity: 1 }}
          animate={{ x: "200%", opacity: 0.6 }}
          transition={{ duration: 0.9, delay: index * 0.12 + 0.1, ease: "easeOut" }}
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${t.accent}18 40%, ${t.accent}30 50%, ${t.accent}18 60%, transparent 100%)`,
          }}
        />
      )}

      {/* Subtle color border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1.5px ${t.accent}30` }}
      />

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: t.rating }).map((_, si) => (
          <motion.span
            key={si}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.12 + 0.3 + si * 0.06, type: "spring", stiffness: 400 }}
          >
            <Star size={12} className="fill-[#E8A000] text-[#E8A000]" />
          </motion.span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-[#111010]/65 leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#111010]/[0.05]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-base flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${t.accent}18` }}
        >
          {t.emoji}
        </div>
        <div>
          <div className="font-display font-semibold text-[#111010] text-sm">{t.name}</div>
          <div className="text-[11px] text-[#111010]/40">{t.location}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const ref      = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="testimonials" className="py-20 bg-[#F2EDE4]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111010]/40 mb-2">
            What people say
          </p>
          <h2
            className="font-display font-bold text-[#111010] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Loved by families
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

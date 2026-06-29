"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Category } from "@/lib/supabase/types"
import { categoryPanelUrl } from "@/lib/cloudinary"

interface CategoryShowcaseProps {
  categories: Category[]
}

const DEFAULTS = [
  {
    id: "1",
    name: "Ice Candy",
    slug: "ice-candy",
    description: "Tropical, refreshing, and perfectly natural. Our SipUp ice candies burst with real fruit flavours — mango, lychee, watermelon, and more.",
    color_theme: "#1BBFA3",
    hero_public_id: null,
    emoji: "🧊",
    tagline: "Cool. Natural. Irresistible.",
  },
  {
    id: "2",
    name: "Karumuru Snacks",
    slug: "snacks",
    description: "Crispy, guilt-free snacks rooted in traditional Kerala recipes. Made with whole grains and natural seasonings for bold, satisfying crunch.",
    color_theme: "#C2522D",
    hero_public_id: null,
    emoji: "🌾",
    tagline: "Crunch with conscience.",
  },
  {
    id: "3",
    name: "Syrups",
    slug: "syrups",
    description: "Artisanal syrups inspired by Kerala — rose, tamarind, ginger, and kokum. Perfect in drinks, desserts, and mocktails.",
    color_theme: "#E8A000",
    hero_public_id: null,
    emoji: "🍯",
    tagline: "Pour in the tradition.",
  },
]

export default function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  const displayCats =
    categories.length >= 3
      ? categories.map((c, i) => ({ ...DEFAULTS[i % 3], ...c }))
      : DEFAULTS

  return (
    <section className="py-20 bg-[#F2EDE4]" id="categories">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111010]/40 mb-2">Browse by range</p>
        <h2
          className="font-display font-bold text-[#111010] leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
        >
          Our Collections
        </h2>
      </div>

      {/* 3-column grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {displayCats.map((cat, i) => (
          <CategoryCard key={cat.id} cat={cat as any} index={i} />
        ))}
      </div>
    </section>
  )
}

function CategoryCard({
  cat,
  index,
}: {
  cat: typeof DEFAULTS[0] & Partial<Category>
  index: number
}) {
  const ref     = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  // 3D tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? `0 30px 70px rgba(17,16,16,0.14), 0 0 0 1px ${cat.color_theme}20`
            : "0 2px 12px rgba(17,16,16,0.06)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="group relative bg-white rounded-3xl overflow-hidden border border-[#111010]/[0.06] transition-colors duration-400"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Colour top panel */}
        <div
          className="relative h-52 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: `${cat.color_theme}18` }}
        >
          {/* Animated background fill on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundColor: `${cat.color_theme}28` }}
          />

          {cat.hero_public_id ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={categoryPanelUrl(cat.hero_public_id)}
              alt={cat.name}
              className="w-32 h-32 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <motion.span
              className="text-[90px] leading-none select-none drop-shadow-lg"
              animate={isHovered ? { scale: 1.15, rotate: [0, -4, 4, 0] } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {cat.emoji}
            </motion.span>
          )}
        </div>

        {/* Text */}
        <div className="p-6">
          {/* Category badge */}
          <span
            className="tag mb-3"
            style={{ backgroundColor: `${cat.color_theme}18`, color: cat.color_theme }}
          >
            {cat.name}
          </span>

          <h3 className="font-display font-bold text-[#111010] text-xl mb-2 leading-tight">
            {cat.tagline}
          </h3>
          <p className="text-sm text-[#111010]/55 leading-relaxed mb-5">
            {cat.description}
          </p>

          <Link
            href={`/products?category=${cat.slug}`}
            id={`category-cta-${cat.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-display font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: cat.color_theme }}
          >
            Explore <ArrowRight size={13} />
          </Link>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ backgroundColor: cat.color_theme }}
        />
      </motion.div>
    </motion.div>
  )
}

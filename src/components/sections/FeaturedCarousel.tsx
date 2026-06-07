"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { ProductWithCategory } from "@/lib/supabase/types"
import { productCardUrl } from "@/lib/cloudinary"

interface FeaturedCarouselProps {
  products: ProductWithCategory[]
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  "ice-candy": { bg: "#1BBFA3/10", text: "#0d8f7c", dot: "#1BBFA3" },
  snacks:      { bg: "#C2522D/10", text: "#8b3820", dot: "#C2522D" },
  syrups:      { bg: "#E8A000/12", text: "#B87A00", dot: "#E8A000" },
}

const FALLBACK: ProductWithCategory[] = [
  { id: "1", name: "Mango SipUp",   slug: "mango-sipup",   tagline: "Tropical mango ice candy",  dietary_tags: ["vegan"],        categories: { slug: "ice-candy", name: "Ice Candy" } } as unknown as ProductWithCategory,
  { id: "2", name: "Karumuru Mix",  slug: "karumuru-mix",  tagline: "Crispy snack medley",        dietary_tags: ["gluten-free"], categories: { slug: "snacks",    name: "Snacks"    } } as unknown as ProductWithCategory,
  { id: "3", name: "Rose Syrup",    slug: "rose-syrup",    tagline: "Classic Kerala rose",        dietary_tags: [],              categories: { slug: "syrups",    name: "Syrups"    } } as unknown as ProductWithCategory,
  { id: "4", name: "Lychee SipUp",  slug: "lychee-sipup",  tagline: "Sweet lychee bliss",         dietary_tags: ["vegan"],        categories: { slug: "ice-candy", name: "Ice Candy" } } as unknown as ProductWithCategory,
  { id: "5", name: "Ginger Syrup",  slug: "ginger-syrup",  tagline: "Warm, bold ginger",          dietary_tags: [],              categories: { slug: "syrups",    name: "Syrups"    } } as unknown as ProductWithCategory,
]

const EMOJIS: Record<string, string> = {
  "ice-candy": "🧊",
  snacks:      "🌾",
  syrups:      "🍯",
}

export default function FeaturedCarousel({ products }: FeaturedCarouselProps) {
  const ref      = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX]         = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    trackRef.current.scrollLeft = scrollLeft - (e.pageX - trackRef.current.offsetLeft - startX)
  }
  const stopDrag = () => setIsDragging(false)

  const list = products.length > 0 ? products : FALLBACK

  return (
    <section ref={ref} className="py-20 bg-[#FAFAF8] overflow-hidden" id="featured">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-10 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111010]/40 mb-1.5">Fan favourites</p>
          <h2 className="font-display font-bold text-[#111010] leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
            Featured Products
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-display font-semibold text-[#E8A000] hover:gap-3 transition-all duration-200"
          >
            View all <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* Drag-scroll track */}
      <div
        ref={trackRef}
        id="featured-carousel-track"
        className={`flex gap-4 overflow-x-auto px-6 pb-3 scrollbar-none select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {list.map((product, i) => {
          const catSlug = (product as unknown as { categories?: { slug: string } }).categories?.slug ?? "snacks"
          const catName = (product as unknown as { categories?: { name: string } }).categories?.name ?? "Product"
          const palette = CATEGORY_COLORS[catSlug] ?? CATEGORY_COLORS.snacks

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-none w-56 md:w-64 group"
            >
              <Link href={`/products/${product.slug}`} className="block">
                {/* Image area */}
                <div
                  className="relative rounded-2xl overflow-hidden mb-3.5"
                  style={{ aspectRatio: "3/4" }}
                >
                  {product.image_public_id ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={productCardUrl(product.image_public_id)}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-[1.03] transition-transform duration-500"
                      style={{ backgroundColor: `${palette.dot}15` }}
                    >
                      {EMOJIS[catSlug] ?? "🍃"}
                    </div>
                  )}

                  {/* Category chip */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="tag text-[10px]"
                      style={{ backgroundColor: `${palette.dot}20`, color: palette.dot }}
                    >
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: palette.dot }} />
                      {catName}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#111010]/0 group-hover:bg-[#111010]/30 transition-colors duration-300 flex items-end p-4">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 text-white font-display font-semibold text-xs">
                      View product <ArrowRight size={12} />
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-0.5">
                  <h3 className="font-display font-semibold text-[#111010] text-base leading-snug group-hover:text-[#E8A000] transition-colors duration-200">
                    {product.name}
                  </h3>
                  {product.tagline && (
                    <p className="text-sm text-[#111010]/45 mt-0.5 leading-snug">{product.tagline}</p>
                  )}
                  {product.dietary_tags && product.dietary_tags.length > 0 && (
                    <div className="flex gap-1.5 mt-2 flex-wrap">
                      {product.dietary_tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] bg-[#111010]/[0.06] text-[#111010]/50 rounded-full px-2 py-0.5 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden px-6 mt-8">
        <Link href="/products" className="btn btn-outline-gold w-full justify-center">
          View all products <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}

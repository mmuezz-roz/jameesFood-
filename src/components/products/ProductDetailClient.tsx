"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ChevronDown, ChevronUp, ArrowRight, Leaf } from "lucide-react"
import type { ProductWithCategory } from "@/lib/supabase/types"
import { productCardUrl, cloudinaryUrl } from "@/lib/cloudinary"

const WA_NUMBER = "971502994974"

const CATEGORY_COLORS: Record<string, string> = {
  "ice-candy": "#1BBFA3",
  snacks:      "#C2522D",
  syrups:      "#E8A000",
}
const EMOJIS: Record<string, string> = {
  "ice-candy": "🧊",
  snacks:      "🌾",
  syrups:      "🍯",
}

interface Props {
  product: ProductWithCategory
  related: ProductWithCategory[]
}

export default function ProductDetailClient({ product, related }: Props) {
  const [activeImage,   setActiveImage]   = useState(0)
  const [nutritionOpen, setNutritionOpen] = useState(false)

  const catSlug    = (product as unknown as { categories?: { slug: string } }).categories?.slug ?? "snacks"
  const catName    = (product as unknown as { categories?: { name: string } }).categories?.name ?? "Product"
  const accent     = CATEGORY_COLORS[catSlug] ?? "#E8A000"

  const allImages  = [product.image_public_id, ...(product.gallery_public_ids ?? [])].filter(Boolean) as string[]
  const waLink     = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in ${product.name} from Jamees Food. Can you help me?`)}`
  const ingredients = (product.ingredients as { name: string; highlight?: boolean }[] | null) ?? []
  const nutrition   = product.nutritional_info as Record<string, string | number> | null

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24">
      {/* ── Main product grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-10">

        {/* Gallery */}
        <div className="flex flex-col gap-3">
          {/* Main image */}
          <div
            className="relative rounded-2xl overflow-hidden bg-white border border-[#111010]/[0.06]"
            style={{ aspectRatio: "4/5" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full"
              >
                {allImages[activeImage] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cloudinaryUrl(allImages[activeImage], { width: 800, height: 1000, crop: "fill" })}
                    alt={`${product.name} — image ${activeImage + 1}`}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-[120px]"
                    style={{ backgroundColor: `${accent}12` }}
                  >
                    {EMOJIS[catSlug] ?? "🍃"}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex gap-2.5">
              {allImages.map((id, i) => (
                <button
                  key={i}
                  id={`gallery-thumb-${i}`}
                  onClick={() => setActiveImage(i)}
                  className="w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200"
                  style={{ borderColor: i === activeImage ? accent : "transparent" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={productCardUrl(id)} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="flex flex-col gap-6">
          {/* Category badge */}
          <span
            className="tag w-fit"
            style={{ backgroundColor: `${accent}18`, color: accent }}
          >
            {catName}
          </span>

          {/* Name + tagline */}
          <div>
            <h1
              className="font-display font-bold text-[#111010] leading-tight mb-2"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {product.name}
            </h1>
            {product.tagline && (
              <p className="text-[#111010]/55 text-lg leading-relaxed">{product.tagline}</p>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-[#111010]/65 leading-relaxed text-sm border-t border-[#111010]/[0.06] pt-5">
              {product.description}
            </p>
          )}

          {/* Dietary tags */}
          {product.dietary_tags && product.dietary_tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {product.dietary_tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#1BBFA3]/10 text-[#0d8f7c] px-3 py-1.5 rounded-full"
                >
                  <Leaf size={11} /> {tag}
                </span>
              ))}
            </div>
          )}

          {/* WhatsApp CTA */}
          <a
            id="whatsapp-enquire-cta"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-display font-bold text-base px-7 py-4 rounded-2xl hover:bg-[#1fba59] hover:shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle size={20} />
            Enquire via WhatsApp
          </a>

          <p className="text-[11px] text-[#111010]/35 text-center -mt-2">
            No prices — we&apos;ll help you find this product near you or arrange delivery.
          </p>

          {/* Ingredients */}
          {ingredients.length > 0 && (
            <div className="bg-[#F2EDE4] rounded-2xl p-5 border border-[#111010]/[0.05]">
              <h3 className="font-display font-semibold text-[#111010] mb-3 flex items-center gap-2 text-sm">
                <Leaf size={14} className="text-[#1BBFA3]" /> Ingredients
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={
                      ing.highlight
                        ? { backgroundColor: `${accent}20`, color: accent }
                        : { backgroundColor: "rgba(17,16,16,0.07)", color: "rgba(17,16,16,0.65)" }
                    }
                  >
                    {ing.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Nutrition accordion */}
          {nutrition && Object.keys(nutrition).length > 0 && (
            <div className="border border-[#111010]/10 rounded-2xl overflow-hidden">
              <button
                id="nutrition-accordion"
                onClick={() => setNutritionOpen(!nutritionOpen)}
                className="w-full flex items-center justify-between p-5 font-display font-semibold text-[#111010] text-sm hover:bg-[#111010]/[0.03] transition-colors"
              >
                Nutritional Information
                {nutritionOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <AnimatePresence>
                {nutritionOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 grid grid-cols-2 gap-2">
                      {Object.entries(nutrition).map(([key, val]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between bg-[#FAFAF8] rounded-xl px-4 py-2.5 border border-[#111010]/[0.05]"
                        >
                          <span className="text-xs text-[#111010]/55 capitalize">{key}</span>
                          <span className="font-display font-semibold text-[#111010] text-xs">{String(val)}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <div className="mt-16 pt-12 border-t border-[#111010]/[0.07]">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111010]/35 mb-1.5">More like this</p>
              <h2 className="font-display font-bold text-[#111010] text-2xl">Related Products</h2>
            </div>
            <Link
              href={`/products?category=${catSlug}`}
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-display font-semibold text-[#E8A000] hover:gap-3 transition-all duration-200"
            >
              View all {catName} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((rel) => {
              const relCat   = (rel as unknown as { categories?: { slug: string } }).categories?.slug ?? "snacks"
              const relAccent = CATEGORY_COLORS[relCat] ?? "#E8A000"
              return (
                <Link key={rel.id} href={`/products/${rel.slug}`} className="group">
                  <div
                    className="rounded-2xl overflow-hidden mb-2.5"
                    style={{ aspectRatio: "3/4" }}
                  >
                    {rel.image_public_id ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={productCardUrl(rel.image_public_id)}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundColor: `${relAccent}14` }}
                      >
                        {EMOJIS[relCat] ?? "🍃"}
                      </div>
                    )}
                  </div>
                  <h4 className="font-display font-semibold text-[#111010] text-sm group-hover:text-[#E8A000] transition-colors duration-200">
                    {rel.name}
                  </h4>
                  {rel.tagline && (
                    <p className="text-xs text-[#111010]/40 mt-0.5 line-clamp-1">{rel.tagline}</p>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

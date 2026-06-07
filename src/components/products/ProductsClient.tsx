"use client"

import { useState, useMemo, useEffect, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Search, SlidersHorizontal, X, ArrowRight } from "lucide-react"
import type { ProductWithCategory, Category } from "@/lib/supabase/types"
import { productCardUrl } from "@/lib/cloudinary"

interface ProductsClientProps {
  products: ProductWithCategory[]
  categories: Category[]
}

const DIETARY_OPTIONS = ["vegan", "gluten-free", "sugar-free"]
const SORT_OPTIONS = [
  { value: "featured",  label: "Featured" },
  { value: "name-asc", label: "A → Z" },
  { value: "newest",   label: "Newest" },
]

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

export default function ProductsClient({ products, categories }: ProductsClientProps) {
  const router       = useRouter()
  const searchParams = useSearchParams()

  const [query,          setQuery]          = useState(searchParams.get("q") ?? "")
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") ?? "")
  const [activeTags,     setActiveTags]     = useState<string[]>(searchParams.get("tags")?.split(",").filter(Boolean) ?? [])
  const [sort,           setSort]           = useState(searchParams.get("sort") ?? "featured")
  const [filtersOpen,    setFiltersOpen]    = useState(false)

  const syncUrl = useCallback((params: { q?: string; category?: string; tags?: string[]; sort?: string }) => {
    const sp = new URLSearchParams()
    if (params.q) sp.set("q", params.q)
    if (params.category) sp.set("category", params.category)
    if (params.tags?.length) sp.set("tags", params.tags.join(","))
    if (params.sort && params.sort !== "featured") sp.set("sort", params.sort)
    router.replace(`/products?${sp.toString()}`, { scroll: false })
  }, [router])

  useEffect(() => {
    const timer = setTimeout(() =>
      syncUrl({ q: query, category: activeCategory, tags: activeTags, sort }), 300)
    return () => clearTimeout(timer)
  }, [query, activeCategory, activeTags, sort, syncUrl])

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory)
      result = result.filter((p) => (p as unknown as { categories?: { slug: string } }).categories?.slug === activeCategory)
    if (activeTags.length > 0)
      result = result.filter((p) => activeTags.every((tag) => p.dietary_tags?.includes(tag)))
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline?.toLowerCase().includes(q) ||
        p.dietary_tags?.some((t) => t.includes(q))
      )
    }
    if (sort === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name))
    else if (sort === "newest") result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    else result.sort((a, b) => a.sort_order - b.sort_order)
    return result
  }, [products, activeCategory, activeTags, query, sort])

  const toggleTag = (tag: string) =>
    setActiveTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag])

  const clearAll = () => { setQuery(""); setActiveCategory(""); setActiveTags([]); setSort("featured") }
  const hasFilters = query || activeCategory || activeTags.length > 0 || sort !== "featured"

  return (
    <div>
      {/* ── Sticky filter bar ── */}
      <div className="sticky top-16 z-30 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#111010]/[0.07] px-6 py-3.5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2.5 items-center">

          {/* Search */}
          <div className="relative flex-1 min-w-44 max-w-xs">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#111010]/35" />
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full bg-white border border-[#111010]/10 rounded-full pl-9 pr-4 py-2 text-sm text-[#111010] placeholder:text-[#111010]/35 focus:outline-none focus:border-[#E8A000]/60 transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => {
              const active = activeCategory === cat.slug
              const color  = CATEGORY_COLORS[cat.slug] ?? "#E8A000"
              return (
                <button
                  key={cat.id}
                  id={`filter-cat-${cat.slug}`}
                  onClick={() => setActiveCategory(active ? "" : cat.slug)}
                  className="text-xs font-display font-semibold px-4 py-1.5 rounded-full border transition-all duration-200"
                  style={
                    active
                      ? { backgroundColor: color, color: "#fff", borderColor: color }
                      : { backgroundColor: "white", color: "#111010", borderColor: "#11101015" }
                  }
                >
                  {cat.name}
                </button>
              )
            })}
          </div>

          {/* Filters toggle */}
          <button
            id="filters-toggle"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-1.5 text-xs font-display font-semibold border border-[#111010]/10 bg-white rounded-full px-3.5 py-1.5 hover:border-[#E8A000]/60 transition-colors"
          >
            <SlidersHorizontal size={13} />
            Filters
            {activeTags.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#E8A000] text-[#111010] text-[10px] font-bold flex items-center justify-center">
                {activeTags.length}
              </span>
            )}
          </button>

          {/* Sort */}
          <select
            id="product-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-display font-semibold border border-[#111010]/10 bg-white rounded-full px-3.5 py-1.5 focus:outline-none focus:border-[#E8A000]/60 transition-colors appearance-none cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>

          {/* Clear */}
          {hasFilters && (
            <button
              id="filters-clear"
              onClick={clearAll}
              className="flex items-center gap-1 text-xs text-[#111010]/40 hover:text-[#C2522D] transition-colors font-medium"
            >
              <X size={12} /> Clear
            </button>
          )}
        </div>

        {/* Dietary filters */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="max-w-6xl mx-auto overflow-hidden"
            >
              <div className="flex gap-2 flex-wrap pt-3">
                <span className="text-[11px] text-[#111010]/40 font-medium self-center mr-1 uppercase tracking-widest">Dietary:</span>
                {DIETARY_OPTIONS.map((tag) => (
                  <button
                    key={tag}
                    id={`filter-tag-${tag}`}
                    onClick={() => toggleTag(tag)}
                    className="text-xs font-display font-semibold px-3 py-1 rounded-full border transition-all duration-200"
                    style={
                      activeTags.includes(tag)
                        ? { backgroundColor: "#1BBFA3", color: "white", borderColor: "#1BBFA3" }
                        : { backgroundColor: "white", color: "#111010", borderColor: "#11101015" }
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results count */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <p className="text-xs font-medium uppercase tracking-widest text-[#111010]/35">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          {activeCategory && ` · ${categories.find((c) => c.slug === activeCategory)?.name ?? activeCategory}`}
        </p>
      </div>

      {/* Product grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => {
                const catSlug   = (product as unknown as { categories?: { slug: string } }).categories?.slug ?? "snacks"
                const catName   = (product as unknown as { categories?: { name: string } }).categories?.name ?? "Product"
                const accent    = CATEGORY_COLORS[catSlug] ?? "#E8A000"

                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.25) }}
                  >
                    <Link href={`/products/${product.slug}`} className="block group">
                      {/* Image */}
                      <div
                        className="relative rounded-2xl overflow-hidden mb-3"
                        style={{ aspectRatio: "3/4" }}
                      >
                        {product.image_public_id ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={productCardUrl(product.image_public_id)}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500"
                            style={{ backgroundColor: `${accent}14` }}
                          >
                            {EMOJIS[catSlug] ?? "🍃"}
                          </div>
                        )}

                        {/* Category tag */}
                        <div className="absolute top-2.5 left-2.5">
                          <span
                            className="tag text-[9px]"
                            style={{ backgroundColor: `${accent}22`, color: accent }}
                          >
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: accent }} />
                            {catName}
                          </span>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[#111010]/0 group-hover:bg-[#111010]/25 transition-colors duration-300 flex items-end p-3.5">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1 text-white font-display font-semibold text-xs">
                            View <ArrowRight size={11} />
                          </span>
                        </div>

                        {/* Dietary badges */}
                        {product.dietary_tags && product.dietary_tags.length > 0 && (
                          <div className="absolute top-2.5 right-2.5 flex flex-col gap-1">
                            {product.dietary_tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] bg-white/90 backdrop-blur-sm text-[#111010]/60 rounded-full px-2 py-0.5 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="px-0.5">
                        <h3 className="font-display font-semibold text-[#111010] text-sm leading-snug group-hover:text-[#E8A000] transition-colors duration-200">
                          {product.name}
                        </h3>
                        {product.tagline && (
                          <p className="text-xs text-[#111010]/45 mt-0.5 line-clamp-1">{product.tagline}</p>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-display font-bold text-[#111010] text-lg mb-2">No products found</h3>
            <p className="text-sm text-[#111010]/45 mb-6">Try adjusting your filters or search term.</p>
            <button
              onClick={clearAll}
              className="btn btn-primary"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

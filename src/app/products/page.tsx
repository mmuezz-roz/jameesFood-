import { Suspense } from "react"
import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ProductsClient from "@/components/products/ProductsClient"
import type { ProductWithCategory, Category } from "@/lib/supabase/types"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Jamees Food's full range — natural ice candy (SipUp), snacks (Karumuru), and artisanal syrups. Filter by category, dietary needs, and more.",
}

export default async function ProductsPage() {
  const supabase = await createClient()

  const [{ data: products }, { data: categories }] = await Promise.all([
    supabase
      .from("products")
      .select("*, categories(*)")
      .order("sort_order", { ascending: true }),
    supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true }),
  ])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF7F0] pt-16">
        {/* Page header */}
        <div className="bg-white border-b border-[#1A1714]/5 px-6 py-16 text-center">
          <span className="font-body text-sm text-[#1A1714]/50 uppercase tracking-widest">Browse the range</span>
          <h1 className="font-display font-bold text-[#1A1714] text-5xl md:text-6xl mt-2">Our Products</h1>
          <p className="font-body text-[#1A1714]/60 mt-4 max-w-md mx-auto">
            100% natural, rooted in local farms. No prices shown — find us in stores or enquire via WhatsApp.
          </p>
        </div>

        <Suspense fallback={<ProductsLoadingSkeleton />}>
          <ProductsClient
            products={(products ?? []) as ProductWithCategory[]}
            categories={(categories ?? []) as Category[]}
          />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

function ProductsLoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-[#1A1714]/5 rounded-3xl mb-4" style={{ aspectRatio: "4/5" }} />
            <div className="h-4 bg-[#1A1714]/5 rounded-full w-20 mb-2" />
            <div className="h-6 bg-[#1A1714]/5 rounded-full w-40 mb-1" />
            <div className="h-4 bg-[#1A1714]/5 rounded-full w-32" />
          </div>
        ))}
      </div>
    </div>
  )
}

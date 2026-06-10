import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { createStaticClient } from "@/lib/supabase/static"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ProductDetailClient from "@/components/products/ProductDetailClient"
import type { ProductWithCategory } from "@/lib/supabase/types"

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const supabase = createStaticClient()
  const { data } = await supabase.from("products").select("slug")
  return (data ?? []).map((p: { slug: string }) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data } = await supabase
    .from("products")
    .select("name, tagline, description")
    .eq("slug", slug)
    .single()
  const product = data as any

  if (!product) return { title: "Product Not Found" }

  return {
    title: product.name,
    description: product.tagline ?? product.description ?? `Discover ${product.name} from Jamees Food.`,
    openGraph: {
      title: `${product.name} | Jamees Food`,
      description: product.tagline ?? "",
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data } = await supabase
    .from("products")
    .select("*, categories(*)")
    .eq("slug", slug)
    .single()
  const product = data as any

  if (!product) notFound()

  // Related products (same category, exclude self)
  const { data: related } = await supabase
    .from("products")
    .select("*, categories(*)")
    .eq("category_id", product.category_id ?? "")
    .neq("id", product.id)
    .limit(4)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF7F0] pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex gap-2 text-xs font-body text-[#1A1714]/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#1A1714] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#1A1714] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#1A1714]">{product.name}</span>
          </nav>
        </div>

        <ProductDetailClient
          product={product as ProductWithCategory}
          related={(related ?? []) as ProductWithCategory[]}
        />
      </main>
      <Footer />
    </>
  )
}

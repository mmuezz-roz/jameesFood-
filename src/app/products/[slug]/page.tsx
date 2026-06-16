import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Script from "next/script"
import { createClient } from "@/lib/supabase/server"
import { createStaticClient } from "@/lib/supabase/static"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ProductDetailClient from "@/components/products/ProductDetailClient"
import type { ProductWithCategory } from "@/lib/supabase/types"
import { productCardUrl } from "@/lib/cloudinary"

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
    .select("name, tagline, description, image_public_id")
    .eq("slug", slug)
    .single()
  const product = data as any

  if (!product) return { title: "Product Not Found" }

  const title = `${product.name} | Authentic Products | Jamees Food`
  const description = product.description ?? product.tagline ?? `Discover ${product.name} from Jamees Food. Authentic and premium quality.`
  const url = `https://jameesfood.com/products/${slug}`
  const imageUrl = product.image_public_id ? productCardUrl(product.image_public_id) : "https://jameesfood.com/kurmuru.jpg"

  return {
    title,
    description,
    keywords: [product.name, "Jamees Food", "authentic snacks", "buy online", "premium quality"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Jamees Food",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        }
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
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

  const imageUrl = product.image_public_id ? productCardUrl(product.image_public_id) : "https://jameesfood.com/kurmuru.jpg";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": imageUrl,
    "description": product.description ?? product.tagline ?? `Discover ${product.name} from Jamees Food.`,
    "brand": {
      "@type": "Brand",
      "name": "Jamees Food"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://jameesfood.com/products/${slug}`,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Script
        id={`jsonld-product-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

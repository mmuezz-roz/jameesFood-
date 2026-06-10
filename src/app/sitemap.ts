import type { MetadataRoute } from "next"
import { createStaticClient } from "@/lib/supabase/static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createStaticClient()
  const { data: products } = await supabase
    .from("products")
    .select("slug, created_at")
    .order("created_at", { ascending: false })

  const productUrls = (products ?? []).map((p: any) => ({
    url: `https://jameesfood.com/products/${p.slug}`,
    lastModified: new Date(p.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [
    { url: "https://jameesfood.com", lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: "https://jameesfood.com/products", lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: "https://jameesfood.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://jameesfood.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...productUrls,
  ]
}

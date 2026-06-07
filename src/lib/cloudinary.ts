/**
 * Cloudinary URL builder utility
 * Cloud name: dblwznybw
 * Root folder: Jameesfood
 */

const CLOUD_NAME = "dblwznybw"
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`

type Transform = {
  width?: number
  height?: number
  crop?: string
  gravity?: string
  format?: string
  quality?: string | number
}

function buildTransformString(t: Transform): string {
  const parts: string[] = ["f_auto", "q_auto"]
  if (t.width) parts.push(`w_${t.width}`)
  if (t.height) parts.push(`h_${t.height}`)
  if (t.crop) parts.push(`c_${t.crop}`)
  if (t.gravity) parts.push(`g_${t.gravity}`)
  return parts.join(",")
}

export function cloudinaryUrl(publicId: string, transform: Transform = {}): string {
  const t = buildTransformString(transform)
  return `${BASE_URL}/${t}/${publicId}`
}

// Presets
export function productCardUrl(publicId: string) {
  return cloudinaryUrl(publicId, { width: 600, height: 750, crop: "fill" })
}

export function productThumbUrl(publicId: string) {
  return cloudinaryUrl(publicId, { width: 300, height: 300, crop: "thumb", gravity: "auto" })
}

export function heroUrl(publicId: string) {
  return cloudinaryUrl(publicId, { width: 900 })
}

export function categoryPanelUrl(publicId: string) {
  return cloudinaryUrl(publicId, { width: 1200, height: 800, crop: "fill" })
}

// Build full Cloudinary public IDs
export const CLD_PATHS = {
  heroProduct: "Jameesfood/brand/hero_product",
  logo: "Jameesfood/brand/logo",
  mashbereLogo: "Jameesfood/mashbere/logo",
  product: (slug: string) => `Jameesfood/products/${slug}`,
  productThumb: (slug: string) => `Jameesfood/products/${slug}_thumb`,
  categoryHero: (slug: string) => `Jameesfood/categories/${slug}_hero`,
  categoryPanel: (slug: string) => `Jameesfood/categories/${slug}_panel`,
  mashbereCategory: (name: string) => `Jameesfood/mashbere/category_${name}`,
}

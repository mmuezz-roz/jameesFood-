import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Jamees Food. Whether you're a family looking for natural treats or a retailer wanting to stock our products, we'd love to hear from you.",
  alternates: {
    canonical: "https://jameesfood.com/contact",
  },
  openGraph: {
    title: "Contact Us | Jamees Food",
    description: "Whether you're a family looking for natural treats or a retailer wanting to stock our products, we'd love to hear from you.",
    url: "https://jameesfood.com/contact",
    siteName: "Jamees Food",
    locale: "en_US",
    type: "website",
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Jamees Food",
    "description": "Get in touch with Jamees Food for retail and consumer inquiries.",
    "url": "https://jameesfood.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Jamees Food",
      "image": "https://jameesfood.com/jamees_logo.png.webp",
      "telephone": "+971566577588",
      "email": "info@jameesfood.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}

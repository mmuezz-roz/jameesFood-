import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import RevealObserver from "@/components/RevealObserver"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about Jamees Food products, delivery, and retailer partnerships in the UAE.",
  alternates: {
    canonical: "https://jameesfood.com/faq",
  },
  openGraph: {
    title: "FAQ | Jamees Food",
    description: "Find answers to common questions about Jamees Food products, delivery, and retailer partnerships in the UAE.",
    url: "https://jameesfood.com/faq",
    siteName: "Jamees Food",
    locale: "en_US",
    type: "website",
  }
}

const FAQS = [
  {
    question: "What makes Jamees Food products unique?",
    answer: "At Jamees Food, we craft 100% natural ice candies and authentic savory snacks like our famous Karumuru. We never compromise on ingredients—everything is made without artificial preservatives, blending traditional recipes with modern innovation."
  },
  {
    question: "Do you offer delivery in the UAE?",
    answer: "Yes! We proudly offer delivery across the United Arab Emirates. Whether you're craving our premium Mashbere popsicles or our authentic savory snacks, we can bring them right to your door."
  },
  {
    question: "Are your snacks and treats vegetarian?",
    answer: "Absolutely. All of our snacks, including our signature Karumuru Murukk, are 100% vegetarian and made with pure, natural ingredients."
  },
  {
    question: "How can I become a retail partner for Mashbere products?",
    answer: "We are always looking to expand our strategic partnerships! You can reach out to us via the Contact page and select the \"I'm a Retailer\" option, or message us directly on WhatsApp to learn more about our commercial kiosk systems."
  },
  {
    question: "Where do you source your ingredients?",
    answer: "We source our high-quality ingredients directly from local farmers, with deep roots in Kerala, India. This ensures that every bite is as authentic and fresh as possible."
  }
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealObserver />
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF8] pt-16">
        <section className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-[#111010]/30 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6">Support</span>
            <h1 
              className="uppercase text-4xl md:text-6xl font-light text-[#111010] leading-tight tracking-wider"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Frequently Asked <br />
              <span className="font-black text-mango-yellow relative inline-block">
                Questions
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-mango-yellow"></span>
              </span>
            </h1>
          </div>

          <div className="space-y-4 reveal">
            {/* Native HTML details/summary for SEO-friendly accordion */}
            {FAQS.map((faq, index) => (
              <details key={index} className="group bg-white border border-[#111010]/10 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:shadow-md [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-display font-semibold text-lg text-[#111010] select-none list-none">
                  {faq.question}
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-[#111010]/40 group-hover:text-mango-yellow">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-[#111010]/60 leading-relaxed text-sm md:text-base border-t border-[#111010]/5 pt-6 mt-2 animate-in fade-in slide-in-from-top-4 duration-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <p className="text-[#111010]/50 mb-6 font-medium">Still have questions?</p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#111010] text-white px-8 py-4 rounded-full font-bold text-sm tracking-[0.1em] uppercase hover:bg-strawberry-red transition-colors shadow-lg">
              Contact Us Directly
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

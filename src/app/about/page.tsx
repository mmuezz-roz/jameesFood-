import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Jamees Food. We specialize in crafting 100% natural ice candies and innovative snacks that bring smiles to every age.",
  alternates: {
    canonical: "https://jameesfood.com/about",
  },
  openGraph: {
    title: "About Us | Jamees Food",
    description: "Learn about Jamees Food. We specialize in crafting 100% natural ice candies and innovative snacks that bring smiles to every age.",
    url: "https://jameesfood.com/about",
    siteName: "Jamees Food",
    locale: "en_US",
    type: "website",
  }
}
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import RevealObserver from "@/components/RevealObserver"
import CountUp from "@/components/CountUp"

const STATS = [
  { number: "4", unit: "Years", label: "Serving families with honest, natural food" },
  { number: "100%", unit: "", label: "Natural ingredients — no artificial anything" },
  { number: "UAE", unit: "+", label: "Proudly bringing authentic flavors to the region" },
]

const VALUES = [
  { emoji: "🌿", title: "Natural First", body: "We never compromise on ingredients. Every product uses only what nature provides.", color: "#1BBFA3" },
  { emoji: "❤️", title: "Family at Heart", body: "Built for families who want to enjoy great food without the guilt.", color: "#E8A000" },
  { emoji: "📍", title: "Rooted Locally", body: "Our farms are in Kerala. Our heart is in every community we serve.", color: "#C2522D" },
]

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Jamees Food",
    "description": "At Jamees, we believe that the best moments in life are made sweeter with delicious, wholesome treats.",
    "url": "https://jameesfood.com/about",
    "publisher": {
      "@id": "https://jameesfood.com/#organization"
    }
  };

  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealObserver />
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF8] pt-16">

        {/* ─── Hero ─── */}
        <section className="bg-[#FAFAF8] pt-24 md:pt-32 pb-12 md:pb-20 px-5 md:px-6 border-b border-[#111010]/5">
          <div className="max-w-3xl mx-auto reveal group cursor-default">
            <span className="inline-block text-[#111010]/30 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 md:mb-6 transition-all duration-700 md:group-hover:tracking-[0.4em] md:group-hover:text-strawberry-red">
              Our Story
            </span>
            <div className="overflow-hidden pb-2 md:pb-4">
              <h1
                className="uppercase text-4xl md:text-7xl font-light leading-[1.05] tracking-wider text-[#111010] mb-5 md:mb-8 transition-transform duration-700 md:group-hover:translate-x-2"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                About<br />
                <span className="font-black text-strawberry-red relative inline-block">
                  Jamees
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-0 h-[2px] md:h-[3px] bg-strawberry-red transition-all duration-700 group-hover:w-full"></span>
                </span>
              </h1>
            </div>
            <p className="text-[#111010]/55 text-base md:text-lg leading-relaxed max-w-xl">
              At Jamees, we believe that the best moments in life are made sweeter with delicious, wholesome treats. Born from a passion for quality and a love of authentic flavors, we specialize in crafting 100% natural ice candies and innovative snacks that bring smiles to every age.
            </p>
          </div>
        </section>

        {/* ─── Mission ─── */}
        <section className="py-14 md:py-28 px-5 md:px-6 bg-[#F2EDE4]">
          <div className="max-w-4xl mx-auto reveal group cursor-default">
            <div className="text-center">
              <span className="inline-block text-[#111010]/30 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 md:mb-6 transition-all duration-700 md:group-hover:tracking-[0.4em] md:group-hover:text-mango-yellow">
                Our Mission
              </span>
            </div>
            <h2
              className="uppercase text-2xl md:text-5xl font-light text-[#111010] text-center leading-tight mb-8 md:mb-14 tracking-wider"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Our Mission in{" "}
              <span className="font-black relative inline-block">
                the Company
                <span className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-mango-yellow transition-all duration-700 group-hover:w-full"></span>
              </span>
            </h2>

            {/* Mission cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#111010]/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-strawberry-red/10 text-strawberry-red flex items-center justify-center text-base md:text-lg mb-4 md:mb-5">🍧</div>
                <p className="text-[#111010]/70 text-sm leading-relaxed">
                  We&apos;re on a delicious mission to revolutionize snacking by crafting unforgettable, 100% natural treats that <strong className="text-[#111010]">blend tradition with innovation</strong>.
                </p>
              </div>
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#111010]/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-mango-yellow/10 text-mango-yellow flex items-center justify-center text-base md:text-lg mb-4 md:mb-5">🌾</div>
                <p className="text-[#111010]/70 text-sm leading-relaxed">
                  From vibrant, <strong className="text-[#111010]">fruit-packed ice candies</strong> that capture the essence of sun-ripened goodness to bold, crunchy creations like Karumuru that reinvent classic flavors with a modern twist.
                </p>
              </div>
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#111010]/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-base md:text-lg mb-4 md:mb-5">🌍</div>
                <p className="text-[#111010]/70 text-sm leading-relaxed">
                  All while <strong className="text-[#111010]">championing local farmers, sustainable practices, and uncompromising quality</strong> to deliver pure, guilt-free joy in every bite.
                </p>
              </div>
              <div className="bg-[#111010] rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-base md:text-lg mb-4 md:mb-5">✨</div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Creating <strong className="text-white">moments of happiness</strong> that start with our snacks and ripple out to nourish communities, protect the planet, and bring people together through the universal language of authentic, love-infused flavor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Values ─── */}
        <section className="py-14 md:py-28 px-5 md:px-6 bg-[#FAFAF8]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16 reveal group cursor-default">
              <span className="inline-block text-[#111010]/30 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 transition-all duration-700 md:group-hover:tracking-[0.4em]">
                What drives us
              </span>
              <h2
                className="uppercase text-2xl md:text-5xl font-light text-[#111010] tracking-wider"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                Our Core <span className="font-black">Values</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 reveal">
              {VALUES.map((v) => (
                <div key={v.title} className="group bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 border border-[#111010]/[0.06] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-default flex sm:flex-col gap-5 sm:gap-0 items-start sm:items-stretch">
                  <div className="text-3xl md:text-4xl mb-0 sm:mb-6 transition-transform duration-300 group-hover:scale-110 inline-block shrink-0">{v.emoji}</div>
                  <div>
                    <h3 className="font-extrabold text-[#111010] text-lg md:text-xl mb-2 md:mb-3">{v.title}</h3>
                    <p className="text-[#111010]/55 text-sm leading-relaxed">{v.body}</p>
                    <div className="w-8 h-1 rounded-full mt-4 md:mt-6 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: v.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className="py-12 md:py-20 px-5 md:px-6 bg-white border-y border-[#111010]/5">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-3 divide-x divide-[#111010]/5 reveal">

              {/* 4 Years */}
              <div className="px-4 md:px-12 first:pl-0 group">
                <div className="text-2xl md:text-5xl font-black text-[#111010] leading-none mb-1 flex items-baseline gap-0.5">
                  <CountUp from={0} to={4} duration={1.5} />
                  <span className="text-strawberry-red text-xl md:text-4xl">Years</span>
                </div>
                <p className="text-[#111010]/45 text-[11px] md:text-sm mt-2 md:mt-3 leading-relaxed">Serving families with honest, natural food</p>
              </div>

              {/* 100% */}
              <div className="px-4 md:px-12 group">
                <div className="text-2xl md:text-5xl font-black text-[#111010] leading-none mb-1 flex items-baseline gap-0">
                  <CountUp from={0} to={100} duration={0.7} />
                  <span className="text-strawberry-red">%</span>
                </div>
                <p className="text-[#111010]/45 text-[11px] md:text-sm mt-2 md:mt-3 leading-relaxed">Natural ingredients — no artificial anything</p>
              </div>

              {/* UAE */}
              <div className="px-4 md:px-12 last:pr-0 group">
                <div className="text-2xl md:text-5xl font-black text-[#111010] leading-none mb-1">
                  UAE<span className="text-strawberry-red">+</span>
                </div>
                <p className="text-[#111010]/45 text-[11px] md:text-sm mt-2 md:mt-3 leading-relaxed">Proudly bringing authentic flavors to the region</p>
              </div>

            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-16 md:py-28 px-5 md:px-6 bg-[#111010] text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-mango-yellow/5 blur-[100px]" />
          </div>
          <div className="max-w-2xl mx-auto text-center relative z-10 reveal group cursor-default">
            <h2
              className="uppercase text-3xl md:text-5xl font-light mb-4 md:mb-6 tracking-wider transition-transform duration-700 md:group-hover:-translate-y-2"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Taste the difference.<br />
              <span className="font-black text-strawberry-red relative inline-block">
                Try it yourself.
                <span className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-strawberry-red transition-all duration-500 group-hover:w-full"></span>
              </span>
            </h2>
            <p className="text-white/50 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
              Every bite tells a story. Come experience Jamees Food.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link href="/products" className="bg-strawberry-red text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:brightness-110 hover:scale-105 transition-all shadow-xl shadow-strawberry-red/20 inline-block text-center">
                Shop Now
              </Link>
              <Link href="/contact" className="text-white border border-white/20 px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all inline-block text-center">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

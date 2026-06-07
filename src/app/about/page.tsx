import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { ArrowUpRight, Leaf, Heart, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the Jamees Food story — a family brand rooted in local Kerala farms, crafting 100% natural snacks, ice candy, and syrups for families across the UAE.",
}

const MILESTONES = [
  { year: "2018", text: "Founded in Kerala with a mission to bring natural snacks to everyday families." },
  { year: "2020", text: "SipUp ice candy launched — the first 100% natural ice candy in our range." },
  { year: "2022", text: "Expanded to the UAE market. Karumuru Snacks enter retail shelves." },
  { year: "2023", text: "Mashbere born — our B2B trade arm for retailers and distributors." },
  { year: "2024", text: "Artisanal Syrups line launched. Over 50+ retail partners across UAE & Kerala." },
]

const VALUES = [
  { icon: <Leaf size={20} />, title: "Natural First", body: "We never compromise on ingredients. Every product uses only what nature provides.", color: "#1BBFA3" },
  { icon: <Heart size={20} />, title: "Family at Heart", body: "Built for families who want to enjoy great food without the guilt.", color: "#E8A000" },
  { icon: <MapPin size={20} />, title: "Rooted Locally", body: "Our farms are in Kerala. Our heart is in every community we serve.", color: "#C2522D" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF8] pt-16">
        
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#111010] text-[#FAFAF8] py-32 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E8A000]/10 via-[#111010]/0 to-[#111010]/0 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FAFAF8]/40 mb-3 block">
              Our story
            </span>
            <h1
              className="font-display font-bold mt-1 leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Food that honours
              <br />
              <span className="text-[#E8A000]">the farm &amp; the family.</span>
            </h1>
            <p className="text-[#FAFAF8]/55 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
              Jamees Food was born from a simple belief — that natural, honest food should be accessible to every family,
              not just a privilege for the few.
            </p>
          </div>
        </section>

        {/* Mission statement */}
        <section className="py-24 px-6 bg-[#F2EDE4]">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-display font-bold text-[#111010] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              &ldquo;We believe natural food shouldn&apos;t be a luxury — it should be the everyday choice for every family.&rdquo;
            </blockquote>
            <div className="mt-8 w-10 h-1 bg-[#E8A000] rounded-full mx-auto" />
            <p className="mt-6 font-display font-semibold text-[#111010]/60 text-sm tracking-wide uppercase">— The Jamees Food Team</p>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 bg-[#FAFAF8]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111010]/40 mb-2 block">
                What drives us
              </span>
              <h2 className="font-display font-bold text-[#111010] text-3xl md:text-4xl">Our Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-white rounded-3xl p-8 border border-[#111010]/[0.06] hover:shadow-[0_12px_40px_rgba(17,16,16,0.06)] transition-all duration-300 group">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${v.color}15`, color: v.color }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-display font-bold text-[#111010] text-xl mb-3">{v.title}</h3>
                  <p className="text-[#111010]/60 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-6 bg-white border-y border-[#111010]/[0.06]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111010]/40 mb-2 block">
                How we got here
              </span>
              <h2 className="font-display font-bold text-[#111010] text-3xl md:text-4xl">Our Journey</h2>
            </div>
            
            <div className="relative">
              {/* Line */}
              <div className="absolute left-16 md:left-[8.5rem] top-2 bottom-2 w-[2px] bg-[#E8A000]/20 rounded-full" />
              
              <div className="flex flex-col gap-12">
                {MILESTONES.map((m) => (
                  <div key={m.year} className="flex gap-6 md:gap-12 items-start group">
                    <div className="w-16 md:w-28 flex-none text-right pt-0.5">
                      <span className="font-display font-bold text-[#E8A000] text-xl md:text-2xl group-hover:text-[#F5B833] transition-colors">{m.year}</span>
                    </div>
                    <div className="relative flex-1 bg-[#FAFAF8] rounded-2xl p-6 border border-[#111010]/[0.04]">
                      <div className="absolute -left-[1.25rem] md:-left-[2.75rem] top-4 w-4 h-4 rounded-full bg-[#E8A000] border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-125" />
                      <p className="text-[#111010]/70 text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mashbere mention */}
        <section className="py-24 px-6 bg-[#111010] text-[#FAFAF8] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#5B4FE8]/10 via-[#111010]/0 to-[#111010]/0 pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FAFAF8]/30 mb-3 block">
              Part of our family
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-5">Meet Mashbere</h2>
            <p className="text-[#FAFAF8]/50 leading-relaxed mb-8 max-w-xl mx-auto text-sm md:text-base">
              As Jamees Food grew, so did demand from the trade. Mashbere is our B2B arm — serving retailers,
              distributors, and food businesses across the UAE with premium frozen treats, equipment, and beverages.
            </p>
            <Link
              href="https://mashbere.com"
              target="_blank"
              rel="noopener noreferrer"
              id="about-mashbere-link"
              className="btn bg-[#5B4FE8]/10 text-[#5B4FE8] hover:bg-[#5B4FE8] hover:text-white"
            >
              Visit Mashbere <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#F2EDE4] text-center border-t border-[#111010]/[0.06]">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-[#111010] text-3xl mb-4">Want to know more?</h2>
            <p className="text-[#111010]/55 mb-8 text-sm md:text-base">Reach out — we love hearing from families, retailers, and curious minds.</p>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Get in Touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

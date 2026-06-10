"use client"

import { useActionState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { MapPin, Mail, MessageCircle, ArrowUpRight, CheckCircle2 } from "lucide-react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { submitContactForm, type ContactFormState } from "./actions"

const WA_NUMBER = "971502994974"
const initialState: ContactFormState = {}

function ContactContent() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") === "retailer" ? "retailer" : "consumer"

  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF8] pt-16">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left column: Contact info */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111010]/40 mb-3 block">
                Get in touch
              </span>
              <h1
                className="font-display font-bold text-[#111010] leading-[1.05] mb-6 tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Let&apos;s start a<br />
                <span className="text-[#E8A000]">conversation.</span>
              </h1>
              
              <p className="text-[#111010]/60 text-base leading-relaxed mb-12 max-w-md">
                Whether you&apos;re a family looking for natural treats or a retailer wanting to stock our products, we&apos;d love to hear from you.
              </p>

              <div className="flex flex-col gap-10">
                {/* WhatsApp */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#111010]/[0.06] flex items-center justify-center text-[#E8A000] flex-none transition-transform duration-300 group-hover:scale-110">
                    <MessageCircle size={18} />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-display font-semibold text-[#111010] text-lg mb-1">WhatsApp Us</h3>
                    <p className="text-[#111010]/55 text-sm mb-2.5">Fastest way to reach us for orders and general queries.</p>
                    <a
                      href={`https://wa.me/${WA_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366] hover:text-[#1fba59] transition-colors"
                    >
                      Chat on WhatsApp <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#111010]/[0.06] flex items-center justify-center text-[#E8A000] flex-none transition-transform duration-300 group-hover:scale-110">
                    <Mail size={18} />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-display font-semibold text-[#111010] text-lg mb-1">Email</h3>
                    <p className="text-[#111010]/55 text-sm mb-2">For partnerships, feedback, and support.</p>
                    <a href="mailto:hello@jameesfood.com" className="text-[#111010] font-medium text-sm hover:text-[#E8A000] transition-colors">
                      hello@jameesfood.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#111010]/[0.06] flex items-center justify-center text-[#E8A000] flex-none transition-transform duration-300 group-hover:scale-110">
                    <MapPin size={18} />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-display font-semibold text-[#111010] text-lg mb-1">Presence</h3>
                    <p className="text-[#111010]/55 text-sm leading-relaxed max-w-xs">
                      Proudly operating across the <strong className="text-[#111010] font-semibold">United Arab Emirates</strong> and <strong className="text-[#111010] font-semibold">Kerala, India</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Form */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#111010]/[0.06] shadow-[0_20px_60px_rgba(17,16,16,0.04)] h-fit">
              {state.success ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-2xl bg-[#1BBFA3]/10 flex items-center justify-center text-[#1BBFA3] mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="font-display font-bold text-[#111010] text-2xl mb-3">Message Sent!</h2>
                  <p className="text-[#111010]/55 text-sm leading-relaxed max-w-xs mb-8">
                    Thank you for reaching out. We&apos;ve received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="btn btn-outline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form action={formAction} className="flex flex-col gap-5">
                  <h2 className="font-display font-bold text-[#111010] text-xl mb-1">Send a Message</h2>
                  
                  {state.error && (
                    <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-100">
                      {state.error}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#FAFAF8] border border-[#111010]/[0.04] rounded-xl mb-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="type" value="consumer" defaultChecked={initialType === "consumer"} className="peer sr-only" />
                      <div className="text-center font-display font-semibold text-sm py-2 rounded-lg text-[#111010]/40 peer-checked:bg-white peer-checked:text-[#111010] peer-checked:shadow-[0_2px_8px_rgba(17,16,16,0.04)] transition-all">
                        I&apos;m a Customer
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="type" value="retailer" defaultChecked={initialType === "retailer"} className="peer sr-only" />
                      <div className="text-center font-display font-semibold text-sm py-2 rounded-lg text-[#111010]/40 peer-checked:bg-[#111010] peer-checked:text-white transition-all">
                        I&apos;m a Retailer
                      </div>
                    </label>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#111010]/50 mb-1.5 ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      className="w-full bg-[#FAFAF8] border border-[#111010]/[0.06] focus:bg-white focus:border-[#E8A000]/60 rounded-xl px-4 py-3 text-[#111010] text-sm transition-colors outline-none"
                    />
                    {state.fieldErrors?.name && <p className="text-red-500 text-[11px] mt-1.5 ml-1">{state.fieldErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#111010]/50 mb-1.5 ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@example.com"
                      className="w-full bg-[#FAFAF8] border border-[#111010]/[0.06] focus:bg-white focus:border-[#E8A000]/60 rounded-xl px-4 py-3 text-[#111010] text-sm transition-colors outline-none"
                    />
                    {state.fieldErrors?.email && <p className="text-red-500 text-[11px] mt-1.5 ml-1">{state.fieldErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#111010]/50 mb-1.5 ml-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can we help?"
                      className="w-full bg-[#FAFAF8] border border-[#111010]/[0.06] focus:bg-white focus:border-[#E8A000]/60 rounded-xl px-4 py-3 text-[#111010] text-sm transition-colors outline-none resize-none"
                    />
                    {state.fieldErrors?.message && <p className="text-red-500 text-[11px] mt-1.5 ml-1">{state.fieldErrors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn btn-primary mt-2 justify-center w-full py-3.5"
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAFAF8] pt-32 flex justify-center items-start">
        <div className="w-8 h-8 border-4 border-[#E8A000] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ContactContent />
    </Suspense>
  )
}

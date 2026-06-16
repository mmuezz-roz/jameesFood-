import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import RevealObserver from "@/components/RevealObserver"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms and Conditions for using the Jamees Food website and services.",
  alternates: {
    canonical: "https://jameesfood.com/terms",
  },
  openGraph: {
    title: "Terms of Service | Jamees Food",
    description: "Read the Terms and Conditions for using the Jamees Food website and services.",
    url: "https://jameesfood.com/terms",
    siteName: "Jamees Food",
    locale: "en_US",
    type: "website",
  }
}

export default function TermsPage() {
  const lastUpdated = "June 16, 2026";

  return (
    <>
      <RevealObserver />
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF8] pt-16">
        <section className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-[#111010]/30 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6">Legal Information</span>
            <h1 
              className="uppercase text-4xl md:text-6xl font-light text-[#111010] leading-tight tracking-wider mb-6"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Terms of <br />
              <span className="font-black text-mango-yellow relative inline-block">
                Service
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-mango-yellow"></span>
              </span>
            </h1>
            <p className="text-[#111010]/50 text-sm font-medium">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-lg max-w-none text-[#111010]/70 prose-headings:font-display prose-headings:font-bold prose-headings:text-[#111010] prose-a:text-mango-yellow prose-a:no-underline hover:prose-a:underline reveal">
            <p>
              Welcome to Jamees Food. By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h3>1. General Terms</h3>
            <p>
              By placing an order or communicating with us, you agree to provide accurate and complete information. We reserve the right to refuse service or cancel orders if we suspect fraudulent activity.
            </p>

            <h3>2. Product Information</h3>
            <p>
              While we strive to provide accurate descriptions and images of our natural snacks and treats, variations may occur. All products are subject to availability.
            </p>

            <h3>3. Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Jamees Food or its content suppliers and is protected by copyright and intellectual property laws.
            </p>

            <h3>4. Limitation of Liability</h3>
            <p>
              Jamees Food shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our website or products.
            </p>

            <h3>5. Contact Us</h3>
            <p>
              If you have any questions regarding these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> <a href="mailto:info@jameesfood.com">info@jameesfood.com</a><br />
              <strong>WhatsApp:</strong> <a href="https://wa.me/971566577588" target="_blank" rel="noopener noreferrer">+971 566 577 588</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

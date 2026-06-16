import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import RevealObserver from "@/components/RevealObserver"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Jamees Food collects, uses, and protects your personal information. Read our complete privacy policy.",
  alternates: {
    canonical: "https://jameesfood.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Jamees Food",
    description: "Learn how Jamees Food collects, uses, and protects your personal information. Read our complete privacy policy.",
    url: "https://jameesfood.com/privacy-policy",
    siteName: "Jamees Food",
    locale: "en_US",
    type: "website",
  }
}

export default function PrivacyPolicyPage() {
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
              Privacy <br />
              <span className="font-black text-strawberry-red relative inline-block">
                Policy
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-strawberry-red"></span>
              </span>
            </h1>
            <p className="text-[#111010]/50 text-sm font-medium">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-lg max-w-none text-[#111010]/70 prose-headings:font-display prose-headings:font-bold prose-headings:text-[#111010] prose-a:text-strawberry-red prose-a:no-underline hover:prose-a:underline reveal">
            <p>
              At Jamees Food, your privacy is just as important to us as the quality of our 100% natural snacks. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or interact with us.
            </p>

            <h3>1. Information We Collect</h3>
            <p>We may collect the following types of information when you use our website:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Contact Information:</strong> Name, email address, and phone number when you fill out our contact forms or subscribe to our newsletter.</li>
              <li><strong>Communication Data:</strong> Any messages, inquiries, or feedback you send to us via email or WhatsApp.</li>
              <li><strong>Usage Data:</strong> Anonymous data regarding how you browse and interact with our website to help us improve the user experience.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>Your information is used strictly to provide you with a better experience. Specifically, we use it to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Respond to your direct inquiries, retail partnership requests, or support questions.</li>
              <li>Send you occasional updates, promotions, and news about Jamees Food (only if you have opted into our newsletter).</li>
              <li>Analyze website performance and improve our digital storefront.</li>
            </ul>

            <h3>3. Data Protection and Sharing</h3>
            <p>
              We <strong>do not</strong> sell, rent, or trade your personal information to third parties. We employ industry-standard security measures, including secure databases, to keep your contact inquiries safe.
            </p>

            <h3>4. Cookies and Tracking</h3>
            <p>
              Our website uses basic functional cookies to ensure it operates correctly and securely. We do not use aggressive third-party tracking or advertising cookies without your explicit consent.
            </p>

            <h3>5. Contact Us</h3>
            <p>
              If you have any questions or concerns regarding your privacy or this policy, please reach out to us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> <a href="mailto:info@jameesfood.com">info@jameesfood.com</a><br />
              <strong>WhatsApp:</strong> <a href="https://wa.me/971566577588" target="_blank" rel="noopener noreferrer">+971 566 577 588</a>
            </p>

            <div className="mt-16 pt-8 border-t border-[#111010]/10 text-sm text-[#111010]/40 text-center">
              By using our website, you consent to the terms of this Privacy Policy.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

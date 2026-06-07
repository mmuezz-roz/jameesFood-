"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "100%", label: "Natural ingredients" },
  { value: "3+",   label: "Product ranges" },
  { value: "UAE",  label: "& Kerala" },
]

export default function MissionSection() {
  const ref      = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="mission" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: headline + quote */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111010]/40 mb-4"
            >
              Our mission
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-[#111010] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              Food that tells a story —{" "}
              <span className="text-[#E8A000]">from farm to family.</span>
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="relative pl-5 border-l-2 border-[#E8A000]/40 text-[#111010]/55 text-base leading-relaxed italic"
            >
              We believe natural food shouldn't be a luxury — it should be the everyday choice for every family.
            </motion.blockquote>
          </div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-6"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-[#111010]/[0.06] text-center"
              >
                <div className="font-display font-bold text-[#E8A000] text-3xl mb-1">
                  {s.value}
                </div>
                <div className="text-[11px] font-medium uppercase tracking-widest text-[#111010]/40 leading-tight">
                  {s.label}
                </div>
              </motion.div>
            ))}

            {/* Values list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="col-span-3 bg-[#F2EDE4] rounded-2xl p-5 border border-[#111010]/[0.04]"
            >
              <ul className="flex flex-col gap-2.5">
                {[
                  { dot: "#1BBFA3", text: "No artificial colours or preservatives" },
                  { dot: "#E8A000", text: "Sourced direct from farms across Kerala & UAE" },
                  { dot: "#C2522D", text: "Crafted for everyday family moments" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5 text-sm text-[#111010]/65">
                    <span
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: item.dot }}
                    />
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

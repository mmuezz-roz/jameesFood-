"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: 100, suffix: "%", label: "Natural ingredients" },
  { value: 3,   suffix: "+", label: "Product ranges" },
  { value: 2,   suffix: "",  label: "Countries" },  // UAE & Kerala = 2
]

// Animated counter hook
function useCountUp(target: number, started: boolean, duration = 1200) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    setCount(0)
    const steps = 40
    const stepMs = duration / steps
    const increment = target / steps
    let current = 0
    const id = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(id)
      } else {
        setCount(Math.floor(current))
      }
    }, stepMs)
    return () => clearInterval(id)
  }, [started, target, duration])
  return count
}

const VALUES = [
  { dot: "#1BBFA3", text: "No artificial colours or preservatives" },
  { dot: "#E8A000", text: "Sourced direct from farms across Kerala & UAE" },
  { dot: "#C2522D", text: "Crafted for everyday family moments" },
]

function AnimatedStat({ stat, delay, started }: { stat: typeof STATS[0]; delay: number; started: boolean }) {
  const count = useCountUp(stat.value, started, 1200)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="bg-white rounded-2xl p-5 border border-[#111010]/[0.06] text-center group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <div className="font-display font-bold text-[#E8A000] text-3xl mb-1 tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="text-[11px] font-medium uppercase tracking-widest text-[#111010]/40 leading-tight">
        {stat.label}
      </div>
    </motion.div>
  )
}

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
              We believe natural food shouldn&apos;t be a luxury — it should be the everyday choice for every family.
            </motion.blockquote>
          </div>

          {/* Right: animated stats + values */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-6"
          >
            {STATS.map((s, i) => (
              <AnimatedStat key={s.label} stat={s} delay={0.3 + i * 0.1} started={isInView} />
            ))}

            {/* Values list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="col-span-3 bg-[#F2EDE4] rounded-2xl p-5 border border-[#111010]/[0.04]"
            >
              <ul className="flex flex-col gap-2.5">
                {VALUES.map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.65 + i * 0.1 }}
                    className="flex items-start gap-2.5 text-sm text-[#111010]/65"
                  >
                    <motion.span
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: item.dot }}
                      animate={isInView ? { scale: [0, 1.3, 1] } : {}}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

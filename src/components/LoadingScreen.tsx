"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

interface Ring {
  id: number
  x: number
  y: number
}

export default function LoadingScreen() {
  const [progress, setProgress]   = useState(0)
  const [visible, setVisible]     = useState(true)
  const [gone, setGone]           = useState(false)
  const [typed, setTyped]         = useState("")
  const [rings, setRings]         = useState<Ring[]>([])
  const [glowScale, setGlowScale] = useState(0) // 0‥1, proximity to logo

  const wrapRef      = useRef<HTMLDivElement>(null)
  const rafRef       = useRef<number | null>(null)
  const posRef       = useRef({ x: 0, y: 0 })   // current lerped offset
  const progressRef  = useRef(0)
  const ringIdRef    = useRef(0)

  const TAGLINE  = "Fresh. Natural. Delicious."
  const DURATION = 2800
  const RADIUS   = 180 // magnetic influence radius (px)
  const STRENGTH = 22  // max pull distance (px)

  /* ── Magnetic + glow loop ── */
  useEffect(() => {
    let targetX = 0, targetY = 0

    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width  / 2
      const cy = rect.top  + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const proximity = Math.max(0, 1 - dist / RADIUS)

      setGlowScale(proximity)

      if (dist < RADIUS) {
        targetX = (dx / RADIUS) * STRENGTH * proximity
        targetY = (dy / RADIUS) * STRENGTH * proximity
      } else {
        targetX = 0
        targetY = 0
      }
    }

    const loop = () => {
      posRef.current.x += (targetX - posRef.current.x) * 0.1
      posRef.current.y += (targetY - posRef.current.y) * 0.1

      if (wrapRef.current) {
        const { x, y } = posRef.current
        // subtle tilt proportional to pull
        const rx = (y / STRENGTH) * -8
        const ry = (x / STRENGTH) *  8
        wrapRef.current.style.transform =
          `translate(${x}px, ${y}px) rotateX(${rx}deg) rotateY(${ry}deg)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove)
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener("mousemove", onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  /* ── Click → ring burst ── */
  const handleClick = () => {
    const id = ringIdRef.current++
    setRings(r => [...r, { id, x: 0, y: 0 }])
    setTimeout(() => setRings(r => r.filter(ring => ring.id !== id)), 700)
  }

  /* ── Progress ── */
  useEffect(() => {
    const start = Date.now()
    const tick = () => {
      const raw   = Math.min((Date.now() - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - raw, 2.5)
      const pct   = Math.floor(eased * 100)
      if (pct !== progressRef.current) { progressRef.current = pct; setProgress(pct) }
      if (raw < 1) requestAnimationFrame(tick)
      else { setVisible(false); setTimeout(() => setGone(true), 600) }
    }
    requestAnimationFrame(tick)
  }, [])

  /* ── Typewriter ── */
  useEffect(() => {
    let i = 0
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++; setTyped(TAGLINE.slice(0, i))
        if (i >= TAGLINE.length) clearInterval(iv)
      }, 46)
      return () => clearInterval(iv)
    }, 400)
    return () => clearTimeout(t)
  }, [])

  if (gone) return null

  const shadowSize  = 16 + glowScale * 28   // 16 → 44 px
  const shadowAlpha = 0.16 + glowScale * 0.26 // 0.16 → 0.42

  return (
    <div className={`ls-root ${!visible ? "ls-root--out" : ""}`}>
      <div className="ls-vignette" />

      <div className={`ls-inner ${!visible ? "ls-inner--out" : ""}`}>

        {/* ── Logo stage ── */}
        <div className="ls-logo-stage" onClick={handleClick}>

          {/* Click rings — rendered behind logo */}
          {rings.map(r => (
            <div key={r.id} className="ls-ring-burst" />
          ))}

          {/* Magnetic logo */}
          <div ref={wrapRef} className="ls-logo-wrap">
            <Image
              src="/jamees_logo.png.webp"
              alt="Jamees Food"
              width={120}
              height={120}
              priority
              className="ls-logo-img"
              style={{
                boxShadow: `0 ${shadowSize / 2}px ${shadowSize}px rgba(213,39,39,${shadowAlpha})`,
              }}
            />
          </div>
        </div>

        {/* Typewriter */}
        <p className="ls-tagline">
          {typed}<span className="ls-cursor">|</span>
        </p>

        {/* Progress line */}
        <div className="ls-line-track">
          <div className="ls-line-fill" style={{ width: `${progress}%` }} />
        </div>

      </div>
    </div>
  )
}

"use client"

import { useState } from "react"

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    // Determine the full URL if only a path is provided
    const fullUrl = url.startsWith('http') ? url : typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;

    // Use Web Share API if supported (mainly mobile devices & Safari)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: fullUrl
        })
      } catch (err) {
        console.error("Error sharing:", err)
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(fullUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy link:", err)
      }
    }
  }

  return (
    <button 
      onClick={handleShare}
      className="bg-white text-on-surface border-2 border-outline/20 w-[56px] h-[56px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center hover:border-on-surface hover:shadow-lg transition-all active:scale-95 shrink-0"
      aria-label="Share product"
    >
      <span className="material-symbols-outlined text-[24px]">
        {copied ? 'check' : 'ios_share'}
      </span>
    </button>
  )
}

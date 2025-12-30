"use client"

import { Button } from "@/components/ui/button"
import { Terminal, ChevronDown, AlertTriangle, X } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

function Windows11Icon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
    </svg>
  )
}

export function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <Image src="/images/image.png" alt="Jungle ruins background" fill className="object-cover" priority />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {showBanner && (
        <div className="absolute top-0 left-0 right-0 z-20 bg-primary/20 backdrop-blur-sm border-b border-primary/30 py-2 px-4 text-center">
          <p className="text-primary text-sm font-medium flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Very early preview, not out, just a placeholder, might not release.
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-primary italic">voxlis</span>
          <span className="text-foreground">.NET</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Your user experience matters to us.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary/90 text-primary-foreground gap-2 cursor-not-allowed pointer-events-none"
          >
            <Windows11Icon size={18} />
            Download Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground gap-2 bg-transparent cursor-pointer hover:bg-transparent hover:text-foreground"
            onClick={() => {
              document.getElementById("unc")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Terminal size={18} />
            View Features
          </Button>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 ${
          showScrollIndicator ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </div>
    </section>
  )
}

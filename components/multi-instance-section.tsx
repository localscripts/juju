"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const features = ["Unlimited Instances", "Easy Setup", "Low Resource Usage", "Auto-Inject Support"]

export function MultiInstanceSection() {
  return (
    <section id="multi-instance" className="relative py-20 bg-background z-10">
      <style jsx>{`
        @keyframes waveFloat1 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-20px) translateY(-10px); }
        }
        @keyframes waveFloat2 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(20px) translateY(-8px); }
        }
        @keyframes waveFloat3 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-15px) translateY(-12px); }
        }
      `}</style>

      {/* Static wave SVG positioned at bottom of section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 w-[120%] h-full -left-[10%]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 256"
        >
          <defs>
            <linearGradient id="mi-wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(0, 212, 212)" stopOpacity="0.08" />
              <stop offset="50%" stopColor="rgb(0, 180, 200)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="rgb(0, 150, 180)" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="mi-wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(0, 212, 212)" stopOpacity="0.06" />
              <stop offset="50%" stopColor="rgb(0, 190, 190)" stopOpacity="0.04" />
              <stop offset="100%" stopColor="rgb(0, 160, 170)" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="mi-wave-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(0, 212, 212)" stopOpacity="0.04" />
              <stop offset="100%" stopColor="rgb(0, 180, 180)" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Wave 1 - back */}
          <path
            fill="url(#mi-wave-gradient-1)"
            d="M0,80 C150,50 350,110 500,80 C650,50 800,110 1000,80 C1200,50 1350,110 1440,80 L1440,256 L0,256 Z"
            style={{ animation: "waveFloat1 8s ease-in-out infinite" }}
          />

          {/* Wave 2 - middle */}
          <path
            fill="url(#mi-wave-gradient-2)"
            d="M0,120 C200,90 400,150 600,120 C800,90 1000,150 1200,120 C1350,90 1400,150 1440,120 L1440,256 L0,256 Z"
            style={{ animation: "waveFloat2 6s ease-in-out infinite" }}
          />

          {/* Wave 3 - front */}
          <path
            fill="url(#mi-wave-gradient-3)"
            d="M0,160 C180,130 360,190 540,160 C720,130 900,190 1080,160 C1260,130 1380,190 1440,160 L1440,256 L0,256 Z"
            style={{ animation: "waveFloat3 10s ease-in-out infinite" }}
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 overflow-visible">
            <div className="relative overflow-visible">
              <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-50" />

              <div className="relative animate-float h-[280px] sm:h-[350px] md:h-[450px] w-[320px] sm:w-[450px] md:w-[600px] overflow-visible">
                {/* Back window (3rd) - furthest right and top */}
                <div
                  className="absolute rounded-xl border border-border/50 shadow-xl overflow-hidden"
                  style={{ top: 0, left: "20%" }}
                >
                  <Image
                    src="/images/roblox-multi-instance.png"
                    alt="Roblox Instance 3"
                    width={420}
                    height={340}
                    className="w-[220px] sm:w-[300px] md:w-[420px] h-auto"
                  />
                </div>

                {/* Middle window (2nd) */}
                <div
                  className="absolute rounded-xl border border-border/50 shadow-xl overflow-hidden"
                  style={{ top: "12%", left: "10%" }}
                >
                  <Image
                    src="/images/roblox-multi-instance.png"
                    alt="Roblox Instance 2"
                    width={420}
                    height={340}
                    className="w-[220px] sm:w-[300px] md:w-[420px] h-auto"
                  />
                </div>

                {/* Front window (1st) - leftmost and bottom */}
                <div
                  className="absolute rounded-xl border border-border/50 shadow-2xl overflow-hidden"
                  style={{ top: "24%", left: 0 }}
                >
                  <Image
                    src="/images/roblox-multi-instance.png"
                    alt="Roblox Instance 1"
                    width={420}
                    height={340}
                    className="w-[220px] sm:w-[300px] md:w-[420px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Multiple Instance</span>
              <br />
              <span className="text-foreground">Support</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Run multiple Roblox instances simultaneously with our built-in multi-instance support. Perfect for alt
              farming, testing, or running multiple games at once.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

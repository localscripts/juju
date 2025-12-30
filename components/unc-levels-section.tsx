"use client"
import { useEffect, useState } from "react"

import { suncConfig } from "@/config/sunc-config"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"

interface SuncData {
  passed: number
  total: number
  executor: string
  version: string
  timeTaken: number
}

interface SuncApiResponse {
  timestamp: number
  version: string
  timeTaken: number
  tests: {
    passed: string[]
    failed: string[]
  }
  executor: string
  __SUNC: boolean
  useDefaults?: boolean
}

function CircularProgress({ percentage, passed, total }: { percentage: number; passed: number; total: number }) {
  const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 60 : 80
  const strokeWidth = typeof window !== "undefined" && window.innerWidth < 640 ? 8 : 10
  const normalizedRadius = radius - strokeWidth / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          stroke="rgba(0,0,0,0.5)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke="#2dd4bf"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl sm:text-4xl font-bold text-foreground">{percentage}%</span>
        <span className="text-[#2dd4bf] text-sm sm:text-base mt-1">
          {passed} <span className="text-muted-foreground">/ {total}</span>
        </span>
      </div>
    </div>
  )
}

export function UncLevelsSection() {
  const [suncData, setSuncData] = useState<SuncData>(suncConfig.defaults)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchSuncData() {
      try {
        const response = await fetch("/api/sunc")
        const data: SuncApiResponse = await response.json()

        if (data.tests && data.__SUNC) {
          const passed = data.tests.passed?.length ?? 0
          const failed = data.tests.failed?.length ?? 0
          const total = passed + failed

          setSuncData({
            passed,
            total,
            executor: data.executor ?? suncConfig.defaults.executor,
            version: data.version ? `v${data.version}` : suncConfig.defaults.version,
            timeTaken: data.timeTaken ?? suncConfig.defaults.timeTaken,
          })
        } else if (data.useDefaults) {
          console.log("Using default sUNC data")
        }
      } catch (error) {
        console.error("Failed to fetch sUNC data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSuncData()
  }, [])

  const percentage = Math.floor((suncData.passed / suncData.total) * 100)

  const getDescription = () => {
    return "With voxlis, we value transparency with our users. The widget shows our real, unfiltered sUNC test results - no cherry-picking, no hiding failures."
  }

  return (
    <section id="unc" className="py-20 md:py-32 bg-background relative">
      <style jsx>{`
        @keyframes waveMove1 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-20px) translateY(10px);
          }
        }
        @keyframes waveMove2 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(25px) translateY(-8px);
          }
        }
        @keyframes waveMove3 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-15px) translateY(12px);
          }
        }
        @keyframes tiltRotate {
          0%, 100% {
            transform: perspective(1000px) rotateY(-25deg) rotateX(8deg);
          }
          50% {
            transform: perspective(1000px) rotateY(25deg) rotateX(8deg);
          }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute h-full"
          style={{ width: "120%", left: "-10%" }}
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,300 C200,200 400,400 720,300 C1040,200 1240,400 1440,300 L1440,500 C1240,600 1040,400 720,500 C400,600 200,400 0,500 Z"
            fill="rgba(0,0,0,0.2)"
            style={{ animation: "waveMove1 8s ease-in-out infinite" }}
          />
          <path
            d="M0,340 C250,260 500,420 720,340 C940,260 1190,420 1440,340 L1440,520 C1190,600 940,440 720,520 C550,600 300,440 0,520 Z"
            fill="rgba(0,0,0,0.15)"
            style={{ animation: "waveMove2 6s ease-in-out infinite" }}
          />
          <path
            d="M0,380 C300,320 550,440 720,380 C890,320 1140,440 1440,380 L1440,540 C1140,600 890,480 720,540 C550,600 300,480 0,540 Z"
            fill="rgba(0,0,0,0.1)"
            style={{ animation: "waveMove3 10s ease-in-out infinite" }}
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 max-w-4xl mx-auto">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-primary">
                {isLoading ? "..." : `${percentage}%`} {suncConfig.content.title.suffix}
              </span>
              <br />
              {suncConfig.content.title.subtitle}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto lg:mx-0">{getDescription()}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center lg:justify-start">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground gap-2 bg-transparent cursor-pointer hover:bg-transparent hover:text-foreground"
                onClick={() => {
                  document.getElementById("multi-instance")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Terminal size={18} />
                Next
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground bg-transparent cursor-not-allowed pointer-events-none opacity-70 w-full sm:w-auto"
              >
                <span className="font-bold">
                  <span className="text-[#2dd4bf]">s</span>UNC
                </span>
              </Button>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div
              className="flex flex-col items-center gap-4"
              style={{
                animation: "tiltRotate 4s ease-in-out infinite",
                transformStyle: "preserve-3d",
              }}
            >
              {isLoading ? (
                <div className="w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <CircularProgress percentage={percentage} passed={suncData.passed} total={suncData.total} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

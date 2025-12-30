"use client"

export function WaveBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0, 212, 212)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="rgb(0, 180, 200)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="rgb(0, 150, 180)" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(0, 212, 212)" stopOpacity="0.06" />
            <stop offset="50%" stopColor="rgb(0, 190, 190)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="rgb(0, 160, 170)" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(0, 212, 212)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="rgb(0, 180, 180)" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Wave 1 - slowest, back */}
        <path fill="url(#wave-gradient-1)" className="animate-wave-1">
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,400 C150,350 350,450 500,400 C650,350 800,450 1000,400 C1200,350 1350,450 1440,400 L1440,900 L0,900 Z;
              M0,450 C150,400 350,500 500,450 C650,400 800,500 1000,450 C1200,400 1350,500 1440,450 L1440,900 L0,900 Z;
              M0,400 C150,450 350,350 500,400 C650,450 800,350 1000,400 C1200,450 1350,350 1440,400 L1440,900 L0,900 Z;
              M0,400 C150,350 350,450 500,400 C650,350 800,450 1000,400 C1200,350 1350,450 1440,400 L1440,900 L0,900 Z
            "
          />
        </path>

        {/* Wave 2 - medium speed, middle */}
        <path fill="url(#wave-gradient-2)" className="animate-wave-2">
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,500 C200,450 400,550 600,500 C800,450 1000,550 1200,500 C1350,450 1400,550 1440,500 L1440,900 L0,900 Z;
              M0,550 C200,500 400,600 600,550 C800,500 1000,600 1200,550 C1350,500 1400,600 1440,550 L1440,900 L0,900 Z;
              M0,480 C200,530 400,430 600,480 C800,530 1000,430 1200,480 C1350,530 1400,430 1440,480 L1440,900 L0,900 Z;
              M0,500 C200,450 400,550 600,500 C800,450 1000,550 1200,500 C1350,450 1400,550 1440,500 L1440,900 L0,900 Z
            "
          />
        </path>

        {/* Wave 3 - fastest, front */}
        <path fill="url(#wave-gradient-3)" className="animate-wave-3">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,600 C180,550 360,650 540,600 C720,550 900,650 1080,600 C1260,550 1380,650 1440,600 L1440,900 L0,900 Z;
              M0,650 C180,600 360,700 540,650 C720,600 900,700 1080,650 C1260,600 1380,700 1440,650 L1440,900 L0,900 Z;
              M0,580 C180,630 360,530 540,580 C720,630 900,530 1080,580 C1260,630 1380,530 1440,580 L1440,900 L0,900 Z;
              M0,600 C180,550 360,650 540,600 C720,550 900,650 1080,600 C1260,550 1380,650 1440,600 L1440,900 L0,900 Z
            "
          />
        </path>

        {/* Ribbon wave - PSP style flowing ribbon */}
        <path fill="none" stroke="url(#wave-gradient-1)" strokeWidth="2" className="opacity-30">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M-100,300 Q200,200 400,300 T800,300 T1200,300 T1600,300;
              M-100,350 Q200,250 400,350 T800,350 T1200,350 T1600,350;
              M-100,280 Q200,380 400,280 T800,280 T1200,280 T1600,280;
              M-100,300 Q200,200 400,300 T800,300 T1200,300 T1600,300
            "
          />
        </path>

        <path fill="none" stroke="url(#wave-gradient-2)" strokeWidth="1.5" className="opacity-20">
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
              M-100,350 Q250,250 500,350 T900,350 T1300,350 T1600,350;
              M-100,400 Q250,300 500,400 T900,400 T1300,400 T1600,400;
              M-100,320 Q250,420 500,320 T900,320 T1300,320 T1600,320;
              M-100,350 Q250,250 500,350 T900,350 T1300,350 T1600,350
            "
          />
        </path>
      </svg>
    </div>
  )
}

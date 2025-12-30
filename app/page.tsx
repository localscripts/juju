import { HeroSection } from "@/components/hero-section"
import { UncLevelsSection } from "@/components/unc-levels-section"
import { WaveBackground } from "@/components/wave-background"
import { MultiInstanceSection } from "@/components/multi-instance-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <WaveBackground />
      <div className="relative z-10">
        <HeroSection />
        <UncLevelsSection />
        <MultiInstanceSection />
      </div>
    </main>
  )
}

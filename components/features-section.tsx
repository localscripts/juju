import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Code, Settings, Eye, Target, RefreshCw, Layers } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Auto Fire",
    description: "Automatic execution with configurable delays and cooldowns",
  },
  {
    icon: Target,
    title: "Target Hitbox",
    description: "Advanced targeting system with head, body, and custom options",
  },
  {
    icon: Eye,
    title: "Visualization",
    description: "Crosshair follow, 3D circles, tracers, and FOV display",
  },
  {
    icon: Shield,
    title: "Anti Detection",
    description: "Network desync, velocity desync, and void hide protection",
  },
  {
    icon: Code,
    title: "Script Hub",
    description: "Built-in script hub with thousands of ready-to-use scripts",
  },
  {
    icon: Settings,
    title: "Config System",
    description: "Save and load configurations for different games",
  },
  {
    icon: RefreshCw,
    title: "Auto Update",
    description: "Automatic updates to stay compatible with latest patches",
  },
  {
    icon: Layers,
    title: "Multi Instance",
    description: "Run multiple instances simultaneously without conflicts",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Powerful</span> Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for advanced script execution with professional-grade tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

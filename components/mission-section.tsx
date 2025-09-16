import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Shield, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Smartphone,
    title: "Innovation First",
    description: "We curate the most innovative smartphones that push the boundaries of technology and design.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every device goes through rigorous testing to ensure premium quality and reliability.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Quick delivery, responsive support, and hassle-free returns for your peace of mind.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We're here to help you find the perfect smartphone.",
  },
]

export function MissionSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We believe technology should enhance your life, not complicate it. That's why we're committed to providing
            exceptional smartphones and outstanding service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-card border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

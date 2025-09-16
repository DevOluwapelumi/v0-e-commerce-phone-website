import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former Apple engineer with 15+ years in mobile technology. Passionate about bringing cutting-edge phones to everyone.",
    image: "/team-sarah-chen-ceo.jpg",
    expertise: ["Mobile Tech", "Strategy", "Innovation"],
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Product",
    bio: "Expert in smartphone trends and consumer needs. Ensures we stock the best devices for every lifestyle.",
    image: "/team-marcus-rodriguez-product.jpg",
    expertise: ["Product Strategy", "Market Analysis", "UX"],
  },
  {
    name: "Emily Watson",
    role: "Customer Experience Lead",
    bio: "Dedicated to making your phone buying journey smooth and enjoyable. Always here to help you choose right.",
    image: "/team-emily-watson-customer.jpg",
    expertise: ["Customer Service", "Support", "Training"],
  },
  {
    name: "David Kim",
    role: "Technical Specialist",
    bio: "Mobile technology enthusiast who tests every device thoroughly. Your go-to person for technical questions.",
    image: "/team-david-kim-technical.jpg",
    expertise: ["Hardware", "Testing", "Repairs"],
  },
]

export function TeamSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our passionate team of mobile technology experts is here to help you find the perfect smartphone for your
            needs and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{member.bio}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

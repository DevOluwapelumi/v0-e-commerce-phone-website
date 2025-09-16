import { AboutHero } from "@/components/about-hero"
import { MissionSection } from "@/components/mission-section"
import { TeamSection } from "@/components/team-section"
import { StorySection } from "@/components/story-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <StorySection />
    </main>
  )
}

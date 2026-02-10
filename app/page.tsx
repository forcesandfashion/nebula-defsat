import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Stats from "@/components/stats"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Draft from "@/components/draft"
import MembershipTeaser from "@/components/membership/MembershipTeaser"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Stats />
      <MembershipTeaser />
      <Draft />
      <CTA />
    </main>
  )
}

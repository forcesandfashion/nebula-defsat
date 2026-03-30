// app/membership/page.tsx
import BenefitsSection from "@/components/membership/BenefitsSection"
import ForumIntroduction from "@/components/membership/ForumIntroduction"
import HeroSection from "@/components/membership/HeroSection"
import MembershipTiers from "@/components/membership/MembershipTiers"
import RoadmapSection from "@/components/membership/RoadmapSection"

export default function Membership() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <HeroSection />
      <ForumIntroduction />
      <MembershipTiers />
      <BenefitsSection />
      <RoadmapSection />
    </div>
  )
}
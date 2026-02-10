import BenefitsSection from "@/components/membership/BenefitsSection"
import CTASection from "@/components/membership/CTAButtons"
import CTAButtons from "@/components/membership/CTAButtons"
import ForumIntroduction from "@/components/membership/ForumIntroduction"
import HeroSection from "@/components/membership/HeroSection"
import JointStatement from "@/components/membership/JointStatement"
import MembershipTiers from "@/components/membership/MembershipTiers"
import RoadmapSection from "@/components/membership/RoadmapSection"


export default function Membership() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ForumIntroduction />
      <MembershipTiers />
      <BenefitsSection />
      <RoadmapSection />
      {/* <CTASection /> */}
    </div>
  )
}
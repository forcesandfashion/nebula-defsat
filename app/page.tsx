// app/page.tsx
import dynamic from "next/dynamic"
import PageLoader from "@/components/PageLoader"
// Lazy loaded components
const Hero = dynamic(() => import("@/components/hero"), { loading: () => <PageLoader /> })
const SpaceSection = dynamic(() => import("@/components/spacesection"), { loading: () => <PageLoader /> })
const Partner = dynamic(() => import("@/components/partner/partner"), { loading: () => <PageLoader /> })
const IndSpaceSection = dynamic(() => import("@/components/IndSpaceStation"), { loading: () => <PageLoader /> })
const Venue = dynamic(() => import("@/components/venue"), { loading: () => <PageLoader /> })



export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Hero />
      <SpaceSection />
      <Partner />
      <IndSpaceSection />
      <Venue />
    </main>
  )
}
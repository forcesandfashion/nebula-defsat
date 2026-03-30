// app/components/membership/JointStatement.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  TrendingUp, 
  Cloud, 
  Zap, 
  Heart, 
  Users,
  Leaf,
  Building,
  Target,
  Globe,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const pillars = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Trade & Prosperity",
    description: "Enhanced Trade Partnership with comprehensive Free Trade Agreement intent"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Defence & Security",
    description: "Strategic partnership for cyber, space security and Indo-Pacific stability"
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Climate & Energy",
    description: "Co-leading global climate action with green hydrogen initiatives"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health",
    description: "Global force for good in health with research and pandemic resilience"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "People Connection",
    description: "Strengthening the 1.6m Britons of Indian origin living bridge"
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Global Cooperation",
    description: "Multilateral cooperation in G20, WEF, and other global forums"
  }
]

const highlights = [
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Virtual Hydrogen Hub",
    description: "Accelerating affordable green hydrogen",
    color: "text-[#8B0000]"
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Green Grids Initiative",
    description: "£75M for cleantech innovations",
    color: "text-[#8B0000]"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Cyber Security",
    description: "Joint work on open, accessible cyberspace",
    color: "text-[#8B0000]"
  }
]

export default function JointStatement() {
  return (
    <section id="statement" className="py-20 bg-[#F5F5F5] relative overflow-hidden">
      {/* Tactical Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%238B0000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#8B0000]" />
            <div className="flex items-center gap-2 px-4 py-2 border border-[#8B0000]/30 bg-white">
              <Target className="h-4 w-4 text-[#8B0000]" />
              <span className="text-[#8B0000] font-bold text-sm uppercase tracking-wider">
                STRATEGIC FRAMEWORK
              </span>
            </div>
            <div className="h-px w-12 bg-[#8B0000]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#1A1A1A]">UK-India </span>
            <span className="text-[#8B0000]">2030 Roadmap</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
            A comprehensive strategic partnership guiding cooperation for the next decade, 
            covering all aspects of multi-faceted relations between India and the UK.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Image & Description */}
          <div className="lg:col-span-2">
            <div className="relative h-[300px] overflow-hidden mb-8 border border-[#E5E5E5]">
              <Image
                src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="UK-India Partnership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/60 to-[#1A1A1A]/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">Comprehensive Strategic Partnership</h3>
                  <p className="text-xl">Elevating UK-India relations to new heights</p>
                </div>
              </div>
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/50" />
            </div>

            <div className="space-y-4">
              <p className="text-[#4A4A4A] leading-relaxed">
                The ambitious UK India 2030 Roadmap will help elevate the India-UK relationship 
                to a Comprehensive Strategic Partnership (CSP), strategically guiding cooperation 
                for the next ten years.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                An annual Strategic Review meeting will be held at the Foreign Minister level to 
                monitor implementation and report progress to our Prime Ministers.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8B0000]" />
                  <span className="text-sm text-[#6B6B6B]">40 Strategic Points</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8B0000]" />
                  <span className="text-sm text-[#6B6B6B]">6 Key Pillars</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8B0000]" />
                  <span className="text-sm text-[#6B6B6B]">2030 Vision</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Key Highlights Card */}
          <div>
            <Card className="h-full bg-white border border-[#E5E5E5] shadow-md hover:shadow-lg transition-all">
              <CardHeader className="border-b border-[#E5E5E5] bg-[#F8F8F8]">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <div className="p-2 bg-[#F8F8F8] border border-[#E5E5E5]">
                    <Zap className="h-5 w-5 text-[#8B0000]" />
                  </div>
                  <span className="text-[#1A1A1A]">Key Highlights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 hover:bg-[#F8F8F8] transition-colors border-l-2 border-transparent hover:border-l-[#8B0000]">
                    <div className="p-2 bg-[#F8F8F8] border border-[#E5E5E5]">
                      <div className={item.color}>{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A]">{item.title}</h4>
                      <p className="text-sm text-[#6B6B6B]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Strategic Pillars Grid */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#8B0000]" />
              <span className="text-[#8B0000] font-bold text-sm uppercase tracking-wider">
                STRATEGIC PILLARS
              </span>
              <div className="h-px w-8 bg-[#8B0000]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A]">Six Pillars of Cooperation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="bg-white border border-[#E5E5E5] shadow-md hover:shadow-lg hover:border-[#8B0000]/30 transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#F8F8F8] border border-[#E5E5E5] group-hover:border-[#8B0000] group-hover:bg-[#F8F8F8] transition-all">
                      <div className="text-[#6B6B6B] group-hover:text-[#8B0000] transition-colors">
                        {pillar.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#8B0000] transition-colors">
                      {pillar.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-12 bg-white border-l-4 border-[#8B0000] shadow-md">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#F8F8F8] border border-[#E5E5E5]">
                <Globe className="h-8 w-8 text-[#8B0000]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-1">
                  Be Part of the Strategic Partnership
                </h4>
                <p className="text-[#6B6B6B]">
                  Join the UK-India CEO Forum and shape the future of bilateral relations
                </p>
              </div>
            </div>
            <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-6 rounded-none font-bold group">
              <Link href="#tiers" className="flex items-center gap-2">
                Explore Membership
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 bg-white border border-[#E5E5E5]">
            <div className="text-2xl font-bold text-[#8B0000]">2010</div>
            <div className="text-xs text-[#6B6B6B] uppercase tracking-wide">Established</div>
          </div>
          <div className="text-center p-4 bg-white border border-[#E5E5E5]">
            <div className="text-2xl font-bold text-[#8B0000]">40+</div>
            <div className="text-xs text-[#6B6B6B] uppercase tracking-wide">Strategic Points</div>
          </div>
          <div className="text-center p-4 bg-white border border-[#E5E5E5]">
            <div className="text-2xl font-bold text-[#8B0000]">6</div>
            <div className="text-xs text-[#6B6B6B] uppercase tracking-wide">Key Pillars</div>
          </div>
          <div className="text-center p-4 bg-white border border-[#E5E5E5]">
            <div className="text-2xl font-bold text-[#8B0000]">2030</div>
            <div className="text-xs text-[#6B6B6B] uppercase tracking-wide">Vision Target</div>
          </div>
        </div>
      </div>
    </section>
  )
}
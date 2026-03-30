'use client'

// app/components/membership/ForumIntroduction.tsx
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Globe, 
  Users, 
  Award, 
  Briefcase, 
  Shield,
  TrendingUp,
  Building,
  Heart,
  Leaf,
  Cpu,
  FileText,
  MessageSquare,
  Calendar,
  Banknote,
  Zap
} from 'lucide-react'
import Link from 'next/link'

const pillars = [
  { title: "Trade & Prosperity", description: "Enhanced Trade Partnership leading to comprehensive Free Trade Agreement", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Defence & Security", description: "Cyber, space security and strategic partnership for Indo-Pacific stability", icon: <Shield className="h-5 w-5" /> },
  { title: "Climate & Clean Energy", description: "Co-leading global climate action with green hydrogen initiatives", icon: <Leaf className="h-5 w-5" /> },
  { title: "Health", description: "Global health security, pandemic resilience and research collaboration", icon: <Heart className="h-5 w-5" /> },
  { title: "Connecting People", description: "Strengthening the 1.6m Britons of Indian origin living bridge", icon: <Users className="h-5 w-5" /> },
  { title: "Global Cooperation", description: "Multilateral cooperation in G20, WEF, BRICS and global forums", icon: <Globe className="h-5 w-5" /> }
]

const initiatives = [
  { icon: <Cpu className="h-5 w-5" />, title: "UK-India Tech Summit", description: "Annual technology innovation summit in London and Liverpool" },
  { icon: <Briefcase className="h-5 w-5" />, title: "Cross-border Trade", description: "Trade and investment delegations between UK and India" },
  { icon: <Award className="h-5 w-5" />, title: "L&D Cultural Tours", description: "Learning and development cultural exchange programs" },
  { icon: <MessageSquare className="h-5 w-5" />, title: "Policy Maker Access", description: "Direct connections with government policymakers" }
]

export default function ForumIntroduction() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-400" />
            <div className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 bg-white rounded-full">
              <Target className="h-3.5 w-3.5 text-orange-600" />
              <span className="text-orange-600 font-semibold text-xs uppercase tracking-wider">
                ESTABLISHED 2010
              </span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-400" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
            UK-India CEO Forum
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            The premier platform bringing British and Indian Business Leaders together 
            to forge strategic partnerships and drive economic growth.
          </p>
        </div>

        {/* Historical Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-[350px]">
                <Image
                  src="/membership-image-1.jpg"
                  alt="UK-India Diplomatic Meeting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 border-l-4 border-orange-500 pl-4">
              <Building className="h-5 w-5 text-orange-600" />
              <h2 className="text-2xl font-bold text-black">Our Foundation</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Former Prime Minister David Cameron hosted the first meeting of the UK-India CEO Forum 
              on 3rd February 2010 at Downing Street, to discuss how best to improve trade between 
              the UK and India.
            </p>

            <blockquote className="border-l-4 border-orange-500 pl-5 py-3 my-5 bg-orange-50/30 p-5 rounded-r-xl">
              <p className="text-base italic text-gray-700">
                "I think this is an extremely modern, dynamic, forward-looking relationship 
                between two countries with very complementary interests."
              </p>
              <footer className="mt-2 font-semibold text-orange-600 text-sm">
                — David Cameron, Former Prime Minister
              </footer>
            </blockquote>

            <p className="text-gray-700">
              He has also shown interest in a <span className="font-semibold text-orange-600">"stronger, wider and deeper"</span> 
              relationship between Britain and India.
            </p>
          </div>
        </div>

        {/* Global Impact & Events */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-600 font-semibold text-xs uppercase tracking-wider">GLOBAL INITIATIVES</span>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-orange-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Global Impact & Reach
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Since its inception, the UK-India CEO Forum has established itself as a key platform 
              for international business collaboration and policy dialogue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-5">
                  <div className="p-2 bg-orange-50 rounded-xl w-fit mb-3">
                    <div className="text-orange-600">{initiative.icon}</div>
                  </div>
                  <h3 className="text-base font-bold text-black mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 2030 Roadmap & Joint Statement */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-600 font-semibold text-xs uppercase tracking-wider">
                2030 ROADMAP
              </span>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-orange-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Comprehensive Strategic Partnership
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              The UK-India 2030 Roadmap represents a decade-long commitment to elevate 
              bilateral relations to new heights through shared goals and mutual prosperity.
            </p>
          </div>

          {/* Strategic Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {pillars.map((pillar, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-5">
                  <div className="p-2 bg-orange-50 rounded-xl w-fit mb-3">
                    <div className="text-orange-600">{pillar.icon}</div>
                  </div>
                  <h3 className="text-base font-bold text-black mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Initiatives */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4 border-l-4 border-orange-500 pl-4">
                  <Zap className="h-5 w-5 text-orange-600" />
                  <h3 className="text-lg font-bold text-black">Key Initiatives 2022-2024</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Virtual Hydrogen Science and Innovation Hub",
                    "£75M Green Grids Initiative funding",
                    "Joint cyber security framework",
                    "Electrification of public transport across India",
                    "Cleantech innovations for Indo-Pacific and Africa"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4 border-l-4 border-orange-500 pl-4">
                  <FileText className="h-5 w-5 text-orange-600" />
                  <h3 className="text-lg font-bold text-black">Joint Statement Highlights</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 text-sm">
                    The UK-India Joint Statement constitutes 40 points addressing opportunities 
                    and methods to resolve underlying concerns while facilitating better growth 
                    opportunities with mutual benefits.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-orange-50 border border-orange-100 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">40</div>
                      <div className="text-gray-600 text-xs">Strategic Points</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 border border-orange-100 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">6</div>
                      <div className="text-gray-600 text-xs">Key Pillars</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Ready to Join the Movement?
              </h3>
              <p className="text-gray-700 mb-5 text-sm">
                Become part of the premier platform connecting British and Indian 
                business leaders. Access exclusive opportunities, network with 
                policymakers, and shape the future of UK-India relations.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg shadow-md">
                <Calendar className="mr-2 h-4 w-4" />
                <Link href="https://chat.whatsapp.com/GnRSIeesjj3Eo5OUCaNLtA">
                  Register Now
                </Link>
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <MessageSquare className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-black font-semibold text-sm">WhatsApp Community</div>
                    <div className="text-gray-500 text-xs">Instant access to networking</div>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Banknote className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-black font-semibold text-sm">Multiple Payment Options</div>
                    <div className="text-gray-500 text-xs">NDS Bank, UPI, PayTM QR Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
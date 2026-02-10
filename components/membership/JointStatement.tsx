import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  TrendingUp, 
  Cloud, 
  Zap, 
  Heart, 
  Users,
  Leaf,
  Building
} from 'lucide-react'
import Image from 'next/image'

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

export default function JointStatement() {
  return (
    <section id="statement" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            UK-India <span className="text-blue-600">2030 Roadmap</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive strategic partnership guiding cooperation for the next decade, 
            covering all aspects of multi-faceted relations between India and the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="relative h-[300px] rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="UK-India Partnership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-orange-900/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">Comprehensive Strategic Partnership</h3>
                  <p className="text-xl">Elevating UK-India relations to new heights</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                The ambitious UK India 2030 Roadmap will help elevate the India-UK relationship 
                to a Comprehensive Strategic Partnership (CSP), strategically guiding cooperation 
                for the next ten years.
              </p>
              <p className="text-gray-700">
                An annual Strategic Review meeting will be held at the Foreign Minister level to 
                monitor implementation and report progress to our Prime Ministers.
              </p>
            </div>
          </div>

          <div>
            <Card className="h-full bg-gradient-to-b from-blue-50 to-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Zap className="mr-2 h-6 w-6 text-blue-600" />
                  Key Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Cloud className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Virtual Hydrogen Hub</h4>
                    <p className="text-sm text-gray-600">Accelerating affordable green hydrogen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Leaf className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Green Grids Initiative</h4>
                    <p className="text-sm text-gray-600">£75M for cleantech innovations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cyber Security</h4>
                    <p className="text-sm text-gray-600">Joint work on open, accessible cyberspace</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

// app/components/membership/BenefitsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Globe, 
  Target, 
  Shield, 
  TrendingUp, 
  Award,
  Briefcase,
  Network,
  Zap,
  Calendar,
  FileText
} from 'lucide-react'

const benefits = [
  { icon: <Target className="h-6 w-6" />, title: "Strategic Networking", description: "Direct access to 500+ C-level executives from UK and India" },
  { icon: <Globe className="h-6 w-6" />, title: "Global Events", description: "Exclusive invitations to G20, WEF, and international summits" },
  { icon: <TrendingUp className="h-6 w-6" />, title: "Trade Delegations", description: "Quarterly pitch nights with 3-4 cross-border opportunities" },
  { icon: <Shield className="h-6 w-6" />, title: "Policy Access", description: "Exclusive ministry-level delegations and government meetings" },
  { icon: <Award className="h-6 w-6" />, title: "Executive Education", description: "L&D programs by domain experts and industry leaders" },
  { icon: <Briefcase className="h-6 w-6" />, title: "Investment Rounds", description: "Private investor meetings and funding opportunities" },
  { icon: <Network className="h-6 w-6" />, title: "Digital Community", description: "24/7 access to exclusive LinkedIn, Discord, and Telegram groups" },
  { icon: <Zap className="h-6 w-6" />, title: "Tech Innovation", description: "Access to UK-India Tech Summit and hack-a-thons" }
]

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-400" />
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">EXCLUSIVE BENEFITS</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Unparalleled Member Advantages
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Gain access to exclusive opportunities, resources, and networks that 
            accelerate business growth and strategic partnerships.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
          {/* Monthly Events */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-black">Monthly Events Calendar</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Breakfast Club Receptions', 'City Chapter Meets', 'Industry Roundtables', 'Virtual Masterclasses'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Resources */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <FileText className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-black">Premium Resources</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Research Papers', 'Industry Reports', 'Market Analysis', 'Policy Briefings'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
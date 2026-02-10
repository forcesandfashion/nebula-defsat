import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Users, 
  Globe, 
  Target, 
  Shield, 
  TrendingUp, 
  Award,
  Briefcase,
  Network,
  Zap,
  Calendar,
  FileText,
  Linkedin
} from 'lucide-react'

const benefits = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Strategic Networking",
    description: "Direct access to 500+ C-level executives from UK and India",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Events",
    description: "Exclusive invitations to G20, WEF, and international summits",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Trade Delegations",
    description: "Quarterly pitch nights with 3-4 cross-border opportunities",
    gradient: "from-blue-700 to-blue-800"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Policy Access",
    description: "Exclusive ministry-level delegations and government meetings",
    gradient: "from-blue-800 to-blue-900"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Executive Education",
    description: "L&D programs by domain experts and industry leaders",
    gradient: "from-blue-900 to-blue-950"
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Investment Rounds",
    description: "Private investor meetings and funding opportunities",
    gradient: "from-blue-950 to-indigo-900"
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Digital Community",
    description: "24/7 access to exclusive LinkedIn, Discord, and Telegram groups",
    gradient: "from-indigo-900 to-purple-900"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Tech Innovation",
    description: "Access to UK-India Tech Summit and hack-a-thons",
    gradient: "from-purple-900 to-violet-900"
  }
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">EXCLUSIVE BENEFITS</span>
            <div className="h-px w-8 bg-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Unparalleled </span>
            <span className="premium-text-gradient">Member Advantages</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Gain access to exclusive opportunities, resources, and networks that 
            accelerate business growth and strategic partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="premium-card-gradient border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover-glow"
            >
              <CardHeader>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} w-fit mb-4`}>
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg font-bold text-white">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Digital Platforms */}
        {/* <Card className="premium-card-gradient border border-blue-500/20 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Linkedin className="h-6 w-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Digital Ecosystem Access</h3>
            </div>
            <p className="text-blue-200 mb-8">
              Connect with fellow members through our exclusive digital platforms, 
              facilitating continuous networking and opportunity sharing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {['LinkedIn', 'Discord', 'Telegram', 'WhatsApp', 'ClubHouse', 'Facebook'].map((platform) => (
                <div 
                  key={platform}
                  className="glass-effect border border-blue-500/20 rounded-lg p-4 text-center hover:border-blue-500/40 transition-colors cursor-pointer"
                >
                  <div className="text-blue-300 font-semibold">{platform}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="premium-card-gradient border border-blue-500/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-5 w-5 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">Monthly Events Calendar</h4>
              </div>
              <ul className="space-y-3">
                {['Breakfast Club Receptions', 'City Chapter Meets', 'Industry Roundtables', 'Virtual Masterclasses'].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span className="text-blue-200">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="premium-card-gradient border border-blue-500/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-5 w-5 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">Premium Resources</h4>
              </div>
              <ul className="space-y-3">
                {['Research Papers', 'Industry Reports', 'Market Analysis', 'Policy Briefings'].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span className="text-blue-200">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
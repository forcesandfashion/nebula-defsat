import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Leaf, 
  Heart,
  Users,
  Zap,
  Globe
} from 'lucide-react'

const milestones = [
  { year: '2024', title: 'Enhanced Trade Partnership', icon: <TrendingUp /> },
  { year: '2025', title: 'Strategic Defense Collaboration', icon: <Shield /> },
  { year: '2026', title: 'Green Energy Initiatives', icon: <Leaf /> },
  { year: '2027', title: 'Health Partnership Expansion', icon: <Heart /> },
  { year: '2030', title: 'Comprehensive Strategic Partnership', icon: <Target /> },
]

const pillars = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Trade & Prosperity",
    description: "Enhanced Trade Partnership leading to comprehensive FTA",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Defense & Security",
    description: "Cyber, space security and Indo-Pacific stability",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Climate & Energy",
    description: "Co-leading global climate action initiatives",
    color: "from-blue-700 to-blue-800"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health",
    description: "Global health security and pandemic resilience",
    color: "from-blue-800 to-blue-900"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "People Connection",
    description: "Strengthening cultural and educational ties",
    color: "from-blue-900 to-indigo-900"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Cooperation",
    description: "Multilateral engagement in international forums",
    color: "from-indigo-900 to-purple-900"
  }
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">2030 ROADMAP</span>
            <div className="h-px w-8 bg-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Strategic </span>
            <span className="premium-text-gradient">Vision 2030</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A decade-long roadmap guiding the comprehensive strategic partnership 
            between the United Kingdom and India.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <Card className="premium-card-gradient border border-blue-500/20 inline-block">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${milestone.color}`}>
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">{milestone.year}</div>
                          <div className="text-white font-semibold">{milestone.title}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-black" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="premium-card-gradient border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover-glow"
            >
              <CardContent className="p-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} w-fit mb-4`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-blue-200 text-sm">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Highlights */}
        <Card className="premium-card-gradient border border-blue-500/20 mt-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Virtual Hydrogen Hub</h4>
                </div>
                <p className="text-blue-200">
                  Accelerating affordable green hydrogen development through innovation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-5 w-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Green Grids Initiative</h4>
                </div>
                <p className="text-blue-200">
                  £75M commitment for cleantech innovations across Indo-Pacific and Africa.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Cyber Security</h4>
                </div>
                <p className="text-blue-200">
                  Joint framework for open, accessible, and peaceful cyberspace.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
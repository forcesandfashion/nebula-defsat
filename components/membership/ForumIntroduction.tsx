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
  {
    title: "Trade & Prosperity",
    description: "Enhanced Trade Partnership leading to comprehensive Free Trade Agreement",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Defence & Security",
    description: "Cyber, space security and strategic partnership for Indo-Pacific stability",
    icon: <Shield className="h-6 w-6" />,
    color: "from-blue-600 to-blue-700"
  },
  {
    title: "Climate & Clean Energy",
    description: "Co-leading global climate action with green hydrogen initiatives",
    icon: <Leaf className="h-6 w-6" />,
    color: "from-blue-700 to-blue-800"
  },
  {
    title: "Health",
    description: "Global health security, pandemic resilience and research collaboration",
    icon: <Heart className="h-6 w-6" />,
    color: "from-blue-800 to-blue-900"
  },
  {
    title: "Connecting People",
    description: "Strengthening the 1.6m Britons of Indian origin living bridge",
    icon: <Users className="h-6 w-6" />,
    color: "from-blue-900 to-indigo-900"
  },
  {
    title: "Global Cooperation",
    description: "Multilateral cooperation in G20, WEF, BRICS and global forums",
    icon: <Globe className="h-6 w-6" />,
    color: "from-indigo-900 to-purple-900"
  }
]

const initiatives = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "UK-India Tech Summit",
    description: "Annual technology innovation summit in London and Liverpool"
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Cross-border Trade",
    description: "Trade and investment delegations between UK and India"
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "L&D Cultural Tours",
    description: "Learning and development cultural exchange programs"
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Policy Maker Access",
    description: "Direct connections with government policymakers"
  }
]

export default function ForumIntroduction() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
              <Target className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 font-medium text-sm uppercase tracking-wider">
                ESTABLISHED 2010
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">UK-India </span>
            <span className="premium-text-gradient">CEO Forum</span>
          </h1>
          
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            The premier platform bringing British and Indian Business Leaders together 
            to forge strategic partnerships and drive economic growth.
          </p>
        </div>

        {/* Historical Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/30">
              <div className="relative h-[500px]">
                <Image
                  src={"/membership-image-1.jpg"}
                  alt="UK-India Diplomatic Meeting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-white">
                    <div className="text-sm text-blue-300 mb-2">3rd February 2010</div>
                    <h3 className="text-2xl font-bold">First Meeting at Downing Street</h3>
                    <p className="text-blue-100 mt-2">Hosted by Former Prime Minister David Cameron</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                <Building className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Foundation</h2>
            </div>

            <p className="text-blue-200 leading-relaxed">
              Former Prime Minister David Cameron hosted the first meeting of the UK-India CEO Forum 
              on 3rd February 2010 at Downing Street, to discuss how best to improve trade between 
              the UK and India.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8">
              <p className="text-xl italic text-blue-100">
                "I think this is an extremely modern, dynamic, forward-looking relationship 
                between two countries with very complementary interests."
              </p>
              <footer className="mt-4 font-semibold text-blue-300">
                — David Cameron, Former Prime Minister
              </footer>
            </blockquote>

            <p className="text-blue-200 leading-relaxed">
              He has also shown interest in a <span className="text-white font-semibold">"stronger, wider and deeper"</span> 
              relationship between Britain and India.
            </p>
          </div>
        </div>

        {/* Global Impact & Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Global </span>
              <span className="premium-text-gradient">Impact & Reach</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Since its inception, the UK-India CEO Forum has established itself as a key platform 
              for international business collaboration and policy dialogue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="premium-card-gradient border border-blue-500/20">
                <CardContent className="p-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
                    {initiative.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-blue-200 text-sm">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Global Forums Gallery */}
          <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
              {[
                "/membership-image-1.jpg",
                "/membership-page-2.jpg",
                "/membership-page-3.jfif",
                "/membership-page-4.jfif",
                "/membership-page-5.jfif",
                "/membership-page-6.jfif"
              ].map((src, index) => (
                <div key={index} className="relative h-48 overflow-hidden group">
                  <Image
                    src={src}
                    alt={`Global Forum ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white text-sm">
                      {['G20 Summit', 'World Economic Forum', 'Global Entrepreneurs Congress', 
                        'TEDx Education', 'BRICS Summit', 'G7 YGL'][index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-blue-300 text-sm">
                The Forum has sent delegates to major global platforms including G20, WEF, 
                TEDx Education, BRICS Summit, and G7 YGL
              </p>
            </div> */}
          </div>
        </div>

        {/* 2030 Roadmap & Joint Statement */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                2030 Roadmap
              </span>
              <div className="h-px w-8 bg-blue-500" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Comprehensive Strategic </span>
              <span className="premium-text-gradient">Partnership</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The UK-India 2030 Roadmap represents a decade-long commitment to elevate 
              bilateral relations to new heights through shared goals and mutual prosperity.
            </p>
          </div>

          {/* Strategic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

          {/* Key Initiatives */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="premium-card-gradient border border-blue-500/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Zap className="h-6 w-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Key Initiatives 2022-2024</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Virtual Hydrogen Science and Innovation Hub",
                    "£75M Green Grids Initiative funding",
                    "Joint cyber security framework",
                    "Electrification of public transport across India",
                    "Cleantech innovations for Indo-Pacific and Africa"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                      <span className="text-blue-100">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card-gradient border border-blue-500/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="h-6 w-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Joint Statement Highlights</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-blue-200">
                    The UK-India Joint Statement constitutes 40 points addressing opportunities 
                    and methods to resolve underlying concerns while facilitating better growth 
                    opportunities with mutual benefits.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-white mb-1">40</div>
                      <div className="text-blue-300 text-sm">Strategic Points</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-white mb-1">6</div>
                      <div className="text-blue-300 text-sm">Key Pillars</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Vision */}
          <Card className="premium-card-gradient border border-blue-500/20 mb-12">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Vision 2030</h3>
              </div>
              <p className="text-blue-200 leading-relaxed mb-6">
                India and the UK will work in a strategic partnership to strengthen efforts to tackle 
                cyber, space, crime, and terrorist threats and develop a free, open, and secure 
                Indo-Pacific region.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Defence Collaboration</h4>
                  <p className="text-blue-300 text-sm">
                    Research, Innovation, Technology, and Industry Investment
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Annual Review</h4>
                  <p className="text-blue-300 text-sm">
                    Foreign Minister level strategic review meetings
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Living Bridge</h4>
                  <p className="text-blue-300 text-sm">
                    1.6m Britons of Indian origin connecting our countries
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Section */}
        <div className="relative rounded-2xl overflow-hidden border border-blue-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-black/50 to-blue-900/20" />
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Join the Movement?
                </h3>
                <p className="text-blue-200 mb-6">
                  Become part of the premier platform connecting British and Indian 
                  business leaders. Access exclusive opportunities, network with 
                  policymakers, and shape the future of UK-India relations.
                </p>
                <div className="flex flex-wrap ">
                  <Button className="premium-blue-gradient text-white px-8">
                    <Calendar className="mr-3 h-5 w-5" />
                    <Link href="https://chat.whatsapp.com/GnRSIeesjj3Eo5OUCaNLtA">
                    
                    Register Now
                    </Link>
                    
                  </Button>
                  {/* <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:text-white">
                    <Banknote className="mr-3 h-5 w-5" />
                    View Payment Options
                  </Button> */}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">WhatsApp Community</div>
                      <div className="text-blue-300 text-sm">Instant access to networking</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-center space-x-3">
                    <Banknote className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">Multiple Payment Options</div>
                      <div className="text-blue-300 text-sm">NDS Bank, UPI, PayTM QR Code</div>
                    </div>
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
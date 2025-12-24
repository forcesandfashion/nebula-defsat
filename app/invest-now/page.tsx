// app/components/InvestNow.tsx
"use client"

import { useState } from "react"
import { 
  Target, 
  Users, 
  Phone, 
  MessageSquare,
  ChevronRight,
  CheckCircle,
  Plane,
  Rocket,
  Briefcase,
  TrendingUp,
  Lightbulb,
  Handshake,
  Network,
  Globe,
  Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvestNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "investor"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const eventSteps = [
    {
      number: 1,
      title: "Application & Screening",
      description: "Submit your application for evaluation",
      icon: Rocket
    },
    {
      number: 2,
      title: "Pitch Preparation",
      description: "Refine your pitch with expert guidance",
      icon: Lightbulb
    },
    {
      number: 3,
      title: "Investor Meetings",
      description: "Present to top-tier investors",
      icon: Handshake
    },
    {
      number: 4,
      title: "Deal Negotiation",
      description: "Secure game-changing funding",
      icon: TrendingUp
    },
    {
      number: 5,
      title: "Ecosystem Integration",
      description: "Network with industry leaders",
      icon: Network
    },
    {
      number: 6,
      title: "Growth Support",
      description: "Post-investment mentorship & support",
      icon: Briefcase
    }
  ]

  const targetAudience = [
    { role: "Startups", description: "Pitch groundbreaking ideas" },
    { role: "Investors", description: "Discover promising ventures" },
    { role: "Ecosystem Partners", description: "Network with innovators" },
    { role: "Industry Leaders", description: "Witness next big ideas" }
  ]

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-defence-navy via-black to-purple-900/30" />
      
      {/* Animated Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-defence-saffron/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-defence-saffron/10 border border-defence-saffron/30 mb-6">
            <Target className="w-4 h-4 text-defence-saffron" />
            <p className="text-defence-saffron text-sm font-mono tracking-widest">DEFSAT INNOVATION DEALROOM</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-defence-saffron via-white to-blue-400 bg-clip-text text-transparent">
              Your Next Big Win
            </span>
            <span className="block text-white mt-4">Awaits at Nebula DealRoom</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Are you looking for your next big win, or an enthusiast eager to witness the future of 
            DefSAT Innovation? You can't afford to miss the DealRoom. This is where the future of 
            🇮🇳 Defence, DeepTech, & SpaceTech ventures and investments collide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Event Overview */}
          <div className="space-y-12">
            {/* Who is it for? */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-defence-saffron" />
                <h2 className="text-2xl font-bold text-white">Who Should Join?</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-defence-saffron mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Limited Spots Available</p>
                    <p className="text-white/60 text-sm mt-1">Secure your position now</p>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed">
                  This is more than just an audition — it's where the future of Bharat 2.0 in 
                  Defence, DeepTech, & SpaceTech ventures and investments collide. Be part of 
                  this unmissable experience.
                </p>
              </div>
              
              <div className="grid gap-4">
                {targetAudience.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-defence-saffron/30 transition-all group"
                  >
                    <div className="w-2 h-2 bg-defence-saffron rounded-full mt-2" />
                    <div className="flex-1">
                      <div className="text-white font-medium mb-1">{item.role}</div>
                      <div className="text-white/60 text-sm">{item.description}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-defence-saffron opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Now Section */}
            <div className="bg-gradient-to-br from-defence-navy/50 to-purple-900/30 rounded-2xl p-8 border border-defence-saffron/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Ready to Make History?</h3>
                  <p className="text-white/80">
                    Join us at Nebula DealRoom and be part of the innovation revolution. 
                    Limited spots are available for this exclusive event.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-defence-saffron to-orange-600 hover:from-orange-600 hover:to-defence-saffron text-white py-6 text-lg rounded-xl"
                  >
                    <a 
                      href="https://bit.ly/4i9MSEP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <Rocket className="w-5 h-5" />
                      Apply Now - Limited Seats Available
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </Button>
                  
                  <div className="text-center text-white/60 text-sm">
                    or connect with our team
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://wa.me/919638413900" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
                    >
                      <MessageSquare className="w-5 h-5 text-green-400" />
                      <span className="text-white font-medium">WhatsApp</span>
                    </a>
                    
                    <a 
                      href="tel:+919638413900" 
                      className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
                    >
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Event Structure */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-6 h-6 text-defence-saffron" />
                <h2 className="text-2xl font-bold text-white">What to Expect?</h2>
              </div>
              
              <div className="space-y-6">
                {eventSteps.map((step) => {
                  const Icon = step.icon
                  return (
                    <div 
                      key={step.number} 
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-defence-saffron/30 transition-all group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-defence-saffron to-orange-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-defence-saffron" />
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-5 h-5 text-defence-saffron" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-5 h-5 text-defence-saffron" />
                  <h3 className="text-white font-bold">For Startups</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-defence-saffron" />
                    Pitch to top-tier investors
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-defence-saffron" />
                    Secure game-changing funding
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-defence-saffron" />
                    Expert mentorship & guidance
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Handshake className="w-5 h-5 text-blue-400" />
                  <h3 className="text-white font-bold">For Investors</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    Discover promising startups
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    Seize investment opportunities
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    Network with industry leaders
                  </li>
                </ul>
              </div>
            </div>

            {/* Special Focus Areas */}
            <div className="bg-gradient-to-br from-defence-navy/50 to-blue-900/30 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-white" />
                <h3 className="text-white font-bold">Focus Areas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Defence Tech", "DeepTech", "SpaceTech", "AI & Robotics", "Cyber Security", "Quantum Computing"].map((area, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/20">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        {/* <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-defence-navy/30 to-purple-900/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">Express Your Interest</h2>
              <p className="text-white/70">
                Submit your details and our team will contact you with event details and participation information.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-defence-saffron"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-defence-saffron"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-defence-saffron"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">I am primarily a</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-defence-saffron"
                >
                  <option value="investor">Investor / VC</option>
                  <option value="startup">Startup Founder</option>
                  <option value="corporate">Corporate Executive</option>
                  <option value="government">Government Official</option>
                  <option value="researcher">Researcher / Academic</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-defence-saffron to-orange-600 hover:from-orange-600 hover:to-defence-saffron text-white py-6 text-lg rounded-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Request Event Details
              </Button>
              
              <p className="text-center text-white/60 text-sm">
                By submitting, you agree to receive event updates and related communications.
              </p>
            </form>
          </div>
        </div> */}

        {/* Contact Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-defence-navy/50 to-purple-900/30 border border-defence-saffron/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Assistance?</h3>
              <p className="text-white/80">Our DealRoom team is available to answer your questions</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919638413900" 
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5 text-defence-saffron" />
                <div className="text-left">
                  <div className="text-white text-sm">Call Now</div>
                  <div className="text-white font-bold">+91 96384 13900</div>
                </div>
              </a>
              
              <Button 
                asChild
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-defence-saffron to-orange-600 text-white hover:from-orange-600 hover:to-defence-saffron"
              >
                <a 
                  href="https://bit.ly/4i9MSEP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Rocket className="w-5 h-5" />
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute top-1/4 right-10 animate-float">
        <Rocket className="w-12 h-12 text-defence-saffron opacity-30" />
      </div>
      
      <div className="absolute bottom-1/4 left-10 animate-float" style={{ animationDelay: '2s' }}>
        <TrendingUp className="w-10 h-10 text-blue-400 opacity-30" />
      </div>

      {/* Bharat 2.0 Banner */}
      <div className="absolute bottom-10 right-10">
        <div className="bg-gradient-to-r from-defence-saffron to-orange-600 px-6 py-3 rounded-full shadow-2xl">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Bharat 2.0 Innovation Hub</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
// app/components/InvestNow.tsx
"use client"

import { useState } from "react"
import { 
  Target, 
  GraduationCap, 
  Shield, 
  Zap, 
  Award, 
  Users, 
  Phone, 
  MessageSquare,
  ChevronRight,
  CheckCircle,
  Plane,
  Cpu,
  Rocket,
  Briefcase,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvestNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "general"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const programSteps = [
    {
      number: 1,
      title: "Getting Started",
      description: "Foundation in drone technology and regulations",
      icon: Rocket
    },
    {
      number: 2,
      title: "Simulator Mastery & Flight Theory",
      description: "Virtual training and theoretical knowledge",
      icon: Cpu
    },
    {
      number: 3,
      title: "Building Your Own Drone",
      description: "Hands-on assembly and customization",
      icon: Target
    },
    {
      number: 4,
      title: "Programming & Software Setup",
      description: "Coding, software configuration, and test flights",
      icon: Zap
    },
    {
      number: 5,
      title: "Flying & Improvising Skills",
      description: "Advanced flight techniques and problem-solving",
      icon: Target
    },
    {
      number: 6,
      title: "Industry-Ready Challenges",
      description: "Real-world scenarios and practical applications",
      icon: Briefcase
    },
    {
      number: 7,
      title: "Certification & Job Support",
      description: "DGCA certification and career placement assistance",
      icon: Award
    }
  ]

  const targetAudience = [
    "DGCA Certified Pilots",
    "Armed Forces Personnel",
    "Professional Aviators",
    "Engineering Students",
    "Technology Enthusiasts",
    "Defence Contractors"
  ]

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-emerald-900/30" />
      
      {/* Animated Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <Target className="w-4 h-4 text-blue-400" />
            <p className="text-blue-400 text-sm font-mono tracking-widest">DRONE TECHNOLOGY PROGRAM</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-blue-400 via-white to-emerald-400 bg-clip-text text-transparent">
              Unlock Your Potential
            </span>
            <span className="block text-white mt-4">Step into the Future of Drones</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our intensive program equips aspiring remote pilots with practical skills in drone building, 
            flying, and safe operation through guided, hands-on practice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Program Overview */}
          <div className="space-y-12">
            {/* Who is it for? */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Who is it for?</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Are you DGCA Certified?</p>
                    <p className="text-white/60 text-sm mt-1">What are you waiting for?</p>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed">
                  Ideal for <span className="text-blue-400 font-medium">Armed Forces</span>,{" "}
                  <span className="text-blue-400 font-medium">Professional Pilots</span>, and{" "}
                  <span className="text-blue-400 font-medium">Students</span> looking to build a career 
                  in the fast-growing world of Unmanned Aerial Vehicles (UAVs), blending theoretical 
                  knowledge with real-time applications.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {targetAudience.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-white text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & RSVP */}
            <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/30 rounded-2xl p-8 border border-blue-500/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Ready to Take Flight?</h3>
                  <p className="text-white/80">
                    Join India's premier drone technology program and launch your career in UAV technology.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white py-6 text-lg rounded-xl"
                  >
                    <a 
                      href="https://bit.ly/43j1qfV" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <Plane className="w-5 h-5" />
                      RSVP Now - Limited Seats Available
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </Button>
                  
                  <div className="text-center text-white/60 text-sm">
                    or contact us directly
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://wa.me/919638413900" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
                    >
                      <MessageSquare className="w-5 h-5 text-emerald-400" />
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

          {/* Right Column - Program Structure */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">What to Expect?</h2>
              </div>
              
              <div className="space-y-6">
                {programSteps.map((step) => {
                  const Icon = step.icon
                  return (
                    <div 
                      key={step.number} 
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-blue-400" />
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Certification & Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-white font-bold">Certification & Recognition</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    DGCA Approved Certification
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Industry Recognized Credentials
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Placement Assistance
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <h3 className="text-white font-bold">Post-Course Support</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    1-Year Mentorship Program
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    Job Placement Assistance
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    Ongoing Technical Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Form */}
        {/* <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/30 to-emerald-900/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">Reserve Your Spot</h2>
              <p className="text-white/70">
                Fill out this form and our team will contact you with program details and enrollment information.
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
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
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
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
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
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Primary Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="general">General Program Information</option>
                  <option value="dgca">DGCA Certification</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="student">Student Enrollment</option>
                  <option value="military">Military/Defence</option>
                </select>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white py-6 text-lg rounded-xl"
              >
                <Plane className="w-5 h-5 mr-2" />
                Request Program Details
              </Button>
              
              <p className="text-center text-white/60 text-sm">
                By submitting, you agree to receive program details and updates via WhatsApp/SMS.
              </p>
            </form>
          </div>
        </div> */}

        {/* Contact Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/50 to-emerald-900/30 border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Assistance?</h3>
              <p className="text-white/80">Our team is available 10 AM - 6 PM, Monday to Saturday</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919638413900" 
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white text-sm">Call Now</div>
                  <div className="text-white font-bold">+91 96384 13900</div>
                </div>
              </a>
              
              <a 
                href="https://wa.me/919638413900" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <div className="text-white text-sm">WhatsApp</div>
                  <div className="text-white font-bold">Direct Message</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Drone Animation */}
      <div className="absolute top-1/4 right-10 animate-float">
        <Target className="w-12 h-12 text-blue-400 opacity-30" />
      </div>
      
      <div className="absolute bottom-1/4 left-10 animate-float" style={{ animationDelay: '2s' }}>
        <Plane className="w-10 h-10 text-emerald-400 opacity-30" />
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
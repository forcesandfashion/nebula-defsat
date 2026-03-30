// app/components/Features.tsx
"use client"

import { Shield, Satellite, Target, Cpu, Radar, Lock, Zap, Eye } from "lucide-react"
import { Globe } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Continuous satellite surveillance with sub-millisecond response times across global networks.",
    },
    {
      icon: <Radar className="w-8 h-8" />,
      title: "Threat Detection",
      description: "AI-powered anomaly detection across multiple spectral bands with 99.9% accuracy.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Autonomous Response",
      description: "Automated countermeasure deployment with strategic human oversight and validation.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Integrated constellation architecture covering 99.97% uptime across all operational theaters.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Signal Intelligence",
      description: "Advanced SIGINT and COMINT collection with real-time analysis and threat assessment.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Quantum Encryption",
      description: "Military-grade quantum-resistant cryptographic protocols for secure communications.",
    },
  ]

  return (
    <section className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      {/* Tactical Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #8B0000 0px, #8B0000 1px, transparent 1px, transparent 20px)`,
          backgroundSize: '28px 28px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#8B0000]" />
            <div className="flex items-center gap-2 px-4 py-2 border border-[#8B0000]/30 bg-white">
              <Target className="h-4 w-4 text-[#8B0000]" />
              <span className="text-[#8B0000] font-bold text-sm uppercase tracking-wider">CORE CAPABILITIES</span>
            </div>
            <div className="h-px w-12 bg-[#8B0000]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#1A1A1A]">Advanced </span>
            <span className="text-[#8B0000]">Defence Technology</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Cutting-edge satellite systems designed for maximum security and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E5E5E5] hover:border-[#8B0000]/50 hover:shadow-lg transition-all duration-300 p-6"
            >
              <div className="p-3 bg-[#F8F8F8] border border-[#E5E5E5] w-fit mb-4 group-hover:border-[#8B0000] group-hover:bg-white transition-all">
                <div className="text-[#8B0000] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Add missing import

// app/components/CTA.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield, Satellite, Target, Lock, ArrowRight, Eye, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative py-24 bg-[#F5F5F5] overflow-hidden">
      {/* Tactical Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%238B0000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 border-l-4 border-r-4 border-[#8B0000] bg-white w-fit">
                <Shield className="w-4 h-4 text-[#8B0000]" />
                <p className="text-[#8B0000] text-sm font-mono font-bold tracking-wider">DEPLOYMENT READY</p>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-[#1A1A1A]">
                  Ready to Secure
                </span>
                <span className="block text-[#8B0000] mt-2">Your Critical Assets?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                Deploy NebulaDefSat's advanced sentinel network and gain unmatched defence capabilities 
                with our cutting-edge satellite surveillance and AI-powered security systems.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield className="w-5 h-5" />, label: "24/7 Monitoring" },
                { icon: <Satellite className="w-5 h-5" />, label: "Global Coverage" },
                { icon: <Target className="w-5 h-5" />, label: "Precision Tracking" },
                { icon: <Lock className="w-5 h-5" />, label: "Encrypted Comms" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white border border-[#E5E5E5] hover:border-[#8B0000] hover:shadow-md transition-all group">
                  <div className="text-[#8B0000] group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-[#1A1A1A] text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/invest-now">
                <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-6 rounded-none font-bold text-base group">
                  <Shield className="w-5 h-5 mr-2" />
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/membership">
                <Button
                  variant="outline"
                  className="border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white px-8 py-6 rounded-none font-medium text-base transition-all"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8B0000]" />
                <span className="text-xs text-[#6B6B6B]">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8B0000]" />
                <span className="text-xs text-[#6B6B6B]">Military Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8B0000]" />
                <span className="text-xs text-[#6B6B6B]">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden border border-[#E5E5E5] bg-white shadow-lg">
              <Image
                src="/cta.jpeg"
                alt="Satellite Command Center"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B0000]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#8B0000]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#8B0000]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B0000]" />
              
              {/* Center Target */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-8 border border-[#8B0000]/30 animate-ping" />
                  <div className="w-16 h-16 bg-[#8B0000] flex items-center justify-center shadow-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Bottom Info Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white border-l-4 border-[#8B0000] shadow-md">
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#8B0000] animate-pulse" />
                      <span className="text-[#1A1A1A] text-xs font-mono font-bold">SYSTEM STATUS</span>
                    </div>
                    <div className="text-[#8B0000] text-xs font-bold">OPERATIONAL</div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#6B6B6B] text-xs">Real-time monitoring active</span>
                    <span className="text-[#1A1A1A] text-xs font-mono font-bold">100% UPTIME</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 bg-white border border-[#8B0000] px-3 py-1 shadow-md">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-[#8B0000]" />
                <span className="text-[#8B0000] text-xs font-bold">CLASSIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-[#E5E5E5]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-[#8B0000]" />
              <p className="text-[#8B0000] text-sm font-mono tracking-wider">TRUSTED BY LEADING ORGANIZATIONS</p>
              <div className="h-px w-8 bg-[#8B0000]" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Ministry of Defence", icon: "🛡️" },
              { name: "Indian Air Force", icon: "✈️" },
              { name: "DRDO", icon: "⚡" },
              { name: "ISRO", icon: "🛰️" },
            ].map((org, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white border border-[#E5E5E5] hover:border-[#8B0000] hover:shadow-md transition-all group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{org.icon}</div>
                <span className="text-[#4A4A4A] text-sm text-center font-medium">{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
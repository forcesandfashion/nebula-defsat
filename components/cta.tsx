"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Satellite, Target, ArrowRight, Lock } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-defence-navy to-black" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-defence-saffron/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-defence-green/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-defence-saffron/10 border border-defence-saffron/30">
                <Shield className="w-4 h-4 text-defence-saffron" />
                <p className="text-defence-saffron text-sm font-mono tracking-wider">DEPLOYMENT READY</p>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-defence-saffron via-white to-defence-green bg-clip-text text-transparent">
                  Ready to Secure
                </span>
                <span className="block text-white mt-2">Your Critical Assets?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Deploy NebulaDefSat's advanced sentinel network and gain unmatched defence capabilities 
                with our cutting-edge satellite surveillance and AI-powered security systems.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "24/7 Monitoring", color: "text-defence-saffron" },
                { icon: Satellite, label: "Global Coverage", color: "text-blue-400" },
                { icon: Target, label: "Precision Tracking", color: "text-defence-green" },
                { icon: Lock, label: "Encrypted Comms", color: "text-purple-400" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-white text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-defence-saffron to-orange-600 text-defence-navy hover:from-orange-600 hover:to-defence-saffron px-8 py-6 rounded-full font-bold text-lg shadow-2xl shadow-orange-500/20"
              >
                <Shield className="w-5 h-5 mr-2" />
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 rounded-full font-medium text-lg backdrop-blur-sm"
              >
                View Documentation
              </Button>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={"/cta.jpeg"}
                  alt="Satellite Command Center"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-defence-navy via-defence-navy/40 to-transparent" />
              </div>
              
              {/* Overlay Elements */}
              {/* <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Badge */}
                <div className="flex justify-end">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <div className="w-2 h-2 bg-defence-green rounded-full animate-pulse" />
                    <span className="text-white text-sm font-mono">LIVE DEMO</span>
                  </div>
                </div>
                
                {/* Center Target */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-8 border-2 border-defence-saffron/20 rounded-full animate-ping"></div>
                    <div className="absolute -inset-4 border border-white/10 rounded-full"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-defence-saffron to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Bottom Info */}
                <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 rounded-lg">
                  <div className="text-white text-sm font-mono mb-2">SYSTEM STATUS</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-defence-green rounded-full animate-pulse" />
                      <span className="text-white font-medium">OPERATIONAL</span>
                    </div>
                    <div className="text-defence-saffron text-sm font-medium">100% UPTIME</div>
                  </div>
                </div>
              {/* </div> */}
            </div>
            
            {/* Floating Satellite */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl rotate-12 animate-float">
              <Satellite className="w-10 h-10 text-white" />
            </div>
            
            {/* Data Points */}
            <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-defence-saffron rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">REAL-TIME DATA</span>
              </div>
              <div className="text-white/80 text-xs">
                Processing 2.4M data points per second across global network
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <p className="text-white/60 text-sm font-mono tracking-wider">TRUSTED BY LEADING ORGANIZATIONS</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Ministry of Defence", logo: "🛡️" },
              { name: "Indian Air Force", logo: "✈️" },
              { name: "DRDO", logo: "⚡" },
              { name: "ISRO", logo: "🛰️" },
            ].map((org, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{org.logo}</div>
                <span className="text-white/80 text-sm text-center">{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-defence-saffron via-transparent to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
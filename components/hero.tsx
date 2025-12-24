// app/components/Hero.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import {  Zap } from "lucide-react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-16">
          
          {/* Hero Text */}
          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Zap className="w-5 h-5 text-white" />
              <p className="text-white text-sm font-mono tracking-widest">ADVANCED DEFENCE SYSTEMS</p>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-none">
              <span className="block bg-gradient-to-r from-defence-saffron via-white to-defence-green bg-clip-text text-transparent">
                SECURE
              </span>
              <span className="block text-white mt-4">THE NATION</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light px-4">
              Next-generation defence technology protecting sovereignty through innovation, 
              precision, and unwavering vigilance.
            </p>
          </div>

          {/* Feature Indicators */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Satellite, label: "SATELLITE", color: "text-defence-saffron" },
              { icon: Shield, label: "DEFENCE", color: "text-defence-green" },
              { icon: Radar, label: "SURVEILLANCE", color: "text-blue-400" },
              { icon: Cpu, label: "AI SYSTEMS", color: "text-purple-400" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <item.icon className={`w-10 h-10 mb-4 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-white text-sm font-medium tracking-wide">{item.label}</span>
              </div>
            ))}
          </div> */}

          {/* CTA Button */}
          {/* <Button 
            size="lg"
          > */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" /> */}
            {/* <Shield className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">EXPLORE DEFENCE SYSTEMS</span> */}
          {/* </Button> */}
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-white via-white/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
// app/components/Stats.tsx
"use client"

import { TrendingUp, Satellite, Shield, Globe } from "lucide-react"

export default function Stats() {
  const stats = [
    { number: "47", label: "Satellites Deployed", icon: <Satellite className="w-6 h-6" /> },
    { number: "160ms", label: "Response Time", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "99.97%", label: "System Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "184+", label: "Nations Protected", icon: <Globe className="w-6 h-6" /> },
  ]

  return (
    <section className="py-16 bg-white border-t border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3 group">
              <div className="flex justify-center">
                <div className="p-3 bg-[#F8F8F8] border border-[#E5E5E5] group-hover:border-[#8B0000] transition-all">
                  <div className="text-[#8B0000] group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-[#8B0000]">{stat.number}</p>
              <p className="text-sm text-[#6B6B6B] font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
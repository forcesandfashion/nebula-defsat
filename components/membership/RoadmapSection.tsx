'use client'

// app/components/membership/RoadmapSection.tsx
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Shield, Leaf, Heart, Target, Zap, Globe, ArrowRight } from 'lucide-react'

const milestones = [
  { year: '2024', title: 'Enhanced Trade Partnership', icon: <TrendingUp className="h-4 w-4" /> },
  { year: '2025', title: 'Strategic Defense Collaboration', icon: <Shield className="h-4 w-4" /> },
  { year: '2026', title: 'Green Energy Initiatives', icon: <Leaf className="h-4 w-4" /> },
  { year: '2027', title: 'Health Partnership Expansion', icon: <Heart className="h-4 w-4" /> },
  { year: '2030', title: 'Comprehensive Strategic Partnership', icon: <Target className="h-4 w-4" /> },
]

export default function RoadmapSection() {
  return (
    <section className="py-3 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="h-px w-5 bg-gradient-to-r from-transparent to-orange-400" />
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider">2030 ROADMAP</span>
            <div className="h-px w-5 bg-gradient-to-l from-transparent to-orange-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Strategic Vision 2030
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            A decade-long roadmap guiding the comprehensive strategic partnership between the United Kingdom and India.
          </p>
        </div>

        {/* Connected Timeline */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="flex items-center gap-1 min-w-max md:min-w-0 justify-center">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                {/* Milestone Card */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all min-w-[140px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-orange-100 rounded-lg">
                      <div className="text-orange-600">{milestone.icon}</div>
                    </div>
                    <span className="text-orange-600 font-bold text-sm">{milestone.year}</span>
                  </div>
                  <p className="text-black text-xs font-medium leading-tight">
                    {milestone.title}
                  </p>
                </div>
                
                {/* Arrow connector between milestones */}
                {index < milestones.length - 1 && (
                  <div className="flex items-center px-1">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-orange-100 rounded-lg">
                <Zap className="h-3.5 w-3.5 text-orange-600" />
              </div>
              <h4 className="text-sm font-bold text-black">Virtual Hydrogen Hub</h4>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed pl-7">
              Accelerating affordable green hydrogen development through innovation.
            </p>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-orange-100 rounded-lg">
                <Leaf className="h-3.5 w-3.5 text-orange-600" />
              </div>
              <h4 className="text-sm font-bold text-black">Green Grids Initiative</h4>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed pl-7">
              £75M commitment for cleantech innovations across Indo-Pacific and Africa.
            </p>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-orange-100 rounded-lg">
                <Shield className="h-3.5 w-3.5 text-orange-600" />
              </div>
              <h4 className="text-sm font-bold text-black">Cyber Security</h4>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed pl-7">
              Joint framework for open, accessible, and peaceful cyberspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'

// app/components/membership/HeroSection.tsx
import { Button } from '@/components/ui/button'
import { Crown, ArrowRight, Sparkles, Users, Target, Globe } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-26 pb-12 bg-white">
      {/* Tactical Background Pattern - Subtle gray pattern instead of blue */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23000000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Decorative Blobs - Very subtle gray/black */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Black and gray theme */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border-l-4 border-r-4 border-gray-900 bg-white shadow-sm">
            <Sparkles className="h-4 w-4 text-gray-700" />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              EXCLUSIVE MEMBERSHIP FOR VISIONARY LEADERS
            </span>
          </div>

          {/* Main Heading - Black text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="block text-black">UK-India</span>
            <span className="text-black">
              CEO Forum
            </span>
          </h1>

          {/* Subtitle - Black/gray text */}
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where visionary leaders from Britain and India converge to shape 
            the future of global business, innovation, and strategic partnership.
          </p>

          {/* CTA Buttons - ORANGE for call-to-action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#tiers">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                <Crown className="mr-3 h-5 w-5" />
                Explore Membership Tiers
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Stats - Black and white theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <Users className="h-8 w-8 text-gray-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-black mb-1">1500+</div>
              <div className="text-gray-600 font-medium">Elite Members</div>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <Target className="h-8 w-8 text-gray-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-black mb-1">£2B+</div>
              <div className="text-gray-600 font-medium">Business Value</div>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <Globe className="h-8 w-8 text-gray-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-black mb-1">50+</div>
              <div className="text-gray-600 font-medium">Global Events</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </section>
  )
}
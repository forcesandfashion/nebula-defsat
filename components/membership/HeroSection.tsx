import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Crown, ArrowRight, Sparkles, Users, Target, Globe } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 glass-effect rounded-full border border-blue-500/30">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">
              EXCLUSIVE MEMBERSHIP FOR VISIONARY LEADERS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-white">UK-India</span>
            <span className="premium-text-gradient">CEO Forum</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Where visionary leaders from Britain and India converge to shape 
            the future of global business, innovation, and strategic partnership.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="premium-blue-gradient text-white font-semibold px-8 py-6 rounded-lg text-lg hover:opacity-90 transition-all duration-300 hover:scale-105">
              <Crown className="mr-3 h-5 w-5" />
              <Link href="#tiers">
              Explore Membership Tiers
              </Link>
              
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            {/* <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:text-white hover:bg-blue-500/10 px-8 py-6 rounded-lg text-lg">
              <Globe className="mr-3 h-5 w-5" />
              Watch Introduction
            </Button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-effect p-6 rounded-xl border border-blue-500/20">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">1500+</div>
              <div className="text-blue-300 font-medium">Elite Members</div>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-blue-500/20">
              <Target className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">£2B+</div>
              <div className="text-blue-300 font-medium">Business Value</div>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-blue-500/20">
              <Globe className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-300 font-medium">Global Events</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  )
}
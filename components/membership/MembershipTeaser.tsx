// app/components/membership/MembershipTeaser.tsx
import { Button } from '@/components/ui/button'
import { Crown, ArrowRight, Sparkles, Users, Globe, Target, Shield } from 'lucide-react'
import Link from 'next/link'

export default function MembershipMiniTeaser() {
  return (
    <section className="py-16 bg-[#F5F5F5] relative overflow-hidden">
      {/* Tactical Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%238B0000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white border-l-4 border-[#8B0000] shadow-lg">
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#F8F8F8] border border-[#E5E5E5]">
                    <Crown className="h-6 w-6 text-[#8B0000]" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1">
                      <Sparkles className="h-3 w-3 text-[#8B0000]" />
                      <span className="text-[#8B0000] font-bold text-xs uppercase tracking-wider">
                        Exclusive Access
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                      Join the <span className="text-[#8B0000]">CEO Forum</span>
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#4A4A4A] mb-6 max-w-2xl leading-relaxed">
                  Connect with 500+ business leaders from UK and India. 
                  Access exclusive networking, investment opportunities, and strategic partnerships.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: <Globe className="w-3 h-3" />, text: "Global Events" },
                    { icon: <Shield className="w-3 h-3" />, text: "Policy Access" },
                    { icon: <Target className="w-3 h-3" />, text: "Trade Delegations" },
                    { icon: <Users className="w-3 h-3" />, text: "Digital Community" }
                  ].map((item, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F8F8] text-[#6B6B6B] text-xs border border-[#E5E5E5]"
                    >
                      {item.icon}
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <Link href="/membership">
                  <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-6 rounded-none font-bold group">
                    Explore Membership
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Button } from '@/components/ui/button'
import { Crown, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function MembershipMiniTeaser() {
  return (
    <div className="relative group p-8">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative premium-card-gradient border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="inline-flex items-center space-x-2 mb-1">
                  <Sparkles className="h-3 w-3 text-blue-400" />
                  <span className="text-blue-300 font-medium text-xs uppercase tracking-wider">
                    Exclusive Access
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Join the <span className="premium-text-gradient">CEO Forum</span>
                </h3>
              </div>
            </div>
            
            <p className="text-blue-200 mb-6 max-w-2xl">
              Connect with 500+ business leaders from UK and India. 
              Access exclusive networking, investment opportunities, and strategic partnerships.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Global Events', 'Policy Access', 'Trade Delegations', 'Digital Community'].map((item, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Button className="premium-blue-gradient text-white px-8 py-4 rounded-xl font-semibold group">
                <Link href="/membership">
                Explore Membership

                </Link>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
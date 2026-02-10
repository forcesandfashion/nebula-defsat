import { Button } from '@/components/ui/button'
import { MessageCircle, CreditCard, Download, ArrowRight, CheckCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/10 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="premium-card-gradient border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">LIMITED TIME OFFER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Elevate Your Network?
              </h2>
              <p className="text-xl text-blue-100">
                Join 500+ elite executives and unlock exclusive opportunities today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-effect border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 transition-colors">
                <MessageCircle className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Register Now</h3>
                <p className="text-blue-300 text-sm mb-4">Join WhatsApp Community</p>
                <Button className="w-full border border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                  Join Community
                </Button>
              </div>

              <div className="glass-effect border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 transition-colors">
                <CreditCard className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Secure Payment</h3>
                <p className="text-blue-300 text-sm mb-4">Multiple options available</p>
                <Button className="w-full premium-blue-gradient text-white">
                  Pay Now
                </Button>
              </div>

              <div className="glass-effect border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 transition-colors">
                <Download className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
                <p className="text-blue-300 text-sm mb-4">Download full prospectus</p>
                <Button variant="outline" className="w-full border border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="glass-effect border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Payment Methods</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['NDS Bank', 'UPI', 'PayTM', 'Bank Transfer'].map((method) => (
                  <div key={method} className="text-center p-4 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-colors">
                    <div className="text-blue-300 font-medium">{method}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Button className="premium-blue-gradient text-white px-12 py-6 text-lg font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105">
              Become a Member
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <p className="text-blue-300 mt-6">
              Have questions? Email us at{' '}
              <a href="mailto:membership@ukindiaforum.org" className="text-blue-400 hover:text-white">
                membership@ukindiaforum.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
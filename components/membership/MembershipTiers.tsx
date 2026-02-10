"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Crown, Star, Zap, Target, Shield, Sparkles, TrendingUp, Users, Globe, Lock, Award, CreditCard, QrCode, Smartphone, Banknote, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const tiers = [
  {
    name: "Individual",
    tagline: "For Aspiring Leaders",
    priceGBP: "500 GBP",
    priceINR: "15,000 INR",
    icon: <Star className="h-6 w-6" />,
    features: [
      { text: "Quarterly Pitch Nights", icon: <Globe className="h-4 w-4" /> },
      { text: "Monthly Breakfast Club", icon: <Users className="h-4 w-4" /> },
      { text: "Digital Community Access", icon: <Sparkles className="h-4 w-4" /> },
      { text: "Weekly Newsletters", icon: <TrendingUp className="h-4 w-4" /> },
      { text: "Discounted Certifications", icon: <Award className="h-4 w-4" /> },
      { text: "Annual Summit Access", icon: <Globe className="h-4 w-4" /> }
    ],
    highlighted: false,
    gradient: "from-gray-900 to-blue-950/50",
    borderColor: "border-blue-900/50"
  },
  {
    name: "SME Executive",
    tagline: "For Growth Champions",
    priceGBP: "750 GBP",
    priceINR: "20,000 INR",
    icon: <Zap className="h-6 w-6" />,
    features: [
      { text: "Priority Trade Delegations", icon: <Target className="h-4 w-4" /> },
      { text: "Industry Hack-a-thons", icon: <Zap className="h-4 w-4" /> },
      { text: "Executive Meetings", icon: <Users className="h-4 w-4" /> },
      { text: "Featured Newsletter Spot", icon: <TrendingUp className="h-4 w-4" /> },
      { text: "VIP Networking", icon: <Crown className="h-4 w-4" /> },
      { text: "+ All Individual Benefits", icon: <Check className="h-4 w-4" /> }
    ],
    highlighted: true,
    gradient: "from-blue-900/30 via-blue-800/40 to-blue-900/30",
    borderColor: "border-blue-500/50",
    badge: "Most Popular"
  },
  {
    name: "Corporate Elite",
    tagline: "For Industry Titans",
    priceGBP: "1,000 GBP",
    priceINR: "25,000 INR",
    icon: <Crown className="h-6 w-6" />,
    features: [
      { text: "Ministry Delegations", icon: <Lock className="h-4 w-4" /> },
      { text: "Private Investor Rounds", icon: <TrendingUp className="h-4 w-4" /> },
      { text: "Strategic Partnerships", icon: <Globe className="h-4 w-4" /> },
      { text: "Executive L&D Programs", icon: <Award className="h-4 w-4" /> },
      { text: "Global Forum Access", icon: <Shield className="h-4 w-4" /> },
      { text: "+ All SME Benefits", icon: <Check className="h-4 w-4" /> }
    ],
    highlighted: false,
    gradient: "from-gray-900 to-indigo-950/50",
    borderColor: "border-indigo-900/50"
  }
]

// UPI ID for payments
const UPI_ID = "nebul13900.ibz@icici"
const BANK_ACCOUNT = "018905014878"
// const PAYTM_NUMBER = "+44 20 7123 4567"

export default function MembershipTiers() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'bank' | 'paytm' | 'card'>('upi')

  const handlePayNow = (tierName: string) => {
    setSelectedTier(tierName)
    setShowPaymentModal(true)
  }

  const handleUPIPayment = () => {
    // Create UPI payment link
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=UK-India%20CEO%20Forum&mc=8654&tid=${Date.now()}&tr=UKINDCEO${Date.now()}&am=${getTierAmount(selectedTier || '')}&cu=INR&url=https://ukindiaforum.org`
    
    // Open UPI app
    window.open(upiLink, '_blank')
    
    // Close modal after a delay
    setTimeout(() => {
      setShowPaymentModal(false)
    }, 2000)
  }

  const getTierAmount = (tierName: string): string => {
    switch(tierName) {
      case 'Individual': return '15000'
      case 'SME Executive': return '20000'
      case 'Corporate Elite': return '25000'
      case 'Startup & Student': return '3000'
      default: return '15000'
    }
  }

  const getTierPrice = (tierName: string): string => {
    switch(tierName) {
      case 'Individual': return '500 GBP / 15,000 INR'
      case 'SME Executive': return '750 GBP / 20,000 INR'
      case 'Corporate Elite': return '1,000 GBP / 25,000 INR'
      case 'Startup & Student': return '100 GBP / 3,000 INR'
      default: return '500 GBP / 15,000 INR'
    }
  }

const PaymentModal = () => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div
      className="premium-card-gradient border border-blue-500/30 rounded-2xl max-w-md max-h-[90vh] w-full p-8 relative overflow-y-auto
                 scrollbar-hide"
      style={{
        scrollbarWidth: 'none',       // Firefox
        msOverflowStyle: 'none',       // IE / Edge
      }}
    >
      <button
        onClick={() => setShowPaymentModal(false)}
        className="absolute top-4 right-4 text-blue-300 hover:text-white"
      >
        <X className="h-5 w-5" />
      </button>
      
      <div className="text-center mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl w-fit mx-auto mb-4">
          <CreditCard className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Complete Your Payment
        </h3>
        <p className="text-blue-300">
          For {selectedTier} Membership
        </p>
        <div className="text-3xl font-bold text-white mt-4">
          {getTierPrice(selectedTier || '')}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="space-y-4 mb-6">
        <div
          className={`p-4 rounded-xl cursor-pointer transition-all ${
            paymentMethod === 'upi'
              ? 'bg-blue-500/20 border border-blue-500/50'
              : 'bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/30'
          }`}
          onClick={() => setPaymentMethod('upi')}
        >
          <div className="flex items-center space-x-3">
            <Smartphone className="h-5 w-5 text-blue-400" />
            <div className="flex-1">
              <div className="text-white font-semibold">UPI Payment</div>
              <div className="text-blue-300 text-sm">Instant payment via UPI apps</div>
            </div>
            {paymentMethod === 'upi' && (
              <div className="h-3 w-3 rounded-full bg-blue-500" />
            )}
          </div>
        </div>

        <div
          className={`p-4 rounded-xl cursor-pointer transition-all ${
            paymentMethod === 'bank'
              ? 'bg-blue-500/20 border border-blue-500/50'
              : 'bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/30'
          }`}
          onClick={() => setPaymentMethod('bank')}
        >
          <div className="flex items-center space-x-3">
            <Banknote className="h-5 w-5 text-blue-400" />
            <div className="flex-1">
              <div className="text-white font-semibold">Bank Transfer</div>
              <div className="text-blue-300 text-sm">International wire transfer</div>
            </div>
            {paymentMethod === 'bank' && (
              <div className="h-3 w-3 rounded-full bg-blue-500" />
            )}
          </div>
        </div>

        <div
          className={`p-4 rounded-xl cursor-pointer transition-all ${
            paymentMethod === 'paytm'
              ? 'bg-blue-500/20 border border-blue-500/50'
              : 'bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/30'
          }`}
          onClick={() => setPaymentMethod('paytm')}
        >
          <div className="flex items-center space-x-3">
            <QrCode className="h-5 w-5 text-blue-400" />
            <div className="flex-1">
              <div className="text-white font-semibold">PayTM / QR Code</div>
              <div className="text-blue-300 text-sm">Scan QR code to pay</div>
            </div>
            {paymentMethod === 'paytm' && (
              <div className="h-3 w-3 rounded-full bg-blue-500" />
            )}
          </div>
        </div>
      </div>

      {/* Payment Details */}
      {paymentMethod === 'upi' && (
        <div className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <div className="text-center">
            <div className="text-blue-300 text-sm mb-2">UPI ID</div>
            <div className="text-white font-mono text-lg break-all bg-black/30 p-3 rounded-lg">
              {UPI_ID}
            </div>
            <p className="text-blue-300 text-sm mt-3">
              Click Pay Now to open your UPI app
            </p>
          </div>
        </div>
      )}

      {paymentMethod === 'bank' && (
        <div className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <div className="space-y-3">
            <div>
              <div className="text-blue-300 text-sm">Account Number</div>
              <div className="text-white font-mono">{BANK_ACCOUNT}</div>
            </div>
            <div>
              <div className="text-blue-300 text-sm">Bank Name</div>
              <div className="text-white">ICICI Bank</div>
            </div>
            <div>
              <div className="text-blue-300 text-sm">IFSC Code</div>
              <div className="text-white"> ICIC0000189</div>
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'paytm' && (
        <div className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <div className="text-center">
            <div className="mt-4 p-4 bg-white rounded-lg inline-block">
              <div className="text-center text-black">
                <div className="text-4xl mb-2">
                    <Image
                                  src="/nebula-qr.jpeg"
                                  alt="Nebula UPI QR"
                                  width={520}
                                  height={520}
                                  className="w-64 h-64 object-contain rounded-lg"
                                /></div>
                <div className="text-sm">PayTM QR Code</div>
                <div className="text-xs opacity-70">Scan to pay</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex space-x-4">
        <Button
          className="flex-1 premium-blue-gradient text-white"
          onClick={() => {
            if (paymentMethod === 'upi') {
              handleUPIPayment()
            } else {
              alert(`Please complete payment using the provided ${paymentMethod} details.`)
              setShowPaymentModal(false)
            }
          }}
        >
          {paymentMethod === 'upi' ? 'Open UPI App' : 'Proceed to Payment'}
        </Button>
      </div>

      
    </div>
  </div>
)


  return (
    <>
      <section id="tiers" className="py-32 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                               linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
                <span className="text-blue-300 font-medium text-sm uppercase tracking-wider">
                  EXECUTIVE MEMBERSHIP
                </span>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Choose Your </span>
              <span className="relative">
                <span className="relative z-10 premium-text-gradient">Path to</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-xl" />
              </span>
              <span className="block mt-2">
                <span className="premium-text-gradient">Leadership</span>
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Select from our curated membership tiers designed for professionals at every stage 
              of their leadership journey. Each tier unlocks unique opportunities for growth.
            </p>
          </div>

          {/* Membership Cards - Creative Layout */}
          <div className="relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-blue-500/20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`
                    relative group
                    ${tier.highlighted ? 'lg:transform lg:-translate-y-8' : ''}
                    transition-all duration-500
                  `}
                >
                  {/* Decorative Corner Elements */}
                  <div className={`absolute top-0 left-0 w-4 h-4 border-t border-l ${tier.borderColor}`} />
                  <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r ${tier.borderColor}`} />
                  <div className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l ${tier.borderColor}`} />
                  <div className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r ${tier.borderColor}`} />

                  {/* Highlighted Badge */}
                  {tier.highlighted && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="premium-blue-gradient text-white px-8 py-3 rounded-full font-bold text-sm flex items-center shadow-lg shadow-blue-500/30">
                        <Target className="mr-3 h-4 w-4 animate-pulse" />
                        {tier.badge}
                        <div className="ml-3 h-2 w-2 rounded-full bg-white animate-ping" />
                      </div>
                    </div>
                  )}

                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    tier.highlighted ? 'bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-blue-500/10' : 'bg-gradient-to-r from-blue-500/5 via-blue-400/5 to-blue-500/5'
                  } blur-xl`} />

                  <Card 
                    className={`
                      relative z-10 h-full
                      bg-gradient-to-br ${tier.gradient}
                      border ${tier.borderColor}
                      backdrop-blur-sm
                      transition-all duration-500
                      group-hover:border-blue-500/70
                      group-hover:shadow-2xl
                      ${tier.highlighted ? 'shadow-2xl shadow-blue-500/20' : 'shadow-xl shadow-black/20'}
                      overflow-hidden
                    `}
                  >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]" />
                    </div>

                    <CardHeader className="pt-12 pb-8 relative">
                      {/* Tier Icon with Glow */}
                      <div className={`
                        relative mb-8
                        ${tier.highlighted ? 'scale-110' : ''}
                        transition-transform duration-300
                      `}>
                        <div className={`
                          absolute inset-0 rounded-2xl
                          ${tier.highlighted ? 'bg-blue-500/30' : 'bg-blue-500/20'}
                          blur-xl
                        `} />
                        <div className={`
                          relative p-5 rounded-2xl
                          ${tier.highlighted 
                            ? 'bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-500/30' 
                            : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30'
                          }
                          flex items-center justify-center w-16 h-16 mx-auto
                        `}>
                          {tier.icon}
                        </div>
                      </div>

                      {/* Tier Name */}
                      <CardTitle className="text-3xl font-bold text-center mb-2">
                        <span className="text-white">{tier.name}</span>
                      </CardTitle>
                      
                      {/* Tagline */}
                      <p className="text-blue-300 text-center font-medium">
                        {tier.tagline}
                      </p>

                      {/* Price */}
                      <div className="text-center mt-8">
                        <div className="text-4xl font-bold text-white mb-2">
                          {tier.priceGBP}
                        </div>
                        <div className="text-blue-300 font-medium">
                          {tier.priceINR}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-8">
                      {/* Features List */}
                      <div className="space-y-4 mb-8">
                        {tier.features.map((feature, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center space-x-4 p-3 rounded-lg group/feature hover:bg-blue-500/10 transition-colors duration-300"
                          >
                            <div className={`
                              p-2 rounded-lg
                              ${tier.highlighted 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'bg-blue-900/30 text-blue-400'
                              }
                              flex-shrink-0
                            `}>
                              {feature.icon}
                            </div>
                            <span className={`
                              ${tier.highlighted ? 'text-blue-100' : 'text-blue-200'}
                              font-medium
                            `}>
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Pay Now Button */}
                      <Button 
                        className={`
                          w-full py-6 rounded-xl font-bold text-lg
                          relative overflow-hidden
                          transition-all duration-500
                          group-hover:scale-[1.02]
                          ${tier.highlighted 
                            ? 'premium-blue-gradient text-white shadow-lg shadow-blue-500/30' 
                            : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-500/50'
                          }
                        `}
                        onClick={() => handlePayNow(tier.name)}
                      >
                        {/* Button Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <span className="relative z-10 flex items-center justify-center">
                          {tier.highlighted ? (
                            <>
                              <CreditCard className="mr-3 h-5 w-5" />
                              Pay Now
                              <Sparkles className="ml-3 h-5 w-5 animate-pulse" />
                            </>
                          ) : (
                            <>
                              <CreditCard className="mr-3 h-5 w-5" />
                              Pay Now
                            </>
                          )}
                        </span>
                      </Button>

                      {/* Additional Info */}
                      {tier.highlighted && (
                        <div className="mt-6 text-center">
                          <p className="text-blue-300 text-sm flex items-center justify-center">
                            <Check className="h-4 w-4 mr-2 text-blue-400" />
                            Includes priority onboarding & dedicated support
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Startup/Student Tier */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-green-500/5 to-blue-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Card className="relative  border border-blue-500/30 overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl p-[1px] " />
                
                <CardContent className="p-10">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30">
                          <Shield className="h-8 w-8 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Startup & Student Program
                          </h3>
                          <p className="text-blue-200">
                            Special access for innovators and future leaders. Get essential 
                            networking opportunities at an unprecedented value.
                          </p>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {['Fast-track approval', 'Mentorship access', 'Student discounts', 'Startup grants'].map((benefit) => (
                          <div key={benefit} className="flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <span className="text-blue-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center lg:text-right">
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-white mb-1">
                          100 GBP
                        </div>
                        <div className="text-blue-300 font-medium">
                          3,000 INR
                        </div>
                      </div>
                      {/* <Button 
                        className=" border border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20 hover:text-white px-8 py-4 font-semibold"
                        onClick={() => {
                        //   setSelectedTier('Startup & Student')
                          setShowPaymentModal(true)
                        }}
                      >
                        Pay Now - Special Rate
                      </Button> */}
                      <p className="text-blue-400 text-sm mt-4">
                        Limited spots available each quarter
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Payment Methods Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="premium-card-gradient border border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Smartphone className="h-5 w-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">UPI Payment</h4>
                </div>
                <p className="text-blue-300 text-sm">
                  Instant payment using PhonePe, Google Pay, Paytm or any UPI app
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card-gradient border border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Banknote className="h-5 w-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Bank Transfer</h4>
                </div>
                <p className="text-blue-300 text-sm">
                  International wire transfer to NDS Bank account
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card-gradient border border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <QrCode className="h-5 w-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">QR Code</h4>
                </div>
                <p className="text-blue-300 text-sm">
                  Scan QR code using any payment app
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Custom Styles for Animation */}
        <style jsx global>{`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
        `}</style>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && <PaymentModal />}
    </>
  )
}
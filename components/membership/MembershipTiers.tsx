"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Check, Crown, Star, Zap, Target, Shield, Sparkles, TrendingUp, 
  Users, Globe, Lock, Award, CreditCard, QrCode, Smartphone, 
  Banknote, X, Earth, ArrowRight 
} from 'lucide-react'
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
    borderColor: "border-gray-200"
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
    borderColor: "border-orange-500",
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
    borderColor: "border-gray-200"
  }
]

// Payment details
const UPI_ID = "nebul13900.ibz@icici"
const BANK_ACCOUNT = "018905014878"
const IFSC_CODE = "ICIC0000189"
const SWIFT_CODE = "ICICINBBXXX"
const BENEFICIARY_NAME = "NEBULA DEF-SAT PRIVATE LIMITED"

export default function MembershipTiers() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'bank' | 'indian-qr' | 'international-qr'>('upi')

  const handlePayNow = (tierName: string) => {
    setSelectedTier(tierName)
    setShowPaymentModal(true)
  }

  const handleUPIPayment = () => {
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(BENEFICIARY_NAME)}&mc=8654&tid=${Date.now()}&tr=NEBULA${Date.now()}&am=${getTierAmount(selectedTier || '')}&cu=INR`
    window.open(upiLink, '_blank')
    setTimeout(() => {
      setShowPaymentModal(false)
    }, 2000)
  }

  const getTierAmount = (tierName: string): string => {
    switch(tierName) {
      case 'Individual': return '15000'
      case 'SME Executive': return '20000'
      case 'Corporate Elite': return '25000'
      default: return '15000'
    }
  }

  const getTierPrice = (tierName: string): string => {
    switch(tierName) {
      case 'Individual': return '500 GBP / 15,000 INR'
      case 'SME Executive': return '750 GBP / 20,000 INR'
      case 'Corporate Elite': return '1,000 GBP / 25,000 INR'
      default: return '500 GBP / 15,000 INR'
    }
  }

  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white border border-gray-200 rounded-2xl max-w-md max-h-[90vh] w-full relative overflow-y-auto shadow-2xl">
        <button
          onClick={() => setShowPaymentModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black z-10"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl w-fit mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">
              Complete Your Payment
            </h3>
            <p className="text-gray-600">
              For {selectedTier} Membership
            </p>
            <div className="text-3xl font-bold text-orange-600 mt-4">
              {getTierPrice(selectedTier || '')}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-3 mb-6">
            {[
              { id: 'upi', icon: <Smartphone className="h-5 w-5" />, title: "UPI Payment", desc: "Instant payment via UPI apps" },
              { id: 'bank', icon: <Banknote className="h-5 w-5" />, title: "Bank Transfer", desc: "International wire transfer" },
              { id: 'indian-qr', icon: <QrCode className="h-5 w-5" />, title: "Indian UPI QR", desc: "Scan for Indian payments" },
              { id: 'international-qr', icon: <Earth className="h-5 w-5" />, title: "International QR", desc: "Scan for GBP/USD payments" }
            ].map((method) => (
              <div
                key={method.id}
                className={`p-4 cursor-pointer transition-all rounded-xl border-2 ${
                  paymentMethod === method.id
                    ? 'border-orange-500 bg-gray-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
                onClick={() => setPaymentMethod(method.id as any)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${paymentMethod === method.id ? 'text-orange-600' : 'text-gray-600'}`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold ${paymentMethod === method.id ? 'text-orange-600' : 'text-black'}`}>
                      {method.title}
                    </div>
                    <div className="text-gray-600 text-sm">{method.desc}</div>
                  </div>
                  {paymentMethod === method.id && (
                    <div className="h-3 w-3 rounded-full bg-orange-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Payment Details */}
          {paymentMethod === 'upi' && (
            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="text-center">
                <div className="text-gray-600 text-sm mb-2">UPI ID</div>
                <div className="text-black font-mono text-lg break-all bg-white p-3 border border-gray-200 rounded-lg">
                  {UPI_ID}
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Click Pay Now to open your UPI app
                </p>
              </div>
            </div>
          )}

          {paymentMethod === 'bank' && (
            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">Account Number</span>
                  <span className="text-black font-mono font-bold">{BANK_ACCOUNT}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">Bank Name</span>
                  <span className="text-black font-bold">ICICI Bank</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">IFSC Code</span>
                  <span className="text-black font-mono font-bold">{IFSC_CODE}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">SWIFT Code</span>
                  <span className="text-black font-mono font-bold">{SWIFT_CODE}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm">Beneficiary Name</span>
                  <span className="text-black font-bold text-right">{BENEFICIARY_NAME}</span>
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'indian-qr' && (
            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="text-center">
                <div className="text-gray-600 text-sm mb-2">Indian UPI QR Code</div>
                <p className="text-gray-600 text-sm mb-4">Scan using any Indian payment app (PayTM, PhonePe, Google Pay, etc.)</p>
                <div className="mt-4 p-4 bg-white border border-gray-200 rounded-xl inline-block">
                  <div className="text-center">
                    <Image
                      src="/nebula-qr.jpeg"
                      alt="Indian UPI QR"
                      width={200}
                      height={200}
                      className="w-48 h-48 object-contain"
                    />
                    <div className="text-sm font-bold text-black mt-2">Indian UPI QR Code</div>
                    <div className="text-xs text-gray-600">Scan for INR payments</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'international-qr' && (
            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="text-center">
                <div className="text-gray-600 text-sm mb-2">International QR Code</div>
                <p className="text-gray-600 text-sm mb-4">Scan using international payment apps for GBP/USD payments</p>
                <div className="mt-4 p-4 bg-white border border-gray-200 rounded-xl inline-block">
                  <Image
                    src="/wise-qr-code.jpeg"
                    alt="International Payment QR"
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-gray-600 text-xs">For international wire transfers, use bank details above</div>
                </div>
              </div>
            </div>
          )}

          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg transition-all shadow-lg"
            onClick={() => {
              if (paymentMethod === 'upi') {
                handleUPIPayment()
              } else if (paymentMethod === 'indian-qr') {
                const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(BENEFICIARY_NAME)}&am=${getTierAmount(selectedTier || '')}&cu=INR`
                window.open(upiLink, '_blank')
                setTimeout(() => setShowPaymentModal(false), 2000)
              } else {
                alert(`Please complete payment using the provided ${paymentMethod === 'bank' ? 'bank transfer' : 'QR code'} details. After payment, please email receipt to payments@nebuladefsat.com`)
                setShowPaymentModal(false)
              }
            }}
          >
            {paymentMethod === 'upi' || paymentMethod === 'indian-qr' ? 'Open UPI App' : 'Proceed to Payment'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="mt-4 text-center">
            <p className="text-gray-600 text-xs">
              After payment, please email the receipt to <span className="text-orange-600">payments@nebuladefsat.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <section id="tiers" className="py-8 pb-8 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-50 to-transparent" />
        
        {/* Tactical Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #000000 0px, #000000 1px, transparent 1px, transparent 20px)`,
            backgroundSize: '28px 28px'
          }} />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-400" />
              <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 bg-white rounded-full shadow-sm">
                <Sparkles className="h-3 w-3 text-gray-700" />
                <span className="text-gray-800 font-bold text-xs uppercase tracking-wider">
                  EXECUTIVE MEMBERSHIP
                </span>
              </div>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              <span className="text-black">Choose Your </span>
              <span className="text-black">Path to Leadership</span>
            </h2>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Select from our curated membership tiers designed for professionals at every stage 
              of their leadership journey. Each tier unlocks unique opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative group transition-all duration-500 ${tier.highlighted ? 'lg:transform lg:-translate-y-2' : ''}`}
              >
                {/* Corner Accents */}
                <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${tier.highlighted ? 'border-orange-500' : 'border-gray-300'}`} />
                <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${tier.highlighted ? 'border-orange-500' : 'border-gray-300'}`} />
                <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${tier.highlighted ? 'border-orange-500' : 'border-gray-300'}`} />
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${tier.highlighted ? 'border-orange-500' : 'border-gray-300'}`} />

                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-orange-500 text-white px-4 py-1 rounded-full font-bold text-xs flex items-center gap-1 shadow-lg">
                      <Target className="h-2 w-2" />
                      {tier.badge}
                    </div>
                  </div>
                )}

                <Card className={`relative z-10 h-full bg-white border-2 rounded-2xl ${tier.highlighted ? 'border-orange-500 shadow-xl' : 'border-gray-200 hover:border-gray-400'} transition-all duration-300`}>
                  <CardHeader className="pt-6 pb-4">
                    <div className={`relative mb-4 transition-transform duration-300 group-hover:scale-105`}>
                      <div className={`p-3 border-2 rounded-xl w-fit mx-auto ${tier.highlighted ? 'border-orange-500 bg-gray-50' : 'border-gray-200 bg-white'}`}>
                        <div className={tier.highlighted ? 'text-orange-600' : 'text-gray-600 group-hover:text-gray-800 transition-colors'}>
                          {tier.icon}
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold text-center mb-1">
                      <span className="text-black">{tier.name}</span>
                    </CardTitle>
                    
                    <p className="text-gray-600 text-center text-sm">
                      {tier.tagline}
                    </p>

                    <div className="text-center mt-4">
                      <div className="text-2xl font-bold text-orange-600 mb-0.5">
                        {tier.priceGBP}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {tier.priceINR}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <div className="space-y-2 mb-6">
                      {tier.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className={`p-1 rounded-lg ${tier.highlighted ? 'text-orange-600' : 'text-gray-600'}`}>
                            {feature.icon}
                          </div>
                          <span className={`text-xs ${tier.highlighted ? 'text-black font-medium' : 'text-gray-700'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                        tier.highlighted 
                          ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg' 
                          : 'border-2 border-orange-500 bg-white text-orange-600 hover:bg-orange-500 hover:text-white'
                      }`}
                      onClick={() => handlePayNow(tier.name)}
                    >
                      <CreditCard className="mr-2 h-3 w-3" />
                      Pay Now
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>

                    {tier.highlighted && (
                      <div className="mt-3 text-center">
                        <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
                          <Check className="h-2 w-2 text-orange-500" />
                          Includes priority onboarding & dedicated support
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Startup & Student Program */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 hover:border-gray-400 rounded-2xl transition-all shadow-lg">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 border-2 border-orange-500 bg-gray-50 rounded-xl">
                        <Shield className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-0.5">
                          Startup & Student Program
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Special access for innovators and future leaders
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {['Fast-track approval', 'Mentorship access', 'Student discounts', 'Startup grants'].map((benefit) => (
                        <div key={benefit} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 bg-orange-500 rounded-full" />
                          <span className="text-gray-700 text-xs">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center lg:text-right">
                    <div className="mb-2">
                      <div className="text-2xl font-bold text-orange-600 mb-0.5">
                        100 GBP
                      </div>
                      <div className="text-gray-600 text-sm">
                        3,000 INR
                      </div>
                    </div>
                    <Button 
                      className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl shadow-lg text-sm"
                      onClick={() => {
                        setSelectedTier("Startup & Student")
                        setShowPaymentModal(true)
                      }}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                    <p className="text-gray-600 text-xs mt-2">
                      Limited spots available each quarter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods Info Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              { icon: <Smartphone className="h-4 w-4" />, title: "UPI Payment", desc: "PhonePe, Google Pay, Paytm" },
              { icon: <Banknote className="h-4 w-4" />, title: "Bank Transfer", desc: "NEFT / RTGS / IMPS" },
              { icon: <QrCode className="h-4 w-4" />, title: "Indian QR", desc: "Scan for INR payments" },
              { icon: <Earth className="h-4 w-4" />, title: "International QR", desc: "GBP / USD payments" }
            ].map((method, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-3 hover:border-gray-400 transition-all shadow-sm">
                <div className="text-orange-600 mb-1">{method.icon}</div>
                <h4 className="font-bold text-black text-sm mb-0.5">{method.title}</h4>
                <p className="text-gray-600 text-xs">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showPaymentModal && <PaymentModal />}
      <br/>
    </>
  )
}
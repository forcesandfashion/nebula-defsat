'use client'

import { useState } from "react"
import Image from "next/image"
import { 
  Target, 
  Users, 
  Phone, 
  MessageSquare,
  ChevronRight,
  CheckCircle,
  Rocket,
  Download,
  Briefcase,
  TrendingUp,
  Lightbulb,
  Handshake,
  Network,
  Globe,
  Award,
  Clock,
  Star,
  ArrowRight,
  Copy,
  Landmark,
  X,
  Scan,
  ExternalLink,
  FileText,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvestNow() {
  const [copied, setCopied] = useState<string | null>(null)
  const [showQrModal, setShowQrModal] = useState(false)

  const handleCopy = async (value: string, label: string) => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error("Copy failed", err)
    }
  }

  const bankName = "NEBULA DEF-SAT PRIVATE LIMITED"
  const accountNumber = "018905014878"
  const ifsc = "ICIC0000189"
  const upiId = "nebul13900.ibz@icici"
  const upiIntent = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(bankName)}&cu=INR`

  const eventSteps = [
    { number: "01", title: "Application & Screening", description: "Submit your application for evaluation" },
    { number: "02", title: "Pitch Preparation", description: "Refine your pitch with expert guidance" },
    { number: "03", title: "Investor Meetings", description: "Present to top-tier investors" },
    { number: "04", title: "Deal Negotiation", description: "Secure game-changing funding" },
    { number: "05", title: "Ecosystem Integration", description: "Network with industry leaders" },
    { number: "06", title: "Growth Support", description: "Post-investment mentorship" }
  ]

  const targetAudience = [
    { role: "Startups", description: "Pitch groundbreaking ideas" },
    { role: "Investors", description: "Discover promising ventures" },
    { role: "Ecosystem Partners", description: "Network with innovators" },
    { role: "Industry Leaders", description: "Witness next big ideas" }
  ]

  const focusAreas = ["Defence Tech", "DeepTech", "SpaceTech", "AI & Robotics", "Cyber Security", "Quantum Computing"]

  const QrModal = () => {
    if (!showQrModal) return null

    return (
      <div className="fixed py-20 inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <Scan className="w-4 h-4 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-black">Scan & Pay</h3>
            </div>
            <button onClick={() => setShowQrModal(false)} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="p-6 flex flex-col items-center">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <Image src="/nebula-qr.jpeg" alt="QR Code" width={280} height={280} className="w-64 h-64 object-contain" />
            </div>
            
            <div className="mt-6 w-full space-y-3">
              <div className="bg-orange-50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500">UPI ID</p>
                <p className="font-mono font-semibold text-black text-lg">{upiId}</p>
                <button onClick={() => handleCopy(upiId, "UPI ID")} className="mt-1 text-orange-600 text-xs font-medium inline-flex items-center gap-1">
                  <Copy className="w-3 h-3" /> Copy UPI ID
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <a href={upiIntent} className="flex items-center justify-center gap-2 py-3 bg-orange-500 text-white rounded-xl text-sm font-medium hover:bg-orange-600 transition">
                  <ExternalLink className="w-4 h-4" /> Open UPI App
                </a>
                <a href="/nebula-qr.jpeg" download className="flex items-center justify-center gap-2 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-medium transition">
                  <Download className="w-4 h-4" /> Download QR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <QrModal />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-5">
              <Target className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-orange-600 text-xs font-semibold">DEFSAT INNOVATION DEALROOM</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-black">Your Next Big Win</span>
              <span className="block text-orange-600 mt-2">Awaits at Nebula DealRoom</span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Are you looking for your next big win? You can't afford to miss the DealRoom. 
              This is where the future of <span className="font-semibold text-orange-600">Defence, DeepTech, & SpaceTech</span> ventures and investments collide.
            </p>
          </div>


          {/* Bank Details */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden mb-14">
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{bankName}</h3>
                    <p className="text-xs text-gray-500">Bank transfer / NEFT / IMPS / UPI</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                    <div>
                      <div className="text-xs text-gray-500">Account Number</div>
                      <div className="font-mono text-black font-semibold">{accountNumber}</div>
                    </div>
                    <button onClick={() => handleCopy(accountNumber, "Account Number")} className="flex items-center gap-1 px-2 py-1 rounded border border-gray-200 text-gray-600 text-xs">
                      <Copy className="w-3 h-3" /> Copy
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                    <div>
                      <div className="text-xs text-gray-500">IFSC Code</div>
                      <div className="font-mono text-black font-semibold">{ifsc}</div>
                    </div>
                    <button onClick={() => handleCopy(ifsc, "IFSC")} className="flex items-center gap-1 px-2 py-1 rounded border border-gray-200 text-gray-600 text-xs">
                      <Copy className="w-3 h-3" /> Copy
                    </button>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <div className="text-xs text-gray-500">UPI ID</div>
                        <div className="font-mono text-black font-semibold">{upiId}</div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => setShowQrModal(true)} className="flex items-center gap-1 px-3 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-medium">
                          <Scan className="w-3 h-3" /> Scan QR
                        </button>
                        <button onClick={() => handleCopy(upiId, "UPI ID")} className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-xs">
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  {copied && (
                    <div className="flex items-center gap-2 text-orange-600 text-xs p-2 bg-orange-50 rounded-lg">
                      <CheckCircle className="w-3 h-3" /> {copied} copied!
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center border-l border-gray-200 pl-8">
                <button onClick={() => setShowQrModal(true)} className="group relative">
                  <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <Image src="/nebula-qr.jpeg" alt="QR Code" width={200} height={200} className="w-48 h-48 object-contain" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40 rounded-xl">
                    <div className="bg-white rounded-full p-1.5">
                      <Scan className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                </button>
                <p className="mt-3 text-xs text-orange-600">Click QR to enlarge & scan</p>
                <a href={upiIntent} className="mt-3 flex items-center gap-1 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition">
                  <ExternalLink className="w-3.5 h-3.5" /> Pay via UPI
                </a>
              </div>
            </div>
          </div>

          {/* Who Should Join & What to Expect */}
          <div className="grid lg:grid-cols-2 gap-8 mb-14">
            {/* Who Should Join */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-600" />
                  <h2 className="font-bold text-black">Who Should Join?</h2>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg border-l-2 border-orange-500">
                  <Clock className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-black font-semibold">Limited Spots Available</p>
                    <p className="text-gray-500 text-sm">Secure your position now</p>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  This is where the future of Defence, DeepTech, & SpaceTech ventures and investments collide.
                </p>
                
                <div className="space-y-2">
                  {targetAudience.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-orange-200 transition-all">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <div>
                          <div className="text-black font-semibold">{item.role}</div>
                          <div className="text-gray-500 text-sm">{item.description}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-orange-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                  <h2 className="font-bold text-black">What to Expect?</h2>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {eventSteps.map((step) => (
                  <div key={step.number} className="flex gap-3 p-3 rounded-lg border border-gray-100 hover:border-orange-200 transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">{step.title}</h3>
                      <p className="text-gray-500 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

<div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-14">
  <div className="p-8 text-center">

    {/* TITLE */}
    <h3 className="text-2xl font-bold text-black mb-2">
      Ready to Make History?
    </h3>

    {/* DESCRIPTION */}
    <p className="text-gray-600 mb-6">
      Join us at Nebula DealRoom and be part of the innovation revolution.
    </p>

    {/* 🔥 PRIMARY CTA (ONLY ORANGE) */}
    <Button
      asChild
      className="bg-orange-500 hover:bg-orange-600 text-white 
      px-8 py-3 rounded-xl font-semibold mb-4 
      transition-all duration-200 hover:shadow-md active:scale-95"
    >
      <a
        href="https://bit.ly/4i9MSEP"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 justify-center"
      >
        <Rocket className="w-4 h-4" />
        Apply Now - Limited Seats
        <ArrowRight className="w-4 h-4" />
      </a>
    </Button>

    {/* SUB TEXT */}
    <p className="text-gray-500 text-sm mb-4">
      or connect with our team
    </p>

    {/* SECONDARY ACTIONS (BLUE INTERACTION) */}
    <div className="flex gap-3 justify-center flex-wrap">

      <a
        href="https://wa.me/919638413900"
        target="_blank"
        className="flex items-center gap-2 px-4 py-2 rounded-lg 
        border border-gray-200 text-gray-700 
        hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 
        transition-all duration-200"
      >
        <MessageSquare className="w-4 h-4" />
        WhatsApp
      </a>

      <a
        href="tel:+919638413900"
        className="flex items-center gap-2 px-4 py-2 rounded-lg 
        border border-gray-200 text-gray-700 
        hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 
        transition-all duration-200"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>

    </div>
  </div>
</div>

          {/* Benefits & Focus Areas */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-orange-600" />
                <h3 className="font-semibold text-black">For Startups</h3>
              </div>
              <ul className="space-y-2">
                {["Pitch to top-tier investors", "Secure game-changing funding", "Expert mentorship & guidance"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-orange-600" />
                <h3 className="font-semibold text-black">For Investors</h3>
              </div>
              <ul className="space-y-2">
                {["Discover promising startups", "Seize investment opportunities", "Network with industry leaders"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-14">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-4 h-4 text-orange-600" />
              <h3 className="font-semibold text-black">Focus Areas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Banner */}
          <div className="bg-gray-800 rounded-xl">
            <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Need Immediate Assistance?</h3>
                <p className="text-gray-300">Our DealRoom team is available to answer your questions</p>
              </div>
              <div className="flex gap-3">
                <a href="tel:+919638413900" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition text-white">
                  <Phone className="w-4 h-4" /> +91 96384 13900
                </a>
                <Button asChild className="bg-orange-500 hover:bg-orange-600">
                  <a href="https://bit.ly/4i9MSEP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Rocket className="w-4 h-4" /> Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
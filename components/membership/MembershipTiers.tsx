"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Check, Crown, Star, Zap, Target, Shield, Sparkles,
  TrendingUp, Users, Globe, Lock, Award, CreditCard,
  QrCode, Smartphone, Banknote, X, Earth
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

// ─── Tier definitions (unchanged) ────────────────────────────────────────────

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
];

const BANK_ACCOUNT = "018905014878";
const SWIFT_CODE = "ICICINBBXXX";

// ─── Tier helpers ─────────────────────────────────────────────────────────────

function getTierAmount(tierName: string): number {
  switch (tierName) {
    case 'Individual':       return 15000;
    case 'SME Executive':    return 20000;
    case 'Corporate Elite':  return 25000;
    case 'Startup & Student': return 3000;
    default:                 return 15000;
  }
}

function getTierPrice(tierName: string): string {
  switch (tierName) {
    case 'Individual':       return '500 GBP / ₹15,000';
    case 'SME Executive':    return '750 GBP / ₹20,000';
    case 'Corporate Elite':  return '1,000 GBP / ₹25,000';
    case 'Startup & Student': return '100 GBP / ₹3,000';
    default:                 return '500 GBP / ₹15,000';
  }
}

// ─── Load Cashfree JS SDK dynamically ────────────────────────────────────────

function loadCashfreeSDK(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('No window'));
    if ((window as any).Cashfree) return resolve(); // already loaded

    const existing = document.getElementById('cashfree-sdk');
    if (existing) {
      // Script tag exists but Cashfree not ready yet — wait for it
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('SDK load failed')));
      return;
    }

    const script = document.createElement('script');
    script.id = 'cashfree-sdk';
    script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Cashfree SDK'));
    document.head.appendChild(script);
  });
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function MembershipTiers() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cashfree' | 'bank' | 'paytm' | 'international-qr'>('cashfree');

  const handlePayNow = (tierName: string) => {
    setSelectedTier(tierName);
    setPaymentMethod('cashfree');
    setShowPaymentModal(true);
  };

  // ─── Payment Modal ──────────────────────────────────────────────────────────

  const PaymentModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleCashfreePayment = async () => {
      setIsLoading(true);
      setErrorMsg(null);

      const amount  = getTierAmount(selectedTier || '');
      const orderId = `ukic_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      const customerId = `cust_${Date.now()}`;

      try {
        // Step 1 — Load SDK
        await loadCashfreeSDK();

        // Step 2 — Create order on your server → get payment_session_id
        const response = await fetch('/api/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId,
            amount,             // plain rupees: 15000 / 20000 / 25000 / 3000
            customerId,
            tierName: selectedTier,
          }),
        });

        const data = await response.json();

        if (!response.ok || !data.payment_session_id) {
          const msg = data.error || 'Could not create payment session. Please try again.';
          setErrorMsg(msg);
          setIsLoading(false);
          return;
        }

        // Step 3 — Initialise Cashfree with production mode
        const cashfree = (window as any).Cashfree({ mode: 'production' });

        // Step 4 — Close our modal and open Cashfree's native checkout overlay
        setShowPaymentModal(false);
        setIsLoading(false);

        const result = await cashfree.checkout({
          paymentSessionId: data.payment_session_id,
          redirectTarget: '_modal',   // opens as an overlay — no full-page redirect
        });

        if (result?.error) {
          alert(`Payment failed: ${result.error.message}`);
        } else if (result?.paymentDetails) {
          // Payment attempted — redirect to status page
          window.location.href = `/payment-status?order_id=${data.order_id}`;
        }

      } catch (err: any) {
        console.error('Cashfree payment error:', err);
        setErrorMsg(err.message || 'An unexpected error occurred. Please try again.');
        setIsLoading(false);
      }
    };

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div
          className="premium-card-gradient border border-blue-500/30 rounded-2xl max-w-md max-h-[90vh] w-full p-8 relative overflow-y-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Close */}
          <button
            onClick={() => setShowPaymentModal(false)}
            className="absolute top-4 right-4 text-blue-300 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl w-fit mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Complete Your Payment</h3>
            <p className="text-blue-300">For {selectedTier} Membership</p>
            <div className="text-3xl font-bold text-white mt-4">
              {getTierPrice(selectedTier || '')}
            </div>
          </div>

          {/* Error message */}
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/40 rounded-xl text-red-300 text-sm text-center">
              {errorMsg}
            </div>
          )}

          {/* Payment method tabs */}
          <div className="space-y-3 mb-6">

            {/* Cashfree */}
            <div
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                paymentMethod === 'cashfree'
                  ? 'bg-blue-500/20 border border-blue-500/50'
                  : 'bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/30'
              }`}
              onClick={() => setPaymentMethod('cashfree')}
            >
              <div className="flex items-center space-x-3">
                <Smartphone className="h-5 w-5 text-blue-400" />
                <div className="flex-1">
                  <div className="text-white font-semibold">Pay via Cashfree</div>
                  <div className="text-blue-300 text-sm">UPI · Cards · Netbanking · Wallets</div>
                </div>
                {paymentMethod === 'cashfree' && <div className="h-3 w-3 rounded-full bg-blue-500" />}
              </div>
            </div>

            {/* Bank Transfer */}
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
                {paymentMethod === 'bank' && <div className="h-3 w-3 rounded-full bg-blue-500" />}
              </div>
            </div>

            {/* Indian UPI QR */}
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
                  <div className="text-white font-semibold">Indian UPI QR</div>
                  <div className="text-blue-300 text-sm">Scan for INR payments</div>
                </div>
                {paymentMethod === 'paytm' && <div className="h-3 w-3 rounded-full bg-blue-500" />}
              </div>
            </div>

            {/* International QR */}
            <div
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                paymentMethod === 'international-qr'
                  ? 'bg-blue-500/20 border border-blue-500/50'
                  : 'bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/30'
              }`}
              onClick={() => setPaymentMethod('international-qr')}
            >
              <div className="flex items-center space-x-3">
                <Earth className="h-5 w-5 text-blue-400" />
                <div className="flex-1">
                  <div className="text-white font-semibold">International QR</div>
                  <div className="text-blue-300 text-sm">GBP / USD payments</div>
                </div>
                {paymentMethod === 'international-qr' && <div className="h-3 w-3 rounded-full bg-blue-500" />}
              </div>
            </div>
          </div>

          {/* ── Cashfree section ── */}
          {paymentMethod === 'cashfree' && (
            <div className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <div className="text-center">
                <p className="text-blue-300 text-sm mb-4">
                  You'll see Cashfree's secure payment screen with UPI, Credit/Debit cards,
                  Netbanking, and more.
                </p>
                <Button
                  onClick={handleCashfreePayment}
                  disabled={isLoading}
                  className="premium-blue-gradient text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50 w-full"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Opening Payment...
                    </span>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Pay Now with Cashfree
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* ── Bank Transfer ── */}
          {paymentMethod === 'bank' && (
            <div className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 space-y-3">
              <div>
                <div className="text-blue-300 text-xs uppercase tracking-wide mb-1">Account Number</div>
                <div className="text-white font-mono text-sm">{BANK_ACCOUNT}</div>
              </div>
              <div>
                <div className="text-blue-300 text-xs uppercase tracking-wide mb-1">Bank Name</div>
                <div className="text-white text-sm">ICICI Bank</div>
              </div>
              <div>
                <div className="text-blue-300 text-xs uppercase tracking-wide mb-1">IFSC Code</div>
                <div className="text-white font-mono text-sm">ICIC0000189</div>
              </div>
              <div>
                <div className="text-blue-300 text-xs uppercase tracking-wide mb-1">SWIFT Code</div>
                <div className="text-white font-mono text-sm">{SWIFT_CODE}</div>
              </div>
              <div>
                <div className="text-blue-300 text-xs uppercase tracking-wide mb-1">Beneficiary Name</div>
                <div className="text-white text-sm">UK-India CEO Forum</div>
              </div>
              <Button
                className="w-full premium-blue-gradient text-white mt-2"
                onClick={() => setShowPaymentModal(false)}
              >
                Done
              </Button>
            </div>
          )}

          {/* ── Indian UPI QR ── */}
          {paymentMethod === 'paytm' && (
            <div className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center">
              <div className="text-blue-300 text-sm mb-3">Indian UPI QR Code</div>
              <div className="p-4 bg-white rounded-lg inline-block">
                <Image
                  src="/nebula-qr.jpeg"
                  alt="Indian UPI QR"
                  width={256}
                  height={256}
                  className="w-56 h-56 object-contain rounded"
                />
                <div className="text-xs text-gray-600 mt-2">Scan for INR payments</div>
              </div>
              <Button
                className="w-full premium-blue-gradient text-white mt-4"
                onClick={() => setShowPaymentModal(false)}
              >
                Done
              </Button>
            </div>
          )}

          {/* ── International QR ── */}
          {paymentMethod === 'international-qr' && (
            <div className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center">
              <div className="text-blue-300 text-sm mb-3">International QR Code</div>
              <div className="p-4 bg-white rounded-lg inline-block">
                <Image
                  src="/wise-qr-code.jpeg"
                  alt="International Payment QR"
                  width={256}
                  height={256}
                  className="w-56 h-56 object-contain rounded"
                />
              </div>
              <Button
                className="w-full premium-blue-gradient text-white mt-4"
                onClick={() => setShowPaymentModal(false)}
              >
                Done
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ─── Page section ────────────────────────────────────────────────────────────

  return (
    <>
      <section id="tiers" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                               linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          {/* Heading */}
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

          {/* Tier cards */}
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-blue-500/20" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative group ${tier.highlighted ? 'lg:transform lg:-translate-y-8' : ''} transition-all duration-500`}
                >
                  <div className={`absolute top-0 left-0 w-4 h-4 border-t border-l ${tier.borderColor}`} />
                  <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r ${tier.borderColor}`} />
                  <div className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l ${tier.borderColor}`} />
                  <div className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r ${tier.borderColor}`} />

                  {tier.highlighted && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="premium-blue-gradient text-white px-8 py-3 rounded-full font-bold text-sm flex items-center shadow-lg shadow-blue-500/30">
                        <Target className="mr-3 h-4 w-4 animate-pulse" />
                        {tier.badge}
                        <div className="ml-3 h-2 w-2 rounded-full bg-white animate-ping" />
                      </div>
                    </div>
                  )}

                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-blue-500/10'
                      : 'bg-gradient-to-r from-blue-500/5 via-blue-400/5 to-blue-500/5'
                  } blur-xl`} />

                  <Card className={`
                    relative z-10 h-full
                    bg-gradient-to-br ${tier.gradient}
                    border ${tier.borderColor}
                    backdrop-blur-sm
                    transition-all duration-500
                    group-hover:border-blue-500/70
                    group-hover:shadow-2xl
                    ${tier.highlighted ? 'shadow-2xl shadow-blue-500/20' : 'shadow-xl shadow-black/20'}
                    overflow-hidden
                  `}>
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]" />
                    </div>

                    <CardHeader className="pt-12 pb-8 relative">
                      <div className={`relative mb-8 ${tier.highlighted ? 'scale-110' : ''} transition-transform duration-300`}>
                        <div className={`absolute inset-0 rounded-2xl ${tier.highlighted ? 'bg-blue-500/30' : 'bg-blue-500/20'} blur-xl`} />
                        <div className={`relative p-5 rounded-2xl ${
                          tier.highlighted
                            ? 'bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-500/30'
                            : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30'
                        } flex items-center justify-center w-16 h-16 mx-auto`}>
                          {tier.icon}
                        </div>
                      </div>

                      <CardTitle className="text-3xl font-bold text-center mb-2">
                        <span className="text-white">{tier.name}</span>
                      </CardTitle>
                      <p className="text-blue-300 text-center font-medium">{tier.tagline}</p>

                      <div className="text-center mt-8">
                        <div className="text-4xl font-bold text-white mb-2">{tier.priceGBP}</div>
                        <div className="text-blue-300 font-medium">{tier.priceINR}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-8">
                      <div className="space-y-4 mb-8">
                        {tier.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-300"
                          >
                            <div className={`p-2 rounded-lg ${
                              tier.highlighted ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-900/30 text-blue-400'
                            } flex-shrink-0`}>
                              {feature.icon}
                            </div>
                            <span className={`${tier.highlighted ? 'text-blue-100' : 'text-blue-200'} font-medium`}>
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`
                          w-full py-6 rounded-xl font-bold text-lg relative overflow-hidden
                          transition-all duration-500 group-hover:scale-[1.02]
                          ${tier.highlighted
                            ? 'premium-blue-gradient text-white shadow-lg shadow-blue-500/30'
                            : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-500/50'
                          }
                        `}
                        onClick={() => handlePayNow(tier.name)}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          <CreditCard className="mr-3 h-5 w-5" />
                          Pay Now
                          {tier.highlighted && <Sparkles className="ml-3 h-5 w-5 animate-pulse" />}
                        </span>
                      </Button>

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

          {/* Startup & Student card */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-green-500/5 to-blue-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative border border-blue-500/30 overflow-hidden">
                <CardContent className="p-10">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30">
                          <Shield className="h-8 w-8 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">Startup & Student Program</h3>
                          <p className="text-blue-200">
                            Special access for innovators and future leaders. Get essential
                            networking opportunities at an unprecedented value.
                          </p>
                        </div>
                      </div>
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
                        <div className="text-3xl font-bold text-white mb-1">100 GBP</div>
                        <div className="text-blue-300 font-medium">3,000 INR</div>
                      </div>
                      <p className="text-blue-400 text-sm mt-4 mb-6">Limited spots available each quarter</p>
                      <Button
                        className="premium-blue-gradient text-white px-8 py-6 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300 w-full lg:w-auto"
                        onClick={() => handlePayNow('Startup & Student')}
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
                        Pay Now
                        <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Payment method info footer */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Smartphone className="h-5 w-5 text-blue-400" />, title: 'Cashfree', desc: 'UPI, Cards, Netbanking via Cashfree' },
              { icon: <Banknote className="h-5 w-5 text-blue-400" />, title: 'Bank Transfer', desc: 'International wire transfer to ICICI Bank' },
              { icon: <QrCode className="h-5 w-5 text-blue-400" />, title: 'Indian QR', desc: 'Scan Indian UPI QR code for INR payments' },
              { icon: <Earth className="h-5 w-5 text-blue-400" />, title: 'International QR', desc: 'Scan international QR for GBP/USD payments' },
            ].map((item) => (
              <Card key={item.title} className="premium-card-gradient border border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {item.icon}
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-blue-300 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showPaymentModal && <PaymentModal />}
    </>
  );
}
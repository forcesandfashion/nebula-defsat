// app/components/Draft.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield, ArrowUpRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Draft() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Tactical Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #8B0000 0px, #8B0000 1px, transparent 1px, transparent 20px)`,
          backgroundSize: '28px 28px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 border-l-4 border-r-4 border-[#8B0000] bg-[#F8F8F8] w-fit">
              <Shield className="w-4 h-4 text-[#8B0000]" />
              <span className="text-sm font-bold text-[#8B0000] tracking-wide">
                MADE IN BHARAT 🇮🇳
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
              From Battlefield <br />
              <span className="text-[#8B0000]">to Boardroom</span>
            </h2>

            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              India's ultimate D2C military gear DealRoom & upcycling store —
              transforming combat-tested legacy into future-ready fashion and function.
            </p>

            <div className="flex items-center gap-2 p-4 bg-[#F8F8F8] border-l-4 border-[#8B0000]">
              <Star className="w-5 h-5 text-[#8B0000]" />
              <p className="text-[#6B6B6B] text-sm italic">
                "Because some threads don't just weave fabrics — they weave legacy into every stitch."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="https://www.forcesandfashion.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white rounded-none px-8 py-6 text-base font-bold group">
                  Explore Forces & Fashion
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>

              <div className="flex items-center gap-2 px-5 py-3 border border-[#E5E5E5] bg-white text-[#6B6B6B] text-sm">
                <Shield className="w-4 h-4" />
                Trusted by Armed Forces Worldwide
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative group">
            <div className="absolute -inset-2 border border-[#8B0000]/20 group-hover:border-[#8B0000]/50 transition-all" />
            <div className="relative overflow-hidden bg-[#F8F8F8]">
              <Image
                src="/forcesandfashiondraft.jpg"
                alt="Forces and Fashion - Made in Bharat"
                width={800}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B0000]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#8B0000]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#8B0000]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B0000]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
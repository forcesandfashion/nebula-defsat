"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Draft() {
  return (
    <section className="relative mt-24 mb-24 overflow-hidden p-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-defence-navy to-black opacity-90" />

      {/* Glow accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-defence-saffron/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <Shield className="w-4 h-4 text-defence-saffron" />
              <span className="text-sm text-white tracking-wide">
                MADE IN BHARAT 🇮🇳
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              From Battlefield <br />
              <span className="text-white from-defence-saffron to-orange-500 bg-clip-text text-transparent">
                to Boardroom
              </span>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              India’s ultimate D2C military gear DealRoom & upcycling store —
              transforming combat-tested legacy into future-ready fashion and function.
            </p>

            <p className="text-white/60 text-sm italic max-w-xl">
              “Because some threads don’t just weave fabrics — they weave legacy into every stitch.”
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* <Link
                href="https://www.forcesandfashion.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-defence-saffron to-orange-600 hover:from-orange-600 hover:to-defence-saffron text-white rounded-xl px-6 py-5 text-base shadow-xl flex items-center gap-2">
                  Explore Forces & Fashion
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </Link> */}

              <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm flex items-center">
                Trusted by Armed Forces Worldwide
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-defence-saffron/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-all" />

            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src="/forcesandfashiondraft.jpg"
                alt="Forces and Fashion - Made in Bharat"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

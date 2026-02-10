"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
  }, [isMenuOpen])

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/nebuladefsat-logo5.png"
              alt="NebulaDefSat"
              width={40}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">
              Home
            </Link>
            <Link href="/invest-now" className="text-sm text-muted-foreground hover:text-foreground transition">
              Invest Now
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contact
            </Link>
            <Link href="/membership" className="text-sm text-muted-foreground hover:text-foreground transition">
              Membership
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="https://chat.whatsapp.com/HWjnppP8SxW6V2MyMElJCB"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-16 left-0 right-0 z-50 md:hidden
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl shadow-2xl overflow-hidden">

          {/* Menu Links */}
          <div className="flex flex-col divide-y divide-white/10">
            {[
              { name: "Home", href: "/" },
              { name: "Invest Now", href: "/invest-now" },
              { name: "Contact", href: "#contact" },
              { name: "Membership", href: "/membership" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 text-base font-medium text-foreground hover:bg-white/5 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="p-4">
            <Link
              href="https://chat.whatsapp.com/HWjnppP8SxW6V2MyMElJCB"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

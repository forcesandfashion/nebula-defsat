"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-accent-foreground">◆</span>
          </div> */}
          {/* <span className="font-bold text-lg text-foreground hidden sm:inline">NebulaDefSat</span> */}
          <Image src={"/nebuladefsat-logo4.png"} alt={"image not found"} height={50} width={50}/>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </Link>
          <Link href="/invest-now" className="text-sm text-muted-foreground hover:text-foreground transition">
            Invest Now
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex bg-accent text-accent-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>
    </header>
  )
}

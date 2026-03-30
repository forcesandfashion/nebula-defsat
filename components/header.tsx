"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    "home",
    "agenda",
    "speakers",
    "venue",
    "certificate",
    "gallery",
    "membership",
    "investnow",
  ]

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#f5f5f5]/90 backdrop-blur border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-[18px] sm:text-[22px] md:text-[26px] font-bold text-[#c6a96b] tracking-wide">
              NEBULA DEFSAT
            </span>
            <span className="text-[9px] sm:text-[10px] text-gray-600 tracking-wide">
              Tactical Defence Systems • Made in Bharat
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 text-[13px] font-medium">
            {navItems.map((item) => {
              const path = item === "home" ? "/" : `/${item}`
              const isActive = pathname === path

              return (
                <Link
                  key={item}
                  href={path}
                  className={`px-3 py-2 rounded-md transition-all duration-200 whitespace-nowrap
                    ${
                      isActive
                        ? "bg-blue-500 text-white shadow"
                        : "text-gray-700 hover:text-black hover:bg-gray-200"
                    }
                  `}
                >
                  {item.toUpperCase()}
                </Link>
              )
            })}
          </div>

          {/* RIGHT (DESKTOP) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/login"
              className={`text-[13px] px-4 py-2 rounded-md transition ${
                pathname === "/login"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:text-black hover:bg-gray-200"
              }`}
            >
              SIGN IN
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-24 left-0 right-0 bg-white z-40 shadow-lg transform transition-all duration-300 lg:hidden ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col divide-y">
          {navItems.map((item) => {
            const path = item === "home" ? "/" : `/${item}`
            const isActive = pathname === path

            return (
              <Link
                key={item}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-6 py-4 text-[15px] font-medium transition
                  ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {item.toUpperCase()}
              </Link>
            )
          })}

          {/* SIGN IN MOBILE */}
          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 text-[15px] font-semibold text-blue-600 hover:bg-gray-100"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </>
  )
}
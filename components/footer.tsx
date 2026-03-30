"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent to-blue-900/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* BRAND */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                ◆
              </div>
              <span className="text-xl font-bold tracking-wide">
                NebulaDefSat Pvt. Ltd.
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Advancing global security through cutting-edge satellite and defence technology.
            </p>

            {/* ADDRESS CARD */}
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-orange-500/40 transition">
              <div className="flex gap-3">
                <MapPin className="text-orange-400 mt-1" size={18} />
                <div>
                  <p className="font-semibold text-white mb-1">Headquarters</p>
                  <p className="text-sm text-gray-400">
                    Nebula Def-SAT Pvt Ltd <br />
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="footer-title">Contact</h4>

            <div className="space-y-3 mt-4 text-sm">
              <div className="footer-item">
                <Phone size={16} />
                +91 96384 13900
              </div>

              <div className="footer-item">
                <Mail size={16} />
                connect@nebuladefsat.com
              </div>

              <div className="footer-item">
                <Mail size={16} />
                hr@nebuladefsat.com
              </div>
            </div>

            {/* HOURS */}
            <div className="mt-6 text-sm">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-orange-400" />
                <span className="font-medium">Business Hours</span>
              </div>
              <p className="text-gray-400">
                Mon - Fri: 9AM - 6PM <br />
                Sat: 10AM - 2PM
              </p>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><Link href="#">Satellite Systems</Link></li>
              <li><Link href="#">Defence Solutions</Link></li>
              <li><Link href="#">Drone Tech</Link></li>
              <li><Link href="#">Surveillance</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/career">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/invest">Invest</Link></li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-400 text-sm">
            © 2025 NebulaDefSat. All rights reserved.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4">
            {["twitter", "linkedin", "instagram"].map((icon) => (
              <Link
                key={icon}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-500 transition shadow-md hover:scale-110"
              >
                <Image src={`/${icon}.png`} alt={icon} width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-6 pt-6 text-xs text-gray-400">
          {[
            "ISO Certified",
            "Ministry Approved",
            "Make in India",
            "GDPR Secure"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .footer-title {
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #aaa;
        }

        .footer-links li {
          margin-top: 8px;
        }

        .footer-links a {
          color: #ccc;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #ff7a18;
          transform: translateX(4px);
        }

        .footer-item {
          display: flex;
          gap: 8px;
          color: #ccc;
          align-items: center;
        }
      `}</style>
    </footer>
  )
}
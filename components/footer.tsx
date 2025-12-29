"use client"

import Link from "next/link"     
import { MapPin, Phone, Mail, Clock } from "lucide-react"  

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8 bg-gradient-to-t from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Address */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-defence-saffron to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-white">◆</span>
              </div>
              <span className="font-bold text-white">NebulaDefSat Pvt. Ltd.</span>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Advancing global security through cutting-edge satellite and defence technology.
            </p>
            
            {/* Address Section */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-defence-saffron flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Headquarters</p>
                  <p className="text-gray-400 text-sm">
                    Nebula Def-SAT Private Limited <br/>
                    Office No. A/907, Elite Magnum, <br/>
                    806, Bhuyangdev Cross Road, Ahmedabad, Gujarat, <br />
                    India- 380061
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                {/* <MapPin className="w-5 h-5 text-defence-saffron flex-shrink-0 mt-0.5" /> */}
                {/* <div>
                  <p className="text-white font-medium mb-1">R&D Center</p>
                  <p className="text-gray-400 text-sm">
                    Tech Park Building,<br />
                    Outer Ring Road,<br />
                    Bengaluru - 560037, India
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-defence-saffron" />
                <span className="text-sm text-gray-300">+91 11 2568 9473</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-defence-saffron" />
                <span className="text-sm text-gray-300">+91 96384 13900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-defence-saffron" />
                <span className="text-sm text-gray-300">info@nebuladefsat.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-defence-saffron" />
                <span className="text-sm text-gray-300">support@nebuladefsat.in</span>
              </li>
            </ul>
            
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-4 h-4 text-defence-saffron" />
                <h5 className="font-medium text-white text-sm">Business Hours</h5>
              </div>
              <p className="text-gray-400 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 10:00 AM - 2:00 PM<br />
                Sunday & Holidays: Closed
              </p>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-defence-saffron transition duration-300">
                  Satellite Systems
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-defence-saffron transition duration-300">
                  Defence Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-defence-saffron transition duration-300">
                  Surveillance Tech
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-defence-saffron transition duration-300">
                  Drone Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-defence-saffron transition duration-300">
                  Security Protocols
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-defence-saffron transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-defence-saffron transition duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-defence-saffron transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-defence-saffron transition duration-300">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-defence-saffron transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/invest" className="hover:text-defence-saffron transition duration-300">
                  Invest Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-defence-saffron transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-defence-saffron transition duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-defence-saffron transition duration-300">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-defence-saffron transition duration-300">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-defence-saffron transition duration-300">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="space-y-2 mb-4 md:mb-0">
            <p>&copy; 2025 NebulaDefSat Pvt. Ltd. All rights reserved.</p>
            <p className="text-xs">
              Registered under the Companies Act, 2013 • GSTIN: 07AABCN1234M1Z5
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              <Link 
                href="https://www.linkedin.com/events/7379490249753841664/" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-defence-saffron transition duration-300"
              >
                <span className="text-white text-xs font-medium">Tw</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/events/7379490249753841664/" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-defence-saffron transition duration-300"
              >
                <span className="text-white text-xs font-medium">In</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/events/7379490249753841664/" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-defence-saffron transition duration-300"
              >
                <span className="text-white text-xs font-medium">Fb</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/events/7379490249753841664/" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-defence-saffron transition duration-300"
              >
                <span className="text-white text-xs font-medium">Yt</span>
              </Link>
            </div>
            
            {/* Quick Links */}
            <div className="flex gap-6 text-xs">
              <Link href="/accessibility" className="hover:text-white transition">
                Accessibility
              </Link>
              <Link href="/cookies" className="hover:text-white transition">
                Cookies
              </Link>
              <Link href="/disclaimer" className="hover:text-white transition">
                Disclaimer
              </Link>
              
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-defence-green rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-defence-saffron rounded-full"></div>
              <span>Ministry of Defence Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Make in India Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
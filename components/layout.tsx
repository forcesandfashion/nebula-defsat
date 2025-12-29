"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Shield, Mail } from "lucide-react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  icon: ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

export default function Layout({ 
  children, 
  title, 
  description, 
  icon, 
  gradientFrom, 
  gradientTo 
}: LayoutProps) {
  const policyPages = [
    { href: "/refund", label: "Refund Policy", color: "from-blue-500 to-blue-400" },
    { href: "/terms", label: "Terms & Conditions", color: "from-purple-500 to-purple-400" },
    { href: "/shipping", label: "Shipping Policy", color: "from-amber-500 to-amber-400" },
    { href: "/privacy", label: "Privacy Policy", color: "from-green-600 to-green-500" },
    { href: "/contact", label: "Contact Us", color: "from-green-900 to-green-700" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                Legal & Policies
              </h1>
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-900 text-white text-sm font-medium hover:bg-green-800 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </Link>
          </div>
        </div>
      </header>

      {/* Policy Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex space-x-2">
            {policyPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  title === page.label
                    ? "bg-green-50 text-green-900 border border-green-200"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}>
                  {icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                  <p className="text-gray-600 mt-1">{description}</p>
                </div>
              </div>

              {children}
            </motion.div>

            {/* Last Updated */}
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Last Updated: March 2024 • © {new Date().getFullYear()} Nebula Def-SAT Private Limited
              </p>
            </div>
          </main>

          {/* Sidebar Contact Card */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Policy Navigation</h3>
                <nav className="space-y-2 mb-6">
                  {policyPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`flex items-center px-3 py-2.5 text-sm rounded-lg transition-all ${
                        title === page.label
                          ? "bg-green-50 text-green-900 font-medium border border-green-200"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {page.label}
                    </Link>
                  ))}
                </nav>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Need Help?</h3>
                      <p className="text-xs text-gray-500">Contact our support team</p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
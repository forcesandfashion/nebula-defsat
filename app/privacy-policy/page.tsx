"use client";
import { useState, useEffect, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  FileText, 
  Shield, 
  Truck, 
  CreditCard,
  Mail,
  Phone,
  Clock,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("privacy");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sections = [
    { id: "cancellation", title: "Cancellation & Refunds", icon: <CreditCard className="w-4 h-4" /> },
    { id: "terms", title: "Terms & Conditions", icon: <FileText className="w-4 h-4" /> },
    { id: "shipping", title: "Shipping / Delivery", icon: <Truck className="w-4 h-4" /> },
    { id: "privacy", title: "Privacy Policy", icon: <Shield className="w-4 h-4" /> },
  ];

  // Handle scroll to section
  const scrollToSection = (sectionId: SetStateAction<string>) => {
    setActiveSection(sectionId);
    setMobileNavOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                Legal & Policies
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-green-900 text-white text-sm font-medium hover:bg-green-800 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </a>
              
              {/* Mobile Navigation Toggle */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="sm:hidden p-2 rounded-lg border border-gray-200"
              >
                {mobileNavOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-green-50 text-green-900 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-3">{section.icon}</span>
                  {section.title}
                  {activeSection === section.id && (
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32 hidden lg:block">
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Policy Sections
                </h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center w-full px-3 py-2.5 text-sm rounded-lg transition-all ${
                        activeSection === section.id
                          ? "bg-green-50 text-green-900 font-medium border border-green-200"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span className="mr-3">{section.icon}</span>
                      {section.title}
                      {activeSection === section.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  ))}
                </nav>

                {/* Contact Card */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Need Help?</h3>
                      <p className="text-xs text-gray-500">Contact our support team</p>
                    </div>
                  </div>
                  <a
                    href="mailto:support@nebulaaccelerator.com"
                    className="block w-full text-center px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
                  >
                    Email Support
                  </a>
                </div>
              </div>

              {/* Last Updated */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Last Updated: March 2024
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Cancellation & Refunds Section */}
            <section id="cancellation" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Cancellation and Refunds</h2>
                    <p className="text-gray-600 mt-1">Policy for program cancellations and refund procedures</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-blue-800 text-sm">
                        Nebula Def-SAT Private Limited offers programs, events, and services that run on defined timelines and capacities. This policy explains how cancellations and refunds are handled for paid registrations and services.
                      </p>
                    </div>
                  </div>

                  {[
                    {
                      title: "1. General Principles",
                      content: "Nebula Def-SAT Private Limited reserves the right to accept, reject, or cancel any registration or booking at its sole discretion. All requests for cancellation or refund must be made in writing to the official Nebula Accelerator email address provided on the website."
                    },
                    {
                      title: "2. Cancellations by Participant",
                      content: (
                        <>
                          <p className="mb-3">For most paid programs, workshops, and events:</p>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span><strong>15+ days before:</strong> Full refund (excluding payment gateway charges)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span><strong>3–7 days before:</strong> Partial refund (up to 50%) at discretion</span>
                            </li>
                            <li className="flex items-start">
                              <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span><strong>Within 72 hours / No-show:</strong> No refund eligible</span>
                            </li>
                          </ul>
                        </>
                      )
                    },
                    {
                      title: "3. Rescheduling and Substitutions",
                      content: "Where possible, participants may request to transfer their registration to a future cohort or program date instead of cancellation, subject to availability and program rules. With prior written consent from Nebula Accelerator, a registered participant may nominate a substitute attendee from the same organization or team."
                    },
                    {
                      title: "4. Cancellations by Nebula Accelerator",
                      content: "Nebula Accelerator reserves the right to postpone, reschedule, or cancel any program, event, or service due to insufficient enrolments, force majeure events, or circumstances beyond its reasonable control. In such cases, participants will be offered either a full refund of the program fee paid, or a transfer of the fee to another program or future cohort of equal value."
                    },
                    {
                      title: "5. Refund Process",
                      content: "Approved refunds will be processed through the original mode of payment, wherever feasible. Refunds are typically initiated within 10–15 working days from the date of approval, but actual credit timelines may depend on the payment provider or bank."
                    },
                    {
                      title: "6. Non‑Refundable Items",
                      content: "Fees paid for application processing, evaluation, mentoring-only consults, or bespoke advisory services may be non‑refundable and will be clearly indicated at the time of purchase. Any taxes, charges, or convenience fees levied by payment partners are non‑refundable unless otherwise required by law."
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <div className="text-gray-700 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Terms & Conditions Section */}
            <section id="terms" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Terms and Conditions</h2>
                    <p className="text-gray-600 mt-1">Govern your use of our website and services</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-6">
                    <p className="text-purple-800 text-sm">
                      These Terms and Conditions ("Terms") govern your access to and use of the Nebula Accelerator website (the "Site") and all services, programs, and content made available through it. By using the Site, you agree to be bound by these Terms of Nebula Def-SAT Private Limited.
                    </p>
                  </div>

                  {[
                    {
                      title: "1. Use of the Site",
                      content: "The Site is intended for founders, professionals, partners, and stakeholders interested in Nebula Accelerator's programs and initiatives. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use and enjoyment of the Site by any other user."
                    },
                    {
                      title: "2. Eligibility and Registration",
                      content: "Some areas of the Site or certain services may require registration or application. You agree that the information provided during registration or application is accurate, current, and complete, and that you will update it as necessary."
                    },
                    {
                      title: "3. Intellectual Property",
                      content: "All content on the Site, including text, graphics, logos, images, videos, program materials, and designs, is owned by or licensed to Nebula Accelerator and is protected by applicable intellectual property laws. You may view, download, or print limited copies of materials for personal, non‑commercial use only, provided you do not modify the content and retain all proprietary notices."
                    },
                    {
                      title: "4. Prohibited Activities",
                      content: (
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Use the Site to upload or transmit any unlawful, harmful, defamatory, or objectionable material.</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Attempt to gain unauthorized access to the Site, its servers, or any associated systems.</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Copy, distribute, or exploit any part of the Site or its content for commercial purposes without prior written consent.</span>
                          </li>
                        </ul>
                      )
                    },
                    {
                      title: "5. Third‑Party Links and Services",
                      content: "The Site may contain links to third‑party websites or services for convenience and information. Nebula Accelerator does not endorse and is not responsible for the content, security, or privacy practices of any third‑party websites, and your use of them is at your own risk."
                    },
                    {
                      title: "6. Program and Service Modifications",
                      content: "Nebula Accelerator may modify, update, or discontinue any program, offering, or feature of the Site at any time, with or without notice. Fees, eligibility criteria, and program structures may be revised periodically, and updated details will be reflected on the Site."
                    },
                    {
                      title: "7. Limitation of Liability",
                      content: "To the maximum extent permitted by law, Nebula Accelerator shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use or inability to use the Site or services. Nebula Accelerator does not guarantee uninterrupted or error‑free access to the Site and may suspend operations for maintenance or upgrades."
                    },
                    {
                      title: "8. Indemnity",
                      content: "You agree to indemnify and hold harmless Nebula Accelerator, its team members, partners, and affiliates from any claims, losses, damages, liabilities, and expenses arising from your breach of these Terms or misuse of the Site."
                    },
                    {
                      title: "9. Changes to these Terms",
                      content: "Nebula Accelerator may revise these Terms from time to time by updating this page. Continued use of the Site after such changes constitutes your acceptance of the revised Terms."
                    },
                    {
                      title: "10. Governing Law and Jurisdiction",
                      content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with the Site or these Terms shall be subject to the exclusive jurisdiction of the courts located in India."
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-purple-200 pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <div className="text-gray-700 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Shipping / Delivery Section */}
            <section id="shipping" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Shipping / Delivery</h2>
                    <p className="text-gray-600 mt-1">Information about delivery of digital and physical items</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6">
                    <p className="text-amber-800 text-sm">
                      Nebula Def-SAT Private Limited (Nebula Accelerator) primarily offers digital programs, mentorship, and services, and may occasionally ship physical materials, merchandise, or documents. This policy explains how such deliveries are handled.
                    </p>
                  </div>

                  {[
                    {
                      title: "1. Mode of Delivery",
                      content: "For digital offerings (such as online programs, access links, resources, or certificates), delivery is made electronically to the email address or account provided at the time of registration. For physical items, delivery partners and timelines will be specified during the order or registration process wherever applicable."
                    },
                    {
                      title: "2. Delivery Timelines",
                      content: "Digital access (for example, login credentials or joining links) is typically shared within a reasonable time after confirmation of payment and completion of onboarding formalities. Physical shipments, where offered, are usually dispatched within a specified number of working days from order confirmation, subject to availability, location, and logistics."
                    },
                    {
                      title: "3. Shipping Charges",
                      content: "Any applicable shipping or courier charges for physical items will be communicated at the time of purchase or registration. Delivery fees, where charged, may be non‑refundable in case of late cancellations once an order or dispatch has been initiated, except as required by law."
                    },
                    {
                      title: "4. Delays and Non‑Delivery",
                      content: "Delivery timelines are estimates and may be affected by factors such as service interruptions, public holidays, regulatory checks, or force majeure events. In case of undelivered items due to incorrect address or unavailability of the recipient, re‑delivery may be arranged at additional cost or on a case‑by‑case basis."
                    },
                    {
                      title: "5. International Delivery",
                      content: "If and when international delivery is offered for select items or documents, additional charges, customs duties, and local regulations may apply. Recipients are responsible for complying with the laws and regulations of the destination country."
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-amber-200 pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <div className="text-gray-700 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Privacy Policy Section */}
            <section id="privacy" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                    <p className="text-gray-600 mt-1">How we collect, use, and protect your personal data</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-green-800 text-sm">
                        Nebula Accelerator respects your privacy and is committed to protecting your personal data in line with applicable Indian law, including the Digital Personal Data Protection Act (DPDPA). This policy explains how personal data is collected, used, stored, and safeguarded when you interact with the Site and services.
                      </p>
                    </div>
                  </div>

                  {[
                    {
                      title: "1. Information We Collect",
                      content: (
                        <>
                          <p className="mb-3">Nebula Def-SAT Private Limited (Nebula Accelerator) may collect the following categories of personal information:</p>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span><strong>Contact details:</strong> name, email, phone, organization, role, and address</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span><strong>Application info:</strong> startup details, sector, stage, pitch decks, professional background</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span><strong>Transaction data:</strong> registrations, payments, event participation, interactions</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span><strong>Technical data:</strong> IP address, browser type, device identifiers, usage analytics</span>
                            </li>
                          </ul>
                        </>
                      )
                    },
                    {
                      title: "2. How We Use Your Information",
                      content: (
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Process applications, registrations, and payments for programs, events, and services</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Communicate regarding program updates, opportunities, events, and relevant information</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Improve the Site, tailor offerings, and conduct research, analytics, and reporting</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Comply with legal obligations, respond to lawful requests, and prevent fraud</span>
                          </li>
                        </ul>
                      )
                    },
                    {
                      title: "3. Legal Basis and Consent",
                      content: "Where required, Nebula Accelerator will obtain your consent before collecting or using personal data for specific purposes such as marketing communications. You may withdraw consent at any time by using the unsubscribe mechanisms provided in communications or by contacting the team; withdrawal of consent may limit access to some services."
                    },
                    {
                      title: "4. Sharing of Information",
                      content: "Nebula Accelerator may share limited personal data with trusted partners, mentors, service providers, or sponsors strictly for the purpose of delivering programs or services, under appropriate confidentiality and data‑protection obligations. Data may be disclosed where required by law, regulation, court order, or government authority."
                    },
                    {
                      title: "5. Data Security and Retention",
                      content: "Reasonable technical and organizational measures are implemented to protect personal data against unauthorized access, alteration, disclosure, or destruction. Data is retained only for as long as necessary to fulfil the purposes described in this policy or as required by applicable law, after which it is securely deleted or anonymized."
                    },
                    {
                      title: "6. Your Rights",
                      content: (
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Shield className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Request access to the personal data held about you</span>
                          </li>
                          <li className="flex items-start">
                            <Shield className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Request correction or updating of inaccurate or incomplete data</span>
                          </li>
                          <li className="flex items-start">
                            <Shield className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Request deletion or restriction of processing of your data, where feasible</span>
                          </li>
                          <li className="flex items-start">
                            <Shield className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Object to certain types of processing, including direct marketing</span>
                          </li>
                        </ul>
                      )
                    },
                    {
                      title: "7. Cookies and Tracking Technologies",
                      content: "The Site may use cookies and similar technologies to enhance user experience, analyze traffic, and understand usage patterns. You can manage cookie preferences through your browser settings; however, disabling certain cookies may impact some Site features."
                    },
                    {
                      title: "8. Updates to this Policy",
                      content: "This Privacy Policy may be updated periodically to reflect changes in law, technology, or Nebula Accelerator's practices. The latest version will always be available on the Site, and continued use of the Site after changes indicates acceptance of the updated policy."
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-green-200 pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <div className="text-gray-700 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Contact Section */}
            <section className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-900 to-green-700 rounded-2xl p-6 sm:p-8 text-white"
              >
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="mb-6 text-green-100">
                    Nebula Def-SAT Private Limited (Nebula Accelerator) encourages founders, partners, and stakeholders to connect for queries, collaborations, and support.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                      <Mail className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">General Enquiries</h3>
                      <p className="text-sm text-green-100">
                        For programs, partnerships, and events
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                      <CreditCard className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Refunds & Payments</h3>
                      <p className="text-sm text-green-100">
                        Include name, email, program, and transaction details
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                      <Shield className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Privacy Queries</h3>
                      <p className="text-sm text-green-100">
                        For data protection and privacy requests
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Form
                    </a>
                    <a
                      href="mailto:support@nebulaaccelerator.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-colors"
                    >
                      Email Directly
                    </a>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Nebula Def-SAT Private Limited. All rights reserved.
              </p>
              <p className="text-xs text-gray-400 mt-1">
                These policies are legally binding. Please read them carefully.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
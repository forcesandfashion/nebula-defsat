"use client";
import { Mail, CreditCard, Shield, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";

export default function ContactUs() {
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Nebula Accelerator team"
      icon={<Mail className="w-6 h-6 text-white" />}
      gradientFrom="from-green-900"
      gradientTo="to-green-700"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-green-900 to-green-700 rounded-2xl p-6 sm:p-8 text-white mb-8"
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
          </div>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <Mail className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Email Address</h3>
                <a 
                  href="mailto:support@nebulaaccelerator.com" 
                  className="text-green-700 hover:text-green-800 break-all"
                >
                  support@nebulaaccelerator.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <Phone className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone Support</h3>
                <p className="text-gray-700">+91 XXXXX XXXXX</p>
                <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM IST</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Response Time</h3>
                <p className="text-gray-700">24-48 hours for initial response</p>
                <p className="text-sm text-gray-500">Complex queries may require additional time</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <MapPin className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Registered Office</h3>
                <p className="text-gray-700">
                  Nebula Def-SAT Private Limited<br />
                  Office Address Here<br />
                  City, State - PIN Code<br />
                  India
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">For Legal Notices</h4>
              <p className="text-sm text-green-800">
                All legal notices should be sent via registered post to our registered office address above, with a copy emailed to legal@nebulaaccelerator.com
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </Layout>
  );
}
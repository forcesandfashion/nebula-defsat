'use client'

import { useState } from "react"
import Image from "next/image"
import { 
  Award, 
  Shield, 
  CheckCircle, 
  Calendar, 
  Building2, 
  FileText,
  Download,
  ExternalLink,
  Eye,
  Clock,
  Globe,
  Users,
  Rocket,
  ArrowRight,
  Target,
  X
} from "lucide-react"

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const certificates = [
    {
      id: 1,
      title: "Startup India Recognition",
      issuer: "Department for Promotion of Industry and Internal Trade (DPIIT)",
      issueDate: "18th January 2026",
      validUntil: "5th November 2035",
      type: "Government Recognition",
      icon: <Award className="w-5 h-5" />,
      image: "/cer1.jpg",
      pdf: "/Certificate-1.pdf",
      description: "Official recognition as a startup working in Aeronautics, Aerospace & Defence industry specializing in Drones sector.",
      highlights: [
        "Valid for 10 years from incorporation",
        "Turnover threshold up to 100 Cr",
        "Government of India certified",
        "Aeronautics & Defence sector"
      ]
    },
    {
      id: 2,
      title: "ISO 9001:2015 Certification",
      issuer: "ICV Assessments Pvt. Ltd.",
      issueDate: "19th January 2026",
      validUntil: "18th January 2029",
      type: "Quality Management",
      icon: <Shield className="w-5 h-5" />,
      image: "/cer2.jpg",
      pdf: "/Certificate-2.pdf",
      description: "Certified for Design, Development, Supply and Services of Drones, UAV's, Combat Uniforms, and ISR Chips.",
      highlights: [
        "Quality Management Systems",
        "International Standards Compliance",
        "Global Recognition",
        "Defence & Aerospace Scope"
      ]
    }
  ]

  return (
    <section className="min-h-screen py-26 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-4">
            <Target className="w-3.5 h-3.5 text-orange-600" />
            <span className="text-orange-600 text-xs font-semibold">OUR CREDENTIALS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-black">Certifications &</span>
            <span className="text-orange-600 ml-2">Official Recognitions</span>
          </h1>
          
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            We take pride in our official recognitions and quality certifications that validate our 
            commitment to excellence in Defence, Aerospace, and DeepTech sectors.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Award className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-black font-bold text-base">Startup India</div>
            <div className="text-gray-500 text-xs">Government Recognized</div>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-black font-bold text-base">ISO 9001:2015</div>
            <div className="text-gray-500 text-xs">Certified</div>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-black font-bold text-base">10+ Years</div>
            <div className="text-gray-500 text-xs">Valid</div>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Target className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-black font-bold text-base">Defence Sector</div>
            <div className="text-gray-500 text-xs">Approved</div>
          </div>
        </div>

        {/* Certificates Grid - With ACTUAL Certificate Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full overflow-hidden">
              
              {/* Certificate Image Preview */}
              <div 
                className="relative h-48 bg-gray-100 cursor-pointer group overflow-hidden"
                onClick={() => setSelectedCert(cert.id)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white rounded-full p-2">
                    <Eye className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              </div>
              
              {/* Card Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-base">{cert.title}</h3>
                      <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded">
                    {cert.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1">
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                
                {/* Dates */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    <span className="text-gray-500">Issued: {cert.issueDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    <span className="text-gray-500">Valid: {cert.validUntil}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-black font-semibold text-xs mb-2">Key Highlights</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cert.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-600 text-xs">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 flex gap-3">
                <button
                  onClick={() => setSelectedCert(cert.id)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" /> View Certificate
                </button>
                <a 
                  href={cert.pdf} 
                  download
                  className="px-4 py-2 rounded-lg border border-gray-200 hover:border-orange-200 text-gray-600 text-sm font-medium transition flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" /> PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-gradient-to-r from-transparent to-orange-400" />
            <span className="text-orange-600 font-semibold text-xs uppercase">Why These Matter</span>
            <div className="h-px w-6 bg-gradient-to-l from-transparent to-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-black">Trust & Credibility</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-5 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-black mb-1">Government Backed</h3>
            <p className="text-gray-500 text-sm">Recognized by Government of India as a certified startup in Defence sector</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-5 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-black mb-1">International Standards</h3>
            <p className="text-gray-500 text-sm">ISO 9001:2015 certification ensuring global quality standards</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-5 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-black mb-1">Industry Trust</h3>
            <p className="text-gray-500 text-sm">Validates our expertise in Drones, UAVs, and Defence technology</p>
          </div>
        </div>

      
      </div>

      {/* Certificate Modal - Full View */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-black">
                  {certificates.find(c => c.id === selectedCert)?.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="h-[70vh] overflow-auto bg-gray-100 p-4">
              <div className="relative min-h-full">
                <Image
                  src={certificates.find(c => c.id === selectedCert)?.image || ""}
                  alt="Certificate"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="p-4 border-t border-gray-100 flex justify-end gap-3">
              <a 
                href={certificates.find(c => c.id === selectedCert)?.pdf}
                download
                className="px-4 py-2 rounded-lg border border-gray-200 hover:border-orange-200 text-gray-600 text-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
              <a 
                href={certificates.find(c => c.id === selectedCert)?.pdf}
                target="_blank"
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> Open Full Screen
              </a>
            </div>
          </div>
        </div>
      )}

     
    </section>
  )
}
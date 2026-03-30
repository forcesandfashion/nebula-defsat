"use client"

import Image from "next/image"
import { useState } from "react"
import { speakers } from "@/static/speaker/speaker"
import { X, Linkedin, ChevronRight, Sparkles, Users, Target } from "lucide-react"

export default function SpeakersSection() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <section className="py-26 bg-white relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">

        {/* HEADER - Improved Design */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-4">
            <Users className="w-3.5 h-3.5 text-orange-600" />
            <span className="text-orange-600 text-xs font-semibold uppercase tracking-wider">
              MEET OUR SPEAKERS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
            Eminent Speakers
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-400" />
            <Sparkles className="w-4 h-4 text-orange-500" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-400" />
          </div>
          
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Distinguished leaders shaping the future of Defence, DeepTech, and SpaceTech industries
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((sp) => (
            <div
              key={sp.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm 
              transition-all duration-300 
              hover:shadow-md hover:border-orange-200 
              h-full flex flex-col group"
            >
              <div className="p-6 flex flex-col flex-grow text-center">

                {/* IMAGE */}
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden 
                border-4 border-gray-100 group-hover:border-orange-200 transition-all mb-4">
                  <Image
                    src={sp.image}
                    alt={sp.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* NAME */}
                <h3 className="font-semibold text-lg text-black">
                  {sp.name || " "}
                </h3>

                {/* ROLE */}
                <p className="text-sm text-gray-600 mt-1">
                  {sp.role || " "}
                </p>

                {/* COMPANY */}
                <p className="text-xs text-orange-600 mt-1 font-medium">
                  {sp.company || " "}
                </p>

                {/* BUTTON */}
                <div className="mt-auto pt-5">
                  <button
                    onClick={() => setSelected(sp)}
                    className="w-full inline-flex justify-center items-center gap-2 
                    px-4 py-2 rounded-lg 
                    border border-orange-200 text-orange-600 
                    hover:bg-orange-500 hover:text-white hover:border-orange-500
                    transition-all duration-200 text-sm font-medium"
                  >
                    View Profile
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-gray-200 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-xl">

              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-black transition-colors flex items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-8">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  
                  <div className="w-28 h-28 relative rounded-full overflow-hidden border-4 border-orange-100">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center md:text-left flex-1">
                    <h2 className="text-2xl font-bold text-black">
                      {selected.name}
                    </h2>

                    <p className="text-orange-600 font-medium mt-1">
                      {selected.role}
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      {selected.company || " "}
                    </p>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    {selected.description || " "}
                  </p>

                  {/* CTA */}
                  <div className="mt-6">
                    {selected.linkedin ? (
                      <a
                        href={selected.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 
                        bg-orange-500 hover:bg-orange-600 
                        text-white px-6 py-3 rounded-lg 
                        transition-all duration-200 text-sm font-medium"
                      >
                        <Linkedin className="h-4 w-4" />
                        Connect on LinkedIn
                      </a>
                    ) : (
                      <div className="h-[44px]" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    
    </section>
  )
}
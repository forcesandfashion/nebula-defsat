"use client";

import Image from "next/image";
import { MapPin, Calendar, Navigation, ExternalLink } from "lucide-react";
import { useState } from "react";
export default function Venue() {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="bg-white py-12 px-6 md:px-16 border-t border-b border-gray-200">
      
      {/* HEADER SECTION */}
     <div className="mb-10">

  {/* Heading + underline grouped */}
  <div className="inline-block">
    <h1 className="text-3xl md:text-4xl font-bold text-black">
      Venue
    </h1>

    {/* Line centered under text */}
    <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mt-2"></div>
  </div>

  {/* Paragraph stays left */}
  <p className="text-gray-500 mt-4 text-sm">
    Our location and how you can get here
  </p>

</div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT SIDE - VENUE DETAILS CARD */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
          
          {/* VENUE IMAGE PLACEHOLDER */}
          {/* VENUE IMAGE PLACEHOLDER */}
<div className="relative w-full h-56 bg-gradient-to-r from-orange-100 to-orange-50">

  {/* Image */}
  {!imgError && (
    <img
      src="/venue.png"   // 🔁 replace
      alt="Location"
      className="w-full h-full object-cover"
      onError={() => setImgError(true)}
    />
  )}

  {/* Fallback */}
  {imgError && (
    <div className="absolute inset-0 flex items-center justify-center">
      <MapPin className="w-16 h-16 text-orange-300" />
    </div>
  )}

</div>

          {/* ADDRESS CONTENT */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-semibold text-black">
                Venue Address
              </h2>
            </div>

            <div className="space-y-3 text-gray-700">
              <p className="font-semibold text-black">
                Nebula Def-SAT Private Limited
              </p>
              <p className="text-sm leading-relaxed">
                Office No. A/907, Elite Magnum,<br />
                806, Bhuyangdev Cross Road,<br />
                Ahmedabad, Gujarat,<br />
                India - 380061
              </p>
            </div>

            {/* MAP BUTTON */}
            <a
              href="https://www.google.com/maps?q=Bhuyangdev+Cross+Road+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Live Location</span>
            </div>
          </div>
          <div className="relative w-full h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Bhuyangdev%20Cross%20Road%20Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              title="Venue Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
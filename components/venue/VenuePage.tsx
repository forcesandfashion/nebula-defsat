"use client"

import Image from "next/image"
import Venue from "../venue"

export default function VenuePage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[280px] md:h-[340px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/direction.png" // 👉 put your image in /public folder
          alt="Venue Background"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

        {/* CENTER BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-md text-sm md:text-base font-medium shadow-xl hover:scale-105 transition-all duration-300">
            GET DIRECTIONS
          </button>
        </div>
      </section>
      <Venue/>
    

    </div>
  )
}
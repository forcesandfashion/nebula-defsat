"use client"

import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    
    if (video) {
      // Set playback speed
      video.playbackRate = 1.2
      
      // Force play with multiple attempts
      const playVideo = () => {
        video.play().catch((error) => {
          console.log("Play failed:", error)
          // Retry after user interaction
          document.addEventListener('click', () => {
            video.play().catch(e => console.log("Retry failed:", e))
          }, { once: true })
        })
      }
      
      // Wait for video to be ready
      if (video.readyState >= 2) {
        playVideo()
      } else {
        video.addEventListener('canplay', playVideo)
      }
      
      // Ensure loop
      video.loop = true
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
      {/* Background Video - Full opacity, no white background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
          onError={() => {
            console.error("Video failed to load")
            setVideoError(true)
          }}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Show error message if video fails */}
        {videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <p className="text-white">Video failed to load. Check: /public/video/hero.mp4</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT - White text for dark video background */}
          <div className="text-white space-y-6">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              DefSat Conference & Expo- 2026
            </h1>

            <div className="flex items-center gap-2 text-lg text-white/90">
              <Calendar className="w-5 h-5" />
              <span>Feb 24 – 26, 2026 @ 08:00 AM</span>
            </div>

            <div className="flex items-center gap-2 text-lg text-white/90">
              <MapPin className="w-5 h-5" />
              <span>New Delhi, Delhi - India</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md">
                  FOREIGN REGISTRATION
                </button>
              </Link>

              <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-semibold transition-all duration-300">
                Event has ended
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm">
                𝕏
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm">
                in
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm">
                ▶
              </div>
            </div>
          </div>

          <div />
        </div>
      </div>
    </section>
  )
}
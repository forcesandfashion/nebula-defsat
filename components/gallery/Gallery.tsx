"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Search, X, ChevronDown, Sparkles } from "lucide-react"
import { galleryImages } from "@/static/gallery/gallery"

const categories = [
  { value: "all", label: "All Categories" },
  { value: "Conference", label: "Conference" },
  { value: "Panel", label: "Panel Discussions" },
  { value: "Expo", label: "Expo Hall" },
  { value: "Networking", label: "Networking" },
  { value: "Keynote", label: "Keynote Sessions" },
  { value: "Awards", label: "Awards Ceremony" }
]

export default function GallerySection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Filter images based on search and category
  const filteredImages = galleryImages.filter(img => {
    const searchLower = searchTerm.toLowerCase().trim()
    const matchesSearch = searchLower === "" || 
      img.title.toLowerCase().includes(searchLower) ||
      img.description.toLowerCase().includes(searchLower) ||
      img.category.toLowerCase().includes(searchLower)
    
    const matchesCategory = selectedCategory === "all" || img.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const getCategoryLabel = () => {
    const category = categories.find(cat => cat.value === selectedCategory)
    return category ? category.label : "All Categories"
  }

  return (
    <section className="py-26 bg-white relative overflow-hidden">
      
      {/* Background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-300" />
            <span className="text-gray-500 font-bold text-sm uppercase tracking-wider">
              MEMORIES & MOMENTS
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-300" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Event Gallery
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore moments from DefSat Conference and Expo through our visual journey
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-black placeholder:text-gray-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative w-full sm:w-56" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-blue-400 transition-all text-gray-700"
              >
                <span className="truncate">{getCategoryLabel()}</span>
                <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => {
                        setSelectedCategory(category.value)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 transition-all hover:bg-blue-50 ${
                        selectedCategory === category.value 
                          ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-500'
                          : 'text-gray-600'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== "all" || searchTerm) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCategory !== "all" && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-sm">
                  <span className="text-gray-700">{getCategoryLabel()}</span>
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="ml-1 text-gray-400 hover:text-blue-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
              {searchTerm && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-sm">
                  <span className="text-gray-700">Search: "{searchTerm}"</span>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-1 text-gray-400 hover:text-blue-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-200 rounded-2xl">
            <div className="text-gray-400 text-lg mb-2">No images found</div>
            <p className="text-gray-500 text-sm">Try adjusting your search or filter to find what you're looking for</p>
            {(selectedCategory !== "all" || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedCategory("all")
                  setSearchTerm("")
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
              >
                Clear all filters
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        ) : (
          <>
          

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    {/* Next.js Image Component */}
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 z-10">
                      {image.category}
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md z-10">
                      {image.year}
                    </div>
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-base mb-1 line-clamp-2">{image.title}</h3>
                        <p className="text-sm text-white/80 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              {/* Next.js Image in Lightbox */}
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 1024px"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-blue-400 text-sm">{selectedImage.category}</span>
                <span className="text-white/50">•</span>
                <span className="text-white/70 text-sm">{selectedImage.year}</span>
              </div>
              <p className="text-white/80 mb-4">{selectedImage.description}</p>
              
              {/* Download Button */}
              <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-md active:scale-95 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Download Image
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
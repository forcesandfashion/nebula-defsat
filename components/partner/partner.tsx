"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { partnersData } from "@/static/partner/partner";

export default function Partners() {
  const [selected, setSelected] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentList, setCurrentList] = useState<any[]>([]);
  const [currentSection, setCurrentSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get all partners flattened for global navigation
  const getAllPartners = useCallback(() => {
    const allPartners: any[] = [];
    partnersData.forEach((section) => {
      section.items.forEach((item) => {
        allPartners.push({
          ...item,
          sectionTitle: section.title,
        });
      });
    });
    return allPartners;
  }, []);

  // Find global index of current partner
  const getGlobalIndex = useCallback((partner: any) => {
    const allPartners = getAllPartners();
    return allPartners.findIndex((p) => p.name === partner.name);
  }, [getAllPartners]);

  // NEXT - across all sections
  const handleNext = useCallback(() => {
    const allPartners = getAllPartners();
    const currentGlobalIndex = getGlobalIndex(selected);
    const nextIndex = (currentGlobalIndex + 1) % allPartners.length;
    const nextPartner = allPartners[nextIndex];
    
    const section = partnersData.find((s) => 
      s.items.some((item) => item.name === nextPartner.name)
    );
    
    const indexInSection = section?.items.findIndex(
      (item) => item.name === nextPartner.name
    ) || 0;
    
    setSelected(nextPartner);
    setCurrentIndex(indexInSection);
    setCurrentList(section?.items || []);
    setCurrentSection(section?.title || "");
  }, [selected, getAllPartners, getGlobalIndex]);

  // PREV - across all sections
  const handlePrev = useCallback(() => {
    const allPartners = getAllPartners();
    const currentGlobalIndex = getGlobalIndex(selected);
    const prevIndex = (currentGlobalIndex - 1 + allPartners.length) % allPartners.length;
    const prevPartner = allPartners[prevIndex];
    
    const section = partnersData.find((s) => 
      s.items.some((item) => item.name === prevPartner.name)
    );
    
    const indexInSection = section?.items.findIndex(
      (item) => item.name === prevPartner.name
    ) || 0;
    
    setSelected(prevPartner);
    setCurrentIndex(indexInSection);
    setCurrentList(section?.items || []);
    setCurrentSection(section?.title || "");
  }, [selected, getAllPartners, getGlobalIndex]);

  // Open modal
  const openModal = (item: any, index: number, section: any, sectionTitle: string) => {
    setSelected(item);
    setCurrentIndex(index);
    setCurrentList(section.items);
    setCurrentSection(sectionTitle);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelected(null), 300);
  };

  // Keyboard Controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isModalOpen, handleNext, handlePrev]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="bg-white py-12 px-6 md:px-16 border-t border-b border-gray-200">
      {/* Header */}
<div className="mb-10 flex flex-col items-start">

  {/* Heading + Line group */}
  <div className="flex flex-col items-center">
    <h1 className="text-3xl md:text-4xl font-bold text-black text-left">
      OUR PARTNERS
    </h1>

    {/* Line centered under heading */}
    <div className="mt-2 w-20 h-1 bg-orange-500 rounded-full"></div>
  </div>

  {/* Paragraph stays left */}
  <p className="text-gray-500 mt-4 text-sm text-left">
    Trusted by industry leaders and innovators worldwide
  </p>

</div>
      {partnersData.map((section, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide text-orange-600 border-l-4 border-orange-500 pl-3">
            {section.title}
          </h2>

          {/* FLEXBOX WITH CENTERING - NO GRID */}
          <div className="flex flex-wrap justify-center gap-6">
            {section.items.map((item, index) => (
              <div
                key={index}
                onClick={() => openModal(item, index, section, section.title)}
                className="group cursor-pointer bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-orange-200"
                style={{ width: "200px", minHeight: "200px" }}
              >
                <div className="relative w-full h-24 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                <p className="text-sm text-center text-gray-700 font-medium group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 px-2">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* MODAL */}
      {isModalOpen && selected && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-[fadeIn_0.2s_ease]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl p-8 w-[92%] max-w-md text-center shadow-2xl animate-[slideUp_0.3s_ease]"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 text-xl transition-all duration-200 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="mb-5">
              <span className="inline-block bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full">
                {currentSection}
              </span>
            </div>

            <div className="relative w-full h-32 mb-6 animate-[fadeIn_0.3s_ease]">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {selected.name}
            </h2>

            <div className="w-full bg-gray-200 rounded-full h-1 mb-5">
              <div 
                className="bg-orange-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((getGlobalIndex(selected) + 1) / getAllPartners().length) * 100}%` }}
              />
            </div>

            <p className="text-xs text-gray-500 mb-5 font-medium">
              {getGlobalIndex(selected) + 1} / {getAllPartners().length}
            </p>

            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Website
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {getAllPartners().length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  ←
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  →
                </button>
              </>
            )}

            <div className="mt-6 text-xs text-gray-400 flex items-center justify-center gap-2 md:hidden">
              <span>←</span>
              <span>Swipe or use buttons</span>
              <span>→</span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
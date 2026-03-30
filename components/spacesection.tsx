"use client";

export default function SpaceSection() {
  return (
    <section className="w-full bg-white py-8 px-6 md:px-16 border-t border-b border-gray-200">
      
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-black uppercase mb-4">
        Space at the Core to National Security
      </h2>

      {/* Paragraph 1 */}
      <p className="text-gray-800 leading-relaxed mb-4 text-sm md:text-base">
        DefSat is India's flagship defence-space Conference & Expo, bringing the Armed Forces,
        policymakers, technologists and industry leaders together to shape the nation's defence-space doctrine.
        Over the years, DefSat has progressively expanded its scope from awareness-building and operational readiness
        to the strategic integration of space-based services into the tri-services, border forces, CAPF, homeland security,
        and internal security agencies. This evolution reinforces the central idea that safeguarding national interests
        requires multi-dimensional space integration.
      </p>

      {/* Paragraph 2 */}
      <p className="text-gray-800 leading-relaxed text-sm md:text-base">
        The 2026 edition, themed{" "}
        <span className="font-semibold text-orange-600">
          "SPACE AT THE CORE TO NATIONAL SECURITY"
        </span>{" "}
        marks a pivotal transition from capability creation to institutionalised adoption.
        DefSat 2026 aims to embed space-based intelligence, surveillance, communications,
        and navigation systems as force multipliers across every layer of India's security architecture
        through focused dialogues, demonstrations, and the IndSpace Wargame 4.0.
      </p>
    </section>
  );
}
export default function IndSpaceSection() {
  return (
    <div className="bg-white py-8 px-6 md:px-16 border-t border-b border-gray-200">

      {/* TOP CARD */}
      <div className="bg-gray-50 rounded-xl p-8 md:p-10 mb-8 shadow-sm border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          IndSpaceX Wargame 4.0
        </h1>

        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base max-w-5xl">
          IndSpaceX Wargame 4.0, the fourth edition of this advanced tabletop
          exercise, moves beyond scenario-based play to focus on real-world
          operational dependencies and the critical role of space-based
          technologies in enhancing national defence readiness and mission
          assurance. This year, the wargame will examine the interplay between
          technological capability, operational decision-making, and mission
          resilience across contested domains.
        </p>
      </div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Who Should Participate ?
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-x-12 gap-y-6 text-gray-800">

        {/* COLUMN 1 */}
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Defence & Military Personnel</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Cybersecurity Experts</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Technology Providers & System Integrators</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>
              Public Sector Enterprises & R&D Establishments (DRDO, ISRO,
              IN-SPACe, BEL, HAL, etc.)
            </span>
          </li>
        </ul>

        {/* COLUMN 2 */}
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Government Officials & Policymakers</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>
              Artificial Intelligence (AI) & Machine Learning (ML) Experts
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Academia & Research Institutions</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Homeland & Border Security Agencies</span>
          </li>
        </ul>

        {/* COLUMN 3 */}
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Space & Satellite Industry Leaders</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Startups & Innovators in Space Technologies</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Think Tanks & Strategic Research Organisations</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">◆</span>
            <span>Investors & Venture Capitalists</span>
          </li>
        </ul>

      </div>
    </div>
  );
}
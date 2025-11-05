export default function SectorsSection() {
    const sectors = [
      "Governmental Agencies",
      "Organizations and Corporations",
      "Financial Institutions and Banks",
      "Healthcare Institutions",
      "Educational Institutions",
      "Judiciary and Legal Firms",
      "Non-Governmental Organizations (NGOs)",
      "Community-Based Organizations (CBOs)",
    ]
  
    return (
      <section className="relative w-full bg-[#AC1514] mt-8 py-16 px-6 md:py-24 md:px-12 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-24 h-24 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-2">
            <path d="M20,20 Q30,10 40,20 Q50,30 40,40 Q30,50 20,40 Q10,30 20,20" />
            <path d="M50,10 Q60,5 70,15 Q75,25 65,35 Q55,40 50,30" />
            <path d="M30,50 Q40,45 50,55 Q45,65 35,60" />
          </svg>
        </div>
  
        <div className="absolute bottom-8 right-8 w-24 h-24 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-2">
            <path d="M80,80 Q70,90 60,80 Q50,70 60,60 Q70,50 80,60 Q90,70 80,80" />
            <path d="M50,90 Q40,95 30,85 Q25,75 35,65 Q45,60 50,70" />
            <path d="M70,50 Q60,55 50,45 Q55,35 65,40" />
          </svg>
        </div>
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-balance">
            Who We Work With / Our Sectors
          </h2>
  
          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="text-white text-lg md:text-base font-medium text-center py-4">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
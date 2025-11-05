"use client"

export default function WhatWeDoSection() {
  return (
    <section className="relative w-full bg-white py-16 px-6 md:py-24 md:px-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-8 right-8 w-32 h-32 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-red-600 fill-none stroke-2">
          <circle cx="50" cy="30" r="8" />
          <path d="M50,40 L50,70" />
          <path d="M35,50 L65,50" />
          <path d="M40,75 L60,75" />
          <path d="M45,80 L55,80" />
          <circle cx="70" cy="20" r="6" />
          <path d="M70,28 L70,45" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
              <img
                src="/whatwedo.png"
                alt="whatwedo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-balance">WHAT DO WE DO</h2>

            {/* Service 1 */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#AC1514]">Training and Professional Development</h3>
              <p className="text-gray-700 leading-relaxed">
                We deliver high-quality training programs that strengthen awareness, build expertise and drive
                sustainable impact.
              </p>
            </div>

            {/* Service 2 */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#AC1514]">Our Consultancy Services</h3>
              <p className="text-gray-700 leading-relaxed">
                We deliver high-quality training programs that strengthen awareness, build expertise and drive
                sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

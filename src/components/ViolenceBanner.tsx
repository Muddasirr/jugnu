"use client";

export default function ViolenceBanner() {
  return (
    <section className="relative bg-[#AC1514] text-white pt-10 pb-0 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-visible">
      {/* White background area ABOVE the section */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-white -translate-y-[60%] z-0"></div>

      {/* Left Text Section */}
      <div className="relative z-10 max-w-2xl md:w-2/3 text-center md:text-left mb-10 md:mb-0">
        <h1 className="font-k2d font-extrabold text-3xl md:text-5xl leading-tight mb-4">
          Raise Your Voice Against <br className="hidden md:block" /> the
          Violence — we are here to help you
        </h1>
        <p className="text-gray-200 text-base mb-6">
          Don’t leave your ideas unprotected; our legal team ensures lasting
          security for your brand and assets.
        </p>
        <button className="font-k2d font-extrabold uppercase text-sm border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-[#C8102E] transition">
          Call to Action
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative md:w-1/2 flex justify-center md:justify-end z-10">
        <img
          src="/woman.svg"
          alt="Woman holding gavel"
          className="relative -top-16 md:-top-24 lg:-top-28 w-[280px] md:w-[380px] lg:w-[450px] object-contain"
        />
      </div>
    </section>
  );
}

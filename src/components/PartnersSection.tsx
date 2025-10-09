"use client";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
];

const PartnersSection = () => {
  return (
    <section className="bg-white text-center py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-[#c8102e]">Working Togethe</span>r for Change
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-sm md:text-base">
        We are proud to work alongside leading organizations, networks, and
        advocates committed to ending abuse
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner logo ${index + 1}`}
            className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;

"use client";

import { PARTNERS } from "@/lib/publicAssets";

const logoClass =
  "h-16 md:h-20 lg:h-24 max-w-[180px] md:max-w-[220px] w-auto object-contain";

const PartnersSection = () => {
  return (
    <section className="bg-white text-center py-16 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-[#c8102e]">Working Togethe</span>
        <span className="text-black">r for Change</span>
      </h2>
      <p className="!text-[#3B3B3B] font-medium text-[16px] max-w-3xl mx-auto mb-12 leading-snug">
        We are proud to work alongside leading organizations, networks, and
        advocates committed to ending abuse
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 max-w-6xl mx-auto px-4">
        {PARTNERS.map((partner) => {
          const img = (
            <img
              src={partner.logo}
              alt={partner.name}
              className={logoClass}
            />
          );
          return partner.url ? (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center hover:opacity-80 transition"
              title={partner.name}
            >
              {img}
            </a>
          ) : (
            <div
              key={partner.name}
              className="inline-flex items-center justify-center"
              title={partner.name}
            >
              {img}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnersSection;

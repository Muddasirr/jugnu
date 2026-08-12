"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";

type HeroSlide = {
  image: string;
  headline: string;
  tagline?: string;
};

/** Order from Website Hero Section_Wordings.docx */
const slides: HeroSlide[] = [
  {
    image: "/heroes/banner-1.png",
    headline: "Pakistan's Digital Domestic Violence Resource Center",
    tagline:
      "Creating safe spaces for survivors of family and domestic violence across Pakistan.",
  },
  {
    image: "/heroes/banner-6.png",
    headline: "Marriage should not be a life sentence.",
    tagline:
      "Experiencing domestic violence? Find confidential, trauma-informed and legal resources and legal guidance",
  },
  {
    image: "/heroes/banner-8.png",
    headline:
      "“90% of women have experienced domestic violence in Pakistan” - NCHR Policy Brief, 2023.",
  },
  {
    image: "/heroes/banner-5.jpg",
    headline: "You and your children deserve to be safe and happy.",
    tagline:
      "Access trauma-informed resources to help you heal and rebuild your life.",
  },
  {
    image: "/heroes/banner-9.png",
    headline:
      "“Over 82% of women in Pakistan are unbanked, with limited access to financial resources” - Strive Women, 2024.",
  },
  {
    image: "/heroes/banner-11.png",
    headline: "You deserve to control your own money.",
    tagline:
      "Use our resources and attend our financial literacy trainings to create the financially secure life you deserve.",
  },
];

export const Banner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000); // Slowed down per wordings doc

    return () => clearInterval(timer);
  }, []);

  const handleScrollClick = () => {
    if (sectionRef.current) {
      const bottomPosition =
        sectionRef.current.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({
        top: bottomPosition,
        behavior: "smooth",
      });
    }
  };

  const active = slides[currentSlide];

  return (
    <section
      ref={sectionRef}
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
          {active.headline}
        </h1>
        {active.tagline ? (
          <p className="text-sm md:text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            {active.tagline}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        <div
          className="animate-bounce cursor-pointer items-center justify-center flex flex-col"
          onClick={handleScrollClick}
        >
          <ChevronDown
            className="w-8 h-8 md:w-10 md:h-10 text-white/70 mx-auto"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-[#AC1514] w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

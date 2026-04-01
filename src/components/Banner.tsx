"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export const Banner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/banner1.png",
    "/banner2.png",
    "/banner3.png",
    "/banner4.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const handleScrollClick = () => {
    if (sectionRef.current) {
      const bottomPosition = sectionRef.current.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({
        top: bottomPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Slider with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url("${image}")`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Top Text */}
        {/* <p className="text-sm md:text-base font-medium tracking-wider mb-8 text-white/90">
          EVERYONE HAS A RIGHT TO BE HAPPY!
        </p> */}

        {/* Main Heading */}
        {/* <h1 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-white font-medium">EVERYONE </span>
          <span className="text-[#AC1514] font-extrabold underline decoration-[#AC1514] decoration-1 underline-offset-[5px]">
            DESERVE THE SAME
          </span>
        </h1> */}

        {/* Subtitle */}
        {/* <div className="text-base md:text-lg font-medium mb-16">
          <p className="text-white/90">STANDING STRONG AGAINST</p>
          <p className="text-[#AC1514] font-semibold">DOMESTIC VIOLENCE</p>
        </div> */}

        {/* Scroll Down Indicator */}
        <div
          className="animate-bounce cursor-pointer items-center justify-center flex flex-col"
          onClick={handleScrollClick}
        >
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-white/70 mx-auto" strokeWidth={1.5} />
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-[#AC1514] w-6" : "bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

import { ChevronDown } from "lucide-react";

export const Banner = () => {
  return (
    // <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background Image with Overlay */}
      <div
  className="absolute top-0 left-0 w-full h-[300px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("/banner.jpeg")',
  }}
>
  <div className="absolute inset-0 bg-black/70" />
</div>


      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Top Text */}
        <p className="text-sm md:text-base font-medium tracking-wider mb-8 text-white/90">
          EVERYONE HAS A RIGHT TO BE HAPPY!
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
        <span className="text-white font-medium">EVERYONE </span>
<span className="text-[#AC1514] font-extrabold underline decoration-[#AC1514] decoration-1 underline-offset-[5px]">
  DESERVE THE SAME
</span>


  </h1>


        {/* Subtitle */}
        <div className="text-base md:text-lg font-medium mb-16">
          <p className="text-white/90">STANDING STRONG AGAINST</p>
          <p className="text-[#AC1514] font-semibold">DOMESTIC VIOLENCE</p>
          </div>

        {/* Scroll Down Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-white/70 mx-auto" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

"use client";
import { ArrowRight } from "lucide-react";

const TrainingSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row bg-white">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="/handcuffed.png"
          alt="Hands tied"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Red Content */}
      <div className="md:w-1/2 w-full bg-[#AC1514] text-white flex flex-col justify-center md:pl-10 ">
        <div className="max-w-[640px]">
          {/* Heading and Button Side-by-Side */}
          <div className="flex items-center  gap-6 mb-6 flex-wrap md:flex-nowrap">
  <h2 className="text-[40px] font-extrabold leading-tight whitespace-nowrap">
    Learn. Lead. Protect.
  </h2>

  <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md text-sm font-medium whitespace-nowrap hover:bg-white hover:text-[#AC1514] transition">
    Browse All Training
  </button>
</div>


          {/* Description */}
          <p className="text-base mb-8 leading-relaxed">
            We deliver high-quality training programs that strengthen awareness,
            build expertise, and drive sustainable impact.
          </p>

          {/* Quick Links */}
          <h3 className="font-semibold mb-4 text-lg">Training quick links:</h3>

          <ul className="space-y-4">
            {[
              "Training overview",
              "Primary prevention training",
              "MARAM training",
              "Communities of practice",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between group  pb-2 cursor-pointer"
              >
                <span className="text-white font-medium text-sm group-hover:underline">
                  {item}
                </span>
                <ArrowRight
  size={32} // increase to 28 or 32 for larger icons
  className="opacity-90 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;

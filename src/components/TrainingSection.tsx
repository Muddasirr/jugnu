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
      <div className="md:w-1/2 w-full bg-[#c8102e] text-white flex flex-col justify-center px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn. Lead. Protect.
          </h2>

          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-[#c8102e] transition mb-6">
            Browse All Training
          </button>

          <p className="text-sm md:text-base mb-8 leading-relaxed">
            We deliver high-quality training programs that strengthen awareness,
            build expertise, and drive sustainable impact.
          </p>

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
                className="flex items-center justify-between group border-b border-white/30 pb-2 cursor-pointer"
              >
                <span className="text-white font-medium text-sm group-hover:underline">
                  {item}
                </span>
                <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;

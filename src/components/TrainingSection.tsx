"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const TrainingSection = () => {
  return (
    <section className="w-full flex mt-8 flex-col md:flex-row  ">
      {/* Left Side - Training & Development */}

      <div className="md:w-1/2 w-full  py-24 bg-black text-white flex flex-col justify-center md:pl-10 ">
        <div className="max-w-[640px]">
          {/* Heading and Button Side-by-Side */}
          <div className="flex items-center  gap-6 mb-6 flex-wrap md:flex-nowrap">
              <Link href="/training" target="_blank" rel="noopener noreferrer">
            <h2 className="text-[40px] font-extrabold leading-tight whitespace-nowrap">
              TRAINING & DEVELOPMENT
            </h2>
            </Link>

          
             
            
          </div>


          {/* Description */}
          <p className="text-base mb-8 leading-relaxed">
            We deliver a range of training courses, certifications and workshops to further your knowledge in preventing and responding to family violence.
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
                  size={32}
                  className="opacity-90 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Right Side - Social Impact Consultancy */}
      <div className="md:w-1/2 w-full py-24 bg-[#AC1514] text-white flex flex-col justify-center md:pl-10 ">
        <div className="max-w-[640px]">
          {/* Heading and Button Side-by-Side */}
          <div className="flex items-center  gap-6 mb-6 flex-wrap md:flex-nowrap">
                        <Link href="/consultancy" target="_blank" rel="noopener noreferrer">

            <h2 className="text-[40px] font-extrabold leading-tight whitespace-nowrap">
              SOCIAL IMPACT CONSULTANCY
            </h2>
             </Link>

              {/* <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md text-sm font-medium whitespace-nowrap hover:bg-white hover:text-[#AC1514] transition">
                Visit Our Consultancy Page
              </button> */}
           
          </div>


          {/* Description */}
          <p className="text-base mb-8 leading-relaxed">
            We deliver high-quality training programs that strengthen awareness,
            build expertise, and drive sustainable impact.
          </p>

          {/* Quick Links */}
          <h3 className="font-semibold mb-4 text-lg">Consultancy quick links:</h3>

          <ul className="space-y-4">
            {[
              "Consultancy overview",
              "Policy development",
              "Research & analysis",
              "Impact assessment",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between group  pb-2 cursor-pointer"
              >
                <span className="text-white font-medium text-sm group-hover:underline">
                  {item}
                </span>
                <ArrowRight
                  size={32}
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

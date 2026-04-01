"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    quote:
      "As an expert in family violence, Zahra founded an Right Violence by Our Youth As Amaal At One Best At Engage With Wider Survivors, Including At The Right For Of Engaging Addressing With Media and 1000 Younger Girls. For one particular receiving with a talk titled confronting domestic violence and abuse: empowering survivors through awareness and support. Zahra's expertise and dedication were evident in her presentation. She provided valuable insights into the complexities of domestic violence and abuse, shedding light on the challenges faced by survivors and the importance of providing them with the necessary support. Zahra's presentation was informative and impactful, leaving a lasting impression on all who attended. Her commitment to raising awareness and advocating for survivors is commendable, and her dedication to empowering individuals and combating domestic violence is truly inspiring.",
    name: "Amaal Jafar",
    title: "Founder of Island Feminism, and Co-founder of Sisters Media",
    avatar: "/testimonials/amaal.jpg",
  },
  {
    id: 2,
    quote:
      "As someone who has gone through domestic violence, I was blessed to have found Zahra at The Jugnu. What Zahra and Jugnu represent and advocate for is so important. I have personally benefited from Zahra's guidance and support. She is incredibly knowledgeable and compassionate. Zahra has been a source of comfort and strength for me during one of the most difficult times in my life. I cannot recommend Zahra and The Jugnu Project enough. Her work is truly life-changing and has made a significant impact on my healing journey. I am forever grateful for the work that Zahra does and I know that she will continue to make a difference in the lives of countless survivors.",
    name: "E. Omar",
    title: "Survivor (USA)",
    avatar: "/testimonials/omar.jpg",
  },
  {
    id: 3,
    quote:
      "I had the pleasure of attending a workshop, I have been privileged for Zahra's profound understanding of the legal and social landscape surrounding gender-based violence and abuse. Her expertise in navigating the complexities of domestic violence, including legal frameworks and support systems, is truly commendable. Zahra's dedication to empowering survivors and raising awareness about these critical issues is evident in her work. Her ability to engage and educate audiences on the nuances of domestic violence and abuse is remarkable. Zahra's passion for advocating for survivors and her commitment to creating a safer and more supportive environment for those affected by domestic violence is inspiring.",
    name: "Azza Maqsood",
    title: "Development Sector Specialist and Trainer",
    avatar: "/testimonials/azza.jpg",
  },
];

const TestimonialSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="text-lg font-semibold tracking-[0.2em] text-[black] mb-3 uppercase">
              Testimonial
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[black] leading-tight">
              Community Feedback <span className="text-[#AC1514]">on Our Mission</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full border border-[#AC1514] flex items-center justify-center transition-all hover:bg-[#AC1514]/10 disabled:opacity-30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#AC1514]" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full bg-[#AC1514] flex items-center justify-center transition-all hover:bg-[#8f1111] disabled:opacity-30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_90%] md:flex-[0_0_48%] min-w-0" // wider cards and start from left
              >
                <div className="border border-[#3B3B3B]/30 rounded-xl p-10 h-full flex flex-col justify-between bg-white">
                  {/* Quote Icon */}
                  <svg
                    className="w-12 h-12 text-[#AC1514] mb-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>

                  {/* Quote */}
                  <p className="text-[#3B3B3B] text-[15px] leading-relaxed mb-8 flex-grow text-justify">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="mt-4">
                    <h4 className="text-[#3B3B3B] font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#3B3B3B]/70 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#AC1514] text-white font-semibold rounded-full hover:bg-[#8f1111] transition-colors duration-200"
          >
            Read All Testimonials
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

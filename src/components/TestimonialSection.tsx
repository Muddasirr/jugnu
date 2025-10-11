"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "The team's dedication to quality and excellence truly exceeded my expectations. From the initial consultation to the final deliverable, every detail was carefully managed, and they took the time to understand my unique needs and vision. Communication was clear and consistent, which made the entire process smooth and enjoyable. I could see their commitment to delivering not just a product but a complete, polished experience. It's rare to find such a blend of professionalism, creativity, and responsiveness, and I would highly recommend them to anyone looking for top-tier service.",
    name: "Mason Brooks",
    title: "Business Development Lead",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    quote:
      "I am incredibly impressed by the professionalism and dedication shown throughout our collaboration. The team demonstrated a deep understanding of our project goals and went out of their way to ensure everything was perfect. Not only did they deliver a high-quality product, but they also kept us informed every step of the way. Their responsiveness and attention to detail transformed our ideas into reality with expertise that exceeded expectations.",
    name: "Noah Smith",
    title: "Chief Operations Officer",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    quote:
      "Working with this team has been an absolute pleasure. Their innovative approach and attention to detail set them apart from others in the industry. They listened carefully to our requirements and delivered beyond what we imagined possible.",
    name: "Emma Wilson",
    title: "Marketing Director",
    avatar: "/placeholder.svg",
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
            <p className="text-sm font-semibold tracking-[0.2em] text-[#AC1514] mb-3 uppercase">
              Testimonial
            </p>
            <h2 className="text-[40px] font-bold text-[#3B3B3B] leading-tight">
              Community Feedback on Our Mission
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
                  <p className="text-[#3B3B3B] text-[15px] leading-relaxed mb-8 flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div>
                      <h4 className="text-[#3B3B3B] font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#3B3B3B]/70 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

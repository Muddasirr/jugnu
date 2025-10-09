"use client"
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The team's dedication to quality and excellence truly exceeded my expectations. From the initial consultation to the final deliverable, every detail was carefully managed, and they took the time to understand my unique needs and vision. Communication was clear and consistent, which made the entire process smooth and enjoyable. I could see their commitment to delivering not just a product but a complete, polished experience. It's rare to find such a blend of professionalism, creativity, and responsiveness, and I would highly recommend them to anyone looking for top-tier service.",
    name: "Mason Brooks",
    title: "Business Development Lead",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    quote: "I am incredibly impressed by the professionalism and dedication shown throughout our collaboration. The team demonstrated a deep understanding of our project goals and went out of their way to ensure everything was perfect. Not only did they deliver a high-quality product, but they also kept us informed every step of the way. Their responsiveness and the choices they made. Their attention to detail and commitment to our success was evident in every interaction, and they transformed our ideas into reality with a level of expertise that exceeded our expectations. I look forward to working with them on future projects and am confident in their ability to deliver outstanding results.",
    name: "Noah Smith",
    title: "Chief Operations Officer",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    quote: "Working with this team has been an absolute pleasure. Their innovative approach and attention to detail set them apart from others in the industry. They listened carefully to our requirements and delivered beyond what we imagined possible.",
    name: "Emma Wilson",
    title: "Marketing Director",
    avatar: "/placeholder.svg"
  }
];

const TestimonialSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="text-sm font-bold tracking-wider text-red-600 mb-3">
              TESTIMONIAL
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Community Feedback on Our Mission
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center transition-all hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-red-600" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center transition-all hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] min-w-0"
              >
                <div className="border border-border rounded-lg p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <svg
                    className="w-16 h-16 text-red-600 mb-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-foreground text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
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

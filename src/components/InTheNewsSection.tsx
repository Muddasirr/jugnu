"use client";

import Link from "next/link";
import { Calendar, ExternalLink } from "lucide-react";
import { IN_THE_NEWS_INTRO, NEWS_ITEMS } from "@/lib/newsItems";

type InTheNewsSectionProps = {
  id?: string;
  showHeading?: boolean;
};

export default function InTheNewsSection({
  id = "in-the-news",
  showHeading = true,
}: InTheNewsSectionProps) {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-16 max-w-6xl">
        {showHeading && (
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              <span className="text-[#C8102E]">In the</span> News
            </h2>
          </div>
        )}

        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify max-w-4xl mx-auto mb-12 whitespace-pre-line">
          {IN_THE_NEWS_INTRO}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col group border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-48 bg-gray-100 overflow-hidden"
              >
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#AC1514]/10 to-gray-100 px-4">
                    <ExternalLink className="w-10 h-10 text-[#AC1514] mb-2" />
                    <span className="text-xs font-bold text-[#AC1514] uppercase tracking-wide text-center">
                      {item.source ?? "Read article"}
                    </span>
                  </div>
                )}
              </a>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-[#AC1514] shrink-0" />
                  <time dateTime={item.date}>{item.dateLabel}</time>
                  {item.source && (
                    <>
                      <span className="text-gray-300">|</span>
                      <span>{item.source}</span>
                    </>
                  )}
                </div>

                <h3 className="text-lg font-extrabold leading-snug mb-4 text-[#AC1514] group-hover:text-black transition line-clamp-3">
                  {item.title}
                </h3>

                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 self-start bg-[#AC1514] text-white text-[10px] uppercase font-bold px-4 py-2 rounded hover:bg-[#8B0000] transition"
                >
                  Read more
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

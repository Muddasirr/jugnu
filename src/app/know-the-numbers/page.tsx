"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import ClientOnly from "@/components/ClientOnly";
import MapPlaceholder from "@/components/MapPlaceholder";
import { KNOW_YOUR_NUMBERS_COVERS } from "@/lib/publicAssets";

const PakistanMapVisual = dynamic(() => import("@/components/PakistanMapVisual"), {
  ssr: false,
});

const statsCards = [
  {
    title: "Numbers of domestic violence and honor killing cases reported",
    cover: KNOW_YOUR_NUMBERS_COVERS[0],
    href: "/resources/documents",
  },
  {
    title: "Number of convictions",
    cover: KNOW_YOUR_NUMBERS_COVERS[1],
    href: "/resources/documents",
  },
  {
    title: "Economic cost of domestic violence in Pakistan",
    cover: KNOW_YOUR_NUMBERS_COVERS[2],
    href: "/resources/documents",
  },
];

export default function KnowTheNumbersPage() {
  return (
    <main className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">
        <div className="w-full">
          <ClientOnly fallback={<MapPlaceholder className="h-[400px] md:h-[600px]" />}>
            <PakistanMapVisual />
          </ClientOnly>
        </div>

        <div className="space-y-4 max-w-4xl text-justify">
          <h2 className="text-xl md:text-2xl font-extrabold text-black">
            Pakistan has a family violence endemic.
          </h2>
          <p className="text-lg md:text-xl text-black">
            <span className="text-[#AC1514] font-extrabold">More than 90% of women</span>{" "}
            in desi society have faced some type of violence at least once in their lives.
          </p>
          <p className="text-base md:text-lg text-[#AC1514] font-medium">
            Below are statistical reports mapping the domestic violence faced by women
            and girls across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {statsCards.map((card, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={card.cover}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="bg-[#8B0000] p-6 min-h-[160px] flex flex-col justify-between shadow-lg rounded-lg">
                <h3 className="text-lg font-extrabold text-white underline decoration-1 underline-offset-4 leading-relaxed">
                  {card.title}
                </h3>
                <Link
                  href={card.href}
                  className="mt-4 inline-block self-end bg-black text-white text-[10px] uppercase font-bold px-3 py-1.5 hover:bg-gray-900 transition"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

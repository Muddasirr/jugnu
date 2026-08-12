"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { documentsPageUrl, resourceCover } from "@/lib/publicAssets";

type Category = {
  id: number;
  title: string;
  description: string;
  cover?: string;
  link?: string;
};

export default function ResourcesPage() {
  const [resources, setResources] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/cms/resources/categories.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => setResources(Array.isArray(data) ? data : []))
      .catch(() => setResources([]));
  }, []);

  return (
    <main className="w-full bg-white text-black py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-8">
        <section className="space-y-4 max-w-4xl">
          <h1 className="text-3xl font-extrabold text-[#AC1514]">Resource Library</h1>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Our team, consisting of both survivors and experts, has compiled various
            resources with love and care. Share them with friends, family and your network.
            For emergency assistance, visit the{" "}
            <Link href="/survivor-stories" className="text-[#AC1514] font-bold underline">
              Survivor&apos;s Directory
            </Link>{" "}
            or email{" "}
            <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] font-bold underline">
              thejugnuproject@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {resources.map((resource) => {
            const href =
              resource.link ||
              documentsPageUrl(resource.id) ||
              "/resources/documents";
            const cover =
              resource.cover ||
              resourceCover(38 + Number(resource.id || 1));

            return (
              <Link
                key={resource.id}
                href={href}
                className="group border-2 border-[#790A0A] bg-white flex flex-col overflow-hidden hover:shadow-md transition"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  <Image
                    src={cover}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="bg-[#790A0A] text-white px-3 py-3 min-h-[72px] flex items-center justify-center text-center">
                  <h3 className="text-sm md:text-base font-extrabold leading-snug">
                    {resource.title}
                  </h3>
                </div>
                <div className="p-3 flex flex-col flex-1 gap-3">
                  <p className="text-xs md:text-sm leading-snug text-gray-800 line-clamp-3">
                    {resource.description}
                  </p>
                  <span className="mt-auto self-end bg-black text-white px-2.5 py-1 text-[10px] font-bold uppercase">
                    Read more
                  </span>
                </div>
              </Link>
            );
          })}
        </section>

        {resources.length === 0 && (
          <p className="text-gray-600">Loading resource categories…</p>
        )}
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IMPACT_GALLERY_IMAGES } from "@/lib/publicAssets";

type CmsItem = {
  id?: string;
  title?: string;
  content?: string;
  image?: string;
};

export default function ImpactGallery() {
  const [cmsItems, setCmsItems] = useState<CmsItem[]>([]);

  useEffect(() => {
    fetch("/cms/impact/items.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        if (Array.isArray(data)) setCmsItems(data.filter((i) => i.image));
      })
      .catch(() => undefined);
  }, []);

  const images =
    cmsItems.length > 0
      ? cmsItems.map((i) => ({ src: i.image!, title: i.title, content: i.content }))
      : IMPACT_GALLERY_IMAGES.map((src) => ({ src, title: undefined, content: undefined }));

  return (
    <section className="mt-24 pt-12 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
        <span className="text-[#AC1514]">Impact</span> Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, i) => (
          <div
            key={item.src + i}
            className="relative aspect-square rounded-lg overflow-hidden shadow-md bg-gray-100 group"
          >
            <Image
              src={item.src}
              alt={item.title || `Impact event ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {(item.title || item.content) && (
              <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white p-2 text-xs opacity-0 group-hover:opacity-100 transition">
                {item.title && <p className="font-bold">{item.title}</p>}
                {item.content && <p className="line-clamp-2">{item.content}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

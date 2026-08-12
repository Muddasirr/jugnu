"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Report = {
  id?: string;
  title: string;
  description?: string;
  file?: string;
  cover?: string;
  image?: string;
};

export default function FemicideReportPage() {
  const [reports, setReports] = useState<Report[]>([
    {
      title: "Annual Femicide Cases – 2023",
      description:
        "Media-based documentation of reported femicide cases across Pakistan, compiled for research, awareness, and advocacy purposes.",
      image: "/femicide.png",
      file: "/resources/documents",
    },
  ]);

  useEffect(() => {
    fetch("/cms/femicide/items.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setReports(data);
      })
      .catch(() => undefined);
  }, []);

  return (
    <main className="w-full bg-white text-black py-12 md:py-16">
      <div className="mx-auto px-6 md:px-8 space-y-12">
        <div className="space-y-8">
          <p className="text-base md:text-lg leading-relaxed text-black text-justify">
            The Jugnu Project conducts capacity-building training(s), community dialogue,
            workshops and activities to spread awareness about domestic violence and abuse
            within society. Our aim is to combat the social stigma attached to family
            violence, and build a network of allies within society for survivors.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-black text-justify">
            Below is a timeline of our activities for social and communal impact.
          </p>
        </div>

        <div className="space-y-12">
          {reports.map((report, index) => {
            const img = report.cover || report.image || "/femicide.png";
            const href = report.file || "/resources/documents";
            return (
              <div
                key={report.id || index}
                className="flex flex-col md:flex-row gap-6 md:gap-8 items-start"
              >
                <div className="w-full md:w-[200px] h-[200px] relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={img} alt={report.title} fill className="object-cover" />
                </div>
                <div className="flex-1 space-y-4 pt-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-black">
                    {report.title}
                  </h2>
                  {report.description && (
                    <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                      {report.description}
                    </p>
                  )}
                  <div className="pt-2">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <button className="bg-[#AC1514] text-white px-6 py-2 rounded-md text-xs font-bold hover:bg-[#8B0000] transition-colors shadow-sm uppercase">
                        View PDF
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type JudgementItem = {
  id?: string;
  title: string;
  description?: string;
  file?: string;
};

const courts = [
  {
    key: "sc",
    court: "SUPREME COURT",
    blurb:
      "Find latest (and leading) judgements from the Supreme Court of Pakistan regarding domestic violence, family law and property / inheritance matters.",
  },
  {
    key: "fsc",
    court: "FEDERAL SHARIAT COURT",
    blurb:
      "Find latest (and leading) judgements from the Federal Shariat Court regarding domestic violence, family law and property / inheritance matters.",
  },
  {
    key: "hc",
    court: "HIGH COURT",
    blurb:
      "Find latest (and leading) judgements from the High Courts regarding domestic violence, family law and property / inheritance matters.",
  },
  {
    key: "cc",
    court: "CONSTITUTIONAL COURT",
    blurb:
      "Find latest (and leading) judgements from the Constitutional Court regarding domestic violence, family law and related matters.",
  },
] as const;

const LegalUpdatePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="relative h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/heroes/banner-10.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
            Find legal judgements and cases to prepare for court
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12 md:py-16 max-w-6xl mx-auto">
        <p className="text-xl md:text-2xl font-extrabold italic text-[#AC1514] mb-8 leading-snug max-w-3xl">
          Stay Legally Informed. Stay Empowered. Stay Protected.
        </p>

        <div className="space-y-5 max-w-4xl mb-14">
          <p className="text-lg md:text-xl text-black leading-relaxed text-justify">
            Laws related to the family courts, domestic violence, gender-based violence
            (GBV), workplace harassment, child protection and women&apos;s rights are
            constantly evolving. Understanding these changes is essential for survivors,
            lawyers, advocates, community workers and NGOs and individuals who wish to
            protect themselves and their loved ones; and support others effectively.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#AC1514] mb-10 text-center">
          Legal Judgements & Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto">
          {courts.map((item) => (
            <CourtCard key={item.key} courtKey={item.key} court={item.court} blurb={item.blurb} />
          ))}
        </div>

        <div className="max-w-4xl border-t border-gray-200 pt-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8">
            What You&apos;ll Find Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="border-l-4 border-[#AC1514] bg-gray-50 px-5 py-5">
              <h3 className="text-xl font-extrabold text-black">
                1. Latest Laws And Amendments
              </h3>
            </div>
            <div className="border-l-4 border-[#AC1514] bg-gray-50 px-5 py-5">
              <h3 className="text-xl font-extrabold text-black">
                2. Court Judgments And Precedent (Case Law)
              </h3>
            </div>
          </div>
          <p className="text-lg md:text-xl text-black leading-relaxed text-justify">
            We regularly update this page to keep you informed. To receive legal updates
            directly to your inbox, you can sign up for our newsletter, or follow us on
            social media.
          </p>
        </div>
      </section>
    </div>
  );
};

function CourtCard({
  courtKey,
  court,
  blurb,
}: {
  courtKey: string;
  court: string;
  blurb: string;
}) {
  const [items, setItems] = useState<JudgementItem[]>([]);

  useEffect(() => {
    fetch(`/cms/legal/${courtKey}.json`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]));
  }, [courtKey]);

  const firstFile = items.find((i) => i.file)?.file || `/cms/legal/pdfs/${courtKey}/`;

  return (
    <div className="flex flex-col border-[3px] border-black overflow-hidden bg-white">
      <div className="flex flex-col flex-1 px-6 py-8 md:py-10 border-b-[3px] border-[#AC1514] min-h-[260px] md:min-h-[300px]">
        <h3 className="text-xl md:text-2xl font-extrabold text-black uppercase text-center mb-4 leading-tight">
          {court}
        </h3>
        <p className="text-base md:text-lg text-black leading-relaxed text-center flex-1 mb-6">
          {blurb}
        </p>
        <Link
          href={`/legal-update/${courtKey}`}
          className="mx-auto inline-block bg-[#AC1514] text-white px-5 py-2.5 text-sm md:text-base font-bold uppercase tracking-wide hover:bg-[#8B0E0E] transition"
        >
          Read the Judgements
        </Link>
      </div>
      <div className="bg-[#AC1514] text-white px-5 py-5 md:py-6 flex flex-col justify-center min-h-[100px]">
        <p className="font-bold text-base md:text-lg leading-snug mb-1">
          {items.length > 0 ? `${items.length} judgement(s) available` : "Judgements coming soon"}
        </p>
        <Link
          href={`/legal-update/${courtKey}`}
          className="text-sm md:text-base font-bold uppercase tracking-wide underline underline-offset-2 hover:opacity-90"
        >
          View resources →
        </Link>
        {firstFile && items[0]?.file ? (
          <a
            href={items[0].file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs mt-2 underline opacity-90"
          >
            Open latest PDF
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default LegalUpdatePage;

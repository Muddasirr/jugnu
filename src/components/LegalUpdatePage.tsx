"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LEGAL_JUDGEMENT_COVERS } from "@/lib/publicAssets";

const judgementTopics = [
  { title: "Family Law & Domestic Violence", cover: LEGAL_JUDGEMENT_COVERS[0] },
  { title: "Property & Inheritance", cover: LEGAL_JUDGEMENT_COVERS[1] },
  { title: "Workplace Harassment", cover: LEGAL_JUDGEMENT_COVERS[2] },
  { title: "Child Protection & Custody", cover: LEGAL_JUDGEMENT_COVERS[3] },
];

const LegalUpdatePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="px-6 md:px-10 py-10 md:py-16 max-w-5xl mx-auto">
        <h1 className="text-[32px] font-extrabold italic text-[#C41E1E] mb-8 leading-[1.7]">
          <em>Stay Legally Informed. Stay Empowered. Stay Protected.</em>
        </h1>

        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] mb-6 text-justify">
          Laws related to the family courts, domestic violence, gender-based violence
          (GBV), workplace harassment, child protection and women&apos;s rights are
          constantly evolving. Understanding these changes is essential for survivors,
          lawyers, advocates, community workers and NGOs and individuals who wish to
          protect themselves and their loved ones; and support others effectively.
        </p>

        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] mb-8 text-justify">
          This page is dedicated to providing reliable, survivor-centered judgements,
          case laws and legal developments in Pakistan. Our goal is to make legal
          judgments more accessible to the common person, so that they may be more
          aware of their legal rights and may use these for guidance in real life
          (especially in litigation).
        </p>

        <h2 className="text-[28px] font-extrabold text-[#C41E1E] mt-10 mb-6 underline text-center leading-[1.7]">
          Legal Judgements & Updates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {judgementTopics.map((item, index) => (
            <Link
              key={index}
              href="/resources/documents"
              className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-[#AC1514] transition-colors shadow-sm"
            >
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src={item.cover}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-[#8B0000] text-white">
                <h3 className="font-bold text-base leading-snug">{item.title}</h3>
                <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wide underline">
                  View resources →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-[32px] font-extrabold text-[#C41E1E] mt-12 mb-6 underline text-left leading-[1.7]">
          What You&apos;ll Find Here:
        </h2>

        <div className="space-y-4 mb-8">
          <h3 className="text-[24px] font-extrabold text-gray-900 underline leading-[1.7]">
            1. Latest Laws And Amendments
          </h3>
          <h3 className="text-[24px] font-extrabold text-gray-900 underline leading-[1.7]">
            2. Court Judgments And Precedent (Case Law)
          </h3>
        </div>

        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] mb-8 text-justify">
          We believe that legal information should not be confusing or inaccessible.
          Understanding the law empowers survivors, strengthens prevention and helps
          communities intervene safely and effectively.
        </p>

        <h2 className="text-[32px] font-extrabold text-[#C41E1E] mt-12 mb-6 underline text-left leading-[1.7]">
          Stay Updated
        </h2>

        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] mb-2 text-justify">
          We regularly update this page to keep you informed.
        </p>
        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] text-justify">
          To receive legal updates directly to your inbox, you can sign up for our
          newsletter, or follow us on social media.
        </p>
      </section>
    </div>
  );
};

export default LegalUpdatePage;

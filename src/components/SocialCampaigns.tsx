"use client";

import React from "react";
import { Gavel, HeartHandshake, Users } from "lucide-react";
import Link from "next/link";
import { PARTNER_LOGOS } from "@/lib/publicAssets";
import InTheNewsSection from "@/components/InTheNewsSection";

export default function SocialCampaigns() {
    return (
        <div className="w-full">
            {/* --------------------- Action Banners --------------------- */}

            {/* 1. Legal Judgements (Red) */}
            <div className="w-full bg-[#8B0000] text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10">
                <div className="flex items-center gap-6">
                    <div className="p-2">
                        <Gavel className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Legal Judgements</h2>
                    </div>
                </div>

                <p className="text-sm md:text-base max-w-xl text-center md:text-left leading-relaxed opacity-90">
                    Find the latest legal judgments in Family Law, Property and Inheritance affecting survivors across Pakistan
                </p>

                <Link href="/legal-update" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-[#8B0000] px-6 py-2.5 rounded-[8px] text-sm font-bold hover:bg-gray-100 transition whitespace-nowrap uppercase">
                        GET LEGAL UPDATES
                    </button>
                </Link>
            </div>

            {/* 2. Survivor Stories (Black) */}
            <div className="w-full bg-black text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10">
                <div className="flex items-center gap-6">
                    <div className="p-2">
                        {/* Using HeartHandshake as a proxy for the heart ribbon icon in screenshot */}
                        <HeartHandshake className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Survivor Stories</h2>
                    </div>
                </div>

                <p className="text-sm md:text-base max-w-xl text-center md:text-left leading-relaxed opacity-90">
                    Read the inspiring stories of the survivors we have helped.
                </p>

                <Link href="/survivor-stories" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-black px-6 py-2.5 rounded-[8px] text-sm font-bold hover:bg-gray-100 transition whitespace-nowrap uppercase">
                        READ THEIR STORIES
                    </button>
                </Link>
            </div>

            {/* 3. Get Involved (Red) */}
            <div className="w-full bg-[#C8102E] text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="p-2">
                        <Users className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Get Involved</h2>
                    </div>
                </div>

                <p className="text-sm md:text-base max-w-xl text-center md:text-left leading-relaxed opacity-90">
                    Raise vital funds to keep women, children and survivors of family violence safe.
                </p>

                <Link href="/getinvolved" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-[#C8102E] px-6 py-2.5 rounded-[8px] text-sm font-bold hover:bg-gray-100 transition whitespace-nowrap uppercase">
                        LEARN MORE
                    </button>
                </Link>
            </div>

            {/* --------------------- Partners & Clients --------------------- */}

            <div className="py-20 bg-white">
                {/* Partners */}
                <div className="mb-20 container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl text-black font-extrabold mb-4">
                            <span className="text-[#C8102E]">Our</span> Partners
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We are proud to work alongside leading organizations, networks, and advocates committed to ending abuse
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {PARTNER_LOGOS.map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                alt={`Partner logo ${i + 1}`}
                                className="h-10 md:h-12 max-w-[120px] object-contain grayscale hover:grayscale-0 transition"
                            />
                        ))}
                    </div>
                </div>

            </div>

            <InTheNewsSection id="in-the-news" />

        </div>
    );
}

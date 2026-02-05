"use client";

import React from "react";
import { Gavel, HeartHandshake, Users } from "lucide-react";
import { MoveRight, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function SocialCampaigns() {
    return (
        <div className="w-full font-serif">
            {/* --------------------- Action Banners --------------------- */}

            {/* 1. Legal Judgements (Red) */}
            <div className="w-full bg-[#8B0000] text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10">
                <div className="flex items-center gap-6">
                    <div className="p-2">
                        <Gavel className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Legal Judgements</h2>
                    </div>
                </div>

                <p className="text-sm md:text-base max-w-xl text-center md:text-left leading-relaxed opacity-90">
                    Find the latest legal judgments in Family Law, Property and Inheritance affecting survivors across Pakistan
                </p>

                <Link href="/legal-update" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-[#8B0000] px-6 py-2.5 rounded-[8px] text-sm font-bold hover:bg-gray-100 transition whitespace-nowrap">
                        Get Legal Updates
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Survivor Stories</h2>
                    </div>
                </div>

                <p className="text-sm md:text-base max-w-xl text-center md:text-left leading-relaxed opacity-90">
                    Read the inspiring stories of the survivors we have helped.
                </p>

                <Link href="/survivor-stories" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-black px-6 py-2.5 rounded-[8px] text-sm font-bold hover:bg-gray-100 transition whitespace-nowrap">
                        Read their stories
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Get Involved</h2>
                    </div>
                </div>

                <p className="text-sm md:text-base max-w-xl text-center md:text-left leading-relaxed opacity-90">
                    Raise vital funds to keep women, children and survivors of family violence safe.
                </p>

                <Link href="/getinvolved" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-[#C8102E] px-6 py-2.5 rounded-[8px] text-sm font-bold hover:bg-gray-100 transition whitespace-nowrap">
                        Learn More
                    </button>
                </Link>
            </div>

            {/* --------------------- Partners & Clients --------------------- */}

            <div className="py-20 bg-white">
                {/* Partners */}
                <div className="mb-20 container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl text-black font-bold mb-4 font-serif">
                            <span className="text-[#C8102E]">Our</span> Partners
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We are proud to work alongside leading organizations, networks, and advocates committed to ending abuse
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                        {/* Using text placeholders consistent with 'logoipsum' style in screenshot */}
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                                <span className="font-bold text-gray-500 text-xl">Logoipsum</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clients */}
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl  text-black md:text-4xl font-bold mb-4 font-serif">
                            <span className="text-[#C8102E]">Our</span> Clients
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We are proud to work alongside leading organizations, networks, and advocates committed to ending abuse
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                                <span className="font-bold text-gray-500 text-xl">Logoipsum</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --------------------- News Updates --------------------- */}

            <div className="py-16 bg-white container mx-auto px-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif">
                        <span className="text-[#C8102E]">News</span> Updates
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex flex-col group">
                            {/* Card Image */}
                            <div className="w-full h-64 bg-gray-100 overflow-hidden rounded-lg mb-6 relative">
                                {/* Placeholder for the UN flags image seen in screenshot */}
                                <img
                                    src={`https://images.unsplash.com/photo-1520697517317-6415a7700e4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                                    alt="News Update"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Meta Data */}
                            <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-[#C8102E]" />
                                    <span>24 Oct, 2021</span>
                                </div>
                                <div className="w-px h-3 bg-gray-300"></div>
                                <div className="flex items-center gap-1.5">
                                    <MessageSquare className="w-4 h-4 text-[#C8102E]" />
                                    <span>136 Comments</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold leading-tight mb-4 text-[#C8102E] group-hover:text-black transition">
                                women Domestic voilence issue to the United Nations
                            </h3>

                            {/* Snippet */}
                            <p className="text-gray-600 text-xs leading-relaxed mb-6 line-clamp-4">
                                Get inspired by this revived W.H. Auden's Hymn to the United Nations. "Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So may the story Of our human city Presently move
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                                {/* Author */}
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                                        <img src="https://i.pravatar.cc/150?img=32" alt="Author" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-xs font-bold text-black">Windy Bond</span>
                                </div>

                                {/* Read More Button */}
                                <button className="bg-[#B22222] text-white text-[10px] uppercase font-bold px-4 py-2 rounded flex items-center gap-1 hover:bg-[#8B0000] transition">
                                    Read More
                                    <div className="bg-white rounded-full p-[1px]">
                                        <MoveRight className="w-2 h-2 text-[#B22222]" />
                                    </div>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

"use client";

import React from "react";
import { Info } from "lucide-react";

interface ResourceCard {
    title: string;
    description: string;
}

const resourcesData: ResourceCard[] = [
    {
        title: "TERMINOLOGY",
        description: "Before diving into the resources on this site, you may want to take a look over these terms. We have tried our hardest to be Nuanced and sensitive to Trauma in Our Understanding of The Central.",
    },
    {
        title: "VICTIM'S DIRECTORY",
        description: "Our Local Support Services Near You And Your Loved Ones.",
    },
    {
        title: "TOXIC RELATIONSHIPS",
        description: "Unhealthy Family And Harmful Violence Learn To Differentiate Between Healthy And Unhealthy Relationships. Our Topics May Go From Toxic And Navigational Friendships And Abuse For Families Learn The Ways To Cope And Overcome Them. Resources Include Our Family Violence.",
    },
    {
        title: "MENTAL HEALTH AND HEALING",
        description: "Read Resources And Reach Out Your Mental Health and Wellbeing.",
    },
    {
        title: "GENDER-BASED VIOLENCE",
        description: "Learn About The Different Types Of Gender-Based Violence On This Page, And The Types Of Abuse That Comes With It (GBV).",
    },
    {
        title: "CHILD MARRIAGE",
        description: "Explore In-Depth The Age To Get Consent And The Dangers Of Child Marriage. Marriage Is Defined As A Union Between Adults, Appropriated As Children Gets Into Marriage As A Form Of Abuse. Forcing Children During A Life Of Mature Age.",
    },
];

export default function Resources() {
    return (
        <div className="w-full bg-white px-8 md:px-20 py-12">
            <div className="max-w-7xl mx-auto font-k2d">
                {/* Header Section */}
                <div className="mb-8 space-y-4">
                    <p className="text-base md:text-lg leading-relaxed">
                        Our Team, Consisting Of Both Survivors And Experts, Has Compiled Various Resources With Love
                        And Care. These Resources Will Help You (And Your Loved Ones) Spot Signs Of Abuse, Stay Safe,
                        Collect Evidence, Work On Your Financial And Mental Well Being, And Connect To Local Services
                        For Help.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                        These Resources Are There To Educate And Empower Anyone Who Visits The Site. Share Them
                        On Social Media With Your Friends, Family And Network. And Should Anyone Require Emergency
                        Assistance From Family Violence Services, You Can Redirect Them To The{" "}
                        <span className="text-[#C8102E] font-bold cursor-pointer hover:underline">
                            VICTIM'S DIRECTORY
                        </span>{" "}
                        Or Contact Us At{" "}
                        <a
                            href="mailto:Thejugnuproject@Gmail.Com"
                            className="text-[#C8102E] font-bold hover:underline"
                        >
                            Thejugnuproject@Gmail.Com
                        </a>
                        .
                    </p>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {resourcesData.map((resource, index) => (
                        <div
                            key={index}
                            className="border-4 border-[#C8102E] bg-white flex flex-col"
                        >
                            {/* Card Header */}
                            <div className="bg-[#C8102E] text-white text-center py-4 px-4">
                                <h3 className="font-bold text-sm md:text-base leading-tight">
                                    {resource.title}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="flex-1 p-6 flex flex-col">
                                <p className="text-xs md:text-sm leading-relaxed mb-6 flex-1">
                                    {resource.description}
                                </p>

                                {/* Card Footer Buttons */}
                                <div className="flex items-center gap-3 mt-auto">
                                    <button
                                        className="w-8 h-8 rounded-full bg-[#C8102E] flex items-center justify-center hover:bg-[#a00d24] transition-colors"
                                        aria-label="Information"
                                    >
                                        <Info className="w-4 h-4 text-white" />
                                    </button>
                                    <button className="bg-[#C8102E] text-white px-4 py-1.5 text-xs font-bold hover:bg-[#a00d24] transition-colors">
                                        JUGNU
                                    </button>
                                    <button className="bg-black text-white px-3 py-1.5 text-xs font-bold hover:bg-gray-800 transition-colors">
                                        RESOURCE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Red Border */}
                <div className="w-full h-2 bg-[#C8102E] mt-12"></div>
            </div>
        </div>
    );
}

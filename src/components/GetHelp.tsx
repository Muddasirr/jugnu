"use client";

import React from "react";
import { Search } from "lucide-react";

export default function GetHelp() {
    return (
        <div className="w-full bg-white px-8 md:px-20 py-12">
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-16 relative">
                <input
                    type="text"
                    placeholder="Search anything..."
                    className="w-full border border-gray-400 rounded-md py-2 px-10 text-sm focus:outline-none focus:border-black"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            <div className="max-w-4xl mx-auto space-y-8 font-k2d">
                {/* Is Your Life In Danger? */}
                <h2 className="text-xl md:text-2xl font-bold">
                    Is Your Life <span className="text-[#C8102E]">In Danger?</span>
                </h2>

                {/* Immediate Risk Text */}
                <p className="text-base md:text-lg font-medium leading-relaxed">
                    If You, Or Someone You Know, Is At Immediate Risk Or In Danger, Please Call The{" "}
                    <span className="text-[#C8102E] font-bold cursor-pointer hover:underline">
                        POLICE (Contact Number: 15).
                    </span>
                </p>

                {/* Crisis Support Text */}
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    While We Don’t Offer Crisis Support At The Moment, We Can Do Our Best To Help You Get Connected To The Kind Of Support You
                    Need. Check Our{" "}
                    <span className="text-[#C8102E] font-bold cursor-pointer hover:underline">
                        VICTIM'S DIRECTORY
                    </span>{" "}
                    To Gain Access To Emergency Numbers / Service Providers Near You.
                </p>

                {/* Resources Text */}
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    You Can Also Check Out Our Various{" "}
                    <span className="text-[#C8102E] font-bold cursor-pointer hover:underline">
                        RESOURCES
                    </span>{" "}
                    For Added Support.
                </p>

                {/* Contact Text */}
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    If You Need To, You Can Get In Touch With Us Through Our Social Media, Or Email Us
                    <br />
                    <a
                        href="mailto:Thejugnuproject@Gmail.Com"
                        className="text-[#C8102E] font-bold block mt-2 hover:underline"
                    >
                        (Thejugnuproject@Gmail.Com)
                    </a>{" "}
                    And We Will Do Our Best To Help.
                </p>
            </div>

            {/* Bottom Red Border */}
            <div className="w-full h-2 bg-[#C8102E] mt-12 mb-0"></div>
        </div>
    );
}

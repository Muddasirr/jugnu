"use client";

import React from "react";
import { Search } from "lucide-react";

export default function GetHelp() {
    return (
        <div className="w-full bg-white px-8 md:px-20 py-12">


            <div className="  space-y-8 ">
                {/* Is Your Life In Danger? */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black underline decoration-[#AC1514]">
                    Is Your Life <span className="text-[#AC1514] underline">In Danger?</span>
                </h2>

                {/* Immediate Risk Text */}
                <p className="text-base md:text-lg font-medium leading-relaxed text-black text-justify">
                    If you, or someone you know, is at immediate risk or in danger, please call the{" "}
                    <span className="text-[#C8102E]  underline font-bold cursor-pointer hover:underline">
                        POLICE (contact number: 15).
                    </span>
                </p>

                {/* Crisis Support Text */}
                <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                    While we don’t offer crisis support at the moment, we can do our best to help you get connected to the kind of support you
                    need. Check our{" "}
                    <span className="text-[#C8102E] underline font-bold cursor-pointer hover:underline">
                        VICTIM'S DIRECTORY
                    </span>{" "}
                    to gain access to emergency numbers / service providers near you.
                </p>

                {/* Resources Text */}
                <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                    You can also check out our various{" "}
                    <span className="text-[#C8102E] underline font-bold cursor-pointer hover:underline">
                        RESOURCES
                    </span>{" "}
                    for added support.
                </p>

                {/* Contact Text */}
                <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                    If you need to, you can get in touch with us through our social media, or email us
                    <a
                        href="mailto:thejugnuproject@gmail.com"
                        className="text-[#C8102E] font-bold block mt-2 underline"
                    >
                        (thejugnuproject@gmail.com){" "}
                        <span className="inline-block text-black font-normal no-underline">
                            {" "}and we will do our best to help.
                        </span>
                    </a>
                </p>
            </div>

            {/* Bottom Red Border */}
        </div>
    );
}

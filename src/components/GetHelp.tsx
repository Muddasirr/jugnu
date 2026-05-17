"use client";

import React from "react";
import Link from "next/link";

const WHATSAPP_HELPLINE = "+92 334 1122014";

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

                {/* WhatsApp Helpline */}
                <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                    Reach out to us on our WhatsApp Helpline (
                    <a
                        href={`https://wa.me/923341122014`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C8102E] underline font-bold hover:underline"
                    >
                        {WHATSAPP_HELPLINE}
                    </a>
                    ) between 9am to 9pm. You can also check our{" "}
                    <Link href="/survivor-stories" className="text-[#C8102E] underline font-bold hover:underline">
                        Survivors Directory
                    </Link>{" "}
                    to gain access to emergency numbers and service providers near you.
                </p>

                {/* Crisis Support Text */}
                <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                    While we don’t offer crisis support at the moment, we can do our best to help you get connected to the kind of support you
                    need.
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

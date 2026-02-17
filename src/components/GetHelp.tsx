"use client";

import React from "react";
import { Search } from "lucide-react";

export default function GetHelp() {
    return (
        <div className="w-full bg-white px-8 md:px-20 py-12">
           

            <div className="  space-y-8 ">
                {/* Is Your Life In Danger? */}
                <h2 className="text-xl md:text-2xl font-bold text-black underline decoration-[#AC1514]">
                    Is Your Life <span className="text-[#AC1514] underline">In Danger?</span>
                </h2>

                {/* Immediate Risk Text */}
                <p className="text-base md:text-2xl font-medium leading-relaxed text-black">
                    If You, Or Someone You Know, Is At Immediate Risk Or In Danger, Please Call The{" "}
                    <span className="text-[#C8102E]  underline font-bold cursor-pointer hover:underline">
                        POLICE (Contact Number: 15).
                    </span>
                </p>

                {/* Crisis Support Text */}
                <p className="text-base md:text-2xl text-black leading-relaxed">
                    While We Don’t Offer Crisis Support At The Moment, We Can Do Our Best To Help You Get Connected To The Kind Of Support You
                    Need. Check Our{" "}
                    <span className="text-[#C8102E] underline font-bold cursor-pointer hover:underline">
                        VICTIM'S DIRECTORY
                    </span>{" "}
                    To Gain Access To Emergency Numbers / Service Providers Near You.
                </p>

                {/* Resources Text */}
                <p className="text-base md:text-2xl text-black leading-relaxed">
                    You Can Also Check Out Our Various{" "}
                    <span className="text-[#C8102E] underline font-bold cursor-pointer hover:underline">
                        RESOURCES
                    </span>{" "}
                    For Added Support.
                </p>

                {/* Contact Text */}
                <p className="text-base md:text-2xl text-black leading-relaxed">
                    If You Need To, You Can Get In Touch With Us Through Our Social Media, Or Email Us
           <a
  href="mailto:Thejugnuproject@Gmail.Com"
  className="text-[#C8102E] font-bold block mt-2 underline"
>
  (Thejugnuproject@Gmail.Com){" "}
  <span className="inline-block text-black font-normal no-underline">
    {" "}And We Will Do Our Best To Help.
  </span>
</a>


                   
                </p>
            </div>

            {/* Bottom Red Border */}
        </div>
    );
}

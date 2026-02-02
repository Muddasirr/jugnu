"use client";

import { useState } from "react";

export default function GetInvolvedPage() {
    const [activeTab, setActiveTab] = useState("VOLUNTEER WITH US");

    const tabs = [
        "VOLUNTEER WITH US",
        "RAISE FUNDS FOR US",
        "SPONSOR",
        "PARTNER WITH US",
        "DONATE"
    ];

    return (
        <main className="w-full bg-white font-serif text-black py-16">
            <div className="max-w-6xl mx-auto px-4">

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center mb-16">
                    <div className="border border-gray-400 rounded-full p-1 inline-flex flex-wrap justify-center gap-2 md:gap-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                  px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-200
                  ${activeTab === tab
                                        ? "bg-[#AC1514] text-white shadow-sm"
                                        : "bg-transparent text-black hover:bg-gray-50"}
                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto text-center space-y-12 min-h-[500px]">

                    {activeTab === "VOLUNTEER WITH US" && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#AC1514] italic underline decoration-1 underline-offset-8">
                                Your Time Can Change A Life
                            </h1>

                            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-900">
                                <p>
                                    At The Jugnu Project, We Strongly Believe In The Power Of People Coming Together For A Cause. Volunteers Are The Heart Of Our Work. With Limited Resources, We Deeply Value The Passion And Commitment Of Our Volunteers. By Giving Your Time, Skills And Compassion, You Help Us Reach More Survivors, Build Safer Communities And Get One Step Closer To Breaking The Cycle Of Violence.
                                </p>

                                <p>
                                    Whether It Is Through Assisting In Research Work, Helping To Create <span className="text-[#AC1514] font-bold">Resources, Participating / Organizing Community Outreach Programs, Assisting In Workshops, Supporting Events,</span> Or Helping Us Amplify Our Mission, Our Volunteers Are The Backbone Of Everything That We Do
                                </p>

                                <p>
                                    We Welcome Volunteers From All Walks Of Life And All Professions. Whether You Have A Few Hours A Week, Or Want To Commit Long Term; There’s A Role For You. Click The Button Below To Check The Roles Available, What Appeals To You And Then Fill Out The Short Form At The End. Someone From Our Team Will Get In Touch With
                                </p>

                                <p className="text-[#AC1514] font-bold text-xl md:text-2xl border-b-2 border-[#AC1514] inline-block pb-1 leading-normal max-w-4xl">
                                    Fill Out The Short Form At The End. Someone From Our Team Will Get In Touch With You Within 48 Hours.
                                </p>
                            </div>

                            <div className="pt-4">
                                <button className="bg-[#AC1514] text-white px-8 py-3 rounded font-medium shadow hover:bg-red-800 transition-colors">
                                    Volunteer Opportunities Form
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "RAISE FUNDS FOR US" && (
                        <div className="space-y-12 animate-in fade-in duration-500">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#AC1514] italic underline decoration-1 underline-offset-8">
                                Turn Your Passion Into Impact
                            </h1>

                            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-900">
                                <p>
                                    We Partner With Individuals, Institutions And Corporations To Raise Funds For The Survivors We Assist. We’ll Provide You With The Materials And The Guidance You Need To Help Make Your Effort Meaningful And Effective. Together We Can Raise Awareness And The Funds Needed To Make Change Possible!
                                </p>

                                <p className="text-[#AC1514] font-bold text-xl md:text-2xl inline-block leading-normal max-w-4xl border-b-2 border-[#AC1514] pb-1">
                                    If You’re Interested In Raising Funds For Survivor Services, Email Us At Thejugnuproject@Gmail.Com
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Placeholders for other tabs */}
                    {["SPONSOR", "PARTNER WITH US", "DONATE"].includes(activeTab) && (
                        <div className="space-y-8 animate-in fade-in duration-500 py-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#AC1514] italic underline decoration-1 underline-offset-8 capitalize">
                                {activeTab.toLowerCase()}
                            </h1>
                            <p className="text-xl text-gray-500">Content for this section is coming soon.</p>
                        </div>
                    )}

                </div>
            </div>
        </main>
    );
}

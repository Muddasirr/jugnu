"use client";

import { useState } from "react";
import Link from "next/link";

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
                    <div className="border border-black rounded-[12px] p-1 inline-flex flex-wrap justify-center gap-2 md:gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                  px-6 md:px-3 py-1.5 rounded-[12px] text-sm md:text-base  transition-all duration-200
                  ${activeTab === tab
                                        ? "bg-[#AC1514] font-bold text-white shadow-sm"
                                        : "bg-transparent font-normal text-black hover:bg-gray-50"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto space-y-12 min-h-[500px]">

                    {/* VOLUNTEER WITH US Tab */}
                    {activeTab === "VOLUNTEER WITH US" && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                            <h1 className="text-3xl text-center md:text-4xl font-bold text-[#AC1514] italic underline decoration-2 underline-offset-2">
                                Your Time Can Change A Life
                            </h1>

                            <div className="space-y-8 text-lg md:text-3xl leading-relaxed">
                                <p>
                                    At The Jugnu Project, we strongly believe in the power of people coming together for a cause. Volunteers are the heart of our work. With limited resources, we deeply value the passion and commitment of our volunteers. By giving your time, skills and compassion, you help us reach more survivors, build safer communities and get one step closer to breaking the cycle of violence.
                                </p>

                                <p>
                                    Whether it is through assisting in research work, helping to create <span className="text-[#AC1514] font-bold">resources, participating / organizing community outreach programs, assisting in workshops, supporting events,</span> or helping us amplify our mission, our volunteers are the backbone of everything that we do.
                                </p>

                                <p>
                                    We welcome volunteers from all walks of life and all professions. Whether you have a few hours a week, or want to commit long term; there's a role for you. Click the button below to check the roles available, what appeals to you and then fill out the short form at the end.
                                </p>

                                <p className="text-[#AC1514] font-bold text-xl md:text-3xl border-b-2 border-[#AC1514] decoration-2 underline-offset-2 max-w-4xl">
                                    Someone from our team will get in touch with you within 48 hours.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link href="/volunteer">
                                    <button className="bg-[#AC1514] text-white px-8 py-3 rounded font-medium shadow hover:bg-red-800 transition-colors cursor-pointer">
                                        Volunteer Opportunities
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* RAISE FUNDS FOR US Tab */}
                    {activeTab === "RAISE FUNDS FOR US" && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                            <h1 className="text-3xl text-center md:text-4xl font-bold text-[#AC1514] italic underline decoration-2 underline-offset-2">
                                Turn Your Passion Into Impact
                            </h1>

                            <div className="space-y-8 text-lg md:text-3xl leading-relaxed">
                                <p>
                                    We partner with individuals, institutions and corporations to raise funds for the survivors we assist. We'll provide you with the materials and the guidance you need to help make your effort meaningful and effective. Together we can raise awareness and the funds needed to make change possible!
                                </p>

                                <p className="text-[#AC1514] font-bold text-xl md:text-3xl inline-block leading-normal max-w-4xl border-b-2 border-[#AC1514] pb-1">
                                    If you're interested in raising funds for survivor services, email us at <a href="mailto:thejugnuproject@gmail.com" className="underline hover:no-underline">thejugnuproject@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* SPONSOR Tab */}
                    {activeTab === "SPONSOR" && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                            <h1 className="text-3xl text-center md:text-4xl font-bold text-[#AC1514] italic underline decoration-2 underline-offset-2">
                                Empower Recovery. Restore Hope.
                            </h1>

                            <div className="space-y-8 text-lg md:text-3xl leading-relaxed">
                                <p>
                                    We strongly believe in the power of collaboration to create lasting change. When you partner with us as a sponsor, you are directly contributing to our initiatives to empower communities and challenge societal norms.
                                </p>

                                <p>
                                    When a survivor leaves an abusive situation, finding safety is just the first step. Healing from the trauma, rebuilding their identity and their life, and finally gaining independence - all takes time and resources.
                                </p>

                                <p>
                                    Whether it is supporting our <span className="text-[#AC1514] font-bold">training(s), community outreach efforts, community dialogue workshops, campaigns</span> - or simply the sponsorship of a survivor - your support helps us amplify our impact.
                                </p>

                                <p className="text-[#AC1514] font-bold text-xl md:text-3xl inline-block leading-normal max-w-4xl border-b-2 border-[#AC1514] pb-1">
                                    If you're interested in partnering with us as a sponsor, please email us at <a href="mailto:thejugnuproject@gmail.com" className="underline hover:no-underline">thejugnuproject@gmail.com</a>. We would love to discuss how we can work together for the communities that we work with.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* PARTNER WITH US Tab */}
                    {activeTab === "PARTNER WITH US" && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                            <h1 className="text-3xl text-center md:text-4xl font-bold text-[#AC1514] italic underline decoration-2 underline-offset-2">
                                Together We Can Build A Safer Society
                            </h1>

                            <div className="space-y-8 text-lg md:text-3xl leading-relaxed">
                                <p>
                                    We believe that lasting change can only happen when communities, organizations and institutions work together to combat family and gender-based violence.
                                </p>

                                <p>
                                    Let's collaborate to build programs, policies and workplaces that are survivor-centered and equitable.
                                </p>

                                <p className="text-[#AC1514] font-bold text-xl md:text-3xl inline-block leading-normal max-w-4xl border-b-2 border-[#AC1514] pb-1">
                                    If you're interested in partnering with us, please email us at <a href="mailto:thejugnuproject@gmail.com" className="underline hover:no-underline">thejugnuproject@gmail.com</a>. We would love to discuss how we can work together for the communities that we work with.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* DONATE Tab */}
                    {activeTab === "DONATE" && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                            <h1 className="text-3xl text-center md:text-4xl font-bold text-[#AC1514] italic underline decoration-2 underline-offset-2">
                                Every Single Contribution Helps To Create Safety And Dignity For Survivors
                            </h1>

                            <div className="space-y-8 text-lg md:text-3xl leading-relaxed">
                                <p>
                                    We are dedicated to creating safe spaces and support systems within communities where survivors of family violence can live in safety, and with respect and dignity.
                                </p>

                                <p>
                                    By donating, you are helping our mission to <span className="text-[#AC1514] font-bold">(1)</span> raise awareness about domestic violence; <span className="text-[#AC1514] font-bold">(2)</span> provide life saving support to domestic violence survivors, <span className="text-[#AC1514] font-bold">(3)</span> create safe spaces and communities for survivors of domestic violence and gender-based violence, and <span className="text-[#AC1514] font-bold">(4)</span> to create resources for survivors, advocates and policy makers. Your donations help us to strengthen the socio-ecological and institutional systems that prevent abuse.
                                </p>

                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h3 className="text-xl md:text-3xl font-bold text-[#AC1514] mb-4">Here's how your contributions can make a difference:</h3>
                                    <ul className="space-y-3 text-lg">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#AC1514] font-bold">•</span>
                                            <span>Deep trauma therapy services per month cost <strong>$30 USD</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#AC1514] font-bold">•</span>
                                            <span>Legal Aid services per survivor can cost anywhere between <strong>$150 to $300 USD</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#AC1514] font-bold">•</span>
                                            <span>Monthly groceries for a survivor can come to around <strong>$100 USD</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#AC1514] font-bold">•</span>
                                            <span>Monthly rent for a survivor can come to around <strong>$150 USD</strong></span>
                                        </li>
                                    </ul>
                                </div>

                                <p>
                                    Every contribution, no matter the size, makes a significant difference. If you'd like to crowdfund or donate and support our cause, please use the payment options provided below:
                                </p>

                                <div className="bg-[#AC1514] text-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl md:text-3xl font-bold mb-4 underline underline-offset-4">Bank Account Details</h3>
                                    <div className="space-y-2 text-lg">
                                        <p><strong>Account Name:</strong> The Jugnu Project Consultancy (SMC-Private) Limited</p>
                                        <p><strong>Bank Account Number:</strong> 114000382290001</p>
                                        <p><strong>IBAN:</strong> PK33BKIP0114000382290001</p>
                                        <p><strong>Bank Name:</strong> BankIslami Pakistan Limited</p>
                                    </div>
                                </div>

                                <p className="text-[#AC1514] font-bold text-xl md:text-3xl inline-block leading-normal max-w-4xl border-b-2 border-[#AC1514] pb-1">
                                    You can also send us a screenshot of the donation on our email <a href="mailto:thejugnuproject@gmail.com" className="underline hover:no-underline">thejugnuproject@gmail.com</a>, along with a message of what you are donating to.
                                </p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </main>
    );
}

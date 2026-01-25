"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TrainingItem {
    title: string;
    content?: string;
}

const trainingItems: TrainingItem[] = [
    {
        title: "Introduction To Domestic Violence 101",
    },
    {
        title: "Financial Literacy For Women 101",
    },
    {
        title: "Identifying The Signs Of Domestic Violence - Training 101 For Foster Agents",
    },
    {
        title: "Understanding Consent",
    },
    {
        title: "Identifying The Types Of Narcissism",
    },
    {
        title: "Checking Bad Spots For Survivors Of Domestic Violence And Abuse",
    },
    {
        title: "Trauma- Informed Care",
    },
    {
        title: "Phonetic Abuse Awareness For Employees And Business Owners",
    },
    {
        title: "Legal Literacy Training Packages For Businesses",
    },
    {
        title: "Aesthetic Couple Therapies",
    },
    {
        title: "Specialized Trainings",
    },
    {
        title: "Community Engagement And Awareness Trainings",
    },
    {
        title: "Fostering And Capacity Building",
    },
];

export default function Training() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white px-8 md:px-20 py-12">
            <div className="max-w-4xl mx-auto font-k2d">
                {/* Header Section */}
                <div className="mb-8 space-y-4">
                    <p className="text-base md:text-lg leading-relaxed">
                        At The Jugnu Project, We Believe That And Change Can Only Happen When Both People And
                        Organizations Are Willing To Learn And Grow. Jugnu Offers A Variety Of Trainings Designed For
                        Family And Gender-Based Violence Effectively. We Offer Specialized, Evidence-Based Training
                        Programs And Tailored Advice, Tailored To Strengthen Awareness, Improve Skills And
                        Organizational Capacity To Respond To And Prevent Violence.
                    </p>

                    {/* Our Training and Professional Development Section */}
                    <div className="space-y-4">
                        <h3 className="text-base md:text-lg font-bold">
                            Our Training and Professional Development Section:{" "}
                            <span className="font-normal">
                                Help Individuals And Professionals Who Are Working And Dealing Clients, Patients And
                                Survivors Of Gender-Based Violence And Domestic Violence.
                            </span>
                        </h3>

                        <h3 className="text-base md:text-lg font-bold">
                            Our Training Sessions Are Informative, Trauma-Informed And Survivor-Centered:{" "}
                            <span className="font-normal">
                                They Combine Family Violence And Domestic Violence Expertise With Skills Development And
                                Practical Advice. We Cover A Wide Range Of Topics, Including The Dynamics Of Abuse,
                                Trauma-Informed Care, Safety Planning And The Context, Violations And Needs Of The
                                Organizations.
                            </span>
                        </h3>

                        <p className="text-base md:text-lg leading-relaxed">
                            We Also Offer Trainings For Professionals And Businesses As Well As For Clients. Trainings
                            Are Personalized Alike To Help Them Get A Deeper Understanding Of Family Violence.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed">
                            We Also Offer Various Trainings For Businesses And Organizations. These Are Specifically
                            Designed To Build Leadership, Emotional Intelligence, Empathy, Conflict Resolution And
                            Human Sensitivity. We Gear It To Streamline The Personal And Professional Growth Of Those
                            Who Are Working With Survivors Of Domestic Violence And Abuse.
                        </p>

                        <h3 className="text-base md:text-lg font-bold">
                            Our Capacity Building Services:{" "}
                            <span className="font-normal">
                                Focus On Equipping Government Departments, Organizations And Corporations With The
                                Resources And Skills Needed To Address Issues Of Family Violence Effectively. We
                                Provide Tailored Support To Enhance Their Capacity To Respond To And Prevent Violence.
                            </span>
                        </h3>

                        <p className="text-base md:text-lg leading-relaxed">
                            Our Goal Is To Help Strengthen Institutional Capacity So That Survivors Can Have Easy
                            Access To Justice, Support, And Safety. We Also Do Live And Empowered Life.
                        </p>
                    </div>
                </div>

                {/* Accordion Section */}
                <div className="mt-12 space-y-3">
                    {trainingItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-2 border-black bg-white"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-sm md:text-base font-medium pr-4">
                                    {index + 1}. {item.title}
                                </span>
                                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>
                            </button>
                            {openIndex === index && item.content && (
                                <div className="px-4 pb-4 pt-2 border-t-2 border-black">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Red Border */}
                <div className="w-full h-2 bg-[#C8102E] mt-12"></div>
            </div>
        </div>
    );
}

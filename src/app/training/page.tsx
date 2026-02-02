"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const trainingPrograms = [
    {
        id: 1,
        title: "Introduction To Domestic Violence 101",
        content: "A comprehensive introduction to understanding domestic violence, its forms, impacts, and how to recognize warning signs."
    },
    {
        id: 2,
        title: "Financial Literacy For Women 101",
        content: "Empowering women with essential financial knowledge and skills for economic independence."
    },
    {
        id: 3,
        title: "Handling SDA, SH And GBV Disclosures - Training For Call Center Agents",
        content: "Specialized training for call center professionals on handling sensitive disclosures with care and appropriate response protocols."
    },
    {
        id: 4,
        title: "Understanding Coercive Control",
        content: "Deep dive into patterns of coercive control, how to identify them, and understanding their psychological impacts."
    },
    {
        id: 5,
        title: "Identifying The Types Of Narcissists",
        content: "Learn about different types of narcissistic personalities and how they manifest in abusive relationships."
    },
    {
        id: 6,
        title: "Creating safe spaces for survivors of Domestic Violence and Abuse",
        content: "Guidelines and best practices for creating supportive and safe environments for survivors."
    },
    {
        id: 7,
        title: "Trauma-Informed Care",
        content: "Understanding trauma and implementing trauma-informed approaches in care settings."
    },
    {
        id: 8,
        title: "Financial Abuse Awareness For Employers And Business Owners",
        content: "Training for employers to recognize signs of financial abuse and support affected employees."
    },
    {
        id: 9,
        title: "Legal Literacy Training Packages For Businesses",
        content: "Understanding legal frameworks and compliance requirements related to workplace safety and harassment prevention."
    },
    {
        id: 10,
        title: "Survivor-Centric Practices",
        content: "Implementing survivor-centered approaches in organizational policies and practices."
    },
    {
        id: 11,
        title: "Specialized Trainings",
        content: "Customized training programs tailored to specific organizational needs and contexts."
    },
    {
        id: 12,
        title: "Community Engagement And Grassroot Trainings",
        content: "Building community awareness and capacity through grassroots training initiatives."
    },
    {
        id: 13,
        title: "Training And Capacity Building",
        content: "Comprehensive capacity building programs for organizations and institutions."
    }
];

export default function TrainingPage() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">

                {/* Intro Section */}
                <section className="space-y-6">
                    <p className="text-base md:text-lg leading-relaxed text-black">
                        At The Jugnu Project, We Believe That Real Change Can Only Happen When Both People And Institutions Are Equipped With The Knowledge, Empathy And Tools To Prevent And Respond To Family And Gender-based Violence Effectively. We Offer Specialized, Evidence-Based Training Programs And Certified Courses, Designed To Strengthen Awareness, Improve Response Skills And Promote Survivor-Centered Practices Across Workplaces, Communities And Individuals.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Our Training And Professional Development Sessions Help Individuals And Professionals Who Are Working With Survivors Build The Confidence, Compassion, Competence And Skills Needed To Prevent And Respond To Family Violence.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Our <span className="font-bold">Training Sessions Are Interactive, Trauma Informed And Survivor-Centered.</span> They Combine Family Violence Theory With Real World Practice, Equipping Participants With The Tools Needed To Respond Safely And Effectively. We Customize Our Training(s) According To The Intended Audience And The Context, Workforce And Needs Of The Organization.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        In Addition, We Work With Educational Institutions To Raise Awareness Amongst Students Regarding Family Violence. We Provide Certified Courses, Which Includes Pre-Listed Resources, To Students And Professionals Alike To Help Them Get A Deeper Understanding Of Family Violence.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        We Also Offer Various <span className="font-bold text-[#AC1514] underline decoration-1 underline-offset-2">Pathways For Professional Development For Individuals And Teams.</span> These Are Specifically Designed To Build Leadership, emotional intelligence, empathy, Gender sensitivity And Trauma Sensitivity. Our Goal Is To Strengthen The Personal And Professional Growth Of Those Working with family and Gender-based Violence.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Our Capacity Building Services Focus On Empowering Governmental Departments, Organizations And Corporations with <span className="font-bold">the expertise and skills</span> needed to address <span className="font-bold">domestic and family Violence</span> Effectively. Lasting Change Must Have Strong, Coordinated Systems And Not Just Individual Action.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black font-bold">
                        Our Goal Is To Help Strengthen Institutional Capacity(s) So That Survivors Can Have Easy Access To Justice, Safety And Dignity, And Be Able To Live An Empowered Life.
                    </p>
                </section>

                {/* Accordion Section */}
                <section className="space-y-4">
                    {trainingPrograms.map((program) => (
                        <div
                            key={program.id}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(program.id)}
                                className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-4">
                                    {/* Number Circle */}
                                    <div className="w-8 h-8 rounded-full bg-[#AC1514] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                                        {program.id}
                                    </div>
                                    {/* Title */}
                                    <h3 className="text-base md:text-lg font-bold text-[#AC1514] underline decoration-1 underline-offset-2">
                                        {program.title}
                                    </h3>
                                </div>
                                {/* Chevron */}
                                <ChevronDown
                                    className={`w-6 h-6 text-[#AC1514] transition-transform duration-200 flex-shrink-0 ${openAccordion === program.id ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Accordion Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openAccordion === program.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                    <p className="text-sm md:text-base text-black leading-relaxed pl-12">
                                        {program.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </main>
    );
}

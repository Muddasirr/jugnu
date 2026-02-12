"use client";

import Image from "next/image";
import Link from "next/link";

const reports = [
    {
        title: "Annual Femicide Cases – 2023",
        description: "Media-Based Documentation Of Reported Femicide Cases Across Pakistan, Compiled For Research, Awareness, And Advocacy Purposes.",
        image: "/domestic.jpg", // Using a relevant placeholder image
        pdfLink: "#"
    },
    {
        title: "Annual Femicide Cases – 2023",
        description: "Media-Based Documentation Of Reported Femicide Cases Across Pakistan, Compiled For Research, Awareness, And Advocacy Purposes.",
        image: "/domestic.jpg", // Using a relevant placeholder image
        pdfLink: "#"
    }
];

export default function FemicideReportPage() {
    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-16">
            <div className=" mx-auto px-6 md:px-8 space-y-12">

                {/* Intro Text */}
                <div className="space-y-8">
                    <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                        The Jugnu Project Conducts Capacity-Building Training(S), Community Dialogue, Workshops And Activities To Spread Awareness About Domestic Violence And Abuse Within Society. Our Aim Is To Combat The Social Stigma Attached To Family Violence, And Build A Network Of Allies Within Society For Survivors.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                        Below Is A Timeline Of Our Activities For Social And Communal Impact.
                    </p>
                </div>

                {/* Reports List */}
                <div className="space-y-12">
                    {reports.map((report, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                            {/* Image Container */}
                            <div className="w-full md:w-[280px] h-[200px] relative rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                    src={report.image}
                                    alt={report.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="flex-1 space-y-4 pt-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-black border-none">
                                    {report.title}
                                </h2>

                                <p className="text-base md:text-lg text-black leading-relaxed">
                                    {report.description}
                                </p>

                                <div className="pt-2">
                                    <Link href={report.pdfLink}>
                                        <button className="bg-[#AC1514] text-white px-6 py-2 rounded-md text-xs font-bold hover:bg-[#8B0000] transition-colors shadow-sm">
                                            View PDF
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}

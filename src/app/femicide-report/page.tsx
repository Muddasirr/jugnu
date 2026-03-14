"use client";

import Image from "next/image";
import Link from "next/link";

const reports = [
    {
        title: "Annual Femicide Cases – 2023",
        description: "Media-based documentation of reported femicide cases across Pakistan, compiled for research, awareness, and advocacy purposes.",
        image: "/femicide.png", // Using a relevant placeholder image
        pdfLink: "#"
    },
    {
        title: "Annual Femicide Cases – 2023",
        description: "Media-based documentation of reported femicide cases across Pakistan, compiled for research, awareness, and advocacy purposes.",
        image: "/femicide.png", // Using a relevant placeholder image
        pdfLink: "#"
    }
];

export default function FemicideReportPage() {
    return (
        <main className="w-full bg-white text-black py-12 md:py-16">
            <div className=" mx-auto px-6 md:px-8 space-y-12">

                {/* Intro Text */}
                <div className="space-y-8">
                    <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                        The Jugnu Project conducts capacity-building training(s), community dialogue, workshops and activities to spread awareness about domestic violence and abuse within society. Our aim is to combat the social stigma attached to family violence, and build a network of allies within society for survivors.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                        Below is a timeline of our activities for social and communal impact.
                    </p>
                </div>

                {/* Reports List */}
                <div className="space-y-12">
                    {reports.map((report, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                            {/* Image Container */}
                            <div className="w-full md:w-[200px] h-[200px] relative rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                    src={report.image}
                                    alt={report.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="flex-1 space-y-4 pt-2">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-black border-none">
                                    {report.title}
                                </h2>

                                <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                                    {report.description}
                                </p>

                                <div className="pt-2">
                                    <Link href={report.pdfLink}>
                                        <button className="bg-[#AC1514] text-white px-6 py-2 rounded-md text-xs font-bold hover:bg-[#8B0000] transition-colors shadow-sm uppercase">
                                            VIEW PDF
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

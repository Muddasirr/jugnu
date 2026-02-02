"use client";

import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const PakistanMapOnly = dynamic(() => import("@/components/PakistanMapOnly"), {
    ssr: false,
    loading: () => (
        <div className="h-[400px] md:h-[500px] bg-black/90 flex items-center justify-center">
            <span className="text-white">Loading map...</span>
        </div>
    ),
});

const statsCards = [
    {
        title: "Numbers Of Domestic Violence And Honor Killing Cases Reported",
        color: "bg-[#7f1d1d]"
    },
    {
        title: "Number Of Convictions",
        color: "bg-[#991b1b]"
    },
    {
        title: "Economic Cost Of Domestic Violence In Pakistan",
        color: "bg-[#7f1d1d]"
    }
];

export default function KnowTheNumbersPage() {
    return (
        <main className="w-full font-serif">
            {/* Hero Section with Map */}
            <section className="bg-[#AC1514] text-white">
                <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
                    {/* Map Container */}
                    <div className="bg-[#AC1514] rounded-lg overflow-hidden mb-12">
                        <PakistanMapOnly />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Pakistan Has A Family Violence Endemic.
                        </h2>

                        <p className="text-lg md:text-xl leading-relaxed">
                            <span className="text-yellow-300 underline decoration-1 underline-offset-4">More Than 90% Of Women</span> In Desi Society Have Faced Some Type Of Violence At Least Once In Their Lives.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed italic">
                            Below Are Statistical Reports Mapping The Domestic Violence Faced By Women And Girls Across Pakistan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Cards Section */}
            <section className="bg-[#fef2f2] py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {statsCards.map((card, index) => (
                            <div
                                key={index}
                                className={`${card.color} text-white p-8 rounded-lg min-h-[250px] flex flex-col justify-between shadow-lg`}
                            >
                                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                    {card.title}
                                </h3>
                                <div className="flex justify-end mt-6">
                                    <button className="text-white/80 hover:text-white transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

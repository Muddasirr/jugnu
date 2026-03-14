"use client";

import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const PakistanMapVisual = dynamic(() => import("@/components/PakistanMapVisual"), {
    ssr: false,
    loading: () => (
        <div className="h-[400px] md:h-[600px] bg-white flex items-center justify-center">
            <span className="text-black">Loading map...</span>
        </div>
    ),
});

const statsCards = [
    {
        title: "Numbers of domestic violence and honor killing cases reported",
    },
    {
        title: "Number of convictions",
    },
    {
        title: "Economic cost of domestic violence in Pakistan",
    }
];

export default function KnowTheNumbersPage() {
    return (
        <main className="w-full bg-white text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">

                {/* Map Section */}
                <div className="w-full">
                    <PakistanMapVisual />
                </div>

                {/* Text Content */}
                <div className="space-y-4 max-w-4xl text-justify">
                    <h2 className="text-xl md:text-2xl font-extrabold text-black">
                        Pakistan has a family violence endemic.
                    </h2>

                    <p className="text-lg md:text-xl text-black">
                        <span className="text-[#AC1514] font-extrabold">More than 90% of women</span> in desi society have faced some type of violence at least once in their lives.
                    </p>

                    <p className="text-base md:text-lg text-[#AC1514] font-medium">
                        Below are statistical reports mapping the domestic violence faced by women and girls across Pakistan.
                    </p>
                </div>

                {/* Stats Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                    {statsCards.map((card, index) => (
                        <div key={index} className="flex gap-4 items-stretch">
                            {/* Left Dots */}
                            <div className="flex flex-col justify-center gap-2 py-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-3 h-3 rounded-full bg-[#AC1514]"></div>
                                ))}
                            </div>

                            {/* Card Item */}
                            <div className="relative flex-1 bg-[#8B0000] p-8 min-h-[300px] flex flex-col justify-between shadow-lg">
                                {/* Diagonal Lines Decor */}
                                <div className="absolute top-8 left-8 w-24 h-[1px] bg-white -rotate-45 transform origin-left"></div>
                                <div className="absolute bottom-8 left-8 w-24 h-[1px] bg-white rotate-45 transform origin-left"></div>

                                {/* Right Tab Mockup */}
                                <div className="absolute -right-4 top-12 w-4 h-32 bg-[#8B0000] rounded-r-md"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl font-extrabold text-white underline decoration-1 underline-offset-4 leading-relaxed">
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Read More Button */}
                                <div className="relative z-10 flex justify-end mt-4">
                                    <button className="bg-black text-white text-[10px] uppercase font-bold px-2 py-1">
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

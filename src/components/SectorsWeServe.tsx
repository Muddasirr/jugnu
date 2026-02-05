export default function SectorsWeServe() {
    const sectors = [
        {
            title: "WOMEN SECTOR",
            bgColor: "bg-[#AC1514]",
            bgImage: "url('/sector1.png')",
        },
        {
            title: "GBV-F Research",
            bgColor: "bg-[#F31A18]",
            bgImage: "url('/sector2.png')",
        },
        {
            title: "FAMILY COURT",
            bgColor: "bg-[#480706]",
            bgImage: "url('/sector3.png')",
        },
        {
            title: "REPLACING ADVOCACY WOMEN SECTOR",
            bgColor: "bg-[#000000]",
            bgImage: "url('/sectors/advocacy1.jpg')",
        },
        {
            title: "REPLACING ADVOCACY WOMEN SECTOR",
            bgColor: "bg-[#6E0A0A]",
            bgImage: "url('/sectors/advocacy2.jpg')",
        },
        {
            title: "REPLACING ADVOCACY WOMEN SECTOR",
            bgColor: "bg-[#2C2727]",
            bgImage: "url('/sectors/advocacy3.jpg')",
        },
    ];

    return (
        <section className="py-16 px-6 md:px-16 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 opacity-20">
                <svg viewBox="0 0 100 100" className="text-[#AC1514] fill-current">
                    <circle cx="20" cy="20" r="15" />
                    <circle cx="50" cy="30" r="10" />
                    <circle cx="30" cy="50" r="12" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                <svg viewBox="0 0 100 100" className="text-[#AC1514] fill-current">
                    <rect x="20" y="20" width="30" height="30" transform="rotate(45 35 35)" />
                    <rect x="60" y="30" width="20" height="20" transform="rotate(45 70 40)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        <span className="text-black">Sectors </span>
                        <span className="text-[#AC1514]">We Serve</span>
                    </h2>
                </div>

                {/* Sectors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className={`rounded-lg h-64 flex items-center justify-center text-white font-bold text-xl md:text-2xl text-center px-6 relative overflow-hidden group cursor-pointer transition-transform hover:scale-105`}
                            style={{
                                backgroundImage: sector.bgImage,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Color overlay with specific opacity for each card */}
                            <div
                                className={`absolute inset-0 ${sector.bgColor}`}
                                style={{
                                    opacity: index === 1 ? 0.7 : 0.85 // Less opacity for second card to show image better
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                            <h3 className="relative z-10 leading-tight">{sector.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Description Text */}
                <div className="space-y-4 text-black leading-relaxed">
                    <p className="text-base">
                        To ensure domestic violence practices and policies support the goal of keeping both the survivor and child safe, we partner globally with sectors touching on family violence and child wellbeing.
                    </p>
                    <p className="text-base">
                        We work together with{" "}
                        <span className="text-[#AC1514] font-semibold">government agencies</span>,{" "}
                        <span className="text-[#AC1514] font-semibold">civil-society organizations</span>,{" "}
                        <span className="text-[#AC1514] font-semibold">non-governmental organizations</span>,{" "}
                        <span className="text-[#AC1514] font-semibold">corporations</span>,{" "}
                        <span className="text-[#AC1514] font-semibold">financial institutions</span>,{" "}
                        <span className="text-[#AC1514] font-semibold">healthcare and educational institutions</span>,{" "}
                        <span className="text-[#AC1514] font-semibold">law enforcement agencies</span> and{" "}
                        <span className="text-[#AC1514] font-semibold">judicial institutions</span> to create domestic abuse-inform practices and policies tailored to each profession and cultural context.
                    </p>
                </div>
            </div>
        </section>
    );
}

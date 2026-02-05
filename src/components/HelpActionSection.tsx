import Link from "next/link";

export default function HelpActionSection() {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl underline decoration-[black]  font-bold text-center mb-8 md:mb-12">
                    <span className="text-[#AC1514]  underline decoration-[black]">
                        If you, or someone you know,
                    </span>{" "}
                    <span className="text-black underline">is experiencing abuse, we're here to help:</span>
                </h2>

                {/* Action Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Card 1 - I want to find local support */}
                    <Link href="/survivor-stories" target="_blank" rel="noopener noreferrer" className="flex flex-col group cursor-pointer">
                        <div className="bg-[#C41E1A] text-white text-center py-8 px-6 mb-4 h-32 flex items-center justify-center group-hover:bg-[#A01816] transition-colors">
                            <p className="text-base md:text-lg font-semibold leading-tight">
                                I want to find<br />local support
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-black text-center leading-relaxed">
                            Check our Victim's Directory to find support nearest to you.
                        </p>
                    </Link>

                    {/* Card 2 - I need help */}
                    <Link href="/resources" target="_blank" rel="noopener noreferrer" className="flex flex-col group cursor-pointer">
                        <div className="bg-[#FF0000] text-white text-center py-8 px-6 mb-4 h-32 flex items-center justify-center group-hover:bg-[#CC0000] transition-colors">
                            <p className="text-base md:text-lg font-semibold leading-tight">
                                I need help.
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-black text-center leading-relaxed">
                            Check our resources on access to legal aid and/or psycho-social resources available
                        </p>
                    </Link>

                    {/* Card 3 - I want to help a friend / survivor */}
                    <Link href="/resources" target="_blank" rel="noopener noreferrer" className="flex flex-col group cursor-pointer">
                        <div className="bg-[#4A1A1A] text-white text-center py-8 px-6 mb-4 h-32 flex items-center justify-center group-hover:bg-[#3A1515] transition-colors">
                            <p className="text-base md:text-lg font-semibold leading-tight">
                                I want to help a<br />friend / survivor.
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-black text-center leading-relaxed">
                            Check our resources on supporting someone you know who may be facing abuse.
                        </p>
                    </Link>

                    {/* Card 4 - I want to understand family / domestic violence */}
                    <Link href="/familyviolence" target="_blank" rel="noopener noreferrer" className="flex flex-col group cursor-pointer">
                        <div className="bg-[#000000] text-white text-center py-8 px-6 mb-4 h-32 flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors">
                            <p className="text-base md:text-lg font-semibold leading-tight">
                                I want to understand family<br />/ domestic violence
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-black text-center leading-relaxed">
                            Check our resources on family and domestic violence.
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}

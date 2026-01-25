export default function HelpActionSection() {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
                    <span className="text-[#AC1514] underline decoration-[#AC1514]">
                        If you, or someone you know,
                    </span>{" "}
                    <span className="text-black">is experiencing abuse, we're here to help:</span>
                </h2>

                {/* Action Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Card 1 - I want to find local support */}
                    <div className="flex flex-col">
                        <div className="bg-[#C41E1A] text-white text-center py-8 px-6 mb-4 h-32 flex items-center justify-center">
                            <p className="text-base md:text-lg font-semibold leading-tight">
                                I want to find<br />local support
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-gray-900 text-center leading-relaxed">
                            Check our Survivor's Directory to find support nearest to you.
                        </p>
                    </div>

                    {/* Card 2 - I need help */}
                    <div className="flex flex-col">
                        <div className="bg-[#FF0000] text-white text-center py-8 px-6 mb-4 h-32 flex items-center justify-center">
                            <p className="text-base md:text-lg font-semibold leading-tight">
                                I need help.
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-gray-900 text-center leading-relaxed">
                            Check our resources on access to legal aid and/or psycho-social resources available
                        </p>
                    </div>

                    {/* Card 3 - I want to help a friend / survivor */}
                    <div className="flex flex-col">
                        <div className="bg-[#4A1A1A] text-white text-center py-8 px-6 mb-4 h-32 flex items-center justify-center">
                            <p className="text-base md:text-lg font-semibold leading-tight">
                                I want to help a<br />friend / survivor.
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-gray-900 text-center leading-relaxed">
                            Check our resources on supporting someone you know who may be facing abuse.
                        </p>
                    </div>

                    {/* Card 4 - I want to understand family / domestic violence */}
                    <div className="flex flex-col">
                        <div className="bg-[#000000] text-white text-center py-8 px-6 mb-4 h-32 flex items-center justify-center">
                            <p className="text-base md:text-lg font-semibold leading-tight">
                                I want to understand family<br />/ domestic violence
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-gray-900 text-center leading-relaxed">
                            Check our resources on family and domestic violence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

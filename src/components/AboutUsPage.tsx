import Image from "next/image";

export default function AboutUsPage() {
    return (
        <div className="bg-white">
            {/* About Us Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                            ABOUT US
                        </h2>

                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            The Jugnu Project is Pakistan's first and largest resource center for domestic and family violence.
                        </p>

                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            At The Jugnu Project, we work towards a world where everyone is safe, respected and thriving. We specialize in family and gender-based violence and aim to create a support system and network that allows survivors to live lives of safety, dignity and independence.
                        </p>

                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            We are an independent, non-governmental and non-partisan organization.
                        </p>

                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            Our work prioritizes the safety of all people experiencing, recovering from or at risk of family or gender-based violence. While we know that most family violence is perpetrated by men against women and children, we also acknowledge that this is not always the case. Family violence impacts people across a diverse range of factors, from religious, socio-cultural contexts, gender, age, to profession and within various family, intimate and other relationships.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative h-[400px] md:h-[500px] bg-gray-200 rounded-sm overflow-hidden">
                            <Image
                                src="/about1.png"
                                alt="About Us"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative floral element - top right */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 opacity-20">
                            <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                                <circle cx="50" cy="50" r="8" />
                                <circle cx="30" cy="40" r="6" />
                                <circle cx="70" cy="60" r="6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jugnu's Story Section */}
            <section className="bg-white py-8">
                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000] uppercase">
                            JUGNU'S STORY <span className="text-black">(OUR STORY)</span>
                        </h2>

                        <p className="text-sm md:text-base text-gray-900 max-w-5xl mx-auto leading-relaxed">
                            Jugnu was a firefly daughter, sister and mother. She lived for 30 years as a prisoner in an abusive husband and in-laws, until her death on the 27th of November, 2021, finally set her free. The Jugnu Project is a memorial to her name and her memory. This is her story.
                        </p>

                        <div className="pt-4">
                            <button className="bg-[#8B0000] text-white px-8 py-2.5 text-sm font-semibold hover:bg-[#6B0000] transition-all">
                                Jugnu's Story
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative floral element - bottom left */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="absolute -bottom-8 left-0 w-24 h-24 opacity-20">
                        <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                            <circle cx="20" cy="80" r="10" />
                            <circle cx="40" cy="70" r="8" />
                            <circle cx="60" cy="85" r="6" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* About The Founder Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                            ABOUT <span className="text-[#8B0000]">THE FOUNDER</span>
                        </h2>

                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            The Jugnu Project was started in 2021 by Zahra Ahmed, in honor of her maternal aunt (khala) after she passed away. It started with a vision to create Pakistan's first and largest resource center for survivors of family violence and abuse in Pakistan.
                        </p>

                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            Born and raised in Pakistan, Zahra witnessed countless women, including her immediate family and social circle, who faced domestic violence or the hands of their family members/ intimate partners. She saw the lack of resources, support systems and protection available to survivors of gender- based violence and those grew which after she first started working as a journalist for the English broadsheet, Dawn. She later worked as a legal researcher, policy analyst, writer, editor and domestic violence advocate. She strongly believes that the change begins from within and that we must start from our own communities.
                        </p>

                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            Zahra is a Lawyer, Social Consultant and Capacity Building Trainer, with a focus on Gender- Social Violence (GBV).
                        </p>

                        <div className="pt-4">
                            <button className="bg-[#8B0000] text-white px-8 py-2.5 text-sm font-semibold hover:bg-[#6B0000] transition-all">
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[400px] md:h-[500px] bg-gray-200 rounded-sm overflow-hidden">
                        <Image
                            src="/about2.png"
                            alt="Founder"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Our Purpose Section */}
            <section className="bg-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    {/* Tab Headers */}
                    <div className="flex justify-center gap-8 md:gap-16 mb-8 border-b-2 border-gray-200">
                        <button className="text-[#8B0000] font-bold text-lg md:text-xl pb-3 border-b-4 border-[#8B0000]">
                            Our Purpose
                        </button>
                        <button className="text-gray-400 font-bold text-lg md:text-xl pb-3 hover:text-gray-600">
                            Our Vision
                        </button>
                        <button className="text-gray-400 font-bold text-lg md:text-xl pb-3 hover:text-gray-600">
                            Our Commitment
                        </button>
                    </div>

                    {/* Content */}
                    <div className="max-w-5xl mx-auto space-y-6 text-sm md:text-base text-gray-900 leading-relaxed">
                        <p>
                            Our purpose is to build a society where every individual can live with dignity; free from violence, fear and inequality. We help organizations and communities design solutions that make societies more just, inclusive and sustainable.
                        </p>

                        <p>
                            We work with members of the community, educational institutes, health institutes, organizations, NGOs and government agencies etc. in order to build a greater understanding among the general public regarding domestic violence and its impact on families, children and adults.
                        </p>

                        <p>
                            We work with organizations and financial institutions to help them build policies that take into consideration the effects of family and gender- based violence, and to take steps to curb financial abuse.
                        </p>

                        <p>
                            Our work is based on evidence and lived experience about what drives domestic violence. We cannot respond to, and eventually end, family and gender- based violence without well-informed ideas about what is effective.
                        </p>
                    </div>
                </div>

                {/* Decorative floral element - left side */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="absolute top-1/2 left-0 w-20 h-20 opacity-20">
                        <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                            <circle cx="30" cy="50" r="10" />
                            <circle cx="50" cy="40" r="8" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Our Core Principles Section */}
            <section className="bg-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-4">
                            Our Core Principles
                        </h2>
                        <p className="text-sm md:text-base text-gray-900 max-w-3xl mx-auto">
                            Our work is guided by seven (07) core principles that reflect our commitment to safety, dignity and justice for all survivors.
                        </p>
                    </div>

                    {/* Principles Grid */}
                    <div className="mt-12 space-y-8">
                        {/* First Row - 4 principles */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-black pb-2 inline-block">
                                    Survivor-Centered Systems
                                </h3>
                            </div>

                            <div className="text-center">
                                <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-black pb-2 inline-block">
                                    Safety and Confidentiality
                                </h3>
                            </div>

                            <div className="text-center">
                                <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-black pb-2 inline-block">
                                    Intersectionality
                                </h3>
                            </div>

                            <div className="text-center">
                                <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-black pb-2 inline-block">
                                    Equality and Accessibility
                                </h3>
                            </div>
                        </div>

                        {/* Second Row - 3 principles with center highlighted */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <div className="text-center">
                                <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-black pb-2 inline-block">
                                    Awareness, Empowerment and Healing
                                </h3>
                            </div>

                            {/* Center - Highlighted */}
                            <div className="bg-[#8B0000] text-white p-6 rounded-sm">
                                <h3 className="text-base md:text-lg font-bold mb-3 border-b-2 border-white pb-2">
                                    Inclusivity
                                </h3>
                                <p className="text-xs md:text-sm leading-relaxed">
                                    We are committed to creating an inclusive environment where all survivors feel safe, respected and valued. We believe that everyone deserves to be treated with dignity and respect, regardless of their background, identity or circumstances. We strive to create a culture of inclusivity that celebrates diversity and promotes equity and justice for all.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-black pb-2 inline-block">
                                    Accountability and Integrity
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative floral element - right side */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="absolute top-1/2 right-0 w-24 h-24 opacity-20">
                        <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                            <circle cx="70" cy="50" r="12" />
                            <circle cx="50" cy="60" r="8" />
                            <circle cx="80" cy="70" r="6" />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
}

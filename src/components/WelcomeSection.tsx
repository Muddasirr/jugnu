import Link from "next/link";
import Image from "next/image";

export default function WelcomeSection() {
    return (
        <section className="bg-white pt-12 ">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-1">
                            <p className="text-sm md:text-base text-gray-900">Welcome to</p>
                            <h1 className="text-2xl md:text-3xl text-[black] font-bold">
                                THE <span className="text-[#AC1514]">JUGNU PROJECT</span>
                            </h1>
                        </div>

                        {/* Main Description */}
                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            We are Pakistan's Digital Domestic Violence Resource Center, for survivors impacted by
                            domestic and family violence and abuse.
                        </p>

                        {/* Red Highlighted Text */}
                        <p className="text-sm md:text-base text-[#AC1514] font-semibold leading-relaxed">
                            More than 90% desi women have reported being subjected to domestic violence at some
                            point in their lives.{" "}
                            <span className="text-gray-900 font-normal">
                                As a result of patriarchal and misogynist social norms, centered around
                                laws family honor, women and girls across Pakistan are taught to silently suffer violence
                                and abuse. This has led to a severe lack of resources and support for the dignity of
                                survivors of domestic violence and abuse in Pakistan. This includes taking decisive steps at
                                the policy level, to provide psycho-social, economic and legal support to survivors.
                            </span>
                        </p>

                        {/* Bold Red Statement */}
                        <p className="text-sm md:text-base text-[#AC1514] font-bold leading-relaxed">
                            The Jugnu Project's Digital Domestic Violence Resource is Pakistan's first and largest
                            dedicated resource center for survivors of family and intimate partner violence.
                        </p>

                        {/* Additional Description */}
                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            Aside from providing a host of different resources to both survivors and their supporters (or
                            anyone wishing to learn more about domestic violence in general), we also act as a
                            facilitation center to connect survivors with essential services that they may require to
                            escape abusive situations and rebuild lives of dignity and authenticity.
                        </p>

                        {/* Support Message */}
                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                            If you are someone who suspects they may be in an abusive relationship / marriage, or if you
                            know someone who may be in one, we are here to help. We understand that navigating
                            through these challenging situations can be overwhelming, and we are here to provide
                            support, information and a safe space to those who need it.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-4">
                            <Link href="/about"> <button className="bg-[#AC1514] rounded-[8px] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#8B0000] transition-all">
                                ABOUT US
                            </button>
                            </Link>
                            <Link href="https://medium.com/@thejugnuproject/jugnus-story-83b596282713">
                                <button className="bg-[#AC1514] rounded-[8px] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#8B0000] transition-all">
                                    JUGNU'S STORY
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-full ">
                        <div className="relative h-full min-h-[400px] bg-gray-200 rounded-sm overflow-hidden">
                            <Image
                                src="/domestic.jpg"
                                alt="Woman portrait"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative floral elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 opacity-30">
                            <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                                <circle cx="50" cy="50" r="8" />
                                <circle cx="30" cy="40" r="6" />
                                <circle cx="70" cy="60" r="6" />
                                <circle cx="60" cy="30" r="5" />
                            </svg>
                        </div>

                        <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-30">
                            <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                                <circle cx="30" cy="70" r="8" />
                                <circle cx="50" cy="60" r="6" />
                                <circle cx="70" cy="80" r="5" />
                                <circle cx="70" cy="80" r="5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

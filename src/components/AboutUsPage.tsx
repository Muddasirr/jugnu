"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutUsPage() {
    const [activeTab, setActiveTab] = useState("purpose");
    const [selectedPrinciple, setSelectedPrinciple] = useState("inclusivity");

    const principles = [
        {
            id: "survivor-centered",
            title: "Survivor-Centered Systems",
            description: "Survivors are at the heart of everything we do. Their lived experiences guide the creation of our resources and our community-based training(s). We only share survivor stories after gaining the consent of the survivor(s)."
        },
        {
            id: "safety",
            title: "Safety and Confidentiality",
            description: "Due to the high level of risk and trauma attached to our work, we do our best to create spaces that are physically, emotionally and digitally safe. Survivors' stories - and especially survivor identities - are kept confidential, and each story shared with us is treated with privacy, respect and protection."
        },
        {
            id: "intersectionality",
            title: "intersectionality",
            description: "Our work is intersectional. Violence and oppression does not exist in isolation. Our work and response takes into consideration the overlapping factors that can contribute to oppression - such as misogyny, patriarchy, religion, social class, and other factors - and the effect they may have on the dynamics of a survivor's lived experience."
        },
        {
            id: "equality",
            title: "Equality and Accessibility",
            description: "We believe that every citizen has equal rights under the law and should have easy access to justice and resources regardless of their gender, age, religion, social class, disability, etc. We do our best to ensure that our (physical and digital) spaces and resources are easily accessible, inclusive and free from discrimination."
        },
        {
            id: "awareness",
            title: "Awareness, Empowerment and Healing",
            description: "We aim to help survivors build strength, resilience and independence. We create resources to help them (and community organizations) understand family violence, while at the same time working with numerous institutions to spread awareness about the prevalence of family violence and gender-based violence in our society. It is only through raising awareness can we begin to combat family violence. We do our best to ensure that our approach is trauma-informed, guided by lived-experience, compassionate and empowering."
        },
        {
            id: "inclusivity",
            title: "Inclusivity",
            description: "We work with various communities to combat family violence and we do our work free of judgement. We believe that in order to create the most authentic, trauma-informed approach to assist survivors, all voices - regardless of their varying experiences and backgrounds - should be welcomed and heard"
        },
        {
            id: "accountability",
            title: "Accountability and Integrity",
            description: "We uphold the highest standards of ethics, transparency and responsibility - to our survivors, to our partners and to the communities we serve."
        }
    ];

    const getSelectedPrincipleData = () => {
        return principles.find(p => p.id === selectedPrinciple) || principles[5];
    };

    return (
        <div className="bg-white">
            {/* About Us Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                            ABOUT <span className="text-[#AC1514]">US</span>
                        </h2>

                        <p className="text-sm md:text-base text-black leading-relaxed">
                            The Jugnu Project is Pakistan's first and largest resource center for domestic and family violence.
                        </p>

                        <p className="text-sm md:text-base text-black leading-relaxed">
                            At The Jugnu Project, we work towards a world where everyone is safe, respected and thriving; living a life free from family and gender-based violence. We specialize in family and gender-based violence and aim to create a support system and network that allows survivors to live lives of safety, dignity and respect within the society.
                        </p>

                        <p className="text-sm md:text-base text-black leading-relaxed">
                            We are an independent, non-governmental and non-partisan organization.
                        </p>

                        <p className="text-sm md:text-base text-black leading-relaxed">
                            Our work prioritizes the safety of all people experiencing, recovering from or at risk of family or gender-based violence. While we know that most family violence cases are perpetrated by men against women and children, we recognize that this is not always the case. Family violence impacts people across a diverse range of factors, from religion, socio-cultural contexts, gender, age, profession and within various family, intimate and other relationships.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative h-[400px] md:h-[500px] bg-gray-200 rounded-sm overflow-hidden">
                            <Image
                                src="/intro.jpg"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514] uppercase">
                            JUGNU'S STORY <span className="text-black">(OUR STORY)</span>
                        </h2>

                        <p className="text-sm md:text-base text-black max-w-5xl mx-auto leading-relaxed">
                            Jugnu was a loving daughter, sister and mother. She lived for 30 years as a prisoner of an abusive husband and in-laws; until her death on the 17th of November, 2021, finally set her free. The Jugnu Project is a dedication to her name and her memory. This is her story.
                        </p>

                        <div className="pt-4">
                            <Link href="https://medium.com/@thejugnuproject/jugnus-story-83b596282713" target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#AC1514] rounded-[8px] text-white px-8 py-2.5 text-sm font-semibold hover:bg-[#8B0E0E] transition-all">
                                    Jugnu's Story
                                </button>
                            </Link>
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
                            ABOUT <span className="text-[#AC1514]">THE FOUNDER</span>
                        </h2>

                        <p className="text-sm md:text-base text-black leading-relaxed">
                            The Jugnu Project was started in 2021 by Zohra Ahmed, in honor of her maternal aunt (khala) after she passed away. It started with a vision to make up for the lack of resources available for survivors of family violence and abuse in Pakistan.
                        </p>

                        <p className="text-sm md:text-base text-black leading-relaxed">
                            Born and raised in Pakistan, Zohra witnessed countless women, including in her immediate family and social circle, who faced domestic violence at the hands of their family, husband / intimate partner, and/or their in-laws. She recognized within herself a passion for helping survivors of gender-based violence and abuse grew after she first started working as a journalist for the English NewsDesk at Dawn.com. She has covered various stories regarding honor-killing, abuse and domestic violence. She strongly believes that the resounding silence surrounding such crimes, regardless of socio-economic differences, has been the main reason why such offenses have continued undeterred.
                        </p>

                        <p className="text-sm md:text-base text-black leading-relaxed">
                            Zohra is a Lawyer, Social Consultant and Capacity Building Trainer, with a focus on Gender-Based Violence (GBV).
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[400px] md:h-[500px] bg-gray-200 rounded-sm overflow-hidden">
                        <Image
                            src="/about4.png"
                            alt="Founder"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Our Purpose/Vision/Mission Section */}
            <section className="bg-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    {/* Tab Headers */}
                    <div className="flex justify-center gap-8 md:gap-16 mb-8 border-b-2 border-gray-200">
                        <button
                            onClick={() => setActiveTab("purpose")}
                            className={`font-bold text-lg md:text-xl pb-3 border-b-4 transition-colors ${activeTab === "purpose"
                                ? "text-[#AC1514] border-[#AC1514]"
                                : "text-gray-400 border-transparent hover:text-gray-600"
                                }`}
                        >
                            Our Purpose
                        </button>
                        <button
                            onClick={() => setActiveTab("vision")}
                            className={`font-bold text-lg md:text-xl pb-3 border-b-4 transition-colors ${activeTab === "vision"
                                ? "text-[#AC1514] border-[#AC1514]"
                                : "text-gray-400 border-transparent hover:text-gray-600"
                                }`}
                        >
                            Our Vision
                        </button>
                        <button
                            onClick={() => setActiveTab("mission")}
                            className={`font-bold text-lg md:text-xl pb-3 border-b-4 transition-colors ${activeTab === "mission"
                                ? "text-[#AC1514] border-[#AC1514]"
                                : "text-gray-400 border-transparent hover:text-gray-600"
                                }`}
                        >
                            Our Mission
                        </button>
                    </div>

                    {/* Content */}
                    <div className="max-w-5xl mx-auto space-y-6 text-sm md:text-base text-black leading-relaxed">
                        {activeTab === "purpose" && (
                            <div className="space-y-6 animate-in fade-in duration-500">
                                <p>
                                    Our purpose is to build a society where every individual can live with dignity; free from violence, fear and inequality. We help organizations and communities design solutions that make societies more just, inclusive and sustainable.
                                </p>

                                <p>
                                    We work with members of the community, educational institutes, health institutes, organizations, NGOs and government agencies etc. in order to build a greater understanding among the general public regarding domestic violence and its impact on families, children and adults.
                                </p>

                                <p>
                                    We work with organizations and financial institutions to help them build policies that take into consideration the effects of family and gender-based violence, and to take steps to curb financial abuse.
                                </p>

                                <p>
                                    Our work is based on evidence and lived experience about what drives domestic violence. We cannot respond to, and eventually end, family and gender-based violence without well-informed ideas about what is effective.
                                </p>
                            </div>
                        )}

                        {activeTab === "vision" && (
                            <div className="space-y-6 animate-in fade-in duration-500">
                                <p>
                                    Named after a real life survivor, The Jugnu Project is working to build a world where everyone is safe from violence, respected and lives with dignity and without fear of inequality.
                                </p>

                                <p>
                                    We aim to provide support and assistance to survivors of domestic violence and abuse across Pakistan in order to help them build a new life for themselves and their loved ones.
                                </p>

                                <p>
                                    The Jugnu Project's vision is to create a world where survivors of domestic violence find solace, strength and support on their journey to healing. We aspire to be the beacon of hope, breaking the chains of silence and fostering a community that stands united against domestic violence.
                                </p>

                                <p>
                                    We envision a support system that provides a host of socioeconomic, psychological, legal and political resources that allow survivors of domestic violence and abuse to thrive and create a new life. We exist to end domestic violence and create safe spaces for healing.
                                </p>

                                <p>
                                    We envision a future where every individual impacted by domestic violence is empowered with knowledge, resilience, and resources to reclaim control of their lives. Through our unwavering commitment to advocacy, education, and community-building, we strive to dismantle the barriers that perpetuate domestic violence, cultivating an environment of empathy, understanding, and action.
                                </p>

                                <p>
                                    At The Jugnu Project, we dream of a society where survivors are not just survivors but those who thrive – individuals who, with the right support, can transcend the traumas of their past and emerge stronger, more resilient, and equipped to lead lives of purpose and fulfillment. We imagine a world where domestic violence is not just condemned but eradicated, and where every person, regardless of their background or circumstance, can live free from the shadow of abuse.
                                </p>

                                <p>
                                    As we navigate towards this vision, The Jugnu Project is dedicated to being a comprehensive resource, a compassionate ally, and a catalyst for societal transformation. Together, let us build a future where love is synonymous with respect, safety is a birthright, and no one has to endure the darkness of domestic violence alone.
                                </p>
                            </div>
                        )}

                        {activeTab === "mission" && (
                            <div className="space-y-6 animate-in fade-in duration-500">
                                <p>
                                    Our mission at The Jugnu Project is to provide unwavering support, essential resources, and a beacon of hope for individuals affected by domestic and family violence. We are committed to breaking the generational cycle of abuse in families across Pakistan and to help restructure the family system towards a healthy and more loving dynamic.
                                </p>

                                <p>
                                    Our purpose is to (1) empower survivors with the various resources at our disposal, (2) raise awareness about issues and evils related to domestic and family violence, and (3) to foster a community of strength and resilience whereby survivors have a solid support system around them that can help them to become financially independent and self-sufficient.
                                </p>

                                <p>
                                    We also work alongside organizations, companies, academic institutions and financial institutions to provide research, policy development and training services that empower them to achieve measurable social impact and align with Sustainable Development Goals (SDGs).
                                </p>
                            </div>
                        )}
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            <span className="text-[#AC1514]">Our Core</span> <span className="text-black">Principles</span>
                        </h2>
                        <p className="text-sm md:text-base text-black max-w-3xl mx-auto">
                            Our work is guided by seven (07) core principles that reflect our commitment to safety, dignity and justice for all survivors.
                        </p>
                    </div>

                    {/* Principles Grid */}
                    <div className="mt-12 space-y-8">
                        {/* First Row - 4 principles */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {selectedPrinciple === "survivor-centered" ? (
                                <div className="bg-[#AC1514] text-white p-8 min-h-[200px] flex flex-col justify-center rounded-md shadow-lg">
                                    <h3 className="text-base md:text-lg font-bold mb-3  underline  underline ">
                                        Survivor-Centered Systems
                                    </h3>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        {getSelectedPrincipleData().description}
                                    </p>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setSelectedPrinciple("survivor-centered")}
                                    className="bg-white p-6 text-center min-h-[120px] flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-[#DED6AA] pb-1">
                                        Survivor-Centered Systems
                                    </h3>
                                </button>
                            )}

                            {selectedPrinciple === "safety" ? (
                                <div className="bg-[#AC1514] text-white p-8 min-h-[200px] flex flex-col justify-center rounded-md shadow-lg">
                                    <h3 className="text-base md:text-lg font-bold mb-3  underline  underline ">
                                        Safety and Confidentiality
                                    </h3>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        {getSelectedPrincipleData().description}
                                    </p>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setSelectedPrinciple("safety")}
                                    className="bg-white p-6 text-center min-h-[120px] flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-[#44A6D9] pb-1">
                                        Safety and Confidentiality
                                    </h3>
                                </button>
                            )}

                            {selectedPrinciple === "intersectionality" ? (
                                <div className="bg-[#AC1514] text-white p-8 min-h-[200px] flex flex-col justify-center rounded-md shadow-lg">
                                    <h3 className="text-base md:text-lg font-bold mb-3  underline  underline ">
                                        intersectionality
                                    </h3>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        {getSelectedPrincipleData().description}
                                    </p>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setSelectedPrinciple("intersectionality")}
                                    className="bg-white p-6 text-center min-h-[120px] flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-[#A5B1EA] pb-1">
                                        intersectionality
                                    </h3>
                                </button>
                            )}

                            {selectedPrinciple === "equality" ? (
                                <div className="bg-[#AC1514] text-white p-8 min-h-[200px] flex flex-col justify-center rounded-md shadow-lg">
                                    <h3 className="text-base md:text-lg font-bold mb-3  underline  ">
                                        Equality and Accessibility
                                    </h3>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        {getSelectedPrincipleData().description}
                                    </p>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setSelectedPrinciple("equality")}
                                    className="bg-white p-6 text-center min-h-[120px] flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-[#FFCB7F] pb-1">
                                        Equality and Accessibility
                                    </h3>
                                </button>
                            )}
                        </div>

                        {/* Second Row - 3 principles */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {selectedPrinciple === "awareness" ? (
                                <div className="bg-[#AC1514] text-white p-8 min-h-[200px] flex flex-col justify-center rounded-md shadow-lg">
                                    <h3 className="text-base md:text-lg font-bold mb-3  underline  underline ">
                                        Awareness, Empowerment and Healing
                                    </h3>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        {getSelectedPrincipleData().description}
                                    </p>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setSelectedPrinciple("awareness")}
                                    className="bg-white p-6 text-center min-h-[120px] flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-[#44A6D9] pb-1">
                                        Awareness, Empowerment and Healing
                                    </h3>
                                </button>
                            )}

                            {selectedPrinciple === "inclusivity" ? (
                                <div className="bg-[#AC1514] text-white p-8 min-h-[200px] flex flex-col justify-center rounded-md shadow-lg">
                                    <h3 className="text-base md:text-lg font-bold mb-3  underline ">
                                        Inclusivity
                                    </h3>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        {getSelectedPrincipleData().description}
                                    </p>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setSelectedPrinciple("inclusivity")}
                                    className="bg-white p-6 text-center min-h-[120px] flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-[#FFCB7F] pb-1">
                                        Inclusivity
                                    </h3>
                                </button>
                            )}

                            {selectedPrinciple === "accountability" ? (
                                <div className="bg-[#AC1514] text-white p-8 min-h-[200px] flex flex-col justify-center rounded-md shadow-lg">
                                    <h3 className="text-base md:text-lg font-bold mb-3  underline ">
                                        Accountability and Integrity
                                    </h3>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        {getSelectedPrincipleData().description}
                                    </p>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setSelectedPrinciple("accountability")}
                                    className="bg-white p-6 text-center min-h-[120px] flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-black border-b-2 border-[#EF1A43] pb-1">
                                        Accountability and Integrity
                                    </h3>
                                </button>
                            )}
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

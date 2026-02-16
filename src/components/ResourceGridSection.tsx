import Link from "next/link";

export default function ResourceGridSection() {
    const resources = [
        {
            title: "Glossary",
            description: "Before diving into the resources on this page, you may want to take a brief look at the glossary section to understand the vocabulary used in these resources. Or, better yet, keep this resource open alongside the other resources for a deeper understanding of the content.",
            isDark: false,
        },
        {
            title: "Survivor's Directory",
            description: "Find local support services near you and get the help you need.",
            isDark: true,
        },
        {
            title: "Toxic Relationships",
            description: "Learn to differentiate between healthy and toxic relationships. Identify abusive tactics, toxic traits and manipulation techniques. Learn the ways to cope with (and escape) violence and abuse from current intimate partners and family members.",
            isDark: false,
        },
        {
            title: "Mental Health and Healing",
            description: "Find resources and tools for your mental health and wellbeing.",
            isDark: true,
        },
        {
            title: "Gender-Based Violence",
            description: "Learn about the different types of gender-based violence so that you, and those whom you love, can stay informed, aware and safe.",
            isDark: true,
        },
        {
            title: "Child Marriage",
            description: "Pakistan is one of the top ten countries globally for the highest number of child brides. Approximately 20% million girls are forcibly married before their 18th birthday. Use our resources and learn how you can help end this practice and give young girls a life of marital servitude.",
            isDark: false,
        },
        {
            title: "Know Your Legal Rights",
            description: "Understand what your legal rights are so you can make informed decisions about your life. Whether it's marriage, divorce/khula, inheritance, child custody, nationality and more, use our resources to know your legal rights.",
            isDark: true,
        },
        {
            title: "Financial Independence",
            description: "Economic abuse and lack of financial security is one of the main reasons survivors stay in violent and abusive relationships. Use our resources and tools to build a financially independent life.",
            isDark: false,
        },
        {
            title: "Sexual and Reproductive Health and Rights",
            description: "Sexual and reproductive rights are seldom discussed within desi families. Learn about your sexual and reproductive rights. Use our resources and tools to understand decisions and choices about your own body.",
            isDark: false,
        },
        {
            title: "Digital & Online Safety",
            description: "Use our resources to protect yourself online. Learn how to be safe online and report technology-facilitated gender-based violence and abuse.",
            isDark: true,
        },
        {
            title: "Resources for Professionals",
            description: "Learn how you, as a professional, can help survivors of domestic and family violence.",
            isDark: false,
        },
        {
            title: "General Help & Advice for Survivors",
            description: "Important advice for survivors.",
            isDark: true,
        },
        {
            title: "Support A Survivor",
            description: "If someone you know is experiencing, or recovering from, domestic violence and abuse. Use our resources to help.",
            isDark: true,
        },
        {
            title: "Campaign, Advocacy and Policy Making",
            description: "Do you want to raise awareness about these issues? Download our resources and toolkits today!",
            isDark: false,
        },
        {
            title: "Feminist Studies",
            description: "Do you want to know why we have such a high rate of family and gender-based violence in Pakistan? Learn about patriarchy, toxic masculinity, feminism and gender parity for a deeper understanding.",
            isDark: true,
        },
        {
            title: "External Resources",
            description: "Gain access to numerous external resources regarding family violence and survivor-centric support from around the globe.",
            isDark: false,
        },
    ];

    return (
        <section className="bg-white px-8 py-12 md:py-16">
            <div className="">
                {/* Main Container with Blue Border */}
                <div className="border-4  p-6 md:p-8 relative">
                    {/* Decorative floral element - top right */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 opacity-30 z-10">
                        <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                            <circle cx="70" cy="30" r="10" />
                            <circle cx="50" cy="40" r="8" />
                            <circle cx="80" cy="50" r="6" />
                        </svg>
                    </div>

                    {/* Header */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 underline decoration-black">
                        <span className="text-[#AC1514]">
                            You're Not Alone
                        </span>{" "}
                        <span className="text-black">
                            — Support Is Available
                        </span>
                    </h2>


                    {/* Blue Background Description */}
                    <div className="  mb-8 ">
                        <p className="text-[18px] text-black leading-relaxed">
                            Find confidential help, guidance, and resources for those facing Domestic or Gender-Based Violence. Access life-saving information, support services, and safe options — for yourself or someone you care about. We're here to connect you with trusted resources, safety planning, and survivor-centered support.
                        </p>
                    </div>

                    {/* Resource Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {resources.map((resource, index) => (
                            <div
                                key={index}
                                className={`p-6 flex flex-col ${resource.isDark
                                    ? "bg-black text-white"
                                    : "bg-white text-black border border-gray-200"
                                    }`}
                            >
                                <h3 className="text-lg md:text-xl font-bold mb-3">
                                    {resource.title}
                                </h3>
                                <p className="text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                                    {resource.description}
                                </p>
                                <Link href="/resources" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#AC1514] rounded-[8px] text-white px-6 py-2 text-xs font-bold hover:bg-[#8B0000] transition-all self-start">
                                        READ MORE
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

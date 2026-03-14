import Link from "next/link";
import Image from "next/image";

const resources = [
    {
        id: 1,
        title: "Terminology",
        description: "Before diving into the resources on this page, you may want to take a brief look at the terminology section to understand the vocabulary used in these resources. Or, better yet, keep this resource open simultaneously while you go over the other resources for a deeper understanding of the content.",
        link: "#"
    },
    {
        id: 2,
        title: "Victim's Directory",
        description: "Find local support services near you and get the help you need.",
        link: "/survivor-stories"
    },
    {
        id: 3,
        title: "Toxic Relationships",
        description: "Understand family and domestic violence. Learn to differentiate between healthy and toxic relationships. Identify abusive tactics, toxic traits and manipulation techniques. Learn the ways to cope with (and escape) violence and coercive control from intimate partners and family members.",
        link: "#"
    },
    {
        id: 4,
        title: "Mental Health and Healing",
        description: "Find resources and tools for your mental health and wellbeing.",
        link: "/mental-health"
    },
    {
        id: 5,
        title: "Gender-Based Violence",
        description: "Learn about the different types of gender-based violence so that you, and those whom you love, can stay informed, aware and safe.",
        link: "#"
    },
    {
        id: 6,
        title: "Child Marriage",
        description: "Pakistan is one of the top ten countries globally for the highest number of child brides. Approximately 20.5 million girls are forcibly married before their 18th birthday. Use our resources and learn how you can (i) raise awareness and, (ii) help children facing a life of marital servitude.",
        link: "#"
    },
    {
        id: 7,
        title: "Know Your Legal Rights",
        description: "Understand what your legal rights are so you can make informed decisions about your life. Whether it’s marriage, divorce/khula, inheritance, child custody, guardianship and more, use our resources to make informed decisions about your future.",
        link: "#"
    },
    {
        id: 8,
        title: "Financial Independence",
        description: "Economic abuse and lack of financial security is one of the main reasons survivors stay in violent and abusive relationships. Use our resources and tools to build a financially independent life.",
        link: "#"
    },
    {
        id: 9,
        title: "Sexual and Reproductive Health and Rights",
        description: "Sexual and reproductive rights are seldom discussed within desi families. Learn about your sexual and reproductive rights. Use our resources and tools to make informed decisions and choices today.",
        link: "#"
    },
    {
        id: 10,
        title: "Digital & Online Safety",
        description: "Use our resources to protect yourself online. Learn how to be safe online and prevent technology-facilitated gender-based violence and abuse.",
        link: "#"
    },
    {
        id: 11,
        title: "Resources for Family Violence Experts, Community Workers and Professionals",
        description: "Learn how you, as a professional, can help survivors of domestic and family violence.",
        link: "#"
    },
    {
        id: 12,
        title: "General Help & Advice for Survivors",
        description: "Important advice for survivors.",
        link: "#"
    },
    {
        id: 13,
        title: "Campaigns, Advocacy and Policy Making",
        description: "Do you want to raise awareness about these issues? Or check out proposed legislative and policy frameworks? Download our resources and toolkits today!",
        link: "/policy"
    },
    {
        id: 14,
        title: "Feminist Studies",
        description: "Do you want to know why we have such a high rate of family and gender-based violence in Pakistan? Let’s walk through the topics of patriarchy, toxic masculinity, feminism, consent and gender parity for a deeper understanding.",
        link: "#"
    },
    {
        id: 15,
        title: "The Care Gap",
        description: "The care gap refers to the growing need for care in society, and the limited systems, resources and support to provide it. This need is overwhelmingly met through unpaid and undervalued care work, mostly done by women and girls.",
        link: "#"
    },
    {
        id: 16,
        title: "External Resources",
        description: "Gain access to numerous external resources regarding family violence and survivor-centric support from around the globe.",
        link: "#"
    }
];

export default function ResourcesPage() {
    return (
        <main className="w-full bg-white text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">

                {/* Intro Section */}
                <section className="space-y-6 text-center md:text-left">
                    <p className="text-[18px] leading-[1.7] text-black text-justify">
                        Our team, consisting of both survivors and experts, has compiled various resources with love and care. These resources will help you (and your loved ones) spot signs of abuse, stay safe, collect evidence, work on your financial and mental well being, and connect to local services for help.
                    </p>
                    <p className="text-[18px] leading-[1.7] text-black text-justify">
                        These resources are there to educate and empower anyone who visits the site. Share them on social media with your friends, family and network; and should anyone require emergency assistance from family violence services, you can redirect them to the <Link href="/survivor-stories" className="text-[#AC1514] font-bold underline hover:no-underline uppercase">Victim's Directory</Link> or contact us at <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] font-bold underline hover:no-underline">thejugnuproject@gmail.com</a>.
                    </p>
                </section>

                {/* Resource Cards Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource) => (
                        <div key={resource.id} className="border-[3px] border-[#790A0A] bg-white flex flex-col h-full">
                            {/* Red Header */}
                            <div className="bg-[#790A0A] text-white my-4 mx-2 text-center py-4 flex items-center justify-center min-h-[60px]">
                                <h3 className="text-xl font-extrabold leading-tight px-2">
                                    {resource.title}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                                {/* Description Box */}
                                <div className="border border-gray-300 p-4 text-[13px] leading-relaxed text-justify h-full">
                                    {resource.description}
                                </div>

                                {/* Card Footer */}
                                <div className="flex items-center justify-between mt-auto pt-2">
                                    {/* Number Circle */}
                                    <div className="w-8 h-8 rounded-full bg-[#790A0A] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        {resource.id}
                                    </div>

                                    {/* JUGNU Logo */}
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src="/smalljugnu.svg"
                                            alt="JUGNU"
                                            width={100}
                                            height={58} // 100/1.7 approx 58.8
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* READ MORE Button */}
                                    <Link href={resource.link || "#"} className="bg-black text-white px-3 py-1 text-[10px] font-bold tracking-wider hover:bg-gray-800 transition-colors uppercase flex-shrink-0">
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </main>
    );
}

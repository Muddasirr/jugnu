import Link from "next/link";
import Image from "next/image";

const resources = [
    {
        id: 1,
        title: "TERMINOLOGY",
        description: "Before Diving Into The Resources On This Page, You May Want To Take A Brief Look At The Terminology Section To Understand The Vocabulary Used In These Resources. Or, Better Yet, Keep This Resource Open Simultaneously While You Go Over The Other Resources For A Deeper Understanding Of The Content.",
        link: "#"
    },
    {
        id: 2,
        title: "VICTIM'S DIRECTORY",
        description: "Find Local Support Services Near You And Get The Help You Need.",
        link: "/survivor-stories"
    },
    {
        id: 3,
        title: "TOXIC RELATIONSHIPS",
        description: "Understand Family And Domestic Violence. Learn To Differentiate Between Healthy And Toxic Relationships. Identify Abusive Tactics, Toxic Traits And Manipulation Techniques. Learn The Ways To Cope With (And Escape) Violence And Coercive Control From Intimate Partners And Family Members.",
        link: "#"
    },
    {
        id: 4,
        title: "MENTAL HEALTH AND HEALING",
        description: "Find Resources And Tools For Your Mental Health And Wellbeing.",
        link: "/mental-health"
    },
    {
        id: 5,
        title: "GENDER-BASED VIOLENCE",
        description: "Learn About The Different Types Of Gender-Based Violence So That You, And Those Whom You Love, Can Stay Informed, Aware And Safe.",
        link: "#"
    },
    {
        id: 6,
        title: "CHILD MARRIAGE",
        description: "Pakistan Is One Of The Top Ten Countries Globally For The Highest Number Of Child Brides. Approximately 20.5 Million Girls Are Forcibly Married Before Their 18th Birthday. Use Our Resources And Learn How You Can (I)Raise Awareness And, (Ii)Help Children Facing A Life Of Marital Servitude.",
        link: "#"
    },
    {
        id: 7,
        title: "KNOW YOUR LEGAL RIGHTS",
        description: "Understand What Your Legal Rights Are So You Can Make Informed Decisions About Your Life. Whether It’s Marriage, Divorce/Khula, Inheritance, Child Custody, Guardianship And More, Use Our Resources To Make Informed Decisions About Your Future.",
        link: "#"
    },
    {
        id: 8,
        title: "FINANCIAL INDEPENDENCE",
        description: "Economic Abuse And Lack Of Financial Security Is One Of The Main Reasons Survivors Stay In Violent And Abusive Relationships. Use Our Resources And Tools To Build A Financially Independent Life.",
        link: "#"
    },
    {
        id: 9,
        title: "SEXUAL AND REPRODUCTIVE HEALTH AND RIGHTS",
        description: "Sexual And Reproductive Rights Are Seldom Discussed Within Desi Families. Learn About Your Sexual And Reproductive Rights. Use Our Resources And Tools To Make Informed Decisions And Choices Today.",
        link: "#"
    },
    {
        id: 10,
        title: "DIGITAL & ONLINE SAFETY",
        description: "Use Our Resources To Protect Yourself Online. Learn How To Be Safe Online And Prevent Technology-Facilitated Gender-Based Violence And Abuse.",
        link: "#"
    },
    {
        id: 11,
        title: "RESOURCES FOR FAMILY VIOLENCE EXPERTS, COMMUNITY WORKERS AND PROFESSIONALS",
        description: "Learn How You, As A Professional, Can Help Survivors Of Domestic And Family Violence.",
        link: "#"
    },
    {
        id: 12,
        title: "GENERAL HELP & ADVICE FOR SURVIVORS",
        description: "Important Advice For Survivors.",
        link: "#"
    },
    {
        id: 13,
        title: "CAMPAIGNS, ADVOCACY AND POLICY MAKING",
        description: "Do You Want To Raise Awareness About These Issues? Or Check Out Proposed Legislative And Policy Frameworks? Download Our Resources And Toolkits Today!",
        link: "/policy"
    },
    {
        id: 14,
        title: "FEMINIST STUDIES",
        description: "Do You Want To Know Why We Have Such A High Rate Of Family And Gender-Based Violence In Pakistan? Let’s Walk Through The Topics Of Patriarchy, Toxic Masculinity, Feminism, Consent And Gender Parity For A Deeper Understanding.",
        link: "#"
    },
    {
        id: 15,
        title: "THE CARE GAP",
        description: "The Care Gap Refers To The Growing Need For Care In Society, And The Limited Systems, Resources And Support To Provide It. This Need Is Overwhelmingly Met Through Unpaid And Undervalued Care Work, Mostly Done By Women And Girls.",
        link: "#"
    },
    {
        id: 16,
        title: "EXTERNAL RESOURCES",
        description: "Gain Access To Numerous External Resources Regarding Family Violence And Survivor-Centric Support From Around The Globe.",
        link: "#"
    }
];

export default function ResourcesPage() {
    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">

                {/* Intro Section */}
                <section className="space-y-6 text-center md:text-left">
                    <p className="text-[18px] leading-[1.7] text-black text-justify">
                        Our Team, Consisting Of Both Survivors And Experts, Has Compiled Various Resources With Love And Care. These Resources Will Help You (And Your Loved Ones) Spot Signs Of Abuse, Stay Safe, Collect Evidence, Work On Your Financial And Mental Well Being, And Connect To Local Services For Help.#790A0A
                    </p>
                    <p className="text-[18px] leading-[1.7] text-black text-justify">
                        These Resources Are There To Educate And Empower Anyone Who Visits The Site. Share Them On Social Media With Your Friends, Family And Network; And Should Anyone Require Emergency Assistance From Family Violence Services, You Can Redirect Them To The <Link href="/survivor-stories" className="text-[#AC1514] font-bold underline hover:no-underline">VICTIM'S DIRECTORY</Link> Or Contact Us At <a href="mailto:Thejugnuproject@gmail.com" className="text-[#AC1514] font-bold underline hover:no-underline">Thejugnuproject@gmail.com</a>.
                    </p>
                </section>

                {/* Resource Cards Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource) => (
                        <div key={resource.id} className="border-[3px] border-[#790A0A] bg-white flex flex-col h-full">
                            {/* Red Header */}
                            <div className="bg-[#790A0A] text-white my-4 mx-2 text-center py-4 flex items-center justify-center min-h-[60px]">
                                <h3 className="text-xl font-bold uppercase leading-tight px-2">
                                    {resource.title}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                                {/* Description Box */}
                                <div className="border border-gray-300 p-4 text-[13px] leading-relaxed text-left h-full">
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

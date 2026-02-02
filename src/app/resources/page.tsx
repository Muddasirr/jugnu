import Link from "next/link";

const resources = [
    {
        id: 1,
        title: "TERMINOLOGY",
        description: "Before Diving Into The Resources On This Page, You May Need To Have A Brief Look At The Terminology Section To Understand The Key Terms Used By Those Science In The Field Up Along This Science Open Field Learning), Watch You In Your Field Of Related Issues And Debate Understanding Of The Content."
    },
    {
        id: 2,
        title: "VICTIM'S DIRECTORY",
        description: "This Level Support Southern View You Feel And On Help Also Read"
    },
    {
        id: 3,
        title: "TOXIC RELATIONSHIPS",
        description: "It Residential Family And Domestic Violence Leads To Witnessing The Domestic Homicide All Such Related Injuries (Health) Abuse Failure, Drug & Hurt And Therefore, Lead To Other Rights To Keep Up With And Teaching Violence And Guide Us Toward Promotion Plus Civil And Family Problems."
    },
    {
        id: 4,
        title: "MENTAL HEALTH AND HEALING",
        description: "Find Resources And Tools For Your Mental Health And Wellbeing"
    },
    {
        id: 5,
        title: "GENDER-BASED VIOLENCE",
        description: "Learn All The Different Types Of Gender-Based Violence So That You And Those Who You Love Can Stay Informed, Aware And Safe."
    },
    {
        id: 6,
        title: "CHILD MARRIAGE",
        description: "Pakistan Is One Of The Countries Which Has Globally The Highest Number Of Child Brides. Approximately 19% Of Girls Marry Before The Age Of 18 Years With 80% Of Those Children In Karachi And Lower Areas And Children In Between Approximately 300,000 Children Become A Bride Of Online Statistics."
    }
];

export default function ResourcesPage() {
    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">

                {/* Intro Section */}
                <section className="space-y-6">
                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Our Team, Consisting Of Both Survivors And Experts, Has Compiled Various Resources With Love And Care. These Resources Will Help You (And Your Loved Ones) Spot Signs Of Abuse, Stay Safe, Collect Evidence, Work On Your Financial And Mental Well Being, And Connect To Local Services For Help.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-black">
                        These Resources Are There To Educate And Empower Anyone Who Visits The Site. Share Them On Social Media With Your Friends, Family And Network; And Should Anyone Require Emergency Assistance From Family Violence Services, You Can Redirect Them To The <Link href="/victim-directory" className="text-[#AC1514] font-bold underline hover:no-underline">VICTIM'S DIRECTORY</Link> Or Contact Us At <Link href="mailto:Thejugnuproject@Gmail.Com" className="text-[#AC1514] font-bold underline hover:no-underline">Thejugnuproject@Gmail.Com</Link>
                    </p>
                </section>

                {/* Resource Cards Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                        <div key={resource.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            {/* Red Header */}
                            <div className="bg-[#AC1514] text-white px-6 py-5">
                                <h3 className="text-lg md:text-xl font-bold tracking-wide">
                                    {resource.title}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="bg-white p-6 min-h-[200px] flex flex-col justify-between">
                                <p className="text-sm leading-relaxed text-black mb-6">
                                    {resource.description}
                                </p>

                                {/* Card Footer */}
                                <div className="flex items-center justify-between mt-auto">
                                    {/* Number Circle */}
                                    <div className="w-10 h-10 rounded-full bg-[#AC1514] text-white flex items-center justify-center font-bold text-lg">
                                        {resource.id}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex items-center gap-3">
                                        <button className="bg-[#AC1514] text-white px-4 py-2 rounded text-xs font-bold tracking-wide hover:bg-red-800 transition-colors">
                                            JUGNU
                                        </button>
                                        <button className="border border-[#AC1514] text-[#AC1514] px-4 py-2 rounded text-xs font-bold tracking-wide hover:bg-[#AC1514] hover:text-white transition-colors">
                                            READ MORE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </main>
    );
}

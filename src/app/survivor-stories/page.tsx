import Link from "next/link";

const survivors = [
    { name: "Samina" },
    { name: "Batool" },
    { name: "Faryal" },
    { name: "Naila" },
    { name: "Abeeha" },
    { name: "Maira" },
    { name: "Rabia" },
    { name: "Aisha" },
    { name: "Saima" },
    { name: "Abida" },
    { name: "Sameera" },
    { name: "Fizza" }
];

export default function SurvivorStoriesPage() {
    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-16">

                {/* Intro Section */}
                <section className="space-y-6">
                    <p className="text-base md:text-lg leading-relaxed text-black">
                        This Page Is Full Of The Authentic, True Stories told By Survivors Who Have Overcome Abuse. Make no Mistake, Survivors' Journeys Towards Recovery And New Lives Are Neither Simple, Quick Nor Lonely Journeys.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        In The Jugnu Project, We Honor The Courage And Vision Of Each Survivor. We believe That No One Should Be Judged By Their Challenging Circumstances Or Mistakes. No One Should Have To Fight Alone. Our Courage to keep going should help survivors – past, present and future – to feel less alone. Advocacy groups can make real, Meaningful change. Here at Jugnu, We Aim To Inspire Courage In All Those Who Have Felt Alone, Helpless Or Overwhelmed By Sharing In Each Of Our Journeys.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Each Story, Victim Story, Shows In Incredible Amounts Of Courage And Strength. It Also Aims To Demonstrate That You Cannot Judge The Complexity And Darkness Of A Child Survivor Or Adult Victim, Even When Looking Straight At Them. These Experiences Change Entire Lives And Can Be Hidden So Well That Others May Not See.
                    </p>

                    <h3 className="text-xl font-bold text-[#AC1514] underline decoration-1 underline-offset-4 pt-4">
                        Why Are Survivor Stories Important?
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        For Many Survivors, Sharing Their stories and personal journeys is one of the most Important Steps on Their Path Towards Healing.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        When Survivors Share Their Experience, Of Living Around Survivors It Creates A Powerful Sense Of Connection, And In Return Feelings of Fear, Shame And Isolation Are Diminished.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Some Importantly, Sharing Stories Serves To Generate Discussion, Hope When Untold Stories Remain Hidden Along With Anxiety And Shame. It Can Still Have Devastating Effects. Story Telling Allows Others to Learn From Our Lives, To Feel Inspired, To Seek Healing And Treatment And For Some, To Realise That An Attorney Is Willing To Investigate On Their Behalf. Our Voices Matter.
                    </p>

                    <h3 className="text-xl font-bold pt-4">
                        Sharing Stories Is <span className="text-[#AC1514] underline decoration-1 underline-offset-4">Healing</span>
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Every Strong Advocate in Hundreds of Advocacy Groups And Thousands of Advocates Across This Country Have Seen The Incredible Impact Story Telling Can Have, Reminding The Future of How Trauma, Fear And Pain Have Effect Their Lives. Story Telling Allows Reconnecting With Others And Provides Exposure To New Ideas And Experiences And Healing From Domestic Violence, Child Abuse, And Sexual Assault.
                    </p>

                    <h3 className="text-xl font-bold pt-4">
                        <span className="text-[#AC1514] underline decoration-1 underline-offset-4">Our Future</span>
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        The Power Of Survivor Stories – Even The Words I Use Now For So Many - First Step Toward Moving Forward Regardless Of Current Circumstances, Whether Fighting For Custody Of Children, Healing From Trauma, Starting A New Life Or Rebuilding Stability - Advocacy Groups Are Here, Because The This Will Be There For You.
                    </p>

                    <h3 className="text-xl font-bold pt-4">
                        <span className="text-[#AC1514] underline decoration-1 underline-offset-4">How It Works? Share A Story</span>
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        We Take Great Care In The Review, Editing And Approving Every Story Sent To Us. Our Outreach Team Volunteers thoroughly review all submitted text and images before approving them for publication. Our stories will validate their the BRAVE skills and struggles to recover on this difficult journey.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        <Link href="/submit-story" className="text-[#AC1514] font-bold underline hover:no-underline">SUBMIT YOUR SURVIVOR STORY</Link>
                    </p>

                    <h3 className="text-xl font-bold pt-4">
                        A Word About <span className="text-[#AC1514] underline decoration-1 underline-offset-4">Trigger Warnings</span>
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Some Of the Stories, Audio, And Video on this Site Contain descriptions of abuse, violence, and other traumatic events. While we try to handle all matters with care and dignity, we wish to inform that stories of trauma, Violence and Victimization may not be Suitable for all Readers. We encourage All Readers to stop reading.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        The Survivor Stories Are Listed Below. Click On A Name (in Red) To View The Story.
                    </p>
                </section>

                {/* Survivor Grid */}
                <section className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {survivors.map((survivor, index) => (
                        <Link
                            key={index}
                            href={`/survivor-stories/${survivor.name.toLowerCase()}`}
                            className="flex flex-col items-center group"
                        >
                            {/* Silhouette Illustration */}
                            <div className="w-32 h-40 md:w-40 md:h-48 relative mb-4">
                                <svg
                                    viewBox="0 0 100 120"
                                    className="w-full h-full text-[#AC1514] opacity-80 group-hover:opacity-100 transition-opacity"
                                    fill="currentColor"
                                >
                                    {/* Woman silhouette */}
                                    <ellipse cx="50" cy="25" rx="18" ry="20" />
                                    <path d="M50 45 C20 50 15 80 20 120 L80 120 C85 80 80 50 50 45" />
                                    <path d="M30 60 Q10 70 5 95" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                                    <path d="M70 60 Q90 70 95 95" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                            {/* Name */}
                            <span className="text-xl md:text-2xl font-bold text-[#AC1514] group-hover:underline transition-all">
                                {survivor.name}
                            </span>
                        </Link>
                    ))}
                </section>

            </div>
        </main>
    );
}

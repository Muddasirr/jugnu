import React from 'react';

const timelineEvents = [
    {
        date: "|03.09.2025",
        title: 'Training On "Handling Sexual Exploitation And Abuse (SEA) And Gender-Based Violence (GBV) Disclosures By Call Center Agents"',
        descriptions: [
            "Our Founder, Zohra Ahmed, Was Invited To Conduct A Training Session For Call Center Agents Working Under The Sindh Social Protection Authority's (SSPA) MAMTA Program. It Was Aimed At Enhancing Their Understanding Of Sexual Exploitation And Abuse (SEA) And Gender-Based Violence (GBV), And To Strengthen Their Ability To Respond Appropriately And Professionally To Such Disclosures.",
            "The Session Equipped Participants With The Knowledge And Skills Needed To Identify, Respond To And Document SEA- And GBV-Related Complaints That May Be Reported By Beneficiaries Of The MAMTA Program - Whether Disclosed Voluntarily Or Inadvertently. It Emphasized Survivor-Centered Communication, Confidentiality, Non-Judgemental Listening And The Appropriate Referral Process / Grievance Redressal Mechanism In Line With Safeguarding Protocols."
        ],
        components: (
            <div className="w-full aspect-[4/3] md:aspect-[5/3] bg-gray-200 mt-6 flex items-center justify-center text-gray-500 font-sans normal-case text-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-100">
                [Image Placeholder: Meeting Room]
            </div>
        )
    },
    {
        date: "|17.02.2025",
        title: 'Stakeholder Consultation On The "Legal Environment Assessment For HIV And Human Rights In Pakistan".',
        descriptions: [
            "Our Founder, Zohra Ahmed, Was Invited To Participate In A Stakeholder Consultation Discussing The Legal Environment For HIV Patients And Human Rights In Pakistan. The Event Was Graced By Lawyers, Social Workers, Government Representatives And Trans Activists. The Consultation Was Conducted By AXIS Law Firm In Collaboration With CERP And UNAIDS."
        ],
        components: (
            <div className="w-full aspect-[4/3] md:aspect-[5/3] bg-gray-200 mt-6 flex items-center justify-center text-gray-500 font-sans normal-case text-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-100">
                [Image Placeholder: Projector Screen]
            </div>
        )
    },
    {
        date: "|08.02.2025",
        title: 'MOU Signing Between HerSTASH And The Jugnu Project',
        descriptions: [
            "The Jugnu Project Signed An MOU With HerSTASH, Aimed At Partnering Together To Provide Financial Literacy And Consultancy Services For Women Entrepreneurs Across Pakistan.",
            "We Are Proud To Join Forces To Introduce Numerous Women-Centric Financial Literacy Programs And Encourage Women Entrepreneurship."
        ],
        components: (
            <div className="flex flex-col mt-6 gap-6">
                <div className="w-full py-8 md:py-10 bg-[#252525] text-white flex items-center justify-center text-2xl md:text-5xl font-bold tracking-wide shadow-sm normal-case pb-10">
                    MOU Signing Ceremony
                </div>
                <div className="w-full py-6 bg-white flex items-center justify-center text-gray-500 normal-case text-sm gap-8 md:gap-14">
                    {/* Logo Placeholders */}
                    <div className="w-32 md:w-48 h-16 md:h-20 bg-red-50 border border-red-200 flex items-center justify-center text-red-700 font-bold text-lg md:text-2xl tracking-widest shadow-sm">JUGNU</div>
                    <span className="text-4xl md:text-6xl font-serif text-black opacity-80">&</span>
                    <div className="w-40 md:w-56 h-16 md:h-20 bg-fuchsia-50 border border-fuchsia-200 flex items-center justify-center text-fuchsia-600 font-bold text-lg md:text-2xl shadow-sm">HerSTASH</div>
                </div>
                <div className="w-full aspect-[4/3] md:aspect-video bg-gray-200 border-[8px] md:border-[16px] border-[#252525] flex items-center justify-center text-gray-500 normal-case text-sm shadow-md">
                    [Image Placeholder: MOU Group Photo]
                </div>
            </div>
        )
    },
    {
        date: "|21.12.2024",
        title: 'Workshop On Creating Safe Spaces For Women',
        descriptions: [
            'Our Founder, Zohra Ahmed, Represented The Jugnu Project At A Workshop On "Creating Safe Spaces For Women" At IBA Karachi, Conducted By Prof. Syed Hussain Haider. The Event Was Hosted By The Women Leadership Forum, Which Is A Platform Aiming To Provide Training And Capacity Building Workshops To Women In Leadership Positions Across Pakistan'
        ],
        components: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
                <div className="w-full aspect-[4/3] bg-gray-200 shadow-sm flex items-center justify-center text-gray-500 normal-case text-sm">Image 1</div>
                <div className="w-full aspect-[4/3] bg-gray-200 shadow-sm flex items-center justify-center text-gray-500 normal-case text-sm">Image 2</div>
                <div className="w-full aspect-[4/3] bg-gray-200 shadow-sm flex items-center justify-center text-gray-500 normal-case text-sm">Image 3</div>
                <div className="w-full aspect-[4/3] bg-gray-200 shadow-sm flex items-center justify-center text-gray-500 normal-case text-sm">Image 4</div>
            </div>
        )
    },
    {
        date: "|19.12.2024",
        title: 'Training On Domestic Violence At The Sindh Social Protection Authority (SSPA)',
        descriptions: [
            "Our Founder Zohra Ahmed Was Invited To Conduct A Training Session For The SSPA, Alongside Advocate Khushbaqt Jillani. The Training Focused On The Types Of Gender-Based Violence And Domestic Abuse Usually Witnessed While Working With Survivors On The Ground. The Training Was An Interactive Session Aimed At Enhancing The Skills And Building On The Experiences Of The Coordinators Working On Ground For SSPA's Mamta Program."
        ],
        components: null
    },
    {
        date: "|12.12.2024",
        title: 'Meeting With Ambassador Of The Kingdom Of Netherlands, Mrs. Henny De Vries.',
        descriptions: [
            "The Jugnu Project Was Invited To Attend A Luncheon With The Ambassador Of The Kingdom Of Netherlands, Mrs. Henny De Vries. The Meeting Was Aimed At Discussing The Challenges And Opportunities To Combat Gender Based Violence, And The Prevalence Of Violence Against Women In Pakistan. It Was Attended By Various Stakeholders Working In The GBV Sector In Karachi."
        ],
        components: (
            <div className="w-full aspect-[3/4] md:aspect-square bg-gray-200 mt-6 shadow-sm flex items-center justify-center text-gray-500 normal-case text-sm">
                [Image Placeholder: Group Photo Standing]
            </div>
        )
    },
    {
        date: "|27.11.2024",
        title: "16 Days Of Activism: Dialogue Session",
        descriptions: [
            "As Part Of The Global 16 Days Of Activism Campaign, We Organized A Dialogue Session To Create Awareness And Foster Inter-Communal Understanding Around Issues Of Gender-Based Violence."
        ],
        components: (
            <div className="flex flex-col gap-6 mt-6">
                <div className="w-full aspect-[2/3] md:aspect-[3/4] bg-gray-200 flex flex-col items-center justify-center text-gray-500 normal-case text-sm shadow-sm">
                    <span className="text-xl font-bold bg-white p-2">Panel Session Poster</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="w-full aspect-square bg-gray-200 shadow-sm flex flex-col items-center justify-center text-gray-500 normal-case text-xs">Speaker 1 Image</div>
                    <div className="w-full aspect-square bg-gray-200 shadow-sm flex flex-col items-center justify-center text-gray-500 normal-case text-xs">Speaker 2 Image</div>
                    <div className="w-full aspect-square bg-gray-200 shadow-sm flex flex-col items-center justify-center text-gray-500 normal-case text-xs md:hidden col-span-2">Speaker 3 Image</div>
                    <div className="w-full hidden md:flex aspect-square bg-gray-200 shadow-sm flex-col items-center justify-center text-gray-500 normal-case text-xs">Speaker 3 Image</div>
                </div>
            </div>
        )
    },
    {
        date: "|15.11.2024",
        title: "Online Webinar On Identifying Abuse",
        descriptions: [
            "In Collaboration With Fellow Mental Health Advocates, We Hosted An Online Session Reaching Survivors And Allies To Identify Signs Of Coercive Control And Resource Avenues."
        ],
        components: (
            <div className="flex flex-col gap-6 mt-6">
                <div className="w-full py-12 bg-black border-[12px] border-red-800 text-white flex flex-col items-center justify-center shadow-md normal-case">
                    <span className="text-white tracking-[0.15em] uppercase text-xl md:text-3xl font-serif">A Webinar By</span>
                    <span className="text-2xl md:text-5xl font-extrabold mt-6 px-10 text-center text-white">IDENTIFYING HIDDEN <br className="hidden md:block" /> ABUSE IN DESI HOMES</span>
                </div>
                <div className="w-full aspect-video bg-[#0f0f0f] border-4 border-gray-800 p-2 md:p-4 flex items-center justify-center text-gray-400 normal-case text-sm shadow-lg">
                    <div className="grid grid-cols-2 gap-2 md:gap-4 w-full h-[90%]">
                        <div className="bg-[#1f1f1f] border border-gray-700 flex flex-col space-y-2 items-center justify-center rounded-sm">
                            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-700"></div>
                            <span>Participant</span>
                        </div>
                        <div className="bg-[#1f1f1f] border border-gray-700 flex flex-col space-y-2 items-center justify-center rounded-sm">
                            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-700"></div>
                            <span>Participant</span>
                        </div>
                        <div className="bg-[#1f1f1f] border border-gray-700 flex flex-col space-y-2 items-center justify-center rounded-sm">
                            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-700"></div>
                            <span>Participant</span>
                        </div>
                        <div className="bg-[#1f1f1f] border border-gray-700 flex flex-col space-y-2 items-center justify-center rounded-sm">
                            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-700"></div>
                            <span>Participant</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        date: "|11.10.2024",
        title: "Capacity Building Workshops",
        descriptions: [
            "A Multi-Day Workshop Focusing On First Response And Care For Advocates And Social Workers Facing Burnout."
        ],
        components: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="w-full aspect-video bg-gray-200 shadow-sm flex items-center justify-center text-gray-500 normal-case text-xs">Workshop Image 1</div>
                <div className="w-full aspect-video bg-gray-200 shadow-sm flex items-center justify-center text-gray-500 normal-case text-xs">Workshop Image 2</div>
                <div className="w-full aspect-video bg-gray-200 shadow-sm flex items-center justify-center text-gray-500 normal-case text-xs">Workshop Image 3</div>
                <div className="w-full aspect-video bg-gray-200 shadow-sm flex items-center justify-center text-gray-500 normal-case text-xs">Workshop Image 4</div>
            </div>
        )
    }
];

export default function OurImpact() {
    return (
        <>
            <main className="min-h-screen bg-white text-black px-6 md:px-16 lg:px-24 py-16 font-sans capitalize text-justify overflow-hidden">
                <div className="max-w-4xl mx-auto text-[15px] md:text-[17px] leading-relaxed">

                    {/* Intro */}
                    <div className="space-y-6 mb-20 text-gray-900">
                        <p className="w-full">
                            The Jugnu Project Conducts Capacity-Building Training(S), Community Dialogue, Workshops And Activities To Spread Awareness About Domestic Violence And Abuse Within Society. Our Aim Is To Combat The Social Stigma Attached To Family Violence, And Build A Network Of Allies Within Society For Survivors.
                        </p>
                        <p className="w-full">
                            Below Is A Timeline Of Our Activities For Social And Communal Impact.
                        </p>
                    </div>

                    {/* Timeline Events */}
                    <div className="space-y-24">
                        {timelineEvents.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="text-[#AC1514] font-medium text-[16px] md:text-[18px] mb-4">
                                    {item.date}
                                </div>
                                <h2 className="font-bold text-black text-[15px] md:text-[17px] xl:text-[18px] mb-4 text-left leading-snug">
                                    {item.title}
                                </h2>
                                <div className="space-y-6 text-[15px] md:text-[17px] text-gray-900 leading-relaxed mb-6">
                                    {item.descriptions.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                </div>
                                {item.components}
                            </div>
                        ))}
                    </div>

                </div>
            </main>
            <div className="w-full h-4 bg-[#AC1514]"></div>
        </>
    );
}

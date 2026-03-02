import React from 'react';

const timelineEvents = [
    {
        date: "|03.09.2025",
        title: 'Training On "Handling Sexual Exploitation And Abuse (SEA) And Gender-Based Violence (GBV) Disclosures By Call Center Agents"',
        descriptions: [
            "Our Founder, Zohra Ahmed, Was Invited To Conduct A Training Session For Call Center Agents Working Under The Sindh Social Protection Authority's (SSPA) MAMTA Program. It Was Aimed At Enhancing Their Understanding Of Sexual Exploitation And Abuse (SEA) And Gender-Based Violence (GBV), And To Strengthen Their Ability To Respond Appropriately And Professionally To Such Disclosures.",
            "The Session Equipped Participants With The Knowledge And Skills Needed To Identify, Respond To And Document SEA- And GBV-Related Complaints That May Be Reported By Beneficiaries Of The MAMTA Program - Whether Disclosed Voluntarily Or Inadvertently. It Emphasized Survivor-Centered Communication, Confidentiality, Non-Judgemental Listening And The Appropriate Referral Process / Grievance Redressal Mechanism In Line With Safeguarding Protocols."
        ],
        components: null
    },
    {
        date: "|17.02.2025",
        title: 'Stakeholder Consultation On The "Legal Environment Assessment For HIV And Human Rights In Pakistan".',
        descriptions: [
            "Our Founder, Zohra Ahmed, Was Invited To Participate In A Stakeholder Consultation Discussing The Legal Environment For HIV Patients And Human Rights In Pakistan. The Event Was Graced By Lawyers, Social Workers, Government Representatives And Trans Activists. The Consultation Was Conducted By AXIS Law Firm In Collaboration With CERP And UNAIDS."
        ],
        components: null
    },
    {
        date: "|08.02.2025",
        title: 'MOU Signing Between HerSTASH And The Jugnu Project',
        descriptions: [
            "The Jugnu Project Signed An MOU With HerSTASH, Aimed At Partnering Together To Provide Financial Literacy And Consultancy Services For Women Entrepreneurs Across Pakistan.",
            "We Are Proud To Join Forces To Introduce Numerous Women-Centric Financial Literacy Programs And Encourage Women Entrepreneurship."
        ],
        components: null
    },
    {
        date: "|21.12.2024",
        title: 'Workshop On Creating Safe Spaces For Women',
        descriptions: [
            'Our Founder, Zohra Ahmed, Represented The Jugnu Project At A Workshop On "Creating Safe Spaces For Women" At IBA Karachi, Conducted By Prof. Syed Hussain Haider. The Event Was Hosted By The Women Leadership Forum, Which Is A Platform Aiming To Provide Training And Capacity Building Workshops To Women In Leadership Positions Across Pakistan'
        ],
        components: null
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
        components: null
    },
    {
        date: "|27.11.2024",
        title: "16 Days Of Activism: Dialogue Session",
        descriptions: [
            "As Part Of The Global 16 Days Of Activism Campaign, We Organized A Dialogue Session To Create Awareness And Foster Inter-Communal Understanding Around Issues Of Gender-Based Violence."
        ],
        components: null
    },
    {
        date: "|15.11.2024",
        title: "Online Webinar On Identifying Abuse",
        descriptions: [
            "In Collaboration With Fellow Mental Health Advocates, We Hosted An Online Session Reaching Survivors And Allies To Identify Signs Of Coercive Control And Resource Avenues."
        ],
        components: null
    },
    {
        date: "|11.10.2024",
        title: "Capacity Building Workshops",
        descriptions: [
            "A Multi-Day Workshop Focusing On First Response And Care For Advocates And Social Workers Facing Burnout."
        ],
        components: null
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

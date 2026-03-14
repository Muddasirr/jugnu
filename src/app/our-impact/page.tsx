import React from 'react';

const timelineEvents = [
    {
        date: "|03.09.2025",
        title: 'Training on "Handling Sexual Exploitation and Abuse (SEA) and Gender-Based Violence (GBV) disclosures by Call Center Agents"',
        descriptions: [
            "Our founder, Zohra Ahmed, was invited to conduct a training session for call center agents working under the Sindh Social Protection Authority's (SSPA) MAMTA program. It was aimed at enhancing their understanding of sexual exploitation and abuse (SEA) and gender-based violence (GBV), and to strengthen their ability to respond appropriately and professionally to such disclosures.",
            "The session equipped participants with the knowledge and skills needed to identify, respond to and document SEA- and GBV-related complaints that may be reported by beneficiaries of the MAMTA program - whether disclosed voluntarily or inadvertently. It emphasized survivor-centered communication, confidentiality, non-judgemental listening and the appropriate referral process / grievance redressal mechanism in line with safeguarding protocols."
        ],
        components: null
    },
    {
        date: "|17.02.2025",
        title: 'Stakeholder consultation on the "Legal Environment Assessment for HIV and Human Rights in Pakistan".',
        descriptions: [
            "Our founder, Zohra Ahmed, was invited to participate in a stakeholder consultation discussing the legal environment for HIV patients and human rights in Pakistan. The event was graced by lawyers, social workers, government representatives and trans activists. The consultation was conducted by AXIS Law Firm in collaboration with CERP and UNAIDS."
        ],
        components: null
    },
    {
        date: "|08.02.2025",
        title: 'MOU signing between HerSTASH and The Jugnu Project',
        descriptions: [
            "The Jugnu Project signed an MOU with HerSTASH, aimed at partnering together to provide financial literacy and consultancy services for women entrepreneurs across Pakistan.",
            "We are proud to join forces to introduce numerous women-centric financial literacy programs and encourage women entrepreneurship."
        ],
        components: null
    },
    {
        date: "|21.12.2024",
        title: 'Workshop on creating safe spaces for women',
        descriptions: [
            'Our founder, Zohra Ahmed, represented The Jugnu Project at a workshop on "Creating Safe Spaces for Women" at IBA Karachi, conducted by Prof. Syed Hussain Haider. The event was hosted by the Women Leadership Forum, which is a platform aiming to provide training and capacity building workshops to women in leadership positions across Pakistan'
        ],
        components: null
    },
    {
        date: "|19.12.2024",
        title: 'Training on domestic violence at the Sindh Social Protection Authority (SSPA)',
        descriptions: [
            "Our founder Zohra Ahmed was invited to conduct a training session for the SSPA, alongside advocate Khushbaqt Jillani. The training focused on the types of gender-based violence and domestic abuse usually witnessed while working with survivors on the ground. The training was an interactive session aimed at enhancing the skills and building on the experiences of the coordinators working on ground for SSPA's Mamta program."
        ],
        components: null
    },
    {
        date: "|12.12.2024",
        title: 'Meeting with Ambassador of the Kingdom of Netherlands, Mrs. Henny de Vries.',
        descriptions: [
            "The Jugnu Project was invited to attend a luncheon with the ambassador of the Kingdom of Netherlands, Mrs. Henny de Vries. The meeting was aimed at discussing the challenges and opportunities to combat gender based violence, and the prevalence of violence against women in Pakistan. It was attended by various stakeholders working in the GBV sector in Karachi."
        ],
        components: null
    },
    {
        date: "|27.11.2024",
        title: "16 Days of activism: Dialogue session",
        descriptions: [
            "As part of the global 16 days of activism campaign, we organized a dialogue session to create awareness and foster inter-communal understanding around issues of gender-based violence."
        ],
        components: null
    },
    {
        date: "|15.11.2024",
        title: "Online webinar on identifying abuse",
        descriptions: [
            "In collaboration with fellow mental health advocates, we hosted an online session reaching survivors and allies to identify signs of coercive control and resource avenues."
        ],
        components: null
    },
    {
        date: "|11.10.2024",
        title: "Capacity building workshops",
        descriptions: [
            "A multi-day workshop focusing on first response and care for advocates and social workers facing burnout."
        ],
        components: null
    }
];

export default function OurImpact() {
    return (
        <>
            <main className="min-h-screen bg-white text-black px-6 md:px-16 lg:px-24 py-16 text-justify overflow-hidden">
                <div className="max-w-4xl mx-auto text-[15px] md:text-[17px] leading-relaxed">

                    {/* Intro */}
                    <div className="space-y-6 mb-20 text-gray-900">
                        <p className="w-full">
                            The Jugnu Project conducts capacity-building training(s), community dialogue, workshops and activities to spread awareness about domestic violence and abuse within society. Our aim is to combat the social stigma attached to family violence, and build a network of allies within society for survivors.
                        </p>
                        <p className="w-full">
                            Below is a timeline of our activities for social and communal impact.
                        </p>
                    </div>

                    {/* Timeline Events */}
                    <div className="space-y-24">
                        {timelineEvents.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="text-[#AC1514] font-medium text-[16px] md:text-[18px] mb-4">
                                    {item.date}
                                </div>
                                <h2 className="font-extrabold text-black text-[15px] md:text-[17px] xl:text-[18px] mb-4 text-left leading-snug">
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

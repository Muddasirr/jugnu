"use client";

import { useState } from "react";
import { CircleChevronDown } from "lucide-react";

type TrainingProgram = {
    id: number;
    title: string;
    content: React.ReactNode;
};

const trainingPrograms: TrainingProgram[] = [
    {
        id: 1,
        title: "Introduction to Domestic Violence 101",
        content: (
            <div className="space-y-4">
                <p className="font-bold italic">Understanding the basics - breaking myths, building awareness.</p>
                <p>This foundational course provides an introduction to family violence and abuse. This course will teach participants about:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>The types of domestic violence and abuse</li>
                    <li>The myths and misconceptions regarding family violence</li>
                    <li>How the cycle of abuse works</li>
                    <li>Barriers survivors face when trying to seek help</li>
                    <li>The role of bystanders, family, friends, strangers and institutions in prevention and response of family violence</li>
                    <li>How to respond safely and empathetically</li>
                </ul>
                <div className="pt-2">
                    <p className="font-bold">For individuals: PKR 1000</p>
                    <p className="mt-2">Interested in this training? Please get in touch.</p>
                    <p>Our email is: <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] underline">thejugnuproject@gmail.com</a></p>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "Financial Literacy for Women 101",
        content: (
            <div className="space-y-4">
                <p className="font-bold italic">Empowering women through financial knowledge and independence</p>
                <p>Lack of financial awareness, planning and knowledge is a core reason why many women remain in abusive situations. This course is aimed at teaching women (and girls) the basic skills and tools with which they can make informed financial decisions. It is especially important for survivors looking to rebuild their lives after abuse.</p>
                <p>Participants will learn skills around personal financing, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Budgeting and expense management.</li>
                    <li>Understand the differences between savings and credit</li>
                    <li>The different banking terms important to managing one’s finances.</li>
                    <li>Types of digital payments and safe handling of digital payments</li>
                    <li>Red flags of financial abuse</li>
                    <li>Learn goal setting and long-term financial planning.</li>
                </ul>
                <p>This training is for women of all backgrounds, be they business owners, students or home makers. It is also for survivors rebuilding their lives, and for women’s community / committee groups.</p>
                <div className="pt-2">
                    <p className="font-bold">For individuals: PKR 1000</p>
                    <p className="mt-2">Interested in this training? Please get in touch.</p>
                    <p>Our email is: <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] underline">thejugnuproject@gmail.com</a></p>
                </div>
            </div>
        )
    },
    {
        id: 3,
        title: "Handling SEA, SH and GBV Disclosures - Training for Call Center Agents",
        content: (
            <div className="space-y-4">
                <p className="font-bold italic">Strengthening frontline response to Sexual Exploitation and Abuse, Sexual Harassment and Gender-Based Violence disclosures by Call Center Agents.</p>
                <p>This training is specifically for Call Center Agents of Conditional Cash Transfer Programs (including the Benazir Income Support Program and the MAMTA Program) and helpline staff. It teaches agents to respond to disclosures with sensitivity, safety and professionalism.</p>
                <div className="pt-2">
                    <p>Interested in getting this training for your organization? Please get in touch</p>
                    <p>Our email is: <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] underline">thejugnuproject@gmail.com</a></p>
                </div>
            </div>
        )
    },
    {
        id: 4,
        title: "Understanding Coercive Control",
        content: (
            <div className="space-y-4">
                <p className="font-bold italic">Identifying invisible forms of abuse.</p>
                <p>Coercive control is one of the most dangerous - and the least understood - forms of abuse. This course breaks Coercive Control down so it is easy to understand and identify.</p>
                <p>Participants will learn, among other things:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>What coercive control looks like</li>
                    <li>The tactics most commonly used by abusers</li>
                    <li>Why survivors “don’t just leave”</li>
                    <li>How it impacts survivors (and any children they may have)</li>
                    <li>What early warning signs can be identified</li>
                    <li>What are the proper ways to provide support to survivors who may be experiencing (mostly unseen) coercive control and abuse</li>
                </ul>
                <p>This course is ideal for professionals, social workers, NGOs, community workers, family violence practitioners, lawyers practicing domestic violence and family litigation, HR departments and students, and anyone supporting survivors.</p>
                <div className="pt-2">
                    <p className="font-bold">For individuals: PKR 1500</p>
                    <p className="mt-2">Interested in this training? Please get in touch.</p>
                    <p>Our email is: <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] underline">thejugnuproject@gmail.com</a></p>
                </div>
            </div>
        )
    },
    {
        id: 5,
        title: "Identifying the Types of Narcissists",
        content: (
            <div className="space-y-4">
                <p className="font-bold italic">Understanding narcissistic traits and dynamics to improve safety and boundaries.</p>
                <p>This training helps participants identify the behavioral patterns of narcissists in abusive relationships and learn to differentiate between narcissistic people and people with narcissistic personality disorder.</p>
                <p>Participants will learn, among other things:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>The types of narcissism</li>
                    <li>Common techniques used by narcissists</li>
                    <li>Red flags to look for in (both) relationships and at the workplace</li>
                    <li>The difference between narcissistic personality disorder and people with narcissistic tendencies</li>
                    <li>How narcissistic abuse differs from the typical conflict</li>
                    <li>The techniques that survivors can use to protect boundaries, disengage and / or safely respond in various situations.</li>
                </ul>
                <p>This training is aimed at survivors, counselors, social workers, students, family violence practitioners, lawyers, workplace teams, anyone dealing with a narcissist(s), and individuals who may want to increase their knowledge about this type of abuse.</p>
                <div className="pt-2">
                    <p className="font-bold">For individuals: PKR 1500</p>
                    <p className="mt-2">Interested in this training? Please get in touch.</p>
                    <p>Our email is: <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] underline">thejugnuproject@gmail.com</a></p>
                </div>
            </div>
        )
    },
    {
        id: 6,
        title: "Creating Safe Spaces for Survivors of Domestic Violence and Abuse",
        content: (
            <div className="space-y-4">
                <p className="font-bold italic">Building environments where survivors feel respected, supported and secure.</p>
                <p>This course focuses on providing practical guidelines to workplaces and individuals on how to create safe spaces (or be the safe space) for survivors. Participants will learn:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>What makes a space “safe” for survivors</li>
                    <li>Creating survivor-centered policies</li>
                    <li>Trauma-informed communication</li>
                    <li>How to handle disclosures sensitively and professionally</li>
                    <li>How to prevent re-traumatization</li>
                    <li>How to build systems that respect autonomy and dignity</li>
                </ul>
                <p>This training is aimed at individuals, students, social workers, shelters and NGOs, community centers, women’s groups, workplace teams and HR Teams, educational institutions and organizations.</p>
                <div className="pt-2">
                    <p className="font-bold">For individuals: PKR 1000</p>
                    <p className="mt-2">Interested in this training? Please get in touch.</p>
                    <p>Our email is: <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] underline">thejugnuproject@gmail.com</a></p>
                </div>
            </div>
        )
    },
    {
        id: 7,
        title: "Trauma-informed Care",
        content: (
            <div className="space-y-4">
                <p className="font-bold italic">Responding to survivors with compassion, dignity and care</p>
                <p>This course will go over the global best-practices for anyone working with individuals who may have experienced violence, loss or trauma.</p>
                <p>Participants will learn, among other things:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>What trauma is and how it affects the brain and body</li>
                    <li>The principles of trauma-informed practice</li>
                    <li>Understanding trauma responses and triggers</li>
                    <li>Understanding trauma grounding techniques</li>
                    <li>How to avoid re-traumatization</li>
                    <li>Creating trauma-aware systems and practices</li>
                </ul>
                <p>This course is ideal for counselors, social workers, healthcare professionals, frontline staff, teachers, HR personnel, anyone taking care of a survivor and community leaders.</p>
                <div className="pt-2">
                    <p className="font-bold">For individuals: PKR 1500</p>
                    <p>Interested in getting this training for your organization? Please get in touch</p>
                    <p>Our email is: <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] underline">thejugnuproject@gmail.com</a></p>
                </div>
            </div>
        )
    },
    {
        id: 8,
        title: "Financial Abuse Awareness for Employers and Business Owners",
        content: (
            <div className="space-y-4">
                <p className="font-bold italic">Building workplaces that recognize, prevent and respond to financial abuse</p>
                <p>Financial abuse is one of the most common - yet least understood - forms of violence. It directly affects an individual’s ability to work, earn and remain financially stable. Employers and business owners are uniquely positioned to spot early warning signs of financial abuse, and safely intervene. In this course, participants will gain:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>A strong understanding of the dynamics of financial abuse</li>
                    <li>What financial abuse looks like both inside and outside the workplace</li>
                    <li>Recognize the red flags that may appear at the workplace</li>
                    <li>Learn how abusers misuse employment and financial systems</li>
                    <li>An understanding of how to develop safe and confidential pathways for disclosure</li>
                    <li>A toolkit for safe workplace interventions;</li>
                    <li>Policy templates aligned with best practices</li>
                    <li>An understanding of survivor-centric communication.</li>
                </ul>
                <p>This training is best for business owners, HR managers, finance teams, supervisors and department heads, and workplace safety committees.</p>
                <div className="pt-2">
                    <p>Interested in this training? Get in touch.</p>
                    <p>Our email is: <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] underline">thejugnuproject@gmail.com</a></p>
                </div>
            </div>
        )
    },
    {
        id: 9,
        title: "Legal Literacy Training Packages for Businesses",
        content: (
            <div className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Federal Laws on Domestic Violence, VAWG, GBV, Child Marriage etc.</li>
                    <li>Provincial Laws on Domestic Violence, VAWG, GBV, Child Marriage etc.</li>
                    <li>Laws Understanding Harassment of Women At the Workplace</li>
                    <li>Contract Law</li>
                </ul>
            </div>
        )
    },
    {
        id: 10,
        title: "Survivor-centric practices",
        content: (
            <div className="space-y-4">
                <p className="font-bold underline">(i) for businesses, and (ii) at the workplace</p>
                <p className="font-bold italic">Transform your workplace into a safe, dignified and trauma-informed and responsive environment.</p>
                <p>A survivor-centric workplace places dignity, safety, autonomy and trust at the heart of every policy, interaction and system. It is not just about responding to violence - this is about creating systems that prevent harm and support healing.</p>
                <p>In this course, participants will understand:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>The meaning of survivor-centricity at the workplace</li>
                    <li>How to implement trauma-informed communication systems</li>
                    <li>How to build policies that prioritize respect, confidentiality and safety</li>
                    <li>Integrate survivor-centric approaches in workplace processes, grievance mechanisms and leadership culture</li>
                </ul>
                <p>This certified training is ideal for HR managers, business leaders, and policy makers.</p>
            </div>
        )
    },
    {
        id: 11,
        title: "Specialized Trainings",
        content: (
            <div className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-bold">For judiciary, lawyers and law enforcement personnel:</span> survivor-sensitive law enforcement and court practices</li>
                    <li><span className="font-bold">For teachers, educators and educational institutions:</span> recognizing signs of abuse in children / students; parent-child workshops for healing</li>
                    <li><span className="font-bold">For health workers, hospitals, dental practitioners and clinics:</span> identifying potential survivors / victims of abuse; screening and referral for DV cases.</li>
                </ul>
            </div>
        )
    },
    {
        id: 12,
        title: "Sector-Specific Financial Abuse Training Series",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>For Corporates</li>
                <li>Educational Institutions</li>
                <li>Government & Judiciary</li>
                <li>Healthcare Sector</li>
            </ul>
        )
    },
    {
        id: 13,
        title: "Community Engagement and Grassroot Trainings",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Roundtables and Community Dialogue Workshops</li>
                <li>Awareness Campaign Design</li>
                <li>Trainings for Volunteers and Field Workers</li>
            </ul>
        )
    },
    {
        id: 14,
        title: "Supporting Workplaces",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Supporting Businesses and Workplaces</li>
                <li>Supporting Courtrooms and Judicial Academy(s)</li>
            </ul>
        )
    }
];

export default function TrainingPage() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">

                {/* Intro Section */}
                <section className="space-y-6">
                    <p className="text-base md:text-lg leading-relaxed text-black">
                        At The Jugnu Project, we believe that real change can only happen when both people and institutions are equipped with the knowledge, empathy and tools to prevent and respond to family and gender-based violence effectively. We offer specialized, evidence-based training programs and certified courses, designed to strengthen awareness, improve response skills and promote survivor-centered practices across workplaces, communities and individuals.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Our Training and Professional Development Services help individuals and professionals who are working with survivors build the confidence, compassion, competence and skills needed to prevent and respond to family violence.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Our training sessions are interactive, trauma informed and survivor-centered. They combine family violence theory with real world practice, equipping participants with the tools needed to respond safely and effectively. We customize our training(s) according to the intended audience and the context, workforce and needs of the organization.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        In addition, we work with educational institutions to raise awareness amongst students regarding family violence. We provide certified courses, which includes the latest research, to students and professionals alike to help them get a deeper understanding of family violence.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        We also offer various pathways for professional development for individuals and teams. These are specifically designed to build leadership, emotional intelligence, empathy, gender sensitivity and trauma sensitivity. Our goal is to strengthen the personal and professional growth of those working with family and gender-based violence.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Our Capacity Building Services focus on equipping government departments, organizations and corporations with the structures and skills needed to address domestic and family violence effectively. Lasting change must have strong coordinated systems and not just individual action.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                        Our goal is to help strengthen institutional capacity(s) so that survivors can have easy access to justice, safety and dignity; and be able to live an empowered life.
                    </p>

                    <p className="text-xl font-bold text-[#AC1514] pt-4">
                        Check our certification trainings and courses below:
                    </p>
                </section>

                {/* Accordion Section */}
                <section className="space-y-4">
                    {trainingPrograms.map((program) => (
                        <div
                            key={program.id}
                            className="border border-[#AC1514] rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(program.id)}
                                className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-4">
                                    {/* Number Circle */}
                                    <div className="w-8 h-8 rounded-full  text-black flex items-center justify-center font-normal text-sm flex-shrink-0">
                                        {program.id}:
                                    </div>
                                    {/* Title */}
                                    <h3 className="text-base md:text-lg font-normal ">
                                        {program.title}
                                    </h3>
                                </div>
                                {/* Chevron */}
                                <CircleChevronDown
                                    className={`w-6 h-6 text-[black] transition-transform duration-200 flex-shrink-0 ${openAccordion === program.id ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Accordion Content */}
                            <div
                                style={{
                                    maxHeight: openAccordion === program.id ? '2000px' : '0px',
                                    opacity: openAccordion === program.id ? 1 : 0,
                                }}
                                className="overflow-hidden transition-all duration-300"
                            >
                                <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
                                    <div className="text-sm md:text-base text-black leading-relaxed pl-12">
                                        {program.content}
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

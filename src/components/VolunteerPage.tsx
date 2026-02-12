import Image from "next/image";
'use client'
interface VolunteerPosition {
    title: string;
    overview: string;
    shortDescription: string;
    responsibilities: string[];
    idealFor: string;
    skillsAndQualifications: string[];
    commitment: string[];
    whyVolunteer: string[];
    howToApply: string[];
    promise: string;
}

const volunteerPositions: VolunteerPosition[] = [
    {
        title: "Survivor Support Volunteer",
        overview: "The Survivor Support Volunteer plays a vital role in creating a safe, empathetic and empowering environment for survivors of domestic violence and abuse. This role involves listening without judgement, offering emotional support, and helping survivors connect with essential legal, medical, psychological and other social services.",
        shortDescription: "Volunteers act as compassionate allies for survivors, providing compassionate, confidential support to survivors of domestic and family violence and abuse as they rebuild their lives with safety, dignity and confidence.",
        responsibilities: [
            "Answer helpline chats on the website and provide emotional support.",
            "Provide empathetic and confidential listening to survivors through helplines, drop-in sessions or support groups.",
            "Offer information and referrals to help survivors access appropriate services (shelter, legal aid, counselling, police or welfare).",
            "Assist survivors in completing basic forms or safety plans under staff supervision.",
            "Support caseworkers in follow-ups with clients (such as phone calls with survivors, coordination with service providers, etc).",
            "Help organize well-being or empowerment activities (such as skills workshops, group discussions, dialogue, and awareness events, etc.)",
            "Listen to survivors in a non-judgemental, trauma-informed manner.",
            "Maintain strict confidentiality at all times, and immediately report any safety or ethical concerns to their supervisor.",
            "Treat all survivors with respect, empathy and cultural sensitivity, following trauma-informed care principles."
        ],
        idealFor: "Empathetic listeners and conversationalists, with strong interpersonal skills (on-the-job training will be provided).",
        skillsAndQualifications: [
            "Strong communication and active listening skills",
            "Compassionate, patient and non-judgmental attitude",
            "Ability to maintain confidentiality and strict professional boundaries at all times.",
            "Basic understanding of gender-based violence and survivor rights (on-the-job training will be provided)",
            "Fluency in Urdu and/or local languages. English is a plus.",
            "Previous experience in social work, case work, counselling, psychology, or community service is helpful - but is not required.",
            "(All volunteers receive comprehensive orientation and safety training)"
        ],
        commitment: [
            "Flexible hours: approximately 4-6 hours per week",
            "Minimum commitment: 3-6 months",
            "On-site or hybrid; depending on survivor support needs."
        ],
        whyVolunteer: [
            "Make a direct impact in the lives of individuals / survivors recovering from violence and trauma.",
            "Gain hands-on experience in trauma-informed care and crisis response.",
            "Receive training and supervision from experience caseworkers and psychologists",
            "Be part of a supportive team committed to dignity, empowerment and safety for all."
        ],
        howToApply: [
            "Send your CV along with a short note on why you wish to volunteer to thejugnuproject@gmail.com",
            "Mention \"Survivor Support Volunteer\" in the subject line.",
            "Shortlisted volunteers will be invited for an interview and orientation session."
        ],
        promise: "As a Survivor Support Volunteer, you're not just helping others - you are standing beside them as they rediscover strength, safety and hope. Together, we can build a future free from violence."
    },
    {
        title: "Helpline Crisis & Response Volunteer",
        overview: "The Helpline and Crisis Response Volunteer is often the first point of contact for individuals experiencing domestic violence, abuse or similar crisis situations. The volunteer provides immediate emotional support, ensures safety planning, and connects said survivors to essential services such as shelter, aid, security personnel, medico-legal, psychotherapy, etc.",
        shortDescription: "Survivors can reach out through our helpline / WhatsApp channel. Through calm communication and compassionate listening, volunteers help survivors feel heard, validated and safe.",
        responsibilities: [
            "Respond to and answer calls & messages through the helpline, WhatsApp or other online platforms; using established safety & confidential protocols.",
            "Provide empathetic listening and emotional support to survivors in crisis.",
            "Conduct basic risk and safety assessment under supervision",
            "Offer information for references and other referral services (such as Legal Aid, deep trauma therapy, shelter and transitional housing, etc.)",
            "Record and document call notes according to The Jugnu Project DVRC protocols for prompt follow-up.",
            "Escalate urgent cases immediately to supervisors or crisis response teams.",
            "Follow all confidentiality, safety and ethical guidelines.",
            "Participate in training, debriefing and supervision sessions to be up-to-date with protocols, and to maintain mental health and well-being."
        ],
        idealFor: "Calm and empathetic communicators (on-the-job training provided)",
        skillsAndQualifications: [
            "Excellent listening and communication skills",
            "Ability to stay calm under pressure and to think clearly in crisis situations",
            "Compassionate, patient and non-judgemental attitude towards survivors",
            "Sensitivity to issues of gender, gender-based violence, domestic and family violence, culture and trauma.",
            "Basic literacy in Urdu and English (knowledge of local / regional language(s) is a plus!)",
            "Prior experience in counselling, psychology, or social work is helpful, but not a pre-requisite / required.",
            "(Comprehensive training on trauma-informed crisis response, active listening, and referral systems will be provided)"
        ],
        commitment: [
            "Flexible shifts: 4-6 hours per week (remote or on-site)",
            "Minimum commitment: 3 - 6 months.",
            "All volunteers must attend an initial orientation and crisis-response training before beginning helpline work."
        ],
        whyVolunteer: [
            "Be the first point-of-contact / first voice of safety and reassurance for someone in distress.",
            "Gain valuable experience in crisis intervention and survivor-centric communication.",
            "Receive professional training and supervision from social-workers and psychologists.",
            "Play a vital role in ensuring no survivor faces violence alone."
        ],
        howToApply: [
            "Send your CV, and a short statement of interest to thejugnuproject@gmail.com",
            "Mention \"Helpline Crisis & Response Volunteer\" in the Subject Line.",
            "Selected volunteers will be invited for an interview and training sessions."
        ],
        promise: "As a Helpline Volunteer, your voice can save lives. You will be their calm in the storm - listening, guiding and helping survivors find safety, hope and strength."
    },
    {
        title: "Legal Aid & Advocacy Volunteer",
        overview: "The Legal Aid & Advocacy Volunteer supports survivors of domestic and family violence in understanding and accessing their legal rights and navigating legal procedures. This role combines legal literacy, advocacy and case support, helping survivors navigate systems such as police, courts and protection mechanisms.",
        shortDescription: "Volunteers assist the legal team in ensuring that survivors receive fair treatment, legal protection and justice under Pakistani law.",
        responsibilities: [
            "Provide survivors with basic legal information about their rights under the various laws of Pakistan (Harassment Act, Domestic Violence Acts, Family Laws, etc.)",
            "Assist survivors in preparing documents, such as applications, complaints and protection orders (under supervision)",
            "Assist legal officers with case documentation and follow-ups",
            "Accompany survivors to the police-station, medico-legal center, the courtrooms or mediation center(s), as and when required (where safe).",
            "Support legal awareness sessions and community outreach programs, and help to raise awareness among the general public regarding the laws protecting women and children.",
            "Advocate for survivors' rights in coordination with legal officers and social workers",
            "Maintain confidentiality and uphold ethical standards at all times."
        ],
        idealFor: "Law students, paralegals and / or professionals who are passionate about access to justice.",
        skillsAndQualifications: [
            "Background in law, human rights, or social justice (ideal for students or early career professionals)",
            "Strong understanding of gender-based violence and women's rights frameworks.",
            "Excellent research, drafting and communication skills.",
            "Ability to work empathetically with survivors in sensitive situations.",
            "Fluent in Urdu and/or English (knowledge of local / regional languages is an asset)",
            "Commitment to confidentiality, ethics and survivor-centered advocacy",
            "(Orientation and legal training specific to GBV and domestic violence laws will be provided)"
        ],
        commitment: [
            "6-8 hours per week (on-site or hybrid)",
            "Minimum commitment: 3 months",
            "Must attend initial Legal Aid Volunteer Training and supervision sessions."
        ],
        whyVolunteer: [
            "Gain hands-on legal experience in gender-based violence and human rights cases",
            "Learn how the legal system impacts survivors - and how advocacy can make a difference",
            "Contribute to policy reform, awareness and social change",
            "Be part of a mission that promotes justice, dignity and equality for all survivors."
        ],
        howToApply: [
            "Send your CV and a brief statement of interest to thejugnuproject@gmail.com",
            "Mention \"Legal Aid & Advocacy Volunteer\" in the subject line",
            "Shortlisted candidates will be invited for an interview and training sessions."
        ],
        promise: "As a Legal Aid & Advocacy Volunteer, you will help survivors find their voice in systems that often silence them. Your work will support not only individuals - but the fight for justice and equality for all."
    },
    {
        title: "Social Media Volunteer",
        overview: "The Social Media volunteer helps us raise awareness about domestic violence, survivor empowerment, child marriage and gender equality through creative and impactful online content. They support the Communications Team in building an informed, compassionate and action-oriented online community.",
        shortDescription: "They play a significant role in amplifying survivor voices and promoting our campaigns online (and support on-ground activations).",
        responsibilities: [
            "Develop and schedule engaging social media posts across platforms (YouTube, TikTok, Instagram and Facebook, etc.)",
            "Manage social media content, design campaign posters, and / or edit short videos.",
            "Create and share awareness content related to domestic violence, healthy relationships, consent and community safety.",
            "Assist in designing digital graphics, short videos, and infographics, etc. using CANVA or other similar tools.",
            "Support online campaigns and events, including #16DaysofActivism, Women's Day or Awareness Drives, etc.",
            "Monitor engagements, respond to messages and/or comments respectfully.",
            "Ensure that all content created always upholds survivor confidentiality.",
            "Stay updated with gender justice, GBV and social impact trends to improve storytelling approaches.",
            "Assist with newsletters and success stories (ensuring survivor confidentiality)",
            "Support event coverage and photography"
        ],
        idealFor: "Creative individuals with skills in content writing, graphic design (such as CANVA) and / or digital media. Should have a presence on social media (especially twitter).",
        skillsAndQualifications: [
            "Strong understanding of social media platforms and digital engagement.",
            "Excellent writing and communication skills (English, Urdu, etc.)",
            "Graphic design and video editing experience (is preferred but not required)",
            "Sensitivity to issues of gender-based violence, child marriage, family violence, trauma, and human rights.",
            "Ability to work collaboratively with a team (and third party partners).",
            "Ability to maintain confidentiality at all times.",
            "(Training will be provided on survivor-centric and ethical content practices)"
        ],
        commitment: [
            "Flexible schedule: 4-6 hours per week (remote or hybrid)",
            "Minimum commitment: 1 month / 3 months (renewable)."
        ],
        whyVolunteer: [
            "Gain hands-on experience in social impact communication",
            "Contribute to life-changing awareness and advocacy efforts",
            "Build skills in storytelling, design and campaign strategy",
            "Join a community of passionate advocates promoting safety, dignity, and empowerment."
        ],
        howToApply: [
            "Send your CV, or a short expression of interest, to thejugnuproject@gmail.com",
            "Mention \"Social Media Volunteer\" in the subject line.",
            "Selected volunteers will receive an orientation and training."
        ],
        promise: "As a Social Media Volunteer, you will be a voice for those who cannot speak - helping shift narratives regarding family and gender-based violence, challenge stigma and spread hope."
    },
    {
        title: "Awareness & Community Outreach Volunteer",
        overview: "The Awareness and Community Outreach Volunteer will play a key role in supporting our mission to create safer communities and empower survivors of domestic violence and abuse.",
        shortDescription: "They will help to promote the public's understanding of domestic and family violence, gender equality and prevention and engage with the community at large.",
        responsibilities: [
            "Support the planning and delivery of community awareness sessions, workshops, training and outreach campaigns.",
            "Engage with various stakeholders (communities, schools, corporations, NGOs, etc.) to promote survivors' rights and support services.",
            "Help to organize / lead (both on-ground and digital) campaigns on domestic violence, child marriage, GBV, consent, healthy relationships and legal rights.",
            "Distribute IEC (Information, Education and Communication) materials and advocacy campaign materials.",
            "Assist in organizing awareness events, community dialogues, walks, or advocacy campaigns.",
            "Conduct community dialogue to collect feedback and document community insights.",
            "Collaborate with social workers, counsellors, etc. to connect individuals to appropriate support services.",
            "Represent the DVRC professionally, while maintaining confidentiality and sensitivity."
        ],
        idealFor: "Outgoing individuals with public speaking and/or facilitation skills, who are passionate about social justice, gender equality and community empowerment.",
        skillsAndQualifications: [
            "Passion for women's rights, human rights and community development",
            "Strong communication skills in Urdu and local languages (proficiency in English is a plus).",
            "Ability to work respectfully with diverse groups.",
            "Basic understanding of domestic and family violence, child abuse, animal abuse, gender-based violence.",
            "Dependable, empathetic, and committed to ethical volunteer engagement."
        ],
        commitment: [
            "Orientation and training required before beginning outreach activities.",
            "Ongoing mentorship and supervision provided."
        ],
        whyVolunteer: [
            "Gain hands-on experience in outreach coordination, advocacy and gender-justice work.",
            "Contribute directly to creating safer, more informed communities across Pakistan.",
            "Opportunities for leadership roles and future employment within the Center's programs."
        ],
        howToApply: [
            "Send your CV and a brief statement of interest to thejugnuproject@gmail.com",
            "Mention \"Awareness & Community Outreach Volunteer\" in the subject line."
        ],
        promise: "As an Awareness and Outreach Volunteer, you will help bridge the gap between survivors and the support they need, building a more informed and safer society."
    },
    {
        title: "Research & Policy Volunteer",
        overview: "The Research and Policy Volunteer will support our efforts to strengthen evidence-based research and advocacy initiatives, policy reform and improved service delivery addressing domestic violence across Pakistan.",
        shortDescription: "The volunteer will assist in collecting data, analyzing existing laws and policies, and contributing to research publications and advocacy material.",
        responsibilities: [
            "Conduct desk and field research on laws, policies and government frameworks relevant to GBV, DV, Harassment, etc.",
            "Review and summarize laws, policies and government frameworks relevant to domestic violence prevention.",
            "Create comparisons of national and international laws to find lacunas in Pakistan's legal landscape.",
            "Assist in developing and drafting policy briefs, reports, proposals and position papers.",
            "Stay updated on national and international developments in domestic violence legislations.",
            "Conduct research on statistics and global practices.",
            "Collect and organize qualitative and quantitative data from interviews or community assessments.",
            "Support the preparation of grant proposals and donor reports through data analysis.",
            "Provide support in evaluation of programs and data collection.",
            "Collaborate with advocacy and outreach teams to ensure research findings inform efforts."
        ],
        idealFor: "Students or graduates in law, gender studies, or social sciences.",
        skillsAndQualifications: [
            "Background or studied in law, social science, gender studies, public policy or development studies.",
            "Strong research, writing and analytical skills",
            "Familiarity with Pakistan's legal and policy landscape related to gender-based violence (preferred).",
            "Proficiency in English and Urdu. Ability to interpret academic or legal documents required.",
            "Attention to detail, professionalism and commitment to confidentiality.",
            "Ability to work independently and to meet deadlines."
        ],
        commitment: [
            "Orientation provided on GBV frameworks, gender-sensitive research ethics and policy analysis methods."
        ],
        whyVolunteer: [
            "Opportunity to contribute to policy advocacy and legal reform on domestic violence in Pakistan.",
            "Gain practical experience in research design, policy analysis and advocacy documentation.",
            "Develop professional writing and analytical skills under expert supervision.",
            "Possibility of future engagement in paid research/consultancy projects."
        ],
        howToApply: [
            "Send your CV and a brief statement of interest to thejugnuproject@gmail.com",
            "Mention \"Research & Policy Volunteer\" in the subject line."
        ],
        promise: "Your research will help shape the policies and laws that protect survivors and ensure justice for all."
    },
    {
        title: "Resource Creation Volunteer",
        overview: "Supports the team in creating educational materials and resources for survivors.",
        shortDescription: "Help design and develop materials that empower survivors with knowledge and resources.",
        responsibilities: [
            "Develop content for brochures, posters, and digital resources.",
            "Collaborate with the design team to create visually engaging materials.",
            "Ensure all materials are survivor-centric and culturally sensitive."
        ],
        idealFor: "Creative content creators and designers interested in social impact.",
        skillsAndQualifications: [
            "Strong writing or design skills.",
            "Ability to simplify complex information for a general audience.",
            "Sensitivity to survivor needs and cultural nuances."
        ],
        commitment: ["Flexible 4-6 hours per week."],
        whyVolunteer: [
            "Help translate complex legal and survival information into accessible tools.",
            "Be part of a creative team making a tangible difference."
        ],
        howToApply: ["Send your CV to thejugnuproject@gmail.com with 'Resource Creation Volunteer' in the subject line."],
        promise: "Your creativity will provide survivors with the knowledge they need to reclaim their lives."
    },
    {
        title: "Translation & Language Support Volunteer",
        overview: "Assist with translation and interpretation of resources and other materials for survivors - from English to local and regional languages.",
        shortDescription: "Help break language barriers and ensure every survivor can access the help they need in their own language.",
        responsibilities: [
            "Translate resources, forms, awareness material, IEC materials, and training content.",
            "Support case workers during client meets with translations and interpretations, where language barriers exist."
        ],
        idealFor: "Bilingual / Multilingual volunteers with sensitivity to cultural and linguistic delivery.",
        skillsAndQualifications: [
            "Fluency in English and at least one local/regional language (Urdu, Sindhi, Punjabi, Pashto, etc.)",
            "Strong translation skills with attention to nuanced meanings.",
            "Ability to maintain strict confidentiality during interpretations."
        ],
        commitment: ["Flexible, as needed basis (remote or on-site)."],
        whyVolunteer: [
            "Directly assist survivors who would otherwise be unable to communicate their needs.",
            "Ensure that services are truly inclusive and accessible to all."
        ],
        howToApply: ["Send your CV to thejugnuproject@gmail.com with 'Translation & Language Support Volunteer' in the subject line."],
        promise: "Your voice will ensure that no survivor is left behind because of a language barrier."
    },
    {
        title: "Fundraising & Events Volunteer",
        overview: "Support our sustainability through creative fundraising and community engagement.",
        shortDescription: "Help us raise the resources needed to continue our life-saving work through creative events and donor outreach.",
        responsibilities: [
            "Plan awareness walks, activation events, donation drives, charity events, or fundraising bakesales etc.",
            "Help connect with sponsors, donors, and community partners.",
            "Assist in donor communication and reporting."
        ],
        idealFor: "Organized, outgoing volunteers who enjoy event planning and networking.",
        skillsAndQualifications: [
            "Strong organizational and networking skills.",
            "Creativity in planning events and fundraising campaigns.",
            "Excellent communication and persuasive skills."
        ],
        commitment: ["Project-based or 4-6 hours per week."],
        whyVolunteer: [
            "Help secure the future of The Jugnu Project's mission.",
            "Gain experience in event management and non-profit fundraising."
        ],
        howToApply: ["Send your CV to thejugnuproject@gmail.com with 'Fundraising & Events Volunteer' in the subject line."],
        promise: "Every rupee you help raise directly supports a survivor on their journey to safety."
    },
    {
        title: "Administrative & Data Support Volunteer",
        overview: "Strengthen our internal systems for efficient service delivery.",
        shortDescription: "Keep our operations running smoothly so that our front-line team can focus on supporting survivors.",
        responsibilities: [
            "Help manage data entry, filing and record keeping.",
            "Assist with scheduling and logistics for programs.",
            "Support staff in daily operational tasks."
        ],
        idealFor: "Detail-oriented individuals with basic computer and organizational skills.",
        skillsAndQualifications: [
            "Proficiency in basic office software (Excel, Word).",
            "Attention to detail and strong organizational skills.",
            "Ability to maintain confidentiality of sensitive data."
        ],
        commitment: ["4-6 hours per week (on-site preferred)."],
        whyVolunteer: [
            "Gain experience in non-profit operations and data management.",
            "Play a crucial role behind the scenes in ensuring efficient service delivery."
        ],
        howToApply: ["Send your CV to thejugnuproject@gmail.com with 'Administrative & Data Support Volunteer' in the subject line."],
        promise: "Your efficiency ensures that our services reach survivors without delay."
    },
    {
        title: "Skills Development / Capacity Building and Facilitation Volunteer",
        overview: "Conduct workshops that build confidence and economic independence for survivors; while also provide training for capacity building of field workers, etc.",
        shortDescription: "Empower survivors with the skills they need to become economically independent and confident.",
        responsibilities: [
            "Teach soft or vocational skills (e.g. sewing, computer literacy, entrepreneurship, etc.)",
            "Provide mentoring and motivational sessions."
        ],
        idealFor: "Trainers, entrepreneurs or professionals with teaching experience.",
        skillsAndQualifications: [
            "Expertise in a relevant vocational or soft skill.",
            "Excellent teaching and facilitation abilities.",
            "Patience and empathy when working with survivors."
        ],
        commitment: ["Project-based workshops (flexible)."],
        whyVolunteer: [
            "Directly contribute to a survivor's long-term independence.",
            "Share your expertise to empower others."
        ],
        howToApply: ["Send your CV to thejugnuproject@gmail.com with 'Skills Development Volunteer' in the subject line."],
        promise: "The skills you teach today will be the foundation of a survivor's new life."
    },
    {
        title: "Youth Ambassador Program",
        overview: "Engage young people (in schools, colleges and universities) to promote respectful relationships and gender equality.",
        shortDescription: "Be a leader among your peers and advocate for a future free from violence and inequality.",
        responsibilities: [
            "Conduct peer education sessions in schools, colleges and universities.",
            "Organize youth-led events and fundraising drives.",
            "Serve as advocates for positive social change."
        ],
        idealFor: "Students and young professionals passionate about activism.",
        skillsAndQualifications: [
            "Strong leadership and presentation skills.",
            "Passion for social justice and gender equality.",
            "Ability to engage and inspire other young people."
        ],
        commitment: ["Ongoing commitment for the academic year."],
        whyVolunteer: [
            "Build your leadership and advocacy skills.",
            "Be part of a national movement of young change-makers."
        ],
        howToApply: ["Send your CV to thejugnuproject@gmail.com with 'Youth Ambassador' in the subject line."],
        promise: "As a Youth Ambassador, you are the voice of the next generation, building a Pakistan where everyone is safe and respected."
    }
];

import { useState } from "react";

export default function VolunteerPage() {
    const [selectedPosition, setSelectedPosition] = useState<VolunteerPosition | null>(null);

    return (
        <div className="bg-white min-h-screen relative">
            {/* Header Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-16">
                <div className="space-y-6">
                    <h1 className="md:text-[24px] font-normal text-black leading-relaxed">
                        Our volunteers are at <span className="text-[#AC1514] font-medium italic">the heart of our mission</span> - helping us create a community where each individual can live a life of <span className="text-[#AC1514] font-medium">safety, dignity, empowerment and respect</span>
                    </h1>

                    <p className="md:text-[24px] font-normal text-black leading-relaxed">
                        Whether you have just a few hours per week, or can commit to working with us long-term, your skills and compassion can make <span className="text-[#AC1514] font-medium italic">a life-changing difference for survivors across Pakistan;</span> and in the Desi community across the world.
                    </p>
                    <p className="md:text-[24px] font-normal text-black leading-relaxed">
                        All volunteers will receive a certificate and a reference letter upon completion of their tenure.
                    </p>
                </div>
            </section>

            {/* Volunteer Positions */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
                <div className="space-y-12">
                    {volunteerPositions.map((position, index) => (
                        <div key={index} className="bg-white border-b border-gray-100 pb-12 last:border-0">
                            {/* Title and Button Row */}
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-[32px] md:text-[40px] underline font-bold text-[#AC1514] flex-1 pr-8 leading-tight">
                                    {position.title}
                                </h2>
                                <button
                                    onClick={() => setSelectedPosition(position)}
                                    className="bg-[#AC1514] rounded-[8px] text-white px-8 py-3 text-sm md:text-base font-bold hover:bg-[#8B0E0D] transition-all whitespace-nowrap shadow-md"
                                >
                                    READ MORE
                                </button>
                            </div>

                            {/* Overview */}
                            <div className="mb-6">
                                <p className="text-[20px] md:text-[24px] text-black leading-relaxed">
                                    <span className="font-bold text-[#AC1514] underline">Role Overview:</span> {position.overview}
                                </p>
                            </div>

                            {/* Short Description */}
                            <div>
                                <p className="text-[20px] md:text-[24px] text-black leading-relaxed">
                                    {position.shortDescription}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            {selectedPosition && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-8 overflow-y-auto"
                    onClick={() => setSelectedPosition(null)}
                >
                    <div
                        className="w-full max-w-4xl min-h-[80vh] rounded-[20px] shadow-2xl relative p-8 md:p-12 overflow-y-auto max-h-[90vh]"
                        style={{ background: 'linear-gradient(108.29deg, #FFFFFF -50%, #FF0000 40%)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedPosition(null)}
                            className="absolute top-6 left-6 text-white hover:opacity-70 transition-opacity"
                        >
                            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>
                        </button>

                        <div className="mt-8 space-y-10 text-white pb-8">
                            {/* Responsibilities */}
                            <div>
                                <h3 className="text-2xl font-bold underline mb-4">Responsibilities:</h3>
                                <ul className="space-y-4 list-none">
                                    {selectedPosition.responsibilities.map((item, i) => (
                                        <li key={i} className="text-lg md:text-xl flex gap-3">
                                            <span className="font-bold">-</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Ideal For */}
                            <div>
                                <p className="text-lg md:text-xl">
                                    <span className="font-bold italic">Ideal for:</span> {selectedPosition.idealFor}
                                </p>
                            </div>

                            {/* Skills and Qualifications */}
                            <div>
                                <h3 className="text-2xl font-bold underline mb-4">Skills And Qualifications:</h3>
                                <ul className="space-y-4 list-none">
                                    {selectedPosition.skillsAndQualifications.map((item, i) => (
                                        <li key={i} className="text-lg md:text-xl flex gap-3">
                                            <span className="font-bold">-</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Commitment */}
                            <div>
                                <h3 className="text-2xl font-bold underline mb-4">Commitment:</h3>
                                <ul className="space-y-4 list-none">
                                    {selectedPosition.commitment.map((item, i) => (
                                        <li key={i} className="text-lg md:text-xl flex gap-3">
                                            <span className="font-bold">-</span>
                                            <span className="underline">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Why Volunteer With Us? */}
                            <div>
                                <h3 className="text-2xl font-bold underline mb-4">Why Volunteer With Us?</h3>
                                <ul className="space-y-4 list-none">
                                    {selectedPosition.whyVolunteer.map((item, i) => (
                                        <li key={i} className="text-lg md:text-xl flex gap-3">
                                            <span className="font-bold">-</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* How To Apply */}
                            <div>
                                <h3 className="text-2xl font-bold underline mb-4">How To Apply</h3>
                                <ul className="space-y-4 list-none">
                                    {selectedPosition.howToApply.map((item, i) => (
                                        <li key={i} className="text-lg md:text-xl flex gap-3">
                                            <span className="font-bold">-</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Our Promise */}
                            <div className="pt-6 border-t border-white/20">
                                <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                                <p className="text-lg md:text-xl italic font-medium leading-relaxed">
                                    {selectedPosition.promise}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

import Image from "next/image";

interface VolunteerPosition {
    title: string;
    overview: string;
    description: string;
}

const volunteerPositions: VolunteerPosition[] = [
    {
        title: "Survivor Support Volunteer",
        overview: "The Survivor Support Volunteer (SSV) is that face to country A safe, Supportive and Empowering Environment for Survivors of Domestic Violence and Abuse in Pakistan. Ensuring the Safety and Well-Being of Survivors While Providing Them with the Necessary Tools and Resources to Rebuild Their Lives.",
        description: "Role Description: The Survivor Support Volunteer (SSV) will work closely with the Jugnu Project team to provide direct support to survivors of domestic and family violence and abuse as they rebuild their lives. SSV's help identify, respond and coordinate."
    },
    {
        title: "Helpline Crisis & Response Volunteer",
        overview: "The Helpline Crisis and Crisis Response Volunteer is Where The First Step of Course For Individuals Experiencing Domestic Violence and Abuse in Pakistan. Providing Immediate Support, Empathy and Guidance to Those in Need, While Connecting Them to the Appropriate Resources and Services for Sustained Assistance both in Sindhi, and, Socially Informed, Medico- Legal/ Psychotherapy, Etc.",
        description: "Role Description: The Helpline Crisis and Crisis Response Volunteer is Where The First Step of Course For Individuals Experiencing Domestic Violence and Abuse in Pakistan. Providing Immediate Support, Empathy and Guidance to Those in Need, While Connecting Them to the Appropriate Resources and Services for Sustained Assistance both in Sindhi, and, Socially Informed, Medico- Legal/ Psychotherapy, Etc."
    },
    {
        title: "Legal Aid & Advocacy Volunteer",
        overview: "The Legal Aid & Advocacy Volunteer (LAAV) supports Survivors Of domestic And Family Violence in Understanding And Navigating the Legal System in Pakistan. This Role Involves Providing Legal Information, Assistance with Legal Documentation, and Advocacy to Ensure That Survivors Know Their Rights and Have Access to Justice.",
        description: "Role Description: The Legal Aid & Advocacy Volunteer (LAAV) supports Survivors Of domestic And Family Violence in Understanding And Navigating the Legal System in Pakistan. This Role Involves Providing Legal Information, Assistance with Legal Documentation, and Advocacy to Ensure That Survivors Know Their Rights and Have Access to Justice. Volunteers Assist The Legal Team In Ensuring That Survivors Receive Fair Treatment, Legal Protection and Justice Under Proposed."
    },
    {
        title: "Helpline Crisis & Response Volunteer",
        overview: "The Helpline Crisis and Crisis Response Volunteer is Where The First Step of Course For Individuals Experiencing Domestic Violence and Abuse in Pakistan. Providing Immediate Support, Empathy and Guidance to Those in Need, While Connecting Them to the Appropriate Resources and Services for Sustained Assistance both in Sindhi, and, Socially Informed, Medico- Legal/ Psychotherapy, Etc.",
        description: "Role Description: The Helpline Crisis and Crisis Response Volunteer is Where The First Step of Course For Individuals Experiencing Domestic Violence and Abuse in Pakistan. Providing Immediate Support, Empathy and Guidance to Those in Need, While Connecting Them to the Appropriate Resources and Services for Sustained Assistance both in Sindhi, and, Socially Informed, Medico- Legal/ Psychotherapy, Etc."
    },
    {
        title: "Social Media Volunteer",
        overview: "The Social Media Volunteer helps to Raise Awareness About Domestic Violence, Survivor Empowerment, and The Jugnu Project's Mission Through Engaging and Impactful Social Media Content. This Role is Ideal for Individuals Passionate About Social Justice, Digital Advocacy, and Creative Storytelling.",
        description: "Role Description: The Social Media Volunteer helps to Raise Awareness About Domestic Violence, Survivor Empowerment, and The Jugnu Project's Mission Through Engaging and Impactful Social Media Content. This Role is Ideal for Individuals Passionate About Social Justice, Digital Advocacy, and Creative Storytelling. Volunteers will work closely with the Communications and Action- Oriented Efforts (Generally, How Shelter The Space Project's Sphere Of Utility, Dignity and Empowerment)."
    },
    {
        title: "Research & Policy Volunteer",
        overview: "The Research and Policy Volunteer (RPV) Supports Dr Efforts To Strengthen Evidence-Based Research and Advocacy Related to Domestic Violence and Abuse in Pakistan. This Role Involves Collecting Relevant Research-based Information, Analyzing Data, and Contributing to Policy Development and Advocacy Initiatives.",
        description: "Role Description: The Research and Policy Volunteer (RPV) Supports Dr Efforts To Strengthen Evidence-Based Research and Advocacy Related to Domestic Violence and Abuse in Pakistan. This Role Involves Collecting Relevant Research-based Information, Analyzing Data, and Contributing to Policy Development and Advocacy Initiatives."
    },
    {
        title: "Resource Creation Volunteer",
        overview: "The Research and Policy Volunteer (RPV) Supports Dr Efforts To Strengthen Evidence-Based Research and Advocacy Related to Domestic Violence and Abuse in Pakistan. This Role Involves Collecting Relevant Research-based Information, Analyzing Data, and Contributing to Policy Development and Advocacy Initiatives.",
        description: "Role Description: The Research and Policy Volunteer (RPV) Supports Dr Efforts To Strengthen Evidence-Based Research and Advocacy Related to Domestic Violence and Abuse in Pakistan. This Role Involves Collecting Relevant Research-based Information, Analyzing Data, and Contributing to Policy Development and Advocacy Initiatives."
    },
    {
        title: "Translation & Language Support Volunteer",
        overview: "The Translation and Language Support Volunteer is Essential to Make Materials And Resources – Free Jugnu to Urdu And Sindhi (Particularly Sindhi) – Accessible to a Wider Audience.",
        description: "Role Description: The Translation and Language Support Volunteer is Essential to Make Materials And Resources – Free Jugnu to Urdu And Sindhi (Particularly Sindhi) – Accessible to a Wider Audience."
    },
    {
        title: "Fundraising & Events Volunteer",
        overview: "The Fundraising and Events Volunteer Supports The Jugnu Project Through Fundraising and Community Engagement.",
        description: "Role Description: The Fundraising and Events Volunteer Supports The Jugnu Project Through Fundraising and Community Engagement."
    },
    {
        title: "Administrative & Data Support Volunteer",
        overview: "Role Description: Strengthen the Internal Systems For Efficient Service Delivery.",
        description: "Role Description: Strengthen the Internal Systems For Efficient Service Delivery."
    },
    {
        title: "Skills Development / Capacity Building And Certification Volunteer",
        overview: "Role Description: Helping Survivors Gain New Confidence and Livelihood Capabilities For Survivor, Allies and, Frontline Training (i.e Lawyers, Judges, Police, Etc.).",
        description: "Role Description: Helping Survivors Gain New Confidence and Livelihood Capabilities For Survivor, Allies and, Frontline Training (i.e Lawyers, Judges, Police, Etc.)."
    },
    {
        title: "Youth Ambassador Program",
        overview: "Role Description: Engage Young People (ie schools, College And Universities) To Promote Advocacy, Ambassadorship and Gender Equality.",
        description: "Role Description: Engage Young People (ie schools, College And Universities) To Promote Advocacy, Ambassadorship and Gender Equality."
    }
];

export default function VolunteerPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-16">
                <div className="space-y-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-black">
                        Our Volunteers Go the The Heartbeat Of Our Mission - Helping To Create A Community Where Each Individual Can Live A Life Of Safety, Dignity And Independence.
                    </h1>

                    <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                        Whether You Have a Love For Advocacy Work, Or Are Trained In Particular Skills (i.e legal, media, data skills) And Language And Prefer Hands-On Support, There Is a Place For You At The Jugnu Project. Together, We Can Make A Difference Across The World.
                    </p>
                </div>
            </section>

            {/* Volunteer Positions */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
                <div className="space-y-8">
                    {volunteerPositions.map((position, index) => (
                        <div
                            key={index}
                            className="border-t-4 border bg-white shadow-sm p-6 md:p-8"
                        >
                            {/* Title and Button Row */}
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-lg md:text-xl font-bold text-black flex-1 pr-4">
                                    {position.title}
                                </h2>
                                <button className="bg-[#8B0000] text-white px-6 py-2 text-xs md:text-sm font-semibold hover:bg-[#6B0000] transition-all whitespace-nowrap">
                                    VOLUNTEER
                                </button>
                            </div>

                            {/* Overview */}
                            <div className="mb-4">
                                <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                                    <span className="font-semibold">Role Overview: </span>
                                    {position.overview}
                                </p>
                            </div>

                            {/* Description */}
                            <div>
                                <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                                    {position.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

import Link from "next/link";

const services = [
    {
        title: "Organizational And Policy Consultancy",
        description: "We Help Organizations Design, Implement And Evaluate Programs That Prevent And Respond To Domestic And Gender-Based Violence"
    },
    {
        title: "Institutional Capacity Assessments",
        description: "We Help Strengthen Institutional Systems To Ensure Their Practices And Culture Are Survivor-Centered And Inclusive"
    },
    {
        title: "Financial Abuse Consultancy Services",
        description: "We Work With Private Sector Organizations, Corporations And Financial Institutions To Help Them Create Frameworks, Resources And Policy Lines That Ensure Survivor Safety."
    },
    {
        title: "Creating Survivor-Centric Safety Systems",
        description: ""
    },
    {
        title: "Women's Economic Empowerment",
        description: ""
    },
    {
        title: "Workplace Safety And Harassment Prevention",
        description: "We Help Major Employers Align Their Policies With Current Applicable Labor Laws, Such As The Protection Against Harassment Of Women At The Workplace Act 2010, And Foster A Culture Of Safety And Respect."
    },
    {
        title: "Research & Knowledge Development Services",
        description: "We Conduct Applied Data To Generate Data And Insights That Inform Evidence-Based Advocacy And Programming."
    }
];

export default function ConsultancyPage() {
    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">

                {/* Intro Section */}
                <section className="space-y-6">
                    <p className="text-base md:text-lg leading-relaxed text-black">
                        At The Jugnu Project, We Offer Specialized Consultancy Services To Help Organizations, Institutions And Communities Build Safe And More Equitable Environments.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-black">
                        Our Expertise Combines Gender-Based Violence (GBV) Prevention And Response, Policy Reform And Capacity Building With A Deep Understanding Of Local And International Human Rights Frameworks. We Work With Governmental Departments And Agencies, NGOs, Corporates, Small Businesses, Civil Society Organizations And Community Programs To Strengthen Their Systems, Improve Survivor-Centered Responses, And Promote Accountability.
                    </p>
                </section>

                {/* Services List */}
                <section className="space-y-8">
                    {services.map((service, index) => (
                        <div key={index} className="border-b border-gray-200 pb-8">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#AC1514] underline decoration-1 underline-offset-4">
                                        {service.title}
                                    </h3>
                                    {service.description && (
                                        <p className="text-sm md:text-base leading-relaxed text-black max-w-3xl">
                                            {service.description}
                                        </p>
                                    )}
                                </div>
                                <div className="flex-shrink-0">
                                    <button className="bg-[#AC1514] text-white px-6 py-2.5 rounded text-sm font-bold tracking-wide hover:bg-red-800 transition-colors">
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Partner With Us Section */}
                <section className="space-y-6 pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Partner <span className="text-[#AC1514] underline decoration-1 underline-offset-4">With Us</span>
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-black">
                        If Your Organization Is Committed To Strengthening Gender Equality And Creating A Safer Workplace Environment, Improving Employee Protections And / Or Enhancing Survivor Support, The Jugnu Project Consultancy Can Help.
                    </p>
                    <p className="text-base md:text-lg">
                        Contact Us: <Link href="mailto:Thejugnuproject@Gmail.Com" className="text-[#AC1514] font-bold underline hover:no-underline">Thejugnuproject@Gmail.Com</Link>
                    </p>
                </section>

            </div>
        </main>
    );
}

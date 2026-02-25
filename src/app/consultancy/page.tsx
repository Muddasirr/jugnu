"use client";

import { useState } from "react";
import { CircleArrowLeft } from "lucide-react";

type Service = {
    title: string;
    description: string;
    modalTitle?: string;
    modalContent?: React.ReactNode;
};

const services: Service[] = [
    {
        title: "Organizational And Policy Consultancy",
        description: "We help organizations design, implement and evaluate programs that prevent and respond to domestic and gender-based violence. This could include legal compliance and the safety of your employees, both within the workplace and outside of it.",
        modalTitle: "We Provide:",
        modalContent: (
            <div className="space-y-4 font-bold">
                <p>- How Domestic-Abuse-Informed Is Your Practice?</p>
                <p>- Risk assessments and safeguarding audits</p>
                <p>- Survivor-Centric Workplace Policies</p>
                <p>- Gender-Sensitive Policy Design</p>
                <p>- Program development and staff training</p>
                <p>- Monitoring and evaluation frameworks</p>
                <p>- Legal and Compliance Advisory</p>
            </div>
        )
    },
    {
        title: "Institutional Capacity Assessments",
        description: "We help strengthen institutional systems to ensure their practices and culture are survivor centered and inclusive.",
        modalTitle: "Our institutional assessment and audit services include:",
        modalContent: (
            <div className="space-y-4 font-bold">
                <p>- Gender-Sensitive Audits</p>
                <p>- Gender-Audit of HR Policies and Workplace Practices</p>
                <p>- Development of codes of conduct and safeguarding policies</p>
                <p>- Leadership and staff training on trauma-informed practices</p>
                <p>- Service Delivery Gap Analysis</p>
                <p>- Risk and Safeguarding Frameworks</p>
                <p>- Designing Internal Reporting and Referral mechanisms</p>
            </div>
        )
    },
    {
        title: "Financial Abuse Consultancy Services",
        description: "We work with private sector organizations, corporations and financial institutions to help them create frameworks, resources and product lines that ensure survivor safety.",
        modalTitle: "Our service menu for financial abuse consultancy includes:",
        modalContent: (
            <div className="space-y-4">
                <div className="font-bold space-y-2">
                    <p>- Organizational Risk and Readiness Assessment</p>
                    <p>- Review of organizational policies, procedures and financial practices for risk of financial abuse</p>
                    <p>- Identification of current structural vulnerabilities and barriers to survivor safety</p>
                    <p>- Written findings with prioritized, actionable recommendations</p>
                    <p>- Financial Abuse Screening Checklists</p>
                    <p>- Embedding Financial Abuse Risk Assessments into HR and Community Outreach Programs</p>
                    <p>- Risk Audits for Financial Abuse</p>
                </div>
                <div className="pt-4 border-t border-white/30">
                    <p className="font-bold mb-2 underline">Survivor-Centric Response Framework Design</p>
                    <p>- Develop safe disclosure and response pathways</p>
                    <p>- Develop confidential referral and coordination models</p>
                    <p>- Create accountability structures</p>
                    <p>- Financial abuse policy and protocol development</p>
                    <p className="mt-2 italic">Deliverables: (1) Response framework and (2) referral guides</p>
                </div>
                <div className="pt-4 border-t border-white/30">
                    <p className="font-bold mb-2 underline">Banking and Financial Institutions</p>
                    <p>- Survivor-Sensitive Banking Practices</p>
                </div>
            </div>
        )
    },
    {
        title: "Creating Survivor-Centric Safety Systems",
        description: "The Jugnu Project helps organizations design and implement policies, practices, and structures that prioritize survivor safety, dignity, and choice. Grounded in trauma-informed and equity-driven approaches, the program supports institutions in preventing harm, responding effectively, and fostering accountability.",
        modalTitle: "Our services include:",
        modalContent: (
            <div className="space-y-4 font-bold">
                <p>- Policy and Protocol Development for Employees</p>
                <p>- Referral Pathway Design</p>
                <p>- Confidentiality and Data-Protection Policies for Survivors (and related sensitive information)</p>
                <p>- Strategies for Employers to Protect their Employees from Family Violence</p>
                <p>- Stakeholder Mapping for NGOs and Community Organizations</p>
                <p>- Equity and Inclusion Consulting</p>
                <p>- Survivor Support and Resources</p>
            </div>
        )
    },
    {
        title: "Women’s Economic Empowerment",
        description: "We aim to strengthen survivor safety and long-term stability by addressing the economic inequities that increase vulnerability to violence. Through strategic partnerships with organizations, The Jugnu Project advances survivor-informed approaches that expand access to sustainable employment, financial capability, and equitable workplace practices.",
        modalTitle: "Our service menu includes:",
        modalContent: (
            <div className="space-y-4 font-bold">
                <p>- CV/ Resume Writing Services</p>
                <p>- Business Development Support</p>
                <p>- Legal Structuring for Businesses</p>
                <p>- Organizational Assessment and Strategy Development</p>
                <p>- Ideation and Feasibility Reports</p>
                <p>- Financial Independence and Literacy Coaching</p>
                <p>- Survivor-Centric Economic Planning (for Employers and Employees)</p>
                <p>- Equity and Inclusion Consulting for Businesses</p>
                <p>- Mentorship and Coaching</p>
                <p>- Linking Women Entrepreneurs with Professional Mentors</p>
                <p>- Leadership Development Workshops for Women Entrepreneurs</p>
            </div>
        )
    },
    {
        title: "Workplace Safety And Harassment Prevention",
        description: "We help make workplaces align their policies with current applicable labor laws, such as the Protection Against Harassment of Women at the Workplace Act (2010 & 2022); and foster a culture of dignity and respect. Grounded in survivor-informed and trauma-responsive practices, The Jugnu Project partners with employers to strengthen policies, reporting systems, training, and leadership accountability.",
        modalTitle: "Our team can assist with:",
        modalContent: (
            <div className="space-y-4 font-bold">
                <p>- Policy formulation and implementation</p>
                <p>- Employee sensitization workshop</p>
                <p>- Complaint committee and grievance redressal mechanism setup</p>
                <p>- Capacity Building and Gender-Sensitization workshops</p>
                <p>- Employee training for Workplace Harassment Laws</p>
                <p>- Employee training for essential Labour Laws</p>
                <p>- Employee training for Laws Regarding Violence Against Women and the Domestic Violence Act(s)</p>
            </div>
        )
    },
    {
        title: "Research & Knowledge Development Services",
        description: "Our services strengthen institutional and community responses to violence by generating, translating, and applying survivor-informed evidence. Through collaborative research partnerships, data analysis, and knowledge mobilization, The Jugnu Project supports organizations in understanding risk, impact, and effective prevention and response strategies.",
        modalTitle: "Our services include:",
        modalContent: (
            <div className="space-y-4 font-bold">
                <p>- Qualitative and quantitative GBV research</p>
                <p>- Participatory research with survivors and communities</p>
                <p>- Policy Briefs, case studies and impact assessments on DV and GBV</p>
                <p>- Developing Toolkits and Handbooks</p>
                <p>- Designing Impact Assessment Frameworks for Survivor-Support Interventions</p>
                <p>- Knowledge translation for practitioners and policymakers</p>
            </div>
        )
    }
];

export default function ConsultancyPage() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    return (
        <main className="w-full bg-white text-black py-12 md:py-16 relative">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">

                {/* Intro Section */}
                <section className="space-y-6">
                    <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                        At The Jugnu Project, we offer specialized consultancy services to help organizations, institutions and communities build safe and more equitable environments.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                        Our expertise combines gender-based violence (GBV) prevention and response, policy reform and capacity building with a deep understanding of local and international human rights frameworks.
                        We work with governmental departments and agencies, NGOs, corporates, small businesses, civil society organizations and community programs to strengthen their systems, improve survivor-centered responses, and promote accountability.
                    </p>
                </section>

                {/* Services List */}
                <section className="space-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="border-b border-gray-200 pb-12 last:border-0 relative">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#AC1514] underline decoration-1 underline-offset-8 decoration-[#AC1514]">
                                        {service.title}
                                    </h3>
                                    <button
                                        onClick={() => setSelectedService(service)}
                                        className="bg-[#AC1514] text-white px-6 py-2 rounded-sm text-[12px] font-bold tracking-wide hover:bg-black transition-colors flex-shrink-0"
                                    >
                                        READ MORE
                                    </button>
                                </div>
                                <p className="text-lg md:text-lg leading-relaxed text-black text-justify pr-0 md:pr-32">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Partner With Us Section */}
                <section className="space-y-6 pt-8 border-t border-black">
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-4xl font-bold mb-5"> Partner <span className="text-[#AC1514]">With Us</span></h2>
                        <p className="text-lg md:text-lg leading-relaxed text-justify">
                            If your organization is committed to strengthening gender equality and creating a safer workplace environment, improving employee protections and / or enhancing survivor support, The Jugnu Project Consultancy can help.
                        </p>
                        <p className="text-lg md:text-lg font-bold">
                            Contact Us: <a href="mailto:thejugnuproject@gmail.com" className="hover:underline text-[#AC1514]">thejugnuproject@gmail.com</a>
                        </p>
                    </div>
                </section>

            </div>

            {/* Modal Overlay */}
            {selectedService && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    {/* Modal Content */}
                    <div className="bg-[#AC1514] text-white w-full max-w-2xl rounded-lg shadow-2xl relative flex flex-col max-h-[90vh]">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 left-4 z-10 hover:opacity-80 transition-opacity text-white"
                        >
                            <CircleArrowLeft size={32} />
                        </button>

                        <div className="p-8 md:p-12 overflow-y-auto">
                            {selectedService.modalTitle && (
                                <h3 className="text-xl md:text-2xl font-bold mb-6 underline underline-offset-4 decoration-white/50">
                                    {selectedService.modalTitle}
                                </h3>
                            )}
                            <div className="text-base md:text-lg leading-relaxed">
                                {selectedService.modalContent}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

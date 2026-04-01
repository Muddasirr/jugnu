"use client";

import { useState } from "react";
import { CircleArrowLeft, CircleChevronDown } from "lucide-react";

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
                <p>- How domestic-abuse-informed is your practice?</p>
                <p>- Risk assessments and safeguarding audits</p>
                <p>- Survivor-centric workplace policies</p>
                <p>- Gender-sensitive policy design</p>
                <p>- Program development and staff training</p>
                <p>- Monitoring and evaluation frameworks</p>
                <p>- Legal and compliance advisory</p>
            </div>
        )
    },
    {
        title: "Institutional Capacity Assessments",
        description: "We help strengthen institutional systems to ensure their practices and culture are survivor centered and inclusive.",
        modalTitle: "Our institutional assessment and audit services include:",
        modalContent: (
            <div className="space-y-4 font-bold">
                <p>- Gender-sensitive audits</p>
                <p>- Gender-audit of HR policies and workplace practices</p>
                <p>- Development of codes of conduct and safeguarding policies</p>
                <p>- Leadership and staff training on trauma-informed practices</p>
                <p>- Service delivery gap analysis</p>
                <p>- Risk and safeguarding frameworks</p>
                <p>- Designing internal reporting and referral mechanisms</p>
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
                    <p>- Organizational risk and readiness assessment</p>
                    <p>- Review of organizational policies, procedures and financial practices for risk of financial abuse</p>
                    <p>- Identification of current structural vulnerabilities and barriers to survivor safety</p>
                    <p>- Written findings with prioritized, actionable recommendations</p>
                    <p>- Financial abuse screening checklists</p>
                    <p>- Embedding financial abuse risk assessments into HR and community outreach programs</p>
                    <p>- Risk audits for financial abuse</p>
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
                <p>- Policy and protocol development for employees</p>
                <p>- Referral pathway design</p>
                <p>- Confidentiality and data-protection policies for survivors (and related sensitive information)</p>
                <p>- Strategies for employers to protect their employees from family violence</p>
                <p>- Stakeholder mapping for NGOs and community organizations</p>
                <p>- Equity and inclusion consulting</p>
                <p>- Survivor support and resources</p>
            </div>
        )
    },
    {
        title: "Women’s Economic Empowerment",
        description: "We aim to strengthen survivor safety and long-term stability by addressing the economic inequities that increase vulnerability to violence. Through strategic partnerships with organizations, The Jugnu Project advances survivor-informed approaches that expand access to sustainable employment, financial capability, and equitable workplace practices.",
        modalTitle: "Our service menu includes:",
        modalContent: (
            <div className="space-y-4 font-bold">
                <p>- CV/ Resume writing services</p>
                <p>- Business development support</p>
                <p>- Legal structuring for businesses</p>
                <p>- Organizational assessment and strategy development</p>
                <p>- Ideation and feasibility reports</p>
                <p>- Financial independence and literacy coaching</p>
                <p>- Survivor-centric economic planning (for employers and employees)</p>
                <p>- Equity and inclusion consulting for businesses</p>
                <p>- Mentorship and coaching</p>
                <p>- Linking women entrepreneurs with professional mentors</p>
                <p>- Leadership development workshops for women entrepreneurs</p>
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
                <p>- Capacity building and gender-sensitization workshops</p>
                <p>- Employee training for workplace harassment laws</p>
                <p>- Employee training for essential labour laws</p>
                <p>- Employee training for laws regarding violence against women and the domestic violence act(s)</p>
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
                <p>- Policy briefs, case studies and impact assessments on DV and GBV</p>
                <p>- Developing toolkits and handbooks</p>
                <p>- Designing impact assessment frameworks for survivor-support interventions</p>
                <p>- Knowledge translation for practitioners and policymakers</p>
            </div>
        )
    }
];

export default function ConsultancyPage() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

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

                {/* Previous Services List (Commented out)
                <section className="space-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="border-b border-gray-200 pb-12 last:border-0 relative">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#AC1514] underline decoration-1 underline-offset-8 decoration-[#AC1514]">
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
                */}

                {/* Accordion Section */}
                <section className="space-y-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-[#AC1514] rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                                className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-gray-50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full text-black flex items-center justify-center font-normal text-sm flex-shrink-0">
                                        {index + 1}:
                                    </div>
                                    <h3 className="text-base md:text-lg font-extrabold uppercase">
                                        {service.title}
                                    </h3>
                                </div>
                                <CircleChevronDown
                                    className={`w-6 h-6 text-black transition-transform duration-200 flex-shrink-0 ${openAccordion === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                style={{
                                    maxHeight: openAccordion === index ? '2000px' : '0px',
                                    opacity: openAccordion === index ? 1 : 0,
                                }}
                                className="overflow-hidden transition-all duration-300"
                            >
                                <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
                                    <div className="text-sm md:text-base text-black leading-relaxed pl-4 md:pl-12 space-y-6">
                                        <p className="text-justify font-medium italic">{service.description}</p>
                                        
                                        {service.modalTitle && (
                                            <h4 className="text-lg font-extrabold text-[#AC1514] underline underline-offset-4 decoration-[#AC1514]">
                                                {service.modalTitle}
                                            </h4>
                                        )}
                                        
                                        <div className="text-justify">
                                            {service.modalContent}
                                        </div>

                                        <div className="mt-6 flex justify-start">
                                            <a
                                                href={`mailto:thejugnuproject@gmail.com?subject=Consultancy Inquiry: ${service.title}`}
                                                className="bg-[#AC1514] text-white px-8 py-3 rounded-md font-bold hover:bg-black transition-all uppercase text-sm shadow-md"
                                            >
                                                Register Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Partner With Us Section */}
                <section className="space-y-6 pt-8 border-t border-black">
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-5"> Partner <span className="text-[#AC1514]">With Us</span></h2>
                        <p className="text-lg md:text-lg leading-relaxed text-justify">
                            If your organization is committed to strengthening gender equality and creating a safer workplace environment, improving employee protections and / or enhancing survivor support, The Jugnu Project Consultancy can help.
                        </p>
                        <p className="text-lg md:text-lg font-bold">
                            Contact Us: <a href="mailto:thejugnuproject@gmail.com" className="hover:underline text-[#AC1514]">thejugnuproject@gmail.com</a>
                        </p>
                    </div>
                </section>

            </div>

            {/* Modal Overlay (Commented out)
            {selectedService && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-[#AC1514] text-white w-full max-w-2xl rounded-lg shadow-2xl relative flex flex-col max-h-[90vh]">
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 left-4 z-10 hover:opacity-80 transition-opacity text-white"
                        >
                            <CircleArrowLeft size={32} />
                        </button>

                        <div className="p-8 md:p-12 overflow-y-auto">
                            {selectedService.modalTitle && (
                                <h3 className="text-xl md:text-2xl font-extrabold mb-6 underline underline-offset-4 decoration-white/50">
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
            */}
        </main>
    );
}

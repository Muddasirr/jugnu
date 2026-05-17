"use client";
import Link from "next/link";

const TrainingSection = () => {
  return (
    <section className="w-full flex mt-8 flex-col md:flex-row">
      {/* Left Side - Training & Development */}
      <div className="md:w-1/2 w-full py-24 bg-black text-white flex flex-col justify-center px-6 md:px-0 md:pl-10">
        <div className="max-w-[640px]">
          <div className="flex items-center gap-6 mb-6 flex-wrap md:flex-nowrap">
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Training & development
            </h2>
          </div>

          <p className="text-base mb-6 leading-relaxed text-justify">
            We offer evidence-based professional trainings on domestic violence,
            coercive control, trauma-informed practice, and institutional
            response mechanisms. We provide specialized training programs for
            organizations, institutions, and professionals to help them develop
            informed, ethical, and effective responses to domestic violence and
            gender-based violence.
          </p>
          <p className="text-base mb-8 leading-relaxed text-justify">
            Through interactive workshops and capacity-building sessions, we
            train HR teams, educators, healthcare professionals, legal
            practitioners, social service providers, and community organizations
            on prevention, response protocols, safeguarding, and
            survivor-centered approaches. Our sessions build trauma-informed
            practices, strengthen institutional responses, and equip teams with
            practical tools for identifying, addressing, and supporting
            individuals affected by abuse—while helping you create
            survivor-sensitive protocols and work environments. From certified
            courses to tailored organizational workshops, we adapt every program
            to your sector, workforce, and operational context.
          </p>

          <Link
            href="/training"
            className="inline-block bg-transparent border border-white text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition"
          >
            Explore More
          </Link>
        </div>
      </div>

      {/* Right Side - Social Impact Consultancy */}
      <div className="md:w-1/2 w-full py-24 bg-[#AC1514] text-white flex flex-col justify-center px-6 md:px-0 md:pl-10">
        <div className="max-w-[640px]">
          <div className="flex items-center gap-6 mb-6 flex-wrap md:flex-nowrap">
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Social impact consultancy
            </h2>
          </div>

          <p className="text-base mb-6 leading-relaxed text-justify">
            We provide specialized consultancy services to organizations seeking
            to strengthen their response to domestic violence and gender-based
            violence. We offer evidence-based guidance on prevention,
            institutional response mechanisms, safeguarding compliance, and
            trauma-informed practice.
          </p>
          <p className="text-base mb-8 leading-relaxed text-justify">
            Through policy development, risk assessment, organizational audits,
            and strategic guidance, we help institutions create safer and more
            responsive environments for employees, clients, and communities. We
            work with workplaces, educational institutions, NGOs, healthcare
            providers, and legal organizations to assess existing practices,
            identify gaps, and develop practical, sustainable solutions tailored
            to their operational needs. Whether you are revising workplace
            policies, building disclosure pathways, or aligning with labour and
            protection laws, we partner with you to translate survivor-informed
            insight into lasting institutional change.
          </p>

          <Link
            href="/consultancy"
            className="inline-block bg-transparent border border-white text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-white hover:text-[#AC1514] transition"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;

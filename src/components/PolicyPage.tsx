'use client';
import React from 'react';
import Link from 'next/link';

const PolicyPage: React.FC = () => {
  const advocacyAreas = [
    {
      id: 1,
      title: 'National centralized database for perpetrators of GBV and family violence',
      content: 'We champion the creation of a centralized national database, where the details of convicted domestic violence abusers are displayed. The information should be connected directly to the individual\'s CNIC number, via NADRA. The database should be accessible by the common public, and it should become common practice to cross-reference those details with potential rishtas on the marriage market; and also be used by employers when vetting potential employees for the workplace.',
    },
    {
      id: 2,
      title: 'Declaration of a gender-based violence emergency',
      content: 'We strongly believe that Pakistan has reached a stage where women, children, transpersons and old people are all at risk of gender-based violence. Killing of the girl child upon birth is commonplace in many areas of the country and the vague notion of "honour" is used to murder any woman on the slightest of suspicions. The state must declare an emergency in this regard and take action accordingly!',
    },
    {
      id: 3,
      title: 'Domestic violence and related protection laws',
      content: 'We push for stronger implementation of current domestic violence laws, that harmonize across provinces and the creation of survivor-centric support mechanisms. We also campaign for the introduction of more inclusive domestic violence laws, that encompass all aspects of intimate-partner violence and family violence. This comprises of reproductive coercion, child marriage, femicide and infanticide, and animal abuse.',
    },
    {
      id: 4,
      title: 'Preventing GBV in the workplace',
      content: 'We advocate for safer workplaces and the adoption of zero-tolerance policies regarding harassment, gender-based discrimination, financial abuse, systemic misogyny; along with the establishment of effective survivor-centric complaint mechanisms under laws regarding workplace harassment and assault.',
    },
    {
      id: 5,
      title: 'Economic empowerment and the prevention of financial abuse',
      content: `We promote policies that expand women's autonomy and integrate financial abuse into workplace policies, alongside the official definitions of violence.`,
    },
    {
      id: 6,
      title: 'Child protection and early marriage prevention',
      content: 'We work towards legal reforms and community-based protections that safeguard children from early and forced marriages',
    },
    {
      id: 7,
      title: 'Closing the care gap',
      content: 'We advocate for policies that recognize, redistribute and reduce the unpaid and undervalued care work (Or "labour of love") shouldered heavily by women and girls. We campaign for the increased involvement of men in taking care of the family. We also demand that the state should invest in elder care services, workplace flexibility and social protection schemes for care givers.',
      extra: `Closing the care gap is essential to women's economic empowerment, survivor-safety and the creation of equitable communities where care is shared, supported and valued.`,
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero / Intro Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20 text-justify">
        <p className="text-lg md:text-lg text-[#AC1514] mb-6 leading-relaxed">
          <em>Driving systemic change for a safer, survivor-centric and more just Pakistan.</em>
        </p>
        <p className="text-lg md:text-lg text-black leading-relaxed">
          At The Jugnu Project, we believe meaningful change can only come through the implementation of
          strong laws, the establishment of survivor-centric and responsible institutions, and the creation
          of public and judicial systems that protect survivors instead of failing them. Our work in policy
          and advocacy focuses on the transformation of systemic, social and legal structures that enable
          violence, ensuring that every survivor in Pakistan can access justice, safety and dignity.
        </p>
      </section>

      {/* Our Approach Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#AC1514] mb-6 text-center underline decoration-auto">Our Approach</h2>
        <div className="flex flex-col gap-3">
          <p className="text-xl md:text-2xl font-extrabold text-black m-0 underline leading-relaxed">Survivor-centered policy reform</p>
          <p className="text-xl md:text-2xl font-extrabold text-black m-0 underline leading-relaxed">Research-informed advocacy</p>
          <p className="text-xl md:text-2xl font-extrabold text-black m-0 underline leading-relaxed">Collaborating for national impact</p>
          <p className="text-xl md:text-2xl font-extrabold text-black m-0 underline leading-relaxed">Strengthening legal and protection systems</p>
        </div>
      </section>

      {/* Key Advocacy Areas */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-8 border-t border-[#e0e0e0] text-justify">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#AC1514] mb-6 text-center underline">Our Key Advocacy Areas</h2>
        <p className="text-lg md:text-lg text-black text-center mb-8 leading-relaxed">
          Our multi-faceted advocacy encompasses the following key areas:
        </p>

        <div className="flex flex-col gap-8">
          {advocacyAreas.map((area) => (
            <div key={area.id} className="flex flex-col gap-0">
              <h3 className="text-xl md:text-2xl font-extrabold text-black mb-3 leading-relaxed underline">
                {area.id}. {area.title}
              </h3>
              <p className="text-lg md:text-lg text-black leading-relaxed m-0">{area.content}</p>
              {area.extra && (
                <p className="text-lg md:text-lg text-black leading-relaxed mt-4">
                  {area.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our Advocacy Philosophy */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 text-justify">
        <h2 className="text-2xl md:text-4xl font-extrabold text-black underline mb-5 leading-relaxed">Our Advocacy Philosophy</h2>
        <p className="text-lg md:text-lg text-black mb-4 leading-relaxed">
          <em>Bold. Evidence-based. Survivor-led. System focused.</em>
        </p>
        <p className="text-lg md:text-lg text-black leading-relaxed m-0">
          Our advocacy challenges harmful norms within society head on. We work to provide survivors with a
          stage, and do our best to amplify the voices of those who are most affected by the violence.
        </p>
      </section>

      {/* Partner With Us */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 text-justify">
        <h2 className="text-2xl md:text-4xl font-extrabold text-black underline mb-5 leading-relaxed">Partner With Us</h2>
        <p className="text-lg md:text-lg text-black leading-relaxed mb-2">
          We welcome partnerships with the government, corporations, members of civil society, researchers
          and community workers, committed to advancing justice, safety and equality.
        </p>
        <Link href="/getinvolved" className="block text-lg md:text-lg font-bold text-[#AC1514] no-underline mb-6 leading-relaxed">Partner with us</Link>
        <p className="text-lg md:text-lg text-black leading-relaxed mb-5">
          If you&apos;d like to collaborate with us on one of our campaigns, get in touch:{' '}
          <a href="mailto:thejugnuproject@gmail.com" className="text-[#AC1514] no-underline">
            thejugnuproject@gmail.com
          </a>
        </p>
        <p className="text-lg md:text-lg text-[#AC1514] m-0 underline leading-relaxed">
          Together, we can build a Pakistan where every survivor is heard, protected and empowered.
        </p>
      </section>
    </div>
  );
};

export default PolicyPage;

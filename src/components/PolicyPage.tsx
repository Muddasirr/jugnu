'use client';
import React from 'react';
import Link from 'next/link';

const PolicyPage: React.FC = () => {
  const advocacyAreas = [
    {
      id: 1,
      title: 'National Centralized Database For Perpetrators Of GBV And Family Violence',
      content: 'We Champion The Creation Of A Centralized National Database, Where The Details Of Convicted Domestic Violence Abusers Are Displayed. The Information Should Be Connected Directly To The Individual\'s CNIC Number, Via NADRA. The Database Should Be Accessible By The Common Public, And It Should Become Common Practice To Cross-Reference Those Details With Potential Rishtas On The Marriage Market; And Also Be Used By Employers When Vetting Potential Employees For The Workplace.',
    },
    {
      id: 2,
      title: 'Declaration Of A Gender-Based Violence Emergency',
      content: 'We Strongly Believe That Pakistan Has Reached A Stage Where Women, Children, Transpersons And Old People Are All At Risk Of Gender-Based Violence. Killing Of The Girl Child Upon Birth Is Commonplace In Many Areas Of The Country And The Vague Notion Of "Honour" Is Used To Murder Any Woman On The Slightest Of Suspicions. The State Must Declare An Emergency In This Regard And Take Action Accordingly!',
    },
    {
      id: 3,
      title: 'Domestic Violence And Related Protection Laws',
      content: 'We Push For Stronger Implementation Of Current Domestic Violence Laws, That Harmonize Across Provinces And The Creation Of Survivor-Centric Support Mechanisms. We Also Campaign For The Introduction Of More Inclusive Domestic Violence Laws, That Encompass All Aspects Of Intimate-Partner Violence And Family Violence. This Comprises Of Reproductive Coercion, Child Marriage, Femicide And Infanticide, And Animal Abuse.',
    },
    {
      id: 4,
      title: 'Preventing GBV In The Workplace',
      content: 'We Advocate For Safer Workplaces And The Adoption Of Zero-Tolerance Policies Regarding Harassment, Gender-Based Discrimination, Financial Abuse, Systemic Misogyny; Along With The Establishment Of Effective Survivor-Centric Complaint Mechanisms Under Laws Regarding Workplace Harassment And Assault.',
    },
    {
      id: 5,
      title: 'Economic Empowerment And The Prevention Of Financial Abuse',
      content: `We Promote Policies That Expand Women's Autonomy And Integrate Financial Abuse Into Workplace Policies, Alongside The Official Definitions Of Violence.`,
    },
    {
      id: 6,
      title: 'Child Protection And Early Marriage Prevention',
      content: 'We Work Towards Legal Reforms And Community-Based Protections That Safeguard Children From Early And Forced Marriages',
    },
    {
      id: 7,
      title: 'Closing The Care Gap',
      content: 'We Advocate For Policies That Recognize, Redistribute And Reduce The Unpaid And Undervalued Care Work (Or "Labour Of Love") Shouldered Heavily By Women And Girls. We Campaign For The Increased Involvement Of Men In Taking Care Of The Family. We Also Demand That The State Should Invest In Elder Care Services, Workplace Flexibility And Social Protection Schemes For Care Givers.',
      extra: `Closing The Care Gap Is Essential To Women's Economic Empowerment, Survivor- Safety And The Creation Of Equitable Communities Where Care Is Shared, Supported And Valued.`,
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero / Intro Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20">
        <p className="text-lg md:text-lg text-[#AC1514] mb-6 leading-relaxed">
          <em>Driving Systemic Change For A Safer, Survivor-Centric And More Just Pakistan.</em>
        </p>
        <p className="text-lg md:text-lg text-black leading-relaxed">
          At The Jugnu Project, We Believe Meaningful Change Can Only Come Through The Implementation Of
          Strong Laws, The Establishment Of Survivor-Centric And Responsible Institutions, And The Creation
          Of Public And Judicial Systems That Protect Survivors Instead Of Failing Them. Our Work In Policy
          And Advocacy Focuses On The Transformation Of Systemic, Social And Legal Structures That Enable
          Violence, Ensuring That Every Survivor In Pakistan Can Access Justice, Safety And Dignity.
        </p>
      </section>

      {/* Our Approach Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514] mb-6 text-center underline decoration-auto">Our Approach</h2>
        <div className="flex flex-col gap-3">
          <p className="text-xl md:text-2xl font-bold text-black m-0 underline leading-relaxed">Survivor-Centered Policy Reform</p>
          <p className="text-xl md:text-2xl font-bold text-black m-0 underline leading-relaxed">Research-Informed Advocacy</p>
          <p className="text-xl md:text-2xl font-bold text-black m-0 underline leading-relaxed">Collaborating For National Impact</p>
          <p className="text-xl md:text-2xl font-bold text-black m-0 underline leading-relaxed">Strengthening Legal And Protection Systems</p>
        </div>
      </section>

      {/* Key Advocacy Areas */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-8 border-t border-[#e0e0e0]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514] mb-6 text-center underline">Our Key Advocacy Areas</h2>
        <p className="text-lg md:text-lg text-black text-center mb-8 leading-relaxed">
          Our Multi-Faceted Advocacy Encompasses The Following Key Areas:
        </p>

        <div className="flex flex-col gap-8">
          {advocacyAreas.map((area) => (
            <div key={area.id} className="flex flex-col gap-0">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 leading-relaxed underline">
                {area.id}.{area.title}
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
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-black underline mb-5 leading-relaxed">Our Advocacy Philosophy</h2>
        <p className="text-lg md:text-lg text-black mb-4 leading-relaxed">
          <em>Bold. Evidence-Based. Survivor-Led. System Focused.</em>
        </p>
        <p className="text-lg md:text-lg text-black leading-relaxed m-0">
          Our Advocacy Challenges Harmful Norms Within Society Head On. We Work To Provide Survivors With A
          Stage, And Do Our Best To Amplify The Voices Of Those Who Are Most Affected By The Violence.
        </p>
      </section>

      {/* Partner With Us */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-black underline mb-5 leading-relaxed">Partner With Us</h2>
        <p className="text-lg md:text-lg text-black leading-relaxed mb-2">
          We Welcome Partnerships With The Government, Corporations, Members Of Civil Society, Researchers
          And Community Workers, Committed To Advancing Justice, Safety And Equality.
        </p>
        <Link href="/getinvolved" className="block text-lg md:text-lg font-bold text-[#AC1514] no-underline mb-6 leading-relaxed">Partner With Us</Link>
        <p className="text-lg md:text-lg text-black leading-relaxed mb-5">
          If You&apos;d Like To Collaborate With Us On One Of Our Campaigns, Get In Touch:{' '}
          <a href="mailto:Thejugnuproject@Gmail.Com" className="text-[#AC1514] no-underline">
            Thejugnuproject@Gmail.Com
          </a>
        </p>
        <p className="text-lg md:text-lg text-[#AC1514] m-0 underline leading-relaxed">
          Together, We Can Build A Pakistan Where Every Survivor Is Heard, Protected And Empowered.
        </p>
      </section>
    </div>
  );
};

export default PolicyPage;

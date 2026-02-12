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
      content: 'We Strongly Believe That Pakistan Has Reached A Stage Where Women, Children, Transpersons And Old People Are All At Risk Of Gender-Based Violence. Killing Of The Girl Child Upon Birth Is Commonplace In Many Areas Of The Country And The Vague Notion Of “Honour” Is Used To Murder Any Woman On The Slightest Of Suspicions. The State Must Declare An Emergency In This Regard And Take Action Accordingly!',
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
      content: 'We Promote Policies That Expand Women’s Autonomy And Integrate Financial Abuse Into Workplace Policies, Alongside The Official Definitions Of Violence.',
    },
    {
      id: 6,
      title: 'Child Protection And Early Marriage Prevention',
      content: 'We Work Towards Legal Reforms And Community-Based Protections That Safeguard Children From Early And Forced Marriages',
    },
    {
      id: 7,
      title: 'Closing The Care Gap',
      content: 'We Advocate For Policies That Recognize, Redistribute And Reduce The Unpaid And Undervalued Care Work (Or “Labour Of Love”) Shouldered Heavily By Women And Girls. We Campaign For The Increased Involvement Of Men In Taking Care Of The Family. We Also Demand That The State Should Invest In Elder Care Services, Workplace Flexibility And Social Protection Schemes For Care Givers.',
      extra: 'Closing The Care Gap Is Essential To Women’s Economic Empowerment, Survivor-Safety And The Creation Of Equitable Communities Where Care Is Shared, Supported And Valued.',
    },
  ];

  return (
    <div className="font-serif bg-white text-black font-['Merriweather']">
      {/* Hero / Intro Section */}
      <section className="px-2 py-10 md:px-12 md:pb-8 bg-white  ">
        <p className="text-[22px] font-normal text-[#AC1514] mb-6 leading-[1.6]">
          <em>Driving Systemic Change For A Safer, Survivor-Centric And More Just Pakistan.</em>
        </p>
        <p className="text-[22px] font-normal leading-[1.9] m-0 text-black text-justify ">
          At The Jugnu Project, We Believe Meaningful Change Can Only Come Through The Implementation Of
          Strong Laws, The Establishment Of Survivor-Centric And Responsible Institutions, And The Creation
          Of Public And Judicial Systems That Protect Survivors Instead Of Failing Them. Our Work In Policy
          And Advocacy Focuses On The Transformation Of Systemic, Social And Legal Structures That Enable
          Violence, Ensuring That Every Survivor In Pakistan Can Access Justice, Safety And Dignity.
        </p>
      </section>

      {/* Our Approach Section */}
      <section className="px-2 py-8 md:px-12 bg-white  ">
        <h2 className="text-[38px] font-bold text-[#AC1514] mb-6 text-center underline decoration-auto">Our Approach</h2>
        <div className="flex flex-col gap-3">
          <p className="text-[29px] font-bold text-black m-0 underline leading-[1.6]">Survivor-Centered Policy Reform</p>
          <p className="text-[29px] font-bold text-black m-0 underline leading-[1.6]">Research-Informed Advocacy</p>
          <p className="text-[29px] font-bold text-black m-0 underline leading-[1.6]">Collaborating For National Impact</p>
          <p className="text-[29px] font-bold text-black m-0 underline leading-[1.6]">Strengthening Legal And Protection Systems</p>
        </div>
      </section>

      {/* Key Advocacy Areas */}
      <section className="px-2 py-8 md:px-12 bg-white border-t border-[#e0e0e0]  ">
        <h2 className="text-[38px] font-bold text-[#AC1514] mb-6 text-center underline">Our Key Advocacy Areas</h2>
        <p className="text-[22px] text-black text-center mb-8 leading-[1.6]">
          Our Multi-Faceted Advocacy Encompasses The Following Key Areas:
        </p>

        <div className="flex flex-col gap-8 ">
          {advocacyAreas.map((area) => (
            <div key={area.id} className="flex flex-col gap-0">
              <h3 className="text-[29px] font-bold text-black mb-3 leading-[1.5] underline">
                {area.id}.{area.title}
              </h3>
              <p className="text-[22px] text-black leading-[1.85] m-0 text-justify">{area.content}</p>
              {area.extra && (
                <p className="text-[22px] text-black leading-[1.85] mt-4 text-justify">
                  {area.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our Advocacy Philosophy */}
      <section className="px-2 py-10 md:px-12 bg-white  ">
        <h2 className="text-[38px] font-bold text-black underline mb-5 leading-[1.5]">Our Advocacy Philosophy</h2>
        <p className="text-[22px] font-normal text-black mb-4 leading-[1.6]">
          <em>Bold. Evidence-Based. Survivor-Led. System Focused.</em>
        </p>
        <p className="text-[22px] text-black leading-[1.85] m-0 max-w-[720px] text-justify">
          Our Advocacy Challenges Harmful Norms Within Society Head On. We Work To Provide Survivors With A
          Stage, And Do Our Best To Amplify The Voices Of Those Who Are Most Affected By The Violence.
        </p>
      </section>

      {/* Partner With Us */}
      <section className="px-2 py-12 md:px-12 md:pb-10 bg-white  ">
        <h2 className="text-[34px] font-bold text-black underline mb-5 leading-[1.5]">Partner With Us</h2>
        <p className="text-[22px] text-black leading-[1.85] mb-2 max-w-[720px] text-justify">
          We Welcome Partnerships With The Government, Corporations, Members Of Civil Society, Researchers
          And Community Workers, Committed To Advancing Justice, Safety And Equality.
        </p>
        <Link href="/getinvolved" className="block text-[22px] font-bold text-[#AC1514] no-underline mb-6 leading-[1.5]">Partner With Us</Link>
        <p className="text-[22px] text-black leading-[1.85] mb-5 text-left">
          If You&apos;d Like To Collaborate With Us On One Of Our Campaigns, Get In Touch:{' '}
          <a href="mailto:Thejugnuproject@Gmail.Com" className="text-[#AC1514] no-underline">
            Thejugnuproject@Gmail.Com
          </a>
        </p>
        <p className="text-[22px] font-normal text-[#AC1514] m-0 underline leading-[1.6]">
          Together, We Can Build A Pakistan Where Every Survivor Is Heard, Protected And Empowered.
        </p>
      </section>
    </div>
  );
};

export default PolicyPage;

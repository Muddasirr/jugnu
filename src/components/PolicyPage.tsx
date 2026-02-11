'use client';
import React from 'react';

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
      content: 'We Strongly Believe That Pakistan Has Reached A Stage Where Women, Children, Transpersons And Old People Are All At Risk Of Gender-Based Violence. Killing Of The Girl Child Upon Birth Is Commonplace In Many Areas Of The Country And The Vague Notion Of \u201CHonour\u201D Is Used To Murder Any Woman On The Slightest Of Suspicions. The State Must Declare An Emergency In This Regard And Take Action Accordingly!',
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
      content: 'We Promote Policies That Expand Women\u2019s Autonomy And Integrate Financial Abuse Into Workplace Policies, Alongside The Official Definitions Of Violence.',
    },
    {
      id: 6,
      title: 'Child Protection And Early Marriage Prevention',
      content: 'We Work Towards Legal Reforms And Community-Based Protections That Safeguard Children From Early And Forced Marriages',
    },
    {
      id: 7,
      title: 'Closing The Care Gap',
      content: 'We Advocate For Policies That Recognize, Redistribute And Reduce The Unpaid And Undervalued Care Work (Or \u201CLabour Of Love\u201D) Shouldered Heavily By Women And Girls. We Campaign For The Increased Involvement Of Men In Taking Care Of The Family. We Also Demand That The State Should Invest In Elder Care Services, Workplace Flexibility And Social Protection Schemes For Care Givers.',
      extra: 'Closing The Care Gap Is Essential To Women\u2019s Economic Empowerment, Survivor-Safety And The Creation Of Equitable Communities Where Care Is Shared, Supported And Valued.',
    },
  ];

  return (
    <div className="policy-page">
      {/* Hero / Intro Section */}
      <section className="policy-hero">
        <p className="policy-hero__tagline">
          <em>Driving Systemic Change For A Safer, Survivor-Centric And More Just Pakistan.</em>
        </p>
        <p className="policy-hero__description">
          At The Jugnu Project, We Believe Meaningful Change Can Only Come Through The Implementation Of
          Strong Laws, The Establishment Of Survivor-Centric And Responsible Institutions, And The Creation
          Of Public And Judicial Systems That Protect Survivors Instead Of Failing Them. Our Work In Policy
          And Advocacy Focuses On The Transformation Of Systemic, Social And Legal Structures That Enable
          Violence, Ensuring That Every Survivor In Pakistan Can Access Justice, Safety And Dignity.
        </p>
      </section>

      {/* Our Approach Section */}
      <section className="policy-approach">
        <h2 className="policy-section-title policy-section-title--red">Our Approach</h2>
        <div className="policy-approach__list">
          <p className="policy-approach__item">Survivor-Centered Policy Reform</p>
          <p className="policy-approach__item">Research-Informed Advocacy</p>
          <p className="policy-approach__item">Collaborating For National Impact</p>
          <p className="policy-approach__item">Strengthening Legal And Protection Systems</p>
        </div>
      </section>

      {/* Key Advocacy Areas */}
      <section className="policy-advocacy">
        <h2 className="policy-section-title policy-section-title--red">Our Key Advocacy Areas</h2>
        <p className="policy-advocacy__subtitle">
          Our Multi-Faceted Advocacy Encompasses The Following Key Areas:
        </p>

        <div className="policy-advocacy__list">
          {advocacyAreas.map((area) => (
            <div key={area.id} className="policy-advocacy-item">
              <h3 className="policy-advocacy-item__title">
                {area.id}.{area.title}
              </h3>
              <p className="policy-advocacy-item__text">{area.content}</p>
              {area.extra && (
                <p className="policy-advocacy-item__text" style={{ marginTop: '16px' }}>
                  {area.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our Advocacy Philosophy */}
      <section className="policy-philosophy">
        <h2 className="policy-philosophy__title">Our Advocacy Philosophy</h2>
        <p className="policy-philosophy__subtitle">
          <em>Bold. Evidence-Based. Survivor-Led. System Focused.</em>
        </p>
        <p className="policy-philosophy__text">
          Our Advocacy Challenges Harmful Norms Within Society Head On. We Work To Provide Survivors With A
          Stage, And Do Our Best To Amplify The Voices Of Those Who Are Most Affected By The Violence.
        </p>
      </section>

      {/* Partner With Us */}
      <section className="policy-partner">
        <h2 className="policy-partner__title">Partner With Us</h2>
        <p className="policy-partner__text">
          We Welcome Partnerships With The Government, Corporations, Members Of Civil Society, Researchers
          And Community Workers, Committed To Advancing Justice, Safety And Equality.
        </p>
        <a href="#" className="policy-partner__link">Partner With Us</a>
        <p className="policy-partner__cta">
          If You&apos;d Like To Collaborate With Us On One Of Our Campaigns, Get In Touch:{' '}
          <a href="mailto:Thejugnuproject@Gmail.Com" className="policy-partner__email">
            Thejugnuproject@Gmail.Com
          </a>
        </p>
        <p className="policy-partner__tagline">
          Together, We Can Build A Pakistan Where Every Survivor Is Heard, Protected And Empowered.
        </p>
      </section>

      <style jsx>{`
                .policy-page {
                    font-family: 'Merriweather', serif;
                    background-color: #ffffff;
                    color: #000000;
                }

                /* ===== Hero / Intro Section ===== */
                .policy-hero {
                    padding: 40px 48px 32px 48px;
                    background-color: #ffffff;
                }

                .policy-hero__tagline {
                    font-size: 15px;
                    font-weight: 400;
                    color: #AC1514;
                    margin: 0 0 24px 0;
                    line-height: 1.6;
                }

                .policy-hero__description {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1.9;
                    margin: 0;
                    color: #000000;
                    text-align: justify;
                    max-width: 720px;
                }

                /* ===== Section Titles ===== */
                .policy-section-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #000000;
                    margin: 0 0 24px 0;
                    text-align: center;
                    text-decoration: underline;
                }

                .policy-section-title--red {
                    color: #AC1514;
                }

                /* ===== Approach Section ===== */
                .policy-approach {
                    padding: 32px 48px;
                    background-color: #ffffff;
                }

                .policy-approach__list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    padding: 0;
                    margin: 0;
                }

                .policy-approach__item {
                    font-size: 14px;
                    font-weight: 700;
                    color: #000000;
                    margin: 0;
                    text-decoration: underline;
                    line-height: 1.6;
                }

                /* ===== Advocacy Section ===== */
                .policy-advocacy {
                    padding: 32px 48px;
                    background-color: #ffffff;
                    border-top: 1px solid #e0e0e0;
                }

                .policy-advocacy__subtitle {
                    font-size: 14px;
                    color: #000000;
                    text-align: center;
                    margin: 0 0 32px 0;
                    line-height: 1.6;
                }

                .policy-advocacy__list {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    max-width: 720px;
                }

                .policy-advocacy-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .policy-advocacy-item__title {
                    font-size: 13px;
                    font-weight: 700;
                    color: #000000;
                    margin: 0 0 12px 0;
                    line-height: 1.5;
                    text-decoration: underline;
                }

                .policy-advocacy-item__text {
                    font-size: 13px;
                    color: #000000;
                    line-height: 1.85;
                    margin: 0;
                    text-align: justify;
                }

                /* ===== Philosophy Section ===== */
                .policy-philosophy {
                    padding: 40px 48px;
                    background-color: #ffffff;
                }

                .policy-philosophy__title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #000000;
                    text-decoration: underline;
                    margin: 0 0 20px 0;
                    line-height: 1.5;
                }

                .policy-philosophy__subtitle {
                    font-size: 13px;
                    font-weight: 400;
                    color: #000000;
                    margin: 0 0 16px 0;
                    line-height: 1.6;
                }

                .policy-philosophy__text {
                    font-size: 13px;
                    color: #000000;
                    line-height: 1.85;
                    margin: 0;
                    max-width: 720px;
                    text-align: justify;
                }

                /* ===== Partner Section ===== */
                .policy-partner {
                    padding: 48px 48px 40px 48px;
                    background-color: #ffffff;
                }

                .policy-partner__title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #000000;
                    text-decoration: underline;
                    margin: 0 0 20px 0;
                    line-height: 1.5;
                }

                .policy-partner__text {
                    font-size: 13px;
                    color: #000000;
                    line-height: 1.85;
                    margin: 0 0 8px 0;
                    max-width: 720px;
                    text-align: justify;
                }

                .policy-partner__link {
                    display: block;
                    font-size: 13px;
                    font-weight: 700;
                    color: #AC1514;
                    text-decoration: none;
                    margin-bottom: 24px;
                    line-height: 1.5;
                }

                .policy-partner__cta {
                    font-size: 13px;
                    color: #000000;
                    line-height: 1.85;
                    margin: 0 0 20px 0;
                    text-align: left;
                }

                .policy-partner__email {
                    color: #AC1514;
                    text-decoration: none;
                }

                .policy-partner__tagline {
                    font-size: 13px;
                    font-weight: 400;
                    color: #AC1514;
                    margin: 0;
                    text-decoration: underline;
                    line-height: 1.6;
                }

                /* ===== Responsive ===== */
                @media (max-width: 768px) {
                    .policy-hero,
                    .policy-approach,
                    .policy-advocacy,
                    .policy-philosophy,
                    .policy-partner {
                        padding-left: 24px;
                        padding-right: 24px;
                    }
                }
            `}</style>
    </div>
  );
};

export default PolicyPage;

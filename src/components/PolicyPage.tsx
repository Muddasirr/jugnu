'use client';
import React from 'react';

const PolicyPage: React.FC = () => {
    const advocacyAreas = [
        {
            id: 1,
            title: '1. Sensitized Institutional Practices For Perpetrators of GBV And Family Violence:',
            content: 'We Champion The Creation Of A Centralized National Database, Where The Details Of Convicted Domestic Violence Abusers Are Displayed. This Information, Crucial For Communal Security, To The Established In CNIC Member Id No. System, The Database Should Be Accessible To Public Entities Indeed, And It Should Operate Common Practice To Cross - Reference Those Details With Potential Matches To The Marriage Market, And Also To Head Up Funding To Allow Owning Potential Of Employers – Post The Recovery.',
        },
        {
            id: 2,
            title: '2. Declaration of A Gender - Based Violence Emergency:',
            content: 'We Strongly Believe That Pakistan Has Reached A Stage Where Women, Children, Transgender, And Other People Are At A Risk Of Gender Based Violence, Killing Of The Girl Child Type Bride In Communities In Every Corner Of The Country And The Urgent Nature Of "Horror" At Hand On Another any Woman In The Highest Of Seriousness. The State Must Declare An Emergency In This Regard And This Action Immediately.',
        },
        {
            id: 3,
            title: '3. Domestic Violence And Related Protection Laws:',
            content: 'We Push For Strong Implementation Of Current Domestic Violence Laws. That Harmonize Across Provinces And The Creation Of National Guide Support Mechanisms. We Also Campaign For The Introduction Of More Inclusive Domestic Violence Laws, That Encompass All Aspects Of Intimate-Partner Violence And Family Violence.This Comprises Of Reproductive Coercion, Child Marriage, Femicide And Violence, And Abuse Of Men And Boys, Etc.',
        },
        {
            id: 4,
            title: '4. Intersectionality In The Workplace:',
            content: 'We Advocate For Gender-Sensitive And The Adoption of Lone - Violence policies regarding recruitment, Gender, Based Discrimination, Financial Abuse, Systemic Misogyny. Along With The Establishment Of Effective Survivor Centric Complaint Mechanisms Under Laws Regarding Workplace Harassment And Assault.',
        },
        {
            id: 5,
            title: '5. Economic Empowerment And The Prevention Of Financial Abuse:',
            content: 'We Promote Policies That Expand Women\'s Autonomy And Integrate Financial Abuse Into Workplace Policies Alongside The Offence Classifications Of Violences.',
        },
        {
            id: 6,
            title: '6. Child Protection And Early Marriage Prevention:',
            content: 'We Work Towards Legal Reforms And Community-Based Prevention That Safeguards Children From Early And Forced Marriages.',
        },
        {
            id: 7,
            title: '7. Lifelong After Care:',
            content: 'We Advocate For Policies That Recognize, Rehabilitate And Unfair. The Durable And Unforeseeable Gate leads to Violence Death\'s Disabilities Survivors as victims read. Girls. Our Campaigns Are For increased Restitution (of Not To Policy. Care of The Family). We Also Advocate That The State Should Invest In After Care Services, Workplace Flexibility And Fund Procedures for Long Term Care Givers.\n\nClosing The Care Gap Is Essential To Women\'s Economic Empowerment, Survivor-Safety And The Creation Of Equitable Communities Where Care Is Shared, Supported And Valued.',
        },
    ];

    return (
        <div className="policy-page">
            {/* Hero Banner */}
            <section className="policy-hero">
                <h1 className="policy-hero__title">
                    Driving Systemic Change for a Safer, Gender-friendly And Abuse-Free Pakistan.
                </h1>
                <p className="policy-hero__description">
                    At The Jugnu Project, We Believe Meaningful Change Can Only Come Through The Implementation Of
                    Strong Laws, The Establishment Of Survivor-Centric And Supportive Institutional And The Creation
                    Of Safe And Judicial Systems First Timely Survivors receive of Holding Them. Our Work In Online
                    And Advocacy Focuses On The Transformation Of Systemic, Social And Legal Structures That Enable
                    Violence, Ensuring That Every Survivor In Pakistan Can Access Justice, Safety And Dignity.
                </p>
            </section>

            {/* Our Approach Section */}
            <section className="policy-approach">
                <h2 className="policy-section-title">Our Approach</h2>
                <ul className="policy-approach__list">
                    <li><span className="policy-approach__bullet">›</span> Survivor - Centered Policy Reform</li>
                    <li><span className="policy-approach__bullet">›</span> Research - Informed Advocacy</li>
                    <li><span className="policy-approach__bullet">›</span> Collaborating For National Impact</li>
                    <li><span className="policy-approach__bullet">›</span> Strengthening Legal And Protection Systems</li>
                </ul>
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
                            <div className="policy-advocacy-item__icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <div className="policy-advocacy-item__content">
                                <h3 className="policy-advocacy-item__title">{area.title}</h3>
                                <p className="policy-advocacy-item__text">{area.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Advocacy Philosophy */}
            <section className="policy-philosophy">
                <h2 className="policy-section-title">Our Advocacy Philosophy</h2>
                <p className="policy-philosophy__subtitle">Real Solutions-oriented Survivor-centred System-Focused</p>
                <p className="policy-philosophy__text">
                    Our Advocacy challenges harmful norms within society read on. we work to create survivors With A
                    huge And has they- To Amplify The Voices Of Those Who Are Most Affected By The Violence.
                </p>
            </section>

            {/* Partner With Us */}
            <section className="policy-partner">
                <h2 className="policy-section-title">Partner With Us</h2>
                <p className="policy-partner__text">
                    We Welcome Partnerships With The Government, Corporates, Members Of Civil Society, Researchers
                    And Community Women. Committed To Advancing Justice, Safety And Equality.
                </p>
                <a href="#" className="policy-partner__link">Partner With Us</a>
                <p className="policy-partner__cta">
                    If You Wish to Collaborate With Us On One of Our Campaigns, Get in Touch: <a href="mailto:Policy@jugnu.org">Policy@jugnu.org</a>
                </p>
                <p className="policy-partner__tagline">
                    Together, We Can Build A Pakistan Where Every Survivor Is Heard, Protected And Empowered.
                </p>
            </section>

            <style jsx>{`
        .policy-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #fafafa;
        }

        /* Hero Section */
        .policy-hero {
          background-color: #AC1514;
          color: white;
          padding: 50px 80px;
        }

        .policy-hero__title {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 16px 0;
          text-decoration: underline;
          line-height: 1.5;
        }

        .policy-hero__description {
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
          max-width: 800px;
        }

        /* Section Titles */
        .policy-section-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 20px 0;
          text-align: center;
        }

        .policy-section-title--red {
          color: #AC1514;
        }

        /* Approach Section */
        .policy-approach {
          padding: 40px 80px;
          background-color: white;
        }

        .policy-approach__list {
          list-style: none;
          padding: 0;
          margin: 0;
          max-width: 400px;
          margin: 0 auto;
        }

        .policy-approach__list li {
          font-size: 13px;
          color: #333;
          padding: 8px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .policy-approach__bullet {
          color: #AC1514;
          font-weight: 700;
          font-size: 16px;
        }

        /* Advocacy Section */
        .policy-advocacy {
          padding: 50px 80px;
          background-color: #fafafa;
        }

        .policy-advocacy__subtitle {
          font-size: 13px;
          color: #555;
          text-align: center;
          margin: 0 0 40px 0;
        }

        .policy-advocacy__list {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .policy-advocacy-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .policy-advocacy-item__icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          color: #AC1514;
        }

        .policy-advocacy-item__icon svg {
          width: 100%;
          height: 100%;
        }

        .policy-advocacy-item__content {
          flex: 1;
        }

        .policy-advocacy-item__title {
          font-size: 13px;
          font-weight: 600;
          color: #AC1514;
          margin: 0 0 10px 0;
          line-height: 1.5;
        }

        .policy-advocacy-item__text {
          font-size: 12px;
          color: #444;
          line-height: 1.8;
          margin: 0;
        }

        /* Philosophy Section */
        .policy-philosophy {
          padding: 50px 80px;
          background-color: white;
        }

        .policy-philosophy__subtitle {
          font-size: 13px;
          font-weight: 600;
          color: #AC1514;
          text-align: center;
          margin: 0 0 16px 0;
        }

        .policy-philosophy__text {
          font-size: 12px;
          color: #444;
          line-height: 1.8;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Partner Section */
        .policy-partner {
          padding: 50px 80px;
          background-color: #fafafa;
        }

        .policy-partner__text {
          font-size: 12px;
          color: #444;
          line-height: 1.8;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 16px;
        }

        .policy-partner__link {
          display: block;
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          color: #AC1514;
          text-decoration: underline;
          margin-bottom: 20px;
        }

        .policy-partner__cta {
          font-size: 12px;
          color: #444;
          line-height: 1.8;
          text-align: center;
          margin: 0 0 16px 0;
        }

        .policy-partner__cta a {
          color: #AC1514;
          text-decoration: underline;
        }

        .policy-partner__tagline {
          font-size: 13px;
          font-weight: 500;
          color: #AC1514;
          text-align: center;
          margin: 0;
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .policy-hero,
          .policy-approach,
          .policy-advocacy,
          .policy-philosophy,
          .policy-partner {
            padding-left: 30px;
            padding-right: 30px;
          }

          .policy-advocacy-item {
            flex-direction: column;
            gap: 12px;
          }

          .policy-advocacy-item__icon {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
        </div>
    );
};

export default PolicyPage;

'use client';
import React from 'react';

const LegalUpdatePage: React.FC = () => {
    return (
        <div className="legal-update-page">
            <section className="legal-update-content">
                {/* Header */}
                <h1 className="legal-update-title">
                    <em>Stay Legally Informed. Stay Empowered. Stay Protected.</em>
                </h1>

                {/* Introduction paragraphs */}
                <p className="legal-update-text">
                    Laws Related To The Family Courts, Domestic Violence, Gender-Based Violence (GBV), Workplace
                    Harassment, Child Protection And Women's Rights Are Constantly Evolving. Understanding These
                    Changes Is Essential For Survivors, Lawyers, Advocates, Community Workers And NGOs And
                    Individuals Who Wish To Protect Themselves And Their Loved Ones; And Support Others Effectively.
                </p>

                <p className="legal-update-text">
                    This Page Is Dedicated To Providing Reliable, Survivor-Centered Judgements, Case Laws And Legal
                    Developments In Pakistan. Our Goal Is To Make Legal Judgments More Accessible To The Common
                    Person, So That They May Be More Aware Of Their Legal Rights And May Use These For Guidance In
                    Real Life (Especially In Litigation).
                </p>

                {/* What You'll Find Here section */}
                <h2 className="legal-update-section-title">What You'll Find Here:</h2>

                <h3 className="legal-update-item-title">1.Latest Laws And Amendments</h3>

                <h3 className="legal-update-item-title">2.Court Judgments And Precedent (Case Law)</h3>

                <p className="legal-update-text">
                    We Believe That Legal Information Should Not Be Confusing Or Inaccessible. Understanding The
                    Law Empowers Survivors, Strengthens Prevention And Helps Communities Intervene Safely And
                    Effectively.
                </p>

                {/* Stay Updated section */}
                <h2 className="legal-update-section-title legal-update-section-title--left">Stay Updated</h2>

                <p className="legal-update-text">We Regularly Update This Page To Keep You Informed.</p>
                <p className="legal-update-text">
                    To Receive Legal Updates Directly To Your Inbox, You Can Sign Up For Our Newsletter, Or Follow
                    Us On Social Media.
                </p>
            </section>

            <style jsx>{`
        .legal-update-page {
          font-family: 'Times New Roman', Times, Georgia, serif;
          background-color: #ffffff;
        }

        .legal-update-content {
          max-width: 640px;
          margin: 0 auto;
          padding: 40px 40px 60px;
        }

        .legal-update-title {
          font-size: 15px;
          font-weight: 400;
          font-style: italic;
          color: #C41E1E;
          margin: 0 0 24px 0;
          text-decoration: underline;
          line-height: 1.4;
        }

        .legal-update-title em {
          font-style: italic;
        }

        .legal-update-text {
          font-size: 14px;
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.7;
          margin: 0 0 20px 0;
          text-align: justify;
        }

        .legal-update-section-title {
          font-size: 14px;
          font-weight: 400;
          color: #C41E1E;
          margin: 30px 0 20px 0;
          text-decoration: underline;
          text-align: center;
          line-height: 1.4;
        }

        .legal-update-section-title--left {
          text-align: left;
        }

        .legal-update-item-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 16px 0;
          text-decoration: underline;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .legal-update-content {
            padding: 30px 20px 50px;
          }
        }
      `}</style>
        </div>
    );
};

export default LegalUpdatePage;

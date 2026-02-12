'use client';
import React from 'react';

const LegalUpdatePage: React.FC = () => {
  return (
    <div className="bg-white font-serif">
      <section className="px-10 py-10 md:py-16">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold italic text-[#C41E1E] mb-8  leading-tight">
          <em>Stay Legally Informed. Stay Empowered. Stay Protected.</em>
        </h1>

        {/* Introduction paragraphs */}
        <p className="text-xl font-medium text-gray-900 leading-relaxed mb-6 text-justify">
          Laws Related To The Family Courts, Domestic Violence, Gender-Based Violence (GBV), Workplace
          Harassment, Child Protection And Women's Rights Are Constantly Evolving. Understanding These
          Changes Is Essential For Survivors, Lawyers, Advocates, Community Workers And NGOs And
          Individuals Who Wish To Protect Themselves And Their Loved Ones; And Support Others Effectively.
        </p>

        <p className="text-xl font-medium text-gray-900 leading-relaxed mb-8 text-justify">
          This Page Is Dedicated To Providing Reliable, Survivor-Centered Judgements, Case Laws And Legal
          Developments In Pakistan. Our Goal Is To Make Legal Judgments More Accessible To The Common
          Person, So That They May Be More Aware Of Their Legal Rights And May Use These For Guidance In
          Real Life (Especially In Litigation).
        </p>

        {/* What You'll Find Here section */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#C41E1E] mt-10 mb-6 underline text-center">
          What You'll Find Here:
        </h2>

        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 underline">
            1. Latest Laws And Amendments
          </h3>

          <h3 className="text-2xl font-bold text-gray-900 underline">
            2. Court Judgments And Precedent (Case Law)
          </h3>
        </div>

        <p className="text-xl font-medium text-gray-900 leading-relaxed mb-8 text-justify">
          We Believe That Legal Information Should Not Be Confusing Or Inaccessible. Understanding The
          Law Empowers Survivors, Strengthens Prevention And Helps Communities Intervene Safely And
          Effectively.
        </p>

        {/* Stay Updated section */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#C41E1E] mt-12 mb-6 underline text-left">
          Stay Updated
        </h2>

        <p className="text-xl font-medium text-gray-900 leading-relaxed mb-2">
          We Regularly Update This Page To Keep You Informed.
        </p>
        <p className="text-xl font-medium text-gray-900 leading-relaxed">
          To Receive Legal Updates Directly To Your Inbox, You Can Sign Up For Our Newsletter, Or Follow
          Us On Social Media.
        </p>
      </section>
    </div>
  );
};

export default LegalUpdatePage;

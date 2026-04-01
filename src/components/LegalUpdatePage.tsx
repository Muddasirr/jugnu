'use client';
import React from 'react';

const LegalUpdatePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="px-10 py-10 md:py-16">
        {/* Header */}
        <h1 className="text-[32px] font-extrabold italic text-[#C41E1E] mb-8 leading-[1.7]">
          <em>Stay Legally Informed. Stay Empowered. Stay Protected.</em>
        </h1>

        {/* Introduction paragraphs */}
        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] mb-6 text-justify">
          Laws related to the family courts, domestic violence, gender-based violence (GBV), workplace
          harassment, child protection and women's rights are constantly evolving. Understanding these
          changes is essential for survivors, lawyers, advocates, community workers and NGOs and
          individuals who wish to protect themselves and their loved ones; and support others effectively.
        </p>

        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] mb-8 text-justify">
          This page is dedicated to providing reliable, survivor-centered judgements, case laws and legal
          developments in Pakistan. Our goal is to make legal judgments more accessible to the common
          person, so that they may be more aware of their legal rights and may use these for guidance in
          real life (especially in litigation).
        </p>

        {/* What You'll Find Here section */}
        <h2 className="text-[32px] font-extrabold text-[#C41E1E] mt-10 mb-6 underline text-center leading-[1.7]">
          What You'll Find Here:
        </h2>

        <div className="space-y-4 mb-8">
          <h3 className="text-[24px] font-extrabold text-gray-900 underline leading-[1.7]">
            1. Latest Laws And Amendments
          </h3>

          <h3 className="text-[24px] font-extrabold text-gray-900 underline leading-[1.7]">
            2. Court Judgments And Precedent (Case Law)
          </h3>
        </div>

        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] mb-8 text-justify">
          We believe that legal information should not be confusing or inaccessible. Understanding the
          law empowers survivors, strengthens prevention and helps communities intervene safely and
          effectively.
        </p>

        {/* Stay Updated section */}
        <h2 className="text-[32px] font-extrabold text-[#C41E1E] mt-12 mb-6 underline text-left leading-[1.7]">
          Stay Updated
        </h2>

        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] mb-2 text-justify">
          We regularly update this page to keep you informed.
        </p>
        <p className="text-[18px] font-medium text-gray-900 leading-[1.7] text-justify">
          To receive legal updates directly to your inbox, you can sign up for our newsletter, or follow
          us on social media.
        </p>
      </section>
    </div>
  );
};

export default LegalUpdatePage;

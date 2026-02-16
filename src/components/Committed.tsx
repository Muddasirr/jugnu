import Link from "next/link";

const CommittedSection = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(/commited.png)` }}
      />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - spacer for background image */}
          <div className="hidden lg:block" />

          {/* Right side - Content */}
          <div className="relative">
            {/* Decorative Leaf */}
            <img
              src="/leaf.svg"
              alt=""
              className="absolute -right-8 top-0 w-24 h-24 opacity-60 hidden xl:block"
              aria-hidden="true"
            />

            <h2 className="text-[42px] font-extrabold text-white mb-8 leading-tight">
              Committed to Global Standards of Equality and Justice
            </h2>


            <div className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed">
              <p>
                Our work aligns with CEDAW, ILO Conventions, and the UN Sustainable Development
                Goals, ensuring international credibility and accountability.
              </p>

              <p>
                At the heart of our mission is a strong commitment to internationally recognized standards
                that safeguard human rights, promote decent work, and advance sustainable development.
                We align our efforts with the <span className="font-semibold text-white">Convention on the Elimination of All Forms of Discrimination
                  Against Women (CEDAW)</span>, ensuring that gender equality and women's empowerment
                remain central to everything we do. By following <span className="font-semibold text-white">International Labour Organization (ILO)
                  conventions</span>, we support fair labor practices, social justice, and the protection of workers'
                rights.
              </p>

              <p>
                Our initiatives are also directly connected to the <span className="font-semibold text-white">United Nations Sustainable Development
                  Goals (SDGs)</span>, which provide a universal framework for building a more inclusive, equitable,
                and sustainable future. From promoting equal opportunities to advancing economic
                participation, we work to translate these global commitments into meaningful local impact.
              </p>

              <p>
                By grounding our work in these internationally recognized agreements, we not only
                strengthen credibility and accountability, but also ensure that our actions contribute to a
                shared global vision. This alignment reinforces our belief that progress is only possible
                when built on the principles of justice, equality, and human dignity.
              </p>
            </div>

            {/* SDG Button */}
            <div className="mt-8">
              <Link href="/sdgs" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#AC1514] rounded-[8px] text-white px-8 py-3 text-sm font-bold hover:bg-[#8B0000] transition-all">
                  Learn More About the SDGs We Implement
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommittedSection;

"use client";

export default function ResourcesSection() {
  return (
    <section className="bg-white text-center py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#AC1514] mb-6 underline underline-offset-4">
        RESOURCES
      </h2>

      <div className="max-w-3xl mx-auto text-gray-800 space-y-6">
        <p>
          Our team (consisting of both survivors and experts) has compiled various
          resources with love and care.
        </p>

        <p>
          These resources aim to educate both survivors and their supporters and
          advocates regarding family violence. They will help you (and your loved
          ones) spot signs of abuse, stay safe, collect evidence, heal and get
          better, connect to local services and become financially independent.
        </p>

        <p>
          We have made these resources available to help you educate and empower
          yourself – and your loved ones.
        </p>

        <p>
          Share these on social media with your friends and family; and should
          anyone require assistance, please connect them to our team via our{" "}
          <a
            href="#"
            className="text-[#AC1514] underline hover:text-black transition"
          >
            Contact Us page.
          </a>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button className="bg-[rgba(172, 21, 20, 0.1)] text-[#AC1514] text-sm font-semibold px-6 py-2.5 rounded-md border border-[#AC1514]  transition">
          Terminology
        </button>

        <button className="bg-[rgba(172, 21, 20, 0.1)] text-[#000000] text-sm font-semibold px-6 py-2.5 rounded-md border border-[#AC1514]   transition">
          Understanding Family / Domestic Violence
        </button>

        <button className="bg-[rgba(172, 21, 20, 0.1)] text-[#AC1514] text-sm font-semibold px-6 py-2.5 rounded-md border border-[#AC1514]   transition">
          Financial Freedom
        </button>
      </div>
    </section>
  );
}

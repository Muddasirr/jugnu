// components/SupportCard.tsx
"use client";

export default function SupportCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-[90%] max-w-7xl rounded-2xl border border-black p-[2px]">
        <div className="rounded-2xl bg-[#AC1514] text-white px-12 md:p-16 min-h-[400px] flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            You’re Not Alone — Support Is Available
          </h2>

          <p className="text-base leading-relaxed mb-5">
            Find confidential help, guidance, and resources for those facing
            Domestic or Gender-Based Violence. Access life-saving information,
            support services, and safe options — for yourself or someone you
            care about. We’re here to connect you with trusted resources, safety
            planning, and survivor-centered support.
          </p>

          <p className="text-base leading-relaxed mb-10">
            By grounding our work in these internationally recognized
            agreements, we not only strengthen credibility and accountability,
            but also ensure that our actions contribute to a shared global
            vision. This alignment reinforces our belief that progress is only
            possible when built on the principles of justice, equality, and
            human dignity.
          </p>

          <div className="flex flex-wrap gap-4">
          <button className="bg-[#AC1514] text-white text-sm font-semibold px-6 py-2.5 rounded-md border border-white hover:bg-gray-100 hover:text-[#AC1514] transition">
          VICTIM’S DIRECTORY
            </button>
            <button className="bg-[#AC1514] text-white text-sm font-semibold px-6 py-2.5 rounded-md border border-white hover:bg-gray-100 hover:text-[#AC1514] transition">
            RESOURCES HERE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

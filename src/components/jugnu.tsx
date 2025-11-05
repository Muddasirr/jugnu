import Image from "next/image";

export default function JugnuPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-start justify-between px-6 md:px-16 py-12">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col space-y-5">
        <p className="text-gray-700 text-lg font-medium">Welcome to The</p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#AC1514] tracking-tight leading-tight">
          THE JUGNU PROJECT
        </h1>

        <p className="text-gray-800 text-base leading-relaxed">
          Pakistan’s Domestic Violence Resource Center for survivors impacted by
          domestic and family violence and abuse.
        </p>

        <p className="text-[#AC1514] font-semibold leading-relaxed">
          More than 90% desi women have reported being subjected to domestic
          violence at some point in their lives.
          <span className="text-black font-bold">
           A lot must be done at all levels to support, and protect the dignity
          of, survivors of domestic violence and abuse in Pakistan. This
          includes taking decisive steps at the policy level, to provide
          psycho-social, economic and legal support to survivors.
          </span>
        </p>

      

        <p className="text-gray-800 leading-relaxed">
          The Jugnu Project’s Domestic Violence Resource is Pakistan’s first and
          largest dedicated resource center for family violence.
        </p>

        <p className="text-gray-800 leading-relaxed">
          Aside from providing a host of different resources to both survivors
          and their supporters (or anyone wishing to learn more about domestic
          violence in general), we also act as a facilitation center to connect
          survivors with essential services that they may require to escape
          abusive situations and rebuild lives of dignity and authenticity.
        </p>

        <p className="text-gray-800 leading-relaxed">
          If you are someone who suspects they may be in an abusive relationship
          / marriage, or whether you know you are in one, we are here to help.
          We understand that navigating through these challenging situations can
          be overwhelming, and we are here to provide support, information and a
          safe space to those who need it.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end relative">
        <div className="w-[90%] md:w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/intro.jpg" // replace with your actual image path
            alt="Domestic violence awareness"
            width={500}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Decorative corner icon (optional) */}
        <div className="absolute top-0 right-0 text-[#D42027] text-2xl font-bold">
          ❤️‍🔥
        </div>
      </div>
    </div>
  );
}

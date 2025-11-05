import Image from "next/image"

export function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
     

      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-24">
        {/* Section 1: About Us - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20">
  {/* Left Text Section */}
  <div className="flex-[1.4]"> 
  <p className="font-medium text-[32px]   text-black mb-6">
  ABOUT US
</p>
    <h1
  className=" font-extrabold text-[44px] uppercase text-[#AC1514] "
>
  TRANSFORMING COMMITMENTS INTO IMPACT
</h1>

    <div className="space-y-6 text-gray-900 ">
    <p className="font-medium text-[16px]  text-[#000000]">
    We are a Pakistan-based social impact consultancy firm working across South Asia and the Middle East.
        Our mission is to help organizations create safe, equitable and inclusive environments – both within the
        workplace and in the communities they serve.
      </p>
      <p className="font-medium text-[16px]  text-[#000000]">
      We collaborate with governmental agencies, NGOs, organizations, corporates, educational institutions,
        healthcare institutions and community-based organizations and social welfare agencies to strengthen GBV
        prevention, response and protection systems. Our consultancy helps organizations and agencies to design
        survivor-centered policies, programs and training(s) that bring lasting impact. We provide tailored
        solutions for sustainable social change.
      </p>
      <p className=" font-medium text-[16px]  text-[#000000]">
      Our team brings experts in law, gender, policy, women and child rights, psychology and organizational
        development to deliver end-to-end solutions that promote gender equality, protect survivors of abuse and
        domestic violence, and strengthen institutional accountability.
      </p>
    </div>
  </div>

  {/* Right Image Section */}
  <div className="flex-[0.8]"> {/* Reduced width */}
    <div className="relative h-100 lg:h-96 rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/about1.png"
        alt="Woman portrait illustration"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>


        {/* Section 2: Our Vision - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20">
        <div className="flex-1">
            <div className="relative h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg">
              <Image src="/about2.png" alt="Hands with help text" fill className="object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#AC1514] mb-4">OUR VISION</h2>
            <p className="text-base text-gray-900 leading-relaxed">
              The Jugnu Project Consultancy envisions a world where all organizations are driven to maximize their
              social impact in order to create a society where all people (especially survivors of domestic and family
              violence) can flourish alongside profits.
            </p>
          </div>
          
        </div>

        {/* Section 3: Our Commitment - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#AC1514] mb-4">OUR COMMITMENT</h2>
            <p className="text-base text-gray-900 leading-relaxed">
              Dedicated to working with governmental agencies, corporations, community organizations (including NGOs and
              civic organizations) and social welfare organizations to create survivor-centric, inclusive,
              gender-sensitive, and socially responsible policies, programs and workplaces.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about3.png"
                alt="Woman portrait illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

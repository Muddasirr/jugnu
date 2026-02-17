import { Shield, MapPin, Settings, Megaphone } from "lucide-react";

const impactSteps = [
  {
    icon: Shield,
    step: "Step 01",
    title: "Prevention & Awareness",
    description: "We work to improve detection of abuse and identify harm early, so that survivors can be assisted before risk levels escalate."
  },
  {
    icon: MapPin,
    step: "Step 02",
    title: "Direct Support Services",
    description: "We strengthen response systems to protect survivors and ensure they receive timely, coordinated and trauma-informed support."
  },
  {
    icon: Settings,
    step: "Step 03",
    title: "Build Institutional Capacity",
    description: "We work to strengthen institutional capabilities with a view toward social impact and operational change."
  },
  {
    icon: Megaphone,
    step: "Step 04",
    title: "Advocacy & Policy",
    description: "We advocate for policy and legislative reform to create safer systems, stronger protections and long-term sustainable change."
  }
];

export const Impact = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* How We Create Impact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">How We </span>
            <span className="text-[#AC1514]">Create Impact</span>
          </h2>
          <p className="text-black max-w-3xl mx-auto leading-relaxed">
            From prevention to policy, our Impact Framework is designed to protect, empower and transform communities. We create impact by transforming how institutions identify risk, respond to survivors and prevent harm.
          </p>
        </div>

        {/* Timeline connector */}
        <div className="relative mb-8 mt-12">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-300 hidden md:block" style={{ top: '30px' }}>
            {/* Red dots at each step */}
            <div className="absolute left-[0%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#AC1514] rounded-sm"></div>
            <div className="absolute left-[25%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#AC1514] rounded-sm"></div>
            <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#AC1514] rounded-sm"></div>
            <div className="absolute left-[75%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#AC1514] rounded-sm"></div>
          </div>

          {/* Step labels */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4 mt-4">
            {impactSteps.map((step, index) => (
              <div key={index} className="text-left">
                <p className="text-sm font-bold text-black mb-2">{step.step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactSteps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="mb-4">
                <step.icon className="w-12 h-12 text-[#AC1514]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#AC1514]">{step.title}</h3>
              <p className="text-sm text-black leading-relaxed text-justify">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

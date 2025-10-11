import { Shield, Users, Heart, Target } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Why We Not Alone — Support Is Available",
    subtitle: "We understand how hard it can be to ask for help when you're being harmed in Gender-Based Violence.",
    description: "Whether it's reaching out for support you feel is long overdue or you've taken the courageous step to leave a harmful relationship, seeking help and speaking up can feel daunting.\n\nWe hope to connect you with trusted resources, safety, and caring and survivor-led support.\n\nBy grounding our work in these intersections, survivors see themselves in our work, their experiences are met with understanding, and their solutions are trusted.\n\nWomen's workshops is a unique place: there is nowhere else that survivors of violence can self-refer and leave with a personalized service package.",
    bgColor: "bg-[#AC1514]",
    textColor: "text-white",
    imageUrl: "./Impact.png",
    imagePosition: "right"
  },
  {
    id: 2,
    title: "Building Safer Systems Through Expert Consultation",
    description: "We strengthen child protection systems, governments, and non-profits in creating evidence-based, culturally-responsive, and survivor-centered approaches.\n\nOur comprehensive team designs strategic programs and technical assistance tailored to support these sectors in effectively addressing violence and trauma.\n\nBy providing our clients with cutting-edge research, trauma-responsive frameworks, and culturally relevant strategies, we support systems as they transform to center the experiences and needs of people.\n\nThrough this work, we are laying foundations for comprehensive and sustainable social change.",
    bgColor: "bg-gray-900",
    textColor: "text-white",
    imageUrl: "./Impact1.png",
    imagePosition: "left"
  }
];

const impactSteps = [
  {
    icon: Shield,
    step: "Step 01",
    title: "Prevention & Awareness",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod."
  },
  {
    icon: Users,
    step: "Step 02",
    title: "Training & Capacity Building",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod."
  },
  {
    icon: Heart,
    step: "Step 03",
    title: "Direct Support Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod."
  },
  {
    icon: Target,
    step: "Step 04",
    title: "Advocacy & Policy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod."
  }
];

export const Impact = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Stories */}
        <div className="space-y-8 mb-20">
  {/* Story 1 */}
  <div className="border border-black p-6 rounded-3xl overflow-hidden shadow-sm mb-24">
    <div className="grid md:grid-cols-[1.3fr_2fr] gap-6 items-stretch">
      {/* Text Content */}
      <div className="bg-[#AC1514] text-white p-8 md:p-12 flex flex-col justify-center border rounded-3xl">
        <p className="text-sm font-semibold mb-4 opacity-90">
          We understand how hard it can be to ask for help when you're being harmed in Gender-Based Violence.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Why We Not Alone — Support Is Available
        </h3>
        <div className="text-sm leading-relaxed space-y-4 opacity-90">
          <p>
            Whether it's reaching out for support you feel is long overdue or you've taken the courageous step to leave a harmful relationship, seeking help and speaking up can feel daunting.
          </p>
          <p>
            We hope to connect you with trusted resources, safety, and caring and survivor-led support.
          </p>
          <p>
            By grounding our work in these intersections, survivors see themselves in our work, their experiences are met with understanding, and their solutions are trusted.
          </p>
          <p>
            Women's workshops is a unique place: there is nowhere else that survivors of violence can self-refer and leave with a personalized service package.
          </p>
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          src="./Impact.png"
          alt="Why We Not Alone — Support Is Available"
          className="w-full h-full min-h-[400px] object-cover border rounded-3xl"
        />
      </div>
    </div>
  </div>

  {/* Story 2 */}
  <div className="border border-black p-6 rounded-3xl overflow-hidden shadow-sm">
    <div className="grid md:grid-cols-[2fr_1.3fr] gap-6 items-stretch md:grid-flow-col-dense">
      {/* Image */}
      <div className="md:col-start-1">
        <img
          src="./Impact1.png"
          alt="Building Safer Systems Through Expert Consultation"
          className="w-full h-full min-h-[400px] object-cover border rounded-3xl"
        />
      </div>

      {/* Text Content */}
      <div className="bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-center border rounded-3xl md:col-start-2">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Building Safer Systems Through Expert Consultation
        </h3>
        <div className="text-sm leading-relaxed space-y-4 opacity-90">
          <p>
            We strengthen child protection systems, governments, and non-profits in creating evidence-based, culturally-responsive, and survivor-centered approaches.
          </p>
          <p>
            Our comprehensive team designs strategic programs and technical assistance tailored to support these sectors in effectively addressing violence and trauma.
          </p>
          <p>
            By providing our clients with cutting-edge research, trauma-responsive frameworks, and culturally relevant strategies, we support systems as they transform to center the experiences and needs of people.
          </p>
          <p>
            Through this work, we are laying foundations for comprehensive and sustainable social change.
          </p>
        </div>
      </div>
    </div>
  </div>

</div>





        {/* How We Create Impact Section */}
        <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    <span className="text-black">How We</span>{" "}
    <span className="text-[#AC1514]">Create Impact</span>
  </h2>
  <p className="text-muted-foreground max-w-3xl mx-auto text-black">
    From prevention to policy, our programs are designed to protect, empower, and transform communities.
  </p>
</div>


        {/* Impact Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactSteps.map((step, index) => (
            <div 
              key={index}
              className="border border-black rounded-1xl  p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <step.icon className="w-12 h-12 text-[#AC1514]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#AC1514]">{step.title}</h3>
              <p className="text-sm text-black text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

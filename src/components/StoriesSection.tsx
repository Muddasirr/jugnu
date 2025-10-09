import { Sparkles, Book } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Advocacy/Women's Sector",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    imagePosition: "left",
    imageurl:"/story1.png"
  },
  {
    id: 2,
    title: "Child Welfare",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    imagePosition: "right",
    imageurl:"/story2.png"
  },
  {
    id: 3,
    title: "Mental Health & Substance Abuse",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    imagePosition: "left",
    imageurl:"/story3.png"
  }
];

export const StoriesSection = () => {
  return (
    <section className="relative py-16 px-4 bg-[#2a2a2a] text-white overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 opacity-20">
        <Sparkles size={48} />
      </div>
      <div className="absolute top-4 right-4 opacity-20">
        <Book size={48} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest mb-4 text-gray-400">
            STORIES OF STRENGTH
          </h2>
          <p className="text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            A Comprehensive Collection of Completed Stories That Reflect Our Dedication, Skill, and Excellence
          </p>
        </div>

        {/* Stories */}
        <div className="space-y-6">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="bg-[#3a3a3a] rounded-sm overflow-hidden"
            >
              <div className={`grid md:grid-cols-2 items-stretch ${story.imagePosition === "right" ? "md:grid-flow-dense" : ""}`}>
                <div className={`${story.imagePosition === "right" ? "md:col-start-2" : ""}`}>
                  <img 
                    src={story.imageurl}
                    alt={story.title}
                    className="w-full h-full min-h-[280px] object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-normal mb-6">{story.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



interface Testimonial {
    name: string;
    role: string;
    location: string;
    text: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Amaal Jafar",
        role: "Founder of Island Feminism, and Co-founder of Sisters Media",
        location: "",
        text: "As an expert in family violence, Zahra founded an Right Violence by Our Youth As Amaal At One Best At Engage With Wider Survivors, Including At The Right For Of Engaging Addressing With Media and 1000 Younger Girls. For one particular receiving with a talk titled confronting domestic violence and abuse: empowering survivors through awareness and support. Zahra's expertise and dedication were evident in her presentation. She provided valuable insights into the complexities of domestic violence and abuse, shedding light on the challenges faced by survivors and the importance of providing them with the necessary support. Zahra's presentation was informative and impactful, leaving a lasting impression on all who attended. Her commitment to raising awareness and advocating for survivors is commendable, and her dedication to empowering individuals and combating domestic violence is truly inspiring. I highly recommend Zahra for any speaking engagements or initiatives related to domestic violence and abuse. Her passion, knowledge, and advocacy make her an invaluable asset in the fight against domestic violence, and I am confident that her continued contributions will continue to make a positive impact in the lives of survivors and communities worldwide.",
        image: "/testimonials/amaal.jpg",
    },
    {
        name: "E. Omar",
        role: "Survivor (USA)",
        location: "",
        text: "As someone who has gone through domestic violence, I was blessed to have found Zahra at The Jugnu. What Zahra and Jugnu represent and advocate for is so important. I have personally benefited from Zahra's guidance and support. She is incredibly knowledgeable and compassionate. Zahra has been a source of comfort and strength for me during one of the most difficult times in my life. I cannot recommend Zahra and The Jugnu Project enough. Her work is truly life-changing and has made a significant impact on my healing journey. I am forever grateful for the work that Zahra does and I know that she will continue to make a difference in the lives of countless survivors.",
        image: "/testimonials/omar.jpg",
    },
    {
        name: "Azza Maqsood",
        role: "Development Sector Specialist and Trainer",
        location: "",
        text: "I had the pleasure of attending a workshop, I have been privileged for Zahra's profound understanding of the legal and social landscape surrounding gender-based violence and abuse. Her expertise in navigating the complexities of domestic violence, including legal frameworks and support systems, is truly commendable. Zahra's dedication to empowering survivors and raising awareness about these critical issues is evident in her work. Her ability to engage and educate audiences on the nuances of domestic violence and abuse is remarkable. Zahra's passion for advocating for survivors and her commitment to creating a safer and more supportive environment for those affected by domestic violence is inspiring. I highly recommend Zahra for any initiatives or projects related to domestic violence and abuse. Her knowledge, compassion, and advocacy make her an invaluable asset in the fight against gender-based violence, and I am confident that her continued efforts will have a lasting impact on the lives of survivors and communities.",
        image: "/testimonials/azza.jpg",
    },
    {
        name: "M. Abdullah",
        role: "Survivor (USA)",
        location: "",
        text: "I cannot express enough how grateful I am for Zahra and The Jugnu Project. After my divorce, I was lost and didn't know where to turn. Zahra provided me with the support and guidance I desperately needed. She helped me navigate the legal system and connected me with resources that I didn't even know existed. Zahra's compassion and understanding made me feel heard and validated during one of the most difficult times in my life. I am forever grateful for The Jugnu Project and the work that Zahra does. She is a true advocate for survivors and I cannot recommend her enough.",
        image: "/testimonials/abdullah.jpg",
    },
    {
        name: "Waseela",
        role: "Survivor (Pakistan)",
        location: "",
        text: "I want to thank Zahra and The Jugnu Project for everything they have done for me. I was in an abusive marriage. I had no idea what my rights were as a wife, restaurateur and victim. My family refused to support me and I didn't know what my daughters as a single mother anymore. The Jugnu Project informed me with a help from them navigated the legal system and connected me with resources that I didn't even know existed. Zahra's compassion and understanding made me feel heard and validated during one of the most difficult times in my life. I am forever grateful for The Jugnu Project and the work that Zahra does. She is a true advocate for survivors and I cannot recommend her enough.",
        image: "/testimonials/waseela.jpg",
    },
    {
        name: "Ellena",
        role: "Survivor (USA / Pakistan)",
        location: "",
        text: "I deeply thankful Zahra for the Jugnu. She stood beside from when I found away the \"good wife\" living with my husband and in-laws. But my mother wouldn't help. I advocated for my own rights and fought for my freedom. Zahra helped me understand my legal rights and connected me with resources that I didn't even know existed. The Jugnu Project has been a lifeline for me and I am forever grateful for the support and guidance that Zahra has provided. She is a true advocate for survivors and I cannot recommend her enough.",
        image: "/testimonials/ellena.jpg",
    },
    {
        name: "Aneeqa",
        role: "Survivor (Pakistan)",
        location: "",
        text: "I want to thank Zahra and The Jugnu Project for everything they have done for me. She has stood alongside me exactly for the marriage. I was very young and my parents refused to let me get a divorce. Zahra helped me understand my legal rights and connected me with resources that I didn't even know existed. She helped me navigate the legal system and provided me with the support and guidance I desperately needed. Zahra's compassion and understanding made me feel heard and validated during one of the most difficult times in my life. I am forever grateful for The Jugnu Project and the work that Zahra does. She is a true advocate for survivors and I cannot recommend her enough. I hope to see more women like Zahra who are dedicated to helping survivors and making a difference in the lives of those affected by domestic violence. She is changing the way that two years and more newly joined to jugnu my udyam's.",
        image: "/testimonials/aneeqa.jpg",
    },
    {
        name: "E. Rida",
        role: "Survivor (Pakistan)",
        location: "",
        text: "I want to thank Zahra and the Jugnu for it. Anyway - she has shown to budgets preserve our wounds saw say - she able my appear in welfare. Rida are whom years Zahra made whom zahra zahra has made whom zahra has made whom zahra zahra zahra zahra zahra.",
        image: "/testimonials/rida.jpg",
    },
];

export default function TestimonialsPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="  px-24 py-12">
                <p className="text-[24px] text-black leading-relaxed mb-8 text-justify">
                    The Jugnu Project is proud to have had the chance to work with various{" "}
                    <span className="text-[#AC1514] font-semibold">
                        organizations, NGOs, civil society organizations, community centers and government agencies
                    </span>{" "}
                    in an effort to create a society that is supportive for survivors. We feel truly blessed to have been able to help implement policies and spread awareness to change the trajectory of the work that goes into the welfare.
                </p>
            </section>

            {/* Testimonials List */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <div className="space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex gap-4 md:gap-6 relative">
                            {/* Left side - Profile Picture */}

                            {/* Right side - Content */}
                            <div className="flex-1 pb-8 border-l-4 !border-[#AC1514] pl-6 md:pl-8">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#AC1514] mb-1 text-justify">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 mb-3">
                                        {testimonial.role}
                                    </p>
                                </div>
                                <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
                                    {testimonial.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

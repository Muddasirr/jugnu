import Image from "next/image";

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
        role: "Founder of Island Feminism, and Co-Founder of Sisters Media",
        location: "",
        text: "As an expert in Family Violence, Zahra founded an Right Violence by Our Youth As Amaal At One Best At Engage With Wider Survivors, Including At The Right For Of Engaging Addressing With Media and 1000 Younger Girls. For One Particular Receiving With A Talk Titled Confronting Domestic Violence And Abuse: Empowering Survivors Through Awareness And Support. Zahra's Expertise And Dedication Were Evident In Her Presentation. She Provided Valuable Insights Into The Complexities Of Domestic Violence And Abuse, Shedding Light On The Challenges Faced By Survivors And The Importance Of Providing Them With The Necessary Support. Zahra's Presentation Was Informative And Impactful, Leaving A Lasting Impression On All Who Attended. Her Commitment To Raising Awareness And Advocating For Survivors Is Commendable, And Her Dedication To Empowering Individuals And Combating Domestic Violence Is Truly Inspiring. I Highly Recommend Zahra For Any Speaking Engagements Or Initiatives Related To Domestic Violence And Abuse. Her Passion, Knowledge, And Advocacy Make Her An Invaluable Asset In The Fight Against Domestic Violence, And I Am Confident That Her Continued Contributions Will Continue To Make A Positive Impact In The Lives Of Survivors And Communities Worldwide.",
        image: "/testimonials/amaal.jpg",
    },
    {
        name: "E. Omar",
        role: "Survivor (USA)",
        location: "",
        text: "As someone who has gone through domestic violence, I was blessed to have found Zahra At The Jugnu. What Zahra And Jugnu Represent And Advocate For Is So Important. I have personally benefited from Zahra's guidance and support. She is incredibly knowledgeable and compassionate. Zahra has been a source of comfort and strength for me during one of the most difficult times in my life. I cannot recommend Zahra and The Jugnu Project enough. Her work is truly life-changing and has made a significant impact on my healing journey. I am forever grateful for the work that Zahra does and I know that she will continue to make a difference in the lives of countless survivors.",
        image: "/testimonials/omar.jpg",
    },
    {
        name: "Azza Maqsood",
        role: "Development Sector Specialist and Trainer",
        location: "",
        text: "I had the pleasure of Attending a Workshop, I Have Been Privileged For Zahra's Profound Understanding of The Legal And Social Landscape Surrounding Gender-based Violence And Abuse. Her Expertise In Navigating The Complexities Of Domestic Violence, Including Legal Frameworks And Support Systems, Is Truly Commendable. Zahra's Dedication To Empowering Survivors And Raising Awareness About These Critical Issues Is Evident In Her Work. Her Ability To Engage And Educate Audiences On The Nuances Of Domestic Violence And Abuse Is Remarkable. Zahra's Passion For Advocating For Survivors And Her Commitment To Creating A Safer And More Supportive Environment For Those Affected By Domestic Violence Is Inspiring. I Highly Recommend Zahra For Any Initiatives Or Projects Related To Domestic Violence And Abuse. Her Knowledge, Compassion, And Advocacy Make Her An Invaluable Asset In The Fight Against Gender-based Violence, And I Am Confident That Her Continued Efforts Will Have A Lasting Impact On The Lives Of Survivors And Communities.",
        image: "/testimonials/azza.jpg",
    },
    {
        name: "M. Abdullah",
        role: "Survivor (USA)",
        location: "",
        text: "I Cannot Express Enough How Grateful I Am For Zahra And The Jugnu Project. After My Divorce, I Was Lost And Didn't Know Where To Turn. Zahra Provided Me With The Support And Guidance I Desperately Needed. She Helped Me Navigate The Legal System And Connected Me With Resources That I Didn't Even Know Existed. Zahra's Compassion And Understanding Made Me Feel Heard And Validated During One Of The Most Difficult Times In My Life. I Am Forever Grateful For The Jugnu Project And The Work That Zahra Does. She Is A True Advocate For Survivors And I Cannot Recommend Her Enough.",
        image: "/testimonials/abdullah.jpg",
    },
    {
        name: "Waseela",
        role: "Survivor (Pakistan)",
        location: "",
        text: "I Want To Thank Zahra And The Jugnu Project For Everything They Have Done For Me. I Was In An Abusive Marriage. I Had No Idea What My Rights Were As A Wife, Restaurateur And Victim. My Family Refused To Support Me And I Didn't Know What My Daughters As A Single Mother Anymore. The Jugnu Project Informed Me With A Help From Them Navigated The Legal System And Connected Me With Resources That I Didn't Even Know Existed. Zahra's Compassion And Understanding Made Me Feel Heard And Validated During One Of The Most Difficult Times In My Life. I Am Forever Grateful For The Jugnu Project And The Work That Zahra Does. She Is A True Advocate For Survivors And I Cannot Recommend Her Enough.",
        image: "/testimonials/waseela.jpg",
    },
    {
        name: "Ellena",
        role: "Survivor (USA / Pakistan)",
        location: "",
        text: "I Deeply Thankful Zahra For The Jugnu. She Stood Beside From When I Found Away The \"Good Wife\" Living With My Husband And In-laws. But My Mother Wouldn't Help. I Advocated For My Own Rights And Fought For My Freedom. Zahra Helped Me Understand My Legal Rights And Connected Me With Resources That I Didn't Even Know Existed. The Jugnu Project Has Been A Lifeline For Me And I Am Forever Grateful For The Support And Guidance That Zahra Has Provided. She Is A True Advocate For Survivors And I Cannot Recommend Her Enough.",
        image: "/testimonials/ellena.jpg",
    },
    {
        name: "Aneeqa",
        role: "Survivor (Pakistan)",
        location: "",
        text: "I Want To Thank Zahra And The Jugnu Project For Everything They Have Done For Me. She Has Stood Alongside Me Exactly For The Marriage. I Was Very Young And My Parents Refused To Let Me Get A Divorce. Zahra Helped Me Understand My Legal Rights And Connected Me With Resources That I Didn't Even Know Existed. She Helped Me Navigate The Legal System And Provided Me With The Support And Guidance I Desperately Needed. Zahra's Compassion And Understanding Made Me Feel Heard And Validated During One Of The Most Difficult Times In My Life. I Am Forever Grateful For The Jugnu Project And The Work That Zahra Does. She Is A True Advocate For Survivors And I Cannot Recommend Her Enough. I Hope To See More Women Like Zahra Who Are Dedicated To Helping Survivors And Making A Difference In The Lives Of Those Affected By Domestic Violence. She Is Changing The Way That Two Years And More Newly Joined To Jugnu My Udyam's.",
        image: "/testimonials/aneeqa.jpg",
    },
    {
        name: "E. Rida",
        role: "Survivor (Pakistan)",
        location: "",
        text: "I Want To Thank Zahra And The Jugnu For It. Anyway - She Has Shown To Budgets Preserve Our Wounds Saw Say - She Able My Appear In Welfare. Rida Are Whom Years Zahra Made Whom Zahra Zahra Has Made Whom Zahra Has Made Whom Zahra Zahra Zahra Zahra Zahra.",
        image: "/testimonials/rida.jpg",
    },
];

export default function TestimonialsPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="  px-24 py-12">
                <p className="text-[24px] text-black leading-relaxed mb-8">
                    The Jugnu Project Is Proud To Have Had The Chance To Work With Various{" "}
                    <span className="text-[#AC1514] font-semibold">
                        Organizations, NGOs, Civil Society Organizations, Community Centers And Government Agencies
                    </span>{" "}
                    In An Effort To Create A Society That Is Supportive For Survivors. We Feel Truly Blessed To Have Been Able To Help Implement Policies And Spread Awareness To Change The Trajectory Of The Work That Goes Into The Welfare.
                </p>
            </section>

            {/* Testimonials List */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <div className="space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex gap-4 md:gap-6 relative">
                            {/* Left side - Profile Picture */}
                          
                            {/* Right side - Content */}
                            <div className="flex-1 pb-8 border-l-4 !border-[#AC1514]  pl-6 md:pl-8">
                                <div className="flex gap-4" >
                                 <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200 border-2  ">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#AC1514] mb-1">
                                    {testimonial.name}XX
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 mb-3">
                                    {testimonial.role}
                                </p>
                                </div>
                                </div>
                                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
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

import Image from "next/image";

const books = [
    {
        title: "In Control",
        author: "By: Dr. Jane Monckton-Smith",
        color: "bg-gradient-to-br from-slate-800 to-slate-600",
        textColor: "text-white"
    },
    {
        title: "Women Are Blamed For Everything",
        author: "By: Dr. Jessica Taylor",
        color: "bg-gradient-to-br from-rose-600 to-pink-500",
        textColor: "text-white"
    },
    {
        title: "Sexy But Psycho",
        author: "By: Dr. Jessica Taylor",
        color: "bg-gradient-to-br from-fuchsia-600 to-pink-400",
        textColor: "text-white"
    },
    {
        title: "Don't You Know Who I Am?",
        author: "By: Dr. Ramani S. Durvasula",
        color: "bg-gradient-to-br from-amber-500 to-orange-400",
        textColor: "text-white"
    },
    {
        title: "Should I Stay or Should I Go?",
        author: "By: Dr. Ramani S. Durvasula",
        color: "bg-gradient-to-br from-teal-600 to-cyan-500",
        textColor: "text-white"
    },
    {
        title: "The Body Keeps The Score",
        author: "By: Bessel Van Der Kolk",
        color: "bg-gradient-to-br from-indigo-700 to-blue-500",
        textColor: "text-white"
    },
    {
        title: "The Handbook of Narcissism and Narcissistic Personality Disorder",
        author: "By: W. Keith Campbell",
        color: "bg-gradient-to-br from-gray-700 to-gray-500",
        textColor: "text-white"
    },
    {
        title: "Will I Ever Be Good Enough?",
        author: "By: Karyl McBride",
        color: "bg-gradient-to-br from-violet-600 to-purple-400",
        textColor: "text-white"
    },
    {
        title: "Fierce Self-Compassion",
        author: "By: Kristin Neff",
        color: "bg-gradient-to-br from-red-600 to-rose-400",
        textColor: "text-white"
    },
    {
        title: "Entitled - How Male Privilege Hurts Women",
        author: "By: Kate Manne",
        color: "bg-gradient-to-br from-emerald-600 to-green-400",
        textColor: "text-white"
    },
    {
        title: "Soul Murder",
        author: "By: Leonard Sheingold",
        color: "bg-gradient-to-br from-zinc-800 to-neutral-600",
        textColor: "text-white"
    },
    {
        title: "Adult Children of Emotionally Immature Parents",
        author: "By: Lindsay C. Gibson",
        color: "bg-gradient-to-br from-sky-600 to-blue-400",
        textColor: "text-white"
    },
    {
        title: "The Covert Passive Aggressive Narcissist",
        author: "By: Debbie Mirza",
        color: "bg-gradient-to-br from-stone-700 to-stone-500",
        textColor: "text-white"
    },
    {
        title: "Toxic Parents",
        author: "By: Susan Forward",
        color: "bg-gradient-to-br from-lime-600 to-green-500",
        textColor: "text-white"
    },
    {
        title: "Framed: Women In the Family Court Underworld",
        author: "By: Dr. Christine M. Cocchiola",
        color: "bg-gradient-to-br from-orange-600 to-amber-400",
        textColor: "text-white"
    },
    {
        title: "Fawning",
        author: "By: Dr. Ingrid Clayton",
        color: "bg-gradient-to-br from-pink-600 to-rose-400",
        textColor: "text-white"
    },
    {
        title: "Trauma and Recovery",
        author: "By: Judith Herman",
        color: "bg-gradient-to-br from-blue-800 to-indigo-600",
        textColor: "text-white"
    },
    {
        title: "Truth and Repair",
        author: "By: Judith Herman",
        color: "bg-gradient-to-br from-cyan-700 to-teal-500",
        textColor: "text-white"
    },
    {
        title: "The Second Sex",
        author: "By: Simone de Beauvoir",
        color: "bg-gradient-to-br from-purple-800 to-violet-600",
        textColor: "text-white"
    },
    {
        title: "We Should All Be Feminists",
        author: "By: Chimamanda Ngozi Adichie",
        color: "bg-gradient-to-br from-[#AC1514] to-red-500",
        textColor: "text-white"
    },
    {
        title: "Feminist Manifesto",
        author: "By: Chimamanda Ngozi Adichie",
        color: "bg-gradient-to-br from-rose-700 to-pink-500",
        textColor: "text-white"
    },
    {
        title: "Purple Hibiscus",
        author: "By: Chimamanda Ngozi Adichie",
        color: "bg-gradient-to-br from-purple-700 to-fuchsia-500",
        textColor: "text-white"
    },
    {
        title: "Men Explain Things To Me",
        author: "By: Rebecca Solnit",
        color: "bg-gradient-to-br from-yellow-600 to-amber-400",
        textColor: "text-white"
    },
    {
        title: "Feminism Is For Everybody",
        author: "By: Bell Hooks",
        color: "bg-gradient-to-br from-pink-700 to-rose-500",
        textColor: "text-white"
    },
    {
        title: "Ain't I A Woman?",
        author: "By: Bell Hooks",
        color: "bg-gradient-to-br from-amber-700 to-orange-500",
        textColor: "text-white"
    },
    {
        title: "All About Love",
        author: "By: Bell Hooks",
        color: "bg-gradient-to-br from-red-700 to-rose-500",
        textColor: "text-white"
    },
    {
        title: "Talking Back",
        author: "By: Bell Hooks",
        color: "bg-gradient-to-br from-teal-700 to-emerald-500",
        textColor: "text-white"
    },
    {
        title: "Feminist Theory: From Margin to Center",
        author: "By: Bell Hooks",
        color: "bg-gradient-to-br from-indigo-600 to-blue-400",
        textColor: "text-white"
    },
    {
        title: "Teaching to Transgress",
        author: "By: Bell Hooks",
        color: "bg-gradient-to-br from-violet-700 to-purple-500",
        textColor: "text-white"
    },
    {
        title: "The Color Purple",
        author: "By: Alice Walker",
        color: "bg-gradient-to-br from-purple-900 to-violet-700",
        textColor: "text-white"
    },
    {
        title: "When The Rabbit Howls",
        author: "By: Trudie Chase",
        color: "bg-gradient-to-br from-slate-700 to-gray-500",
        textColor: "text-white"
    },
    {
        title: "The Girl In The Green Dress",
        author: "By: Jeni Haynes",
        color: "bg-gradient-to-br from-green-700 to-emerald-500",
        textColor: "text-white"
    },
    {
        title: "Nobody's Girl",
        author: "By: Virginia Guiffre",
        color: "bg-gradient-to-br from-blue-700 to-sky-500",
        textColor: "text-white"
    },
    {
        title: "Rage Becomes Her",
        author: "By: Soraya Chemaly",
        color: "bg-gradient-to-br from-red-800 to-red-600",
        textColor: "text-white"
    },
    {
        title: "Healing The Traumatized Adult",
        author: "By: Alice Little",
        color: "bg-gradient-to-br from-cyan-600 to-sky-400",
        textColor: "text-white"
    },
    {
        title: "No Contact Survivor",
        author: "By: Alice Little",
        color: "bg-gradient-to-br from-emerald-700 to-teal-500",
        textColor: "text-white"
    },
    {
        title: "Momspeak",
        author: "By: Pooja Pande",
        color: "bg-gradient-to-br from-orange-500 to-yellow-400",
        textColor: "text-white"
    },
    {
        title: "Exploring Masculinity",
        author: "By: Kamla Bhasin",
        color: "bg-gradient-to-br from-blue-600 to-indigo-400",
        textColor: "text-white"
    },
    {
        title: "What is Patriarchy?",
        author: "By: Kamla Bhasin",
        color: "bg-gradient-to-br from-fuchsia-700 to-pink-500",
        textColor: "text-white"
    },
    {
        title: "Aurat",
        author: "By: Dr. Arfa Sayyeda Zehra",
        color: "bg-gradient-to-br from-rose-800 to-pink-600",
        textColor: "text-white"
    },
    {
        title: "The Pakistan Project - A Feminist Perspective of Nation and Identity",
        author: "By: Rubina Saigol",
        color: "bg-gradient-to-br from-green-800 to-emerald-600",
        textColor: "text-white"
    },
    {
        title: "Hum Guneghar Aurtain",
        author: "By: Kishwar Naheed",
        color: "bg-gradient-to-br from-amber-600 to-yellow-400",
        textColor: "text-white"
    },
    {
        title: "Hudood Ordinance - A Divine Sanction",
        author: "By: Asma Jehangir",
        color: "bg-gradient-to-br from-red-900 to-rose-700",
        textColor: "text-white"
    },
    {
        title: "Children of a Lesser God",
        author: "By: Asma Jehangir",
        color: "bg-gradient-to-br from-blue-900 to-indigo-700",
        textColor: "text-white"
    },
    {
        title: "The Parenting Map",
        author: "By: Dr. Shefali",
        color: "bg-gradient-to-br from-teal-500 to-cyan-400",
        textColor: "text-white"
    }
];

export default function ReadsPage() {
    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">
                {/* Intro Section */}
                <section className="space-y-6">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Welcome To <span className="text-[#AC1514] text-3xl md:text-4xl">“Jugnu Reads”</span> – Our Digital Book Club!
                    </h1>

                    <div className="space-y-4 text-sm md:text-base leading-relaxed text-black font-medium">
                        <p>
                            This Is An Online Reading Community For People Who Care About Gender Equity, Social Change And Empowerment Of Survivors. Through Books, We Learn, Connect And Explore New Ideas About Gender, Justice, Mental Health, Trauma, Healing From Abuse And Resilience.
                        </p>
                        <p>
                            Each Month We Select A Book That Inspires Reflection And Discussion. Members Read At Their Own Pace, And Then Join An Online Session To Share Thoughts, Any Lessons Learnt And Personal Insights In A Safe And Respectful Space.
                        </p>
                        <p>
                            The Book Club Is Open To Everyone – Students, Professionals, Activists, Academics, Lawmakers And Homemakers, Etc – Anyone Who Wants To Increase Their Knowledge Regarding Family And Gender-Based Violence. It Is Aimed At Anyone Who Wants To Grow Through Meaningful Conversation And Shared Learning.
                        </p>
                    </div>
                </section>

                {/* What We Offer Section */}
                <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold">
                        What <span className="text-[#AC1514]">We Offer</span>
                    </h2>
                    <ul className="space-y-3 text-sm md:text-base font-medium text-black list-none pl-1">
                        <li>-Monthly Book Selections Focused On Gender Equity, Justice, Mental Wellbeing, Family Violence, Trauma And Healing.</li>
                        <li>-Online Discussion Sessions With Readers From Across Pakistan And Abroad.</li>
                        <li>-A Supportive And Inclusive Community For Open Dialogue.</li>
                        <li>-Occasional Guest Speakers And Author Talks</li>
                    </ul>
                </section>

                {/* How To Join Section */}
                <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold">
                        How <span className="text-[#AC1514]">To Join?</span>
                    </h2>
                    <p className="text-sm md:text-base font-medium text-black">
                        Simply Sign Up Online To Become Part Of The Jugnu Reads Community. You Will Receive Regular Updates About Our Upcoming Books, Reading Guides And Discussion Dates. You Can Also Vote For The Book Of Your Choice!
                    </p>
                </section>

                {/* Book Gallery Section */}
                <section className="pt-8">
                    <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
                        Book <span className="text-[#AC1514]">Gallery -</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
                        {books.map((book, index) => (
                            <div key={index} className="group flex flex-col space-y-3 cursor-pointer">
                                <div className={`w-full aspect-[2/3] rounded-lg shadow-lg ${book.color} flex items-center justify-center p-4 text-center transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-1 relative overflow-hidden`}>
                                    {/* Decorative book spine effect */}
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20"></div>
                                    {/* Inner shadow for depth */}
                                    <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
                                    {/* Book title on cover */}
                                    <div className={`${book.textColor} font-bold text-[10px] md:text-xs leading-tight px-2 text-center drop-shadow-sm`}>
                                        {book.title}
                                    </div>
                                </div>
                                <div className="text-xs space-y-1 transition-all duration-300 group-hover:translate-y-0.5">
                                    <p className="font-bold leading-tight text-gray-900 line-clamp-2">{book.title}</p>
                                    <p className="text-gray-600 text-[10px] uppercase tracking-wide">{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

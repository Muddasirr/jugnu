import Image from "next/image";

const books = [
    {
        title: "Control",
        author: "By: Jeanette Winterson",
        color: "bg-gray-100"
    },
    {
        title: "Why Women Are Blamed For Everything",
        author: "By: Dr. Jessica Taylor",
        color: "bg-blue-100"
    },
    {
        title: "Sexy / Psycho",
        author: "By: Dr. Jessica Taylor",
        color: "bg-pink-100"
    },
    {
        title: "Don't You Know Who I Am?",
        author: "By: Dr. Ramani S. Durvasula",
        color: "bg-red-100"
    },
    {
        title: "Should I Stay or Should I Go?",
        author: "By: Dr. Ramani S. Durvasula",
        color: "bg-orange-100"
    },
    {
        title: "The Body Keeps The Score",
        author: "By: Bessel van der Kolk",
        color: "bg-blue-200"
    },
    {
        title: "The Handbook of Narcissism",
        author: "By: W. Keith Campbell",
        color: "bg-green-100"
    },
    {
        title: "Will I Ever Be Good Enough?",
        author: "By: Karyl McBride",
        color: "bg-green-200"
    },
    {
        title: "Fierce Self-Compassion",
        author: "By: Kristin Neff",
        color: "bg-red-200"
    },
    {
        title: "Excited",
        author: "By: Kate Mourse",
        color: "bg-yellow-100"
    },
    {
        title: "The Body Keeps The Score",
        author: "By: Bessel van der Kolk",
        color: "bg-blue-200"
    },
    {
        title: "The Handbook of Narcissism",
        author: "By: W. Keith Campbell",
        color: "bg-green-100"
    },
    {
        title: "Will I Ever Be Good Enough?",
        author: "By: Karyl McBride",
        color: "bg-green-200"
    },
    {
        title: "Fierce Self-Compassion",
        author: "By: Kristin Neff",
        color: "bg-red-200"
    },
    {
        title: "Excited",
        author: "By: Kate Mourse",
        color: "bg-yellow-100"
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

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
                        {books.map((book, index) => (
                            <div key={index} className="flex flex-col space-y-3">
                                <div className={`w-full aspect-[2/3] shadow-md border border-gray-100 ${book.color} flex items-center justify-center p-4 text-center text-xs text-gray-500`}>
                                    {/* Placeholder for Book Cover Image */}
                                    <span className="font-sans font-bold text-gray-400 uppercase tracking-widest">
                                        {book.title}
                                        <br />
                                        Cover
                                    </span>
                                </div>
                                <div className="text-xs space-y-1">
                                    <p className="font-bold leading-tight">{book.title}</p>
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

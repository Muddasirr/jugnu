import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Globe } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="w-full font-serif">
            <div className="grid grid-cols-1 md:grid-cols-2 my-8">
                {/* Left Column: Survivors */}
                <section className="bg-black text-white px-8 py-8 md:p-20 flex flex-col  min-h-[600px]">
                    <div className="max-w-xl mx-auto md:mx-0 w-full space-y-12">
                        <h1 className="text-3xl md:text-5xl font-bold underline decoration-1 underline-offset-[12px] leading-tight">
                            For Survivors
                        </h1>

                        <p className="text-xl md:text-2xl leading-relaxed font-light">
                            If You, Or Someone You Know, Is At Immediate Risk Or In Danger, Please Call The <a href="tel:15" className="underline hover:no-underline cursor-pointer font-semibold">POLICE (Contact Number: 15)</a>.
                        </p>

                        <div className="space-y-8 text-xl md:text-2xl font-light">
                            <p>
                                Or Check Our <Link href="/gethelp" className="underline font-bold hover:no-underline">GET HELP</Link> Page
                            </p>

                            <p>
                                Or Check Our <Link href="/survivor-stories" className="underline font-bold hover:no-underline">SURVIVOR'S DIRECTORY</Link> For Emergency Services Near You
                            </p>

                            <p>
                                Or Check Our Other <Link href="/resources" className="underline font-bold hover:no-underline">RESOURCES</Link>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Right Column: Corporates */}
                <section className="bg-[#AC1514] text-white px-8 py-8 md:p-20 flex flex-col  min-h-[600px]">
                    <div className="max-w-xl mx-auto md:mx-0 w-full space-y-12">
                        <h1 className="text-3xl md:text-4xl font-bold underline decoration-1 underline-offset-[12px] leading-tight mb-8">
                            For Corporates / ngos / Financial Institutions / Government Departments
                        </h1>

                        <div className="space-y-8 text-xl md:text-2xl font-light">
                            <p className="leading-relaxed">
                                Would You Like To Collaborate With Us, Or Book A Consultation?
                            </p>

                            <p className="font-bold">
                                Get In Touch!
                            </p>

                            <div className="space-y-3 text-lg md:text-xl">
                                <p>Email: <a href="mailto:Thejugnuproject@Gmail.Com" className="underline hover:no-underline">Thejugnuproject@Gmail.Com</a></p>
                                <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                            </div>

                            <div className="flex items-center gap-4 py-4">
                                <span className="font-bold text-xl">Social Media:</span>
                                <div className="flex gap-3">
                                    <a href="https://www.instagram.com/thejugnuproject" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 text-[#AC1514] hover:bg-gray-100 transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.facebook.com/thejugnuproject" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 text-[#AC1514] hover:bg-gray-100 transition-colors">
                                        <Facebook className="w-5 h-5 fill-current" />
                                    </a>
                                    <a href="https://twitter.com/thejugnuproject" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 text-[#AC1514] hover:bg-gray-100 transition-colors">
                                        {/* X (Twitter) icon */}
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5 pb-0.5"
                                        >
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/company/thejugnuproject" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 text-[#AC1514] hover:bg-gray-100 transition-colors">
                                        <Linkedin className="w-5 h-5 fill-current" />
                                    </a>

                                </div>
                            </div>

                            <div className="space-y-4 pt-2">
                                <p>Check Our <Link href="/consultancy" className="underline hover:no-underline">CONSULTANCY</Link> Services</p>
                                <p>Check Our <Link href="/training" className="underline hover:no-underline">TRAINING AND DEVELOPMENT</Link> Services</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

import React from 'react';
import Link from 'next/link';
import { Search, Globe, Instagram, Facebook, Youtube, Linkedin, MoveRight } from 'lucide-react';

export default function FamilyViolencePage() {
    return (
        <div className="min-h-screen bg-white font-serif text-[#333]">
            {/* Header - Mimicking the screenshot */}
            <header className="bg-[#AC1514] text-white">
                <div className="max-w-[1200px] mx-auto px-4 py-2 flex justify-between items-center text-[12px] font-sans tracking-wider">
                    <div className="flex items-center space-x-4">
                        <Search size={16} />
                        <div className="flex items-center space-x-1">
                            <Globe size={16} />
                            <span>EN / اردو</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="SEARCH"
                                className="bg-transparent border-b border-white/50 text-white placeholder-white/70 text-[10px] py-1 outline-none w-32"
                            />
                            <Search size={12} className="absolute right-0 top-1/2 -translate-y-1/2 opacity-70" />
                        </div>
                        <button className="bg-black text-white px-4 py-1.5 font-bold tracking-widest text-[11px]">
                            HELP
                        </button>
                    </div>
                </div>

                <div className="py-6 flex flex-col items-center border-t border-white/10">
                    <h1 className="text-4xl font-bold tracking-[0.2em] mb-1">JUGNU</h1>
                    <span className="text-sm font-normal tracking-widest opacity-90">خوف سے آگے</span>
                </div>

                <nav className="bg-white text-[#AC1514] border-b border-gray-200">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <ul className="flex justify-center space-x-12 py-4 text-[13px] font-bold tracking-widest font-sans uppercase">
                            <li className="hover:opacity-70 cursor-pointer">About Us</li>
                            <li className="hover:opacity-70 cursor-pointer">Our Services</li>
                            <li className="hover:opacity-70 cursor-pointer">Training</li>
                            <li className="hover:opacity-70 cursor-pointer">Library</li>
                            <li className="hover:opacity-70 cursor-pointer">Blog</li>
                            <li className="hover:opacity-70 cursor-pointer">Contact Us</li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="max-w-[1100px] mx-auto px-8 py-10">
                {/* Breadcrumb */}
                <div className="text-[12px] text-gray-500 mb-8 font-sans">
                    <span>Home</span> <span className="mx-2">/</span> <span className="text-gray-900 font-medium">Family Violence</span>
                </div>

                <article className="space-y-12">
                    {/* What is family violence? */}
                    <section>
                        <h2 className="text-[32px] text-[#AC1514] font-bold mb-6 border-b-2 border-[#AC1514] inline-block pb-1">
                            What is <span className="underline underline-offset-8 decoration-1">family violence</span>?
                        </h2>
                        <div className="text-[17px] leading-[1.8] space-y-6">
                            <p>
                                Family violence is also known as domestic violence, intimate partner violence (IPV), or domestic abuse. It is a pattern of abusive behaviour in a relationship used by one partner to gain or maintain <span className="text-[#AC1514] font-bold">power and control</span> over another person. It can occur among married couples, live-in partners, parents and children, siblings, or other family members.
                            </p>
                            <p>
                                Family violence is not just about physical hitting or slapping. It can be psychological, emotional, financial, or sexual. The abuser uses <span className="text-[#AC1514] font-bold">fear, intimidation, guilt, shame, and manipulation</span> to wear down and control the victim.
                            </p>
                            <p>
                                Anyone can be a victim of family violence, regardless of age, gender, race, religion, or social standing. It happens in all types of relationships – heterosexual, same-sex, and among people who are dating, married, or living together.
                            </p>
                        </div>
                    </section>

                    {/* It Happens To Men As Well */}
                    <section>
                        <h2 className="text-[24px] text-[#AC1514] font-bold mb-4 underline decoration-[#AC1514] underline-offset-4">
                            It Happens To <span className="">Men As Well</span>
                        </h2>
                        <p className="text-[17px] leading-[1.8]">
                            Men can also be victims of domestic abuse. It may be harder for men to report abuse due to stigma, fear of disbelief, or societal expectations. If you are a man experiencing abuse, please know that help is available and you are not alone.
                        </p>
                        <div className="mt-4">
                            <Link href="/resources" className="text-[#AC1514] font-bold underline hover:no-underline text-[17px]">
                                Click Here
                            </Link>
                            <span className="text-[17px] ml-1"> To Access Resources Focused On Male Survivors</span>
                        </div>
                    </section>

                    {/* Podcast Boxes */}
                    <div className="space-y-6">
                        <div className="border border-gray-200 p-6 relative">
                            <div className="absolute right-6 top-6 bg-[#AC1514] text-white text-[10px] font-bold px-3 py-1 tracking-widest rounded-sm">
                                PODCAST
                            </div>
                            <h3 className="text-[20px] text-[#AC1514] font-bold mb-4">
                                Podcast Connection - Child Abuse Prevention
                            </h3>
                            <p className="text-[16px] leading-[1.6] max-w-[85%]">
                                In this episode, we explore the critical importance of child abuse prevention and how early intervention can save lives. We discuss the various forms of abuse and the lasting impact they have on children.
                            </p>
                            <button className="mt-6 text-[14px] font-bold border-b-2 border-black pb-0.5 hover:text-[#AC1514] hover:border-[#AC1514] transition-colors">
                                LISTEN NOW
                            </button>
                        </div>

                        <div className="border border-gray-200 p-6 relative">
                            <div className="absolute right-6 top-6 bg-[#AC1514] text-white text-[10px] font-bold px-3 py-1 tracking-widest rounded-sm">
                                PODCAST
                            </div>
                            <h3 className="text-[20px] text-[#AC1514] font-bold mb-4">
                                Episode 12 - Why do people abuse?
                            </h3>
                            <p className="text-[16px] leading-[1.6] max-w-[85%]">
                                Understanding the root causes of abusive behavior is essential for prevention and healing. In this episode, we talk to experts about the psychological and social factors that contribute to domestic violence.
                            </p>
                            <button className="mt-6 text-[14px] font-bold border-b-2 border-black pb-0.5 hover:text-[#AC1514] hover:border-[#AC1514] transition-colors">
                                LISTEN NOW
                            </button>
                        </div>
                    </div>

                    {/* Why Do Some People Abuse? */}
                    <section className="text-center max-w-[900px] mx-auto py-10">
                        <h2 className="text-[28px] text-[#AC1514] font-bold mb-6">
                            Why do some people abuse?
                        </h2>
                        <div className="text-[17px] leading-[1.8] space-y-6">
                            <p>
                                Abuse is a choice. People who abuse often do so because they believe they have the right to control and dominate others. They may have learned abusive behaviours from their family of origin, or they may have low self-esteem and use abuse to feel powerful. It is important to note that stress, alcohol, drugs, or mental illness do not cause someone to be abusive.
                            </p>
                        </div>
                    </section>

                    {/* The impact of violence */}
                    <section className="text-center max-w-[900px] mx-auto py-6">
                        <h2 className="text-[28px] text-[#AC1514] font-bold mb-6">
                            The impact of violence
                        </h2>
                        <div className="text-[17px] leading-[1.8] space-y-6">
                            <p>
                                The impact of family violence is far-reaching and can last a lifetime. Survivors may experience a wide range of physical, emotional, and psychological effects, including chronic pain, anxiety, depression, and post-traumatic stress disorder (PTSD).
                            </p>
                            <p className="text-[#AC1514] font-bold">
                                Learn more about the physical and mental health impacts of abuse.
                            </p>
                        </div>
                    </section>

                    {/* How widespread is it? */}
                    <section className="bg-gray-50 py-12 px-10 text-center">
                        <h2 className="text-[28px] text-[#AC1514] font-bold mb-6">
                            How widespread is family violence?
                        </h2>
                        <div className="text-[17px] leading-[1.8] max-w-[800px] mx-auto">
                            <p>
                                Family violence is a global crisis that affects millions of people every year. According to the World Health Organization, 1 in 3 women worldwide have experienced physical or sexual violence in their lifetime. In Pakistan, the statistics are equally alarming, with thousands of cases reported each year.
                            </p>
                            <button className="mt-8 bg-[#AC1514] text-white px-8 py-3 font-bold tracking-widest text-[14px] hover:bg-black transition-colors">
                                VIEW OUR IMPACT
                            </button>
                        </div>
                    </section>

                    {/* Impact on Children */}
                    <section className="py-10">
                        <h2 className="text-[28px] text-[#AC1514] font-bold text-center mb-10">
                            Impact on Children
                        </h2>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="text-[17px] leading-[1.8] space-y-6">
                                <p>
                                    Children who witness or experience family violence are deeply affected. They may experience anxiety, depression, and behavioral problems. It is crucial to provide a safe and supportive environment for children to heal and thrive.
                                </p>
                                <ul className="space-y-4 list-disc pl-5">
                                    <li>Emotional and psychological distress</li>
                                    <li>Behavioral problems and academic difficulties</li>
                                    <li>Increased risk of future violence</li>
                                    <li>Long-term health issues</li>
                                </ul>
                            </div>
                            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center text-gray-400 font-sans">
                                [Image: Impact on Children]
                            </div>
                        </div>
                    </section>

                    {/* Warning Signs */}
                    <section className="py-10 bg-[#AC1514] text-white text-center rounded-sm">
                        <h2 className="text-[32px] font-bold mb-10">Warning Signs</h2>
                        <div className="grid md:grid-cols-3 gap-8 px-10">
                            <div className="space-y-4">
                                <div className="text-4xl font-bold opacity-30">01</div>
                                <h4 className="text-[20px] font-bold">Physical Injuries</h4>
                                <p className="text-[15px] opacity-90">Unexplained bruises, cuts, or broken bones.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-4xl font-bold opacity-30">02</div>
                                <h4 className="text-[20px] font-bold">Emotional Changes</h4>
                                <p className="text-[15px] opacity-90">Withdrawal, anxiety, or sudden mood swings.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-4xl font-bold opacity-30">03</div>
                                <h4 className="text-[20px] font-bold">Controlling Behavior</h4>
                                <p className="text-[15px] opacity-90">Being overly monitored or isolated from others.</p>
                            </div>
                        </div>
                    </section>

                    {/* Resources */}
                    <section className="text-center py-10">
                        <h2 className="text-[32px] text-[#AC1514] font-bold mb-12">Resources and Hotlines</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-10 border-t-4 border-[#AC1514] text-left">
                                <h4 className="text-[22px] font-bold mb-4">National Hotlines</h4>
                                <ul className="space-y-4 text-[17px]">
                                    <li>Police: <span className="font-bold underline">15</span></li>
                                    <li>Domestic Violence: <span className="font-bold underline">1099</span></li>
                                    <li>Women's Helpline: <span className="font-bold underline">1122</span></li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-10 border-t-4 border-[#AC1514] text-left">
                                <h4 className="text-[22px] font-bold mb-4">Local Services</h4>
                                <p className="mb-6 text-[16px]">Find shelters, legal aid, and counseling services in your area.</p>
                                <Link href="/get-help" className="flex items-center text-[#AC1514] font-bold group">
                                    FIND SERVICES <MoveRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </section>
                </article>
            </main>

            {/* Footer - Mimicking the screenshot */}
            <footer className="bg-[#AC1514] text-white pt-16 pb-8">
                <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-4 gap-12">
                    <div className="col-span-2">
                        <h2 className="text-5xl font-bold tracking-tighter mb-4 italic">JUGNU</h2>
                        <p className="text-[14px] leading-6 opacity-80 max-w-md">
                            Jugnu Is Pakistan’s First Digital Resource Center Dedicated To Empowering Survivors Of Domestic And Family Violence. We Provide Information, Resources, And Support To Help Break The Cycle Of Abuse.
                        </p>
                        <div className="mt-8 flex space-x-6">
                            <Instagram size={20} className="cursor-pointer opacity-70 hover:opacity-100" />
                            <Facebook size={20} className="cursor-pointer opacity-70 hover:opacity-100" />
                            <Youtube size={20} className="cursor-pointer opacity-70 hover:opacity-100" />
                            <Linkedin size={20} className="cursor-pointer opacity-70 hover:opacity-100" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-[16px] mb-6 uppercase tracking-widest">Quick Links</h4>
                        <ul className="space-y-4 text-[14px] opacity-80">
                            <li className="hover:opacity-100 cursor-pointer">About Us</li>
                            <li className="hover:opacity-100 cursor-pointer">Resources</li>
                            <li className="hover:opacity-100 cursor-pointer">Training</li>
                            <li className="hover:opacity-100 cursor-pointer">Podcast</li>
                            <li className="hover:opacity-100 cursor-pointer">Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-[16px] mb-6 uppercase tracking-widest">Get Support</h4>
                        <ul className="space-y-4 text-[14px] opacity-80">
                            <li className="hover:opacity-100 cursor-pointer underline">National Helpline: 1099</li>
                            <li className="hover:opacity-100 cursor-pointer underline">Police Emergency: 15</li>
                            <li className="hover:opacity-100 cursor-pointer underline">Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-center text-[11px] opacity-50 tracking-widest">
                    © 2024 JUGNU PROJECT. ALL RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    );
}

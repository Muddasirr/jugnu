import Link from "next/link";

export default function FamilyViolencePage() {
    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-16">

                {/* What Is Family Violence Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        What Is <span className="underline decoration-1 underline-offset-4">Family Violence</span>?
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black">
                        <p>
                            Family violence is also known as domestic violence, intimate partner violence (IPV), or domestic abuse. It is a pattern of abusive behaviour in a relationship used by one partner to gain or maintain power and control over another person. It can occur among married couples, live-in partners, parents and children, siblings, or other family members.
                        </p>
                        <p>
                            Family violence is not just about physical hitting or slapping. It can be psychological, emotional, financial, or sexual. The abuser uses fear, intimidation, guilt, shame, and manipulation to wear down and control the victim.
                        </p>
                    </div>
                </section>

                {/* It Happens To Men As Well Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        It Happens To <span className="underline decoration-1 underline-offset-4">Men As Well</span>
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black">
                        <p>
                            Men can also be victims of domestic abuse. It may be harder for men to report abuse due to stigma, fear of disbelief, or societal expectations. If you are a man experiencing abuse, please know that help is available and you are not alone.
                        </p>
                        <p>
                            <Link href="/resources" className="text-[#AC1514] font-bold underline hover:no-underline">Click Here</Link> To Access Resources Focused On Male Survivors
                        </p>
                    </div>
                </section>

                {/* Why Do Some People Abuse Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        Why Do Some People <span className="underline decoration-1 underline-offset-4">Abuse</span>?
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black">
                        <p>
                            Abuse is a choice. People who abuse often do so because they believe they have the right to control and dominate others. They may have learned abusive behaviours from their family of origin, or they may have low self-esteem and use abuse to feel powerful.
                        </p>
                        <p>
                            It is important to note that stress, alcohol, drugs, or mental illness do not cause someone to be abusive. These may be contributing factors, but they are not excuses for abuse.
                        </p>
                    </div>
                </section>

                {/* Types Of Family Violence Section */}
                <section className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        Types Of <span className="underline decoration-1 underline-offset-4">Family Violence</span>
                    </h2>

                    {/* Physical Abuse */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">Physical Abuse</h3>
                        <p className="text-base md:text-lg leading-relaxed text-black">
                            Physical abuse includes hitting, slapping, punching, kicking, choking, burning, or any other form of physical harm. It also includes threatening physical harm or using weapons.
                        </p>
                    </div>

                    {/* Emotional/Psychological Abuse */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">Emotional/Psychological Abuse</h3>
                        <p className="text-base md:text-lg leading-relaxed text-black">
                            Emotional abuse includes constant criticism, name-calling, humiliation, threats, intimidation, gaslighting, isolation from friends and family, and controlling behaviour.
                        </p>
                    </div>

                    {/* Financial Abuse */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">Financial Abuse</h3>
                        <p className="text-base md:text-lg leading-relaxed text-black">
                            Financial abuse includes controlling access to money, preventing someone from working, taking their earnings, or making all financial decisions without input.
                        </p>
                    </div>

                    {/* Sexual Abuse */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">Sexual Abuse</h3>
                        <p className="text-base md:text-lg leading-relaxed text-black">
                            Sexual abuse includes any unwanted sexual activity, forcing someone to perform sexual acts, or using sex as a weapon or punishment.
                        </p>
                    </div>

                    {/* Digital Abuse */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">Digital Abuse</h3>
                        <p className="text-base md:text-lg leading-relaxed text-black">
                            Digital abuse includes monitoring someone&apos;s phone or social media, using technology to track or stalk, sharing intimate images without consent, or using online platforms to harass.
                        </p>
                    </div>
                </section>

                {/* How Widespread Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        How <span className="underline decoration-1 underline-offset-4">Widespread</span> Is It?
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black">
                        <p>
                            Family violence is a global issue that affects people of all backgrounds, cultures, and socioeconomic levels. According to the World Health Organization, about 1 in 3 women worldwide have experienced physical or sexual violence by an intimate partner.
                        </p>
                        <p>
                            In Pakistan, studies suggest that a significant percentage of women experience some form of domestic violence in their lifetime. However, many cases go unreported due to stigma, fear, and lack of support systems.
                        </p>
                    </div>
                </section>

                {/* Warning Signs Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        Warning <span className="underline decoration-1 underline-offset-4">Signs</span>
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black">
                        <p>Some warning signs that someone may be experiencing abuse include:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Unexplained injuries or frequent "accidents"</li>
                            <li>Withdrawal from friends, family, or activities</li>
                            <li>Changes in personality or behaviour</li>
                            <li>Fear of their partner or family member</li>
                            <li>Constant check-ins with partner</li>
                            <li>Limited access to money or resources</li>
                            <li>Low self-esteem or depression</li>
                        </ul>
                    </div>
                </section>

                {/* Why Don't They Just Leave Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        Why Don&apos;t They Just <span className="underline decoration-1 underline-offset-4">Leave</span>?
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black">
                        <p>
                            Leaving an abusive relationship is incredibly difficult and dangerous. There are many reasons why someone may stay, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Fear of the abuser or retaliation</li>
                            <li>Financial dependence</li>
                            <li>Concern for children</li>
                            <li>Cultural or religious beliefs</li>
                            <li>Shame and embarrassment</li>
                            <li>Hope that the abuser will change</li>
                            <li>Lack of support system</li>
                            <li>Lack of awareness of available resources</li>
                        </ul>
                        <p>
                            It is important to support survivors without judgment and help them access resources when they are ready.
                        </p>
                    </div>
                </section>

                {/* The Cycle of Violence Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        The Cycle Of <span className="underline decoration-1 underline-offset-4">Violence</span>
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black">
                        <p>
                            Abuse often follows a predictable pattern known as the cycle of violence:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 pl-4">
                            <li><strong>Tension Building:</strong> Tension increases, communication breaks down, and the victim may feel like they are "walking on eggshells."</li>
                            <li><strong>Incident:</strong> The abuse occurs - physical, emotional, sexual, or other forms.</li>
                            <li><strong>Reconciliation:</strong> The abuser may apologize, make excuses, blame the victim, or deny the abuse happened.</li>
                            <li><strong>Calm:</strong> A period of peace follows, often called the "honeymoon phase," where the abuser may be loving and attentive.</li>
                        </ul>
                        <p>
                            Over time, the cycle often repeats and can escalate in severity.
                        </p>
                    </div>
                </section>

                {/* Impact on Children Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        Impact On <span className="underline decoration-1 underline-offset-4">Children</span>
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black">
                        <p>
                            Children who witness or experience family violence are deeply affected. They may experience:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Anxiety, depression, and PTSD</li>
                            <li>Behavioural problems</li>
                            <li>Difficulty in school</li>
                            <li>Low self-esteem</li>
                            <li>Increased risk of becoming a victim or perpetrator of violence later in life</li>
                        </ul>
                        <p>
                            Breaking the cycle of violence is crucial for protecting future generations.
                        </p>
                    </div>
                </section>

                {/* Getting Help Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        Getting <span className="underline decoration-1 underline-offset-4">Help</span>
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black">
                        <p>
                            If you or someone you know is experiencing family violence, help is available. You can:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Call the police (15) if you are in immediate danger</li>
                            <li>Reach out to a trusted friend or family member</li>
                            <li>Contact a domestic violence hotline</li>
                            <li>Visit a local shelter or safe house</li>
                            <li>Consult with a counsellor or therapist</li>
                        </ul>
                        <p>
                            <Link href="/get-help" className="text-[#AC1514] font-bold underline hover:no-underline">Visit our Get Help page</Link> for a directory of resources and services.
                        </p>
                    </div>
                </section>

                {/* Related Resources Section */}
                <section className="space-y-6 border-t pt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#AC1514]">
                        Related <span className="underline decoration-1 underline-offset-4">Resources</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link href="/resources" className="block p-6 border border-gray-200 rounded-lg hover:border-[#AC1514] hover:shadow-md transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Survivor Resources</h3>
                            <p className="text-gray-600">Access tools, guides, and support materials for survivors.</p>
                        </Link>
                        <Link href="/survivor-directory" className="block p-6 border border-gray-200 rounded-lg hover:border-[#AC1514] hover:shadow-md transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Survivor&apos;s Directory</h3>
                            <p className="text-gray-600">Find emergency services and support organizations near you.</p>
                        </Link>
                        <Link href="/training" className="block p-6 border border-gray-200 rounded-lg hover:border-[#AC1514] hover:shadow-md transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Training &amp; Development</h3>
                            <p className="text-gray-600">Learn about our training programs for professionals and organizations.</p>
                        </Link>
                        <Link href="/consultancy" className="block p-6 border border-gray-200 rounded-lg hover:border-[#AC1514] hover:shadow-md transition-all">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Consultancy Services</h3>
                            <p className="text-gray-600">Partner with us to create safer workplaces and communities.</p>
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    );
}

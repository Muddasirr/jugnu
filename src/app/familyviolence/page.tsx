import React from 'react';
import Link from 'next/link';
import { Search, Globe, Instagram, Facebook, Youtube, Linkedin, MoveRight } from 'lucide-react';

export default function FamilyViolencePage() {
    return (
        <div className="min-h-screen bg-white font-serif text-[#333]">
            {/* Header - Mimicking the screenshot */}


            {/* Main Content */}
            <main className="max-w-[1100px] mx-auto px-8 py-10">
                <div className="space-y-16">
                    {/* What Is The Family Violence Sector? */}
                    <section>
                        <h1 className="text-[32px] font-bold mb-8 underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            What Is The <span className="text-[#AC1514]">Family Violence Sector?</span>
                        </h1>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333]">
                            <p>
                                The Family Violence Sector in Pakistan encompasses a network of government institutions, non-governmental organizations, civil society organizations, community-based organizations and individual actors that are committed to preventing, and responding to, violence within the family and intimate relationships. This includes addressing <span className="text-[#AC1514] font-medium">Domestic Violence, Child Abuse, Girl Child Marriage, Intimate Partner Violence, Elder Abuse, and other forms of Gender-Based Violence and Harm</span> that affect individuals' safety, dignity and rights.
                            </p>
                            <p>
                                This sector operates on multiple levels – from <span className="text-[#AC1514] font-medium">Policy Development and Legal Reform to direct service provision, research, advocacy and public education.</span> It includes the combined efforts of Women Development Departments, Child Protection Services, Social Welfare Departments, providers of legal aid, shelter homes, law enforcement agencies and civil-society organizations, that work together to promote safety, justice and empowerment for survivors.
                            </p>
                            <p>
                                As an active member of this ecosystem, <span className="text-[#AC1514] font-medium">The Jugnu Project Domestic Violence Resource Center</span> contributes to building a <span className="text-[#AC1514] font-medium">coordinated and survivor-centric response</span> to family violence in Pakistan. The center positions itself as a specialized knowledge and capacity-building hub, <span className="text-[#AC1514] font-medium">bridging the gap between policy, practice and community response,</span> by focusing on <span className="text-[#AC1514] font-medium">research, policy, advocacy, capacity-building and the creation of educational and awareness resources and other practical tools</span> that strengthen both institutional and community-level responses. Through these initiatives, the Jugnu Project Domestic Violence Resource Center supports government departments, civil society organizations and frontline service providers in developing <span className="text-[#AC1514] font-medium">coordinated, evidence-informed interventions and promoting strategic collaboration</span> amongst service providers to <span className="text-[#AC1514] font-medium">ensure survivors receive timely, confidential and holistic support.</span>
                            </p>
                            <p>
                                The Center's work directly contributes to Pakistan's national and international commitments under <span className="text-[#AC1514] font-medium underline">SDG-5</span> and <span className="text-[#AC1514] font-medium underline">SDG-16</span>, by promoting inclusive systems that ensure safety, justice and empowerment for survivors.
                            </p>
                            <p>
                                By integrating <span className="text-[#AC1514] font-medium">Research, Policy, Dialogue, Awareness and capacity-building training and consultancy,</span> The Jugnu Project Domestic Violence Resource Center plays a pivotal role in shaping a <span className="text-[#AC1514] font-medium">resilient and collaborative family violence response ecosystem in Pakistan</span> – one that advocates gender justice, social inclusive, institutional accountability and the long-term goal of eliminating domestic violence in all its forms.
                            </p>
                        </div>
                    </section>

                    {/* Preventing And Responding To Family Violence */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8 underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Preventing And <span className="text-[#AC1514]">Responding To Family Violence</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333]">
                            <p>
                                Working towards <span className="text-[#AC1514] font-medium">Ending Family Violence Is Long-Term Work</span> that includes participation from all levels across the community(s). This can be divided into three main categories: <span className="text-[#AC1514] font-medium italic">(1) Prevention (or "Primary Prevention"), (2) Early Intervention (or "Secondary Prevention") and (3) Response (or "Tertiary Prevention").</span>
                            </p>
                            <p className="italic font-medium text-[19px]">
                                The activities and initiatives undertaken in each category complement and reinforce each other to provide a holistic support system for survivors.
                            </p>
                        </div>

                        {/* Categorized Sections */}
                        <div className="mt-16 space-y-20">
                            {/* Prevention */}
                            <div className="border-b border-gray-200 pb-12">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-[28px] font-bold text-[#AC1514] underline underline-offset-8 decoration-[#AC1514]">
                                        (1)What Is "Prevention – Or Primary Prevention"?
                                    </h3>
                                    <button className="bg-[#AC1514] text-white px-6 py-2 text-[12px] font-bold hover:bg-black transition-colors rounded-sm">
                                        READ MORE
                                    </button>
                                </div>
                                <p className="text-[18px] leading-[1.7] text-[#333]">
                                    This refers to initiatives taken to prevent violence from happening in the first place. It involves challenging and / or addressing the factors and mindsets that drive family violence. These are usually referred to as "gendered drivers", due to the imbalance of power in the family social structure. These initiatives / activities may be undertaken across communities, organizations and social settings where people live, learn work and socialise every day.
                                </p>
                            </div>

                            {/* Early Intervention */}
                            <div className="border-b border-gray-200 pb-12">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-[28px] font-bold text-[#AC1514] underline underline-offset-8 decoration-[#AC1514]">
                                        (2)What Is "Early Intervention – Or Secondary Prevention"?
                                    </h3>
                                    <button className="bg-[#AC1514] text-white px-6 py-2 text-[12px] font-bold hover:bg-black transition-colors rounded-sm">
                                        READ MORE
                                    </button>
                                </div>
                                <p className="text-[18px] leading-[1.7] text-[#333]">
                                    This refers to initiatives that are designed to (i) stop early signs of abuse from escalating, (ii) prevent violence from recurring, and / or (iii) reduce the long-term impacts of family and gender-based violence. This involves working with individuals (or communities) that may be at risk of either perpetrating or experiencing violence. The efforts are focused mainly on areas / situations where violence is most likely to occur. It spans across communities and social groups, and aims to improve approaches in recognizing and responding to signs of abuse.
                                </p>
                            </div>

                            {/* Response */}
                            <div className="border-b border-gray-200 pb-12">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-[28px] font-bold text-[#AC1514] underline underline-offset-8 decoration-[#AC1514]">
                                        (3)What Is "Response – Or Tertiary Prevention"?
                                    </h3>
                                    <button className="bg-[#AC1514] text-white px-6 py-2 text-[12px] font-bold hover:bg-black transition-colors rounded-sm">
                                        READ MORE
                                    </button>
                                </div>
                                <p className="text-[18px] leading-[1.7] text-[#333]">
                                    This refers to responding to survivors when they need support in order to stay safe from someone using family violence against them. This may take place when they are still living with the abuser(s), are planning to leave, or have already left the abusive situation / relationship. Initiatives under this category can include crisis response, case management, specialist counselling and recovery support. Some service providers can also administer frontline support for individuals experiencing family violence.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* The Primary Prevention And Response Ecosystem */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            The Primary Prevention <span className="text-[#AC1514]">And Response Ecosystem</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                In Primary Prevention, we focus on the changing of mindsets to build a society that is inclusive, respectful and safe. It involves focusing on social structures and planting ideas so that the society as a whole can change for a better tomorrow. This approach focuses on working with the whole population to address and change underlying social conditions that produce, encourage and justify violence (especially against women and girls). It works to address the attitudes, norms, socio-cultural and traditional practices, structures and power imbalances that drive said violence. Initiatives that are aimed at communities must be ultimately controlled and led by the communities themselves. This is what "Lived Experience" means. For us, this means supporting particular community-driven programs in order to create social change that prevents violence both within and directed towards particular communities (such as survivors). Due to the complexities involved in addressing family violence, primary prevention initiatives target places where people live, work, learn, socialize and play. This includes corporations and small businesses, community-led organizations, educational institutions (schools and universities), healthcare institutions, financial institutions, public spaces and even media houses. It is only through creating such a holistic system that we can target and combat family violence effectively.
                            </p>
                        </div>
                    </section>

                    {/* The Jugnu Project’s Primary Prevention Framework */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            The Jugnu Project's <span className="text-[#AC1514]">Primary Prevention Framework</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Preventing Family and Gender-Based Violence before it occurs is called "Primary Prevention". This is a long-term, complex work that involves addressing gendered drivers, including social norms, attitudes, culture and tradition, and structures and practices within the society that promote gendered inequality.
                            </p>
                            <p className="text-[#AC1514] font-medium">
                                A Primary Prevention Approach seeks to change the social conditions that produce and drive violence against women; and which may even excuse, justify and / or promote it.
                            </p>
                            <p>
                                This strategy of Primary Prevention works across the whole population to address the attitudes, norms, practices, structures and the power imbalances that drive violence against women.
                            </p>
                            <p>
                                Organizations and individuals working in the family violence sector understand the various socio-ecological drivers that operate at various levels to encourage and reward the systemic violence against women, girls and children. Aside from individual factors, these also include community, organization, institutional and societal drivers.
                            </p>
                        </div>
                    </section>

                    {/* Our Commitment */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Our <span className="text-[#AC1514]">Commitment</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-center">
                            <p>
                                As a Domestic Violence Resource Center and Consultancy, The Jugnu Project uses an evidence-based framework alongside lived experiences of survivors in order to help educate stakeholders about this pervasive issue. We aim to build an ecosystem that is supportive of survivors of domestic violence.
                            </p>
                        </div>
                    </section>

                    {/* Using An Intersectional Approach */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Using An <span className="text-[#AC1514]">Intersectional Approach</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Family violence remains one of Pakistan's most entrenched and complex social problems. It intersects with various social issues and requires a committed and coordinated, long-term response from all sectors of society.
                            </p>
                            <p>
                                An <span className="font-bold text-[#AC1514]">Intersectional Lens</span> in Primary Prevention means looking at how family and gender-based violence occurs in the context of both gender inequality and multiple other forms of structural and systemic inequality, oppression and discrimination.
                            </p>
                            <p>
                                An <span className="font-bold text-[#AC1514]">Intersectional Approach</span> means that we take action to ensure that Primary Prevention programs, systems and policies recognize and address the multiple factors and the various other forms of oppression that make up family and gender-based violence.
                            </p>
                            <p>
                                Through our various partnerships and collaborations with key organizations working with key cohorts and communities, The Jugnu Project seeks to demonstrate and build on our commitment to intersectionality. By integrating it into our work, we can take meaningful action to prevent family and gender-based violence in solidarity with the various communities that are leading the way on the ground.
                            </p>
                            <p>
                                An Intersectional Approach is critical in work that aims to prevent violence against women, specifically due to the patriarchal <span className="font-bold text-[#AC1514]">Power Structures That Consistently Intersect With Other Institutional Systems Of Power.</span> Violence against women occurs in the context of both gender inequality along with and multiple other forms of structural and systematic inequality, oppression and discrimination.
                            </p>
                            <p>
                                It is only through understanding these intersecting factors that we can properly address the drivers of family and gender-based violence, and be able to assist survivors to the best of our ability(s).
                            </p>
                            <p>
                                In our work, we aim to do our best to ensure that we do not involuntarily reinforce the exclusion of any communities that have overlapping experiences with oppression. This means consistently bringing into perspective how different communities view, experience and understand family and gender-based violence - along with any drivers of said violence. This also includes considering how the structures and systems we built may inadvertently be perpetuating inequalities that reinforce said violence.
                            </p>
                        </div>
                    </section>

                    {/* Prevention At The Workplace */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Prevention <span className="text-[#AC1514]">At The Workplace</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Workplaces and corporate organizations can play a valuable role in identifying, responding to and even preventing family violence. Most people spend an inordinate amount of their lives at work. However, workplaces can usually be a site where gender inequality and disrespect towards women and other communities are reinforced, resulting in experiences of harassment, discrimination and violence.
                            </p>
                            <p>
                                In 2023, The World Economic Forum's Global Gender Gap Report Ranked Pakistan At The Bottom Of 145 Countries Ranked.
                            </p>
                            <p>
                                It Is Essential That Workplaces Play Their Part In Assisting Employees Facing Family Violence, Through Accessing Family Violence Leave, Entitlements And Support. Workplaces Should Also Conduct Monthly Family Violence Awareness Sessions, So That Employees Are Aware Of What Constitutes Family Violence And They Can Take - Or Help Others Take - Appropriate Steps If Necessary.
                            </p>
                            <p>
                                When Managers, Workplace Leaders And Key Decision Makers At The Workplace Advocate For Programs, Policies And Initiatives That Promote Safe, Supportive And Gender-Equal Work Environments; They Are Directly Contributing To The Prevention Of Violence Against Women, And Family Violence In General.
                            </p>
                            <p>
                                By Focusing On Workplaces As A Key Setting For Prevention, We Can Attempt To Address Drivers To Gender-Based Violence, And Create Safe And Supportive Environments For All Employees And Their Families Affected By Violence.
                            </p>
                        </div>
                    </section>

                    {/* Understanding Family Violence As A Workplace Issue */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Understanding <span className="text-[#AC1514]">Family Violence As A Workplace Issue</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Family Violence Is A Prevalent And Complex Social Issue That Has Devastating And Long-Lasting Effects On Adults, Children - And Even Animals (Pets). In Pakistan, Family Violence Is One Issue That Is Deeply Embedded In The Sociocultural Threads That Make Up The Society. Family Violence Has A Significant Impact On The Economy. According To One Study, Violence Against Women And Girls Is Estimated To Cost Pakistan 80 Million Days Annually. The National Estimates Of Direct Costs Incurred In Just 12 Months (1 Year) Due To Intimate Partner Violence (IPV) Against Women And Girls Comes Up To PKR 1,399,786,283. (ICRW, 2021) In Addition, Based On The Women's Survey, It Is Estimated That Approximately 1.2 Million School Days Are Missed By Children Annually Due To The Impact Of Violence Perpetrated By An Intimate Partner On Their Mother. Workplaces Are Increasingly Being Recognized As Sites Of Both Abuse, And Also Places Where People Can Seek Support Against Family And Domestic Violence. Your Business Can Also Be A Part Of The Solution. Workplace Policies Embedded With Staff Training Can Lead To Creating A Safer And More Productive Environment For Employees. It Is Important That Your Business Accesses Specialists Of Family And Gender-Based Violence Early, So You Are Equipped To Respond Safely.
                            </p>
                        </div>
                    </section>

                    {/* Our Role In Workplace Policy Development */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Our Role In <span className="text-[#AC1514]">Workplace Policy Development</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                The Jugnu Project Recognizes That Family Violence Is Not A Private Matter. Rather, It Is An Issue That Affects The Survivor Both Inside And Outside The Home. In The Workplace, It Can Adversely Affect An Employee's Safety, Performance And Well-Being.
                            </p>
                            <p>
                                We Believe That Every Employer Has A <span className="text-[#AC1514] font-medium">Duty Of Care</span> To Create A Workplace That Is Safe, Supportive And Responsive To Employees Experiencing, Or Affected By, Domestic And Family Violence.
                            </p>
                            <p>
                                We Play A Leading Role In Supporting Workplaces To Develop, Strengthen And Implement Family Violence Policies That Protect Employees And Promote Gender Equality. Our Role Covers <span className="text-[#AC1514] font-medium">Policy Development, Consultancy, Training And Capacity Building, Technical Assistance, Research And Advocacy.</span>
                            </p>
                        </div>
                    </section>

                    {/* Consultancy, Policy Development And Review */}
                    <section>
                        <h3 className="text-[24px] font-bold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Consultancy, Policy Development And Review
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We Work Alongside Organizations, Government Agencies And Corporations To:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">Develop Domestic And Family Violence Workplace Policies That Align With Pakistan's Labor Laws, Gender Equality Commitments And International Best Practices.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Develop, Or Integrate, Survivor-Centered Provisions */}
                    <section>
                        <h3 className="text-[24px] font-bold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Develop, Or Integrate, Survivor-Centered Provisions, Such As:
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">Paid Or Flexible Leave For Employees Experiencing, Or Affected By, Family Violence</li>
                                <li className="pl-2">Confidential Reporting Mechanisms</li>
                                <li className="pl-2">Steps To Ensure Non-Retaliation And Privacy Protections</li>
                            </ul>
                            <p>Review Existing HR Policies To Ensure Alignment With Anti-Harassment And Non-Discrimination Laws.</p>
                        </div>
                    </section>

                    {/* Capacity-Building And Training */}
                    <section>
                        <h3 className="text-[24px] font-bold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Capacity-Building And Training
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We Conduct Workshops And Provide Capacity-Building Trainings For Organizations To:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">Help Staff And Management Understand The Impact Of Family Violence On The Workplace</li>
                                <li className="pl-2">Build Staff Capacity To Recognize Signs Of Abuse, And Respond Safely And Appropriately</li>
                                <li className="pl-2">Equip Managers, Workplace Leaders And HR Personnel To Handle Disclosures With Empathy, Confidentiality And Care</li>
                                <li className="pl-2">Foster Trauma-Informed And Survivor-Centric Workplace Cultures</li>
                            </ul>
                        </div>
                    </section>

                    {/* Research */}
                    <section>
                        <h3 className="text-[24px] font-bold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Research
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We Conduct And Share Research, Evidence-Based Data And Best Practices On The Intersection Of Family Violence And Employment, Including (But Not Limited To):</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">The Economic Costs Of Violence</li>
                                <li className="pl-2">The Role Of Workplaces In Early Intervention</li>
                                <li className="pl-2">Policy Models That Improve Survivor Retention And Recovery</li>
                            </ul>
                        </div>
                    </section>

                    {/* Evidence-Based Advocacy */}
                    <section>
                        <h3 className="text-[24px] font-bold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Evidence-Based Advocacy
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We Advocate For</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">The Inclusion Of Family Violence Clauses In Labor Laws And Workplace Codes Of Conduct</li>
                                <li className="pl-2">The Adoption Of The ILO Convention 190 On Harassment And Violence At Work</li>
                                <li className="pl-2">Employer Accountability And Monitoring Frameworks To Ensure Survivor Safety And Sustained Protection</li>
                            </ul>
                        </div>
                    </section>

                    {/* Cross-Sector Collaboration */}
                    <section>
                        <h3 className="text-[24px] font-bold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Cross-Sector Collaboration
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We Collaborate With Various Sectors To Promote Integrated Approaches That Recognize Family Violence As A Public And Economic Concern, Not Simply A "Private Matter"</p>
                            <p>We Work Alongside The Following Sectors:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">Governmental Agencies And Ministries</li>
                                <li className="pl-2">Private Sector Organizations And Chambers Of Commerce</li>
                                <li className="pl-2">NGOs</li>
                                <li className="pl-2">Civil Society And Advocacy Coalitions</li>
                            </ul>
                            <p className="mt-4">
                                Our Goal Is To Build Workplaces That Are <span className="text-[#AC1514]">Safe, Supportive And Equitable;</span> Where Employees Affected By Family Violence Can Work, Recover And Thrive - Without Fear, Stigma Or Discrimination.
                            </p>
                        </div>
                    </section>

                    {/* Specialist Family Violence Services */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Specialist <span className="text-[#AC1514]">Family Violence Services</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Specialist Family Violence Services Provide Crisis Response And Case Management To Survivors Of Family Violence. Specialist Family Violence Practitioners Are Highly Skilled In Understanding What People Undergoing Family Violence Experience And How Best To Keep Them Safe. They Help The Survivor Navigate The Various Services And Support Provided By The Wider Family Violence System. Such Practitioners Have A Dedicated Role In Assisting Survivors, With A Focus On The Survivors' Safety And Managing The Dynamic Risk Posed By The Perpetrator.
                            </p>
                            <p>A Specialist Family Violence Practitioner Will:</p>
                            <ul className="list-none space-y-2 pl-0">
                                <li><span className="font-bold">-Firstly,</span> Focus On The Risk And Safety Needs Of The Survivor.</li>
                                <li><span className="font-bold">-Secondly,</span> Coordinate With Other Crisis Response Services To Ensure The Survivor Receives The Best Possible Help Urgently.</li>
                                <li><span className="font-bold">-Lastly,</span> Advocate With, And On Behalf Of, The Survivor For Greater Rights.</li>
                            </ul>
                            <p>When Speaking To A Survivor, Some Of The Responsibilities Of A Specialist Family Violence Practitioner Will Include:</p>
                            <ul className="list-none space-y-2 pl-0">
                                <li><span className="font-bold">-Ask</span> About Their Experience With The Perpetrator</li>
                                <li><span className="font-bold">-Assess</span> The Level Of Risk Or Harm To The Survivor And Their Children</li>
                                <li><span className="font-bold">-Undertake</span> Safety Planning With The Survivor</li>
                                <li><span className="font-bold">-Provide</span> The Survivor With Options For Support And Emergency Assistance</li>
                                <li><span className="font-bold">-Help</span> The Survivor Navigate Through The Various Support Systems That They May Need</li>
                                <li><span className="font-bold">-Advocate</span> On Behalf Of A Survivor</li>
                            </ul>
                            <p>
                                We At The Jugnu Project Aim To Do Our Best When Assisting Survivors Of Family Violence Navigate The Socio-Legal System.
                            </p>
                            <p>
                                If You (Or Anyone You Know) Needs Assistance, Please Check Our <Link href="/directory" className="font-bold underline text-[#AC1514]">VICTIM'S DIRECTORY</Link> To Find Information And Contact Details For Survivor Support Services Nearest To You.
                            </p>
                        </div>
                    </section>

                    {/* Work With Us */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8  text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Work <span className="text-[#AC1514]">With Us</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                The Jugnu Project Consultancy Offers Consultancy, Training And Policy Support For Organizations Seeking To Develop Or Improve Their Family Violence Policies.
                            </p>
                            <p>
                                To Learn More About How The Jugnu Project Can Work With Your Organization, Please Reach Out To Us At <a href="mailto:Thejugnuproject@Gmail.Com" className="font-bold underline text-[#333]">Thejugnuproject@Gmail.Com</a>.
                            </p>
                        </div>
                    </section>

                    {/* Legislative And Policy Frameworks */}
                    <section>
                        <h2 className="text-[32px] font-bold mb-8  text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Legislative And <span className="text-[#AC1514]">Policy Frameworks</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                You Can Check Our Resources For Legislative And Policy Frameworks Regarding Family Violence <Link href="/resources" className="font-bold underline text-[#AC1514]">Here</Link>
                            </p>
                            <p className="text-[#AC1514] font-medium uppercase">
                                WELLBEING, SELF-CARE AND PROFESSIONAL SUSTAINABILITY - FOR FAMILY VIOLENCE PRACTITIONERS
                            </p>
                            <p>
                                Trauma From Constantly Experiencing Or Witnessing Domestic Violence Can Cause Burnout. As A Specialist Family Violence Practitioner, You Are Constantly Working With People Who Are Either Experiencing, Or Have Previously Experienced, Abuse And Trauma. This Means That You Are Often Called Upon To Respond To Challenging And Complex Situations.
                            </p>
                            <p>
                                It Is Important To Recognize The Impact On Family Violence Practitioners Of Continuously Responding To Challenging Domestic Violence Cases, While Having To Work Within The Context Of Structural Oppression And Inequality. At The Very Least, Prolonged Exposure To Such Work May Result In The Practitioners' Experiencing Vicarious Trauma, Hopelessness, Distress, And Mental And Physical Dissatisfaction.
                            </p>
                            <p>
                                If You, As A Specialist Family Violence Practitioner, Feel Any Of The Above Emotions, Please Seek Assistance And Address Them Right Away. Do Not Bury Any Feelings Of Burnout To Be "Looked At Later". You Owe It To Yourself To Ensure That Your Cup Is Always Filled.
                            </p>
                            <div className="mt-8">
                                <p className="mb-2">Check Out Our Resources On Prioritizing Your Mental Health And Wellbeing.</p>
                                <Link href="/mental-health" className="text-[#AC1514] border-b border-[#AC1514] hover:text-black hover:border-black transition-colors">
                                    Mental Health Resource Page
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>


        </div>
    );
}

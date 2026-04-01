
import React from 'react';
import Link from 'next/link';
import { Search, Globe, Instagram, Facebook, Youtube, Linkedin, MoveRight } from 'lucide-react';

export default function FamilyViolencePage() {
    return (
        <div className="min-h-screen bg-white text-[#333]">
            {/* Header - Mimicking the screenshot */}


            {/* Main Content */}
            <main className="max-w-[1100px] mx-auto px-8 py-10">
                <div className="space-y-16">
                    {/* What Is The Family Violence Sector? */}
                    <section>
                        <h1 className="text-[32px] font-extrabold mb-8 underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            What is the <span className="text-[#AC1514]">family violence sector?</span>
                        </h1>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                The Family Violence Sector in Pakistan encompasses a network of government institutions, non-governmental organizations, civil society organizations, community-based organizations and individual actors that are committed to preventing, and responding to, violence within the family and intimate relationships. This includes addressing <span className="text-[#AC1514] font-medium">domestic violence, child abuse, girl child marriage, intimate partner violence, elder abuse, and other forms of gender-based violence and harm</span> that affect individuals' safety, dignity and rights.
                            </p>
                            <p>
                                This sector operates on multiple levels – from <span className="text-[#AC1514] font-medium">policy development and legal reform to direct service provision, research, advocacy and public education.</span> It includes the combined efforts of women development departments, child protection services, social welfare departments, providers of legal aid, shelter homes, law enforcement agencies and civil-society organizations, that work together to promote safety, justice and empowerment for survivors.
                            </p>
                            <p>
                                As an active member of this ecosystem, <span className="text-[#AC1514] font-medium">The Jugnu Project Domestic Violence Resource Center</span> contributes to building a <span className="text-[#AC1514] font-medium">coordinated and survivor-centric response</span> to family violence in Pakistan. The center positions itself as a specialized knowledge and capacity-building hub, <span className="text-[#AC1514] font-medium">bridging the gap between policy, practice and community response,</span> by focusing on <span className="text-[#AC1514] font-medium">research, policy, advocacy, capacity-building and the creation of educational and awareness resources and other practical tools</span> that strengthen both institutional and community-level responses. Through these initiatives, the Jugnu Project Domestic Violence Resource Center supports government departments, civil society organizations and frontline service providers in developing <span className="text-[#AC1514] font-medium">coordinated, evidence-informed interventions and promoting strategic collaboration</span> amongst service providers to <span className="text-[#AC1514] font-medium">ensure survivors receive timely, confidential and holistic support.</span>
                            </p>
                            <p>
                                The Center's work directly contributes to Pakistan's national and international commitments under <span className="text-[#AC1514] font-medium underline">SDG-5</span> and <span className="text-[#AC1514] font-medium underline">SDG-16</span>, by promoting inclusive systems that ensure safety, justice and empowerment for survivors.
                            </p>
                            <p>
                                By integrating <span className="text-[#AC1514] font-medium">research, policy, dialogue, awareness and capacity-building training and consultancy,</span> The Jugnu Project Domestic Violence Resource Center plays a pivotal role in shaping a <span className="text-[#AC1514] font-medium">resilient and collaborative family violence response ecosystem in Pakistan</span> – one that advocates gender justice, social inclusive, institutional accountability and the long-term goal of eliminating domestic violence in all its forms.
                            </p>
                        </div>
                    </section>

                    {/* Preventing And Responding To Family Violence */}
                    <section>
                        <h2 className="text-[32px] font-extrabold mb-8 underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Preventing and <span className="text-[#AC1514]">responding to family violence</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Working towards <span className="text-[#AC1514] font-medium">ending family violence is long-term work</span> that includes participation from all levels across the community(s). This can be divided into three main categories: <span className="text-[#AC1514] font-medium italic">(1) Prevention (or "Primary Prevention"), (2) Early Intervention (or "Secondary Prevention") and (3) Response (or "Tertiary Prevention").</span>
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
                                    <h3 className="text-[28px] font-extrabold text-[#AC1514] underline underline-offset-8 decoration-[#AC1514]">
                                        (1) What is "prevention – or primary prevention"?
                                    </h3>
                                    <button className="bg-[#AC1514] text-white px-6 py-2 text-[12px] font-bold hover:bg-black transition-colors rounded-sm">
                                        READ MORE
                                    </button>
                                </div>
                                <p className="text-[18px] leading-[1.7] text-[#333] text-justify">
                                    This refers to initiatives taken to prevent violence from happening in the first place. It involves challenging and / or addressing the factors and mindsets that drive family violence. These are usually referred to as "gendered drivers", due to the imbalance of power in the family social structure. These initiatives / activities may be undertaken across communities, organizations and social settings where people live, learn work and socialise every day.
                                </p>
                            </div>

                            {/* Early Intervention */}
                            <div className="border-b border-gray-200 pb-12">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-[28px] font-extrabold text-[#AC1514] underline underline-offset-8 decoration-[#AC1514]">
                                        (2) What is "early intervention – or secondary prevention"?
                                    </h3>
                                    <button className="bg-[#AC1514] text-white px-6 py-2 text-[12px] font-bold hover:bg-black transition-colors rounded-sm">
                                        READ MORE
                                    </button>
                                </div>
                                <p className="text-[18px] leading-[1.7] text-[#333] text-justify">
                                    This refers to initiatives that are designed to (i) stop early signs of abuse from escalating, (ii) prevent violence from recurring, and / or (iii) reduce the long-term impacts of family and gender-based violence. This involves working with individuals (or communities) that may be at risk of either perpetrating or experiencing violence. The efforts are focused mainly on areas / situations where violence is most likely to occur. It spans across communities and social groups, and aims to improve approaches in recognizing and responding to signs of abuse.
                                </p>
                            </div>

                            {/* Response */}
                            <div className="border-b border-gray-200 pb-12">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-[28px] font-extrabold text-[#AC1514] underline underline-offset-8 decoration-[#AC1514]">
                                        (3) What is "response – or tertiary prevention"?
                                    </h3>
                                    <button className="bg-[#AC1514] text-white px-6 py-2 text-[12px] font-bold hover:bg-black transition-colors rounded-sm">
                                        READ MORE
                                    </button>
                                </div>
                                <p className="text-[18px] leading-[1.7] text-[#333] text-justify">
                                    This refers to responding to survivors when they need support in order to stay safe from someone using family violence against them. This may take place when they are still living with the abuser(s), are planning to leave, or have already left the abusive situation / relationship. Initiatives under this category can include crisis response, case management, specialist counselling and recovery support. Some service providers can also administer frontline support for individuals experiencing family violence.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* The Primary Prevention And Response Ecosystem */}
                    <section>
                        <h2 className="text-[32px] font-extrabold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            The primary prevention <span className="text-[#AC1514]">and response ecosystem</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                In Primary Prevention, we focus on the changing of mindsets to build a society that is inclusive, respectful and safe. It involves focusing on social structures and planting ideas so that the society as a whole can change for a better tomorrow. This approach focuses on working with the whole population to address and change underlying social conditions that produce, encourage and justify violence (especially against women and girls). It works to address the attitudes, norms, socio-cultural and traditional practices, structures and power imbalances that drive said violence. Initiatives that are aimed at communities must be ultimately controlled and led by the communities themselves. This is what "Lived Experience" means. For us, this means supporting particular community-driven programs in order to create social change that prevents violence both within and directed towards particular communities (such as survivors). Due to the complexities involved in addressing family violence, primary prevention initiatives target places where people live, work, learn, socialize and play. This includes corporations and small businesses, community-led organizations, educational institutions (schools and universities), healthcare institutions, financial institutions, public spaces and even media houses. It is only through creating such a holistic system that we can target and combat family violence effectively.
                            </p>
                        </div>
                    </section>

                    {/* The Jugnu Project’s Primary Prevention Framework */}
                    <section>
                        <h2 className="text-[32px] font-extrabold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            The Jugnu Project's <span className="text-[#AC1514]">primary prevention framework</span>
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
                        <h2 className="text-[32px] font-extrabold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
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
                        <h2 className="text-[32px] font-extrabold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Using an <span className="text-[#AC1514]">intersectional approach</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Family violence remains one of Pakistan's most entrenched and complex social problems. It intersects with various social issues and requires a committed and coordinated, long-term response from all sectors of society.
                            </p>
                            <p>
                                An <span className="font-bold text-[#AC1514]">intersectional lens</span> in Primary Prevention means looking at how family and gender-based violence occurs in the context of both gender inequality and multiple other forms of structural and systemic inequality, oppression and discrimination.
                            </p>
                            <p>
                                An <span className="font-bold text-[#AC1514]">intersectional approach</span> means that we take action to ensure that Primary Prevention programs, systems and policies recognize and address the multiple factors and the various other forms of oppression that make up family and gender-based violence.
                            </p>
                            <p>
                                Through our various partnerships and collaborations with key organizations working with key cohorts and communities, The Jugnu Project seeks to demonstrate and build on our commitment to intersectionality. By integrating it into our work, we can take meaningful action to prevent family and gender-based violence in solidarity with the various communities that are leading the way on the ground.
                            </p>
                            <p>
                                An intersectional approach is critical in work that aims to prevent violence against women, specifically due to the patriarchal <span className="font-bold text-[#AC1514]">power structures that consistently intersect with other institutional systems of power.</span> Violence against women occurs in the context of both gender inequality along with and multiple other forms of structural and systematic inequality, oppression and discrimination.
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
                        <h2 className="text-[32px] font-extrabold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Prevention <span className="text-[#AC1514]">at the workplace</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Workplaces and corporate organizations can play a valuable role in identifying, responding to and even preventing family violence. Most people spend an inordinate amount of their lives at work. However, workplaces can usually be a site where gender inequality and disrespect towards women and other communities are reinforced, resulting in experiences of harassment, discrimination and violence.
                            </p>
                            <p>
                                In 2023, the World Economic Forum's Global Gender Gap Report ranked Pakistan at the bottom of 145 countries ranked.
                            </p>
                            <p>
                                It is essential that workplaces play their part in assisting employees facing family violence, through accessing family violence leave, entitlements and support. Workplaces should also conduct monthly family violence awareness sessions, so that employees are aware of what constitutes family violence and they can take - or help others take - appropriate steps if necessary.
                            </p>
                            <p>
                                When managers, workplace leaders and key decision makers at the workplace advocate for programs, policies and initiatives that promote safe, supportive and gender-equal work environments; they are directly contributing to the prevention of violence against women, and family violence in general.
                            </p>
                            <p>
                                By focusing on workplaces as a key setting for prevention, we can attempt to address drivers to gender-based violence, and create safe and supportive environments for all employees and their families affected by violence.
                            </p>
                        </div>
                    </section>

                    {/* Understanding Family Violence As A Workplace Issue */}
                    <section>
                        <h2 className="text-[32px] font-extrabold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Understanding <span className="text-[#AC1514]">family violence as a workplace issue</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Family violence is a prevalent and complex social issue that has devastating and long-lasting effects on adults, children - and even animals (pets). In Pakistan, family violence is one issue that is deeply embedded in the sociocultural threads that make up the society. Family violence has a significant impact on the economy. According to one study, violence against women and girls is estimated to cost Pakistan 80 million days annually. The national estimates of direct costs incurred in just 12 months (1 year) due to intimate partner violence (IPV) against women and girls comes up to PKR 1,399,786,283 (ICRW, 2021). In addition, based on the women's survey, it is estimated that approximately 1.2 million school days are missed by children annually due to the impact of violence perpetrated by an intimate partner on their mother. Workplaces are increasingly being recognized as sites of both abuse, and also places where people can seek support against family and domestic violence. Your business can also be a part of the solution. Workplace policies embedded with staff training can lead to creating a safer and more productive environment for employees. It is important that your business accesses specialists of family and gender-based violence early, so you are equipped to respond safely.
                            </p>
                        </div>
                    </section>

                    {/* Our Role In Workplace Policy Development */}
                    <section>
                        <h2 className="text-[32px] font-extrabold mb-8 text-center text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Our role in <span className="text-[#AC1514]">workplace policy development</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                The Jugnu Project recognizes that family violence is not a private matter. Rather, it is an issue that affects the survivor both inside and outside the home. In the workplace, it can adversely affect an employee's safety, performance and well-being.
                            </p>
                            <p>
                                We believe that every employer has a <span className="text-[#AC1514] font-medium">duty of care</span> to create a workplace that is safe, supportive and responsive to employees experiencing, or affected by, domestic and family violence.
                            </p>
                            <p>
                                We play a leading role in supporting workplaces to develop, strengthen and implement family violence policies that protect employees and promote gender equality. Our role covers <span className="text-[#AC1514] font-medium">policy development, consultancy, training and capacity building, technical assistance, research and advocacy.</span>
                            </p>
                        </div>
                    </section>

                    {/* Consultancy, Policy Development And Review */}
                    <section>
                        <h3 className="text-[24px] font-extrabold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Consultancy, policy development and review
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We work alongside organizations, government agencies and corporations to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">Develop domestic and family violence workplace policies that align with Pakistan's labor laws, gender equality commitments and international best practices.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Develop, Or Integrate, Survivor-Centered Provisions */}
                    <section>
                        <h3 className="text-[24px] font-extrabold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Develop, or integrate, survivor-centered provisions, such as:
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">Paid or flexible leave for employees experiencing, or affected by, family violence</li>
                                <li className="pl-2">Confidential reporting mechanisms</li>
                                <li className="pl-2">Steps to ensure non-retaliation and privacy protections</li>
                            </ul>
                            <p>Review existing HR policies to ensure alignment with anti-harassment and non-discrimination laws.</p>
                        </div>
                    </section>

                    {/* Capacity-Building And Training */}
                    <section>
                        <h3 className="text-[24px] font-extrabold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Capacity-building and training
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We conduct workshops and provide capacity-building trainings for organizations to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">Help staff and management understand the impact of family violence on the workplace</li>
                                <li className="pl-2">Build staff capacity to recognize signs of abuse, and respond safely and appropriately</li>
                                <li className="pl-2">Equip managers, workplace leaders and HR personnel to handle disclosures with empathy, confidentiality and care</li>
                                <li className="pl-2">Foster trauma-informed and survivor-centric workplace cultures</li>
                            </ul>
                        </div>
                    </section>

                    {/* Research */}
                    <section>
                        <h3 className="text-[24px] font-extrabold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Research
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We conduct and share research, evidence-based data and best practices on the intersection of family violence and employment, including (but not limited to):</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">The economic costs of violence</li>
                                <li className="pl-2">The role of workplaces in early intervention</li>
                                <li className="pl-2">Policy models that improve survivor retention and recovery</li>
                            </ul>
                        </div>
                    </section>

                    {/* Evidence-Based Advocacy */}
                    <section>
                        <h3 className="text-[24px] font-extrabold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Evidence-based advocacy
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We advocate for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">The inclusion of family violence clauses in labor laws and workplace codes of conduct</li>
                                <li className="pl-2">The adoption of the ILO Convention 190 on harassment and violence at work</li>
                                <li className="pl-2">Employer accountability and monitoring frameworks to ensure survivor safety and sustained protection</li>
                            </ul>
                        </div>
                    </section>

                    {/* Cross-Sector Collaboration */}
                    <section>
                        <h3 className="text-[24px] font-extrabold mb-6 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            - Cross-sector collaboration
                        </h3>
                        <div className="text-[18px] leading-[1.7] space-y-4 text-[#333] text-justify">
                            <p>We collaborate with various sectors to promote integrated approaches that recognize family violence as a public and economic concern, not simply a "private matter."</p>
                            <p>We work alongside the following sectors:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="pl-2">Governmental agencies and ministries</li>
                                <li className="pl-2">Private sector organizations and chambers of commerce</li>
                                <li className="pl-2">NGOs</li>
                                <li className="pl-2">Civil society and advocacy coalitions</li>
                            </ul>
                            <p className="mt-4">
                                Our goal is to build workplaces that are <span className="text-[#AC1514]">safe, supportive and equitable;</span> where employees affected by family violence can work, recover and thrive - without fear, stigma or discrimination.
                            </p>
                        </div>
                    </section>

                    {/* Specialist Family Violence Services */}
                    <section>
                        <h2 className="text-[32px] font-extrabold mb-8 text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Specialist <span className="text-[#AC1514]">family violence services</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                Specialist family violence services provide crisis response and case management to survivors of family violence. Specialist family violence practitioners are highly skilled in understanding what people undergoing family violence experience and how best to keep them safe. They help the survivor navigate the various services and support provided by the wider family violence system. Such practitioners have a dedicated role in assisting survivors, with a focus on the survivors' safety and managing the dynamic risk posed by the perpetrator.
                            </p>
                            <p>A specialist family violence practitioner will:</p>
                            <ul className="list-none space-y-2 pl-0">
                                <li><span className="font-bold">-Firstly,</span> focus on the risk and safety needs of the survivor.</li>
                                <li><span className="font-bold">-Secondly,</span> coordinate with other crisis response services to ensure the survivor receives the best possible help urgently.</li>
                                <li><span className="font-bold">-Lastly,</span> advocate with, and on behalf of, the survivor for greater rights.</li>
                            </ul>
                            <p>When speaking to a survivor, some of the responsibilities of a specialist family violence practitioner will include:</p>
                            <ul className="list-none space-y-2 pl-0">
                                <li><span className="font-bold">-Ask</span> about their experience with the perpetrator</li>
                                <li><span className="font-bold">-Assess</span> the level of risk or harm to the survivor and their children</li>
                                <li><span className="font-bold">-Undertake</span> safety planning with the survivor</li>
                                <li><span className="font-bold">-Provide</span> the survivor with options for support and emergency assistance</li>
                                <li><span className="font-bold">-Help</span> the survivor navigate through the various support systems that they may need</li>
                                <li><span className="font-bold">-Advocate</span> on behalf of a survivor</li>
                            </ul>
                            <p>
                                We at The Jugnu Project aim to do our best when assisting survivors of family violence navigate the socio-legal system.
                            </p>
                            <p>
                                If you (or anyone you know) needs assistance, please check our <Link href="/directory" className="font-bold underline text-[#AC1514]">VICTIM'S DIRECTORY</Link> to find information and contact details for survivor support services nearest to you.
                            </p>
                        </div>
                    </section>

                    {/* Work With Us */}
                    <section>
                        <h2 className="text-[32px] font-extrabold mb-8  text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Work <span className="text-[#AC1514]">with us</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                The Jugnu Project Consultancy offers consultancy, training and policy support for organizations seeking to develop or improve their family violence policies.
                            </p>
                            <p>
                                To learn more about how The Jugnu Project can work with your organization, please reach out to us at <a href="mailto:thejugnuproject@gmail.com" className="font-bold underline text-[#333]">thejugnuproject@gmail.com</a>.
                            </p>
                        </div>
                    </section>

                    {/* Legislative And Policy Frameworks */}
                    <section>
                        <h2 className="text-[32px] font-extrabold mb-8  text-[#333] underline decoration-1 underline-offset-4 decoration-[#AC1514]">
                            Legislative and <span className="text-[#AC1514]">policy frameworks</span>
                        </h2>
                        <div className="text-[18px] leading-[1.7] space-y-6 text-[#333] text-justify">
                            <p>
                                You can check our resources for legislative and policy frameworks regarding family violence <Link href="/resources" className="font-bold underline text-[#AC1514]">here</Link>.
                            </p>
                            <p className="text-[#AC1514] font-medium uppercase">
                                WELLBEING, SELF-CARE AND PROFESSIONAL SUSTAINABILITY - FOR FAMILY VIOLENCE PRACTITIONERS
                            </p>
                            <p>
                                Trauma from constantly experiencing or witnessing domestic violence can cause burnout. As a specialist family violence practitioner, you are constantly working with people who are either experiencing, or have previously experienced, abuse and trauma. This means that you are often called upon to respond to challenging and complex situations.
                            </p>
                            <p>
                                It is important to recognize the impact on family violence practitioners of continuously responding to challenging domestic violence cases, while having to work within the context of structural oppression and inequality. At the very least, prolonged exposure to such work may result in the practitioners' experiencing vicarious trauma, hopelessness, distress, and mental and physical dissatisfaction.
                            </p>
                            <p>
                                If you, as a specialist family violence practitioner, feel any of the above emotions, please seek assistance and address them right away. Do not bury any feelings of burnout to be "looked at later." You owe it to yourself to ensure that your cup is always filled.
                            </p>
                            <div className="mt-8">
                                <p className="mb-2">Check out our resources on prioritizing your mental health and wellbeing.</p>
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

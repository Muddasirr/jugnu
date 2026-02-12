"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const survivors = [
    {
        name: "Samina",
        story: "My first child after marriage was born prematurely. We had to visit the NICU many times, before we were finally allowed to take her home. We were so happy, my husband and I. It felt like our family was finally complete. One night, a week after she had come home, my daughter just stopped breathing. We tried everything, but she had gone.\n\nI suffered from depression, but I was not allowed to mourn my own daughter; because my mother-in-law would insist that she had been in the world for too short a time for me to form any real attachment with my own child. My husband never interfered with the way his parents treated me, and always stayed quiet whenever she would taunt me or scold me if I would cry. Eventually, I just stopped crying. I became numb inside. Everyone thought I healed. I just pushed the pain deep inside where no one could sense it - except for me.\n\nWhen I applied for Khula, I was vilified by my in-laws. They told everyone I was the “bad daughter-in-law”. My (now former) husband was very hurt and felt blindsided by my demand to separate; but I was tired of living for their convenience. I felt suffocated. I wanted to be able to breathe. I’m so thankful that my parents allowed me to come home. I’m much happier now, living life on my own terms. I still live with my parents and I have a small business that I manage along with my mother.\n\nNo one should be allowed to control you - emotionally, psychologically, financially or otherwise. You should be able to walk away if you are controlled in any way. Marriage should be a partnership, not a license to control another’s life."
    },
    {
        name: "Batool",
        story: "I’m the second eldest of five daughters. There was a lot of pressure on me to get married after graduation. Like most girls do, I also said yes to my parents’ choice for a groom. He was highly educated and lived abroad - seemed to come from a good family.\n\nIt was only after we got married and I went to the States that I learnt he was in fact 15 years elder to me! They had previously claimed he was only 7 years older, and I had believed them. He was not interested in having children, so I began to take contraceptives - but his mother was very keen on grandchildren. I faced a lot of pressure from his family, yet he told me to pretend as if I didn’t know why I wasn’t getting pregnant. To keep his izzat (honor), I agreed.\n\nAfter two years of “fertility checkups” in the States, when we finally came back to Pakistan for my younger sister’s wedding, we naturally stayed at my in-laws’ home. The conversation became uncomfortable, to the point where my brother-in-law (husband’s younger brother) began to discuss my menstrual cycles in front of the whole family! My husband kept silent through it all. I defended myself as best I could.\n\nFinally, my sister-in-law brought a “faith healer” (pir saab) to “fix” me. I kept waiting for my husband to put a stop to the insanity, but he stayed silent. So I gave into the pressure and drank the bottle of “phooka hua paani” the healer gave me.\n\nI instantly felt very sick and fell unconscious. They refused to take me to the hospital and kept me in my room for three days. They wouldn’t even let my parents contact me, saying I was “unwell”. On the fourth day, my father burst into the house after physically fighting with them. He saw me lying on the bed and immediately took me to the hospital Emergency room. The doctor on call said if he had come 20 minutes later, I would have been dead.\n\nMy marriage has never recovered from this incident. I’m still married to the same man, because my family doesn’t believe in divorce; but now my father isn’t always blindly defending his son-in-law if I ever share anything, and he is there to emotionally support me if I need him."
    },
    {
        name: "Faryal",
        story: "I married my childhood sweetheart after college. Everyone knew we would eventually get married after university. His parents were supposedly “thrilled” at the idea of having me as a daughter-in-law - or so my husband believed.\n\nFor the first eight (08) months of my marriage, my mother-in-law refused to let me sleep with my husband in our marital bed. Instead, my husband would sleep in our bedroom and I would sleep with my mother-in-law in her bed. My father-in-law was working in a different city so he was not living with us during the first year of my marriage.\n\nWe spent eight (08) months navigating my mother-in-law’s jealousy. We couldn’t spend time with each other in her presence and had to include her in everything! I would have to slip out in the middle of the night, after she had gone to sleep, to spend some quality time with my own husband - and then run back to her room and quietly get into the bed and pretend to sleep so when she woke up, she would think I had remained there all along.\n\nWe don’t live with my in-laws now. We have our own separate home, but we live close by. My parents also moved near us, so I have some support in that sense."
    },
    {
        name: "Naila",
        story: "It’s been nearly 20 years since I’ve been married. My husband and I have four beautiful children - two of them in university! My mother-in-law has always lived with us. Despite so much time having passed, she still taunts me that it’s “her house and not my house”. I still have to follow her “rules”. She even says this in front of guests and relatives! I stay quiet because my husband ignores it and doesn’t support me. She doesn’t allow me to have a maid - and any maid I try to bring, she fights with her and fires her after a day. I have to do all the cleaning, cooking and also help my children with their studies. My husband remains quiet as he doesn’t want to disrespect his mother, so what can I do? I have to tolerate her for peace in the house."
    },
    {
        name: "Abeeha",
        story: "My parents married me off when I was only 16-years-old. My in-laws were extremely abusive. My (now) ex-husband would beat me over the slightest provocation. I was raped multiple times during my marriage, as well. No one helped me. I have two daughters from that marriage.\n\nOne day, after having beaten me black and blue, they took away my phone and locked me inside the home. My family resided in a different city. I had no access to the outside world at all. They had to go for a party in the evening, and I was chained to one of the couches in the tv lounge. I had not eaten for days. I was starving.\n\nI managed to connect to the TV internet using the remote control on the coffee table, and logged onto my facebook. I shared a status, asking for help. My friends called the police and came and rescued me!\n\nIt took me six years of litigation to finally get custody of my daughters. It’s been a horrific journey, but I’m here now. I’m alive and supporting myself and my daughters."
    },
    {
        name: "Maira",
        story: "My husband and in-laws were very emotionally and physically abusive. After four years of torture, I finally decided to file for khula. My in-laws lived in a separate city from my own family. My mother and sister sent me money to help me move out. I took a small apartment in a different neighborhood - it was all I could afford at the time - to get away from them.\n\nEven after the court litigation (which took nearly two years because I had filed for recovery of my dower articles, which my in-laws had refused to return to me), my husband kept stalking me. I would see his (or his friend’s) car on the other side of the street. They would stalk me everyday to and from work, or if I was going somewhere, they would follow me around. It gave me a lot of anxiety because I never knew when (if at all) they would attack or harm me."
    },
    {
        name: "Rabia",
        story: "My ex-husband had a major drinking problem. He would come home from the office every night around 8:00PM and simply lock me and our two sons in the guest bedroom. Then, he would sit down in the lounge and start drinking. We would be locked in the room until 2:00 AM. Sometimes, he would forget about us entirely and only open the door in the morning, when he woke up for work. He would get violent if I or the children tried to stop him, or reason with him.\n\nNobody helped us. Not my family. Not his.\n\nThey would all just tell me to “tolerate it for the sake of the children”. That he was the father, so I should do my best to “keep the peace”. No one ever spoke to him or told him to change his behavior. Somehow, I was responsible for everything - because I was the woman!\n\nWhen he almost killed my son after a night of drinking turned him rageful, I had enough. I packed our suitcases and took my sons to my mother’s house the next day. I filed for khula and got custody of our sons due to their father being a danger to their life. It’s been a very long battle to get here - nearly five (05) years! - but I’m thriving and my sons are now both going into university. I work and support us all.\n\nNot a single person from my ex-husband’s family ever tried to reach out or maintain relationships with us after the divorce went through - not even my sons’ grandmother. My ex-husband is remarried and has his own life.\n\nI’d like to just tell survivors out there - don’t listen to anybody’s comments and just take the first step. Save yourself, because no one else will save you."
    },
    {
        name: "Aisha",
        story: "I am the second wife of a successful businessman. I had just graduated from university when I joined his company. I was working for him remotely when he introduced me to his (first) wife. She was very enthusiastic about the idea of having a “sister” and kept pressuring me to marry her husband. My father had passed away a few years back so my brother was the only man in our home. He thought it was a great idea that this man and his wife will take care of me financially, and he agreed to the marriage.\n\nIt has been more than 12 years since I’ve gotten married. We have no children. I have been living in a separate house on the other end of the city. His first wife and children live with his parents. I’m not allowed to interact with the family. I’m not even allowed to leave my own home - I don’t have any friends, or any neighbors I can visit. I have no family to provide support.\n\nMy husband used to emotionally and physically abuse me. He would never give me money for the home, saying he “spent it all on his children and other family, who need him more”. There were days when I would have to eat only daal - and that, too, once a day because there was literally no food inside the house.\n\nI started deep trauma therapy after contacting The Jugnu Project online. I learned about them online. It’s been a couple of years since my healing journey started. I’m still in the process of finding myself, but I’m getting there one day at a time. I have a small clothing business now, and I’m slowly saving money for my future."
    },
    {
        name: "Saima",
        story: "I was married to a man who was eight (08) years my senior. He lived with his parents, elder brother, and bhabi (elder brother’s wife). I was still in my university when I got married, studying to become a pharmacist. When I moved in after our marriage, I saw that his room was in fact a small store room converted into a bedroom. I adjusted, because that is what you are taught to do as a good wife and daughter-in-law. No one would speak to me in that house. The women would either outright ignore me, or taunt me. Anytime I would try to help out in the kitchen, or just to make small talk, they would shut me down or tell me to leave them alone. They were very rude and disrespectful - but never in front of my husband. So I had no way to prove what was happening during the day when he was at work. We don’t really speak to the men, obviously. It’s not in our culture.\n\nMy mother-in-law soon began to ration out the food, especially the portions for me. She refused to let me cook - even when my husband specifically asked me to make him any meals. I stopped going to the kitchen entirely. I began to fast… and soon, I started to starve. I began to lose weight. I would eat a lot when I would visit my parents twice a week, and then I would not eat at all! My father even spoke to my husband about it one day, but he outright denied any such abuse was taking place. He then blamed me for trying to “dishonour his family”. I stopped speaking entirely.\n\nI lived for two years in that house. I became depressed and then suicidal.\n\nMy father saved me. He picked me up from the university one day and then just took me home. My parents then contacted a lawyer and filed for khula (dissolution of marriage). My father spoke to my mother-in-law over the phone and told her that I would not be coming back. She began screaming and cursing - I was so afraid. I was afraid they would come with the police. But they didn’t do anything. My husband blocked my number. He didn’t even speak to me after that. It took us six months to get the khula granted. It felt like the longest six months of my life.\n\nI have not seen any one of them since. It’s like they never cared to begin with, whether I lived or died. I don’t know why they married their son to me. I live with my parents now and I’m working at a local pharmacy company. I’m grateful my parents saved me when they did."
    },
    {
        name: "Abida",
        story: "I got engaged to a man I used to know in school. We had gone our separate ways after graduating and going off to different universities, but I think fate had different plans and we somehow got matched for marriage by a mutual family relative.\n\nHe came from a very rich family background. I, on the other hand, am a self-made business woman. I wasn’t entirely sure about the idea at first but my parents liked him - he was very well-mannered and so were his parents. We decided to go ahead and get engaged.\n\nAfter the engagement, he started to become possessive. Where was I going? When would this meeting end? He demanded that after marriage, I had my ID cards and passport to his elder brother. Everyone in their household gave their original documents to his elder brother, and whenever they needed them they asked for them and he let them use it. It was “for safe keeping”. I refused. I have a business to take care of - and I’m not a child. I can take care of my own documents, and I certainly wasn’t going to ask anyone’s permission to use my own documentation. He got very upset with me. His mother called my mother and was very rude - saying that I don’t have manners.\n\nI called off the wedding.\n\nMy relatives taunted my mother about how I’m “overreacting”. What’s wrong with the husband’s family “taking care” of the bride’s documents? But it is wrong. I’m not asking him or his family for their documentation or their bank account details. How would they feel if I asked them for their documentation? Why do they even need mine?\n\nIt might seem like such a small thing, but this is called control. It starts with one innocent-looking request - and soon, you are stuck in a web of control and can’t leave.\n\nHe got married six months after our engagement broke off - it’s been three years now, and I heard he’s in the process of getting divorced. The other girl is citing domestic violence. I’m so grateful I got out when I did - that could have been me!"
    },
    {
        name: "Sameera",
        story: "My father is a narcissist. I’m the “scapegoat” of the family. I learnt very early on to defend myself and my mother and siblings. Ever since I was a little girl, I’ve been at loggerheads with him. His anger was frightening, but I had to learn to be louder than he was. You could never show fear, otherwise he would feed on that energy and destroy you. My mother was a frightened woman with no family support - and four children to look after. I couldn’t turn to her for help. So I learned to look after myself.\n\nWhen I was in school, any time my father got angry at me - for the slightest perceived insult or annoyance - he would lock me up in the wardrobe and then put the key in his pocket before leaving for work. I would stay locked inside that dark cupboard for the whole day. He would let me out of the wardrobe once he returned home in the evening.\n\nI would cry and ask my mother for help, but she was helpless. She would sit outside the wardrobe and talk to me to keep me company, so that I would not feel so afraid.  I began to have claustrophobia. ‘Til date I cannot use an elevator. I would rather take the stairs.\n\nI knew that I had to get out of that house, to save myself, my mother and my siblings. In my final year in A’Levels I began to apply to various universities abroad. My father was against my going abroad - relatives had begun to question my “morals” and kept telling my mother to get me married off instead. But she stood by me! She supported my decision. I think she knew I was our family’s only hope of leaving that insane house. I took the first scholarship I got and left the country. It was in the United States. It’s been nearly 15 years since I left Pakistan - I have never returned once. I sponsored my sisters and mother, as well. We all live here together in the States now.\nPeople ask us to come back because my father is getting old and lives alone. Why should we? No one helped us when we were little and defenseless. They allowed him to abuse us because he was “the man” of the house. He can have that house. We don’t need it. We have created our own lives now - and he lost out being part of a beautiful family because he’s an abusive man. Let him live alone. We deserve the life we have built - and he deserves the life he is living now."
    },
    {
        name: "Fizza",
        story: "I was married after graduation and moved to Dubai with my husband. He was the youngest son and his mother’s favorite. Both our families lived in Pakistan, so we never had to “adjust” like other people do. It was just us, against the world. And in the beginning, I was so happy to have my very own “happy ending” with my prince charming.\n\nThen, the honeymoon period started to faze out.\n\nAfter six months of living together - and no physical relations at all - he confessed to me that he was gay. He had only gotten married so that his parents and family stopped pressurizing him about marriage. I was free to live my own life - it was a “lavender marriage”; a term I found out later.\n\nI was devastated.\n\nHe told me I couldn’t tell anyone about this, or he would kill me. I was so afraid. I kept taking the blame, pretending that I was the problem - I was unable to conceive; even though the whole time, he couldn’t even act like a man or touch me. We went to numerous fertility clinics and got tested - and the doctors were baffled, because both of us were in our prime.\n\nOur marriage lasted seven (07) years. I just woke up one day and decided I had had enough. I called my mother and father and told them that I’m filing for divorce - whether they accept me or not. I cited “noncompatible” as the issue.  I was done protecting a man’s fragile ego and ruining my life in the process.\nWhen he was at work, I quickly packed my bags and moved into a friend’s apartment. We even informed the police, just in case he tried to harm either of us. When he received the summons from the police, telling him that they had tagged him and were watching him - and that if anything happened to us, they would take action against him and cancel his visa - he was terrified.\n\nHe tried everything to get me to come back. He even got his mom and sister to call me and try to convince me to return. But I was done making excuses for another woman’s son and his bruised ego.\n\nI moved to Qatar soon after. I have an amazing life now. I live alone and on my own terms. And there is nobody’s useless son hiding behind me, claiming that I’m the monster. I’m finally free."
    }
];

export default function SurvivorStoriesPage() {
    const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);

    const toggleStory = (index: number) => {
        if (activeStoryIndex === index) {
            setActiveStoryIndex(null);
        } else {
            setActiveStoryIndex(index);
        }
    };

    return (
        <main className="w-full bg-white font-serif text-black py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-16">

                {/* Intro Section */}
                <section className="space-y-8">
                    <h3 className="text-base md:text-lg   leading-relaxed">
                        This Page Is Dedicated To Exploring The Journeys Of People Who Have Survived Family Violence, Intimate Partner Violence, Gender-Based Violence And Narcissistic Abuse.
                    </h3>

                    <p className="text-base md:text-lg font-normal text-black leading-relaxed">
                        Every Story Told Paves The Way For Another Survivor To Break His / Her Silence.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                        At The Jugnu Project, We Honor The Voices Of Those Who Have Faced And Survived Abuse. We Believe That Sharing Our Stories Holds The Power To Heal, Inspire, Give Courage - And, Most Of All, To Change The Way Our Society Views And Understands Domestic And Gender-Based Violence.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                        Our <span className="text-[#AC1514] font-bold">Survivor Stories</span> Series Is A Space Of Safety, Dignity And Courage - Where Survivors Who Wish To Share Their Journeys Can Do So Safely, And On Their Own Terms.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                        Each Story Reflects Hope, Courage And A Belief That Healing Is Possible. Each Story Shared Is A Testament Of The Strength It Takes To <span className="text-[#AC1514] font-bold">Move From Fear To Freedom.</span>
                    </p>

                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-[#AC1514] underline decoration-1 underline-offset-4">
                            Why Do Survivor Stories Matter?
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            For Too Long, Silence Has Protected Abusers And Isolated Survivors. It Is The One Characteristic Similar To All Misogynistic, Patriarchal And Abuse-Condoning Societies.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            When Survivors Share Their Experiences - Whether Of Pain, Survival Or Recovery - They Help Others Recognize That They Are Not Alone. Sharing Stories About Their Experiences Allows Survivors To Take Their Power Back And Control The Narrative. It Also:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed text-black text-justify">
                            <li>Breaks The Stigma And Harmful Myths Surrounding Abuse And Family Violence.</li>
                            <li>Encourages Others To Speak Out About Their Experiences.</li>
                            <li>Encourages Other Survivors To Seek Help And Support.</li>
                            <li>Educates Communities About The Realities Of Family And Gender-Based Violence.</li>
                            <li>Helps Celebrate Resilience, Survival And Transformation.</li>
                        </ul>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify font-bold">
                            More Importantly, Sharing Survivor Stories Flips That Narrative From Victim Blaming And Shaming - To Abuser Accountability.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-[#AC1514] underline decoration-1 underline-offset-4">
                            Our Approach: Dignity, Consent And Care
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            Every Story We Share Is Handled With Deep Respect, Care And Consent.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            Survivors Have Complete Control Over What They Want To Share - If At All. Their Identities Are Always Hidden / Changed To Protect Them And Their Loved Ones.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            We Never Sensationalize Trauma, Or Expose Personal Details. Instead, We Focus On Each Individual Survivor's Humanity, Inspiring Courage And The Journey Of Recovery.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-[#AC1514] underline decoration-1 underline-offset-4">
                            Our Promise
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            We Honor Every Survivor's Journey - Whether Told, Untold Or Still Unfolding.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            This Page Is A Tribute To All Who Have Survived, All Who Are Still Healing And All Those Who Continue Standing Against (And Despite) The Violence In Their Homes And Communities.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-[#AC1514] underline decoration-1 underline-offset-4">
                            Trigger And Safety Disclaimer
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            Reading These Stories Can Bring Up Strong Emotions.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            If You Feel Distressed, Please Take A Break And Reach Out For Help, If Needed.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            If You Are Currently Experiencing Domestic Or Gender-Based Violence, Please Know That You Are Not Alone.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            Find Support Services Here <Link href="/survivor-stories" className="text-[#AC1514] font-bold underline">SURVIVOR'S DIRECTORY</Link>
                            <br />
                            Or Check Out Our Resources <Link href="/resources" className="text-[#AC1514] font-bold underline">RESOURCES</Link>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-[#AC1514] underline decoration-1 underline-offset-4">
                            Want To Share Your Story?
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            If You Are A Survivor Who Feels Ready To Share His / Her Experience - Whether In Writing, In Audio Or Anonymously - Reach Out To Us And Our Team Will Guide You Through A Safe And Supportive Process
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            Our Email Is: <a href="mailto:Thejugnuproject@Gmail.Com" className="text-[#AC1514] font-bold underline">Thejugnuproject@Gmail.Com</a>
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            You Are In Control Of What You Share And How.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-black text-justify">
                            All Information You Share Will Be Kept Confidential, And No Story Is Shared Without Absolute, Explicit Consent From The Survivor(S) In Question.
                        </p>
                    </div>
                </section>

                {/* Survivor Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {survivors.map((survivor, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] group"
                        >
                            {/* Card Content Container */}
                            <div className="relative w-full h-full overflow-hidden bg-white shadow-sm border border-transparent rounded-sm">

                                {/* Default View (Always visible unless active) */}
                                <div className={`  scrollbar-thin scrollbar-thumb-[#AC1514] scrollbar-track-white absolute inset-0 flex flex-col items-center justify-between p-4 transition-opacity duration-300 ${activeStoryIndex === index ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                    <h3 className="text-2xl font-serif text-black">{survivor.name}</h3>
                                    <div className="relative w-full flex-1 flex items-center justify-center">
                                        <Image
                                            src="/Group.png"
                                            alt={survivor.name}
                                            width={200}
                                            height={300}
                                            className="object-contain h-full w-auto"
                                        />
                                        <button
                                            onClick={() => toggleStory(index)}
                                            className="absolute bottom-1/3 right-0 mr-4 bg-[#AC1514] text-white text-[10px] font-bold px-3 py-1 rounded-sm shadow-sm transition-transform hover:scale-105 z-10"
                                        >
                                            READ MORE
                                        </button>
                                    </div>
                                </div>

                                {/* Active View (Overlay) */}
                                <div className={` absolute inset-0 bg-[#AC1514] p-2 flex flex-col items-center justify-center text-white text-center transition-all duration-300 ${activeStoryIndex === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                                    {/* <button
                                        onClick={() => toggleStory(index)}
                                        className="absolute top-2 right-2 text-white hover:text-gray-200"
                                    >
                                        <X size={24} />
                                    </button> */}
                                    <div className="overflow-y-auto max-h-full pr-2 custom-scrollbar">
                                        <p className="text-sm md:text-base leading-relaxed text-justify font-serif whitespace-pre-wrap">
                                            {survivor.story}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </main>
    );
}

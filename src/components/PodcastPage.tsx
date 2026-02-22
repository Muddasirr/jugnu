'use client';
import React from 'react';
import Link from 'next/link';
const PodcastPage: React.FC = () => {
  const popularEpisodes = [
    {
      id: 1,
      thumbnail: '/gallery1.png',
      title: 'Build a Low-Stress Business with Time Blocking',
      duration: '45:23',
    },
    {
      id: 2,
      thumbnail: '/gallery2.png',
      title: 'Productizing Your Business (Part 1)',
      duration: '38:15',
    },
    {
      id: 3,
      thumbnail: '/gallery3.png',
      title: 'Why and How to Start a Podcast',
      duration: '52:10',
    },
    {
      id: 4,
      thumbnail: '/gallery4.png',
      title: 'Stop Trading Your Time for Money',
      duration: '41:30',
    },
    {
      id: 5,
      thumbnail: '/gallery5.png',
      title: 'Turn Your Business Into a Profit Machine',
      duration: '47:45',
    },
    {
      id: 6,
      thumbnail: '/gallery6.png',
      title: '5 Habits to Massively Grow Your Business',
      duration: '55:20',
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('podcast1.png')",
        }}
        className="text-white flex flex-col md:flex-row justify-between items-start py-[60px] px-[30px] md:px-20 min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      >
        <div >
          <h1 className="text-2xl md:text-3xl font-bold leading-[1.3] mb-6 uppercase tracking-[0.5px]">
            KHAUF SE AAGAY - WHERE SILENCE ENDS
            <br />
            AND STRENGTH BEGINS.
          </h1>
          <p className="text-[18px] md:text-[28px] pt-[5%] leading-relaxed m-0 opacity-95 pr-[40%]">
            Khauf Se Aagay, A Podcast By The Jugnu Project, Explores Real
            Stories And Honest Conversations About Domestic And Gender-
            Based Violence In The Desi Community (especially In Pakistan).
            Through Survivor Voices, Expert Insights And Community
            Dialogue, We Move Beyond The Fear, Silence And Stigma To
            Talk About Healing, Justice And Change.
          </p>
        </div>
      </section>


      {/* About Section */}
      {/* About Section */}
      <section
        style={{
          backgroundImage: "url('podcastt1.png')",
          backgroundSize: '100%',
        }}
        className="text-white flex flex-col md:flex-row justify-between items-start py-[60px] px-[30px] md:px-20 min-h-screen relative  bg-center bg-no-repeat"
      >
        <div className="max-w-[700px] w-full md:w-[60%] ml-auto pt-24">
          <Link href={"/about"}>
            <p className="text-[18px] md:text-[28px]  text-[#AC1514] mb-6 leading-[1.4] font-medium">
              <span className="underline decoration-1 underline-offset-4 cursor-pointer">About The Jugnu Project: Pakistan’s Digital</span>
              <br />
              <span className="underline decoration-1 underline-offset-4 cursor-pointer">Domestic Violence Resource Center</span>
            </p>
          </Link>
          <p className="text-[18px] md:text-[28px] leading-relaxed text-black font-sans">
            Khauf Se Aagay Is A Storytelling And Awareness Podcast
            By The Jugnu Project, That Amplifies The Voice Of
            Survivors, Advocates And Experts Working To End
            Family And Gender-Based Violence.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section
        style={{
          backgroundImage: "url('podcastt.png')",
          backgroundSize: '100% 100%',
        }}
        className="text-white flex flex-col md:flex-row justify-between items-start py-[60px] px-16 md:px-16 min-h-screen relative overflow-hidden bg-center bg-no-repeat"
      >
        <div className="mt-48 mr-[30%] text-white max-w-5xl">
          <p className="text-[18px] md:text-[24px] leading-relaxed md:leading-loose">
            Each Episode Dives Deep Into The Realities Of Domestic Violence In The Desi
            Community (Especially In Pakistan) – From Survivor Journeys And Legal Challenges
            To Mental Health, Community Healing And Social Change.
          </p>

          <div className="w-full h-px bg-white/40 my-8 "></div>

          <p className="text-[18px] md:text-[24px] leading-relaxed md:leading-loose">
            Through Open And Respectful Conversations, Khauf Se Aagay Breaks The Silence
            Around Abuse, Confronts The Stigma Attached To Family Violence, And Builds An
            Understanding – Helping Listeners To See What Lies Beyond The Fear: Courage,
            Healing And Hope.
          </p>
        </div>
      </section>

      {/* Popular Episodes Section */}
      <section className="bg-[#f5f5f5] pt-10 pb-[60px] px-[30px] md:px-20">
        <h2 className="text-2xl md:text-3xl text-[black] font-bold mb-[30px] text-center">Popular Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {popularEpisodes.map((episode) => (
            <div key={episode.id} className="bg-white rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className=" overflow-hidden">
                <img src={"Link.png"} alt={episode.title} className="w-full h-full object-cover" />

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Listen Subscribe Section */}
      <section className="bg-[#f5f5f5] pt-[30px] pb-[50px] px-[30px] md:px-20 text-center">
        <a href="https://www.youtube.com/@TheJugnuProject" className="  text-[#AC1514] text-lg md:text-xl font-medium py-3 px-6 underline ">
          LISTEN & SUBSCRIBE TO THE KHAUF SE AAGAY: BEYOND FEAR PODCAST
        </a>
      </section>

      {/* Supported By Section */}
      <section className="bg-white py-[30px] px-[30px] md:px-20 flex flex-col sm:flex-row items-start sm:items-center gap-12 sm:gap-10 border-t border-[#eee]">
        <div className="text-2xl md:text-3xl font-bold text-[black]">Supported by:</div>
        <div className="flex flex-wrap items-center gap-32">
          <div className="flex items-center gap-2 text-[#333] text-[13px] font-medium">

            <img src="/Spotify.png" className="h-[60px] w-auto object-contain" />
          </div>
          <div className="flex items-center gap-2 text-[#333] text-[13px] font-medium">
            <img src="/apple.svg" className="h-[60px] w-auto object-contain" />
          </div>
          <div className="flex items-center gap-2 text-[#333] text-[13px] font-medium">
            <Link href="https://www.youtube.com/@TheJugnuProject">
              <img src="/Youtube.png" className="h-[60px] w-auto object-contain" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;

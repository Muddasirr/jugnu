'use client';
import React from 'react';
import Link from 'next/link';
const popularEpisodes = [
  { id: "43JGXUd_7pk", url: "https://youtu.be/43JGXUd_7pk?si=n4mPjNqbyiyiREIY" },
  { id: "vo425Vt-rh4", url: "https://www.youtube.com/watch?v=vo425Vt-rh4" },
  { id: "HZ_zdndQick", url: "https://www.youtube.com/watch?v=HZ_zdndQick&t=663s" },
  { id: "gE1q6iyXksE", url: "https://youtu.be/gE1q6iyXksE?si=wJ5ZPvzFXk-rJpZY" },
];

const PodcastPage: React.FC = () => {

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('podcast1.png')",
        }}
        className="text-white flex flex-col md:flex-row justify-between items-start py-[60px] px-[30px] md:px-20 min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      >
        <div >
          <h1 className="text-2xl md:text-3xl font-extrabold leading-[1.3] mb-6 tracking-[0.5px]">
            Khauf se aagay - Where silence ends
            <br />
            And strength begins.
          </h1>
          <p className="text-[18px] md:text-[28px] pt-[5%] leading-relaxed m-0 opacity-95 pr-0 md:pr-[40%] text-justify">
            Khauf Se Aagay, a podcast by The Jugnu Project, explores real
            stories and honest conversations about domestic and gender-
            based violence in the desi community (especially in Pakistan).
            Through survivor voices, expert insights and community
            dialogue, we move beyond the fear, silence and stigma to
            talk about healing, justice and change.
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
          <p className="text-[18px] md:text-[28px] leading-relaxed text-black text-justify">
            Khauf Se Aagay is a storytelling and awareness podcast
            by The Jugnu Project, that amplifies the voice of
            survivors, advocates and experts working to end
            family and gender-based violence.
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
          <p className="text-[18px] md:text-[24px] leading-relaxed md:leading-loose text-justify">
            Each episode dives deep into the realities of domestic violence in the desi
            community (especially in Pakistan) – from survivor journeys and legal challenges
            to mental health, community healing and social change.
          </p>

          <div className="w-full h-px bg-white/40 my-8 "></div>

          <p className="text-[18px] md:text-[24px] leading-relaxed md:leading-loose text-justify">
            Through open and respectful conversations, Khauf Se Aagay breaks the silence
            around abuse, confronts the stigma attached to family violence, and builds an
            understanding – helping listeners to see what lies beyond the fear: courage,
            healing and hope.
          </p>
        </div>
      </section>

      {/* Popular Episodes — YouTube thumbnails */}
      <section className="bg-[#f5f5f5] pt-10 pb-[60px] px-[30px] md:px-20">
        <h2 className="text-2xl md:text-3xl text-[black] font-extrabold mb-[30px] text-center">Popular Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {popularEpisodes.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:opacity-90 transition"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt="Podcast episode thumbnail"
                className="w-full h-full object-cover"
              />
            </a>
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
        <div className="text-2xl md:text-3xl font-extrabold text-[black]">Supported by:</div>
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

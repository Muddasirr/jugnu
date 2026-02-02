'use client';
import React from 'react';

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
        <div className="podcast-page">
            {/* Hero Section */}
            <section className="podcast-hero">
                <div className="podcast-hero__content">
                    <h1 className="podcast-hero__title">
                        KHAUF SE AAGAY - WHERE SILENCE ENDS
                        <br />
                        AND STRENGTH BEGINS.
                    </h1>
                    <p className="podcast-hero__description">
                        Khauf Se Aagay, A Podcast By The Jugnu Project, Explores Real
                        Stories And Honest Conversations About Domestic And Gender-
                        Based Violence In The Desi Community (especially In Pakistan).
                        Through Survivor Voices, Expert Insights And Community
                        Dialogue, We Move Beyond The Fear, Silence And Stigma To
                        Talk About Healing, Justice And Change.
                    </p>
                </div>
                <div className="podcast-hero__illustration">
                    <img src="/woman.svg" alt="Woman illustration" className="podcast-hero__woman" />
                    <div className="podcast-hero__arrow">
                        <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M60 200 L60 30 M60 30 L20 70 M60 30 L100 70"
                                stroke="#AC1514"
                                strokeWidth="20"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="podcast-about">
                <div className="podcast-about__content">
                    <p className="podcast-about__link">
                        About <span className="podcast-about__underline">The Jugnu Project: Pakistan's Digital</span>
                        <br />
                        <span className="podcast-about__underline">Domestic Violence Resource Center</span>
                    </p>
                    <p className="podcast-about__text">
                        Khauf Se Aagay Is A Storytelling And Awareness Podcast
                        By The Jugnu Project, That Amplifies The Voice Of
                        Survivors, Advocates And Experts Working To End
                        Family And Gender-Based Violence.
                    </p>
                </div>
            </section>

            {/* Description Section */}
            <section className="podcast-description">
                <p className="podcast-description__text">
                    Each Episode Dives Deep Into The Realities of Domestic Violence In The Desi
                    Community (Especially In Pakistan) – From Survivor Journeys And Legal Challenges
                    To Mental Health, Community Healing And Social Change.
                </p>
                <p className="podcast-description__text podcast-description__text--margin">
                    Through Open And Respectful Conversations, Khauf Se Aagay Breaks The Silence
                    Around Abuse, Confronts The Stigma Attached To Family Violence, And Builds An
                    Understanding – Helping Listeners To See What Lies Beyond The Fear: Courage,
                    Healing And Hope.
                </p>
            </section>

            {/* Popular Episodes Section */}
            <section className="podcast-episodes">
                <h2 className="podcast-episodes__title">Popular Episodes</h2>
                <div className="podcast-episodes__grid">
                    {popularEpisodes.map((episode) => (
                        <div key={episode.id} className="podcast-episode-card">
                            <div className="podcast-episode-card__thumbnail">
                                <img src={episode.thumbnail} alt={episode.title} />
                                <div className="podcast-episode-card__play">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="podcast-episode-card__duration">{episode.duration}</span>
                            </div>
                            <h3 className="podcast-episode-card__title">{episode.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Listen Subscribe Section */}
            <section className="podcast-subscribe">
                <a href="#" className="podcast-subscribe__link">
                    LISTEN & SUBSCRIBE TO THE KHAUF SE AAGAY: BEYOND FEAR PODCAST
                </a>
            </section>

            {/* Supported By Section */}
            <section className="podcast-supported">
                <span className="podcast-supported__label">Supported by:</span>
                <div className="podcast-supported__logos">
                    <div className="podcast-supported__logo">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="spotify-icon">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                        <span>Spotify</span>
                    </div>
                    <div className="podcast-supported__logo">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="apple-icon">
                            <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c.028-.02.056-.04.084-.058.378-.236.808-.36 1.242-.36.403 0 .79.1 1.143.287.35.186.655.452.896.776.088.117.168.24.24.368-.402.143-.745.38-1.013.69a2.252 2.252 0 00-.533 1.476c.005.546.19 1.062.533 1.478.27.326.623.575 1.013.718-.088.255-.195.502-.32.738-.277.52-.617.993-1.024 1.396-.29.287-.627.433-.984.433-.37 0-.713-.134-1.018-.257-.314-.128-.65-.257-.995-.257-.361 0-.71.133-1.05.264-.32.124-.65.254-1.005.254-.398 0-.765-.173-1.096-.505-.482-.484-.895-1.08-1.226-1.767-.354-.735-.593-1.586-.593-2.458 0-.852.19-1.576.574-2.172.304-.47.715-.84 1.21-1.09.476-.24 1-.37 1.537-.38.394 0 .798.143 1.202.287.324.116.647.233.914.233.234 0 .514-.098.846-.213.417-.147.902-.318 1.443-.303z" />
                        </svg>
                        <span>Apple<br />Podcasts</span>
                    </div>
                    <div className="podcast-supported__logo">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="youtube-icon">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <span>YouTube</span>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .podcast-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Hero Section */
        .podcast-hero {
          background-color: #AC1514;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 60px 80px;
          min-height: 400px;
          position: relative;
          overflow: hidden;
        }

        .podcast-hero__content {
          max-width: 520px;
          z-index: 2;
        }

        .podcast-hero__title {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 24px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .podcast-hero__description {
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
          opacity: 0.95;
        }

        .podcast-hero__illustration {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 1;
        }

        .podcast-hero__woman {
          height: 320px;
          object-fit: contain;
        }

        .podcast-hero__arrow {
          position: absolute;
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
          width: 120px;
          height: 200px;
        }

        .podcast-hero__arrow svg {
          width: 100%;
          height: 100%;
        }

        /* About Section */
        .podcast-about {
          background-color: #f5f5f5;
          padding: 60px 80px;
        }

        .podcast-about__content {
          max-width: 600px;
          margin-left: auto;
        }

        .podcast-about__link {
          font-size: 14px;
          color: #AC1514;
          margin: 0 0 20px 0;
          line-height: 1.6;
        }

        .podcast-about__underline {
          text-decoration: underline;
          cursor: pointer;
        }

        .podcast-about__text {
          font-size: 14px;
          line-height: 1.8;
          color: #333;
          margin: 0;
        }

        /* Description Section */
        .podcast-description {
          background-color: #f5f5f5;
          padding: 40px 80px 60px;
        }

        .podcast-description__text {
          font-size: 12px;
          line-height: 1.8;
          color: #333;
          margin: 0;
          max-width: 700px;
        }

        .podcast-description__text--margin {
          margin-top: 20px;
        }

        /* Popular Episodes Section */
        .podcast-episodes {
          background-color: #f5f5f5;
          padding: 40px 80px 60px;
        }

        .podcast-episodes__title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0 0 30px 0;
          text-align: center;
        }

        .podcast-episodes__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .podcast-episode-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .podcast-episode-card__thumbnail {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .podcast-episode-card__thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .podcast-episode-card__play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: background 0.2s;
        }

        .podcast-episode-card__play:hover {
          background: rgba(0, 0, 0, 0.85);
        }

        .podcast-episode-card__play svg {
          width: 20px;
          height: 20px;
          margin-left: 3px;
        }

        .podcast-episode-card__duration {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 3px;
        }

        .podcast-episode-card__title {
          font-size: 13px;
          font-weight: 500;
          color: #333;
          margin: 0;
          padding: 14px 12px;
          line-height: 1.4;
        }

        /* Subscribe Section */
        .podcast-subscribe {
          background-color: #f5f5f5;
          padding: 30px 80px 50px;
          text-align: center;
        }

        .podcast-subscribe__link {
          display: inline-block;
          background-color: #AC1514;
          color: white;
          font-size: 11px;
          font-weight: 600;
          padding: 12px 24px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: background 0.2s;
        }

        .podcast-subscribe__link:hover {
          background-color: #8a1110;
        }

        /* Supported By Section */
        .podcast-supported {
          background-color: white;
          padding: 30px 80px;
          display: flex;
          align-items: center;
          gap: 40px;
          border-top: 1px solid #eee;
        }

        .podcast-supported__label {
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }

        .podcast-supported__logos {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .podcast-supported__logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #333;
          font-size: 13px;
          font-weight: 500;
        }

        .podcast-supported__logo svg {
          width: 24px;
          height: 24px;
        }

        .spotify-icon {
          color: #1DB954;
        }

        .apple-icon {
          color: #872EC4;
        }

        .youtube-icon {
          color: #FF0000;
        }

        /* Responsive adjustments */
        @media (max-width: 900px) {
          .podcast-hero {
            flex-direction: column;
            padding: 40px 30px;
          }

          .podcast-hero__content {
            max-width: 100%;
          }

          .podcast-hero__illustration {
            margin-top: 40px;
          }

          .podcast-about,
          .podcast-description,
          .podcast-episodes,
          .podcast-subscribe,
          .podcast-supported {
            padding-left: 30px;
            padding-right: 30px;
          }

          .podcast-episodes__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .podcast-episodes__grid {
            grid-template-columns: 1fr;
          }

          .podcast-supported {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .podcast-supported__logos {
            flex-wrap: wrap;
          }
        }
      `}</style>
        </div>
    );
};

export default PodcastPage;

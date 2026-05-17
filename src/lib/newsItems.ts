export type NewsItem = {
  id: string;
  date: string; // ISO for sorting
  dateLabel: string;
  title: string;
  url: string;
  thumbnail?: string;
  source?: string;
};

function youtubeThumb(url: string): string | undefined {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : undefined;
}

/** In the News — latest first (page 22). */
export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "thenews-16-days",
    date: "2025-12-19",
    dateLabel: "19 Dec, 2025",
    title: "Sixteen Days Are Not Enough",
    url: "https://www.thenews.pk/print/1387552-sixteen-days-are-not-enough",
    source: "The News",
  },
  {
    id: "youtube-dec-17",
    date: "2025-12-17",
    dateLabel: "17 Dec, 2025",
    title: "Media feature — The Jugnu Project",
    url: "https://youtu.be/43JGXUd_7pk?si=n4mPjNqbyiyiREIY",
    thumbnail: youtubeThumb("https://youtu.be/43JGXUd_7pk"),
    source: "YouTube",
  },
  {
    id: "instagram-nov-27",
    date: "2025-11-27",
    dateLabel: "27 Nov, 2025",
    title: "The Jugnu Project on Instagram",
    url: "https://www.instagram.com/p/DRj8e3pDTFI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    source: "Instagram",
  },
  {
    id: "youtube-aug-03",
    date: "2025-08-03",
    dateLabel: "3 Aug, 2025",
    title: "Media feature — The Jugnu Project",
    url: "https://www.youtube.com/watch?v=vo425Vt-rh4",
    thumbnail: youtubeThumb("https://www.youtube.com/watch?v=vo425Vt-rh4"),
    source: "YouTube",
  },
  {
    id: "youtube-jul-13",
    date: "2025-07-13",
    dateLabel: "13 Jul, 2025",
    title: "Media feature — The Jugnu Project",
    url: "https://www.youtube.com/watch?v=HZ_zdndQick&t=663s",
    thumbnail: youtubeThumb("https://www.youtube.com/watch?v=HZ_zdndQick"),
    source: "YouTube",
  },
  {
    id: "voicepk-sania",
    date: "2025-07-01",
    dateLabel: "Jul, 2025",
    title: "Sania Bibi: A Fight for Life and Justice",
    url: "https://voicepk.net/2025/07/sania-bibi-a-fight-for-life-and-justice/",
    source: "Voice PK",
  },
  {
    id: "lums-swgi",
    date: "2024-11-12",
    dateLabel: "12 Nov, 2024",
    title: "LUMS — Social Welfare & Gender Initiative",
    url: "https://swgi.lums.edu.pk/node/18536",
    source: "LUMS SWGI",
  },
  {
    id: "womenintech-zohra",
    date: "2024-04-29",
    dateLabel: "29 Apr, 2024",
    title: "Zohra Ahmed — Incredible Women in Tech PK",
    url: "https://womenintechpk.com/zohra-ahmed-incredible-womenintechpk/",
    source: "Women in Tech PK",
  },
  {
    id: "pathmakers-patriarchy",
    date: "2022-02-07",
    dateLabel: "7 Feb, 2022",
    title: "Pathmakers: Zohra Ahmed on Patriarchy",
    url: "https://youtu.be/gE1q6iyXksE?si=wJ5ZPvzFXk-rJpZY",
    thumbnail: youtubeThumb("https://youtu.be/gE1q6iyXksE"),
    source: "YouTube",
  },
].sort((a, b) => b.date.localeCompare(a.date));

export const IN_THE_NEWS_INTRO = `This page features the latest media coverage and announcements featuring The Jugnu Project's work.

From community initiatives and advocacy efforts to expert insights and organizational milestones, this page showcases how our mission is being shared beyond our walls. We invite you to explore these stories to learn more about our impact, partnerships, and ongoing commitment to supporting and strengthening our community.`;

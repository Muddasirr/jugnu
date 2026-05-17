/** Encode public folder paths (spaces, parentheses, etc.) for use in src/href. */
export function publicPath(relativePath: string): string {
  return "/" + relativePath.split("/").map(encodeURIComponent).join("/");
}

const RESOURCE_PDF_DIR =
  "Resource PDFs-20260517T202553Z-3-001/Resource PDFs";
const RESOURCE_COVER_DIR =
  "Resource Category Covers-20260517T202550Z-3-001/Resource Category Covers";
const KNOW_NUMBERS_COVER_DIR =
  "Know Your Numbers_Covers-20260517T202548Z-3-001/Know Your Numbers_Covers";
const LEGAL_COVER_DIR =
  "Legal Judgements Covers-20260517T202548Z-3-001/Legal Judgements Covers";
const IMPACT_GALLERY_DIR =
  "Our Impact_Gallery-20260517T203113Z-3-001/Our Impact_Gallery";

export const PARTNER_LOGOS = [
  "partners/Chayn Logo.png",
  "partners/Law Offices of Zohra Ahmed.png",
  "partners/Logo_Herstash-purple.png",
  "partners/Logo_Rocky Books  circular-01.png",
  "partners/Logo_Sahara Sisters Collective.jpeg",
  "partners/Logo_ Umeed.jpg",
  "partners/Logo_Unfiltered_With_Maleeka_Bokhari.png",
].map(publicPath);

export type ResourcePdf = {
  id: string;
  title: string;
  file: string;
  description?: string;
};

export const RESOURCE_PDFS: ResourcePdf[] = [
  {
    id: "understanding-dv",
    title: "Understanding Domestic Violence",
    file: `${RESOURCE_PDF_DIR}/Understanding DV.pdf`,
    description:
      "Foundational guide to recognizing domestic violence and coercive control.",
  },
  {
    id: "safety-planning",
    title: "Safety Planning",
    file: `${RESOURCE_PDF_DIR}/Safety Planning.pdf`,
    description: "Practical steps for survivors to plan for safety.",
  },
  {
    id: "myths-about-dv",
    title: "Myths About Domestic Violence",
    file: `${RESOURCE_PDF_DIR}/Myths About DV.pdf`,
    description: "Common myths and facts about family violence.",
  },
  {
    id: "online-safety",
    title: "Guide to Online Safety",
    file: `${RESOURCE_PDF_DIR}/Guide to Online Safety.pdf`,
    description: "Protect yourself from technology-facilitated abuse.",
  },
  {
    id: "emergency-stash",
    title: "Creating an Emergency Stash Fund",
    file: `${RESOURCE_PDF_DIR}/Creating an Emergency Stash Fund.pdf`,
    description: "Building financial resilience when leaving abuse.",
  },
  {
    id: "post-separation",
    title: "Post-Separation Abuse",
    file: `${RESOURCE_PDF_DIR}/Post-Separation Abuse.pdf`,
    description: "Recognizing abuse that continues after separation.",
  },
  {
    id: "dental-professionals",
    title: "Family Violence — Dental Professionals",
    file: `${RESOURCE_PDF_DIR}/FVP-Dental Professionals.pdf`,
    description: "Guidance for health workers identifying abuse.",
  },
  {
    id: "call-center-training",
    title: "Training — Call Center Agents",
    file: `${RESOURCE_PDF_DIR}/Training Resource - Call Center Agents.pdf`,
    description: "Handling SEA, SH and GBV disclosures professionally.",
  },
];

export function resourceCover(n: number): string {
  return publicPath(`${RESOURCE_COVER_DIR}/${n}.png`);
}

export const KNOW_YOUR_NUMBERS_COVERS = [55, 56, 57].map((n) =>
  publicPath(`${KNOW_NUMBERS_COVER_DIR}/${n}.png`)
);

export const LEGAL_JUDGEMENT_COVERS = [58, 59, 60, 61].map((n) =>
  publicPath(`${LEGAL_COVER_DIR}/${n}.png`)
);

/** Maps resource library card id → PDF ids from RESOURCE_PDFS */
export const RESOURCE_PDF_GROUPS: Record<number, string[]> = {
  1: ["myths-about-dv"],
  3: ["understanding-dv", "post-separation", "myths-about-dv"],
  5: ["understanding-dv"],
  8: ["emergency-stash"],
  10: ["online-safety"],
  11: ["dental-professionals", "call-center-training"],
  12: ["safety-planning", "understanding-dv"],
};

export const BOOK_COVER_FILES = [
  "book_covers/1. In Control_Jane Monckton Smith.jpg",
  "book_covers/2. Why women are blamed for everything_Jessica Taylor.jpg",
  "book_covers/3. Don_t you know who i am_Dr. Ramani.jpg",
  "book_covers/4. Should i stay or should i go_Dr. Ramani.jpg",
  "book_covers/5. The Body keeps the score_Bessel.jpg",
  "book_covers/6. Sexy but psycho_Jessica taylor.jpg",
  "book_covers/7. The Handbook of Narcissism and Narcissistic Personality Disorder_Campbell.jpg",
  "book_covers/8. Will I Ever Be Good Enough_McBride.jpg",
  "book_covers/9. Fierce_Kristin Neff.jpg",
  "book_covers/10. Entitled_Kate Manne.jpg",
  "book_covers/11. Soul Murder_Leonard.jpg",
  "book_covers/12. Adult Children of Emotionally Immature Parents_Lindsay.jpg",
  "book_covers/13. Cover Passive Aggressive Narcissist_Debbie.jpg",
  "book_covers/14. Toxic Parents_Susan.jpg",
  "book_covers/15. Framed_Dr. Christine.jpg",
  "book_covers/16. Fawning_Dr. Ingrid.jpg",
  "book_covers/17. Trauma and Recovery_Judith.jpg",
  "book_covers/18. Truth and repair_Judith.jpg",
  "book_covers/19. The Second Sex_Simone.jpg",
  "book_covers/20. We should all be feminists_Chimamanda.jpg",
  "book_covers/21. Feminist Manifesto_Chimamanda.jpg",
  "book_covers/22. Purple Hibiscus_Chimamanda.jpg",
  "book_covers/23. Men explain things to me_Rebecca.jpg",
  "book_covers/24. Feminism is for everybody_Bell Hooks.jpg",
  "book_covers/25. Aint I a woman_ bell hooks.jpg",
  "book_covers/26. all about love_bell hooks.jpg",
  "book_covers/27, Talking Back_bell hooks.jpg",
  "book_covers/28.Feminist Theory, From Margin to Center_bell hooks.jpg",
  "book_covers/29. Teaching to transgress_bell hooks.jpg",
  "book_covers/30. The color purple_alice walker.jpg",
  "book_covers/31. When the rabbit howls_Trudi.jpg",
  "book_covers/32. The girl in the green dress_Jeni Haynes.jpg",
  "book_covers/33. Nobody_s Girl_Virginia.jpg",
  "book_covers/34. Rage becomes her_Soraya.png",
  "book_covers/35. Healing the traumatized adult_Alice little.jpg",
  "book_covers/36. No contact survivor_alice little.jpg",
  "book_covers/37. Momspeak_Pooja.jpg",
  "book_covers/38. Exploring Masculinity_Kamla Bhasin.jpg",
  "book_covers/39. What is patriarchy_Kamla bhasin.jpg",
  "book_covers/40. Aurat_Arfa Sayyeda.jpg",
  "book_covers/41. The Pakistan Project_Rubina Saigol.jpg",
  null,
  "book_covers/43. Hudood Ordinance_Asma Jehangir.jpg",
  "book_covers/44. Children of a lesser god_Asma Jehangir.jpg",
  "book_covers/45. The parenting map_Dr. Shefali.png",
].map((f) => (f ? publicPath(f) : null));

export const IMPACT_GALLERY_IMAGES = [
  "02.04.2024.png",
  "03.02.2024(1).png",
  "19.12.2024(1).png",
  "21.11.2024(3).png",
  "25.05.2024(1).png",
  "03.09.2025(1).JPG",
  "21.12.2024(1).jpg",
  "22.03.2024.png",
  "01.07.2024-01.08.2024(1).png",
  "Copy of 3. Umeed.jpg",
].map((f) => publicPath(`${IMPACT_GALLERY_DIR}/${f}`));

export function pdfHref(pdf: ResourcePdf): string {
  return publicPath(pdf.file);
}

export function documentsPageUrl(resourceId?: number): string {
  if (!resourceId) return "/resources/documents";
  const ids = RESOURCE_PDF_GROUPS[resourceId];
  if (!ids?.length) return "/resources/documents";
  return `/resources/documents?category=${resourceId}`;
}

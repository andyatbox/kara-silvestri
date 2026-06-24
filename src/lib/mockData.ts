/**
 * Local fallback content used when Webflow credentials are not configured.
 * The shapes here mirror what `webflow.ts` returns, so pages are agnostic to
 * the source. Replace by setting WEBFLOW_* env vars (see `.env.example`).
 */

export type Project = {
  id: string;
  slug: string;
  title: string;
  category?: string;
  teaserImage?: string;
  teaserVideo?: string;
  summary?: string;
  body?: string;
  /** If set, the teaser links out to this URL instead of an internal page. */
  externalUrl?: string;
};

export type Release = {
  id: string;
  title: string;
  image?: string;
  body: string;
  videoEmbedUrl?: string;
};

/**
 * Gradient placeholders keep the layout honest before real Webflow imagery is
 * wired in. They use the site's teal/black palette so the grid still reads.
 */
const placeholder = (label: string, from: string, to: string) =>
  `data:image/svg+xml;utf8,` +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/>
      </linearGradient></defs>
      <rect width="1200" height="800" fill="url(#g)"/>
      <text x="50%" y="50%" fill="#ffffff" fill-opacity="0.85"
        font-family="Montserrat, sans-serif" font-size="44" font-weight="300"
        letter-spacing="6" text-anchor="middle" dominant-baseline="middle"
        text-transform="uppercase">${label}</text>
    </svg>`,
  );

export const mockProjects: Project[] = [
  {
    id: "p1",
    slug: "album-resurrection",
    title: "Album Resurrection",
    category: "Advertising · Art Direction",
    teaserImage: placeholder("Album Resurrection", "#0b3b3c", "#061416"),
    summary:
      "One Show Award–winning campaign reviving lost records for a new generation of listeners.",
    body: "An award-winning advertising concept developed at the School of Visual Arts, recognized with a One Show Award. The work paired bold art direction with motion and sound design to reframe forgotten albums as cultural artifacts worth rediscovering.",
  },
  {
    id: "p2",
    slug: "vote-draft",
    title: "Vote Draft",
    category: "Campaign · Design",
    teaserImage: placeholder("Vote Draft", "#123a44", "#06181c"),
    summary:
      "A civic engagement campaign mobilizing first-time voters. One Show Award, 2020.",
    body: "A campaign built to make voting feel as urgent and communal as a draft pick. Recognized with a One Show Award in 2020, the project spanned identity, social, and experiential touchpoints.",
  },
  {
    id: "p3",
    slug: "scariest-whopper",
    title: "Scariest Whopper",
    category: "Advertising · Film",
    teaserImage: placeholder("Scariest Whopper", "#0e3038", "#05161a"),
    teaserVideo: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    summary:
      "A horror-tinged brand film that turned a fast-food icon into a Halloween event.",
    body: "Directed and art-directed with a cinematic, horror-inspired treatment. The piece earned a One Show Award in 2019 and leaned on atmosphere, pacing, and sound to build dread before the reveal.",
  },
  {
    id: "p4",
    slug: "dupixent-experience",
    title: "Dupixent Brand Experience",
    category: "Healthcare · UX/UI",
    teaserImage: placeholder("Dupixent", "#0b3b3c", "#061416"),
    summary:
      "Health Care Professional and Direct-to-Consumer advertising, dosing tools, and digital experiences.",
    body: "Led design across the Dupixent brand including Health Care Professional and Direct-to-Consumer advertising — dosing cards, informational graphics, emails, and digital experiences built for clarity and trust.",
  },
  {
    id: "p5",
    slug: "experiential-activations",
    title: "Experiential Activations",
    category: "Experiential · Motion",
    teaserImage: placeholder("Experiential", "#123a44", "#06181c"),
    summary:
      "Web design, animated graphics, and live activations that bring brands into physical space.",
    body: "A body of experiential work — web design, animated graphics, and on-site activations — designed to translate brand stories into spaces people can move through and feel.",
  },
  {
    id: "p6",
    slug: "hex-short-film",
    title: "HEX — Short Film",
    category: "Film · Direction",
    teaserImage: placeholder("HEX", "#0e3038", "#05161a"),
    teaserVideo: "https://player.vimeo.com/video/76979871",
    summary:
      "Best Actress at the Afterdark Film Festival; screened at the International Women's Film Festival.",
    body: "A short film exploring tension and atmosphere through restrained performance and deliberate camera work. Honored with a Best Actress award at the Afterdark Film Festival and screened at the International Women's Film Festival.",
  },
];

export const mockReleases: Release[] = [
  {
    id: "r1",
    title: "You Jerk",
    image: placeholder("You Jerk", "#0b3b3c", "#061416"),
    body: "A sharp, kinetic track that opens the collection with attitude and momentum — equal parts confrontation and release. Written and developed in the studio, it sets the emotional register for everything that follows.",
    videoEmbedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
  {
    id: "r2",
    title: "Embers",
    image: placeholder("Embers", "#123a44", "#06181c"),
    body: "Atmospheric and slow-burning, 'Embers' lives in the space between the light and the dark — a meditation on what's left glowing after the fire. The arrangement leans on rhythm and air to carry the feeling.",
  },
  {
    id: "r3",
    title: "Undertow",
    image: placeholder("Undertow", "#0e3038", "#05161a"),
    body: "Pulled between surrender and resistance, 'Undertow' captures the feeling of being carried by forces larger than yourself. Layered vocals and a deep low end give the track its gravity.",
    videoEmbedUrl: "https://player.vimeo.com/video/76979871",
  },
  {
    id: "r4",
    title: "Frozen Time",
    image: placeholder("Frozen Time", "#0b3b3c", "#061416"),
    body: "A closing reflection — quiet, suspended, and intimate. 'Frozen Time' holds a single moment still long enough to really see it, ending the collection on a held breath rather than a resolution.",
  },
];

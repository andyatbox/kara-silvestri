/**
 * Site content for Design & Film (projects) and Music (releases).
 *
 * Migrated from the client's live Webflow site (karasilvestri.com) on
 * 2026-06-25. This is the content source until/unless the Webflow CMS is wired
 * up (see src/lib/webflow.ts, which falls back to these arrays).
 */

export type MediaBlock =
  | { type: "text"; text: string }
  | { type: "image"; url: string }
  | { type: "video"; url: string };

export type Project = {
  id: string;
  slug: string;
  title: string;
  category?: string;
  teaserImage?: string;
  teaserVideo?: string;
  summary?: string;
  body?: string;
  /** Ordered full-page content (case-study images, text, videos). */
  blocks?: MediaBlock[];
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

export const mockProjects: Project[] = [
  {
    id: "lipstickladies",
    slug: "lipstickladies",
    title: "Lipstick Ladies Short Film",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb81dc676b3139e84788f4b_coverTitle-lipstickLadiesV4.jpg",
    blocks: [
      { type: "text", text: "FILM DIRECTOR: Mentorship with legendary American Film Director Bob Giraldi. I created a film from start to finish in collaboration with Film Industry Professionals. This is my 12 minute short Dark Comedy called 'Lipstick Ladies'. Here you will find: my short film, the movie poster, my Directors treatment, my storyboards, the end cartoon animation I created to package the film, and behind the scenes photos from the shoot." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fee027f83f67d56e166ff64_Cover_for-Kara.jpg" },
      { type: "video", url: "https://www.youtube.com/embed/dDgN19jTThI" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb81dc676b3139e84788f4b_coverTitle-lipstickLadiesV4.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefe8b5d91ad3147904fac1_KaraSilvestri_Adportfolio_00b73.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fee02b98ef403d973d1496f_LipstickLadies_Lookbook2-1.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fee02b801bdfa2e0ba7ca6a_LipstickLadies_Lookbook2-2.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fee02b8559a423d87a1d47b_LipstickLadies_Lookbook2-3.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fee02b90c6503f283bed788_LipstickLadies_Lookbook2-4.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fee02b95ceaedebbcdbebb5_LipstickLadies_Lookbook2-5.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fee02b8c8595f8873b03842_LipstickLadies_Lookbook2-6.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefadd683f67d0a636a5c24_Storyboard_LipstickLadies_Adjusted-01.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefadebaac908aaf866704a_Storyboard_LipstickLadies_Adjusted-02.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefae0d4ac6785ea25ec6ae_Storyboard_LipstickLadies_Adjusted-03.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefae160c65032816c21572_Storyboard_LipstickLadies_Adjusted-04.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefe9515ceaed1bb2e0040e_KaraSilvestri_Adportfolio_00b72.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefe95101bdfaaba4ab8536_KaraSilvestri_Adportfolio_00b70.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefe9519348a7d0e21a1080_KaraSilvestri_Adportfolio_00b71.jpg" },
      { type: "video", url: "https://www.youtube.com/embed/W8LKanMbbvQ" },
    ],
  },
  {
    id: "wilde-ride-film-fest",
    slug: "wilde-ride-film-fest",
    title: "'It's Been a Wilde Ride' Film Festival",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb81f83d2415364e2dded57_WildeRide_.jpg",
    blocks: [
      { type: "text", text: "FILM FEST CONTENT DESIGN DIRECTOR: In honor of Richard Wilde retiring from the SVA Advertising and Design Department, I came up with this theme for my Directing Class' 2019 Film Festival. I also created the overall visual branding, poster designs, motion graphic title & Intermission animations, tickets, and brochure. Here you can find the work I created for this festival." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb81f83d2415364e2dded57_WildeRide_.jpg" },
      { type: "video", url: "https://www.youtube.com/embed/hqR-ZWL7AvA" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefcb8092fcdbbf3dd89851_RichWildeP2.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefcb80823a56a5346d325a_RichWildeP.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefe5ed01923a69bef8cacf_KaraSilvestri_Adportfolio_00b78.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefe5ef493e9385717ff011_KaraSilvestri_Adportfolio_00b77.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefe5ed5e05bd2a69a62db9_KaraSilvestri_Adportfolio_00b79.jpg" },
    ],
  },
  {
    id: "sour-patch-kids",
    slug: "sour-patch-kids",
    title: "Freelance for SKUNK Productions Directors Assistant",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/672bfd0e6c7413f157a88cdb_Sour%20patch.jpg",
    blocks: [
      { type: "video", url: "https://www.youtube.com/embed/-XTLLcf5aBU" },
    ],
  },
  {
    id: "moderna",
    slug: "moderna",
    title: "TBWA\\Chiat Day Health Collective Senior Art Director",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/672bfc440cf1997a4bf645b1_009304c6c280d3634277df2cae1ad41e.png",
    blocks: [
      { type: "video", url: "https://www.youtube.com/embed/yObWLSul_LQ" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67361dc2c07040af8c9cd4d3_Image%2B10-24-24%2Bat%2B4.11%E2%80%AFPM.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67361ddb9e7c0c8da75b28c7_Spikevax2.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67361f41691d7468ba3bcff8_Spikevax3.jpg" },
    ],
  },
  {
    id: "skunk",
    slug: "skunk",
    title: "Directors Production Assistant",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/672c5ac8a14209294dd05232_jardiance-logo-og.png",
    blocks: [
      { type: "text", text: "DIRECTORS PRODUCTION ASSISTANT: I flew out to Los Angeles to intern at SKUNK as the Director's Production Assistant on a TV commercial. I was both an office and set PA so I worked on the pre-production book, reached out to talent, helped with paperwork, created brochures for cast & crew members on the shoot days(see below), and I helped different departments as a PA once we were on set. I was also recognized as a Directing student at my Skunk Internship so I had the honor of watching Director, Renny Maslow, on the set days and ask him any questions I had when I wasn't PA-ing. I was so welcomed by the Skunk team and I loved every minute working on this TV commercial." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fbc73eaa6dcf24d4947df3b_1FF14AB0-7973-4C80-B2F9-B3172C3EB985_1_105_c.jpeg" },
      { type: "video", url: "https://www.youtube.com/embed/l5H3DuQ7BY8" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fbc72627ab321c97dbef94c_IMG_2950.jpeg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fbc7284ef0f2f3330f15dfb_IMG_2953.jpeg" },
    ],
  },
  {
    id: "album-resurrection",
    slug: "album-resurrection",
    title: "Album Resurrection",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefd2b5493e9333a17fd3d2_PF1_AlbumResurrection.jpg",
    blocks: [
      { type: "text", text: "The album has resurrected. This project was created by me and my partner from college. ART DIRECTOR: Created Visual Design, Motion Graphics, and Video Edit. Received a One Show merit" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefd2b5493e9333a17fd3d2_PF1_AlbumResurrection.jpg" },
      { type: "video", url: "https://www.youtube.com/embed/IL2ROloW828" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefd01c4ac6786dcb5f0c77_KaraSilvestri_Adportfolio_00b16.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefd01c8f760583b741086c_KaraSilvestri_Adportfolio_00b17.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fefd01c62a3b1ae77134d48_KaraSilvestri_Adportfolio_00b18.jpg" },
    ],
  },
  {
    id: "burger-king",
    slug: "burger-king",
    title: "Burger King Case Study",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1efec674b0b45a37c0bf6_BK_Casestudy-09.png",
    blocks: [
      { type: "text", text: "ART DIRECTOR: I created this concept with my partner, Shirley Wang. I made the Director's treatment, the visual Design style, and the final Animation. I also helped tighten up the Copywriting and I Coordinated/Directed the Voiceover Actor. ‍ Recognized at all the One Show." },
      { type: "video", url: "https://player.vimeo.com/video/327401419" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1f09cd183e431ff8d0863_BK_Casestudy-10.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1f0c8bd22a0978f37de7c_BK_Casestudy-11.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1f0e03f06532c432abab2_BK_Casestudy-12.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1f0f3674b0b2cbb7c0d2d_BK_Casestudy-13.png" },
    ],
  },
  {
    id: "pet-planit-app",
    slug: "pet-planit-app",
    title: "'Pet Planit' Pet Adoption App",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1f81b8474c4996d5141b5_download.gif",
    blocks: [
      { type: "text", text: "ART DIRECTOR: Pet adoption app that pairs users with pets that have similar features as them. I created this app concept in my Interactive Design class at the Google Creative Lab. Here you'll find my Design Guide, and user-flow screens." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1f80fd183e487048d14cd_PEtPlanit-thumb.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb24c24bdf505884910b480_Petplanit-04.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb24bf5edd531f83a8940cb_Petplanit-02.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb24cd97418d3176f46f0be_Petplanit-03.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb24c33674b0ba93e7cd0de_Petplanit-05.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb24c40c3163b564e7577fe_Petplanit-06.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb24c525c479ec0928a181f_Petplanit-07.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb24c717056f74f209fa076_Petplanit-08.png" },
    ],
  },
  {
    id: "memsical",
    slug: "memsical",
    title: "Memsical",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb2b838787b41c9ad54b6e7_Memsical%20-%20%20Purp%20iphone.jpg",
    blocks: [
      { type: "text", text: "I created an app that turns a Study Guide into a memorable music jingle so that the information sticks. ART DIRECTOR: I created this app concept in my Interdisciplinary Design Class at SVA. I made the branding with style guides, user-flows, and I Designed the final product in a UI design software called Sketch, and I prototyped it in Invision." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1ee6a21d82e483556c830_Memsical_Project_Artboard%201%20copy%205.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5ff4167d59d5804ebfc14cad_KaraSilvestri_Adportfolio_00b48.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5ff416e1c2dce870ed381006_KaraSilvestri_Adportfolio_00b50.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5ff41715ec5ad46a174e5cb3_KaraSilvestri_Adportfolio_00b51.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5ff417156b696df1b3d815de_KaraSilvestri_Adportfolio_00b52.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1ee5e8e1c0c1a928dc42d_Memsical_Project_Artboard%201%20copy%204.png" },
    ],
  },
  {
    id: "in-the-stars",
    slug: "in-the-stars",
    title: "In The Stars Music Video",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/672c38cca4dd0452a006446d_ITS.jpg",
    blocks: [
      { type: "text", text: "EXECUTIVE PRODUCER/TALENT: After being on countless sets accross the US as a PA, I wanted to drive the ship of a new project. After getting more involved with my songwriting career, I decided to bring one of my songs to life through a highly conceptual music video. I brought on my professional producers to act as my directors since this would be my fist time infront of camera, a whole crew, and I cast a younger dancer to play me as a little girl. This was not only a highly exciting process that would launch my music career but also an invaluable learning experience from a filmmaking perspecive." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/672c38cca4dd0452a006446d_ITS.jpg" },
      { type: "video", url: "https://www.youtube.com/embed/JxytxhN2GKo" },
    ],
  },
  {
    id: "fireplace",
    slug: "fireplace",
    title: "\"Fireplace\" Music Video",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb82387eb3e0d4f8fd4bb57_KS_Fireplacetitleheader.png",
    blocks: [
      { type: "text", text: "I had the opportunity to fly out to Los Angeles to work as the Key production assistant alongside the Producer and Director on two music video shoots, “Fireplace” and “Top Spot” by Whitney McClain. As a part of my responsibilities I helped retrieve the film location permits, photograph the location scout, print and organize paperwork/documents, give an extra hand with set designing, and gathering props. I learned how to execute the role of a DIT on set and I got to collaborate on planning/reviewing the shot lists, as well as brainstorming creative decisions that played out on set. I also worked on the post Title animations and color correction for these music videos." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb82387eb3e0d4f8fd4bb57_KS_Fireplacetitleheader.png" },
      { type: "video", url: "https://www.youtube.com/embed/vTVmnxig6rE" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fbc75284b3c997a50d670a2_IMG_2436.jpeg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fbc74ff3772bf44b410f96b_IMG_2456.jpeg" },
    ],
  },
  {
    id: "hafus-in-love",
    slug: "hafus-in-love",
    title: "Hafus In Love - Short Film",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/672c374c4613974eec5c9b68_Hafus.jpg",
  },
  {
    id: "coffeelabs",
    slug: "coffeelabs",
    title: "Design Intern",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1dd210025cd1e1f1dfa15_COFFEE%20Logo_Square.png",
    blocks: [
      { type: "text", text: "I worked on graphics & motion Design—creative mockups for experiential events, UX/UI user-flows, storyboards for AR & video experiences for numerous brands including Bud Light, Mikes Hard Lemonade, Synchrony Bank, and Burger King... to name a few." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1dc7f353988ca5aff5743_COFFEE_only_thick_400px.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1de62025d14500218fc47_Coffee_Casestudy-01.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1ded9bdf50562520f60b5_Coffee_Casestudy-02.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1df8e17630605a3ec9581_Coffee_Casestudy-04.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1dfdaaf3fac9d38bc16d1_Coffee_Casestudy-05.jpg" },
    ],
  },
  {
    id: "portfolio-books",
    slug: "portfolio-books",
    title: "Portfolio Books Packaging, Book, Content and Collage Design",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673555b4c7f2e178ff3febe6_Page%201.jpg",
    blocks: [
      { type: "text", text: "Designed and Directed books that were made as physical copies of my portfolio. I put a deep amount of detail into each book, from the packaging design, to the dfferent book binds and paper options, to the designed content within the book and all the typography, composition and visual range I could achieve. I scored a 4.9 out of 5 which is an honorable achievement at my school. I graduated with honors classes and a scholarship from the School of Visual Arts." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673555b4c7f2e178ff3febe6_Page%201.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673556062728f5babcc5aee1_Page2.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67355e462728f5babccc4a32_cover1.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67355fff9342457f88d87ede_cover3.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67355ed82728f5babcccbbef_cover2.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673563bde7174b3971f1ba31_GU.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673564a004cf69a157456d77_IMG_0959.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673564886777bdbdc769ea2e_IMG_0958.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673556411d2f1e50c9704945_page3A.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6735564e54bef1ab86f50388_page3.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673557ac0024dbbd77b7b125_4.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673557ba16a7057f1c129f75_5.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6735593f6bf2c5ef8746bafc_7.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673559ce04cf69a1573c2477_8.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67355ad2ba55d37bebd926d3_10.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67367a2f4bf90538759932ca_Collageface.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67367a92d5cf34c72b61a7ed_SHadowcollage.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67355bac93f7134d744f56e8_12.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67355c9428a4097940611c80_13.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67355ca46777bdbdc7624ab1_14.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67355cb19d3db0253ef90237_15.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67367555001c86344b7aafa6_Polka%20dot.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673675b118c75ec79fdb7ad7_Bluecircle.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736763be76afd113a813d8a_Ripppledpage.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736764736845c6eea8708e5_Keyforaneye.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736773c3cb9a533ba56f3c5_Strips.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736774d36845c6eea88108a_faintlint.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736782772502a6add5506b7_Spraycan.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67367838433830d5f7f6a667_UpsidedownT.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673679656598cbc09a8857b7_Missing%20face.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67367980213c3fb98dc19e83_DotDotDot.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673679cef3845f1571c5a820_Littlecar.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67367d5741ec3763cd9a3938_Srpaycans.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/67367ecab6dd3f97a1771ed3_contrsstdosts.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736809f5def948d39d2751a_Disney.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673681831ea867936447e671_magazine.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673681dd22bb776529eab916_Cottoncandyslushie.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736823bbacd99a1471129c0_DirtyWasher.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736827da0f81b1ff72b218d_Woodenface.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673682af1ea86793644931b3_Greenstripes.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/673682e315b1b0423793dd71_HauntedCarousel.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736836b36f8065d8b39218c_STainedglass.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6736833c1ea867936449b1ca_Thankou.jpg" },
    ],
  },
  {
    id: "sharecare",
    slug: "sharecare",
    title: "Consumer Solutions Design Intern",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1b27bd8262a026bebd68c_Sharecare-cover.jpg",
    blocks: [
      { type: "text", text: "Designed presentations and sales collateral, designed for events, created Advertising mockups/promotions and helped with branding for a health and pharmaceutical publishing company." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c356edfe9d7128a12ce9_Sharecare-logo.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bd501e40ec0fa81bf137_Internship_KaraSilvestriV2-1.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c0753848e3b253a54f12_Internship_KaraSilvestriV2-30.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bf55df55337bc887f8d8_Internship_KaraSilvestriV2-7.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bf8c8e1c0c29498cd8e8_Internship_KaraSilvestriV2-8.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bf96025d145be118740f_Internship_KaraSilvestriV2-9.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bfa2d1c7a0683690a541_Internship_KaraSilvestriV2-10.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bfb3b3236f797a3512d5_Internship_KaraSilvestriV2-11.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bfbdde4f3fc9329c727a_Internship_KaraSilvestriV2-13.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bfcf1e40ec2b781bf8e3_Internship_KaraSilvestriV2-14.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bfe00cbef1f4341bc80d_Internship_KaraSilvestriV2-15.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bffcd183e43da78c4b52_Internship_KaraSilvestriV2-17.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bfee8474c459e150478d_Internship_KaraSilvestriV2-16.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c007674b0b5aa67b5a01_Internship_KaraSilvestriV2-18.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c0169cf83c96edf7d833_Internship_KaraSilvestriV2-20.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c0afbdf50506a20edf3f_Internship_KaraSilvestriV2-36.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c0be1c0cce38a29455c9_Internship_KaraSilvestriV2-37.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb25143dc8bbe11b1d3d7f5_BC04619C-80D5-4F17-A8CD-96BEC5FD18C9_1_105_c.jpeg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb2502fedd5316cf98950f2_Sharecare_WEPErform.jpeg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c450b3236fe7fc3525f6_100484E5-30B7-4485-8355-0F44F7AFF152_1_105_c.jpeg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c03a0cbef159841bc88b_Internship_KaraSilvestriV2-24.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c05edc2686423f9ff752_Internship_KaraSilvestriV2-26.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c06ac3163b7a8973cca3_Internship_KaraSilvestriV2-27.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c0a056d9a3a821c13cd7_Internship_KaraSilvestriV2-35.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c093de4f3ffd089c74c6_Internship_KaraSilvestriV2-34.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c04e025d14dab818761a_Internship_KaraSilvestriV2-25.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1c0ec5d9cc43e655c31d6_Internship_KaraSilvestriV2-38.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb1bf1d34bc790666fce8ff_Internship_KaraSilvestriV2-4.jpg" },
    ],
  },
  {
    id: "whole-foods",
    slug: "whole-foods",
    title: "The Whole Picture",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a1e3f90a5f07780ab2bbfe1_Whole%20foods%20cover.jpg",
    blocks: [
      { type: "text", text: "A case study I did for a marketing exercise. The idea involves exciting local artists with an interactive sales activation in collaboration with whole foods. I created this concept from the insight that a lot of people go to grocery stores over art venues/museums." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/61e3582da1d47b0c76700494_Screen%20Shot%202022-01-15%20at%206.21.47%20PM.png" },
      { type: "video", url: "https://player.vimeo.com/video/666373464" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/61e35ea82d3504b8c8620bff_Page%201.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/61e35ebbf83977805a057003_Page%202.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/61e35ec8f040dacd82df7a95_Page%203.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/61e35f00cc6a4d83a6888332_Page%204.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/61e35f17c27e4b52ab886831_Page%205.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/61e35f27f040da4eacdf7af1_Page%206.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/61e35f3c8ff77b4312f534de_Page%207.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/633f93f1fbdbe150aacf4e56_Page%208%20copy.png" },
    ],
  },
  {
    id: "bixbynightwatcher",
    slug: "bixbynightwatcher",
    title: "Smart Fridge Case Study",
    teaserImage: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a1e3d8e5232ce0dc04d15da_Samsung_cover.jpg",
    blocks: [
      { type: "text", text: "Art Director in collaboration with Justin Sager. A smart fridge that helps track how you're eating. Through audio prompts initiated by motion sensors when you reach for Junk food at 3am, Bixby will talk you out of your late night carvings." },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb2b14059f2fe6587bf2684_BixbyCasestudy-03.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5ff41acb231a562338af882e_KaraSilvestri_Adportfolio_00b34.jpg" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fbd71f00a0ff9041a028a74_BixbyCasestudy-05.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb2b2cc04eb4b0fc870abba_BixbyCasestudy-06.png" },
      { type: "image", url: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/5fb2b2ec787b414c7e54818c_BixbyCasestudy-07.png" },
    ],
  },
];

export const mockReleases: Release[] = [
  {
    id: "you-jerk",
    title: "You Jerk",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a2b7cf6944f448e28af0977_YouJerk_Cover.jpg",
    body: "'War' was a product of my time in the studio in LA, where I traveled in 2022 to my producers studio to work on the songs I wanted on my EP. 'War' will be released as an EP collection on all platforms later in 2025. 'War' was actually born on my 24th birthday in the studio, I wrote it that day while experimenting with different ideas with my producers. Conceptually, 'War' explores the complexities of self-discovery and acceptance... The track and accompanying songs on the EP will be released with a video that conveys a powerful message about embracing all facet.",
  },
  {
    id: "rose-colored-lenses",
    title: "Rose Colored Lenses",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a2b7c2bd3e8c89dcee9d220_Kara_Silvestri_7_11_final_1.0.jpg",
    body: "'War' was a product of my time in the studio in LA, where I traveled in 2022 to my producers studio to work on the songs I wanted on my EP. 'War' will be released as an EP collection on all platforms later in 2025. 'War' was actually born on my 24th birthday in the studio, I wrote it that day while experimenting with different ideas with my producers. Conceptually,",
    videoEmbedUrl: "https://www.youtube.com/embed/_Z9it_j716A",
  },
  {
    id: "war",
    title: "War",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a2b784c75e7e7a66359e50e_Kara-WAR_1.1.jpg",
    body: "'War' was a product of my time in the studio in LA, where I traveled in 2022 to my producers studio to work on the songs I wanted on my EP. 'War' will be released as an EP collection on all platforms later in 2025. 'War' was actually born on my 24th birthday in the studio, I wrote it that day while experimenting with different ideas with my producers. Conceptually, 'War' explores the complexities of self-discovery and acceptance... The track and accompanying songs on the EP will be released with a video that conveys a powerful message about embracing all facets of one's identity, even the conflicting ones. ‍ Ultimately— we created a record that I adore. With my love for pop music being the thread through it all- this record was a deep exploration into studying the points of intersection between left field Indie and commercial radio pop musicians - specifically the collaborations in the 70's and early 2000's. Some big inspirations for the musical vibe and vocal character were Melanie Martinez, Halsey, Billie Eilish, Ellie Goulding, and Taylor Swift.",
    videoEmbedUrl: "https://www.youtube.com/embed/II7MrucZRRI",
  },
  {
    id: "in-the-stars",
    title: "In The Stars",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a3372a0341469218c9f2ca7_ITS_KS.jpg",
    body: "The concept began in middle school during the years I started making music. Flash forward to college and through lots of changes and periods of diving head first into songwriting, my first song came to life. This song was inspired and is dedicated to my grandfather who passed in 2015. ‍ From a folky pop song written on guitar, to bouncing ideas over the course of several months with professional producers in the studio, to finishing the record in LA— we created a record that I adore. With my love for pop music being the thread through it all- this record was a deep exploration into studying the points of intersection between left field Indie and commercial radio pop musicians - specifically the collaborations in the 70's and early 2000's. Some big inspirations for the musical vibe and vocal character were Melanie Martinez, Halsey, Billie Eilish, Ellie Goulding, and Taylor Swift.",
    videoEmbedUrl: "https://www.youtube.com/embed/JxytxhN2GKo",
  },
  {
    id: "burning-truck",
    title: "Burning Truck",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6729000b937e94163e702046_BT6.jpg",
    body: "Burning Truck is a song written from a failed relationship, I was so heartbroken and the story fell right into place with what I was going through and what I was trying to convey. One day I was on my way to band practice and I saw a truck completely bursting in flames on the side of the road with not one person in sight. I was so moved by the strangeness of that situation but I also felt like it could be visually symbolic of what I was going through in my failing relationship. The burning truck became a a very real metaphor of the pain and struggle I went through during the time I had to face heartbreak. The song is quite abstract so I think it can be a relatable song for anyone who's been with a partner who's gotten cold feet. The instruments and production of this song were made in Nashville, TN by Dean Miller.",
  },
  {
    id: "day-by-day",
    title: "Day by Day",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a2b7fd0b4dfa436a8f0c84b_Daybyday4.jpg",
    body: "Burning Truck is a song written from a failed relationship, I was so heartbroken and the story fell right into place with what I was going through and what I was trying to convey. One day I was on my way to band practice and I saw a truck completely bursting in flames on the side of the road with not one person in sight. I was so moved by the strangeness of that situation but I also felt like it could be visually symbolic of what I was going through in my failing relationship. The burning truck became a a very real metaphor of the pain and struggle I went through during the time I had to face heartbreak. The song is quite abstract so I think it can be a relatable song for anyone who's been with a partner who's gotten cold feet. The instruments and production of this song were made in Nashville, TN by Dean Miller.",
  },
  {
    id: "nervous",
    title: "Nervous",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a2b88460914b4c1fc3b4bc1_Nervouscover.jpeg",
    body: "Burning Truck is a song written from a failed relationship, I was so heartbroken and the story fell right into place with what I was going through and what I was trying to convey. One day I was on my way to band practice and I saw a truck completely bursting in flames on the side of the road with not one person in sight. I was so moved by the strangeness of that situation but I also felt like it could be visually symbolic of what I was going through in my failing relationship. The burning truck became a a very real metaphor of the pain and struggle I went through during the time I had to face heartbreak. The song is quite abstract so I think it can be a relatable song for anyone who's been with a partner who's gotten cold feet. The instruments and production of this song were made in Nashville, TN by Dean Miller.",
  },
  {
    id: "toxic-love",
    title: "Toxic Love",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a2b8a0f9d679223746cd8c2_Toxic_Love_1.1.jpeg",
    body: "Burning Truck is a song written from a failed relationship, I was so heartbroken and the story fell right into place with what I was going through and what I was trying to convey. One day I was on my way to band practice and I saw a truck completely bursting in flames on the side of the road with not one person in sight. I was so moved by the strangeness of that situation but I also felt like it could be visually symbolic of what I was going through in my failing relationship. The burning truck became a a very real metaphor of the pain and struggle I went through during the time I had to face heartbreak. The song is quite abstract so I think it can be a relatable song for anyone who's been with a partner who's gotten cold feet. The instruments and production of this song were made in Nashville, TN by Dean Miller.",
  },
  {
    id: "red-flags",
    title: "Red Flags",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a2b80a741ccee79f62a1798_RED%20FLAGS%20_Album%20cover1.1.jpg",
    body: "Burning Truck is a song written from a failed relationship, I was so heartbroken and the story fell right into place with what I was going through and what I was trying to convey. One day I was on my way to band practice and I saw a truck completely bursting in flames on the side of the road with not one person in sight. I was so moved by the strangeness of that situation but I also felt like it could be visually symbolic of what I was going through in my failing relationship. The burning truck became a a very real metaphor of the pain and struggle I went through during the time I had to face heartbreak. The song is quite abstract so I think it can be a relatable song for anyone who's been with a partner who's gotten cold feet. The instruments and production of this song were made in Nashville, TN by Dean Miller.",
  },
  {
    id: "midnight-blues",
    title: "Midnight Blues",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a2b7f68c0baa42668220019_MidghtnightBlues_1.1.jpg",
    body: "Burning Truck is a song written from a failed relationship, I was so heartbroken and the story fell right into place with what I was going through and what I was trying to convey. One day I was on my way to band practice and I saw a truck completely bursting in flames on the side of the road with not one person in sight. I was so moved by the strangeness of that situation but I also felt like it could be visually symbolic of what I was going through in my failing relationship. The burning truck became a a very real metaphor of the pain and struggle I went through during the time I had to face heartbreak. The song is quite abstract so I think it can be a relatable song for anyone who's been with a partner who's gotten cold feet. The instruments and production of this song were made in Nashville, TN by Dean Miller.",
  },
  {
    id: "angels",
    title: "Angels",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/676366d03afeefe064c17518_Avatar_New_compresssed.jpg",
    body: "Angels is a song written during a unique chapter in my life. I was inspired by friends in my spiritual community at the time and this song is basically about overcoming personal challenges and accepting life, death and everything in between as it is. I was really interested with the idea of superposition, which led me to think about how short life is and how important it is to stay mentally strong and have a good outlook on the journey of life, no matter what happens. For those reasons, I wanted to evoke a cinematic and emotionally driven production. So I worked with a producer based in London named Josh Northwood, a cinematic producer. I worked remotely with him and Angels (originally called 'Angels Call My Name\") came to life!",
  },
  {
    id: "frozen-time",
    title: "Frozen Time",
    image: "https://cdn.prod.website-files.com/5f8b8bbca4a54e3fdb43e07c/6a2b8b675e1c44ad05672d81_Frozen%20Time%20cover_1.jpg",
    body: "Angels is a song written during a unique chapter in my life. I was inspired by friends in my spiritual community at the time and this song is basically about overcoming personal challenges and accepting life, death and everything in between as it is. I was really interested with the idea of superposition, which led me to think about how short life is and how important it is to stay mentally strong and have a good outlook on the journey of life, no matter what happens. For those reasons, I wanted to evoke a cinematic and emotionally driven production. So I worked with a producer based in London named Josh Northwood, a cinematic producer. I worked remotely with him and Angels (originally called 'Angels Call My Name\") came to life!",
  },
];

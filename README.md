# Kara Silvestri — KaraSilvestri.com

Portfolio site for Kara Silvestri (Creative Director · Filmmaker · Musician · Actress · Host), built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS v4**. Fully responsive, dark, type-driven, with scroll reveals and parallax.

## Pages

| Route           | Description                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------- |
| `/`             | Homepage — cover hero with wordmark, bio, large links, Drake Bell CTA + modal.                |
| `/design-film`  | Intro + responsive grid of **Webflow "project" CMS** teasers → detail pages (`/projects/...`).|
| `/music`        | Cover hero, "Releases" intro, **Webflow "releases" CMS** entries (image/text + video embeds). |
| `/acting`       | Narrative drawn from the résumé + résumé PDF download.                                         |
| `/connect`      | Portrait, intro, email, Linktree & Instagram links.                                           |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Webflow content

The Design & Film and Music pages pull from Webflow via the Data API v2. Until
credentials are provided the site renders **local mock content** (see
`src/lib/mockData.ts`), so it runs fully offline during development.

To connect live content, copy `.env.example` → `.env.local` and fill in:

```
WEBFLOW_API_TOKEN=               # Webflow site API token (CMS read)
WEBFLOW_PROJECTS_COLLECTION_ID=  # "project" collection id  → /design-film
WEBFLOW_RELEASES_COLLECTION_ID=  # "releases" collection id → /music
```

Field-slug → app mapping lives in `src/lib/webflow.ts` (`fromWebflowProject`,
`fromWebflowRelease`). Adjust the field slugs there to match the actual Webflow
collection schema. If a fetch fails, the layer logs and falls back to mock data.

## Assets

Brand assets, backgrounds, the event flyer, and the résumé live in
`public/assets/` (sourced from the original `kara-silvestri/` folder).

## Notes / easy tweaks

- The homepage hero uses `logo-content-black.png` per the brief; swap to
  `logo-content-white.png` in `src/app/page.tsx` if more contrast is wanted.
- Site-wide nav, contact, and event details are centralized in `src/lib/site.ts`.
- The Drake Bell × Kara Silvestri modal is a shared provider
  (`src/components/DrakeBell.tsx`) used by both the Home and Music CTAs.

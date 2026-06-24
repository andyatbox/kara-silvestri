import type { Metadata } from "next";

const SITE = "Kara Silvestri";
const SITE_URL = "https://karasilvestri.com";
const DEFAULT_IMAGE = "/assets/underwater-home.jpg";

/**
 * Builds per-page metadata with fully-specified OpenGraph + Twitter blocks
 * (Next merges these shallowly, so each page must restate image/card). The
 * document <title> still flows through the root template ("%s — Kara Silvestri").
 */
export function pageMetadata({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const ogTitle = `${title} — ${SITE}`;
  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE,
      type: "website",
      images: [{ url: image, alt: SITE }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

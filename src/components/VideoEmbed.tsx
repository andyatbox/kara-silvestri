"use client";

import { useState } from "react";

/**
 * Responsive 16:9 video embed.
 *
 * For YouTube it renders a lightweight click-to-play facade: the thumbnail +
 * play button load instantly, and the real player (privacy-friendly
 * youtube-nocookie domain) is only injected on click. This avoids the issues
 * that plague eagerly-loaded YouTube/Vevo iframes (ad-blockers, referrer
 * checks) and is much faster. Non-YouTube URLs (e.g. Vimeo) embed directly.
 */
function youTubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  return m ? m[1] : null;
}

/**
 * Video IDs that Vevo blocks from third-party embeds (it enforces a domain
 * allowlist that overrides YouTube's `playableInEmbed` flag). These open on
 * YouTube instead of embedding. Add new Vevo uploads here if needed.
 */
const BLOCKED_EMBED_IDS = new Set([
  "II7MrucZRRI", // War
  "JxytxhN2GKo", // In The Stars
  "_Z9it_j716A", // Rose Colored Lenses
]);

function Thumb({ id, title }: { id: string; title: string }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        onError={(e) => {
          const img = e.currentTarget;
          if (!img.src.endsWith("hqdefault.jpg")) {
            img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
          }
        }}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/30 transition group-hover:bg-black/15" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 ring-1 ring-white/40 backdrop-blur-sm transition group-hover:bg-black/70 sm:h-20 sm:w-20">
        <span className="ml-1 block h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-white sm:border-y-[13px] sm:border-l-[22px]" />
      </span>
    </>
  );
}

export default function VideoEmbed({
  url,
  title = "Video",
}: {
  url: string;
  title?: string;
}) {
  const id = youTubeId(url);
  const [playing, setPlaying] = useState(false);

  // Vevo / embed-blocked videos: poster opens YouTube in a new tab.
  if (id && BLOCKED_EMBED_IDS.has(id)) {
    return (
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${title} on YouTube`}
        className="group relative block aspect-video w-full overflow-hidden rounded-lg ring-1 ring-white/10"
      >
        <Thumb id={id} title={title} />
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-white backdrop-blur-sm">
          Watch on YouTube ↗
        </span>
      </a>
    );
  }

  // Other YouTube videos: lightweight click-to-play facade.
  if (id && !playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play ${title}`}
        className="group relative block aspect-video w-full overflow-hidden rounded-lg ring-1 ring-white/10"
      >
        <Thumb id={id} title={title} />
      </button>
    );
  }

  const src = id
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    : url;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

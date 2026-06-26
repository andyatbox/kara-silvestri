"use client";

import { useState } from "react";

/**
 * Responsive 16:9 video embed with a lightweight click-to-play facade for
 * YouTube (thumbnail + play button load instantly; the player is injected only
 * on click). Non-YouTube URLs (e.g. Vimeo) embed directly.
 *
 * Vevo videos block third-party embeds by domain — so, exactly like Webflow,
 * those play through Embedly's widget (whose origin Vevo allowlists) instead of
 * a direct YouTube iframe.
 */
function youTubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  return m ? m[1] : null;
}

/** Vevo uploads — blocked from direct third-party embeds; routed via Embedly. */
const VEVO_IDS = new Set([
  "II7MrucZRRI", // War
  "JxytxhN2GKo", // In The Stars
  "_Z9it_j716A", // Rose Colored Lenses
]);

// Embedly's shared widget key (the same one Webflow uses across its sites).
const EMBEDLY_KEY = "96f1f04c5f4143bcb0f2e68c87d65feb";

function playerSrc(id: string): string {
  if (VEVO_IDS.has(id)) {
    const inner = encodeURIComponent(
      `https://www.youtube.com/embed/${id}?feature=oembed&autoplay=1`,
    );
    const watch = encodeURIComponent(`https://www.youtube.com/watch?v=${id}`);
    return `https://cdn.embedly.com/widgets/media.html?src=${inner}&url=${watch}&type=text%2Fhtml&schema=youtube&key=${EMBEDLY_KEY}`;
  }
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
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

  if (id && !playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play ${title}`}
        className="group relative block aspect-video w-full overflow-hidden rounded-lg ring-1 ring-white/10"
      >
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
      </button>
    );
  }

  const src = id ? playerSrc(id) : url;

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

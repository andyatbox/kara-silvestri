/**
 * Responsive 16:9 video embed.
 *
 * Vevo videos block direct third-party YouTube embeds by domain, but allowlist
 * Embedly's widget origin — so, exactly like Webflow, those play through
 * Embedly. All other videos use the native youtube-nocookie embed (or the URL
 * as-is for Vimeo, etc.).
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

function resolveSrc(url: string): string {
  const id = youTubeId(url);
  if (!id) return url;
  if (VEVO_IDS.has(id)) {
    const inner = encodeURIComponent(
      `https://www.youtube.com/embed/${id}?feature=oembed`,
    );
    const watch = encodeURIComponent(`https://www.youtube.com/watch?v=${id}`);
    return `https://cdn.embedly.com/widgets/media.html?src=${inner}&url=${watch}&type=text%2Fhtml&schema=youtube&key=${EMBEDLY_KEY}`;
  }
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
}

export default function VideoEmbed({
  url,
  title = "Video",
}: {
  url: string;
  title?: string;
}) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10">
      <iframe
        src={resolveSrc(url)}
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

/**
 * Responsive 16:9 iframe embed for YouTube / Vimeo (or any embeddable URL).
 */
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
        src={url}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

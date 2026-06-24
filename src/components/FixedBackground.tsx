import Image from "next/image";

/**
 * Full-viewport fixed cover background with a dark overlay for text legibility.
 * Sits behind page content (content backgrounds should be transparent).
 */
export default function FixedBackground({
  src,
  alt = "",
  overlay = 0.55,
}: {
  src: string;
  alt?: string;
  overlay?: number;
}) {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${overlay})` }}
      />
    </div>
  );
}

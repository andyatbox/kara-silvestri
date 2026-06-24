import WaterBackground from "@/components/WaterBackground";

/**
 * Full-viewport fixed background (cover) with the underwater distortion effect.
 * No tint — content backgrounds should be transparent so this shows through.
 * Relies on the black living on <html> (not <body>) so this -z-10 layer paints.
 */
export default function FixedBackground({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden>
      <WaterBackground src={src} alt={alt} />
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ParallaxBackgroundProps = {
  src: string;
  alt: string;
  /** Fraction of scroll distance the image drifts. 0 = fixed-ish, 1 = none. */
  speed?: number;
  /** Object-position; defaults to top-center so faces aren't cropped. */
  position?: string;
  priority?: boolean;
  /** Dark overlay opacity (0–1) layered above the image for text contrast. */
  overlay?: number;
};

/**
 * A full-bleed cover background with a subtle parallax drift on scroll.
 * Anchored to the top so portraits don't get cropped at the head. Disabled for
 * users who prefer reduced motion.
 */
export default function ParallaxBackground({
  src,
  alt,
  speed = 0.25,
  position = "center top",
  priority = false,
  overlay = 0.35,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        // Drift relative to how far the element has scrolled through the viewport.
        setOffset(-rect.top * speed);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      {overlay > 0 && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,${overlay * 0.7}) 0%, rgba(0,0,0,${overlay * 0.4}) 40%, rgba(0,0,0,${Math.min(overlay + 0.35, 0.95)}) 100%)`,
          }}
        />
      )}
    </div>
  );
}

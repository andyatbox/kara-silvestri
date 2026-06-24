"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay before the reveal animation begins, in ms. */
  delay?: number;
  /** Render as a different element (e.g. "section", "li"). Defaults to div. */
  as?: ElementType;
};

/**
 * Fades + slides its children into view the first time they enter the viewport.
 * Falls back to visible immediately if IntersectionObserver is unavailable or
 * the user prefers reduced motion (handled in globals.css).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      // threshold 0 + no negative margin: anything touching the viewport (incl.
      // content only peeking above the fold on landing) reveals immediately.
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

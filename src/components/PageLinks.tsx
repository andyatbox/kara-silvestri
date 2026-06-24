import Link from "next/link";
import Reveal from "@/components/Reveal";
import { NAV_ITEMS } from "@/lib/site";

/**
 * Large editorial links to the rest of the site. Each row reveals on scroll
 * and slides its label on hover.
 */
export default function PageLinks() {
  // Exclude the home/Bio link — this list lives on the homepage itself.
  const items = NAV_ITEMS.filter((item) => item.href !== "/");
  return (
    <nav aria-label="Explore" className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, i) => (
        <Reveal key={item.href} delay={i * 80}>
          <Link
            href={item.href}
            className="group flex items-center justify-between py-7 transition-colors sm:py-9"
          >
            <span className="text-3xl font-extralight uppercase tracking-[0.12em] text-white/75 transition-all duration-500 group-hover:translate-x-3 group-hover:text-white sm:text-5xl md:text-6xl">
              {item.label}
            </span>
            <span
              aria-hidden
              className="translate-x-0 text-2xl text-white/30 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white sm:text-4xl"
            >
              →
            </span>
          </Link>
        </Reveal>
      ))}
    </nav>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The mobile menu closes via each link's onClick handler below, so it always
  // dismisses on navigation without a route-change effect.

  // Lock body scroll while the fullscreen menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Deepen the tint after scrolling a bit; transparent at the very top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[120] transition-colors duration-300 ${
          scrolled && !open
            ? "bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          <Link
            href="/"
            aria-label="Kara Silvestri — Home"
            onClick={() => setOpen(false)}
            className="relative z-[130] block transition-opacity hover:opacity-80"
          >
            <Image
              src="/assets/logo-nav.png"
              alt="Kara Silvestri"
              width={64}
              height={64}
              priority
              className="h-11 w-auto sm:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-10 md:flex lg:gap-12">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-active={isActive(item.href)}
                  className="nav-underline text-[0.95rem] uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[130] flex h-10 w-10 flex-col items-center justify-center gap-[7px] md:hidden"
          >
            <span
              className={`block h-px w-8 bg-white transition-transform duration-300 ${
                open ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-8 bg-white transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-8 bg-white transition-transform duration-300 ${
                open ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Fullscreen mobile menu — sibling of <header> so it covers the viewport
          (a backdrop-filtered header would otherwise trap fixed descendants). */}
      <div
        className={`fixed inset-0 z-[110] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-9">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                data-active={isActive(item.href)}
                className="nav-underline text-3xl font-extralight uppercase tracking-[0.18em] text-white"
                style={{
                  transitionDelay: open ? `${i * 60 + 80}ms` : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                  transitionProperty: "opacity, transform",
                  transitionDuration: "500ms",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

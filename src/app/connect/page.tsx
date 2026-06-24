import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import FixedBackground from "@/components/FixedBackground";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Let's connect and explore all things creative — music, film, design, live performances, upcoming releases, and social channels.",
};

export default function ConnectPage() {
  return (
    <div className="relative">
      <FixedBackground src="/assets/acting-connect-bg.jpg" overlay={0.6} />
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full ring-1 ring-white/15 sm:w-72 md:mx-0 md:w-full md:max-w-sm">
              <Image
                src="/assets/selfie.jpg"
                alt="Kara Silvestri"
                fill
                sizes="(min-width: 768px) 24rem, 18rem"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <div className="text-center md:text-left">
            <Reveal delay={60}>
              <h1 className="text-3xl font-extralight uppercase tracking-[0.12em] sm:text-5xl">
                Contact
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-base font-light leading-relaxed text-white/70 sm:text-lg">
                Let&apos;s connect and explore all things creative, including
                music, film, design, live performances, upcoming releases, and
                social channels.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="body-copy mt-8 text-white/85">
                Email me at{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                  {CONTACT.email}
                </a>
              </p>
            </Reveal>
          </div>
        </div>

        {/* Links */}
        <div className="mt-20 border-t border-white/10 pt-12 sm:mt-28">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
              Elsewhere
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Reveal>
              <ConnectLink
                label="Linktree"
                value="linktr.ee/karasilvestri"
                href={CONTACT.linktree}
              />
            </Reveal>
            <Reveal delay={90}>
              <ConnectLink
                label="Instagram"
                value={CONTACT.instagramHandle}
                href={CONTACT.instagramUrl}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function ConnectLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-lg border border-white/10 px-6 py-6 transition hover:border-white/40 hover:bg-white/5"
    >
      <span>
        <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-white/45">
          {label}
        </span>
        <span className="mt-1 block text-lg font-light tracking-wide text-white">
          {value}
        </span>
      </span>
      <span
        aria-hidden
        className="text-xl text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
      >
        ↗
      </span>
    </a>
  );
}

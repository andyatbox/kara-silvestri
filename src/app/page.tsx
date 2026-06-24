import Image from "next/image";
import WaterBackground from "@/components/WaterBackground";
import Reveal from "@/components/Reveal";
import PageLinks from "@/components/PageLinks";
import { DrakeBellCTA } from "@/components/DrakeBell";

export default function HomePage() {
  return (
    <>
      {/* Hero — WebGL underwater background with the wordmark anchored right */}
      <section className="relative h-[100svh] min-h-[560px] overflow-hidden">
        <WaterBackground src="/assets/underwater-home.jpg" alt="Kara Silvestri" />

        {/* Kara cutout: full height, bottom-anchored, right edge at the 50% line
            so it fills the left half and falls off the left on small screens. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/kara.png"
            alt="Kara Silvestri"
            className="absolute bottom-0 right-0 h-full w-auto max-w-none"
          />
        </div>

        {/* Top scrim for nav legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[6] h-40 bg-gradient-to-b from-black/45 to-transparent" />
        {/* Bottom fade: small blend of the image bottom into the black below */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[160px] bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Bio — logo + title sit just below the hero (visible on landing);
          paragraphs fall below the fold. Detached from the hero gradient. */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-8 sm:px-8 sm:pb-36">
        <Reveal className="flex justify-center">
          <Image
            src="/assets/logo-content-white.png"
            alt="Kara Silvestri"
            width={460}
            height={180}
            priority
            className="mb-7 h-auto w-[clamp(140px,26vw,320px)]"
          />
        </Reveal>
        <Reveal>
          <h2 className="text-balance text-center text-2xl font-extralight leading-tight tracking-wide sm:text-3xl md:text-[2.6rem]">
            Creative Director + Filmmaker + Musician + Actress + Host
          </h2>
        </Reveal>

        <div className="mt-10 space-y-7 text-white/85">
          <Reveal delay={60}>
            <p className="body-copy">
              Kara Silvestri is a multidisciplinary artist, designer, and
              creative director based between New Jersey and New York City. An
              award-winning School of Visual Arts BFA graduate and current Senior
              Art Director, her work spans creative direction, advertising,
              motion design, UX/UI, filmmaking, acting, and music.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-copy">
              With a deep passion for storytelling, Kara blends experience across
              design, film, live performance, and original music to create
              emotionally driven work rooted in rhythm, atmosphere, and human
              connection.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="body-copy">
              Known for her collaborative spirit, dynamic energy, and
              detail-oriented approach, she is passionate about exploring new
              creative possibilities and building meaningful experiences across
              mediums.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Large links to the rest of the site */}
      <section className="mx-auto max-w-6xl px-6 pb-28 sm:px-8 sm:pb-40">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
            Explore
          </p>
        </Reveal>
        <PageLinks />
      </section>

      <DrakeBellCTA />
    </>
  );
}

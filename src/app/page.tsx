import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";
import Reveal from "@/components/Reveal";
import PageLinks from "@/components/PageLinks";
import { DrakeBellCTA } from "@/components/DrakeBell";

export default function HomePage() {
  return (
    <>
      {/* Hero — exposes the cover background, with the wordmark upper-center */}
      <section className="relative flex h-[100svh] min-h-[600px] items-start justify-center overflow-hidden">
        <ParallaxBackground
          src="/assets/home-bg.jpg"
          alt="Kara Silvestri"
          priority
          position="center top"
          overlay={0.25}
          speed={0.18}
        />
        <Reveal className="relative z-10 px-6 pt-28 sm:pt-32">
          <Image
            src="/assets/logo-content-black.png"
            alt="Kara Silvestri"
            width={520}
            height={200}
            priority
            className="h-auto w-[clamp(220px,42vw,520px)] drop-shadow-[0_2px_30px_rgba(255,255,255,0.25)]"
          />
        </Reveal>
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </div>
      </section>

      {/* Bio */}
      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-8 sm:py-36">
        <Reveal>
          <h2 className="text-balance text-2xl font-extralight leading-tight tracking-wide sm:text-3xl md:text-[2.6rem]">
            Creative Director + Filmmaker + Musician + Actress + Host
          </h2>
        </Reveal>

        <div className="mt-10 space-y-7 text-white/80">
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

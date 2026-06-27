import Reveal from "@/components/Reveal";
import FixedBackground from "@/components/FixedBackground";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Acting",
  path: "/acting",
  description:
    "Kara Silvestri — actor, singer-songwriter, and filmmaker. Lead roles across film and music videos, live performance across NJ/NYC, and training in Los Angeles and New York.",
});

export default function ActingPage() {
  return (
    <div className="relative">
      <FixedBackground src="/assets/underwater.jpg" />

      <section className="mx-auto mt-[30vh] max-w-3xl px-6 pb-32 pt-36 sm:px-8 sm:pb-40 sm:pt-44">
        <Reveal>
          <h1 className="text-3xl font-extralight leading-tight tracking-wide sm:text-5xl">
            Acting
          </h1>
        </Reveal>
        <Reveal delay={40}>
          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-white/60 sm:text-base">
            Actor · Singer · Songwriter · Filmmaker
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-3 text-xs tracking-wide text-white/45 sm:text-sm">
            Height: 5&apos;3&quot; · Hair: Blonde · Eyes: Brown · Age Range: 18+
          </p>
        </Reveal>

        <div className="mt-10 space-y-7 text-white/85">
          <Reveal delay={120}>
            <p className="body-copy">
              Kara Silvestri is an actor, singer-songwriter, and filmmaker based
              between New Jersey and New York City. A performer at heart, she
              moves fluidly between screen and stage—bringing the same emotional
              honesty to a character as she does to her own songs.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="body-copy">
              On screen, Kara has carried leading roles across film and music
              videos. She starred as the{" "}
              <strong className="font-medium text-white">Lead</strong> in{" "}
              <em>Cassie and the Wildcats</em> (dir. Caleb Washington) and led
              her own music videos—<em>War</em>, <em>In The Stars</em>, and{" "}
              <em>Rose Colored Lenses</em>—as well as a supporting turn in{" "}
              <em>Murder? I Hardly Know Her</em> at the School of Visual Arts.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="body-copy">
              Her craft is grounded in serious training. Kara studied through the{" "}
              <strong className="font-medium text-white">
                Ultimate Performer Program
              </strong>{" "}
              in Los Angeles and{" "}
              <strong className="font-medium text-white">The Project Class</strong>{" "}
              at the School of Visual Arts, earning honors in Film Directing &amp;
              Performance Studies under mentors Bob Giraldi and Natasha
              Soto-Albors—alongside private vocal training with Alison Bolshoi and
              artist development with Roxie Francis.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="body-copy">
              As a vocalist, guitarist, and songwriter, she performs live
              throughout NJ and NYC—including opening for{" "}
              <strong className="font-medium text-white">Drake Bell</strong> at
              the House of Independents in Asbury Park, the NJ PATH Performs
              Program, and a range of benefit and showcase concerts. Her skills
              span singing and songwriting across pop, country, rock, and indie,
              on-camera hosting and interviewing, improvisation, and dance—an
              artist as comfortable in front of the camera as she is on stage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Floating résumé download (bottom-right, like the live-event CTA) */}
      <a
        href="/assets/KaraSilvestri_Resume_Acting.pdf"
        download
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/55 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black sm:bottom-6 sm:right-6 sm:text-sm"
      >
        <span>Download Résumé</span>
        <span aria-hidden>↓</span>
      </a>
    </div>
  );
}

import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FixedBackground from "@/components/FixedBackground";

export const metadata: Metadata = {
  title: "Acting",
  description:
    "Kara Silvestri's work in front of and behind the camera — an award-winning Best Actress, film director, and on-set collaborator.",
};

export default function ActingPage() {
  return (
    <div className="relative">
      <FixedBackground src="/assets/underwater.jpg" />

      <section className="mx-auto max-w-3xl px-6 pb-32 pt-36 sm:px-8 sm:pb-40 sm:pt-44">
        <Reveal>
          <h1 className="text-3xl font-extralight leading-tight tracking-wide sm:text-5xl">
            Acting &amp; Film
          </h1>
        </Reveal>

        <div className="mt-10 space-y-7 text-white/85">
          <Reveal delay={60}>
            <p className="body-copy">
              Kara&apos;s relationship with the camera runs in both directions.
              As an actress, she earned a{" "}
              <strong className="font-medium text-white">Best Actress</strong>{" "}
              award at the Afterdark Film Festival for her performance in the
              short film <em>HEX</em>, a role that also screened at the
              International Women&apos;s Film Festival—recognition for the kind of
              emotionally grounded, atmospheric work she&apos;s drawn to.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="body-copy">
              That instinct for storytelling extends behind the lens. Kara
              studied directing through the{" "}
              <strong className="font-medium text-white">
                Bob Giraldi Directing Mentorship
              </strong>{" "}
              at the School of Visual Arts and completed a Masterclass in Film
              Directing, learning to shape a story from its initial idea through
              to final execution. She has continued to refine that craft,
              including a masterclass at the Google Creative Lab.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="body-copy">
              Her on-set experience is hands-on and wide-ranging. Across roles as
              a Head PA and freelance designer at MQ Films and as a
              Director&apos;s Assistant at Skunk, she has location scouted,
              coordinated talent, prepared production materials, and worked
              directly alongside directors and producers to bring projects to
              life—an understanding of filmmaking that informs every performance.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="body-copy">
              Whether performing, directing, or supporting a production, Kara
              brings the same detail-oriented, collaborative energy that defines
              all of her creative work—an artist as comfortable telling a story
              as she is living inside one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Floating résumé download (bottom-right, like the live-event CTA) */}
      <a
        href="/assets/KaraSilvestri-Resume_2024.pdf"
        download
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/55 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black sm:bottom-6 sm:right-6 sm:text-sm"
      >
        <span>Download Résumé</span>
        <span aria-hidden>↓</span>
      </a>
    </div>
  );
}

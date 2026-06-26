import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";
import VideoEmbed from "@/components/VideoEmbed";
import { DrakeBellCTA } from "@/components/DrakeBell";
import { getReleases } from "@/lib/webflow";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Music",
  path: "/music",
  description:
    "Original music by Kara Silvestri, including the EP 'War' — releases, stories, and videos rooted in rhythm, atmosphere, and human connection.",
});

export default async function MusicPage() {
  const releases = await getReleases();

  return (
    <div className="bg-black">
      {/* Hero — cover background with the wordmark anchored right (like Home) */}
      <section className="relative h-[100svh] min-h-[560px] overflow-hidden">
        <ParallaxBackground
          src="/assets/music-bg.jpg"
          alt="Kara Silvestri"
          priority
          position="center top"
          overlay={0}
          speed={0.18}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-black to-transparent" />

        <div className="absolute left-[60%] top-1/2 z-10 -translate-y-1/2 pr-5">
          <Image
            src="/assets/logo-content-white.png"
            alt="Kara Silvestri"
            width={460}
            height={180}
            priority
            className="h-auto w-[clamp(150px,32vw,420px)] drop-shadow-[0_2px_30px_rgba(0,0,0,0.45)]"
          />
        </div>
      </section>

      {/* Releases — pops up over the hero */}
      <section className="relative z-10 mx-auto -mt-[35vh] max-w-5xl px-6 pb-24 sm:px-8 sm:pb-32">
        <Reveal>
          <h1 className="text-3xl font-extralight tracking-wide sm:text-5xl">
            Releases
          </h1>
        </Reveal>

        {/* Individual release entries, each divided from the next */}
        <div className="mt-16 divide-y divide-white/12 sm:mt-24">
          {releases.map((release, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={release.id} as="article" className="py-14 first:pt-0 sm:py-20">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
                  {release.image && (
                    <div
                      className={`relative aspect-square w-full overflow-hidden rounded-lg ring-1 ring-white/10 ${
                        flip ? "md:order-2" : ""
                      }`}
                    >
                      <MediaImage
                        src={release.image}
                        alt={release.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className={flip ? "md:order-1" : ""}>
                    <h2 className="text-2xl font-extralight tracking-wide sm:text-4xl">
                      {release.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-white/75">
                      {release.body.split("\n\n").map((para, j) => (
                        <p key={j} className="body-copy">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {release.videoEmbedUrl && (
                  <div className="mt-10">
                    <VideoEmbed
                      url={release.videoEmbedUrl}
                      title={release.title}
                    />
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <DrakeBellCTA />
    </div>
  );
}

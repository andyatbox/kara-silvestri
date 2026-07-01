"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Reveal from "@/components/Reveal";

const SUMMARY: string[] = [
  "Kara Silvestri is a multidisciplinary artist, singer-songwriter, and guitarist whose music is rooted in authenticity, vulnerability, and the transformative power of human connection. For over 15 years, she has dedicated herself to developing her voice as both a musician and storyteller, crafting original music that blends indie pop, electro-pop, pop punk, rock, and folk influences.",
  "Through intimate lyricism, expressive vocals, and intricate instrumentation, Kara explores themes of healing, identity, heartbreak, belonging, hope, and self-discovery. Inspired by the artists and stories that shaped her own life, she creates music with the hope of offering others the same sense of comfort, connection, and possibility that art has always given her.",
  "As a live performer, Kara has shared her music throughout New Jersey and New York, including performances through New Jersey's official PATH Performs program and opening for Drake Bell at the House of Independents in Asbury Park. Today, she continues to write, perform, and collaborate with creatives around the world while remaining devoted to honest storytelling and creating meaningful connections through music.",
];

const BIO: string[] = [
  "Kara Silvestri is a multidisciplinary artist, singer, songwriter, and guitarist whose work is rooted in authenticity, vulnerability, and the transformative power of human connection. For over 15 years, she has dedicated herself to developing her voice as both a musician and storyteller—crafting original songs that span indie pop, electro-pop, pop punk, rock, and folk influences while exploring the deeply personal experiences that shape who we are.",
  "Through intimate lyricism, expressive vocals, and intricate guitar and piano arrangements, Kara's music reflects her ongoing journey of healing, self-discovery, and resilience. Her songwriting embraces themes of acceptance, empowerment, heartbreak, belonging, hope, and learning to trust ourselves through life's many seasons. At its core, her work is an invitation for others to embrace the fullness of their own humanity—to find comfort in vulnerability and strength in authenticity.",
  "Inspired by the artists, stories, and creative voices that made her feel seen throughout her life, Kara developed an early understanding of the profound impact art can have on our sense of identity and connection. As a shy only child navigating uncertainty and self-expression, music became both a refuge and a catalyst for growth. The imaginative worlds created by the musicians, actors, and storytellers she admired offered her a sense of belonging during pivotal moments in her life and ultimately inspired her desire to create that same feeling for others.",
  "Over the years, Kara has written an extensive catalog of original material that captures the many emotional landscapes of the human experience. With more than ten future projects currently in development, she continues to collaborate with producers both locally and internationally to bring these stories to life. Her work has connected her with creatives across New Jersey, New York, Los Angeles, Nashville, and London, each collaboration contributing to the evolution of her artistic voice while remaining grounded in her commitment to honest storytelling.",
  "A defining milestone in Kara's journey came when she auditioned for and was selected to participate in New Jersey's official PATH Performs program, performing a two-hour acoustic set at the iconic Journal Square PATH station. The experience challenged and affirmed her in equal measure, strengthening her confidence as a performer while deepening her appreciation for the simple yet powerful act of sharing music with others in everyday spaces.",
  "More recently, Kara was presented with the opportunity to open for Drake Bell, the musician and actor best known for the beloved television series Drake & Josh. For Kara, the experience represents a meaningful full-circle moment. Growing up, the show became a source of comfort, imagination, and companionship during a time when she often struggled to understand her own voice and identity. To now share a stage with someone who unknowingly played a role in nurturing her creativity is both humbling and profoundly significant—a reminder of how deeply art can shape our lives and inspire us to keep moving toward the dreams we once held quietly in our hearts.",
  "While the path toward becoming an artist has often been filled with uncertainty, setbacks, and moments of self-doubt, it has also been one of the greatest teachers of Kara's life. Through every challenge, she has returned to the same truth: creating is not simply what she does—it is how she understands herself and connects with the world around her. Her willingness to remain open, curious, and devoted to the process has strengthened her resilience and deepened her compassion, both for herself and for others.",
  "Today, Kara continues to pursue her creative dreams with gratitude, intention, and an unwavering belief in the possibility of what lies ahead. She hopes her music serves as a reminder that healing is not linear, authenticity is worth protecting, and that the colors of our imagination can become the fabric of our reality when nurtured with courage, devotion, and grace.",
  "Above all, she hopes to inspire others in the same way her own role models inspired her: by showing that it is never too late to rediscover who you are, honor what you love, and wholeheartedly pursue the life that calls to you.",
];

export default function ArtistBio() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <Reveal>
        <div className="rounded-2xl border border-white/35 bg-black/25 px-6 py-10 text-center backdrop-blur-md sm:px-12 sm:py-14">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-9 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black sm:text-sm"
          >
            Read Full Bio
          </button>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-white/90">
            {SUMMARY.map((p, i) => (
              <p key={i} className="body-copy">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Kara Silvestri — Artist Bio"
            className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain bg-black/85 backdrop-blur-md animate-[fadeIn_.3s_ease]"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="fixed right-4 top-4 z-[210] flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-2xl font-thin text-white/80 backdrop-blur-sm transition hover:bg-black hover:text-white"
            >
              ×
            </button>

            <div className="flex min-h-full items-start justify-center p-4 sm:items-center sm:p-8">
              <div
                className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#070b0c] p-6 shadow-2xl sm:p-10"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-extralight tracking-wide sm:text-3xl">
                  Artist Bio
                </h2>
                <div className="mt-6 space-y-5 text-sm font-normal leading-relaxed text-white/80 sm:text-base">
                  {BIO.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
          </div>,
          document.body,
        )}
    </>
  );
}

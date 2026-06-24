import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/webflow";

export const metadata: Metadata = {
  title: "Design & Film",
  description:
    "Creative direction, advertising, branding, and film production by Kara Silvestri, Senior Art Director based between New Jersey and New York City.",
};

export default async function DesignFilmPage() {
  const projects = await getProjects();

  return (
    <div className="bg-black">
      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-36 sm:px-8 sm:pb-24 sm:pt-44">
        <Reveal>
          <h1 className="text-3xl font-extralight leading-tight tracking-wide sm:text-5xl">
            Creative Director
          </h1>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-3 text-base font-light uppercase tracking-[0.22em] text-white/55 sm:text-lg">
            Design + Advertising + Film Production
          </h2>
        </Reveal>

        <div className="mt-10 space-y-7 text-white/80">
          <Reveal delay={120}>
            <p className="body-copy">
              Kara Silvestri is a New Jersey–born multidisciplinary creative,
              designer, and art director based between New Jersey and New York
              City. A School of Visual Arts BFA graduate and current Senior Art
              Director at VML, her work spans concept development, experiential
              design, advertising, branding, and film production.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="body-copy">
              With a strong eye for color, typography, composition, and visual
              storytelling, Kara brings together experience across fine arts,
              digital design, motion, UX/UI, campaigns, and filmmaking. Known for
              her detail-oriented approach, collaborative energy, and ability to
              problem solve with and without limits, she is driven by curiosity,
              creativity, and a passion for building meaningful visual
              experiences across mediums.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grid (Webflow CMS) */}
      <section className="mx-auto max-w-7xl px-6 pb-28 sm:px-8 sm:pb-40">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
            Selected Work
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

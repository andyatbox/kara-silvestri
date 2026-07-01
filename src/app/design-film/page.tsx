import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/webflow";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Design & Film",
  path: "/design-film",
  description:
    "Creative direction, advertising, branding, and film production by Kara Silvestri — Senior Art Director based between New Jersey and New York City.",
});

export default async function DesignFilmPage() {
  const projects = await getProjects();

  return (
    <div className="bg-black">
      {/* Intro copy */}
      <section className="mx-auto max-w-4xl px-6 pt-36 sm:px-8 sm:pt-44">
        <div className="space-y-6 text-white/85">
          <Reveal>
            <p className="body-copy">
              Kara Silvestri is a New Jersey–born multidisciplinary creative,
              designer, and creative art director based between New Jersey and
              New York City. An award-winning School of Visual Arts BFA graduate
              and current Senior Art Director at VML, her work spans creative
              direction, concept development, experiential design, advertising,
              branding, and film production.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="body-copy">
              With a strong eye for color, typography, composition, and visual
              storytelling, Kara brings together experience across fine arts,
              digital design, motion, UX/UI, campaigns, and filmmaking to create
              thoughtful, human-centered work across mediums. Known for her
              detail-oriented approach, collaborative spirit, and ability to
              solve problems both strategically and creatively, she is driven by
              curiosity, craftsmanship, and a passion for building meaningful
              visual experiences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grid */}
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-16 sm:px-8 sm:pb-40 sm:pt-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Floating résumé download (bottom-right, like the Acting page) */}
      <a
        href="/assets/KaraSilvestri_Resume_Design.pdf"
        download
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/55 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black sm:bottom-6 sm:right-6 sm:text-sm"
      >
        <span>Download Résumé</span>
        <span aria-hidden>↓</span>
      </a>
    </div>
  );
}

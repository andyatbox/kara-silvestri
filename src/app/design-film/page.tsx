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
      {/* Projects grid (Webflow CMS) */}
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-28 sm:px-8 sm:pb-40 sm:pt-32">
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

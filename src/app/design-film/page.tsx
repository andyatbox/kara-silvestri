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
    </div>
  );
}

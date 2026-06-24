import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaImage from "@/components/MediaImage";
import VideoEmbed from "@/components/VideoEmbed";
import Reveal from "@/components/Reveal";
import { getProject, getProjects } from "@/lib/webflow";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects
    .filter((p) => !p.externalUrl)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Project" };
  return pageMetadata({
    title: project.title,
    path: `/projects/${project.slug}`,
    description:
      project.summary ??
      `${project.title} — work by Kara Silvestri.`,
  });
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project || project.externalUrl) notFound();

  return (
    <article className="bg-black">
      {/* Hero media */}
      <div className="relative h-[60vh] min-h-[360px] w-full overflow-hidden">
        {project.teaserImage && (
          <MediaImage
            src={project.teaserImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-6 pb-12 sm:px-8">
          {project.category && (
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/60">
              {project.category}
            </p>
          )}
          <h1 className="text-3xl font-extralight leading-tight tracking-wide sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
        {project.summary && (
          <Reveal>
            <p className="body-copy text-white/90">{project.summary}</p>
          </Reveal>
        )}

        {project.body && (
          <Reveal delay={80}>
            <p className="body-copy mt-8 text-white/75">{project.body}</p>
          </Reveal>
        )}

        {project.teaserVideo && (
          <Reveal delay={120}>
            <div className="mt-12">
              <VideoEmbed url={project.teaserVideo} title={project.title} />
            </div>
          </Reveal>
        )}

        <div className="mt-16">
          <Link
            href="/design-film"
            className="nav-link text-white/60 transition-colors hover:text-magenta"
          >
            ← Back to Design &amp; Film
          </Link>
        </div>
      </div>
    </article>
  );
}

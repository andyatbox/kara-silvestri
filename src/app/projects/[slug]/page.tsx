import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  const blocks = project.blocks ?? [];

  return (
    <article className="bg-black">
      {/* Title header */}
      <header className="mx-auto max-w-5xl px-6 pb-12 pt-36 sm:px-8 sm:pb-16 sm:pt-44">
        <Reveal>
          {project.category && (
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/55">
              {project.category}
            </p>
          )}
          <h1 className="text-balance text-3xl font-extralight leading-tight tracking-wide sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
        </Reveal>
      </header>

      {/* Ordered case-study content */}
      <div className="mx-auto max-w-5xl px-6 pb-8 sm:px-8">
        <div className="space-y-10 sm:space-y-14">
          {blocks.map((block, i) => {
            if (block.type === "text") {
              return (
                <Reveal key={i}>
                  <p className="body-copy mx-auto max-w-3xl text-white/85">
                    {block.text}
                  </p>
                </Reveal>
              );
            }
            if (block.type === "video") {
              return (
                <Reveal key={i}>
                  <VideoEmbed url={block.url} title={project.title} />
                </Reveal>
              );
            }
            return (
              <Reveal key={i}>
                {/* Case-study panels have varied aspect ratios; render at natural
                    size so nothing is cropped or distorted. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={block.url}
                  alt={`${project.title} — ${i + 1}`}
                  loading="lazy"
                  className="mx-auto block h-auto w-full rounded-lg"
                />
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-12 sm:px-8 sm:pb-32">
        <Link
          href="/design-film"
          className="nav-link text-white/60 transition-colors hover:text-magenta"
        >
          ← Back to Design &amp; Film
        </Link>
      </div>
    </article>
  );
}

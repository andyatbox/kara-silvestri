import Link from "next/link";
import MediaImage from "@/components/MediaImage";
import type { Project } from "@/lib/mockData";

export default function ProjectCard({ project }: { project: Project }) {
  const href = project.externalUrl ?? `/projects/${project.slug}`;
  const isExternal = Boolean(project.externalUrl);

  const inner = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
        {project.teaserImage ? (
          <MediaImage
            src={project.teaserImage}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-white/30">
            {project.title}
          </div>
        )}

        {project.teaserVideo && (
          <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm">
            <span className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
          </span>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        <div className="absolute inset-x-0 bottom-0 p-5">
          {project.category && (
            <p className="mb-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/60">
              {project.category}
            </p>
          )}
          <h3 className="text-lg font-light tracking-wide text-white sm:text-xl">
            {project.title}
            {isExternal && <span className="ml-2 text-white/50">↗</span>}
          </h3>
        </div>
      </div>
    </>
  );

  const className =
    "group block overflow-hidden rounded-lg ring-1 ring-white/10 transition-colors hover:ring-white/30";

  return isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  ) : (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

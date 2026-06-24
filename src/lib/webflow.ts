/**
 * Webflow data layer.
 *
 * The Design & Film page (CMS "project" collection) and the Music page
 * (a Webflow page / "releases" collection) pull their content from Webflow.
 *
 * This module talks to the Webflow Data API v2 when credentials are present,
 * and otherwise falls back to local mock content so the site renders fully in
 * development. Wire up live content by setting the environment variables in
 * `.env.local` (see `.env.example`):
 *
 *   WEBFLOW_API_TOKEN        – a Webflow site API token (Bearer)
 *   WEBFLOW_PROJECTS_COLLECTION_ID  – CMS collection id for "project" items
 *   WEBFLOW_RELEASES_COLLECTION_ID  – CMS collection id for music "releases"
 *
 * Field-slug mapping lives in `fromWebflowProject` / `fromWebflowRelease`.
 * Adjust the field slugs there to match the actual Webflow collection schema.
 */

import {
  mockProjects,
  mockReleases,
  type Project,
  type Release,
} from "./mockData";

export type { Project, Release };

const API_BASE = "https://api.webflow.com/v2";

const TOKEN = process.env.WEBFLOW_API_TOKEN;
const PROJECTS_COLLECTION_ID = process.env.WEBFLOW_PROJECTS_COLLECTION_ID;
const RELEASES_COLLECTION_ID = process.env.WEBFLOW_RELEASES_COLLECTION_ID;

// Revalidate CMS content periodically (ISR) when fetched from Webflow.
const REVALIDATE_SECONDS = 60 * 30;

type WebflowItem = {
  id: string;
  isDraft?: boolean;
  isArchived?: boolean;
  fieldData: Record<string, unknown>;
};

type WebflowListResponse = {
  items: WebflowItem[];
};

function isConfigured(collectionId: string | undefined): collectionId is string {
  return Boolean(TOKEN && collectionId);
}

async function fetchCollectionItems(
  collectionId: string,
): Promise<WebflowItem[]> {
  const res = await fetch(
    `${API_BASE}/collections/${collectionId}/items/live?limit=100`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: "application/json",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (!res.ok) {
    throw new Error(
      `Webflow request failed (${res.status} ${res.statusText}) for collection ${collectionId}`,
    );
  }

  const data = (await res.json()) as WebflowListResponse;
  return (data.items ?? []).filter((i) => !i.isDraft && !i.isArchived);
}

/* --------------------------- field helpers --------------------------- */

function asString(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  return undefined;
}

/** Webflow image/file fields resolve to `{ url, alt }`. */
function asAssetUrl(value: unknown): string | undefined {
  if (value && typeof value === "object" && "url" in value) {
    const url = (value as { url?: unknown }).url;
    if (typeof url === "string") return url;
  }
  return asString(value);
}

/* --------------------------- mappers --------------------------- */

function fromWebflowProject(item: WebflowItem): Project {
  const f = item.fieldData;
  return {
    id: item.id,
    slug: asString(f["slug"]) ?? item.id,
    title: asString(f["name"]) ?? "Untitled",
    category: asString(f["category"]) ?? asString(f["type"]),
    teaserImage: asAssetUrl(f["teaser-image"]) ?? asAssetUrl(f["thumbnail"]),
    teaserVideo: asString(f["teaser-video"]) ?? asString(f["video-url"]),
    summary: asString(f["summary"]) ?? asString(f["excerpt"]),
    body: asString(f["body"]) ?? asString(f["description"]),
    externalUrl: asString(f["external-url"]) ?? asString(f["link"]),
  };
}

function fromWebflowRelease(item: WebflowItem): Release {
  const f = item.fieldData;
  return {
    id: item.id,
    title: asString(f["name"]) ?? "Untitled",
    image: asAssetUrl(f["image"]) ?? asAssetUrl(f["cover"]),
    body: asString(f["body"]) ?? asString(f["description"]) ?? "",
    videoEmbedUrl: asString(f["video-embed-url"]) ?? asString(f["video-url"]),
  };
}

/* --------------------------- public API --------------------------- */

export async function getProjects(): Promise<Project[]> {
  if (!isConfigured(PROJECTS_COLLECTION_ID)) return mockProjects;
  try {
    const items = await fetchCollectionItems(PROJECTS_COLLECTION_ID);
    const projects = items.map(fromWebflowProject);
    return projects.length ? projects : mockProjects;
  } catch (err) {
    console.error("[webflow] getProjects falling back to mock data:", err);
    return mockProjects;
  }
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}

export async function getReleases(): Promise<Release[]> {
  if (!isConfigured(RELEASES_COLLECTION_ID)) return mockReleases;
  try {
    const items = await fetchCollectionItems(RELEASES_COLLECTION_ID);
    const releases = items.map(fromWebflowRelease);
    return releases.length ? releases : mockReleases;
  } catch (err) {
    console.error("[webflow] getReleases falling back to mock data:", err);
    return mockReleases;
  }
}

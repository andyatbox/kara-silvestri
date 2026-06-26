/**
 * Webflow introspection helper.
 *
 * Prints the sites, CMS collections, and each collection's fields (slug + type)
 * for the account behind WEBFLOW_API_TOKEN. Use the output to fill the
 * collection IDs in .env.local and to confirm/adjust the field-slug mapping in
 * src/lib/webflow.ts.
 *
 * Run with:
 *   node --env-file=.env.local scripts/webflow-introspect.mjs
 */

const API = "https://api.webflow.com/v2";
const token = process.env.WEBFLOW_API_TOKEN;

if (!token) {
  console.error(
    "Missing WEBFLOW_API_TOKEN. Add it to .env.local and run:\n" +
      "  node --env-file=.env.local scripts/webflow-introspect.mjs",
  );
  process.exit(1);
}

async function api(path) {
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: `Bearer ${token}`, accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} for ${path}\n${await res.text()}`);
  }
  return res.json();
}

const main = async () => {
  const { sites } = await api("/sites");
  for (const site of sites) {
    console.log(`\n=== SITE: ${site.displayName} ===`);
    console.log(`  id:        ${site.id}`);
    console.log(`  shortName: ${site.shortName}`);

    const { collections } = await api(`/sites/${site.id}/collections`);
    for (const c of collections) {
      console.log(`\n  -- COLLECTION: ${c.displayName}`);
      console.log(`     id:   ${c.id}`);
      console.log(`     slug: ${c.slug}`);

      const detail = await api(`/collections/${c.id}`);
      const fields = detail.fields ?? [];
      console.log(`     fields:`);
      for (const f of fields) {
        console.log(
          `       - ${f.slug}  (${f.type})${f.isRequired ? " *required" : ""}`,
        );
      }
    }
  }
  console.log("\nDone.");
};

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});

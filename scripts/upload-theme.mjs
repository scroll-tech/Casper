import GhostAdminAPI from "@tryghost/admin-api";

if (process.env.GHOST_ADMIN_API_KEY?.includes("_"))
  process.env.GHOST_ADMIN_API_KEY = process.env.GHOST_ADMIN_API_KEY.replaceAll(
    "_",
    ":"
  );

const client = new GhostAdminAPI({
  url: process.env.GHOST_URL,
  version: "v5.0",
  key: process.env.GHOST_ADMIN_API_KEY,
});

await client.themes
  .upload({ file: "dist/source-customized.zip" })
  .then((_) => console.log("Uploaded ✅"));

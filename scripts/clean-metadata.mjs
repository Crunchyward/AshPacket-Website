import { readdir, unlink } from "node:fs/promises";
import { join } from "node:path";

const SKIP_DIRS = new Set([".git", "node_modules", ".next", "out"]);

async function cleanMetadata(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) {
        await cleanMetadata(path);
      }
      continue;
    }

    if (entry.name.startsWith("._")) {
      await unlink(path);
      console.log(`Removed ${path}`);
    }
  }
}

await cleanMetadata(".");

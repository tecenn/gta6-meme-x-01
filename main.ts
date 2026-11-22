// gta6-meme-x-01 — make.fun bounty entry (Node 22, standard library only).
//
// The entry IS the X post: a GTA 6 meme (a skeleton who waited 13 years since
// GTA V, with make.fun's ghost paying him to wait) posted from a public X
// account. This program's only job is to hand the post's address to the
// grader: it copies POST.json from the repository root into the output
// directory, byte for byte, and says nothing on success.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Afterwards out/POST.json must be identical to this directory's POST.json.
//
// POST.json now holds the real post URL on X; the guard below refuses a
// placeholder address (the placeholder is refused by design), so a
// placeholder can never be handed in by mistake.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

// Refuse a placeholder address: POST.json must carry the real X post URL.
const post = JSON.parse(readFileSync(source, "utf8")) as {
  url?: string;
  post_url_pending?: boolean;
};
if (
  post.post_url_pending === true ||
  typeof post.url !== "string" ||
  post.url.includes("<handle>") ||
  post.url.includes("<id>")
) {
  console.error(
    "POST.json still holds the placeholder X URL; replace it with the real post URL before submitting.",
  );
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
} catch (err) {
  console.error(
    `gta6-meme-x-01: could not hand in the post address (${source} -> ${target}): ${(err as Error).message}`,
  );
  process.exit(1);
}

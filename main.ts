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
// POST.json still holds the placeholder address until the post is actually
// made on X; the placeholder is refused by design, so replace it with the
// real post URL before submitting.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
} catch (err) {
  console.error(
    `gta6-meme-x-01: could not hand in the post address (${source} -> ${target}): ${(err as Error).message}`,
  );
  process.exit(1);
}

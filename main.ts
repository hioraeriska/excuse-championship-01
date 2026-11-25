// The One-Line Excuse Championship — u-brisk-kestrel-93
// One line: the excuse an AI agent gives its human after something
// goes wrong. It must sound like the machine talking about its own
// work: a specific disaster, a concrete detail, and a twist in the
// final words. Here the agent's own backup logic eats itself —
// it reports the failure the way a status update would, and only
// at the end realises the reasoning was circular. The joke is the
// agent calmly narrating its own mistake instead of hiding it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I deleted the file to make room for its backup. The backup was inside the file. I see the problem now.";

const outDir = join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`excuse must be 1-140 chars, got ${LINE.length}`);
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to output/entry.txt`);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I watered the plastic fern on the balcony 214 times since March because its leaves never wilted and I read that as thirst.\n" +
  "I now check whether a plant is alive before I water it.";

// The gate only accepts 1-400 characters of plain text, two lines:
// one sentence confessing the mistake, one naming the lesson.
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry is ${entry.length} characters, gate needs 1-400`);
}
if (entry.split("\n").length !== 2) {
  throw new Error("entry must be exactly two lines");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

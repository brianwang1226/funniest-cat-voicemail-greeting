import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Hi, it's Miso. I'm knocking your favorite mug off the table, so leave a message — I'll ignore it at 4 a.m. like always.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

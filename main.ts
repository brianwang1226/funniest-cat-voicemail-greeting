import { mkdirSync, writeFileSync } from "node:fs";

const greeting =
  "Hi, it's Miso. I'm knocking your favorite mug off the table, so leave a message — I'll ignore it at 4 a.m. like always.";

function main() {
  // One line, 119 characters: a cat's own voicemail greeting.
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/entry.txt`, greeting, "utf8");
}

main();

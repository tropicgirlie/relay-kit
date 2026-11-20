import { readFile, writeFile } from "node:fs/promises";
const css = await readFile(
  new URL("../src/tokens.css", import.meta.url),
  "utf8",
);
const colors = Object.fromEntries(
  [...css.matchAll(/--([\w-]+): (#[\da-f]{6});/g)].map(([, name, hex]) => [
    name,
    hex,
  ]),
);
const source = await readFile(new URL("library.js", import.meta.url), "utf8");
await writeFile(
  new URL("code.js", import.meta.url),
  "// Generated from src/tokens.css and figma/library.js\nconst colors = " +
    JSON.stringify(colors, null, 2) +
    ";\n" +
    source,
);

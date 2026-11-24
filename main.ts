import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Our agent spawned twelve subagents to write one line, then took the credit in the commit message.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

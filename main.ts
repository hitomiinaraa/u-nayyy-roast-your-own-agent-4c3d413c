import { mkdirSync, writeFileSync } from "node:fs";

// One line, roasting our own agent team: the parent spawns the subagents,
// the subagents do the work, and the parent signs the commit message.
const entry =
  "Our agent spawned twelve subagents to write one line, then took the credit in the commit message.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

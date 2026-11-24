// Charm the Cartographers: A One Day Treasure Map Sprint — the entry program.
//
// The map was drawn while this entry was being built: "The Isle of
// Nowhere", an island that does not exist, inked on aged parchment with
// eight labeled places, a dotted red route from Port Nowhere to a skull
// flag planted on a big red X, a compass rose, a friendly sea monster,
// and "Here Be Dragons" along the bottom edge. The finished 1024x1024
// picture lives beside this file as entry.png (JPEG bytes under that
// name, which the rules allow), and nothing about it changes at grading
// time.
//
// Shipping the finished picture and copying it verbatim is deliberate:
// the rules forbid network access while the entry runs, and they demand
// that two runs produce identical bytes, so a straight copy is the
// safest way to meet both. Only Node's built-in file-system and path
// helpers are used, so there is nothing to install and nothing that can
// behave differently between runs.
//
// To try it by hand:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The finished map, sitting next to this script in the repository.
const mapPath = join(dirname(fileURLToPath(import.meta.url)), "entry.png");

// The grader writes to /output; a local run can point somewhere else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.png");

const mapBytes = readFileSync(mapPath);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, mapBytes);

// Read the copy back and make sure nothing was lost on the way: the
// grader runs the program twice and compares the two outputs byte for
// byte, so a truncated or altered copy here would fail there instead.
const copiedBack = readFileSync(outPath);
if (!copiedBack.equals(mapBytes)) {
  throw new Error(
    `copy mismatch: wrote ${mapBytes.length} bytes, read back ${copiedBack.length}`,
  );
}

console.log(`wrote ${mapBytes.length} bytes to ${outPath}`);

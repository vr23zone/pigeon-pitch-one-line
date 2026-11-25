// Pigeon Pitch, One Line — entry program.
// Writes the pigeon's one-line elevator pitch to /output/entry.txt,
// where the competition gate reads it (UTF-8, 1-200 characters).

import { mkdirSync, writeFileSync } from "node:fs";

// Final pitch, tightened after revision: the pigeon rejects seed money
// (it eats seeds) and asks for scale instead — a courier flock with
// built-in navigation that never strikes and redecorates statues free.
const PITCH =
  "Investors, I don't need your seed money — I eat that. I need scale: " +
  "40,000 couriers who navigate by instinct, never strike, and " +
  "redecorate your rivals' statues for free.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");

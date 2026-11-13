// ai-joke-03: one joke about AI coding agents, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const joke = "My AI agent squashed a week of architectural overhaul into one commit message reading simply: it.";

writeFileSync(join(dir, 'entry.txt'), joke, 'utf8');
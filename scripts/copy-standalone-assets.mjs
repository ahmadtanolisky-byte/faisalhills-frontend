// `output: "standalone"` (next.config.ts) does not copy `public/` or
// `.next/static/` into `.next/standalone/` — Next.js expects a CDN to serve
// those. We're not using one, so copy them in ourselves after every build.
// See: https://nextjs.org/docs/app/api-reference/config/next-config-js/output

import { cpSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const standalone = join(root, ".next", "standalone");

if (!existsSync(standalone)) {
  console.error('.next/standalone not found — did next.config.ts set output: "standalone"?');
  process.exit(1);
}

cpSync(join(root, "public"), join(standalone, "public"), { recursive: true });
cpSync(join(root, ".next", "static"), join(standalone, ".next", "static"), { recursive: true });

console.log("Copied public/ and .next/static/ into .next/standalone/");

import { build } from "esbuild";

await build({
  entryPoints: ["src/index.ts"],
  format: "esm",
  platform: "neutral",
  outfile: "dist/index.js",
  bundle: true,
  sourcemap: "both"
});

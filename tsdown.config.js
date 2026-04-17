import { defineConfig } from "vite-plus/pack";

export default defineConfig({
  dts: {
    tsgo: true,
  },
  // Disable auto-generate exports to preserve custom subpath exports
  // exports: true,
  exports: false,
  // ESM format for modern bundlers
  format: ["esm"],
  // CRITICAL: Unbundle mode - keeps source directory structure
  // Each source file gets its own output file
  unbundle: true,
  // Set the root for module resolution
  cwd: process.cwd(),
});

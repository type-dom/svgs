import { defineConfig } from "vite-plus";
import tsdownConfig from "./tsdown.config.js";

export default defineConfig({
  staged: {
    "src/**/*.{ts,js}": "vp check --fix",
  },
  pack: tsdownConfig,
  lint: { options: { typeAware: true, typeCheck: true } },
  test: {
    globals: true,
  },
});

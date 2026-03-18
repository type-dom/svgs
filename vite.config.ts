import { defineConfig } from 'vite-plus';
import tsdownConfig from './tsdown.config.js';

// 模拟 @type-dom/framework 模块
export default defineConfig({
  staged: {
    "*": "vp check --fix"
  },
  pack: tsdownConfig,
  lint: {"options":{"typeAware":true,"typeCheck":true}},
  test: {
    globals: true,
  },
});

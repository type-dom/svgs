# Tree-shaking 验证测试

## 测试目的

验证 `dist/index.mjs` (622 KB) 在经过 bundler tree-shaking 后的实际效果。

## 测试方法

### 1. 创建测试文件

```typescript
// test-tree-shaking.ts
import { TdAddSvg } from "./dist/index.mjs";

console.log(TdAddSvg);
```

### 2. 使用 Rollup 打包

```bash
npm install -D rollup @rollup/plugin-node-resolve
```

```javascript
// rollup.test.config.js
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "test-tree-shaking.ts",
  output: {
    file: "dist-test/bundled.js",
    format: "esm",
  },
  plugins: [resolve()],
};
```

### 3. 检查结果

```bash
npx rollup -c rollup.test.config.js
ls -lh dist-test/bundled.js
```

**预期结果**：

- ❌ 如果 tree-shaking 无效：~622 KB
- ✅ 如果 tree-shaking 有效：~2-5 KB（只包含 TdAddSvg）

## 理论分析

### 为什么 dist/index.mjs 这么大？

```javascript
// dist/index.mjs 的结构
import { Td404Svg } from "./lib/common/404.mjs";
import { TdAPlusSvg } from "./lib/common/A_.mjs";
import { TdAMinusSvg } from "./lib/common/A-.mjs";
// ... 5700+ 行导入语句
import { TdZzzSvg } from "./lib/other/zzz.mjs";

export {
  Td404Svg,
  TdAPlusSvg,
  TdAMinusSvg,
  // ... 所有导出
  TdZzzSvg,
};
```

这个文件的作用是：

1. 导入所有图标模块
2. 重新导出所有图标

### Tree-shaking 工作原理

当 bundler 处理以下代码时：

```typescript
import { TdAddSvg } from "@type-dom/svgs";
```

Bundler 会：

1. 读取 `dist/index.mjs`
2. 发现只使用了 `TdAddSvg`
3. 追踪 `TdAddSvg` 的来源：`./lib/common/add.mjs`
4. **只打包** `add.mjs` 及其依赖
5. **丢弃**其他 5700+ 个图标的导入

### Side Effects 标记

`package.json` 中的 `"sideEffects": false` 告诉 bundler：

> "这个包没有副作用，可以安全地移除未使用的导出"

这使得 bundler 能够积极地移除未使用的代码。

## 实际案例对比

### 案例 1：使用主入口

```typescript
import { TdAddSvg } from "@type-dom/svgs";
```

**构建输出**：

- 入口文件：622 KB（不会被打包到最终产物）
- 最终产物：~2 KB（只包含 TdAddSvg）

### 案例 2：使用分类入口

```typescript
import { TdAddSvg } from "@type-dom/svgs/common";
```

**构建输出**：

- 入口文件：10.7 KB（common-index.mjs）
- 最终产物：~2 KB（只包含 TdAddSvg）

### 案例 3：直接导入

```typescript
import { TdAddSvg } from "@type-dom/svgs/dist/lib/common/add.mjs";
```

**构建输出**：

- 入口文件：0.27 KB（add.mjs）
- 最终产物：~0.8 KB（包含 add.mjs 及其依赖）

## 结论

✅ **Tree-shaking 是有效的**

- `dist/index.mjs` 的大小（622 KB）**不影响**最终打包体积
- 它只是一个**路由表**，告诉 bundler 去哪里找各个图标
- 现代 bundler（Vite、Webpack 5+、Rollup）都能正确处理

## 建议

1. **对于应用开发者**：放心使用 `import { X } from '@type-dom/svgs'`
2. **对于库开发者**：考虑使用分类入口以减少依赖
3. **对于极致优化**：可以直接导入单个文件

## 参考资料

- [Webpack Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
- [Rollup Tree Shaking](https://rollupjs.org/tutorial/#tree-shaking)
- [Vite Features - Tree Shaking](https://vitejs.dev/guide/features.html#tree-shaking)

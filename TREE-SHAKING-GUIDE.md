# 导入方式与 Tree-shaking 优化指南

## 📦 文件大小概览

| 入口文件                 | 大小     | 说明                            |
| ------------------------ | -------- | ------------------------------- |
| `index.mjs`              | ~622 KB  | 主入口，包含所有图标            |
| `common-index.mjs`       | ~10.7 KB | Common 分类（195 个图标）       |
| `element-plus-index.mjs` | ~17.8 KB | Element Plus 分类（293 个图标） |
| `fluentui-index.mjs`     | ~425 KB  | FluentUI 分类（5255 个图标）    |
| `other/index.mjs`        | ~1.7 KB  | Other 分类（33 个图标）         |
| 单个图标文件             | ~0.27 KB | 每个独立图标组件                |

## 🎯 推荐的导入方式

### 方式 1：从主入口导入（最方便）

```typescript
import { TdAddSvg, TdCloseSvg } from "@type-dom/svgs";
```

**优点**：

- ✅ 使用最简单
- ✅ 现代 bundler（Vite、Webpack 5+、Rollup）会自动 tree-shake
- ✅ 开发体验最好

**缺点**：

- ⚠️ 初始加载的入口文件较大（622 KB）
- ⚠️ 依赖 bundler 的 tree-shaking 能力

**适用场景**：大多数项目，特别是使用 Vite/Webpack 的项目

---

### 方式 2：从分类入口导入（推荐用于大型项目）

```typescript
// 只导入 Common 分类的图标
import { TdAddSvg, TdCloseSvg } from "@type-dom/svgs/common";

// 只导入 Element Plus 分类的图标
import { TdSomeIcon } from "@type-dom/svgs/element-plus";

// 只导入 FluentUI 分类的图标
import { TdFluentIcon } from "@type-dom/svgs/fluentui";

// 只导入 Other 分类的图标
import { TdOtherIcon } from "@type-dom/svgs/other";
```

**优点**：

- ✅ 减少初始加载体积
- ✅ 更明确的依赖关系
- ✅ 更好的代码组织

**缺点**：

- ⚠️ 仍然会加载整个分类（如 common 分类 10.7 KB）

**适用场景**：

- 项目只使用某个分类的图标
- 需要更细粒度的控制
- 按功能模块组织代码

---

### 方式 3：直接导入单个图标（最佳优化）

```typescript
// 直接导入单个图标文件
import { TdAddSvg } from "@type-dom/svgs/dist/lib/common/add.mjs";
```

**优点**：

- ✅ 最小的打包体积
- ✅ 零浪费，只加载需要的图标
- ✅ 不依赖 tree-shaking

**缺点**：

- ❌ 路径较深，不够优雅
- ❌ 内部路径可能在版本升级时变化

**适用场景**：

- 对包体积极其敏感的库
- 只需要极少数图标的项目

---

## 🔧 Tree-shaking 配置建议

### Vite / Rollup

无需额外配置，默认启用 tree-shaking。

确保 `package.json` 中设置：

```json
{
  "sideEffects": false
}
```

### Webpack 5+

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    sideEffects: true, // 启用 sideEffects 分析
    usedExports: true, // 标记未使用的导出
  },
};
```

### Webpack 4

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    sideEffects: true,
  },
};
```

并在 `package.json` 中设置 `"sideEffects": false`。

---

## 📊 实际效果对比

假设您的项目只使用了 3 个图标：`TdAddSvg`、`TdCloseSvg`、`TdUserSvg`

| 导入方式    | 初始加载 | 最终打包（gzip后） | 说明                       |
| ----------- | -------- | ------------------ | -------------------------- |
| 主入口      | 622 KB   | ~2 KB              | Bundler 自动移除未使用部分 |
| Common 分类 | 10.7 KB  | ~2 KB              | 只加载 common 分类         |
| 单个图标    | 0.8 KB   | ~0.8 KB            | 精确加载，无浪费           |

**注意**：最终打包大小取决于 bundler 的优化能力，现代工具都能很好地处理 tree-shaking。

---

## 💡 最佳实践建议

1. **对于应用项目**：使用方式 1（主入口），让 bundler 自动优化

   ```typescript
   import { TdAddSvg } from "@type-dom/svgs";
   ```

2. **对于库项目**：使用方式 2（分类入口），提供更细粒度的控制

   ```typescript
   import { TdAddSvg } from "@type-dom/svgs/common";
   ```

3. **对于极致优化**：使用方式 3（单个图标），但要注意路径稳定性

   ```typescript
   import { TdAddSvg } from "@type-dom/svgs/dist/lib/common/add.mjs";
   ```

4. **避免混合使用**：在同一个项目中保持一致的导入风格

5. **定期检查打包体积**：使用 `rollup-plugin-visualizer` 或 `webpack-bundle-analyzer` 分析实际效果

---

## 🔍 验证 Tree-shaking 是否生效

### 方法 1：检查构建输出

```bash
npm run build
```

查看生成的文件中是否只包含实际使用的图标。

### 方法 2：使用可视化工具

安装 `rollup-plugin-visualizer`：

```bash
npm install -D rollup-plugin-visualizer
```

在 vite.config.ts 中配置：

```typescript
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    visualizer({
      open: true,
      gzipSize: true,
    }),
  ],
});
```

运行构建后会打开可视化报告。

---

## ❓ 常见问题

### Q: 为什么 index.mjs 文件这么大？

A: `index.mjs` 是一个聚合入口文件，包含了所有图标的 re-export 语句。这不会影响最终打包体积，因为现代 bundler 会通过 tree-shaking 移除未使用的部分。

### Q: 我应该使用哪种导入方式？

A:

- 大多数情况：使用主入口 `@type-dom/svgs`
- 大型项目：使用分类入口 `@type-dom/svgs/common`
- 库项目：根据需求选择

### Q: Tree-shaking 不生效怎么办？

A: 检查以下几点：

1. 确保 `package.json` 中设置了 `"sideEffects": false`
2. 确保使用的是 ES modules（`import/export`）而非 CommonJS（`require`）
3. 检查 bundler 配置是否正确启用了 tree-shaking
4. 避免使用动态导入或副作用代码

---

## 📚 相关资源

- [Tree-shaking 官方文档](https://webpack.js.org/guides/tree-shaking/)
- [Vite Tree-shaking](https://vitejs.dev/guide/features.html#tree-shaking)
- [Package.json sideEffects](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free)

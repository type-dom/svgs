# ADR-002: Monorepo 目录结构与导出策略

**日期**: 2026-03-05  
**状态**: 已接受  
**分类**: 架构设计

---

## 📖 决策背景

### 问题陈述

随着 SVG 组件数量增长 (目标 500+),需要设计合理的目录结构和导出策略，以支持:

- ✅ 按需导入，减小打包体积
- ✅ 清晰的分类体系
- ✅ 便于维护和扩展
- ✅ 良好的开发体验

### 约束条件

- **组件数量**: 当前 195+ (Common) + 247+ (Element Plus) + FluentUI
- **分类维度**: 按来源/设计风格分类
- **Tree-shaking**: 必须支持按需加载
- **类型安全**: 完整的 TypeScript 类型推导

---

## 🎯 考虑选项

### 选项 1: 扁平结构 ⭐ (选中)

```
src/
├── lib/
│   ├── common/          # Common 分类
│   │   ├── add.ts
│   │   ├── close.ts
│   │   └── user.ts
│   ├── element-plus/    # Element Plus 分类
│   │   ├── arrow-down.ts
│   │   └── ...
│   ├── fluentui/        # FluentUI 分类
│   └── other/           # 其他分类
├── common-index.ts      # Common 分类索引
├── element-plus-index.ts
├── fluentui-index.ts
└── index.ts             # 主入口
```

**优势**:

- ✅ 结构清晰，一目了然
- ✅ 每个文件独立，便于 tree-shaking
- ✅ 支持多级按需导入
- ✅ 易于批量操作和自动化

**劣势**:

- ❌ 文件数量较多
- ❌ 需要维护多个索引文件

### 选项 2: 按功能分组

```
src/
├── lib/
│   ├── basic/           # 基础图标
│   │   ├── arrows/
│   │   ├── shapes/
│   │   └── symbols/
│   ├── business/        # 业务图标
│   │   ├── finance/
│   │   └── education/
│   └── brand/           # 品牌图标
```

**优势**:

- ✅ 按用途分类，便于查找
- ✅ 符合业务场景

**劣势**:

- ❌ 分类标准主观，容易混淆
- ❌ 跨类别复用困难
- ❌ 不利于批量处理

### 选项 3: 单文件聚合

```
src/
└── lib/
    └── all-icons.ts     # 所有组件在一个文件
```

**优势**:

- ✅ 文件管理简单
- ✅ 导入方便

**劣势**:

- ❌ 文件巨大，难以维护
- ❌ 无法 tree-shaking
- ❌ 编译速度慢
- ❌ 合并冲突频繁

---

## 🏆 决策结果

**选择**: 选项 1 - 扁平结构 + 分类索引

**目录结构**:

```
svgs/
├── src/
│   ├── lib/
│   │   ├── common/              # Common 分类 (195 个组件)
│   │   │   ├── 404.ts
│   │   │   ├── add.ts
│   │   │   ├── close.ts
│   │   │   └── ...
│   │   ├── element-plus/        # Element Plus 分类 (247 个组件)
│   │   │   ├── arrow-down.ts
│   │   │   └── ...
│   │   ├── fluentui/            # FluentUI 分类
│   │   │   └── ...
│   │   ├── other/               # 其他分类
│   │   │   └── ...
│   │   ├── common-index.ts      # Common 分类导出
│   │   ├── element-plus-index.ts
│   │   ├── fluentui-index.ts
│   │   └── index.ts             # 主入口
│   └── index.ts
├── tests/
│   ├── add.spec.ts
│   ├── close.spec.ts
│   └── ...
└── package.json
```

---

## 📋 导出策略

### 三级导出体系

#### Level 1: 单个组件导出 (推荐)

```typescript
// 使用方式
import { TdAddSvg } from '@type-dom/svgs/common/add';

// 优势
✅ 最小打包体积
✅ 完全 tree-shaking
✅ 精确控制依赖
```

#### Level 2: 分类索引导出 (中等)

```typescript
// 使用方式
import { TdAddSvg, TdCloseSvg } from '@type-dom/svgs/common';

// 优势
⚠️ 中等体积 (包含整个分类)
⚠️ 适合使用该分类多个组件的场景
```

#### Level 3: 主入口导出 (不推荐)

```typescript
// 使用方式
import { TdAddSvg } from '@type-dom/svgs';

// 劣势
❌ 最大体积 (可能包含所有组件)
❌ 仅用于快速原型开发
```

---

## 🔧 实现细节

### 分类索引文件

```typescript
// src/lib/common-index.ts
export { Td404Svg } from "./common/404";
export { TdAddSvg } from "./common/add";
export { TdCloseSvg } from "./common/close";
export { TdUserSvg } from "./common/user";
// ... 导出所有 Common 分类组件

// 同时导出类型
export type { SvgComponentClass } from "./common/types";
```

### 主入口文件

```typescript
// src/index.ts
// 导出所有分类
export * from "./lib/common-index";
export * from "./lib/element-plus-index";
export * from "./lib/fluentui-index";
export * from "./lib/other-index";

// 导出工具函数
export { addAttrObj, addStyleObj } from "@type-dom/framework";
```

### package.json 配置

```json
{
  "exports": {
    ".": "./dist/index.mjs",
    "./common": "./dist/lib/common-index.mjs",
    "./element-plus": "./dist/lib/element-plus-index.mjs",
    "./fluentui": "./dist/lib/fluentui-index.mjs",
    "./common/add": "./dist/lib/common/add.mjs",
    "./package.json": "./package.json"
  },
  "types": "./dist/index.d.ts",
  "sideEffects": false
}
```

**关键点**:

- `"sideEffects": false` - 启用 tree-shaking
- 细粒度的 exports 映射 - 支持按需导入
- 类型定义同步导出 - 完整的类型支持

---

## 💡 最佳实践

### 命名规范

```typescript
// 文件名：kebab-case
src / lib / common / add.ts;
src / lib / common / arrow - down.ts;

// 类名：PascalCase + 前缀
export class TdAddSvg extends TypeSvgSvg {}
export class ElArrowDownSvg extends TypeSvgSvg {}
export class FlAccessTimeSvg extends TypeSvgSvg {}

// 前缀规则:
// Td = TypeDom (原创/通用)
// El = Element Plus
// Fl = FluentUI
```

### 批量操作脚本

```javascript
// scripts/generate-index.js
// 自动生成索引文件

const fs = require("fs");
const path = require("path");

function generateIndex(dir, outputFile) {
  const files = fs.readdirSync(dir);
  const exports = [];

  files.forEach((file) => {
    if (file.endsWith(".ts") && file !== "index.ts") {
      const className = path.basename(file, ".ts");
      const pascalName = toPascalCase(className);
      exports.push(`export { ${pascalName} } from './${className}';`);
    }
  });

  fs.writeFileSync(outputFile, exports.join("\n"));
}

generateIndex("./src/lib/common", "./src/lib/common-index.ts");
```

---

## 📊 效果评估

### 打包体积对比

| 导入方式 | 打包体积 | Tree-shaking | 推荐使用场景 |
| -------- | -------- | ------------ | ------------ |
| 单个组件 | ~2KB     | ✅ 完全      | 生产环境     |
| 分类索引 | ~50KB    | ⚠️ 部分      | 开发阶段     |
| 主入口   | ~500KB   | ❌ 无        | 快速原型     |

### 开发体验

```
✅ 优点:
• IDE 智能提示准确
• 导入路径清晰
• 类型推导完整
• 批量操作简单

⚠️ 缺点:
• 需要记忆分类目录
• 索引文件需要维护
```

---

## 🔍 影响分析

### 积极影响

✅ **性能优化**

- Tree-shaking 减少 80-90% 打包体积
- 按需加载提升首屏速度
- 独立的组件文件便于缓存

✅ **可维护性提升**

- 清晰的目录结构
- 单一职责原则
- 易于定位和修改

✅ **开发效率**

- 自动化脚本生成索引
- AI 辅助批量操作
- 类型安全保障

### 潜在风险

⚠️ **文件数量增长**

- 当前：~500 个组件文件
- 未来：可能达到 1000+

**缓解措施**:

- 自动化文件管理工具
- 批量重命名脚本
- AI 辅助维护

⚠️ **索引文件维护**

- 手动维护容易出错
- 容易遗漏或重复

**缓解措施**:

- 自动生成索引脚本
- CI/CD自动检查
- Git hooks 验证

---

## 📚 相关文档

- [`02-开发规范/编码规范.md`](../02-开发规范/编码规范.md) - 代码风格要求
- [`02-开发规范/命名约定.md`](../02-开发规范/命名约定.md) - 命名规则详解
- [`03-API 文档/接口定义.md`](../03-API 文档/接口定义.md) - API 设计规范

---

## 🔄 状态变更

- **2026-03-05**: 初始提案并讨论
- **2026-03-08**: 完成目录重构
- **2026-03-10**: 自动化脚本实现
- **2026-03-19**: 文档化记录

---

**决策者**: xjf <xjf7711@qq.com>  
**审核者**: 技术委员会  
**版本**: v0.4.0  
**最后更新**: 2026-03-19

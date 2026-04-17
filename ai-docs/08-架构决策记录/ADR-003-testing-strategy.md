# ADR-003: 测试策略与质量保障体系

**日期**: 2026-03-10  
**状态**: 已接受  
**分类**: 质量保证

---

## 📖 决策背景

### 问题陈述

@type-dom/svgs 作为基础组件库，需要建立完善的测试体系以确保:

- ✅ 组件功能正确性
- ✅ 类型定义准确性
- ✅ API 稳定性
- ✅ 回归测试覆盖
- ✅ 持续集成自动化

### 约束条件

- **组件类型**: 纯 UI 组件 (SVG)
- **技术栈**: TypeScript + TypeDom
- **测试框架**: Vitest (Vite 原生)
- **覆盖率目标**: ≥80%
- **执行效率**: CI 时间 < 5 分钟

---

## 🎯 测试金字塔

```
        /\
       /  \
      / E2E \         端到端测试 (5%)
     /--------\       验证完整用户流程
    /          \
   / Integration \    集成测试 (15%)
  /----------------\   验证组件协作
 /                  \
/    Unit Tests      \  单元测试 (70%)
----------------------  验证独立功能单元
```

**资源分配**:

- 单元测试：70% (基础功能)
- 集成测试：15% (组件协作)
- E2E 测试：5% (完整流程)
- 视觉回归：10% (关键组件)

---

## 🎯 考虑选项

### 测试框架选择

#### 选项 1: Vitest ⭐ (选中)

**优势**:

- ✅ Vite 原生集成，配置简单
- ✅ TypeScript 开箱即用
- ✅ 极速执行 (并行测试)
- ✅ 内置覆盖率报告
- ✅ 全局 API (describe, it, expect)

**劣势**:

- ❌ 相对年轻，生态不如 Jest
- ❌ 插件较少

#### 选项 2: Jest

**优势**:

- ✅ 成熟稳定，广泛使用
- ✅ 丰富的插件生态
- ✅ Snapshot 测试支持

**劣势**:

- ❌ 配置复杂
- ❌ TypeScript 需要额外配置
- ❌ 执行速度较慢

#### 选项 3: Mocha + Chai

**优势**:

- ✅ 灵活，可定制
- ✅ 历史悠久，稳定

**劣势**:

- ❌ 需要手动配置所有组件
- ❌ 不支持快照测试
- ❌ 覆盖率需要额外工具

---

## 🏆 决策结果

**选择**: Vitest (@voidzero-dev/vite-plus-test)

### 完整测试策略

#### 1. 单元测试 (Unit Testing)

**目标**: 验证每个 SVG 组件的独立功能

**测试内容**:

```typescript
// tests/add.spec.ts
import { describe, it, expect } from "vitest";
import { TdAddSvg } from "../src/lib/common/add";
import { TypeSvgSvg, SvgPath } from "@type-dom/framework";

describe("TdAddSvg", () => {
  let svg: TdAddSvg;

  beforeEach(() => {
    svg = new TdAddSvg();
  });

  // 基础功能测试
  it("should create instance correctly", () => {
    expect(svg).toBeInstanceOf(TypeSvgSvg);
    expect(svg.className).toBe("TdAddSvg");
  });

  it("should have correct viewBox", () => {
    expect(svg.viewBox).toBe("0 0 1024 1024");
  });

  it("should accept custom props", () => {
    const custom = new TdAddSvg({
      width: 32,
      height: 32,
      fill: "red",
    });
    expect(custom.width).toBe(32);
    expect(custom.height).toBe(32);
  });

  // 子节点测试
  it("should contain SvgPath instances", () => {
    expect(svg.childNodes.length).toBeGreaterThan(0);
    svg.childNodes.forEach((path) => {
      expect(path).toBeInstanceOf(SvgPath);
    });
  });

  // 尺寸管理测试
  it("should reset size correctly", () => {
    svg.resetSize(48, 48);
    expect(svg.width).toBe(48);
    expect(svg.height).toBe(48);
  });
});
```

**覆盖率要求**:

- 语句覆盖率 ≥ 80%
- 分支覆盖率 ≥ 75%
- 函数覆盖率 ≥ 90%

---

#### 2. 集成测试 (Integration Testing)

**目标**: 验证多个组件的协作和 TypeDom 集成

**测试内容**:

```typescript
// tests/integration/component-integration.spec.ts
import { describe, it, expect } from "vitest";
import { CommonSvgs } from "@type-dom/svgs";
import { TypeDomApp } from "@type-dom/framework";

describe("Component Integration", () => {
  it("should render multiple SVGs together", () => {
    const { TdAddSvg, TdCloseSvg, TdUserSvg } = CommonSvgs;

    const container = document.createElement("div");
    const addSvg = new TdAddSvg();
    const closeSvg = new TdCloseSvg();
    const userSvg = new TdUserSvg();

    addSvg.mount(container);
    closeSvg.mount(container);
    userSvg.mount(container);

    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBe(3);
  });

  it("should handle dynamic SVG switching", async () => {
    const { TdAddSvg, TdCloseSvg } = CommonSvgs;
    const container = document.createElement("div");

    let currentSvg = new TdAddSvg();
    currentSvg.mount(container);

    // Switch SVG
    currentSvg.unmount();
    currentSvg = new TdCloseSvg();
    currentSvg.mount(container);

    expect(container.querySelector("svg")).toBeTruthy();
  });
});
```

---

#### 3. E2E 测试 (End-to-End Testing)

**目标**: 验证完整用户流程 (未来实现)

**计划工具**: Playwright

**测试场景**:

```typescript
// tests/e2e/svg-rendering.e2e.ts (TODO)
import { test, expect } from "@playwright/test";

test.describe("SVG Rendering E2E", () => {
  test("should render SVG components correctly", async ({ page }) => {
    await page.goto("/showcase");

    // Verify SVGs are rendered
    const svgs = page.locator("svg");
    await expect(svgs.first()).toBeVisible();

    // Check SVG attributes
    const firstSvg = svgs.first();
    await expect(firstSvg).toHaveAttribute("viewBox", "0 0 1024 1024");
  });

  test("visual regression - SVG appearance", async ({ page }) => {
    await page.goto("/showcase");
    await expect(page).toHaveScreenshot("svg-showcase-baseline.png");
  });
});
```

---

#### 4. 视觉回归测试 (Visual Regression Testing)

**目标**: 检测 SVG 渲染的视觉差异 (未来实现)

**计划工具**: Pixelmatch / Playwright Screenshots

**实施方式**:

```typescript
// TODO: 视觉对比测试
import { compare } from "pixelmatch";

it("should match visual baseline", async () => {
  const svg = new TdAddSvg();
  const container = document.createElement("div");
  svg.mount(container);

  // Render and capture screenshot
  const screenshot = await capture(container);

  // Compare with baseline
  const diff = compare(screenshot, baseline);
  expect(diff).toBeLessThan(threshold);
});
```

---

## 🔧 配置文件

### Vitest 配置

```typescript
// vite.config.ts
export default defineConfig({
  test: {
    globals: true, // 启用全局 API
    environment: "happy-dom", // DOM 环境
    include: ["tests/**/*.spec.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "tests/", "*.config.*", "**/*.d.ts"],
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
    },
    reporters: ["default", "html"],
  },
});
```

### NPM Scripts

```json
{
  "scripts": {
    "test": "vp test", // 运行所有测试
    "test:watch": "vp test --watch", // 监听模式
    "test:coverage": "vp test --coverage", // 生成覆盖率
    "test:ui": "vp test --ui", // Web UI
    "test:e2e": "playwright test" // E2E 测试 (TODO)
  }
}
```

---

## 📊 质量门禁

### CI/CD检查

```yaml
# .github/workflows/ci-cd.yml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Run unit tests
        run: npm test -- --coverage

      - name: Check coverage thresholds
        run: |
          # 检查覆盖率是否达标
          node scripts/check-coverage.js

      - name: Upload coverage report
        uses: codecov/codecov-action@v3
```

### 本地开发检查

```bash
# Commit 前检查清单
npm run typecheck    # 类型检查
npm run lint         # 代码检查
npm test             # 运行测试
npm run build        # 构建验证
```

---

## 💡 最佳实践

### 测试命名规范

```typescript
// 描述性命名
describe("TdAddSvg", () => {
  // 被测试组件
  describe("Initialization", () => {
    // 功能分组
    it("should create instance correctly", () => {});
    it("should accept custom props", () => {});
  });

  describe("Size Management", () => {
    it("should reset size correctly", () => {});
  });
});
```

### AAA 模式

```typescript
it("should add child nodes correctly", () => {
  // Arrange (准备)
  const svg = new TdAddSvg();
  const newPath = new SvgPath({ d: "M10 10 L20 20" });
  const initialCount = svg.childNodes.length;

  // Act (执行)
  svg.addChild(newPath);

  // Assert (断言)
  expect(svg.childNodes.length).toBe(initialCount + 1);
  expect(svg.childNodes).toContain(newPath);
});
```

### 测试数据隔离

```typescript
// ✅ 推荐：每个测试独立的数据
describe("Component Tests", () => {
  let svg: TdAddSvg;

  beforeEach(() => {
    // 每个测试都创建新实例
    svg = new TdAddSvg();
  });

  it("test 1", () => {
    // 修改 svg 不影响其他测试
  });

  it("test 2", () => {
    // 独立的测试环境
  });
});

// ❌ 避免：共享可变状态
let sharedSvg = new TdAddSvg(); // 危险！

it("test 1", () => {
  sharedSvg.modify(); // 影响其他测试
});
```

---

## 📈 效果评估

### 当前状态

| 指标           | 目标  | 当前值 | 状态      |
| -------------- | ----- | ------ | --------- |
| **单元测试数** | 200+  | 6      | ⚠️ 进行中 |
| **覆盖率**     | ≥80%  | ~5%    | ⚠️ 待提升 |
| **测试通过率** | 100%  | 100%   | ✅ 达标   |
| **CI 时间**    | <5min | ~2min  | ✅ 达标   |

### 改进计划

```
Week 1-2: 补充基础组件测试 (50 个)
Week 3-4: 覆盖所有 Common 组件 (195 个)
Month 2: 完成 Element Plus 组件 (247 个)
Month 3: 添加集成测试和 E2E 测试
```

---

## 🔍 影响分析

### 积极影响

✅ **质量保障**

- 早期发现 Bug
- 防止回归问题
- 增强重构信心

✅ **开发效率**

- 自动化验证
- 减少手动测试
- 快速定位问题

✅ **文档价值**

- 测试即文档
- 明确使用方式
- 降低学习成本

### 潜在风险

⚠️ **维护成本**

- 测试代码需要维护
- 组件变更需同步更新测试

**缓解措施**:

- AI 辅助生成测试
- 批量更新脚本
- 测试模板化

⚠️ **过度测试**

- 测试过于细碎
- 维护负担增加

**缓解措施**:

- 聚焦核心功能
- 遵循测试金字塔
- 定期审查测试价值

---

## 📚 相关文档

- [`05-测试文档/README.md`](../05-测试文档/README.md) - 测试文档导航
- [`05-测试文档/单元测试指南.md`](../05-测试文档/单元测试指南.md) - 单元测试详解
- [`05-测试文档/测试策略.md`](../05-测试文档/测试策略.md) - 测试策略总览
- [`06-运维文档/CI-CD-PIPELINE.md`](../06-运维文档/CI-CD-PIPELINE.md) - CI/CD集成

---

## 🔄 状态变更

- **2026-03-10**: 初始提案并讨论
- **2026-03-12**: Vitest 配置完成
- **2026-03-15**: 首批测试实现
- **2026-03-19**: 文档化记录

---

**决策者**: xjf <xjf7711@qq.com>  
**审核者**: 技术委员会  
**版本**: v0.4.0  
**最后更新**: 2026-03-19

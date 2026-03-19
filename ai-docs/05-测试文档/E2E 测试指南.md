# E2E 测试指南

## 📖 概述

本指南介绍如何编写和运行端到端 (E2E) 测试，确保整个应用从用户角度的正确性。

### E2E 测试 vs 单元测试 vs 集成测试

| 测试类型 | 测试范围 | 执行速度 | 置信度 | 维护成本 |
|---------|---------|---------|--------|---------|
| **单元测试** | 单个函数/方法 | ⚡ 极快 (<1ms) | ⭐⭐ | 💚 低 |
| **集成测试** | 模块间交互 | 🚀 快速 (1-10ms) | ⭐⭐⭐ | 💛 中 |
| **E2E 测试** | 完整用户流程 | 🐌 慢速 (>100ms) | ⭐⭐⭐⭐⭐ | ❤️ 高 |

---

## 🎯 测试策略

### 测试金字塔

```
        /\
       /  \
      / E2E \       10% (关键路径)
     /______\
    /        \
   /  Integration \  20% (模块交互)
  /________________\
 /                  \
/    Unit Tests      \  70% (基础逻辑)
/______________________\
```

### E2E 测试覆盖范围

**✅ 应该测试的场景**:
- ✅ 关键用户旅程 (注册、登录、购买等)
- ✅ 跨模块集成场景
- ✅ API 与前端集成
- ✅ 数据库事务完整性
- ✅ 第三方服务集成

**❌ 不应该测试的场景**:
- ❌ 纯 UI 样式 (颜色、间距等)
- ❌ 复杂的业务逻辑细节 (应在单元测试中覆盖)
- ❌ 性能测试 (应使用专门的性能测试工具)
- ❌ 所有可能的用户路径 (只测试关键路径)

---

## 🛠️ 技术栈配置

### 推荐工具

对于 SVG 组件库项目，我们使用以下工具进行 E2E 测试：

```typescript
// package.json
{
  "devDependencies": {
    "@voidzero-dev/vite-plus-test": "^0.5.0",  // 主要测试框架
    "happy-dom": "^17.0.0",                     // 轻量级 DOM 环境
    "playwright": "^1.40.0"                     // 可选：浏览器自动化
  }
}
```

### Vitest 配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    include: [
      'tests/**/*.spec.ts',        // 单元测试
      'e2e/**/*.e2e.ts'            // E2E 测试
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'e2e/'                      // E2E 测试不计入覆盖率
      ]
    }
  }
})
```

---

## 📝 编写 E2E 测试

### 基本结构

```typescript
// e2e/svg-component-flow.e2e.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { render, screen, waitFor } from '@testing-library/preact'
import { TdApp } from '../src/app'

describe('E2E: SVG Component Workflow', () => {
  let appContainer: HTMLElement

  beforeAll(() => {
    // 设置测试环境
    appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
  })

  afterAll(() => {
    // 清理测试环境
    document.body.removeChild(appContainer)
  })

  it('should complete full user journey', async () => {
    // 1. 渲染应用
    render(<TdApp />, { container: appContainer })

    // 2. 用户操作：选择组件类别
    const categorySelect = await screen.findByRole('combobox', { name: /category/i })
    await fireEvent.click(categorySelect)
    await fireEvent.selectOptions(categorySelect, 'Common')

    // 3. 验证：组件列表更新
    await waitFor(() => {
      expect(screen.getByText(/add/i)).toBeInTheDocument()
      expect(screen.getByText(/close/i)).toBeInTheDocument()
    })

    // 4. 用户操作：选择具体组件
    const addComponent = await screen.findByTestId('td-add-svg')
    await fireEvent.click(addComponent)

    // 5. 验证：组件详情显示
    await waitFor(() => {
      expect(screen.getByTestId('component-preview')).toBeVisible()
    })

    // 6. 验证：代码生成功能
    const codeButton = await screen.findByRole('button', { name: /copy code/i })
    await fireEvent.click(codeButton)

    // 7. 验证：复制成功提示
    await waitFor(() => {
      expect(screen.getByText(/code copied successfully/i)).toBeInTheDocument()
    })
  })
})
```

### Page Object 模式

对于复杂的 E2E 测试，使用 Page Object 模式提高可维护性：

```typescript
// e2e/pages/component-list.page.ts
export class ComponentListPage {
  constructor(private page: any) {}

  async navigate() {
    await this.page.goto('/components')
  }

  async selectCategory(category: string) {
    await this.page.selectOption('select[name="category"]', category)
  }

  async clickComponent(componentName: string) {
    await this.page.click(`[data-testid="${componentName}"]`)
  }

  async getVisibleComponents(): Promise<string[]> {
    const components = await this.page.$$eval(
      '[data-testid^="td-"]',
      (els: Element[]) => els.map(el => el.getAttribute('data-testid'))
    )
    return components
  }

  async searchComponent(query: string) {
    await this.page.fill('input[type="search"]', query)
  }

  async isComponentVisible(componentName: string): Promise<boolean> {
    return this.page.isVisible(`[data-testid="${componentName}"]`)
  }
}

// e2e/component-workflow.e2e.ts
import { test, expect } from '@playwright/test'
import { ComponentListPage } from './pages/component-list.page'

test('complete component workflow', async ({ page }) => {
  const componentPage = new ComponentListPage(page)
  
  await componentPage.navigate()
  await componentPage.selectCategory('Common')
  
  const components = await componentPage.getVisibleComponents()
  expect(components.length).toBeGreaterThan(0)
  
  await componentPage.clickComponent('td-add-svg')
  const isVisible = await componentPage.isComponentVisible('td-add-svg')
  expect(isVisible).toBe(true)
})
```

---

## 🧪 测试场景示例

### 场景 1: 组件导入和使用流程

```typescript
// e2e/component-import-flow.e2e.ts
import { describe, it, expect } from 'vitest'
import { compile } from 'tsdown'

describe('E2E: Component Import and Usage', () => {
  it('should allow importing and using SVG component', async () => {
    // 1. 创建测试文件
    const testCode = `
      import { TdAddSvg } from '@type-dom/svgs/common'
      
      const App = () => {
        return <TdAddSvg size={24} color="#333" />
      }
      
      export default App
    `

    // 2. 编译测试
    const result = await compile(testCode, {
      format: 'esm',
      platform: 'browser'
    })

    // 3. 验证编译成功
    expect(result.output).toBeDefined()
    expect(result.errors).toHaveLength(0)

    // 4. 验证 tree-shaking 生效
    const bundleSize = result.output.length
    expect(bundleSize).toBeLessThan(5000) // < 5KB
  })
})
```

### 场景 2: 批量操作流程

```typescript
// e2e/batch-operation-flow.e2e.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/preact'
import { BatchProcessor } from '../src/lib/common/batch-processor'

describe('E2E: Batch Operations', () => {
  let processor: BatchProcessor
  let mockCallback: ReturnType<typeof vi.fn>

  beforeEach(() => {
    mockCallback = vi.fn()
    processor = new BatchProcessor({
      batchSize: 10,
      onComplete: mockCallback
    })
  })

  it('should process large batch of SVG files', async () => {
    // 准备 100 个 SVG 文件路径
    const svgFiles = Array.from({ length: 100 }, (_, i) => ({
      path: `/svg/file-${i}.svg`,
      content: `<svg viewBox="0 0 24 24">...</svg>`
    }))

    // 启动批量处理
    const promise = processor.processBatch(svgFiles)

    // 模拟处理进度
    for (let i = 0; i < 10; i++) {
      await processor.simulateProgress(i * 10)
      await waitFor(() => {
        expect(processor.progress).toBeCloseTo((i + 1) / 10, 1)
      })
    }

    await promise

    // 验证结果
    expect(mockCallback).toHaveBeenCalledTimes(1)
    expect(mockCallback).toHaveBeenCalledWith({
      total: 100,
      success: 100,
      failed: 0
    })
  })
})
```

### 场景 3: TypeScript 类型检查流程

```typescript
// e2e/typescript-check.e2e.ts
import { describe, it, expect } from 'vitest'
import { execSync } from 'child_process'

describe('E2E: TypeScript Type Checking', () => {
  it('should pass type checking for all exports', () => {
    try {
      // 运行 TypeScript 编译器进行检查
      const result = execSync('npx tsc --noEmit', {
        encoding: 'utf-8',
        stdio: 'pipe'
      })

      // 应该没有错误
      expect(result).not.toMatch(/error TS\d+:/)
    } catch (error: any) {
      // 如果有错误，输出详细信息
      console.error('TypeScript errors:', error.stdout)
      throw error
    }
  })

  it('should have correct types for all SVG components', () => {
    const testCode = `
      import { TdAddSvg, TdCloseSvg } from '@type-dom/svgs/common'
      import type { SvgComponentProps } from '@type-dom/svgs'
      
      // 类型检查：组件应该接受正确的 props
      const TestComponent = () => {
        return (
          <>
            <TdAddSvg size={24} color="#333" className="icon" />
            <TdCloseSvg size="2rem" onClick={() => {}} />
          </>
        )
      }
      
      // @ts-expect-error - 应该报错：size 类型错误
      const InvalidUsage = () => <TdAddSvg size="large" />
    `

    // 验证类型检查
    expect(testCode).toMatch(/@ts-expect-error/)
  })
})
```

---

## 🚀 运行 E2E 测试

### 本地运行

```bash
# 运行所有 E2E 测试
npm run test:e2e

# 运行特定测试文件
npm run test:e2e -- component-workflow.e2e.ts

# 带调试模式运行
npm run test:e2e -- --debug

# 生成覆盖率报告
npm run test:e2e -- --coverage
```

### CI/CD 集成

```yaml
# .github/workflows/e2e-tests.yml
name: E2E Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  e2e:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build project
        run: npm run build
        
      - name: Run E2E tests
        run: npm run test:e2e
        
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: e2e-results
          path: tests/e2e-results/
```

---

## 📊 最佳实践

### 1. 测试数据管理

```typescript
// e2e/fixtures/test-data.ts
export const testData = {
  validSvgFile: {
    path: '/test/component.svg',
    content: '<svg viewBox="0 0 24 24"><path d="M12 2L2 12h20z"/></svg>',
    expectedOutput: {
      width: 24,
      height: 24,
      componentName: 'TestSvg'
    }
  },
  
  invalidSvgFile: {
    path: '/test/invalid.svg',
    content: '<div>Not an SVG</div>',
    shouldThrow: true
  }
}

// 在测试中使用
it('should process valid SVG file', async () => {
  const result = await processSvg(testData.validSvgFile)
  expect(result).toEqual(testData.validSvgFile.expectedOutput)
})
```

### 2. 测试隔离

```typescript
// 每个测试使用独立的环境
describe('E2E Tests', () => {
  let originalEnv: NodeJS.ProcessEnv
  
  beforeAll(() => {
    originalEnv = { ...process.env }
  })
  
  beforeEach(() => {
    // 重置环境变量
    process.env = { ...originalEnv }
    
    // 清理 DOM
    document.body.innerHTML = ''
    
    // 清除所有 mocks
    vi.clearAllMocks()
  })
  
  afterAll(() => {
    process.env = originalEnv
  })
})
```

### 3. 等待策略

```typescript
// ❌ 不好的做法：固定等待时间
await new Promise(resolve => setTimeout(resolve, 5000))

// ✅ 好的做法：等待特定条件
await waitFor(() => {
  expect(screen.getByTestId('result')).toHaveTextContent('Success')
}, { timeout: 5000 })

// ✅ 更好的做法：使用 findBy 查询
const result = await screen.findByTestId('result')
expect(result).toHaveTextContent('Success')
```

### 4. 错误处理

```typescript
it('should handle network errors gracefully', async () => {
  // Mock 网络错误
  vi.spyOn(global, 'fetch').mockRejectedValueOnce(
    new Error('Network error')
  )
  
  // 执行操作
  await act(async () => {
    render(<ComponentThatFetches />)
  })
  
  // 验证错误处理
  await waitFor(() => {
    expect(screen.getByText('Failed to load')).toBeInTheDocument()
  })
})
```

---

## 🐛 常见问题排查

### 问题 1: 测试运行缓慢

**症状**: E2E 测试执行时间超过 5 分钟

**解决方案**:
```bash
# 1. 并行运行测试
npm run test:e2e -- --workers=4

# 2. 只运行失败的测试
npm run test:e2e -- --bail

# 3. 跳过某些测试
npm run test:e2e -- --skip=e2e/slow-tests/
```

### 问题 2: 测试不稳定 (Flaky Tests)

**症状**: 测试有时通过，有时失败

**解决方案**:
```typescript
// 1. 增加重试机制
it('should load data', { retry: 3 }, async () => {
  // 测试代码
})

// 2. 使用更可靠的等待
await waitFor(() => {
  expect(element).toBeVisible()
}, { 
  timeout: 5000,
  interval: 100 
})

// 3. 避免依赖时序
// ❌ 依赖于动画完成时间
await new Promise(r => setTimeout(r, 300))

// ✅ 等待动画结束
await waitFor(() => {
  expect(element).toHaveClass('animation-complete')
})
```

### 问题 3: 内存泄漏

**症状**: 测试运行时内存持续增长

**解决方案**:
```typescript
afterEach(() => {
  // 清理所有事件监听器
  vi.resetAllMocks()
  
  // 清理 DOM
  document.body.innerHTML = ''
  
  // 强制垃圾回收 (如果支持)
  if (global.gc) {
    global.gc()
  }
})
```

---

## 📈 质量指标

### E2E 测试覆盖度要求

| 指标 | 目标值 | 当前值 | 状态 |
|-----|-------|-------|------|
| 关键用户路径覆盖率 | ≥90% | TBD | 🎯 |
| 测试稳定性 | ≥95% | TBD | 🎯 |
| 平均执行时间 | <30s | TBD | 🎯 |
| 误报率 | <1% | TBD | 🎯 |

### 测试健康度检查

```bash
# 运行测试健康度检查脚本
npm run test:health

# 输出示例:
# ✓ Total E2E tests: 25
# ✓ Passing: 24 (96%)
# ✓ Flaky: 1 (4%)
# ✓ Average duration: 18s
# ✓ Coverage: 88%
```

---

## 🔗 相关资源

### 内部文档
- [测试策略](./测试策略.md) - 整体测试战略
- [单元测试指南](./单元测试指南.md) - 单元测试最佳实践
- [集成测试指南](./集成测试指南.md) - 模块间测试方法

### 外部资源
- [Vitest 官方文档](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Playwright](https://playwright.dev/)
- [Martin Fowler - E2E Testing](https://martinfowler.com/articles/practical-test-pyramid.html)

---

## 📝 更新日志

| 日期 | 版本 | 更新内容 |
|-----|------|---------|
| 2026-03-19 | v1.0.0 | 初始版本，完整的 E2E 测试指南 |

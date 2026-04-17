# AI 迭代工作流

## 📖 概述

AI 迭代工作流描述了如何与 AI Agent 协作，通过多轮对话和持续改进，高质量地完成开发任务。

### 传统工作流 vs AI 迭代工作流

| 维度         | 传统工作流          | AI 迭代工作流             | 提升        |
| ------------ | ------------------- | ------------------------- | ----------- |
| **需求理解** | 人工分析 (2-4 小时) | AI 辅助分析 (15 分钟)     | **8x** ⬆️   |
| **方案设计** | 独立设计 (1-2 天)   | AI 生成 + 审查 (2 小时)   | **4-8x** ⬆️ |
| **代码实现** | 手工编码 (1-3 天)   | AI 生成 + 调整 (2-4 小时) | **4-6x** ⬆️ |
| **测试编写** | 手动编写 (0.5-1 天) | AI 自动生成 (30 分钟)     | **4-8x** ⬆️ |
| **文档撰写** | 最后补充 (2-4 小时) | 同步生成 (30 分钟)        | **4-8x** ⬆️ |
| **整体周期** | 5-10 天             | 1-2 天                    | **5-7x** ⬆️ |

---

## 🔄 迭代循环模型

### OODA 循环 (Observe-Orient-Decide-Act)

```
┌──────────────────────────────────────────┐
│                                          │
│   ┌─────────┐                           │
│   │ Observe │ ← 观察当前状态             │
│   └────┬────┘                           │
│        │                                 │
│        ▼                                 │
│   ┌─────────┐                           │
│   │ Orient  │ ← 分析问题定位             │
│   └────┬────┘                           │
│        │                                 │
│        ▼                                 │
│   ┌─────────┐                           │
│   │ Decide  │ ← 制定解决方案             │
│   └────┬────┘                           │
│        │                                 │
│        ▼                                 │
│   ┌─────────┐                           │
│   │  Act    │ ← 执行并验证               │
│   └────┬────┘                           │
│        │                                 │
│        └──────────────────→              │
│                                          │
└──────────────────────────────────────────┘
       快速迭代，每轮 5-15 分钟
```

### 实际案例：创建 SVG 组件

#### 第 1 轮：需求澄清 (2 分钟)

```markdown
【用户】我需要一个添加图标，用于工具栏

【Agent 澄清问题】
为了更好地帮助您，请提供以下信息:

1. 使用场景：主工具栏还是弹出菜单？
2. 尺寸要求：默认 24px 还是需要多种尺寸？
3. 样式偏好：线性 (outline) 还是面性 (filled)?
4. 颜色方案：单色还是多色？

【用户补充】

1. 主工具栏使用
2. 默认 24px，需要响应式
3. 线性风格
4. 单色，跟随当前文字颜色
```

#### 第 2 轮：方案生成 (3 分钟)

```markdown
【Agent 生成方案】
基于您的需求，我建议以下方案:

**设计方案**:

- 基础尺寸：24x24 viewBox
- 线条粗细：1.5px (适合线性风格)
- 路径简化：是 (优化文件大小)
- 响应式：使用 em 单位

**参考图标**:
这是常见的"添加"图标设计 (+ 号)

【展示预览图】

请确认这个设计方向是否正确？
```

#### 第 3 轮：代码生成 (3 分钟)

````markdown
【用户】设计方向正确，请生成代码

【Agent 生成代码】
✅ 已生成 TdAddSvg 组件

```typescript
// src/lib/common/add.ts
import { defineComponent, h } from "@type-dom/framework";

export const TdAddSvg = defineComponent({
  name: "TdAddSvg",
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: "currentColor" },
  },
  render() {
    const { size, color } = this.props;
    return h(
      "svg",
      {
        viewBox: "0 0 24 24",
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
        fill: "none",
        stroke: color,
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      },
      [h("path", { d: "M12 5v14M5 12h14" })],
    );
  },
});
```
````

是否需要生成单元测试？

````

#### 第 4 轮：测试生成 (3 分钟)

```markdown
【用户】是的，生成测试

【Agent 生成测试】
✅ 已生成完整的单元测试

```typescript
// tests/add.spec.ts
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/preact'
import { TdAddSvg } from '../src/lib/common/add'

describe('TdAddSvg', () => {
  it('should render correctly with default props', () => {
    const { container } = render(<TdAddSvg />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('width')).toBe('24px')
    expect(svg?.getAttribute('stroke')).toBe('currentColor')
  })

  it('should accept custom size', () => {
    const { container } = render(<TdAddSvg size={32} />)
    expect(container.querySelector('svg')?.getAttribute('width')).toBe('32px')
  })

  it('should accept custom color', () => {
    const { container } = render(<TdAddSvg color="#ff0000" />)
    expect(container.querySelector('svg')?.getAttribute('stroke')).toBe('#ff0000')
  })
})
````

运行测试：所有测试通过 ✅

````

#### 第 5 轮：代码审查 (2 分钟)

```markdown
【Agent 主动审查】
自我审查生成的代码:

✅ 优点:
- 遵循 TypeScript 严格模式
- Props 类型定义完整
- 支持响应式尺寸
- 测试覆盖率 100%

⚠️ 可改进:
1. 可以添加 prop 验证逻辑
2. 可以考虑添加 aria-label 属性
3. 可以提供预设尺寸选项 (sm/md/lg)

需要我改进这些点吗？

【用户】加上 aria-label 和尺寸预设
````

#### 第 6 轮：迭代改进 (3 分钟)

````markdown
【Agent 改进代码】
✅ 已根据反馈改进

**改进点**:

1. ✅ 添加 aria-label 支持无障碍访问
2. ✅ 提供预设尺寸 (sm: 16px, md: 24px, lg: 32px)
3. ✅ 添加 prop 验证

```typescript
const SIZE_PRESETS = {
  sm: 16,
  md: 24,
  lg: 32
} as const

props: {
  size: {
    type: [Number, String],
    default: 'md',
    validator: (value) => {
      if (typeof value === 'string') {
        return Object.keys(SIZE_PRESETS).includes(value)
      }
      return typeof value === 'number' && value > 0
    }
  },
  ariaLabel: { type: String, default: 'Add' }
}
```
````

完整代码已更新到文件。需要提交 commit 吗？

````

#### 第 7 轮：完成收尾 (2 分钟)

```markdown
【用户】好的，生成 commit message

【Agent 生成】
📝 Commit Message:

````

feat(common): add TdAddSvg component with accessibility support

- Add TdAddSvg component for toolbar usage
- Support responsive sizing (sm/md/lg presets)
- Add aria-label for accessibility
- Include comprehensive unit tests
- Follow linear style guideline (1.5px stroke)

Closes #123

```

✅ 任务完成！总耗时：~18 分钟
相比传统方式 (1-2 天)，效率提升约 **20-40 倍**
```

---

## 🎯 核心技能组合

### Skill 组合矩阵

```
┌─────────────────────────────────────────────┐
│           AI 迭代工作流技能树                │
├─────────────────────────────────────────────┤
│                                             │
│  1. 提问技能 (Skill 1)                      │
│     ├─ 背景描述                             │
│     ├─ 需求澄清                             │
│     └─ 约束条件说明                         │
│                                             │
│  2. 生成技能 (Skill 2/3)                    │
│     ├─ 代码生成                             │
│     ├─ 测试生成                             │
│     └─ 文档生成                             │
│                                             │
│  3. 审查技能 (Skill 4)                      │
│     ├─ 代码质量检查                         │
│     ├─ 规范符合度验证                       │
│     └─ 潜在问题识别                         │
│                                             │
│  4. 改进技能 (Skill 5)                      │
│     ├─ 重构建议                             │
│     ├─ 性能优化                             │
│     └─ 可读性提升                           │
│                                             │
│  5. 验证技能 (Skill 7)                      │
│     ├─ Bug 定位                              │
│     ├─ 根因分析                             │
│     └─ 修复验证                             │
│                                             │
└─────────────────────────────────────────────┘
```

### 典型工作流模式

#### 模式 1: 绿驱动开发 (TDD with AI)

```
红 (Red) → 绿 (Green) → 重构 (Refactor)
  ↓          ↓            ↓
写测试    实现代码    AI 优化
(AI 生成)  (AI 生成)   (AI 建议)

循环迭代，每轮 5-10 分钟
```

**示例流程**:

```markdown
【第 1 轮 - 红】
用户：为 User 服务生成测试用例，包含以下场景:

- 正常注册
- 邮箱重复
- 密码强度不足

Agent: ✅ 生成 15 个测试用例
运行结果：❌ 0/15 通过 (预期，因为还没实现)

【第 2 轮 - 绿】
用户：现在实现 User 服务让测试通过

Agent: ✅ 实现 UserService 类
运行结果：✅ 15/15 通过

【第 3 轮 - 重构】
用户：审查代码并提出改进建议

Agent:
✅ 代码功能完整
⚠️ 可改进点:

1. 添加缓存机制提升性能
2. 使用依赖注入便于测试
3. 添加日志记录

用户：应用这些改进

Agent: ✅ 重构完成，测试仍然通过
```

#### 模式 2: 增量迭代法

```
MVP (最小可行产品)
    ↓
增强版 (添加核心功能)
    ↓
完善版 (边缘情况处理)
    ↓
生产版 (性能优化 + 监控)

每轮迭代 10-15 分钟
```

**示例流程**:

```markdown
【V1 - MVP】(10 分钟)
用户：创建一个简单的 SVG 图标组件

Agent:
✅ 基础组件 (固定尺寸，单色)
✅ 1 个测试用例

【V2 - 增强】(12 分钟)
用户：添加响应式尺寸和多色支持

Agent:
✅ 动态尺寸 (number/string)
✅ 自定义颜色
✅ 增加到 5 个测试

【V3 - 完善】(15 分钟)
用户：处理边缘情况和无障碍访问

Agent:
✅ Prop 验证
✅ aria-label 支持
✅ 错误边界
✅ 增加到 12 个测试 (覆盖率 95%)

【V4 - 生产】(10 分钟)
用户：性能优化和打包

Agent:
✅ Tree-shaking 优化
✅ 导出配置
✅ Bundle 大小分析：<3KB
✅ 准备发布
```

#### 模式 3: 问题分解法

```
复杂问题
   ↓
拆分为 3-5 个子问题
   ↓
逐个击破 (AI 辅助)
   ↓
整合验证

每个子问题 5-10 分钟
```

**示例流程**:

```markdown
【问题】构建完整的 SVG 图标库

【分解】

1. 子任务 1: 批量转换 SVG 文件 (15 分钟)
2. 子任务 2: 生成 TypeScript 定义 (10 分钟)
3. 子任务 3: 创建分类索引 (12 分钟)
4. 子任务 4: 编写单元测试 (20 分钟)
5. 子任务 5: 文档和示例 (15 分钟)

【执行】
逐个完成子任务，每完成一个就验证
最终整合：✅ 全部通过

总耗时：~1.5 小时
传统方式：2-3 天
效率提升：10-15x
```

---

## 💡 高效提问技巧

### 5W1H 提问框架

```
What    - 具体要做什么？
Why     - 为什么需要做？(背景和目标)
Where   - 在哪里使用？(上下文)
When    - 什么时候用？(使用场景)
Who     - 谁会用？(目标用户)
How     - 有什么要求？(约束条件)
```

**好例子 vs 坏例子**:

```markdown
❌ 模糊提问:
"帮我写个组件"

✅ 精确提问:
"创建一个 SVG 图标组件用于主工具栏的添加按钮

- 尺寸：默认 24px，支持 sm(16px)/lg(32px)
- 样式：线性风格，1.5px 描边
- 颜色：currentColor (跟随主题)
- 需要无障碍访问支持 (aria-label)
- 遵循 TypeDom 框架规范
- 包含完整的单元测试"
```

### 上下文注入技巧

#### 方法 1: 文档引用

```markdown
【参考项目规范】
@ai-docs/02-开发规范/AI-CODE-GENERATION.md
@ai-docs/02-开发规范/编码规范.md

【任务】
基于以上规范，创建用户登录组件...
```

#### 方法 2: 代码示例

````markdown
【现有代码风格参考】

```typescript
// 这是我们已有的组件示例
export const TdCloseSvg = defineComponent({
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: "currentColor" },
  },
  // ...
});
```
````

请按照相同风格创建添加图标组件...

````

#### 方法 3: 约束条件列表

```markdown
【必须满足的要求】
✅ 1. TypeScript 严格模式
✅ 2. 支持 tree-shaking
✅ 3. 单元测试覆盖率≥80%
✅ 4. 符合 W3C 无障碍标准
✅ 5. Bundle 大小<5KB

【可选的改进】
💡 1. 提供预设尺寸
💡 2. 支持暗色模式
💡 3. 添加过渡动画
````

---

## 🔧 实战场景

### 场景 1: 新功能开发

```
时间盒：30-45 分钟
技能组合：Skill 1 + Skill 2 + Skill 3 + Skill 4
```

**详细流程**:

```markdown
【阶段 1: 需求澄清】(5 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
用户：需要批量重命名 SVG 文件的功能

Agent 澄清:

1. 批量范围：单个文件夹还是递归子目录？
2. 命名规则：kebab-case 还是 camelCase?
3. 冲突处理：覆盖还是跳过？
4. 干运行：是否先预览变更？

用户确认:

1. 递归子目录
2. kebab-case (如 add-circle.svg)
3. 跳过并警告
4. 需要干运行模式

【阶段 2: 方案设计】(8 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Agent 设计方案:

**架构设计**:
BatchRenamer (主类)
├─ scanDirectory() // 扫描文件
├─ generateNewNames() // 生成新名称
├─ detectConflicts() // 检测冲突
├─ previewChanges() // 预览
└─ executeRename() // 执行

**算法流程**:

1. 深度优先遍历目录
2. 提取 SVG 文件名
3. 转换为 kebab-case
4. 检查命名冲突
5. 生成变更预览
6. 用户确认后执行

用户：方案很好，开始实现

【阶段 3: 增量实现】(20 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Round 1 (7 分钟):
✅ 实现 scanDirectory()
✅ 单元测试：正确扫描所有 SVG 文件

Round 2 (8 分钟):
✅ 实现 generateNewNames()
✅ 单元测试：各种命名转换正确

Round 3 (5 分钟):
✅ 实现 detectConflicts() 和 previewChanges()
✅ 集成测试：完整流程验证

【阶段 4: 审查优化】(10 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Agent 自我审查:

✅ 代码质量:

- 函数职责单一
- 错误处理完整
- 日志记录清晰

⚠️ 改进建议:

1. 添加进度条显示
2. 支持回滚操作
3. 添加 dry-run 模式

用户：添加这些改进

Agent (5 分钟):
✅ 所有改进已应用
✅ 测试仍然通过
✅ 性能测试：1000 个文件 <2 秒

【阶段 5: 文档和提交】(5 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Agent:
📝 生成 README 使用说明
📝 生成 API 文档注释
📝 生成 commit message

✅ 任务完成！
总耗时：48 分钟
交付物:

- BatchRenamer 类 (完整实现)
- 25 个单元测试 (覆盖率 96%)
- 完整文档
- Git commit
```

### 场景 2: Bug 修复

```
时间盒：15-25 分钟
技能组合：Skill 7 + Skill 4 + Skill 3
```

**详细流程**:

````markdown
【步骤 1: 问题复现】(5 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
用户：报告一个 Bug - TdAddSvg 在 Safari 上不显示

Agent 调试:

1. 请求更多信息：Safari 版本？控制台错误？
2. 提供复现步骤
3. 分析可能原因

用户补充:

- Safari 16.0
- 控制台无错误
- 其他浏览器正常
- SVG 代码：[粘贴代码]

Agent 分析:
🔍 可能原因:

1. viewBox 属性拼写错误
2. 命名空间问题
3. CSS 兼容性

【步骤 2: 根因定位】(5 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Agent 排查:

测试 1: 检查 viewBox
✅ viewBox="0 0 24 24" 正确

测试 2: 检查命名空间
❌ 发现问题：缺少 xmlns 属性

Safari 严格要求 SVG 命名空间声明

【步骤 3: 修复验证】(8 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Agent 提供修复:

```diff
- h('svg', {
+ h('svg', {
+   xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    // ...
  })
```
````

用户：应用修复并测试

Agent:
✅ 修复已应用
✅ Safari 16.0 测试通过
✅ 其他浏览器回归测试通过
✅ 添加跨浏览器测试用例

【步骤 4: 预防措施】(5 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Agent 建议:

**长期预防**:

1. ✅ 添加 SVG 命名空间检查到 lint 规则
2. ✅ 更新组件模板包含 xmlns
3. ✅ 在 CI 中加入 Safari 测试

**文档更新**:

- 更新故障处理文档
- 添加浏览器兼容性说明

✅ Bug 修复完成！
总耗时：23 分钟

```

### 场景 3: 性能优化

```

时间盒：40-60 分钟
技能组合：Skill 4 + Skill 5 + Skill 7

````

**详细流程**:

```markdown
【阶段 A: 性能分析】(15 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
用户：打包体积太大 (500KB),优化到 100KB 以内

Agent 分析:

**当前状态**:
- Total bundle: 523KB
- Common icons: 200KB
- Element Plus: 180KB
- FluentUI: 100KB
- Core: 43KB

**瓶颈识别**:
1. ❌ 全量导入所有图标
2. ❌ 未启用 tree-shaking
3. ❌ SVG 路径未压缩

【阶段 B: 优化方案】(10 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Agent 提出方案:

**优化策略**:
1. ✅ 改为按需导入 (预计 -60%)
2. ✅ 启用 tree-shaking (预计 -20%)
3. ✅ 压缩 SVG 路径 (预计 -10%)
4. ✅ 代码分割 (额外收益)

**实施计划**:
Step 1: 重构导入路径 (15 分钟)
Step 2: 配置 Vite tree-shaking (10 分钟)
Step 3: 批量压缩 SVG (8 分钟)
Step 4: 验证和测试 (10 分钟)

用户：按计划执行

【阶段 C: 逐步实施】(43 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Round 1 (15 分钟):
✅ 重构所有导入为相对路径
✅ 更新文档示例

Round 2 (10 分钟):
✅ 配置 Vite optimizeDeps
✅ 启用 build.target: 'esnext'

Round 3 (8 分钟):
✅ 运行 SVGO 批量压缩
✅ 平均减小 35%

Round 4 (10 分钟):
✅ 重新打包测试
✅ 验证功能正常

【阶段 D: 结果验证】(10 分钟)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Agent 报告:

**优化结果**:
- Before: 523KB
- After: 87KB
- Reduction: **-83%** ✅

**细分**:
- Common: 200KB → 35KB (-82%)
- Element Plus: 180KB → 32KB (-82%)
- FluentUI: 100KB → 15KB (-85%)
- Core: 43KB → 5KB (-88%)

**性能测试**:
- 初次加载：2.1s → 0.4s (-81%)
- 交互响应：120ms → 45ms (-62%)

✅ 性能优化完成！
总耗时：68 分钟
````

---

## 📊 质量保障

### 每轮检查清单

```markdown
□ 需求理解正确
□ 方案设计合理
□ 代码符合规范
□ 测试覆盖充分
□ 文档完整清晰
□ 性能达标
□ 无已知 Bug
```

### 迭代终止条件

```
满足以下任一条件即可终止迭代:

✅ 1. 所有验收标准达成
✅ 2. 边际效益递减 (<5% 改进/轮)
✅ 3. 达到时间盒上限
✅ 4. 用户明确满意

避免过度优化!
```

---

## 📈 效果度量

### 个人效率提升

| 时间段      | 任务完成数 | 平均耗时   | 满意度 |
| ----------- | ---------- | ---------- | ------ |
| **第 1 周** | 15         | 45 分钟/个 | 4.2/5  |
| **第 2 周** | 28         | 30 分钟/个 | 4.5/5  |
| **第 3 周** | 42         | 20 分钟/个 | 4.7/5  |
| **第 4 周** | 55         | 15 分钟/个 | 4.8/5  |

**提升曲线**:

```
效率提升：
Week 1: ████░░░░░░ 1x (基线)
Week 2: ██████░░░░ 1.5x
Week 3: ████████░░ 2.2x
Week 4: ██████████ 3.0x
```

### 团队效率提升

```
引入 AI 迭代工作流后:

指标                  Before    After     提升
--------------------------------------------------
需求交付周期 (天)      5.2       1.3       4x ⬆️
代码审查时间 (小时)    3.5       0.8       4.4x ⬆️
Bug 率 (个/千行)       12        4         3x ⬇️
文档完整性 (%)        45%       92%       2x ⬆️
团队满意度 (/5)       3.2       4.6       44% ⬆️
```

---

## 🔗 相关资源

### 内部文档

- [AGENT-SKILLS.md](./AGENT-SKILLS.md) - 9 大核心技能详解
- [CONTEXT-MANAGEMENT.md](./CONTEXT-MANAGEMENT.md) - 上下文管理技巧
- [AI-PROMPT-TEMPLATES.md](../00-索引与导航/AI-PROMPT-TEMPLATES.md) - 提示词模板

### 外部资源

- [OODA Loop 理论](https://en.wikipedia.org/wiki/OODA_loop)
- [Test-Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
- [Agile Iteration Best Practices](https://www.agilealliance.org/)

---

## 📝 更新日志

| 日期       | 版本   | 更新内容                           |
| ---------- | ------ | ---------------------------------- |
| 2026-03-19 | v1.0.0 | 初始版本，完整的 AI 迭代工作流指南 |

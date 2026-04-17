# Agent 技能清单

**通义灵码 Agent 在@type-dom/svgs 项目中的能力详解**

**版本**: v0.4.0  
**最后更新**: 2026-03-19

---

## 📖 引言

本文档详细列出通义灵码 Agent 在@type-dom/svgs 项目中具备的所有技能，帮助开发者:

- ✅ 了解 Agent 能做什么
- ✅ 知道何时使用哪些技能
- ✅ 掌握技能调用方法
- ✅ 理解能力边界和限制

---

## 🎯 技能分类体系

```
通义灵码 Agent 技能树
├── 代码理解类 (Code Understanding)
│   ├── 项目结构分析
│   ├── 代码依赖检测
│   ├── 设计模式识别
│   └── 架构模式识别
│
├── 代码生成类 (Code Generation)
│   ├── SVG 组件生成
│   ├── 单元测试生成
│   ├── 类型定义生成
│   └── 文档注释生成
│
├── 代码优化类 (Code Optimization)
│   ├── 代码重构
│   ├── 性能优化
│   ├── Bug 修复
│   └── 技术债务清理
│
├── 质量保证类 (Quality Assurance)
│   ├── 代码审查
│   ├── 规范检查
│   ├── 安全审计
│   └── 性能分析
│
├── 文档编写类 (Documentation)
│   ├── API 文档生成
│   ├── 使用教程编写
│   ├── 最佳实践总结
│   └── FAQ 整理
│
└── 工具调用类 (Tool Usage)
    ├── 终端命令执行
    ├── 文件读写操作
    ├── Git 操作
    └── 测试运行
```

---

## 🧠 核心技能详解

### 技能 1: 项目结构分析

**技能名称**: `codebase_analysis`

**能力描述**: 自动扫描和理解项目结构、模块组织、依赖关系

**使用场景**:

- 新成员快速了解项目
- 识别模块间依赖
- 发现架构问题
- 准备重构前的分析

**调用示例**:

```markdown
【角色】代码分析专家
【任务】分析当前项目的整体结构
【要求】

1. 扫描 src/目录结构
2. 识别主要模块和包
3. 分析模块间依赖关系
4. 生成结构可视化图表
5. 指出潜在问题

请输出详细的分析报告。
```

**预期输出**:

```
项目结构分析报告

1. 目录结构
   - src/lib/: 组件库源码
     - common/: 通用图标组件 (195 个文件)
     - element-plus/: Element Plus 图标 (247 个文件)
     - fluentui/: FluentUI 图标
   - tests/: 测试文件
   - trans-svgs/: SVG 转换脚本

2. 模块依赖关系
   [图表展示]

3. 技术栈识别
   - TypeScript 5.9.3+
   - TypeDom Framework ^0.5.0
   - Vite Plus + Tsdown

4. 发现的问题
   - ⚠️ fluentui 目录为空
   - ℹ️ 建议添加索引文件说明
```

**能力边界**:

- ✅ 能分析 TypeScript、JavaScript 项目
- ✅ 能识别常见设计模式
- ❌ 不能分析二进制文件
- ❌ 不能理解非标准语法

---

### 技能 2: SVG 组件生成

**技能名称**: `svg_component_generation`

**能力描述**: 根据 SVG 路径数据生成符合 TypeDom 规范的组件代码

**使用场景**:

- 批量创建 SVG 图标组件
- 从 Iconfont 等平台导入 SVG
- 统一组件风格
- 快速原型开发

**调用示例**:

```markdown
【角色】TypeDom Framework 专家
【任务】创建 StarSvg 星星图标组件
【参考】
@ai-docs/02-开发规范/编码规范.md
@ai-docs/02-开发规范/命名约定.md

【输入数据】

- 组件名称：StarSvg
- 分类：common
- 路径数据：M512 42.666667...
- 默认尺寸：24x24

【技术要求】

1. 继承 TypeSvgSvg 基类
2. className: 'StarSvg'
3. viewBox: '0 0 1024 1024'
4. 使用 addAttrObj 设置属性
5. 包含 JSDoc 注释
6. 导出配置到 common-index.ts

请生成完整代码。
```

**预期输出**:

````typescript
// src/lib/common/star.ts
import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";

/**
 * 星星图标组件
 *
 * @example
 * ```typescript
 * const star = new StarSvg({
 *   width: 32,
 *   height: 32,
 *   fill: '#ffd700'
 * });
 * ```
 */
export class StarSvg extends TypeSvgSvg {
  className: "StarSvg";
  override childNodes: SvgPath[];

  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "StarSvg";

    // 设置属性
    addAttrObj(this, {
      name: "StarSvg",
      viewBox: "0 0 1024 1024",
    });

    // 设置默认尺寸
    this.resetSize(24, 24);

    // 创建路径
    const path = new SvgPath({
      attrObj: { fill: "currentColor" },
    });

    path.setData("M512 42.666667...");

    // 添加子节点
    this.addChild(path);
    this.childNodes = [path];
  }
}
````

**成功率**: 95%+ (在有明确规范的情况下)

**能力边界**:

- ✅ 能生成标准 TypeDom 组件
- ✅ 能自动添加注释和类型
- ✅ 能遵循命名规范
- ❌ 不能创造原创设计 (需要输入路径数据)
- ❌ 不能处理过于复杂的路径 (>1000 字符)

---

### 技能 3: 单元测试生成

**技能名称**: `test_generation`

**能力描述**: 为指定组件生成全面的单元测试用例

**使用场景**:

- 新组件完成后自动生成测试
- 补充遗漏的测试用例
- 提高测试覆盖率
- 学习测试编写方法

**调用示例**:

````markdown
【角色】测试专家，精通 Vitest 和 TypeDom
【任务】为 HeartSvg 组件生成单元测试
【参考】
@ai-docs/02-开发规范/测试规范.md
@ai-docs/05-测试文档/单元测试指南.md

【被测组件】

```typescript
export class HeartSvg extends TypeSvgSvg {
  className: 'HeartSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) { ... }
}
```
````

【测试要求】

1. 基础功能测试 (初始化、属性)
2. 边界条件测试 (零值、负值、undefined)
3. DOM 操作测试 (mount、addChild)
4. 覆盖率要求：语句≥80%, 分支≥75%

请生成完整的测试文件。

````

**预期输出**:
```typescript
// tests/heart.spec.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { HeartSvg } from '../src/lib/common/heart';
import { TypeSvgSvg, SvgPath } from '@type-dom/framework';

describe('HeartSvg', () => {
  let svg: HeartSvg;

  beforeEach(() => {
    svg = new HeartSvg();
  });

  describe('Initialization', () => {
    it('should create instance correctly', () => {
      expect(svg).toBeInstanceOf(TypeSvgSvg);
      expect(svg.className).toBe('HeartSvg');
    });

    it('should have default viewBox', () => {
      expect(svg.viewBox).toBe('0 0 1024 1024');
    });

    it('should accept custom props', () => {
      const custom = new HeartSvg({
        width: 32,
        height: 32,
        fill: 'red'
      });
      expect(custom.width).toBe(32);
      expect(custom.height).toBe(32);
    });
  });

  describe('Child Nodes', () => {
    it('should contain SvgPath instances', () => {
      expect(svg.childNodes.length).toBeGreaterThan(0);
      svg.childNodes.forEach(path => {
        expect(path).toBeInstanceOf(SvgPath);
      });
    });
  });

  // ... 更多测试用例
});
````

**测试覆盖率**: 通常能达到 80-90%

**能力边界**:

- ✅ 能生成 Vitest/Jest测试
- ✅ 能覆盖边界条件
- ✅ 能 Mock 外部依赖
- ❌ 不能保证 100% 覆盖率
- ❌ 不能替代人工设计测试场景

---

### 技能 4: 代码审查

**技能名称**: `code_review`

**能力描述**: 全面审查代码质量，发现问题并提供改进建议

**使用场景**:

- Commit 前代码检查
- Pull Request 审查
- 代码质量评估
- 学习和改进代码

**调用示例**:

````markdown
【角色】高级代码审查专家
【参考】
@ai-docs/02-开发规范/编码规范.md
@ai-docs/02-开发规范/代码审查清单.md
@ai-docs/02-开发规范/AI-CODE-GENERATION.md

【待审查代码】

```typescript
[粘贴代码];
```
````

【审查维度】
□ 命名规范 (PascalCase/camelCase)
□ 类型安全 (避免 any, 显式类型)
□ TypeDom 集成 (正确继承)
□ 代码质量 (复杂度、重复度)
□ 注释充分性
□ 潜在 Bug

【输出要求】

1. 问题列表 (按严重程度排序)
2. 每个问题的修复建议
3. 修复后的完整代码
4. 预防类似问题的建议

请开始审查。

```

**预期输出结构**:
```

代码审查报告

🔴 严重问题 (必须修复)

1. 第 15 行：使用了显式 any 类型
   建议：定义为具体类型 SvgPath[]

🟡 重要问题 (建议修复) 2. 第 23 行：缺少 JSDoc 注释
建议：添加完整的函数注释

🟢 建议性问题 (可选优化) 3. 第 30 行：可以提取为常量
建议：将魔法数字定义为具名常量

修复后代码:
[完整代码]

预防措施:
• 启用 ESLint no-explicit-any 规则
• 配置 JSDoc 检查

````

**准确率**: ~90% (在规范明确的情况下)

**能力边界**:
- ✅ 能发现常见错误和坏味道
- ✅ 能提供具体修复方案
- ✅ 能检查规范符合性
- ❌ 不能发现所有逻辑错误
- ❌ 不能替代业务逻辑审查

---

### 技能 5: 代码重构

**技能名称**: `refactoring`

**能力描述**: 大规模代码优化、迁移和重构

**使用场景**:
- 统一代码风格
- 修改架构设计
- 提升代码质量
- 技术债务清理

**调用示例**:
```markdown
【角色】代码重构专家
【目标】将所有组件参数从 TypeProps 改为 SvgProps
【范围】src/lib/**/*.ts (约 200 个文件)
【参考】@ai-docs/02-开发规范/编码规范.md

【执行策略】
1. 分析现有代码模式 (找出所有变体)
2. 制定详细重构方案
3. 分批次执行 (每批 20 个文件)
4. 每批完成后运行测试验证
5. 更新相关类型定义

【质量要求】
□ 保持代码风格一致
□ 不破坏现有功能
□ 测试全部通过
□ 类型检查无误

请先给出详细方案，经确认后分步执行。
````

**预期输出**:

```
重构方案

Step 1: 模式分析
发现以下变体:
- params: TypeProps = {} (180 个)
- params?: TypeProps (20 个)

Step 2: 替换策略
使用正则全局替换:
params: TypeProps → params: SvgProps

Step 3: 分批执行计划
Batch 1: src/lib/common/*.ts (1-20)
Batch 2: src/lib/common/*.ts (21-40)
...

Step 4: 验证步骤
每批完成后执行:
- npm run typecheck
- npm test -- tests/common-batch.spec.ts

确认开始执行？
```

**成功率**: 85-95% (取决于复杂度)

**能力边界**:

- ✅ 能处理大规模重构
- ✅ 能保持风格一致
- ✅ 能自动化重复任务
- ❌ 需要人工确认关键步骤
- ❌ 不能处理高度复杂的依赖变更

---

### 技能 6: 文档生成

**技能名称**: `documentation_generation`

**能力描述**: 自动生成各种技术文档

**使用场景**:

- API 文档编写
- 使用教程创建
- 最佳实践总结
- Changelog 整理

**调用示例**:

```markdown
【角色】专业技术文档撰写专家
【任务】为 CommonSvgs 模块生成 API 文档
【参考】
@ai-docs/00-索引与导航/DOCUMENTATION-INDEX.md
@ai-docs/03-API 文档/接口定义.md

【文档类型】API 参考文档

【内容要求】

1. 模块说明 (功能、用途)
2. 导出清单 (所有组件列表)
3. 使用示例 (至少 3 个场景)
4. 性能考虑 (tree-shaking、按需导入)
5. 常见问题 (FAQ)

【格式要求】

- Markdown 格式
- 清晰标题层级
- 代码示例带语法高亮
- 包含类型定义

请生成文档。
```

**预期输出**:

````markdown
# CommonSvgs API Reference

## 模块说明

CommonSvgs 提供通用图标组件集合，包含加号、关闭、用户等基础图标。

## 导出清单

### TdAddSvg

加号图标组件

**类型定义**:

```typescript
class TdAddSvg extends TypeSvgSvg {
  className: "TdAddSvg";
  childNodes: SvgPath[];
  constructor(params: SvgProps = {});
}
```
````

**使用示例**:

```typescript
import { TdAddSvg } from "@type-dom/svgs/common/add";

const addIcon = new TdAddSvg({
  width: 24,
  height: 24,
});
```

## 按需导入策略

推荐方式:

```typescript
// ✅ 单个导入 (最小体积)
import { TdAddSvg } from "@type-dom/svgs/common/add";

// ⚠️ 分类导入 (中等体积)
import { TdAddSvg, TdCloseSvg } from "@type-dom/svgs/common";

// ❌ 全量导入 (最大体积)
import { TdAddSvg } from "@type-dom/svgs";
```

## FAQ

Q: 如何自定义颜色？
A: 使用 fill 属性或 CSS currentColor...

````

**能力边界**:
- ✅ 能生成结构化文档
- ✅ 能提取代码中的 API
- ✅ 能生成丰富示例
- ❌ 不能保证 100% 准确性 (需人工审核)
- ❌ 不能理解未文档化的特性

---

### 技能 7: Bug 定位与修复

**技能名称**: `bug_fixing`

**能力描述**: 诊断和修复代码缺陷

**使用场景**:
- 运行时错误排查
- 类型错误修复
- 逻辑 Bug 定位
- 性能问题优化

**调用示例**:
```markdown
【角色】Bug 诊断专家
【问题】组件渲染时报 TypeError
【环境】TypeScript 5.9.3, TypeDom ^0.5.0

【错误信息】
````

TypeError: Cannot read property 'childNodes' of undefined
at HeartSvg.mount (src/lib/common/heart.ts:25)

````

【相关代码】
```typescript
[粘贴 mount 方法代码]
````

【已尝试】

1. 检查类型定义 ✓
2. 调试输出 ✓
3. 对比其他正常组件 ✓

【请求】

1. 分析问题根源
2. 提供修复方案
3. 说明预防措施

请诊断并修复问题。

```

**预期输出**:
```

问题分析报告

🔍 根本原因
第 25 行访问 this.childNodes 时，childNodes 尚未初始化。

构造函数中:

```typescript
this.childNodes = []; // 第 30 行 - 在第 25 行之后
```

mount 方法在第 25 行就访问了 childNodes，但此时它还是 undefined。

✅ 修复方案

方案 1: 提前初始化

```typescript
constructor(params: SvgProps = {}) {
  super(params);
  this.childNodes = [];  // 移到最前面
  // ... 其他代码
}
```

方案 2: 空值检查

```typescript
mount(container: HTMLElement) {
  if (!this.childNodes) return;
  // ... 其他代码
}
```

推荐方案 1，符合 TypeDom 最佳实践。

🛡️ 预防措施
• 在构造函数开头初始化所有属性
• 启用 strictPropertyInitialization
• 添加单元测试覆盖初始化场景

````

**成功率**: ~85%

**能力边界**:
- ✅ 能分析常见错误类型
- ✅ 能提供多种修复方案
- ✅ 能说明预防措施
- ❌ 不能解决所有问题
- ❌ 复杂并发问题需要人工介入

---

## 🔧 工具调用技能

### 技能 8: 终端命令执行

**技能名称**: `terminal_execution`

**能力描述**: 在授权下执行终端命令

**可用命令类型**:
```bash
# ✅ 允许的命令
npm run build          # 构建项目
npm test               # 运行测试
npm run typecheck      # 类型检查
npm run lint           # 代码检查
git status             # Git 状态
ls, dir                # 查看文件
cat, less              # 查看文件内容

# ❌ 禁止的命令
rm, del                # 删除文件
sudo                   # 提权命令
wget, curl             # 下载文件 (除非明确允许)
````

**调用示例**:

```markdown
【任务】验证项目构建是否正常
【权限】只读命令 + 构建命令

请执行以下步骤:

1. 检查项目结构
2. 运行类型检查
3. 执行生产构建
4. 报告结果
```

**安全机制**:

- ✅ 需要明确授权才能执行
- ✅ 危险命令会拒绝执行
- ✅ 执行前会告知用户
- ✅ 执行后会报告结果

---

### 技能 9: 文件读写

**技能名称**: `file_operations`

**能力描述**: 读取和写入项目文件

**读操作**:

```markdown
【任务】读取 src/lib/common/index.ts 文件
【目的】了解当前导出了哪些组件

请读取并分析文件内容。
```

**写操作** (需确认):

```markdown
【任务】创建新的 SVG 组件文件
【文件路径】src/lib/common/star.ts
【内容】[AI 生成的代码]

⚠️ 注意：即将写入文件，是否继续？
[Y] 确认 [N] 取消
```

**权限控制**:

- ✅ 读取操作通常自动执行
- ✅ 写入操作需要确认
- ✅ 敏感文件禁止写入 (如 .env, package.json 等)
- ✅ 批量修改需要明确授权

---

## 📊 技能使用统计

### 高频技能 (每天使用)

| 技能         | 使用频率    | 平均节省时间 | 满意度 |
| ------------ | ----------- | ------------ | ------ |
| SVG 组件生成 | 20-30 次/天 | 15 分钟/次   | 4.8/5  |
| 单元测试生成 | 10-15 次/天 | 10 分钟/次   | 4.7/5  |
| 代码审查     | 5-10 次/天  | 5 分钟/次    | 4.6/5  |
| 提示词模板   | 30-50 次/天 | 3 分钟/次    | 4.9/5  |

### 中频技能 (每周使用)

| 技能     | 使用频率   | 平均节省时间 | 满意度 |
| -------- | ---------- | ------------ | ------ |
| 代码重构 | 2-5 次/周  | 2 小时/次    | 4.5/5  |
| Bug 修复 | 5-10 次/周 | 30 分钟/次   | 4.4/5  |
| 文档生成 | 3-5 次/周  | 1 小时/次    | 4.6/5  |

### 低频技能 (每月使用)

| 技能     | 使用频率  | 平均节省时间 | 满意度 |
| -------- | --------- | ------------ | ------ |
| 项目分析 | 1-2 次/月 | 4 小时/次    | 4.7/5  |
| 架构咨询 | 1-2 次/月 | 2 小时/次    | 4.3/5  |

---

## 🎯 技能组合使用

### 组合 1: 新组件开发流程

```
1. 项目结构分析 (了解现有组件)
   ↓
2. SVG 组件生成 (创建新组件)
   ↓
3. 单元测试生成 (编写测试)
   ↓
4. 代码审查 (质量检查)
   ↓
5. 文档生成 (更新 API 文档)
```

**总耗时**: 30 分钟 (传统方式：4 小时)  
**效率提升**: 8x

### 组合 2: 批量重构流程

```
1. 项目结构分析 (识别影响范围)
   ↓
2. 代码重构 (分批次执行)
   ↓
3. 终端命令执行 (运行测试验证)
   ↓
4. Bug 修复 (处理失败测试)
   ↓
5. 文档生成 (更新变更记录)
```

**总耗时**: 2 小时 (传统方式：2 天)  
**效率提升**: 8x

### 组合 3: 质量问题排查

```
1. 代码审查 (发现问题)
   ↓
2. Bug 定位与修复 (诊断修复)
   ↓
3. 单元测试生成 (补充测试)
   ↓
4. 终端命令执行 (验证修复)
   ↓
5. 文档生成 (记录经验)
```

**总耗时**: 1 小时 (传统方式：半天)  
**效率提升**: 4x

---

## ⚠️ 能力边界与限制

### 擅长领域 ✅

- ✅ **模式化任务**: SVG 组件生成、测试编写
- ✅ **规范驱动**: 有明确规范的任务
- ✅ **重复劳动**: 批量修改、格式化
- ✅ **知识检索**: 查找文档、最佳实践
- ✅ **初步审查**: 代码审查、质量检查

### 不擅长领域 ❌

- ❌ **创造性设计**: 原创图标设计、架构创新
- ❌ **复杂决策**: 涉及多方权衡的技术选型
- ❌ **模糊需求**: 需求不明确、频繁变更
- ❌ **高度上下文**: 需要深厚业务背景
- ❌ **紧急故障**: 生产事故应急处理

### 需要人工介入的场景

```
👤 必须人工确认:
• 重大架构变更
• API 破坏性变更
• 安全风险修复
• 性能关键路径优化
• 核心算法实现

👤 建议人工审核:
• AI 生成的所有代码
• 测试用例的业务逻辑
• 文档的准确性
• 重构方案的完整性

👤 可以完全自动化:
• 标准组件生成
• 格式化调整
• 简单 Bug 修复
• 文档初稿生成
```

---

## 📈 持续学习与改进

### Agent 学习机制

```
1. 从文档学习
   - 阅读 ai-docs/下所有文档
   - 提取规范和最佳实践
   - 更新内部知识库

2. 从反馈学习
   - 收集用户评分
   - 分析失败案例
   - 调整生成策略

3. 从代码学习
   - 分析优秀代码模式
   - 提取共同特征
   - 应用到新任务
```

### 如何帮助 Agent 改进

```markdown
✅ 有效反馈:
"这段代码的命名不符合规范，应该使用 PascalCase"
"测试覆盖率不够，需要补充边界条件测试"

❌ 无效反馈:
"不好" (太模糊)
"重新生成" (没有方向)
```

---

## 🔗 相关资源

### 内部文档

- [`00-索引与导航/AI-PROMPT-TEMPLATES.md`](../00-索引与导航/AI-PROMPT-TEMPLATES.md) - 提示词模板
- [`02-开发规范/AI-CODE-GENERATION.md`](../02-开发规范/AI-CODE-GENERATION.md) - 代码生成规范
- [`07-LINGMA-CONFIGURATION.md`](./LINGMA-CONFIGURATION.md) - 配置指南

### 使用技巧

- 明确角色定位
- 引用相关文档
- 提供充分上下文
- 分步执行复杂任务
- 及时给予反馈

---

**版本**: v0.4.0  
**维护者**: xjf <xjf7711@qq.com>  
**最后更新**: 2026-03-19

# AI 代码生成规范

**如何高效使用通义灵码 Agent 生成高质量代码**

**版本**: v0.4.0  
**最后更新**: 2026-03-19  

---

## 📖 引言

在@type-dom/svgs 项目中，AI 代码生成已成为核心生产力。本规范帮助团队成员:

- ✅ 掌握高效的 AI 提问技巧
- ✅ 生成符合项目规范的代码
- ✅ 建立人机协作的最佳实践
- ✅ 持续提升代码生成质量

---

## 🎯 核心原则

### 1. 精准输入 → 精准输出

```
Garbage In, Garbage Out (GIGO)

❌ 模糊的提示词 → 低质量的代码
✅ 精准的提示词 → 高质量的代码
```

**示例对比**:

```markdown
❌ 低效提示词:
"帮我写个 SVG 组件"

✅ 高效提示词:
【角色】TypeDom Framework 专家
【任务】创建 StarSvg 星星图标组件
【参考】@技术栈.md @编码规范.md @命名约定.md
【要求】
- 继承 TypeSvgSvg 基类
- className: 'StarSvg'
- viewBox: '0 0 1024 1024'
- 默认尺寸：24x24
- 支持 width, height, fill 自定义
- 包含完整 JSDoc 注释
- 生成单元测试
【路径数据】M512 42.666667...
```

### 2. 文档引用 → 规范一致

```
始终引用相关文档，确保生成的代码符合项目规范

必须引用的文档:
- @技术栈.md - 了解技术选型
- @编码规范.md - 遵循代码风格
- @命名约定.md - 使用正确命名
- @接口定义.md - 符合 API 设计
```

### 3. 分步执行 → 可控过程

```
复杂任务分解为多个步骤，每步确认后继续

Step 1: 设计方案确认
   ↓ (人工审核通过)
Step 2: 生成基础代码
   ↓ (人工审核通过)
Step 3: 编写单元测试
   ↓ (测试通过)
Step 4: 生成文档
   ↓ (文档完善)
完成
```

### 4. 验证闭环 → 质量保证

```
AI 生成 ≠ 直接使用

必须经过:
□ 人工审核（逻辑、架构）
□ 类型检查（tsc --noEmit）
□ 单元测试（npm test）
□ 代码审查（vp check）
```

---

## 🔧 通义灵码配置

### 基础配置

```yaml
# .lingma-config.yaml
version: "1.0"

agent:
  mode: "agentic"           # 必须：智能体模式
  auto_perception: true     # 自动感知项目结构
  tool_calling: true        # 允许调用工具
  terminal_execution: true  # 允许执行终端命令

knowledge_base:
  enabled: true             # 启用知识库
  auto_index: true          # 自动索引文档
  doc_path: "./ai-docs"     # 文档路径
```

### IDE 插件设置

```
VS Code / JetBrains IDEs:

1. 安装通义灵码插件 (版本 ≥ 2.5.4)
2. 设置 → 通义灵码 → 开启以下选项:
   □ 工程自动感知 ✓
   □ 文件引用功能 ✓
   □ 终端命令执行 ✓
   □ 智能体规划 ✓
```

---

## 📝 提示词工程

### 提示词结构模板

```markdown
【角色】[定义 AI 的专业领域和身份]

【参考文档】
@[文档 1].md
@[文档 2].md
@[文档 3].md

【任务描述】
[清晰、具体地描述需要完成的任务]

【约束条件】
- 必须遵循 [规范 1]
- 必须符合 [标准 2]
- 禁止使用 [技术/方法 3]

【输出要求】
1. [输出内容 1]
2. [输出内容 2]
3. [输出内容 3]

【执行方式】
- 分步骤执行
- 每步确认后继续
- 先给出方案，再实现代码
```

### 常用角色定义

```typescript
// TypeDom 开发场景
【角色】你是资深 TypeScript 前端工程师，精通 TypeDom Framework ^0.5.0

// 测试编写场景
【角色】你是测试专家，擅长 Vitest 和 TypeDom 项目测试

// 代码审查场景
【角色】你是代码审查专家，专注于 TypeScript 类型安全和代码质量

// 文档编写场景
【角色】你是专业技术文档撰写专家，擅长前端技术文档

// 重构优化场景
【角色】你是代码重构专家，擅长大规模代码优化和迁移
```

### 上下文注入技巧

#### 1. 文档引用法

```markdown
【参考文档】
@ai-docs/01-项目概述/技术栈.md      # 了解技术栈
@ai-docs/02-开发规范/编码规范.md    # 遵循编码规范
@ai-docs/03-API 文档/接口定义.md     # 符合 API 设计
@ai-docs/05-测试文档/测试规范.md    # 测试要求
```

#### 2. 示例代码法

```markdown
【参考示例】
类似功能的实现请参考:
src/lib/common/add.ts - AddSvg 组件
src/lib/common/close.ts - CloseSvg 组件

保持代码风格一致
```

#### 3. 背景信息法

```markdown
【项目背景】
@type-dom/svgs 是基于 TypeDom Framework 的 SVG 组件库
- TypeScript 5.9.3+ (严格模式)
- 所有组件继承自 TypeSvgSvg
- 统一使用 viewBox="0 0 1024 1024"
- 默认尺寸 24x24 像素
- 支持按需导入和 tree-shaking
```

---

## 💻 典型场景实践

### 场景 1: SVG 组件开发

```markdown
【角色】TypeDom Framework 和 SVG 封装专家

【参考文档】
@ai-docs/01-项目概述/技术栈.md
@ai-docs/02-开发规范/编码规范.md
@ai-docs/02-开发规范/命名约定.md
@ai-docs/03-API 文档/数据模型.md

【任务】创建 HeartSvg 心形图标组件

【组件信息】
- 组件名称：HeartSvg
- 分类：common
- 文件路径：src/lib/common/heart.ts
- SVG 路径：[粘贴 path d 属性]

【技术要求】
1. 继承 TypeSvgSvg 基类
2. className: 'HeartSvg'
3. viewBox: '0 0 1024 1024'
4. 默认尺寸：24x24
5. 支持自定义 width, height, fill
6. childNodes 类型：SvgPath[]
7. 使用 addAttrObj 设置属性
8. 完整的 JSDoc 注释

【输出内容】
1. 组件源码：src/lib/common/heart.ts
2. 单元测试：tests/heart.spec.ts
3. 导出配置：更新 src/lib/common-index.ts

请分步执行，每步确认后继续。
```

**预期输出**:
- ✅ 完整的组件代码
- ✅ 符合命名规范
- ✅ 类型定义准确
- ✅ 包含 JSDoc 注释
- ✅ 附带单元测试

---

### 场景 2: 批量重构

```markdown
【角色】代码重构专家，擅长大规模代码迁移

【参考文档】
@ai-docs/02-开发规范/编码规范.md
@ai-docs/01-项目概述/技术栈.md

【重构目标】
将所有组件构造函数参数从 `params: TypeProps = {}` 
改为 `params: SvgProps = {}`

【影响范围】
- 源文件：src/lib/**/*.ts (约 200 个文件)
- 测试文件：tests/**/*.spec.ts
- 类型定义：src/lib/*.d.ts

【执行策略】
1. 分析现有代码模式（找出所有变体）
2. 制定详细重构方案
3. 分批次执行（每批 20 个文件）
4. 每批完成后运行测试验证
5. 更新类型定义

【质量要求】
□ 保持代码风格一致
□ 不破坏现有功能
□ 测试全部通过
□ 类型检查无误
□ 提交历史清晰

请先给出详细方案，经确认后分步执行。
```

**预期输出**:
- ✅ 详细的重构计划
- ✅ 分批执行脚本
- ✅ 自动化测试验证
- ✅ 完整的提交记录

---

### 场景 3: 测试生成

```markdown
【角色】测试专家，专注于 Vitest 和 TypeDom 项目

【参考文档】
@ai-docs/02-开发规范/测试规范.md
@ai-docs/05-测试文档/单元测试指南.md
@ai-docs/05-测试文档/测试用例库.md

【被测组件】
```typescript
import { SvgProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';

export class UserSvg extends TypeSvgSvg {
  className: 'UserSvg';
  override childNodes: SvgPath[];
  
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'UserSvg';
    // ... 实现代码
  }
}
```

【测试要求】
1. **基础功能测试**
   - 默认初始化
   - 自定义属性
   - className 验证

2. **边界条件测试**
   - 零值/负值处理
   - undefined/null
   - 极大值

3. **DOM 操作测试**
   - mount/unmount
   - addChild/removeChild
   - 属性更新

4. **覆盖率要求**
   - 语句 ≥ 80%
   - 分支 ≥ 75%
   - 函数 ≥ 90%

【输出】完整的测试文件 tests/user.spec.ts
```

**预期输出**:
- ✅ 全面的测试用例
- ✅ 符合测试规范
- ✅ 覆盖率达到要求
- ✅ 可执行的测试代码

---

### 场景 4: 文档生成

```markdown
【角色】专业技术文档撰写专家

【参考文档】
@ai-docs/00-索引与导航/DOCUMENTATION-INDEX.md
@ai-docs/01-项目概述/技术栈.md
@ai-docs/03-API 文档/接口定义.md

【任务】为 CommonSvgs 模块生成 API 文档

【文档类型】API 参考文档

【内容要求】
1. 模块说明（功能、用途）
2. 导出清单（所有导出的组件）
3. 使用示例（至少 3 个场景）
4. 性能考虑（tree-shaking、按需导入）
5. 常见问题（FAQ）

【格式要求】
- Markdown 格式
- 清晰的标题层级
- 代码示例带语法高亮
- 包含类型定义

【输出】docs/api-common-svgs.md
```

**预期输出**:
- ✅ 结构清晰的文档
- ✅ 完整的 API 说明
- ✅ 丰富的使用示例
- ✅ 准确的类型定义

---

## 🧪 质量验证

### 验证清单

```
代码生成后，必须完成以下验证:

□ 类型检查
  $ npm run typecheck
  ✓ 无编译错误
  ✓ 无类型警告

□ 单元测试
  $ npm test
  ✓ 所有测试通过
  ✓ 覆盖率达标

□ 代码审查
  $ vp check
  ✓ 符合编码规范
  ✓ 无 lint 错误

□ 人工审核
  ✓ 逻辑正确
  ✓ 架构合理
  ✓ 性能达标
  ✓ 可维护性好
```

### 质量评估标准

```typescript
interface CodeQualityMetrics {
  // 规范符合性 (30%)
  namingConvention: boolean;      // 命名规范
  codeStyle: boolean;             // 代码风格
  comments: boolean;              // 注释完整
  
  // 类型安全 (30%)
  typeDefinition: boolean;        // 类型定义
  noExplicitAny: boolean;         // 无显式 any
  genericsUsage: boolean;         // 泛型使用
  
  // 可维护性 (20%)
  readability: number;            // 可读性评分 1-10
  modularity: number;             // 模块化程度 1-10
  complexity: number;             // 复杂度 1-10 (越低越好)
  
  // 测试覆盖 (20%)
  statementCoverage: number;      // 语句覆盖率
  branchCoverage: number;         // 分支覆盖率
  functionCoverage: number;       // 函数覆盖率
}

// 综合评分 ≥ 85 分才能合并
const totalScore = calculateScore(metrics);
if (totalScore >= 85) {
  merge();
} else {
  requestChanges();
}
```

---

## 📊 效果评估

### 个人效率提升

| 任务类型 | 传统方式 | AI 辅助 | 提升幅度 |
|---------|---------|--------|---------|
| **SVG 组件开发** | 2 小时/个 | 15 分钟/个 | 8x |
| **单元测试编写** | 1 小时/个 | 10 分钟/个 | 6x |
| **文档编写** | 3 小时/篇 | 30 分钟/篇 | 6x |
| **代码审查** | 30 分钟/次 | 5 分钟/次 | 6x |
| **Bug 修复** | 1 小时/个 | 10 分钟/个 | 6x |

### 团队整体收益

| 指标 | 实施前 | 实施后 | 提升 |
|-----|-------|--------|------|
| **迭代速度** | 2 周/版本 | 3 天/版本 | 4.6x |
| **代码质量** | 70 分 | 92 分 | +31% |
| **文档覆盖率** | 40% | 95% | +137% |
| **新人上手** | 2 周 | 3 天 | 4.6x |
| **团队满意度** | 3.5/5 | 4.7/5 | +34% |

---

## 🚨 常见错误与避免

### 错误 1: 提示词过于模糊

```markdown
❌ 错误示例:
"帮我优化这个代码"

✅ 正确示例:
【任务】优化以下函数的性能，目标是减少 50% 执行时间
【当前代码】[粘贴代码]
【性能瓶颈】循环次数过多，时间复杂度 O(n²)
【优化方向】使用 Map 替代数组查找
【验证方法】运行性能测试 benchmarks/perf.ts
```

### 错误 2: 缺少必要上下文

```markdown
❌ 错误示例:
"为什么这个代码不工作？"
[只粘贴了代码片段]

✅ 正确示例:
【问题】代码运行时抛出 TypeError
【环境】TypeScript 5.9.3, TypeDom ^0.5.0, Node 20.x
【错误信息】TypeError: Cannot read property 'childNodes' of undefined
【相关代码】[完整代码，包括导入和上下文]
【已尝试】1. 检查类型定义 2. 调试输出
【请求】帮助定位问题根源并提供修复方案
```

### 错误 3: 一次性要求过多

```markdown
❌ 错误示例:
"帮我重构整个项目，包括:
- 修改目录结构
- 重命名所有文件
- 更新所有导入
- 重写所有测试
- 生成新文档
现在就开始"

✅ 正确示例:
【长期目标】重构整个项目（预计 2 周完成）

【第一阶段】本周任务：重构 src/lib 目录结构
□ Step 1: 分析现有结构 (AI 完成)
□ Step 2: 设计新结构 (AI 提案，人工审核)
□ Step 3: 分批次移动文件 (AI 脚本，人工确认)
□ Step 4: 更新导入路径 (AI 完成)
□ Step 5: 运行测试验证 (AI + 人工)

请先执行 Step 1，完成后汇报结果。
```

### 错误 4: 忽视质量验证

```markdown
❌ 错误做法:
AI 生成代码 → 直接提交

✅ 正确流程:
AI 生成代码
    ↓
人工审核（逻辑、架构）
    ↓
类型检查（tsc --noEmit）
    ↓
单元测试（npm test）
    ↓
代码审查（vp check）
    ↓
性能测试（可选）
    ↓
提交合并
```

---

## 🎓 持续改进

### 个人提升路径

#### Level 1: 初学者 (Week 1-2)

- [ ] 安装并配置通义灵码
- [ ] 学习基本提示词结构
- [ ] 完成简单任务（单个组件开发）
- [ ] 理解质量验证流程

#### Level 2: 进阶者 (Week 3-4)

- [ ] 掌握上下文注入技巧
- [ ] 能够分解复杂任务
- [ ] 编写定制化提示词
- [ ] 指导其他初学者

#### Level 3: 专家级 (Month 2+)

- [ ] 创造新的提示词模式
- [ ] 优化 AI 工作流程
- [ ] 建立团队最佳实践
- [ ] 贡献提示词模板库

### 团队改进机制

```
每周:
□ 收集团队成员反馈
□ 整理优秀案例
□ 更新提示词模板

每月:
□ 效果评估报告
□ 流程优化建议
□ 培训和分享

每季度:
□ 工具升级评估
□ 方法论总结
□ 对外输出经验
```

---

## 📚 相关资源

### 内部文档

- [`00-索引与导航/AI-PROMPT-TEMPLATES.md`](../00-索引与导航/AI-PROMPT-TEMPLATES.md) - 提示词模板库
- [`07-AI 专项文档/LINGMA-CONFIGURATION.md`](../07-AI 专项文档/LINGMA-CONFIGURATION.md) - 通义灵码配置
- [`07-AI 专项文档/AGENT-SKILLS.md`](../07-AI 专项文档/AGENT-SKILLS.md) - Agent 技能清单

### 外部资源

- **通义灵码官方文档**: https://lingma.aliyun.com/
- **LingMa.md 完整指南**: /Users/jianfengxu/Documents/MY-GIT/nx-workspace/LingMa.md
- **提示词工程指南**: https://platform.openai.com/docs/guides/prompt-engineering

---

## ✍️ 附录：快速参考卡片

### 提示词检查清单

```
发送提示词前检查:

□ 角色定义是否清晰？
□ 参考文档是否充分？
□ 任务描述是否具体？
□ 约束条件是否明确？
□ 输出要求是否详细？
□ 执行方式是否合理？
```

### 常用命令速查

```bash
# 类型检查
npm run typecheck

# 运行测试
npm test
npm test -- --watch        # 监听模式
npm test -- tests/foo.spec.ts  # 指定文件

# 代码审查
vp check
vp check --fix            # 自动修复

# 构建验证
npm run build
```

### 质量红线

```
以下情况绝对不能合并:

❌ 类型检查失败
❌ 单元测试未通过
❌ 覆盖率不达标
❌ 有严重 lint 错误
❌ 人工审核不通过
```

---

**版本**: v0.4.0  
**维护者**: xjf <xjf7711@qq.com>  
**最后更新**: 2026-03-19

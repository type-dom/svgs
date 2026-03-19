# 通义灵码配置指南

**LingMa IDE 插件和 Agent 配置详解**

**版本**: v0.4.0  
**最后更新**: 2026-03-19  

---

## 📖 引言

本指南详细介绍如何在@type-dom/svgs 项目中配置和使用通义灵码 (LingMa) Agent，包括:

- ✅ 插件安装和配置
- ✅ 项目配置文件
- ✅ 知识库设置
- ✅ 最佳实践

---

## 🔧 环境要求

### 最低要求

| 组件 | 版本 | 说明 |
|------|------|------|
| **IDE** | VS Code 1.85+ / JetBrains 2023.3+ | 主流 IDE |
| **通义灵码插件** | 2.5.4+ | 必须支持智能体模式 |
| **Node.js** | 18.x+ | LTS 版本 |
| **TypeScript** | 5.9.3+ | 项目要求 |

### 推荐配置

| 组件 | 版本 | 说明 |
|------|------|------|
| **IDE** | VS Code 1.90+ / JetBrains 2024.1+ | 最新版本 |
| **通义灵码插件** | 最新稳定版 | 获取最新功能 |
| **Node.js** | 20.x+ | 最新 LTS |
| **内存** | ≥ 8GB | 更好的 AI 体验 |

---

## 📦 安装步骤

### Step 1: 安装通义灵码插件

#### VS Code 安装

```
1. 打开 VS Code
2. 进入扩展市场 (Ctrl+Shift+X 或 Cmd+Shift+X)
3. 搜索 "通义灵码" 或 "LingMa"
4. 点击安装
5. 重启 VS Code
```

#### JetBrains IDEs 安装

```
1. 打开 IntelliJ IDEA / WebStorm
2. File → Settings → Plugins (或 Ctrl+Alt+S)
3. Marketplace 标签页
4. 搜索 "通义灵码"
5. 点击 Install
6. 重启 IDE
```

### Step 2: 验证安装

```
安装成功后:
✅ IDE 状态栏显示通义灵码图标
✅ 右键菜单出现通义灵码选项
✅ 可以使用快捷键唤起对话窗口
```

### Step 3: 登录账号

```
1. 点击通义灵码图标
2. 扫码登录阿里云账号
3. 完成登录验证
```

---

## ⚙️ 基础配置

### IDE 插件设置

```yaml
# VS Code: 设置 → 通义灵码

# ========== 智能体设置 ==========
lingma.agent.mode: "agentic"          # 启用智能体模式
lingma.agent.auto_perception: true    # 自动感知工程结构
lingma.agent.tool_calling: true       # 允许调用工具
lingma.agent.terminal_execution: true # 允许执行终端命令

# ========== 代码补全 ==========
lingma.completion.enabled: true       # 启用智能代码补全
lingma.completion.trigger_mode: "auto" # 自动触发

# ========== 对话设置 ==========
lingma.chat.enabled: true             # 启用对话功能
lingma.chat.auto_context: true        # 自动添加上下文

# ========== 文件引用 ==========
lingma.reference.enabled: true        # 启用@引用功能
lingma.reference.max_files: 10        # 最多引用 10 个文件
```

### 快捷键配置

```json
// VS Code keybindings.json
[
  {
    "key": "ctrl+shift+l",
    "command": "lingma.chat.open",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+a",
    "command": "lingma.agent.start",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+c",
    "command": "lingma.completion.trigger",
    "when": "editorTextFocus"
  }
]
```

---

## 📋 项目配置文件

### .lingma-config.yaml

在项目根目录创建此文件:

```yaml
# .lingma-config.yaml
# 通义灵码项目配置文件

version: "1.0"

# ========== 项目信息 ==========
project:
  name: "@type-dom/svgs"
  description: "基于 TypeDom Framework 的 SVG 组件库"
  language: ["TypeScript"]
  framework: ["TypeDom"]
  version: "0.4.0"

# ========== Agent 配置 ==========
agent:
  mode: "agentic"                    # 智能体模式
  auto_perception: true              # 自动工程感知
  tool_calling: true                 # 工具调用
  terminal_execution: true           # 终端命令执行
  max_loops: 5                       # 最大迭代次数
  
  # 工具权限
  tools:
    file_read: true                  # 读取文件
    file_write: true                 # 写入文件（需确认）
    terminal: true                   # 终端执行
    web_search: false                # 网络搜索（可选）

# ========== 知识库配置 ==========
knowledge_base:
  enabled: true                      # 启用知识库
  auto_index: true                   # 自动索引
  doc_path: "./ai-docs"              # 文档存储路径
  vector_store: "local"              # 向量存储类型
  chunk_size: 1000                   # 文档分块大小
  overlap: 200                       # 重叠字符数
  
  # 索引配置
  index:
    include:
      - "ai-docs/**/*.md"            # 包含的文档
      - "src/**/*.ts"                # 源码文件
      - "README.md"                  # 项目说明
    exclude:
      - "node_modules/**"            # 排除依赖
      - "dist/**"                    # 排除构建产物
      - "*.spec.ts"                  # 排除测试文件

# ========== 代码生成配置 ==========
generation:
  code_style: "typescript-strict"    # 代码风格
  strict_mode: true                  # 严格模式
  auto_import: true                  # 自动导入
  generate_tests: true               # 生成测试
  test_framework: "vitest"           # 测试框架
  test_coverage_target: 80           # 测试覆盖率目标
  
  # 注释规范
  comments:
    jsdoc: true                      # JSDoc 注释
    language: "zh-CN"                # 注释语言
    detailed: true                   # 详细注释

# ========== 质量门禁 ==========
quality_gate:
  enabled: true                      # 启用质量门禁
  type_check: true                   # 类型检查
  lint_check: true                   # Lint 检查
  test_required: true                # 必须测试
  coverage_threshold: 70             # 覆盖率阈值
  
  # 审查规则
  review:
    naming_convention: true          # 命名约定
    code_complexity: true            # 代码复杂度
    security_check: true             # 安全检查

# ========== 上下文管理 ==========
context:
  max_tokens: 8192                   # 最大上下文长度
  auto_summary: true                 # 自动摘要
  history_enabled: true              # 启用历史记忆
  session_timeout: 3600              # 会话超时（秒）

# ========== 日志和调试 ==========
logging:
  level: "info"                      # 日志级别：debug|info|warn|error
  file: ".lingma/lingma.log"         # 日志文件路径
  
# ========== 高级配置 ==========
advanced:
  experimental_features: false       # 实验性功能
  custom_prompts: []                 # 自定义提示词
  api_endpoint: ""                   # 自定义 API 端点（如有）
```

---

## 🧠 知识库配置

### 文档向量化

```bash
# 手动触发文档索引
npx lingma-cli index --path ./ai-docs

# 查看索引状态
npx lingma-cli status

# 重建索引（强制刷新）
npx lingma-cli rebuild
```

### 文档优先级

```yaml
# ai-docs/.lingma-priority.yaml
# 文档优先级配置

high_priority:
  - "00-索引与导航/DOCUMENTATION-INDEX.md"
  - "01-项目概述/技术栈.md"
  - "02-开发规范/编码规范.md"
  - "02-开发规范/AI-CODE-GENERATION.md"

medium_priority:
  - "03-API 文档/*.md"
  - "05-测试文档/*.md"
  - "07-AI 专项文档/*.md"

low_priority:
  - "08-架构决策记录/*.md"
  - "GENERATED/**/*.md"
```

---

## 🤖 Agent 技能配置

### 可用技能清单

```yaml
# .lingma/skills.yaml
skills:
  # ========== 代码理解 ==========
  - name: "code_analysis"
    enabled: true
    description: "分析代码结构、依赖关系、设计模式"
    
  - name: "architecture_detection"
    enabled: true
    description: "识别架构模式和分层结构"
    
  # ========== 代码生成 ==========
  - name: "component_generation"
    enabled: true
    description: "生成 TypeDom 组件代码"
    
  - name: "test_generation"
    enabled: true
    description: "生成单元测试代码"
    
  - name: "documentation_generation"
    enabled: true
    description: "生成技术文档"
    
  # ========== 代码优化 ==========
  - name: "refactoring"
    enabled: true
    description: "代码重构和优化"
    
  - name: "bug_fixing"
    enabled: true
    description: "Bug 定位和修复"
    
  # ========== 质量检查 ==========
  - name: "code_review"
    enabled: true
    description: "代码审查和质量评估"
    
  - name: "security_audit"
    enabled: true
    description: "安全漏洞检测"
```

---

## 💻 使用示例

### 示例 1: 生成 SVG 组件

**操作步骤**:

```
1. 打开通义灵码对话窗口 (Ctrl+Shift+L)
2. 输入以下提示词:

【角色】TypeDom Framework 专家
【任务】创建 HeartSvg 心形图标组件
【参考】
@ai-docs/01-项目概述/技术栈.md
@ai-docs/02-开发规范/编码规范.md
@ai-docs/02-开发规范/命名约定.md

【要求】
- 继承 TypeSvgSvg 基类
- className: 'HeartSvg'
- viewBox: '0 0 1024 1024'
- 默认尺寸：24x24
- 包含完整 JSDoc 注释
- 生成单元测试

【路径数据】M512 42.666667...

3. 等待 AI 生成代码
4. 审查生成的代码
5. 接受并保存到正确位置
```

### 示例 2: 代码审查

**操作步骤**:

```
1. 打开待审查的文件
2. 选中代码片段
3. 右键 → 通义灵码 → 代码审查
4. 或使用快捷键唤起对话
5. 输入:

【角色】代码审查专家
【参考】@ai-docs/02-开发规范/代码审查清单.md
【任务】审查选中的代码
【要求】
- 检查命名规范
- 检查类型安全
- 检查代码质量
- 提供改进建议

6. 查看审查报告
7. 根据建议修改代码
```

### 示例 3: 批量重构

**操作步骤**:

```
1. 打开通义灵码对话
2. 输入重构请求:

【角色】代码重构专家
【目标】将所有组件的参数类型从 TypeProps 改为 SvgProps
【范围】src/lib/**/*.ts
【参考】@ai-docs/02-开发规范/编码规范.md

【执行策略】
1. 先分析现有代码模式
2. 制定详细重构方案
3. 分批次执行（每批 20 个文件）
4. 每批完成后运行测试验证

请先给出方案，经确认后执行。

3. AI 生成重构方案
4. 人工审核方案
5. 确认后开始执行
6. 每步完成后确认继续
```

---

## 🔍 故障排查

### 常见问题

#### 问题 1: 插件无法加载

**症状**: 通义灵码图标不显示，菜单项灰色

**解决方案**:
```
1. 检查 IDE 版本是否符合要求
2. 重启 IDE
3. 重新安装插件
4. 查看日志：Help → Show Log
```

#### 问题 2: Agent 无法感知项目

**症状**: AI 不了解项目结构，回答不准确

**解决方案**:
```
1. 确保 .lingma-config.yaml 存在
2. 检查 knowledge_base.enabled = true
3. 手动触发索引：npx lingma-cli index
4. 重启通义灵码插件
```

#### 问题 3: 代码生成不符合预期

**症状**: 生成的代码风格不一致或有错误

**解决方案**:
```
1. 在提示词中明确引用相关文档
2. 提供更具体的约束条件
3. 使用示例代码说明期望风格
4. 分步执行，及时纠正方向
```

#### 问题 4: 性能问题

**症状**: 响应慢，卡頓

**解决方案**:
```
1. 减少单次引用的文档数量（3-5 个为宜）
2. 避免过长的提示词
3. 关闭不必要的后台进程
4. 增加 IDE 内存限制
```

---

## 📊 效果评估

### 使用统计

```bash
# 查看使用情况
npx lingma-cli stats

# 输出示例:
本周使用统计:
- 对话次数：156
- 代码生成：45 次
- 代码审查：23 次
- 测试生成：18 次
- 文档编写：12 次
- 平均响应时间：2.3 秒
- 满意度评分：4.7/5
```

### 质量指标

```typescript
interface LingmaQualityMetrics {
  // 代码生成质量
  codeAccuracy: number;        // 代码准确率
  specificationCompliance: number; // 规范符合率
  testCoverage: number;        // 测试覆盖率
  
  // 效率提升
  timeSaved: number;           // 节省时间（小时）
  productivityGain: number;    // 生产力提升百分比
  
  // 用户满意度
  satisfaction: number;        // 满意度评分
  adoptionRate: number;        // 使用率
}
```

---

## 🎯 最佳实践

### 实践 1: 精准提问

```markdown
✅ 好的提示词:
【角色】TypeDom 专家
【任务】创建 StarSvg 组件
【参考】@技术栈.md @编码规范.md
【要求】viewBox: 0 0 1024 1024, 默认 24x24
【路径】M512 42.666667...

❌ 差的提示词:
帮我写个 SVG 组件
```

### 实践 2: 充分利用上下文

```markdown
✅ 正确做法:
1. 引用 3-5 个核心文档
2. 提供项目背景信息
3. 说明技术栈和约束
4. 给出具体示例

❌ 错误做法:
不提供任何上下文直接提问
```

### 实践 3: 迭代优化

```
第一轮：AI 生成初稿
   ↓ (人工审核)
第二轮：提出修改意见
   ↓ (AI 优化)
第三轮：再次审核通过
   ↓ (测试验证)
第四轮：最终确认
```

### 实践 4: 建立模板库

```markdown
维护常用提示词模板:
- 组件开发模板
- 测试生成模板
- 代码审查模板
- 文档编写模板

详见：ai-docs/00-索引与导航/AI-PROMPT-TEMPLATES.md
```

---

## 🔗 相关资源

### 内部文档

- [`00-索引与导航/AI-PROMPT-TEMPLATES.md`](../00-索引与导航/AI-PROMPT-TEMPLATES.md) - 提示词模板库
- [`07-AI 专项文档/AGENT-SKILLS.md`](./AGENT-SKILLS.md) - Agent 技能详解
- [`07-AI 专项文档/CONTEXT-MANAGEMENT.md`](./CONTEXT-MANAGEMENT.md) - 上下文管理

### 外部资源

- **通义灵码官方文档**: https://lingma.aliyun.com/
- **LingMa.md 完整指南**: /Users/jianfengxu/Documents/MY-GIT/nx-workspace/LingMa.md
- **GitHub 仓库**: https://github.com/alibaba/lingma

---

**版本**: v0.4.0  
**维护者**: xjf <xjf7711@qq.com>  
**最后更新**: 2026-03-19

# 快速开始指南

**5 分钟快速上手 @type-dom/svgs**

---

## 🎯 本指南适合谁

- ✅ **新入职开发者**: 快速了解项目
- ✅ **新加入团队成员**: 熟悉技术栈和开发流程
- ✅ **AI Agent**: 快速获取项目核心信息

---

## ⚡ 5 分钟快速开始

### 第 1 分钟：环境准备

```bash
# 1. 克隆项目
git clone https://github.com/type-dom/svgs.git
cd svgs

# 2. 安装依赖
npm install

# 3. 验证环境
node --version  # 应该 >= 18.x
npm --version   # 应该 >= 11.11.1
```

### 第 2 分钟：理解项目结构

```
svgs/
├── src/                  # 源码目录
│   ├── lib/              # SVG 组件库
│   │   ├── common/       # 通用图标
│   │   ├── element-plus/ # Element Plus 图标
│   │   └── fluentui/     # FluentUI 图标
│   └── index.ts          # 主入口
├── tests/                # 测试文件
├── ai-docs/              # AI 文档 (重点阅读)
│   ├── 00-索引与导航/    # 📍 从这里开始
│   ├── 01-项目概述/      # 了解项目背景
│   └── 02-开发规范/      # 编码规范
└── package.json          # 项目配置
```

### 第 3 分钟：运行第一个示例

```bash
# 1. 开发模式（监听构建）
npm run dev

# 2. 运行测试
npm test

# 3. 类型检查
npm run typecheck
```

### 第 4 分钟：创建第一个 SVG 组件

```typescript
// src/lib/common/my-icon.ts
import { SvgProps, SvgPath, TypeSvgSvg } from "@type-dom/framework";

export class MyIconSvg extends TypeSvgSvg {
  className: "MyIconSvg";
  override childNodes: SvgPath[];

  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MyIconSvg";

    // 设置 viewBox
    this.attrObj.viewBox = "0 0 1024 1024";
    this.resetSize(24, 24);

    // 创建路径
    const path = new SvgPath({
      attrObj: { fill: "currentColor" },
    });

    path.setData("M512 42.666667..."); // 你的 SVG 路径数据

    this.addChild(path);
    this.childNodes = [path];
  }
}
```

### 第 5 分钟：使用新组件

```typescript
// 在应用中使用
import { MyIconSvg } from "@type-dom/svgs/common/my-icon";

const icon = new MyIconSvg({
  width: 32,
  height: 32,
  fill: "#ff0000",
});

// 挂载到 DOM
icon.mount(document.getElementById("app"));
```

---

## 📚 下一步学习路径

### 推荐顺序

1. **阅读项目背景** → [`01-项目概述/项目背景.md`](../01-项目概述/项目背景.md)
   - 了解项目愿景和目标
   - 理解核心价值

2. **熟悉技术栈** → [`01-项目概述/技术栈.md`](../01-项目概述/技术栈.md)
   - TypeScript 5.9.3+
   - TypeDom Framework ^0.5.0
   - Vite Plus + Tsdown

3. **学习编码规范** → [`02-开发规范/编码规范.md`](../02-开发规范/编码规范.md)
   - 命名约定
   - 代码风格
   - 注释规范

4. **掌握 AI 协作** → [`07-AI 专项文档/LINGMA-CONFIGURATION.md`](../07-AI 专项文档/LINGMA-CONFIGURATION.md)
   - 通义灵码配置
   - Agent 技能使用
   - AI 提示词模板

---

## 🤖 AI 协作快速开始

### 使用通义灵码 Agent

在 IDE 中打开通义灵码对话窗口，输入:

```
【角色】你是@type-dom/svgs 项目的 AI 助手

【参考文档】
@ai-docs/00-索引与导航/DOCUMENTATION-INDEX.md
@ai-docs/01-项目概述/技术栈.md
@ai-docs/02-开发规范/编码规范.md

【任务】帮我创建一个名为"StarSvg"的星星图标组件

【要求】
1. 遵循编码规范
2. 使用 TypeScript 严格模式
3. 包含完整的 JSDoc 注释
4. 生成单元测试
```

### 常用 AI 提示词模板

详见：[`00-索引与导航/AI-PROMPT-TEMPLATES.md`](./AI-PROMPT-TEMPLATES.md)

---

## 🧪 编写第一个测试

```typescript
// tests/my-icon.spec.ts
import { describe, it, expect } from "vitest";
import { MyIconSvg } from "../src/lib/common/my-icon";

describe("MyIconSvg", () => {
  it("should create instance correctly", () => {
    const icon = new MyIconSvg();
    expect(icon.className).toBe("MyIconSvg");
    expect(icon.viewBox).toBe("0 0 1024 1024");
  });

  it("should accept custom props", () => {
    const icon = new MyIconSvg({
      width: 32,
      height: 32,
    });
    expect(icon.width).toBe(32);
    expect(icon.height).toBe(32);
  });
});
```

运行测试:

```bash
npm test -- tests/my-icon.spec.ts
```

---

## 🔧 常用命令速查

```bash
# 开发
npm run dev          # 开发模式（监听）
npm run build        # 生产构建
npm run typecheck    # 类型检查

# 测试
npm test             # 运行所有测试
npm test -- --watch  # 监听模式

# 代码质量
npm run lint         # 代码检查
vp check --fix       # 自动修复

# SVG 转换
npm run common-svgs      # 转换 Common SVG
npm run element-svgs     # 转换 Element Plus SVG
npm run fluentui-svgs    # 转换 FluentUI SVG
```

---

## ❓ 常见问题

### Q1: 如何添加新的 SVG 图标？

**A**:

1. 在 `src/lib/common/` 创建新文件 `my-icon.ts`
2. 继承 `TypeSvgSvg` 基类
3. 实现构造函数和路径数据
4. 编写单元测试
5. 从分类索引导出

详见：[`02-开发规范/编码规范.md`](../02-开发规范/编码规范.md)

### Q2: 如何使用 AI 辅助开发？

**A**:

1. 安装通义灵码插件 (2.5.4+)
2. 开启智能体模式
3. 引用相关文档
4. 使用提示词模板

详见：[`07-AI 专项文档/LINGMA-CONFIGURATION.md`](../07-AI 专项文档/LINGMA-CONFIGURATION.md)

### Q3: 测试覆盖率要求是多少？

**A**:

- 语句覆盖率 ≥ 70%
- 分支覆盖率 ≥ 70%
- 函数覆盖率 ≥ 70%
- 行覆盖率 ≥ 70%

详见：[`05-测试文档/测试策略.md`](../05-测试文档/测试策略.md)

---

## 🎯 验收标准

完成快速开始后，你应该能够:

- ✅ 成功运行项目
- ✅ 创建简单的 SVG 组件
- ✅ 编写基础单元测试
- ✅ 使用 AI 辅助开发
- ✅ 知道从哪里查找文档

---

## 📞 获取帮助

如有问题:

- 📖 查看完整文档索引：[`00-索引与导航/DOCUMENTATION-INDEX.md`](./DOCUMENTATION-INDEX.md)
- 💬 提交 Issue: https://github.com/type-dom/svgs/issues
- 📧 邮件联系：xjf7711@qq.com

---

**最后更新**: 2026-03-19  
**版本**: v0.4.0

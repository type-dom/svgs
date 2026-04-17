# Archive

> **说明**: 此目录用于存放历史版本文档和已废弃的内容。
>
> **Note**: This directory stores historical version documentation and deprecated content.

---

## 📁 目录结构 / Directory Structure

```
ARCHIVE/
├── v2.x/                 # 2.x 版本文档
│   ├── api-docs/         # 旧版 API 文档
│   ├── guides/           # 旧版指南
│   └── changelog.md      # 2.x 变更日志
│
└── deprecated/           # 已废弃内容
    ├── old-components/   # 废弃的组件文档
    ├── legacy-api/       # 废弃的 API
    └── migration-guides/ # 迁移指南
```

---

## 🗂️ 归档策略 / Archive Strategy

### 何时归档 / When to Archive

以下内容应该被归档：

Content that should be archived:

- ✅ **大版本更新** - 主版本号变更时 (如 v2.x → v3.x)
- ✅ **废弃功能** - 标记为 `@deprecated` 的 API 和组件
- ✅ **过时文档** - 不再适用于当前版本的指南
- ✅ **历史决策** - 已被新 ADR 替代的旧决策

### 归档流程 / Archive Process

```markdown
1. 识别需要归档的内容
   ↓
2. 创建版本目录 (如 v2.x/)
   ↓
3. 移动相关文档到归档目录
   ↓
4. 在原位置添加迁移指南
   ↓
5. 更新索引和引用
   ↓
6. 提交并标记为 archive
```

---

## 📦 归档内容示例 / Archive Content Examples

### v2.x 版本归档 / Version 2.x Archive

**包含内容 / Contents**:

- API 文档 (v2.x 版本)
- 用户指南和教程
- 示例代码
- 已知问题和 workaround
- 最终版本的 changelog

**访问方式 / Access**:

```bash
# 查看 v2.x API 文档
open ai-docs/ARCHIVE/v2.x/api-docs/index.html

# 查看迁移指南
cat ai-docs/ARCHIVE/v2.x/migration-to-v3.md
```

### 废弃内容 / Deprecated Content

**示例：废弃的组件**

````markdown
# @deprecated TdOldButtonSvg

此组件已在 v3.0.0 中废弃，请使用新的 TdButtonSvg

**替代方案**:

```typescript
// ❌ 旧写法
import { TdOldButtonSvg } from "@type-dom/svgs";

// ✅ 新写法
import { TdButtonSvg } from "@type-dom/svgs/common";
```
````

**移除时间线**:

- v3.0.0: 标记为 deprecated
- v3.2.0: 发出警告信息
- v4.0.0: 完全移除

````

---

## 🔍 检索和使用 / Retrieval and Usage

### 查找历史文档 / Finding Historical Docs

```bash
# 搜索特定版本的文档
find ARCHIVE -name "*.md" | grep "v2"

# 查看某个组件的历史文档
cat ARCHIVE/v2.x/components/TdAddSvg.md

# 比较不同版本的差异
diff ARCHIVE/v2.x/api.md ai-docs/03-API 文档/接口定义.md
````

### 引用历史内容 / Referencing Historical Content

在文档中引用归档内容时：

When referencing archived content in documentation:

```markdown
**历史版本参考**:

- v2.x API: [查看归档](../ARCHIVE/v2.x/api-docs/)
- 迁移指南：[v2 到 v3](../ARCHIVE/v2.x/migration-to-v3.md)
- 废弃组件：[列表](../ARCHIVE/deprecated/components.md)
```

---

## 📝 维护指南 / Maintenance Guide

### 定期检查 / Regular Checks

每季度检查：

Quarterly checks:

- ✅ 确认归档内容完整性
- ✅ 验证链接有效性
- ✅ 更新迁移指南 (如需要)
- ✅ 清理临时文件

### 版本发布时的归档 / Archive on Release

```bash
# 发布大版本前
npm run archive-previous-version

# 这个脚本会:
# 1. 复制当前文档到 ARCHIVE/v{x}.x/
# 2. 更新版本标记
# 3. 生成归档索引
# 4. 提交更改
```

---

## 🔄 恢复归档内容 / Restoring Archived Content

如果需要使用旧版本文档：

If you need to use old version documentation:

```bash
# 1. 找到需要的版本
ls ARCHIVE/

# 2. 查看内容
cat ARCHIVE/v2.x/guides/getting-started.md

# 3. 如需恢复 (谨慎操作)
cp ARCHIVE/v2.x/guides/getting-started.md ai-docs/guides/
```

**注意**: 恢复前请确认：

- ✅ 确实需要旧版本文档
- ✅ 了解与当前版本的差异
- ✅ 更新相关引用和链接

---

## 📊 归档统计 / Archive Statistics

### 当前归档状态 / Current Archive Status

```
ARCHIVE/
├── v2.x/              # [待创建] 首个归档版本
│   └── (预计 20+ 文档)
│
└── deprecated/        # [待创建] 废弃内容
    └── (预计 5-10 项)
```

### 增长预期 / Growth Expectation

```
版本计划:
- v3.x: 当前版本 (活跃开发)
- v2.x: 下一版本归档 (预计 2026 Q4)
- v1.x: 已合并到 v2.x 归档
```

---

## 🔗 相关资源 / Related Resources

### 内部文档 / Internal Docs

- [版本管理](../06-运维文档/CI-CD-PIPELINE.md) - 版本发布流程
- [废弃策略](../02-开发规范/编码规范.md) - 如何标记废弃功能
- [迁移指南模板](./deprecated/MIGRATION-TEMPLATE.md)

### 外部资源 / External Resources

- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [Deprecation Best Practices](https://dev.to/box/deprecation-best-practices-you-should-follow-3789)

---

## 📝 更新日志 / Changelog

| 日期       | 版本   | 更新内容                     |
| ---------- | ------ | ---------------------------- |
| 2026-03-19 | v1.0.0 | 初始版本，定义归档结构和策略 |

---

**最后更新 / Last Updated**: 2026-03-19  
**维护者 / Maintainer**: TypeDom Team

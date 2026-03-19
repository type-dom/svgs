# Generated Documentation

> **注意**: 此目录包含自动生成的文档，请勿手动编辑。
> 
> **Note**: This directory contains auto-generated documentation. Do not edit manually.

---

## 📁 目录结构 / Directory Structure

```
GENERATED/
├── api-extractor/          # TypeDoc 生成的 API 文档
├── changelog/              # 自动生成的变更日志
├── coverage-reports/       # 测试覆盖率报告
└── architecture-diagrams/  # Mermaid 生成的架构图
```

---

## 🛠️ 生成工具 / Generation Tools

### 1. API 文档 / API Documentation

**工具**: TypeDoc ^0.27.0  
**配置**: [`typedoc.json`](../typedoc.json)  
**命令**: `npm run docs:api`

```bash
# 生成 API 文档
npm run docs:api

# 监听模式 (开发时自动更新)
npm run docs:watch
```

**输出**: `api-extractor/`

---

### 2. 变更日志 / Changelog

**工具**: bumpp + changelogen  
**配置**: `package.json` scripts  
**命令**: `npm run release`

```bash
# 创建新版本并生成 changelog
npm run release

# 或单独生成 changelog
npx changelogen --output GENERATED/changelog/CHANGELOG.md
```

**输出**: `changelog/CHANGELOG.md`

---

### 3. 测试覆盖率报告 / Test Coverage Reports

**工具**: Vitest + v8 coverage  
**配置**: `vite.config.ts`  
**命令**: `npm run test:coverage`

```bash
# 运行测试并生成覆盖率报告
npm run test:coverage

# 查看 HTML 报告
open GENERATED/coverage-reports/html/index.html
```

**输出**: 
- `coverage-reports/html/` - HTML 可视化报告
- `coverage-reports/coverage-summary.json` - JSON 摘要

---

### 4. 架构图 / Architecture Diagrams

**工具**: Mermaid CLI  
**配置**: `.mermaidrc`  
**命令**: `npm run diagrams:generate`

```bash
# 从 Mermaid 源文件生成图表
mmdc -i src/docs/architecture.mmd -o GENERATED/architecture-diagrams/architecture.png
```

**输出**: `architecture-diagrams/`

---

## 📊 CI/CD 集成 / CI/CD Integration

这些生成的文档会在 CI/CD 流程中自动创建和更新：

These generated docs are automatically created and updated in CI/CD:

```yaml
# .github/workflows/docs.yml
jobs:
  generate-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Generate API Docs
        run: npm run docs:api
      
      - name: Generate Test Coverage
        run: npm run test:coverage
      
      - name: Upload Artifacts
        uses: actions/upload-artifact@v4
        with:
          name: generated-docs
          path: GENERATED/
```

---

## 🔧 本地开发 / Local Development

### 推荐工作流 / Recommended Workflow

```bash
# 1. 启动开发服务器 (自动重建)
npm run dev

# 2. 在另一个终端监听文档变化
npm run docs:watch

# 3. 定期运行测试生成覆盖率
npm run test:coverage

# 4. 发布前生成所有文档
npm run prepublishOnly
```

### 清理和重建 / Clean and Rebuild

```bash
# 清理生成的文件
rm -rf GENERATED/*

# 重新生成所有内容
npm run docs:api
npm run test:coverage
```

---

## 📝 维护指南 / Maintenance Guide

### 日常检查 / Routine Checks

- ✅ 确保生成脚本正常运行
- ✅ 验证生成内容完整性
- ✅ 检查文件大小是否异常
- ✅ 确认链接有效性

### 故障排查 / Troubleshooting

**问题**: 文档未生成
```bash
# 检查依赖
npm install

# 清理缓存
npm run clean

# 重新生成
npm run docs:api
```

**问题**: 生成失败
```bash
# 查看详细错误
npm run docs:api -- --debug

# 检查 TypeScript 编译
npm run build
```

---

## 📈 存储策略 / Storage Strategy

### Git 管理 / Git Management

**推荐**: 将生成的文档加入 `.gitignore`,仅在需要时生成

**Current Setup**:
```gitignore
# 忽略生成的文档 (推荐)
GENERATED/

# 或者只保留关键文档
!GENERATED/api-extractor/
```

### 发布策略 / Publish Strategy

```bash
# prepublishOnly 钩子自动生成
npm publish

# 流程:
# 1. 运行构建
# 2. 生成 API 文档
# 3. 运行测试
# 4. 发布到 NPM
```

---

## 🔗 相关文档 / Related Documentation

- [API Reference](../03-API 文档/API-REFERENCE.md) - API 参考文档说明
- [TypeDoc 配置](../../typedoc.json) - TypeDoc 配置文件
- [测试规范](../05-测试文档/测试规范.md) - 测试和覆盖率要求

---

## 📝 更新日志 / Changelog

| 日期 | 版本 | 更新内容 |
|-----|------|---------|
| 2026-03-19 | v1.0.0 | 初始版本，定义自动生成文档结构 |

---

**最后更新 / Last Updated**: 2026-03-19  
**维护者 / Maintainer**: TypeDom Team

# CI/CD 流程

**自动化构建、测试、部署和文档管理**

**版本**: v0.4.0  
**最后更新**: 2026-03-19  

---

## 📖 引言

本章节描述@type-dom/svgs 项目的持续集成和持续部署 (CI/CD) 流程，包括:

- ✅ 自动化构建和测试
- ✅ 文档自动生成和检查
- ✅ NPM 包发布流程
- ✅ 质量门禁和质量保证

---

## 🏗️ CI/CD 架构

### 整体流程

```
┌─────────────────────────────────────────────────────────┐
│                  CI/CD Pipeline Overview                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Code Push / PR                                         │
│       ↓                                                 │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Stage 1: 代码检查                               │   │
│  │  • TypeScript 类型检查                           │   │
│  │  • Oxlint 代码质量检查                           │   │
│  │  • 格式化检查                                    │   │
│  └─────────────────────────────────────────────────┘   │
│       ↓ 通过                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Stage 2: 自动化测试                             │   │
│  │  • 单元测试 (Vitest)                             │   │
│  │  • 覆盖率检查                                    │   │
│  │  • 集成测试                                      │   │
│  └─────────────────────────────────────────────────┘   │
│       ↓ 通过                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Stage 3: 构建验证                               │   │
│  │  • 生产构建 (Tsdown)                             │   │
│  │  • 类型声明生成                                  │   │
│  │  • 打包体积检查                                  │   │
│  └─────────────────────────────────────────────────┘   │
│       ↓ 通过                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Stage 4: 文档自动化                             │   │
│  │  • API 文档生成 (TypeDoc)                        │   │
│  │  • 文档一致性检查                                │   │
│  │  • 文档站点部署                                  │   │
│  └─────────────────────────────────────────────────┘   │
│       ↓ 通过                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Stage 5: 发布准备                               │   │
│  │  • 版本号管理 (bumpp)                            │   │
│  │  • Changelog 生成                                │   │
│  │  • NPM 发布检查                                  │   │
│  └─────────────────────────────────────────────────┘   │
│       ↓ 手动确认                                        │
│  Release to NPM                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## ⚙️ GitHub Actions 配置

### 主工作流配置

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  # ========== Stage 1: 代码检查 ==========
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run type check
        run: npm run typecheck
      
      - name: Run linter
        run: npm run lint
      
      - name: Check formatting
        run: npx prettier --check .

  # ========== Stage 2: 自动化测试 ==========
  test:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm test -- --coverage
      
      - name: Upload coverage report
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
          fail_ci_if_error: false

  # ========== Stage 3: 构建验证 ==========
  build:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run production build
        run: npm run build
      
      - name: Check build output
        run: |
          ls -lh dist/
          echo "Build size:"
          du -sh dist/
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  # ========== Stage 4: 文档自动化 ==========
  docs:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Generate API documentation
        run: npx typedoc --out docs/api src/index.ts
      
      - name: Validate documentation
        run: |
          # 检查文档完整性
          test -f docs/api/index.html
          test -f ai-docs/00-索引与导航/DOCUMENTATION-INDEX.md
      
      - name: Deploy documentation
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
          publish_branch: gh-pages

  # ========== Stage 5: NPM 发布 ==========
  release:
    runs-on: ubuntu-latest
    needs: [build, docs]
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build package
        run: npm run build
      
      - name: Check version and publish
        run: |
          CURRENT_VERSION=$(node -p "require('./package.json').version")
          PUBLISHED_VERSION=$(npm show @type-dom/svgs version || echo "0.0.0")
          
          if [ "$CURRENT_VERSION" = "$PUBLISHED_VERSION" ]; then
            echo "❌ Version $CURRENT_VERSION already published"
            exit 1
          fi
          
          echo "✅ Publishing version $CURRENT_VERSION"
          npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      
      - name: Create GitHub Release
        uses: softprops/action-gh-release@v1
        with:
          tag_name: v${{ needs.version.outputs.version }}
          generate_release_notes: true
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 🔧 本地开发流程

### 开发环境设置

```bash
# 1. 克隆项目
git clone https://github.com/type-dom/svgs.git
cd svgs

# 2. 安装依赖
npm install

# 3. 配置 Git hooks
npm run prepare

# 4. 验证环境
npm run typecheck
npm test
```

### 提交流程

```bash
# 1. 创建功能分支
git checkout -b feature/my-new-icon

# 2. 开发新功能
# ... 编写代码 ...

# 3. 运行本地检查
npm run typecheck    # 类型检查
npm run lint         # 代码检查
npm test             # 运行测试
npm run build        # 构建验证

# 4. 提交代码（自动触发 Git hooks）
git add .
git commit -m "feat: add new StarSvg icon component"

# Git hooks 自动执行:
# - vp check --fix (代码检查和修复)
# - 类型检查
# - 测试运行

# 5. 推送到远程
git push origin feature/my-new-icon

# 6. 创建 Pull Request
# 在 GitHub 上创建 PR，CI/CD 自动运行
```

### Git Hooks 配置

```typescript
// vite.config.ts
export default defineConfig({
  staged: {
    "*": "vp check --fix"  // Commit 前自动检查和修复
  }
});
```

**Git Hooks 执行流程**:
```
git commit
    ↓
pre-commit hook
    ↓
vp check --fix
    ↓
自动修复可修复的问题
    ↓
报告不可修复的问题
    ↓
如果有严重错误，commit 失败
    ↓
如果通过，commit 成功
```

---

## 📊 质量门禁

### 必须通过的检查

#### 1. TypeScript 类型检查

```bash
npm run typecheck
```

**要求**:
- ✅ 无编译错误
- ✅ 无类型警告
- ✅ 严格模式启用

#### 2. 代码质量检查

```bash
npm run lint
```

**要求**:
- ✅ Oxlint 通过率 100%
- ✅ 无 error 级别问题
- ✅ warning 级别 < 10 个

#### 3. 单元测试

```bash
npm test
```

**要求**:
- ✅ 所有测试通过
- ✅ 测试覆盖率达标:
  - 语句覆盖率 ≥ 70%
  - 分支覆盖率 ≥ 70%
  - 函数覆盖率 ≥ 70%
  - 行覆盖率 ≥ 70%

#### 4. 构建验证

```bash
npm run build
```

**要求**:
- ✅ 构建成功
- ✅ 类型声明生成完整
- ✅ 打包体积合理 (< 1MB)

---

## 📦 NPM 发布流程

### 发布前检查清单

```
□ 所有测试通过
□ 类型检查无误
□ 构建成功
□ 文档已更新
□ Changelog 已编写
□ 版本号已更新
□ GitHub Release 已创建
```

### 使用 bumpp 管理版本

```bash
# 安装 bumpp
npm install -g bumpp

# 升级版本号（自动更新 package.json 和 git tag）
bumpp patch    # 0.4.0 → 0.4.1 (补丁版本)
bumpp minor    # 0.4.0 → 0.5.0 (次版本)
bumpp major    # 0.4.0 → 1.0.0 (主版本)

# 查看将要发布的版本
bumpp --dry-run

# 确认发布
bumpp --commit --tag --push
```

### 发布步骤

```bash
# Step 1: 更新版本号
bumpp patch  # 或 minor/major

# Step 2: 生成 Changelog
# bumpp 会自动生成 CHANGELOG.md

# Step 3: 运行最终检查
npm run typecheck
npm run lint
npm test
npm run build

# Step 4: 发布到 NPM
npm publish --access public

# Step 5: 推送 git 标签
git push --follow-tags

# Step 6: 创建 GitHub Release
# GitHub Actions 会自动创建 Release
```

---

## 📄 文档自动化

### TypeDoc 配置

```typescript
// typedoc.json
{
  "entryPoints": ["src/index.ts"],
  "out": "docs/api",
  "theme": "default",
  "includeVersion": true,
  "excludePrivate": true,
  "excludeProtected": false,
  "withReadme": true,
  "readme": "README.md",
  "plugin": []
}
```

### 自动生成 API 文档

```bash
# 生成 API 文档
npx typedoc

# 输出目录
docs/api/
├── index.html           # API 首页
├── modules.html         # 模块列表
├── classes/             # 类文档
├── interfaces/          # 接口文档
└── types/               # 类型文档
```

### 文档一致性检查

```bash
# 脚本：scripts/check-docs.js
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 检查文档完整性
const requiredDocs = [
  'ai-docs/00-索引与导航/DOCUMENTATION-INDEX.md',
  'ai-docs/01-项目概述/项目背景.md',
  'ai-docs/02-开发规范/编码规范.md',
  // ... 更多必需文档
];

let allExist = true;
requiredDocs.forEach(doc => {
  const fullPath = path.join(__dirname, '..', doc);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Missing required document: ${doc}`);
    allExist = false;
  }
});

if (!allExist) {
  process.exit(1);
}

console.log('✅ All required documents exist');
```

---

## 🔄 版本管理策略

### 语义化版本 (SemVer)

```
格式：MAJOR.MINOR.PATCH (例如：0.4.0)

规则:
- MAJOR: 不兼容的 API 变更 (1.0.0 → 2.0.0)
- MINOR: 向后兼容的功能新增 (0.4.0 → 0.5.0)
- PATCH: 向后兼容的问题修复 (0.4.0 → 0.4.1)
```

### 发布周期

```
开发分支策略:
main (稳定版本)
  ↑ merge
develop (开发版本)
  ↑ merge
feature/* (功能分支)
```

**发布节奏**:
- **Patch 版本**: 随时发布（Bug 修复）
- **Minor 版本**: 每 2-4 周发布（新功能）
- **Major 版本**: 按需发布（重大变更）

---

## 📈 监控和告警

### 构建监控

```yaml
# 监控指标
metrics:
  build_time:
    warning: 5m
    critical: 10m
  
  test_duration:
    warning: 3m
    critical: 5m
  
  bundle_size:
    warning: 800KB
    critical: 1MB
  
  coverage:
    warning: 75%
    critical: 70%
```

### 告警规则

```yaml
# 告警配置
alerts:
  - name: Build Failure
    condition: build.status == 'failed'
    notification:
      - email: team@example.com
      - slack: '#ci-alerts'
  
  - name: Test Coverage Drop
    condition: coverage.current < coverage.threshold
    notification:
      - email: dev@example.com
  
  - name: Bundle Size Increase
    condition: bundle.size > bundle.limit
    notification:
      - slack: '#performance-alerts'
```

---

## 🛠️ 故障处理

### 常见问题排查

#### 问题 1: CI 构建失败

```bash
# 排查步骤
1. 查看 GitHub Actions 日志
2. 本地重现：npm ci && npm run build
3. 检查 Node.js 版本是否匹配
4. 清除缓存重试：rm -rf node_modules package-lock.json && npm install
```

#### 问题 2: 测试覆盖率下降

```bash
# 排查步骤
1. 查看覆盖率报告：open coverage/index.html
2. 找出未覆盖的文件和行
3. 补充缺失的测试用例
4. 重新运行测试：npm test -- --coverage
```

#### 问题 3: NPM 发布失败

```bash
# 常见原因和解决方案

原因 1: 版本号已存在
解决：bumpp patch 升级版本号

原因 2: 认证失败
解决：检查 NPM_TOKEN 是否正确配置

原因 3: 构建产物不完整
解决：npm run build 重新构建
```

---

## 📝 最佳实践

### 实践 1: 小步提交，频繁集成

```
✅ 推荐做法:
- 每个功能一个小 PR
- 每天至少集成一次
- 快速发现问题并修复

❌ 避免做法:
- 数百个文件的大 PR
- 数周不集成的分支
- 积累大量未测试代码
```

### 实践 2: 保护 main 分支

```yaml
# GitHub 分支保护规则
branch_protection:
  main:
    require_pull_request: true
    require_reviews: 1
    require_status_checks: true
    status_checks:
      - lint
      - test
      - build
    enforce_admins: true
```

### 实践 3: 自动化一切

```
应该自动化的任务:
✅ 代码检查和格式化
✅ 测试运行和覆盖率检查
✅ 构建和打包
✅ 文档生成
✅ 版本管理和发布
✅ Changelog 生成

需要人工审核的任务:
👤 API 设计变更
👤 重大重构决策
👤 文档内容质量
👤 用户体验相关决策
```

---

## 🔗 相关资源

### 内部文档

- [`06-运维文档/部署指南.md`](./部署指南.md) - 本地和生产部署
- [`06-运维文档/监控告警.md`](./监控告警.md) - 监控配置
- [`02-开发规范/测试规范.md`](../02-开发规范/测试规范.md) - 测试要求

### 外部资源

- **GitHub Actions 文档**: https://docs.github.com/en/actions
- **NPM 发布指南**: https://docs.npmjs.com/packages-and-modules/contributing-packages-and-modules
- **语义化版本规范**: https://semver.org/
- **bumpp 工具**: https://github.com/antfu/bumpp

---

**版本**: v0.4.0  
**维护者**: xjf <xjf7711@qq.com>  
**最后更新**: 2026-03-19

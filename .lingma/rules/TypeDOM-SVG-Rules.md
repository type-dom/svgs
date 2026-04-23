---
trigger: always_on
---
# TypeDOM SVG 组件库 - 通义灵码 AI 开发规则

**版本**: 1.0.0  
**最后更新**: 2026-03-18  
**适用项目**: @type-dom/svgs v0.5.0

---

## 📋 规则概述

本规则配置专为 TypeDOM SVG 组件库项目定制，用于指导通义灵码 AI 在该项目中的代码生成、审查和优化工作。

### 核心原则

1. **类型安全优先**: 所有代码必须有完整的 TypeScript 类型定义
2. **遵循 TypeDOM 规范**: 严格继承 TypeDOM 框架的组件体系
3. **保持目录结构**: 使用 unbundle 模式，每个文件独立输出
4. **测试覆盖**: 关键组件必须有单元测试验证

---

## 🎯 AI 行为准则

### 代码生成规则

#### ✅ 必须遵循的模式

``typescript
// 标准 Svg 组件模板
import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';

export class TdIconNameSvg extends TypeSvgSvg {
className: 'TdIconNameSvg'; // 字符串字面量类型
override childNodes: SvgPath[]; // 明确的数组类型

constructor(params: SvgProps = {}) {
super(params);
this.className = 'TdIconNameSvg';

    // 设置元数据
    addAttrObj(this, {
      name: 'TdIconNameSvg',
      viewBox: '0 0 1024 1024'  // 统一坐标系
    });

    // 设置默认尺寸
    this.resetSize(24, 24);

    // 初始化子节点
    this.childNodes = [];

    // 创建路径（优先使用 currentColor）
    const path = new SvgPath({
      attrObj: { fill: 'currentColor' }
    });

    // 设置路径数据
    path.setData('M...');

    // 添加子节点
    this.addChild(path);

}
}

// ✅ 正确的实例化方式 - 所有属性都通过 attrObj 传递
const icon1 = new TdIconNameSvg({
attrObj: {
width: 32,
height: 32,
fill: 'red',
opacity: 0.8
}
});

// ❌ 错误的实例化方式 - 直接将属性放在参数对象中
const icon2 = new TdIconNameSvg({
width: 32, // 错误：width 不是 SvgProps 的直接属性
height: 32, // 错误：应该放在 attrObj 中
fill: 'red' // 错误：应该放在 attrObj 中
});

```

#### ❌ 禁止的模式

``typescript
// ❌ 缺少类型声明
export class IconSvg extends TypeSvgSvg {
  constructor(params) {  // 错误：缺少参数类型
    super(params);
    // 错误：没有 className 和 childNodes 声明
  }
}

// ❌ 直接操作 DOM
this.dom.setAttribute('viewBox', '0 0 1024 1024');  // 错误：绕过响应式系统

// ❌ 使用 any 类型
const data: any = '...';  // 错误：禁止使用 any
```

---

## 🏗️ 项目架构理解

### 技术栈层级

```
┌─────────────────────────────────────┐
│ TypeScript 5.9.3+ (严格模式)         │
├─────────────────────────────────────┤
│ @type-dom/framework ^0.5.0          │
│   - TypeSvgSvg (SVG 基类)            │
│   - SvgPath (路径组件)               │
│   - addAttrObj (属性工具)            │
├─────────────────────────────────────┤
│ Vite Plus + Tsdown (构建工具)        │
│   - unbundle: true (保持结构)        │
│   - format: ['esm'] (ESM 输出)       │
├─────────────────────────────────────┤
│ Vitest (测试框架)                    │
│   - globals: true (全局 API)         │
│   - coverage ≥ 90% (覆盖率要求)      │
└─────────────────────────────────────┘
```

### 组件分类体系

| 分类             | 前缀 | 命名风格          | 文件路径                | 数量   |
| ---------------- | ---- | ----------------- | ----------------------- | ------ |
| **Common**       | `Td` | 简洁英文          | `src/lib/common/`       | ~195   |
| **Element Plus** | `El` | Element Plus 风格 | `src/lib/element-plus/` | ~293   |
| **FluentUI**     | `Fl` | Microsoft 风格    | `src/lib/fluentui/`     | ~5,255 |
| **Other**        | `Td` | 自定义            | `src/lib/other/`        | ~32    |

---

## 📝 编码规范规则

### Rule 1: 命名规范

``yaml
规则名称：命名约定
优先级：CRITICAL
适用范围：所有组件、文件、变量

组件类命名:
格式："{Prefix}{IconName}{Style}Svg"
示例: - TdAddSvg (Common) - ElArrowDownSvg (Element Plus) - FlAccessTimeFilledSvg (FluentUI)
禁止: - 全大写：ADD_SVG - 缺少后缀：AddIcon - 小写开头：tdAddSvg

文件命名:
格式：kebab-case (小写 + 连字符)
示例: - add.ts ✅ - access-time.ts ✅ - arrow-down.ts ✅
禁止: - Add.ts ❌ - addSvg.ts ❌ - ADD.TS ❌

变量命名:
局部变量：camelCase (iconWidth, pathData)
常量：UPPER_CASE (DEFAULT_SIZE = 24)
函数：camelCase (createPath, setData)

```

### Rule 2: 组件结构规范

``yaml
规则名称：组件结构
优先级：CRITICAL
适用范围：所有 SVG 组件

必需元素:
  - className 声明（字符串字面量类型）
  - childNodes 类型声明
  - viewBox 属性设置
  - resetSize() 调用
  - 至少一个 SvgPath 子节点

推荐实践:
  - 使用 currentColor 填充（便于主题切换）
  - 统一的 viewBox 坐标系（1024x1024 或 128x128）
  - 分段设置 path 数据（提高可读性）
  - 添加 JSDoc 注释说明用途

代码顺序:
  1. 导入语句
  2. 类定义
  3. 类型声明
  4. 构造函数
     - super(params)
     - this.className = '...'
     - addAttrObj(...)
     - this.resetSize(24, 24)
     - this.childNodes = []
     - 创建和添加子节点
```

### Rule 3: TypeScript 类型安全

``yaml
规则名称：类型安全
优先级：CRITICAL
适用范围：所有 TypeScript 代码

严格模式要求:

- strict: true
- noImplicitAny: true
- noUnusedLocals: true
- declaration: true

类型声明:
✅ 正确:
const icon: TdAddSvg = new TdAddSvg();
const paths: SvgPath[] = [];
const svgProps: SvgProps = {
attrObj: {
width: 24,
height: 24
}
};

❌ 错误:
const icon = new TdAddSvg(); // 缺少显式类型
const data: any = '...'; // 禁止使用 any
const props: SvgProps = { width: 24 }; // 错误：width 应该在 attrObj 中

接口实现:
推荐模式:
export interface ITdIconSvg extends ITypeSvg {
dom: SVGCircleElement;
className: 'TdIconSvg';
childNodes: [];
}

    export class TdIconSvg extends TypeSvgSvg implements ITdIconSvg {
      // ... 实现
    }

```

### Rule 4: 属性管理规范

``yaml
规则名称：属性管理
优先级：HIGH
适用范围：组件属性设置

工具函数:
  - addAttrObj(component, attrs) - 批量添加
  - addAttrProp(component, key, value) - 单个添加
  - addStyleObj(component, styles) - 批量样式

使用规范:
  ✅ 正确:
    addAttrObj(this, {
      viewBox: '0 0 1024 1024',
      name: 'TdIconSvg',
      title: 'Icon'
    });

    addAttrProp(this, 'fill', 'red');

  ❌ 错误:
    this.dom.setAttribute('viewBox', '0 0 1024 1024');  // 直接操作 DOM
    addAttrProp(this, 'cx', '50');
    this.dom.setAttribute('cy', '50');  // 混用不一致

常用 SVG 属性:
  容器属性:
    - viewBox: '0 0 1024 1024'
    - width: 24
    - height: 24

  路径属性:
    - fill: 'currentColor' | '#ff0000' | 'none'
    - stroke: '#000000'
    - stroke-width: '2'
    - stroke-linecap: 'round' | 'butt' | 'square'
    - stroke-linejoin: 'round' | 'miter' | 'bevel'

  圆形属性:
    - cx: '50'
    - cy: '50'
    - r: '40'

  矩形属性:
    - x: '10'
    - y: '10'
    - width: '80'
    - height: '60'
    - rx: '5'  (圆角)
    - ry: '5'

测试中的属性访问:
  ✅ 正确:
    // 使用可选链访问 attrObj，避免 undefined 错误
    expect(path.attrObj?.fill).toBe('currentColor');
    const viewBox = svg.attrObj?.['viewBox'];
    expect(viewBox).toBe('0 0 1024 1024');

    // 访问 width、height、fill、opacity 等 SVG 属性
    expect(svg.attrObj?.width).toBe(32);
    expect(svg.attrObj?.height).toBe(32);
    expect(svg.attrObj?.fill).toBe('red');
    expect(svg.attrObj?.opacity).toBe(0.8);

    // className 属性直接通过 svg.className 访问
    expect(svg.className).toBe('TdAddSvg');

    // 使用非空断言检查 attrObj 的属性存在性
    expect('width' in svg.attrObj!).toBe(true);
    expect('height' in svg.attrObj!).toBe(true);

  ❌ 错误:
    // 直接访问可能为undefined 的属性
    expect(path.attrObj.fill).toBe('currentColor');  // 可能抛出错误

    // 通过 props 访问 SVG 属性 (width、height、fill、opacity 等)
    expect(svg.props.width).toBe(32);   // 错误：应该使用 svg.attrObj?.width
    expect(svg.props.height).toBe(32);  // 错误：应该使用 svg.attrObj?.height
    expect(svg.props.fill).toBe('red'); // 错误：应该使用 svg.attrObj?.fill
    expect(svg.props.opacity).toBe(0.8); // 错误：应该使用 svg.attrObj?.opacity

    // className 属性的错误访问方式
    const name = svg.getAttribute('name'); // 错误：应该直接使用 svg.className

    // SVG 组件没有 getAttribute/setAttribute 方法
    svg.getAttribute('viewBox');  // 错误：Svg 组件没有此方法
    svg.setAttribute('fill', 'red');  // 错误：Svg 组件没有此方法
```

### Rule 5: Path 数据规范

``yaml
规则名称：Path 数据管理
优先级：HIGH
适用范围：所有 SVG 路径

路径命令:
基本命令: - M/m: Move to (移动到) - L/l: Line to (画线) - H/h: Horizontal line (水平线) - V/v: Vertical line (垂直线) - C/c: Cubic Bezier (三次贝塞尔) - Z/z: Close path (闭合路径)

推荐实践:
✅ 使用相对命令（简化数据）:
path.setData(
'M10 10',
'h80', // 相对坐标
'v80',
'z'
);

✅ 分段设置（提高可读性）:
path.setData(
'M10 10', // Move to start
'H 90', // Horizontal line
'V 90', // Vertical line
'H 10', // Horizontal back
'L 10 10', // Line to start
'Z' // Close path
);

❌ 避免冗长的绝对坐标:
path.setData(
'M10 10 L90 10 L90 90 L10 90 L10 10' // 过长且难读
);

填充和描边:
addAttrObj(path, {
fill: 'none', // 无填充
stroke: '#0000ff', // 蓝色描边
'stroke-width': '2', // 2px 宽度
'stroke-linecap': 'round', // 圆形端点
'stroke-linejoin': 'round', // 圆形转角
'stroke-dasharray': '5,5' // 虚线
});

测试中的 Path 数据访问:
✅ 正确:
const path = svg.childNodes[0];
const data = path.pathData; // 使用 pathData get 属性
expect(data).toBeDefined();
expect(data.length).toBeGreaterThan(0);

❌ 错误:
const path = svg.childNodes[0];
const data = path.getData(); // 错误：SvgPath 没有 getData 方法

```

---

## 🧪 测试规范规则

### Rule 6: 单元测试要求

``yaml
规则名称：单元测试
优先级：CRITICAL
适用范围：所有 Common 和 Element Plus 组件

测试文件:
  位置：tests/{component-name}.spec.ts
  命名：kebab-case + .spec.ts
  示例:
    - tests/404.spec.ts
    - tests/add-icon.spec.ts

必需测试项:
  - ✅ className 属性验证
  - ✅ viewBox 属性验证
  - ✅ 默认尺寸验证
  - ✅ childNodes 类型验证
  - ✅ 自定义 props 处理

测试模板:
  import { TdComponentSvg } from '../src/lib/category/component';

  describe('TdComponentSvg', () => {
    it('should have correct className', () => {
      const svg = new TdComponentSvg();
      expect(svg.className).toBe('TdComponentSvg');
    });

    it('should have viewBox attribute', () => {
      const svg = new TdComponentSvg();
      expect(svg.attrObj?.['viewBox']).toBe('0 0 1024 1024');
    });

    it('should accept custom props', () => {
      const svg = new TdComponentSvg({
        attrObj: {
          width: 32,
          height: 32,
          fill: 'red'
        }
      });
      expect(svg.attrObj?.width).toBe(32);
      expect(svg.attrObj?.height).toBe(32);
      expect(svg.attrObj?.fill).toBe('red');
    });
  });

覆盖率要求:
  - 行覆盖率：≥ 90%
  - 函数覆盖率：≥ 95%
  - 分支覆盖率：≥ 85%
```

---

## 📦 导出规范规则

### Rule 7: 模块化导出

``yaml
规则名称：模块化导出
优先级：HIGH
适用范围：所有分类索引文件

分类索引:
文件：src/lib/{category}-index.ts
格式:
export { Td404Svg } from './common/404';
export { TdAddSvg } from './common/add';
export { TdCloseSvg } from './common/close';
// ... 更多导出

主入口:
文件：src/index.ts
内容:
export _ from './lib/common-index';
export _ from './lib/element-plus-index';
export _ from './lib/fluentui-index';
export _ from './lib/other/index';

导入方式:
✅ 按需导入（推荐）:
import { TdAddSvg } from '@type-dom/svgs/common/add';

⚠️ 分类导入（可接受）:
import { TdAddSvg, TdCloseSvg } from '@type-dom/svgs/common';

❌ 主入口导入（不推荐）:
import { TdAddSvg } from '@type-dom/svgs'; // 会打包所有组件

Tree-shaking 友好:

- 每个文件独立输出
- 支持按需加载
- 避免循环依赖

```

---

## 🔧 构建配置规则

### Rule 8: Tsdown 配置

``yaml
规则名称：构建配置
优先级：HIGH
适用范围：tsdown.config.ts

关键配置:
  dts:
    tsgo: true  # 使用 TypeScript 官方编译器

  exports: true  # 从 package.json 自动生成 exports

  format: ['esm']  # ESM 输出格式

  unbundle: true  # CRITICAL: 保持源码目录结构

  cwd: process.cwd()  # 项目根目录

构建输出:
  输入：src/lib/common/add.ts
  输出:
    - dist/lib/common/add.mjs (JavaScript)
    - dist/lib/common/add.d.ts (TypeScript 声明)

  特点:
    - 保持源码目录结构
    - 每个文件独立输出
    - 支持 tree-shaking
    - 完整的类型声明
```

### Rule 9: Vite Plus 配置

``yaml
规则名称：Vite 配置
优先级：MEDIUM
适用范围：vite.config.ts

核心配置:
staged:
"\*": "vp check --fix" # Git commit 前自动检查

pack: tsdownConfig # 使用 tsdown 打包

lint:
options:
typeAware: true # 类型感知 linting
typeCheck: true # 类型检查

test:
globals: true # 全局测试 API

Git Hooks 流程:
git commit
↓
触发 staged hook
↓
vp check --fix
↓
自动修复问题
↓
报告错误 → commit 失败（如有不可修复错误）

```

---

## 🎯 AI 任务执行指南

### 场景 1: 创建新 SVG 组件

```

【用户指令】创建一个用户图标组件

【AI 执行步骤】

1. 确定分类：Common 分类 → 使用 Td 前缀
2. 确定文件名：user.ts (kebab-case)
3. 生成组件代码:
   - 继承 TypeSvgSvg
   - 声明 className 和 childNodes 类型
   - 设置 viewBox 和默认尺寸
   - 创建 user 形状的 Path
   - 使用 currentColor 填充
4. 添加到导出:
   - 在 src/lib/common-index.ts 中添加导出
5. 生成测试文件:
   - 创建 tests/user.spec.ts
   - 包含基础测试用例
6. 验证:
   - 运行 typecheck 确保类型正确
   - 运行 test 确保测试通过

```

### 场景 2: 批量转换 SVG

```

【用户指令】批量转换这些 SVG 文件

【AI 执行步骤】

1. 分析 SVG 文件:
   - 提取 path 数据
   - 识别形状特征
   - 确定分类归属
2. 生成组件文件:
   - 为每个 SVG 创建 .ts 文件
   - 遵循命名规范
   - 应用标准模板
3. 更新索引:
   - 添加到对应的 category-index.ts
4. 生成测试:
   - 为每个组件创建测试文件
   - 包含基础验证
5. 质量检查:
   - 运行 oxlint 检查代码质量
   - 运行测试验证功能

```

### 场景 3: 代码审查

```

【用户指令】审查这段代码

【AI 审查维度】

1. 类型安全:
   □ 是否有明确的类型声明
   □ 是否使用了 any 类型
   □ 是否符合严格模式要求

2. 组件结构:
   □ 是否继承正确的基类
   □ className 是否为字符串字面量
   □ childNodes 是否有明确类型
   □ 是否设置了 viewBox
   □ 是否调用了 resetSize()

3. 属性管理:
   □ 是否使用 addAttrObj/addAttrProp
   □ 是否直接操作 DOM
   □ 属性值是否正确

4. 代码风格:
   □ 命名是否符合规范
   □ 导入顺序是否正确
   □ 代码结构是否清晰

5. 测试覆盖:
   □ 是否有对应的测试文件
   □ 测试是否覆盖关键功能
   □ 测试是否能通过

```

---

## 📊 质量检查清单

### P0: 关键检查项（必须通过）

```

□ 组件继承正确的基类（TypeSvgSvg / SvgPath）
□ className 为字符串字面量类型
□ childNodes 有明确的类型定义
□ 设置了 viewBox 属性
□ 调用了 resetSize() 设置默认尺寸
□ 使用 addAttrObj/addAttrProp 管理属性
□ TypeScript 严格模式开启
□ 无 any 类型使用

```

### P1: 重要检查项（应该通过）

```

□ 路径使用 fill: 'currentColor'
□ 文件命名符合 kebab-case
□ 从正确的分类导入
□ 包含基础测试用例
□ JSDoc 注释完整
□ 导入顺序正确
□ 代码结构清晰

```

### P2: 建议检查项（推荐通过）

```

□ 性能优化（复用定义、简化路径）
□ 代码格式统一
□ 注释清晰易懂
□ 测试覆盖率达标
□ 无冗余代码

```

---

## 🔍 常见问题解答

### Q1: 为什么组件类名要用字符串字面量类型？

**A**: 提供更强的类型安全保障
``typescript
// ✅ 字符串字面量类型
className: 'TdAddSvg';  // 只能赋值为 'TdAddSvg'

// ❌ 普通字符串类型
className: string;  // 可以赋任何字符串，失去类型检查
```

### Q2: 为什么优先使用 currentColor?

**A**: 便于主题切换和样式继承
``typescript
// ✅ 使用 currentColor
fill: 'currentColor' // 自动继承父元素的 color 样式

// 效果

<div style="color: blue">
  <TdAddSvg />  <!-- 图标自动变为蓝色 -->
</div>
```

### Q3: 为什么使用 unbundle 模式？

**A**: 保持源码结构，支持按需加载

```
✅ unbundle: true
src/lib/common/add.ts → dist/lib/common/add.mjs
src/lib/common/close.ts → dist/lib/common/close.mjs

优点:
- 便于调试
- Tree-shaking 友好
- 按需加载
- 避免命名冲突
```

---

## 📚 相关文档

- [项目概述](../docs/ai-docs/01-项目概述/)
- [技术栈详解](../docs/ai-docs/01-项目概述/技术栈.md)
- [编码规范](../docs/ai-docs/02-开发规范/编码规范.md)
- [测试规范](../docs/ai-docs/05-测试文档/)
- [TypeDOM Framework Rules](../../nx-workspace/.lingma/rules/03-framework-core.md)

---

## 📞 反馈与改进

欢迎提交 Issue 或 PR 改进本规则配置:

- GitHub Issues: https://github.com/type-dom/svgs/issues
- 联系方式：xjf7711@qq.com

---

**Version**: 1.0.0  
**Last Updated**: 2026-03-18  
**Author**: TypeDOM Team  
**Review Status**: ✅ Approved

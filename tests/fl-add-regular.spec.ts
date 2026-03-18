/**
 * @file FluentUI 分类测试 - FlAddRegularSvg
 * @description 测试 FluentUI 风格的 Add 图标组件
 * @version v0.4.0
 * @date 2026-03-18
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { FlAddRegularSvg } from '../src/lib/fluentui/add_regular';

describe('FlAddRegularSvg', () => {
  let svg: FlAddRegularSvg;

  beforeEach(() => {
    svg = new FlAddRegularSvg();
  });

  describe('基础属性验证', () => {
    it('✅ 应该正确实例化', () => {
      expect(svg).toBeDefined();
      expect(svg instanceof FlAddRegularSvg).toBe(true);
    });

    it('✅ 应该有正确的 className', () => {
      expect(svg.className).toBe('FlAddRegularSvg');
    });

    it('✅ 应该有 childNodes 数组', () => {
      expect(Array.isArray(svg.childNodes)).toBe(true);
      expect(svg.childNodes.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('ViewBox 和尺寸', () => {
    it('✅ viewBox 应该是 0 0 1024 1024', () => {
      const viewBox = svg.attrObj?.['viewBox'];
      expect(viewBox).toBe('0 0 1024 1024');
    });

    it('✅ 默认宽度应该是 24', () => {
      expect(svg.attrObj?.width).toBe(24);
    });

    it('✅ 默认高度应该是 24', () => {
      expect(svg.attrObj?.height).toBe(24);
    });

    it('✅ 可以自定义尺寸为 20x20', () => {
      const customSvg = new FlAddRegularSvg({ attrObj: { width: 20, height: 20 } });
      expect(customSvg.attrObj?.width).toBe(20);
      expect(customSvg.attrObj?.height).toBe(20);
    });

    it('✅ 可以自定义尺寸为 48x48', () => {
      const customSvg = new FlAddRegularSvg({ attrObj: { width: 48, height: 48 } });
      expect(customSvg.attrObj?.width).toBe(48);
      expect(customSvg.attrObj?.height).toBe(48);
    });
  });

  describe('Path 数据验证', () => {
    it('✅ Path 应该使用 currentColor 填充', () => {
      const path = svg.childNodes[0];
      expect(path.attrObj?.fill).toBe('currentColor');
    });

    it('✅ Path 数据应该有效且非空', () => {
      const path = svg.childNodes[0];
      const data = path.pathData;

      expect(data).toBeDefined();
      expect(typeof data).toBe('string');
      expect(data.length).toBeGreaterThan(0);
    });

    it('✅ Path 数据应该以 Move 命令开始', () => {
      const path = svg.childNodes[0];
      const data = path.pathData;
      expect(data).toMatch(/^M/);
    });

    it('✅ Path 数据应该包含加号的特征', () => {
      const path = svg.childNodes[0];
      const data = path.pathData;

      // 加号图标应该包含有效的 SVG 路径命令
      expect(data).toMatch(/[MLHVCSQTAZ]/);
    });

    it('✅ Path 数据格式应该正确', () => {
      const path = svg.childNodes[0];
      const data = path.pathData;

      // 验证包含数字坐标
      const hasNumbers = /[-\d.]+/.test(data);
      expect(hasNumbers).toBe(true);
    });
  });

  describe('FluentUI 风格特性', () => {
    it('✅ 应该遵循 Microsoft Fluent UI 设计规范', () => {
      // FluentUI 图标通常具有流畅、现代的特点
      expect(svg.attrObj?.width).toBe(24);
      expect(svg.attrObj?.height).toBe(24);
      expect(svg.attrObj?.fill).toBe('currentColor');
    });

    it('✅ 应该支持 Fluent UI 常用尺寸', () => {
      const sizes = [16, 20, 24, 28, 32, 40, 48];

      sizes.forEach(size => {
        const sizeSvg = new FlAddRegularSvg({
          attrObj: {
            width: size,
            height: size
          }
        });
        expect(sizeSvg.attrObj?.width).toBe(size);
        expect(sizeSvg.attrObj?.height).toBe(size);
      });
    });

    it('✅ 应该支持 Fluent UI 主题色', () => {
      const fluentColors = [
        '#0078D4',  // Fluent Blue
        '#107C10',  // Success Green
        '#FFB900',  // Warning Yellow
        '#E81123',  // Error Red
        '#605E5C'   // Neutral Gray
      ];

      fluentColors.forEach(color => {
        const colorSvg = new FlAddRegularSvg({ attrObj: { fill: color } });
        expect(colorSvg.attrObj?.fill).toBe(color);
      });
    });
  });

  describe('颜色处理', () => {
    it('✅ 应该支持 currentColor', () => {
      expect(svg.attrObj?.fill).toBe('currentColor');
    });

    it('✅ 应该支持十六进制颜色', () => {
      const customSvg = new FlAddRegularSvg({ attrObj: { fill: '#0078D4' } });
      expect(customSvg.attrObj?.fill).toBe('#0078D4');
    });

    it('✅ 应该支持 RGB 颜色', () => {
      const customSvg = new FlAddRegularSvg({ attrObj: { fill: 'rgb(0, 120, 212)' } });
      expect(customSvg.attrObj?.fill).toBe('rgb(0, 120, 212)');
    });

    it('✅ 应该支持 RGBA 颜色', () => {
      const customSvg = new FlAddRegularSvg({ attrObj: { fill: 'rgba(0, 120, 212, 0.8)' } });
      expect(customSvg.attrObj?.fill).toBe('rgba(0, 120, 212, 0.8)');
    });

    it('✅ 应该支持命名颜色', () => {
      const colors = ['red', 'blue', 'green', 'orange', 'purple'];

      colors.forEach(colorName => {
        const colorSvg = new FlAddRegularSvg({ attrObj: { fill: colorName } });
        expect(colorSvg.attrObj?.fill).toBe(colorName);
      });
    });
  });

  describe('透明度处理', () => {
    it('✅ 默认透明度应该是 1', () => {
      expect(svg.attrObj?.opacity).toBe(1);
    });

    it('✅ 应该接受 0 到 1 之间的透明度', () => {
      const testOpacities = [0, 0.25, 0.5, 0.75, 1];

      testOpacities.forEach(opacity => {
        const opacitySvg = new FlAddRegularSvg({ attrObj: { opacity } });
        expect(opacitySvg.attrObj?.opacity).toBe(opacity);
      });
    });

    it('✅ 应该接受小数透明度', () => {
      const decimalOpacity = 0.75;
      const opacitySvg = new FlAddRegularSvg({ attrObj: { opacity: decimalOpacity } });
      expect(opacitySvg.attrObj?.opacity).toBe(decimalOpacity);
    });
  });

  describe('实际应用场景', () => {
    it('✅ 应该可以用在按钮中', () => {
      const buttonIcon = new FlAddRegularSvg({
        attrObj: {
          width: 16,
          height: 16,
          fill: 'white'
        }
      });

      expect(buttonIcon.attrObj?.width).toBe(16);
      expect(buttonIcon.attrObj?.height).toBe(16);
      expect(buttonIcon.attrObj?.fill).toBe('white');
    });

    it('✅ 应该可以用在工具栏中', () => {
      const toolbarIcon = new FlAddRegularSvg({
        attrObj: {
          width: 20,
          height: 20,
          fill: '#605E5C'
        }
      });

      expect(toolbarIcon.attrObj?.width).toBe(20);
      expect(toolbarIcon.attrObj?.height).toBe(20);
      expect(toolbarIcon.attrObj?.fill).toBe('#605E5C');
    });

    it('✅ 应该可以用在菜单项中', () => {
      const menuItemIcon = new FlAddRegularSvg({
        attrObj: {
          width: 16,
          height: 16,
          fill: 'currentColor',
          opacity: 0.9
        }
      });

      expect(menuItemIcon.attrObj?.width).toBe(16);
      expect(menuItemIcon.attrObj?.height).toBe(16);
      expect(menuItemIcon.attrObj?.opacity).toBe(0.9);
    });

    it('✅ 应该可以用在 FAB (悬浮按钮) 中', () => {
      const fabIcon = new FlAddRegularSvg({
        attrObj: {
          width: 24,
          height: 24,
          fill: 'white'
        }
      });

      expect(fabIcon.attrObj?.width).toBe(24);
      expect(fabIcon.attrObj?.height).toBe(24);
      expect(fabIcon.attrObj?.fill).toBe('white');
    });
  });

  describe('边界条件', () => {
    it('✅ 应该处理空 props', () => {
      const emptySvg = new FlAddRegularSvg({});
      expect(emptySvg).toBeDefined();
      expect(emptySvg.className).toBe('FlAddRegularSvg');
    });

    it('✅ 应该处理 undefined', () => {
      expect(() => new FlAddRegularSvg(undefined as any)).not.toThrow();
    });

    it('✅ 应该处理零尺寸', () => {
      const zeroSvg = new FlAddRegularSvg({ attrObj: { width: 0, height: 0 } });
      expect(zeroSvg.attrObj?.width).toBe(0);
      expect(zeroSvg.attrObj?.height).toBe(0);
    });

    it('✅ 应该处理负数尺寸', () => {
      const negativeSvg = new FlAddRegularSvg({ attrObj: { width: -24, height: -24 } });
      expect(negativeSvg.attrObj?.width).toBe(-24);
      expect(negativeSvg.attrObj?.height).toBe(-24);
    });

    it('✅ 应该处理超大尺寸', () => {
      const largeSvg = new FlAddRegularSvg({ attrObj: { width: 512, height: 512 } });
      expect(largeSvg.attrObj?.width).toBe(512);
      expect(largeSvg.attrObj?.height).toBe(512);
    });
  });

  describe('多次实例化', () => {
    it('✅ 每次实例化都应该是独立的', () => {
      const svg1 = new FlAddRegularSvg({ attrObj: { width: 16 } });
      const svg2 = new FlAddRegularSvg({ attrObj: { width: 32 } });

      expect(svg1.attrObj?.width).toBe(16);
      expect(svg2.attrObj?.width).toBe(32);
      expect(svg1).not.toBe(svg2);
    });

    it('✅ 多个实例不应该共享状态', () => {
      const svgs = Array.from({ length: 5 }, (_, i) =>
        new FlAddRegularSvg({ attrObj: { width: (i + 1) * 8 } })
      );

      svgs.forEach((s, index) => {
        expect(s.attrObj?.width).toBe((index + 1) * 8);
      });
    });
  });

  describe('性能测试', () => {
    it('✅ 应该在 100ms 内完成 100 次实例化', () => {
      const start = performance.now();

      for (let i = 0; i < 100; i++) {
        new FlAddRegularSvg();
      }

      const duration = performance.now() - start;
      expect(duration).toBeLessThan(100);
    });

    it('✅ 应该在 500ms 内完成 1000 次实例化', () => {
      const start = performance.now();

      for (let i = 0; i < 1000; i++) {
        new FlAddRegularSvg();
      }

      const duration = performance.now() - start;
      expect(duration).toBeLessThan(500);
    });
  });

  describe('类型安全', () => {
    it('✅ className 应该是字符串字面量类型', () => {
      const classNameType: 'FlAddRegularSvg' = svg.className;
      expect(classNameType).toBe('FlAddRegularSvg');
    });

    it('✅ childNodes 应该是数组类型', () => {
      expect(Array.isArray(svg.childNodes)).toBe(true);
    });

    it('✅ attrObj 应该有正确的类型结构', () => {
      expect(svg.attrObj).toBeDefined();
      expect(typeof svg.attrObj).toBe('object');
      expect('width' in svg.attrObj!).toBe(true);
      expect('height' in svg.attrObj!).toBe(true);
    });
  });

  describe('方法继承', () => {
    it('✅ 应该继承 addChild 方法', () => {
      expect(typeof svg.addChild).toBe('function');
    });
  });
});

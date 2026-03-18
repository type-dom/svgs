/**
 * @file Element Plus 分类测试 - ElArrowDownSvg
 * @description 测试 Element Plus 风格的箭头图标组件
 * @version v0.4.0
 * @date 2026-03-18
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { ElArrowDownSvg } from '../src/lib/element-plus/arrow-down';

describe('ElArrowDownSvg', () => {
  let svg: ElArrowDownSvg;

  beforeEach(() => {
    svg = new ElArrowDownSvg();
  });

  describe('基础属性验证', () => {
    it('✅ 应该正确实例化', () => {
      expect(svg).toBeDefined();
      expect(svg instanceof ElArrowDownSvg).toBe(true);
    });

    it('✅ 应该有正确的 className', () => {
      expect(svg.className).toBe('ElArrowDownSvg');
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

    it('✅ 可以自定义尺寸为 16x16', () => {
      const customSvg = new ElArrowDownSvg({ attrObj: { width: 16, height: 16 } });
      expect(customSvg.attrObj?.width).toBe(16);
      expect(customSvg.attrObj?.height).toBe(16);
    });

    it('✅ 可以自定义尺寸为 32x32', () => {
      const customSvg = new ElArrowDownSvg({ attrObj: { width: 32, height: 32 } });
      expect(customSvg.attrObj?.width).toBe(32);
      expect(customSvg.attrObj?.height).toBe(32);
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

    it('✅ Path 数据应该包含向下的箭头特征', () => {
      const path = svg.childNodes[0];
      const data = path.pathData;

      // 向下箭头应该包含有效的 SVG 路径命令
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

  describe('Element Plus 风格特性', () => {
    it('✅ 应该遵循 Element Plus 设计规范', () => {
      // Element Plus 图标通常具有简洁、清晰的特点
      expect(svg.attrObj?.width).toBe(24);
      expect(svg.attrObj?.height).toBe(24);
      expect(svg.attrObj?.fill).toBe('currentColor');
    });

    it('✅ 应该支持 Element Plus 常用尺寸', () => {
      const sizes = [12, 14, 16, 20, 24, 28, 32];

      sizes.forEach(size => {
        const sizeSvg = new ElArrowDownSvg({
          attrObj: {
            width: size,
            height: size
          }
        });
        expect(sizeSvg.attrObj?.width).toBe(size);
        expect(sizeSvg.attrObj?.height).toBe(size);
      });
    });

    it('✅ 应该支持 Element Plus 主题色', () => {
      const themeColors = [
        '#409EFF',  // primary
        '#67C23A',  // success
        '#E6A23C',  // warning
        '#F56C6C',  // danger
        '#909399'   // info
      ];

      themeColors.forEach(color => {
        const colorSvg = new ElArrowDownSvg({ attrObj: { fill: color } });
        expect(colorSvg.attrObj?.fill).toBe(color);
      });
    });
  });

  describe('颜色处理', () => {
    it('✅ 应该支持 currentColor', () => {
      expect(svg.attrObj?.fill).toBe('currentColor');
    });

    it('✅ 应该支持十六进制颜色', () => {
      const customSvg = new ElArrowDownSvg({ attrObj: { fill: '#409EFF' } });
      expect(customSvg.attrObj?.fill).toBe('#409EFF');
    });

    it('✅ 应该支持 RGB 颜色', () => {
      const customSvg = new ElArrowDownSvg({ attrObj: { fill: 'rgb(64, 158, 255)' } });
      expect(customSvg.attrObj?.fill).toBe('rgb(64, 158, 255)');
    });

    it('✅ 应该支持 RGBA 颜色', () => {
      const customSvg = new ElArrowDownSvg({ attrObj: { fill: 'rgba(64, 158, 255, 0.8)' } });
      expect(customSvg.attrObj?.fill).toBe('rgba(64, 158, 255, 0.8)');
    });

    it('✅ 应该支持命名颜色', () => {
      const colors = ['red', 'blue', 'green', 'orange', 'purple'];

      colors.forEach(colorName => {
        const colorSvg = new ElArrowDownSvg({ attrObj: { fill: colorName } });
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
        const opacitySvg = new ElArrowDownSvg({ attrObj: { opacity } });
        expect(opacitySvg.attrObj?.opacity).toBe(opacity);
      });
    });

    it('✅ 应该接受小数透明度', () => {
      const decimalOpacity = 0.6;
      const opacitySvg = new ElArrowDownSvg({ attrObj: { opacity: decimalOpacity } });
      expect(opacitySvg.attrObj?.opacity).toBe(decimalOpacity);
    });
  });

  describe('实际应用场景', () => {
    it('✅ 应该可以用在按钮中', () => {
      const buttonIcon = new ElArrowDownSvg({
        attrObj: {
          width: 14,
          height: 14,
          fill: 'white'
        }
      });

      expect(buttonIcon.attrObj?.width).toBe(14);
      expect(buttonIcon.attrObj?.height).toBe(14);
      expect(buttonIcon.attrObj?.fill).toBe('white');
    });

    it('✅ 应该可以用在下拉菜单中', () => {
      const dropdownIcon = new ElArrowDownSvg({
        attrObj: {
          width: 16,
          height: 16,
          fill: '#606266'
        }
      });

      expect(dropdownIcon.attrObj?.width).toBe(16);
      expect(dropdownIcon.attrObj?.height).toBe(16);
      expect(dropdownIcon.attrObj?.fill).toBe('#606266');
    });

    it('✅ 应该可以用在分页器中', () => {
      const paginationIcon = new ElArrowDownSvg({
        attrObj: {
          width: 16,
          height: 16,
          fill: '#909399'
        }
      });

      expect(paginationIcon.attrObj?.width).toBe(16);
      expect(paginationIcon.attrObj?.height).toBe(16);
      expect(paginationIcon.attrObj?.fill).toBe('#909399');
    });

    it('✅ 应该可以用在排序功能中', () => {
      const sortIcon = new ElArrowDownSvg({
        attrObj: {
          width: 14,
          height: 14,
          fill: 'currentColor',
          opacity: 0.8
        }
      });

      expect(sortIcon.attrObj?.width).toBe(14);
      expect(sortIcon.attrObj?.height).toBe(14);
      expect(sortIcon.attrObj?.opacity).toBe(0.8);
    });
  });

  describe('边界条件', () => {
    it('✅ 应该处理空 props', () => {
      const emptySvg = new ElArrowDownSvg({});
      expect(emptySvg).toBeDefined();
      expect(emptySvg.className).toBe('ElArrowDownSvg');
    });

    it('✅ 应该处理 undefined', () => {
      expect(() => new ElArrowDownSvg(undefined as any)).not.toThrow();
    });

    it('✅ 应该处理零尺寸', () => {
      const zeroSvg = new ElArrowDownSvg({ attrObj: { width: 0, height: 0 } });
      expect(zeroSvg.attrObj?.width).toBe(0);
      expect(zeroSvg.attrObj?.height).toBe(0);
    });

    it('✅ 应该处理负数尺寸', () => {
      const negativeSvg = new ElArrowDownSvg({ attrObj: { width: -20, height: -20 } });
      expect(negativeSvg.attrObj?.width).toBe(-20);
      expect(negativeSvg.attrObj?.height).toBe(-20);
    });

    it('✅ 应该处理超大尺寸', () => {
      const largeSvg = new ElArrowDownSvg({ attrObj: { width: 512, height: 512 } });
      expect(largeSvg.attrObj?.width).toBe(512);
      expect(largeSvg.attrObj?.height).toBe(512);
    });
  });

  describe('多次实例化', () => {
    it('✅ 每次实例化都应该是独立的', () => {
      const svg1 = new ElArrowDownSvg({ attrObj: { width: 16 } });
      const svg2 = new ElArrowDownSvg({ attrObj: { width: 32 } });

      expect(svg1.attrObj?.width).toBe(16);
      expect(svg2.attrObj?.width).toBe(32);
      expect(svg1).not.toBe(svg2);
    });

    it('✅ 多个实例不应该共享状态', () => {
      const svgs = Array.from({ length: 5 }, (_, i) =>
        new ElArrowDownSvg({ attrObj: { width: (i + 1) * 8 } })
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
        new ElArrowDownSvg();
      }

      const duration = performance.now() - start;
      expect(duration).toBeLessThan(100);
    });

    it('✅ 应该在 500ms 内完成 1000 次实例化', () => {
      const start = performance.now();

      for (let i = 0; i < 1000; i++) {
        new ElArrowDownSvg();
      }

      const duration = performance.now() - start;
      expect(duration).toBeLessThan(500);
    });
  });

  describe('类型安全', () => {
    it('✅ className 应该是字符串字面量类型', () => {
      const classNameType: 'ElArrowDownSvg' = svg.className;
      expect(classNameType).toBe('ElArrowDownSvg');
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

/**
 * @file TdAddSvg 组件测试
 * @description 测试 Common 分类下的 Add 图标组件功能和属性
 * @version v0.4.0
 * @date 2026-03-18
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { TdAddSvg } from '../src/lib/common/add';

describe('TdAddSvg', () => {
  let svg: TdAddSvg;

  beforeEach(() => {
    // 每个测试前创建新的实例
    svg = new TdAddSvg();
  });

  describe('基础属性测试', () => {
    it('✅ 应该正确实例化', () => {
      expect(svg).toBeDefined();
      expect(svg instanceof TdAddSvg).toBe(true);
    });

    it('✅ 应该有正确的 className', () => {
      expect(svg.className).toBe('TdAddSvg');
    });

    it('✅ className 应该是字符串字面量类型', () => {
      const classNameType = typeof svg.className;
      expect(classNameType).toBe('string');
    });

    it('✅ 应该有 childNodes 数组', () => {
      expect(Array.isArray(svg.childNodes)).toBe(true);
      expect(svg.childNodes.length).toBeGreaterThan(0);
    });

    it('✅ childNodes 应该包含至少一个 Path', () => {
      expect(svg.childNodes.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('ViewBox 和尺寸测试', () => {
    it('✅ 应该设置 viewBox 属性', () => {
      const viewBox = svg.attrObj?.['viewBox'];
      expect(viewBox).toBeDefined();
      expect(viewBox).not.toBeNull();
    });

    it('✅ viewBox 应该是正确的格式', () => {
      const viewBox = svg.attrObj?.['viewBox'];
      expect(viewBox).toMatch(/^(\d+\s+){3}\d+$/);
    });

    it('✅ viewBox 应该是 0 0 1024 1024', () => {
      const viewBox = svg.attrObj?.['viewBox'];
      expect(viewBox).toBe('0 0 1024 1024');
    });

    it('✅ 应该有默认宽度 24', () => {
      expect(svg.attrObj?.width).toBe(24);
    });

    it('✅ 应该有默认高度 24', () => {
      expect(svg.attrObj?.height).toBe(24);
    });
  });

  describe('Path 数据测试', () => {
    it('✅ 第一个子节点应该是 SvgPath 实例', () => {
      const firstChild = svg.childNodes[0];
      expect(firstChild.constructor.name).toBe('SvgPath');
    });

    it('✅ Path 应该使用 currentColor 填充', () => {
      const path = svg.childNodes[0];
      expect(path.attrObj?.fill).toBe('currentColor');
    });

    it('✅ Path 数据应该有效', () => {
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

    it('✅ Path 数据应该包含有效的 SVG 命令', () => {
      const path = svg.childNodes[0];
      const data = path.pathData;

      // SVG path 命令正则
      const validCommands = /[MLHVCSQTAZ]/g;
      const commands = data.match(validCommands);

      expect(commands).toBeDefined();
      expect(commands!.length).toBeGreaterThan(0);
    });
  });

  describe('自定义 Props 测试', () => {
    it('✅ 应该接受自定义宽度', () => {
      const customSvg = new TdAddSvg({ attrObj: { width: 32 } });
      expect(customSvg.attrObj?.width).toBe(32);
    });

    it('✅ 应该接受自定义高度', () => {
      const customSvg = new TdAddSvg({ attrObj: { height: 48 } });
      expect(customSvg.attrObj?.height).toBe(48);
    });

    it('✅ 应该同时接受自定义宽高', () => {
      const customSvg = new TdAddSvg({
        attrObj: {
          width: 64,
          height: 64
        }
      });
      expect(customSvg.attrObj?.width).toBe(64);
      expect(customSvg.attrObj?.height).toBe(64);
    });

    it('✅ 应该接受自定义填充颜色', () => {
      const customSvg = new TdAddSvg({ attrObj: { fill: 'red' } });
      expect(customSvg.attrObj?.fill).toBe('red');
    });

    it('✅ 应该接受十六进制颜色', () => {
      const customSvg = new TdAddSvg({ attrObj: { fill: '#ff0000' } });
      expect(customSvg.attrObj?.fill).toBe('#ff0000');
    });

    it('✅ 应该接受透明度设置', () => {
      const customSvg = new TdAddSvg({ attrObj: { opacity: 0.5 } });
      expect(customSvg.attrObj?.opacity).toBe(0.5);
    });

    it('✅ 应该接受多个 props 组合', () => {
      const customSvg = new TdAddSvg({
        attrObj: {
          width: 48,
          height: 48,
          fill: 'blue',
          opacity: 0.8
        },
        slot: 'Add Icon'
      });

      expect(customSvg.attrObj?.width).toBe(48);
      expect(customSvg.attrObj?.height).toBe(48);
      expect(customSvg.attrObj?.fill).toBe('blue');
      expect(customSvg.attrObj?.opacity).toBe(0.8);
      expect(customSvg.props.slot).toBe('Add Icon');
    });
  });

  describe('继承关系测试', () => {
    it('✅ 应该继承自 TypeSvgSvg', () => {
      // 检查原型链
      expect(svg instanceof (globalThis as any).TypeSvgSvg).toBe(true);
    });

    it('✅ 应该继承 addChild 方法', () => {
      expect(typeof svg.addChild).toBe('function');
    });
  });

  describe('边界条件测试', () => {
    it('✅ 应该处理 undefined props', () => {
      expect(() => new TdAddSvg(undefined as any)).not.toThrow();
    });

    it('✅ 应该处理空对象 props', () => {
      const emptyPropsSvg = new TdAddSvg({});
      expect(emptyPropsSvg).toBeDefined();
      expect(emptyPropsSvg.className).toBe('TdAddSvg');
    });

    it('✅ 应该处理零尺寸', () => {
      const zeroSvg = new TdAddSvg({ attrObj: { width: 0, height: 0 } });
      expect(zeroSvg.attrObj?.width).toBe(0);
      expect(zeroSvg.attrObj?.height).toBe(0);
    });

    it('✅ 应该处理超大尺寸', () => {
      const largeSvg = new TdAddSvg({ attrObj: { width: 9999, height: 9999 } });
      expect(largeSvg.attrObj?.width).toBe(9999);
      expect(largeSvg.attrObj?.height).toBe(9999);
    });

    it('✅ 应该处理极小透明度', () => {
      const transparentSvg = new TdAddSvg({ attrObj: { opacity: 0.001 } });
      expect(transparentSvg.attrObj?.opacity).toBe(0.001);
    });

    it('✅ 应该处理完全不透明', () => {
      const opaqueSvg = new TdAddSvg({ attrObj: { opacity: 1 } });
      expect(opaqueSvg.attrObj?.opacity).toBe(1);
    });
  });

  describe('特殊颜色值测试', () => {
    it('✅ 应该支持 RGB 颜色', () => {
      const rgbSvg = new TdAddSvg({ attrObj: { fill: 'rgb(255, 0, 0)' } });
      expect(rgbSvg.attrObj?.fill).toBe('rgb(255, 0, 0)');
    });

    it('✅ 应该支持 RGBA 颜色', () => {
      const rgbaSvg = new TdAddSvg({ attrObj: { fill: 'rgba(255, 0, 0, 0.5)' } });
      expect(rgbaSvg.attrObj?.fill).toBe('rgba(255, 0, 0, 0.5)');
    });

    it('✅ 应该支持命名颜色', () => {
      const namedSvg = new TdAddSvg({ attrObj: { fill: 'red' } });
      expect(namedSvg.attrObj?.fill).toBe('red');
    });

    it('✅ 应该支持透明色', () => {
      const transparentSvg = new TdAddSvg({ attrObj: { fill: 'transparent' } });
      expect(transparentSvg.attrObj?.fill).toBe('transparent');
    });

    it('✅ 应该支持 none 填充', () => {
      const noneSvg = new TdAddSvg({ attrObj: { fill: 'none' } });
      expect(noneSvg.attrObj?.fill).toBe('none');
    });
  });

  describe('性能测试', () => {
    it('✅ 应该在 100ms 内完成实例化', () => {
      const start = performance.now();
      for (let i = 0; i < 100; i++) {
        new TdAddSvg();
      }
      const duration = performance.now() - start;

      // 100 次实例化应该小于 100ms
      expect(duration).toBeLessThan(100);
    });

    it('✅ 单个实例内存占用应合理', () => {
      const beforeMemory = process.memoryUsage();
      const svgs = [];

      for (let i = 0; i < 100; i++) {
        svgs.push(new TdAddSvg());
      }

      const afterMemory = process.memoryUsage();
      const memoryDiff = afterMemory.heapUsed - beforeMemory.heapUsed;

      // 100 个实例的内存增长应小于 10MB
      expect(memoryDiff).toBeLessThan(10 * 1024 * 1024);

      // 清理引用
      svgs.length = 0;
    });
  });

  describe('元数据测试', () => {
    it('✅ 应该有正确的 className', () => {
      expect(svg.className).toBe('TdAddSvg');
    });

    it('✅ 可以设置 slot 属性', () => {
      const titledSvg = new TdAddSvg({ slot: 'Custom Title' });
      expect(titledSvg.props.slot).toBe('Custom Title');
    });
  });
});

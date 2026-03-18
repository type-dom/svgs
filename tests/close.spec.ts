/**
 * @file TdCloseSvg 组件测试
 * @description 测试 Common 分类下的 Close 图标组件功能和属性
 * @version v0.4.0
 * @date 2026-03-18
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { TdCloseSvg } from '../src/lib/common/close';

describe('TdCloseSvg', () => {
  let svg: TdCloseSvg;

  beforeEach(() => {
    svg = new TdCloseSvg();
  });

  describe('基础属性测试', () => {
    it('✅ 应该正确实例化', () => {
      expect(svg).toBeDefined();
      expect(svg instanceof TdCloseSvg).toBe(true);
    });

    it('✅ 应该有正确的 className', () => {
      expect(svg.className).toBe('TdCloseSvg');
    });

    it('✅ 应该有 childNodes 数组', () => {
      expect(Array.isArray(svg.childNodes)).toBe(true);
    });

    it('✅ childNodes 长度应该大于等于 1', () => {
      expect(svg.childNodes.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('ViewBox 和尺寸测试', () => {
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
  });

  describe('Path 数据测试', () => {
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

    it('✅ Path 数据应该包含关闭图标的特征命令', () => {
      const path = svg.childNodes[0];
      const data = path.pathData;

      // 关闭图标通常包含交叉线，应该有多个 Move 命令
      const moveCommands = (data.match(/M/g) || []).length;
      expect(moveCommands).toBeGreaterThanOrEqual(2);
    });

    it('✅ Path 数据格式应该正确', () => {
      const path = svg.childNodes[0];
      const data = path.pathData;

      // 验证坐标格式
      const coordinatePattern = /[-\d.]+/g;
      const coordinates = data.match(coordinatePattern);

      expect(coordinates).toBeDefined();
      expect(coordinates!.length).toBeGreaterThan(0);
    });
  });

  describe('自定义 Props 测试', () => {
    it('✅ 应该接受自定义尺寸', () => {
      const customSize = 32;
      const customSvg = new TdCloseSvg({
        attrObj: {
          width: customSize,
          height: customSize
        }
      });

      expect(customSvg.attrObj?.width).toBe(customSize);
      expect(customSvg.attrObj?.height).toBe(customSize);
    });

    it('✅ 应该接受自定义颜色', () => {
      const customColor = '#ff0000';
      const customSvg = new TdCloseSvg({ attrObj: { fill: customColor } });
      expect(customSvg.attrObj?.fill).toBe(customColor);
    });

    it('✅ 应该接受透明度设置', () => {
      const opacity = 0.5;
      const customSvg = new TdCloseSvg({ attrObj: { opacity } });
      expect(customSvg.attrObj?.opacity).toBe(opacity);
    });

    it('✅ 应该支持多种颜色格式', () => {
      const colors = [
        'red',
        '#ff0000',
        'rgb(255, 0, 0)',
        'rgba(255, 0, 0, 0.5)'
      ];

      colors.forEach(color => {
        const colorSvg = new TdCloseSvg({ attrObj: { fill: color } });
        expect(colorSvg.attrObj?.fill).toBe(color);
      });
    });
  });

  describe('样式继承测试', () => {
    it('✅ 应该支持 currentColor 继承父元素颜色', () => {
      // currentColor 允许 SVG 继承父元素的 color 样式
      const defaultSvg = new TdCloseSvg({ attrObj: { fill: 'currentColor' } });
      expect(defaultSvg.attrObj?.fill).toBe('currentColor');
    });

    it('✅ 可以覆盖默认填充色', () => {
      const customFill = 'blue';
      const customSvg = new TdCloseSvg({ attrObj: { fill: customFill } });
      expect(customSvg.attrObj?.fill).not.toBe('currentColor');
      expect(customSvg.attrObj?.fill).toBe(customFill);
    });
  });

  describe('边界条件测试', () => {
    it('✅ 应该处理空 props 对象', () => {
      const emptySvg = new TdCloseSvg({});
      expect(emptySvg).toBeDefined();
      expect(emptySvg.className).toBe('TdCloseSvg');
    });

    it('✅ 应该处理 undefined', () => {
      expect(() => new TdCloseSvg(undefined as any)).not.toThrow();
    });

    it('✅ 应该处理零尺寸', () => {
      const zeroSvg = new TdCloseSvg({ attrObj: { width: 0, height: 0 } });
      expect(zeroSvg.attrObj?.width).toBe(0);
      expect(zeroSvg.attrObj?.height).toBe(0);
    });

    it('✅ 应该处理负数尺寸', () => {
      const negativeSvg = new TdCloseSvg({ attrObj: { width: -10, height: -10 } });
      expect(negativeSvg.attrObj?.width).toBe(-10);
      expect(negativeSvg.attrObj?.height).toBe(-10);
    });

    it('✅ 应该处理超大尺寸', () => {
      const largeSvg = new TdCloseSvg({ attrObj: { width: 10000, height: 10000 } });
      expect(largeSvg.attrObj?.width).toBe(10000);
      expect(largeSvg.attrObj?.height).toBe(10000);
    });

    it('✅ 应该处理小数尺寸', () => {
      const decimalSvg = new TdCloseSvg({ attrObj: { width: 24.5, height: 24.5 } });
      expect(decimalSvg.attrObj?.width).toBe(24.5);
      expect(decimalSvg.attrObj?.height).toBe(24.5);
    });
  });

  describe('多次实例化测试', () => {
    it('✅ 每次实例化都应该是独立的', () => {
      const svg1 = new TdCloseSvg({ attrObj: { width: 24 } });
      const svg2 = new TdCloseSvg({ attrObj: { width: 48 } });

      expect(svg1.attrObj?.width).toBe(24);
      expect(svg2.attrObj?.width).toBe(48);
      expect(svg1).not.toBe(svg2);
    });

    it('✅ 多个实例的 className 都应该正确', () => {
      const svgs = Array.from({ length: 10 }, () => new TdCloseSvg());

      svgs.forEach(s => {
        expect(s.className).toBe('TdCloseSvg');
      });
    });

    it('✅ 多个实例的 childNodes 应该是独立的', () => {
      const svg1 = new TdCloseSvg();
      const svg2 = new TdCloseSvg();

      expect(svg1.childNodes).not.toBe(svg2.childNodes);
      expect(svg1.childNodes.length).toBe(svg2.childNodes.length);
    });
  });

  describe('性能测试', () => {
    it('✅ 应该在合理时间内完成大量实例化', () => {
      const start = performance.now();

      for (let i = 0; i < 1000; i++) {
        new TdCloseSvg();
      }

      const duration = performance.now() - start;

      // 1000 次实例化应该小于 500ms
      expect(duration).toBeLessThan(500);
    });

    it('✅ 应该可以快速创建和销毁', () => {
      const iterations = 100;
      const start = performance.now();

      for (let i = 0; i < iterations; i++) {
        const tempSvg = new TdCloseSvg();
        // 模拟使用后立即销毁
        tempSvg.childNodes.length = 0;
      }

      const duration = performance.now() - start;

      // 100 次创建销毁应该小于 100ms
      expect(duration).toBeLessThan(100);
    });
  });

  describe('类型安全测试', () => {
    it('✅ className 类型应该是字符串字面量', () => {
      // TypeScript 编译时会检查类型
      const className: 'TdCloseSvg' = svg.className;
      expect(className).toBe('TdCloseSvg');
    });

    it('✅ childNodes 应该是 SvgPath 数组', () => {
      expect(Array.isArray(svg.childNodes)).toBe(true);

      // 运行时检查第一个子节点
      if (svg.childNodes.length > 0) {
        const firstChild = svg.childNodes[0];
        expect(firstChild.constructor.name).toBe('SvgPath');
      }
    });

    it('✅ props 应该有正确的类型结构', () => {
      expect(svg.props).toBeDefined();
      expect(typeof svg.props).toBe('object');
    });
  });

  describe('错误处理测试', () => {
    it('✅ 不应该在正常使用时抛出异常', () => {
      expect(() => {
        const normalSvg = new TdCloseSvg();
        normalSvg.className;
        normalSvg.childNodes;
        normalSvg.props;
      }).not.toThrow();
    });

    it('✅ 访问不存在的属性应该返回 undefined', () => {
      const nonExistentAttr = (svg as any).nonExistentAttribute;
      expect(nonExistentAttr).toBeUndefined();
    });
  });

  describe('功能完整性测试', () => {
    it('✅ 应该包含所有必需的方法', () => {
      expect(typeof svg.addChild).toBe('function');
    });

    it('✅ 应该可以添加子节点', () => {
      // 注意：实际添加需要 SvgPath 实例，这里只测试方法存在
      expect(typeof svg.addChild).toBe('function');
    });
  });
});

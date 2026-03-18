/**
 * @file TdUserSvg 组件测试
 * @description 测试 Common 分类下的 User 图标组件功能和属性
 * @version v0.4.0
 * @date 2026-03-18
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { TdUserSvg } from '../src/lib/common/user';

describe('TdUserSvg', () => {
  let svg: TdUserSvg;

  beforeEach(() => {
    svg = new TdUserSvg();
  });

  describe('基础属性验证', () => {
    it('✅ 应该正确实例化', () => {
      expect(svg).toBeDefined();
      expect(svg instanceof TdUserSvg).toBe(true);
    });

    it('✅ 应该有正确的 className', () => {
      expect(svg.className).toBe('TdUserSvg');
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

    it('✅ 可以自定义尺寸为 32x32', () => {
      const customSvg = new TdUserSvg({ attrObj: { width: 32, height: 32 } });
      expect(customSvg.attrObj?.width).toBe(32);
      expect(customSvg.attrObj?.height).toBe(32);
    });

    it('✅ 可以自定义尺寸为 48x48', () => {
      const customSvg = new TdUserSvg({ attrObj: { width: 48, height: 48 } });
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

    it('✅ Path 数据应该包含用户图标的特征', () => {
      const path = svg.childNodes[0];
      const data = path.pathData;

      // 用户图标通常包含圆形或弧线
      // 检查是否包含有效的 SVG 命令
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

  describe('颜色处理', () => {
    it('✅ 应该支持 currentColor', () => {
      const defaultFill = svg.attrObj?.fill;
      expect(defaultFill).toBe('currentColor');
    });

    it('✅ 应该支持十六进制颜色', () => {
      const customSvg = new TdUserSvg({ attrObj: { fill: '#333333' } });
      expect(customSvg.attrObj?.fill).toBe('#333333');
    });

    it('✅ 应该支持 RGB 颜色', () => {
      const customSvg = new TdUserSvg({ attrObj: { fill: 'rgb(51, 51, 51)' } });
      expect(customSvg.attrObj?.fill).toBe('rgb(51, 51, 51)');
    });

    it('✅ 应该支持 RGBA 颜色', () => {
      const customSvg = new TdUserSvg({ attrObj: { fill: 'rgba(51, 51, 51, 0.8)' } });
      expect(customSvg.attrObj?.fill).toBe('rgba(51, 51, 51, 0.8)');
    });

    it('✅ 应该支持命名颜色', () => {
      const colors = ['red', 'blue', 'green', 'black', 'white'];

      colors.forEach(colorName => {
        const colorSvg = new TdUserSvg({ attrObj: { fill: colorName } });
        expect(colorSvg.attrObj?.fill).toBe(colorName);
      });
    });

    it('✅ 应该支持 none 填充', () => {
      const noFillSvg = new TdUserSvg({ attrObj: { fill: 'none' } });
      expect(noFillSvg.attrObj?.fill).toBe('none');
    });

    it('✅ 应该支持 transparent 填充', () => {
      const transparentSvg = new TdUserSvg({ attrObj: { fill: 'transparent' } });
      expect(transparentSvg.attrObj?.fill).toBe('transparent');
    });
  });

  describe('透明度处理', () => {
    it('✅ 默认透明度应该是 1', () => {
      expect(svg.attrObj?.opacity).toBe(1);
    });

    it('✅ 应该接受 0 到 1 之间的透明度', () => {
      const testOpacities = [0, 0.25, 0.5, 0.75, 1];

      testOpacities.forEach(opacity => {
        const opacitySvg = new TdUserSvg({ attrObj: { opacity } });
        expect(opacitySvg.attrObj?.opacity).toBe(opacity);
      });
    });

    it('✅ 应该接受小数透明度', () => {
      const decimalOpacity = 0.33;
      const opacitySvg = new TdUserSvg({ attrObj: { opacity: decimalOpacity } });
      expect(opacitySvg.attrObj?.opacity).toBe(decimalOpacity);
    });

    it('✅ 应该接受大于 1 的透明度值', () => {
      const overOpacitySvg = new TdUserSvg({ attrObj: { opacity: 1.5 } });
      expect(overOpacitySvg.attrObj?.opacity).toBe(1.5);
    });

    it('✅ 应该接受负数透明度值', () => {
      const negativeOpacitySvg = new TdUserSvg({ attrObj: { opacity: -0.5 } });
      expect(negativeOpacitySvg.attrObj?.opacity).toBe(-0.5);
    });
  });

  describe('标题和元数据', () => {
    it('✅ 可以设置 slot 属性', () => {
      const titledSvg = new TdUserSvg({ slot: 'User Icon' });
      expect(titledSvg.props.slot).toBe('User Icon');
    });

    it('✅ slot 可以是空字符串', () => {
      const emptyTitleSvg = new TdUserSvg({ slot: '' });
      expect(emptyTitleSvg.props.slot).toBe('');
    });

    it('✅ 可以不设置 slot', () => {
      expect(svg.props.slot).toBeUndefined();
    });

    it('✅ name 属性应该自动设置', () => {
      const name = svg.attrObj?.['name'];
      expect(name).toBe('TdUserSvg');
    });
  });

  describe('边界条件', () => {
    it('✅ 应该处理空 props', () => {
      const emptySvg = new TdUserSvg({});
      expect(emptySvg).toBeDefined();
      expect(emptySvg.className).toBe('TdUserSvg');
    });

    it('✅ 应该处理 undefined', () => {
      expect(() => new TdUserSvg(undefined as any)).not.toThrow();
    });

    it('✅ 应该处理零尺寸', () => {
      const zeroSvg = new TdUserSvg({ attrObj: { width: 0, height: 0 } });
      expect(zeroSvg.attrObj?.width).toBe(0);
      expect(zeroSvg.attrObj?.height).toBe(0);
    });

    it('✅ 应该处理负数尺寸', () => {
      const negativeSvg = new TdUserSvg({ attrObj: { width: -50, height: -50 } });
      expect(negativeSvg.attrObj?.width).toBe(-50);
      expect(negativeSvg.attrObj?.height).toBe(-50);
    });

    it('✅ 应该处理超大尺寸', () => {
      const largeSvg = new TdUserSvg({ attrObj: { width: 99999, height: 99999 } });
      expect(largeSvg.attrObj?.width).toBe(99999);
      expect(largeSvg.attrObj?.height).toBe(99999);
    });

    it('✅ 应该处理小数尺寸', () => {
      const decimalSvg = new TdUserSvg({ attrObj: { width: 24.75, height: 24.75 } });
      expect(decimalSvg.attrObj?.width).toBe(24.75);
      expect(decimalSvg.attrObj?.height).toBe(24.75);
    });
  });

  describe('多次实例化', () => {
    it('✅ 每次实例化都应该是独立的', () => {
      const svg1 = new TdUserSvg({ attrObj: { width: 24 } });
      const svg2 = new TdUserSvg({ attrObj: { width: 48 } });

      expect(svg1.attrObj?.width).toBe(24);
      expect(svg2.attrObj?.width).toBe(48);
      expect(svg1).not.toBe(svg2);
    });

    it('✅ 多个实例不应该共享状态', () => {
      const svgs = Array.from({ length: 5 }, (_, i) =>
        new TdUserSvg({ attrObj: { width: (i + 1) * 10 } })
      );

      svgs.forEach((s, index) => {
        expect(s.attrObj?.width).toBe((index + 1) * 10);
      });
    });

    it('✅ 所有实例的 className 都应该正确', () => {
      const svgs = Array.from({ length: 10 }, () => new TdUserSvg());

      svgs.forEach(s => {
        expect(s.className).toBe('TdUserSvg');
      });
    });

    it('✅ 所有实例的 childNodes 长度应该一致', () => {
      const firstSvg = new TdUserSvg();
      const svgs = Array.from({ length: 5 }, () => new TdUserSvg());

      svgs.forEach(s => {
        expect(s.childNodes.length).toBe(firstSvg.childNodes.length);
      });
    });
  });

  describe('性能测试', () => {
    it('✅ 应该在 100ms 内完成 100 次实例化', () => {
      const start = performance.now();

      for (let i = 0; i < 100; i++) {
        new TdUserSvg();
      }

      const duration = performance.now() - start;
      expect(duration).toBeLessThan(100);
    });

    it('✅ 应该在 500ms 内完成 1000 次实例化', () => {
      const start = performance.now();

      for (let i = 0; i < 1000; i++) {
        new TdUserSvg();
      }

      const duration = performance.now() - start;
      expect(duration).toBeLessThan(500);
    });

    it('✅ 单个实例内存占用应合理', () => {
      const beforeMemory = process.memoryUsage();
      const svgs = [];

      for (let i = 0; i < 100; i++) {
        svgs.push(new TdUserSvg());
      }

      const afterMemory = process.memoryUsage();
      const memoryDiff = afterMemory.heapUsed - beforeMemory.heapUsed;

      // 100 个实例的内存增长应小于 10MB
      expect(memoryDiff).toBeLessThan(10 * 1024 * 1024);

      // 清理引用
      svgs.length = 0;
    });
  });

  describe('类型安全', () => {
    it('✅ className 应该是字符串字面量类型', () => {
      // TypeScript 会检查这个赋值是否匹配字面量类型
      const classNameType: 'TdUserSvg' = svg.className;
      expect(classNameType).toBe('TdUserSvg');
    });

    it('✅ childNodes 应该是数组类型', () => {
      // 类型检查：childNodes 应该是 SvgPath[]
      const childNodes = svg.childNodes;
      expect(Array.isArray(childNodes)).toBe(true);
    });

    it('✅ attrObj 应该有正确的类型结构', () => {
      expect(svg.attrObj).toBeDefined();
      expect(typeof svg.attrObj).toBe('object');

      // attrObj 应该包含常见的 SVG 属性
      expect('width' in svg.attrObj!).toBe(true);
      expect('height' in svg.attrObj!).toBe(true);
    });
  });

  describe('方法继承', () => {
    it('✅ 应该继承 addChild 方法', () => {
      expect(typeof svg.addChild).toBe('function');
    });
  });

  describe('实际使用场景模拟', () => {
    it('✅ 应该可以作为独立图标使用', () => {
      const standaloneIcon = new TdUserSvg();
      expect(standaloneIcon).toBeDefined();
      expect(standaloneIcon.className).toBe('TdUserSvg');
    });

    it('✅ 应该可以在按钮中使用', () => {
      const buttonIcon = new TdUserSvg({
        attrObj: {
          width: 20,
          height: 20,
          fill: 'white'
        }
      });

      expect(buttonIcon.attrObj?.width).toBe(20);
      expect(buttonIcon.attrObj?.height).toBe(20);
      expect(buttonIcon.attrObj?.fill).toBe('white');
    });

    it('✅ 应该可以在导航栏中使用', () => {
      const navIcon = new TdUserSvg({
        attrObj: {
          width: 24,
          height: 24,
          fill: 'currentColor'
        },
        slot: 'User Profile'
      });

      expect(navIcon.attrObj?.width).toBe(24);
      expect(navIcon.attrObj?.height).toBe(24);
      expect(navIcon.props.slot).toBe('User Profile');
    });

    it('✅ 应该可以在头像位置使用', () => {
      const avatarIcon = new TdUserSvg({
        attrObj: {
          width: 40,
          height: 40,
          fill: '#666666',
          opacity: 0.9
        }
      });

      expect(avatarIcon.attrObj?.width).toBe(40);
      expect(avatarIcon.attrObj?.height).toBe(40);
      expect(avatarIcon.attrObj?.fill).toBe('#666666');
      expect(avatarIcon.attrObj?.opacity).toBe(0.9);
    });
  });

  describe('错误处理', () => {
    it('✅ 正常使用时不应该抛出异常', () => {
      expect(() => {
        const normalUse = new TdUserSvg();
        normalUse.className;
        normalUse.childNodes;
        normalUse.props;
      }).not.toThrow();
    });

    it('✅ 访问不存在的属性应该返回 undefined', () => {
      const nonExistent = (svg as any).nonExistentProperty;
      expect(nonExistent).toBeUndefined();
    });

    it('✅ 不应该修改传入的 props 对象', () => {
      const originalProps = { width: 32, height: 32 };
      const propsCopy = { ...originalProps };

      new TdUserSvg(originalProps);

      expect(originalProps).toEqual(propsCopy);
    });
  });
});

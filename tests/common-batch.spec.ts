/**
 * @file Common 分类批量测试
 * @description 批量测试 Common 分类下的多个 SVG 组件
 * @version v0.4.0
 * @date 2026-03-18
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { TdAddSvg } from '../src/lib/common/add';
import { TdCloseSvg } from '../src/lib/common/close';
import { TdUserSvg } from '../src/lib/common/user';
import { TdSearchSvg } from '../src/lib/common/search';
import { TdCheckSvg } from '../src/lib/common/check';

describe('Common 分类 - 批量测试', () => {
  // 定义要测试的组件列表
  const components = [
    { name: 'TdAddSvg', ComponentClass: TdAddSvg },
    { name: 'TdCloseSvg', ComponentClass: TdCloseSvg },
    { name: 'TdUserSvg', ComponentClass: TdUserSvg },
    { name: 'TdSearchSvg', ComponentClass: TdSearchSvg },
    { name: 'TdCheckSvg', ComponentClass: TdCheckSvg }
  ];

  describe.each(components)('$name', ({ ComponentClass, name }) => {
    let svg: any;

    beforeEach(() => {
      svg = new ComponentClass();
    });

    it('✅ 应该正确实例化', () => {
      expect(svg).toBeDefined();
      expect(svg instanceof ComponentClass).toBe(true);
    });

    it('✅ 应该有正确的 className', () => {
      expect(svg.className).toBe(name);
    });

    it('✅ 应该有 childNodes 数组', () => {
      expect(Array.isArray(svg.childNodes)).toBe(true);
      expect(svg.childNodes.length).toBeGreaterThanOrEqual(1);
    });

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

    it('✅ 应该接受自定义尺寸', () => {
      const customSvg = new ComponentClass({ attrObj: { width: 32, height: 32 } });
      expect(customSvg.attrObj?.width).toBe(32);
      expect(customSvg.attrObj?.height).toBe(32);
    });

    it('✅ 应该接受自定义颜色', () => {
      const customSvg = new ComponentClass({ attrObj: { fill: 'red' } });
      expect(customSvg.attrObj?.fill).toBe('red');
    });
  });

  describe('组件一致性测试', () => {
    it('✅ 所有组件都应该有相同的基类结构', () => {
      const instances = components.map(({ ComponentClass }) => new ComponentClass());

      instances.forEach(instance => {
        expect(instance).toHaveProperty('className');
        expect(instance).toHaveProperty('childNodes');
        expect(instance).toHaveProperty('attrObj');
        expect(instance).toHaveProperty('addChild');
      });
    });

    it('✅ 所有组件的默认宽度都应该是 24', () => {
      const instances = components.map(({ ComponentClass }) => new ComponentClass());

      instances.forEach(instance => {
        expect(instance.attrObj?.width).toBe(24);
      });
    });

    it('✅ 所有组件的默认高度都应该是 24', () => {
      const instances = components.map(({ ComponentClass }) => new ComponentClass());

      instances.forEach(instance => {
        expect(instance.attrObj?.height).toBe(24);
      });
    });

    it('✅ 所有组件的 viewBox 都应该是 0 0 1024 1024', () => {
      const instances = components.map(({ ComponentClass }) => new ComponentClass());

      instances.forEach(instance => {
        const viewBox = instance.attrObj?.['viewBox'];
        expect(viewBox).toBe('0 0 1024 1024');
      });
    });

    it('✅ 所有组件都应该使用 currentColor 填充', () => {
      const instances = components.map(({ ComponentClass }) => new ComponentClass());

      instances.forEach(instance => {
        const path = instance.childNodes[0];
        expect(path.attrObj?.fill).toBe('currentColor');
      });
    });

    it('✅ 所有组件都应该有有效的 Path 数据', () => {
      const instances = components.map(({ ComponentClass }) => new ComponentClass());

      instances.forEach(instance => {
        const path = instance.childNodes[0];
        const data = path.pathData;

        expect(data).toBeDefined();
        expect(typeof data).toBe('string');
        expect(data.length).toBeGreaterThan(0);
        expect(data).toMatch(/^M/);
      });
    });
  });

  describe('性能对比测试', () => {
    it('✅ 所有组件的实例化性能应该相近', () => {
      const iterations = 100;
      const results: Record<string, number> = {};

      components.forEach(({ ComponentClass, name }) => {
        const start = performance.now();

        for (let i = 0; i < iterations; i++) {
          new ComponentClass();
        }

        const duration = performance.now() - start;
        results[name] = duration;
      });

      // 所有组件的 100 次实例化都应该小于 100ms
      Object.values(results).forEach(duration => {
        expect(duration).toBeLessThan(100);
      });
    });
  });

  describe('内存使用测试', () => {
    it('✅ 所有组件的内存占用应该合理', () => {
      const beforeMemory = process.memoryUsage();
      const instances: any[] = [];

      components.forEach(({ ComponentClass }) => {
        for (let i = 0; i < 20; i++) {
          instances.push(new ComponentClass());
        }
      });

      const afterMemory = process.memoryUsage();
      const memoryDiff = afterMemory.heapUsed - beforeMemory.heapUsed;

      // 100 个实例的内存增长应小于 10MB
      expect(memoryDiff).toBeLessThan(10 * 1024 * 1024);

      // 清理引用
      instances.length = 0;
    });
  });
});

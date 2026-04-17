# Mock 与 Stub 规范

## 📋 概述

本文档定义了 TypeDOM SVG 组件库中 Mock 数据和 Stub 的使用规范、最佳实践。

**最后更新**: 2026-03-18  
**适用版本**: v0.4.0+

---

## 🎯 Mock vs Stub

### 定义对比

| 类型     | 用途         | 特点             | 使用场景               |
| -------- | ------------ | ---------------- | ---------------------- |
| **Mock** | 模拟外部依赖 | 验证交互和行为   | API 调用、数据库操作   |
| **Stub** | 替换真实实现 | 提供可控的返回值 | 复杂逻辑、耗时操作     |
| **Fake** | 简化实现     | 功能完整但简化   | 内存数据库、测试服务器 |

### TypeDOM SVG 中的使用

```typescript
// Mock: 模拟 props
const mockProps = {
  width: 24,
  height: 24,
  fill: "currentColor",
};
const svg = new TdIconSvg(mockProps);

// Stub: 替换方法实现
const stubMethod = vi.fn().mockReturnValue(42);

// Fake: 简化的组件实例
const fakeComponent = {
  className: "FakeComponent",
  childNodes: [],
  addChild: vi.fn(),
};
```

---

## 🔧 Vitest Mock API

### 基础 Mock

```typescript
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("Basic Mocking", () => {
  // 1. 函数 Mock
  it("mocks a function", () => {
    const mockFn = vi.fn();
    mockFn("hello");

    expect(mockFn).toHaveBeenCalledWith("hello");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  // 2. 带返回值的 Mock
  it("mocks with return value", () => {
    const mockFn = vi.fn().mockReturnValue(42);
    expect(mockFn()).toBe(42);
    expect(mockFn()).toBe(42); // Always returns 42
  });

  // 3. 链式调用 Mock
  it("mocks chained calls", () => {
    const mockFn = vi.fn().mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValue(3);

    expect(mockFn()).toBe(1);
    expect(mockFn()).toBe(2);
    expect(mockFn()).toBe(3);
  });

  // 4. 抛出错误的 Mock
  it("mocks error throwing", () => {
    const mockFn = vi.fn().mockImplementation(() => {
      throw new Error("Test error");
    });

    expect(() => mockFn()).toThrow("Test error");
  });
});
```

### Module Mocking

```typescript
import { vi, beforeEach } from "vitest";

// Mock entire module
vi.mock("@type-dom/framework", () => ({
  TypeSvgSvg: class MockTypeSvgSvg {
    constructor() {}
    addChild = vi.fn();
    getAttribute = vi.fn();
  },
  SvgPath: class MockSvgPath {
    constructor() {}
    setData = vi.fn();
  },
}));

// Hoist mock declaration
vi.hoisted(() => {
  return {
    mockFunction: vi.fn(),
  };
});
```

---

## 🎭 Mock 数据模式

### 1. Props Mock

```typescript
import { TdUserSvg } from "../src/lib/common/user";

describe("Props Mocking", () => {
  // 标准 Props Mock
  const createMockProps = (overrides = {}) => ({
    width: 24,
    height: 24,
    fill: "currentColor",
    opacity: 1,
    ...overrides,
  });

  it("uses mock props", () => {
    const mockProps = createMockProps({ width: 32 });
    const svg = new TdUserSvg(mockProps);

    expect(svg.props.width).toBe(32);
    expect(svg.props.height).toBe(24); // Default
  });

  it("uses minimal mock props", () => {
    const minimalProps = createMockProps({ width: 48 });
    const svg = new TdUserSvg(minimalProps);

    expect(svg.props.width).toBe(48);
  });
});
```

### 2. Path Data Mock

```typescript
describe("Path Data Mocking", () => {
  const MOCK_PATH_DATA = "M10 10 L90 10 L90 90 L10 90 Z";

  const createMockPath = (data = MOCK_PATH_DATA) => ({
    setData: vi.fn(),
    getData: vi.fn().mockReturnValue(data),
    attrObj: {
      fill: "currentColor",
      stroke: "none",
    },
  });

  it("uses mock path data", () => {
    const mockPath = createMockPath();
    expect(mockPath.getData()).toBe(MOCK_PATH_DATA);
  });

  it("customizes mock path", () => {
    const customData = "M0 0 L100 100";
    const mockPath = createMockPath(customData);
    expect(mockPath.getData()).toBe(customData);
  });
});
```

### 3. Signal Mock

```typescript
import { signal, computed } from "@type-dom/signals";

describe("Signal Mocking", () => {
  // Mock reactive signal
  const createMockSignal = <T>(initialValue: T) => {
    let value = initialValue;
    return {
      get: vi.fn(() => value),
      set: vi.fn((newValue: T) => {
        value = newValue;
      }),
      peek: vi.fn(() => value),
    };
  };

  it("mocks signal behavior", () => {
    const mockSignal = createMockSignal(24);

    expect(mockSignal.get()).toBe(24);
    mockSignal.set(48);
    expect(mockSignal.get()).toBe(48);
    expect(mockSignal.set).toHaveBeenCalledWith(48);
  });

  it("mocks computed signal", () => {
    const widthSignal = createMockSignal(24);
    const doubleWidth = {
      get: vi.fn(() => widthSignal.get() * 2),
    };

    expect(doubleWidth.get()).toBe(48);
  });
});
```

---

## 🎪 Stub 实现模式

### 1. 方法 Stub

```typescript
import { TdComplexSvg } from "../src/lib/common/complex";

describe("Method Stubbing", () => {
  it("stubs complex method", () => {
    const svg = new TdComplexSvg();

    // Replace implementation
    svg.complexCalculation = vi.fn().mockReturnValue(100);

    expect(svg.complexCalculation()).toBe(100);
    expect(svg.complexCalculation).toHaveBeenCalledTimes(1);
  });

  it("stubs async method", async () => {
    const svg = new TdComplexSvg();

    svg.loadData = vi.fn().mockResolvedValue({
      success: true,
      data: [],
    });

    const result = await svg.loadData();
    expect(result.success).toBe(true);
  });

  it("stubs method to throw", () => {
    const svg = new TdComplexSvg();

    svg.riskyOperation = vi.fn().mockImplementation(() => {
      throw new Error("Simulated failure");
    });

    expect(() => svg.riskyOperation()).toThrow();
  });
});
```

### 2. 组件 Stub

```typescript
describe("Component Stubbing", () => {
  // Full component stub
  const createSvgStub = (overrides = {}) => ({
    className: "StubSvg",
    childNodes: [],
    props: {
      width: 24,
      height: 24,
      fill: "currentColor",
    },
    addChild: vi.fn(),
    removeChild: vi.fn(),
    getAttribute: vi.fn().mockReturnValue(""),
    setAttribute: vi.fn(),
    destroy: vi.fn(),
    ...overrides,
  });

  it("uses component stub", () => {
    const stubSvg = createSvgStub({ className: "CustomStub" });

    expect(stubSvg.className).toBe("CustomStub");
    expect(stubSvg.addChild).toBeDefined();
  });

  it("interacts with stub", () => {
    const stubSvg = createSvgStub();
    const childStub = createSvgStub();

    stubSvg.addChild(childStub);

    expect(stubSvg.addChild).toHaveBeenCalledWith(childStub);
    expect(stubSvg.childNodes.length).toBe(0); // Stub doesn't implement logic
  });
});
```

### 3. DOM API Stub

```typescript
describe("DOM API Stubbing", () => {
  // Stub document methods
  const documentStub = {
    createElementNS: vi.fn().mockReturnValue({
      setAttribute: vi.fn(),
      getAttribute: vi.fn(),
      appendChild: vi.fn(),
    }),
    createElement: vi.fn(),
    querySelector: vi.fn(),
  };

  it("uses DOM stub", () => {
    const element = documentStub.createElementNS("http://www.w3.org/2000/svg", "svg");
    element.setAttribute("viewBox", "0 0 100 100");

    expect(documentStub.createElementNS).toHaveBeenCalled();
    expect(element.setAttribute).toHaveBeenCalledWith("viewBox", "0 0 100 100");
  });
});
```

---

## 🏗️ Factory 模式

### Object Factories

```typescript
// tests/factories/svg-factory.ts

export class SvgFactory {
  static createSvg(overrides = {}) {
    return {
      className: "FactorySvg",
      childNodes: [],
      props: {
        width: 24,
        height: 24,
        fill: "currentColor",
      },
      addChild: vi.fn(),
      ...overrides,
    };
  }

  static createPath(data = "M0 0 L10 10") {
    return {
      setData: vi.fn(),
      getData: vi.fn().mockReturnValue(data),
      attrObj: {
        fill: "currentColor",
        stroke: "none",
      },
    };
  }

  static createProps(overrides = {}) {
    return {
      width: 24,
      height: 24,
      fill: "currentColor",
      opacity: 1,
      transform: "",
      ...overrides,
    };
  }
}

// Usage in tests
import { SvgFactory } from "../factories/svg-factory";

describe("Using Factory", () => {
  it("creates svg with factory", () => {
    const svg = SvgFactory.createSvg({ className: "CustomSvg" });
    expect(svg.className).toBe("CustomSvg");
  });

  it("creates path with factory", () => {
    const path = SvgFactory.createPath("M10 10 L20 20");
    expect(path.getData()).toBe("M10 10 L20 20");
  });
});
```

### Builder Pattern

```typescript
// tests/builders/svg-builder.ts

export class SvgBuilder {
  private className = "BuiltSvg";
  private width = 24;
  private height = 24;
  private fill = "currentColor";
  private paths: any[] = [];

  withClassName(name: string): this {
    this.className = name;
    return this;
  }

  withSize(width: number, height: number): this {
    this.width = width;
    this.height = height;
    return this;
  }

  withFill(color: string): this {
    this.fill = color;
    return this;
  }

  withPath(path: any): this {
    this.paths.push(path);
    return this;
  }

  build(): any {
    return {
      className: this.className,
      childNodes: this.paths,
      props: {
        width: this.width,
        height: this.height,
        fill: this.fill,
      },
      addChild: vi.fn(),
      getAttribute: vi.fn(),
    };
  }
}

// Usage
import { SvgBuilder } from "../builders/svg-builder";

describe("Using Builder", () => {
  it("builds complex svg", () => {
    const svg = new SvgBuilder()
      .withClassName("ComplexSvg")
      .withSize(48, 48)
      .withFill("blue")
      .build();

    expect(svg.className).toBe("ComplexSvg");
    expect(svg.props.width).toBe(48);
    expect(svg.props.fill).toBe("blue");
  });
});
```

---

## 🎯 特定场景 Mock

### 1. Animation Mock

```typescript
describe("Animation Mocking", () => {
  const createAnimationMock = () => ({
    play: vi.fn(),
    pause: vi.fn(),
    cancel: vi.fn(),
    finish: vi.fn(),
    currentTime: 0,
    playbackRate: 1,
  });

  it("mocks animation", () => {
    const animation = createAnimationMock();
    animation.play();

    expect(animation.play).toHaveBeenCalled();
  });
});
```

### 2. Event Mock

```typescript
describe("Event Mocking", () => {
  const createClickEventMock = () => ({
    type: "click",
    target: null,
    currentTarget: null,
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
    clientX: 0,
    clientY: 0,
    button: 0,
  });

  it("mocks click event", () => {
    const event = createClickEventMock();
    event.clientX = 100;
    event.clientY = 200;

    expect(event.type).toBe("click");
    expect(event.clientX).toBe(100);
  });
});
```

### 3. Timer Mock

```typescript
describe("Timer Mocking", () => {
  it("mocks setTimeout", () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    setTimeout(callback, 1000);

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalled();

    vi.useRealTimers();
  });

  it("mocks requestAnimationFrame", () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    requestAnimationFrame(callback);

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(16); // ~60fps
    expect(callback).toHaveBeenCalled();

    vi.useRealTimers();
  });
});
```

---

## ⚠️ Mock 使用注意事项

### ✅ 推荐做法

```typescript
// 1. 明确 Mock 目的
it("mocks external dependency", () => {
  // Clear what we're mocking and why
  const mockApi = vi.fn().mockResolvedValue({ data: [] });
});

// 2. 保持 Mock 简单
const simpleMock = {
  method: vi.fn().mockReturnValue(42),
};

// 3. 清理 Mock
afterEach(() => {
  vi.clearAllMocks();
});

// 4. 使用工厂函数
const createMock = () => ({
  /* ... */
});
```

### ❌ 避免做法

```typescript
// 1. 过度 Mock
it("mocks everything", () => {
  const overMocked = {
    method1: vi.fn(),
    method2: vi.fn(),
    method3: vi.fn(),
    // ... 20 more methods
  };
  // Too complex!
});

// 2. Mock 实现过于复杂
const badMock = vi.fn().mockImplementation((x) => {
  if (x > 10) {
    return x * 2;
  } else if (x > 5) {
    return x + 10;
  } else {
    return x - 5;
  }
});
// Should test real code instead!

// 3. 忘记清理
beforeEach(() => {
  vi.spyOn(console, "log");
  // Missing: afterEach cleanup
});
```

---

## 🔍 Mock 验证技巧

### 验证调用

```typescript
describe("Mock Verification", () => {
  it("verifies call count", () => {
    const mockFn = vi.fn();
    mockFn();
    mockFn();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("verifies arguments", () => {
    const mockFn = vi.fn();
    mockFn("hello", 42);

    expect(mockFn).toHaveBeenCalledWith("hello", 42);
    expect(mockFn).toHaveBeenLastCalledWith("hello", 42);
  });

  it("verifies call order", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();

    mock1();
    mock2();

    expect(mock1).toHaveBeenCalledBefore(mock2);
  });

  it("verifies return values", () => {
    const mockFn = vi.fn().mockReturnValue(42);
    mockFn();

    expect(mockFn).toHaveReturnedWith(42);
  });
});
```

### Spy 使用

```typescript
import { vi, expect } from "vitest";

describe("Spy Usage", () => {
  it("spies on method", () => {
    const obj = {
      method: () => 42,
    };

    const spy = vi.spyOn(obj, "method");
    obj.method();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveReturnedWith(42);

    spy.mockRestore();
  });

  it("spies and changes implementation", () => {
    const obj = {
      method: () => "original",
    };

    vi.spyOn(obj, "method").mockImplementation(() => "mocked");

    expect(obj.method()).toBe("mocked");
  });
});
```

---

## 📚 相关文档

- [测试策略](测试策略.md) - 整体测试策略和覆盖率要求
- [单元测试指南](单元测试指南.md) - 详细单元测试编写规范
- [集成测试指南](集成测试指南.md) - 组件和服务集成测试
- [测试用例库](测试用例库.md) - 典型测试用例示例

---

**Version**: 1.0.0  
**Last Updated**: 2026-03-18  
**Author**: TypeDOM Team

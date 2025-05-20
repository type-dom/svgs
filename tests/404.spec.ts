import { describe, it, expect } from 'vitest';
import { Td404Svg } from '../src/lib/common/404';

describe('Td404Svg', () => {
  it('should work', () => {
    const svg404 = new Td404Svg();
    expect(svg404.className).toEqual('Td404Svg');
  });
});

import { Td404Svg } from '../common/404';
import { Division } from '@type-dom/framework';
describe('Td404Svg', () => {
  it('should work', () => {
    const div = new Division();
    const svg404 = new Td404Svg(div);
    expect(svg404.className).toEqual('Td404Svg');
  });
});

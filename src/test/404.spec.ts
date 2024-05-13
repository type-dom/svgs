import { Td404Svg } from '../lib/common/404';
import { Div } from '@type-dom/framework';
describe('Td404Svg', () => {
  it('should work', () => {
    const div = new Div();
    const svg404 = new Td404Svg({ parent: div });
    expect(svg404.className).toEqual('Td404Svg');
  });
});

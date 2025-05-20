import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTableStackRightFilledSvg extends TypeSvgSvg {
  className: 'FlTableStackRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTableStackRightFilledSvg';
    this.attr.addObj({
      name: 'FlTableStackRightFilledSvg',
      title: 'FlTableStackRightFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17 3.5C17 3.22386 16.7761 3 16.5 3C16.2239 3 16 3.22386 16 3.5L16 16.5C16 16.7761 16.2239 17 16.5 17C16.7761 17 17 16.7761 17 16.5L17 3.5ZM3 15L3 13H7V17H5C3.89543 17 3 16.1046 3 15ZM8 17V13H12V16.5C12 16.7761 11.7761 17 11.5 17H8ZM8 12H12V8L8 8L8 12ZM3 8L3 12H7L7 8H3ZM12 7L8 7V3L11.5 3C11.7761 3 12 3.22386 12 3.5L12 7ZM3 7L3 5C3 3.89543 3.89543 3 5 3L7 3V7H3Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}

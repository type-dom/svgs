import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLayoutColumnThreeFocusRightFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutColumnThreeFocusRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLayoutColumnThreeFocusRightFilledSvg';
    this.attr.addObj({
      name: 'FlLayoutColumnThreeFocusRightFilledSvg',
      title: 'FlLayoutColumnThreeFocusRightFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17 6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6ZM8 16V4H12V16H8ZM7 16H6C4.89543 16 4 15.1046 4 14V6C4 4.89543 4.89543 4 6 4H7V16Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}

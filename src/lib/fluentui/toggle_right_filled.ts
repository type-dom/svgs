import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlToggleRightFilledSvg extends TypeSvgSvg {
  className: 'FlToggleRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlToggleRightFilledSvg';
    this.attr.addObj({
      name: 'FlToggleRightFilledSvg',
      title: 'FlToggleRightFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 6C3.79086 6 2 7.79086 2 10C2 12.2091 3.79086 14 6 14H14C16.2091 14 18 12.2091 18 10C18 7.79086 16.2091 6 14 6H6ZM14 12C12.8954 12 12 11.1046 12 10C12 8.89543 12.8954 8 14 8C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}

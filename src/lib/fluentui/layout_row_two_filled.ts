import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLayoutRowTwoFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutRowTwoFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLayoutRowTwoFilledSvg';
    this.attr.addObj({
      name: 'FlLayoutRowTwoFilledSvg',
      title: 'FlLayoutRowTwoFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V9.5H3V6ZM3 10.5V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V10.5H3Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}

import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLayoutRowFourFocusCenterTopFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutRowFourFocusCenterTopFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLayoutRowFourFocusCenterTopFilledSvg';
    this.attr.addObj({
      name: 'FlLayoutRowFourFocusCenterTopFilledSvg',
      title: 'FlLayoutRowFourFocusCenterTopFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M14 3C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6C3 4.34315 4.34315 3 6 3H14ZM16 6C16 4.89543 15.1046 4 14 4H6C4.89543 4 4 4.89543 4 6V7H16V6ZM16 10H4V12.5H16V10ZM4 14C4 15.1046 4.89543 16 6 16H14C15.1046 16 16 15.1046 16 14V13.5H4V14Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}

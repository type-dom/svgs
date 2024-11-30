import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPanelLeftFocusRightFilledSvg extends TypeSvgSvg {
  className: 'FlPanelLeftFocusRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlPanelLeftFocusRightFilledSvg';
    this.attr.addObj({
      name: 'FlPanelLeftFocusRightFilledSvg',
      title: 'FlPanelLeftFocusRightFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M16 16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4L4 4C2.89543 4 2 4.89543 2 6L2 14C2 15.1046 2.89543 16 4 16L16 16ZM7 5L7 15L4 15C3.44772 15 3 14.5523 3 14L3 6C3 5.44771 3.44772 5 4 5L7 5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}

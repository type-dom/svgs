import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLayoutColumnTwoSplitRightFocusLeftFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutColumnTwoSplitRightFocusLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLayoutColumnTwoSplitRightFocusLeftFilledSvg';
    this.attr.addObj({
      name: 'FlLayoutColumnTwoSplitRightFocusLeftFilledSvg',
      title: 'FlLayoutColumnTwoSplitRightFocusLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM10 4V9.5H16V6C16 4.89543 15.1046 4 14 4H10ZM10 10.5V16H14C15.1046 16 16 15.1046 16 14V10.5H10Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}

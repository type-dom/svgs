import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlLayoutRowTwoSplitBottomFocusTopFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutRowTwoSplitBottomFocusTopFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlLayoutRowTwoSplitBottomFocusTopFilledSvg';
   addAttrObj(this, {
      name: 'FlLayoutRowTwoSplitBottomFocusTopFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM16 10H10.5V16H14C15.1046 16 16 15.1046 16 14V10ZM9.5 10H4V14C4 15.1046 4.89543 16 6 16H9.5V10Z',
    );
    this.addChild(path0);
  }
}

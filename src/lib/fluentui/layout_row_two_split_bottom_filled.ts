import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlLayoutRowTwoSplitBottomFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutRowTwoSplitBottomFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlLayoutRowTwoSplitBottomFilledSvg';
   addAttrObj(this, {
      name: 'FlLayoutRowTwoSplitBottomFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 3C4.34315 3 3 4.34315 3 6V9.5H17V6C17 4.34315 15.6569 3 14 3H6ZM17 10.5H10.5V17H14C15.6569 17 17 15.6569 17 14V10.5ZM9.5 10.5H3V14C3 15.6569 4.34315 17 6 17H9.5V10.5Z',
    );
    this.addChild(path0);
  }
}

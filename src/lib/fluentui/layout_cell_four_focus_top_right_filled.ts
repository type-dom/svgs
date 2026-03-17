import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlLayoutCellFourFocusTopRightFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutCellFourFocusTopRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlLayoutCellFourFocusTopRightFilledSvg';
   addAttrObj(this, {
      name: 'FlLayoutCellFourFocusTopRightFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6ZM4 6C4 4.89543 4.89543 4 6 4H9.5V9.5H4V6ZM4 10.5H9.5V16H6C4.89543 16 4 15.1046 4 14V10.5ZM16 10.5V14C16 15.1046 15.1046 16 14 16H10.5V10.5H16Z',
    );
    this.addChild(path0);
  }
}

import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlLayoutRowFourFocusBottomFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutRowFourFocusBottomFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlLayoutRowFourFocusBottomFilledSvg';
   addAttrObj(this, {
      name: 'FlLayoutRowFourFocusBottomFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM6 4C4.89543 4 4 4.89543 4 6V6.5H16V6C16 4.89543 15.1046 4 14 4H6ZM16 7.5H4V10H16V7.5ZM16 13.5V11H4V13.5H16Z',
    );
    this.addChild(path0);
  }
}

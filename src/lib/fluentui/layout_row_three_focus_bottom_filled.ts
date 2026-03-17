import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlLayoutRowThreeFocusBottomFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutRowThreeFocusBottomFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlLayoutRowThreeFocusBottomFilledSvg';
   addAttrObj(this, {
      name: 'FlLayoutRowThreeFocusBottomFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 17C4.34315 17 3 15.6569 3 14V6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6ZM16 8H4V12H16V8ZM16 7V6C16 4.89543 15.1046 4 14 4H6C4.89543 4 4 4.89543 4 6V7H16Z',
    );
    this.addChild(path0);
  }
}

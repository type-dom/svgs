import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlLayoutColumnTwoFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutColumnTwoFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlLayoutColumnTwoFilledSvg';
   addAttrObj(this, {
      name: 'FlLayoutColumnTwoFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10.5 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H10.5V17ZM9.5 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H9.5V3Z',
    );
    this.addChild(path0);
  }
}

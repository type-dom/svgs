import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlLayoutColumnFourRegularSvg extends TypeSvgSvg {
  className: 'FlLayoutColumnFourRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlLayoutColumnFourRegularSvg';
   addAttrObj(this, {
      name: 'FlLayoutColumnFourRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6ZM4 6C4 4.89543 4.89543 4 6 4L6 16C4.89543 16 4 15.1046 4 14V6ZM10.5 16V4H13V16H10.5ZM9.5 16H7V4H9.5V16ZM16 14C16 15.1046 15.1046 16 14 16V4C15.1046 4 16 4.89543 16 6V14Z',
    );
    this.addChild(path0);
  }
}

import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlAlignSpaceAroundHorizontalFilledSvg extends TypeSvgSvg {
  className: 'FlAlignSpaceAroundHorizontalFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlAlignSpaceAroundHorizontalFilledSvg';
   addAttrObj(this, {
      name: 'FlAlignSpaceAroundHorizontalFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 4C4.89543 4 4 4.89543 4 6V7C4 8.10457 4.89543 9 6 9H14C15.1046 9 16 8.10457 16 7V6C16 4.89543 15.1046 4 14 4H6ZM6 11C4.89543 11 4 11.8954 4 13V14C4 15.1046 4.89543 16 6 16H14C15.1046 16 16 15.1046 16 14V13C16 11.8954 15.1046 11 14 11H6Z',
    );
    this.addChild(path0);
  }
}

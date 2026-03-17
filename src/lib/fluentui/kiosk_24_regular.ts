import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlKiosk24RegularSvg extends TypeSvgSvg {
  className: 'FlKiosk24RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlKiosk24RegularSvg';
   addAttrObj(this, {
      name: 'FlKiosk24RegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 24 24',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 4.25C4 3.00736 5.00736 2 6.25 2H17.75C18.9926 2 20 3.00736 20 4.25V10.75C20 11.9926 18.9926 13 17.75 13H14.5V20.5H16.25C16.6642 20.5 17 20.8358 17 21.25C17 21.6642 16.6642 22 16.25 22H7.75C7.33579 22 7 21.6642 7 21.25C7 20.8358 7.33579 20.5 7.75 20.5H9.5V13H6.25C5.00736 13 4 11.9926 4 10.75V4.25ZM11 13V20.5H13V13H11ZM6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V10.75C5.5 11.1642 5.83579 11.5 6.25 11.5H17.75C18.1642 11.5 18.5 11.1642 18.5 10.75V4.25C18.5 3.83579 18.1642 3.5 17.75 3.5H6.25Z',
    );
    this.addChild(path0);
  }
}

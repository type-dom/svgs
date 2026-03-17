import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlKiosk24FilledSvg extends TypeSvgSvg {
  className: 'FlKiosk24FilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlKiosk24FilledSvg';
   addAttrObj(this, {
      name: 'FlKiosk24FilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 24 24',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6.25 2C5.00736 2 4 3.00736 4 4.25V10.75C4 11.9926 5.00736 13 6.25 13H9.5V20.5H7.75C7.33579 20.5 7 20.8358 7 21.25C7 21.6642 7.33579 22 7.75 22H16.25C16.6642 22 17 21.6642 17 21.25C17 20.8358 16.6642 20.5 16.25 20.5H14.5V13H17.75C18.9926 13 20 11.9926 20 10.75V4.25C20 3.00736 18.9926 2 17.75 2H6.25ZM11 20.5V13H13V20.5H11Z',
    );
    this.addChild(path0);
  }
}

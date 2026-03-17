import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlPortUsbCFilledSvg extends TypeSvgSvg {
  className: 'FlPortUsbCFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlPortUsbCFilledSvg';
   addAttrObj(this, {
      name: 'FlPortUsbCFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 10C4.5 8.89543 5.39543 8 6.5 8H13.5C14.6046 8 15.5 8.89543 15.5 10C15.5 11.1046 14.6046 12 13.5 12H6.5C5.39543 12 4.5 11.1046 4.5 10Z',
    );
    this.addChild(path0);
  }
}

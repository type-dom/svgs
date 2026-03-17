import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlPanelRightFilledSvg extends TypeSvgSvg {
  className: 'FlPanelRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlPanelRightFilledSvg';
   addAttrObj(this, {
      name: 'FlPanelRightFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M15 3C16.6562 3 18 4.34314 18 6V13C18 14.6569 16.6562 16 15 16H5C3.34375 16 2 14.6569 2 13V6C2 4.34314 3.34375 3 5 3H15ZM5 4C3.89453 4 3 4.89539 3 6V13C3 14.1046 3.89453 15 5 15H11.5V4H5Z',
    );
    this.addChild(path0);
  }
}

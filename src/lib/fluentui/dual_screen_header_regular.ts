import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlDualScreenHeaderRegularSvg extends TypeSvgSvg {
  className: 'FlDualScreenHeaderRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlDualScreenHeaderRegularSvg';
   addAttrObj(this, {
      name: 'FlDualScreenHeaderRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6ZM9.5 15V7H3V14C3 14.5523 3.44772 15 4 15H9.5ZM10.5 7V15H16C16.5523 15 17 14.5523 17 14V7H10.5Z',
    );
    this.addChild(path0);
  }
}

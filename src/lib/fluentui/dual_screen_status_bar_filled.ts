import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlDualScreenStatusBarFilledSvg extends TypeSvgSvg {
  className: 'FlDualScreenStatusBarFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlDualScreenStatusBarFilledSvg';
   addAttrObj(this, {
      name: 'FlDualScreenStatusBarFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M16 16H10.5V4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16ZM4 4H9.5V16H4C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4ZM12.5 6C12.2239 6 12 6.22386 12 6.5C12 6.77614 12.2239 7 12.5 7H16C16.2761 7 16.5 6.77614 16.5 6.5C16.5 6.22386 16.2761 6 16 6H12.5Z',
    );
    this.addChild(path0);
  }
}

import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlTableSimpleRegularSvg extends TypeSvgSvg {
  className: 'FlTableSimpleRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlTableSimpleRegularSvg';
   addAttrObj(this, {
      name: 'FlTableSimpleRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 5.5C3 4.11929 4.11929 3 5.5 3H14.5C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5ZM4 10.5V14.5C4 15.3284 4.67157 16 5.5 16H9.5V10.5H4ZM9.5 9.5V4H5.5C4.67157 4 4 4.67157 4 5.5V9.5H9.5ZM10.5 10.5V16H14.5C15.3284 16 16 15.3284 16 14.5V10.5H10.5ZM16 9.5V5.5C16 4.67157 15.3284 4 14.5 4H10.5V9.5H16Z',
    );
    this.addChild(path0);
  }
}

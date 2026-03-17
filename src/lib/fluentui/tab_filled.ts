import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlTabFilledSvg extends TypeSvgSvg {
  className: 'FlTabFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlTabFilledSvg';
   addAttrObj(this, {
      name: 'FlTabFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 5.5C3 4.11929 4.11929 3 5.5 3H14.5C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5ZM5.5 4.5C4.94772 4.5 4.5 4.94772 4.5 5.5V14.5C4.5 15.0523 4.94772 15.5 5.5 15.5H14.5C15.0523 15.5 15.5 15.0523 15.5 14.5V5.5C15.5 4.94772 15.0523 4.5 14.5 4.5H5.5Z',
    );
    this.addChild(path0);
  }
}

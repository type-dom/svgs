import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlShapeUnionFilledSvg extends TypeSvgSvg {
  className: 'FlShapeUnionFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlShapeUnionFilledSvg';
   addAttrObj(this, {
      name: 'FlShapeUnionFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 2C3.11929 2 2 3.11929 2 4.5V10.5C2 11.8807 3.11929 13 4.5 13H7V15.5C7 16.8807 8.11929 18 9.5 18H15.5C16.8807 18 18 16.8807 18 15.5V9.5C18 8.11929 16.8807 7 15.5 7H13V4.5C13 3.11929 11.8807 2 10.5 2H4.5Z',
    );
    this.addChild(path0);
  }
}

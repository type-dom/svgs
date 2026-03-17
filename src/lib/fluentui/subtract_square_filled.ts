import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlSubtractSquareFilledSvg extends TypeSvgSvg {
  className: 'FlSubtractSquareFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlSubtractSquareFilledSvg';
   addAttrObj(this, {
      name: 'FlSubtractSquareFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6ZM6.5 9.5H13.5C13.7761 9.5 14 9.72386 14 10C14 10.2761 13.7761 10.5 13.5 10.5H6.5C6.22386 10.5 6 10.2761 6 10C6 9.72386 6.22386 9.5 6.5 9.5Z',
    );
    this.addChild(path0);
  }
}

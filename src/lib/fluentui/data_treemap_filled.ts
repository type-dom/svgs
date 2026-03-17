import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlDataTreemapFilledSvg extends TypeSvgSvg {
  className: 'FlDataTreemapFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlDataTreemapFilledSvg';
   addAttrObj(this, {
      name: 'FlDataTreemapFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7V3ZM8 17H14C15.6569 17 17 15.6569 17 14V13H8V17ZM17 12V6C17 4.34315 15.6569 3 14 3H8V12H17Z',
    );
    this.addChild(path0);
  }
}

import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlLayoutRowFourFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutRowFourFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlLayoutRowFourFilledSvg';
   addAttrObj(this, {
      name: 'FlLayoutRowFourFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14H3ZM17 13V10.5H3V13H17ZM17 7V9.5H3V7H17ZM17 6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6L17 6Z',
    );
    this.addChild(path0);
  }
}

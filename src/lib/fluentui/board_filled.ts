import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlBoardFilledSvg extends TypeSvgSvg {
  className: 'FlBoardFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlBoardFilledSvg';
   addAttrObj(this, {
      name: 'FlBoardFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M9.5 3V7H3V6C3 4.34315 4.34315 3 6 3H9.5ZM10.5 3V12H17V6C17 4.34315 15.6569 3 14 3H10.5ZM17 13H10.5V17H14C15.6569 17 17 15.6569 17 14V13ZM9.5 17V8H3V14C3 15.6569 4.34315 17 6 17H9.5Z',
    );
    this.addChild(path0);
  }
}

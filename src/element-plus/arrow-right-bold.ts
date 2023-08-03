import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElArrowRightBoldSvg extends TypeSvgSvg {
  className: 'ElArrowRightBoldSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElArrowRightBoldSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z',
    );
    this.childNodes.push(path0);
  }
}

import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdMinusSvg extends TypeSvgSvg {
  className: 'TdMinusSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdMinusSvg';
    this.addAttrObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M3 7h10v2H3z',
    );
    this.childNodes.push(path0);
  }
}

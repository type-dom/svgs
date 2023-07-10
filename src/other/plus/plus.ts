import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class PlusSvg extends TypeSvgSvg {
  className: 'PlusSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'PlusSvg';
    this.addAttrObj({
      viewBox: '0 0 16 16',
      name: 'plus-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M7 7V3h2v4h4v2H9v4H7V9H3V7h4z');
    this.childNodes = [path];
  }
}

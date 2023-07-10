import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElCaretRightSvg extends TypeSvgSvg {
  className: 'ElCaretRightSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCaretRightSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M384 192v640l384-320.064z');
    this.childNodes.push(path0);
  }
}

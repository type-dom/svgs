import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElCaretBottomSvg extends TypeSvgSvg {
  className: 'ElCaretBottomSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCaretBottomSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('m192 384 320 384 320-384z');
    this.childNodes.push(path0);
  }
}

import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElDCaretSvg extends TypeSvgSvg {
  className: 'ElDCaretSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElDCaretSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z');
    this.childNodes.push(path0);
  }
}

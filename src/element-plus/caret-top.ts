import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElCaretTopSvg extends TypeSvgSvg {
  className: 'ElCaretTopSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCaretTopSvg';
    this.addAttrObj({
      name: 'caret-top',
      title: 'caret-top'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M512 320 192 704h639.936z',
    );
    this.childNodes.push(path0);
  }
}

import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElCaretLeftSvg extends TypeSvgSvg {
  className: 'ElCaretLeftSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCaretLeftSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M672 192 288 511.936 672 832z',
    );
    this.childNodes.push(path0);
  }
}

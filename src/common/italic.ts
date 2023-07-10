import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdItalicSvg extends TypeSvgSvg {
  className: 'TdItalicSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdItalicSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('1843');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M768 85.792h-288a32 32 0 0 0 0 64h96.32l-230.336 704H256a32 32 0 0 0 0 64h288a32 32 0 0 0 0-64h-93.728l230.528-704H768a32 32 0 0 0 0-64z');
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData('1844');
    this.childNodes.push(path2);
  }
}

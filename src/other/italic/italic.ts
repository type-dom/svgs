import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class ItalicSvg extends TypeSvgSvg {
  className: 'ItalicSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ItalicSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'italic-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M768 85.792h-288a32 32 0 0 0 0 64h96.32l-230.336 704H256a32 32 0 0 0 0 64h288a32 32 0 0 0 0-64h-93.728l230.528-704H768a32 32 0 0 0 0-64z');
    this.childNodes = [path];
  }
}

import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdItalicSvg extends TypeSvgSvg {
  className: 'TdItalicSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdItalicSvg';
    this.addAttrObj({
      name: 'TdItalicSvg',
      title: 'TdItalicSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M768 85.792h-288a32 32 0 0 0 0 64h96.32l-230.336 704H256a32 32 0 0 0 0 64h288a32 32 0 0 0 0-64h-93.728l230.528-704H768a32 32 0 0 0 0-64z',
    );
    this.childNodes.push(path0);
  }
}

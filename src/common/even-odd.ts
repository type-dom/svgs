import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdEvenOddSvg extends TypeSvgSvg {
  className: 'TdEvenOddSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdEvenOddSvg';
    this.addAttrObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M2 3h4v1H2zm0 2h8v1H2z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M14 15h-1v-5H3v5H2V9h12v6z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M4 12h4v1H4zm0 2h8v1H4z',
    );
    this.childNodes.push(path2);
  }
}

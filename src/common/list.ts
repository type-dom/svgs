import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdListSvg extends TypeSvgSvg {
  className: 'TdListSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdListSvg';
    this.addAttrObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M13 0c.552 0 1 .48 1 1.071V13.93c0 .59-.448 1.07-1 1.07H3c-.552 0-1-.48-1-1.071V1.07C2 .48 2.448 0 3 0h10zm0 1H3v13h10V1z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M5 10v1H4v-1h1zm6 0v1H6v-1h5zM5 7v1H4V7h1zm6 0v1H6V7h5zM5 4v1H4V4h1zm6 0v1H6V4h5z',
    );
    this.childNodes.push(path1);
  }
}

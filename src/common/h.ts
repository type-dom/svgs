import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdHSvg extends TypeSvgSvg {
  className: 'TdHSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdHSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M3 14v-3a4 4 0 0 1 4-4h3V6H7a5 5 0 0 0-5 5v3h1zm7.016-11.282v7.543l4.29-3.73z');
    this.childNodes.push(path0);
  }
}

import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdBackSvg extends TypeSvgSvg {
  className: 'TdBackSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdBackSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M6 2.763v7.544l-4.29-3.73zM13 14v-3a4 4 0 0 0-4-4H6V6h3a5 5 0 0 1 5 5v3h-1z');
    this.childNodes.push(path0);
  }
}

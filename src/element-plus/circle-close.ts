import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElCircleCloseSvg extends TypeSvgSvg {
  className: 'ElCircleCloseSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCircleCloseSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z');
    this.childNodes.push(path1);
  }
}

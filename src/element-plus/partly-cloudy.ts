import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElPartlyCloudySvg extends TypeSvgSvg {
  className: 'ElPartlyCloudySvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElPartlyCloudySvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z');
    this.childNodes.push(path1);
  }
}
import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElPromotionSvg extends TypeSvgSvg {
  className: 'ElPromotionSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElPromotionSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'm64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z',
    );
    this.childNodes.push(path0);
  }
}

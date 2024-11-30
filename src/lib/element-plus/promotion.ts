import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElPromotionSvg extends TypeSvgSvg {
  className: 'ElPromotionSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElPromotionSvg';
    this.attr.addObj({
      name: 'ElPromotionSvg',
      title: 'ElPromotionSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'm64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}

import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElTrendChartsSvg extends TypeSvgSvg {
  className: 'ElTrendChartsSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElTrendChartsSvg';
    this.attr.addObj({
      name: 'ElTrendChartsSvg',
      title: 'ElTrendChartsSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}

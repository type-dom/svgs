import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElTrendChartsSvg extends TypeSvgSvg {
  className: 'ElTrendChartsSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElTrendChartsSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z',
    );
    this.childNodes.push(path0);
  }
}

import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdBoldTSvg extends TypeSvgSvg {
  className: 'TdBoldTSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdBoldTSvg';
    this.addAttrObj({
      name: 'bold-T',
      title: 'bold-T'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M277.12 241.92v172.8h114.56v-58.24h72.96v311.04H403.2v114.56h237.44v-114.56h-61.44V356.48h72.96v58.24h113.92v-172.8H277.12z',
    );
    this.childNodes.push(path0);
  }
}

import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdChartSvg extends TypeSvgSvg {
  className: 'TdChartSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdChartSvg';
    this.addAttrObj({
      name: 'TdChartSvg',
      title: 'TdChartSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M0 54.857h36.571V128H0V54.857zM91.429 27.43H128V128H91.429V27.429zM45.714 0h36.572v128H45.714V0z',
    );
    this.childNodes.push(path0);
  }
}

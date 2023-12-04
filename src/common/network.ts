import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdNetworkSvg extends TypeSvgSvg {
  className: 'TdNetworkSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdNetworkSvg';
    this.addAttrObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}

import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElTicketSvg extends TypeSvgSvg {
  className: 'ElTicketSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElTicketSvg';
    this.addAttrObj({
      name: 'ElTicketSvg',
      title: 'ElTicketSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z',
    );
    this.childNodes.push(path0);
  }
}

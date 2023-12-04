import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElTicketsSvg extends TypeSvgSvg {
  className: 'ElTicketsSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElTicketsSvg';
    this.addAttrObj({
      name: 'ElTicketsSvg',
      title: 'ElTicketsSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z',
    );
    this.childNodes.push(path0);
  }
}

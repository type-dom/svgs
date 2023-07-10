import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElStampSvg extends TypeSvgSvg {
  className: 'ElStampSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElStampSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z');
    this.childNodes.push(path0);
  }
}

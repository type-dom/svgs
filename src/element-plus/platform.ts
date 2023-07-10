import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElPlatformSvg extends TypeSvgSvg {
  className: 'ElPlatformSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElPlatformSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z');
    this.childNodes.push(path0);
  }
}

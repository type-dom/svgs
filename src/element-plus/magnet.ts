import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElMagnetSvg extends TypeSvgSvg {
  className: 'ElMagnetSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElMagnetSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z');
    this.childNodes.push(path0);
  }
}

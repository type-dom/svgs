import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElCoordinateSvg extends TypeSvgSvg {
  className: 'ElCoordinateSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCoordinateSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M480 512h64v320h-64z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z',
    );
    this.childNodes.push(path1);
  }
}

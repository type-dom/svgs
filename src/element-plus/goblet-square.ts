import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElGobletSquareSvg extends TypeSvgSvg {
  className: 'ElGobletSquareSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElGobletSquareSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z',
    );
    this.childNodes.push(path0);
  }
}

import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElGobletFullSvg extends TypeSvgSvg {
  className: 'ElGobletFullSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElGobletFullSvg';
    this.addAttrObj({
      name: 'ElGobletFullSvg',
      title: 'ElGobletFullSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z',
    );
    this.childNodes.push(path0);
  }
}

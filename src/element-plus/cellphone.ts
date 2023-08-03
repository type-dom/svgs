import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElCellphoneSvg extends TypeSvgSvg {
  className: 'ElCellphoneSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCellphoneSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z',
    );
    this.childNodes.push(path0);
  }
}

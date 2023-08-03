import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdAlignScatterSvg extends TypeSvgSvg {
  className: 'TdAlignScatterSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdAlignScatterSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      '1019',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M128 832h768v64H128z m0-256h768v64H128z m192-384v64h128V192z m-192 32L320 64v320zM576 192v64h128V192z m320 32L704 64v320z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      '1020',
    );
    this.childNodes.push(path2);
  }
}

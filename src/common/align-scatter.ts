import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdAlignScatterSvg extends TypeSvgSvg {
  className: 'TdAlignScatterSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdAlignScatterSvg';
    this.addAttrObj({
      name: 'TdAlignScatterSvg',
      title: 'TdAlignScatterSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M128 832h768v64H128z m0-256h768v64H128z m192-384v64h128V192z m-192 32L320 64v320zM576 192v64h128V192z m320 32L704 64v320z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

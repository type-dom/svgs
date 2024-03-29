import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElStampSvg extends TypeSvgSvg {
  className: 'ElStampSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElStampSvg';
    this.addAttrObj({
      name: 'ElStampSvg',
      title: 'ElStampSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

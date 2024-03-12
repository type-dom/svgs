import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElExpandSvg extends TypeSvgSvg {
  className: 'ElExpandSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElExpandSvg';
    this.addAttrObj({
      name: 'ElExpandSvg',
      title: 'ElExpandSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

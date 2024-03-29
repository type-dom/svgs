import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElGridSvg extends TypeSvgSvg {
  className: 'ElGridSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElGridSvg';
    this.addAttrObj({
      name: 'ElGridSvg',
      title: 'ElGridSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

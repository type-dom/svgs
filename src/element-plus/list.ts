import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElListSvg extends TypeSvgSvg {
  className: 'ElListSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElListSvg';
    this.addAttrObj({
      name: 'ElListSvg',
      title: 'ElListSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElUserSvg extends TypeSvgSvg {
  className: 'ElUserSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElUserSvg';
    this.addAttrObj({
      name: 'ElUserSvg',
      title: 'ElUserSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

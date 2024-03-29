import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElSelectSvg extends TypeSvgSvg {
  className: 'ElSelectSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElSelectSvg';
    this.addAttrObj({
      name: 'ElSelectSvg',
      title: 'ElSelectSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

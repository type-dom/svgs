import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElSemiSelectSvg extends TypeSvgSvg {
  className: 'ElSemiSelectSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElSemiSelectSvg';
    this.addAttrObj({
      name: 'ElSemiSelectSvg',
      title: 'ElSemiSelectSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

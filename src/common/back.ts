import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdBackSvg extends TypeSvgSvg {
  className: 'TdBackSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdBackSvg';
    this.addAttrObj({
      name: 'TdBackSvg',
      title: 'TdBackSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M6 2.763v7.544l-4.29-3.73zM13 14v-3a4 4 0 0 0-4-4H6V6h3a5 5 0 0 1 5 5v3h-1z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

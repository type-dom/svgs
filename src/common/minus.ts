import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdMinusSvg extends TypeSvgSvg {
  className: 'TdMinusSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdMinusSvg';
    this.addAttrObj({
      name: 'TdMinusSvg',
      title: 'TdMinusSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M3 7h10v2H3z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

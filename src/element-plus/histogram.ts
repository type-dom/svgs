import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElHistogramSvg extends TypeSvgSvg {
  className: 'ElHistogramSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElHistogramSvg';
    this.addAttrObj({
      name: 'ElHistogramSvg',
      title: 'ElHistogramSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

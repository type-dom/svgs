import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElHomeFilledSvg extends TypeSvgSvg {
  className: 'ElHomeFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElHomeFilledSvg';
    this.addAttrObj({
      name: 'ElHomeFilledSvg',
      title: 'ElHomeFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}

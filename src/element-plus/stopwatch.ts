import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElStopwatchSvg extends TypeSvgSvg {
  className: 'ElStopwatchSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElStopwatchSvg';
    this.addAttrObj({
      name: 'ElStopwatchSvg',
      title: 'ElStopwatchSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}

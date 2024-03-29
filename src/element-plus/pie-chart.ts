import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElPieChartSvg extends TypeSvgSvg {
  className: 'ElPieChartSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElPieChartSvg';
    this.addAttrObj({
      name: 'ElPieChartSvg',
      title: 'ElPieChartSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}

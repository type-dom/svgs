import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdEmailSvg extends TypeSvgSvg {
  className: 'TdEmailSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdEmailSvg';
    this.addAttrObj({
      name: 'TdEmailSvg',
      title: 'TdEmailSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 128 96',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M64.125 56.975L120.188.912A12.476 12.476 0 0 0 115.5 0h-103c-1.588 0-3.113.3-4.513.838l56.138 56.137z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M64.125 68.287l-62.3-62.3A12.42 12.42 0 0 0 0 12.5v71C0 90.4 5.6 96 12.5 96h103c6.9 0 12.5-5.6 12.5-12.5v-71a12.47 12.47 0 0 0-1.737-6.35L64.125 68.287z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
